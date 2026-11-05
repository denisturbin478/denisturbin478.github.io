// This index searches approved questions and aliases only. Answers pass through
// unchanged; there is no generated text, network request or persisted query.
const MAX_QUERY_LENGTH = 500;
const STOP_WORDS = new Set(`a an and are as at be been being but by can cant cannot could couldnt did do does doesnt dont for from had has have having how i if im in into is isnt it its me my of on or our please should so some than that the their them there these they this those to us was we were what when where which who why will with would you your youre
  site sites website websites project projects product products work works service services question questions help need needs want wants tell explain regarding about usually roughly really also just any company business online after before once later afterwards much many handle handles handled create creates creating make makes write writing use uses using used take takes get offer offers offered
  и а или но в во на по с со к ко у о об от до для из без как какой какая какие что чего чем кто где когда ли бы был была было были быть будет будут есть это этот эта эти того тому так тогда мне меня мы мой моя мое мои наш наши вы ваш ваша ваши вас вам ты твой тебя тебе пожалуйста можно можете может нужно нужен нужна нужны хочу хотелось вопрос вопросы помощь помочь помогите делаете работаете
  сайт сайта сайте сайтом сайты сайтов проект проекта проекте проекты проектов продукт продукта работы работа услуг услуги компанией компания бизнес сможет смогут после`.split(/\s+/u));

// Whole-token variants cover common EN/RU wording without substring stemming.
const VARIANTS = new Map();
for (const [key, words] of [
  ['design', 'design designs designing designed дизайн дизайна дизайном дизайну макет макеты макетов'],
  ['development', 'development develop develops developing developed build builds building built разработка разработку разработки разработать разрабатывать сборка собрать'],
  ['existing', 'existing already ready готовый готовые готового готовые существующий существующего уже'],
  ['prepare', 'prepare preparation preparing prepared brief briefing подготовить подготовка подготовиться подготовке бриф брифа'],
  ['redesign', 'redesign redesigning redesigned refresh refreshing revamp редизайн редизайна переделать переделка переработать'],
  ['edit', 'edit edits editing edited editable change changes changing changed modify modifying modifications редактировать редактирование редактирования редактируемый менять изменять правки'],
  ['update', 'update updates updating updated maintain maintenance manage managing обновить обновлять обновление управлять'],
  ['team', 'team teams employee employees staff команда команды'],
  ['self', 'own self myself yourself ourselves themselves самому самостоятельно сама сам сами'],
  ['copy', 'copy copywriting text texts текст тексты текста текстов копирайтинг'],
  ['content', 'content contents контент контента содержимое'],
  ['branding', 'brand brands branding identity бренд бренда брендинг идентичность'],
  ['duration', 'long longer time timing timeline timelines deadline deadlines duration schedule schedules weeks week days day quickly finish сколько долго время времени срок сроки сроков дедлайн дедлайны длительность продолжительность займет занимает занимать'],
  ['ai', 'ai artificial intelligence ии искусственный искусственного интеллект интеллекта'],
  ['unsure', 'unsure uncertain uncertainty undecided decide deciding определиться непонятно'],
  ['pricing', 'price prices pricing cost costs budget payment payments fee fees rates expensive dollars pounds стоимость стоимости стоимостью цена цены цен цену цене ценой прайс прайса стоит стоят стоить стоило сколькостоит бюджет оплата платить'],
  ['security', 'security secure privacy encryption authentication password passwords hacker hackers безопасность безопасный защита защищен защищенный конфиденциальность пароль пароли'],
]) {
  for (const word of words.split(' ')) VARIANTS.set(word, key);
}
const UNSUPPORTED_TOPICS = new Set(['pricing', 'security']);
const nonemptyString = value => typeof value === 'string' && value.trim().length > 0;

function normalize(value) {
  return value.normalize('NFKC').toLowerCase().replaceAll('ё', 'е')
    .replace(/[’'ʼ]/gu, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function meaningfulWords(normalized) {
  const words = normalized.split(' '), result = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index], next = words[index + 1];
    if ((word === 'not' && next === 'sure') || (word === 'dont' && next === 'know') ||
        (word === 'не' && ['знаю', 'уверен', 'уверена'].includes(next))) {
      result.push('unsure'); index += 1; continue;
    }
    if (!word || STOP_WORDS.has(word)) continue;
    result.push(VARIANTS.get(word) || word);
  }
  return [...new Set(result)];
}

