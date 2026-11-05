// A desktop pane has its own reading position; phones use the document scroll.
export function readingFraction(position, contentHeight, viewportHeight){
  const distance=contentHeight-viewportHeight;
  return distance>0?Math.min(1,Math.max(0,position/distance)):0;
}

if(typeof document!=='undefined'){
  const profile=document.querySelector('.sidebar');
  const workspace=document.querySelector('.main-pane');
  const rails=[document.querySelector('[data-reading-progress="profile"]'),document.querySelector('[data-reading-progress="workspace"]')];
  const compact=matchMedia('(max-width:809px)');
  let pending=0;
  function update(){
    pending=0;
    if(profile)document.documentElement.style.setProperty('--reading-profile-width',`${profile.getBoundingClientRect().width}px`);
    [profile,workspace].forEach((pane,index)=>{
      if(!pane||!rails[index])return;
      const scroller=compact.matches?document.scrollingElement:pane;
      const fraction=readingFraction(scroller.scrollTop,scroller.scrollHeight,scroller.clientHeight);
      rails[index].firstElementChild.style.transform=`scaleX(${fraction})`;
    });
  }
  function queue(){if(!pending)pending=requestAnimationFrame(update);}
  [profile,workspace,window].forEach(target=>target?.addEventListener('scroll',queue,{passive:true}));
  window.addEventListener('resize',queue,{passive:true});
  window.addEventListener('pageshow',queue);
  document.addEventListener('toggle',queue,true);
  document.addEventListener('load',queue,true);
  compact.addEventListener('change',queue);
  const resizeObserver=new ResizeObserver(queue);
  [profile,workspace,document.querySelector('.profile-content'),document.querySelector('.case-sidebar-details-content'),document.querySelector('.workspace-content')].forEach(node=>{if(node)resizeObserver.observe(node);});
  document.fonts?.ready.then(queue);
  update();
}
