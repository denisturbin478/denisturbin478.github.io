/** Independently authored native implementations inspired by Evil Buttons:
 * https://www.evilbuttons.com/docs/chrome-button
 * No upstream shader, React runtime or registry code is imported.
 * Navigation, disclosures and clipboard promises keep their existing owners.
 */
const instances = new WeakMap();
const VERTEX = `attribute vec2 position;
varying vec2 uv;
void main(){ uv=position*.5+.5; gl_Position=vec4(position,0.,1.); }`;
const FRAGMENT = `precision mediump float;
varying vec2 uv;
uniform vec2 resolution;
uniform vec2 pointer;
uniform float clock;
void main(){
 vec2 p=(uv-.5)*vec2(resolution.x/resolution.y,1.);
 float angle=atan(p.y,p.x);
 float swell=sin(angle*3.+clock*.75)*.15;
 float light=sin(angle*4.-clock*.5+swell)*.25;
 light+=sin(angle*9.+clock*.35)*.08;
 vec2 q=uv-(pointer*.5+.5);
 float ripple=sin(length(q*vec2(resolution.x/resolution.y,1.))*18.-clock*1.8);
 light+=ripple*exp(-length(q)*5.)*.08;
 float silver=clamp(.66+light,.25,.98);
 gl_FragColor=vec4(vec3(silver)*vec3(.98,.985,1.),1.);
}`;

function createRenderer(canvas) {
 const gl=canvas.getContext?.('webgl',{alpha:false,antialias:false,depth:false,stencil:false,preserveDrawingBuffer:false});
 if(!gl)return null;
 const shaders=[];let program=null,buffer=null;
 const dispose=()=>{
  try{if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program);shaders.forEach(shader=>gl.deleteShader(shader));}catch{}
 };
 try{
  const compile=(type,source)=>{
   const shader=gl.createShader(type);if(!shader)throw new Error('Shader unavailable');
   shaders.push(shader);gl.shaderSource(shader,source);gl.compileShader(shader);
   if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw new Error('Shader unsupported');
   return shader;
  };
  program=gl.createProgram();if(!program)throw new Error('Program unavailable');
  gl.attachShader(program,compile(gl.VERTEX_SHADER,VERTEX));
  gl.attachShader(program,compile(gl.FRAGMENT_SHADER,FRAGMENT));gl.linkProgram(program);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error('Program unsupported');
  buffer=gl.createBuffer();if(!buffer)throw new Error('Buffer unavailable');
  gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  const attribute=gl.getAttribLocation(program,'position');
  if(attribute<0)throw new Error('Attribute unavailable');
  const uniforms={resolution:gl.getUniformLocation(program,'resolution'),pointer:gl.getUniformLocation(program,'pointer'),clock:gl.getUniformLocation(program,'clock')};
  return{
   draw(time,pointer){
    gl.viewport(0,0,canvas.width,canvas.height);gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.enableVertexAttribArray(attribute);
    gl.vertexAttribPointer(attribute,2,gl.FLOAT,false,0,0);
    gl.uniform2f(uniforms.resolution,canvas.width,canvas.height);
    gl.uniform2f(uniforms.pointer,pointer.x,pointer.y);gl.uniform1f(uniforms.clock,time);
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
   },dispose,
  };
 }catch{dispose();return null;}
}

