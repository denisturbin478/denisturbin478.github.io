var Zc=0,dl=1,Qc=2,pl=1,eu=2,Ii=3,Yi=0,Jt=1,Mi=2,Ki=0,Lr=1,fl=2,ml=3,gl=4,tu=5,pr=100,iu=101,ru=102,au=103,su=104,nu=200,ou=201,lu=202,hu=203,Qs=204,en=205,cu=206,uu=207,du=208,pu=209,fu=210,mu=211,gu=212,vu=213,_u=214,tn=0,rn=1,an=2,Ur=3,sn=4,nn=5,on=6,ln=7,vl=0,xu=1,yu=2,Si=0,Mu=1,Su=2,Tu=3,Eu=4,bu=5,wu=6,Au=7,_l=300,Ir=301,Dr=302,hn=303,cn=304,Qa=306,es=1e3,fr=1001,un=1002,Qt=1003,Ru=1004,ts=1005,di=1006,dn=1007,Di=1008,Ni=1009,xl=1010,yl=1011,Sa=1012,pn=1013,mr=1014,Ti=1015,Nr=1016,fn=1017,mn=1018,Or=1020,Ml=35902,Sl=1021,Tl=1022,pi=1023,El=1024,bl=1025,Fr=1026,zr=1027,gn=1028,vn=1029,wl=1030,_n=1031,xn=1033,is=33776,rs=33777,as=33778,ss=33779,yn=35840,Mn=35841,Sn=35842,Tn=35843,En=36196,bn=37492,wn=37496,An=37808,Rn=37809,Cn=37810,Pn=37811,Ln=37812,Un=37813,In=37814,Dn=37815,Nn=37816,On=37817,Fn=37818,zn=37819,Bn=37820,kn=37821,ns=36492,Hn=36494,Vn=36495,Al=36283,Gn=36284,Wn=36285,Xn=36286,os=2300,jn=2301,qn=2302,Rl=2400,Cl=2401,Pl=2402,Cu=3200,Pu=3201,Ll=0,Lu=1,Ji="",Tt="srgb",Br="srgb-linear",ls="linear",ot="srgb",kr=7680,Ul=519,Uu=512,Iu=513,Du=514,Il=515,Nu=516,Ou=517,Fu=518,zu=519,Dl=35044,Yn=35048,Nl="300 es",Oi=2e3,hs=2001,Hr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kn=Math.PI/180,Jn=180/Math.PI;function Vr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gt[e&255]+Gt[e>>8&255]+Gt[e>>16&255]+Gt[e>>24&255]+"-"+Gt[t&255]+Gt[t>>8&255]+"-"+Gt[t>>16&15|64]+Gt[t>>24&255]+"-"+Gt[i&63|128]+Gt[i>>8&255]+"-"+Gt[i>>16&255]+Gt[i>>24&255]+Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]).toLowerCase()}function It(e,t,i){return Math.max(t,Math.min(i,e))}function Bu(e,t){return(e%t+t)%t}function $n(e,t,i){return(1-i)*e+i*t}function Ta(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function $t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Le=class Dc{constructor(t=0,i=0){Dc.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(It(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),s=this.x-t.x,n=this.y-t.y;return this.x=s*r-n*a+t.x,this.y=s*a+n*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class Nc{constructor(t,i,r,a,s,n,o,l,h){Nc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h)}set(t,i,r,a,s,n,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=s,c[5]=l,c[6]=r,c[7]=n,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],v=a[0],m=a[3],f=a[6],y=a[1],_=a[4],E=a[7],k=a[2],R=a[5],P=a[8];return s[0]=n*v+o*y+l*k,s[3]=n*m+o*_+l*R,s[6]=n*f+o*E+l*P,s[1]=h*v+c*y+u*k,s[4]=h*m+c*_+u*R,s[7]=h*f+c*E+u*P,s[2]=d*v+p*y+g*k,s[5]=d*m+p*_+g*R,s[8]=d*f+p*E+g*P,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*n*c-i*o*h-r*s*c+r*o*l+a*s*h-a*n*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*n-o*h,d=o*l-c*s,p=h*s-n*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*r)*v,t[2]=(o*r-a*n)*v,t[3]=d*v,t[4]=(c*i-a*l)*v,t[5]=(a*s-o*i)*v,t[6]=p*v,t[7]=(r*l-h*i)*v,t[8]=(n*i-r*s)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,s,n,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*n+h*o)+n+t,-a*h,a*l,-a*(-h*n+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Zn.makeScale(t,i)),this}rotate(t){return this.premultiply(Zn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zn=new tt;function Ol(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function cs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ku(){let e=cs("canvas");return e.style.display="block",e}var Fl={};function Ea(e){e in Fl||(Fl[e]=!0,console.warn(e))}function Hu(e,t,i){return new Promise(function(r,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}function Vu(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gu(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var st={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(e,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===ot&&(e.r=Fi(e.r),e.g=Fi(e.g),e.b=Fi(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===ot&&(e.r=Gr(e.r),e.g=Gr(e.g),e.b=Gr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Ji?ls:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function Fi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Gr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var zl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],kl=[.3127,.329],Hl=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[Br]:{primaries:zl,whitePoint:kl,transfer:ls,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:zl,whitePoint:kl,transfer:ot,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var Wr,Wu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wr===void 0&&(Wr=cs("canvas")),Wr.width=e.width,Wr.height=e.height;let i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Fi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xu=0,Gl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,n=r.length;s<n;s++)r[s].isDataTexture?a.push(Qn(r[s].image)):a.push(Qn(r[s]))}else a=Qn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Qn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ju=0,ai=class Js extends Hr{constructor(t=Js.DEFAULT_IMAGE,i=Js.DEFAULT_MAPPING,r=fr,a=fr,s=di,n=Di,o=pi,l=Ni,h=Js.DEFAULT_ANISOTROPY,c=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Vr(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case fr:t.x=t.x<0?0:1;break;case un:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case fr:t.y=t.y<0?0:1;break;case un:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null,ai.DEFAULT_MAPPING=_l,ai.DEFAULT_ANISOTROPY=1;var At=class Oc{constructor(t=0,i=0,r=0,a=1){Oc.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=this.w,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*i+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*i+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*i+n[7]*r+n[11]*a+n[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,s,n=t.elements,o=n[0],l=n[4],h=n[8],c=n[1],u=n[5],d=n[9],p=n[2],g=n[6],v=n[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,y=(u+1)/2,_=(v+1)/2,E=(l+c)/4,k=(h+p)/4,R=(d+g)/4;return f>y&&f>_?f<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(f),a=E/r,s=k/r):y>_?y<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),r=E/a,s=R/a):_<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(_),r=k/s,a=R/s),this.set(r,a,s,i),this}let m=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qu=class extends Hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new ai(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let n=0;n<s;n++)this.textures[n]=a.clone(),this.textures[n].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wl=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yu=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ei=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[s+0],d=a[s+1],p=a[s+2],g=a[s+3];if(n===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(n===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let v=1-n,m=o*u+l*d+h*p+c*g,f=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let E=Math.sqrt(y),k=Math.atan2(E,m*f);v=Math.sin(v*k)/E,n=Math.sin(n*k)/E}let _=n*f;if(o=o*v+u*_,l=l*v+d*_,h=h*v+p*_,c=c*v+g*_,v===1-n){let E=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=E,l*=E,h*=E,c*=E}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[s],u=a[s+1],d=a[s+2],p=a[s+3];return e[t]=n*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-n*d,e[t+2]=l*p+h*d+n*u-o*c,e[t+3]=h*p-n*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),c=n(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+n+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(s-r)*d}else if(i>n&&i>c){let d=2*Math.sqrt(1+i-n-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+l)/d}else if(n>c){let d=2*Math.sqrt(1+n-i-c);this._w=(a-l)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-n);this._w=(s-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,n=s*e._w+i*e._x+r*e._y+a*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let o=1-n*n;if(o<=Number.EPSILON){let d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,n),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=s*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class Fc{constructor(t=0,i=0,r=0){Fc.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Xl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[3]*r+s[6]*a,this.y=s[1]*i+s[4]*r+s[7]*a,this.z=s[2]*i+s[5]*r+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=t.elements,n=1/(s[3]*i+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*i+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*i+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,s=t.x,n=t.y,o=t.z,l=t.w,h=2*(n*a-o*r),c=2*(o*i-s*a),u=2*(s*r-n*i);return this.x=i+l*h+n*u-o*c,this.y=r+l*c+o*h-s*u,this.z=a+l*u+s*c-n*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a,this.y=s[1]*i+s[5]*r+s[9]*a,this.z=s[2]*i+s[6]*r+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,s=t.z,n=i.x,o=i.y,l=i.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(It(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new I,Xl=new Ei,gr=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,n=a.count;s<n;s++)e.isMesh===!0?e.getVertexPosition(s,fi):fi.fromBufferAttribute(a,s),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),ds.subVectors(this.max,ba),Xr.subVectors(e.a,ba),jr.subVectors(e.b,ba),qr.subVectors(e.c,ba),Zi.subVectors(jr,Xr),Qi.subVectors(qr,jr),vr.subVectors(Xr,qr);let t=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-vr.z,vr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,vr.z,0,-vr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-vr.y,vr.x,0];return!to(t,Xr,jr,qr,ds)||(t=[1,0,0,0,1,0,0,0,1],!to(t,Xr,jr,qr,ds))?!1:(ps.crossVectors(Zi,Qi),t=[ps.x,ps.y,ps.z],to(t,Xr,jr,qr,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zi=[new I,new I,new I,new I,new I,new I,new I,new I],fi=new I,us=new gr,Xr=new I,jr=new I,qr=new I,Zi=new I,Qi=new I,vr=new I,ba=new I,ds=new I,ps=new I,_r=new I;function to(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){_r.fromArray(e,s);let o=a.x*Math.abs(_r.x)+a.y*Math.abs(_r.y)+a.z*Math.abs(_r.z),l=t.dot(_r),h=i.dot(_r),c=r.dot(_r);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Ku=new gr,wa=new I,io=new I,Aa=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ku.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);let t=wa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(io)),this.expandByPoint(wa.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bi=new I,ro=new I,fs=new I,er=new I,ao=new I,ms=new I,so=new I,jl=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ro.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),er.copy(this.origin).sub(ro);let a=e.distanceTo(t)*.5,s=-this.direction.dot(fs),n=er.dot(this.direction),o=-er.dot(fs),l=er.lengthSq(),h=Math.abs(1-s*s),c,u,d,p;if(h>0)if(c=s*o-n,u=s*n-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+s*u+2*n)+u*(s*c+u+2*o)+l}else u=a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-s*a+n)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(s*a+n)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=s>0?-a:a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(ro).addScaledVector(fs,u),d}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),c>=0?(n=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(n=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||n>r)||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,r,a){ao.subVectors(t,e),ms.subVectors(i,e),so.crossVectors(ao,ms);let s=this.direction.dot(so),n;if(s>0){if(r)return null;n=1}else if(s<0)n=-1,s=-s;else return null;er.subVectors(this.origin,e);let o=n*this.direction.dot(ms.crossVectors(er,ms));if(o<0)return null;let l=n*this.direction.dot(ao.cross(er));if(l<0||o+l>s)return null;let h=-n*er.dot(so);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class sl{constructor(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,m){sl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,m)}set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=s,f[5]=n,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/Yr.setFromMatrixColumn(t,0).length(),s=1/Yr.setFromMatrixColumn(t,1).length(),n=1/Yr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*n,i[9]=r[9]*n,i[10]=r[10]*n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,s=t.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-v*h,i[9]=-o*l,i[2]=v-d*h,i[6]=g+p*h,i[10]=n*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d+v*o,i[4]=g*o-p,i[8]=n*h,i[1]=n*u,i[5]=n*c,i[9]=-o,i[2]=p*o-g,i[6]=v+d*o,i[10]=n*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d-v*o,i[4]=-n*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=n*c,i[9]=v-d*o,i[2]=-n*h,i[6]=o,i[10]=n*l}else if(t.order==="ZYX"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+v,i[1]=l*u,i[5]=v*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=n*l}else if(t.order==="YZX"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-d*u,i[8]=g*u+p,i[1]=u,i[5]=n*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-v*u}else if(t.order==="XZY"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+v,i[5]=n*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=v*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ju,t,$u)}lookAt(t,i,r){let a=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),tr.crossVectors(r,ei),tr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),tr.crossVectors(r,ei)),tr.normalize(),gs.crossVectors(ei,tr),a[0]=tr.x,a[4]=gs.x,a[8]=ei.x,a[1]=tr.y,a[5]=gs.y,a[9]=ei.y,a[2]=tr.z,a[6]=gs.z,a[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],v=r[6],m=r[10],f=r[14],y=r[3],_=r[7],E=r[11],k=r[15],R=a[0],P=a[4],N=a[8],S=a[12],M=a[1],C=a[5],O=a[9],z=a[13],G=a[2],te=a[6],j=a[10],re=a[14],K=a[3],fe=a[7],Te=a[11],ke=a[15];return s[0]=n*R+o*M+l*G+h*K,s[4]=n*P+o*C+l*te+h*fe,s[8]=n*N+o*O+l*j+h*Te,s[12]=n*S+o*z+l*re+h*ke,s[1]=c*R+u*M+d*G+p*K,s[5]=c*P+u*C+d*te+p*fe,s[9]=c*N+u*O+d*j+p*Te,s[13]=c*S+u*z+d*re+p*ke,s[2]=g*R+v*M+m*G+f*K,s[6]=g*P+v*C+m*te+f*fe,s[10]=g*N+v*O+m*j+f*Te,s[14]=g*S+v*z+m*re+f*ke,s[3]=y*R+_*M+E*G+k*K,s[7]=y*P+_*C+E*te+k*fe,s[11]=y*N+_*O+E*j+k*Te,s[15]=y*S+_*z+E*re+k*ke,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[12],n=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+s*l*u-a*h*u-s*o*d+r*h*d+a*o*p-r*l*p)+v*(+i*l*p-i*h*d+s*n*d-a*n*p+a*h*c-s*l*c)+m*(+i*h*u-i*o*p-s*n*u+r*n*p+s*o*c-r*h*c)+f*(-a*o*c-i*l*u+i*o*d+a*n*u-r*n*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],y=u*m*h-v*d*h+v*l*p-o*m*p-u*l*f+o*d*f,_=g*d*h-c*m*h-g*l*p+n*m*p+c*l*f-n*d*f,E=c*v*h-g*u*h+g*o*p-n*v*p-c*o*f+n*u*f,k=g*u*l-c*v*l-g*o*d+n*v*d+c*o*m-n*u*m,R=i*y+r*_+a*E+s*k;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=y*P,t[1]=(v*d*s-u*m*s-v*a*p+r*m*p+u*a*f-r*d*f)*P,t[2]=(o*m*s-v*l*s+v*a*h-r*m*h-o*a*f+r*l*f)*P,t[3]=(u*l*s-o*d*s-u*a*h+r*d*h+o*a*p-r*l*p)*P,t[4]=_*P,t[5]=(c*m*s-g*d*s+g*a*p-i*m*p-c*a*f+i*d*f)*P,t[6]=(g*l*s-n*m*s-g*a*h+i*m*h+n*a*f-i*l*f)*P,t[7]=(n*d*s-c*l*s+c*a*h-i*d*h-n*a*p+i*l*p)*P,t[8]=E*P,t[9]=(g*u*s-c*v*s-g*r*p+i*v*p+c*r*f-i*u*f)*P,t[10]=(n*v*s-g*o*s+g*r*h-i*v*h-n*r*f+i*o*f)*P,t[11]=(c*o*s-n*u*s-c*r*h+i*u*h+n*r*p-i*o*p)*P,t[12]=k*P,t[13]=(c*v*a-g*u*a+g*r*d-i*v*d-c*r*m+i*u*m)*P,t[14]=(g*o*a-n*v*a-g*r*l+i*v*l+n*r*m-i*o*m)*P,t[15]=(n*u*a-c*o*a+c*r*l-i*u*l-n*r*d+i*o*d)*P,this}scale(t){let i=this.elements,r=t.x,a=t.y,s=t.z;return i[0]*=r,i[4]*=a,i[8]*=s,i[1]*=r,i[5]*=a,i[9]*=s,i[2]*=r,i[6]*=a,i[10]*=s,i[3]*=r,i[7]*=a,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),s=1-r,n=t.x,o=t.y,l=t.z,h=s*n,c=s*o;return this.set(h*n+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*n,0,h*l-a*o,c*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,s,n){return this.set(1,r,s,0,t,1,n,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,s=i._x,n=i._y,o=i._z,l=i._w,h=s+s,c=n+n,u=o+o,d=s*h,p=s*c,g=s*u,v=n*c,m=n*u,f=o*u,y=l*h,_=l*c,E=l*u,k=r.x,R=r.y,P=r.z;return a[0]=(1-(v+f))*k,a[1]=(p+E)*k,a[2]=(g-_)*k,a[3]=0,a[4]=(p-E)*R,a[5]=(1-(d+f))*R,a[6]=(m+y)*R,a[7]=0,a[8]=(g+_)*P,a[9]=(m-y)*P,a[10]=(1-(d+v))*P,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,s=Yr.set(a[0],a[1],a[2]).length(),n=Yr.set(a[4],a[5],a[6]).length(),o=Yr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],mi.copy(this);let l=1/s,h=1/n,c=1/o;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=c,mi.elements[9]*=c,mi.elements[10]*=c,i.setFromRotationMatrix(mi),r.x=s,r.y=n,r.z=o,this}makePerspective(t,i,r,a,s,n,o=Oi){let l=this.elements,h=2*s/(i-t),c=2*s/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===Oi)p=-(n+s)/(n-s),g=-2*n*s/(n-s);else if(o===hs)p=-n/(n-s),g=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,s,n,o=Oi){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(n-s),d=(i+t)*h,p=(r+a)*c,g,v;if(o===Oi)g=(n+s)*u,v=-2*u;else if(o===hs)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Yr=new I,mi=new lt,Ju=new I(0,0,0),$u=new I(1,1,1),tr=new I,gs=new I,ei=new I,ql=new lt,Yl=new Ei,ir=class zc{constructor(t=0,i=0,r=0,a=zc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,s=a[0],n=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ir.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zu=0,Kl=new I,Kr=new Ei,ki=new lt,vs=new I,Ra=new I,Qu=new I,ed=new Ei,Jl=new I(1,0,0),$l=new I(0,1,0),Zl=new I(0,0,1),Ql={type:"added"},td={type:"removed"},Jr={type:"childadded",child:null},oo={type:"childremoved",child:null},si=class $s extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$s.DEFAULT_UP.clone();let t=new I,i=new ir,r=new Ei,a=new I(1,1,1);function s(){r.setFromEuler(i,!1)}function n(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new lt},normalMatrix:{value:new tt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=$s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Kr.setFromAxisAngle(t,i),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,i){return Kr.setFromAxisAngle(t,i),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(Jl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,i){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Jl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?vs.copy(t):vs.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Ra,vs,this.up):ki.lookAt(vs,Ra,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Kr.setFromRotationMatrix(ki),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(td),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),c=n(t.images),u=n(t.shapes),d=n(t.skeletons),p=n(t.animations),g=n(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function n(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};si.DEFAULT_UP=new I(0,1,0),si.DEFAULT_MATRIX_AUTO_UPDATE=!0,si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new I,Hi=new I,lo=new I,Vi=new I,$r=new I,Zr=new I,eh=new I,ho=new I,co=new I,uo=new I,po=new At,fo=new At,mo=new At,Ca=class ma{constructor(t=new I,i=new I,r=new I){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),gi.subVectors(t,i),a.cross(gi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,i,r,a,s){gi.subVectors(a,i),Hi.subVectors(r,i),lo.subVectors(t,i);let n=gi.dot(gi),o=gi.dot(Hi),l=gi.dot(lo),h=Hi.dot(Hi),c=Hi.dot(lo),u=n*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(n*c-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,i,r,a,s,n,o,l){return this.getBarycoord(t,i,r,a,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(n,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,i,r,a,s,n){return po.setScalar(0),fo.setScalar(0),mo.setScalar(0),po.fromBufferAttribute(t,i),fo.fromBufferAttribute(t,r),mo.fromBufferAttribute(t,a),n.setScalar(0),n.addScaledVector(po,s.x),n.addScaledVector(fo,s.y),n.addScaledVector(mo,s.z),n}static isFrontFacing(t,i,r,a){return gi.subVectors(r,i),Hi.subVectors(t,i),gi.cross(Hi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),gi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ma.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ma.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,s){return ma.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}containsPoint(t){return ma.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ma.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,s=this.c,n,o;$r.subVectors(a,r),Zr.subVectors(s,r),ho.subVectors(t,r);let l=$r.dot(ho),h=Zr.dot(ho);if(l<=0&&h<=0)return i.copy(r);co.subVectors(t,a);let c=$r.dot(co),u=Zr.dot(co);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return n=l/(l-c),i.copy(r).addScaledVector($r,n);uo.subVectors(t,s);let p=$r.dot(uo),g=Zr.dot(uo);if(g>=0&&p<=g)return i.copy(s);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Zr,o);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return eh.subVectors(s,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(eh,o);let f=1/(m+v+d);return n=v*f,o=d*f,i.copy(r).addScaledVector($r,n).addScaledVector(Zr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},_s={h:0,s:0,l:0};function go(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=Bu(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=go(s,a,e+1/3),this.g=go(s,a,e),this.b=go(s,a,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],n=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return st.fromWorkingColorSpace(Wt.copy(this),e),Math.round(It(Wt.r*255,0,255))*65536+Math.round(It(Wt.g*255,0,255))*256+Math.round(It(Wt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Wt.copy(this),t);let i=Wt.r,r=Wt.g,a=Wt.b,s=Math.max(i,r,a),n=Math.min(i,r,a),o,l,h=(n+s)/2;if(n===s)o=0,l=0;else{let c=s-n;switch(l=h<=.5?c/(s+n):c/(2-s-n),s){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Tt){st.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,r=Wt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(_s);let i=$n(rr.h,_s.h,t),r=$n(rr.s,_s.s,t),a=$n(rr.l,_s.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Je;Je.NAMES=th;var id=0,Pa=class extends Hr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Vr(),this.name="",this.blending=Lr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qs,this.blendDst=en,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qs&&(i.blendSrc=this.blendSrc),this.blendDst!==en&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let n in a){let o=a[n];delete o.metadata,s.push(o)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gi=class extends Pa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rt=new I,xs=new Le,Pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dl,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ta(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),e}},ih=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},rh=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},pt=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},rd=0,ni=new lt,vo=new si,Qr=new I,ti=new gr,La=new gr,Dt=new I,jt=class Bc extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ol(t)?rh:ih)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new tt().getNormalMatrix(t);r.applyNormalMatrix(s),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,i,r){return ni.makeTranslation(t,i,r),this.applyMatrix4(ni),this}scale(t,i,r){return ni.makeScale(t,i,r),this.applyMatrix4(ni),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,s=t.length;a<s;a++){let n=t[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new pt(r,3))}else{for(let r=0,a=i.count;r<a;r++){let s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let s=i[r];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let s=0,n=i.length;s<n;s++){let o=i[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(ti.min,La.min),ti.expandByPoint(Dt),Dt.addVectors(ti.max,La.max),ti.expandByPoint(Dt)):(ti.expandByPoint(La.min),ti.expandByPoint(La.max))}ti.getCenter(r);let a=0;for(let s=0,n=t.count;s<n;s++)Dt.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(Dt));if(i)for(let s=0,n=i.length;s<n;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Dt.fromBufferAttribute(o,h),l&&(Qr.fromBufferAttribute(t,h),Dt.add(Qr)),a=Math.max(a,r.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*r.count),4));let n=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<r.count;N++)o[N]=new I,l[N]=new I;let h=new I,c=new I,u=new I,d=new Le,p=new Le,g=new Le,v=new I,m=new I;function f(N,S,M){h.fromBufferAttribute(r,N),c.fromBufferAttribute(r,S),u.fromBufferAttribute(r,M),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(C),o[N].add(v),o[S].add(v),o[M].add(v),l[N].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,S=y.length;N<S;++N){let M=y[N],C=M.start,O=M.count;for(let z=C,G=C+O;z<G;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let _=new I,E=new I,k=new I,R=new I;function P(N){k.fromBufferAttribute(a,N),R.copy(k);let S=o[N];_.copy(S),_.sub(k.multiplyScalar(k.dot(S))).normalize(),E.crossVectors(R,S);let M=E.dot(l[N])<0?-1:1;n.setXYZW(N,_.x,_.y,_.z,M)}for(let N=0,S=y.length;N<S;++N){let M=y[N],C=M.start,O=M.count;for(let z=C,G=C+O;z<G;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new I,s=new I,n=new I,o=new I,l=new I,h=new I,c=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),n.fromBufferAttribute(i,m),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),s.fromBufferAttribute(i,d+1),n.fromBufferAttribute(i,d+2),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Dt.fromBufferAttribute(t,i),Dt.normalize(),t.setXYZ(i,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let f=0;f<c;f++)d[g++]=h[p++]}return new Pt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Bc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let s=t.morphAttributes;for(let h in s){let c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,c=n.length;h<c;h++){let u=n[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=new lt,xr=new jl,ys=new Aa,sh=new I,Ms=new I,Ss=new I,Ts=new I,_o=new I,Es=new I,nh=new I,bs=new I,Mt=class extends si{constructor(e=new jt,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){Es.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=n[o],c=a[o];h!==0&&(_o.fromBufferAttribute(c,e),s?Es.addScaledVector(_o,h):Es.addScaledVector(_o.sub(t),h))}t.add(Es)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(a),xr.copy(e.ray).recast(e.near),!(ys.containsPoint(xr.origin)===!1&&(xr.intersectSphere(ys,sh)===null||xr.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ah.copy(a).invert(),xr.copy(e.ray).applyMatrix4(ah),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(n!==null)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],m=s[v.materialIndex],f=Math.max(v.start,d.start),y=Math.min(n.count,Math.min(v.start+v.count,d.start+d.count));for(let _=f,E=y;_<E;_+=3){let k=n.getX(_),R=n.getX(_+1),P=n.getX(_+2);r=ws(this,m,e,i,l,h,c,k,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(n.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){let f=n.getX(v),y=n.getX(v+1),_=n.getX(v+2);r=ws(this,s,e,i,l,h,c,f,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],m=s[v.materialIndex],f=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=f,E=y;_<E;_+=3){let k=_,R=_+1,P=_+2;r=ws(this,m,e,i,l,h,c,k,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){let f=v,y=v+1,_=v+2;r=ws(this,s,e,i,l,h,c,f,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function ad(e,t,i,r,a,s,n,o){let l;if(t.side===Jt?l=r.intersectTriangle(n,s,a,!0,o):l=r.intersectTriangle(a,s,n,t.side===Yi,o),l===null)return null;bs.copy(o),bs.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(bs);return h<i.near||h>i.far?null:{distance:h,point:bs.clone(),object:e}}function ws(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,Ms),e.getVertexPosition(l,Ss),e.getVertexPosition(h,Ts);let c=ad(e,t,i,r,Ms,Ss,Ts,nh);if(c){let u=new I;Ca.getBarycoord(nh,Ms,Ss,Ts,u),a&&(c.uv=Ca.getInterpolatedAttribute(a,o,l,h,u,new Le)),s&&(c.uv1=Ca.getInterpolatedAttribute(s,o,l,h,u,new Le)),n&&(c.normal=Ca.getInterpolatedAttribute(n,o,l,h,u,new I),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new I,materialIndex:0};Ca.getNormal(Ms,Ss,Ts,d.normal),c.face=d,c.barycoord=u}return c}var ar=class kc extends jt{constructor(t=1,i=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};let o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,n,s,0),g("z","y","x",1,-1,r,i,-t,n,s,1),g("x","z","y",1,1,t,r,i,a,n,2),g("x","z","y",1,-1,t,r,-i,a,n,3),g("x","y","z",1,-1,t,i,r,a,s,4),g("x","y","z",-1,-1,t,i,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2));function g(v,m,f,y,_,E,k,R,P,N,S){let M=E/P,C=k/N,O=E/2,z=k/2,G=R/2,te=P+1,j=N+1,re=0,K=0,fe=new I;for(let Te=0;Te<j;Te++){let ke=Te*C-z;for(let Ke=0;Ke<te;Ke++){let $=Ke*M-O;fe[v]=$*y,fe[m]=ke*_,fe[f]=G,h.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[f]=R>0?1:-1,c.push(fe.x,fe.y,fe.z),u.push(Ke/P),u.push(1-Te/N),re+=1}}for(let Te=0;Te<N;Te++)for(let ke=0;ke<P;ke++){let Ke=d+ke+te*Te,$=d+ke+te*(Te+1),ee=d+(ke+1)+te*(Te+1),L=d+(ke+1)+te*Te;l.push(Ke,$,L),l.push($,ee,L),K+=6}o.addGroup(p,K,S),p+=K,d+=re}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ea(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function qt(e){let t={};for(let i=0;i<e.length;i++){let r=ea(e[i]);for(let a in r)t[a]=r[a]}return t}function sd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function oh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:st.workingColorSpace}var nd={clone:ea,merge:qt},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends Pa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},lh=class extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sr=new I,hh=new Le,ch=new Le,ii=class extends lh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan(Kn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,hh,ch),t.subVectors(ch,hh)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let n=this.filmOffset;n!==0&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ta=-90,ia=1,hd=class extends si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ii(ta,ia,e,t);r.layers=this.layers,this.add(r);let a=new ii(ta,ia,e,t);a.layers=this.layers,this.add(a);let s=new ii(ta,ia,e,t);s.layers=this.layers,this.add(s);let n=new ii(ta,ia,e,t);n.layers=this.layers,this.add(n);let o=new ii(ta,ia,e,t);o.layers=this.layers,this.add(o);let l=new ii(ta,ia,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let l of t)this.remove(l);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,n),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},uh=class extends ai{constructor(e,t,i,r,a,s,n,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cd=class extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ar(5,5,5),a=new bi({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ki});a.uniforms.tEquirect.value=t;let s=new Mt(r,a),n=t.minFilter;return t.minFilter===Di&&(t.minFilter=di),new hd(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},xo=new I,ud=new I,dd=new tt,yr=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=xo.subVectors(i,t).cross(ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dd.getNormalMatrix(e),r=this.coplanarPoint(xo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mr=new Aa,As=new I,yo=class{constructor(e=new yr,t=new yr,i=new yr,r=new yr,a=new yr,s=new yr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Oi){let i=this.planes,r=e.elements,a=r[0],s=r[1],n=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],v=r[11],m=r[12],f=r[13],y=r[14],_=r[15];if(i[0].setComponents(o-a,u-l,v-d,_-m).normalize(),i[1].setComponents(o+a,u+l,v+d,_+m).normalize(),i[2].setComponents(o+s,u+h,v+p,_+f).normalize(),i[3].setComponents(o-s,u-h,v-p,_-f).normalize(),i[4].setComponents(o-n,u-c,v-g,_-y).normalize(),t===Oi)i[5].setComponents(o+n,u+c,v+g,_+y).normalize();else if(t===hs)i[5].setComponents(n,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function dh(){let e=null,t=!1,i=null,r=null;function a(s,n){i(s,n),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function pd(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:s,update:n}}var oi=class Hc extends jt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let s=t/2,n=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){let y=f*d-n;for(let _=0;_<h;_++){let E=_*u-s;g.push(E,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let _=y+h*f,E=y+h*(f+1),k=y+1+h*(f+1),R=y+1+h*f;p.push(_,E,R),p.push(E,k,R)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}},fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
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
}`,Mf=`#if DEPTH_PACKING == 3200
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
}`,Sf=`#define DISTANCE
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
}`,Tf=`#define DISTANCE
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Rf=`#include <common>
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Pf=`#define LAMBERT
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
}`,Lf=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,If=`#define MATCAP
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
}`,Df=`#define NORMAL
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
}`,Nf=`#define NORMAL
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
}`,Of=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,Bf=`#define STANDARD
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
}`,kf=`#define TOON
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
}`,Hf=`#define TOON
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
}`,Vf=`uniform float size;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,qf=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:fd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:vd,alphatest_fragment:_d,alphatest_pars_fragment:xd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:Td,begin_vertex:Ed,beginnormal_vertex:bd,bsdfs:wd,iridescence_fragment:Ad,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Ud,color_fragment:Id,color_pars_fragment:Dd,color_pars_vertex:Nd,color_vertex:Od,common:Fd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Bd,displacementmap_pars_vertex:kd,displacementmap_vertex:Hd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:jd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:np,envmap_vertex:Jd,fog_vertex:$d,fog_pars_vertex:Zd,fog_fragment:Qd,fog_pars_fragment:ep,gradientmap_pars_fragment:tp,lightmap_pars_fragment:ip,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:hp,lights_phong_pars_fragment:cp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:pp,lights_fragment_maps:fp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:xp,map_fragment:yp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:bp,morphinstance_vertex:wp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Lp,normal_fragment_maps:Up,normal_pars_fragment:Ip,normal_pars_vertex:Dp,normal_vertex:Np,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:kp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:Gp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:jp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Zp,skinbase_vertex:Qp,skinning_pars_vertex:ef,skinning_vertex:tf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:sf,tonemapping_fragment:nf,tonemapping_pars_fragment:of,transmission_fragment:lf,transmission_pars_fragment:hf,uv_pars_fragment:cf,uv_pars_vertex:uf,uv_vertex:df,worldpos_vertex:pf,background_vert:ff,background_frag:mf,backgroundCube_vert:gf,backgroundCube_frag:vf,cube_vert:_f,cube_frag:xf,depth_vert:yf,depth_frag:Mf,distanceRGBA_vert:Sf,distanceRGBA_frag:Tf,equirect_vert:Ef,equirect_frag:bf,linedashed_vert:wf,linedashed_frag:Af,meshbasic_vert:Rf,meshbasic_frag:Cf,meshlambert_vert:Pf,meshlambert_frag:Lf,meshmatcap_vert:Uf,meshmatcap_frag:If,meshnormal_vert:Df,meshnormal_frag:Nf,meshphong_vert:Of,meshphong_frag:Ff,meshphysical_vert:zf,meshphysical_frag:Bf,meshtoon_vert:kf,meshtoon_frag:Hf,points_vert:Vf,points_frag:Gf,shadow_vert:Wf,shadow_frag:Xf,sprite_vert:jf,sprite_frag:qf},De={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},wi={basic:{uniforms:qt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:qt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:qt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:qt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:qt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:qt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:qt([De.points,De.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:qt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:qt([De.common,De.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:qt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:qt([De.sprite,De.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:qt([De.common,De.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:qt([De.lights,De.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};wi.physical={uniforms:qt([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Rs={r:0,b:0,g:0},Sr=new ir,Yf=new lt;function Kf(e,t,i,r,a,s,n){let o=new Je(0),l=s===!0?0:1,h,c,u=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?i:t).get(_)),_}function v(y){let _=!1,E=g(y);E===null?f(o,l):E&&E.isColor&&(f(E,1),_=!0);let k=e.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,n):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,n),(e.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,_){let E=g(_);E&&(E.isCubeTexture||E.mapping===Qa)?(c===void 0&&(c=new Mt(new ar(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ea(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(k,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Sr.copy(_.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(Sr)),c.material.toneMapped=st.getTransfer(E.colorSpace)!==ot,(u!==E||d!==E.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Mt(new oi(2,2),new bi({name:"BackgroundMaterial",uniforms:ea(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=st.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function f(y,_){y.getRGB(Rs,oh(e)),r.buffers.color.setClear(Rs.r,Rs.g,Rs.b,_,n)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:v,addToRenderList:m}}function Jf(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),s=a,n=!1;function o(M,C,O,z,G){let te=!1,j=u(z,O,C);s!==j&&(s=j,h(s.object)),te=p(M,z,O,G),te&&g(M,z,O,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(te||n)&&(n=!1,E(M,C,O,z),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(M){return e.bindVertexArray(M)}function c(M){return e.deleteVertexArray(M)}function u(M,C,O){let z=O.wireframe===!0,G=r[M.id];G===void 0&&(G={},r[M.id]=G);let te=G[C.id];te===void 0&&(te={},G[C.id]=te);let j=te[z];return j===void 0&&(j=d(l()),te[z]=j),j}function d(M){let C=[],O=[],z=[];for(let G=0;G<i;G++)C[G]=0,O[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,C,O,z){let G=s.attributes,te=C.attributes,j=0,re=O.getAttributes();for(let K in re)if(re[K].location>=0){let fe=G[K],Te=te[K];if(Te===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),fe===void 0||fe.attribute!==Te||Te&&fe.data!==Te.data)return!0;j++}return s.attributesNum!==j||s.index!==z}function g(M,C,O,z){let G={},te=C.attributes,j=0,re=O.getAttributes();for(let K in re)if(re[K].location>=0){let fe=te[K];fe===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));let Te={};Te.attribute=fe,fe&&fe.data&&(Te.data=fe.data),G[K]=Te,j++}s.attributes=G,s.attributesNum=j,s.index=z}function v(){let M=s.newAttributes;for(let C=0,O=M.length;C<O;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){let O=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;O[M]=1,z[M]===0&&(e.enableVertexAttribArray(M),z[M]=1),G[M]!==C&&(e.vertexAttribDivisor(M,C),G[M]=C)}function y(){let M=s.newAttributes,C=s.enabledAttributes;for(let O=0,z=C.length;O<z;O++)C[O]!==M[O]&&(e.disableVertexAttribArray(O),C[O]=0)}function _(M,C,O,z,G,te,j){j===!0?e.vertexAttribIPointer(M,C,O,G,te):e.vertexAttribPointer(M,C,O,z,G,te)}function E(M,C,O,z){v();let G=z.attributes,te=O.getAttributes(),j=C.defaultAttributeValues;for(let re in te){let K=te[re];if(K.location>=0){let fe=G[re];if(fe===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){let Te=fe.normalized,ke=fe.itemSize,Ke=t.get(fe);if(Ke===void 0)continue;let $=Ke.buffer,ee=Ke.type,L=Ke.bytesPerElement,Z=ee===e.INT||ee===e.UNSIGNED_INT||fe.gpuType===pn;if(fe.isInterleavedBufferAttribute){let V=fe.data,J=V.stride,se=fe.offset;if(V.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)f(K.location+xe,V.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let xe=0;xe<K.locationSize;xe++)m(K.location+xe);e.bindBuffer(e.ARRAY_BUFFER,$);for(let xe=0;xe<K.locationSize;xe++)_(K.location+xe,ke/K.locationSize,ee,Te,J*L,(se+ke/K.locationSize*xe)*L,Z)}else{if(fe.isInstancedBufferAttribute){for(let V=0;V<K.locationSize;V++)f(K.location+V,fe.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let V=0;V<K.locationSize;V++)m(K.location+V);e.bindBuffer(e.ARRAY_BUFFER,$);for(let V=0;V<K.locationSize;V++)_(K.location+V,ke/K.locationSize,ee,Te,ke*L,ke/K.locationSize*V*L,Z)}}else if(j!==void 0){let Te=j[re];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(K.location,Te);break;case 3:e.vertexAttrib3fv(K.location,Te);break;case 4:e.vertexAttrib4fv(K.location,Te);break;default:e.vertexAttrib1fv(K.location,Te)}}}}y()}function k(){N();for(let M in r){let C=r[M];for(let O in C){let z=C[O];for(let G in z)c(z[G].object),delete z[G];delete C[O]}delete r[M]}}function R(M){if(r[M.id]===void 0)return;let C=r[M.id];for(let O in C){let z=C[O];for(let G in z)c(z[G].object),delete z[G];delete C[O]}delete r[M.id]}function P(M){for(let C in r){let O=r[C];if(O[M.id]===void 0)continue;let z=O[M.id];for(let G in z)c(z[G].object),delete z[G];delete O[M.id]}}function N(){S(),n=!0,s!==a&&(s=a,h(s.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:k,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function $f(e,t,i){let r;function a(h){r=h}function s(h,c){e.drawArrays(r,h,c),i.update(c,r,1)}function n(h,c,u){u!==0&&(e.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)n(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];i.update(g,r,1)}}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zf(e,t,i,r){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(P){return!(P!==pi&&r.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let N=P===Nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ni&&r.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ti&&!N)}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:k,maxSamples:R}}function Qf(e){let t=this,i=null,r=0,a=!1,s=!1,n=new yr,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!a||g===null||g.length===0||s&&!m)s?c(null):h();else{let y=s?0:r,_=y*4,E=f.clippingState||null;l.value=E,E=c(g,d,_,p);for(let k=0;k!==_;++k)E[k]=i[k];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,E=p;_!==v;++_,E+=4)n.copy(u[_]).applyMatrix4(y,o),n.normal.toArray(m,E),m[E+3]=n.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function em(e){let t=new WeakMap;function i(n,o){return o===hn?n.mapping=Ir:o===cn&&(n.mapping=Dr),n}function r(n){if(n&&n.isTexture){let o=n.mapping;if(o===hn||o===cn)if(t.has(n)){let l=t.get(n).texture;return i(l,n.mapping)}else{let l=n.image;if(l&&l.height>0){let h=new cd(l.height);return h.fromEquirectangularTexture(e,n),t.set(n,h),n.addEventListener("dispose",a),i(h.texture,n.mapping)}else return null}}return n}function a(n){let o=n.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:r,dispose:s}}var Mo=class extends lh{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ra=4,ph=[.125,.215,.35,.446,.526,.582],Tr=20,So=new Mo,fh=new Je,To=null,Eo=0,bo=0,wo=!1,Er=(1+Math.sqrt(5))/2,aa=1/Er,mh=[new I(-Er,aa,0),new I(Er,aa,0),new I(-aa,0,Er),new I(aa,0,Er),new I(0,Er,-aa),new I(0,Er,aa),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,Eo,bo),this._renderer.xr.enabled=wo,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:Nr,format:pi,colorSpace:Br,depthBuffer:!1},r=gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(a)),this._blurMaterial=im(a,e,t)}return r}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,r){let a=new ii(90,1,t,i),s=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(fh),o.toneMapping=Si,o.autoClear=!1;let c=new Gi({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),u=new Mt(new ar,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(fh),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,s[g],0),a.lookAt(n[g],0,0)):v===1?(a.up.set(0,0,s[g]),a.lookAt(0,n[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,n[g]));let m=this._cubeSize;Cs(r,v*m,g>2?m:0,m,m),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ir||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new Mt(this._lodPlanes[0],a),n=a.uniforms;n.envMap.value=e;let o=this._cubeSize;Cs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,So)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),n=mh[(r-a-1)%mh.length];this._blur(e,a-1,a,s,n)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,n){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new Mt(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Tr-1),g=a/p,v=isFinite(a)?1+Math.floor(h*g):Tr;v>Tr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Tr}`);let m=[],f=0;for(let R=0;R<Tr;++R){let P=R/g,N=Math.exp(-P*P/2);m.push(N),R===0?f+=N:R<v&&(f+=2*N)}for(let R=0;R<m.length;R++)m[R]=m[R]/f;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=s==="latitudinal",n&&(u.poleAxis.value=n);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let _=this._sizeLods[r],E=3*_*(r>y-ra?r-y+ra:0),k=4*(this._cubeSize-_);Cs(t,E,k,3*_,2*_),o.setRenderTarget(t),o.render(c,So)}};function tm(e){let t=[],i=[],r=[],a=e,s=e-ra+1+ph.length;for(let n=0;n<s;n++){let o=Math.pow(2,a);i.push(o);let l=1/o;n>e-ra?l=ph[n-e+ra-1]:n===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let R=0;R<p;R++){let P=R%3*2/3-1,N=R>2?0:-1,S=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];y.set(S,v*g*R),_.set(d,m*g*R);let M=[R,R,R,R,R,R];E.set(M,f*g*R)}let k=new jt;k.setAttribute("position",new Pt(y,v)),k.setAttribute("uv",new Pt(_,m)),k.setAttribute("faceIndex",new Pt(E,f)),t.push(k),a>ra&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function gh(e,t,i){let r=new $i(e,t,i);return r.texture.mapping=Qa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function im(e,t,i){let r=new Float32Array(Tr),a=new I(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function vh(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function _h(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function rm(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===hn||l===cn,c=l===Ir||l===Dr;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new Ao(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new Ao(e)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function s(o){let l=o.target;l.removeEventListener("dispose",s);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function n(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:n}}function am(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Ea("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function sm(e,t,i,r){let a={},s=new WeakMap;function n(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",n),delete a[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",n),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let _=0,E=y.length;_<E;_+=3){let k=y[_+0],R=y[_+1],P=y[_+2];d.push(k,R,R,P,P,k)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,E=y.length/3-1;_<E;_+=3){let k=_+0,R=_+1,P=_+2;d.push(k,R,R,P,P,k)}}else return;let m=new(Ol(d)?rh:ih)(d,1);m.version=v;let f=s.get(u);f&&t.remove(f),s.set(u,m)}function c(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function nm(e,t,i){let r;function a(d){r=d}let s,n;function o(d){s=d.type,n=d.bytesPerElement}function l(d,p){e.drawElements(r,p,s,d*n),i.update(p,r,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(r,p,s,d*n,g),i.update(p,r,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,d,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];i.update(v,r,1)}function u(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/n,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,s,d,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*v[y];i.update(f,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function om(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function lm(e,t,i){let r=new WeakMap,a=new At;function s(n,o,l){let h=n.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){N.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let k=o.attributes.position.count*E,R=1;k>t.maxTextureSize&&(R=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);let P=new Float32Array(k*R*4*u),N=new Wl(P,k,R,u);N.type=Ti,N.needsUpdate=!0;let S=E*4;for(let M=0;M<u;M++){let C=f[M],O=y[M],z=_[M],G=k*R*4*M;for(let te=0;te<C.count;te++){let j=te*S;g===!0&&(a.fromBufferAttribute(C,te),P[G+j+0]=a.x,P[G+j+1]=a.y,P[G+j+2]=a.z,P[G+j+3]=0),v===!0&&(a.fromBufferAttribute(O,te),P[G+j+4]=a.x,P[G+j+5]=a.y,P[G+j+6]=a.z,P[G+j+7]=0),m===!0&&(a.fromBufferAttribute(z,te),P[G+j+8]=a.x,P[G+j+9]=a.y,P[G+j+10]=a.z,P[G+j+11]=z.itemSize===4?a.w:1)}}d={count:u,texture:N,size:new Le(k,R)},r.set(o,d),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function hm(e,t,i,r){let a=new WeakMap;function s(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function n(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:n}}var xh=class extends ai{constructor(e,t,i,r,a,s,n,o,l,h=Fr){if(h!==Fr&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fr&&(i=mr),i===void 0&&h===zr&&(i=Or),super(null,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=n!==void 0?n:Qt,this.minFilter=o!==void 0?o:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yh=new ai,Mh=new xh(1,1),Sh=new Wl,Th=new Yu,Eh=new uh,bh=[],wh=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function sa(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=bh[a];if(s===void 0&&(s=new Float32Array(a),bh[a]=s),t!==0){r.toArray(s,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(s,o)}return s}function Lt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ut(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Ps(e,t){let i=wh[t];i===void 0&&(i=new Int32Array(t),wh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function cm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function um(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Lt(i,t))return;e.uniform2fv(this.addr,t),Ut(i,t)}}function dm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Lt(i,t))return;e.uniform3fv(this.addr,t),Ut(i,t)}}function pm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Lt(i,t))return;e.uniform4fv(this.addr,t),Ut(i,t)}}function fm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Lt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ut(i,t)}else{if(Lt(i,r))return;Ch.set(r),e.uniformMatrix2fv(this.addr,!1,Ch),Ut(i,r)}}function mm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Lt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ut(i,t)}else{if(Lt(i,r))return;Rh.set(r),e.uniformMatrix3fv(this.addr,!1,Rh),Ut(i,r)}}function gm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Lt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ut(i,t)}else{if(Lt(i,r))return;Ah.set(r),e.uniformMatrix4fv(this.addr,!1,Ah),Ut(i,r)}}function vm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function _m(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Lt(i,t))return;e.uniform2iv(this.addr,t),Ut(i,t)}}function xm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Lt(i,t))return;e.uniform3iv(this.addr,t),Ut(i,t)}}function ym(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Lt(i,t))return;e.uniform4iv(this.addr,t),Ut(i,t)}}function Mm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Sm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Lt(i,t))return;e.uniform2uiv(this.addr,t),Ut(i,t)}}function Tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Lt(i,t))return;e.uniform3uiv(this.addr,t),Ut(i,t)}}function Em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Lt(i,t))return;e.uniform4uiv(this.addr,t),Ut(i,t)}}function bm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Mh.compareFunction=Il,s=Mh):s=yh,i.setTexture2D(t||s,a)}function wm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Th,a)}function Am(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Eh,a)}function Rm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Sh,a)}function Cm(e){switch(e){case 5126:return cm;case 35664:return um;case 35665:return dm;case 35666:return pm;case 35674:return fm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return Sm;case 36295:return Tm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(e,t){e.uniform1fv(this.addr,t)}function Lm(e,t){let i=sa(t,this.size,2);e.uniform2fv(this.addr,i)}function Um(e,t){let i=sa(t,this.size,3);e.uniform3fv(this.addr,i)}function Im(e,t){let i=sa(t,this.size,4);e.uniform4fv(this.addr,i)}function Dm(e,t){let i=sa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Nm(e,t){let i=sa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Om(e,t){let i=sa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Fm(e,t){e.uniform1iv(this.addr,t)}function zm(e,t){e.uniform2iv(this.addr,t)}function Bm(e,t){e.uniform3iv(this.addr,t)}function km(e,t){e.uniform4iv(this.addr,t)}function Hm(e,t){e.uniform1uiv(this.addr,t)}function Vm(e,t){e.uniform2uiv(this.addr,t)}function Gm(e,t){e.uniform3uiv(this.addr,t)}function Wm(e,t){e.uniform4uiv(this.addr,t)}function Xm(e,t,i){let r=this.cache,a=t.length,s=Ps(i,a);Lt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));for(let n=0;n!==a;++n)i.setTexture2D(t[n]||yh,s[n])}function jm(e,t,i){let r=this.cache,a=t.length,s=Ps(i,a);Lt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));for(let n=0;n!==a;++n)i.setTexture3D(t[n]||Th,s[n])}function qm(e,t,i){let r=this.cache,a=t.length,s=Ps(i,a);Lt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));for(let n=0;n!==a;++n)i.setTextureCube(t[n]||Eh,s[n])}function Ym(e,t,i){let r=this.cache,a=t.length,s=Ps(i,a);Lt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));for(let n=0;n!==a;++n)i.setTexture2DArray(t[n]||Sh,s[n])}function Km(e){switch(e){case 5126:return Pm;case 35664:return Lm;case 35665:return Um;case 35666:return Im;case 35674:return Dm;case 35675:return Nm;case 35676:return Om;case 5124:case 35670:return Fm;case 35667:case 35671:return zm;case 35668:case 35672:return Bm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Vm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}var Jm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cm(t.type)}},$m=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Km(t.type)}},Zm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let n=r[a];n.setValue(e,t[n.id],i)}}},Co=/(\w+)(\])?(\[|\.)?/g;function Ph(e,t){e.seq.push(t),e.map[t.id]=t}function Qm(e,t,i){let r=e.name,a=r.length;for(Co.lastIndex=0;;){let s=Co.exec(r),n=Co.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===a){Ph(i,h===void 0?new Jm(o,e,t):new $m(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Zm(o),Ph(i,c)),i=c}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Qm(a,s,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let n=t[a],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function Lh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var eg=37297,tg=0;function ig(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let n=a;n<s;n++){let o=n+1;r.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return r.join(`
`)}var Uh=new tt;function rg(e){st._getMatrix(Uh,st.workingColorSpace,e);let t=`mat3( ${Uh.elements.map(i=>i.toFixed(4))} )`;switch(st.getTransfer(e)){case ls:return[t,"LinearTransferOETF"];case ot:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ih(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let n=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+ig(e.getShaderSource(t),n)}else return a}function ag(e,t){let i=rg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function sg(e,t){let i;switch(t){case Mu:i="Linear";break;case Su:i="Reinhard";break;case Tu:i="Cineon";break;case Eu:i="ACESFilmic";break;case wu:i="AgX";break;case Au:i="Neutral";break;case bu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Us=new I;function ng(){st.getLuminanceCoefficients(Us);let e=Us.x.toFixed(4),t=Us.y.toFixed(4),i=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function lg(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function hg(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let s=e.getActiveAttrib(t,a),n=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[n]={type:s.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function Ua(e){return e!==""}function Dh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(e){return e.replace(cg,dg)}var ug=new Map;function dg(e,t){let i=et[t];if(i===void 0){let r=ug.get(t);if(r!==void 0)i=et[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Po(i)}var pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(e){return e.replace(pg,fg)}function fg(e,t,i,r){let a="";for(let s=parseInt(t);s<parseInt(i);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Fh(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function mg(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ir:case Dr:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Dr&&(t="ENVMAP_MODE_REFRACTION"),t}function _g(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case yu:t="ENVMAP_BLENDING_ADD";break}return t}function xg(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function yg(e,t,i,r){let a=e.getContext(),s=i.defines,n=i.vertexShader,o=i.fragmentShader,l=mg(i),h=gg(i),c=vg(i),u=_g(i),d=xg(i),p=og(i),g=lg(s),v=a.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ua).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ua).join(`
`),f.length>0&&(f+=`
`)):(m=[Fh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),f=[Fh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Si?"#define TONE_MAPPING":"",i.toneMapping!==Si?et.tonemapping_pars_fragment:"",i.toneMapping!==Si?sg("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ag("linearToOutputTexel",i.outputColorSpace),ng(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ua).join(`
`)),n=Po(n),n=Dh(n,i),n=Nh(n,i),o=Po(o),o=Dh(o,i),o=Nh(o,i),n=Oh(n),o=Oh(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=y+m+n,E=y+f+o,k=Lh(a,a.VERTEX_SHADER,_),R=Lh(a,a.FRAGMENT_SHADER,E);a.attachShader(v,k),a.attachShader(v,R),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function P(C){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(v).trim(),z=a.getShaderInfoLog(k).trim(),G=a.getShaderInfoLog(R).trim(),te=!0,j=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(te=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,k,R);else{let re=Ih(a,k,"vertex"),K=Ih(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+re+`
`+K)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||G==="")&&(j=!1);j&&(C.diagnostics={runnable:te,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:f}})}a.deleteShader(k),a.deleteShader(R),N=new Ls(a,v),S=hg(a,v)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(v,eg)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=R,this}var Mg=0,Sg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tg(e),t.set(e,i)),i}},Tg=class{constructor(e){this.id=Mg++,this.code=e,this.usedTimes=0}};function Eg(e,t,i,r,a,s,n){let o=new no,l=new Sg,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,O,z){let G=O.fog,te=z.geometry,j=S.isMeshStandardMaterial?O.environment:null,re=(S.isMeshStandardMaterial?i:t).get(S.envMap||j),K=re&&re.mapping===Qa?re.image.height:null,fe=g[S.type];S.precision!==null&&(p=a.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Te=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ke=Te!==void 0?Te.length:0,Ke=0;te.morphAttributes.position!==void 0&&(Ke=1),te.morphAttributes.normal!==void 0&&(Ke=2),te.morphAttributes.color!==void 0&&(Ke=3);let $,ee,L,Z;if(fe){let ze=wi[fe];$=ze.vertexShader,ee=ze.fragmentShader}else $=S.vertexShader,ee=S.fragmentShader,l.update(S),L=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);let V=e.getRenderTarget(),J=e.state.buffers.depth.getReversed(),se=z.isInstancedMesh===!0,xe=z.isBatchedMesh===!0,X=!!S.map,le=!!S.matcap,w=!!re,Se=!!S.aoMap,he=!!S.lightMap,ye=!!S.bumpMap,Q=!!S.normalMap,be=!!S.displacementMap,q=!!S.emissiveMap,oe=!!S.metalnessMap,b=!!S.roughnessMap,x=S.anisotropy>0,A=S.clearcoat>0,Y=S.dispersion>0,ae=S.iridescence>0,B=S.sheen>0,Ne=S.transmission>0,ve=x&&!!S.anisotropyMap,Ae=A&&!!S.clearcoatMap,Re=A&&!!S.clearcoatNormalMap,Me=A&&!!S.clearcoatRoughnessMap,Oe=ae&&!!S.iridescenceMap,de=ae&&!!S.iridescenceThicknessMap,ue=B&&!!S.sheenColorMap,ce=B&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,Ie=!!S.specularColorMap,We=!!S.specularIntensityMap,U=Ne&&!!S.transmissionMap,ne=Ne&&!!S.thicknessMap,ie=!!S.gradientMap,pe=!!S.alphaMap,Ee=S.alphaTest>0,me=!!S.alphaHash,Xe=!!S.extensions,ge=Si;S.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ge=e.toneMapping);let we={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:ee,defines:S.defines,customVertexShaderID:L,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:xe,batchingColor:xe&&z._colorsTexture!==null,instancing:se,instancingColor:se&&z.instanceColor!==null,instancingMorph:se&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?e.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Br,alphaToCoverage:!!S.alphaToCoverage,map:X,matcap:le,envMap:w,envMapMode:w&&re.mapping,envMapCubeUVHeight:K,aoMap:Se,lightMap:he,bumpMap:ye,normalMap:Q,displacementMap:d&&be,emissiveMap:q,normalMapObjectSpace:Q&&S.normalMapType===Lu,normalMapTangentSpace:Q&&S.normalMapType===Ll,metalnessMap:oe,roughnessMap:b,anisotropy:x,anisotropyMap:ve,clearcoat:A,clearcoatMap:Ae,clearcoatNormalMap:Re,clearcoatRoughnessMap:Me,dispersion:Y,iridescence:ae,iridescenceMap:Oe,iridescenceThicknessMap:de,sheen:B,sheenColorMap:ue,sheenRoughnessMap:ce,specularMap:Ce,specularColorMap:Ie,specularIntensityMap:We,transmission:Ne,transmissionMap:U,thicknessMap:ne,gradientMap:ie,opaque:S.transparent===!1&&S.blending===Lr&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ee,alphaHash:me,combine:S.combine,mapUv:X&&v(S.map.channel),aoMapUv:Se&&v(S.aoMap.channel),lightMapUv:he&&v(S.lightMap.channel),bumpMapUv:ye&&v(S.bumpMap.channel),normalMapUv:Q&&v(S.normalMap.channel),displacementMapUv:be&&v(S.displacementMap.channel),emissiveMapUv:q&&v(S.emissiveMap.channel),metalnessMapUv:oe&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:ve&&v(S.anisotropyMap.channel),clearcoatMapUv:Ae&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ce&&v(S.sheenRoughnessMap.channel),specularMapUv:Ce&&v(S.specularMap.channel),specularColorMapUv:Ie&&v(S.specularColorMap.channel),specularIntensityMapUv:We&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:ne&&v(S.thicknessMap.channel),alphaMapUv:pe&&v(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Q||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(X||pe),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:J,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:ge,decodeVideoTexture:X&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:q&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xe&&S.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&S.extensions.multiDraw===!0||xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=h.has(1),we.vertexUv2s=h.has(2),we.vertexUv3s=h.has(3),h.clear(),we}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(e.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){let M=g[S.type],C;if(M){let O=wi[M];C=nd.clone(O.uniforms)}else C=S.uniforms;return C}function k(S,M){let C;for(let O=0,z=c.length;O<z;O++){let G=c[O];if(G.cacheKey===M){C=G,++C.usedTimes;break}}return C===void 0&&(C=new yg(e,M,S,s),c.push(C)),C}function R(S){if(--S.usedTimes===0){let M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function P(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:k,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:N}}function bg(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function r(n){e.delete(n)}function a(n,o,l){e.get(n)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:s}}function wg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function zh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Bh(){let e=[],t=0,i=[],r=[],a=[];function s(){t=0,i.length=0,r.length=0,a.length=0}function n(u,d,p,g,v,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){let f=n(u,d,p,g,v,m);p.transmission>0?r.push(f):p.transparent===!0?a.push(f):i.push(f)}function l(u,d,p,g,v,m){let f=n(u,d,p,g,v,m);p.transmission>0?r.unshift(f):p.transparent===!0?a.unshift(f):i.unshift(f)}function h(u,d){i.length>1&&i.sort(u||wg),r.length>1&&r.sort(d||zh),a.length>1&&a.sort(d||zh)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:s,push:o,unshift:l,finish:c,sort:h}}function Ag(){let e=new WeakMap;function t(r,a){let s=e.get(r),n;return s===void 0?(n=new Bh,e.set(r,[n])):a>=s.length?(n=new Bh,s.push(n)):n=s[a],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function Rg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new I,color:new Je};break;case"SpotLight":i={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":i={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=i,i}}}function Cg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Pg=0;function Lg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Ug(e){let t=new Rg,i=Cg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new I);let a=new I,s=new lt,n=new lt;function o(h){let c=0,u=0,d=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,_=0,E=0,k=0,R=0,P=0;h.sort(Lg);for(let S=0,M=h.length;S<M;S++){let C=h[S],O=C.color,z=C.intensity,G=C.distance,te=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=O.r*z,u+=O.g*z,d+=O.b*z;else if(C.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(C.sh.coefficients[j],z);P++}else if(C.isDirectionalLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let re=C.shadow,K=i.get(C);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,r.directionalShadow[p]=K,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=C.shadow.matrix,y++}r.directional[p]=j,p++}else if(C.isSpotLight){let j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(O).multiplyScalar(z),j.distance=G,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,r.spot[v]=j;let re=C.shadow;if(C.map&&(r.spotLightMap[k]=C.map,k++,re.updateMatrices(C),C.castShadow&&R++),r.spotLightMatrix[v]=re.matrix,C.castShadow){let K=i.get(C);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,r.spotShadow[v]=K,r.spotShadowMap[v]=te,E++}v++}else if(C.isRectAreaLight){let j=t.get(C);j.color.copy(O).multiplyScalar(z),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),r.rectArea[m]=j,m++}else if(C.isPointLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){let re=C.shadow,K=i.get(C);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,K.shadowCameraNear=re.camera.near,K.shadowCameraFar=re.camera.far,r.pointShadow[g]=K,r.pointShadowMap[g]=te,r.pointShadowMatrix[g]=C.shadow.matrix,_++}r.point[g]=j,g++}else if(C.isHemisphereLight){let j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(z),j.groundColor.copy(C.groundColor).multiplyScalar(z),r.hemi[f]=j,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let N=r.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==y||N.numPointShadows!==_||N.numSpotShadows!==E||N.numSpotMaps!==k||N.numLightProbes!==P)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=f,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=E+k-R,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=P,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=y,N.numPointShadows=_,N.numSpotShadows=E,N.numSpotMaps=k,N.numLightProbes=P,r.version=Pg++)}function l(h,c){let u=0,d=0,p=0,g=0,v=0,m=c.matrixWorldInverse;for(let f=0,y=h.length;f<y;f++){let _=h[f];if(_.isDirectionalLight){let E=r.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),u++}else if(_.isSpotLight){let E=r.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let E=r.rectArea[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),n.identity(),s.copy(_.matrixWorld),s.premultiply(m),n.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(n),E.halfHeight.applyMatrix4(n),g++}else if(_.isPointLight){let E=r.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let E=r.hemi[v];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:r}}function kh(e){let t=new Ug(e),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function s(c){i.push(c)}function n(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function Ig(e){let t=new WeakMap;function i(a,s=0){let n=t.get(a),o;return n===void 0?(o=new kh(e),t.set(a,[o])):s>=n.length?(o=new kh(e),n.push(o)):o=n[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Dg=class extends Pa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ng=class extends Pa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function zg(e,t,i){let r=new yo,a=new Le,s=new Le,n=new At,o=new Dg({depthPacking:Pu}),l=new Ng,h={},c=i.maxTextureSize,u={[Yi]:Jt,[Jt]:Yi,[Mi]:Mi},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Og,fragmentShader:Fg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new jt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let f=this.type;this.render=function(R,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=e.getRenderTarget(),M=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Ki),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=f!==Ii&&this.type===Ii,G=f===Ii&&this.type!==Ii;for(let te=0,j=R.length;te<j;te++){let re=R[te],K=re.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);let fe=K.getFrameExtents();if(a.multiply(fe),s.copy(K.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/fe.x),a.x=s.x*fe.x,K.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/fe.y),a.y=s.y*fe.y,K.mapSize.y=s.y)),K.map===null||z===!0||G===!0){let ke=this.type!==Ii?{minFilter:Qt,magFilter:Qt}:{};K.map!==null&&K.map.dispose(),K.map=new $i(a.x,a.y,ke),K.map.texture.name=re.name+".shadowMap",K.camera.updateProjectionMatrix()}e.setRenderTarget(K.map),e.clear();let Te=K.getViewportCount();for(let ke=0;ke<Te;ke++){let Ke=K.getViewport(ke);n.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),O.viewport(n),K.updateMatrices(re,ke),r=K.getFrustum(),E(P,N,K.camera,re,this.type)}K.isPointLightShadow!==!0&&this.type===Ii&&y(K,N),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(S,M,C)};function y(R,P){let N=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $i(a.x,a.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(P,null,N,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(P,null,N,p,v,null)}function _(R,P,N,S){let M=null,C=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=N.isPointLight===!0?l:o,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let O=M.uuid,z=P.uuid,G=h[O];G===void 0&&(G={},h[O]=G);let te=G[z];te===void 0&&(te=M.clone(),G[z]=te,P.addEventListener("dispose",k)),M=te}if(M.visible=P.visible,M.wireframe=P.wireframe,S===Ii?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=e.properties.get(M);O.light=N}return M}function E(R,P,N,S,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Ii)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let O=t.update(R),z=R.material;if(Array.isArray(z)){let G=O.groups;for(let te=0,j=G.length;te<j;te++){let re=G[te],K=z[re.materialIndex];if(K&&K.visible){let fe=_(R,K,S,M);R.onBeforeShadow(e,R,P,N,O,fe,re),e.renderBufferDirect(N,null,O,fe,R,re),R.onAfterShadow(e,R,P,N,O,fe,re)}}}else if(z.visible){let G=_(R,z,S,M);R.onBeforeShadow(e,R,P,N,O,G,null),e.renderBufferDirect(N,null,O,G,R,null),R.onAfterShadow(e,R,P,N,O,G,null)}}let C=R.children;for(let O=0,z=C.length;O<z;O++)E(C[O],P,N,S,M)}function k(R){R.target.removeEventListener("dispose",k);for(let P in h){let N=h[P],S=R.target.uuid;S in N&&(N[S].dispose(),delete N[S])}}}var Bg={[tn]:rn,[an]:on,[sn]:ln,[Ur]:nn,[rn]:tn,[on]:an,[ln]:sn,[nn]:Ur};function kg(e,t){function i(){let U=!1,ne=new At,ie=null,pe=new At(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!U&&(e.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,me,Xe,ge,we){we===!0&&(Ee*=ge,me*=ge,Xe*=ge),ne.set(Ee,me,Xe,ge),pe.equals(ne)===!1&&(e.clearColor(Ee,me,Xe,ge),pe.copy(ne))},reset:function(){U=!1,ie=null,pe.set(-1,0,0,0)}}}function r(){let U=!1,ne=!1,ie=null,pe=null,Ee=null;return{setReversed:function(me){if(ne!==me){let Xe=t.get("EXT_clip_control");ne?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);let ge=Ee;Ee=null,this.setClear(ge)}ne=me},getReversed:function(){return ne},setTest:function(me){me?V(e.DEPTH_TEST):J(e.DEPTH_TEST)},setMask:function(me){ie!==me&&!U&&(e.depthMask(me),ie=me)},setFunc:function(me){if(ne&&(me=Bg[me]),pe!==me){switch(me){case tn:e.depthFunc(e.NEVER);break;case rn:e.depthFunc(e.ALWAYS);break;case an:e.depthFunc(e.LESS);break;case Ur:e.depthFunc(e.LEQUAL);break;case sn:e.depthFunc(e.EQUAL);break;case nn:e.depthFunc(e.GEQUAL);break;case on:e.depthFunc(e.GREATER);break;case ln:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=me}},setLocked:function(me){U=me},setClear:function(me){Ee!==me&&(ne&&(me=1-me),e.clearDepth(me),Ee=me)},reset:function(){U=!1,ie=null,pe=null,Ee=null,ne=!1}}}function a(){let U=!1,ne=null,ie=null,pe=null,Ee=null,me=null,Xe=null,ge=null,we=null;return{setTest:function(ze){U||(ze?V(e.STENCIL_TEST):J(e.STENCIL_TEST))},setMask:function(ze){ne!==ze&&!U&&(e.stencilMask(ze),ne=ze)},setFunc:function(ze,it,Qe){(ie!==ze||pe!==it||Ee!==Qe)&&(e.stencilFunc(ze,it,Qe),ie=ze,pe=it,Ee=Qe)},setOp:function(ze,it,Qe){(me!==ze||Xe!==it||ge!==Qe)&&(e.stencilOp(ze,it,Qe),me=ze,Xe=it,ge=Qe)},setLocked:function(ze){U=ze},setClear:function(ze){we!==ze&&(e.clearStencil(ze),we=ze)},reset:function(){U=!1,ne=null,ie=null,pe=null,Ee=null,me=null,Xe=null,ge=null,we=null}}}let s=new i,n=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,E=null,k=null,R=null,P=new Je(0,0,0),N=0,S=!1,M=null,C=null,O=null,z=null,G=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,re=0,K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=re>=1):K.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=re>=2);let fe=null,Te={},ke=e.getParameter(e.SCISSOR_BOX),Ke=e.getParameter(e.VIEWPORT),$=new At().fromArray(ke),ee=new At().fromArray(Ke);function L(U,ne,ie,pe){let Ee=new Uint8Array(4),me=e.createTexture();e.bindTexture(U,me),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Xe=0;Xe<ie;Xe++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ne,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(ne+Xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return me}let Z={};Z[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),V(e.DEPTH_TEST),n.setFunc(Ur),ye(!1),Q(dl),V(e.CULL_FACE),Se(Ki);function V(U){c[U]!==!0&&(e.enable(U),c[U]=!0)}function J(U){c[U]!==!1&&(e.disable(U),c[U]=!1)}function se(U,ne){return u[U]!==ne?(e.bindFramebuffer(U,ne),u[U]=ne,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ne),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ne),!0):!1}function xe(U,ne){let ie=p,pe=!1;if(U){ie=d.get(ne),ie===void 0&&(ie=[],d.set(ne,ie));let Ee=U.textures;if(ie.length!==Ee.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let me=0,Xe=Ee.length;me<Xe;me++)ie[me]=e.COLOR_ATTACHMENT0+me;ie.length=Ee.length,pe=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,pe=!0);pe&&e.drawBuffers(ie)}function X(U){return g!==U?(e.useProgram(U),g=U,!0):!1}let le={[pr]:e.FUNC_ADD,[iu]:e.FUNC_SUBTRACT,[ru]:e.FUNC_REVERSE_SUBTRACT};le[au]=e.MIN,le[su]=e.MAX;let w={[nu]:e.ZERO,[ou]:e.ONE,[lu]:e.SRC_COLOR,[Qs]:e.SRC_ALPHA,[fu]:e.SRC_ALPHA_SATURATE,[du]:e.DST_COLOR,[cu]:e.DST_ALPHA,[hu]:e.ONE_MINUS_SRC_COLOR,[en]:e.ONE_MINUS_SRC_ALPHA,[pu]:e.ONE_MINUS_DST_COLOR,[uu]:e.ONE_MINUS_DST_ALPHA,[mu]:e.CONSTANT_COLOR,[gu]:e.ONE_MINUS_CONSTANT_COLOR,[vu]:e.CONSTANT_ALPHA,[_u]:e.ONE_MINUS_CONSTANT_ALPHA};function Se(U,ne,ie,pe,Ee,me,Xe,ge,we,ze){if(U===Ki){v===!0&&(J(e.BLEND),v=!1);return}if(v===!1&&(V(e.BLEND),v=!0),U!==tu){if(U!==m||ze!==S){if((f!==pr||E!==pr)&&(e.blendEquation(e.FUNC_ADD),f=pr,E=pr),ze)switch(U){case Lr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fl:e.blendFunc(e.ONE,e.ONE);break;case ml:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gl:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Lr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fl:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case ml:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gl:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,_=null,k=null,R=null,P.set(0,0,0),N=0,m=U,S=ze}return}Ee=Ee||ne,me=me||ie,Xe=Xe||pe,(ne!==f||Ee!==E)&&(e.blendEquationSeparate(le[ne],le[Ee]),f=ne,E=Ee),(ie!==y||pe!==_||me!==k||Xe!==R)&&(e.blendFuncSeparate(w[ie],w[pe],w[me],w[Xe]),y=ie,_=pe,k=me,R=Xe),(ge.equals(P)===!1||we!==N)&&(e.blendColor(ge.r,ge.g,ge.b,we),P.copy(ge),N=we),m=U,S=!1}function he(U,ne){U.side===Mi?J(e.CULL_FACE):V(e.CULL_FACE);let ie=U.side===Jt;ne&&(ie=!ie),ye(ie),U.blending===Lr&&U.transparent===!1?Se(Ki):Se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),n.setFunc(U.depthFunc),n.setTest(U.depthTest),n.setMask(U.depthWrite),s.setMask(U.colorWrite);let pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?V(e.SAMPLE_ALPHA_TO_COVERAGE):J(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){M!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),M=U)}function Q(U){U!==Zc?(V(e.CULL_FACE),U!==C&&(U===dl?e.cullFace(e.BACK):U===Qc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):J(e.CULL_FACE),C=U}function be(U){U!==O&&(j&&e.lineWidth(U),O=U)}function q(U,ne,ie){U?(V(e.POLYGON_OFFSET_FILL),(z!==ne||G!==ie)&&(e.polygonOffset(ne,ie),z=ne,G=ie)):J(e.POLYGON_OFFSET_FILL)}function oe(U){U?V(e.SCISSOR_TEST):J(e.SCISSOR_TEST)}function b(U){U===void 0&&(U=e.TEXTURE0+te-1),fe!==U&&(e.activeTexture(U),fe=U)}function x(U,ne,ie){ie===void 0&&(fe===null?ie=e.TEXTURE0+te-1:ie=fe);let pe=Te[ie];pe===void 0&&(pe={type:void 0,texture:void 0},Te[ie]=pe),(pe.type!==U||pe.texture!==ne)&&(fe!==ie&&(e.activeTexture(ie),fe=ie),e.bindTexture(U,ne||Z[U]),pe.type=U,pe.texture=ne)}function A(){let U=Te[fe];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{e.compressedTexImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{e.compressedTexImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{e.texSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{e.texSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{e.texStorage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{e.texStorage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{e.texImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{e.texImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){$.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),$.copy(U))}function ce(U){ee.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Ce(U,ne){let ie=h.get(ne);ie===void 0&&(ie=new WeakMap,h.set(ne,ie));let pe=ie.get(U);pe===void 0&&(pe=e.getUniformBlockIndex(ne,U.name),ie.set(U,pe))}function Ie(U,ne){let ie=h.get(ne).get(U);l.get(ne)!==ie&&(e.uniformBlockBinding(ne,ie,U.__bindingPointIndex),l.set(ne,ie))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},fe=null,Te={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,E=null,k=null,R=null,P=new Je(0,0,0),N=0,S=!1,M=null,C=null,O=null,z=null,G=null,$.set(0,0,e.canvas.width,e.canvas.height),ee.set(0,0,e.canvas.width,e.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:V,disable:J,bindFramebuffer:se,drawBuffers:xe,useProgram:X,setBlending:Se,setMaterial:he,setFlipSided:ye,setCullFace:Q,setLineWidth:be,setPolygonOffset:q,setScissorTest:oe,activeTexture:b,bindTexture:x,unbindTexture:A,compressedTexImage2D:Y,compressedTexImage3D:ae,texImage2D:Oe,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:Re,texStorage3D:Me,texSubImage2D:B,texSubImage3D:Ne,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ae,scissor:ue,viewport:ce,reset:We}}function Hh(e,t,i,r){let a=Hg(r);switch(i){case Sl:return e*t;case El:return e*t;case bl:return e*t*2;case gn:return e*t/a.components*a.byteLength;case vn:return e*t/a.components*a.byteLength;case wl:return e*t*2/a.components*a.byteLength;case _n:return e*t*2/a.components*a.byteLength;case Tl:return e*t*3/a.components*a.byteLength;case pi:return e*t*4/a.components*a.byteLength;case xn:return e*t*4/a.components*a.byteLength;case is:case rs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case as:case ss:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mn:case Tn:return Math.max(e,16)*Math.max(t,8)/4;case yn:case Sn:return Math.max(e,8)*Math.max(t,8)/2;case En:case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case An:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ln:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Un:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case In:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Dn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Nn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case On:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Fn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case zn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Bn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case kn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ns:case Hn:case Vn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Al:case Gn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wn:case Xn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Hg(e){switch(e){case Ni:case xl:return{byteLength:1,components:1};case Sa:case yl:case Nr:return{byteLength:2,components:1};case fn:case mn:return{byteLength:2,components:4};case mr:case pn:case Ti:return{byteLength:4,components:1};case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Vg(e,t,i,r,a,s,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Le,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):cs("canvas")}function v(b,x,A){let Y=1,ae=oe(b);if((ae.width>A||ae.height>A)&&(Y=A/Math.max(ae.width,ae.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let B=Math.floor(Y*ae.width),Ne=Math.floor(Y*ae.height);u===void 0&&(u=g(B,Ne));let ve=x?g(B,Ne):u;return ve.width=B,ve.height=Ne,ve.getContext("2d").drawImage(b,0,0,B,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+B+"x"+Ne+")."),ve}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){e.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(b,x,A,Y,ae=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let B=x;if(x===e.RED&&(A===e.FLOAT&&(B=e.R32F),A===e.HALF_FLOAT&&(B=e.R16F),A===e.UNSIGNED_BYTE&&(B=e.R8)),x===e.RED_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.R8UI),A===e.UNSIGNED_SHORT&&(B=e.R16UI),A===e.UNSIGNED_INT&&(B=e.R32UI),A===e.BYTE&&(B=e.R8I),A===e.SHORT&&(B=e.R16I),A===e.INT&&(B=e.R32I)),x===e.RG&&(A===e.FLOAT&&(B=e.RG32F),A===e.HALF_FLOAT&&(B=e.RG16F),A===e.UNSIGNED_BYTE&&(B=e.RG8)),x===e.RG_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.RG8UI),A===e.UNSIGNED_SHORT&&(B=e.RG16UI),A===e.UNSIGNED_INT&&(B=e.RG32UI),A===e.BYTE&&(B=e.RG8I),A===e.SHORT&&(B=e.RG16I),A===e.INT&&(B=e.RG32I)),x===e.RGB_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.RGB8UI),A===e.UNSIGNED_SHORT&&(B=e.RGB16UI),A===e.UNSIGNED_INT&&(B=e.RGB32UI),A===e.BYTE&&(B=e.RGB8I),A===e.SHORT&&(B=e.RGB16I),A===e.INT&&(B=e.RGB32I)),x===e.RGBA_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),A===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),A===e.UNSIGNED_INT&&(B=e.RGBA32UI),A===e.BYTE&&(B=e.RGBA8I),A===e.SHORT&&(B=e.RGBA16I),A===e.INT&&(B=e.RGBA32I)),x===e.RGB&&A===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),x===e.RGBA){let Ne=ae?ls:st.getTransfer(Y);A===e.FLOAT&&(B=e.RGBA32F),A===e.HALF_FLOAT&&(B=e.RGBA16F),A===e.UNSIGNED_BYTE&&(B=Ne===ot?e.SRGB8_ALPHA8:e.RGBA8),A===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),A===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function E(b,x){let A;return b?x===null||x===mr||x===Or?A=e.DEPTH24_STENCIL8:x===Ti?A=e.DEPTH32F_STENCIL8:x===Sa&&(A=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mr||x===Or?A=e.DEPTH_COMPONENT24:x===Ti?A=e.DEPTH_COMPONENT32F:x===Sa&&(A=e.DEPTH_COMPONENT16),A}function k(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==di?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){let x=b.target;x.removeEventListener("dispose",R),N(x),x.isVideoTexture&&c.delete(x)}function P(b){let x=b.target;x.removeEventListener("dispose",P),M(x)}function N(b){let x=r.get(b);if(x.__webglInit===void 0)return;let A=b.source,Y=d.get(A);if(Y){let ae=Y[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(b),Object.keys(Y).length===0&&d.delete(A)}r.remove(b)}function S(b){let x=r.get(b);e.deleteTexture(x.__webglTexture);let A=b.source,Y=d.get(A);delete Y[x.__cacheKey],n.memory.textures--}function M(b){let x=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let ae=0;ae<x.__webglFramebuffer[Y].length;ae++)e.deleteFramebuffer(x.__webglFramebuffer[Y][ae]);else e.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[Y]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let A=b.textures;for(let Y=0,ae=A.length;Y<ae;Y++){let B=r.get(A[Y]);B.__webglTexture&&(e.deleteTexture(B.__webglTexture),n.memory.textures--),r.remove(A[Y])}r.remove(b)}let C=0;function O(){C=0}function z(){let b=C;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),C+=1,b}function G(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function te(b,x){let A=r.get(b);if(b.isVideoTexture&&be(b),b.isRenderTargetTexture===!1&&b.version>0&&A.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(A,b,x);return}}i.bindTexture(e.TEXTURE_2D,A.__webglTexture,e.TEXTURE0+x)}function j(b,x){let A=r.get(b);if(b.version>0&&A.__version!==b.version){ee(A,b,x);return}i.bindTexture(e.TEXTURE_2D_ARRAY,A.__webglTexture,e.TEXTURE0+x)}function re(b,x){let A=r.get(b);if(b.version>0&&A.__version!==b.version){ee(A,b,x);return}i.bindTexture(e.TEXTURE_3D,A.__webglTexture,e.TEXTURE0+x)}function K(b,x){let A=r.get(b);if(b.version>0&&A.__version!==b.version){L(A,b,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+x)}let fe={[es]:e.REPEAT,[fr]:e.CLAMP_TO_EDGE,[un]:e.MIRRORED_REPEAT},Te={[Qt]:e.NEAREST,[Ru]:e.NEAREST_MIPMAP_NEAREST,[ts]:e.NEAREST_MIPMAP_LINEAR,[di]:e.LINEAR,[dn]:e.LINEAR_MIPMAP_NEAREST,[Di]:e.LINEAR_MIPMAP_LINEAR},ke={[Uu]:e.NEVER,[zu]:e.ALWAYS,[Iu]:e.LESS,[Il]:e.LEQUAL,[Du]:e.EQUAL,[Fu]:e.GEQUAL,[Nu]:e.GREATER,[Ou]:e.NOTEQUAL};function Ke(b,x){if(x.type===Ti&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===di||x.magFilter===dn||x.magFilter===ts||x.magFilter===Di||x.minFilter===di||x.minFilter===dn||x.minFilter===ts||x.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,fe[x.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,fe[x.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,fe[x.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,Te[x.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,ke[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qt||x.minFilter!==ts&&x.minFilter!==Di||x.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let A=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function $(b,x){let A=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));let Y=x.source,ae=d.get(Y);ae===void 0&&(ae={},d.set(Y,ae));let B=G(x);if(B!==b.__cacheKey){ae[B]===void 0&&(ae[B]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,A=!0),ae[B].usedTimes++;let Ne=ae[b.__cacheKey];Ne!==void 0&&(ae[b.__cacheKey].usedTimes--,Ne.usedTimes===0&&S(x)),b.__cacheKey=B,b.__webglTexture=ae[B].texture}return A}function ee(b,x,A){let Y=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=e.TEXTURE_3D);let ae=$(b,x),B=x.source;i.bindTexture(Y,b.__webglTexture,e.TEXTURE0+A);let Ne=r.get(B);if(B.version!==Ne.__version||ae===!0){i.activeTexture(e.TEXTURE0+A);let ve=st.getPrimaries(st.workingColorSpace),Ae=x.colorSpace===Ji?null:st.getPrimaries(x.colorSpace),Re=x.colorSpace===Ji||ve===Ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Me=v(x.image,!1,a.maxTextureSize);Me=q(x,Me);let Oe=s.convert(x.format,x.colorSpace),de=s.convert(x.type),ue=_(x.internalFormat,Oe,de,x.colorSpace,x.isVideoTexture);Ke(Y,x);let ce,Ce=x.mipmaps,Ie=x.isVideoTexture!==!0,We=Ne.__version===void 0||ae===!0,U=B.dataReady,ne=k(x,Me);if(x.isDepthTexture)ue=E(x.format===zr,x.type),We&&(Ie?i.texStorage2D(e.TEXTURE_2D,1,ue,Me.width,Me.height):i.texImage2D(e.TEXTURE_2D,0,ue,Me.width,Me.height,0,Oe,de,null));else if(x.isDataTexture)if(Ce.length>0){Ie&&We&&i.texStorage2D(e.TEXTURE_2D,ne,ue,Ce[0].width,Ce[0].height);for(let ie=0,pe=Ce.length;ie<pe;ie++)ce=Ce[ie],Ie?U&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,ce.width,ce.height,Oe,de,ce.data):i.texImage2D(e.TEXTURE_2D,ie,ue,ce.width,ce.height,0,Oe,de,ce.data);x.generateMipmaps=!1}else Ie?(We&&i.texStorage2D(e.TEXTURE_2D,ne,ue,Me.width,Me.height),U&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,de,Me.data)):i.texImage2D(e.TEXTURE_2D,0,ue,Me.width,Me.height,0,Oe,de,Me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&We&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ne,ue,Ce[0].width,Ce[0].height,Me.depth);for(let ie=0,pe=Ce.length;ie<pe;ie++)if(ce=Ce[ie],x.format!==pi)if(Oe!==null)if(Ie){if(U)if(x.layerUpdates.size>0){let Ee=Hh(ce.width,ce.height,x.format,x.type);for(let me of x.layerUpdates){let Xe=ce.data.subarray(me*Ee/ce.data.BYTES_PER_ELEMENT,(me+1)*Ee/ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,me,ce.width,ce.height,1,Oe,Xe)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,Me.depth,Oe,ce.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ie,ue,ce.width,ce.height,Me.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,Me.depth,Oe,de,ce.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ie,ue,ce.width,ce.height,Me.depth,0,Oe,de,ce.data)}else{Ie&&We&&i.texStorage2D(e.TEXTURE_2D,ne,ue,Ce[0].width,Ce[0].height);for(let ie=0,pe=Ce.length;ie<pe;ie++)ce=Ce[ie],x.format!==pi?Oe!==null?Ie?U&&i.compressedTexSubImage2D(e.TEXTURE_2D,ie,0,0,ce.width,ce.height,Oe,ce.data):i.compressedTexImage2D(e.TEXTURE_2D,ie,ue,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,ce.width,ce.height,Oe,de,ce.data):i.texImage2D(e.TEXTURE_2D,ie,ue,ce.width,ce.height,0,Oe,de,ce.data)}else if(x.isDataArrayTexture)if(Ie){if(We&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ne,ue,Me.width,Me.height,Me.depth),U)if(x.layerUpdates.size>0){let ie=Hh(Me.width,Me.height,x.format,x.type);for(let pe of x.layerUpdates){let Ee=Me.data.subarray(pe*ie/Me.data.BYTES_PER_ELEMENT,(pe+1)*ie/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,de,Ee)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,de,Me.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ue,Me.width,Me.height,Me.depth,0,Oe,de,Me.data);else if(x.isData3DTexture)Ie?(We&&i.texStorage3D(e.TEXTURE_3D,ne,ue,Me.width,Me.height,Me.depth),U&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,de,Me.data)):i.texImage3D(e.TEXTURE_3D,0,ue,Me.width,Me.height,Me.depth,0,Oe,de,Me.data);else if(x.isFramebufferTexture){if(We)if(Ie)i.texStorage2D(e.TEXTURE_2D,ne,ue,Me.width,Me.height);else{let ie=Me.width,pe=Me.height;for(let Ee=0;Ee<ne;Ee++)i.texImage2D(e.TEXTURE_2D,Ee,ue,ie,pe,0,Oe,de,null),ie>>=1,pe>>=1}}else if(Ce.length>0){if(Ie&&We){let ie=oe(Ce[0]);i.texStorage2D(e.TEXTURE_2D,ne,ue,ie.width,ie.height)}for(let ie=0,pe=Ce.length;ie<pe;ie++)ce=Ce[ie],Ie?U&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,Oe,de,ce):i.texImage2D(e.TEXTURE_2D,ie,ue,Oe,de,ce);x.generateMipmaps=!1}else if(Ie){if(We){let ie=oe(Me);i.texStorage2D(e.TEXTURE_2D,ne,ue,ie.width,ie.height)}U&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Oe,de,Me)}else i.texImage2D(e.TEXTURE_2D,0,ue,Oe,de,Me);m(x)&&f(Y),Ne.__version=B.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function L(b,x,A){if(x.image.length!==6)return;let Y=$(b,x),ae=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+A);let B=r.get(ae);if(ae.version!==B.__version||Y===!0){i.activeTexture(e.TEXTURE0+A);let Ne=st.getPrimaries(st.workingColorSpace),ve=x.colorSpace===Ji?null:st.getPrimaries(x.colorSpace),Ae=x.colorSpace===Ji||Ne===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Re=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!Re&&!Me?Oe[pe]=v(x.image[pe],!0,a.maxCubemapSize):Oe[pe]=Me?x.image[pe].image:x.image[pe],Oe[pe]=q(x,Oe[pe]);let de=Oe[0],ue=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),Ce=_(x.internalFormat,ue,ce,x.colorSpace),Ie=x.isVideoTexture!==!0,We=B.__version===void 0||Y===!0,U=ae.dataReady,ne=k(x,de);Ke(e.TEXTURE_CUBE_MAP,x);let ie;if(Re){Ie&&We&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ne,Ce,de.width,de.height);for(let pe=0;pe<6;pe++){ie=Oe[pe].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){let me=ie[Ee];x.format!==pi?ue!==null?Ie?U&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,0,0,me.width,me.height,ue,me.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?U&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,0,0,me.width,me.height,ue,ce,me.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,Ce,me.width,me.height,0,ue,ce,me.data)}}}else{if(ie=x.mipmaps,Ie&&We){ie.length>0&&ne++;let pe=oe(Oe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ne,Ce,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){Ie?U&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,ue,ce,Oe[pe].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ce,Oe[pe].width,Oe[pe].height,0,ue,ce,Oe[pe].data);for(let Ee=0;Ee<ie.length;Ee++){let me=ie[Ee].image[pe].image;Ie?U&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,0,0,me.width,me.height,ue,ce,me.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,Ce,me.width,me.height,0,ue,ce,me.data)}}else{Ie?U&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ue,ce,Oe[pe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ce,ue,ce,Oe[pe]);for(let Ee=0;Ee<ie.length;Ee++){let me=ie[Ee];Ie?U&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,0,0,ue,ce,me.image[pe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,Ce,ue,ce,me.image[pe])}}}m(x)&&f(e.TEXTURE_CUBE_MAP),B.__version=ae.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Z(b,x,A,Y,ae,B){let Ne=s.convert(A.format,A.colorSpace),ve=s.convert(A.type),Ae=_(A.internalFormat,Ne,ve,A.colorSpace),Re=r.get(x),Me=r.get(A);if(Me.__renderTarget=x,!Re.__hasExternalTextures){let Oe=Math.max(1,x.width>>B),de=Math.max(1,x.height>>B);ae===e.TEXTURE_3D||ae===e.TEXTURE_2D_ARRAY?i.texImage3D(ae,B,Ae,Oe,de,x.depth,0,Ne,ve,null):i.texImage2D(ae,B,Ae,Oe,de,0,Ne,ve,null)}i.bindFramebuffer(e.FRAMEBUFFER,b),Q(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,ae,Me.__webglTexture,0,ye(x)):(ae===e.TEXTURE_2D||ae>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,ae,Me.__webglTexture,B),i.bindFramebuffer(e.FRAMEBUFFER,null)}function V(b,x,A){if(e.bindRenderbuffer(e.RENDERBUFFER,b),x.depthBuffer){let Y=x.depthTexture,ae=Y&&Y.isDepthTexture?Y.type:null,B=E(x.stencilBuffer,ae),Ne=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=ye(x);Q(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,B,x.width,x.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,B,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,B,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ne,e.RENDERBUFFER,b)}else{let Y=x.textures;for(let ae=0;ae<Y.length;ae++){let B=Y[ae],Ne=s.convert(B.format,B.colorSpace),ve=s.convert(B.type),Ae=_(B.internalFormat,Ne,ve,B.colorSpace),Re=ye(x);A&&Q(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re,Ae,x.width,x.height):Q(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re,Ae,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,Ae,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function J(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let A=r.get(x.depthTexture);A.__renderTarget=x,(!A.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);let Y=A.__webglTexture,ae=ye(x);if(x.depthTexture.format===Fr)Q(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,ae):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(x.depthTexture.format===zr)Q(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,ae):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function se(b){let x=r.get(b),A=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",ae)};Y.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");J(x.__webglFramebuffer,b)}else if(A){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=e.createRenderbuffer(),V(x.__webglDepthbuffer[Y],b,!1);else{let ae=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,B=x.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,B),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,B)}}else if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),V(x.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ae),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,ae)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(b,x,A){let Y=r.get(b);x!==void 0&&Z(Y.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),A!==void 0&&se(b)}function X(b){let x=b.texture,A=r.get(b),Y=r.get(x);b.addEventListener("dispose",P);let ae=b.textures,B=b.isWebGLCubeRenderTarget===!0,Ne=ae.length>1;if(Ne||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=x.version,n.memory.textures++),B){A.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)A.__webglFramebuffer[ve][Ae]=e.createFramebuffer()}else A.__webglFramebuffer[ve]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)A.__webglFramebuffer[ve]=e.createFramebuffer()}else A.__webglFramebuffer=e.createFramebuffer();if(Ne)for(let ve=0,Ae=ae.length;ve<Ae;ve++){let Re=r.get(ae[ve]);Re.__webglTexture===void 0&&(Re.__webglTexture=e.createTexture(),n.memory.textures++)}if(b.samples>0&&Q(b)===!1){A.__webglMultisampledFramebuffer=e.createFramebuffer(),A.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){let Ae=ae[ve];A.__webglColorRenderbuffer[ve]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,A.__webglColorRenderbuffer[ve]);let Re=s.convert(Ae.format,Ae.colorSpace),Me=s.convert(Ae.type),Oe=_(Ae.internalFormat,Re,Me,Ae.colorSpace,b.isXRRenderTarget===!0),de=ye(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,de,Oe,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,A.__webglColorRenderbuffer[ve])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(A.__webglDepthRenderbuffer=e.createRenderbuffer(),V(A.__webglDepthRenderbuffer,b,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(B){i.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Ke(e.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Z(A.__webglFramebuffer[ve][Ae],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else Z(A.__webglFramebuffer[ve],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&f(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let ve=0,Ae=ae.length;ve<Ae;ve++){let Re=ae[ve],Me=r.get(Re);i.bindTexture(e.TEXTURE_2D,Me.__webglTexture),Ke(e.TEXTURE_2D,Re),Z(A.__webglFramebuffer,b,Re,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,0),m(Re)&&f(e.TEXTURE_2D)}i.unbindTexture()}else{let ve=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ve,Y.__webglTexture),Ke(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Z(A.__webglFramebuffer[Ae],b,x,e.COLOR_ATTACHMENT0,ve,Ae);else Z(A.__webglFramebuffer,b,x,e.COLOR_ATTACHMENT0,ve,0);m(x)&&f(ve),i.unbindTexture()}b.depthBuffer&&se(b)}function le(b){let x=b.textures;for(let A=0,Y=x.length;A<Y;A++){let ae=x[A];if(m(ae)){let B=y(b),Ne=r.get(ae).__webglTexture;i.bindTexture(B,Ne),f(B),i.unbindTexture()}}}let w=[],Se=[];function he(b){if(b.samples>0){if(Q(b)===!1){let x=b.textures,A=b.width,Y=b.height,ae=e.COLOR_BUFFER_BIT,B=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ne=r.get(b),ve=x.length>1;if(ve)for(let Ae=0;Ae<x.length;Ae++)i.bindFramebuffer(e.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ne.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ae|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ae|=e.STENCIL_BUFFER_BIT)),ve){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);let Re=r.get(x[Ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Re,0)}e.blitFramebuffer(0,0,A,Y,0,0,A,Y,ae,e.NEAREST),l===!0&&(w.length=0,Se.length=0,w.push(e.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(w.push(B),Se.push(B),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ve)for(let Ae=0;Ae<x.length;Ae++){i.bindFramebuffer(e.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);let Re=r.get(x[Ae]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ne.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,Re,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ye(b){return Math.min(a.maxSamples,b.samples)}function Q(b){let x=r.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(b){let x=n.render.frame;c.get(b)!==x&&(c.set(b,x),b.update())}function q(b,x){let A=b.colorSpace,Y=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||A!==Br&&A!==Ji&&(st.getTransfer(A)===ot?(Y!==pi||ae!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),x}function oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=re,this.setTextureCube=K,this.rebindTextures=xe,this.setupRenderTarget=X,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Q}function Gg(e,t){function i(r,a=Ji){let s,n=st.getTransfer(a);if(r===Ni)return e.UNSIGNED_BYTE;if(r===fn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===mn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Ml)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===xl)return e.BYTE;if(r===yl)return e.SHORT;if(r===Sa)return e.UNSIGNED_SHORT;if(r===pn)return e.INT;if(r===mr)return e.UNSIGNED_INT;if(r===Ti)return e.FLOAT;if(r===Nr)return e.HALF_FLOAT;if(r===Sl)return e.ALPHA;if(r===Tl)return e.RGB;if(r===pi)return e.RGBA;if(r===El)return e.LUMINANCE;if(r===bl)return e.LUMINANCE_ALPHA;if(r===Fr)return e.DEPTH_COMPONENT;if(r===zr)return e.DEPTH_STENCIL;if(r===gn)return e.RED;if(r===vn)return e.RED_INTEGER;if(r===wl)return e.RG;if(r===_n)return e.RG_INTEGER;if(r===xn)return e.RGBA_INTEGER;if(r===is||r===rs||r===as||r===ss)if(n===ot)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===is)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===is)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yn||r===Mn||r===Sn||r===Tn)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===yn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===En||r===bn||r===wn)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===En||r===bn)return n===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===wn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===An||r===Rn||r===Cn||r===Pn||r===Ln||r===Un||r===In||r===Dn||r===Nn||r===On||r===Fn||r===zn||r===Bn||r===kn)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===An)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ln)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Un)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===In)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===On)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ns||r===Hn||r===Vn)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===ns)return n===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hn)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vn)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Al||r===Gn||r===Wn||r===Xn)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===ns)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Gn)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Or?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Wg=class extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nr=class extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xg={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,i),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return n!==null&&(n.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new nr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`,Yg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new ai,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bi({vertexShader:jg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kg=class extends Hr{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new Yg,v=t.getContextAttributes(),m=null,f=null,y=[],_=[],E=new Le,k=null,R=new ii;R.viewport=new At;let P=new ii;P.viewport=new At;let N=[R,P],S=new Wg,M=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=y[$];return ee===void 0&&(ee=new Lo,y[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=y[$];return ee===void 0&&(ee=new Lo,y[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=y[$];return ee===void 0&&(ee=new Lo,y[$]=ee),ee.getHandSpace()};function O($){let ee=_.indexOf($.inputSource);if(ee===-1)return;let L=y[ee];L!==void 0&&(L.update($.inputSource,$.frame,l||s),L.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let $=0;$<y.length;$++){let ee=_[$];ee!==null&&(_[$]=null,y[$].disconnect(ee))}M=null,C=null,g.reset(),e.setRenderTarget(m),d=null,u=null,c=null,r=null,f=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){n=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0){let ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new $i(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,L=null,Z=null;v.depth&&(Z=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?zr:Fr,L=v.stencil?Or:mr);let V={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(V),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new $i(u.textureWidth,u.textureHeight,{format:pi,type:Ni,depthTexture:new xh(u.textureWidth,u.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G($){for(let ee=0;ee<$.removed.length;ee++){let L=$.removed[ee],Z=_.indexOf(L);Z>=0&&(_[Z]=null,y[Z].disconnect(L))}for(let ee=0;ee<$.added.length;ee++){let L=$.added[ee],Z=_.indexOf(L);if(Z===-1){for(let J=0;J<y.length;J++)if(J>=_.length){_.push(L),Z=J;break}else if(_[J]===null){_[J]=L,Z=J;break}if(Z===-1)break}let V=y[Z];V&&V.connect(L)}}let te=new I,j=new I;function re($,ee,L){te.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(L.matrixWorld);let Z=te.distanceTo(j),V=ee.projectionMatrix.elements,J=L.projectionMatrix.elements,se=V[14]/(V[10]-1),xe=V[14]/(V[10]+1),X=(V[9]+1)/V[5],le=(V[9]-1)/V[5],w=(V[8]-1)/V[0],Se=(J[8]+1)/J[0],he=se*w,ye=se*Se,Q=Z/(-w+Se),be=Q*-w;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(be),$.translateZ(Q),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),V[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let q=se+Q,oe=xe+Q,b=he-be,x=ye+(Z-be),A=X*xe/oe*q,Y=le*xe/oe*q;$.projectionMatrix.makePerspective(b,x,A,Y,q,oe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ee=$.near,L=$.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(L=g.depthFar)),S.near=P.near=R.near=ee,S.far=P.far=R.far=L,(M!==S.near||C!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,C=S.far),R.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,S.layers.mask=R.layers.mask|P.layers.mask;let Z=$.parent,V=S.cameras;K(S,Z);for(let J=0;J<V.length;J++)K(V[J],Z);V.length===2?re(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),fe($,S,Z)};function fe($,ee,L){L===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(L.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Jn*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function($){o=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Te=null;function ke($,ee){if(h=ee.getViewerPose(l||s),p=ee,h!==null){let L=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let Z=!1;L.length!==S.cameras.length&&(S.cameras.length=0,Z=!0);for(let J=0;J<L.length;J++){let se=L[J],xe=null;if(d!==null)xe=d.getViewport(se);else{let le=c.getViewSubImage(u,se);xe=le.viewport,J===0&&(e.setRenderTargetTextures(f,le.colorTexture,u.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(f))}let X=N[J];X===void 0&&(X=new ii,X.layers.enable(J),X.viewport=new At,N[J]=X),X.matrix.fromArray(se.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(se.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(xe.x,xe.y,xe.width,xe.height),J===0&&(S.matrix.copy(X.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Z===!0&&S.cameras.push(X)}let V=r.enabledFeatures;if(V&&V.includes("depth-sensing")){let J=c.getDepthInformation(L[0]);J&&J.isValid&&J.texture&&g.init(e,J,r.renderState)}}for(let L=0;L<y.length;L++){let Z=_[L],V=y[L];Z!==null&&V!==void 0&&V.update(Z,ee,l||s)}Te&&Te($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),p=null}let Ke=new dh;Ke.setAnimationLoop(ke),this.setAnimationLoop=function($){Te=$},this.dispose=function(){}}},br=new ir,Jg=new lt;function $g(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,oh(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,y,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(n(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),_=y.envMap,E=y.envMapRotation;_&&(m.envMap.value=_,br.copy(E),br.x*=-1,br.y*=-1,br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(br)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function n(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Zg(e,t,i,r){let a={},s={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let E=_.program;r.uniformBlockBinding(y,E)}function h(y,_){let E=a[y.id];E===void 0&&(g(y),E=c(y),a[y.id]=E,y.addEventListener("dispose",m));let k=_.program;r.updateUBOMapping(y,k);let R=t.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function c(y){let _=u();y.__bindingPointIndex=_;let E=e.createBuffer(),k=y.__size,R=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,k,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,E),E}function u(){for(let y=0;y<o;y++)if(n.indexOf(y)===-1)return n.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=a[y.id],E=y.uniforms,k=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let R=0,P=E.length;R<P;R++){let N=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,M=N.length;S<M;S++){let C=N[S];if(p(C,R,S,k)===!0){let O=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],G=0;for(let te=0;te<z.length;te++){let j=z[te],re=v(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,e.bufferSubData(e.UNIFORM_BUFFER,O+G,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,G),G+=re.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,_,E,k){let R=y.value,P=_+"_"+E;if(k[P]===void 0)return typeof R=="number"||typeof R=="boolean"?k[P]=R:k[P]=R.clone(),!0;{let N=k[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return k[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(y){let _=y.uniforms,E=0,k=16;for(let P=0,N=_.length;P<N;P++){let S=Array.isArray(_[P])?_[P]:[_[P]];for(let M=0,C=S.length;M<C;M++){let O=S[M],z=Array.isArray(O.value)?O.value:[O.value];for(let G=0,te=z.length;G<te;G++){let j=z[G],re=v(j),K=E%k,fe=K%re.boundary,Te=K+fe;E+=fe,Te!==0&&k-Te<re.storage&&(E+=k-Te),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=re.storage}}}let R=E%k;return R>0&&(E+=k-R),y.__size=E,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let E=n.indexOf(_.__bindingPointIndex);n.splice(E,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(let y in a)e.deleteBuffer(a[y]);n=[],a={},s={}}return{bind:l,update:h,dispose:f}}var Vh=class{constructor(e={}){let{canvas:t=ku(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=Si,this.toneMappingExposure=1;let _=this,E=!1,k=0,R=0,P=null,N=-1,S=null,M=new At,C=new At,O=null,z=new Je(0),G=0,te=t.width,j=t.height,re=1,K=null,fe=null,Te=new At(0,0,te,j),ke=new At(0,0,te,j),Ke=!1,$=new yo,ee=!1,L=!1,Z=new lt,V=new lt,J=new I,se=new At,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function le(){return P===null?re:1}let w=i;function Se(T,D){return t.getContext(T,D)}try{let T={alpha:!0,depth:r,stencil:a,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),w===null){let D="webgl2";if(w=Se(D,T),w===null)throw Se(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let he,ye,Q,be,q,oe,b,x,A,Y,ae,B,Ne,ve,Ae,Re,Me,Oe,de,ue,ce,Ce,Ie,We;function U(){he=new am(w),he.init(),Ce=new Gg(w,he),ye=new Zf(w,he,e,Ce),Q=new kg(w,he),ye.reverseDepthBuffer&&u&&Q.buffers.depth.setReversed(!0),be=new om(w),q=new bg,oe=new Vg(w,he,Q,q,ye,Ce,be),b=new em(_),x=new rm(_),A=new pd(w),Ie=new Jf(w,A),Y=new sm(w,A,be,Ie),ae=new hm(w,Y,A,be),de=new lm(w,ye,oe),Re=new Qf(q),B=new Eg(_,b,x,he,ye,Ie,Re),Ne=new $g(_,q),ve=new Ag,Ae=new Ig(he),Oe=new Kf(_,b,x,Q,ae,d,o),Me=new zg(_,ae,ye),We=new Zg(w,be,ye,Q),ue=new $f(w,he,be),ce=new nm(w,he,be),be.programs=B.programs,_.capabilities=ye,_.extensions=he,_.properties=q,_.renderLists=ve,_.shadowMap=Me,_.state=Q,_.info=be}U();let ne=new Kg(_,w);this.xr=ne,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(te,j,!1))},this.getSize=function(T){return T.set(te,j)},this.setSize=function(T,D,H=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,j=D,t.width=Math.floor(T*re),t.height=Math.floor(D*re),H===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(te*re,j*re).floor()},this.setDrawingBufferSize=function(T,D,H){te=T,j=D,re=H,t.width=Math.floor(T*H),t.height=Math.floor(D*H),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,D,H,W){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,D,H,W),Q.viewport(M.copy(Te).multiplyScalar(re).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,D,H,W){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,D,H,W),Q.scissor(C.copy(ke).multiplyScalar(re).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){Q.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(T=!0,D=!0,H=!0){let W=0;if(T){let F=!1;if(P!==null){let _e=P.texture.format;F=_e===xn||_e===_n||_e===vn}if(F){let _e=P.texture.type,Pe=_e===Ni||_e===mr||_e===Sa||_e===Or||_e===fn||_e===mn,Ue=Oe.getClearColor(),Be=Oe.getClearAlpha(),Ye=Ue.r,Ze=Ue.g,qe=Ue.b;Pe?(p[0]=Ye,p[1]=Ze,p[2]=qe,p[3]=Be,w.clearBufferuiv(w.COLOR,0,p)):(g[0]=Ye,g[1]=Ze,g[2]=qe,g[3]=Be,w.clearBufferiv(w.COLOR,0,g))}else W|=w.COLOR_BUFFER_BIT}D&&(W|=w.DEPTH_BUFFER_BIT),H&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ve.dispose(),Ae.dispose(),q.dispose(),b.dispose(),x.dispose(),ae.dispose(),Ie.dispose(),We.dispose(),B.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Qe),ne.removeEventListener("sessionend",ht),ft.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=be.autoReset,D=Me.enabled,H=Me.autoUpdate,W=Me.needsUpdate,F=Me.type;U(),be.autoReset=T,Me.enabled=D,Me.autoUpdate=H,Me.needsUpdate=W,Me.type=F}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){let D=T.target;D.removeEventListener("dispose",me),Xe(D)}function Xe(T){ge(T),q.remove(T)}function ge(T){let D=q.get(T).programs;D!==void 0&&(D.forEach(function(H){B.releaseProgram(H)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,H,W,F,_e){D===null&&(D=xe);let Pe=F.isMesh&&F.matrixWorld.determinant()<0,Ue=_a(T,D,H,W,F);Q.setMaterial(W,Pe);let Be=H.index,Ye=1;if(W.wireframe===!0){if(Be=Y.getWireframeAttribute(H),Be===void 0)return;Ye=2}let Ze=H.drawRange,qe=H.attributes.position,at=Ze.start*Ye,ut=(Ze.start+Ze.count)*Ye;_e!==null&&(at=Math.max(at,_e.start*Ye),ut=Math.min(ut,(_e.start+_e.count)*Ye)),Be!==null?(at=Math.max(at,0),ut=Math.min(ut,Be.count)):qe!=null&&(at=Math.max(at,0),ut=Math.min(ut,qe.count));let dt=ut-at;if(dt<0||dt===1/0)return;Ie.setup(F,W,Ue,H,Be);let _t,nt=ue;if(Be!==null&&(_t=A.get(Be),nt=ce,nt.setIndex(_t)),F.isMesh)W.wireframe===!0?(Q.setLineWidth(W.wireframeLinewidth*le()),nt.setMode(w.LINES)):nt.setMode(w.TRIANGLES);else if(F.isLine){let Ve=W.linewidth;Ve===void 0&&(Ve=1),Q.setLineWidth(Ve*le()),F.isLineSegments?nt.setMode(w.LINES):F.isLineLoop?nt.setMode(w.LINE_LOOP):nt.setMode(w.LINE_STRIP)}else F.isPoints?nt.setMode(w.POINTS):F.isSprite&&nt.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ve=F._multiDrawStarts,ri=F._multiDrawCounts,ui=F._multiDrawCount,Xt=Be?A.get(Be).bytesPerElement:1,yi=q.get(W).currentProgram.getUniforms();for(let Fe=0;Fe<ui;Fe++)yi.setValue(w,"_gl_DrawID",Fe),nt.render(Ve[Fe]/Xt,ri[Fe])}else if(F.isInstancedMesh)nt.renderInstances(at,dt,F.count);else if(H.isInstancedBufferGeometry){let Ve=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ri=Math.min(H.instanceCount,Ve);nt.renderInstances(at,dt,ri)}else nt.render(at,dt)};function we(T,D,H){T.transparent===!0&&T.side===Mi&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,ji(T,D,H),T.side=Yi,T.needsUpdate=!0,ji(T,D,H),T.side=Mi):ji(T,D,H)}this.compile=function(T,D,H=null){H===null&&(H=T),m=Ae.get(H),m.init(D),y.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==H&&T.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let _e=F.material;if(_e)if(Array.isArray(_e))for(let Pe=0;Pe<_e.length;Pe++){let Ue=_e[Pe];we(Ue,H,F),W.add(Ue)}else we(_e,H,F),W.add(_e)}),y.pop(),m=null,W},this.compileAsync=function(T,D,H=null){let W=this.compile(T,D,H);return new Promise(F=>{function _e(){if(W.forEach(function(Pe){q.get(Pe).currentProgram.isReady()&&W.delete(Pe)}),W.size===0){F(T);return}setTimeout(_e,10)}he.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ze=null;function it(T){ze&&ze(T)}function Qe(){ft.stop()}function ht(){ft.start()}let ft=new dh;ft.setAnimationLoop(it),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(T){ze=T,ne.setAnimationLoop(T),T===null?ft.stop():ft.start()},ne.addEventListener("sessionstart",Qe),ne.addEventListener("sessionend",ht),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(D),D=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,D,P),m=Ae.get(T,y.length),m.init(D),y.push(m),V.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(V),L=this.localClippingEnabled,ee=Re.init(this.clippingPlanes,L),v=ve.get(T,f.length),v.init(),f.push(v),ne.enabled===!0&&ne.isPresenting===!0){let _e=_.xr.getDepthSensingMesh();_e!==null&&wt(_e,D,-1/0,_.sortObjects)}wt(T,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(K,fe),X=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,X&&Oe.addToRenderList(v,T),this.info.render.frame++,ee===!0&&Re.beginShadows();let H=m.state.shadowsArray;Me.render(H,T,D),ee===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=v.opaque,F=v.transmissive;if(m.setupLights(),D.isArrayCamera){let _e=D.cameras;if(F.length>0)for(let Pe=0,Ue=_e.length;Pe<Ue;Pe++){let Be=_e[Pe];Kt(W,F,T,Be)}X&&Oe.render(T);for(let Pe=0,Ue=_e.length;Pe<Ue;Pe++){let Be=_e[Pe];ct(v,T,Be,Be.viewport)}}else F.length>0&&Kt(W,F,T,D),X&&Oe.render(T),ct(v,T,D);P!==null&&(oe.updateMultisampleRenderTarget(P),oe.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,D),Ie.resetDefaultState(),N=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],ee===!0&&Re.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function wt(T,D,H,W){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){W&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);let _e=ae.update(T),Pe=T.material;Pe.visible&&v.push(T,_e,Pe,H,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let _e=ae.update(T),Pe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),se.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),se.copy(_e.boundingSphere.center)),se.applyMatrix4(T.matrixWorld).applyMatrix4(V)),Array.isArray(Pe)){let Ue=_e.groups;for(let Be=0,Ye=Ue.length;Be<Ye;Be++){let Ze=Ue[Be],qe=Pe[Ze.materialIndex];qe&&qe.visible&&v.push(T,_e,qe,H,se.z,Ze)}}else Pe.visible&&v.push(T,_e,Pe,H,se.z,null)}}let F=T.children;for(let _e=0,Pe=F.length;_e<Pe;_e++)wt(F[_e],D,H,W)}function ct(T,D,H,W){let F=T.opaque,_e=T.transmissive,Pe=T.transparent;m.setupLightsView(H),ee===!0&&Re.setGlobalState(_.clippingPlanes,H),W&&Q.viewport(M.copy(W)),F.length>0&&Vt(F,D,H),_e.length>0&&Vt(_e,D,H),Pe.length>0&&Vt(Pe,D,H),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Kt(T,D,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new $i(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Nr:Ni,minFilter:Di,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let F=m.state.transmissionRenderTarget[W.id],_e=W.viewport||M;F.setSize(_e.z,_e.w);let Pe=_.getRenderTarget();_.setRenderTarget(F),_.getClearColor(z),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),X&&Oe.render(H);let Ue=_.toneMapping;_.toneMapping=Si;let Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),ee===!0&&Re.setGlobalState(_.clippingPlanes,W),Vt(T,H,W),oe.updateMultisampleRenderTarget(F),oe.updateRenderTargetMipmap(F),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ze=0,qe=D.length;Ze<qe;Ze++){let at=D[Ze],ut=at.object,dt=at.geometry,_t=at.material,nt=at.group;if(_t.side===Mi&&ut.layers.test(W.layers)){let Ve=_t.side;_t.side=Jt,_t.needsUpdate=!0,$a(ut,H,W,dt,_t,nt),_t.side=Ve,_t.needsUpdate=!0,Ye=!0}}Ye===!0&&(oe.updateMultisampleRenderTarget(F),oe.updateRenderTargetMipmap(F))}_.setRenderTarget(Pe),_.setClearColor(z,G),Be!==void 0&&(W.viewport=Be),_.toneMapping=Ue}function Vt(T,D,H){let W=D.isScene===!0?D.overrideMaterial:null;for(let F=0,_e=T.length;F<_e;F++){let Pe=T[F],Ue=Pe.object,Be=Pe.geometry,Ye=W===null?Pe.material:W,Ze=Pe.group;Ue.layers.test(H.layers)&&$a(Ue,D,H,Be,Ye,Ze)}}function $a(T,D,H,W,F,_e){T.onBeforeRender(_,D,H,W,F,_e),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(_,D,H,W,T,_e),F.transparent===!0&&F.side===Mi&&F.forceSinglePass===!1?(F.side=Jt,F.needsUpdate=!0,_.renderBufferDirect(H,D,W,F,T,_e),F.side=Yi,F.needsUpdate=!0,_.renderBufferDirect(H,D,W,F,T,_e),F.side=Mi):_.renderBufferDirect(H,D,W,F,T,_e),T.onAfterRender(_,D,H,W,F,_e)}function ji(T,D,H){D.isScene!==!0&&(D=xe);let W=q.get(T),F=m.state.lights,_e=m.state.shadowsArray,Pe=F.state.version,Ue=B.getParameters(T,F.state,_e,D,H),Be=B.getProgramCacheKey(Ue),Ye=W.programs;W.environment=T.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(T.isMeshStandardMaterial?x:b).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",me),Ye=new Map,W.programs=Ye);let Ze=Ye.get(Be);if(Ze!==void 0){if(W.currentProgram===Ze&&W.lightsStateVersion===Pe)return qi(T,Ue),Ze}else Ue.uniforms=B.getUniforms(T),T.onBeforeCompile(Ue,_),Ze=B.acquireProgram(Ue,Be),Ye.set(Be,Ze),W.uniforms=Ue.uniforms;let qe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=Re.uniform),qi(T,Ue),W.needsLights=Za(T),W.lightsStateVersion=Pe,W.needsLights&&(qe.ambientLightColor.value=F.state.ambient,qe.lightProbe.value=F.state.probe,qe.directionalLights.value=F.state.directional,qe.directionalLightShadows.value=F.state.directionalShadow,qe.spotLights.value=F.state.spot,qe.spotLightShadows.value=F.state.spotShadow,qe.rectAreaLights.value=F.state.rectArea,qe.ltc_1.value=F.state.rectAreaLTC1,qe.ltc_2.value=F.state.rectAreaLTC2,qe.pointLights.value=F.state.point,qe.pointLightShadows.value=F.state.pointShadow,qe.hemisphereLights.value=F.state.hemi,qe.directionalShadowMap.value=F.state.directionalShadowMap,qe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,qe.spotShadowMap.value=F.state.spotShadowMap,qe.spotLightMatrix.value=F.state.spotLightMatrix,qe.spotLightMap.value=F.state.spotLightMap,qe.pointShadowMap.value=F.state.pointShadowMap,qe.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ze,W.uniformsList=null,Ze}function va(T){if(T.uniformsList===null){let D=T.currentProgram.getUniforms();T.uniformsList=Ls.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function qi(T,D){let H=q.get(T);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function _a(T,D,H,W,F){D.isScene!==!0&&(D=xe),oe.resetTextureUnits();let _e=D.fog,Pe=W.isMeshStandardMaterial?D.environment:null,Ue=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Br,Be=(W.isMeshStandardMaterial?x:b).get(W.envMap||Pe),Ye=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ze=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),qe=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color,dt=Si;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=_.toneMapping);let _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=_t!==void 0?_t.length:0,Ve=q.get(W),ri=m.state.lights;if(ee===!0&&(L===!0||T!==S)){let mt=T===S&&W.id===N;Re.setState(W,T,mt)}let ui=!1;W.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ri.state.version||Ve.outputColorSpace!==Ue||F.isBatchedMesh&&Ve.batching===!1||!F.isBatchedMesh&&Ve.batching===!0||F.isBatchedMesh&&Ve.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ve.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ve.instancing===!1||!F.isInstancedMesh&&Ve.instancing===!0||F.isSkinnedMesh&&Ve.skinning===!1||!F.isSkinnedMesh&&Ve.skinning===!0||F.isInstancedMesh&&Ve.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ve.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ve.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ve.instancingMorph===!1&&F.morphTexture!==null||Ve.envMap!==Be||W.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Re.numPlanes||Ve.numIntersection!==Re.numIntersection)||Ve.vertexAlphas!==Ye||Ve.vertexTangents!==Ze||Ve.morphTargets!==qe||Ve.morphNormals!==at||Ve.morphColors!==ut||Ve.toneMapping!==dt||Ve.morphTargetsCount!==nt)&&(ui=!0):(ui=!0,Ve.__version=W.version);let Xt=Ve.currentProgram;ui===!0&&(Xt=ji(W,D,F));let yi=!1,Fe=!1,$e=!1,He=Xt.getUniforms(),rt=Ve.uniforms;if(Q.useProgram(Xt.program)&&(yi=!0,Fe=!0,$e=!0),W.id!==N&&(N=W.id,Fe=!0),yi||S!==T){Q.buffers.depth.getReversed()?(Z.copy(T.projectionMatrix),Vu(Z),Gu(Z),He.setValue(w,"projectionMatrix",Z)):He.setValue(w,"projectionMatrix",T.projectionMatrix),He.setValue(w,"viewMatrix",T.matrixWorldInverse);let mt=He.map.cameraPosition;mt!==void 0&&mt.setValue(w,J.setFromMatrixPosition(T.matrixWorld)),ye.logarithmicDepthBuffer&&He.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&He.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Fe=!0,$e=!0)}if(F.isSkinnedMesh){He.setOptional(w,F,"bindMatrix"),He.setOptional(w,F,"bindMatrixInverse");let mt=F.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),He.setValue(w,"boneTexture",mt.boneTexture,oe))}F.isBatchedMesh&&(He.setOptional(w,F,"batchingTexture"),He.setValue(w,"batchingTexture",F._matricesTexture,oe),He.setOptional(w,F,"batchingIdTexture"),He.setValue(w,"batchingIdTexture",F._indirectTexture,oe),He.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&He.setValue(w,"batchingColorTexture",F._colorsTexture,oe));let Ct=H.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&de.update(F,H,Xt),(Fe||Ve.receiveShadow!==F.receiveShadow)&&(Ve.receiveShadow=F.receiveShadow,He.setValue(w,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rt.envMap.value=Be,rt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&D.environment!==null&&(rt.envMapIntensity.value=D.environmentIntensity),Fe&&(He.setValue(w,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&xa(rt,$e),_e&&W.fog===!0&&Ne.refreshFogUniforms(rt,_e),Ne.refreshMaterialUniforms(rt,W,re,j,m.state.transmissionRenderTarget[T.id]),Ls.upload(w,va(Ve),rt,oe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ls.upload(w,va(Ve),rt,oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&He.setValue(w,"center",F.center),He.setValue(w,"modelViewMatrix",F.modelViewMatrix),He.setValue(w,"normalMatrix",F.normalMatrix),He.setValue(w,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let mt=W.uniformsGroups;for(let zt=0,Bt=mt.length;zt<Bt;zt++){let Zt=mt[zt];We.update(Zt,Xt),We.bind(Zt,Xt)}}return Xt}function xa(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function Za(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,D,H){q.get(T.texture).__webglTexture=D,q.get(T.depthTexture).__webglTexture=H;let W=q.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){let H=q.get(T);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,H=0){P=T,k=D,R=H;let W=!0,F=null,_e=!1,Pe=!1;if(T){let Ue=q.get(T);if(Ue.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(Ue.__webglFramebuffer===void 0)oe.setupRenderTarget(T);else if(Ue.__hasExternalTextures)oe.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ze=T.depthTexture;if(Ue.__boundDepthTexture!==Ze){if(Ze!==null&&q.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(T)}}let Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Pe=!0);let Ye=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[D])?F=Ye[D][H]:F=Ye[D],_e=!0):T.samples>0&&oe.useMultisampledRTT(T)===!1?F=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?F=Ye[H]:F=Ye,M.copy(T.viewport),C.copy(T.scissor),O=T.scissorTest}else M.copy(Te).multiplyScalar(re).floor(),C.copy(ke).multiplyScalar(re).floor(),O=Ke;if(Q.bindFramebuffer(w.FRAMEBUFFER,F)&&W&&Q.drawBuffers(T,F),Q.viewport(M),Q.scissor(C),Q.setScissorTest(O),_e){let Ue=q.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ue.__webglTexture,H)}else if(Pe){let Ue=q.get(T.texture),Be=D||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ue.__webglTexture,H||0,Be)}N=-1},this.readRenderTargetPixels=function(T,D,H,W,F,_e,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){Q.bindFramebuffer(w.FRAMEBUFFER,Ue);try{let Be=T.texture,Ye=Be.format,Ze=Be.type;if(!ye.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-W&&H>=0&&H<=T.height-F&&w.readPixels(D,H,W,F,Ce.convert(Ye),Ce.convert(Ze),_e)}finally{let Be=P!==null?q.get(P).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,D,H,W,F,_e,Pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){let Be=T.texture,Ye=Be.format,Ze=Be.type;if(!ye.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-W&&H>=0&&H<=T.height-F){Q.bindFramebuffer(w.FRAMEBUFFER,Ue);let qe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.bufferData(w.PIXEL_PACK_BUFFER,_e.byteLength,w.STREAM_READ),w.readPixels(D,H,W,F,Ce.convert(Ye),Ce.convert(Ze),0);let at=P!==null?q.get(P).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,at);let ut=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Hu(w,ut,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,_e),w.deleteBuffer(qe),w.deleteSync(ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,H=0){T.isTexture!==!0&&(Ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-H),F=Math.floor(T.image.width*W),_e=Math.floor(T.image.height*W),Pe=D!==null?D.x:0,Ue=D!==null?D.y:0;oe.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,Pe,Ue,F,_e),Q.unbindTexture()},this.copyTextureToTexture=function(T,D,H=null,W=null,F=0){T.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],D=arguments[2],F=arguments[3]||0,H=null);let _e,Pe,Ue,Be,Ye,Ze,qe,at,ut,dt=T.isCompressedTexture?T.mipmaps[F]:T.image;H!==null?(_e=H.max.x-H.min.x,Pe=H.max.y-H.min.y,Ue=H.isBox3?H.max.z-H.min.z:1,Be=H.min.x,Ye=H.min.y,Ze=H.isBox3?H.min.z:0):(_e=dt.width,Pe=dt.height,Ue=dt.depth||1,Be=0,Ye=0,Ze=0),W!==null?(qe=W.x,at=W.y,ut=W.z):(qe=0,at=0,ut=0);let _t=Ce.convert(D.format),nt=Ce.convert(D.type),Ve;D.isData3DTexture?(oe.setTexture3D(D,0),Ve=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(oe.setTexture2DArray(D,0),Ve=w.TEXTURE_2D_ARRAY):(oe.setTexture2D(D,0),Ve=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let ri=w.getParameter(w.UNPACK_ROW_LENGTH),ui=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Xt=w.getParameter(w.UNPACK_SKIP_PIXELS),yi=w.getParameter(w.UNPACK_SKIP_ROWS),Fe=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,dt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,dt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Be),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ye),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ze);let $e=T.isDataArrayTexture||T.isData3DTexture,He=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let rt=q.get(T),Ct=q.get(D),mt=q.get(rt.__renderTarget),zt=q.get(Ct.__renderTarget);Q.bindFramebuffer(w.READ_FRAMEBUFFER,mt.__webglFramebuffer),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Bt=0;Bt<Ue;Bt++)$e&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,q.get(T).__webglTexture,F,Ze+Bt),T.isDepthTexture?(He&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,q.get(D).__webglTexture,F,ut+Bt),w.blitFramebuffer(Be,Ye,_e,Pe,qe,at,_e,Pe,w.DEPTH_BUFFER_BIT,w.NEAREST)):He?w.copyTexSubImage3D(Ve,F,qe,at,ut+Bt,Be,Ye,_e,Pe):w.copyTexSubImage2D(Ve,F,qe,at,ut+Bt,Be,Ye,_e,Pe);Q.bindFramebuffer(w.READ_FRAMEBUFFER,null),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else He?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(Ve,F,qe,at,ut,_e,Pe,Ue,_t,nt,dt.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(Ve,F,qe,at,ut,_e,Pe,Ue,_t,dt.data):w.texSubImage3D(Ve,F,qe,at,ut,_e,Pe,Ue,_t,nt,dt):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,F,qe,at,_e,Pe,_t,nt,dt.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,F,qe,at,dt.width,dt.height,_t,dt.data):w.texSubImage2D(w.TEXTURE_2D,F,qe,at,_e,Pe,_t,nt,dt);w.pixelStorei(w.UNPACK_ROW_LENGTH,ri),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ui),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Xt),w.pixelStorei(w.UNPACK_SKIP_ROWS,yi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Fe),F===0&&D.generateMipmaps&&w.generateMipmap(Ve),Q.unbindTexture()},this.copyTextureToTexture3D=function(T,D,H=null,W=null,F=0){return T.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,T=arguments[2],D=arguments[3],F=arguments[4]||0),Ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,H,W,F)},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?oe.setTextureCube(T,0):T.isData3DTexture?oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?oe.setTexture2DArray(T,0):oe.setTexture2D(T,0),Q.unbindTexture()},this.resetState=function(){k=0,R=0,P=null,Q.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}},Qg=class Vc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Je(t),this.near=i,this.far=r}clone(){return new Vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},e0=class extends ai{constructor(e=null,t=1,i=1,r,a,s,n,o,l=Qt,h=Qt,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gh=class extends Pt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},na=new lt,Wh=new lt,Ds=[],Xh=new gr,t0=new lt,Ia=new Mt,Da=new Aa,Ai=class extends Mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,t0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,na),Xh.copy(e.boundingBox).applyMatrix4(na),this.boundingBox.union(Xh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Aa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,na),Da.copy(e.boundingSphere).applyMatrix4(na),this.boundingSphere.union(Da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let n=0;n<i.length;n++)i[n]=r[s+n]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(i),e.ray.intersectsSphere(Da)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,na),Wh.multiplyMatrices(i,na),Ia.matrixWorld=Wh,Ia.raycast(e,Ds);for(let s=0,n=Ds.length;s<n;s++){let o=Ds[s];o.instanceId=a,o.object=this,t.push(o)}Ds.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new e0(new Float32Array(r*this.count),r,this.count,gn,Ti));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let n=this.geometry.morphTargetsRelative?1:1-s,o=r*e;a[o]=n,a.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},or=class extends ai{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,s;t?s=t:s=e*i[a-1];let n=0,o=a-1,l;for(;n<=o;)if(r=Math.floor(n+(o-n)/2),l=i[r]-s,l<0)n=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(s-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),s=this.getPoint(r),n=t||(a.isVector2?new Le:new I);return n.copy(s).sub(a).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,r=[],a=[],s=[],n=new I,o=new lt;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new I)}a[0]=new I,s[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),n.crossVectors(r[d-1],r[d]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(It(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(n,p))}s[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(It(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Uo=class extends Ri{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new Le){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},i0=class extends Uo{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Io(){let e=0,t=0,i=0,r=0;function a(s,n,o,l){e=s,t=o,i=-3*s+3*n-2*o-l,r=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,h){a(n,o,h*(o-s),h*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,h,c,u){let d=(n-s)/h-(o-s)/(h+c)+(o-n)/c,p=(o-n)/c-(l-n)/(c+u)+(l-o)/u;d*=c,p*=c,a(n,o,d,p)},calc:function(s){let n=s*s,o=n*s;return e+t*s+i*n+r*o}}}var Ns=new I,Do=new Io,No=new Io,Oo=new Io,r0=class extends Ri{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,n=Math.floor(s),o=s-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/a)+1)*a:o===0&&n===a-1&&(n=a-2,o=1);let l,h;this.closed||n>0?l=r[(n-1)%a]:(Ns.subVectors(r[0],r[1]).add(r[0]),l=Ns);let c=r[n%a],u=r[(n+1)%a];if(this.closed||n+2<a?h=r[(n+2)%a]:(Ns.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),Do.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,v),No.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,v),Oo.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),No.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Oo.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(Do.calc(o),No.calc(o),Oo.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jh(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+s+n)*l+(-3*i+3*r-2*s-n)*o+s*e+i}function a0(e,t){let i=1-e;return i*i*t}function s0(e,t){return 2*(1-e)*e*t}function n0(e,t){return e*e*t}function Na(e,t,i,r){return a0(e,t)+s0(e,i)+n0(e,r)}function o0(e,t){let i=1-e;return i*i*i*t}function l0(e,t){let i=1-e;return 3*i*i*e*t}function h0(e,t){return 3*(1-e)*e*e*t}function c0(e,t){return e*e*e*t}function Oa(e,t,i,r,a){return o0(e,t)+l0(e,i)+h0(e,r)+c0(e,a)}var qh=class extends Ri{constructor(e=new Le,t=new Le,i=new Le,r=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Le){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Oa(e,r.x,a.x,s.x,n.x),Oa(e,r.y,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},u0=class extends Ri{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Oa(e,r.x,a.x,s.x,n.x),Oa(e,r.y,a.y,s.y,n.y),Oa(e,r.z,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yh=class extends Ri{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},d0=class extends Ri{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kh=class extends Ri{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Na(e,r.x,a.x,s.x),Na(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},p0=class extends Ri{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Na(e,r.x,a.x,s.x),Na(e,r.y,a.y,s.y),Na(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jh=class extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),n=a-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(jh(n,o.x,l.x,h.x,c.x),jh(n,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Le().fromArray(r))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:i0,CatmullRomCurve3:r0,CubicBezierCurve:qh,CubicBezierCurve3:u0,EllipseCurve:Uo,LineCurve:Yh,LineCurve3:d0,QuadraticBezierCurve:Kh,QuadraticBezierCurve3:p0,SplineCurve:Jh}),f0=class extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,n=this.curves[a],o=n.getLength(),l=o===0?0:1-s/o;return n.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Fo[r.type]().fromJSON(r))}return this}},lr=class extends f0{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Yh(this.currentPoint.clone(),new Le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Kh(this.currentPoint.clone(),new Le(e,t),new Le(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new qh(this.currentPoint.clone(),new Le(e,t),new Le(i,r),new Le(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Jh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new Uo(e,t,i,r,a,s,n,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},m0=class Gc extends jt{constructor(t=[new Le(0,-.5),new Le(.5,0),new Le(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=It(a,0,Math.PI*2);let s=[],n=[],o=[],l=[],h=[],c=1/i,u=new I,d=new Le,p=new I,g=new I,v=new I,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=i;y++){let _=r+y*c*a,E=Math.sin(_),k=Math.cos(_);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*E,u.y=t[R].y,u.z=t[R].x*k,n.push(u.x,u.y,u.z),d.x=y/i,d.y=R/(t.length-1),o.push(d.x,d.y);let P=l[3*R+0]*E,N=l[3*R+1],S=l[3*R+0]*k;h.push(P,N,S)}}for(let y=0;y<i;y++)for(let _=0;_<t.length-1;_++){let E=_+y*t.length,k=E,R=E+t.length,P=E+t.length+1,N=E+1;s.push(k,R,N),s.push(P,N,R)}this.setIndex(s),this.setAttribute("position",new pt(n,3)),this.setAttribute("uv",new pt(o,2)),this.setAttribute("normal",new pt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.points,t.segments,t.phiStart,t.phiLength)}},g0=class Wc extends jt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let s=[],n=[],o=[],l=[],h=new I,c=new Le;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(n[d]/t+1)/2,c.y=(n[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new pt(n,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Os=class Xc extends jt{constructor(t=1,i=1,r=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),s=Math.floor(s);let c=[],u=[],d=[],p=[],g=0,v=[],m=r/2,f=0;y(),n===!1&&(t>0&&_(!0),i>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(p,2));function y(){let E=new I,k=new I,R=0,P=(i-t)/r;for(let N=0;N<=s;N++){let S=[],M=N/s,C=M*(i-t)+t;for(let O=0;O<=a;O++){let z=O/a,G=z*l+o,te=Math.sin(G),j=Math.cos(G);k.x=C*te,k.y=-M*r+m,k.z=C*j,u.push(k.x,k.y,k.z),E.set(te,P,j).normalize(),d.push(E.x,E.y,E.z),p.push(z,1-M),S.push(g++)}v.push(S)}for(let N=0;N<a;N++)for(let S=0;S<s;S++){let M=v[S][N],C=v[S+1][N],O=v[S+1][N+1],z=v[S][N+1];(t>0||S!==0)&&(c.push(M,C,z),R+=3),(i>0||S!==s-1)&&(c.push(C,O,z),R+=3)}h.addGroup(f,R,0),f+=R}function _(E){let k=g,R=new Le,P=new I,N=0,S=E===!0?t:i,M=E===!0?1:-1;for(let O=1;O<=a;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let C=g;for(let O=0;O<=a;O++){let z=O/a*l+o,G=Math.cos(z),te=Math.sin(z);P.x=S*te,P.y=m*M,P.z=S*G,u.push(P.x,P.y,P.z),d.push(0,M,0),R.x=G*.5+.5,R.y=te*.5*M+.5,p.push(R.x,R.y),g++}for(let O=0;O<a;O++){let z=k+O,G=C+O;E===!0?c.push(G,G+1,z):c.push(G+1,G,z),N+=3}h.addGroup(f,N,E===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},v0=class jc extends Os{constructor(t=1,i=1,r=32,a=1,s=!1,n=0,o=Math.PI*2){super(0,t,i,r,a,s,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(t){return new jc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hr=class extends lr{constructor(e){super(e),this.uuid=Vr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new lr().fromJSON(r))}return this}},_0={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,s=$h(e,0,a,i,!0),n=[];if(!s||s.next===s.prev)return n;let o,l,h,c,u,d,p;if(r&&(s=T0(e,t,s,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Fa(s,n,i,o,l,p,0),n}};function $h(e,t,i,r,a){let s,n;if(a===D0(e,t,i,r)>0)for(s=t;s<i;s+=r)n=ec(s,e[s],e[s+1],n);else for(s=i-r;s>=t;s-=r)n=ec(s,e[s],e[s+1],n);return n&&Fs(n,n.next)&&(Ba(n),n=n.next),n}function wr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Fs(i,i.next)||xt(i.prev,i,i.next)===0)){if(Ba(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Fa(e,t,i,r,a,s,n){if(!e)return;!n&&s&&R0(e,r,a,s);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,s?y0(e,r,a,s):x0(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),Ba(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=M0(wr(e),t,i),Fa(e,t,i,r,a,s,2)):n===2&&S0(e,t,i,r,a,s):Fa(wr(e),t,i,r,a,s,1);break}}}function x0(e){let t=e.prev,i=e,r=e.next;if(xt(t,i,r)>=0)return!1;let a=t.x,s=i.x,n=r.x,o=t.y,l=i.y,h=r.y,c=a<s?a<n?a:n:s<n?s:n,u=o<l?o<h?o:h:l<h?l:h,d=a>s?a>n?a:n:s>n?s:n,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&oa(a,o,s,l,n,h,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function y0(e,t,i,r){let a=e.prev,s=e,n=e.next;if(xt(a,s,n)>=0)return!1;let o=a.x,l=s.x,h=n.x,c=a.y,u=s.y,d=n.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,f=zo(p,g,t,i,r),y=zo(v,m,t,i,r),_=e.prevZ,E=e.nextZ;for(;_&&_.z>=f&&E&&E.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==a&&_!==n&&oa(o,c,l,u,h,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==a&&E!==n&&oa(o,c,l,u,h,d,E.x,E.y)&&xt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==a&&_!==n&&oa(o,c,l,u,h,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=y;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==a&&E!==n&&oa(o,c,l,u,h,d,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function M0(e,t,i){let r=e;do{let a=r.prev,s=r.next.next;!Fs(a,s)&&Zh(a,r,r.next,s)&&za(a,s)&&za(s,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(s.i/i|0),Ba(r),Ba(r.next),r=e=s),r=r.next}while(r!==e);return wr(r)}function S0(e,t,i,r,a,s){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&L0(n,o)){let l=Qh(n,o);n=wr(n,n.next),l=wr(l,l.next),Fa(n,t,i,r,a,s,0),Fa(l,t,i,r,a,s,0);return}o=o.next}n=n.next}while(n!==e)}function T0(e,t,i,r){let a=[],s,n,o,l,h;for(s=0,n=t.length;s<n;s++)o=t[s]*r,l=s<n-1?t[s+1]*r:e.length,h=$h(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(P0(h));for(a.sort(E0),s=0;s<a.length;s++)i=b0(a[s],i);return i}function E0(e,t){return e.x-t.x}function b0(e,t){let i=w0(e,t);if(!i)return t;let r=Qh(i,e);return wr(r,r.next),wr(i,i.next)}function w0(e,t){let i=t,r=-1/0,a,s=e.x,n=e.y;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===s))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do s>=i.x&&i.x>=l&&s!==i.x&&oa(n<h?s:r,n,l,h,n<h?r:s,n,i.x,i.y)&&(u=Math.abs(n-i.y)/(s-i.x),za(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&A0(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function A0(e,t){return xt(e.prev,e,t.prev)<0&&xt(t.next,e,e.next)<0}function R0(e,t,i,r){let a=e;do a.z===0&&(a.z=zo(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,C0(a)}function C0(e){let t,i,r,a,s,n,o,l,h=1;do{for(i=e,e=null,s=null,n=0;i;){for(n++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,h*=2}while(n>1);return e}function zo(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function P0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function oa(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function L0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!U0(e,t)&&(za(e,t)&&za(t,e)&&I0(e,t)&&(xt(e.prev,e,t.prev)||xt(e,t.prev,t))||Fs(e,t)&&xt(e.prev,e,e.next)>0&&xt(t.prev,t,t.next)>0)}function xt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Fs(e,t){return e.x===t.x&&e.y===t.y}function Zh(e,t,i,r){let a=Bs(xt(e,t,i)),s=Bs(xt(e,t,r)),n=Bs(xt(i,r,e)),o=Bs(xt(i,r,t));return!!(a!==s&&n!==o||a===0&&zs(e,i,t)||s===0&&zs(e,r,t)||n===0&&zs(i,e,r)||o===0&&zs(i,t,r))}function zs(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Bs(e){return e>0?1:e<0?-1:0}function U0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Zh(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function za(e,t){return xt(e.prev,e,e.next)<0?xt(e,t,e.next)>=0&&xt(e,e.prev,t)>=0:xt(e,t,e.prev)<0||xt(e,e.next,t)<0}function I0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Qh(e,t){let i=new Bo(e.i,e.x,e.y),r=new Bo(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function ec(e,t,i,r){let a=new Bo(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Ba(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Bo(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D0(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}var la=class qc{static area(t){let i=t.length,r=0;for(let a=i-1,s=0;s<i;a=s++)r+=t[a].x*t[s].y-t[s].x*t[a].y;return r*.5}static isClockWise(t){return qc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],s=[];tc(t),ic(r,t);let n=t.length;i.forEach(tc);for(let l=0;l<i.length;l++)a.push(n),n+=i[l].length,ic(r,i[l]);let o=_0.triangulate(r,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function tc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ic(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var ko=class Yc extends jt{constructor(t=new hr([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new pt(a,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:N0,_,E=!1,k,R,P,N;f&&(_=f.getSpacedPoints(c),E=!0,d=!1,k=f.computeFrenetFrames(c,!1),R=new I,P=new I,N=new I),d||(m=0,p=0,g=0,v=0);let S=o.extractPoints(h),M=S.shape,C=S.holes;if(!la.isClockWise(M)){M=M.reverse();for(let X=0,le=C.length;X<le;X++){let w=C[X];la.isClockWise(w)&&(C[X]=w.reverse())}}let O=la.triangulateShape(M,C),z=M;for(let X=0,le=C.length;X<le;X++){let w=C[X];M=M.concat(w)}function G(X,le,w){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(le,w)}let te=M.length,j=O.length;function re(X,le,w){let Se,he,ye,Q=X.x-le.x,be=X.y-le.y,q=w.x-X.x,oe=w.y-X.y,b=Q*Q+be*be,x=Q*oe-be*q;if(Math.abs(x)>Number.EPSILON){let A=Math.sqrt(b),Y=Math.sqrt(q*q+oe*oe),ae=le.x-be/A,B=le.y+Q/A,Ne=w.x-oe/Y,ve=w.y+q/Y,Ae=((Ne-ae)*oe-(ve-B)*q)/(Q*oe-be*q);Se=ae+Q*Ae-X.x,he=B+be*Ae-X.y;let Re=Se*Se+he*he;if(Re<=2)return new Le(Se,he);ye=Math.sqrt(Re/2)}else{let A=!1;Q>Number.EPSILON?q>Number.EPSILON&&(A=!0):Q<-Number.EPSILON?q<-Number.EPSILON&&(A=!0):Math.sign(be)===Math.sign(oe)&&(A=!0),A?(Se=-be,he=Q,ye=Math.sqrt(b)):(Se=Q,he=be,ye=Math.sqrt(b/2))}return new Le(Se/ye,he/ye)}let K=[];for(let X=0,le=z.length,w=le-1,Se=X+1;X<le;X++,w++,Se++)w===le&&(w=0),Se===le&&(Se=0),K[X]=re(z[X],z[w],z[Se]);let fe=[],Te,ke=K.concat();for(let X=0,le=C.length;X<le;X++){let w=C[X];Te=[];for(let Se=0,he=w.length,ye=he-1,Q=Se+1;Se<he;Se++,ye++,Q++)ye===he&&(ye=0),Q===he&&(Q=0),Te[Se]=re(w[Se],w[ye],w[Q]);fe.push(Te),ke=ke.concat(Te)}for(let X=0;X<m;X++){let le=X/m,w=p*Math.cos(le*Math.PI/2),Se=g*Math.sin(le*Math.PI/2)+v;for(let he=0,ye=z.length;he<ye;he++){let Q=G(z[he],K[he],Se);Z(Q.x,Q.y,-w)}for(let he=0,ye=C.length;he<ye;he++){let Q=C[he];Te=fe[he];for(let be=0,q=Q.length;be<q;be++){let oe=G(Q[be],Te[be],Se);Z(oe.x,oe.y,-w)}}}let Ke=g+v;for(let X=0;X<te;X++){let le=d?G(M[X],ke[X],Ke):M[X];E?(P.copy(k.normals[0]).multiplyScalar(le.x),R.copy(k.binormals[0]).multiplyScalar(le.y),N.copy(_[0]).add(P).add(R),Z(N.x,N.y,N.z)):Z(le.x,le.y,0)}for(let X=1;X<=c;X++)for(let le=0;le<te;le++){let w=d?G(M[le],ke[le],Ke):M[le];E?(P.copy(k.normals[X]).multiplyScalar(w.x),R.copy(k.binormals[X]).multiplyScalar(w.y),N.copy(_[X]).add(P).add(R),Z(N.x,N.y,N.z)):Z(w.x,w.y,u/c*X)}for(let X=m-1;X>=0;X--){let le=X/m,w=p*Math.cos(le*Math.PI/2),Se=g*Math.sin(le*Math.PI/2)+v;for(let he=0,ye=z.length;he<ye;he++){let Q=G(z[he],K[he],Se);Z(Q.x,Q.y,u+w)}for(let he=0,ye=C.length;he<ye;he++){let Q=C[he];Te=fe[he];for(let be=0,q=Q.length;be<q;be++){let oe=G(Q[be],Te[be],Se);E?Z(oe.x,oe.y+_[c-1].y,_[c-1].x+w):Z(oe.x,oe.y,u+w)}}}$(),ee();function $(){let X=a.length/3;if(d){let le=0,w=te*le;for(let Se=0;Se<j;Se++){let he=O[Se];V(he[2]+w,he[1]+w,he[0]+w)}le=c+m*2,w=te*le;for(let Se=0;Se<j;Se++){let he=O[Se];V(he[0]+w,he[1]+w,he[2]+w)}}else{for(let le=0;le<j;le++){let w=O[le];V(w[2],w[1],w[0])}for(let le=0;le<j;le++){let w=O[le];V(w[0]+te*c,w[1]+te*c,w[2]+te*c)}}r.addGroup(X,a.length/3-X,0)}function ee(){let X=a.length/3,le=0;L(z,le),le+=z.length;for(let w=0,Se=C.length;w<Se;w++){let he=C[w];L(he,le),le+=he.length}r.addGroup(X,a.length/3-X,1)}function L(X,le){let w=X.length;for(;--w>=0;){let Se=w,he=w-1;he<0&&(he=X.length-1);for(let ye=0,Q=c+m*2;ye<Q;ye++){let be=te*ye,q=te*(ye+1),oe=le+Se+be,b=le+he+be,x=le+he+q,A=le+Se+q;J(oe,b,x,A)}}}function Z(X,le,w){l.push(X),l.push(le),l.push(w)}function V(X,le,w){se(X),se(le),se(w);let Se=a.length/3,he=y.generateTopUV(r,a,Se-3,Se-2,Se-1);xe(he[0]),xe(he[1]),xe(he[2])}function J(X,le,w,Se){se(X),se(le),se(Se),se(le),se(w),se(Se);let he=a.length/3,ye=y.generateSideWallUV(r,a,he-6,he-3,he-2,he-1);xe(ye[0]),xe(ye[1]),xe(ye[3]),xe(ye[1]),xe(ye[2]),xe(ye[3])}function se(X){a.push(l[X*3+0]),a.push(l[X*3+1]),a.push(l[X*3+2])}function xe(X){s.push(X.x),s.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return O0(i,r,t)}static fromJSON(t,i){let r=[];for(let s=0,n=t.shapes.length;s<n;s++){let o=i[t.shapes[s]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Fo[a.type]().fromJSON(a)),new Yc(r,t.options)}},N0={generateTopUV:function(e,t,i,r,a){let s=t[i*3],n=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new Le(s,n),new Le(o,l),new Le(h,c)]},generateSideWallUV:function(e,t,i,r,a,s){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],v=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(o-c)<Math.abs(n-h)?[new Le(n,1-l),new Le(h,1-u),new Le(d,1-g),new Le(v,1-f)]:[new Le(o,1-l),new Le(c,1-u),new Le(p,1-g),new Le(m,1-f)]}};function O0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Ho=class Kc extends jt{constructor(t=new hr([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],s=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(s,3)),this.setAttribute("uv",new pt(n,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;la.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];la.isClockWise(y)===!0&&(g[m]=y.reverse())}let v=la.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];a.push(y.x,y.y,0),s.push(0,0,1),n.push(y.x,y.y)}for(let m=0,f=v.length;m<f;m++){let y=v[m],_=y[0]+u,E=y[1]+u,k=y[2]+u;r.push(_,E,k),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return F0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let n=i[t.shapes[a]];r.push(n)}return new Kc(r,t.curveSegments)}};function F0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var ka=class Jc extends jt{constructor(t=1,i=32,r=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(n+o,Math.PI),h=0,c=[],u=new I,d=new I,p=[],g=[],v=[],m=[];for(let f=0;f<=r;f++){let y=[],_=f/r,E=0;f===0&&n===0?E=.5/i:f===r&&l===Math.PI&&(E=-.5/i);for(let k=0;k<=i;k++){let R=k/i;u.x=-t*Math.cos(a+R*s)*Math.sin(n+_*o),u.y=t*Math.cos(n+_*o),u.z=t*Math.sin(a+R*s)*Math.sin(n+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+E,1-_),y.push(h++)}c.push(y)}for(let f=0;f<r;f++)for(let y=0;y<i;y++){let _=c[f][y+1],E=c[f][y],k=c[f+1][y],R=c[f+1][y+1];(f!==0||n>0)&&p.push(_,E,R),(f!==r-1||l<Math.PI)&&p.push(E,k,R)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},rc=class $c extends jt{constructor(t=1,i=.4,r=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:s},r=Math.floor(r),a=Math.floor(a);let n=[],o=[],l=[],h=[],c=new I,u=new I,d=new I;for(let p=0;p<=r;p++)for(let g=0;g<=a;g++){let v=g/a*s,m=p/r*Math.PI*2;u.x=(t+i*Math.cos(m))*Math.cos(v),u.y=(t+i*Math.cos(m))*Math.sin(v),u.z=i*Math.sin(m),o.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/a),h.push(p/r)}for(let p=1;p<=r;p++)for(let g=1;g<=a;g++){let v=(a+1)*p+g-1,m=(a+1)*(p-1)+g-1,f=(a+1)*(p-1)+g,y=(a+1)*p+g;n.push(v,m,y),n.push(m,f,y)}this.setIndex(n),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Yt=class extends Pa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},z0=class extends Yt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ks(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function B0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Hs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},k0=class extends Hs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(n===void 0)switch(this.getSettings_().endingStart){case Cl:a=e,n=2*t-i;break;case Pl:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Cl:s=e,o=2*i-t;break;case Pl:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,m=-u*v+2*u*g-u*p,f=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*v+(1.5+d)*g+.5*p,_=d*v-d*g;for(let E=0;E!==n;++E)a[E]=m*s[h+E]+f*s[l+E]+y*s[o+E]+_*s[c+E];return a}},H0=class extends Hs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==n;++u)a[u]=s[l+u]*c+s[o+u]*h;return a}},V0=class extends Hs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new V0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new H0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new k0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case jn:t=this.InterpolantFactoryMethodLinear;break;case qn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return jn;case this.InterpolantFactoryMethodSmooth:return qn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let n=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*n,s*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let n=0;n!==a;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,n,o,s),e=!1;break}s=o}if(r!==void 0&&B0(r))for(let n=0,o=r.length;n!==o;++n){let l=r[n];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qn,a=e.length-1,s=1;for(let n=1;n<a;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(r)o=!0;else{let c=n*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(n!==s){e[s]=e[n];let c=n*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++s}}if(a>0){e[s]=e[a];for(let n=a*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[n+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Wi.prototype.TimeBufferType=Float32Array,Wi.prototype.ValueBufferType=Float32Array,Wi.prototype.DefaultInterpolation=jn;var Ha=class extends Wi{constructor(e,t,i){super(e,t,i)}};Ha.prototype.ValueTypeName="bool",Ha.prototype.ValueBufferType=Array,Ha.prototype.DefaultInterpolation=os,Ha.prototype.InterpolantFactoryMethodLinear=void 0,Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var G0=class extends Wi{};G0.prototype.ValueTypeName="color";var W0=class extends Wi{};W0.prototype.ValueTypeName="number";var X0=class extends Hs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let h=l+n;l!==h;l+=4)Ei.slerpFlat(a,0,s,l-n,s,l,o);return a}},ac=class extends Wi{InterpolantFactoryMethodLinear(e){return new X0(this.times,this.values,this.getValueSize(),e)}};ac.prototype.ValueTypeName="quaternion",ac.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Wi{constructor(e,t,i){super(e,t,i)}};Va.prototype.ValueTypeName="string",Va.prototype.ValueBufferType=Array,Va.prototype.DefaultInterpolation=os,Va.prototype.InterpolantFactoryMethodLinear=void 0,Va.prototype.InterpolantFactoryMethodSmooth=void 0;var j0=class extends Wi{};j0.prototype.ValueTypeName="vector";var q0=class{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){n++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,n),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,n),s===n&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},Y0=new q0,K0=class{constructor(e){this.manager=e!==void 0?e:Y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};K0.DEFAULT_MATERIAL_NAME="__DEFAULT";var sc=class extends si{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vo=new lt,nc=new I,oc=new I,J0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$0=class extends J0{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lc=class extends sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(si.DEFAULT_UP),this.updateMatrix(),this.target=new si,this.shadow=new $0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hc=class extends sc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Go="\\[\\]\\.:\\/",Z0=new RegExp("["+Go+"]","g"),Wo="[^"+Go+"]",Q0="[^"+Go.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",Wo),tv=/(WCOD+)?/.source.replace("WCOD",Q0),iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),av=new RegExp("^"+ev+tv+iv+rv+"$"),sv=["material","materials","bones","map"],nv=class{constructor(e,t,i){let r=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class ga{constructor(t,i,r){this.path=i,this.parsedPath=r||ga.parseTrackName(i),this.node=ga.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new ga.Composite(t,i,r):new ga(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(t){let i=av.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=r.nodeName.substring(a+1);sv.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let n=0;n<s.length;n++){let o=s[n];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,s=i.propertyIndex;if(t||(t=ga.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[a];if(n===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=nv,St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray],St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qv=new Float32Array(1),cc=new lt,ov=class{constructor(e,t,i=0,r=1/0){this.ray=new jl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(e,t=!0,i=[]){return Xo(e,this,i,t),i.sort(uc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Xo(e[r],this,i,t);return i.sort(uc),i}};function uc(e,t){return e.distance-t.distance}function Xo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let s=e.children;for(let n=0,o=s.length;n<o;n++)Xo(s[n],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ga=new I;function li(e,t,i,r,a,s){let n=2*Math.PI*a/4,o=Math.max(s-2*a,0),l=Math.PI/4;Ga.copy(t),Ga[r]=0,Ga.normalize();let h=.5*n/(n+o),c=1-Ga.angleTo(e)/l;return Math.sign(Ga[i])===1?c*h:o/(n+o)+h+h*(1-c)}var dc=class extends ar{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;let s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;let n=new I,o=new I,l=new I(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new I,g=.5/r;for(let v=0,m=0;v<h.length;v+=3,m+=2)switch(n.fromArray(h,v),o.copy(n),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(n.x)+o.x*a,h[v+1]=l.y*Math.sign(n.y)+o.y*a,h[v+2]=l.z*Math.sign(n.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:p.set(1,0,0),u[m+0]=li(p,o,"z","y",a,i),u[m+1]=1-li(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[m+0]=1-li(p,o,"z","y",a,i),u[m+1]=1-li(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[m+0]=1-li(p,o,"x","z",a,e),u[m+1]=li(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[m+0]=1-li(p,o,"x","z",a,e),u[m+1]=1-li(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[m+0]=1-li(p,o,"x","y",a,e),u[m+1]=1-li(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[m+0]=li(p,o,"x","y",a,e),u[m+1]=1-li(p,o,"y","x",a,t);break}}};function lv(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),s={},n={},o=e[0].morphTargetsRelative,l=new jt,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.morphAttributes[p])}if(t){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in s){let u=pc(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in n){let u=n[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<n[c].length;++v)p.push(n[c][v][d]);let g=pc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function pc(e){let t,i,r,a=-1,s=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*i}let n=new t(s),o=new Pt(n,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/i;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<i;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else n.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var Ge="#101010",je="#f4f3ee",Wa='"DT Punk", Impact, sans-serif',jo='"Inter Tight", "Arial Black", Arial, sans-serif',hv=(e,t,i)=>Math.max(t,Math.min(i,e)),fc=()=>{let e=document.createElement("canvas");return e.width=e.height=512,e},cv=e=>()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Et(e,t,i){e.beginPath(),t.forEach(([r,a],s)=>s?e.lineTo(r,a):e.moveTo(r,a)),e.closePath(),i&&(e.fillStyle=i,e.fill())}function Nt(e,t,i,r,a,s,n){e.beginPath(),e.roundRect(t,i,r,a,s),n&&(e.fillStyle=n,e.fill())}function gt(e,t,i,r,a){e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function ha(e,t,i,r,a,s=128,n=128){let o=[];for(let l=0;l<t*2;l++){let h=l/(t*2)*Math.PI*2-Math.PI/2,c=l%2?r:i;o.push([s+Math.cos(h)*c,n+Math.sin(h)*c])}Et(e,o,a)}function Ot(e,t,{x:i=128,y:r=128,width:a=190,size:s=60,color:n=Ge,font:o=jo,weight:l=900,gap:h=1,stroke:c=null,strokeWidth:u=0}={}){let d=s,p=()=>{e.font=`${l} ${d}px ${o}`};for(p();d>10&&Math.max(...t.map(v=>e.measureText(v).width))>a;)d-=1,p();e.textAlign="center",e.textBaseline="middle";let g=d*h;return t.forEach((v,m)=>{let f=r+(m-(t.length-1)/2)*g;c&&(e.lineJoin="round",e.lineWidth=u,e.strokeStyle=c,e.strokeText(v,i,f)),e.fillStyle=n,e.fillText(v,i,f)}),d}function mc(e,t,i,r,a,s,{font:n=jo,weight:o=900,spacing:l=1.16,bottom:h=!1,cx:c=128,cy:u=128}={}){e.save(),e.font=`${o} ${a}px ${n}`,e.fillStyle=s,e.textAlign="center",e.textBaseline="middle";let d=[...t],p=d.map(m=>e.measureText(m).width*l),g=p.reduce((m,f)=>m+f,0),v=r+(h?g/2/i:-g/2/i);d.forEach((m,f)=>{let y=p[f]/2/i;v+=h?-y:y,e.save(),e.translate(c+Math.cos(v)*i,u+Math.sin(v)*i),e.rotate(h?v-Math.PI/2:v+Math.PI/2),e.fillText(m,0,0),e.restore(),v+=h?-y:y}),e.restore()}function qo(e,t,i,{angle:r=.55,step:a=7,weight:s=.62,from:n=-.15}={}){e.save(),t(),e.clip(),e.translate(128,128),e.rotate(r),e.fillStyle=i;for(let o=-200;o<200;o+=a){let l=Math.round(o/a)%2?a/2:0;for(let h=-200;h<200;h+=a){let c=hv((h+l)/230+o/420+.5+n,0,1),u=c*a*s;u<.45||(e.beginPath(),e.arc(h+l,o,u,0,7),e.fill())}}e.restore()}function Vs(e,t,i,r,a){let s=[];for(let n=0;n<10;n++){let o=n*Math.PI/5-Math.PI/2,l=n%2?r*.42:r;s.push([t+Math.cos(o)*l,i+Math.sin(o)*l])}Et(e,s,a)}function uv(e,t,i,r,a,s){e.save(),e.translate(t,i),e.scale(r,r),e.beginPath(),e.roundRect(-30,-36,60,50,22),e.fillStyle=a,e.fill(),e.fillRect(-17,8,34,22),gt(e,-13,-8,10,s),gt(e,13,-8,10,s),Et(e,[[0,2],[-5,12],[5,12]],s),e.fillStyle=s;for(let n=-1;n<2;n++)e.fillRect(n*9-1.2,18,2.4,12);e.restore()}function dv(e,t,i,r,a,s,n){e.fillStyle=s;for(let o=0;o<r;){let l=1+n()*3;e.fillRect(t+o,i,l,a),o+=l+1+n()*3}}var gc=(e,t,i,r,a,s,n,o=14)=>{e.save(),e.beginPath(),e.rect(t,i,r,a),e.clip(),e.fillStyle=s,e.fillRect(t,i,r,a),e.fillStyle=n;for(let l=-a;l<r+a;l+=o*2)Et(e,[[t+l,i+a],[t+l+o,i+a],[t+l+o+a,i],[t+l+a,i]],n);e.restore()};function cr(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?Ge:je:e===Ge?je:Ge}var pv={ask(e,t){Nt(e,26,40,204,140,34,t),Et(e,[[70,170],[58,226],[124,172]],t),Ot(e,["ASK","DEN"],{y:110,size:62,color:cr(t),font:Wa,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),Nt(e,18,84,220,88,44,t),Nt(e,88,84,80,88,4,je);for(let[i,r]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])gt(e,i,r,5,Ge);e.restore(),Ot(e,["OUCH"],{y:222,size:44,font:Wa,weight:400,color:je})},camera(e,t){Nt(e,28,76,200,130,16,Ge),Nt(e,86,52,70,34,8,Ge),gt(e,128,142,48,je),gt(e,128,142,34,Ge),gt(e,116,130,9,je),gt(e,200,98,9,t)},file(e,t){Et(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],je),Et(e,[[160,26],[200,66],[160,66]],"#9c9c98"),Ot(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===je?Ge:t,gap:1.1})},cursor(e,t){ha(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),Et(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],Ge),e.lineWidth=2.4,e.strokeStyle=je,e.stroke(),e.restore()},receipt(e,t){let i=[[52,22],[204,22]];for(let r=0;r<=8;r++)i.push([204-r*19,232-(r%2?14:0)]);Et(e,i,je),e.fillStyle="#7d7d79";for(let r=0;r<4;r++)e.fillRect(70,48+r*22,r%2?76:116,8);Ot(e,["$$$"],{y:176,size:62,color:t===je?Ge:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=je,e.fill(),Et(e,[[176,186],[214,236],[136,200]],je),Ot(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===je?Ge:t,font:Wa,weight:400})},root(e){Nt(e,24,44,208,168,8,Ge),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=je,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),Ot(e,["x"],{y:130,width:60,size:60,color:je,font:Wa,weight:400})},sun(e,t){ha(e,14,118,84,t),gt(e,128,128,70,je),Nt(e,66,100,54,36,12,Ge),Nt(e,136,100,54,36,12,Ge),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=Ge,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){ha(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),Nt(e,-16,-40,32,130,12,Ge),gt(e,0,-56,38,Ge),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),Nt(e,-92,-48,184,96,12,je),e.fillStyle=t===je?Ge:t,e.fillRect(-24,-48,116,96),e.restore(),Ot(e,["CTRL+Z"],{width:150,size:36,color:Ge})},pencil(e,t){e.save(),e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=Ge,e.fillRect(-112,-22,28,44),Et(e,[[52,-22],[100,0],[52,22]],je),Et(e,[[84,-7],[100,0],[84,7]],Ge),e.restore()},car(e,t){Nt(e,22,118,212,64,22,t),Et(e,[[66,122],[96,72],[168,72],[198,122]],t),Et(e,[[86,118],[104,86],[128,86],[128,118]],Ge),Et(e,[[138,118],[138,86],[162,86],[180,118]],Ge),gt(e,78,184,24,Ge),gt(e,180,184,24,Ge),gt(e,78,184,9,je),gt(e,180,184,9,je)},house(e,t){Et(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=je,e.fillRect(52,122,152,100),e.fillStyle=Ge,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){Nt(e,26,26,204,204,26,Ge),e.lineWidth=7,e.strokeStyle=je,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[i,r]of[[74,80],[72,180],[184,86],[182,176]])gt(e,i,r,18,t)},fork(e,t){gt(e,128,128,112,je),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===je?"#b5b5b1":t,e.stroke(),e.fillStyle=Ge,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),Nt(e,84,106,36,22,10,Ge),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){ha(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=Ge,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){Nt(e,22,62,212,132,66,Ge),[28,58,92,46,76,34,54,22].forEach((i,r)=>Nt(e,52+r*21.5,128-i/2,11,i,5.5,r%3===2?t:je))},bot(e,t){Nt(e,40,62,176,152,28,je),e.fillStyle=Ge,e.fillRect(122,28,12,38),gt(e,128,26,12,t===je?Ge:t),gt(e,94,124,18,Ge),gt(e,162,124,18,Ge),e.fillStyle=Ge,e.fillRect(88,172,80,12)}};function fv(e,t,i,r,a){let s=r===je?"#cfcfca":r;gt(e,128,128,122,Ge),gt(e,128,128,86,s),qo(e,()=>{e.beginPath(),e.arc(128,128,86,0,7)},Ge,{step:6.5,weight:.5,angle:.7,from:-.22}),e.lineWidth=2,e.strokeStyle=je,e.beginPath(),e.arc(128,128,117,0,7),e.stroke(),e.lineWidth=3,e.beginPath(),e.arc(128,128,89,0,7),e.stroke();let[n,o]=i;mc(e,n,103,-Math.PI/2,19,je),mc(e,o,103,Math.PI/2,15,je,{bottom:!0}),Vs(e,22,128,8,je),Vs(e,234,128,8,je),e.save(),e.translate(128,128),e.rotate((a()-.5)*.24),e.scale(.56,.56),e.translate(-128,-128),pv[t](e,r===je?"#8a8a86":r),e.restore()}var ca=(e,t)=>{let i=[];for(let r of e.split(" ")){let a=i[i.length-1];a&&`${a} ${r}`.length<=t?i[i.length-1]=`${a} ${r}`:i.push(r)}return i},vc=[(e,t,i,r)=>{let a=i===je?je:i,s=cr(a);ha(e,18,122,98,Ge,133,134),ha(e,18,118,94,a),qo(e,()=>{let n=[];for(let o=0;o<36;o++){let l=o/36*Math.PI*2-Math.PI/2,h=o%2?94:118;n.push([128+Math.cos(l)*h,128+Math.sin(l)*h])}Et(e,n)},s===Ge?"rgba(0,0,0,.72)":"rgba(255,255,255,.5)",{step:7,weight:.52}),e.save(),e.translate(128,128),e.rotate(-.1+r()*.1),e.translate(-128,-128),Ot(e,ca(t,8),{width:164,size:66,y:126,color:s,gap:1.02,stroke:s===Ge?je:Ge,strokeWidth:6}),e.restore(),Ot(e,["NOT RATED"],{y:200,width:90,size:13,color:s})},(e,t,i,r)=>{let a=i===je?Ge:i;e.save(),e.translate(128,128),e.rotate(-.12),e.translate(-128,-128),e.beginPath(),e.roundRect(8,58,240,140,10),e.fillStyle=je,e.fill();for(let[s,n]of[[8,128],[248,128]])e.save(),e.globalCompositeOperation="destination-out",gt(e,s,n,15,"#000"),e.restore();e.fillStyle=a,e.fillRect(16,66,224,25),Ot(e,["ADMIT ONE"],{y:79,width:200,size:18,color:cr(a)===Ge?Ge:je,weight:800});for(let s=95;s<190;s+=8)e.fillStyle="#8c8c88",e.fillRect(190,s,2.4,4.4);Ot(e,ca(t,11),{x:102,y:136,width:158,size:42,color:Ge,gap:1.05}),dv(e,198,100,40,62,Ge,r),Ot(e,["N\xBA 00"+(10+Math.floor(r()*89))],{x:218,y:176,width:40,size:12,color:Ge}),e.restore()},(e,t,i)=>{let r=i===je?"#cfcfca":i;e.save(),e.translate(128,128),e.rotate(.08),e.translate(-128,-128),Nt(e,6,44,244,168,12,Ge),gc(e,14,52,228,26,r,Ge),gc(e,14,178,228,26,r,Ge),Et(e,[[46,96],[62,124],[30,124]],r),Ot(e,["!"],{x:46,y:113,size:22,color:cr(r)}),Ot(e,["WARNING"],{x:146,y:98,width:150,size:30,color:r,weight:900}),Ot(e,ca(t,13),{x:128,y:146,width:214,size:38,color:je,gap:1.05}),e.restore()},(e,t,i,r)=>{let a=ca(t,9),s=i===je?"#cfcfca":i,n=[[jo,900],[Wa,400],['Georgia, "Times New Roman", serif',700]],o=a.length,l=Math.min(64,190/o),h=0;a.forEach((c,u)=>{let d=c.split(" "),p=128+(u-(o-1)/2)*l,g=d.map((y,_)=>{let[E,k]=n[(h+_)%n.length];return e.font=`${k} ${l*.62}px ${E}`,e.measureText(y).width+18}),v=g.reduce((y,_)=>y+_,0),m=Math.min(1,226/v),f=128-v*m/2;d.forEach((y,_)=>{let[E,k]=n[h%n.length],R=[Ge,je,s,je][h%4];h++,e.save();let P=f+g[_]*m/2;e.translate(P,p+(r()-.5)*6),e.rotate((r()-.5)*.16);let N=g[_]*m/2,S=l*.47,M=[];for(let C=0;C<=10;C++)M.push([-N+C/10*N*2,-S+(r()-.5)*3.4]);for(let C=0;C<=10;C++)M.push([N-C/10*N*2,S+(r()-.5)*3.4]);Et(e,M,R),Ot(e,[y],{x:0,y:1,width:g[_]*m-10,size:l*.62,color:cr(R),font:E,weight:k}),e.restore(),f+=g[_]*m})})},(e,t,i,r)=>{let a=i===je?"#cfcfca":i;gt(e,128,118,104,Ge),gt(e,128,118,96,a),qo(e,()=>{e.beginPath(),e.arc(128,118,96,0,7)},cr(a)===Ge?"rgba(0,0,0,.6)":"rgba(255,255,255,.45)",{step:6,weight:.55,angle:-.5}),uv(e,128,70,1.05,je,Ge),Vs(e,52,70,13,je),Vs(e,204,70,13,je);let s=ca(t,12),n=s.length>1?74:54;Et(e,[[6,150-n/2+12],[38,150-n/2+12],[38,150+n/2+12],[6,150+n/2+12],[20,162]],Ge),Et(e,[[250,150-n/2+12],[218,150-n/2+12],[218,150+n/2+12],[250,150+n/2+12],[236,162]],Ge),Nt(e,26,150-n/2,204,n,3,je),e.strokeStyle=Ge,e.lineWidth=3,e.strokeRect(31,150-n/2+5,194,n-10),Ot(e,s,{y:150,width:180,size:44,color:Ge,gap:1.04})}],_c=["$2.99","1 NIGHT","$0.99","NEW","REWIND","50\xA2","STAFF PICK","2 FOR 1"];function mv(e,t,i){let r=i===je?je:i;gt(e,128,128,116,r),e.lineWidth=5,e.strokeStyle=cr(r),e.setLineDash([3,9]),e.lineCap="round",e.beginPath(),e.arc(128,128,100,0,7),e.stroke(),e.setLineDash([]),Ot(e,ca(t,6),{width:170,size:84,color:cr(r),gap:.98})}var gv={portfolio:["ask","MAKE THE LOGO BIGGER",["APPROVED BY NOBODY","NO REVISIONS"]],basepoint:["bandaid","TAKE YOUR VITAMINS",["DOCTOR NOT INCLUDED","SHAKE WELL"]],"street-observations":["camera","SAY CHEESE",["NO FLASH NO MERCY","SHOT ON THE RUN"]],template:["file","BE KIND REWIND",["FINAL FINAL FINAL","DO NOT OVERWRITE"]],prime:["cursor","ONE MORE CLICK",["ADD TO CART OR ELSE","NO REFUNDS"]],sabsus:["receipt","CA-CHING!",["CASH ONLY FOREVER","KEEP THE CHANGE"]],janna:["bonjour","MERCI BEAUCOUP",["LE\xC7ON NUM\xC9RO UN","R\xC9P\xC9TEZ"]],"root-framer":["root","SHOW YOUR WORK",["MATH IS PUNK","NO CALCULATORS"]],sunfreaks:["sun","WEAR SUNSCREEN",["SPF 50 FOREVER","STAY WEIRD"]],airtexno:["wrench","IT WORKS ON MY MACHINE",["HAVE YOU TRIED RESTARTING","SERVICE DUE"]],"concept-undo-studio":["eraser","NEW RELEASE",["NOTHING IS PERMANENT","CTRL+Z"]],"concept-root-square-explorations":["pencil","STILL A SKETCH",["DO NOT ERASE","DRAFT 41"]],"concept-al-futtaim-themes":["car","CAN IT POP MORE?",["CHECK ENGINE LIGHT","NO PARKING"]],"sabsus-platform":["fork","ORDER UP!",["THE KITCHEN IS OPEN","TABLE 12"]],mortgage:["house","SWEET LOAN",["INTEREST NOT INCLUDED","SIGN HERE"]],node:["nodes","IF THIS THEN WHY",["ALL WIRED UP","DO NOT UNPLUG"]],restaurant:["fork","TABLE FOR TWO",["NO SUBSTITUTIONS","TIP YOUR WAITER"]],wallet:["scissors","BAD HAIR DAY",["JUST THE ENDS PLEASE","WALK-INS OK"]],wave:["wave","TURN IT UP",["LOUD IS A FEATURE","NO SKIPPING"]],"experiment-chat-portfolio":["bot","NOT A BOT",["ASK ME ANYTHING","BEEP BOOP"]]};function vv(e,t){let i=fc(),r=i.getContext("2d"),a=14;for(let n=0;n<32;n++){let o=n/32*Math.PI*2;r.drawImage(e,Math.cos(o)*a,Math.sin(o)*a)}r.globalCompositeOperation="source-in",r.fillStyle=je,r.fillRect(0,0,512,512),r.globalCompositeOperation="source-over",r.drawImage(e,0,0),r.globalCompositeOperation="source-atop";for(let n=0;n<1500;n++){r.globalAlpha=.08+t()*.3,r.fillStyle=t()<.5?"#000":"#fff";let o=.6+t()*t()*3;r.fillRect(t()*512,t()*512,o,o)}r.strokeStyle="#fff";for(let n=0;n<16;n++){r.globalAlpha=.12+t()*.3,r.lineWidth=.6+t()*.9;let o=t()*512,l=t()*512,h=-.7+t()*.4,c=30+t()*140;r.beginPath(),r.moveTo(o,l),r.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),r.stroke()}for(let n=0;n<90;n++){let o=t()*7,l=512*(.36+t()*.14);r.globalAlpha=.2+t()*.5,r.fillStyle=je,r.fillRect(512/2+Math.cos(o)*l,512/2+Math.sin(o)*l,1+t()*5,1+t()*3)}r.globalAlpha=.13;let s=r.createLinearGradient(512*.1,0,512*.72,512*.9);return s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.46,"rgba(255,255,255,1)"),s.addColorStop(.6,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,512,512),r.globalAlpha=1,r.globalCompositeOperation="source-over",i}function Yo(e,t){let i=fc(),r=cv(t),a=i.getContext("2d");return a.scale(2,2),e(a,r),vv(i,r)}function xc(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=null;for(let o=0;o<r.length;o+=4){let l=r[o],h=r[o+1],c=r[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,s=[l,h,c])}if(a<60)return null;let n=238/Math.max(...s);return`rgb(${s.map(o=>Math.round(o*n)).join(",")})`}function yc(e,t=0,i=null){let r=gv[e];if(!r)return[];let[a,s,n]=r,o=i||je,l=t*131+7;return[Yo((h,c)=>vc[t%vc.length](h,s,o,c),l),Yo((h,c)=>fv(h,a,n,o,c),l+1),Yo(h=>mv(h,_c[t%_c.length],o),l+2)]}var vi=16,ua=48,Gs=[3,11,9,8,7],Ko=Gs.reduce((e,t)=>e+t,0),Xa=22,Jo=2,da=5,Ar=Ko*vi,_v=Xa*ua,ja=Ar*da+_v,kt=()=>new I,_i=e=>e*e*(3-2*e),xv=e=>Math.max(0,Math.min(1,e));function yv(e,t){let i=ja*Jo,r=new Float32Array(i*3),a=new Float32Array(i*3),s=new Float32Array(i*4),n=new jt,o=new Pt(r,3).setUsage(Yn),l=new Pt(a,3).setUsage(Yn),h=new Pt(s,4).setUsage(Yn);n.setAttribute("position",o),n.setAttribute("normal",l),n.setAttribute("aG",h);let c=[],u=(ee,L,Z)=>{for(let V=0;V<L-1;V++)for(let J=0;J<Z;J++){let se=ee+V*Z+J,xe=ee+V*Z+(J+1)%Z,X=se+Z,le=xe+Z;c.push(se,xe,X,xe,le,X)}};for(let ee=0;ee<Jo;ee++){let L=ee*ja;for(let Z=0;Z<da;Z++)u(L+Z*Ar,Ko,vi);u(L+da*Ar,Xa,ua)}n.setIndex(c);let d={value:0},p=new Yt({color:1184278,roughness:.5,metalness:0,envMap:e,envMapIntensity:1.65}),g=t(.1);p.onBeforeCompile=(ee,L)=>{g(ee,L),ee.uniforms.uRubber=d,ee.vertexShader=ee.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aG;varying vec4 vG;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vG = aG;`).replace("vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;","vBoneY = (modelMatrix * vec4(transformed, 1.)).y;"),ee.fragmentShader=ee.fragmentShader.replace("#include <common>",`#include <common>
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
 }`)};let v=new Mt(n,p);v.frustumCulled=!1,v.visible=!1;let m=kt(),f=kt(),y=kt(),_=kt(),E=kt(),k=kt(),R=kt(),P=kt(),N=kt(),S=kt(),M=kt(),C=(ee,L,Z,V,J,se)=>{r[ee*3]=L.x,r[ee*3+1]=L.y,r[ee*3+2]=L.z,s[ee*4]=Z,s[ee*4+1]=V,s[ee*4+2]=J,s[ee*4+3]=se},O=(ee,L,Z,V,J,se)=>{let xe=se*se,X=xe*se;return ee.x=.5*(2*Z.x+(V.x-L.x)*se+(2*L.x-5*Z.x+4*V.x-J.x)*xe+(3*Z.x-L.x-3*V.x+J.x)*X),ee.y=.5*(2*Z.y+(V.y-L.y)*se+(2*L.y-5*Z.y+4*V.y-J.y)*xe+(3*Z.y-L.y-3*V.y+J.y)*X),ee.z=.5*(2*Z.z+(V.z-L.z)*se+(2*L.z-5*Z.z+4*V.z-J.z)*xe+(3*Z.z-L.z-3*V.z+J.z)*X),ee},z=Array.from({length:8},kt),G=[1.3,1.17,1.05,.95];function te(ee,L,Z,V,J,se,xe){let X=ee*ja+L*Ar;z[1].copy(Z[0]),z[2].copy(Z[1]),z[3].copy(Z[2]),z[4].copy(Z[3]),z[5].copy(Z[4]),z[0].copy(z[1]).multiplyScalar(2).sub(z[2]),R.copy(z[5]).sub(z[4]).normalize(),z[6].copy(z[5]).addScaledVector(R,V*1.05),z[7].copy(z[6]).addScaledVector(R,V);let le=0,w=0,Se=[0,0,0,0];E.copy(z[1]);let he=0;for(let oe=1;oe<=4;oe++)he+=z[oe].distanceTo(z[oe+1]||z[oe]),oe<=4&&(Se[oe-1]=he);let ye=0,Q=Gs.length-1,be=!1,q=0;for(let oe=0;oe<Gs.length;oe++){let b=Gs[oe];for(let x=0;x<b;x++,w++){let A=x/b;O(_,z[oe],z[oe+1],z[oe+2],z[Math.min(7,oe+3)],A),O(R,z[oe],z[oe+1],z[oe+2],z[Math.min(7,oe+3)],A+.02),m.copy(R).sub(_).normalize(),le+=w?_.distanceTo(E):0,E.copy(_),f.copy(xe).addScaledVector(m,-xe.dot(m)).normalize(),y.copy(m).cross(f).normalize();let Y;oe===0?Y=G[0]*(1.02+.1*A):oe<Q?Y=(G[oe-1]+(G[oe]-G[oe-1])*_i(A))*(1-.075*Math.sin(Math.PI*A)):Y=G[3]*Math.sqrt(Math.max(0,1-A*A)),ye=V*Y*se;let ae=oe===1?A:oe>1?1:0,B=J&&oe===1&&ae>J-.16&&ae<=J;if(J&&(oe>1||oe===1&&ae>J)){be||(be=!0,q=ye),O(_,z[1],z[2],z[3],z[4],J),R.copy(_),O(_,z[0],z[1],z[2],z[3],0),_.copy(R),ye=V*.94*se;for(let ve=0;ve<vi;ve++){let Ae=ve/vi*Math.PI*2;M.copy(_).addScaledVector(f,Math.cos(Ae)*ye*.92).addScaledVector(y,Math.sin(Ae)*ye),C(X+w*vi+ve,M,(ve/vi+.5)%1-.5,le,0,1)}continue}B&&(ye*=1+.1*_i(xv(1-Math.abs((ae-(J-.08))/.08))));let Ne=0;for(let ve=0;ve<3;ve++)Ne=Math.max(Ne,Math.exp(-(((le-Se[ve+1-1])/(.22*(ve?.85:1)))**2)));for(let ve=0;ve<vi;ve++){let Ae=ve/vi*Math.PI*2;M.copy(_).addScaledVector(f,Math.cos(Ae)*ye*.93).addScaledVector(y,Math.sin(Ae)*ye),C(X+w*vi+ve,M,(ve/vi+.5)%1-.5,le,Ne,1)}}}}let j=kt(),re=kt(),K=kt(),fe=kt(),Te=kt(),ke=[0,0,0,0];function Ke(ee,L,Z,V,J,se,xe,X){let le=ee*ja+da*Ar;j.set(0,0,0),re.set(0,0,0);for(let Q=0;Q<4;Q++)j.add(L[Q]),re.add(Z[Q]);j.multiplyScalar(.25),re.multiplyScalar(.25),fe.copy(L[0]).sub(L[3]);let w=fe.length()/2+se*1.28;fe.normalize(),Te.copy(Z[0]).sub(Z[3]);let Se=Te.length()/2+.46;Te.normalize(),K.copy(V);let he=K.distanceTo(re)+re.distanceTo(j)+.32,ye=0;for(let Q=0;Q<Xa;Q++){let be=Q/(Xa-1),q,oe,b;if(be<.3){let A=be/.3;_.copy(K).addScaledVector(J,.7*(1-A)).lerp(re,_i(A)*.55),q=.98+(Se-.98)*_i(A)*.6,oe=.72+(.56-.72)*_i(A)}else if(be<.5){let A=(be-.3)/.2;E.copy(K).lerp(re,.55),_.copy(E).lerp(re,_i(A)),q=.98+(Se-.98)*.6+(Se-(.98+(Se-.98)*.6))*_i(A),oe=.56+(.5-.56)*_i(A)}else{let A=(be-.5)/.5;if(_.copy(re).lerp(j,A),A>.9&&_.addScaledVector(R.copy(j).sub(re).normalize(),(A-.9)*2.4),q=Se+(w-Se)*_i(A),oe=.5+(.42-.5)*_i(A),A>.92){let Y=(A-.92)/.08,ae=Math.sqrt(Math.max(0,1-Y*Y*.86));q*=.9+.1*ae,oe*=ae}}Q&&(ye+=_.distanceTo(E.copy(S))),S.copy(_),be<.5?m.copy(re).sub(K).normalize():m.copy(j).sub(re).normalize(),N.copy(X).addScaledVector(m,-X.dot(m)).normalize(),y.copy(m).cross(N).normalize();let x=xe;for(let A=0;A<4;A++)ke[A]=R.copy(L[A]).sub(j).dot(y);for(let A=0;A<ua;A++){let Y=A/ua*Math.PI*2,ae=Math.cos(Y),B=Math.sin(Y),Ne=Math.sign(B)*Math.abs(B)**.62*q*x,ve=Math.sign(ae)*Math.abs(ae)**.82*oe*x;if(ae>0&&be>.62){let Ae=0;for(let Re=0;Re<4;Re++)Ae=Math.max(Ae,Math.exp(-(((Ne-ke[Re])/.24)**2)));ve+=Ae*.16*_i((be-.62)/.3)*x}M.copy(_).addScaledVector(y,Ne).addScaledVector(N,ve),C(le+Q*ua+A,M,q?Math.max(-1,Math.min(1,Ne/(q*x||1))):0,ye,he,0)}}}function $(){let ee=(L,Z,V)=>{for(let J=0;J<Z;J++)for(let se=0;se<V;se++){let xe=L+J*V+se,X=L+J*V+(se+1)%V,le=L+J*V+(se+V-1)%V,w=L+Math.min(Z-1,J+1)*V+se,Se=L+Math.max(0,J-1)*V+se,he=r[X*3]-r[le*3],ye=r[X*3+1]-r[le*3+1],Q=r[X*3+2]-r[le*3+2],be=r[w*3]-r[Se*3],q=r[w*3+1]-r[Se*3+1],oe=r[w*3+2]-r[Se*3+2],b=ye*oe-Q*q,x=Q*be-he*oe,A=he*q-ye*be,Y=Math.hypot(b,x,A);if(Y<1e-7){b=be,x=q,A=oe;let ae=Math.hypot(b,x,A)||1;b/=ae,x/=ae,A/=ae}else b/=Y,x/=Y,A/=Y;a[xe*3]=b,a[xe*3+1]=x,a[xe*3+2]=A}};for(let L=0;L<Jo;L++){let Z=L*ja;for(let V=0;V<da;V++)ee(Z+V*Ar,Ko,vi);ee(Z+da*Ar,Xa,ua)}}return{mesh:v,finger:te,palm:Ke,commit(ee){d.value=ee==="full"?1:0,$(),o.needsUpdate=!0,l.needsUpdate=!0,h.needsUpdate=!0,v.visible=!0},hide(){v.visible=!1}}}var qa=new I(0,0,1),Mc=new I(1,0,0),Ht=(e,t,i)=>Math.max(t,Math.min(i,e)),vt=(e,t,i)=>e+(t-e)*i,Ws=e=>e*e*(3-2*e);function $o(e,t=0){let i=new Is;i.background=new Je(526346);let r=(n,o,l,h,c,u)=>{let d=new Mt(new oi(n,o),new Gi({color:new Je(u,u,u),side:Mi}));d.position.set(l,h,c),d.lookAt(0,0,0),i.add(d)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2),t&&r(14,10,0,1,10,t);let a=new Ao(e),s=a.fromScene(i,.025).texture;return a.dispose(),s}function Sc(e=256,t=3){let i=document.createElement("canvas");i.width=i.height=e;let r=i.getContext("2d"),a=r.createImageData(e,e);for(let n=0;n<a.data.length;n+=4){let o=120+Math.random()*90;a.data[n]=a.data[n+1]=a.data[n+2]=o,a.data[n+3]=255}r.putImageData(a,0,0);let s=new or(i);return s.wrapS=s.wrapT=es,s.repeat.set(t,t),s}var Xi=(e,t,i,r,a=0,s=0,n=0)=>(a&&e.rotateX(a),s&&e.rotateY(s),n&&e.rotateZ(n),e.translate(t,i,r),e),Mv=e=>e.index?e.toNonIndexed():e,Zo=e=>{let t=e.map(Mv);return t.forEach(i=>{Object.keys(i.attributes).forEach(r=>{r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r)})}),lv(t)};function Xs(e,t,i,r,a,s,n,o,l){return e.moveTo(t+s,i),e.lineTo(r-n,i),e.quadraticCurveTo(r,i,r,i+n),e.lineTo(r,a-o),e.quadraticCurveTo(r,a,r-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,i+s),e.quadraticCurveTo(t,i,t+s,i),e}function Qo(e,t,i,r=0,a=0){return Xs(new hr,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}function Sv(e,t,i,r=0,a=0){return Xs(new lr,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}var Ci=18.7,Pi=10.3,js=2.5,Tv={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},xi={w:7.9,h:4.9,y:-.15},qs={x:5.25,y:-.15},ur=(e,t,i=0)=>{let{x0:r,x1:a,y0:s,y1:n,outer:o,inner:l}=Tv,h=r-i,c=a+i,u=s-i,d=n+i,p=o+i*.6,g=l+i*.6,v=new e;return t<0?Xs(v,-c,u,-h,d,p,g,g,p):Xs(v,h,u,c,d,g,p,p,g)};function Ev(){let e=1024/Ci,t=564/Pi,i=1024/2048,r=y=>(y+Ci/2)*e,a=y=>(Pi/2-y)*t,s=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=564,y},n=s(),o=s(),l=s(),h=n.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=y=>{let _=document.createElement("canvas");return _.width=_.height=6,y(_.getContext("2d")),_};h.fillStyle=h.createPattern(d(y=>{y.fillStyle="#050505",y.fillRect(0,0,6,6),y.fillStyle="#121212",y.fillRect(.5,.5,5,5),y.fillStyle="#1f1f1f",y.fillRect(.5,.5,5,1),y.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(y=>{y.fillStyle="#242424",y.fillRect(0,0,6,6),y.fillStyle="#c8c8c8",y.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=y=>{y.beginPath(),y.roundRect(r(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),y.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*i),h.fillStyle="#242424",h.fillRect(0,a(g)-3*i,1024,3*i),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*i);let v='"Inter Tight", Arial, sans-serif',m=(y,_)=>{y.fillStyle=_,y.font=`500 ${37*i}px ${v}`,y.textBaseline="middle","letterSpacing"in y&&(y.letterSpacing=`${4*i}px`),y.textAlign="right",y.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),a(4.35)),y.textAlign="left",y.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),a(4.35)),y.beginPath(),y.moveTo(r(0),a(4.72)),y.lineTo(r(.34),a(4.05)),y.lineTo(r(-.34),a(4.05)),y.closePath(),y.fill()};m(h,"#3a3a3a"),m(c,"#f0f0f0");for(let y=0;y<240;y++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*i*1.4;let _=Math.random()*1024,E=Math.random()*564,k=Math.random()*6.28,R=(10+Math.random()*120)*i;h.beginPath(),h.moveTo(_,E),h.lineTo(_+Math.cos(k)*R,E+Math.sin(k)*R),h.stroke()}for(let y=0;y<420;y++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let f=(y,_)=>{let E=new or(y);return _&&(E.colorSpace=Tt),E.anisotropy=8,E};return{map:f(n,!0),bump:f(o),rough:f(l)}}function bv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let r=4;r<128;r+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,r,0,6.2832),t.stroke();let i=new or(e);return i.colorSpace=Tt,i}function el(e){let t=js/2,i=Ev(),r=new Yt({map:i.map,bumpMap:i.bump,bumpScale:1.2,roughnessMap:i.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new Yt({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:Sc(256,5)}),s=new Yt({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),n=new Yt({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new Yt({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new Yt({map:bv(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new z0({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=Xi(new dc(Ci,Pi,js-c,3,.14),0,0,-c/2),d=Qo(Ci-.06,Pi-.06,.2);d.holes.push(ur(lr,-1),ur(lr,1));let p=new ko(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,v=p.attributes.uv;for(let C=0;C<g.count;C++)v.setXY(C,(g.getX(C)+Ci/2)/Ci,(g.getY(C)+Pi/2)/Pi);p.translate(0,0,t-c);let m=(C,O)=>{let z=C;return z.holes.push(O),new ko(z,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},f=[Xi(m(ur(hr,-1,.16),ur(lr,-1)),0,0,t),Xi(m(ur(hr,1,.16),ur(lr,1)),0,0,t),Xi(m(Qo(xi.w+.36,xi.h+.36,.16,0,xi.y),Sv(xi.w+.06,xi.h+.06,.08,0,xi.y)),0,0,t),Xi(new ar(Ci-.5,.09,.06),0,3.5,t+.02)],y=new hr;y.absarc(0,0,.98,0,Math.PI*2,!1);let _=new lr;_.absarc(0,0,.6,0,Math.PI*2,!0),y.holes.push(_);let E=[new ko(y,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let C=0;C<6;C++){let O=C/6*Math.PI*2;E.push(Xi(new ar(.2,.44,.1),Math.cos(O)*.46,Math.sin(O)*.46,.05,0,0,O+Math.PI/2))}E.push(Xi(new Os(.06,.06,.08,12),0,0,.04,Math.PI/2));let k=new g0(1,56),R=Zo([new Ho(ur(hr,-1),12),new Ho(ur(hr,1),12)]);R.translate(0,0,t+.012);let P=Qo(xi.w,xi.h,.06,0,0),N=new Ho(P,6),S=N.attributes.position,M=N.attributes.uv;for(let C=0;C<S.count;C++)M.setXY(C,S.getX(C)/xi.w+.5,S.getY(C)/xi.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:r,lips:Zo(f),gloss:s,floor:Xi(new oi(Ci-.4,Pi-.4),0,0,t-c+.004),cavity:n,hub:Zo(E),white:o,pack:k,packMat:l,glassGeo:R,glass:h,labelGeo:N,spineGeo:Xi(new oi(16.6,1.72),0,-Pi/2-.006,-.08,Math.PI/2),stickerGeo:new oi(1,1),hit:new ar(Ci,Pi,js)}}var wv=[{x:-7.1,y:3.46,size:3.7,turn:-.13,over:!0},{x:7.1,y:3.46,size:3.7,turn:.11,over:!0},{x:3.3,y:-3.84,size:2.42,turn:-.2}],Tc=e=>{let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);let r=new or(t);return r.colorSpace=Tt,r},pa=Tc("#ffffff"),Ec=Tc("rgba(0,0,0,0)");function tl(e,t=0){let i=new nr,r=(h,c)=>{let u=new Mt(h,c);return i.add(u),u};r(e.body,e.plastic),r(e.floor,e.cavity),r(e.slab,e.front),r(e.lips,e.gloss);let a=[-qs.x,qs.x].map(h=>{let c=r(e.pack,e.packMat);c.position.set(h,qs.y,e.FRONT-e.WALL+.012);let u=r(e.hub,e.white);return u.position.set(h,qs.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});r(e.glassGeo,e.glass);let s=()=>new Yt({map:pa,emissiveMap:pa,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),n=r(e.labelGeo,s());n.position.set(0,xi.y,e.FRONT+.008),n.rotation.z=t;let o=r(e.spineGeo,s()),l=wv.map((h,c)=>{let u=r(e.stickerGeo,new Yt({map:Ec,emissiveMap:Ec,color:16777215,emissive:16777215,emissiveIntensity:.42,roughness:.36,envMap:e.env,envMapIntensity:.75,alphaTest:.5}));return u.position.set(h.x+t*3,h.y-t*2,e.FRONT+(h.over?.085:.03)+c*.004),u.scale.setScalar(h.size),u.rotation.z=h.turn+t*9,u});return{group:i,reels:a,label:n,spine:o,stickers:l}}function bc(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=[16,16,16];for(let l=0;l<r.length;l+=4){let h=r[l],c=r[l+1],u=r[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,s=[h,c,u])}if(a<60)return"#141414";let n=Math.max(...s),o=135/n;return`rgb(${s.map(l=>Math.round(l*o)).join(",")})`}function wc(e,t,i){for(let r=0;r<700;r++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*i,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function Ac(e,t,i,r,a){let s=i;for(e.font=`400 ${s}px ${a}`;e.measureText(t).width>r&&s>14;)s-=2,e.font=`400 ${s}px ${a}`;return s}var Ya=(e,t=8)=>{let i=new or(e);return i.colorSpace=Tt,i.anisotropy=t,i};function Ys(e,t){if(e.width<=t)return e;let i=document.createElement("canvas");i.width=t,i.height=Math.max(1,Math.round(e.height*t/e.width));let r=i.getContext("2d");return r.imageSmoothingQuality="high",r.drawImage(e,0,0,i.width,i.height),i}function Av(e,t,i){return Ya(Rc(e,t,i))}function Rc(e,t,i){let r=document.createElement("canvas");r.width=790,r.height=490;let a=r.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let s=getComputedStyle(document.body).fontFamily;if(e){let l=e.naturalWidth/e.naturalHeight,h=746/268,c=l>h?e.naturalHeight*h:e.naturalWidth,u=l>h?e.naturalHeight:e.naturalWidth/h;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-c)/2,(e.naturalHeight-u)/2,c,u,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(l=>{a.beginPath(),a.moveTo(24,l),a.lineTo(766,l),a.stroke()});let n='"DT Punk", cursive';a.fillStyle=i;let o=Ac(a,t.name.toUpperCase(),66,640,n);return a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${n}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${n}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${s}`,a.textBaseline="middle",["SP","LP","EP"].forEach((l,h)=>{let c=30+h*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(c,440,22,22),a.fillText(l,c+32,452)}),a.strokeStyle=i,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",wc(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over",r}function Rv(e,t){return Ya(Cc(e,t))}function Cc(e,t){let i=document.createElement("canvas");i.width=1660,i.height=172;let r=i.getContext("2d");r.fillStyle="#e8e6df",r.fillRect(0,0,1660,172),r.fillStyle="#121212",r.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,s='"DT Punk", cursive';r.fillStyle="#efefe9",r.textBaseline="middle",r.font='400 92px "DT Punk", cursive',r.textAlign="center",r.fillText(e.code,75,172/2+6),r.textAlign="left",r.strokeStyle="#b6b3aa",r.lineWidth=2,r.beginPath(),r.moveTo(176,138),r.lineTo(1420,138),r.stroke(),r.fillStyle=t;let n=Ac(r,e.name.toUpperCase(),112,1210,s);return r.font=`400 ${n}px ${s}`,r.fillText(e.name.toUpperCase(),186,172/2+2),r.fillStyle="#3c3a35",r.font=`500 30px ${a}`,r.textAlign="right",r.fillText(e.kind,1630,172/2-22),r.font=`500 24px ${a}`,r.fillText("TRBN \xB7 SP 120",1630,172/2+24),wc(r,1660,172),i}var Cv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Pv=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;uniform float light;
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
}`,Lv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",Uv=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;uniform float light;
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
}`,Iv=[[0,0],[.55,0],[.92,.03],[1,.09],[.82,.2],[.6,.33],[.52,.5],[.56,.68],[.74,.84],[.84,.93],[.62,.995],[0,1]],Dv=[[0,0],[.55,0],[.92,.04],[1,.11],[.8,.27],[.62,.5],[.6,.68],[.72,.82],[.7,.93],[.42,.995],[0,1]],Ks=e=>new m0(e.map(([t,i])=>new Le(Math.max(.001,t),i)),14);function Nv(){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d");t.fillStyle="rgba(0,0,0,.075)";for(let i=0;i<16;i++){let r=16-i;t.beginPath(),t.roundRect(26-r,26-r,76+r*2,12+r*2,6+r),t.fill()}return new or(e)}var bt=1,Pc=.5,Lc=[{k:[1.32,.42],phi:.4,L:[1.62,1.06,.78],r:.29,base:[3.07,-2.34,-.75]},{k:[1.24,-.16],phi:.33,L:[1.78,1.16,.8],r:.3,base:[2.83,-2.52,-.75]},{k:[1.08,-.72],phi:.26,L:[1.62,1.08,.78],r:.28,base:[2.59,-2.7,-.75]},{k:[.86,-1.22],phi:.17,L:[1.24,.82,.66],r:.25,base:[2.35,-2.88,-.75]}],Ov=[[2.2,-2.4,-.8],[.75,-1.55,-1.05],[-.7,-1.15,-.95],[-1.7,-.9,-.8]],Fv=[[3.34,-2.65,-.85],[3.08,-2.84,-.85],[2.82,-3.02,-.85],[2.56,-3.21,-.85],[3.52,-3.08,-1],[3.31,-3.23,-1],[3.11,-3.37,-1],[2.9,-3.52,-1]],hi=[3.45,-3.62,-1.2],zv=[[.36,.26,.6],[-.36,-.26,.52]],Ka=7.2,fa=[hi[0]+Ka*.24,hi[1]-Ka*.8,hi[2]-Ka*.55],Uc=5.3,dr=-6.8,il=2.6,rl=[-8.2,-1.6],ci=[-.2404,.9707],Bv=[[0,0],[.5,0],[.72,.012],[.78,.03],[.7,.06],[.58,.1],[.5,.17],[.46,.3],[.44,.55],[.48,.76],[.6,.87],[.88,.94],[1,.975],[.7,1],[0,1]],Ft={wrist:[3.5,-2.1,.75],knuckle:[[-.94,2.56],[-.31,2.74],[.31,2.64],[.9,2.36]],spread:[-.2,-.06,.07,.22],base:[[-.52,.78],[-.17,.84],[.17,.82],[.52,.74]],carpal:[[-.62,.5],[-.21,.56],[.21,.55],[.62,.48],[-.56,.08],[-.19,.12],[.19,.11],[.56,.06]],thumb:[[-.72,.5],[-1.62,1.16],[-2.4,1.78],[-2.86,2.42]]};function kv(e){let t=document.createElement("canvas");t.width=t.height=24;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,24,24);let r=i.getImageData(0,0,24,24).data,a=Array.from({length:12},()=>[0,0,0,0]),s=0;for(let c=0;c<r.length;c+=4){let u=r[c],d=r[c+1],p=r[c+2],g=Math.max(u,d,p),v=Math.min(u,d,p),m=g-v;if(s+=1,m<40)continue;let f=g===u?(d-p)/m%6:g===d?(p-u)/m+2:(u-d)/m+4;f<0&&(f+=6);let y=a[Math.floor(f*2)%12],_=m*g;y[0]+=u*_,y[1]+=d*_,y[2]+=p*_,y[3]+=_}let n=a.reduce((c,u)=>u[3]>c[3]?u:c);if(n[3]<s*2600)return null;let o=n.slice(0,3).map(c=>c/n[3]),l=Math.max(...o),h=Math.min(...o);return o.map(c=>Math.max(0,Math.min(1,(c-h*.55)/(l-h*.55))))}var Hv={portfolio:{glove:"cut",studs:!0,cuff:"spikes",rings:[0,2]},airtexno:{glove:"cut",cuff:"studs"},wave:{cuff:"spikes",rings:[1]},"concept-undo-studio":{glove:"full"},sabsus:{rings:[0,1,2,3]},basepoint:{band:!0},sunfreaks:{beads:2},"root-framer":{beads:1},janna:{beads:1},wallet:{tie:!0},mortgage:{charm:"key"},"concept-al-futtaim-themes":{charm:"fob"},template:{charm:"cassette"},"street-observations":{charm:"film"},"sabsus-platform":{charm:"tag"}},Vv=[[0,0],[.62,.01],[.93,.05],[1,.14],[1,.82],[.94,.93],[.66,.99],[0,1]],al=new Je(1052692),Li=new Je(15263982),Ui=new Je(7171446),Ja=new Je(15328988);function Gv(e){let t={value:0},i={value:0},r=new Yt({color:15526368,roughness:.46,metalness:0,envMap:e,envMapIntensity:1.25}),a=ge=>we=>{we.uniforms.uTime=t,we.uniforms.uRim={value:ge},we.uniforms.uPaper=i,we.vertexShader=we.vertexShader.replace("#include <common>",`#include <common>
varying float vBoneY;`).replace("#include <project_vertex>",`#include <project_vertex>
 vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;`),we.fragmentShader=we.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uRim;uniform float uPaper;varying float vBoneY;`).replace("#include <opaque_fragment>",`
        float boneRim = pow(1. - saturate(dot(normal, normalize(vViewPosition))), 2.4);
        float boneScan = smoothstep(.1, .0, abs(fract(vBoneY * .06 - uTime * .17) - .5));
        outgoingLight += vec3(uRim * (1. - uPaper * .8)) * boneRim + vec3(.8) * boneScan * (.25 + boneRim) * min(1., uRim * 3.);
        #include <opaque_fragment>`)};r.onBeforeCompile=a(.34);let s=new nr,n=new Ai(Ks(Iv),r,28),o=new Ai(Ks(Dv),r,10),l=new Ai(new ka(1,16,12),r,20),h=new Ai(new oi(1,1),new Gi({map:Nv(),transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),48);h.renderOrder=2;let c=new Ai(Ks(Bv),r,9),u=new rc(1,.075,8,40,Math.PI*1.6);u.rotateZ(Math.PI/2-Math.PI*1.8),u.rotateX(Math.PI/2);let d=new Ai(u,r,5),p=new Ai(new ka(1,12,10),r,11);[n,o,l,h,c,d,p].forEach(ge=>{ge.frustumCulled=!1,s.add(ge)});let g=yv(e,a);s.add(g.mesh);let v=Array.from({length:4},()=>new I),m=Array.from({length:4},()=>new I),f=Array.from({length:5},()=>new I),y=new Yt({color:16777215,roughness:.56,metalness:0,envMap:e,envMapIntensity:.8}),_=new Yt({color:16777215,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6});y.onBeforeCompile=a(.07),_.onBeforeCompile=a(.16);let E=new rc(1,.18,8,26),k=new ka(1,12,10),R=new dc(1,1,1,2,.12),P={},N={stall:[Ks(Vv),y,60],band:[new Os(1,1,1,30),y,4],bead:[k,y,60],tie:[E,y,4],block:[R,y,8],spike:[new v0(1,1,10).translate(0,.5,0),_,44],loop:[E,_,30],pin:[k,_,16],plate:[R,_,10],sleeve:[new Os(1,1,1,22),_,8]};Object.entries(N).forEach(([ge,[we,ze,it]])=>{let Qe=new Ai(we,ze,it);Qe.setColorAt(0,Li),Qe.count=0,Qe.visible=!1,Qe.frustumCulled=!1,Qe.userData.most=it,P[ge]=Qe,s.add(Qe)});let S={},M=(ge,we,ze,it,Qe,ht,ft)=>{let wt=P[ge],ct=S[ge]||0;ct>=wt.userData.most||(re.set(it,Qe,ht),wt.setMatrixAt(ct,G.compose(we,ze,re)),wt.setColorAt(ct,ft),S[ge]=ct+1)},C=new lt,O=new lt,z=new lt,G=new lt,te=new Ei,j=new I,re=new I,K=new I,fe=new I(0,1,0),Te=(ge,we,ze,it,Qe)=>{K.copy(it).sub(ze);let ht=K.length();K.divideScalar(ht),te.setFromUnitVectors(fe,K),j.copy(ze).addScaledVector(K,ht*.025),re.set(Qe,ht*.95,Qe*.9),ge.setMatrixAt(we,G.compose(j,te,re))},ke=(ge,we,ze,it)=>{K.copy(ze).sub(we);let Qe=K.length();te.setFromUnitVectors(fe,K.divideScalar(Qe)),re.set(it,Qe,it*.9),c.setMatrixAt(ge,G.compose(we,te,re))},Ke=()=>{U=Math.random()<.5?0:1,ne=0},$=(ge,we,ze)=>{te.identity(),re.set(ze,ze*1.2,ze*.82),l.setMatrixAt(ge,G.compose(we,te,re))},ee=(ge,we,ze,it)=>{let Qe=we.x+we.z*.3,ht=we.y-we.z*.72,ft=ze.x+ze.z*.3,wt=ze.y-ze.z*.72,ct=ft-Qe,Kt=wt-ht,Vt=Math.hypot(ct,Kt);te.setFromAxisAngle(qa,Math.atan2(Kt,ct)),j.set((Qe+ft)/2,(ht+wt)/2,.022),re.set(Vt*1.68,it,1),h.setMatrixAt(ge,G.compose(j,te,re))},L=[new I,new I,new I,new I],Z=new I,V=new I,J=new I,se=new I,xe=new I,X=new I,le=new I,w=new I,Se=new I,he=new I,ye=new I,Q=new Ei,be=new Ei,q=new Ei().setFromAxisAngle(fe,Math.PI/2),oe=new Je(15328988),b=new Je(15328988),x=(ge,we,ze,it,Qe)=>{K.copy(ze).sub(we);let ht=K.length();ht<1e-4||(Q.setFromUnitVectors(fe,K.divideScalar(ht)),M(ge,we,Q,it,ht,it,Qe))},A=0,Y=(ge,we,ze,it,Qe,ht,ft,wt)=>{let ct=1.65*A;X.set(we*ct,ze*ct,it*ct).applyQuaternion(be).add(xe),M(ge,X,be,Qe*ct,ht*ct,ft*ct,wt)},ae={key(){return Y("loop",0,-.42,0,.36,.36,.46,Ui),Y("plate",0,-1.36,0,.17,1.3,.09,Ui),Y("plate",.15,-1.84,0,.2,.13,.08,Ui),Y("plate",.13,-1.58,0,.15,.12,.08,Ui),2},fob(){return Y("plate",0,-.86,0,.86,1.28,.2,Li),Y("block",0,-.86,.04,.72,1.14,.24,al),Y("pin",0,-.62,.17,.15,.15,.05,Li),Y("pin",0,-1.02,.17,.15,.15,.05,Li),1.5},cassette(){return Y("block",0,-.62,0,1.3,.86,.17,Ja),Y("block",0,-.44,.09,1.06,.28,.02,oe),Y("loop",-.3,-.78,.1,.13,.13,.06,Ui),Y("loop",.3,-.78,.1,.13,.13,.06,Ui),1.1},film(){return Y("block",0,-.62,0,.7,.92,.7,oe),Y("plate",0,-.13,0,.78,.1,.78,Li),Y("plate",0,-1.11,0,.78,.1,.78,Li),Y("block",.46,-.68,0,.34,.5,.03,oe),1.2},tag(){return Y("plate",0,-.8,0,.84,1.16,.07,Ui),Y("block",0,-.9,.05,.62,.4,.02,al),1.4}},B={upper:null,jaw:null,eyes:null,hinge:new I,yaw:0,pitch:0,roll:0,open:0,bite:0,blink:0,nextBlink:2600,glance:0,nextGlance:5e3,gaze:0,gazeY:0},Ne=null,ve=r.clone();ve.vertexColors=!0,ve.onBeforeCompile=a(.14);try{let ge=new Worker("/skull-model.js?v=2");ge.onmessage=({data:we})=>{ge.terminate();let ze=it=>{let Qe=new jt,ht=new Float32Array(it.occ.length*3);it.occ.forEach((wt,ct)=>{ht[ct*3]=ht[ct*3+1]=ht[ct*3+2]=.1+.9*wt*wt}),Qe.setAttribute("position",new Pt(it.position,3)),Qe.setAttribute("normal",new Pt(it.normal,3)),Qe.setAttribute("color",new Pt(ht,3)),Qe.setIndex(new Pt(it.index,1));let ft=new Ai(Qe,ve,1);return ft.frustumCulled=!1,s.add(ft),ft};if(B.hinge.fromArray(we.hinge),B.upper=ze(we.upper),B.jaw=ze(we.jaw),B.eyes=new Ai(new ka(1,12,10),new Gi({color:16777215,fog:!1}),2),B.eyes.frustumCulled=!1,s.add(B.eyes),window.trbnCharacter?.name==="santa"){let it=new Yt({color:16052970,roughness:.95,envMap:e,envMapIntensity:.9});Ne=new nr,[[0,-1.02,.62,.78,.5,.34],[-.42,-.8,.56,.34,.34,.26],[.42,-.8,.56,.34,.34,.26],[0,-1.42,.58,.46,.34,.24]].forEach(([Qe,ht,ft,wt,ct,Kt])=>{let Vt=new Mt(new ka(1,16,12),it);Vt.position.set(Qe,ht,ft),Vt.scale.set(wt,ct,Kt),Ne.add(Vt)}),Ne.visible=!1,s.add(Ne)}},ge.postMessage({})}catch{}let Ae=null,Re=null,Me=1,Oe=0,de=0,ue=0,ce=7,Ce=5,Ie=0,We=!1,U=-1,ne=0,ie=0,pe=0,Ee=13,me={half:7,tall:5},Xe=new I;return{group:s,get tilt(){return U<0?0:(U?-1:1)*ie},wave(ge=Math.random()<.5?0:1){U<0&&(U=ge,ne=0)},place(ge,we,ze){me.half=ge,me.tall=we,ze&&(Ee=ze),We||(We=!0,ce=ge,Ce=we)},theme(ge){i.value=ge;for(let we of[r,ve])we.color.set(ge?3421242:15526368),we.envMapIntensity=ge?.7:1.25},dress(ge,we){let ze=Hv[ge]||null;we?b.setRGB(we[0],we[1],we[2],Tt):b.copy(Ja),ze!==Ae&&(Ae=ze,de+=.9),B.bite=1},update(ge,we,ze,it=0,Qe=0){let ht=1-Math.exp(-we/180);ce+=(me.half-ce)*ht,Ce+=(me.tall-Ce)*ht,Ie+=(Math.min(1,ze*20)-Ie)*(1-Math.exp(-we/140)),t.value=ge/1e3;let ft=0,wt=0,ct=0,Kt=0;Re!==Ae?(Me=Math.max(0,Me-we/110),Me||(Re=Ae,oe.copy(b))):Me=Math.min(1,Me+we/260);let Vt=Me-1;A=Re?Math.max(0,1+2.7*Vt*Vt*Vt+1.7*Vt*Vt):0,Object.keys(S).forEach(D=>{S[D]=0});let $a=Re&&(Re.cuff||Re.beads||Re.tie||Re.band);if(ue+=(($a?1.25:Re?.charm?.9:0)-ue)*(1-Math.exp(-we/320)),de+=(-Oe*26-de*2.4+Ie*2.2*Math.sin(ge*.012))*(we/1e3),Oe+=de*(we/1e3),pe||(pe=ge+12e3+Math.random()*16e3),U<0&&ge>pe&&ze<.01&&Ke(),U>=0){ne+=we;let D=Ht(ne/640,0,1),H=Ht((3500-ne)/640,0,1);ie=Ws(Math.min(D,H)),ne>3500&&(U=-1,ie=0,pe=ge+24e3+Math.random()*42e3)}let ji=Math.max(-10.6,-Ce*1.16-.1*il-.2),va=ji-1.38*il,qi=va+.1,_a=.06+Math.sin(ge*.0105)*.14,xa=_a+Math.sin(ge*.0105-.8)*.18,Za=Math.cos(xa),T=Math.sin(xa);if([-1,1].forEach((D,H)=>{let W=D*ce,F=-Ce*(H?.2:.1)+Math.sin(ge*7e-4+H*2)*.05,_e=(Fe,$e,He,rt)=>Fe.set(W+D*$e*bt,F+ue+He*bt,rt),Pe=H===U?ie:0,Ue=Ht(Ee-ce-4,-1.6,Ft.wrist[0])-.41,Be=Ue+Ka*.944*Math.sin(_a),Ye=rl[0]+Ka*.944*Math.cos(_a),Ze=(Fe,$e)=>Be+Fe*Za+$e*T,qe=(Fe,$e)=>Ye-Fe*T+$e*Za,at=hi[0]+(Be-hi[0])*Pe,ut=hi[1]+(Ye-hi[1])*Pe,dt=hi[2]+(Ft.wrist[2]-hi[2])*Pe,_t=Math.PI*Pe,nt=Math.cos(_t),Ve=Math.sin(_t),ri=(Fe,$e,He,rt)=>{let Ct=(ci[0]*$e+ci[1]*He)*(1-nt);return Fe.set(D*($e*nt+ci[1]*rt*Ve+ci[0]*Ct),He*nt-ci[0]*rt*Ve+ci[1]*Ct,rt*nt+(ci[0]*He-ci[1]*$e)*Ve)};ri(ye,0,0,1);let ui=(Fe,$e,He,rt,Ct,mt,zt)=>{if(!Pe)return _e(Fe,$e,He,rt);let Bt=Ct-Be,Zt=mt-Ye,ya=zt-Ft.wrist[2],Rr=2*(ci[0]*Bt+ci[1]*Zt),Cr=$e-hi[0],Pr=He-hi[1],Ma=rt-hi[2];return ri(he,Cr+(ci[0]*Rr-Bt-Cr)*Pe,Pr+(ci[1]*Rr-Zt-Pr)*Pe,Ma+(-ya-Ma)*Pe),_e(Fe,at,ut,dt).add(he)},Xt=(Fe,$e,He,rt,Ct)=>ui(Fe,$e[0],$e[1],$e[2],Ze(He,rt),qe(He,rt),Ct);Lc.forEach((Fe,$e)=>{let He=Math.sin(ge*.0013+$e*1.3+H*2.4)*.012-Ie*.07,rt=Math.cos(Fe.phi),Ct=Math.sin(Fe.phi),mt=H===1&&$e>=2,zt=mt?[.12,-.98,-1.1,-.86]:[.52+He*.4,1.2+He,.92+He*1.3,.3+He*.4],Bt=Fe.k[0],Zt=Fe.k[1],ya=xa+Ft.spread[$e],Rr=Ze(Ft.knuckle[$e][0],Ft.knuckle[$e][1]),Cr=qe(Ft.knuckle[$e][0],Ft.knuckle[$e][1]),Pr=Ft.wrist[2]+.06;ui(L[0],Bt,Zt,zt[0],Rr,Cr,Pr);let Ma=Bt,nl=Zt,ol=zt[0];for(let yt=0;yt<3;yt++){let Zs=zt[yt+1]-zt[yt],ll=Math.sqrt(Math.max(.03,Fe.L[yt]*Fe.L[yt]-Zs*Zs)),hl=Bt-ll*rt,cl=Zt+ll*Ct;if(yt===0){let ul=Ma/(Ma-hl);nl=Zt+(cl-Zt)*ul,ol=zt[0]+Zs*ul}Bt=hl,Zt=cl,Rr+=Math.sin(ya)*Fe.L[yt],Cr+=Math.cos(ya)*Fe.L[yt],Pr+=.14*(yt+1)*(.5+yt*.25),ya+=.05,ui(L[yt+1],Bt,Zt,zt[yt+1],Rr,Cr,Pr)}if(_e(V,0,nl,ol),Te(n,ft++,L[0],L[1],Fe.r*bt),Te(n,ft++,L[1],L[2],Fe.r*.86*bt),Te(o,wt++,L[2],L[3],Fe.r*.8*bt),Xt(Z,Fe.base,Ft.base[$e][0],Ft.base[$e][1],Ft.wrist[2]),Te(n,ft++,Z,L[0],.34*bt),Re){if(Re.glove){v[$e].copy(L[0]),m[$e].copy(Z),f[0].copy(Z).lerp(L[0],.72);for(let yt=0;yt<4;yt++)f[yt+1].copy(L[yt]);g.finger(H,$e,f,Fe.r*bt,Re.glove==="full"?0:.5,A,ye)}if(Re.studs&&(J.copy(L[0]).addScaledVector(ye,Fe.r*1.2),ri(se,.5,.35,.8).normalize(),Q.setFromUnitVectors(fe,se),M("spike",J,Q,.2*A,.66*A,.2*A,Li)),Re.rings?.includes($e)){J.copy(L[0]).lerp(L[1],.6),se.copy(L[1]).sub(L[0]).normalize(),Q.setFromUnitVectors(fe,se);let yt=Fe.r*.84*A;M("sleeve",J,Q,yt,.32*A,yt,Li),J.addScaledVector(ye,yt*.92),Q.identity(),M("pin",J,Q,.17*A,.17*A,.09*A,Li)}H===1&&$e===1&&(le.copy(L[1]).lerp(L[2],.3),w.copy(L[2]).sub(L[1]).normalize())}!mt&&Pe<.3&&(ee(Kt++,V,L[1],1.1+L[1].z*.55),ee(Kt++,L[1],L[2],.95+L[2].z*.5),ee(Kt++,L[2],L[3],.8),xe.copy(L[3]),xe.z=.05,X.copy(L[3]).lerp(L[2],.3),X.z=.12,ee(Kt++,X,xe,.46))});for(let Fe=0;Fe<4;Fe++)Xt(L[Fe],Ov[Fe],Ft.thumb[Fe][0],Ft.thumb[Fe][1],Ft.wrist[2]+.05+Fe*.05);Te(n,ft++,L[0],L[1],.37*bt),Te(n,ft++,L[1],L[2],.33*bt),Te(o,wt++,L[2],L[3],.29*bt),Fv.forEach((Fe,$e)=>$(ct++,Xt(Z,Fe,Ft.carpal[$e][0],Ft.carpal[$e][1],Ft.wrist[2]-.02),(.27+$e%3*.04)*bt));let yi=Fe=>_e(Fe,at,ut,dt);if(_e(J,fa[0]+(Ue-fa[0])*Pe,fa[1]+(rl[0]-fa[1])*Pe,fa[2]+(rl[1]-fa[2])*Pe),yi(se),Xe.copy(J).sub(se).normalize(),zv.forEach(([Fe,$e,He],rt)=>{Z.copy(se).add(ri(he,Fe,$e,0)),V.set(J.x+D*Fe*.4,J.y+$e*.4,J.z),ke(rt+H*3,Z,V,He*bt)}),xe.set(D*Uc,qi,dr),ke(2+H*3,J,xe,.82*bt),$(ct++,J,.58*bt),$(ct++,xe,.78*bt),Re){if(Re.glove){f[0].copy(L[0]).lerp(L[1],-.45);for(let He=0;He<4;He++)f[He+1].copy(L[He]);g.finger(H,4,f,.4*bt,Re.glove==="full"?0:.55,A,ye),g.palm(H,v,m,yi(J),Xe,Lc[0].r*bt,A,ye)}let Fe=.98*bt;yi(J).addScaledVector(Xe,Re.glove?.3:.45),se.copy(Xe).cross(qa).normalize(),xe.copy(se).cross(Xe);let $e=(He,rt)=>X.copy(J).addScaledVector(se,Math.cos(He)*rt).addScaledVector(xe,Math.sin(He)*rt);if(Q.setFromUnitVectors(fe,Xe),Re.cuff){M("band",J,Q,Fe*A,.9*A,Fe*A,al);let He=Re.cuff==="spikes"?11:16;for(let rt=0;rt<He;rt++){let Ct=rt/He*Math.PI*2;$e(Ct,Fe*.97),xe.copy(X).sub(J).normalize(),be.setFromUnitVectors(fe,xe);let mt=Re.cuff==="spikes"?.62:.2,zt=Re.cuff==="spikes"?.17:.13;M("spike",X,be,zt*A,mt*A,zt*A,Li),xe.copy(se).cross(Xe)}}if(Re.beads)for(let He=0;He<Re.beads;He++){let rt=He*.46,Ct=13+He;for(let mt=0;mt<Ct;mt++)J.addScaledVector(Xe,rt),$e(mt/Ct*Math.PI*2+He,Fe),J.addScaledVector(Xe,-rt),be.identity(),M("bead",X,be,.23*A,.23*A,.23*A,(mt+He)%3?oe:Ja)}Q.setFromUnitVectors(qa,Xe),Re.tie&&M("tie",J,Q,Fe*A,Fe*A,Fe*.9*A,oe),Re.band&&(be.setFromUnitVectors(fe,Xe),M("band",J,be,Fe*.99*A,.5*A,Fe*.99*A,Ja),$e(Math.PI/2,Fe),M("block",X,be,.9*A,.34*A,.12*A,Ja))}}),Re?.charm){let D=Oe+Math.sin(ge*9e-4)*.05;Se.set(Math.sin(D),-Math.cos(D),.07).normalize(),Q.setFromUnitVectors(qa,w),M("loop",le,Q,.38*A,.38*A,.42*A,Ui),J.copy(le).addScaledVector(Se,.34*A),se.copy(Se).negate(),Q.setFromUnitVectors(fe,se);for(let W=0;W<4;W++)J.addScaledVector(Se,.33*A),be.copy(Q),W%2&&be.multiply(q),M("loop",J,be,.17*A,.27*A,.17*A,Ui);xe.copy(J).addScaledVector(Se,.3*A),be.copy(Q),se.set(0,1,0),be.multiply(te.setFromAxisAngle(se,Math.sin(ge*.0011)*.36+Oe*1.5)),Y("loop",0,0,0,.12,.12,.1,Ui);let H=ae[Re.charm]();se.copy(le).addScaledVector(Se,(1.8+H*1.65)*A),ee(Kt++,le,se,1.1*bt)}if(h.count=Kt,B.upper){let D=1-Math.exp(-we/240),H=U<0?0:(U?1:-1)*ie;ge>B.nextGlance&&(B.glance=Math.random()<.4?0:(Math.random()-.5)*.9,B.nextGlance=ge+2500+Math.random()*5e3),B.yaw+=(Ht(it*.3+B.glance+H*.42,-.62,.62)-B.yaw)*D,B.pitch+=(Ht(Qe*.12+Math.sin(ge*6e-4)*.02-.1,-.3,.16)-B.pitch)*D,B.roll+=(H*.1+Math.sin(ge*43e-5)*.025-B.roll)*D,B.bite=Math.max(0,B.bite-we/480);let W=Ie*(.1+.13*Math.abs(Math.sin(ge*.03))),F=B.bite*(.24+.24*Math.sin(B.bite*12)),_e=Math.abs(H)*(.16+.2*Math.abs(Math.sin(ge*.0095)));B.open+=(Math.max(0,W,F,_e,.012+Math.sin(ge*9e-4)*.012)-B.open)*(1-Math.exp(-we/55)),ge>B.nextBlink&&(B.blink=1,B.nextBlink=ge+1800+Math.random()*4600),B.blink=Math.max(0,B.blink-we/130),B.gaze+=(Ht(it*.9+B.glance*1.1+H,-1,1)-B.gaze)*(1-Math.exp(-we/70)),B.gazeY+=(Ht(Qe*.8,-1,1)-B.gazeY)*(1-Math.exp(-we/70));let Pe=il;te.setFromAxisAngle(fe,B.yaw).multiply(Q.setFromAxisAngle(Mc,B.pitch)).multiply(be.setFromAxisAngle(qa,B.roll)),j.set(Math.sin(ge*37e-5)*.04,ji+Math.sin(ge*83e-5)*.05,dr+.4),re.setScalar(Pe),G.compose(j,te,re),B.upper.setMatrixAt(0,G),C.copy(G).multiply(O.makeTranslation(B.hinge.x,B.hinge.y,B.hinge.z)).multiply(z.makeRotationX(B.open*.62)).multiply(O.makeTranslation(-B.hinge.x,-B.hinge.y,-B.hinge.z)),B.jaw.setMatrixAt(0,C),[-1,1].forEach((Ue,Be)=>{J.set(Ue*.45+B.gaze*.08,-.08+B.gazeY*.05,.5).applyMatrix4(G),Q.identity();let Ye=.085*Pe;re.set(Ye,Ye*(1-.92*Math.min(1,B.blink*2)),Ye),B.eyes.setMatrixAt(Be,C.compose(J,Q,re))});for(let Ue=0;Ue<11;Ue++)j.set(0,va+1.5-Ue*.92,dr-1.3),te.identity(),re.set(.62,.36,.55),p.setMatrixAt(Ue,C.compose(j,te,re));for(let Ue=0;Ue<5;Ue++)j.set(0,qi-.95-Ue*1.02,dr-.2),te.setFromAxisAngle(Mc,.3),re.set(4.05-Math.abs(Ue-2)*.25,3.4,2.5),d.setMatrixAt(Ue,C.compose(j,te,re));d.instanceMatrix.needsUpdate=p.instanceMatrix.needsUpdate=!0,J.set(0,qi-.35,dr+2.1);for(let[Ue,Be]of[[6,-1],[7,1]])ke(Ue,J,se.set(Be*Uc,qi,dr),.5*bt);ke(8,J,se.set(0,qi-5,dr+2.3),.62*bt),c.count=9,Ne&&(Ne.position.copy(j.set(0,ji+Math.sin(ge*83e-5)*.05,dr+.4)),Ne.quaternion.setFromAxisAngle(fe,B.yaw),Ne.scale.setScalar(Pe),Ne.visible=!0),B.upper.instanceMatrix.needsUpdate=!0,B.jaw.instanceMatrix.needsUpdate=!0,B.eyes.instanceMatrix.needsUpdate=!0}Re?.glove?g.commit(Re.glove):g.hide(),Object.entries(P).forEach(([D,H])=>{let W=S[D]||0;H.count=W,H.visible=W>0,W&&(H.instanceMatrix.needsUpdate=!0,H.instanceColor.needsUpdate=!0)}),[n,o,l,h,c].forEach(D=>{D.instanceMatrix.needsUpdate=!0})}}}function Wv({host:e,stage:t,items:i,onHover:r,onOpen:a,onPlay:s}){let n=document.createElement("canvas");n.className="tv-canvas",n.setAttribute("aria-hidden","true"),e.append(n);let o;try{o=new Vh({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return n.remove(),null}let l=Math.min(devicePixelRatio||1,1.25);o.setPixelRatio(l),o.outputColorSpace=Tt,o.setClearColor(0,0);let h=$o(o),c=el(h),u=new Is;u.background=new Je(131587),u.fog=new Qg(131587,40,96);let d=new lc(16777215,1.5);d.position.set(-8,18,22),u.add(d);let p=new ii(30,1,1,200);p.position.set(0,0,40);let g=new bi({vertexShader:Lv,fragmentShader:Uv,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:pa},b:{value:pa},fade:{value:1},time:{value:0},focus:{value:new Le(.47,.55)},light:{value:0}}}),v=new Mt(new oi(2,2),g);v.frustumCulled=!1,v.renderOrder=-10,u.add(v);let m=new hc(16777215,.32);u.add(m);let f=new Je(16777215),y=new Je(16777215),_=new Je(16777215),E=new Mt(new oi(1,1),new Gi({map:pa,color:16777215,transparent:!0,opacity:0,fog:!1}));E.renderOrder=1;let k=new nr;u.add(k),k.add(E);let R=new Mt(new oi(1,1),new Gi({color:328965,fog:!1}));R.position.z=-.04,k.add(R);let P=new Mt(new ar(1,1,1),new Yt({color:723723,roughness:.42,envMap:h,envMapIntensity:.9}));k.add(P);let N=Gv(h);k.add(N.group);let S=0,M=0,C=i.map((de,ue)=>{let ce=Ce=>{let Ie=Math.sin((ue+1)*12.9898*Ce)*43758.5453;return Ie-Math.floor(Ie)};return{rx:ce(1)-.5,ry:ce(2)-.5,rz:ce(3)-.5,wob:ce(4)*6.28,tilt:(ce(5)-.5)*.022,pile:ce(6)-.5}}),O=i.map((de,ue)=>{let ce=tl(c,C[ue].tilt),Ce=new Mt(c.hit,new Gi({visible:!1}));return Ce.userData.index=ue,ce.group.add(Ce),ce.hit=Ce,u.add(ce.group),ce}),z=new Map,G=new Map,te=(de,ue)=>{if(z.has(de)){let Ce=z.get(de);Ce.complete&&Ce.naturalWidth?ue(Ce):Ce.addEventListener("load",()=>ue(Ce),{once:!0});return}let ce=new Image;ce.decoding="async",ce.src=i[de].src,z.set(de,ce),ce.addEventListener("load",()=>ue(ce),{once:!0})},j=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),re=de=>{O[de].wanted||(O[de].wanted=!0,te(de,ue=>j.then(()=>{let ce=bc(ue),Ce=(Ie,We)=>{Ie.material.map=We,Ie.material.emissiveMap=We,Ie.material.emissiveIntensity=.55,Ie.material.color.set(16777215),Ie.material.needsUpdate=!0};Ce(O[de].label,Av(ue,i[de],ce)),Ce(O[de].spine,Rv(i[de],ce)),yc(i[de].project,de,xc(ue)).forEach((Ie,We)=>{let U=O[de].stickers[We];if(!U)return;let ne=new or(Ys(Ie,256));ne.colorSpace=Tt,ne.anisotropy=4,U.material.map=ne,U.material.emissiveMap=ne,U.material.needsUpdate=!0})})))},K=de=>{G.has(de)||(G.set(de,null),te(de,ue=>{let ce=new or(ue);ce.colorSpace=Tt,ce.anisotropy=8,ce.generateMipmaps=!0,ce.minFilter=Di;let Ce=document.createElement("canvas");Ce.width=Ce.height=6;let Ie=Ce.getContext("2d",{willReadFrequently:!0});Ie.drawImage(ue,0,0,6,6);let We=Ie.getImageData(0,0,6,6).data,U=0,ne=0,ie=0;for(let ge=0;ge<We.length;ge+=4)U+=We[ge],ne+=We[ge+1],ie+=We[ge+2];let pe=new Je(U/9180,ne/9180,ie/9180).convertSRGBToLinear(),Ee=Math.max(U,ne,ie,1),me=255/Ee,Xe=`rgba(${[U,ne,ie].map(ge=>Math.round(ge*me)).join(",")},.3)`;G.set(de,{texture:ce,ratio:ue.naturalWidth/ue.naturalHeight,avg:pe,glow:Xe,light:kv(ue)}),de===X&&le(de)}))},fe=new Is,Te=new Mo(-1,1,1,-1,0,1),ke=new bi({vertexShader:Cv,fragmentShader:Pv,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1},light:{value:0}}}),Ke=new Mt(new oi(2,2),ke);Ke.frustumCulled=!1,fe.add(Ke);let $=null,ee=0,L=0;function Z(){let de=Math.round(ee*l),ue=Math.round(L*l);(!$||$.width!==de||$.height!==ue)&&($?.dispose(),$=new $i(de,ue,{samples:2,type:Nr,colorSpace:"",generateMipmaps:!0,minFilter:Di,magFilter:di})),ke.uniforms.map.value=$.texture,p.aspect=ee/L,p.updateProjectionMatrix(),xe()}let V=()=>{let de=80*Math.tan(p.fov*Math.PI/360);return{vh:de,vw:de*p.aspect}},J=4/3,se=0;function xe(){let{vh:de,vw:ue}=V(),ce=ue*.62,Ce=de*.62,Ie=ce,We=Ie/J;We>Ce&&(We=Ce,Ie=We*J),se=de*.06,E.scale.set(Ie,We,1),R.scale.set(Ie+.16,We+.16,1),P.scale.set(Ie+.16,We+.16,Pc),P.position.z=-.05-Pc/2,N.place((Ie+.16)/2,We/2,40*Math.tan(p.fov*Math.PI/360)*p.aspect),g.uniforms.focus.value.set(.5,.5+se/de)}let X=-1;function le(de){let ue=G.get(de);ue&&(g.uniforms.a.value!==ue.texture&&(g.uniforms.b.value=g.uniforms.a.value===pa?ue.texture:g.uniforms.a.value,g.uniforms.a.value=ue.texture,g.uniforms.fade.value=0),y.copy(ue.avg).lerp(_,.3),document.documentElement.style.setProperty("--tube-glow",ue.glow),window.trbnRingTint?.(ue.light),N.dress(i[de]?.project,ue.light),E.material.map=ue.texture,E.material.opacity=1,E.material.needsUpdate=!0,J=ue.ratio,xe())}function w(){let de=n.clientWidth,ue=n.clientHeight;!de||!ue||(ee=de,L=ue,o.setSize(ee,L,!1),Z())}new ResizeObserver(w).observe(n),w();let Se=()=>{let de=document.documentElement.classList.contains("theme-light")?1:0;g.uniforms.light.value=de,ke.uniforms.light.value=de,u.fog.color.set(de?13224389:131587),u.background.set(de?13224389:131587),N.theme(de)};Se(),addEventListener("trbn:theme",Se);let he=(de,ue,ce)=>Ws(Ht((ce-de)/(ue-de),0,1));function ye(de,ue,ce,Ce,Ie){let{vh:We,vw:U}=V(),ne=Ws(Ht(1-Math.abs(Ce)*1.15,0,1)),ie=de.group,pe=Math.sin(Ie*5e-4+ue.wob),Ee={x:U*.275,y:-We*.265,z:8,s:.52,rx:-.16+pe*.012,ry:-.3+Math.cos(Ie*4e-4)*.018,rz:.05},me;if(Ce>=0){let Xe=ce%2?1:-1,ge=1-Ce*4.2;me={x:Xe*U*.49,y:We*.1+ue.pile*1.2-Ce*.12,z:ge,s:.46,rx:ue.rx*.1,ry:-Xe*.92+ue.ry*.08,rz:Xe*.03+ue.rz*.04},me={x:vt(me.x,Ee.x,ne),y:vt(me.y,Ee.y,ne),z:vt(me.z,Ee.z,ne),s:vt(me.s,Ee.s,ne),rx:vt(me.rx,Ee.rx,ne),ry:vt(me.ry,Ee.ry,ne),rz:vt(me.rz,Ee.rz,ne)}}else{let Xe=js*.5,ge=he(0,.9,-Ce),we={x:-U*.265+ue.pile*.45,y:-We*.19+(Ce+1)*Xe,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+ue.ry*.05,rz:ue.rz*.022};me={x:vt(Ee.x,we.x,ge),y:vt(Ee.y,we.y,ge)+Math.sin(ge*Math.PI)*3,z:vt(Ee.z,we.z,ge),s:vt(Ee.s,we.s,ge),rx:vt(Ee.rx,we.rx,ge),ry:vt(Ee.ry,we.ry,ge),rz:vt(Ee.rz,we.rz,ge)}}ie.position.set(me.x,me.y,me.z),ie.scale.setScalar(me.s),ie.rotation.set(me.rx,me.ry,me.rz),ie.visible=Ce>-8&&Ce<12&&me.y>-We*.85}let Q=new ov,be=new Le,q=null,oe=-2,b=!1,x=()=>{oe!==-2&&(oe=-2,r(-1),t.classList.remove("is-pointing"))},A=()=>{if(b=!1,!q){x();return}let[de,ue]=window.trbnBend?window.trbnBend(q.x,q.y,ee,L):[q.x,q.y],ce=de/ee,Ce=ue/L;if(ce<0||ce>1||Ce<0||Ce>1){x();return}be.set(ce*2-1,-(Ce*2-1)),Q.setFromCamera(be,p);let Ie=Q.intersectObjects([...O.filter(U=>U.group.visible).map(U=>U.hit),E],!1)[0],We=Ie?Ie.object===E?-1:Ie.object.userData.index:-2;We!==oe&&(oe=We,r(We>=0?We:-1),t.classList.toggle("is-pointing",We!==-2))};t.addEventListener("pointermove",de=>{let ue=n.getBoundingClientRect();q={x:de.clientX-ue.left,y:de.clientY-ue.top},b=!0}),t.addEventListener("pointerleave",()=>{q=null,b=!0}),t.addEventListener("click",de=>{de.target.closest("a, button")||(A(),oe!==-2&&a(oe===-1?X:oe))});let Y=!1;Promise.all([o.compileAsync(u,p),o.compileAsync(fe,Te)]).then(()=>{Y=!0},()=>{Y=!0});let ae=1,B=0,Ne=0,ve=0,Ae=0,Re=0,Me=!1,Oe=!0;return{frame:(de,ue,ce,Ce=1)=>{if(!Oe||!Y)return;let Ie=de-ve,We=Math.abs(Ie);ve=de,Ne+=Ie*11+ce*9e-4;let U=Ht(de/Math.max(1,i.length-1),0,1);O.forEach((me,Xe)=>{let ge=Xe-de;if(ge>-7&&ge<7&&re(Xe),ye(me,C[Xe],Xe,ge,ue),Math.abs(ge)<3){me.reels[0].hub.rotation.z=-Ne,me.reels[1].hub.rotation.z=-Ne*.82;let we=vt(3.15,1.75,U),ze=vt(1.75,3.15,U);me.reels[0].pack.scale.set(we,we,1),me.reels[1].pack.scale.set(ze,ze,1)}});let ne=Ht(Math.round(de),0,i.length-1);if(K(ne),K(Math.min(i.length-1,ne+1)),K(Math.max(0,ne-1)),ne!==X){let me=X<0;X=ne,me||(ae=1,S=(Math.random()<.5?-1:1)*.9,s?.(ne)),le(ne)}ae=Math.max(ae*Math.exp(-ce/170),Ht(We*26,0,.7)),B||(B=ue);let ie=Math.min(1,(ue-B)/700);f.lerp(y,1-Math.exp(-ce/500)),m.color.copy(f),g.uniforms.time.value=ue/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+ce/900),ke.uniforms.time.value=ue/1e3,ke.uniforms.glitch.value=ae,M+=(-S*70-M*7)*(ce/1e3),S+=M*(ce/1e3),N.update(ue,ce,We,Ae,Re),ke.uniforms.power.value=1-(1-ie)**3,ke.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let pe=q?q.x/ee-.5:0,Ee=q?q.y/L-.5:0;Ae+=(pe-Ae)*(1-Math.exp(-ce/260)),Re+=(Ee-Re)*(1-Math.exp(-ce/260)),p.position.x=Ae*1.6,p.position.y=-Re*1,p.lookAt(0,0,0),k.position.y=se+Math.sin(ue*83e-5)*.05,k.rotation.set(Math.sin(ue*61e-5)*.009+Re*.05+S*.012,Math.sin(ue*47e-5)*.013+Ae*.1+S*.03,Math.sin(ue*39e-5)*.0045+S*.008+N.tilt*.022),b&&A(),o.toneMapping=Si,o.setRenderTarget($),o.clear(),o.render(u,p),o.setRenderTarget(null),o.clear(),o.render(fe,Te),n.style.opacity=String(Math.min(ie*3,1)*Ce),Me||(Me=!0,t.classList.add("tv-on"))},wave(de){N.wave(de)},show(de){Oe=de,n.style.display=de?"":"none",de&&w()},lighter(){l<=.8||(l=Math.max(.8,l-.2),o.setPixelRatio(l),w())}}}var Ic={rest:{x:.222,y:-.252,z:6,s:.48,rx:-.22,ry:-.36,rz:.07},lift:{x:.2,y:-.21,z:9,s:.45,rx:-.07,ry:-.12,rz:.025}};function Xv(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");return t.filter="blur(16px)",t.fillStyle="rgba(0,0,0,.9)",t.beginPath(),t.roundRect(44,38,168,84,16),t.fill(),Ya(e,1)}function jv({grid:e,scroller:t,items:i}){let r=document.createElement("canvas");r.className="tape-library",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"absolute",left:"0",top:"0",zIndex:"3",pointerEvents:"none"}),e.append(r);let a;try{a=new Vh({canvas:r,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return r.remove(),null}let s=Math.min(devicePixelRatio||1,1.25);a.setPixelRatio(s),a.outputColorSpace=Tt,a.toneMapping=Si,a.setClearColor(0,0),a.autoClear=!1;let n=$o(a),o=el(n),l=new Is,h=new lc(16777215,1.5);h.position.set(-8,18,22),l.add(h);let c=new hc(16777215,.32);l.add(c);let u=new ii(30,4/3,1,200);u.position.set(0,0,40),u.lookAt(0,0,0);let d=80*Math.tan(u.fov*Math.PI/360),p=d*u.aspect,g=new Mt(new oi(1,1),new Gi({map:Xv(),transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=-1,l.add(g);let v=new Je(16777215),m=i.map((L,Z)=>{let V=xe=>{let X=Math.sin((Z+1)*12.9898*xe)*43758.5453;return X-Math.floor(X)},J=tl(o,(V(5)-.5)*.022);J.group.visible=!1,l.add(J.group);let se=vt(1.75,3.15,V(7));return J.reels[0].pack.scale.set(se,se,1),J.reels[1].pack.scale.set(4.9-se,4.9-se,1),{item:L,tape:J,seed:{rx:V(1)-.5,ry:V(2)-.5,rz:V(3)-.5},spin:V(4)*6.28,tint:new Je(1,1,1),wanted:!1,ready:!1,shown:!1,p:0,hover:0,h:0,tx:0,ty:0,px:0,py:0,box:null,dirty:!1}}),f=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),y=(L,Z)=>{let V=Ya(Z,4);L.material.map=V,L.material.emissiveMap=V,L.material.emissiveIntensity=.55,L.material.color.set(16777215),L.material.needsUpdate=!0};function _(L){if(L.wanted)return;L.wanted=!0;let Z=L.item.card.querySelector("img");if(!Z)return;let V=()=>f.then(()=>{if(Z.naturalWidth){try{E(L,Z)}catch{}L.ready=!0,$()}});Z.complete&&Z.naturalWidth?V():Z.addEventListener("load",V,{once:!0})}function E(L,Z){let V=bc(Z);y(L.tape.label,Ys(Rc(Z,L.item,V),396)),y(L.tape.spine,Ys(Cc(L.item,V),830));let J=null;try{J=xc(Z)}catch{}yc(L.item.project,L.item.index,J).forEach((he,ye)=>{let Q=L.tape.stickers[ye];if(!Q)return;let be=Ya(Ys(he,256),4);Q.material.map=be,Q.material.emissiveMap=be,Q.material.needsUpdate=!0});let se=document.createElement("canvas");se.width=se.height=6;let xe=se.getContext("2d",{willReadFrequently:!0});xe.drawImage(Z,0,0,6,6);let X=xe.getImageData(0,0,6,6).data,le=0,w=0,Se=0;for(let he=0;he<X.length;he+=4)le+=X[he],w+=X[he+1],Se+=X[he+2];L.tint.setRGB(le/9180,w/9180,Se/9180).convertSRGBToLinear().lerp(v,.3)}function k(L,Z){let V=Ic.rest,J=Ic.lift,se=Ws(Ht(L.h,0,1)),xe=vt(V.x,J.x,se)*p,X=vt(V.y,J.y,se)*d,le=vt(V.rz,J.rz,se)+L.seed.rz*.03,w=vt(V.rx,J.rx,se)+L.seed.rx*.05-L.py*.2*se,Se=vt(V.ry,J.ry,se)+L.seed.ry*.07+L.px*.28*se,he=1-(1-Ht(L.p,0,1))**3;xe+=(1-he)*4.5,X-=(1-he)*9.5,le+=(1-he)*.22;let ye=L.tape.group;ye.position.set(xe,X,vt(V.z,J.z,se)),ye.scale.setScalar(vt(V.s,J.s,se)),ye.rotation.set(w,Se,le),L.tape.reels[0].hub.rotation.z=-L.spin,L.tape.reels[1].hub.rotation.z=-L.spin*.82,g.position.set(xe+1.1+se*.9,X-1.5-se*1.1,0),g.scale.set(Ci*ye.scale.x*(1.2+se*.12),Pi*ye.scale.x*(1.5+se*.2),1),g.rotation.set(0,0,le),g.material.opacity=(.78-se*.2)*he}let R=220,P=0,N=0,S=-1e9,M=0,C=0,O=!0,z=!0,G=!1,te=!1,j=null,re=0,K=0,fe=0,Te=0,ke=(L,Z)=>{let{box:V}=L,J=V.left,se=N-(V.top-Z+V.height);a.setViewport(J,se,V.width,V.height),a.setScissor(J,se,V.width,V.height),a.clear(),!(!L.shown||!L.ready)&&(j&&j!==L.tape.group&&(j.visible=!1),j=L.tape.group,j.visible=!0,c.color.copy(L.tint),a.render(l,u))};function Ke(L){if(M=0,!z||!G||!te||document.hidden)return;let Z=Math.min(250,L-(C||L));C=L;let V=t.getBoundingClientRect(),J=e.getBoundingClientRect(),se=e.clientWidth,xe=e.clientHeight,X=m.map(q=>q.item.card.hidden?null:q.item.media.getBoundingClientRect()),le=V.top-J.top,w=V.bottom-J.top,Se=Math.max(1,Math.min(Math.round(V.height+R*2),Math.ceil(xe)));(se!==P||Se!==N)&&(P=se,N=Se,a.setSize(P,N,!1),r.style.width=`${P}px`,r.style.height=`${N}px`,O=!0);let he=Math.max(0,Math.floor(xe-N));if(le<S+R*.35||w>S+N-R*.35||S>he){let q=Ht(Math.round(le-R),0,he);q!==S&&(S=q,r.style.transform=`translate3d(0,${S}px,0)`,O=!0)}let ye=!1,Q=!1,be=S;if(m.forEach((q,oe)=>{let b=X[oe];if(q.box=null,!b||!b.width)return;let x=b.top-J.top,A=b.bottom-J.top;if(A>le-900&&x<w+900&&_(q),A<be||x>be+N)return;q.box={left:b.left-J.left,top:x,width:b.width,height:b.height},q.ready&&!q.shown&&A>le+b.height*.2&&x<w-b.height*.2&&(q.shown=!0,q.born=L,q.p=0,q.dirty=!0),q.shown&&q.p<1&&(q.p=Math.min(1,(L-q.born)/620),q.dirty=!0),(Math.abs(q.hover-q.h)>.001||Math.abs(q.tx-q.px)>.001||Math.abs(q.ty-q.py)>.001||q.shown&&q.p<1)&&(q.dirty=!0,Q=!0);let Y=q.h+(q.hover-q.h)*(1-Math.exp(-Z/150));q.h=Math.abs(Y-q.hover)<.001?q.hover:Y,q.px+=(q.tx-q.px)*(1-Math.exp(-Z/170)),q.py+=(q.ty-q.py)*(1-Math.exp(-Z/170)),q.h>.02&&(q.spin+=Z*.0034*q.h,q.dirty=!0),(q.dirty||O)&&(ye||(ye=q.dirty))}),ye&&!Q&&!O&&L-re<30){$();return}re=L,a.setScissorTest(!1),O&&a.clear(),a.setScissorTest(!0),m.forEach(q=>{!q.box||!(O||q.dirty)||(q.ready&&q.shown&&k(q,L),ke(q,be),q.dirty=!1)}),a.setScissorTest(!1),O=!1,ye?(K++,fe+=Math.min(Z,50),K>=40&&(Te=fe/K>26?Te+1:0,K=0,fe=0,Te>=2&&!navigator.webdriver&&(Te=0,ee())),$()):(K=0,fe=0,C=0)}function $(){!M&&z&&G&&te&&!document.hidden&&(M=requestAnimationFrame(Ke))}function ee(){s<=.8||(s=Math.max(.8,s-.2),a.setPixelRatio(s),P=0,O=!0)}return m.forEach(L=>{let{link:Z,media:V}=L.item,J=se=>{let xe=V.getBoundingClientRect();xe.width&&(L.tx=Ht((se.clientX-xe.left)/xe.width-.5,-.6,.6),L.ty=Ht((se.clientY-xe.top)/xe.height-.5,-.6,.6),$())};Z.addEventListener("pointerenter",se=>{L.hover=1,J(se)}),Z.addEventListener("pointermove",J),Z.addEventListener("pointerleave",()=>{L.hover=0,L.tx=0,L.ty=0,$()}),Z.addEventListener("focus",()=>{Z.matches(":focus-visible")&&(L.hover=1,$())}),Z.addEventListener("blur",()=>{L.hover=0,$()})}),t.addEventListener("scroll",$,{passive:!0}),new ResizeObserver(()=>{O=!0,$()}).observe(e),new ResizeObserver(()=>{O=!0,$()}).observe(t),new IntersectionObserver(([L])=>{G=L.isIntersecting,G&&(O=!0,$())},{root:t,rootMargin:`${R}px 0px`}).observe(e),document.addEventListener("visibilitychange",()=>{O=!0,$()}),addEventListener("pageshow",()=>{O=!0,$()}),m.forEach(L=>{L.tape.group.visible=!0}),a.compileAsync(l,u).catch(()=>{}).then(()=>{m.forEach(L=>{L.tape.group.visible=!1}),te=!0,O=!0,$()}),{wake(){O=!0,$()},show(L){z=L,r.style.display=L?"":"none",L&&(O=!0,$())}}}export{Wv as default,Sc as grainTexture,tl as makeTape,jv as startShelf,$o as studioEnv,el as tapeParts};
