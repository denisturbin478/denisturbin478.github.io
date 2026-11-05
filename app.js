const workGrid=document.querySelector('.work-grid');
// The main workspace is its own scroller on desktop; a parent hash cannot reset it.
document.querySelector('.site-footer a[href="#main"]')?.addEventListener('click',e=>{
  if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
  e.preventDefault();
  const behavior=matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';
  const main=document.querySelector('main');
  main?.scrollTo({top:0,left:0,behavior});
  window.scrollTo({top:0,left:0,behavior});
  main?.focus({preventScroll:true});
});
// Restore only an explicit case → listing return. Browser Back keeps its native lifecycle.
const workReturn=(()=>{
  const homeHref=document.querySelector('.identity[href]')?.href||document.body.dataset.workHome;
  if(!homeHref)return null;
  const home=new URL(homeHref,location.href);
  if(home.origin!==location.origin)return null;
  const homePath=home.pathname.replace(/\/?$/,'/');
  const knownPaths=new Set([homePath,`${homePath}work/`]);
  const stateKey=`portfolio-work-return:${homePath}`;
  const pendingKey=`${stateKey}:pending`;
  const main=document.querySelector('main');
  const plainClick=e=>!e.defaultPrevented&&e.button===0&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey;
  function listingUrl(value){
    try{
      if(typeof value!=='string')return null;
      const parsed=new URL(value,location.href);
      return parsed.origin===location.origin&&!parsed.username&&!parsed.password&&knownPaths.has(parsed.pathname.replace(/\/?$/,'/'))?parsed:null;
    }catch{return null;}
  }
  function readState(key){
    try{
      const saved=JSON.parse(sessionStorage.getItem(key));
      const destination=listingUrl(saved?.url);
      if(!destination||!['mainX','mainY','windowX','windowY'].every(key=>Number.isFinite(saved[key])&&saved[key]>=0))return null;
      return {...saved,url:destination.href};
    }catch{return null;}
  }
  function clearPending(){try{sessionStorage.removeItem(pendingKey);}catch{}}
  function restore(){
    if(!workGrid)return;
    const saved=readState(pendingKey);
    if(!saved)return;
    clearPending();
    if(saved.url!==listingUrl(location.href)?.href)return;
    const afterLayout=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{
      // Exact position restoration stays instant, including reduced-motion users.
      main?.scrollTo({left:saved.mainX,top:saved.mainY,behavior:'instant'});
      window.scrollTo({left:saved.windowX,top:saved.windowY,behavior:'instant'});
      const target=[...workGrid.querySelectorAll('.project-link')].find(a=>a.href===saved.project);
      if(target&&!target.closest('.project-card')?.hidden)target.focus({preventScroll:true});
    }));
    if(document.fonts?.ready)document.fonts.ready.then(afterLayout,afterLayout);
    else afterLayout();
  }
  if(workGrid){
    workGrid.querySelectorAll('.project-link').forEach(anchor=>anchor.addEventListener('click',e=>{
      if(!plainClick(e)||!listingUrl(location.href))return;
      clearPending();
      try{sessionStorage.setItem(stateKey,JSON.stringify({url:location.href,mainX:main?.scrollLeft||0,mainY:main?.scrollTop||0,windowX:window.scrollX,windowY:window.scrollY,project:anchor.href}));}catch{}
    }));
    window.addEventListener('pageshow',e=>{if(e.persisted)restore();});
  }else{
    const backLinks=[...document.querySelectorAll('[data-work-return], .back-link')];
    const saved=readState(stateKey);
    if(saved)backLinks.forEach(back=>{
      back.href=saved.url;
      back.addEventListener('click',e=>{
        if(!plainClick(e))return;
        const current=readState(stateKey);
        if(!current)return;
        back.href=current.url;
        try{sessionStorage.setItem(pendingKey,JSON.stringify(current));}catch{}
      });
    });
  }
  return {restore};
})();
if(workGrid){
  const filters=[...document.querySelectorAll('[data-filter]')];
  const cards=[...workGrid.querySelectorAll('.project-card')];
  function layoutWork(){
    const masonry=innerWidth>=1024&&workGrid.dataset.filter!=='photography';
    workGrid.classList.toggle('masonry',masonry);
    if(!masonry){workGrid.style.height='';cards.forEach(card=>{card.style.removeProperty('--top');card.style.removeProperty('--left');});return;}
    const heights=[0,0];
    const gap=parseFloat(getComputedStyle(workGrid).getPropertyValue('--work-card-gap'))||12;
    const columnWidth=(workGrid.getBoundingClientRect().width-gap)/2;
    cards.filter(card=>!card.hidden).forEach(card=>{
      const column=heights[0]<=heights[1]?0:1;
      card.style.setProperty('--left',`${column*(columnWidth+gap)}px`);
      card.style.setProperty('--top',`${heights[column]}px`);
      heights[column]+=card.querySelector('.project-link').getBoundingClientRect().height+gap;
    });
    workGrid.style.height=`${Math.max(0,Math.max(...heights)-gap)}px`;
  }
  function applyFilter(){
    const params=new URLSearchParams(location.search);
    const aliases={photo:'photography',web:'website',product:'product'};
    let type=params.get('type')||aliases[params.get('discipline')]||'all';
    if(!filters.some(a=>a.dataset.filter===type))type='all';
    workGrid.dataset.filter=type;
    cards.forEach(card=>{card.hidden=type!=='all'&&card.dataset.category!==type;});
    const count=new Set(cards.filter(card=>!card.hidden).map(card=>card.querySelector('a').href)).size;
    filters.forEach(a=>{if(a.dataset.filter===type)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    document.querySelector('#work-count').textContent=`${count} ${count===1?'project':'projects'}`;
    document.querySelector('#filter-status').textContent=`${count} ${count===1?'project':'projects'} shown.`;
    layoutWork();
  }
  function showFilteredStart(){
    const main=document.querySelector('main');
    if(matchMedia('(min-width:810px)').matches){main?.scrollTo({top:0,behavior:'instant'});return;}
    const toolbar=document.querySelector('.work-toolbar');
    const stickyTop=parseFloat(getComputedStyle(toolbar).top)||0;
    const start=Math.max(0,main.getBoundingClientRect().top+window.scrollY-stickyTop);
    // Keep the initial identity header; from a scrolled list, show the first result below the sticky tabs.
    if(window.scrollY>start)window.scrollTo({top:start,behavior:'instant'});
  }
  filters.forEach(a=>a.addEventListener('click',e=>{
    if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
    e.preventDefault();
    if(a.dataset.filter===workGrid.dataset.filter)return;
    const update=()=>{history.pushState(null,'',a.href);applyFilter();showFilteredStart();};
    if(window.PortfolioPageMotion)window.PortfolioPageMotion.changeView(update,e);
    else update();
  }));
  window.addEventListener('popstate',()=>{window.PortfolioPageMotion?.cancel();applyFilter();});
  window.addEventListener('resize',layoutWork);
  const observer=new ResizeObserver(layoutWork);
  cards.forEach(card=>observer.observe(card.querySelector('.project-link')));
  applyFilter();
  workReturn?.restore();
}

// Image-led case galleries keep original aspect ratios and a stable DOM reading order.
document.querySelectorAll('[data-case-masonry]').forEach(gallery=>{
  const cards=[...gallery.children];
  let frame=0;
  function layout(){
    frame=0;
    const desktop=matchMedia('(min-width:810px)').matches;
    gallery.classList.toggle('is-positioned',desktop);
    if(!desktop){
      gallery.style.removeProperty('height');
      cards.forEach(card=>{card.style.removeProperty('--visual-top');card.style.removeProperty('--visual-left');});
      return;
    }
    const gap=parseFloat(getComputedStyle(gallery).getPropertyValue('--case-gallery-gap'))||12;
    const width=gallery.getBoundingClientRect().width;
    const columnWidth=(width-gap)/2;
    const heights=[0,0];
    cards.forEach(card=>{
      const wide=card.classList.contains('is-wide');
      const column=wide?0:(heights[0]<=heights[1]?0:1);
      const top=wide?Math.max(...heights):heights[column];
      card.style.setProperty('--visual-top',`${top}px`);
      card.style.setProperty('--visual-left',`${column*(columnWidth+gap)}px`);
      const bottom=top+Math.ceil(card.getBoundingClientRect().height)+gap;
      if(wide)heights.fill(bottom);else heights[column]=bottom;
    });
    gallery.style.height=`${Math.max(0,Math.max(...heights)-gap)}px`;
  }
  function queue(){if(!frame)frame=requestAnimationFrame(layout);}
  const observer=new ResizeObserver(queue);
  cards.forEach(card=>observer.observe(card));
  window.addEventListener('resize',queue);
  document.fonts?.ready.then(queue);
  gallery.querySelectorAll('img').forEach(image=>image.addEventListener('load',queue,{once:true}));
  layout();
});

// Keep the full story open beside the gallery on desktop, compact on a phone.
const sidebarDetails=document.querySelector('.case-sidebar-details');
if(sidebarDetails){
  const compact=matchMedia('(max-width:809px)');
  const setMode=()=>{sidebarDetails.open=!compact.matches||location.hash==='#details';};
  compact.addEventListener('change',setMode);
  setMode();
}
function revealCaseHash(){
  let identifier;
  try{identifier=decodeURIComponent(location.hash.slice(1));}catch{return;}
  const target=identifier&&document.getElementById(identifier);
  if(!target||!target.closest('.sidebar'))return;
  // A deep link can point at the disclosure itself or content nested inside it.
  for(let node=target;node;node=node.parentElement){
    if(node.tagName==='DETAILS')node.open=true;
  }
  requestAnimationFrame(()=>target.scrollIntoView({block:'start',inline:'nearest',behavior:'instant'}));
}
window.addEventListener('hashchange',revealCaseHash);
revealCaseHash();

document.querySelector('[data-sidebar-top]')?.addEventListener('click',e=>{
  if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
  e.preventDefault();
  const behavior=matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';
  document.querySelector('.case-sidebar')?.scrollTo({top:0,behavior});
  window.scrollTo({top:0,behavior});
  document.querySelector('.case-back')?.focus({preventScroll:true});
});

// Actual desktop/phone captures in the template case, with a native keyboard tab model.
document.querySelectorAll('.case-view-switch').forEach(group=>{
  const tabs=[...group.querySelectorAll('[role=tab]')];
  function select(tab,focus=false){
    tabs.forEach(t=>{
      const active=t===tab;
      t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;
      group.querySelector('#'+t.getAttribute('aria-controls')).hidden=!active;
    });
    if(focus)tab.focus({preventScroll:true});
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>select(tab));
    tab.addEventListener('keydown',e=>{
      const destinations={ArrowRight:(index+1)%tabs.length,ArrowLeft:(index-1+tabs.length)%tabs.length,Home:0,End:tabs.length-1};
      if(!(e.key in destinations))return;
      e.preventDefault();select(tabs[destinations[e.key]],true);
    });
  });
});