function indexItems(items) {
  if (!Array.isArray(items)) return [];
  return items.flatMap((item, order) => {
    if (!item || typeof item !== 'object' || Array.isArray(item) ||
        !nonemptyString(item.id) || !nonemptyString(item.question) ||
        !nonemptyString(item.answer) || !Array.isArray(item.aliases)) return [];
    const phrases = [item.question, ...item.aliases.filter(nonemptyString)]
      .map(normalize).filter(Boolean).map(text => ({ text, words: meaningfulWords(text) }));
    if (!phrases.length) return [];
    return [{ item, order, phrases, words: new Set(phrases.flatMap(phrase => phrase.words)) }];
  });
}

function suggestions(candidates) {
  return { status: 'suggestions', items: candidates.slice(0, 3).map(candidate => candidate.item) };
}

/**
 * Search an array of { id, question, answer, aliases: string[] } records.
 * Invalid records are skipped. A match returns the original record, including
 * its exact answer. Ambiguous topics return at most three original records.
 */
export function queryFaq(query, items) {
  if (typeof query !== 'string' || query.length > MAX_QUERY_LENGTH) return { status: 'unmatched' };
  const normalized = normalize(query);
  if (!normalized) return { status: 'empty' };
  const queryWords = meaningfulWords(normalized);
  if (!queryWords.length) return { status: 'unmatched' };
  const indexed = indexItems(items);
  if (!indexed.length) return { status: 'unmatched' };

  const exact = indexed.filter(entry => entry.phrases.some(phrase => phrase.text === normalized));
  if (exact.length === 1) return { status: 'matched', item: exact[0].item };
  if (exact.length > 1) return suggestions(exact);

  const frequency = new Map();
  for (const entry of indexed) {
    for (const word of entry.words) frequency.set(word, (frequency.get(word) || 0) + 1);
  }
  // Unsupported sensitive subjects cannot be answered through an incidental
  // shared word such as "design" or "time". Explicit future aliases can opt in.
  if (queryWords.some(word => UNSUPPORTED_TOPICS.has(word) && !frequency.has(word))) {
    return { status: 'unmatched' };
  }
  const covered = queryWords.filter(word => frequency.has(word));
  if (covered.length / queryWords.length < 0.6) return { status: 'unmatched' };

  const candidates = indexed.flatMap(entry => {
    const overlap = queryWords.filter(word => entry.words.has(word));
    if (!overlap.length) return [];
    const coverage = overlap.length / queryWords.length;
    const distinctiveWords = overlap.filter(word => frequency.get(word) === 1);
    const distinctive = distinctiveWords.length;
    const completePhrases = entry.phrases.filter(phrase => phrase.words.length &&
      phrase.words.every(word => queryWords.includes(word)));
    const evidence = new Set([...distinctiveWords, ...completePhrases.flatMap(phrase => phrase.words)]);
    const phraseFit = Math.max(...entry.phrases.map(phrase => {
      if (!phrase.words.length) return 0;
      const hits = phrase.words.filter(word => queryWords.includes(word)).length;
      return hits / Math.max(phrase.words.length, queryWords.length);
    }));
    const score = coverage * 0.6 + phraseFit * 0.4;
    return [{ ...entry, coverage, distinctive, overlap, evidence, score }];
  }).sort((first, second) => second.score - first.score || first.order - second.order);
  if (!candidates.length) return { status: 'unmatched' };

  const best = candidates[0];
  // Fully supported phrases can indicate a topic even when words such as
  // "development" appear in several records. Subset evidence is redundant.
  const topics = candidates.filter(candidate => candidate.evidence.size > 0);
  const independentTopics = topics.filter(candidate => !topics.some(other =>
    other !== candidate && other.evidence.size > candidate.evidence.size &&
    [...candidate.evidence].every(word => other.evidence.has(word))));
  const multipleTopics = independentTopics.some((first, index) => independentTopics.slice(index + 1).some(second =>
    [...first.evidence].some(word => !second.evidence.has(word)) &&
    [...second.evidence].some(word => !first.evidence.has(word))));
  if (multipleTopics) return suggestions(independentTopics);
  if (best.coverage < 0.6) return { status: 'unmatched' };
  const close = candidates.filter(candidate => best.score - candidate.score <= 0.12);
  if (close.length > 1) return suggestions(close);
  if (best.coverage >= 0.6 && (best.distinctive > 0 || best.overlap.length >= 2)) {
    return { status: 'matched', item: best.item };
  }
  return suggestions([best]);
}