export function initEvilButtons(root = document) {
 if(instances.has(root))return instances.get(root);
 const doc=root.ownerDocument||root,win=doc.defaultView||globalThis.window;
 const reduced=win.matchMedia('(prefers-reduced-motion: reduce)');
 const fine=win.matchMedia('(hover: hover) and (pointer: fine)');
 const cleanups=[],states=[];let alive=true,suspended=false;
 const listen=(target,name,fn,options)=>{
  target.addEventListener(name,fn,options);
  cleanups.push(()=>target.removeEventListener(name,fn,options));
 };
 const mediaListen=(query,fn)=>{
  if(query.addEventListener){query.addEventListener('change',fn);cleanups.push(()=>query.removeEventListener('change',fn));}
  else{query.addListener(fn);cleanups.push(()=>query.removeListener(fn));}
 };
 const stop=state=>{
  if(state.frame)win.cancelAnimationFrame(state.frame);
  state.frame=0;state.last=null;state.element.removeAttribute('data-evil-rendering');
 };
 const eligible=state=>alive&&!suspended&&!doc.hidden&&!reduced.matches&&fine.matches&&state.visible
  &&!state.element.disabled&&state.element.getAttribute?.('aria-disabled')!=='true'&&state.element.isConnected!==false&&!state.element.closest?.('[hidden], [inert]')
  &&(state.hovered||state.focused)&&!state.failed&&!state.lost;
 const measureVisibility=state=>{
  const bounds=state.element.getBoundingClientRect();
  let left=0,top=0,right=win.innerWidth,bottom=win.innerHeight;
  // Older browsers without IntersectionObserver still respect the two scroll
  // panes. All geometry reads happen on interaction/scroll/resize, never in RAF.
  if(!win.IntersectionObserver&&win.getComputedStyle){
   for(let parent=state.element.parentElement;parent;parent=parent.parentElement){
    const style=win.getComputedStyle(parent);
    if(/auto|scroll|hidden|clip/.test(`${style.overflowX} ${style.overflowY}`)){
     const box=parent.getBoundingClientRect();
     left=Math.max(left,box.left);right=Math.min(right,box.right);
     top=Math.max(top,box.top);bottom=Math.min(bottom,box.bottom);
    }
   }
  }
  state.visible=state.intersecting&&bounds.width>0&&bounds.height>0&&bounds.right>left&&bounds.left<right
   &&bounds.bottom>top&&bounds.top<bottom;
 };
 const resize=state=>{
  const bounds=state.element.getBoundingClientRect();
  const ratio=Math.min(1.5,win.devicePixelRatio||1);
  state.canvas.width=Math.max(1,Math.round(bounds.width*ratio));
  state.canvas.height=Math.max(1,Math.round(bounds.height*ratio));
 };
 const start=state=>{
  if(!eligible(state)){stop(state);return;}
  if(state.frame)return;
  if(!state.renderer){
   try{state.renderer=createRenderer(state.canvas);}catch{state.renderer=null;}
   if(!state.renderer){state.failed=true;stop(state);return;}
   resize(state);
  }
  const tick=time=>{
   state.frame=0;
   if(!eligible(state)){stop(state);return;}
   const delta=state.last===null?0:Math.min(.06,Math.max(0,(time-state.last)/1000));
   state.last=time;state.clock+=delta;
   const blend=1-Math.exp(-18*delta);
   state.pointer.x+=(state.goal.x-state.pointer.x)*blend;
   state.pointer.y+=(state.goal.y-state.pointer.y)*blend;
   try{
    state.renderer.draw(state.clock,state.pointer);
    state.element.setAttribute('data-evil-rendering','');
   }catch{state.failed=true;state.renderer.dispose();state.renderer=null;stop(state);return;}
   state.frame=win.requestAnimationFrame(tick);
  };
  state.frame=win.requestAnimationFrame(tick);
 };
 const refresh=()=>states.forEach(state=>{measureVisibility(state);start(state);});
 root.querySelectorAll('[data-evil-button="chrome"]').forEach(element=>{
  const canvas=element.querySelector('.evil-chrome-canvas');if(!canvas)return;
  const state={element,canvas,frame:0,last:null,clock:0,renderer:null,failed:false,lost:false,
   hovered:false,focused:false,visible:false,intersecting:true,
   pointer:{x:0,y:0},goal:{x:0,y:0}};
  measureVisibility(state);
  states.push(state);
  listen(element,'pointerenter',event=>{
   if(event.pointerType==='touch'||!fine.matches)return;
   state.hovered=true;measureVisibility(state);start(state);
  });
  listen(element,'pointerleave',()=>{state.hovered=false;state.goal={x:0,y:0};start(state);});
  listen(element,'pointercancel',()=>{state.hovered=false;state.goal={x:0,y:0};start(state);});
  listen(element,'pointermove',event=>{
   if(!state.hovered||!eligible(state))return;
   const box=element.getBoundingClientRect();
   state.goal={x:Math.max(-1,Math.min(1,(event.clientX-box.left)/Math.max(1,box.width)*2-1)),
    y:Math.max(-1,Math.min(1,1-(event.clientY-box.top)/Math.max(1,box.height)*2))};
  },{passive:true});
  listen(element,'focus',()=>{state.focused=element.matches(':focus-visible');measureVisibility(state);start(state);});
  listen(element,'blur',()=>{state.focused=false;start(state);});
  listen(canvas,'webglcontextlost',event=>{
   event.preventDefault();state.lost=true;state.hovered=false;state.focused=false;
   stop(state);state.renderer?.dispose();state.renderer=null;
  });
  listen(canvas,'webglcontextrestored',()=>{state.lost=false;state.failed=false;});
  const observer=win.IntersectionObserver?new win.IntersectionObserver(entries=>{
   state.intersecting=entries[0]?.isIntersecting??false;measureVisibility(state);start(state);
  }):null;
  observer?.observe(element);cleanups.push(()=>observer?.disconnect());
  const size=win.ResizeObserver?new win.ResizeObserver(()=>{measureVisibility(state);if(state.renderer)resize(state);start(state);}):null;
  size?.observe(element);cleanups.push(()=>size?.disconnect());
 });
 const reset=()=>states.forEach(state=>{state.hovered=false;state.focused=false;state.goal={x:0,y:0};stop(state);});
 listen(doc,'visibilitychange',()=>{if(doc.hidden)reset();else refresh();});
 listen(win,'pagehide',()=>{suspended=true;reset();});
 listen(win,'pageshow',()=>{suspended=false;reset();});
 listen(win,'pageswap',()=>{suspended=true;reset();});
 listen(win,'blur',reset);
 listen(win,'resize',()=>{states.forEach(state=>{if(state.renderer)resize(state);});refresh();},{passive:true});
 listen(doc,'scroll',refresh,{passive:true,capture:true});
 mediaListen(reduced,()=>{reset();});mediaListen(fine,()=>{reset();});
 const instance={refresh,destroy(){
  if(!alive)return;alive=false;reset();cleanups.forEach(fn=>fn());
  states.forEach(state=>{state.renderer?.dispose();state.renderer=null;});
  instances.delete(root);
 }};
 instances.set(root,instance);return instance;
}

if(typeof document!=='undefined'){
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>initEvilButtons(),{once:true});
 else initEvilButtons();
}
