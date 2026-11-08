var Dc=0,$o=1,Oc=2,Zo=1,Fc=2,wi=3,Gi=0,Bt=1,fi=2,Wi=0,Tr=1,Qo=2,el=3,tl=4,zc=5,or=100,Bc=101,kc=102,Hc=103,Vc=104,Gc=200,Wc=201,Xc=202,jc=203,Gs=204,Ws=205,qc=206,Yc=207,Kc=208,Jc=209,$c=210,Zc=211,Qc=212,eu=213,tu=214,Xs=0,js=1,qs=2,br=3,Ys=4,Ks=5,Js=6,$s=7,il=0,iu=1,ru=2,mi=0,au=1,su=2,nu=3,ou=4,lu=5,hu=6,cu=7,rl=300,wr=301,Ar=302,Zs=303,Qs=304,Ga=306,Wa=1e3,lr=1001,en=1002,Xt=1003,uu=1004,Xa=1005,ni=1006,tn=1007,Ai=1008,Ri=1009,al=1010,sl=1011,da=1012,rn=1013,hr=1014,gi=1015,Rr=1016,an=1017,sn=1018,Cr=1020,nl=35902,ol=1021,ll=1022,oi=1023,hl=1024,cl=1025,Pr=1026,Ir=1027,nn=1028,on=1029,ul=1030,ln=1031,hn=1033,ja=33776,qa=33777,Ya=33778,Ka=33779,cn=35840,un=35841,dn=35842,pn=35843,fn=36196,mn=37492,gn=37496,vn=37808,_n=37809,xn=37810,yn=37811,Mn=37812,Sn=37813,En=37814,Tn=37815,bn=37816,wn=37817,An=37818,Rn=37819,Cn=37820,Pn=37821,Ja=36492,In=36494,Ln=36495,dl=36283,Un=36284,Nn=36285,Dn=36286,$a=2300,On=2301,Fn=2302,pl=2400,fl=2401,ml=2402,du=3200,pu=3201,gl=0,fu=1,Xi="",pt="srgb",Lr="srgb-linear",Za="linear",nt="srgb",Ur=7680,vl=519,mu=512,gu=513,vu=514,_l=515,_u=516,xu=517,yu=518,Mu=519,xl=35044,zn=35048,yl="300 es",Ci=2e3,Qa=2001,Nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bn=Math.PI/180,kn=180/Math.PI;function Dr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Lt[e&255]+Lt[e>>8&255]+Lt[e>>16&255]+Lt[e>>24&255]+"-"+Lt[t&255]+Lt[t>>8&255]+"-"+Lt[t>>16&15|64]+Lt[t>>24&255]+"-"+Lt[i&63|128]+Lt[i>>8&255]+"-"+Lt[i>>16&255]+Lt[i>>24&255]+Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]).toLowerCase()}function St(e,t,i){return Math.max(t,Math.min(i,e))}function Su(e,t){return(e%t+t)%t}function Hn(e,t,i){return(1-i)*e+i*t}function pa(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Ie=class vc{constructor(t=0,i=0){vc.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),s=this.x-t.x,n=this.y-t.y;return this.x=s*r-n*a+t.x,this.y=s*a+n*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class _c{constructor(t,i,r,a,s,n,o,l,h){_c.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h)}set(t,i,r,a,s,n,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=s,c[5]=l,c[6]=r,c[7]=n,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],v=a[0],f=a[3],m=a[6],y=a[1],_=a[4],b=a[7],B=a[2],A=a[5],C=a[8];return s[0]=n*v+o*y+l*B,s[3]=n*f+o*_+l*A,s[6]=n*m+o*b+l*C,s[1]=h*v+c*y+u*B,s[4]=h*f+c*_+u*A,s[7]=h*m+c*b+u*C,s[2]=d*v+p*y+g*B,s[5]=d*f+p*_+g*A,s[8]=d*m+p*b+g*C,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*n*c-i*o*h-r*s*c+r*o*l+a*s*h-a*n*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*n-o*h,d=o*l-c*s,p=h*s-n*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*r)*v,t[2]=(o*r-a*n)*v,t[3]=d*v,t[4]=(c*i-a*l)*v,t[5]=(a*s-o*i)*v,t[6]=p*v,t[7]=(r*l-h*i)*v,t[8]=(n*i-r*s)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,s,n,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*n+h*o)+n+t,-a*h,a*l,-a*(-h*n+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Vn.makeScale(t,i)),this}rotate(t){return this.premultiply(Vn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vn=new $e;function Ml(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function es(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Eu(){let e=es("canvas");return e.style.display="block",e}var Sl={};function fa(e){e in Sl||(Sl[e]=!0,console.warn(e))}function Tu(e,t,i){return new Promise(function(r,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}function bu(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wu(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var rt={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(e,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===nt&&(e.r=Pi(e.r),e.g=Pi(e.g),e.b=Pi(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===nt&&(e.r=Or(e.r),e.g=Or(e.g),e.b=Or(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Xi?Za:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function Pi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Or(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var El=[.64,.33,.3,.6,.15,.06],Tl=[.2126,.7152,.0722],bl=[.3127,.329],wl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Lr]:{primaries:El,whitePoint:bl,transfer:Za,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:Tl,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:El,whitePoint:bl,transfer:nt,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:Tl,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}});var Fr,Au=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=es("canvas")),Fr.width=e.width,Fr.height=e.height;let i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=es("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Pi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ru=0,Rl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,n=r.length;s<n;s++)r[s].isDataTexture?a.push(Gn(r[s].image)):a.push(Gn(r[s]))}else a=Gn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Gn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Au.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cu=0,Zt=class Hs extends Nr{constructor(t=Hs.DEFAULT_IMAGE,i=Hs.DEFAULT_MAPPING,r=lr,a=lr,s=ni,n=Ai,o=oi,l=Ri,h=Hs.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Dr(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case lr:t.x=t.x<0?0:1;break;case en:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case lr:t.y=t.y<0?0:1;break;case en:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null,Zt.DEFAULT_MAPPING=rl,Zt.DEFAULT_ANISOTROPY=1;var gt=class xc{constructor(t=0,i=0,r=0,a=1){xc.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=this.w,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*i+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*i+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*i+n[7]*r+n[11]*a+n[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,s,n=t.elements,o=n[0],l=n[4],h=n[8],c=n[1],u=n[5],d=n[9],p=n[2],g=n[6],v=n[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,y=(u+1)/2,_=(v+1)/2,b=(l+c)/4,B=(h+p)/4,A=(d+g)/4;return m>y&&m>_?m<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(m),a=b/r,s=B/r):y>_?y<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),r=b/a,s=A/a):_<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(_),r=B/s,a=A/s),this.set(r,a,s,i),this}let f=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(f)<.001&&(f=1),this.x=(g-d)/f,this.y=(h-p)/f,this.z=(c-l)/f,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pu=class extends Nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let n=0;n<s;n++)this.textures[n]=a.clone(),this.textures[n].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ji=class extends Pu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Cl=class extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Iu=class extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[s+0],d=a[s+1],p=a[s+2],g=a[s+3];if(n===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(n===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let v=1-n,f=o*u+l*d+h*p+c*g,m=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let b=Math.sqrt(y),B=Math.atan2(b,f*m);v=Math.sin(v*B)/b,n=Math.sin(n*B)/b}let _=n*m;if(o=o*v+u*_,l=l*v+d*_,h=h*v+p*_,c=c*v+g*_,v===1-n){let b=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=b,l*=b,h*=b,c*=b}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[s],u=a[s+1],d=a[s+2],p=a[s+3];return e[t]=n*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-n*d,e[t+2]=l*p+h*d+n*u-o*c,e[t+3]=h*p-n*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),c=n(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+n+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(s-r)*d}else if(i>n&&i>c){let d=2*Math.sqrt(1+i-n-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+l)/d}else if(n>c){let d=2*Math.sqrt(1+n-i-c);this._w=(a-l)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-n);this._w=(s-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,n=s*e._w+i*e._x+r*e._y+a*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let o=1-n*n;if(o<=Number.EPSILON){let d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,n),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=s*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class yc{constructor(t=0,i=0,r=0){yc.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Pl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[3]*r+s[6]*a,this.y=s[1]*i+s[4]*r+s[7]*a,this.z=s[2]*i+s[5]*r+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=t.elements,n=1/(s[3]*i+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*i+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*i+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,s=t.x,n=t.y,o=t.z,l=t.w,h=2*(n*a-o*r),c=2*(o*i-s*a),u=2*(s*r-n*i);return this.x=i+l*h+n*u-o*c,this.y=r+l*c+o*h-s*u,this.z=a+l*u+s*c-n*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a,this.y=s[1]*i+s[5]*r+s[9]*a,this.z=s[2]*i+s[6]*r+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,s=t.z,n=i.x,o=i.y,l=i.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Wn.copy(this).projectOnVector(t),this.sub(Wn)}reflect(t){return this.sub(Wn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wn=new L,Pl=new vi,cr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,n=a.count;s<n;s++)e.isMesh===!0?e.getVertexPosition(s,li):li.fromBufferAttribute(a,s),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),is.subVectors(this.max,ma),zr.subVectors(e.a,ma),Br.subVectors(e.b,ma),kr.subVectors(e.c,ma),qi.subVectors(Br,zr),Yi.subVectors(kr,Br),ur.subVectors(zr,kr);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ur.z,ur.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ur.z,0,-ur.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ur.y,ur.x,0];return!Xn(t,zr,Br,kr,is)||(t=[1,0,0,0,1,0,0,0,1],!Xn(t,zr,Br,kr,is))?!1:(rs.crossVectors(qi,Yi),t=[rs.x,rs.y,rs.z],Xn(t,zr,Br,kr,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new L,new L,new L,new L,new L,new L,new L,new L],li=new L,ts=new cr,zr=new L,Br=new L,kr=new L,qi=new L,Yi=new L,ur=new L,ma=new L,is=new L,rs=new L,dr=new L;function Xn(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){dr.fromArray(e,s);let o=a.x*Math.abs(dr.x)+a.y*Math.abs(dr.y)+a.z*Math.abs(dr.z),l=t.dot(dr),h=i.dot(dr),c=r.dot(dr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Lu=new cr,ga=new L,jn=new L,va=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(jn)),this.expandByPoint(ga.copy(e.center).sub(jn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new L,qn=new L,as=new L,Ki=new L,Yn=new L,ss=new L,Kn=new L,Il=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qn.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(qn);let a=e.distanceTo(t)*.5,s=-this.direction.dot(as),n=Ki.dot(this.direction),o=-Ki.dot(as),l=Ki.lengthSq(),h=Math.abs(1-s*s),c,u,d,p;if(h>0)if(c=s*o-n,u=s*n-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+s*u+2*n)+u*(s*c+u+2*o)+l}else u=a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-s*a+n)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(s*a+n)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=s>0?-a:a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(qn).addScaledVector(as,u),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),r=Li.dot(Li)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),c>=0?(n=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(n=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||n>r)||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,a){Yn.subVectors(t,e),ss.subVectors(i,e),Kn.crossVectors(Yn,ss);let s=this.direction.dot(Kn),n;if(s>0){if(r)return null;n=1}else if(s<0)n=-1,s=-s;else return null;Ki.subVectors(this.origin,e);let o=n*this.direction.dot(ss.crossVectors(Ki,ss));if(o<0)return null;let l=n*this.direction.dot(Yn.cross(Ki));if(l<0||o+l>s)return null;let h=-n*Ki.dot(Kn);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class Ko{constructor(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){Ko.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f)}set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=a,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/Hr.setFromMatrixColumn(t,0).length(),s=1/Hr.setFromMatrixColumn(t,1).length(),n=1/Hr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*n,i[9]=r[9]*n,i[10]=r[10]*n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,s=t.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-v*h,i[9]=-o*l,i[2]=v-d*h,i[6]=g+p*h,i[10]=n*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d+v*o,i[4]=g*o-p,i[8]=n*h,i[1]=n*u,i[5]=n*c,i[9]=-o,i[2]=p*o-g,i[6]=v+d*o,i[10]=n*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d-v*o,i[4]=-n*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=n*c,i[9]=v-d*o,i[2]=-n*h,i[6]=o,i[10]=n*l}else if(t.order==="ZYX"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+v,i[1]=l*u,i[5]=v*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=n*l}else if(t.order==="YZX"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-d*u,i[8]=g*u+p,i[1]=u,i[5]=n*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-v*u}else if(t.order==="XZY"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+v,i[5]=n*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=v*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Nu)}lookAt(t,i,r){let a=this.elements;return jt.subVectors(t,i),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Ji.crossVectors(r,jt),Ji.lengthSq()===0&&(Math.abs(r.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Ji.crossVectors(r,jt)),Ji.normalize(),ns.crossVectors(jt,Ji),a[0]=Ji.x,a[4]=ns.x,a[8]=jt.x,a[1]=Ji.y,a[5]=ns.y,a[9]=jt.y,a[2]=Ji.z,a[6]=ns.z,a[10]=jt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],v=r[6],f=r[10],m=r[14],y=r[3],_=r[7],b=r[11],B=r[15],A=a[0],C=a[4],N=a[8],M=a[12],S=a[1],R=a[5],U=a[9],D=a[13],X=a[2],ne=a[6],J=a[10],pe=a[14],$=a[3],Z=a[7],Te=a[11],ke=a[15];return s[0]=n*A+o*S+l*X+h*$,s[4]=n*C+o*R+l*ne+h*Z,s[8]=n*N+o*U+l*J+h*Te,s[12]=n*M+o*D+l*pe+h*ke,s[1]=c*A+u*S+d*X+p*$,s[5]=c*C+u*R+d*ne+p*Z,s[9]=c*N+u*U+d*J+p*Te,s[13]=c*M+u*D+d*pe+p*ke,s[2]=g*A+v*S+f*X+m*$,s[6]=g*C+v*R+f*ne+m*Z,s[10]=g*N+v*U+f*J+m*Te,s[14]=g*M+v*D+f*pe+m*ke,s[3]=y*A+_*S+b*X+B*$,s[7]=y*C+_*R+b*ne+B*Z,s[11]=y*N+_*U+b*J+B*Te,s[15]=y*M+_*D+b*pe+B*ke,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[12],n=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+s*l*u-a*h*u-s*o*d+r*h*d+a*o*p-r*l*p)+v*(+i*l*p-i*h*d+s*n*d-a*n*p+a*h*c-s*l*c)+f*(+i*h*u-i*o*p-s*n*u+r*n*p+s*o*c-r*h*c)+m*(-a*o*c-i*l*u+i*o*d+a*n*u-r*n*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],y=u*f*h-v*d*h+v*l*p-o*f*p-u*l*m+o*d*m,_=g*d*h-c*f*h-g*l*p+n*f*p+c*l*m-n*d*m,b=c*v*h-g*u*h+g*o*p-n*v*p-c*o*m+n*u*m,B=g*u*l-c*v*l-g*o*d+n*v*d+c*o*f-n*u*f,A=i*y+r*_+a*b+s*B;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=y*C,t[1]=(v*d*s-u*f*s-v*a*p+r*f*p+u*a*m-r*d*m)*C,t[2]=(o*f*s-v*l*s+v*a*h-r*f*h-o*a*m+r*l*m)*C,t[3]=(u*l*s-o*d*s-u*a*h+r*d*h+o*a*p-r*l*p)*C,t[4]=_*C,t[5]=(c*f*s-g*d*s+g*a*p-i*f*p-c*a*m+i*d*m)*C,t[6]=(g*l*s-n*f*s-g*a*h+i*f*h+n*a*m-i*l*m)*C,t[7]=(n*d*s-c*l*s+c*a*h-i*d*h-n*a*p+i*l*p)*C,t[8]=b*C,t[9]=(g*u*s-c*v*s-g*r*p+i*v*p+c*r*m-i*u*m)*C,t[10]=(n*v*s-g*o*s+g*r*h-i*v*h-n*r*m+i*o*m)*C,t[11]=(c*o*s-n*u*s-c*r*h+i*u*h+n*r*p-i*o*p)*C,t[12]=B*C,t[13]=(c*v*a-g*u*a+g*r*d-i*v*d-c*r*f+i*u*f)*C,t[14]=(g*o*a-n*v*a-g*r*l+i*v*l+n*r*f-i*o*f)*C,t[15]=(n*u*a-c*o*a+c*r*l-i*u*l-n*r*d+i*o*d)*C,this}scale(t){let i=this.elements,r=t.x,a=t.y,s=t.z;return i[0]*=r,i[4]*=a,i[8]*=s,i[1]*=r,i[5]*=a,i[9]*=s,i[2]*=r,i[6]*=a,i[10]*=s,i[3]*=r,i[7]*=a,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),s=1-r,n=t.x,o=t.y,l=t.z,h=s*n,c=s*o;return this.set(h*n+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*n,0,h*l-a*o,c*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,s,n){return this.set(1,r,s,0,t,1,n,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,s=i._x,n=i._y,o=i._z,l=i._w,h=s+s,c=n+n,u=o+o,d=s*h,p=s*c,g=s*u,v=n*c,f=n*u,m=o*u,y=l*h,_=l*c,b=l*u,B=r.x,A=r.y,C=r.z;return a[0]=(1-(v+m))*B,a[1]=(p+b)*B,a[2]=(g-_)*B,a[3]=0,a[4]=(p-b)*A,a[5]=(1-(d+m))*A,a[6]=(f+y)*A,a[7]=0,a[8]=(g+_)*C,a[9]=(f-y)*C,a[10]=(1-(d+v))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,s=Hr.set(a[0],a[1],a[2]).length(),n=Hr.set(a[4],a[5],a[6]).length(),o=Hr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],hi.copy(this);let l=1/s,h=1/n,c=1/o;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=c,hi.elements[9]*=c,hi.elements[10]*=c,i.setFromRotationMatrix(hi),r.x=s,r.y=n,r.z=o,this}makePerspective(t,i,r,a,s,n,o=Ci){let l=this.elements,h=2*s/(i-t),c=2*s/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===Ci)p=-(n+s)/(n-s),g=-2*n*s/(n-s);else if(o===Qa)p=-n/(n-s),g=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,s,n,o=Ci){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(n-s),d=(i+t)*h,p=(r+a)*c,g,v;if(o===Ci)g=(n+s)*u,v=-2*u;else if(o===Qa)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Hr=new L,hi=new lt,Uu=new L(0,0,0),Nu=new L(1,1,1),Ji=new L,ns=new L,jt=new L,Ll=new lt,Ul=new vi,$i=class Mc{constructor(t=0,i=0,r=0,a=Mc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,s=a[0],n=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var Jn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Du=0,Nl=new L,Vr=new vi,Ui=new lt,os=new L,_a=new L,Ou=new L,Fu=new vi,Dl=new L(1,0,0),Ol=new L(0,1,0),Fl=new L(0,0,1),zl={type:"added"},zu={type:"removed"},Gr={type:"childadded",child:null},$n={type:"childremoved",child:null},Qt=class Vs extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vs.DEFAULT_UP.clone();let t=new L,i=new $i,r=new vi,a=new L(1,1,1);function s(){r.setFromEuler(i,!1)}function n(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new lt},normalMatrix:{value:new $e}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Vs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Vr.setFromAxisAngle(t,i),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(t,i){return Vr.setFromAxisAngle(t,i),this.quaternion.premultiply(Vr),this}rotateX(t){return this.rotateOnAxis(Dl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,i){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Dl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?os.copy(t):os.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(_a,os,this.up):Ui.lookAt(os,_a,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Vr.setFromRotationMatrix(Ui),this.quaternion.premultiply(Vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zu),$n.child=t,this.dispatchEvent($n),$n.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,t,Ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),c=n(t.images),u=n(t.shapes),d=n(t.skeletons),p=n(t.animations),g=n(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function n(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};Qt.DEFAULT_UP=new L(0,1,0),Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new L,Ni=new L,Zn=new L,Di=new L,Wr=new L,Xr=new L,Bl=new L,Qn=new L,eo=new L,to=new L,io=new gt,ro=new gt,ao=new gt,xa=class la{constructor(t=new L,i=new L,r=new L){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ci.subVectors(t,i),a.cross(ci);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,i,r,a,s){ci.subVectors(a,i),Ni.subVectors(r,i),Zn.subVectors(t,i);let n=ci.dot(ci),o=ci.dot(Ni),l=ci.dot(Zn),h=Ni.dot(Ni),c=Ni.dot(Zn),u=n*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(n*c-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,i,r,a,s,n,o,l){return this.getBarycoord(t,i,r,a,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(n,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(t,i,r,a,s,n){return io.setScalar(0),ro.setScalar(0),ao.setScalar(0),io.fromBufferAttribute(t,i),ro.fromBufferAttribute(t,r),ao.fromBufferAttribute(t,a),n.setScalar(0),n.addScaledVector(io,s.x),n.addScaledVector(ro,s.y),n.addScaledVector(ao,s.z),n}static isFrontFacing(t,i,r,a){return ci.subVectors(r,i),Ni.subVectors(t,i),ci.cross(Ni).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ci.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return la.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return la.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,s){return la.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}containsPoint(t){return la.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return la.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,s=this.c,n,o;Wr.subVectors(a,r),Xr.subVectors(s,r),Qn.subVectors(t,r);let l=Wr.dot(Qn),h=Xr.dot(Qn);if(l<=0&&h<=0)return i.copy(r);eo.subVectors(t,a);let c=Wr.dot(eo),u=Xr.dot(eo);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return n=l/(l-c),i.copy(r).addScaledVector(Wr,n);to.subVectors(t,s);let p=Wr.dot(to),g=Xr.dot(to);if(g>=0&&p<=g)return i.copy(s);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Xr,o);let f=c*g-p*u;if(f<=0&&u-c>=0&&p-g>=0)return Bl.subVectors(s,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(Bl,o);let m=1/(f+v+d);return n=v*m,o=d*m,i.copy(r).addScaledVector(Wr,n).addScaledVector(Xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ls={h:0,s:0,l:0};function so(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Su(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=so(s,a,e+1/3),this.g=so(s,a,e),this.b=so(s,a,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],n=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=kl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return rt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(St(Ut.r*255,0,255))*65536+Math.round(St(Ut.g*255,0,255))*256+Math.round(St(Ut.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ut.copy(this),t);let i=Ut.r,r=Ut.g,a=Ut.b,s=Math.max(i,r,a),n=Math.min(i,r,a),o,l,h=(n+s)/2;if(n===s)o=0,l=0;else{let c=s-n;switch(l=h<=.5?c/(s+n):c/(2-s-n),s){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=pt){rt.fromWorkingColorSpace(Ut.copy(this),e);let t=Ut.r,i=Ut.g,r=Ut.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(ls);let i=Hn(Zi.h,ls.h,t),r=Hn(Zi.s,ls.s,t),a=Hn(Zi.l,ls.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new qe;qe.NAMES=kl;var Bu=0,ya=class extends Nr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Dr(),this.name="",this.blending=Tr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Ws,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gs&&(i.blendSrc=this.blendSrc),this.blendDst!==Ws&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let n in a){let o=a[n];delete o.metadata,s.push(o)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qi=class extends ya{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vt=new L,hs=new Ie,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xl,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}},Hl=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Vl=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ot=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},ku=0,ei=new lt,no=new Qt,jr=new L,qt=new cr,Ma=new cr,Et=new L,Ht=class Sc extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ml(t)?Vl:Hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new $e().getNormalMatrix(t);r.applyNormalMatrix(s),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,i,r){return ei.makeTranslation(t,i,r),this.applyMatrix4(ei),this}scale(t,i,r){return ei.makeScale(t,i,r),this.applyMatrix4(ei),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,s=t.length;a<s;a++){let n=t[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new ot(r,3))}else{for(let r=0,a=i.count;r<a;r++){let s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let s=i[r];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let r=this.boundingSphere.center;if(qt.setFromBufferAttribute(t),i)for(let s=0,n=i.length;s<n;s++){let o=i[s];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(qt.min,Ma.min),qt.expandByPoint(Et),Et.addVectors(qt.max,Ma.max),qt.expandByPoint(Et)):(qt.expandByPoint(Ma.min),qt.expandByPoint(Ma.max))}qt.getCenter(r);let a=0;for(let s=0,n=t.count;s<n;s++)Et.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(Et));if(i)for(let s=0,n=i.length;s<n;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Et.fromBufferAttribute(o,h),l&&(jr.fromBufferAttribute(t,h),Et.add(jr)),a=Math.max(a,r.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*r.count),4));let n=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<r.count;N++)o[N]=new L,l[N]=new L;let h=new L,c=new L,u=new L,d=new Ie,p=new Ie,g=new Ie,v=new L,f=new L;function m(N,M,S){h.fromBufferAttribute(r,N),c.fromBufferAttribute(r,M),u.fromBufferAttribute(r,S),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),f.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),o[N].add(v),o[M].add(v),o[S].add(v),l[N].add(f),l[M].add(f),l[S].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,M=y.length;N<M;++N){let S=y[N],R=S.start,U=S.count;for(let D=R,X=R+U;D<X;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let _=new L,b=new L,B=new L,A=new L;function C(N){B.fromBufferAttribute(a,N),A.copy(B);let M=o[N];_.copy(M),_.sub(B.multiplyScalar(B.dot(M))).normalize(),b.crossVectors(A,M);let S=b.dot(l[N])<0?-1:1;n.setXYZW(N,_.x,_.y,_.z,S)}for(let N=0,M=y.length;N<M;++N){let S=y[N],R=S.start,U=S.count;for(let D=R,X=R+U;D<X;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Nt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new L,s=new L,n=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);a.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),n.fromBufferAttribute(i,f),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,f),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),s.fromBufferAttribute(i,d+1),n.fromBufferAttribute(i,d+2),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Et.fromBufferAttribute(t,i),Et.normalize(),t.setXYZ(i,Et.x,Et.y,Et.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let m=0;m<c;m++)d[g++]=h[p++]}return new Nt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Sc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let s=t.morphAttributes;for(let h in s){let c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,c=n.length;h<c;h++){let u=n[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gl=new lt,pr=new Il,cs=new va,Wl=new L,us=new L,ds=new L,ps=new L,oo=new L,fs=new L,Xl=new L,ms=new L,ft=class extends Qt{constructor(e=new Ht,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){fs.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=n[o],c=a[o];h!==0&&(oo.fromBufferAttribute(c,e),s?fs.addScaledVector(oo,h):fs.addScaledVector(oo.sub(t),h))}t.add(fs)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(a),pr.copy(e.ray).recast(e.near),!(cs.containsPoint(pr.origin)===!1&&(pr.intersectSphere(cs,Wl)===null||pr.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Gl.copy(a).invert(),pr.copy(e.ray).applyMatrix4(Gl),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(n!==null)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(n.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,b=y;_<b;_+=3){let B=n.getX(_),A=n.getX(_+1),C=n.getX(_+2);r=gs(this,f,e,i,l,h,c,B,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(n.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=n.getX(v),y=n.getX(v+1),_=n.getX(v+2);r=gs(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,b=y;_<b;_+=3){let B=_,A=_+1,C=_+2;r=gs(this,f,e,i,l,h,c,B,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=v,y=v+1,_=v+2;r=gs(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function Hu(e,t,i,r,a,s,n,o){let l;if(t.side===Bt?l=r.intersectTriangle(n,s,a,!0,o):l=r.intersectTriangle(a,s,n,t.side===Gi,o),l===null)return null;ms.copy(o),ms.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(ms);return h<i.near||h>i.far?null:{distance:h,point:ms.clone(),object:e}}function gs(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,us),e.getVertexPosition(l,ds),e.getVertexPosition(h,ps);let c=Hu(e,t,i,r,us,ds,ps,Xl);if(c){let u=new L;xa.getBarycoord(Xl,us,ds,ps,u),a&&(c.uv=xa.getInterpolatedAttribute(a,o,l,h,u,new Ie)),s&&(c.uv1=xa.getInterpolatedAttribute(s,o,l,h,u,new Ie)),n&&(c.normal=xa.getInterpolatedAttribute(n,o,l,h,u,new L),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new L,materialIndex:0};xa.getNormal(us,ds,ps,d.normal),c.face=d,c.barycoord=u}return c}var er=class Ec extends Ht{constructor(t=1,i=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};let o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,n,s,0),g("z","y","x",1,-1,r,i,-t,n,s,1),g("x","z","y",1,1,t,r,i,a,n,2),g("x","z","y",1,-1,t,r,-i,a,n,3),g("x","y","z",1,-1,t,i,r,a,s,4),g("x","y","z",-1,-1,t,i,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2));function g(v,f,m,y,_,b,B,A,C,N,M){let S=b/C,R=B/N,U=b/2,D=B/2,X=A/2,ne=C+1,J=N+1,pe=0,$=0,Z=new L;for(let Te=0;Te<J;Te++){let ke=Te*R-D;for(let Ne=0;Ne<ne;Ne++){let G=Ne*S-U;Z[v]=G*y,Z[f]=ke*_,Z[m]=X,h.push(Z.x,Z.y,Z.z),Z[v]=0,Z[f]=0,Z[m]=A>0?1:-1,c.push(Z.x,Z.y,Z.z),u.push(Ne/C),u.push(1-Te/N),pe+=1}}for(let Te=0;Te<N;Te++)for(let ke=0;ke<C;ke++){let Ne=d+ke+ne*Te,G=d+ke+ne*(Te+1),Y=d+(ke+1)+ne*(Te+1),F=d+(ke+1)+ne*Te;l.push(Ne,G,F),l.push(G,Y,F),$+=6}o.addGroup(p,$,M),p+=$,d+=pe}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function Dt(e){let t={};for(let i=0;i<e.length;i++){let r=qr(e[i]);for(let a in r)t[a]=r[a]}return t}function Vu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function jl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:rt.workingColorSpace}var Gu={clone:qr,merge:Dt},Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends ya{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=Vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ql=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=new L,Yl=new Ie,Kl=new Ie,Yt=class extends ql{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kn*2*Math.atan(Math.tan(Bn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Kl),t.subVectors(Kl,Yl)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let n=this.filmOffset;n!==0&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yr=-90,Kr=1,ju=class extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(Yr,Kr,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Yr,Kr,e,t);a.layers=this.layers,this.add(a);let s=new Yt(Yr,Kr,e,t);s.layers=this.layers,this.add(s);let n=new Yt(Yr,Kr,e,t);n.layers=this.layers,this.add(n);let o=new Yt(Yr,Kr,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Yr,Kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let l of t)this.remove(l);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,n),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Jl=class extends Zt{constructor(e,t,i,r,a,s,n,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qu=class extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new er(5,5,5),a=new _i({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Wi});a.uniforms.tEquirect.value=t;let s=new ft(r,a),n=t.minFilter;return t.minFilter===Ai&&(t.minFilter=ni),new ju(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},lo=new L,Yu=new L,Ku=new $e,fr=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=lo.subVectors(i,t).cross(Yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(lo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ku.getNormalMatrix(e),r=this.coplanarPoint(lo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new va,vs=new L,ho=class{constructor(e=new fr,t=new fr,i=new fr,r=new fr,a=new fr,s=new fr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){let i=this.planes,r=e.elements,a=r[0],s=r[1],n=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],v=r[11],f=r[12],m=r[13],y=r[14],_=r[15];if(i[0].setComponents(o-a,u-l,v-d,_-f).normalize(),i[1].setComponents(o+a,u+l,v+d,_+f).normalize(),i[2].setComponents(o+s,u+h,v+p,_+m).normalize(),i[3].setComponents(o-s,u-h,v-p,_-m).normalize(),i[4].setComponents(o-n,u-c,v-g,_-y).normalize(),t===Ci)i[5].setComponents(o+n,u+c,v+g,_+y).normalize();else if(t===Qa)i[5].setComponents(n,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(vs.x=r.normal.x>0?e.max.x:e.min.x,vs.y=r.normal.y>0?e.max.y:e.min.y,vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $l(){let e=null,t=!1,i=null,r=null;function a(s,n){i(s,n),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Ju(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:s,update:n}}var ti=class Tc extends Ht{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let s=t/2,n=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],v=[],f=[];for(let m=0;m<c;m++){let y=m*d-n;for(let _=0;_<h;_++){let b=_*u-s;g.push(b,-y,0),v.push(0,0,1),f.push(_/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+h*m,b=y+h*(m+1),B=y+1+h*(m+1),A=y+1+h*m;p.push(_,b,A),p.push(b,B,A)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.width,t.height,t.widthSegments,t.heightSegments)}},$u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:$u,alphahash_pars_fragment:Zu,alphamap_fragment:Qu,alphamap_pars_fragment:ed,alphatest_fragment:td,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:sd,batching_vertex:nd,begin_vertex:od,beginnormal_vertex:ld,bsdfs:hd,iridescence_fragment:cd,bumpmap_pars_fragment:ud,clipping_planes_fragment:dd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:vd,color_pars_vertex:_d,color_vertex:xd,common:yd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:bd,emissivemap_pars_fragment:wd,colorspace_fragment:Ad,colorspace_pars_fragment:Rd,envmap_fragment:Cd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Id,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Gd,envmap_vertex:Ud,fog_vertex:Nd,fog_pars_vertex:Dd,fog_fragment:Od,fog_pars_fragment:Fd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:Bd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Vd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:jd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Zd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:ap,map_particle_fragment:sp,map_particle_pars_fragment:np,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:hp,morphcolor_vertex:cp,morphnormal_vertex:up,morphtarget_pars_vertex:dp,morphtarget_vertex:pp,normal_fragment_begin:fp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:vp,normal_vertex:_p,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:Ep,opaque_fragment:Tp,packing:bp,premultiplied_alpha_fragment:wp,project_vertex:Ap,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Dp,skinbase_vertex:Op,skinning_pars_vertex:Fp,skinning_vertex:zp,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:Hp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:jp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:Kp,background_vert:Jp,background_frag:$p,backgroundCube_vert:Zp,backgroundCube_frag:Qp,cube_vert:ef,cube_frag:tf,depth_vert:rf,depth_frag:af,distanceRGBA_vert:sf,distanceRGBA_frag:nf,equirect_vert:of,equirect_frag:lf,linedashed_vert:hf,linedashed_frag:cf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:pf,meshlambert_frag:ff,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:vf,meshnormal_frag:_f,meshphong_vert:xf,meshphong_frag:yf,meshphysical_vert:Mf,meshphysical_frag:Sf,meshtoon_vert:Ef,meshtoon_frag:Tf,points_vert:bf,points_frag:wf,shadow_vert:Af,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},De={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},xi={basic:{uniforms:Dt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Dt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Dt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Dt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Dt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Dt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Dt([De.points,De.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Dt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Dt([De.common,De.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Dt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Dt([De.sprite,De.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Dt([De.common,De.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Dt([De.lights,De.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};xi.physical={uniforms:Dt([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var _s={r:0,b:0,g:0},gr=new $i,If=new lt;function Lf(e,t,i,r,a,s,n){let o=new qe(0),l=s===!0?0:1,h,c,u=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?i:t).get(_)),_}function v(y){let _=!1,b=g(y);b===null?m(o,l):b&&b.isColor&&(m(b,1),_=!0);let B=e.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,n):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,n),(e.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(y,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===Ga)?(c===void 0&&(c=new ft(new er(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:qr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(B,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),gr.copy(_.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(If.makeRotationFromEuler(gr)),c.material.toneMapped=rt.getTransfer(b.colorSpace)!==nt,(u!==b||d!==b.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new ft(new ti(2,2),new _i({name:"BackgroundMaterial",uniforms:qr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=rt.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function m(y,_){y.getRGB(_s,jl(e)),r.buffers.color.setClear(_s.r,_s.g,_s.b,_,n)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:f}}function Uf(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),s=a,n=!1;function o(S,R,U,D,X){let ne=!1,J=u(D,U,R);s!==J&&(s=J,h(s.object)),ne=p(S,D,U,X),ne&&g(S,D,U,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(ne||n)&&(n=!1,b(S,R,U,D),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function u(S,R,U){let D=U.wireframe===!0,X=r[S.id];X===void 0&&(X={},r[S.id]=X);let ne=X[R.id];ne===void 0&&(ne={},X[R.id]=ne);let J=ne[D];return J===void 0&&(J=d(l()),ne[D]=J),J}function d(S){let R=[],U=[],D=[];for(let X=0;X<i;X++)R[X]=0,U[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:D,object:S,attributes:{},index:null}}function p(S,R,U,D){let X=s.attributes,ne=R.attributes,J=0,pe=U.getAttributes();for(let $ in pe)if(pe[$].location>=0){let Z=X[$],Te=ne[$];if(Te===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor)),Z===void 0||Z.attribute!==Te||Te&&Z.data!==Te.data)return!0;J++}return s.attributesNum!==J||s.index!==D}function g(S,R,U,D){let X={},ne=R.attributes,J=0,pe=U.getAttributes();for(let $ in pe)if(pe[$].location>=0){let Z=ne[$];Z===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));let Te={};Te.attribute=Z,Z&&Z.data&&(Te.data=Z.data),X[$]=Te,J++}s.attributes=X,s.attributesNum=J,s.index=D}function v(){let S=s.newAttributes;for(let R=0,U=S.length;R<U;R++)S[R]=0}function f(S){m(S,0)}function m(S,R){let U=s.newAttributes,D=s.enabledAttributes,X=s.attributeDivisors;U[S]=1,D[S]===0&&(e.enableVertexAttribArray(S),D[S]=1),X[S]!==R&&(e.vertexAttribDivisor(S,R),X[S]=R)}function y(){let S=s.newAttributes,R=s.enabledAttributes;for(let U=0,D=R.length;U<D;U++)R[U]!==S[U]&&(e.disableVertexAttribArray(U),R[U]=0)}function _(S,R,U,D,X,ne,J){J===!0?e.vertexAttribIPointer(S,R,U,X,ne):e.vertexAttribPointer(S,R,U,D,X,ne)}function b(S,R,U,D){v();let X=D.attributes,ne=U.getAttributes(),J=R.defaultAttributeValues;for(let pe in ne){let $=ne[pe];if($.location>=0){let Z=X[pe];if(Z===void 0&&(pe==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),pe==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){let Te=Z.normalized,ke=Z.itemSize,Ne=t.get(Z);if(Ne===void 0)continue;let G=Ne.buffer,Y=Ne.type,F=Ne.bytesPerElement,Q=Y===e.INT||Y===e.UNSIGNED_INT||Z.gpuType===rn;if(Z.isInterleavedBufferAttribute){let H=Z.data,le=H.stride,ve=Z.offset;if(H.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)m($.location+be,H.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let be=0;be<$.locationSize;be++)f($.location+be);e.bindBuffer(e.ARRAY_BUFFER,G);for(let be=0;be<$.locationSize;be++)_($.location+be,ke/$.locationSize,Y,Te,le*F,(ve+ke/$.locationSize*be)*F,Q)}else{if(Z.isInstancedBufferAttribute){for(let H=0;H<$.locationSize;H++)m($.location+H,Z.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let H=0;H<$.locationSize;H++)f($.location+H);e.bindBuffer(e.ARRAY_BUFFER,G);for(let H=0;H<$.locationSize;H++)_($.location+H,ke/$.locationSize,Y,Te,ke*F,ke/$.locationSize*H*F,Q)}}else if(J!==void 0){let Te=J[pe];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv($.location,Te);break;case 3:e.vertexAttrib3fv($.location,Te);break;case 4:e.vertexAttrib4fv($.location,Te);break;default:e.vertexAttrib1fv($.location,Te)}}}}y()}function B(){N();for(let S in r){let R=r[S];for(let U in R){let D=R[U];for(let X in D)c(D[X].object),delete D[X];delete R[U]}delete r[S]}}function A(S){if(r[S.id]===void 0)return;let R=r[S.id];for(let U in R){let D=R[U];for(let X in D)c(D[X].object),delete D[X];delete R[U]}delete r[S.id]}function C(S){for(let R in r){let U=r[R];if(U[S.id]===void 0)continue;let D=U[S.id];for(let X in D)c(D[X].object),delete D[X];delete U[S.id]}}function N(){M(),n=!0,s!==a&&(s=a,h(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:y}}function Nf(e,t,i){let r;function a(h){r=h}function s(h,c){e.drawArrays(r,h,c),i.update(c,r,1)}function n(h,c,u){u!==0&&(e.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)n(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];i.update(g,r,1)}}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Df(e,t,i,r){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(C){return!(C!==oi&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let N=C===Rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ri&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!N)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:B,maxSamples:A}}function Of(e){let t=this,i=null,r=0,a=!1,s=!1,n=new fr,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,m=e.get(u);if(!a||g===null||g.length===0||s&&!f)s?c(null):h();else{let y=s?0:r,_=y*4,b=m.clippingState||null;l.value=b,b=c(g,d,_,p);for(let B=0;B!==_;++B)b[B]=i[B];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let v=u!==null?u.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let m=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,b=p;_!==v;++_,b+=4)n.copy(u[_]).applyMatrix4(y,o),n.normal.toArray(f,b),f[b+3]=n.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Ff(e){let t=new WeakMap;function i(n,o){return o===Zs?n.mapping=wr:o===Qs&&(n.mapping=Ar),n}function r(n){if(n&&n.isTexture){let o=n.mapping;if(o===Zs||o===Qs)if(t.has(n)){let l=t.get(n).texture;return i(l,n.mapping)}else{let l=n.image;if(l&&l.height>0){let h=new qu(l.height);return h.fromEquirectangularTexture(e,n),t.set(n,h),n.addEventListener("dispose",a),i(h.texture,n.mapping)}else return null}}return n}function a(n){let o=n.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:r,dispose:s}}var co=class extends ql{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jr=4,Zl=[.125,.215,.35,.446,.526,.582],vr=20,uo=new co,Ql=new qe,po=null,fo=0,mo=0,go=!1,_r=(1+Math.sqrt(5))/2,$r=1/_r,eh=[new L(-_r,$r,0),new L(_r,$r,0),new L(-$r,0,_r),new L($r,0,_r),new L(0,_r,-$r),new L(0,_r,$r),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){po=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,fo,mo),this._renderer.xr.enabled=go,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Rr,format:oi,colorSpace:Lr,depthBuffer:!1},r=th(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(a)),this._blurMaterial=Bf(a,e,t)}return r}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,i,r){let a=new Yt(90,1,t,i),s=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(Ql),o.toneMapping=mi,o.autoClear=!1;let c=new Qi({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),u=new ft(new er,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(Ql),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,s[g],0),a.lookAt(n[g],0,0)):v===1?(a.up.set(0,0,s[g]),a.lookAt(0,n[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,n[g]));let f=this._cubeSize;xs(r,v*f,g>2?f:0,f,f),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===wr||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new ft(this._lodPlanes[0],a),n=a.uniforms;n.envMap.value=e;let o=this._cubeSize;xs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,uo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),n=eh[(r-a-1)%eh.length];this._blur(e,a-1,a,s,n)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,n){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new ft(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*vr-1),g=a/p,v=isFinite(a)?1+Math.floor(h*g):vr;v>vr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${vr}`);let f=[],m=0;for(let A=0;A<vr;++A){let C=A/g,N=Math.exp(-C*C/2);f.push(N),A===0?m+=N:A<v&&(m+=2*N)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=s==="latitudinal",n&&(u.poleAxis.value=n);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let _=this._sizeLods[r],b=3*_*(r>y-Jr?r-y+Jr:0),B=4*(this._cubeSize-_);xs(t,b,B,3*_,2*_),o.setRenderTarget(t),o.render(c,uo)}};function zf(e){let t=[],i=[],r=[],a=e,s=e-Jr+1+Zl.length;for(let n=0;n<s;n++){let o=Math.pow(2,a);i.push(o);let l=1/o;n>e-Jr?l=Zl[n-e+Jr-1]:n===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,v=3,f=2,m=1,y=new Float32Array(v*g*p),_=new Float32Array(f*g*p),b=new Float32Array(m*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,N=A>2?0:-1,M=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];y.set(M,v*g*A),_.set(d,f*g*A);let S=[A,A,A,A,A,A];b.set(S,m*g*A)}let B=new Ht;B.setAttribute("position",new Nt(y,v)),B.setAttribute("uv",new Nt(_,f)),B.setAttribute("faceIndex",new Nt(b,m)),t.push(B),a>Jr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function th(e,t,i){let r=new ji(e,t,i);return r.texture.mapping=Ga,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xs(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Bf(e,t,i){let r=new Float32Array(vr),a=new L(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ih(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function rh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kf(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===Zs||l===Qs,c=l===wr||l===Ar;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new vo(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new vo(e)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function s(o){let l=o.target;l.removeEventListener("dispose",s);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function n(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:n}}function Hf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&fa("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Vf(e,t,i,r){let a={},s=new WeakMap;function n(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}d.removeEventListener("dispose",n),delete a[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",n),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let _=0,b=y.length;_<b;_+=3){let B=y[_+0],A=y[_+1],C=y[_+2];d.push(B,A,A,C,C,B)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let B=_+0,A=_+1,C=_+2;d.push(B,A,A,C,C,B)}}else return;let f=new(Ml(d)?Vl:Hl)(d,1);f.version=v;let m=s.get(u);m&&t.remove(m),s.set(u,f)}function c(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Gf(e,t,i){let r;function a(d){r=d}let s,n;function o(d){s=d.type,n=d.bytesPerElement}function l(d,p){e.drawElements(r,p,s,d*n),i.update(p,r,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(r,p,s,d*n,g),i.update(p,r,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,d,0,g);let v=0;for(let f=0;f<g;f++)v+=p[f];i.update(v,r,1)}function u(d,p,g,v){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)h(d[m]/n,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(r,p,0,s,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y]*v[y];i.update(m,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Wf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Xf(e,t,i){let r=new WeakMap,a=new gt;function s(n,o,l){let h=n.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){N.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;g===!0&&(b=1),v===!0&&(b=2),f===!0&&(b=3);let B=o.attributes.position.count*b,A=1;B>t.maxTextureSize&&(A=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);let C=new Float32Array(B*A*4*u),N=new Cl(C,B,A,u);N.type=gi,N.needsUpdate=!0;let M=b*4;for(let S=0;S<u;S++){let R=m[S],U=y[S],D=_[S],X=B*A*4*S;for(let ne=0;ne<R.count;ne++){let J=ne*M;g===!0&&(a.fromBufferAttribute(R,ne),C[X+J+0]=a.x,C[X+J+1]=a.y,C[X+J+2]=a.z,C[X+J+3]=0),v===!0&&(a.fromBufferAttribute(U,ne),C[X+J+4]=a.x,C[X+J+5]=a.y,C[X+J+6]=a.z,C[X+J+7]=0),f===!0&&(a.fromBufferAttribute(D,ne),C[X+J+8]=a.x,C[X+J+9]=a.y,C[X+J+10]=a.z,C[X+J+11]=D.itemSize===4?a.w:1)}}d={count:u,texture:N,size:new Ie(B,A)},r.set(o,d),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function jf(e,t,i,r){let a=new WeakMap;function s(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function n(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:n}}var ah=class extends Zt{constructor(e,t,i,r,a,s,n,o,l,h=Pr){if(h!==Pr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Pr&&(i=hr),i===void 0&&h===Ir&&(i=Cr),super(null,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=n!==void 0?n:Xt,this.minFilter=o!==void 0?o:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=new Zt,nh=new ah(1,1),oh=new Cl,lh=new Iu,hh=new Jl,ch=[],uh=[],dh=new Float32Array(16),ph=new Float32Array(9),fh=new Float32Array(4);function Zr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=ch[a];if(s===void 0&&(s=new Float32Array(a),ch[a]=s),t!==0){r.toArray(s,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(s,o)}return s}function _t(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function xt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function ys(e,t){let i=uh[t];i===void 0&&(i=new Int32Array(t),uh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function qf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Yf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_t(i,t))return;e.uniform2fv(this.addr,t),xt(i,t)}}function Kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_t(i,t))return;e.uniform3fv(this.addr,t),xt(i,t)}}function Jf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_t(i,t))return;e.uniform4fv(this.addr,t),xt(i,t)}}function $f(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_t(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),xt(i,t)}else{if(_t(i,r))return;fh.set(r),e.uniformMatrix2fv(this.addr,!1,fh),xt(i,r)}}function Zf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_t(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),xt(i,t)}else{if(_t(i,r))return;ph.set(r),e.uniformMatrix3fv(this.addr,!1,ph),xt(i,r)}}function Qf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_t(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),xt(i,t)}else{if(_t(i,r))return;dh.set(r),e.uniformMatrix4fv(this.addr,!1,dh),xt(i,r)}}function em(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_t(i,t))return;e.uniform2iv(this.addr,t),xt(i,t)}}function im(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_t(i,t))return;e.uniform3iv(this.addr,t),xt(i,t)}}function rm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_t(i,t))return;e.uniform4iv(this.addr,t),xt(i,t)}}function am(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function sm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_t(i,t))return;e.uniform2uiv(this.addr,t),xt(i,t)}}function nm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_t(i,t))return;e.uniform3uiv(this.addr,t),xt(i,t)}}function om(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_t(i,t))return;e.uniform4uiv(this.addr,t),xt(i,t)}}function lm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(nh.compareFunction=_l,s=nh):s=sh,i.setTexture2D(t||s,a)}function hm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||lh,a)}function cm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||hh,a)}function um(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||oh,a)}function dm(e){switch(e){case 5126:return qf;case 35664:return Yf;case 35665:return Kf;case 35666:return Jf;case 35674:return $f;case 35675:return Zf;case 35676:return Qf;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return am;case 36294:return sm;case 36295:return nm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return um}}function pm(e,t){e.uniform1fv(this.addr,t)}function fm(e,t){let i=Zr(t,this.size,2);e.uniform2fv(this.addr,i)}function mm(e,t){let i=Zr(t,this.size,3);e.uniform3fv(this.addr,i)}function gm(e,t){let i=Zr(t,this.size,4);e.uniform4fv(this.addr,i)}function vm(e,t){let i=Zr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function _m(e,t){let i=Zr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function xm(e,t){let i=Zr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function ym(e,t){e.uniform1iv(this.addr,t)}function Mm(e,t){e.uniform2iv(this.addr,t)}function Sm(e,t){e.uniform3iv(this.addr,t)}function Em(e,t){e.uniform4iv(this.addr,t)}function Tm(e,t){e.uniform1uiv(this.addr,t)}function bm(e,t){e.uniform2uiv(this.addr,t)}function wm(e,t){e.uniform3uiv(this.addr,t)}function Am(e,t){e.uniform4uiv(this.addr,t)}function Rm(e,t,i){let r=this.cache,a=t.length,s=ys(i,a);_t(r,s)||(e.uniform1iv(this.addr,s),xt(r,s));for(let n=0;n!==a;++n)i.setTexture2D(t[n]||sh,s[n])}function Cm(e,t,i){let r=this.cache,a=t.length,s=ys(i,a);_t(r,s)||(e.uniform1iv(this.addr,s),xt(r,s));for(let n=0;n!==a;++n)i.setTexture3D(t[n]||lh,s[n])}function Pm(e,t,i){let r=this.cache,a=t.length,s=ys(i,a);_t(r,s)||(e.uniform1iv(this.addr,s),xt(r,s));for(let n=0;n!==a;++n)i.setTextureCube(t[n]||hh,s[n])}function Im(e,t,i){let r=this.cache,a=t.length,s=ys(i,a);_t(r,s)||(e.uniform1iv(this.addr,s),xt(r,s));for(let n=0;n!==a;++n)i.setTexture2DArray(t[n]||oh,s[n])}function Lm(e){switch(e){case 5126:return pm;case 35664:return fm;case 35665:return mm;case 35666:return gm;case 35674:return vm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return bm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}var Um=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dm(t.type)}},Nm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}},Dm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let n=r[a];n.setValue(e,t[n.id],i)}}},xo=/(\w+)(\])?(\[|\.)?/g;function mh(e,t){e.seq.push(t),e.map[t.id]=t}function Om(e,t,i){let r=e.name,a=r.length;for(xo.lastIndex=0;;){let s=xo.exec(r),n=xo.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===a){mh(i,h===void 0?new Um(o,e,t):new Nm(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Dm(o),mh(i,c)),i=c}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Om(a,s,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let n=t[a],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function gh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Fm=37297,zm=0;function Bm(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let n=a;n<s;n++){let o=n+1;r.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return r.join(`
`)}var vh=new $e;function km(e){rt._getMatrix(vh,rt.workingColorSpace,e);let t=`mat3( ${vh.elements.map(i=>i.toFixed(4))} )`;switch(rt.getTransfer(e)){case Za:return[t,"LinearTransferOETF"];case nt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function _h(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let n=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+Bm(e.getShaderSource(t),n)}else return a}function Hm(e,t){let i=km(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Vm(e,t){let i;switch(t){case au:i="Linear";break;case su:i="Reinhard";break;case nu:i="Cineon";break;case ou:i="ACESFilmic";break;case hu:i="AgX";break;case cu:i="Neutral";break;case lu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ss=new L;function Gm(){rt.getLuminanceCoefficients(Ss);let e=Ss.x.toFixed(4),t=Ss.y.toFixed(4),i=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function Xm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function jm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let s=e.getActiveAttrib(t,a),n=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[n]={type:s.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function Sa(e){return e!==""}function xh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(e){return e.replace(qm,Km)}var Ym=new Map;function Km(e,t){let i=Je[t];if(i===void 0){let r=Ym.get(t);if(r!==void 0)i=Je[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return yo(i)}var Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(e){return e.replace(Jm,$m)}function $m(e,t,i,r){let a="";for(let s=parseInt(t);s<parseInt(i);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Sh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Zo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function Qm(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case wr:case Ar:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ar&&(t="ENVMAP_MODE_REFRACTION"),t}function tg(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case il:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function ig(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function rg(e,t,i,r){let a=e.getContext(),s=i.defines,n=i.vertexShader,o=i.fragmentShader,l=Zm(i),h=Qm(i),c=eg(i),u=tg(i),d=ig(i),p=Wm(i),g=Xm(s),v=a.createProgram(),f,m,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Sa).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`)):(f=[Sh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),m=[Sh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==mi?"#define TONE_MAPPING":"",i.toneMapping!==mi?Je.tonemapping_pars_fragment:"",i.toneMapping!==mi?Vm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Hm("linearToOutputTexel",i.outputColorSpace),Gm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sa).join(`
`)),n=yo(n),n=xh(n,i),n=yh(n,i),o=yo(o),o=xh(o,i),o=yh(o,i),n=Mh(n),o=Mh(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",i.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=y+f+n,b=y+m+o,B=gh(a,a.VERTEX_SHADER,_),A=gh(a,a.FRAGMENT_SHADER,b);a.attachShader(v,B),a.attachShader(v,A),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function C(R){if(e.debug.checkShaderErrors){let U=a.getProgramInfoLog(v).trim(),D=a.getShaderInfoLog(B).trim(),X=a.getShaderInfoLog(A).trim(),ne=!0,J=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,B,A);else{let pe=_h(a,B,"vertex"),$=_h(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+pe+`
`+$)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||X==="")&&(J=!1);J&&(R.diagnostics={runnable:ne,programLog:U,vertexShader:{log:D,prefix:f},fragmentShader:{log:X,prefix:m}})}a.deleteShader(B),a.deleteShader(A),N=new Ms(a,v),M=jm(a,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(v,Fm)),S},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=A,this}var ag=0,sg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ng(e),t.set(e,i)),i}},ng=class{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}};function og(e,t,i,r,a,s,n){let o=new Jn,l=new sg,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function f(M,S,R,U,D){let X=U.fog,ne=D.geometry,J=M.isMeshStandardMaterial?U.environment:null,pe=(M.isMeshStandardMaterial?i:t).get(M.envMap||J),$=pe&&pe.mapping===Ga?pe.image.height:null,Z=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Te=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ke=Te!==void 0?Te.length:0,Ne=0;ne.morphAttributes.position!==void 0&&(Ne=1),ne.morphAttributes.normal!==void 0&&(Ne=2),ne.morphAttributes.color!==void 0&&(Ne=3);let G,Y,F,Q;if(Z){let Ze=xi[Z];G=Ze.vertexShader,Y=Ze.fragmentShader}else G=M.vertexShader,Y=M.fragmentShader,l.update(M),F=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);let H=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),ve=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,V=!!M.map,ae=!!M.matcap,w=!!pe,Ee=!!M.aoMap,he=!!M.lightMap,Ae=!!M.bumpMap,k=!!M.normalMap,we=!!M.displacementMap,j=!!M.emissiveMap,ce=!!M.metalnessMap,T=!!M.roughnessMap,x=M.anisotropy>0,I=M.clearcoat>0,ee=M.dispersion>0,se=M.iridescence>0,ie=M.sheen>0,ze=M.transmission>0,_e=x&&!!M.anisotropyMap,Pe=I&&!!M.clearcoatMap,He=I&&!!M.clearcoatNormalMap,Me=I&&!!M.clearcoatRoughnessMap,Oe=se&&!!M.iridescenceMap,fe=se&&!!M.iridescenceThicknessMap,me=ie&&!!M.sheenColorMap,ue=ie&&!!M.sheenRoughnessMap,Re=!!M.specularMap,de=!!M.specularColorMap,xe=!!M.specularIntensityMap,P=ze&&!!M.transmissionMap,te=ze&&!!M.thicknessMap,W=!!M.gradientMap,re=!!M.alphaMap,ye=M.alphaTest>0,oe=!!M.alphaHash,Be=!!M.extensions,je=mi;M.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(je=e.toneMapping);let it={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Y,defines:M.defines,customVertexShaderID:F,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:be,batchingColor:be&&D._colorsTexture!==null,instancing:ve,instancingColor:ve&&D.instanceColor!==null,instancingMorph:ve&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?e.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Lr,alphaToCoverage:!!M.alphaToCoverage,map:V,matcap:ae,envMap:w,envMapMode:w&&pe.mapping,envMapCubeUVHeight:$,aoMap:Ee,lightMap:he,bumpMap:Ae,normalMap:k,displacementMap:d&&we,emissiveMap:j,normalMapObjectSpace:k&&M.normalMapType===fu,normalMapTangentSpace:k&&M.normalMapType===gl,metalnessMap:ce,roughnessMap:T,anisotropy:x,anisotropyMap:_e,clearcoat:I,clearcoatMap:Pe,clearcoatNormalMap:He,clearcoatRoughnessMap:Me,dispersion:ee,iridescence:se,iridescenceMap:Oe,iridescenceThicknessMap:fe,sheen:ie,sheenColorMap:me,sheenRoughnessMap:ue,specularMap:Re,specularColorMap:de,specularIntensityMap:xe,transmission:ze,transmissionMap:P,thicknessMap:te,gradientMap:W,opaque:M.transparent===!1&&M.blending===Tr&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:ye,alphaHash:oe,combine:M.combine,mapUv:V&&v(M.map.channel),aoMapUv:Ee&&v(M.aoMap.channel),lightMapUv:he&&v(M.lightMap.channel),bumpMapUv:Ae&&v(M.bumpMap.channel),normalMapUv:k&&v(M.normalMap.channel),displacementMapUv:we&&v(M.displacementMap.channel),emissiveMapUv:j&&v(M.emissiveMap.channel),metalnessMapUv:ce&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:_e&&v(M.anisotropyMap.channel),clearcoatMapUv:Pe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ue&&v(M.sheenRoughnessMap.channel),specularMapUv:Re&&v(M.specularMap.channel),specularColorMapUv:de&&v(M.specularColorMap.channel),specularIntensityMapUv:xe&&v(M.specularIntensityMap.channel),transmissionMapUv:P&&v(M.transmissionMap.channel),thicknessMapUv:te&&v(M.thicknessMap.channel),alphaMapUv:re&&v(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(k||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!ne.attributes.uv&&(V||re),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:le,skinning:D.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:V&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:j&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fi,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=h.has(1),it.vertexUv2s=h.has(2),it.vertexUv3s=h.has(3),h.clear(),it}function m(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(S,M),_(S,M),S.push(e.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){let S=g[M.type],R;if(S){let U=xi[S];R=Gu.clone(U.uniforms)}else R=M.uniforms;return R}function B(M,S){let R;for(let U=0,D=c.length;U<D;U++){let X=c[U];if(X.cacheKey===S){R=X,++R.usedTimes;break}}return R===void 0&&(R=new rg(e,S,M,s),c.push(R)),R}function A(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:b,acquireProgram:B,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:N}}function lg(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function r(n){e.delete(n)}function a(n,o,l){e.get(n)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:s}}function hg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Eh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Th(){let e=[],t=0,i=[],r=[],a=[];function s(){t=0,i.length=0,r.length=0,a.length=0}function n(u,d,p,g,v,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function o(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.push(m):p.transparent===!0?a.push(m):i.push(m)}function l(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.unshift(m):p.transparent===!0?a.unshift(m):i.unshift(m)}function h(u,d){i.length>1&&i.sort(u||hg),r.length>1&&r.sort(d||Eh),a.length>1&&a.sort(d||Eh)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:s,push:o,unshift:l,finish:c,sort:h}}function cg(){let e=new WeakMap;function t(r,a){let s=e.get(r),n;return s===void 0?(n=new Th,e.set(r,[n])):a>=s.length?(n=new Th,s.push(n)):n=s[a],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function ug(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new L,color:new qe};break;case"SpotLight":i={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":i={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=i,i}}}function dg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var pg=0;function fg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function mg(e){let t=new ug,i=dg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new L);let a=new L,s=new lt,n=new lt;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,y=0,_=0,b=0,B=0,A=0,C=0;h.sort(fg);for(let M=0,S=h.length;M<S;M++){let R=h[M],U=R.color,D=R.intensity,X=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=U.r*D,u+=U.g*D,d+=U.b*D;else if(R.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(R.sh.coefficients[J],D);C++}else if(R.isDirectionalLight){let J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let pe=R.shadow,$=i.get(R);$.shadowIntensity=pe.intensity,$.shadowBias=pe.bias,$.shadowNormalBias=pe.normalBias,$.shadowRadius=pe.radius,$.shadowMapSize=pe.mapSize,r.directionalShadow[p]=$,r.directionalShadowMap[p]=ne,r.directionalShadowMatrix[p]=R.shadow.matrix,y++}r.directional[p]=J,p++}else if(R.isSpotLight){let J=t.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(U).multiplyScalar(D),J.distance=X,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,r.spot[v]=J;let pe=R.shadow;if(R.map&&(r.spotLightMap[B]=R.map,B++,pe.updateMatrices(R),R.castShadow&&A++),r.spotLightMatrix[v]=pe.matrix,R.castShadow){let $=i.get(R);$.shadowIntensity=pe.intensity,$.shadowBias=pe.bias,$.shadowNormalBias=pe.normalBias,$.shadowRadius=pe.radius,$.shadowMapSize=pe.mapSize,r.spotShadow[v]=$,r.spotShadowMap[v]=ne,b++}v++}else if(R.isRectAreaLight){let J=t.get(R);J.color.copy(U).multiplyScalar(D),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),r.rectArea[f]=J,f++}else if(R.isPointLight){let J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){let pe=R.shadow,$=i.get(R);$.shadowIntensity=pe.intensity,$.shadowBias=pe.bias,$.shadowNormalBias=pe.normalBias,$.shadowRadius=pe.radius,$.shadowMapSize=pe.mapSize,$.shadowCameraNear=pe.camera.near,$.shadowCameraFar=pe.camera.far,r.pointShadow[g]=$,r.pointShadowMap[g]=ne,r.pointShadowMatrix[g]=R.shadow.matrix,_++}r.point[g]=J,g++}else if(R.isHemisphereLight){let J=t.get(R);J.skyColor.copy(R.color).multiplyScalar(D),J.groundColor.copy(R.groundColor).multiplyScalar(D),r.hemi[m]=J,m++}}f>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let N=r.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==f||N.hemiLength!==m||N.numDirectionalShadows!==y||N.numPointShadows!==_||N.numSpotShadows!==b||N.numSpotMaps!==B||N.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=f,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=b+B-A,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=f,N.hemiLength=m,N.numDirectionalShadows=y,N.numPointShadows=_,N.numSpotShadows=b,N.numSpotMaps=B,N.numLightProbes=C,r.version=pg++)}function l(h,c){let u=0,d=0,p=0,g=0,v=0,f=c.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){let _=h[m];if(_.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),u++}else if(_.isSpotLight){let b=r.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),p++}else if(_.isRectAreaLight){let b=r.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),n.identity(),s.copy(_.matrixWorld),s.premultiply(f),n.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(n),b.halfHeight.applyMatrix4(n),g++}else if(_.isPointLight){let b=r.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let b=r.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:r}}function bh(e){let t=new mg(e),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function s(c){i.push(c)}function n(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function gg(e){let t=new WeakMap;function i(a,s=0){let n=t.get(a),o;return n===void 0?(o=new bh(e),t.set(a,[o])):s>=n.length?(o=new bh(e),n.push(o)):o=n[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var vg=class extends ya{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_g=class extends ya{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mg(e,t,i){let r=new ho,a=new Ie,s=new Ie,n=new gt,o=new vg({depthPacking:pu}),l=new _g,h={},c=i.maxTextureSize,u={[Gi]:Bt,[Bt]:Gi,[fi]:fi},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:xg,fragmentShader:yg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ft(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let m=this.type;this.render=function(A,C,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let M=e.getRenderTarget(),S=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),U=e.state;U.setBlending(Wi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=m!==wi&&this.type===wi,X=m===wi&&this.type!==wi;for(let ne=0,J=A.length;ne<J;ne++){let pe=A[ne],$=pe.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);let Z=$.getFrameExtents();if(a.multiply(Z),s.copy($.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/Z.x),a.x=s.x*Z.x,$.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/Z.y),a.y=s.y*Z.y,$.mapSize.y=s.y)),$.map===null||D===!0||X===!0){let ke=this.type!==wi?{minFilter:Xt,magFilter:Xt}:{};$.map!==null&&$.map.dispose(),$.map=new ji(a.x,a.y,ke),$.map.texture.name=pe.name+".shadowMap",$.camera.updateProjectionMatrix()}e.setRenderTarget($.map),e.clear();let Te=$.getViewportCount();for(let ke=0;ke<Te;ke++){let Ne=$.getViewport(ke);n.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),U.viewport(n),$.updateMatrices(pe,ke),r=$.getFrustum(),b(C,N,$.camera,pe,this.type)}$.isPointLightShadow!==!0&&this.type===wi&&y($,N),$.needsUpdate=!1}m=this.type,f.needsUpdate=!1,e.setRenderTarget(M,S,R)};function y(A,C){let N=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ji(a.x,a.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(C,null,N,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(C,null,N,p,v,null)}function _(A,C,N,M){let S=null,R=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=N.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let U=S.uuid,D=C.uuid,X=h[U];X===void 0&&(X={},h[U]=X);let ne=X[D];ne===void 0&&(ne=S.clone(),X[D]=ne,C.addEventListener("dispose",B)),S=ne}if(S.visible=C.visible,S.wireframe=C.wireframe,M===wi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let U=e.properties.get(S);U.light=N}return S}function b(A,C,N,M,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===wi)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let U=t.update(A),D=A.material;if(Array.isArray(D)){let X=U.groups;for(let ne=0,J=X.length;ne<J;ne++){let pe=X[ne],$=D[pe.materialIndex];if($&&$.visible){let Z=_(A,$,M,S);A.onBeforeShadow(e,A,C,N,U,Z,pe),e.renderBufferDirect(N,null,U,Z,A,pe),A.onAfterShadow(e,A,C,N,U,Z,pe)}}}else if(D.visible){let X=_(A,D,M,S);A.onBeforeShadow(e,A,C,N,U,X,null),e.renderBufferDirect(N,null,U,X,A,null),A.onAfterShadow(e,A,C,N,U,X,null)}}let R=A.children;for(let U=0,D=R.length;U<D;U++)b(R[U],C,N,M,S)}function B(A){A.target.removeEventListener("dispose",B);for(let C in h){let N=h[C],M=A.target.uuid;M in N&&(N[M].dispose(),delete N[M])}}}var Sg={[Xs]:js,[qs]:Js,[Ys]:$s,[br]:Ks,[js]:Xs,[Js]:qs,[$s]:Ys,[Ks]:br};function Eg(e,t){function i(){let P=!1,te=new gt,W=null,re=new gt(0,0,0,0);return{setMask:function(ye){W!==ye&&!P&&(e.colorMask(ye,ye,ye,ye),W=ye)},setLocked:function(ye){P=ye},setClear:function(ye,oe,Be,je,it){it===!0&&(ye*=je,oe*=je,Be*=je),te.set(ye,oe,Be,je),re.equals(te)===!1&&(e.clearColor(ye,oe,Be,je),re.copy(te))},reset:function(){P=!1,W=null,re.set(-1,0,0,0)}}}function r(){let P=!1,te=!1,W=null,re=null,ye=null;return{setReversed:function(oe){if(te!==oe){let Be=t.get("EXT_clip_control");te?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);let je=ye;ye=null,this.setClear(je)}te=oe},getReversed:function(){return te},setTest:function(oe){oe?H(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(oe){W!==oe&&!P&&(e.depthMask(oe),W=oe)},setFunc:function(oe){if(te&&(oe=Sg[oe]),re!==oe){switch(oe){case Xs:e.depthFunc(e.NEVER);break;case js:e.depthFunc(e.ALWAYS);break;case qs:e.depthFunc(e.LESS);break;case br:e.depthFunc(e.LEQUAL);break;case Ys:e.depthFunc(e.EQUAL);break;case Ks:e.depthFunc(e.GEQUAL);break;case Js:e.depthFunc(e.GREATER);break;case $s:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}re=oe}},setLocked:function(oe){P=oe},setClear:function(oe){ye!==oe&&(te&&(oe=1-oe),e.clearDepth(oe),ye=oe)},reset:function(){P=!1,W=null,re=null,ye=null,te=!1}}}function a(){let P=!1,te=null,W=null,re=null,ye=null,oe=null,Be=null,je=null,it=null;return{setTest:function(Ze){P||(Ze?H(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(Ze){te!==Ze&&!P&&(e.stencilMask(Ze),te=Ze)},setFunc:function(Ze,Jt,Gt){(W!==Ze||re!==Jt||ye!==Gt)&&(e.stencilFunc(Ze,Jt,Gt),W=Ze,re=Jt,ye=Gt)},setOp:function(Ze,Jt,Gt){(oe!==Ze||Be!==Jt||je!==Gt)&&(e.stencilOp(Ze,Jt,Gt),oe=Ze,Be=Jt,je=Gt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){it!==Ze&&(e.clearStencil(Ze),it=Ze)},reset:function(){P=!1,te=null,W=null,re=null,ye=null,oe=null,Be=null,je=null,it=null}}}let s=new i,n=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,v=!1,f=null,m=null,y=null,_=null,b=null,B=null,A=null,C=new qe(0,0,0),N=0,M=!1,S=null,R=null,U=null,D=null,X=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,pe=0,$=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec($)[1]),J=pe>=1):$.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=pe>=2);let Z=null,Te={},ke=e.getParameter(e.SCISSOR_BOX),Ne=e.getParameter(e.VIEWPORT),G=new gt().fromArray(ke),Y=new gt().fromArray(Ne);function F(P,te,W,re){let ye=new Uint8Array(4),oe=e.createTexture();e.bindTexture(P,oe),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Be=0;Be<W;Be++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,re,0,e.RGBA,e.UNSIGNED_BYTE,ye):e.texImage2D(te+Be,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ye);return oe}let Q={};Q[e.TEXTURE_2D]=F(e.TEXTURE_2D,e.TEXTURE_2D,1),Q[e.TEXTURE_CUBE_MAP]=F(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[e.TEXTURE_2D_ARRAY]=F(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Q[e.TEXTURE_3D]=F(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),H(e.DEPTH_TEST),n.setFunc(br),Ae(!1),k($o),H(e.CULL_FACE),Ee(Wi);function H(P){c[P]!==!0&&(e.enable(P),c[P]=!0)}function le(P){c[P]!==!1&&(e.disable(P),c[P]=!1)}function ve(P,te){return u[P]!==te?(e.bindFramebuffer(P,te),u[P]=te,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=te),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=te),!0):!1}function be(P,te){let W=p,re=!1;if(P){W=d.get(te),W===void 0&&(W=[],d.set(te,W));let ye=P.textures;if(W.length!==ye.length||W[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Be=ye.length;oe<Be;oe++)W[oe]=e.COLOR_ATTACHMENT0+oe;W.length=ye.length,re=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,re=!0);re&&e.drawBuffers(W)}function V(P){return g!==P?(e.useProgram(P),g=P,!0):!1}let ae={[or]:e.FUNC_ADD,[Bc]:e.FUNC_SUBTRACT,[kc]:e.FUNC_REVERSE_SUBTRACT};ae[Hc]=e.MIN,ae[Vc]=e.MAX;let w={[Gc]:e.ZERO,[Wc]:e.ONE,[Xc]:e.SRC_COLOR,[Gs]:e.SRC_ALPHA,[$c]:e.SRC_ALPHA_SATURATE,[Kc]:e.DST_COLOR,[qc]:e.DST_ALPHA,[jc]:e.ONE_MINUS_SRC_COLOR,[Ws]:e.ONE_MINUS_SRC_ALPHA,[Jc]:e.ONE_MINUS_DST_COLOR,[Yc]:e.ONE_MINUS_DST_ALPHA,[Zc]:e.CONSTANT_COLOR,[Qc]:e.ONE_MINUS_CONSTANT_COLOR,[eu]:e.CONSTANT_ALPHA,[tu]:e.ONE_MINUS_CONSTANT_ALPHA};function Ee(P,te,W,re,ye,oe,Be,je,it,Ze){if(P===Wi){v===!0&&(le(e.BLEND),v=!1);return}if(v===!1&&(H(e.BLEND),v=!0),P!==zc){if(P!==f||Ze!==M){if((m!==or||b!==or)&&(e.blendEquation(e.FUNC_ADD),m=or,b=or),Ze)switch(P){case Tr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qo:e.blendFunc(e.ONE,e.ONE);break;case el:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tl:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Tr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qo:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case el:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tl:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,_=null,B=null,A=null,C.set(0,0,0),N=0,f=P,M=Ze}return}ye=ye||te,oe=oe||W,Be=Be||re,(te!==m||ye!==b)&&(e.blendEquationSeparate(ae[te],ae[ye]),m=te,b=ye),(W!==y||re!==_||oe!==B||Be!==A)&&(e.blendFuncSeparate(w[W],w[re],w[oe],w[Be]),y=W,_=re,B=oe,A=Be),(je.equals(C)===!1||it!==N)&&(e.blendColor(je.r,je.g,je.b,it),C.copy(je),N=it),f=P,M=!1}function he(P,te){P.side===fi?le(e.CULL_FACE):H(e.CULL_FACE);let W=P.side===Bt;te&&(W=!W),Ae(W),P.blending===Tr&&P.transparent===!1?Ee(Wi):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),n.setFunc(P.depthFunc),n.setTest(P.depthTest),n.setMask(P.depthWrite),s.setMask(P.colorWrite);let re=P.stencilWrite;o.setTest(re),re&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),j(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?H(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(P){S!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),S=P)}function k(P){P!==Dc?(H(e.CULL_FACE),P!==R&&(P===$o?e.cullFace(e.BACK):P===Oc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),R=P}function we(P){P!==U&&(J&&e.lineWidth(P),U=P)}function j(P,te,W){P?(H(e.POLYGON_OFFSET_FILL),(D!==te||X!==W)&&(e.polygonOffset(te,W),D=te,X=W)):le(e.POLYGON_OFFSET_FILL)}function ce(P){P?H(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function T(P){P===void 0&&(P=e.TEXTURE0+ne-1),Z!==P&&(e.activeTexture(P),Z=P)}function x(P,te,W){W===void 0&&(Z===null?W=e.TEXTURE0+ne-1:W=Z);let re=Te[W];re===void 0&&(re={type:void 0,texture:void 0},Te[W]=re),(re.type!==P||re.texture!==te)&&(Z!==W&&(e.activeTexture(W),Z=W),e.bindTexture(P,te||Q[P]),re.type=P,re.texture=te)}function I(){let P=Te[Z];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){G.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),G.copy(P))}function ue(P){Y.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Re(P,te){let W=h.get(te);W===void 0&&(W=new WeakMap,h.set(te,W));let re=W.get(P);re===void 0&&(re=e.getUniformBlockIndex(te,P.name),W.set(P,re))}function de(P,te){let W=h.get(te).get(P);l.get(te)!==W&&(e.uniformBlockBinding(te,W,P.__bindingPointIndex),l.set(te,W))}function xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},Z=null,Te={},u={},d=new WeakMap,p=[],g=null,v=!1,f=null,m=null,y=null,_=null,b=null,B=null,A=null,C=new qe(0,0,0),N=0,M=!1,S=null,R=null,U=null,D=null,X=null,G.set(0,0,e.canvas.width,e.canvas.height),Y.set(0,0,e.canvas.width,e.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:H,disable:le,bindFramebuffer:ve,drawBuffers:be,useProgram:V,setBlending:Ee,setMaterial:he,setFlipSided:Ae,setCullFace:k,setLineWidth:we,setPolygonOffset:j,setScissorTest:ce,activeTexture:T,bindTexture:x,unbindTexture:I,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:Oe,texImage3D:fe,updateUBOMapping:Re,uniformBlockBinding:de,texStorage2D:He,texStorage3D:Me,texSubImage2D:ie,texSubImage3D:ze,compressedTexSubImage2D:_e,compressedTexSubImage3D:Pe,scissor:me,viewport:ue,reset:xe}}function wh(e,t,i,r){let a=Tg(r);switch(i){case ol:return e*t;case hl:return e*t;case cl:return e*t*2;case nn:return e*t/a.components*a.byteLength;case on:return e*t/a.components*a.byteLength;case ul:return e*t*2/a.components*a.byteLength;case ln:return e*t*2/a.components*a.byteLength;case ll:return e*t*3/a.components*a.byteLength;case oi:return e*t*4/a.components*a.byteLength;case hn:return e*t*4/a.components*a.byteLength;case ja:case qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ya:case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case un:case pn:return Math.max(e,16)*Math.max(t,8)/4;case cn:case dn:return Math.max(e,8)*Math.max(t,8)/2;case fn:case mn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _n:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case xn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case yn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Mn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Sn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case En:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Tn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case wn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case An:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Rn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Cn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Pn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ja:case In:case Ln:return Math.ceil(e/4)*Math.ceil(t/4)*16;case dl:case Un:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Nn:case Dn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Tg(e){switch(e){case Ri:case al:return{byteLength:1,components:1};case da:case sl:case Rr:return{byteLength:2,components:1};case an:case sn:return{byteLength:2,components:4};case hr:case rn:case gi:return{byteLength:4,components:1};case nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function bg(e,t,i,r,a,s,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ie,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):es("canvas")}function v(T,x,I){let ee=1,se=ce(T);if((se.width>I||se.height>I)&&(ee=I/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ie=Math.floor(ee*se.width),ze=Math.floor(ee*se.height);u===void 0&&(u=g(ie,ze));let _e=x?g(ie,ze):u;return _e.width=ie,_e.height=ze,_e.getContext("2d").drawImage(T,0,0,ie,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+ze+")."),_e}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(T,x,I,ee,se=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=x;if(x===e.RED&&(I===e.FLOAT&&(ie=e.R32F),I===e.HALF_FLOAT&&(ie=e.R16F),I===e.UNSIGNED_BYTE&&(ie=e.R8)),x===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(ie=e.R8UI),I===e.UNSIGNED_SHORT&&(ie=e.R16UI),I===e.UNSIGNED_INT&&(ie=e.R32UI),I===e.BYTE&&(ie=e.R8I),I===e.SHORT&&(ie=e.R16I),I===e.INT&&(ie=e.R32I)),x===e.RG&&(I===e.FLOAT&&(ie=e.RG32F),I===e.HALF_FLOAT&&(ie=e.RG16F),I===e.UNSIGNED_BYTE&&(ie=e.RG8)),x===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(ie=e.RG8UI),I===e.UNSIGNED_SHORT&&(ie=e.RG16UI),I===e.UNSIGNED_INT&&(ie=e.RG32UI),I===e.BYTE&&(ie=e.RG8I),I===e.SHORT&&(ie=e.RG16I),I===e.INT&&(ie=e.RG32I)),x===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(ie=e.RGB8UI),I===e.UNSIGNED_SHORT&&(ie=e.RGB16UI),I===e.UNSIGNED_INT&&(ie=e.RGB32UI),I===e.BYTE&&(ie=e.RGB8I),I===e.SHORT&&(ie=e.RGB16I),I===e.INT&&(ie=e.RGB32I)),x===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(ie=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(ie=e.RGBA16UI),I===e.UNSIGNED_INT&&(ie=e.RGBA32UI),I===e.BYTE&&(ie=e.RGBA8I),I===e.SHORT&&(ie=e.RGBA16I),I===e.INT&&(ie=e.RGBA32I)),x===e.RGB&&I===e.UNSIGNED_INT_5_9_9_9_REV&&(ie=e.RGB9_E5),x===e.RGBA){let ze=se?Za:rt.getTransfer(ee);I===e.FLOAT&&(ie=e.RGBA32F),I===e.HALF_FLOAT&&(ie=e.RGBA16F),I===e.UNSIGNED_BYTE&&(ie=ze===nt?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(ie=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(ie=e.RGB5_A1)}return(ie===e.R16F||ie===e.R32F||ie===e.RG16F||ie===e.RG32F||ie===e.RGBA16F||ie===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ie}function b(T,x){let I;return T?x===null||x===hr||x===Cr?I=e.DEPTH24_STENCIL8:x===gi?I=e.DEPTH32F_STENCIL8:x===da&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hr||x===Cr?I=e.DEPTH_COMPONENT24:x===gi?I=e.DEPTH_COMPONENT32F:x===da&&(I=e.DEPTH_COMPONENT16),I}function B(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xt&&T.minFilter!==ni?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){let x=T.target;x.removeEventListener("dispose",A),N(x),x.isVideoTexture&&c.delete(x)}function C(T){let x=T.target;x.removeEventListener("dispose",C),S(x)}function N(T){let x=r.get(T);if(x.__webglInit===void 0)return;let I=T.source,ee=d.get(I);if(ee){let se=ee[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(T),Object.keys(ee).length===0&&d.delete(I)}r.remove(T)}function M(T){let x=r.get(T);e.deleteTexture(x.__webglTexture);let I=T.source,ee=d.get(I);delete ee[x.__cacheKey],n.memory.textures--}function S(T){let x=r.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),r.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let se=0;se<x.__webglFramebuffer[ee].length;se++)e.deleteFramebuffer(x.__webglFramebuffer[ee][se]);else e.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)e.deleteFramebuffer(x.__webglFramebuffer[ee]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=T.textures;for(let ee=0,se=I.length;ee<se;ee++){let ie=r.get(I[ee]);ie.__webglTexture&&(e.deleteTexture(ie.__webglTexture),n.memory.textures--),r.remove(I[ee])}r.remove(T)}let R=0;function U(){R=0}function D(){let T=R;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),R+=1,T}function X(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ne(T,x){let I=r.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){let ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,T,x);return}}i.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+x)}function J(T,x){let I=r.get(T);if(T.version>0&&I.__version!==T.version){Y(I,T,x);return}i.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+x)}function pe(T,x){let I=r.get(T);if(T.version>0&&I.__version!==T.version){Y(I,T,x);return}i.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+x)}function $(T,x){let I=r.get(T);if(T.version>0&&I.__version!==T.version){F(I,T,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+x)}let Z={[Wa]:e.REPEAT,[lr]:e.CLAMP_TO_EDGE,[en]:e.MIRRORED_REPEAT},Te={[Xt]:e.NEAREST,[uu]:e.NEAREST_MIPMAP_NEAREST,[Xa]:e.NEAREST_MIPMAP_LINEAR,[ni]:e.LINEAR,[tn]:e.LINEAR_MIPMAP_NEAREST,[Ai]:e.LINEAR_MIPMAP_LINEAR},ke={[mu]:e.NEVER,[Mu]:e.ALWAYS,[gu]:e.LESS,[_l]:e.LEQUAL,[vu]:e.EQUAL,[yu]:e.GEQUAL,[_u]:e.GREATER,[xu]:e.NOTEQUAL};function Ne(T,x){if(x.type===gi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ni||x.magFilter===tn||x.magFilter===Xa||x.magFilter===Ai||x.minFilter===ni||x.minFilter===tn||x.minFilter===Xa||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Z[x.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Z[x.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Z[x.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Te[x.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,ke[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==Xa&&x.minFilter!==Ai||x.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function G(T,x){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));let ee=x.source,se=d.get(ee);se===void 0&&(se={},d.set(ee,se));let ie=X(x);if(ie!==T.__cacheKey){se[ie]===void 0&&(se[ie]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,I=!0),se[ie].usedTimes++;let ze=se[T.__cacheKey];ze!==void 0&&(se[T.__cacheKey].usedTimes--,ze.usedTimes===0&&M(x)),T.__cacheKey=ie,T.__webglTexture=se[ie].texture}return I}function Y(T,x,I){let ee=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=e.TEXTURE_3D);let se=G(T,x),ie=x.source;i.bindTexture(ee,T.__webglTexture,e.TEXTURE0+I);let ze=r.get(ie);if(ie.version!==ze.__version||se===!0){i.activeTexture(e.TEXTURE0+I);let _e=rt.getPrimaries(rt.workingColorSpace),Pe=x.colorSpace===Xi?null:rt.getPrimaries(x.colorSpace),He=x.colorSpace===Xi||_e===Pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Me=v(x.image,!1,a.maxTextureSize);Me=j(x,Me);let Oe=s.convert(x.format,x.colorSpace),fe=s.convert(x.type),me=_(x.internalFormat,Oe,fe,x.colorSpace,x.isVideoTexture);Ne(ee,x);let ue,Re=x.mipmaps,de=x.isVideoTexture!==!0,xe=ze.__version===void 0||se===!0,P=ie.dataReady,te=B(x,Me);if(x.isDepthTexture)me=b(x.format===Ir,x.type),xe&&(de?i.texStorage2D(e.TEXTURE_2D,1,me,Me.width,Me.height):i.texImage2D(e.TEXTURE_2D,0,me,Me.width,Me.height,0,Oe,fe,null));else if(x.isDataTexture)if(Re.length>0){de&&xe&&i.texStorage2D(e.TEXTURE_2D,te,me,Re[0].width,Re[0].height);for(let W=0,re=Re.length;W<re;W++)ue=Re[W],de?P&&i.texSubImage2D(e.TEXTURE_2D,W,0,0,ue.width,ue.height,Oe,fe,ue.data):i.texImage2D(e.TEXTURE_2D,W,me,ue.width,ue.height,0,Oe,fe,ue.data);x.generateMipmaps=!1}else de?(xe&&i.texStorage2D(e.TEXTURE_2D,te,me,Me.width,Me.height),P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,fe,Me.data)):i.texImage2D(e.TEXTURE_2D,0,me,Me.width,Me.height,0,Oe,fe,Me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){de&&xe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,te,me,Re[0].width,Re[0].height,Me.depth);for(let W=0,re=Re.length;W<re;W++)if(ue=Re[W],x.format!==oi)if(Oe!==null)if(de){if(P)if(x.layerUpdates.size>0){let ye=wh(ue.width,ue.height,x.format,x.type);for(let oe of x.layerUpdates){let Be=ue.data.subarray(oe*ye/ue.data.BYTES_PER_ELEMENT,(oe+1)*ye/ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,oe,ue.width,ue.height,1,Oe,Be)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,ue.width,ue.height,Me.depth,Oe,ue.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,me,ue.width,ue.height,Me.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?P&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,ue.width,ue.height,Me.depth,Oe,fe,ue.data):i.texImage3D(e.TEXTURE_2D_ARRAY,W,me,ue.width,ue.height,Me.depth,0,Oe,fe,ue.data)}else{de&&xe&&i.texStorage2D(e.TEXTURE_2D,te,me,Re[0].width,Re[0].height);for(let W=0,re=Re.length;W<re;W++)ue=Re[W],x.format!==oi?Oe!==null?de?P&&i.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,ue.width,ue.height,Oe,ue.data):i.compressedTexImage2D(e.TEXTURE_2D,W,me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?P&&i.texSubImage2D(e.TEXTURE_2D,W,0,0,ue.width,ue.height,Oe,fe,ue.data):i.texImage2D(e.TEXTURE_2D,W,me,ue.width,ue.height,0,Oe,fe,ue.data)}else if(x.isDataArrayTexture)if(de){if(xe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,te,me,Me.width,Me.height,Me.depth),P)if(x.layerUpdates.size>0){let W=wh(Me.width,Me.height,x.format,x.type);for(let re of x.layerUpdates){let ye=Me.data.subarray(re*W/Me.data.BYTES_PER_ELEMENT,(re+1)*W/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,re,Me.width,Me.height,1,Oe,fe,ye)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,fe,Me.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,me,Me.width,Me.height,Me.depth,0,Oe,fe,Me.data);else if(x.isData3DTexture)de?(xe&&i.texStorage3D(e.TEXTURE_3D,te,me,Me.width,Me.height,Me.depth),P&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,fe,Me.data)):i.texImage3D(e.TEXTURE_3D,0,me,Me.width,Me.height,Me.depth,0,Oe,fe,Me.data);else if(x.isFramebufferTexture){if(xe)if(de)i.texStorage2D(e.TEXTURE_2D,te,me,Me.width,Me.height);else{let W=Me.width,re=Me.height;for(let ye=0;ye<te;ye++)i.texImage2D(e.TEXTURE_2D,ye,me,W,re,0,Oe,fe,null),W>>=1,re>>=1}}else if(Re.length>0){if(de&&xe){let W=ce(Re[0]);i.texStorage2D(e.TEXTURE_2D,te,me,W.width,W.height)}for(let W=0,re=Re.length;W<re;W++)ue=Re[W],de?P&&i.texSubImage2D(e.TEXTURE_2D,W,0,0,Oe,fe,ue):i.texImage2D(e.TEXTURE_2D,W,me,Oe,fe,ue);x.generateMipmaps=!1}else if(de){if(xe){let W=ce(Me);i.texStorage2D(e.TEXTURE_2D,te,me,W.width,W.height)}P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Oe,fe,Me)}else i.texImage2D(e.TEXTURE_2D,0,me,Oe,fe,Me);f(x)&&m(ee),ze.__version=ie.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function F(T,x,I){if(x.image.length!==6)return;let ee=G(T,x),se=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+I);let ie=r.get(se);if(se.version!==ie.__version||ee===!0){i.activeTexture(e.TEXTURE0+I);let ze=rt.getPrimaries(rt.workingColorSpace),_e=x.colorSpace===Xi?null:rt.getPrimaries(x.colorSpace),Pe=x.colorSpace===Xi||ze===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let He=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,Oe=[];for(let re=0;re<6;re++)!He&&!Me?Oe[re]=v(x.image[re],!0,a.maxCubemapSize):Oe[re]=Me?x.image[re].image:x.image[re],Oe[re]=j(x,Oe[re]);let fe=Oe[0],me=s.convert(x.format,x.colorSpace),ue=s.convert(x.type),Re=_(x.internalFormat,me,ue,x.colorSpace),de=x.isVideoTexture!==!0,xe=ie.__version===void 0||ee===!0,P=se.dataReady,te=B(x,fe);Ne(e.TEXTURE_CUBE_MAP,x);let W;if(He){de&&xe&&i.texStorage2D(e.TEXTURE_CUBE_MAP,te,Re,fe.width,fe.height);for(let re=0;re<6;re++){W=Oe[re].mipmaps;for(let ye=0;ye<W.length;ye++){let oe=W[ye];x.format!==oi?me!==null?de?P&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,0,0,oe.width,oe.height,me,oe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,Re,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,0,0,oe.width,oe.height,me,ue,oe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,Re,oe.width,oe.height,0,me,ue,oe.data)}}}else{if(W=x.mipmaps,de&&xe){W.length>0&&te++;let re=ce(Oe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,te,Re,re.width,re.height)}for(let re=0;re<6;re++)if(Me){de?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe[re].width,Oe[re].height,me,ue,Oe[re].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Re,Oe[re].width,Oe[re].height,0,me,ue,Oe[re].data);for(let ye=0;ye<W.length;ye++){let oe=W[ye].image[re].image;de?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,0,0,oe.width,oe.height,me,ue,oe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,Re,oe.width,oe.height,0,me,ue,oe.data)}}else{de?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me,ue,Oe[re]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Re,me,ue,Oe[re]);for(let ye=0;ye<W.length;ye++){let oe=W[ye];de?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,0,0,me,ue,oe.image[re]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,Re,me,ue,oe.image[re])}}}f(x)&&m(e.TEXTURE_CUBE_MAP),ie.__version=se.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,I,ee,se,ie){let ze=s.convert(I.format,I.colorSpace),_e=s.convert(I.type),Pe=_(I.internalFormat,ze,_e,I.colorSpace),He=r.get(x),Me=r.get(I);if(Me.__renderTarget=x,!He.__hasExternalTextures){let Oe=Math.max(1,x.width>>ie),fe=Math.max(1,x.height>>ie);se===e.TEXTURE_3D||se===e.TEXTURE_2D_ARRAY?i.texImage3D(se,ie,Pe,Oe,fe,x.depth,0,ze,_e,null):i.texImage2D(se,ie,Pe,Oe,fe,0,ze,_e,null)}i.bindFramebuffer(e.FRAMEBUFFER,T),k(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,se,Me.__webglTexture,0,Ae(x)):(se===e.TEXTURE_2D||se>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ee,se,Me.__webglTexture,ie),i.bindFramebuffer(e.FRAMEBUFFER,null)}function H(T,x,I){if(e.bindRenderbuffer(e.RENDERBUFFER,T),x.depthBuffer){let ee=x.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,ie=b(x.stencilBuffer,se),ze=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=Ae(x);k(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e,ie,x.width,x.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e,ie,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ie,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ze,e.RENDERBUFFER,T)}else{let ee=x.textures;for(let se=0;se<ee.length;se++){let ie=ee[se],ze=s.convert(ie.format,ie.colorSpace),_e=s.convert(ie.type),Pe=_(ie.internalFormat,ze,_e,ie.colorSpace),He=Ae(x);I&&k(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,He,Pe,x.width,x.height):k(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,He,Pe,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,Pe,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=r.get(x.depthTexture);I.__renderTarget=x,(!I.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne(x.depthTexture,0);let ee=I.__webglTexture,se=Ae(x);if(x.depthTexture.format===Pr)k(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ee,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Ir)k(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ee,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ve(T){let x=r.get(T),I=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let ee=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){let se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=ee}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,T)}else if(I){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=e.createRenderbuffer(),H(x.__webglDepthbuffer[ee],T,!1);else{let se=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer[ee];e.bindRenderbuffer(e.RENDERBUFFER,ie),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,ie)}}else if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),H(x.__webglDepthbuffer,T,!1);else{let ee=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,se)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function be(T,x,I){let ee=r.get(T);x!==void 0&&Q(ee.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&ve(T)}function V(T){let x=T.texture,I=r.get(T),ee=r.get(x);T.addEventListener("dispose",C);let se=T.textures,ie=T.isWebGLCubeRenderTarget===!0,ze=se.length>1;if(ze||(ee.__webglTexture===void 0&&(ee.__webglTexture=e.createTexture()),ee.__version=x.version,n.memory.textures++),ie){I.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[_e]=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)I.__webglFramebuffer[_e][Pe]=e.createFramebuffer()}else I.__webglFramebuffer[_e]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)I.__webglFramebuffer[_e]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(ze)for(let _e=0,Pe=se.length;_e<Pe;_e++){let He=r.get(se[_e]);He.__webglTexture===void 0&&(He.__webglTexture=e.createTexture(),n.memory.textures++)}if(T.samples>0&&k(T)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let _e=0;_e<se.length;_e++){let Pe=se[_e];I.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[_e]);let He=s.convert(Pe.format,Pe.colorSpace),Me=s.convert(Pe.type),Oe=_(Pe.internalFormat,He,Me,Pe.colorSpace,T.isXRRenderTarget===!0),fe=Ae(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,fe,Oe,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,I.__webglColorRenderbuffer[_e])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),H(I.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ie){i.bindTexture(e.TEXTURE_CUBE_MAP,ee.__webglTexture),Ne(e.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)Q(I.__webglFramebuffer[_e][Pe],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe);else Q(I.__webglFramebuffer[_e],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);f(x)&&m(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let _e=0,Pe=se.length;_e<Pe;_e++){let He=se[_e],Me=r.get(He);i.bindTexture(e.TEXTURE_2D,Me.__webglTexture),Ne(e.TEXTURE_2D,He),Q(I.__webglFramebuffer,T,He,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,0),f(He)&&m(e.TEXTURE_2D)}i.unbindTexture()}else{let _e=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_e=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(_e,ee.__webglTexture),Ne(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)Q(I.__webglFramebuffer[Pe],T,x,e.COLOR_ATTACHMENT0,_e,Pe);else Q(I.__webglFramebuffer,T,x,e.COLOR_ATTACHMENT0,_e,0);f(x)&&m(_e),i.unbindTexture()}T.depthBuffer&&ve(T)}function ae(T){let x=T.textures;for(let I=0,ee=x.length;I<ee;I++){let se=x[I];if(f(se)){let ie=y(T),ze=r.get(se).__webglTexture;i.bindTexture(ie,ze),m(ie),i.unbindTexture()}}}let w=[],Ee=[];function he(T){if(T.samples>0){if(k(T)===!1){let x=T.textures,I=T.width,ee=T.height,se=e.COLOR_BUFFER_BIT,ie=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ze=r.get(T),_e=x.length>1;if(_e)for(let Pe=0;Pe<x.length;Pe++)i.bindFramebuffer(e.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ze.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=e.STENCIL_BUFFER_BIT)),_e){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ze.__webglColorRenderbuffer[Pe]);let He=r.get(x[Pe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,He,0)}e.blitFramebuffer(0,0,I,ee,0,0,I,ee,se,e.NEAREST),l===!0&&(w.length=0,Ee.length=0,w.push(e.COLOR_ATTACHMENT0+Pe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push(ie),Ee.push(ie),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Pe=0;Pe<x.length;Pe++){i.bindFramebuffer(e.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.RENDERBUFFER,ze.__webglColorRenderbuffer[Pe]);let He=r.get(x[Pe]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ze.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.TEXTURE_2D,He,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Ae(T){return Math.min(a.maxSamples,T.samples)}function k(T){let x=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(T){let x=n.render.frame;c.get(T)!==x&&(c.set(T,x),T.update())}function j(T,x){let I=T.colorSpace,ee=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Lr&&I!==Xi&&(rt.getTransfer(I)===nt?(ee!==oi||se!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=J,this.setTexture3D=pe,this.setTextureCube=$,this.rebindTextures=be,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=k}function wg(e,t){function i(r,a=Xi){let s,n=rt.getTransfer(a);if(r===Ri)return e.UNSIGNED_BYTE;if(r===an)return e.UNSIGNED_SHORT_4_4_4_4;if(r===sn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===nl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===al)return e.BYTE;if(r===sl)return e.SHORT;if(r===da)return e.UNSIGNED_SHORT;if(r===rn)return e.INT;if(r===hr)return e.UNSIGNED_INT;if(r===gi)return e.FLOAT;if(r===Rr)return e.HALF_FLOAT;if(r===ol)return e.ALPHA;if(r===ll)return e.RGB;if(r===oi)return e.RGBA;if(r===hl)return e.LUMINANCE;if(r===cl)return e.LUMINANCE_ALPHA;if(r===Pr)return e.DEPTH_COMPONENT;if(r===Ir)return e.DEPTH_STENCIL;if(r===nn)return e.RED;if(r===on)return e.RED_INTEGER;if(r===ul)return e.RG;if(r===ln)return e.RG_INTEGER;if(r===hn)return e.RGBA_INTEGER;if(r===ja||r===qa||r===Ya||r===Ka)if(n===nt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cn||r===un||r===dn||r===pn)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===cn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===un)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fn||r===mn||r===gn)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===fn||r===mn)return n===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===gn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vn||r===_n||r===xn||r===yn||r===Mn||r===Sn||r===En||r===Tn||r===bn||r===wn||r===An||r===Rn||r===Cn||r===Pn)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===vn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_n)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===En)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===An)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pn)return n===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ja||r===In||r===Ln)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Ja)return n===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===In)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ln)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dl||r===Un||r===Nn||r===Dn)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Un)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Ag=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xr=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,i),f=this._getHandJoint(l,g);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return n!==null&&(n.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ig=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Zt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _i({vertexShader:Cg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lg=class extends Nr{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new Ig,v=t.getContextAttributes(),f=null,m=null,y=[],_=[],b=new Ie,B=null,A=new Yt;A.viewport=new gt;let C=new Yt;C.viewport=new gt;let N=[A,C],M=new Ag,S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=y[G];return Y===void 0&&(Y=new Mo,y[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=y[G];return Y===void 0&&(Y=new Mo,y[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=y[G];return Y===void 0&&(Y=new Mo,y[G]=Y),Y.getHandSpace()};function U(G){let Y=_.indexOf(G.inputSource);if(Y===-1)return;let F=y[Y];F!==void 0&&(F.update(G.inputSource,G.frame,l||s),F.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",X);for(let G=0;G<y.length;G++){let Y=_[G];Y!==null&&(_[G]=null,y[G].disconnect(Y))}S=null,R=null,g.reset(),e.setRenderTarget(f),d=null,u=null,c=null,r=null,m=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){n=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",D),r.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let Y={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new ji(d.framebufferWidth,d.framebufferHeight,{format:oi,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,F=null,Q=null;v.depth&&(Q=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?Ir:Pr,F=v.stencil?Cr:hr);let H={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(H),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new ji(u.textureWidth,u.textureHeight,{format:oi,type:Ri,depthTexture:new ah(u.textureWidth,u.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(G){for(let Y=0;Y<G.removed.length;Y++){let F=G.removed[Y],Q=_.indexOf(F);Q>=0&&(_[Q]=null,y[Q].disconnect(F))}for(let Y=0;Y<G.added.length;Y++){let F=G.added[Y],Q=_.indexOf(F);if(Q===-1){for(let le=0;le<y.length;le++)if(le>=_.length){_.push(F),Q=le;break}else if(_[le]===null){_[le]=F,Q=le;break}if(Q===-1)break}let H=y[Q];H&&H.connect(F)}}let ne=new L,J=new L;function pe(G,Y,F){ne.setFromMatrixPosition(Y.matrixWorld),J.setFromMatrixPosition(F.matrixWorld);let Q=ne.distanceTo(J),H=Y.projectionMatrix.elements,le=F.projectionMatrix.elements,ve=H[14]/(H[10]-1),be=H[14]/(H[10]+1),V=(H[9]+1)/H[5],ae=(H[9]-1)/H[5],w=(H[8]-1)/H[0],Ee=(le[8]+1)/le[0],he=ve*w,Ae=ve*Ee,k=Q/(-w+Ee),we=k*-w;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(we),G.translateZ(k),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),H[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let j=ve+k,ce=be+k,T=he-we,x=Ae+(Q-we),I=V*be/ce*j,ee=ae*be/ce*j;G.projectionMatrix.makePerspective(T,x,I,ee,j,ce),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function $(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Y=G.near,F=G.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(F=g.depthFar)),M.near=C.near=A.near=Y,M.far=C.far=A.far=F,(S!==M.near||R!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,R=M.far),A.layers.mask=G.layers.mask|2,C.layers.mask=G.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let Q=G.parent,H=M.cameras;$(M,Q);for(let le=0;le<H.length;le++)$(H[le],Q);H.length===2?pe(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),Z(G,M,Q)};function Z(G,Y,F){F===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(F.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=kn*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(G){o=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Te=null;function ke(G,Y){if(h=Y.getViewerPose(l||s),p=Y,h!==null){let F=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Q=!1;F.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let le=0;le<F.length;le++){let ve=F[le],be=null;if(d!==null)be=d.getViewport(ve);else{let ae=c.getViewSubImage(u,ve);be=ae.viewport,le===0&&(e.setRenderTargetTextures(m,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(m))}let V=N[le];V===void 0&&(V=new Yt,V.layers.enable(le),V.viewport=new gt,N[le]=V),V.matrix.fromArray(ve.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ve.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(be.x,be.y,be.width,be.height),le===0&&(M.matrix.copy(V.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(V)}let H=r.enabledFeatures;if(H&&H.includes("depth-sensing")){let le=c.getDepthInformation(F[0]);le&&le.isValid&&le.texture&&g.init(e,le,r.renderState)}}for(let F=0;F<y.length;F++){let Q=_[F],H=y[F];Q!==null&&H!==void 0&&H.update(Q,Y,l||s)}Te&&Te(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),p=null}let Ne=new $l;Ne.setAnimationLoop(ke),this.setAnimationLoop=function(G){Te=G},this.dispose=function(){}}},yr=new $i,Ug=new lt;function Ng(e,t){function i(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function r(f,m){m.color.getRGB(f.fogColor.value,jl(e)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,y,_,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),u(f,m)):m.isMeshPhongMaterial?(s(f,m),c(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,b)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),v(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(n(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,_):m.isSpriteMaterial?h(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,i(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Bt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,i(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Bt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,i(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,i(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y=t.get(m),_=y.envMap,b=y.envMapRotation;_&&(f.envMap.value=_,yr.copy(b),yr.x*=-1,yr.y*=-1,yr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),f.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(yr)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,f.aoMapTransform))}function n(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=_*.5,m.map&&(f.map.value=m.map,i(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){let y=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Dg(e,t,i,r){let a={},s={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let b=_.program;r.uniformBlockBinding(y,b)}function h(y,_){let b=a[y.id];b===void 0&&(g(y),b=c(y),a[y.id]=b,y.addEventListener("dispose",f));let B=_.program;r.updateUBOMapping(y,B);let A=t.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function c(y){let _=u();y.__bindingPointIndex=_;let b=e.createBuffer(),B=y.__size,A=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,B,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(n.indexOf(y)===-1)return n.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=a[y.id],b=y.uniforms,B=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let A=0,C=b.length;A<C;A++){let N=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,S=N.length;M<S;M++){let R=N[M];if(p(R,A,M,B)===!0){let U=R.__offset,D=Array.isArray(R.value)?R.value:[R.value],X=0;for(let ne=0;ne<D.length;ne++){let J=D[ne],pe=v(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,e.bufferSubData(e.UNIFORM_BUFFER,U+X,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,X),X+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,U,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,_,b,B){let A=y.value,C=_+"_"+b;if(B[C]===void 0)return typeof A=="number"||typeof A=="boolean"?B[C]=A:B[C]=A.clone(),!0;{let N=B[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return B[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(y){let _=y.uniforms,b=0,B=16;for(let C=0,N=_.length;C<N;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,R=M.length;S<R;S++){let U=M[S],D=Array.isArray(U.value)?U.value:[U.value];for(let X=0,ne=D.length;X<ne;X++){let J=D[X],pe=v(J),$=b%B,Z=$%pe.boundary,Te=$+Z;b+=Z,Te!==0&&B-Te<pe.storage&&(b+=B-Te),U.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=pe.storage}}}let A=b%B;return A>0&&(b+=B-A),y.__size=b,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){let _=y.target;_.removeEventListener("dispose",f);let b=n.indexOf(_.__bindingPointIndex);n.splice(b,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function m(){for(let y in a)e.deleteBuffer(a[y]);n=[],a={},s={}}return{bind:l,update:h,dispose:m}}var Ah=class{constructor(e={}){let{canvas:t=Eu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let p=new Uint32Array(4),g=new Int32Array(4),v=null,f=null,m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=mi,this.toneMappingExposure=1;let _=this,b=!1,B=0,A=0,C=null,N=-1,M=null,S=new gt,R=new gt,U=null,D=new qe(0),X=0,ne=t.width,J=t.height,pe=1,$=null,Z=null,Te=new gt(0,0,ne,J),ke=new gt(0,0,ne,J),Ne=!1,G=new ho,Y=!1,F=!1,Q=new lt,H=new lt,le=new L,ve=new gt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V=!1;function ae(){return C===null?pe:1}let w=i;function Ee(E,z){return t.getContext(E,z)}try{let E={alpha:!0,depth:r,stencil:a,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ye,!1),w===null){let z="webgl2";if(w=Ee(z,E),w===null)throw Ee(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,Ae,k,we,j,ce,T,x,I,ee,se,ie,ze,_e,Pe,He,Me,Oe,fe,me,ue,Re,de,xe;function P(){he=new Hf(w),he.init(),Re=new wg(w,he),Ae=new Df(w,he,e,Re),k=new Eg(w,he),Ae.reverseDepthBuffer&&u&&k.buffers.depth.setReversed(!0),we=new Wf(w),j=new lg,ce=new bg(w,he,k,j,Ae,Re,we),T=new Ff(_),x=new kf(_),I=new Ju(w),de=new Uf(w,I),ee=new Vf(w,I,we,de),se=new jf(w,ee,I,we),fe=new Xf(w,Ae,ce),He=new Of(j),ie=new og(_,T,x,he,Ae,de,He),ze=new Ng(_,j),_e=new cg,Pe=new gg(he),Oe=new Lf(_,T,x,k,se,d,o),Me=new Mg(_,se,Ae),xe=new Dg(w,we,Ae,k),me=new Nf(w,he,we),ue=new Gf(w,he,we),we.programs=ie.programs,_.capabilities=Ae,_.extensions=he,_.properties=j,_.renderLists=_e,_.shadowMap=Me,_.state=k,_.info=we}P();let te=new Lg(_,w);this.xr=te,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(E){E!==void 0&&(pe=E,this.setSize(ne,J,!1))},this.getSize=function(E){return E.set(ne,J)},this.setSize=function(E,z,q=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,J=z,t.width=Math.floor(E*pe),t.height=Math.floor(z*pe),q===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ne*pe,J*pe).floor()},this.setDrawingBufferSize=function(E,z,q){ne=E,J=z,pe=q,t.width=Math.floor(E*q),t.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Te)},this.setViewport=function(E,z,q,K){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,z,q,K),k.viewport(S.copy(Te).multiplyScalar(pe).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,z,q,K){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,z,q,K),k.scissor(R.copy(ke).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){k.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,z=!0,q=!0){let K=0;if(E){let O=!1;if(C!==null){let Se=C.texture.format;O=Se===hn||Se===ln||Se===on}if(O){let Se=C.texture.type,Fe=Se===Ri||Se===hr||Se===da||Se===Cr||Se===an||Se===sn,Ve=Oe.getClearColor(),ge=Oe.getClearAlpha(),Ce=Ve.r,Le=Ve.g,Ue=Ve.b;Fe?(p[0]=Ce,p[1]=Le,p[2]=Ue,p[3]=ge,w.clearBufferuiv(w.COLOR,0,p)):(g[0]=Ce,g[1]=Le,g[2]=Ue,g[3]=ge,w.clearBufferiv(w.COLOR,0,g))}else K|=w.COLOR_BUFFER_BIT}z&&(K|=w.DEPTH_BUFFER_BIT),q&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),_e.dispose(),Pe.dispose(),j.dispose(),T.dispose(),x.dispose(),se.dispose(),de.dispose(),xe.dispose(),ie.dispose(),te.dispose(),te.removeEventListener("sessionstart",Gt),te.removeEventListener("sessionend",yt),st.stop()};function W(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=we.autoReset,z=Me.enabled,q=Me.autoUpdate,K=Me.needsUpdate,O=Me.type;P(),we.autoReset=E,Me.enabled=z,Me.autoUpdate=q,Me.needsUpdate=K,Me.type=O}function ye(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){let z=E.target;z.removeEventListener("dispose",oe),Be(z)}function Be(E){je(E),j.remove(E)}function je(E){let z=j.get(E).programs;z!==void 0&&(z.forEach(function(q){ie.releaseProgram(q)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,K,O,Se){z===null&&(z=be);let Fe=O.isMesh&&O.matrixWorld.determinant()<0,Ve=ka(E,z,q,K,O);k.setMaterial(K,Fe);let ge=q.index,Ce=1;if(K.wireframe===!0){if(ge=ee.getWireframeAttribute(q),ge===void 0)return;Ce=2}let Le=q.drawRange,Ue=q.attributes.position,Ke=Le.start*Ce,Qe=(Le.start+Le.count)*Ce;Se!==null&&(Ke=Math.max(Ke,Se.start*Ce),Qe=Math.min(Qe,(Se.start+Se.count)*Ce)),ge!==null?(Ke=Math.max(Ke,0),Qe=Math.min(Qe,ge.count)):Ue!=null&&(Ke=Math.max(Ke,0),Qe=Math.min(Qe,Ue.count));let et=Qe-Ke;if(et<0||et===1/0)return;de.setup(O,K,Ve,q,ge);let at,tt=me;if(ge!==null&&(at=I.get(ge),tt=ue,tt.setIndex(at)),O.isMesh)K.wireframe===!0?(k.setLineWidth(K.wireframeLinewidth*ae()),tt.setMode(w.LINES)):tt.setMode(w.TRIANGLES);else if(O.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),k.setLineWidth(Ge*ae()),O.isLineSegments?tt.setMode(w.LINES):O.isLineLoop?tt.setMode(w.LINE_LOOP):tt.setMode(w.LINE_STRIP)}else O.isPoints?tt.setMode(w.POINTS):O.isSprite&&tt.setMode(w.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ge=O._multiDrawStarts,Ot=O._multiDrawCounts,Ft=O._multiDrawCount,Mt=ge?I.get(ge).bytesPerElement:1,$t=j.get(K).currentProgram.getUniforms();for(let It=0;It<Ft;It++)$t.setValue(w,"_gl_DrawID",It),tt.render(Ge[It]/Mt,Ot[It])}else if(O.isInstancedMesh)tt.renderInstances(Ke,et,O.count);else if(q.isInstancedBufferGeometry){let Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ot=Math.min(q.instanceCount,Ge);tt.renderInstances(Ke,et,Ot)}else tt.render(Ke,et)};function it(E,z,q){E.transparent===!0&&E.side===fi&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,Bi(E,z,q),E.side=Gi,E.needsUpdate=!0,Bi(E,z,q),E.side=fi):Bi(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),f=Pe.get(q),f.init(z),y.push(f),q.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==q&&E.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let K=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let Se=O.material;if(Se)if(Array.isArray(Se))for(let Fe=0;Fe<Se.length;Fe++){let Ve=Se[Fe];it(Ve,q,O),K.add(Ve)}else it(Se,q,O),K.add(Se)}),y.pop(),f=null,K},this.compileAsync=function(E,z,q=null){let K=this.compile(E,z,q);return new Promise(O=>{function Se(){if(K.forEach(function(Fe){j.get(Fe).currentProgram.isReady()&&K.delete(Fe)}),K.size===0){O(E);return}setTimeout(Se,10)}he.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ze=null;function Jt(E){Ze&&Ze(E)}function Gt(){st.stop()}function yt(){st.start()}let st=new $l;st.setAnimationLoop(Jt),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(E){Ze=E,te.setAnimationLoop(E),E===null?st.stop():st.start()},te.addEventListener("sessionstart",Gt),te.addEventListener("sessionend",yt),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,z,C),f=Pe.get(E,y.length),f.init(z),y.push(f),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(H),F=this.localClippingEnabled,Y=He.init(this.clippingPlanes,F),v=_e.get(E,m.length),v.init(),m.push(v),te.enabled===!0&&te.isPresenting===!0){let Se=_.xr.getDepthSensingMesh();Se!==null&&Wt(Se,z,-1/0,_.sortObjects)}Wt(E,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort($,Z),V=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,V&&Oe.addToRenderList(v,E),this.info.render.frame++,Y===!0&&He.beginShadows();let q=f.state.shadowsArray;Me.render(q,E,z),Y===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=v.opaque,O=v.transmissive;if(f.setupLights(),z.isArrayCamera){let Se=z.cameras;if(O.length>0)for(let Fe=0,Ve=Se.length;Fe<Ve;Fe++){let ge=Se[Fe];bi(K,O,E,ge)}V&&Oe.render(E);for(let Fe=0,Ve=Se.length;Fe<Ve;Fe++){let ge=Se[Fe];Ba(v,E,ge,ge.viewport)}}else O.length>0&&bi(K,O,E,z),V&&Oe.render(E),Ba(v,E,z);C!==null&&(ce.updateMultisampleRenderTarget(C),ce.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,z),de.resetDefaultState(),N=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Y===!0&&He.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Wt(E,z,q,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){K&&ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);let Se=se.update(E),Fe=E.material;Fe.visible&&v.push(E,Se,Fe,q,ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){let Se=se.update(E),Fe=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ve.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ve.copy(Se.boundingSphere.center)),ve.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(Fe)){let Ve=Se.groups;for(let ge=0,Ce=Ve.length;ge<Ce;ge++){let Le=Ve[ge],Ue=Fe[Le.materialIndex];Ue&&Ue.visible&&v.push(E,Se,Ue,q,ve.z,Le)}}else Fe.visible&&v.push(E,Se,Fe,q,ve.z,null)}}let O=E.children;for(let Se=0,Fe=O.length;Se<Fe;Se++)Wt(O[Se],z,q,K)}function Ba(E,z,q,K){let O=E.opaque,Se=E.transmissive,Fe=E.transparent;f.setupLightsView(q),Y===!0&&He.setGlobalState(_.clippingPlanes,q),K&&k.viewport(S.copy(K)),O.length>0&&Rt(O,z,q),Se.length>0&&Rt(Se,z,q),Fe.length>0&&Rt(Fe,z,q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function bi(E,z,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new ji(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Rr:Ri,minFilter:Ai,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let O=f.state.transmissionRenderTarget[K.id],Se=K.viewport||S;O.setSize(Se.z,Se.w);let Fe=_.getRenderTarget();_.setRenderTarget(O),_.getClearColor(D),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),V&&Oe.render(q);let Ve=_.toneMapping;_.toneMapping=mi;let ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),Y===!0&&He.setGlobalState(_.clippingPlanes,K),Rt(E,q,K),ce.updateMultisampleRenderTarget(O),ce.updateRenderTargetMipmap(O),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Le=0,Ue=z.length;Le<Ue;Le++){let Ke=z[Le],Qe=Ke.object,et=Ke.geometry,at=Ke.material,tt=Ke.group;if(at.side===fi&&Qe.layers.test(K.layers)){let Ge=at.side;at.side=Bt,at.needsUpdate=!0,ca(Qe,q,K,et,at,tt),at.side=Ge,at.needsUpdate=!0,Ce=!0}}Ce===!0&&(ce.updateMultisampleRenderTarget(O),ce.updateRenderTargetMipmap(O))}_.setRenderTarget(Fe),_.setClearColor(D,X),ge!==void 0&&(K.viewport=ge),_.toneMapping=Ve}function Rt(E,z,q){let K=z.isScene===!0?z.overrideMaterial:null;for(let O=0,Se=E.length;O<Se;O++){let Fe=E[O],Ve=Fe.object,ge=Fe.geometry,Ce=K===null?Fe.material:K,Le=Fe.group;Ve.layers.test(q.layers)&&ca(Ve,z,q,ge,Ce,Le)}}function ca(E,z,q,K,O,Se){E.onBeforeRender(_,z,q,K,O,Se),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,z,q,K,E,Se),O.transparent===!0&&O.side===fi&&O.forceSinglePass===!1?(O.side=Bt,O.needsUpdate=!0,_.renderBufferDirect(q,z,K,O,E,Se),O.side=Gi,O.needsUpdate=!0,_.renderBufferDirect(q,z,K,O,E,Se),O.side=fi):_.renderBufferDirect(q,z,K,O,E,Se),E.onAfterRender(_,z,q,K,O,Se)}function Bi(E,z,q){z.isScene!==!0&&(z=be);let K=j.get(E),O=f.state.lights,Se=f.state.shadowsArray,Fe=O.state.version,Ve=ie.getParameters(E,O.state,Se,z,q),ge=ie.getProgramCacheKey(Ve),Ce=K.programs;K.environment=E.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(E.isMeshStandardMaterial?x:T).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",oe),Ce=new Map,K.programs=Ce);let Le=Ce.get(ge);if(Le!==void 0){if(K.currentProgram===Le&&K.lightsStateVersion===Fe)return ua(E,Ve),Le}else Ve.uniforms=ie.getUniforms(E),E.onBeforeCompile(Ve,_),Le=ie.acquireProgram(Ve,ge),Ce.set(ge,Le),K.uniforms=Ve.uniforms;let Ue=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=He.uniform),ua(E,Ve),K.needsLights=Va(E),K.lightsStateVersion=Fe,K.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),K.currentProgram=Le,K.uniformsList=null,Le}function Er(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Ms.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ua(E,z){let q=j.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function ka(E,z,q,K,O){z.isScene!==!0&&(z=be),ce.resetTextureUnits();let Se=z.fog,Fe=K.isMeshStandardMaterial?z.environment:null,Ve=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Lr,ge=(K.isMeshStandardMaterial?x:T).get(K.envMap||Fe),Ce=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ue=!!q.morphAttributes.position,Ke=!!q.morphAttributes.normal,Qe=!!q.morphAttributes.color,et=mi;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(et=_.toneMapping);let at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=at!==void 0?at.length:0,Ge=j.get(K),Ot=f.state.lights;if(Y===!0&&(F===!0||E!==M)){let Ct=E===M&&K.id===N;He.setState(K,E,Ct)}let Ft=!1;K.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ot.state.version||Ge.outputColorSpace!==Ve||O.isBatchedMesh&&Ge.batching===!1||!O.isBatchedMesh&&Ge.batching===!0||O.isBatchedMesh&&Ge.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ge.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ge.instancing===!1||!O.isInstancedMesh&&Ge.instancing===!0||O.isSkinnedMesh&&Ge.skinning===!1||!O.isSkinnedMesh&&Ge.skinning===!0||O.isInstancedMesh&&Ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ge.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ge.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ge.instancingMorph===!1&&O.morphTexture!==null||Ge.envMap!==ge||K.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==He.numPlanes||Ge.numIntersection!==He.numIntersection)||Ge.vertexAlphas!==Ce||Ge.vertexTangents!==Le||Ge.morphTargets!==Ue||Ge.morphNormals!==Ke||Ge.morphColors!==Qe||Ge.toneMapping!==et||Ge.morphTargetsCount!==tt)&&(Ft=!0):(Ft=!0,Ge.__version=K.version);let Mt=Ge.currentProgram;Ft===!0&&(Mt=Bi(K,z,O));let $t=!1,It=!1,ki=!1,Ye=Mt.getUniforms(),zt=Ge.uniforms;if(k.useProgram(Mt.program)&&($t=!0,It=!0,ki=!0),K.id!==N&&(N=K.id,It=!0),$t||M!==E){k.buffers.depth.getReversed()?(Q.copy(E.projectionMatrix),bu(Q),wu(Q),Ye.setValue(w,"projectionMatrix",Q)):Ye.setValue(w,"projectionMatrix",E.projectionMatrix),Ye.setValue(w,"viewMatrix",E.matrixWorldInverse);let Ct=Ye.map.cameraPosition;Ct!==void 0&&Ct.setValue(w,le.setFromMatrixPosition(E.matrixWorld)),Ae.logarithmicDepthBuffer&&Ye.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ye.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,It=!0,ki=!0)}if(O.isSkinnedMesh){Ye.setOptional(w,O,"bindMatrix"),Ye.setOptional(w,O,"bindMatrixInverse");let Ct=O.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Ye.setValue(w,"boneTexture",Ct.boneTexture,ce))}O.isBatchedMesh&&(Ye.setOptional(w,O,"batchingTexture"),Ye.setValue(w,"batchingTexture",O._matricesTexture,ce),Ye.setOptional(w,O,"batchingIdTexture"),Ye.setValue(w,"batchingIdTexture",O._indirectTexture,ce),Ye.setOptional(w,O,"batchingColorTexture"),O._colorsTexture!==null&&Ye.setValue(w,"batchingColorTexture",O._colorsTexture,ce));let Hi=q.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&fe.update(O,q,Mt),(It||Ge.receiveShadow!==O.receiveShadow)&&(Ge.receiveShadow=O.receiveShadow,Ye.setValue(w,"receiveShadow",O.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(zt.envMap.value=ge,zt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(zt.envMapIntensity.value=z.environmentIntensity),It&&(Ye.setValue(w,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&Ha(zt,ki),Se&&K.fog===!0&&ze.refreshFogUniforms(zt,Se),ze.refreshMaterialUniforms(zt,K,pe,J,f.state.transmissionRenderTarget[E.id]),Ms.upload(w,Er(Ge),zt,ce)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ms.upload(w,Er(Ge),zt,ce),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ye.setValue(w,"center",O.center),Ye.setValue(w,"modelViewMatrix",O.modelViewMatrix),Ye.setValue(w,"normalMatrix",O.normalMatrix),Ye.setValue(w,"modelMatrix",O.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Ct=K.uniformsGroups;for(let Vi=0,si=Ct.length;Vi<si;Vi++){let Jo=Ct[Vi];xe.update(Jo,Mt),xe.bind(Jo,Mt)}}return Mt}function Ha(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Va(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,z,q){j.get(E.texture).__webglTexture=z,j.get(E.depthTexture).__webglTexture=q;let K=j.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let q=j.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,q=0){C=E,B=z,A=q;let K=!0,O=null,Se=!1,Fe=!1;if(E){let Ve=j.get(E);if(Ve.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(w.FRAMEBUFFER,null),K=!1;else if(Ve.__webglFramebuffer===void 0)ce.setupRenderTarget(E);else if(Ve.__hasExternalTextures)ce.rebindTextures(E,j.get(E.texture).__webglTexture,j.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Le=E.depthTexture;if(Ve.__boundDepthTexture!==Le){if(Le!==null&&j.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(E)}}let ge=E.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(Fe=!0);let Ce=j.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[z])?O=Ce[z][q]:O=Ce[z],Se=!0):E.samples>0&&ce.useMultisampledRTT(E)===!1?O=j.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[q]:O=Ce,S.copy(E.viewport),R.copy(E.scissor),U=E.scissorTest}else S.copy(Te).multiplyScalar(pe).floor(),R.copy(ke).multiplyScalar(pe).floor(),U=Ne;if(k.bindFramebuffer(w.FRAMEBUFFER,O)&&K&&k.drawBuffers(E,O),k.viewport(S),k.scissor(R),k.setScissorTest(U),Se){let Ve=j.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ve.__webglTexture,q)}else if(Fe){let Ve=j.get(E.texture),ge=z||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ve.__webglTexture,q||0,ge)}N=-1},this.readRenderTargetPixels=function(E,z,q,K,O,Se,Fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){k.bindFramebuffer(w.FRAMEBUFFER,Ve);try{let ge=E.texture,Ce=ge.format,Le=ge.type;if(!Ae.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-K&&q>=0&&q<=E.height-O&&w.readPixels(z,q,K,O,Re.convert(Ce),Re.convert(Le),Se)}finally{let ge=C!==null?j.get(C).__webglFramebuffer:null;k.bindFramebuffer(w.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,K,O,Se,Fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){let ge=E.texture,Ce=ge.format,Le=ge.type;if(!Ae.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-K&&q>=0&&q<=E.height-O){k.bindFramebuffer(w.FRAMEBUFFER,Ve);let Ue=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ue),w.bufferData(w.PIXEL_PACK_BUFFER,Se.byteLength,w.STREAM_READ),w.readPixels(z,q,K,O,Re.convert(Ce),Re.convert(Le),0);let Ke=C!==null?j.get(C).__webglFramebuffer:null;k.bindFramebuffer(w.FRAMEBUFFER,Ke);let Qe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Tu(w,Qe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ue),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Se),w.deleteBuffer(Ue),w.deleteSync(Qe),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,q=0){E.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let K=Math.pow(2,-q),O=Math.floor(E.image.width*K),Se=Math.floor(E.image.height*K),Fe=z!==null?z.x:0,Ve=z!==null?z.y:0;ce.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,q,0,0,Fe,Ve,O,Se),k.unbindTexture()},this.copyTextureToTexture=function(E,z,q=null,K=null,O=0){E.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],z=arguments[2],O=arguments[3]||0,q=null);let Se,Fe,Ve,ge,Ce,Le,Ue,Ke,Qe,et=E.isCompressedTexture?E.mipmaps[O]:E.image;q!==null?(Se=q.max.x-q.min.x,Fe=q.max.y-q.min.y,Ve=q.isBox3?q.max.z-q.min.z:1,ge=q.min.x,Ce=q.min.y,Le=q.isBox3?q.min.z:0):(Se=et.width,Fe=et.height,Ve=et.depth||1,ge=0,Ce=0,Le=0),K!==null?(Ue=K.x,Ke=K.y,Qe=K.z):(Ue=0,Ke=0,Qe=0);let at=Re.convert(z.format),tt=Re.convert(z.type),Ge;z.isData3DTexture?(ce.setTexture3D(z,0),Ge=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ce.setTexture2DArray(z,0),Ge=w.TEXTURE_2D_ARRAY):(ce.setTexture2D(z,0),Ge=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);let Ot=w.getParameter(w.UNPACK_ROW_LENGTH),Ft=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Mt=w.getParameter(w.UNPACK_SKIP_PIXELS),$t=w.getParameter(w.UNPACK_SKIP_ROWS),It=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,et.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ge),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Le);let ki=E.isDataArrayTexture||E.isData3DTexture,Ye=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let zt=j.get(E),Hi=j.get(z),Ct=j.get(zt.__renderTarget),Vi=j.get(Hi.__renderTarget);k.bindFramebuffer(w.READ_FRAMEBUFFER,Ct.__webglFramebuffer),k.bindFramebuffer(w.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let si=0;si<Ve;si++)ki&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,j.get(E).__webglTexture,O,Le+si),E.isDepthTexture?(Ye&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,j.get(z).__webglTexture,O,Qe+si),w.blitFramebuffer(ge,Ce,Se,Fe,Ue,Ke,Se,Fe,w.DEPTH_BUFFER_BIT,w.NEAREST)):Ye?w.copyTexSubImage3D(Ge,O,Ue,Ke,Qe+si,ge,Ce,Se,Fe):w.copyTexSubImage2D(Ge,O,Ue,Ke,Qe+si,ge,Ce,Se,Fe);k.bindFramebuffer(w.READ_FRAMEBUFFER,null),k.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ye?E.isDataTexture||E.isData3DTexture?w.texSubImage3D(Ge,O,Ue,Ke,Qe,Se,Fe,Ve,at,tt,et.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(Ge,O,Ue,Ke,Qe,Se,Fe,Ve,at,et.data):w.texSubImage3D(Ge,O,Ue,Ke,Qe,Se,Fe,Ve,at,tt,et):E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,O,Ue,Ke,Se,Fe,at,tt,et.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,O,Ue,Ke,et.width,et.height,at,et.data):w.texSubImage2D(w.TEXTURE_2D,O,Ue,Ke,Se,Fe,at,tt,et);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ot),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ft),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Mt),w.pixelStorei(w.UNPACK_SKIP_ROWS,$t),w.pixelStorei(w.UNPACK_SKIP_IMAGES,It),O===0&&z.generateMipmaps&&w.generateMipmap(Ge),k.unbindTexture()},this.copyTextureToTexture3D=function(E,z,q=null,K=null,O=0){return E.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,E=arguments[2],z=arguments[3],O=arguments[4]||0),fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,q,K,O)},this.initRenderTarget=function(E){j.get(E).__webglFramebuffer===void 0&&ce.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ce.setTextureCube(E,0):E.isData3DTexture?ce.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ce.setTexture2DArray(E,0):ce.setTexture2D(E,0),k.unbindTexture()},this.resetState=function(){B=0,A=0,C=null,k.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}},Og=class bc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new qe(t),this.near=i,this.far=r}clone(){return new bc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Es=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fg=class extends Zt{constructor(e=null,t=1,i=1,r,a,s,n,o,l=Xt,h=Xt,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rh=class extends Nt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new lt,Ch=new lt,Ts=[],Ph=new cr,zg=new lt,Ea=new ft,Ta=new va,ea=class extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),Ph.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Ph)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),Ta.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let n=0;n<i.length;n++)i[n]=r[s+n]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(i),e.ray.intersectsSphere(Ta)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Qr),Ch.multiplyMatrices(i,Qr),Ea.matrixWorld=Ch,Ea.raycast(e,Ts);for(let s=0,n=Ts.length;s<n;s++){let o=Ts[s];o.instanceId=a,o.object=this,t.push(o)}Ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fg(new Float32Array(r*this.count),r,this.count,nn,gi));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let n=this.geometry.morphTargetsRelative?1:1-s,o=r*e;a[o]=n,a.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},ir=class extends Zt{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,s;t?s=t:s=e*i[a-1];let n=0,o=a-1,l;for(;n<=o;)if(r=Math.floor(n+(o-n)/2),l=i[r]-s,l<0)n=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(s-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),s=this.getPoint(r),n=t||(a.isVector2?new Ie:new L);return n.copy(s).sub(a).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,r=[],a=[],s=[],n=new L,o=new lt;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new L)}a[0]=new L,s[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),n.crossVectors(r[d-1],r[d]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(St(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(n,p))}s[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(St(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},So=class extends yi{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new Ie){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bg=class extends So{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Eo(){let e=0,t=0,i=0,r=0;function a(s,n,o,l){e=s,t=o,i=-3*s+3*n-2*o-l,r=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,h){a(n,o,h*(o-s),h*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,h,c,u){let d=(n-s)/h-(o-s)/(h+c)+(o-n)/c,p=(o-n)/c-(l-n)/(c+u)+(l-o)/u;d*=c,p*=c,a(n,o,d,p)},calc:function(s){let n=s*s,o=n*s;return e+t*s+i*n+r*o}}}var bs=new L,To=new Eo,bo=new Eo,wo=new Eo,kg=class extends yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,n=Math.floor(s),o=s-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/a)+1)*a:o===0&&n===a-1&&(n=a-2,o=1);let l,h;this.closed||n>0?l=r[(n-1)%a]:(bs.subVectors(r[0],r[1]).add(r[0]),l=bs);let c=r[n%a],u=r[(n+1)%a];if(this.closed||n+2<a?h=r[(n+2)%a]:(bs.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=bs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),To.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,v),bo.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,v),wo.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(To.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),bo.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),wo.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(To.calc(o),bo.calc(o),wo.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ih(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+s+n)*l+(-3*i+3*r-2*s-n)*o+s*e+i}function Hg(e,t){let i=1-e;return i*i*t}function Vg(e,t){return 2*(1-e)*e*t}function Gg(e,t){return e*e*t}function ba(e,t,i,r){return Hg(e,t)+Vg(e,i)+Gg(e,r)}function Wg(e,t){let i=1-e;return i*i*i*t}function Xg(e,t){let i=1-e;return 3*i*i*e*t}function jg(e,t){return 3*(1-e)*e*e*t}function qg(e,t){return e*e*e*t}function wa(e,t,i,r,a){return Wg(e,t)+Xg(e,i)+jg(e,r)+qg(e,a)}var Lh=class extends yi{constructor(e=new Ie,t=new Ie,i=new Ie,r=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ie){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(wa(e,r.x,a.x,s.x,n.x),wa(e,r.y,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yg=class extends yi{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(wa(e,r.x,a.x,s.x,n.x),wa(e,r.y,a.y,s.y,n.y),wa(e,r.z,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uh=class extends yi{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kg=class extends yi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nh=class extends yi{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ba(e,r.x,a.x,s.x),ba(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jg=class extends yi{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ba(e,r.x,a.x,s.x),ba(e,r.y,a.y,s.y),ba(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),n=a-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(Ih(n,o.x,l.x,h.x,c.x),Ih(n,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Ie().fromArray(r))}return this}},Ao=Object.freeze({__proto__:null,ArcCurve:Bg,CatmullRomCurve3:kg,CubicBezierCurve:Lh,CubicBezierCurve3:Yg,EllipseCurve:So,LineCurve:Uh,LineCurve3:Kg,QuadraticBezierCurve:Nh,QuadraticBezierCurve3:Jg,SplineCurve:Dh}),$g=class extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,n=this.curves[a],o=n.getLength(),l=o===0?0:1-s/o;return n.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ao[r.type]().fromJSON(r))}return this}},rr=class extends $g{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Uh(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Nh(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new Lh(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r),new Ie(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Dh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new So(e,t,i,r,a,s,n,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zg=class wc extends Ht{constructor(t=[new Ie(0,-.5),new Ie(.5,0),new Ie(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=St(a,0,Math.PI*2);let s=[],n=[],o=[],l=[],h=[],c=1/i,u=new L,d=new Ie,p=new L,g=new L,v=new L,f=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=i;y++){let _=r+y*c*a,b=Math.sin(_),B=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*b,u.y=t[A].y,u.z=t[A].x*B,n.push(u.x,u.y,u.z),d.x=y/i,d.y=A/(t.length-1),o.push(d.x,d.y);let C=l[3*A+0]*b,N=l[3*A+1],M=l[3*A+0]*B;h.push(C,N,M)}}for(let y=0;y<i;y++)for(let _=0;_<t.length-1;_++){let b=_+y*t.length,B=b,A=b+t.length,C=b+t.length+1,N=b+1;s.push(B,A,N),s.push(C,N,A)}this.setIndex(s),this.setAttribute("position",new ot(n,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.points,t.segments,t.phiStart,t.phiLength)}},Qg=class Ac extends Ht{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let s=[],n=[],o=[],l=[],h=new L,c=new Ie;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(n[d]/t+1)/2,c.y=(n[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ot(n,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ws=class Rc extends Ht{constructor(t=1,i=1,r=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),s=Math.floor(s);let c=[],u=[],d=[],p=[],g=0,v=[],f=r/2,m=0;y(),n===!1&&(t>0&&_(!0),i>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(p,2));function y(){let b=new L,B=new L,A=0,C=(i-t)/r;for(let N=0;N<=s;N++){let M=[],S=N/s,R=S*(i-t)+t;for(let U=0;U<=a;U++){let D=U/a,X=D*l+o,ne=Math.sin(X),J=Math.cos(X);B.x=R*ne,B.y=-S*r+f,B.z=R*J,u.push(B.x,B.y,B.z),b.set(ne,C,J).normalize(),d.push(b.x,b.y,b.z),p.push(D,1-S),M.push(g++)}v.push(M)}for(let N=0;N<a;N++)for(let M=0;M<s;M++){let S=v[M][N],R=v[M+1][N],U=v[M+1][N+1],D=v[M][N+1];(t>0||M!==0)&&(c.push(S,R,D),A+=3),(i>0||M!==s-1)&&(c.push(R,U,D),A+=3)}h.addGroup(m,A,0),m+=A}function _(b){let B=g,A=new Ie,C=new L,N=0,M=b===!0?t:i,S=b===!0?1:-1;for(let U=1;U<=a;U++)u.push(0,f*S,0),d.push(0,S,0),p.push(.5,.5),g++;let R=g;for(let U=0;U<=a;U++){let D=U/a*l+o,X=Math.cos(D),ne=Math.sin(D);C.x=M*ne,C.y=f*S,C.z=M*X,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=X*.5+.5,A.y=ne*.5*S+.5,p.push(A.x,A.y),g++}for(let U=0;U<a;U++){let D=B+U,X=R+U;b===!0?c.push(X,X+1,D):c.push(X+1,X,D),N+=3}h.addGroup(m,N,b===!0?1:2),m+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},e0=class Cc extends ws{constructor(t=1,i=1,r=32,a=1,s=!1,n=0,o=Math.PI*2){super(0,t,i,r,a,s,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(t){return new Cc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ar=class extends rr{constructor(e){super(e),this.uuid=Dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new rr().fromJSON(r))}return this}},t0={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,s=Oh(e,0,a,i,!0),n=[];if(!s||s.next===s.prev)return n;let o,l,h,c,u,d,p;if(r&&(s=n0(e,t,s,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Aa(s,n,i,o,l,p,0),n}};function Oh(e,t,i,r,a){let s,n;if(a===v0(e,t,i,r)>0)for(s=t;s<i;s+=r)n=Bh(s,e[s],e[s+1],n);else for(s=i-r;s>=t;s-=r)n=Bh(s,e[s],e[s+1],n);return n&&As(n,n.next)&&(Ca(n),n=n.next),n}function Mr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(As(i,i.next)||ut(i.prev,i,i.next)===0)){if(Ca(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Aa(e,t,i,r,a,s,n){if(!e)return;!n&&s&&u0(e,r,a,s);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,s?r0(e,r,a,s):i0(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),Ca(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=a0(Mr(e),t,i),Aa(e,t,i,r,a,s,2)):n===2&&s0(e,t,i,r,a,s):Aa(Mr(e),t,i,r,a,s,1);break}}}function i0(e){let t=e.prev,i=e,r=e.next;if(ut(t,i,r)>=0)return!1;let a=t.x,s=i.x,n=r.x,o=t.y,l=i.y,h=r.y,c=a<s?a<n?a:n:s<n?s:n,u=o<l?o<h?o:h:l<h?l:h,d=a>s?a>n?a:n:s>n?s:n,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&ta(a,o,s,l,n,h,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function r0(e,t,i,r){let a=e.prev,s=e,n=e.next;if(ut(a,s,n)>=0)return!1;let o=a.x,l=s.x,h=n.x,c=a.y,u=s.y,d=n.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,m=Ro(p,g,t,i,r),y=Ro(v,f,t,i,r),_=e.prevZ,b=e.nextZ;for(;_&&_.z>=m&&b&&b.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&ta(o,c,l,u,h,d,_.x,_.y)&&ut(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=p&&b.x<=v&&b.y>=g&&b.y<=f&&b!==a&&b!==n&&ta(o,c,l,u,h,d,b.x,b.y)&&ut(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&ta(o,c,l,u,h,d,_.x,_.y)&&ut(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=f&&b!==a&&b!==n&&ta(o,c,l,u,h,d,b.x,b.y)&&ut(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function a0(e,t,i){let r=e;do{let a=r.prev,s=r.next.next;!As(a,s)&&Fh(a,r,r.next,s)&&Ra(a,s)&&Ra(s,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(s.i/i|0),Ca(r),Ca(r.next),r=e=s),r=r.next}while(r!==e);return Mr(r)}function s0(e,t,i,r,a,s){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&f0(n,o)){let l=zh(n,o);n=Mr(n,n.next),l=Mr(l,l.next),Aa(n,t,i,r,a,s,0),Aa(l,t,i,r,a,s,0);return}o=o.next}n=n.next}while(n!==e)}function n0(e,t,i,r){let a=[],s,n,o,l,h;for(s=0,n=t.length;s<n;s++)o=t[s]*r,l=s<n-1?t[s+1]*r:e.length,h=Oh(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(p0(h));for(a.sort(o0),s=0;s<a.length;s++)i=l0(a[s],i);return i}function o0(e,t){return e.x-t.x}function l0(e,t){let i=h0(e,t);if(!i)return t;let r=zh(i,e);return Mr(r,r.next),Mr(i,i.next)}function h0(e,t){let i=t,r=-1/0,a,s=e.x,n=e.y;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===s))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do s>=i.x&&i.x>=l&&s!==i.x&&ta(n<h?s:r,n,l,h,n<h?r:s,n,i.x,i.y)&&(u=Math.abs(n-i.y)/(s-i.x),Ra(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&c0(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function c0(e,t){return ut(e.prev,e,t.prev)<0&&ut(t.next,e,e.next)<0}function u0(e,t,i,r){let a=e;do a.z===0&&(a.z=Ro(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,d0(a)}function d0(e){let t,i,r,a,s,n,o,l,h=1;do{for(i=e,e=null,s=null,n=0;i;){for(n++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,h*=2}while(n>1);return e}function Ro(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function p0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function ta(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function f0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!m0(e,t)&&(Ra(e,t)&&Ra(t,e)&&g0(e,t)&&(ut(e.prev,e,t.prev)||ut(e,t.prev,t))||As(e,t)&&ut(e.prev,e,e.next)>0&&ut(t.prev,t,t.next)>0)}function ut(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function As(e,t){return e.x===t.x&&e.y===t.y}function Fh(e,t,i,r){let a=Cs(ut(e,t,i)),s=Cs(ut(e,t,r)),n=Cs(ut(i,r,e)),o=Cs(ut(i,r,t));return!!(a!==s&&n!==o||a===0&&Rs(e,i,t)||s===0&&Rs(e,r,t)||n===0&&Rs(i,e,r)||o===0&&Rs(i,t,r))}function Rs(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Cs(e){return e>0?1:e<0?-1:0}function m0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Fh(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ra(e,t){return ut(e.prev,e,e.next)<0?ut(e,t,e.next)>=0&&ut(e,e.prev,t)>=0:ut(e,t,e.prev)<0||ut(e,e.next,t)<0}function g0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function zh(e,t){let i=new Co(e.i,e.x,e.y),r=new Co(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Bh(e,t,i,r){let a=new Co(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Ca(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Co(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function v0(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}var ia=class Pc{static area(t){let i=t.length,r=0;for(let a=i-1,s=0;s<i;a=s++)r+=t[a].x*t[s].y-t[s].x*t[a].y;return r*.5}static isClockWise(t){return Pc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],s=[];kh(t),Hh(r,t);let n=t.length;i.forEach(kh);for(let l=0;l<i.length;l++)a.push(n),n+=i[l].length,Hh(r,i[l]);let o=t0.triangulate(r,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function kh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Hh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Po=class Ic extends Ht{constructor(t=new ar([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(s,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,f=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:_0,_,b=!1,B,A,C,N;m&&(_=m.getSpacedPoints(c),b=!0,d=!1,B=m.computeFrenetFrames(c,!1),A=new L,C=new L,N=new L),d||(f=0,p=0,g=0,v=0);let M=o.extractPoints(h),S=M.shape,R=M.holes;if(!ia.isClockWise(S)){S=S.reverse();for(let V=0,ae=R.length;V<ae;V++){let w=R[V];ia.isClockWise(w)&&(R[V]=w.reverse())}}let U=ia.triangulateShape(S,R),D=S;for(let V=0,ae=R.length;V<ae;V++){let w=R[V];S=S.concat(w)}function X(V,ae,w){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(ae,w)}let ne=S.length,J=U.length;function pe(V,ae,w){let Ee,he,Ae,k=V.x-ae.x,we=V.y-ae.y,j=w.x-V.x,ce=w.y-V.y,T=k*k+we*we,x=k*ce-we*j;if(Math.abs(x)>Number.EPSILON){let I=Math.sqrt(T),ee=Math.sqrt(j*j+ce*ce),se=ae.x-we/I,ie=ae.y+k/I,ze=w.x-ce/ee,_e=w.y+j/ee,Pe=((ze-se)*ce-(_e-ie)*j)/(k*ce-we*j);Ee=se+k*Pe-V.x,he=ie+we*Pe-V.y;let He=Ee*Ee+he*he;if(He<=2)return new Ie(Ee,he);Ae=Math.sqrt(He/2)}else{let I=!1;k>Number.EPSILON?j>Number.EPSILON&&(I=!0):k<-Number.EPSILON?j<-Number.EPSILON&&(I=!0):Math.sign(we)===Math.sign(ce)&&(I=!0),I?(Ee=-we,he=k,Ae=Math.sqrt(T)):(Ee=k,he=we,Ae=Math.sqrt(T/2))}return new Ie(Ee/Ae,he/Ae)}let $=[];for(let V=0,ae=D.length,w=ae-1,Ee=V+1;V<ae;V++,w++,Ee++)w===ae&&(w=0),Ee===ae&&(Ee=0),$[V]=pe(D[V],D[w],D[Ee]);let Z=[],Te,ke=$.concat();for(let V=0,ae=R.length;V<ae;V++){let w=R[V];Te=[];for(let Ee=0,he=w.length,Ae=he-1,k=Ee+1;Ee<he;Ee++,Ae++,k++)Ae===he&&(Ae=0),k===he&&(k=0),Te[Ee]=pe(w[Ee],w[Ae],w[k]);Z.push(Te),ke=ke.concat(Te)}for(let V=0;V<f;V++){let ae=V/f,w=p*Math.cos(ae*Math.PI/2),Ee=g*Math.sin(ae*Math.PI/2)+v;for(let he=0,Ae=D.length;he<Ae;he++){let k=X(D[he],$[he],Ee);Q(k.x,k.y,-w)}for(let he=0,Ae=R.length;he<Ae;he++){let k=R[he];Te=Z[he];for(let we=0,j=k.length;we<j;we++){let ce=X(k[we],Te[we],Ee);Q(ce.x,ce.y,-w)}}}let Ne=g+v;for(let V=0;V<ne;V++){let ae=d?X(S[V],ke[V],Ne):S[V];b?(C.copy(B.normals[0]).multiplyScalar(ae.x),A.copy(B.binormals[0]).multiplyScalar(ae.y),N.copy(_[0]).add(C).add(A),Q(N.x,N.y,N.z)):Q(ae.x,ae.y,0)}for(let V=1;V<=c;V++)for(let ae=0;ae<ne;ae++){let w=d?X(S[ae],ke[ae],Ne):S[ae];b?(C.copy(B.normals[V]).multiplyScalar(w.x),A.copy(B.binormals[V]).multiplyScalar(w.y),N.copy(_[V]).add(C).add(A),Q(N.x,N.y,N.z)):Q(w.x,w.y,u/c*V)}for(let V=f-1;V>=0;V--){let ae=V/f,w=p*Math.cos(ae*Math.PI/2),Ee=g*Math.sin(ae*Math.PI/2)+v;for(let he=0,Ae=D.length;he<Ae;he++){let k=X(D[he],$[he],Ee);Q(k.x,k.y,u+w)}for(let he=0,Ae=R.length;he<Ae;he++){let k=R[he];Te=Z[he];for(let we=0,j=k.length;we<j;we++){let ce=X(k[we],Te[we],Ee);b?Q(ce.x,ce.y+_[c-1].y,_[c-1].x+w):Q(ce.x,ce.y,u+w)}}}G(),Y();function G(){let V=a.length/3;if(d){let ae=0,w=ne*ae;for(let Ee=0;Ee<J;Ee++){let he=U[Ee];H(he[2]+w,he[1]+w,he[0]+w)}ae=c+f*2,w=ne*ae;for(let Ee=0;Ee<J;Ee++){let he=U[Ee];H(he[0]+w,he[1]+w,he[2]+w)}}else{for(let ae=0;ae<J;ae++){let w=U[ae];H(w[2],w[1],w[0])}for(let ae=0;ae<J;ae++){let w=U[ae];H(w[0]+ne*c,w[1]+ne*c,w[2]+ne*c)}}r.addGroup(V,a.length/3-V,0)}function Y(){let V=a.length/3,ae=0;F(D,ae),ae+=D.length;for(let w=0,Ee=R.length;w<Ee;w++){let he=R[w];F(he,ae),ae+=he.length}r.addGroup(V,a.length/3-V,1)}function F(V,ae){let w=V.length;for(;--w>=0;){let Ee=w,he=w-1;he<0&&(he=V.length-1);for(let Ae=0,k=c+f*2;Ae<k;Ae++){let we=ne*Ae,j=ne*(Ae+1),ce=ae+Ee+we,T=ae+he+we,x=ae+he+j,I=ae+Ee+j;le(ce,T,x,I)}}}function Q(V,ae,w){l.push(V),l.push(ae),l.push(w)}function H(V,ae,w){ve(V),ve(ae),ve(w);let Ee=a.length/3,he=y.generateTopUV(r,a,Ee-3,Ee-2,Ee-1);be(he[0]),be(he[1]),be(he[2])}function le(V,ae,w,Ee){ve(V),ve(ae),ve(Ee),ve(ae),ve(w),ve(Ee);let he=a.length/3,Ae=y.generateSideWallUV(r,a,he-6,he-3,he-2,he-1);be(Ae[0]),be(Ae[1]),be(Ae[3]),be(Ae[1]),be(Ae[2]),be(Ae[3])}function ve(V){a.push(l[V*3+0]),a.push(l[V*3+1]),a.push(l[V*3+2])}function be(V){s.push(V.x),s.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return x0(i,r,t)}static fromJSON(t,i){let r=[];for(let s=0,n=t.shapes.length;s<n;s++){let o=i[t.shapes[s]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Ao[a.type]().fromJSON(a)),new Ic(r,t.options)}},_0={generateTopUV:function(e,t,i,r,a){let s=t[i*3],n=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new Ie(s,n),new Ie(o,l),new Ie(h,c)]},generateSideWallUV:function(e,t,i,r,a,s){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],v=t[s*3],f=t[s*3+1],m=t[s*3+2];return Math.abs(o-c)<Math.abs(n-h)?[new Ie(n,1-l),new Ie(h,1-u),new Ie(d,1-g),new Ie(v,1-m)]:[new Ie(o,1-l),new Ie(c,1-u),new Ie(p,1-g),new Ie(f,1-m)]}};function x0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Io=class Lc extends Ht{constructor(t=new ar([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],s=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(s,3)),this.setAttribute("uv",new ot(n,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;ia.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let y=g[f];ia.isClockWise(y)===!0&&(g[f]=y.reverse())}let v=ia.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let y=g[f];p=p.concat(y)}for(let f=0,m=p.length;f<m;f++){let y=p[f];a.push(y.x,y.y,0),s.push(0,0,1),n.push(y.x,y.y)}for(let f=0,m=v.length;f<m;f++){let y=v[f],_=y[0]+u,b=y[1]+u,B=y[2]+u;r.push(_,b,B),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return y0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let n=i[t.shapes[a]];r.push(n)}return new Lc(r,t.curveSegments)}};function y0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Vh=class Uc extends Ht{constructor(t=1,i=32,r=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(n+o,Math.PI),h=0,c=[],u=new L,d=new L,p=[],g=[],v=[],f=[];for(let m=0;m<=r;m++){let y=[],_=m/r,b=0;m===0&&n===0?b=.5/i:m===r&&l===Math.PI&&(b=-.5/i);for(let B=0;B<=i;B++){let A=B/i;u.x=-t*Math.cos(a+A*s)*Math.sin(n+_*o),u.y=t*Math.cos(n+_*o),u.z=t*Math.sin(a+A*s)*Math.sin(n+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(A+b,1-_),y.push(h++)}c.push(y)}for(let m=0;m<r;m++)for(let y=0;y<i;y++){let _=c[m][y+1],b=c[m][y],B=c[m+1][y],A=c[m+1][y+1];(m!==0||n>0)&&p.push(_,b,A),(m!==r-1||l<Math.PI)&&p.push(b,B,A)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},M0=class Nc extends Ht{constructor(t=1,i=.4,r=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:s},r=Math.floor(r),a=Math.floor(a);let n=[],o=[],l=[],h=[],c=new L,u=new L,d=new L;for(let p=0;p<=r;p++)for(let g=0;g<=a;g++){let v=g/a*s,f=p/r*Math.PI*2;u.x=(t+i*Math.cos(f))*Math.cos(v),u.y=(t+i*Math.cos(f))*Math.sin(v),u.z=i*Math.sin(f),o.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/a),h.push(p/r)}for(let p=1;p<=r;p++)for(let g=1;g<=a;g++){let v=(a+1)*p+g-1,f=(a+1)*(p-1)+g-1,m=(a+1)*(p-1)+g,y=(a+1)*p+g;n.push(v,f,y),n.push(f,m,y)}this.setIndex(n),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Vt=class extends ya{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},S0=class extends Vt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ps(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function E0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Is=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},T0=class extends Is{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(n===void 0)switch(this.getSettings_().endingStart){case fl:a=e,n=2*t-i;break;case ml:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case fl:s=e,o=2*i-t;break;case ml:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,f=-u*v+2*u*g-u*p,m=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*v+(1.5+d)*g+.5*p,_=d*v-d*g;for(let b=0;b!==n;++b)a[b]=f*s[h+b]+m*s[l+b]+y*s[o+b]+_*s[c+b];return a}},b0=class extends Is{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==n;++u)a[u]=s[l+u]*c+s[o+u]*h;return a}},w0=class extends Is{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new b0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case On:t=this.InterpolantFactoryMethodLinear;break;case Fn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return On;case this.InterpolantFactoryMethodSmooth:return Fn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let n=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*n,s*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let n=0;n!==a;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,n,o,s),e=!1;break}s=o}if(r!==void 0&&E0(r))for(let n=0,o=r.length;n!==o;++n){let l=r[n];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Fn,a=e.length-1,s=1;for(let n=1;n<a;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(r)o=!0;else{let c=n*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(n!==s){e[s]=e[n];let c=n*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++s}}if(a>0){e[s]=e[a];for(let n=a*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[n+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Oi.prototype.TimeBufferType=Float32Array,Oi.prototype.ValueBufferType=Float32Array,Oi.prototype.DefaultInterpolation=On;var Pa=class extends Oi{constructor(e,t,i){super(e,t,i)}};Pa.prototype.ValueTypeName="bool",Pa.prototype.ValueBufferType=Array,Pa.prototype.DefaultInterpolation=$a,Pa.prototype.InterpolantFactoryMethodLinear=void 0,Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var A0=class extends Oi{};A0.prototype.ValueTypeName="color";var R0=class extends Oi{};R0.prototype.ValueTypeName="number";var C0=class extends Is{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let h=l+n;l!==h;l+=4)vi.slerpFlat(a,0,s,l-n,s,l,o);return a}},Gh=class extends Oi{InterpolantFactoryMethodLinear(e){return new C0(this.times,this.values,this.getValueSize(),e)}};Gh.prototype.ValueTypeName="quaternion",Gh.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Oi{constructor(e,t,i){super(e,t,i)}};Ia.prototype.ValueTypeName="string",Ia.prototype.ValueBufferType=Array,Ia.prototype.DefaultInterpolation=$a,Ia.prototype.InterpolantFactoryMethodLinear=void 0,Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var P0=class extends Oi{};P0.prototype.ValueTypeName="vector";var I0=class{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){n++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,n),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,n),s===n&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},L0=new I0,U0=class{constructor(e){this.manager=e!==void 0?e:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};U0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wh=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Lo=new lt,Xh=new L,jh=new L,N0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},D0=class extends N0{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qh=class extends Wh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new D0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yh=class extends Wh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Uo="\\[\\]\\.:\\/",O0=new RegExp("["+Uo+"]","g"),No="[^"+Uo+"]",F0="[^"+Uo.replace("\\.","")+"]",z0=/((?:WC+[\/:])*)/.source.replace("WC",No),B0=/(WCOD+)?/.source.replace("WCOD",F0),k0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",No),H0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",No),V0=new RegExp("^"+z0+B0+k0+H0+"$"),G0=["material","materials","bones","map"],W0=class{constructor(e,t,i){let r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class ha{constructor(t,i,r){this.path=i,this.parsedPath=r||ha.parseTrackName(i),this.node=ha.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new ha.Composite(t,i,r):new ha(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(O0,"")}static parseTrackName(t){let i=V0.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=r.nodeName.substring(a+1);G0.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let n=0;n<s.length;n++){let o=s[n];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,s=i.propertyIndex;if(t||(t=ha.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[a];if(n===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=W0,dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray],dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iv=new Float32Array(1),Kh=new lt,X0=class{constructor(e,t,i=0,r=1/0){this.ray=new Il(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kh),this}intersectObject(e,t=!0,i=[]){return Do(e,this,i,t),i.sort(Jh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Do(e[r],this,i,t);return i.sort(Jh),i}};function Jh(e,t){return e.distance-t.distance}function Do(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let s=e.children;for(let n=0,o=s.length;n<o;n++)Do(s[n],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var La=new L;function ii(e,t,i,r,a,s){let n=2*Math.PI*a/4,o=Math.max(s-2*a,0),l=Math.PI/4;La.copy(t),La[r]=0,La.normalize();let h=.5*n/(n+o),c=1-La.angleTo(e)/l;return Math.sign(La[i])===1?c*h:o/(n+o)+h+h*(1-c)}var $h=class extends er{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;let s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;let n=new L,o=new L,l=new L(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new L,g=.5/r;for(let v=0,f=0;v<h.length;v+=3,f+=2)switch(n.fromArray(h,v),o.copy(n),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(n.x)+o.x*a,h[v+1]=l.y*Math.sign(n.y)+o.y*a,h[v+2]=l.z*Math.sign(n.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:p.set(1,0,0),u[f+0]=ii(p,o,"z","y",a,i),u[f+1]=1-ii(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[f+0]=1-ii(p,o,"z","y",a,i),u[f+1]=1-ii(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[f+0]=1-ii(p,o,"x","z",a,e),u[f+1]=ii(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[f+0]=1-ii(p,o,"x","z",a,e),u[f+1]=1-ii(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[f+0]=1-ii(p,o,"x","y",a,e),u[f+1]=1-ii(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[f+0]=ii(p,o,"x","y",a,e),u[f+1]=1-ii(p,o,"y","x",a,t);break}}};function j0(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),s={},n={},o=e[0].morphTargetsRelative,l=new Ht,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.morphAttributes[p])}if(t){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in s){let u=Zh(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in n){let u=n[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<n[c].length;++v)p.push(n[c][v][d]);let g=Zh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Zh(e){let t,i,r,a=-1,s=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*i}let n=new t(s),o=new Nt(n,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/i;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<i;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else n.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var We="#101010",Xe="#f4f3ee",Ua='"DT Punk", Impact, sans-serif',Oo='"Inter Tight", "Arial Black", Arial, sans-serif',q0=(e,t,i)=>Math.max(t,Math.min(i,e)),Qh=()=>{let e=document.createElement("canvas");return e.width=e.height=512,e},Y0=e=>()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function mt(e,t,i){e.beginPath(),t.forEach(([r,a],s)=>s?e.lineTo(r,a):e.moveTo(r,a)),e.closePath(),i&&(e.fillStyle=i,e.fill())}function Tt(e,t,i,r,a,s,n){e.beginPath(),e.roundRect(t,i,r,a,s),n&&(e.fillStyle=n,e.fill())}function ht(e,t,i,r,a){e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function ra(e,t,i,r,a,s=128,n=128){let o=[];for(let l=0;l<t*2;l++){let h=l/(t*2)*Math.PI*2-Math.PI/2,c=l%2?r:i;o.push([s+Math.cos(h)*c,n+Math.sin(h)*c])}mt(e,o,a)}function bt(e,t,{x:i=128,y:r=128,width:a=190,size:s=60,color:n=We,font:o=Oo,weight:l=900,gap:h=1,stroke:c=null,strokeWidth:u=0}={}){let d=s,p=()=>{e.font=`${l} ${d}px ${o}`};for(p();d>10&&Math.max(...t.map(v=>e.measureText(v).width))>a;)d-=1,p();e.textAlign="center",e.textBaseline="middle";let g=d*h;return t.forEach((v,f)=>{let m=r+(f-(t.length-1)/2)*g;c&&(e.lineJoin="round",e.lineWidth=u,e.strokeStyle=c,e.strokeText(v,i,m)),e.fillStyle=n,e.fillText(v,i,m)}),d}function ec(e,t,i,r,a,s,{font:n=Oo,weight:o=900,spacing:l=1.16,bottom:h=!1,cx:c=128,cy:u=128}={}){e.save(),e.font=`${o} ${a}px ${n}`,e.fillStyle=s,e.textAlign="center",e.textBaseline="middle";let d=[...t],p=d.map(f=>e.measureText(f).width*l),g=p.reduce((f,m)=>f+m,0),v=r+(h?g/2/i:-g/2/i);d.forEach((f,m)=>{let y=p[m]/2/i;v+=h?-y:y,e.save(),e.translate(c+Math.cos(v)*i,u+Math.sin(v)*i),e.rotate(h?v-Math.PI/2:v+Math.PI/2),e.fillText(f,0,0),e.restore(),v+=h?-y:y}),e.restore()}function Fo(e,t,i,{angle:r=.55,step:a=7,weight:s=.62,from:n=-.15}={}){e.save(),t(),e.clip(),e.translate(128,128),e.rotate(r),e.fillStyle=i;for(let o=-200;o<200;o+=a){let l=Math.round(o/a)%2?a/2:0;for(let h=-200;h<200;h+=a){let c=q0((h+l)/230+o/420+.5+n,0,1),u=c*a*s;u<.45||(e.beginPath(),e.arc(h+l,o,u,0,7),e.fill())}}e.restore()}function Ls(e,t,i,r,a){let s=[];for(let n=0;n<10;n++){let o=n*Math.PI/5-Math.PI/2,l=n%2?r*.42:r;s.push([t+Math.cos(o)*l,i+Math.sin(o)*l])}mt(e,s,a)}function K0(e,t,i,r,a,s){e.save(),e.translate(t,i),e.scale(r,r),e.beginPath(),e.roundRect(-30,-36,60,50,22),e.fillStyle=a,e.fill(),e.fillRect(-17,8,34,22),ht(e,-13,-8,10,s),ht(e,13,-8,10,s),mt(e,[[0,2],[-5,12],[5,12]],s),e.fillStyle=s;for(let n=-1;n<2;n++)e.fillRect(n*9-1.2,18,2.4,12);e.restore()}function J0(e,t,i,r,a,s,n){e.fillStyle=s;for(let o=0;o<r;){let l=1+n()*3;e.fillRect(t+o,i,l,a),o+=l+1+n()*3}}var tc=(e,t,i,r,a,s,n,o=14)=>{e.save(),e.beginPath(),e.rect(t,i,r,a),e.clip(),e.fillStyle=s,e.fillRect(t,i,r,a),e.fillStyle=n;for(let l=-a;l<r+a;l+=o*2)mt(e,[[t+l,i+a],[t+l+o,i+a],[t+l+o+a,i],[t+l+a,i]],n);e.restore()};function sr(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?We:Xe:e===We?Xe:We}var $0={ask(e,t){Tt(e,26,40,204,140,34,t),mt(e,[[70,170],[58,226],[124,172]],t),bt(e,["ASK","DEN"],{y:110,size:62,color:sr(t),font:Ua,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),Tt(e,18,84,220,88,44,t),Tt(e,88,84,80,88,4,Xe);for(let[i,r]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])ht(e,i,r,5,We);e.restore(),bt(e,["OUCH"],{y:222,size:44,font:Ua,weight:400,color:Xe})},camera(e,t){Tt(e,28,76,200,130,16,We),Tt(e,86,52,70,34,8,We),ht(e,128,142,48,Xe),ht(e,128,142,34,We),ht(e,116,130,9,Xe),ht(e,200,98,9,t)},file(e,t){mt(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],Xe),mt(e,[[160,26],[200,66],[160,66]],"#9c9c98"),bt(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===Xe?We:t,gap:1.1})},cursor(e,t){ra(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),mt(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],We),e.lineWidth=2.4,e.strokeStyle=Xe,e.stroke(),e.restore()},receipt(e,t){let i=[[52,22],[204,22]];for(let r=0;r<=8;r++)i.push([204-r*19,232-(r%2?14:0)]);mt(e,i,Xe),e.fillStyle="#7d7d79";for(let r=0;r<4;r++)e.fillRect(70,48+r*22,r%2?76:116,8);bt(e,["$$$"],{y:176,size:62,color:t===Xe?We:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=Xe,e.fill(),mt(e,[[176,186],[214,236],[136,200]],Xe),bt(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===Xe?We:t,font:Ua,weight:400})},root(e){Tt(e,24,44,208,168,8,We),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=Xe,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),bt(e,["x"],{y:130,width:60,size:60,color:Xe,font:Ua,weight:400})},sun(e,t){ra(e,14,118,84,t),ht(e,128,128,70,Xe),Tt(e,66,100,54,36,12,We),Tt(e,136,100,54,36,12,We),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=We,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){ra(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),Tt(e,-16,-40,32,130,12,We),ht(e,0,-56,38,We),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),Tt(e,-92,-48,184,96,12,Xe),e.fillStyle=t===Xe?We:t,e.fillRect(-24,-48,116,96),e.restore(),bt(e,["CTRL+Z"],{width:150,size:36,color:We})},pencil(e,t){e.save(),e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=We,e.fillRect(-112,-22,28,44),mt(e,[[52,-22],[100,0],[52,22]],Xe),mt(e,[[84,-7],[100,0],[84,7]],We),e.restore()},car(e,t){Tt(e,22,118,212,64,22,t),mt(e,[[66,122],[96,72],[168,72],[198,122]],t),mt(e,[[86,118],[104,86],[128,86],[128,118]],We),mt(e,[[138,118],[138,86],[162,86],[180,118]],We),ht(e,78,184,24,We),ht(e,180,184,24,We),ht(e,78,184,9,Xe),ht(e,180,184,9,Xe)},house(e,t){mt(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=Xe,e.fillRect(52,122,152,100),e.fillStyle=We,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){Tt(e,26,26,204,204,26,We),e.lineWidth=7,e.strokeStyle=Xe,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[i,r]of[[74,80],[72,180],[184,86],[182,176]])ht(e,i,r,18,t)},fork(e,t){ht(e,128,128,112,Xe),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===Xe?"#b5b5b1":t,e.stroke(),e.fillStyle=We,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),Tt(e,84,106,36,22,10,We),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){ra(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=We,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){Tt(e,22,62,212,132,66,We),[28,58,92,46,76,34,54,22].forEach((i,r)=>Tt(e,52+r*21.5,128-i/2,11,i,5.5,r%3===2?t:Xe))},bot(e,t){Tt(e,40,62,176,152,28,Xe),e.fillStyle=We,e.fillRect(122,28,12,38),ht(e,128,26,12,t===Xe?We:t),ht(e,94,124,18,We),ht(e,162,124,18,We),e.fillStyle=We,e.fillRect(88,172,80,12)}};function Z0(e,t,i,r,a){let s=r===Xe?"#cfcfca":r;ht(e,128,128,122,We),ht(e,128,128,86,s),Fo(e,()=>{e.beginPath(),e.arc(128,128,86,0,7)},We,{step:6.5,weight:.5,angle:.7,from:-.22}),e.lineWidth=2,e.strokeStyle=Xe,e.beginPath(),e.arc(128,128,117,0,7),e.stroke(),e.lineWidth=3,e.beginPath(),e.arc(128,128,89,0,7),e.stroke();let[n,o]=i;ec(e,n,103,-Math.PI/2,19,Xe),ec(e,o,103,Math.PI/2,15,Xe,{bottom:!0}),Ls(e,22,128,8,Xe),Ls(e,234,128,8,Xe),e.save(),e.translate(128,128),e.rotate((a()-.5)*.24),e.scale(.56,.56),e.translate(-128,-128),$0[t](e,r===Xe?"#8a8a86":r),e.restore()}var aa=(e,t)=>{let i=[];for(let r of e.split(" ")){let a=i[i.length-1];a&&`${a} ${r}`.length<=t?i[i.length-1]=`${a} ${r}`:i.push(r)}return i},ic=[(e,t,i,r)=>{let a=i===Xe?Xe:i,s=sr(a);ra(e,18,122,98,We,133,134),ra(e,18,118,94,a),Fo(e,()=>{let n=[];for(let o=0;o<36;o++){let l=o/36*Math.PI*2-Math.PI/2,h=o%2?94:118;n.push([128+Math.cos(l)*h,128+Math.sin(l)*h])}mt(e,n)},s===We?"rgba(0,0,0,.72)":"rgba(255,255,255,.5)",{step:7,weight:.52}),e.save(),e.translate(128,128),e.rotate(-.1+r()*.1),e.translate(-128,-128),bt(e,aa(t,8),{width:164,size:66,y:126,color:s,gap:1.02,stroke:s===We?Xe:We,strokeWidth:6}),e.restore(),bt(e,["NOT RATED"],{y:200,width:90,size:13,color:s})},(e,t,i,r)=>{let a=i===Xe?We:i;e.save(),e.translate(128,128),e.rotate(-.12),e.translate(-128,-128),e.beginPath(),e.roundRect(8,58,240,140,10),e.fillStyle=Xe,e.fill();for(let[s,n]of[[8,128],[248,128]])e.save(),e.globalCompositeOperation="destination-out",ht(e,s,n,15,"#000"),e.restore();e.fillStyle=a,e.fillRect(16,66,224,25),bt(e,["ADMIT ONE"],{y:79,width:200,size:18,color:sr(a)===We?We:Xe,weight:800});for(let s=95;s<190;s+=8)e.fillStyle="#8c8c88",e.fillRect(190,s,2.4,4.4);bt(e,aa(t,11),{x:102,y:136,width:158,size:42,color:We,gap:1.05}),J0(e,198,100,40,62,We,r),bt(e,["N\xBA 00"+(10+Math.floor(r()*89))],{x:218,y:176,width:40,size:12,color:We}),e.restore()},(e,t,i)=>{let r=i===Xe?"#cfcfca":i;e.save(),e.translate(128,128),e.rotate(.08),e.translate(-128,-128),Tt(e,6,44,244,168,12,We),tc(e,14,52,228,26,r,We),tc(e,14,178,228,26,r,We),mt(e,[[46,96],[62,124],[30,124]],r),bt(e,["!"],{x:46,y:113,size:22,color:sr(r)}),bt(e,["WARNING"],{x:146,y:98,width:150,size:30,color:r,weight:900}),bt(e,aa(t,13),{x:128,y:146,width:214,size:38,color:Xe,gap:1.05}),e.restore()},(e,t,i,r)=>{let a=aa(t,9),s=i===Xe?"#cfcfca":i,n=[[Oo,900],[Ua,400],['Georgia, "Times New Roman", serif',700]],o=a.length,l=Math.min(64,190/o),h=0;a.forEach((c,u)=>{let d=c.split(" "),p=128+(u-(o-1)/2)*l,g=d.map((y,_)=>{let[b,B]=n[(h+_)%n.length];return e.font=`${B} ${l*.62}px ${b}`,e.measureText(y).width+18}),v=g.reduce((y,_)=>y+_,0),f=Math.min(1,226/v),m=128-v*f/2;d.forEach((y,_)=>{let[b,B]=n[h%n.length],A=[We,Xe,s,Xe][h%4];h++,e.save();let C=m+g[_]*f/2;e.translate(C,p+(r()-.5)*6),e.rotate((r()-.5)*.16);let N=g[_]*f/2,M=l*.47,S=[];for(let R=0;R<=10;R++)S.push([-N+R/10*N*2,-M+(r()-.5)*3.4]);for(let R=0;R<=10;R++)S.push([N-R/10*N*2,M+(r()-.5)*3.4]);mt(e,S,A),bt(e,[y],{x:0,y:1,width:g[_]*f-10,size:l*.62,color:sr(A),font:b,weight:B}),e.restore(),m+=g[_]*f})})},(e,t,i,r)=>{let a=i===Xe?"#cfcfca":i;ht(e,128,118,104,We),ht(e,128,118,96,a),Fo(e,()=>{e.beginPath(),e.arc(128,118,96,0,7)},sr(a)===We?"rgba(0,0,0,.6)":"rgba(255,255,255,.45)",{step:6,weight:.55,angle:-.5}),K0(e,128,70,1.05,Xe,We),Ls(e,52,70,13,Xe),Ls(e,204,70,13,Xe);let s=aa(t,12),n=s.length>1?74:54;mt(e,[[6,150-n/2+12],[38,150-n/2+12],[38,150+n/2+12],[6,150+n/2+12],[20,162]],We),mt(e,[[250,150-n/2+12],[218,150-n/2+12],[218,150+n/2+12],[250,150+n/2+12],[236,162]],We),Tt(e,26,150-n/2,204,n,3,Xe),e.strokeStyle=We,e.lineWidth=3,e.strokeRect(31,150-n/2+5,194,n-10),bt(e,s,{y:150,width:180,size:44,color:We,gap:1.04})}],rc=["$2.99","1 NIGHT","$0.99","NEW","REWIND","50\xA2","STAFF PICK","2 FOR 1"];function Q0(e,t,i){let r=i===Xe?Xe:i;ht(e,128,128,116,r),e.lineWidth=5,e.strokeStyle=sr(r),e.setLineDash([3,9]),e.lineCap="round",e.beginPath(),e.arc(128,128,100,0,7),e.stroke(),e.setLineDash([]),bt(e,aa(t,6),{width:170,size:84,color:sr(r),gap:.98})}var ev={portfolio:["ask","MAKE THE LOGO BIGGER",["APPROVED BY NOBODY","NO REVISIONS"]],basepoint:["bandaid","TAKE YOUR VITAMINS",["DOCTOR NOT INCLUDED","SHAKE WELL"]],"street-observations":["camera","SAY CHEESE",["NO FLASH NO MERCY","SHOT ON THE RUN"]],template:["file","BE KIND REWIND",["FINAL FINAL FINAL","DO NOT OVERWRITE"]],prime:["cursor","ONE MORE CLICK",["ADD TO CART OR ELSE","NO REFUNDS"]],sabsus:["receipt","CA-CHING!",["CASH ONLY FOREVER","KEEP THE CHANGE"]],janna:["bonjour","MERCI BEAUCOUP",["LE\xC7ON NUM\xC9RO UN","R\xC9P\xC9TEZ"]],"root-framer":["root","SHOW YOUR WORK",["MATH IS PUNK","NO CALCULATORS"]],sunfreaks:["sun","WEAR SUNSCREEN",["SPF 50 FOREVER","STAY WEIRD"]],airtexno:["wrench","IT WORKS ON MY MACHINE",["HAVE YOU TRIED RESTARTING","SERVICE DUE"]],"concept-undo-studio":["eraser","NEW RELEASE",["NOTHING IS PERMANENT","CTRL+Z"]],"concept-root-square-explorations":["pencil","STILL A SKETCH",["DO NOT ERASE","DRAFT 41"]],"concept-al-futtaim-themes":["car","CAN IT POP MORE?",["CHECK ENGINE LIGHT","NO PARKING"]],"sabsus-platform":["fork","ORDER UP!",["THE KITCHEN IS OPEN","TABLE 12"]],mortgage:["house","SWEET LOAN",["INTEREST NOT INCLUDED","SIGN HERE"]],node:["nodes","IF THIS THEN WHY",["ALL WIRED UP","DO NOT UNPLUG"]],restaurant:["fork","TABLE FOR TWO",["NO SUBSTITUTIONS","TIP YOUR WAITER"]],wallet:["scissors","BAD HAIR DAY",["JUST THE ENDS PLEASE","WALK-INS OK"]],wave:["wave","TURN IT UP",["LOUD IS A FEATURE","NO SKIPPING"]],"experiment-chat-portfolio":["bot","NOT A BOT",["ASK ME ANYTHING","BEEP BOOP"]]};function tv(e,t){let i=Qh(),r=i.getContext("2d"),a=14;for(let n=0;n<32;n++){let o=n/32*Math.PI*2;r.drawImage(e,Math.cos(o)*a,Math.sin(o)*a)}r.globalCompositeOperation="source-in",r.fillStyle=Xe,r.fillRect(0,0,512,512),r.globalCompositeOperation="source-over",r.drawImage(e,0,0),r.globalCompositeOperation="source-atop";for(let n=0;n<1500;n++){r.globalAlpha=.08+t()*.3,r.fillStyle=t()<.5?"#000":"#fff";let o=.6+t()*t()*3;r.fillRect(t()*512,t()*512,o,o)}r.strokeStyle="#fff";for(let n=0;n<16;n++){r.globalAlpha=.12+t()*.3,r.lineWidth=.6+t()*.9;let o=t()*512,l=t()*512,h=-.7+t()*.4,c=30+t()*140;r.beginPath(),r.moveTo(o,l),r.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),r.stroke()}for(let n=0;n<90;n++){let o=t()*7,l=512*(.36+t()*.14);r.globalAlpha=.2+t()*.5,r.fillStyle=Xe,r.fillRect(512/2+Math.cos(o)*l,512/2+Math.sin(o)*l,1+t()*5,1+t()*3)}r.globalAlpha=.13;let s=r.createLinearGradient(512*.1,0,512*.72,512*.9);return s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.46,"rgba(255,255,255,1)"),s.addColorStop(.6,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,512,512),r.globalAlpha=1,r.globalCompositeOperation="source-over",i}function zo(e,t){let i=Qh(),r=Y0(t),a=i.getContext("2d");return a.scale(2,2),e(a,r),tv(i,r)}function ac(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=null;for(let o=0;o<r.length;o+=4){let l=r[o],h=r[o+1],c=r[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,s=[l,h,c])}if(a<60)return null;let n=238/Math.max(...s);return`rgb(${s.map(o=>Math.round(o*n)).join(",")})`}function sc(e,t=0,i=null){let r=ev[e];if(!r)return[];let[a,s,n]=r,o=i||Xe,l=t*131+7;return[zo((h,c)=>ic[t%ic.length](h,s,o,c),l),zo((h,c)=>Z0(h,a,n,o,c),l+1),zo(h=>Q0(h,rc[t%rc.length],o),l+2)]}var ui=16,sa=48,Us=[3,11,9,8,7],Bo=Us.reduce((e,t)=>e+t,0),Na=22,ko=2,na=5,Sr=Bo*ui,iv=Na*sa,Da=Sr*na+iv,Pt=()=>new L,di=e=>e*e*(3-2*e),rv=e=>Math.max(0,Math.min(1,e));function av(e,t){let i=Da*ko,r=new Float32Array(i*3),a=new Float32Array(i*3),s=new Float32Array(i*4),n=new Ht,o=new Nt(r,3).setUsage(zn),l=new Nt(a,3).setUsage(zn),h=new Nt(s,4).setUsage(zn);n.setAttribute("position",o),n.setAttribute("normal",l),n.setAttribute("aG",h);let c=[],u=(Y,F,Q)=>{for(let H=0;H<F-1;H++)for(let le=0;le<Q;le++){let ve=Y+H*Q+le,be=Y+H*Q+(le+1)%Q,V=ve+Q,ae=be+Q;c.push(ve,be,V,be,ae,V)}};for(let Y=0;Y<ko;Y++){let F=Y*Da;for(let Q=0;Q<na;Q++)u(F+Q*Sr,Bo,ui);u(F+na*Sr,Na,sa)}n.setIndex(c);let d={value:0},p=new Vt({color:1184278,roughness:.5,metalness:0,envMap:e,envMapIntensity:1.65}),g=t(.1);p.onBeforeCompile=(Y,F)=>{g(Y,F),Y.uniforms.uRubber=d,Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aG;varying vec4 vG;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vG = aG;`).replace("vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;","vBoneY = (modelMatrix * vec4(transformed, 1.)).y;"),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRubber;varying vec4 vG;
float gh(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float gn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(gh(i),gh(i+vec2(1,0)),f.x),mix(gh(i+vec2(0,1)),gh(i+vec2(1,1)),f.x),f.y);}
float line(float d,float w){return 1.-smoothstep(w*.5,w,abs(d));}
// x: across the part (finger: -.5 to .5 with the top at 0; back of the hand: -1 to 1). y: how far along, in the units of the scene.
// z: nearness to a joint. w: 1 on a finger, 0 on the hand. Height is what catches the light; ink is where it goes dark; thread is pale stitching.
void gloveSurface(out float height,out float ink,out float thread){
 float x=vG.x,y=vG.y,joint=vG.z,finger=vG.w;
 vec2 uv=vec2(x*(finger>.5?2.:3.2),y);
 // Pebbled hide: broad, soft bumps with fine pores in them. Enough to break up the highlight, not enough to read as cloth.
 float grain=gn(uv*13.)*.62+gn(uv*29.)*.28+gn(uv*71.)*.1;
 height=(grain-.5)*.012*(1.-uRubber);
 ink=(1.-smoothstep(.3,.52,grain))*.12*(1.-uRubber);
 thread=0.;
 float top=1.-smoothstep(.2,.34,abs(x));
 // Creases over the joints: where the skin of the glove folds when the finger bends.
 float folds=sin(y*(31.+uRubber*5.)+x*4.);
 float crease=step(.5,finger)*smoothstep(.25,.95,joint)*top;
 height-=crease*smoothstep(.15,1.,folds)*(.014+uRubber*.01);
 ink+=crease*smoothstep(.7,1.,folds)*(.32-uRubber*.16);
 if(finger>.5){
  // A seam down each side of the finger, with the thread beside it. Rubber is dipped, so it has neither.
  float seam=line(abs(x)-.27,.016);
  float dash=step(.42,fract(y*11.));
  height-=seam*.05*(1.-uRubber);
  ink+=seam*.75*(1.-uRubber);
  thread=line(abs(x)-.235,.012)*dash*(1.-uRubber);
 }else{
  // The back of the hand. A stitched panel over the knuckles, three points of stitching towards the wrist, and a strap at the wrist.
  float at=y/max(vG.z,.001);
  float panel=smoothstep(.62,.64,at)*smoothstep(.985,.965,at)*(1.-smoothstep(.86,.9,abs(x)));
  float edge=max(line(at-.63,.012),line(at-.975,.012))*(1.-smoothstep(.84,.9,abs(x)))+line(abs(x)-.87,.018)*smoothstep(.6,.64,at)*smoothstep(1.,.96,at);
  height+=panel*.03*(1.-uRubber);
  ink+=edge*.55*(1.-uRubber);
  thread+=(max(line(at-.645,.007),line(at-.96,.007))*(1.-smoothstep(.8,.86,abs(x)))+line(abs(x)-.83,.012)*smoothstep(.65,.66,at)*smoothstep(.96,.95,at))*step(.4,fract((abs(x)*2.2+y)*5.2))*(1.-uRubber);
  for(int i=-1;i<=1;i++){
   float px=float(i)*.46;
   float p=line(x-px,.012)*smoothstep(.2,.26,at)*smoothstep(.62,.56,at);
   height-=p*.02*(1.-uRubber);
   ink+=p*.5*(1.-uRubber);
   thread+=line(x-px-.035,.009)*step(.45,fract(y*9.))*smoothstep(.22,.26,at)*smoothstep(.61,.57,at)*(1.-uRubber);
  }
  float strap=smoothstep(.07,.075,at)*smoothstep(.2,.195,at);
  height+=strap*.05;
  ink+=max(line(at-.075,.008),line(at-.195,.008))*.8;
  thread+=max(line(at-.09,.005),line(at-.182,.005))*step(.4,fract(x*16.))*(1.-uRubber);
 }
 thread=min(thread,1.);
}
`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 float gH,gI,gT;gloveSurface(gH,gI,gT);
 roughnessFactor=mix(mix(.4,.54,gI),.18,uRubber);`).replace("#include <color_fragment>",`#include <color_fragment>
 float gH0,gI0,gT0;gloveSurface(gH0,gI0,gT0);
 diffuseColor.rgb*=1.-min(gI0,.9);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.46,.44,.4),gT0*.85);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 {
  float gH1,gI1,gT1;gloveSurface(gH1,gI1,gT1);
  vec3 dpx=dFdx(-vViewPosition),dpy=dFdy(-vViewPosition);
  float hx=dFdx(gH1),hy=dFdy(gH1);
  vec3 r1=cross(dpy,normal),r2=cross(normal,dpx);
  float det=dot(dpx,r1);
  vec3 grad=sign(det)*(hx*r1+hy*r2);
  normal=normalize(abs(det)*normal-grad);
 }`)};let v=new ft(n,p);v.frustumCulled=!1,v.visible=!1;let f=Pt(),m=Pt(),y=Pt(),_=Pt(),b=Pt(),B=Pt(),A=Pt(),C=Pt(),N=Pt(),M=Pt(),S=Pt(),R=(Y,F,Q,H,le,ve)=>{r[Y*3]=F.x,r[Y*3+1]=F.y,r[Y*3+2]=F.z,s[Y*4]=Q,s[Y*4+1]=H,s[Y*4+2]=le,s[Y*4+3]=ve},U=(Y,F,Q,H,le,ve)=>{let be=ve*ve,V=be*ve;return Y.x=.5*(2*Q.x+(H.x-F.x)*ve+(2*F.x-5*Q.x+4*H.x-le.x)*be+(3*Q.x-F.x-3*H.x+le.x)*V),Y.y=.5*(2*Q.y+(H.y-F.y)*ve+(2*F.y-5*Q.y+4*H.y-le.y)*be+(3*Q.y-F.y-3*H.y+le.y)*V),Y.z=.5*(2*Q.z+(H.z-F.z)*ve+(2*F.z-5*Q.z+4*H.z-le.z)*be+(3*Q.z-F.z-3*H.z+le.z)*V),Y},D=Array.from({length:8},Pt),X=[1.3,1.17,1.05,.95];function ne(Y,F,Q,H,le,ve,be){let V=Y*Da+F*Sr;D[1].copy(Q[0]),D[2].copy(Q[1]),D[3].copy(Q[2]),D[4].copy(Q[3]),D[5].copy(Q[4]),D[0].copy(D[1]).multiplyScalar(2).sub(D[2]),A.copy(D[5]).sub(D[4]).normalize(),D[6].copy(D[5]).addScaledVector(A,H*1.05),D[7].copy(D[6]).addScaledVector(A,H);let ae=0,w=0,Ee=[0,0,0,0];b.copy(D[1]);let he=0;for(let ce=1;ce<=4;ce++)he+=D[ce].distanceTo(D[ce+1]||D[ce]),ce<=4&&(Ee[ce-1]=he);let Ae=0,k=Us.length-1,we=!1,j=0;for(let ce=0;ce<Us.length;ce++){let T=Us[ce];for(let x=0;x<T;x++,w++){let I=x/T;U(_,D[ce],D[ce+1],D[ce+2],D[Math.min(7,ce+3)],I),U(A,D[ce],D[ce+1],D[ce+2],D[Math.min(7,ce+3)],I+.02),f.copy(A).sub(_).normalize(),ae+=w?_.distanceTo(b):0,b.copy(_),m.copy(be).addScaledVector(f,-be.dot(f)).normalize(),y.copy(f).cross(m).normalize();let ee;ce===0?ee=X[0]*(1.02+.1*I):ce<k?ee=(X[ce-1]+(X[ce]-X[ce-1])*di(I))*(1-.075*Math.sin(Math.PI*I)):ee=X[3]*Math.sqrt(Math.max(0,1-I*I)),Ae=H*ee*ve;let se=ce===1?I:ce>1?1:0,ie=le&&ce===1&&se>le-.16&&se<=le;if(le&&(ce>1||ce===1&&se>le)){we||(we=!0,j=Ae),U(_,D[1],D[2],D[3],D[4],le),A.copy(_),U(_,D[0],D[1],D[2],D[3],0),_.copy(A),Ae=H*.94*ve;for(let _e=0;_e<ui;_e++){let Pe=_e/ui*Math.PI*2;S.copy(_).addScaledVector(m,Math.cos(Pe)*Ae*.92).addScaledVector(y,Math.sin(Pe)*Ae),R(V+w*ui+_e,S,(_e/ui+.5)%1-.5,ae,0,1)}continue}ie&&(Ae*=1+.1*di(rv(1-Math.abs((se-(le-.08))/.08))));let ze=0;for(let _e=0;_e<3;_e++)ze=Math.max(ze,Math.exp(-(((ae-Ee[_e+1-1])/(.22*(_e?.85:1)))**2)));for(let _e=0;_e<ui;_e++){let Pe=_e/ui*Math.PI*2;S.copy(_).addScaledVector(m,Math.cos(Pe)*Ae*.93).addScaledVector(y,Math.sin(Pe)*Ae),R(V+w*ui+_e,S,(_e/ui+.5)%1-.5,ae,ze,1)}}}}let J=Pt(),pe=Pt(),$=Pt(),Z=Pt(),Te=Pt(),ke=[0,0,0,0];function Ne(Y,F,Q,H,le,ve,be,V){let ae=Y*Da+na*Sr;J.set(0,0,0),pe.set(0,0,0);for(let k=0;k<4;k++)J.add(F[k]),pe.add(Q[k]);J.multiplyScalar(.25),pe.multiplyScalar(.25),Z.copy(F[0]).sub(F[3]);let w=Z.length()/2+ve*1.28;Z.normalize(),Te.copy(Q[0]).sub(Q[3]);let Ee=Te.length()/2+.46;Te.normalize(),$.copy(H);let he=$.distanceTo(pe)+pe.distanceTo(J)+.32,Ae=0;for(let k=0;k<Na;k++){let we=k/(Na-1),j,ce,T;if(we<.3){let I=we/.3;_.copy($).addScaledVector(le,.7*(1-I)).lerp(pe,di(I)*.55),j=.98+(Ee-.98)*di(I)*.6,ce=.72+(.56-.72)*di(I)}else if(we<.5){let I=(we-.3)/.2;b.copy($).lerp(pe,.55),_.copy(b).lerp(pe,di(I)),j=.98+(Ee-.98)*.6+(Ee-(.98+(Ee-.98)*.6))*di(I),ce=.56+(.5-.56)*di(I)}else{let I=(we-.5)/.5;if(_.copy(pe).lerp(J,I),I>.9&&_.addScaledVector(A.copy(J).sub(pe).normalize(),(I-.9)*2.4),j=Ee+(w-Ee)*di(I),ce=.5+(.42-.5)*di(I),I>.92){let ee=(I-.92)/.08,se=Math.sqrt(Math.max(0,1-ee*ee*.86));j*=.9+.1*se,ce*=se}}k&&(Ae+=_.distanceTo(b.copy(M))),M.copy(_),we<.5?f.copy(pe).sub($).normalize():f.copy(J).sub(pe).normalize(),N.copy(V).addScaledVector(f,-V.dot(f)).normalize(),y.copy(f).cross(N).normalize();let x=be;for(let I=0;I<4;I++)ke[I]=A.copy(F[I]).sub(J).dot(y);for(let I=0;I<sa;I++){let ee=I/sa*Math.PI*2,se=Math.cos(ee),ie=Math.sin(ee),ze=Math.sign(ie)*Math.abs(ie)**.62*j*x,_e=Math.sign(se)*Math.abs(se)**.82*ce*x;if(se>0&&we>.62){let Pe=0;for(let He=0;He<4;He++)Pe=Math.max(Pe,Math.exp(-(((ze-ke[He])/.24)**2)));_e+=Pe*.16*di((we-.62)/.3)*x}S.copy(_).addScaledVector(y,ze).addScaledVector(N,_e),R(ae+k*sa+I,S,j?Math.max(-1,Math.min(1,ze/(j*x||1))):0,Ae,he,0)}}}function G(){let Y=(F,Q,H)=>{for(let le=0;le<Q;le++)for(let ve=0;ve<H;ve++){let be=F+le*H+ve,V=F+le*H+(ve+1)%H,ae=F+le*H+(ve+H-1)%H,w=F+Math.min(Q-1,le+1)*H+ve,Ee=F+Math.max(0,le-1)*H+ve,he=r[V*3]-r[ae*3],Ae=r[V*3+1]-r[ae*3+1],k=r[V*3+2]-r[ae*3+2],we=r[w*3]-r[Ee*3],j=r[w*3+1]-r[Ee*3+1],ce=r[w*3+2]-r[Ee*3+2],T=Ae*ce-k*j,x=k*we-he*ce,I=he*j-Ae*we,ee=Math.hypot(T,x,I);if(ee<1e-7){T=we,x=j,I=ce;let se=Math.hypot(T,x,I)||1;T/=se,x/=se,I/=se}else T/=ee,x/=ee,I/=ee;a[be*3]=T,a[be*3+1]=x,a[be*3+2]=I}};for(let F=0;F<ko;F++){let Q=F*Da;for(let H=0;H<na;H++)Y(Q+H*Sr,Bo,ui);Y(Q+na*Sr,Na,sa)}}return{mesh:v,finger:ne,palm:Ne,commit(Y){d.value=Y==="full"?1:0,G(),o.needsUpdate=!0,l.needsUpdate=!0,h.needsUpdate=!0,v.visible=!0},hide(){v.visible=!1}}}var Ns=new L(0,0,1),Kt=(e,t,i)=>Math.max(t,Math.min(i,e)),ct=(e,t,i)=>e+(t-e)*i,Ds=e=>e*e*(3-2*e);function Ho(e,t=0){let i=new Es;i.background=new qe(526346);let r=(n,o,l,h,c,u)=>{let d=new ft(new ti(n,o),new Qi({color:new qe(u,u,u),side:fi}));d.position.set(l,h,c),d.lookAt(0,0,0),i.add(d)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2),t&&r(14,10,0,1,10,t);let a=new vo(e),s=a.fromScene(i,.025).texture;return a.dispose(),s}function nc(e=256,t=3){let i=document.createElement("canvas");i.width=i.height=e;let r=i.getContext("2d"),a=r.createImageData(e,e);for(let n=0;n<a.data.length;n+=4){let o=120+Math.random()*90;a.data[n]=a.data[n+1]=a.data[n+2]=o,a.data[n+3]=255}r.putImageData(a,0,0);let s=new ir(i);return s.wrapS=s.wrapT=Wa,s.repeat.set(t,t),s}var Fi=(e,t,i,r,a=0,s=0,n=0)=>(a&&e.rotateX(a),s&&e.rotateY(s),n&&e.rotateZ(n),e.translate(t,i,r),e),sv=e=>e.index?e.toNonIndexed():e,Vo=e=>{let t=e.map(sv);return t.forEach(i=>{Object.keys(i.attributes).forEach(r=>{r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r)})}),j0(t)};function Os(e,t,i,r,a,s,n,o,l){return e.moveTo(t+s,i),e.lineTo(r-n,i),e.quadraticCurveTo(r,i,r,i+n),e.lineTo(r,a-o),e.quadraticCurveTo(r,a,r-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,i+s),e.quadraticCurveTo(t,i,t+s,i),e}function Go(e,t,i,r=0,a=0){return Os(new ar,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}function nv(e,t,i,r=0,a=0){return Os(new rr,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}var Mi=18.7,Si=10.3,Fs=2.5,ov={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},pi={w:7.9,h:4.9,y:-.15},zs={x:5.25,y:-.15},nr=(e,t,i=0)=>{let{x0:r,x1:a,y0:s,y1:n,outer:o,inner:l}=ov,h=r-i,c=a+i,u=s-i,d=n+i,p=o+i*.6,g=l+i*.6,v=new e;return t<0?Os(v,-c,u,-h,d,p,g,g,p):Os(v,h,u,c,d,g,p,p,g)};function lv(){let e=1024/Mi,t=564/Si,i=1024/2048,r=y=>(y+Mi/2)*e,a=y=>(Si/2-y)*t,s=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=564,y},n=s(),o=s(),l=s(),h=n.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=y=>{let _=document.createElement("canvas");return _.width=_.height=6,y(_.getContext("2d")),_};h.fillStyle=h.createPattern(d(y=>{y.fillStyle="#050505",y.fillRect(0,0,6,6),y.fillStyle="#121212",y.fillRect(.5,.5,5,5),y.fillStyle="#1f1f1f",y.fillRect(.5,.5,5,1),y.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(y=>{y.fillStyle="#242424",y.fillRect(0,0,6,6),y.fillStyle="#c8c8c8",y.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=y=>{y.beginPath(),y.roundRect(r(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),y.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*i),h.fillStyle="#242424",h.fillRect(0,a(g)-3*i,1024,3*i),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*i);let v='"Inter Tight", Arial, sans-serif',f=(y,_)=>{y.fillStyle=_,y.font=`500 ${37*i}px ${v}`,y.textBaseline="middle","letterSpacing"in y&&(y.letterSpacing=`${4*i}px`),y.textAlign="right",y.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),a(4.35)),y.textAlign="left",y.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),a(4.35)),y.beginPath(),y.moveTo(r(0),a(4.72)),y.lineTo(r(.34),a(4.05)),y.lineTo(r(-.34),a(4.05)),y.closePath(),y.fill()};f(h,"#3a3a3a"),f(c,"#f0f0f0");for(let y=0;y<240;y++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*i*1.4;let _=Math.random()*1024,b=Math.random()*564,B=Math.random()*6.28,A=(10+Math.random()*120)*i;h.beginPath(),h.moveTo(_,b),h.lineTo(_+Math.cos(B)*A,b+Math.sin(B)*A),h.stroke()}for(let y=0;y<420;y++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let m=(y,_)=>{let b=new ir(y);return _&&(b.colorSpace=pt),b.anisotropy=8,b};return{map:m(n,!0),bump:m(o),rough:m(l)}}function hv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let r=4;r<128;r+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,r,0,6.2832),t.stroke();let i=new ir(e);return i.colorSpace=pt,i}function Wo(e){let t=Fs/2,i=lv(),r=new Vt({map:i.map,bumpMap:i.bump,bumpScale:1.2,roughnessMap:i.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new Vt({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:nc(256,5)}),s=new Vt({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),n=new Vt({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new Vt({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new Vt({map:hv(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new S0({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=Fi(new $h(Mi,Si,Fs-c,3,.14),0,0,-c/2),d=Go(Mi-.06,Si-.06,.2);d.holes.push(nr(rr,-1),nr(rr,1));let p=new Po(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,v=p.attributes.uv;for(let R=0;R<g.count;R++)v.setXY(R,(g.getX(R)+Mi/2)/Mi,(g.getY(R)+Si/2)/Si);p.translate(0,0,t-c);let f=(R,U)=>{let D=R;return D.holes.push(U),new Po(D,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},m=[Fi(f(nr(ar,-1,.16),nr(rr,-1)),0,0,t),Fi(f(nr(ar,1,.16),nr(rr,1)),0,0,t),Fi(f(Go(pi.w+.36,pi.h+.36,.16,0,pi.y),nv(pi.w+.06,pi.h+.06,.08,0,pi.y)),0,0,t),Fi(new er(Mi-.5,.09,.06),0,3.5,t+.02)],y=new ar;y.absarc(0,0,.98,0,Math.PI*2,!1);let _=new rr;_.absarc(0,0,.6,0,Math.PI*2,!0),y.holes.push(_);let b=[new Po(y,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let R=0;R<6;R++){let U=R/6*Math.PI*2;b.push(Fi(new er(.2,.44,.1),Math.cos(U)*.46,Math.sin(U)*.46,.05,0,0,U+Math.PI/2))}b.push(Fi(new ws(.06,.06,.08,12),0,0,.04,Math.PI/2));let B=new Qg(1,56),A=Vo([new Io(nr(ar,-1),12),new Io(nr(ar,1),12)]);A.translate(0,0,t+.012);let C=Go(pi.w,pi.h,.06,0,0),N=new Io(C,6),M=N.attributes.position,S=N.attributes.uv;for(let R=0;R<M.count;R++)S.setXY(R,M.getX(R)/pi.w+.5,M.getY(R)/pi.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:r,lips:Vo(m),gloss:s,floor:Fi(new ti(Mi-.4,Si-.4),0,0,t-c+.004),cavity:n,hub:Vo(b),white:o,pack:B,packMat:l,glassGeo:A,glass:h,labelGeo:N,spineGeo:Fi(new ti(16.6,1.72),0,-Si/2-.006,-.08,Math.PI/2),stickerGeo:new ti(1,1),hit:new er(Mi,Si,Fs)}}var cv=[{x:-7.1,y:3.46,size:3.7,turn:-.13,over:!0},{x:7.1,y:3.46,size:3.7,turn:.11,over:!0},{x:3.3,y:-3.84,size:2.42,turn:-.2}],oc=e=>{let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);let r=new ir(t);return r.colorSpace=pt,r},oa=oc("#ffffff"),lc=oc("rgba(0,0,0,0)");function Xo(e,t=0){let i=new xr,r=(h,c)=>{let u=new ft(h,c);return i.add(u),u};r(e.body,e.plastic),r(e.floor,e.cavity),r(e.slab,e.front),r(e.lips,e.gloss);let a=[-zs.x,zs.x].map(h=>{let c=r(e.pack,e.packMat);c.position.set(h,zs.y,e.FRONT-e.WALL+.012);let u=r(e.hub,e.white);return u.position.set(h,zs.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});r(e.glassGeo,e.glass);let s=()=>new Vt({map:oa,emissiveMap:oa,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),n=r(e.labelGeo,s());n.position.set(0,pi.y,e.FRONT+.008),n.rotation.z=t;let o=r(e.spineGeo,s()),l=cv.map((h,c)=>{let u=r(e.stickerGeo,new Vt({map:lc,emissiveMap:lc,color:16777215,emissive:16777215,emissiveIntensity:.42,roughness:.36,envMap:e.env,envMapIntensity:.75,alphaTest:.5}));return u.position.set(h.x+t*3,h.y-t*2,e.FRONT+(h.over?.085:.03)+c*.004),u.scale.setScalar(h.size),u.rotation.z=h.turn+t*9,u});return{group:i,reels:a,label:n,spine:o,stickers:l}}function hc(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=[16,16,16];for(let l=0;l<r.length;l+=4){let h=r[l],c=r[l+1],u=r[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,s=[h,c,u])}if(a<60)return"#141414";let n=Math.max(...s),o=135/n;return`rgb(${s.map(l=>Math.round(l*o)).join(",")})`}function cc(e,t,i){for(let r=0;r<700;r++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*i,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function uc(e,t,i,r,a){let s=i;for(e.font=`400 ${s}px ${a}`;e.measureText(t).width>r&&s>14;)s-=2,e.font=`400 ${s}px ${a}`;return s}var Oa=(e,t=8)=>{let i=new ir(e);return i.colorSpace=pt,i.anisotropy=t,i};function Bs(e,t){if(e.width<=t)return e;let i=document.createElement("canvas");i.width=t,i.height=Math.max(1,Math.round(e.height*t/e.width));let r=i.getContext("2d");return r.imageSmoothingQuality="high",r.drawImage(e,0,0,i.width,i.height),i}function uv(e,t,i){return Oa(dc(e,t,i))}function dc(e,t,i){let r=document.createElement("canvas");r.width=790,r.height=490;let a=r.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let s=getComputedStyle(document.body).fontFamily;if(e){let l=e.naturalWidth/e.naturalHeight,h=746/268,c=l>h?e.naturalHeight*h:e.naturalWidth,u=l>h?e.naturalHeight:e.naturalWidth/h;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-c)/2,(e.naturalHeight-u)/2,c,u,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(l=>{a.beginPath(),a.moveTo(24,l),a.lineTo(766,l),a.stroke()});let n='"DT Punk", cursive';a.fillStyle=i;let o=uc(a,t.name.toUpperCase(),66,640,n);return a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${n}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${n}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${s}`,a.textBaseline="middle",["SP","LP","EP"].forEach((l,h)=>{let c=30+h*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(c,440,22,22),a.fillText(l,c+32,452)}),a.strokeStyle=i,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",cc(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over",r}function dv(e,t){return Oa(pc(e,t))}function pc(e,t){let i=document.createElement("canvas");i.width=1660,i.height=172;let r=i.getContext("2d");r.fillStyle="#e8e6df",r.fillRect(0,0,1660,172),r.fillStyle="#121212",r.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,s='"DT Punk", cursive';r.fillStyle="#efefe9",r.textBaseline="middle",r.font='400 92px "DT Punk", cursive',r.textAlign="center",r.fillText(e.code,75,172/2+6),r.textAlign="left",r.strokeStyle="#b6b3aa",r.lineWidth=2,r.beginPath(),r.moveTo(176,138),r.lineTo(1420,138),r.stroke(),r.fillStyle=t;let n=uc(r,e.name.toUpperCase(),112,1210,s);return r.font=`400 ${n}px ${s}`,r.fillText(e.name.toUpperCase(),186,172/2+2),r.fillStyle="#3c3a35",r.font=`500 30px ${a}`,r.textAlign="right",r.fillText(e.kind,1630,172/2-22),r.font=`500 24px ${a}`,r.fillText("TRBN \xB7 SP 120",1630,172/2+24),cc(r,1660,172),i}var pv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fv=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;uniform float light;
float h(float x){return fract(sin(x*91.17)*43758.5453);}
vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
void main(){
 vec2 cc=vUv-.5;
 vec2 q=cc*2.;
 float d=dot(q,q)*.5;
 // The whole screen is bent by a filter where the browser can. Where it can't, the picture bows by itself.
 float past=max(0.,d*2.-1.);
 vec2 uv=.5+cc*mix(1.,1.+.045*past*past,bend);
 // Now and then the tracking slips: a band rolls through the picture and drags it, the lines inside pulled long, the colours coming apart.
 float cyc=time/11.,slip=1.25-fract(cyc)*6.5;
 float by=(uv.y-slip)/.075,band=exp(-by*by)*step(.45,h(floor(cyc)+3.));
 uv.y=mix(uv.y,slip+(uv.y-slip)*.14,band);
 uv.x+=band*(sin(uv.y*190.+time*21.)*.0026+(h(floor(uv.y*260.)+floor(time*24.))-.5)*.008);
 float row=floor(uv.y*70.);
 uv.x+=(h(row+floor(time*18.))-.5)*glitch*.05*step(.52,h(row*.37+floor(time*11.)));
 // Beams drift out of line towards the edge of a real tube.
 float split=.0004+d*.0026+glitch*.0055+band*.0075;
 vec2 dir=normalize(cc+.0001);
 vec3 c=vec3(texture2D(map,uv+dir*split).r,texture2D(map,uv).g,texture2D(map,uv-dir*split).b);
 // Phosphor bloom from the picture's own light.
 c+=(textureLod(map,uv,3.5).rgb*.15+textureLod(map,uv,5.).rgb*.1)*(1.-light*.85);
 c=toSRGB(max(c,0.));
 c*=.985+.015*sin(time*72.);
 vec2 e=abs(cc*2.);
 float pillow=pow(pow(e.x,4.6)+pow(e.y,4.6),1./4.6);
 float rim=mix(1.,1.-smoothstep(.955,.99,pillow),bend);
 c=mix(c*rim,mix(vec3(1.),c,rim),light)*power;
 gl_FragColor=vec4(c,1.);
}`,mv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",gv=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;uniform float light;
float s(vec2 p){return sin(p.x)*sin(p.y);}
void main(){
 vec2 p=vUv*3.;float t=time*.13;
 vec2 w=vec2(s(p+vec2(t,1.7))+.5*s(p*2.1-vec2(t*1.3,.4)),s(p.yx+vec2(.8,-t))+.5*s(p.yx*1.9+vec2(t,2.1)))*.11;
 vec2 uv=(vUv-.5)*.62+.5+w;
 vec3 c=mix(textureLod(b,uv,5.6).rgb,textureLod(a,uv,5.6).rgb,fade);
 float l=dot(c,vec3(.3,.59,.11));
 c=max(mix(vec3(l),c,1.7),0.);
 vec2 g=(vUv-focus)*vec2(1.25,1.45);
 float near=exp(-dot(g,g)*3.4);
 gl_FragColor=vec4(mix(c*(.035+.5*near*near),mix(vec3(.78,.78,.76),c,.55*near*near),light),1.);
}`,vv=[[0,0],[.55,0],[.92,.03],[1,.09],[.82,.2],[.6,.33],[.52,.5],[.56,.68],[.74,.84],[.84,.93],[.62,.995],[0,1]],_v=[[0,0],[.55,0],[.92,.04],[1,.11],[.8,.27],[.62,.5],[.6,.68],[.72,.82],[.7,.93],[.42,.995],[0,1]],ks=e=>new Zg(e.map(([t,i])=>new Ie(Math.max(.001,t),i)),14);function xv(){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d");t.fillStyle="rgba(0,0,0,.075)";for(let i=0;i<16;i++){let r=16-i;t.beginPath(),t.roundRect(26-r,26-r,76+r*2,12+r*2,6+r),t.fill()}return new ir(e)}var wt=1,fc=.5,mc=[{k:[1.32,.42],phi:.4,L:[1.62,1.06,.78],r:.29,base:[3.07,-2.34,-.75]},{k:[1.24,-.16],phi:.33,L:[1.78,1.16,.8],r:.3,base:[2.83,-2.52,-.75]},{k:[1.08,-.72],phi:.26,L:[1.62,1.08,.78],r:.28,base:[2.59,-2.7,-.75]},{k:[.86,-1.22],phi:.17,L:[1.24,.82,.66],r:.25,base:[2.35,-2.88,-.75]}],yv=[[2.2,-2.4,-.8],[.75,-1.55,-1.05],[-.7,-1.15,-.95],[-1.7,-.9,-.8]],Mv=[[3.34,-2.65,-.85],[3.08,-2.84,-.85],[2.82,-3.02,-.85],[2.56,-3.21,-.85],[3.52,-3.08,-1],[3.31,-3.23,-1],[3.11,-3.37,-1],[2.9,-3.52,-1]],ri=[3.45,-3.62,-1.2],Sv=[[.36,.26,.6],[-.36,-.26,.52]],Fa=7.2,zi=[ri[0]+Fa*.24,ri[1]-Fa*.8,ri[2]-Fa*.55],jo=[zi[0]-6.3,zi[1]-12.3,zi[2]-5.7],qo=[-8.2,-1.6],ai=[-.2404,.9707],Ev=[[0,0],[.5,0],[.72,.012],[.78,.03],[.7,.06],[.58,.1],[.5,.17],[.46,.3],[.44,.55],[.48,.76],[.6,.87],[.88,.94],[1,.975],[.7,1],[0,1]],At={wrist:[3.5,-2.1,.75],knuckle:[[-.94,2.56],[-.31,2.74],[.31,2.64],[.9,2.36]],spread:[-.2,-.06,.07,.22],base:[[-.52,.78],[-.17,.84],[.17,.82],[.52,.74]],carpal:[[-.62,.5],[-.21,.56],[.21,.55],[.62,.48],[-.56,.08],[-.19,.12],[.19,.11],[.56,.06]],thumb:[[-.72,.5],[-1.62,1.16],[-2.4,1.78],[-2.86,2.42]]};function Tv(e){let t=document.createElement("canvas");t.width=t.height=24;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,24,24);let r=i.getImageData(0,0,24,24).data,a=Array.from({length:12},()=>[0,0,0,0]),s=0;for(let c=0;c<r.length;c+=4){let u=r[c],d=r[c+1],p=r[c+2],g=Math.max(u,d,p),v=Math.min(u,d,p),f=g-v;if(s+=1,f<40)continue;let m=g===u?(d-p)/f%6:g===d?(p-u)/f+2:(u-d)/f+4;m<0&&(m+=6);let y=a[Math.floor(m*2)%12],_=f*g;y[0]+=u*_,y[1]+=d*_,y[2]+=p*_,y[3]+=_}let n=a.reduce((c,u)=>u[3]>c[3]?u:c);if(n[3]<s*2600)return null;let o=n.slice(0,3).map(c=>c/n[3]),l=Math.max(...o),h=Math.min(...o);return o.map(c=>Math.max(0,Math.min(1,(c-h*.55)/(l-h*.55))))}var bv={portfolio:{glove:"cut",studs:!0,cuff:"spikes",rings:[0,2]},airtexno:{glove:"cut",cuff:"studs"},wave:{cuff:"spikes",rings:[1]},"concept-undo-studio":{glove:"full"},sabsus:{rings:[0,1,2,3]},basepoint:{band:!0},sunfreaks:{beads:2},"root-framer":{beads:1},janna:{beads:1},wallet:{tie:!0},mortgage:{charm:"key"},"concept-al-futtaim-themes":{charm:"fob"},template:{charm:"cassette"},"street-observations":{charm:"film"},"sabsus-platform":{charm:"tag"}},wv=[[0,0],[.62,.01],[.93,.05],[1,.14],[1,.82],[.94,.93],[.66,.99],[0,1]],Yo=new qe(1052692),Ei=new qe(15263982),Ti=new qe(7171446),za=new qe(15328988);function Av(e){let t={value:0},i={value:0},r=new Vt({color:15526368,roughness:.46,metalness:0,envMap:e,envMapIntensity:1.25}),a=de=>xe=>{xe.uniforms.uTime=t,xe.uniforms.uRim={value:de},xe.uniforms.uPaper=i,xe.vertexShader=xe.vertexShader.replace("#include <common>",`#include <common>
varying float vBoneY;`).replace("#include <project_vertex>",`#include <project_vertex>
 vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;`),xe.fragmentShader=xe.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uRim;uniform float uPaper;varying float vBoneY;`).replace("#include <opaque_fragment>",`
        float boneRim = pow(1. - saturate(dot(normal, normalize(vViewPosition))), 2.4);
        float boneScan = smoothstep(.1, .0, abs(fract(vBoneY * .06 - uTime * .17) - .5));
        outgoingLight += vec3(uRim * (1. - uPaper * .8)) * boneRim + vec3(.8) * boneScan * (.25 + boneRim) * min(1., uRim * 3.);
        #include <opaque_fragment>`)};r.onBeforeCompile=a(.34);let s=new xr,n=new ea(ks(vv),r,28),o=new ea(ks(_v),r,10),l=new ea(new Vh(1,16,12),r,18),h=new ea(new ti(1,1),new Qi({map:xv(),transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),48);h.renderOrder=2;let c=new ea(ks(Ev),r,6);[n,o,l,h,c].forEach(de=>{de.frustumCulled=!1,s.add(de)});let u=av(e,a);s.add(u.mesh);let d=Array.from({length:4},()=>new L),p=Array.from({length:4},()=>new L),g=Array.from({length:5},()=>new L),v=new Vt({color:16777215,roughness:.56,metalness:0,envMap:e,envMapIntensity:.8}),f=new Vt({color:16777215,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6});v.onBeforeCompile=a(.07),f.onBeforeCompile=a(.16);let m=new M0(1,.18,8,26),y=new Vh(1,12,10),_=new $h(1,1,1,2,.12),b={},B={stall:[ks(wv),v,60],band:[new ws(1,1,1,30),v,4],bead:[y,v,60],tie:[m,v,4],block:[_,v,8],spike:[new e0(1,1,10).translate(0,.5,0),f,44],loop:[m,f,30],pin:[y,f,16],plate:[_,f,10],sleeve:[new ws(1,1,1,22),f,8]};Object.entries(B).forEach(([de,[xe,P,te]])=>{let W=new ea(xe,P,te);W.setColorAt(0,Ei),W.count=0,W.visible=!1,W.frustumCulled=!1,W.userData.most=te,b[de]=W,s.add(W)});let A={},C=(de,xe,P,te,W,re,ye)=>{let oe=b[de],Be=A[de]||0;Be>=oe.userData.most||(R.set(te,W,re),oe.setMatrixAt(Be,N.compose(xe,P,R)),oe.setColorAt(Be,ye),A[de]=Be+1)},N=new lt,M=new vi,S=new L,R=new L,U=new L,D=new L(0,1,0),X=(de,xe,P,te,W)=>{U.copy(te).sub(P);let re=U.length();U.divideScalar(re),M.setFromUnitVectors(D,U),S.copy(P).addScaledVector(U,re*.025),R.set(W,re*.95,W*.9),de.setMatrixAt(xe,N.compose(S,M,R))},ne=(de,xe,P,te)=>{U.copy(P).sub(xe);let W=U.length();M.setFromUnitVectors(D,U.divideScalar(W)),R.set(te,W,te*.9),c.setMatrixAt(de,N.compose(xe,M,R))},J=()=>{He=Math.random()<.5?0:1,Me=0},pe=(de,xe,P)=>{M.identity(),R.set(P,P*1.2,P*.82),l.setMatrixAt(de,N.compose(xe,M,R))},$=(de,xe,P,te)=>{let W=xe.x+xe.z*.3,re=xe.y-xe.z*.72,ye=P.x+P.z*.3,oe=P.y-P.z*.72,Be=ye-W,je=oe-re,it=Math.hypot(Be,je);M.setFromAxisAngle(Ns,Math.atan2(je,Be)),S.set((W+ye)/2,(re+oe)/2,.022),R.set(it*1.68,te,1),h.setMatrixAt(de,N.compose(S,M,R))},Z=[new L,new L,new L,new L],Te=new L,ke=new L,Ne=new L,G=new L,Y=new L,F=new L,Q=new L,H=new L,le=new L,ve=new L,be=new L,V=new vi,ae=new vi,w=new vi().setFromAxisAngle(D,Math.PI/2),Ee=new qe(15328988),he=new qe(15328988),Ae=(de,xe,P,te,W)=>{U.copy(P).sub(xe);let re=U.length();re<1e-4||(V.setFromUnitVectors(D,U.divideScalar(re)),C(de,xe,V,te,re,te,W))},k=0,we=(de,xe,P,te,W,re,ye,oe)=>{let Be=1.65*k;F.set(xe*Be,P*Be,te*Be).applyQuaternion(ae).add(Y),C(de,F,ae,W*Be,re*Be,ye*Be,oe)},j={key(){return we("loop",0,-.42,0,.36,.36,.46,Ti),we("plate",0,-1.36,0,.17,1.3,.09,Ti),we("plate",.15,-1.84,0,.2,.13,.08,Ti),we("plate",.13,-1.58,0,.15,.12,.08,Ti),2},fob(){return we("plate",0,-.86,0,.86,1.28,.2,Ei),we("block",0,-.86,.04,.72,1.14,.24,Yo),we("pin",0,-.62,.17,.15,.15,.05,Ei),we("pin",0,-1.02,.17,.15,.15,.05,Ei),1.5},cassette(){return we("block",0,-.62,0,1.3,.86,.17,za),we("block",0,-.44,.09,1.06,.28,.02,Ee),we("loop",-.3,-.78,.1,.13,.13,.06,Ti),we("loop",.3,-.78,.1,.13,.13,.06,Ti),1.1},film(){return we("block",0,-.62,0,.7,.92,.7,Ee),we("plate",0,-.13,0,.78,.1,.78,Ei),we("plate",0,-1.11,0,.78,.1,.78,Ei),we("block",.46,-.68,0,.34,.5,.03,Ee),1.2},tag(){return we("plate",0,-.8,0,.84,1.16,.07,Ti),we("block",0,-.9,.05,.62,.4,.02,Yo),1.4}},ce=null,T=null,x=1,I=0,ee=0,se=0,ie=7,ze=5,_e=0,Pe=!1,He=-1,Me=0,Oe=0,fe=0,me=13,ue={half:7,tall:5},Re=new L;return{group:s,get tilt(){return He<0?0:(He?-1:1)*Oe},wave(de=Math.random()<.5?0:1){He<0&&(He=de,Me=0)},place(de,xe,P){ue.half=de,ue.tall=xe,P&&(me=P),Pe||(Pe=!0,ie=de,ze=xe)},theme(de){i.value=de,r.color.set(de?3421242:15526368),r.envMapIntensity=de?.7:1.25},dress(de,xe){let P=bv[de]||null;xe?he.setRGB(xe[0],xe[1],xe[2],pt):he.copy(za),P!==ce&&(ce=P,ee+=.9)},update(de,xe,P){let te=1-Math.exp(-xe/180);ie+=(ue.half-ie)*te,ze+=(ue.tall-ze)*te,_e+=(Math.min(1,P*20)-_e)*(1-Math.exp(-xe/140)),t.value=de/1e3;let W=0,re=0,ye=0,oe=0;T!==ce?(x=Math.max(0,x-xe/110),x||(T=ce,Ee.copy(he))):x=Math.min(1,x+xe/260);let Be=x-1;k=T?Math.max(0,1+2.7*Be*Be*Be+1.7*Be*Be):0,Object.keys(A).forEach(yt=>{A[yt]=0});let je=T&&(T.cuff||T.beads||T.tie||T.band);if(se+=((je?1.25:T?.charm?.9:0)-se)*(1-Math.exp(-xe/320)),ee+=(-I*26-ee*2.4+_e*2.2*Math.sin(de*.012))*(xe/1e3),I+=ee*(xe/1e3),fe||(fe=de+12e3+Math.random()*16e3),He<0&&de>fe&&P<.01&&J(),He>=0){Me+=xe;let yt=Kt(Me/640,0,1),st=Kt((3500-Me)/640,0,1);Oe=Ds(Math.min(yt,st)),Me>3500&&(He=-1,Oe=0,fe=de+24e3+Math.random()*42e3)}let it=.06+Math.sin(de*.0105)*.14,Ze=it+Math.sin(de*.0105-.8)*.18,Jt=Math.cos(Ze),Gt=Math.sin(Ze);if([-1,1].forEach((yt,st)=>{let Wt=yt*ie,Ba=-ze*(st?.2:.1)+Math.sin(de*7e-4+st*2)*.05,bi=(ge,Ce,Le,Ue)=>ge.set(Wt+yt*Ce*wt,Ba+se+Le*wt,Ue),Rt=st===He?Oe:0,ca=Kt(me-ie-4,-1.6,At.wrist[0])-.41,Bi=ca+Fa*.944*Math.sin(it),Er=qo[0]+Fa*.944*Math.cos(it),ua=(ge,Ce)=>Bi+ge*Jt+Ce*Gt,ka=(ge,Ce)=>Er-ge*Gt+Ce*Jt,Ha=ri[0]+(Bi-ri[0])*Rt,Va=ri[1]+(Er-ri[1])*Rt,E=ri[2]+(At.wrist[2]-ri[2])*Rt,z=Math.PI*Rt,q=Math.cos(z),K=Math.sin(z),O=(ge,Ce,Le,Ue)=>{let Ke=(ai[0]*Ce+ai[1]*Le)*(1-q);return ge.set(yt*(Ce*q+ai[1]*Ue*K+ai[0]*Ke),Le*q-ai[0]*Ue*K+ai[1]*Ke,Ue*q+(ai[0]*Le-ai[1]*Ce)*K)};O(be,0,0,1);let Se=(ge,Ce,Le,Ue,Ke,Qe,et)=>{if(!Rt)return bi(ge,Ce,Le,Ue);let at=Ke-Bi,tt=Qe-Er,Ge=et-At.wrist[2],Ot=2*(ai[0]*at+ai[1]*tt),Ft=Ce-ri[0],Mt=Le-ri[1],$t=Ue-ri[2];return O(ve,Ft+(ai[0]*Ot-at-Ft)*Rt,Mt+(ai[1]*Ot-tt-Mt)*Rt,$t+(-Ge-$t)*Rt),bi(ge,Ha,Va,E).add(ve)},Fe=(ge,Ce,Le,Ue,Ke)=>Se(ge,Ce[0],Ce[1],Ce[2],ua(Le,Ue),ka(Le,Ue),Ke);mc.forEach((ge,Ce)=>{let Le=Math.sin(de*.0013+Ce*1.3+st*2.4)*.012-_e*.07,Ue=Math.cos(ge.phi),Ke=Math.sin(ge.phi),Qe=st===1&&Ce>=2,et=Qe?[.12,-.98,-1.1,-.86]:[.52+Le*.4,1.2+Le,.92+Le*1.3,.3+Le*.4],at=ge.k[0],tt=ge.k[1],Ge=Ze+At.spread[Ce],Ot=ua(At.knuckle[Ce][0],At.knuckle[Ce][1]),Ft=ka(At.knuckle[Ce][0],At.knuckle[Ce][1]),Mt=At.wrist[2]+.06;Se(Z[0],at,tt,et[0],Ot,Ft,Mt);let $t=at,It=tt,ki=et[0];for(let Ye=0;Ye<3;Ye++){let zt=et[Ye+1]-et[Ye],Hi=Math.sqrt(Math.max(.03,ge.L[Ye]*ge.L[Ye]-zt*zt)),Ct=at-Hi*Ue,Vi=tt+Hi*Ke;if(Ye===0){let si=$t/($t-Ct);It=tt+(Vi-tt)*si,ki=et[0]+zt*si}at=Ct,tt=Vi,Ot+=Math.sin(Ge)*ge.L[Ye],Ft+=Math.cos(Ge)*ge.L[Ye],Mt+=.14*(Ye+1)*(.5+Ye*.25),Ge+=.05,Se(Z[Ye+1],at,tt,et[Ye+1],Ot,Ft,Mt)}if(bi(ke,0,It,ki),X(n,W++,Z[0],Z[1],ge.r*wt),X(n,W++,Z[1],Z[2],ge.r*.86*wt),X(o,re++,Z[2],Z[3],ge.r*.8*wt),Fe(Te,ge.base,At.base[Ce][0],At.base[Ce][1],At.wrist[2]),X(n,W++,Te,Z[0],.34*wt),T){if(T.glove){d[Ce].copy(Z[0]),p[Ce].copy(Te),g[0].copy(Te).lerp(Z[0],.72);for(let Ye=0;Ye<4;Ye++)g[Ye+1].copy(Z[Ye]);u.finger(st,Ce,g,ge.r*wt,T.glove==="full"?0:.5,k,be)}if(T.studs&&(Ne.copy(Z[0]).addScaledVector(be,ge.r*1.2),O(G,.5,.35,.8).normalize(),V.setFromUnitVectors(D,G),C("spike",Ne,V,.2*k,.66*k,.2*k,Ei)),T.rings?.includes(Ce)){Ne.copy(Z[0]).lerp(Z[1],.6),G.copy(Z[1]).sub(Z[0]).normalize(),V.setFromUnitVectors(D,G);let Ye=ge.r*.84*k;C("sleeve",Ne,V,Ye,.32*k,Ye,Ei),Ne.addScaledVector(be,Ye*.92),V.identity(),C("pin",Ne,V,.17*k,.17*k,.09*k,Ei)}st===1&&Ce===1&&(Q.copy(Z[1]).lerp(Z[2],.3),H.copy(Z[2]).sub(Z[1]).normalize())}!Qe&&Rt<.3&&($(oe++,ke,Z[1],1.1+Z[1].z*.55),$(oe++,Z[1],Z[2],.95+Z[2].z*.5),$(oe++,Z[2],Z[3],.8),Y.copy(Z[3]),Y.z=.05,F.copy(Z[3]).lerp(Z[2],.3),F.z=.12,$(oe++,F,Y,.46))});for(let ge=0;ge<4;ge++)Fe(Z[ge],yv[ge],At.thumb[ge][0],At.thumb[ge][1],At.wrist[2]+.05+ge*.05);X(n,W++,Z[0],Z[1],.37*wt),X(n,W++,Z[1],Z[2],.33*wt),X(o,re++,Z[2],Z[3],.29*wt),Mv.forEach((ge,Ce)=>pe(ye++,Fe(Te,ge,At.carpal[Ce][0],At.carpal[Ce][1],At.wrist[2]-.02),(.27+Ce%3*.04)*wt));let Ve=ge=>bi(ge,Ha,Va,E);if(bi(Ne,zi[0]+(ca-zi[0])*Rt,zi[1]+(qo[0]-zi[1])*Rt,zi[2]+(qo[1]-zi[2])*Rt),Ve(G),Re.copy(Ne).sub(G).normalize(),Sv.forEach(([ge,Ce,Le],Ue)=>{Te.copy(G).add(O(ve,ge,Ce,0)),ke.set(Ne.x+yt*ge*.4,Ne.y+Ce*.4,Ne.z),ne(Ue+st*3,Te,ke,Le*wt)}),bi(Y,jo[0],jo[1],jo[2]),ne(2+st*3,Ne,Y,.82*wt),pe(ye++,Ne,.58*wt),T){if(T.glove){g[0].copy(Z[0]).lerp(Z[1],-.45);for(let Le=0;Le<4;Le++)g[Le+1].copy(Z[Le]);u.finger(st,4,g,.4*wt,T.glove==="full"?0:.55,k,be),u.palm(st,d,p,Ve(Ne),Re,mc[0].r*wt,k,be)}let ge=.98*wt;Ve(Ne).addScaledVector(Re,T.glove?.3:.45),G.copy(Re).cross(Ns).normalize(),Y.copy(G).cross(Re);let Ce=(Le,Ue)=>F.copy(Ne).addScaledVector(G,Math.cos(Le)*Ue).addScaledVector(Y,Math.sin(Le)*Ue);if(V.setFromUnitVectors(D,Re),T.cuff){C("band",Ne,V,ge*k,.9*k,ge*k,Yo);let Le=T.cuff==="spikes"?11:16;for(let Ue=0;Ue<Le;Ue++){let Ke=Ue/Le*Math.PI*2;Ce(Ke,ge*.97),Y.copy(F).sub(Ne).normalize(),ae.setFromUnitVectors(D,Y);let Qe=T.cuff==="spikes"?.62:.2,et=T.cuff==="spikes"?.17:.13;C("spike",F,ae,et*k,Qe*k,et*k,Ei),Y.copy(G).cross(Re)}}if(T.beads)for(let Le=0;Le<T.beads;Le++){let Ue=Le*.46,Ke=13+Le;for(let Qe=0;Qe<Ke;Qe++)Ne.addScaledVector(Re,Ue),Ce(Qe/Ke*Math.PI*2+Le,ge),Ne.addScaledVector(Re,-Ue),ae.identity(),C("bead",F,ae,.23*k,.23*k,.23*k,(Qe+Le)%3?Ee:za)}V.setFromUnitVectors(Ns,Re),T.tie&&C("tie",Ne,V,ge*k,ge*k,ge*.9*k,Ee),T.band&&(ae.setFromUnitVectors(D,Re),C("band",Ne,ae,ge*.99*k,.5*k,ge*.99*k,za),Ce(Math.PI/2,ge),C("block",F,ae,.9*k,.34*k,.12*k,za))}}),T?.charm){let yt=I+Math.sin(de*9e-4)*.05;le.set(Math.sin(yt),-Math.cos(yt),.07).normalize(),V.setFromUnitVectors(Ns,H),C("loop",Q,V,.38*k,.38*k,.42*k,Ti),Ne.copy(Q).addScaledVector(le,.34*k),G.copy(le).negate(),V.setFromUnitVectors(D,G);for(let Wt=0;Wt<4;Wt++)Ne.addScaledVector(le,.33*k),ae.copy(V),Wt%2&&ae.multiply(w),C("loop",Ne,ae,.17*k,.27*k,.17*k,Ti);Y.copy(Ne).addScaledVector(le,.3*k),ae.copy(V),G.set(0,1,0),ae.multiply(M.setFromAxisAngle(G,Math.sin(de*.0011)*.36+I*1.5)),we("loop",0,0,0,.12,.12,.1,Ti);let st=j[T.charm]();G.copy(Q).addScaledVector(le,(1.8+st*1.65)*k),$(oe++,Q,G,1.1*wt)}h.count=oe,T?.glove?u.commit(T.glove):u.hide(),Object.entries(b).forEach(([yt,st])=>{let Wt=A[yt]||0;st.count=Wt,st.visible=Wt>0,Wt&&(st.instanceMatrix.needsUpdate=!0,st.instanceColor.needsUpdate=!0)}),[n,o,l,h,c].forEach(yt=>{yt.instanceMatrix.needsUpdate=!0})}}}function Rv({host:e,stage:t,items:i,onHover:r,onOpen:a,onPlay:s}){let n=document.createElement("canvas");n.className="tv-canvas",n.setAttribute("aria-hidden","true"),e.append(n);let o;try{o=new Ah({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return n.remove(),null}let l=Math.min(devicePixelRatio||1,1.25);o.setPixelRatio(l),o.outputColorSpace=pt,o.setClearColor(0,0);let h=Ho(o),c=Wo(h),u=new Es;u.background=new qe(131587),u.fog=new Og(131587,40,96);let d=new qh(16777215,1.5);d.position.set(-8,18,22),u.add(d);let p=new Yt(30,1,1,200);p.position.set(0,0,40);let g=new _i({vertexShader:mv,fragmentShader:gv,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:oa},b:{value:oa},fade:{value:1},time:{value:0},focus:{value:new Ie(.47,.55)},light:{value:0}}}),v=new ft(new ti(2,2),g);v.frustumCulled=!1,v.renderOrder=-10,u.add(v);let f=new Yh(16777215,.32);u.add(f);let m=new qe(16777215),y=new qe(16777215),_=new qe(16777215),b=new ft(new ti(1,1),new Qi({map:oa,color:16777215,transparent:!0,opacity:0,fog:!1}));b.renderOrder=1;let B=new xr;u.add(B),B.add(b);let A=new ft(new ti(1,1),new Qi({color:328965,fog:!1}));A.position.z=-.04,B.add(A);let C=new ft(new er(1,1,1),new Vt({color:723723,roughness:.42,envMap:h,envMapIntensity:.9}));B.add(C);let N=Av(h);B.add(N.group);let M=0,S=0,R=i.map((fe,me)=>{let ue=Re=>{let de=Math.sin((me+1)*12.9898*Re)*43758.5453;return de-Math.floor(de)};return{rx:ue(1)-.5,ry:ue(2)-.5,rz:ue(3)-.5,wob:ue(4)*6.28,tilt:(ue(5)-.5)*.022,pile:ue(6)-.5}}),U=i.map((fe,me)=>{let ue=Xo(c,R[me].tilt),Re=new ft(c.hit,new Qi({visible:!1}));return Re.userData.index=me,ue.group.add(Re),ue.hit=Re,u.add(ue.group),ue}),D=new Map,X=new Map,ne=(fe,me)=>{if(D.has(fe)){let Re=D.get(fe);Re.complete&&Re.naturalWidth?me(Re):Re.addEventListener("load",()=>me(Re),{once:!0});return}let ue=new Image;ue.decoding="async",ue.src=i[fe].src,D.set(fe,ue),ue.addEventListener("load",()=>me(ue),{once:!0})},J=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),pe=fe=>{U[fe].wanted||(U[fe].wanted=!0,ne(fe,me=>J.then(()=>{let ue=hc(me),Re=(de,xe)=>{de.material.map=xe,de.material.emissiveMap=xe,de.material.emissiveIntensity=.55,de.material.color.set(16777215),de.material.needsUpdate=!0};Re(U[fe].label,uv(me,i[fe],ue)),Re(U[fe].spine,dv(i[fe],ue)),sc(i[fe].project,fe,ac(me)).forEach((de,xe)=>{let P=U[fe].stickers[xe];if(!P)return;let te=new ir(Bs(de,256));te.colorSpace=pt,te.anisotropy=4,P.material.map=te,P.material.emissiveMap=te,P.material.needsUpdate=!0})})))},$=fe=>{X.has(fe)||(X.set(fe,null),ne(fe,me=>{let ue=new ir(me);ue.colorSpace=pt,ue.anisotropy=8,ue.generateMipmaps=!0,ue.minFilter=Ai;let Re=document.createElement("canvas");Re.width=Re.height=6;let de=Re.getContext("2d",{willReadFrequently:!0});de.drawImage(me,0,0,6,6);let xe=de.getImageData(0,0,6,6).data,P=0,te=0,W=0;for(let je=0;je<xe.length;je+=4)P+=xe[je],te+=xe[je+1],W+=xe[je+2];let re=new qe(P/9180,te/9180,W/9180).convertSRGBToLinear(),ye=Math.max(P,te,W,1),oe=255/ye,Be=`rgba(${[P,te,W].map(je=>Math.round(je*oe)).join(",")},.3)`;X.set(fe,{texture:ue,ratio:me.naturalWidth/me.naturalHeight,avg:re,glow:Be,light:Tv(me)}),fe===V&&ae(fe)}))},Z=new Es,Te=new co(-1,1,1,-1,0,1),ke=new _i({vertexShader:pv,fragmentShader:fv,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1},light:{value:0}}}),Ne=new ft(new ti(2,2),ke);Ne.frustumCulled=!1,Z.add(Ne);let G=null,Y=0,F=0;function Q(){let fe=Math.round(Y*l),me=Math.round(F*l);(!G||G.width!==fe||G.height!==me)&&(G?.dispose(),G=new ji(fe,me,{samples:2,type:Rr,colorSpace:"",generateMipmaps:!0,minFilter:Ai,magFilter:ni})),ke.uniforms.map.value=G.texture,p.aspect=Y/F,p.updateProjectionMatrix(),be()}let H=()=>{let fe=80*Math.tan(p.fov*Math.PI/360);return{vh:fe,vw:fe*p.aspect}},le=4/3,ve=0;function be(){let{vh:fe,vw:me}=H(),ue=me*.62,Re=fe*.62,de=ue,xe=de/le;xe>Re&&(xe=Re,de=xe*le),ve=fe*.06,b.scale.set(de,xe,1),A.scale.set(de+.16,xe+.16,1),C.scale.set(de+.16,xe+.16,fc),C.position.z=-.05-fc/2,N.place((de+.16)/2,xe/2,40*Math.tan(p.fov*Math.PI/360)*p.aspect),g.uniforms.focus.value.set(.5,.5+ve/fe)}let V=-1;function ae(fe){let me=X.get(fe);me&&(g.uniforms.a.value!==me.texture&&(g.uniforms.b.value=g.uniforms.a.value===oa?me.texture:g.uniforms.a.value,g.uniforms.a.value=me.texture,g.uniforms.fade.value=0),y.copy(me.avg).lerp(_,.3),document.documentElement.style.setProperty("--tube-glow",me.glow),window.trbnRingTint?.(me.light),N.dress(i[fe]?.project,me.light),b.material.map=me.texture,b.material.opacity=1,b.material.needsUpdate=!0,le=me.ratio,be())}function w(){let fe=n.clientWidth,me=n.clientHeight;!fe||!me||(Y=fe,F=me,o.setSize(Y,F,!1),Q())}new ResizeObserver(w).observe(n),w();let Ee=()=>{let fe=document.documentElement.classList.contains("theme-light")?1:0;g.uniforms.light.value=fe,ke.uniforms.light.value=fe,u.fog.color.set(fe?13224389:131587),u.background.set(fe?13224389:131587),N.theme(fe)};Ee(),addEventListener("trbn:theme",Ee);let he=(fe,me,ue)=>Ds(Kt((ue-fe)/(me-fe),0,1));function Ae(fe,me,ue,Re,de){let{vh:xe,vw:P}=H(),te=Ds(Kt(1-Math.abs(Re)*1.15,0,1)),W=fe.group,re=Math.sin(de*5e-4+me.wob),ye={x:P*.275,y:-xe*.265,z:8,s:.52,rx:-.16+re*.012,ry:-.3+Math.cos(de*4e-4)*.018,rz:.05},oe;if(Re>=0){let Be=ue%2?1:-1,je=1-Re*4.2;oe={x:Be*P*.49,y:xe*.1+me.pile*1.2-Re*.12,z:je,s:.46,rx:me.rx*.1,ry:-Be*.92+me.ry*.08,rz:Be*.03+me.rz*.04},oe={x:ct(oe.x,ye.x,te),y:ct(oe.y,ye.y,te),z:ct(oe.z,ye.z,te),s:ct(oe.s,ye.s,te),rx:ct(oe.rx,ye.rx,te),ry:ct(oe.ry,ye.ry,te),rz:ct(oe.rz,ye.rz,te)}}else{let Be=Fs*.5,je=he(0,.9,-Re),it={x:-P*.265+me.pile*.45,y:-xe*.19+(Re+1)*Be,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+me.ry*.05,rz:me.rz*.022};oe={x:ct(ye.x,it.x,je),y:ct(ye.y,it.y,je)+Math.sin(je*Math.PI)*3,z:ct(ye.z,it.z,je),s:ct(ye.s,it.s,je),rx:ct(ye.rx,it.rx,je),ry:ct(ye.ry,it.ry,je),rz:ct(ye.rz,it.rz,je)}}W.position.set(oe.x,oe.y,oe.z),W.scale.setScalar(oe.s),W.rotation.set(oe.rx,oe.ry,oe.rz),W.visible=Re>-8&&Re<12&&oe.y>-xe*.85}let k=new X0,we=new Ie,j=null,ce=-2,T=!1,x=()=>{ce!==-2&&(ce=-2,r(-1),t.classList.remove("is-pointing"))},I=()=>{if(T=!1,!j){x();return}let[fe,me]=window.trbnBend?window.trbnBend(j.x,j.y,Y,F):[j.x,j.y],ue=fe/Y,Re=me/F;if(ue<0||ue>1||Re<0||Re>1){x();return}we.set(ue*2-1,-(Re*2-1)),k.setFromCamera(we,p);let de=k.intersectObjects([...U.filter(P=>P.group.visible).map(P=>P.hit),b],!1)[0],xe=de?de.object===b?-1:de.object.userData.index:-2;xe!==ce&&(ce=xe,r(xe>=0?xe:-1),t.classList.toggle("is-pointing",xe!==-2))};t.addEventListener("pointermove",fe=>{let me=n.getBoundingClientRect();j={x:fe.clientX-me.left,y:fe.clientY-me.top},T=!0}),t.addEventListener("pointerleave",()=>{j=null,T=!0}),t.addEventListener("click",fe=>{fe.target.closest("a, button")||(I(),ce!==-2&&a(ce===-1?V:ce))});let ee=!1;Promise.all([o.compileAsync(u,p),o.compileAsync(Z,Te)]).then(()=>{ee=!0},()=>{ee=!0});let se=1,ie=0,ze=0,_e=0,Pe=0,He=0,Me=!1,Oe=!0;return{frame:(fe,me,ue,Re=1)=>{if(!Oe||!ee)return;let de=fe-_e,xe=Math.abs(de);_e=fe,ze+=de*11+ue*9e-4;let P=Kt(fe/Math.max(1,i.length-1),0,1);U.forEach((oe,Be)=>{let je=Be-fe;if(je>-7&&je<7&&pe(Be),Ae(oe,R[Be],Be,je,me),Math.abs(je)<3){oe.reels[0].hub.rotation.z=-ze,oe.reels[1].hub.rotation.z=-ze*.82;let it=ct(3.15,1.75,P),Ze=ct(1.75,3.15,P);oe.reels[0].pack.scale.set(it,it,1),oe.reels[1].pack.scale.set(Ze,Ze,1)}});let te=Kt(Math.round(fe),0,i.length-1);if($(te),$(Math.min(i.length-1,te+1)),$(Math.max(0,te-1)),te!==V){let oe=V<0;V=te,oe||(se=1,M=(Math.random()<.5?-1:1)*.9,s?.(te)),ae(te)}se=Math.max(se*Math.exp(-ue/170),Kt(xe*26,0,.7)),ie||(ie=me);let W=Math.min(1,(me-ie)/700);m.lerp(y,1-Math.exp(-ue/500)),f.color.copy(m),g.uniforms.time.value=me/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+ue/900),ke.uniforms.time.value=me/1e3,ke.uniforms.glitch.value=se,S+=(-M*70-S*7)*(ue/1e3),M+=S*(ue/1e3),N.update(me,ue,xe),ke.uniforms.power.value=1-(1-W)**3,ke.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let re=j?j.x/Y-.5:0,ye=j?j.y/F-.5:0;Pe+=(re-Pe)*(1-Math.exp(-ue/260)),He+=(ye-He)*(1-Math.exp(-ue/260)),p.position.x=Pe*1.6,p.position.y=-He*1,p.lookAt(0,0,0),B.position.y=ve+Math.sin(me*83e-5)*.05,B.rotation.set(Math.sin(me*61e-5)*.009+He*.05+M*.012,Math.sin(me*47e-5)*.013+Pe*.1+M*.03,Math.sin(me*39e-5)*.0045+M*.008+N.tilt*.022),T&&I(),o.toneMapping=mi,o.setRenderTarget(G),o.clear(),o.render(u,p),o.setRenderTarget(null),o.clear(),o.render(Z,Te),n.style.opacity=String(Math.min(W*3,1)*Re),Me||(Me=!0,t.classList.add("tv-on"))},wave(fe){N.wave(fe)},show(fe){Oe=fe,n.style.display=fe?"":"none",fe&&w()},lighter(){l<=.8||(l=Math.max(.8,l-.2),o.setPixelRatio(l),w())}}}var gc={rest:{x:.222,y:-.252,z:6,s:.48,rx:-.22,ry:-.36,rz:.07},lift:{x:.2,y:-.21,z:9,s:.45,rx:-.07,ry:-.12,rz:.025}};function Cv(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");return t.filter="blur(16px)",t.fillStyle="rgba(0,0,0,.9)",t.beginPath(),t.roundRect(44,38,168,84,16),t.fill(),Oa(e,1)}function Pv({grid:e,scroller:t,items:i}){let r=document.createElement("canvas");r.className="tape-library",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"absolute",left:"0",top:"0",zIndex:"3",pointerEvents:"none"}),e.append(r);let a;try{a=new Ah({canvas:r,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return r.remove(),null}let s=Math.min(devicePixelRatio||1,1.25);a.setPixelRatio(s),a.outputColorSpace=pt,a.toneMapping=mi,a.setClearColor(0,0),a.autoClear=!1;let n=Ho(a),o=Wo(n),l=new Es,h=new qh(16777215,1.5);h.position.set(-8,18,22),l.add(h);let c=new Yh(16777215,.32);l.add(c);let u=new Yt(30,4/3,1,200);u.position.set(0,0,40),u.lookAt(0,0,0);let d=80*Math.tan(u.fov*Math.PI/360),p=d*u.aspect,g=new ft(new ti(1,1),new Qi({map:Cv(),transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=-1,l.add(g);let v=new qe(16777215),f=i.map((F,Q)=>{let H=be=>{let V=Math.sin((Q+1)*12.9898*be)*43758.5453;return V-Math.floor(V)},le=Xo(o,(H(5)-.5)*.022);le.group.visible=!1,l.add(le.group);let ve=ct(1.75,3.15,H(7));return le.reels[0].pack.scale.set(ve,ve,1),le.reels[1].pack.scale.set(4.9-ve,4.9-ve,1),{item:F,tape:le,seed:{rx:H(1)-.5,ry:H(2)-.5,rz:H(3)-.5},spin:H(4)*6.28,tint:new qe(1,1,1),wanted:!1,ready:!1,shown:!1,p:0,hover:0,h:0,tx:0,ty:0,px:0,py:0,box:null,dirty:!1}}),m=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),y=(F,Q)=>{let H=Oa(Q,4);F.material.map=H,F.material.emissiveMap=H,F.material.emissiveIntensity=.55,F.material.color.set(16777215),F.material.needsUpdate=!0};function _(F){if(F.wanted)return;F.wanted=!0;let Q=F.item.card.querySelector("img");if(!Q)return;let H=()=>m.then(()=>{if(Q.naturalWidth){try{b(F,Q)}catch{}F.ready=!0,G()}});Q.complete&&Q.naturalWidth?H():Q.addEventListener("load",H,{once:!0})}function b(F,Q){let H=hc(Q);y(F.tape.label,Bs(dc(Q,F.item,H),396)),y(F.tape.spine,Bs(pc(F.item,H),830));let le=null;try{le=ac(Q)}catch{}sc(F.item.project,F.item.index,le).forEach((he,Ae)=>{let k=F.tape.stickers[Ae];if(!k)return;let we=Oa(Bs(he,256),4);k.material.map=we,k.material.emissiveMap=we,k.material.needsUpdate=!0});let ve=document.createElement("canvas");ve.width=ve.height=6;let be=ve.getContext("2d",{willReadFrequently:!0});be.drawImage(Q,0,0,6,6);let V=be.getImageData(0,0,6,6).data,ae=0,w=0,Ee=0;for(let he=0;he<V.length;he+=4)ae+=V[he],w+=V[he+1],Ee+=V[he+2];F.tint.setRGB(ae/9180,w/9180,Ee/9180).convertSRGBToLinear().lerp(v,.3)}function B(F,Q){let H=gc.rest,le=gc.lift,ve=Ds(Kt(F.h,0,1)),be=ct(H.x,le.x,ve)*p,V=ct(H.y,le.y,ve)*d,ae=ct(H.rz,le.rz,ve)+F.seed.rz*.03,w=ct(H.rx,le.rx,ve)+F.seed.rx*.05-F.py*.2*ve,Ee=ct(H.ry,le.ry,ve)+F.seed.ry*.07+F.px*.28*ve,he=1-(1-Kt(F.p,0,1))**3;be+=(1-he)*4.5,V-=(1-he)*9.5,ae+=(1-he)*.22;let Ae=F.tape.group;Ae.position.set(be,V,ct(H.z,le.z,ve)),Ae.scale.setScalar(ct(H.s,le.s,ve)),Ae.rotation.set(w,Ee,ae),F.tape.reels[0].hub.rotation.z=-F.spin,F.tape.reels[1].hub.rotation.z=-F.spin*.82,g.position.set(be+1.1+ve*.9,V-1.5-ve*1.1,0),g.scale.set(Mi*Ae.scale.x*(1.2+ve*.12),Si*Ae.scale.x*(1.5+ve*.2),1),g.rotation.set(0,0,ae),g.material.opacity=(.78-ve*.2)*he}let A=220,C=0,N=0,M=-1e9,S=0,R=0,U=!0,D=!0,X=!1,ne=!1,J=null,pe=0,$=0,Z=0,Te=0,ke=(F,Q)=>{let{box:H}=F,le=H.left,ve=N-(H.top-Q+H.height);a.setViewport(le,ve,H.width,H.height),a.setScissor(le,ve,H.width,H.height),a.clear(),!(!F.shown||!F.ready)&&(J&&J!==F.tape.group&&(J.visible=!1),J=F.tape.group,J.visible=!0,c.color.copy(F.tint),a.render(l,u))};function Ne(F){if(S=0,!D||!X||!ne||document.hidden)return;let Q=Math.min(250,F-(R||F));R=F;let H=t.getBoundingClientRect(),le=e.getBoundingClientRect(),ve=e.clientWidth,be=e.clientHeight,V=f.map(j=>j.item.card.hidden?null:j.item.media.getBoundingClientRect()),ae=H.top-le.top,w=H.bottom-le.top,Ee=Math.max(1,Math.min(Math.round(H.height+A*2),Math.ceil(be)));(ve!==C||Ee!==N)&&(C=ve,N=Ee,a.setSize(C,N,!1),r.style.width=`${C}px`,r.style.height=`${N}px`,U=!0);let he=Math.max(0,Math.floor(be-N));if(ae<M+A*.35||w>M+N-A*.35||M>he){let j=Kt(Math.round(ae-A),0,he);j!==M&&(M=j,r.style.transform=`translate3d(0,${M}px,0)`,U=!0)}let Ae=!1,k=!1,we=M;if(f.forEach((j,ce)=>{let T=V[ce];if(j.box=null,!T||!T.width)return;let x=T.top-le.top,I=T.bottom-le.top;if(I>ae-900&&x<w+900&&_(j),I<we||x>we+N)return;j.box={left:T.left-le.left,top:x,width:T.width,height:T.height},j.ready&&!j.shown&&I>ae+T.height*.2&&x<w-T.height*.2&&(j.shown=!0,j.born=F,j.p=0,j.dirty=!0),j.shown&&j.p<1&&(j.p=Math.min(1,(F-j.born)/620),j.dirty=!0),(Math.abs(j.hover-j.h)>.001||Math.abs(j.tx-j.px)>.001||Math.abs(j.ty-j.py)>.001||j.shown&&j.p<1)&&(j.dirty=!0,k=!0);let ee=j.h+(j.hover-j.h)*(1-Math.exp(-Q/150));j.h=Math.abs(ee-j.hover)<.001?j.hover:ee,j.px+=(j.tx-j.px)*(1-Math.exp(-Q/170)),j.py+=(j.ty-j.py)*(1-Math.exp(-Q/170)),j.h>.02&&(j.spin+=Q*.0034*j.h,j.dirty=!0),(j.dirty||U)&&(Ae||(Ae=j.dirty))}),Ae&&!k&&!U&&F-pe<30){G();return}pe=F,a.setScissorTest(!1),U&&a.clear(),a.setScissorTest(!0),f.forEach(j=>{!j.box||!(U||j.dirty)||(j.ready&&j.shown&&B(j,F),ke(j,we),j.dirty=!1)}),a.setScissorTest(!1),U=!1,Ae?($++,Z+=Math.min(Q,50),$>=40&&(Te=Z/$>26?Te+1:0,$=0,Z=0,Te>=2&&!navigator.webdriver&&(Te=0,Y())),G()):($=0,Z=0,R=0)}function G(){!S&&D&&X&&ne&&!document.hidden&&(S=requestAnimationFrame(Ne))}function Y(){s<=.8||(s=Math.max(.8,s-.2),a.setPixelRatio(s),C=0,U=!0)}return f.forEach(F=>{let{link:Q,media:H}=F.item,le=ve=>{let be=H.getBoundingClientRect();be.width&&(F.tx=Kt((ve.clientX-be.left)/be.width-.5,-.6,.6),F.ty=Kt((ve.clientY-be.top)/be.height-.5,-.6,.6),G())};Q.addEventListener("pointerenter",ve=>{F.hover=1,le(ve)}),Q.addEventListener("pointermove",le),Q.addEventListener("pointerleave",()=>{F.hover=0,F.tx=0,F.ty=0,G()}),Q.addEventListener("focus",()=>{Q.matches(":focus-visible")&&(F.hover=1,G())}),Q.addEventListener("blur",()=>{F.hover=0,G()})}),t.addEventListener("scroll",G,{passive:!0}),new ResizeObserver(()=>{U=!0,G()}).observe(e),new ResizeObserver(()=>{U=!0,G()}).observe(t),new IntersectionObserver(([F])=>{X=F.isIntersecting,X&&(U=!0,G())},{root:t,rootMargin:`${A}px 0px`}).observe(e),document.addEventListener("visibilitychange",()=>{U=!0,G()}),addEventListener("pageshow",()=>{U=!0,G()}),f.forEach(F=>{F.tape.group.visible=!0}),a.compileAsync(l,u).catch(()=>{}).then(()=>{f.forEach(F=>{F.tape.group.visible=!1}),ne=!0,U=!0,G()}),{wake(){U=!0,G()},show(F){D=F,r.style.display=F?"":"none",F&&(U=!0,G())}}}export{Rv as default,nc as grainTexture,Xo as makeTape,Pv as startShelf,Ho as studioEnv,Wo as tapeParts};
