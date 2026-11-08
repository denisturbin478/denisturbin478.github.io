var kh=0,ho=1,Hh=2,co=1,Gh=2,ni=3,yi=0,bt=1,Zt=2,Si=0,tr=1,uo=2,po=3,fo=4,Wh=5,zi=100,Xh=101,jh=102,qh=103,Yh=104,Jh=200,Kh=201,Zh=202,$h=203,rn=204,an=205,Qh=206,ec=207,tc=208,ic=209,rc=210,ac=211,nc=212,sc=213,oc=214,nn=0,sn=1,on=2,ir=3,ln=4,hn=5,cn=6,un=7,mo=0,lc=1,hc=2,$t=0,cc=1,uc=2,dc=3,pc=4,fc=5,mc=6,gc=7,go=300,rr=301,ar=302,dn=303,pn=304,la=306,ha=1e3,Bi=1001,fn=1002,zt=1003,_c=1004,ca=1005,Bt=1006,mn=1007,si=1008,oi=1009,_o=1010,vo=1011,Vr=1012,gn=1013,Vi=1014,li=1015,nr=1016,_n=1017,vn=1018,sr=1020,xo=35902,yo=1021,So=1022,Vt=1023,Mo=1024,Eo=1025,or=1026,lr=1027,To=1028,xn=1029,bo=1030,yn=1031,Sn=1033,ua=33776,da=33777,pa=33778,fa=33779,Mn=35840,En=35841,Tn=35842,bn=35843,wn=36196,An=37492,Rn=37496,Cn=37808,Pn=37809,Ln=37810,Un=37811,In=37812,Nn=37813,Dn=37814,On=37815,Fn=37816,zn=37817,Bn=37818,Vn=37819,kn=37820,Hn=37821,ma=36492,Gn=36494,Wn=36495,wo=36283,Xn=36284,jn=36285,qn=36286,ga=2300,Yn=2301,Jn=2302,Ao=2400,Ro=2401,Co=2402,vc=3200,xc=3201,Po=0,yc=1,Mi="",ct="srgb",hr="srgb-linear",_a="linear",$e="srgb",cr=7680,Lo=519,Sc=512,Mc=513,Ec=514,Uo=515,Tc=516,bc=517,wc=518,Ac=519,Io=35044,No="300 es",hi=2e3,va=2001,ur=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kn=Math.PI/180,Zn=180/Math.PI;function dr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(St[e&255]+St[e>>8&255]+St[e>>16&255]+St[e>>24&255]+"-"+St[t&255]+St[t>>8&255]+"-"+St[t>>16&15|64]+St[t>>24&255]+"-"+St[i&63|128]+St[i>>8&255]+"-"+St[i>>16&255]+St[i>>24&255]+St[r&255]+St[r>>8&255]+St[r>>16&255]+St[r>>24&255]).toLowerCase()}function _t(e,t,i){return Math.max(t,Math.min(i,e))}function Rc(e,t){return(e%t+t)%t}function $n(e,t,i){return(1-i)*e+i*t}function kr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var _e=class Mh{constructor(t=0,i=0){Mh.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(_t(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class Eh{constructor(t,i,r,a,n,s,o,l,h){Eh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],_=a[0],m=a[3],f=a[6],y=a[1],v=a[4],T=a[7],D=a[2],A=a[5],C=a[8];return n[0]=s*_+o*y+l*D,n[3]=s*m+o*v+l*A,n[6]=s*f+o*T+l*C,n[1]=h*_+c*y+u*D,n[4]=h*m+c*v+u*A,n[7]=h*f+c*T+u*C,n[2]=d*_+p*y+g*D,n[5]=d*m+p*v+g*A,n[8]=d*f+p*T+g*C,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,p=h*n-s*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(a*h-c*r)*_,t[2]=(o*r-a*s)*_,t[3]=d*_,t[4]=(c*i-a*l)*_,t[5]=(a*n-o*i)*_,t[6]=p*_,t[7]=(r*l-h*i)*_,t[8]=(s*i-r*n)*_,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Qn.makeScale(t,i)),this}rotate(t){return this.premultiply(Qn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qn=new je;function Do(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Cc(){let e=xa("canvas");return e.style.display="block",e}var Oo={};function Hr(e){e in Oo||(Oo[e]=!0,console.warn(e))}function Pc(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function Lc(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uc(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Je={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(e,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===$e&&(e.r=ci(e.r),e.g=ci(e.g),e.b=ci(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===$e&&(e.r=pr(e.r),e.g=pr(e.g),e.b=pr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Mi?_a:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function ci(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function pr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Fo=[.64,.33,.3,.6,.15,.06],zo=[.2126,.7152,.0722],Bo=[.3127,.329],Vo=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ko=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[hr]:{primaries:Fo,whitePoint:Bo,transfer:_a,toXYZ:Vo,fromXYZ:ko,luminanceCoefficients:zo,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:Fo,whitePoint:Bo,transfer:$e,toXYZ:Vo,fromXYZ:ko,luminanceCoefficients:zo,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}});var fr,Ic=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=xa("canvas")),fr.width=e.width,fr.height=e.height;let i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=ci(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nc=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(es(r[n].image)):a.push(es(r[n]))}else a=es(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function es(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ic.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dc=0,kt=class Qa extends ur{constructor(t=Qa.DEFAULT_IMAGE,i=Qa.DEFAULT_MAPPING,r=Bi,a=Bi,n=Bt,s=si,o=Vt,l=oi,h=Qa.DEFAULT_ANISOTROPY,c=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=dr(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==go)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case fn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case fn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=go,kt.DEFAULT_ANISOTROPY=1;var ut=class Th{constructor(t=0,i=0,r=0,a=1){Th.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],p=s[2],g=s[6],_=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,y=(u+1)/2,v=(_+1)/2,T=(l+c)/4,D=(h+p)/4,A=(d+g)/4;return f>y&&f>v?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=T/r,n=D/r):y>v?y<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),r=T/a,n=A/a):v<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(v),r=D/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+_-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends ur{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Go=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Fc=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[n+0],d=a[n+1],p=a[n+2],g=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let _=1-s,m=o*u+l*d+h*p+c*g,f=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let T=Math.sqrt(y),D=Math.atan2(T,m*f);_=Math.sin(_*D)/T,s=Math.sin(s*D)/T}let v=s*f;if(o=o*_+u*v,l=l*_+d*v,h=h*_+p*v,c=c*_+g*v,_===1-s){let T=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=T,l*=T,h*=T,c*=T}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-s*d,e[t+2]=l*p+h*d+s*u-o*c,e[t+3]=h*p-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-r)*d}else if(i>s&&i>c){let d=2*Math.sqrt(1+i-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-i-c);this._w=(a-l)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-s);this._w=(n-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,s=n*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class bh{constructor(t=0,i=0,r=0){bh.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),u=2*(n*r-s*i);return this.x=i+l*h+s*u-o*c,this.y=r+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ts.copy(this).projectOnVector(t),this.sub(ts)}reflect(t){return this.sub(ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(_t(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ts=new L,Wo=new mr,Gr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Ht):Ht.fromBufferAttribute(a,n),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Sa.subVectors(this.max,Wr),gr.subVectors(e.a,Wr),_r.subVectors(e.b,Wr),vr.subVectors(e.c,Wr),Ti.subVectors(_r,gr),bi.subVectors(vr,_r),ki.subVectors(gr,vr);let t=[0,-Ti.z,Ti.y,0,-bi.z,bi.y,0,-ki.z,ki.y,Ti.z,0,-Ti.x,bi.z,0,-bi.x,ki.z,0,-ki.x,-Ti.y,Ti.x,0,-bi.y,bi.x,0,-ki.y,ki.x,0];return!is(t,gr,_r,vr,Sa)||(t=[1,0,0,0,1,0,0,0,1],!is(t,gr,_r,vr,Sa))?!1:(Ma.crossVectors(Ti,bi),t=[Ma.x,Ma.y,Ma.z],is(t,gr,_r,vr,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new L,new L,new L,new L,new L,new L,new L,new L],Ht=new L,ya=new Gr,gr=new L,_r=new L,vr=new L,Ti=new L,bi=new L,ki=new L,Wr=new L,Sa=new L,Ma=new L,Hi=new L;function is(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Hi.fromArray(e,n);let o=a.x*Math.abs(Hi.x)+a.y*Math.abs(Hi.y)+a.z*Math.abs(Hi.z),l=t.dot(Hi),h=i.dot(Hi),c=r.dot(Hi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var zc=new Gr,Xr=new L,rs=new L,as=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(rs)),this.expandByPoint(Xr.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new L,ns=new L,Ea=new L,wi=new L,ss=new L,Ta=new L,os=new L,Xo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ns.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(ns);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Ea),s=wi.dot(this.direction),o=-wi.dot(Ea),l=wi.lengthSq(),h=Math.abs(1-n*n),c,u,d,p;if(h>0)if(c=n*o-s,u=n*s-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(ns).addScaledVector(Ea,u),d}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),r=di.dot(di)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,r,a){ss.subVectors(t,e),Ta.subVectors(i,e),os.crossVectors(ss,Ta);let n=this.direction.dot(os),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;wi.subVectors(this.origin,e);let o=s*this.direction.dot(Ta.crossVectors(wi,Ta));if(o<0)return null;let l=s*this.direction.dot(ss.cross(wi));if(l<0||o+l>n)return null;let h=-s*wi.dot(os);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class to{constructor(t,i,r,a,n,s,o,l,h,c,u,d,p,g,_,m){to.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,u,d,p,g,_,m)}set(t,i,r,a,n,s,o,l,h,c,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new to().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/xr.setFromMatrixColumn(t,0).length(),n=1/xr.setFromMatrixColumn(t,1).length(),s=1/xr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,p=s*u,g=o*c,_=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-_*h,i[9]=-o*l,i[2]=_-d*h,i[6]=g+p*h,i[10]=s*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,_=h*u;i[0]=d+_*o,i[4]=g*o-p,i[8]=s*h,i[1]=s*u,i[5]=s*c,i[9]=-o,i[2]=p*o-g,i[6]=_+d*o,i[10]=s*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,_=h*u;i[0]=d-_*o,i[4]=-s*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*c,i[9]=_-d*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let d=s*c,p=s*u,g=o*c,_=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+_,i[1]=l*u,i[5]=_*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let d=s*l,p=s*h,g=o*l,_=o*h;i[0]=l*c,i[4]=_-d*u,i[8]=g*u+p,i[1]=u,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-_*u}else if(t.order==="XZY"){let d=s*l,p=s*h,g=o*l,_=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+_,i[5]=s*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=_*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bc,t,Vc)}lookAt(t,i,r){let a=this.elements;return Rt.subVectors(t,i),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Ai.crossVectors(r,Rt),Ai.lengthSq()===0&&(Math.abs(r.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Ai.crossVectors(r,Rt)),Ai.normalize(),ba.crossVectors(Rt,Ai),a[0]=Ai.x,a[4]=ba.x,a[8]=Rt.x,a[1]=Ai.y,a[5]=ba.y,a[9]=Rt.y,a[2]=Ai.z,a[6]=ba.z,a[10]=Rt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],_=r[6],m=r[10],f=r[14],y=r[3],v=r[7],T=r[11],D=r[15],A=a[0],C=a[4],U=a[8],M=a[12],S=a[1],R=a[5],I=a[9],z=a[13],B=a[2],W=a[6],V=a[10],ie=a[14],G=a[3],he=a[7],pe=a[11],Pe=a[15];return n[0]=s*A+o*S+l*B+h*G,n[4]=s*C+o*R+l*W+h*he,n[8]=s*U+o*I+l*V+h*pe,n[12]=s*M+o*z+l*ie+h*Pe,n[1]=c*A+u*S+d*B+p*G,n[5]=c*C+u*R+d*W+p*he,n[9]=c*U+u*I+d*V+p*pe,n[13]=c*M+u*z+d*ie+p*Pe,n[2]=g*A+_*S+m*B+f*G,n[6]=g*C+_*R+m*W+f*he,n[10]=g*U+_*I+m*V+f*pe,n[14]=g*M+_*z+m*ie+f*Pe,n[3]=y*A+v*S+T*B+D*G,n[7]=y*C+v*R+T*W+D*he,n[11]=y*U+v*I+T*V+D*pe,n[15]=y*M+v*z+T*ie+D*Pe,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+n*l*u-a*h*u-n*o*d+r*h*d+a*o*p-r*l*p)+_*(+i*l*p-i*h*d+n*s*d-a*s*p+a*h*c-n*l*c)+m*(+i*h*u-i*o*p-n*s*u+r*s*p+n*o*c-r*h*c)+f*(-a*o*c-i*l*u+i*o*d+a*s*u-r*s*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*h-_*d*h+_*l*p-o*m*p-u*l*f+o*d*f,v=g*d*h-c*m*h-g*l*p+s*m*p+c*l*f-s*d*f,T=c*_*h-g*u*h+g*o*p-s*_*p-c*o*f+s*u*f,D=g*u*l-c*_*l-g*o*d+s*_*d+c*o*m-s*u*m,A=i*y+r*v+a*T+n*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=y*C,t[1]=(_*d*n-u*m*n-_*a*p+r*m*p+u*a*f-r*d*f)*C,t[2]=(o*m*n-_*l*n+_*a*h-r*m*h-o*a*f+r*l*f)*C,t[3]=(u*l*n-o*d*n-u*a*h+r*d*h+o*a*p-r*l*p)*C,t[4]=v*C,t[5]=(c*m*n-g*d*n+g*a*p-i*m*p-c*a*f+i*d*f)*C,t[6]=(g*l*n-s*m*n-g*a*h+i*m*h+s*a*f-i*l*f)*C,t[7]=(s*d*n-c*l*n+c*a*h-i*d*h-s*a*p+i*l*p)*C,t[8]=T*C,t[9]=(g*u*n-c*_*n-g*r*p+i*_*p+c*r*f-i*u*f)*C,t[10]=(s*_*n-g*o*n+g*r*h-i*_*h-s*r*f+i*o*f)*C,t[11]=(c*o*n-s*u*n-c*r*h+i*u*h+s*r*p-i*o*p)*C,t[12]=D*C,t[13]=(c*_*a-g*u*a+g*r*d-i*_*d-c*r*m+i*u*m)*C,t[14]=(g*o*a-s*_*a-g*r*l+i*_*l+s*r*m-i*o*m)*C,t[15]=(s*u*a-c*o*a+c*r*l-i*u*l-s*r*d+i*o*d)*C,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,u=o+o,d=n*h,p=n*c,g=n*u,_=s*c,m=s*u,f=o*u,y=l*h,v=l*c,T=l*u,D=r.x,A=r.y,C=r.z;return a[0]=(1-(_+f))*D,a[1]=(p+T)*D,a[2]=(g-v)*D,a[3]=0,a[4]=(p-T)*A,a[5]=(1-(d+f))*A,a[6]=(m+y)*A,a[7]=0,a[8]=(g+v)*C,a[9]=(m-y)*C,a[10]=(1-(d+_))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,n=xr.set(a[0],a[1],a[2]).length(),s=xr.set(a[4],a[5],a[6]).length(),o=xr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Gt.copy(this);let l=1/n,h=1/s,c=1/o;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=c,Gt.elements[9]*=c,Gt.elements[10]*=c,i.setFromRotationMatrix(Gt),r.x=n,r.y=s,r.z=o,this}makePerspective(t,i,r,a,n,s,o=hi){let l=this.elements,h=2*n/(i-t),c=2*n/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===hi)p=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===va)p=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=hi){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(s-n),d=(i+t)*h,p=(r+a)*c,g,_;if(o===hi)g=(s+n)*u,_=-2*u;else if(o===va)g=n*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},xr=new L,Gt=new ot,Bc=new L(0,0,0),Vc=new L(1,1,1),Ai=new L,ba=new L,Rt=new L,jo=new ot,qo=new mr,Ri=class wh{constructor(t=0,i=0,r=0,a=wh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return qo.setFromEuler(this),this.setFromQuaternion(qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kc=0,Yo=new L,yr=new mr,pi=new ot,wa=new L,jr=new L,Hc=new L,Gc=new mr,Jo=new L(1,0,0),Ko=new L(0,1,0),Zo=new L(0,0,1),$o={type:"added"},Wc={type:"removed"},Sr={type:"childadded",child:null},hs={type:"childremoved",child:null},Ut=class en extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();let t=new L,i=new Ri,r=new mr,a=new L(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ot},normalMatrix:{value:new je}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Jo,t)}rotateY(t){return this.rotateOnAxis(Ko,t)}rotateZ(t){return this.rotateOnAxis(Zo,t)}translateOnAxis(t,i){return Yo.copy(t).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Jo,t)}translateY(t){return this.translateOnAxis(Ko,t)}translateZ(t){return this.translateOnAxis(Zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?wa.copy(t):wa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(jr,wa,this.up):pi.lookAt(wa,jr,this.up),this.quaternion.setFromRotationMatrix(pi),a&&(pi.extractRotation(a.matrixWorld),yr.setFromRotationMatrix(pi),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Wc),hs.child=t,this.dispatchEvent(hs),hs.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};Ut.DEFAULT_UP=new L(0,1,0),Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=new L,fi=new L,cs=new L,mi=new L,Mr=new L,Er=new L,Qo=new L,us=new L,ds=new L,ps=new L,fs=new ut,ms=new ut,gs=new ut,qr=class Dr{constructor(t=new L,i=new L,r=new L){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Wt.subVectors(t,i),a.cross(Wt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Wt.subVectors(a,i),fi.subVectors(r,i),cs.subVectors(t,i);let s=Wt.dot(Wt),o=Wt.dot(fi),l=Wt.dot(cs),h=fi.dot(fi),c=fi.dot(cs),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(s*c-o*l)*d;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,mi.x),l.addScaledVector(s,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return fs.setScalar(0),ms.setScalar(0),gs.setScalar(0),fs.fromBufferAttribute(t,i),ms.fromBufferAttribute(t,r),gs.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(fs,n.x),s.addScaledVector(ms,n.y),s.addScaledVector(gs,n.z),s}static isFrontFacing(t,i,r,a){return Wt.subVectors(r,i),fi.subVectors(t,i),Wt.cross(fi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wt.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Wt.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Dr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Dr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Dr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Mr.subVectors(a,r),Er.subVectors(n,r),us.subVectors(t,r);let l=Mr.dot(us),h=Er.dot(us);if(l<=0&&h<=0)return i.copy(r);ds.subVectors(t,a);let c=Mr.dot(ds),u=Er.dot(ds);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(Mr,s);ps.subVectors(t,n);let p=Mr.dot(ps),g=Er.dot(ps);if(g>=0&&p<=g)return i.copy(n);let _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Er,o);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return Qo.subVectors(n,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(Qo,o);let f=1/(m+_+d);return s=_*f,o=d*f,i.copy(r).addScaledVector(Mr,s).addScaledVector(Er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function _s(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Rc(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=_s(n,a,e+1/3),this.g=_s(n,a,e),this.b=_s(n,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=ct){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let i=el[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Je.fromWorkingColorSpace(Mt.copy(this),e),Math.round(_t(Mt.r*255,0,255))*65536+Math.round(_t(Mt.g*255,0,255))*256+Math.round(_t(Mt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Mt.copy(this),t);let i=Mt.r,r=Mt.g,a=Mt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=ct){Je.fromWorkingColorSpace(Mt.copy(this),e);let t=Mt.r,i=Mt.g,r=Mt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Aa);let i=$n(Ci.h,Aa.h,t),r=$n(Ci.s,Aa.s,t),a=$n(Ci.l,Aa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new ke;ke.NAMES=el;var Xc=0,Yr=class extends ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=dr(),this.name="",this.blending=tr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rn,this.blendDst=an,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rn&&(i.blendSrc=this.blendSrc),this.blendDst!==an&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gi=class extends Yr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dt=new L,Ra=new _e,Xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Io,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Io&&(e.usage=this.usage),e}},tl=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},il=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},rt=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},jc=0,It=new ot,vs=new Ut,Tr=new L,Ct=new Gr,Jr=new Gr,vt=new L,Nt=class Ah extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Do(t)?il:tl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new je().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return It.makeRotationFromQuaternion(t),this.applyMatrix4(It),this}rotateX(t){return It.makeRotationX(t),this.applyMatrix4(It),this}rotateY(t){return It.makeRotationY(t),this.applyMatrix4(It),this}rotateZ(t){return It.makeRotationZ(t),this.applyMatrix4(It),this}translate(t,i,r){return It.makeTranslation(t,i,r),this.applyMatrix4(It),this}scale(t,i,r){return It.makeScale(t,i,r),this.applyMatrix4(It),this}lookAt(t){return vs.lookAt(t),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new rt(r,3))}else{for(let r=0,a=i.count;r<a;r++){let n=t[r];i.setXYZ(r,n.x,n.y,n.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Ct.setFromBufferAttribute(n),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let r=this.boundingSphere.center;if(Ct.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ct.min,Jr.min),Ct.expandByPoint(vt),vt.addVectors(Ct.max,Jr.max),Ct.expandByPoint(vt)):(Ct.expandByPoint(Jr.min),Ct.expandByPoint(Jr.max))}Ct.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)vt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(vt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)vt.fromBufferAttribute(o,h),l&&(Tr.fromBufferAttribute(t,h),vt.add(Tr)),a=Math.max(a,r.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<r.count;U++)o[U]=new L,l[U]=new L;let h=new L,c=new L,u=new L,d=new _e,p=new _e,g=new _e,_=new L,m=new L;function f(U,M,S){h.fromBufferAttribute(r,U),c.fromBufferAttribute(r,M),u.fromBufferAttribute(r,S),d.fromBufferAttribute(n,U),p.fromBufferAttribute(n,M),g.fromBufferAttribute(n,S),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),o[U].add(_),o[M].add(_),o[S].add(_),l[U].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,M=y.length;U<M;++U){let S=y[U],R=S.start,I=S.count;for(let z=R,B=R+I;z<B;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new L,T=new L,D=new L,A=new L;function C(U){D.fromBufferAttribute(a,U),A.copy(D);let M=o[U];v.copy(M),v.sub(D.multiplyScalar(D.dot(M))).normalize(),T.crossVectors(A,M);let S=T.dot(l[U])<0?-1:1;s.setXYZW(U,v.x,v.y,v.z,S)}for(let U=0,M=y.length;U<M;++U){let S=y[U],R=S.start,I=S.count;for(let z=R,B=R+I;z<B;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new L,n=new L,s=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,_),s.fromBufferAttribute(i,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vt.fromBufferAttribute(t,i),vt.normalize(),t.setXYZ(i,vt.x,vt.y,vt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let f=0;f<c;f++)d[g++]=h[p++]}return new Xt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Ah,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rl=new ot,Wi=new Xo,Ca=new as,al=new L,Pa=new L,La=new L,Ua=new L,xs=new L,Ia=new L,nl=new L,Na=new L,pt=class extends Ut{constructor(e=new Nt,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Ia.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(xs.fromBufferAttribute(c,e),n?Ia.addScaledVector(xs,h):Ia.addScaledVector(xs.sub(t),h))}t.add(Ia)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(a),Wi.copy(e.ray).recast(e.near),!(Ca.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ca,al)===null||Wi.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(rl.copy(a).invert(),Wi.copy(e.ray).applyMatrix4(rl),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let _=u[p],m=n[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(s.count,Math.min(_.start+_.count,d.start+d.count));for(let v=f,T=y;v<T;v+=3){let D=s.getX(v),A=s.getX(v+1),C=s.getX(v+2);r=Da(this,m,e,i,l,h,c,D,A,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){let f=s.getX(_),y=s.getX(_+1),v=s.getX(_+2);r=Da(this,n,e,i,l,h,c,f,y,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let _=u[p],m=n[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let v=f,T=y;v<T;v+=3){let D=v,A=v+1,C=v+2;r=Da(this,m,e,i,l,h,c,D,A,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){let f=_,y=_+1,v=_+2;r=Da(this,n,e,i,l,h,c,f,y,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function qc(e,t,i,r,a,n,s,o){let l;if(t.side===bt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===yi,o),l===null)return null;Na.copy(o),Na.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Na);return h<i.near||h>i.far?null:{distance:h,point:Na.clone(),object:e}}function Da(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,Pa),e.getVertexPosition(l,La),e.getVertexPosition(h,Ua);let c=qc(e,t,i,r,Pa,La,Ua,nl);if(c){let u=new L;qr.getBarycoord(nl,Pa,La,Ua,u),a&&(c.uv=qr.getInterpolatedAttribute(a,o,l,h,u,new _e)),n&&(c.uv1=qr.getInterpolatedAttribute(n,o,l,h,u,new _e)),s&&(c.normal=qr.getInterpolatedAttribute(s,o,l,h,u,new L),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new L,materialIndex:0};qr.getNormal(Pa,La,Ua,d.normal),c.face=d,c.barycoord=u}return c}var Xi=class Rh extends Nt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(u,2));function g(_,m,f,y,v,T,D,A,C,U,M){let S=T/C,R=D/U,I=T/2,z=D/2,B=A/2,W=C+1,V=U+1,ie=0,G=0,he=new L;for(let pe=0;pe<V;pe++){let Pe=pe*R-z;for(let Ve=0;Ve<W;Ve++){let X=Ve*S-I;he[_]=X*y,he[m]=Pe*v,he[f]=B,h.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[f]=A>0?1:-1,c.push(he.x,he.y,he.z),u.push(Ve/C),u.push(1-pe/U),ie+=1}}for(let pe=0;pe<U;pe++)for(let Pe=0;Pe<C;Pe++){let Ve=d+Pe+W*pe,X=d+Pe+W*(pe+1),fe=d+(Pe+1)+W*(pe+1),j=d+(Pe+1)+W*pe;l.push(Ve,X,j),l.push(X,fe,j),G+=6}o.addGroup(p,G,M),p+=G,d+=ie}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function br(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function Et(e){let t={};for(let i=0;i<e.length;i++){let r=br(e[i]);for(let a in r)t[a]=r[a]}return t}function Yc(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function sl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}var Jc={clone:br,merge:Et},Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends Yr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=Yc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ol=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new L,ll=new _e,hl=new _e,Pt=class extends ol{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zn*2*Math.atan(Math.tan(Kn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,ll,hl),t.subVectors(hl,ll)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Ar=1,$c=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Pt(wr,Ar,e,t);r.layers=this.layers,this.add(r);let a=new Pt(wr,Ar,e,t);a.layers=this.layers,this.add(a);let n=new Pt(wr,Ar,e,t);n.layers=this.layers,this.add(n);let s=new Pt(wr,Ar,e,t);s.layers=this.layers,this.add(s);let o=new Pt(wr,Ar,e,t);o.layers=this.layers,this.add(o);let l=new Pt(wr,Ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},cl=class extends kt{constructor(e,t,i,r,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qc=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xi(5,5,5),a=new jt({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:Si});a.uniforms.tEquirect.value=t;let n=new pt(r,a),s=t.minFilter;return t.minFilter===si&&(t.minFilter=Bt),new $c(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},ys=new L,eu=new L,tu=new je,ji=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ys.subVectors(i,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ys),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tu.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new as,Oa=new L,Ss=class{constructor(e=new ji,t=new ji,i=new ji,r=new ji,a=new ji,n=new ji){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){let i=this.planes,r=e.elements,a=r[0],n=r[1],s=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],_=r[11],m=r[12],f=r[13],y=r[14],v=r[15];if(i[0].setComponents(o-a,u-l,_-d,v-m).normalize(),i[1].setComponents(o+a,u+l,_+d,v+m).normalize(),i[2].setComponents(o+n,u+h,_+p,v+f).normalize(),i[3].setComponents(o-n,u-h,_-p,v-f).normalize(),i[4].setComponents(o-s,u-c,_-g,v-y).normalize(),t===hi)i[5].setComponents(o+s,u+c,_+g,v+y).normalize();else if(t===va)i[5].setComponents(s,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ul(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function iu(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];e.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Dt=class Ch extends Nt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],_=[],m=[];for(let f=0;f<c;f++){let y=f*d-s;for(let v=0;v<h;v++){let T=v*u-n;g.push(T,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let v=y+h*f,T=y+h*(f+1),D=y+1+h*(f+1),A=y+1+h*f;p.push(v,T,A),p.push(T,D,A)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ch(t.width,t.height,t.widthSegments,t.heightSegments)}},ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
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
#endif`,nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
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
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uu=`#ifdef USE_BATCHING
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
#endif`,du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gu=`#ifdef USE_IRIDESCENCE
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
#endif`,_u=`#ifdef USE_BUMPMAP
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wu=`#define PI 3.141592653589793
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
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ru=`vec3 transformedNormal = objectNormal;
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
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Du=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
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
}`,Xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
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
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
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
#endif`,td=`struct PhysicalMaterial {
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
}`,id=`
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dd=`#if defined( USE_POINTS_UV )
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
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
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
#endif`,xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kd=`float getShadowMask() {
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
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
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
}`,hp=`#if DEPTH_PACKING == 3200
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
}`,cp=`#define DISTANCE
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
}`,up=`#define DISTANCE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#include <common>
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,yp=`#define MATCAP
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
}`,Sp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,Ep=`#define NORMAL
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
}`,Tp=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,Ap=`#define STANDARD
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
}`,Rp=`#define TOON
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
}`,Cp=`#define TOON
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
}`,Pp=`uniform float size;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Np=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:ru,alphahash_pars_fragment:au,alphamap_fragment:nu,alphamap_pars_fragment:su,alphatest_fragment:ou,alphatest_pars_fragment:lu,aomap_fragment:hu,aomap_pars_fragment:cu,batching_pars_vertex:uu,batching_vertex:du,begin_vertex:pu,beginnormal_vertex:fu,bsdfs:mu,iridescence_fragment:gu,bumpmap_pars_fragment:_u,clipping_planes_fragment:vu,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:yu,clipping_planes_vertex:Su,color_fragment:Mu,color_pars_fragment:Eu,color_pars_vertex:Tu,color_vertex:bu,common:wu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Cu,displacementmap_vertex:Pu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Uu,colorspace_fragment:Iu,colorspace_pars_fragment:Nu,envmap_fragment:Du,envmap_common_pars_fragment:Ou,envmap_pars_fragment:Fu,envmap_pars_vertex:zu,envmap_physical_pars_fragment:Ju,envmap_vertex:Bu,fog_vertex:Vu,fog_pars_vertex:ku,fog_fragment:Hu,fog_pars_fragment:Gu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:Xu,lights_lambert_fragment:ju,lights_lambert_pars_fragment:qu,lights_pars_begin:Yu,lights_toon_fragment:Ku,lights_toon_pars_fragment:Zu,lights_phong_fragment:$u,lights_phong_pars_fragment:Qu,lights_physical_fragment:ed,lights_physical_pars_fragment:td,lights_fragment_begin:id,lights_fragment_maps:rd,lights_fragment_end:ad,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:ld,map_fragment:hd,map_pars_fragment:cd,map_particle_fragment:ud,map_particle_pars_fragment:dd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:fd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:_d,morphtarget_pars_vertex:vd,morphtarget_vertex:xd,normal_fragment_begin:yd,normal_fragment_maps:Sd,normal_pars_fragment:Md,normal_pars_vertex:Ed,normal_vertex:Td,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Cd,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Ud,project_vertex:Id,dithering_fragment:Nd,dithering_pars_fragment:Dd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Vd,shadowmask_pars_fragment:kd,skinbase_vertex:Hd,skinning_pars_vertex:Gd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:jd,specularmap_pars_fragment:qd,tonemapping_fragment:Yd,tonemapping_pars_fragment:Jd,transmission_fragment:Kd,transmission_pars_fragment:Zd,uv_pars_fragment:$d,uv_pars_vertex:Qd,uv_vertex:ep,worldpos_vertex:tp,background_vert:ip,background_frag:rp,backgroundCube_vert:ap,backgroundCube_frag:np,cube_vert:sp,cube_frag:op,depth_vert:lp,depth_frag:hp,distanceRGBA_vert:cp,distanceRGBA_frag:up,equirect_vert:dp,equirect_frag:pp,linedashed_vert:fp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:_p,meshlambert_vert:vp,meshlambert_frag:xp,meshmatcap_vert:yp,meshmatcap_frag:Sp,meshnormal_vert:Mp,meshnormal_frag:Ep,meshphong_vert:Tp,meshphong_frag:bp,meshphysical_vert:wp,meshphysical_frag:Ap,meshtoon_vert:Rp,meshtoon_frag:Cp,points_vert:Pp,points_frag:Lp,shadow_vert:Up,shadow_frag:Ip,sprite_vert:Np,sprite_frag:Dp},Te={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Qt={basic:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Et([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Et([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Et([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Et([Te.points,Te.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Et([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Et([Te.common,Te.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Et([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Et([Te.sprite,Te.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Et([Te.common,Te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Et([Te.lights,Te.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Qt.physical={uniforms:Et([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Fa={r:0,b:0,g:0},Yi=new Ri,Op=new ot;function Fp(e,t,i,r,a,n,s){let o=new ke(0),l=n===!0?0:1,h,c,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?i:t).get(v)),v}function _(y){let v=!1,T=g(y);T===null?f(o,l):T&&T.isColor&&(f(T,1),v=!0);let D=e.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,v){let T=g(v);T&&(T.isCubeTexture||T.mapping===la)?(c===void 0&&(c=new pt(new Xi(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:br(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Yi.copy(v.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(Yi)),c.material.toneMapped=Je.getTransfer(T.colorSpace)!==$e,(u!==T||d!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new pt(new Dt(2,2),new jt({name:"BackgroundMaterial",uniforms:br(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=Je.getTransfer(T.colorSpace)!==$e,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function f(y,v){y.getRGB(Fa,sl(e)),r.buffers.color.setClear(Fa.r,Fa.g,Fa.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m}}function zp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function o(S,R,I,z,B){let W=!1,V=u(z,I,R);n!==V&&(n=V,h(n.object)),W=p(S,z,I,B),W&&g(S,z,I,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,T(S,R,I,z),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function u(S,R,I){let z=I.wireframe===!0,B=r[S.id];B===void 0&&(B={},r[S.id]=B);let W=B[R.id];W===void 0&&(W={},B[R.id]=W);let V=W[z];return V===void 0&&(V=d(l()),W[z]=V),V}function d(S){let R=[],I=[],z=[];for(let B=0;B<i;B++)R[B]=0,I[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,R,I,z){let B=n.attributes,W=R.attributes,V=0,ie=I.getAttributes();for(let G in ie)if(ie[G].location>=0){let he=B[G],pe=W[G];if(pe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),he===void 0||he.attribute!==pe||pe&&he.data!==pe.data)return!0;V++}return n.attributesNum!==V||n.index!==z}function g(S,R,I,z){let B={},W=R.attributes,V=0,ie=I.getAttributes();for(let G in ie)if(ie[G].location>=0){let he=W[G];he===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));let pe={};pe.attribute=he,he&&he.data&&(pe.data=he.data),B[G]=pe,V++}n.attributes=B,n.attributesNum=V,n.index=z}function _(){let S=n.newAttributes;for(let R=0,I=S.length;R<I;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){let I=n.newAttributes,z=n.enabledAttributes,B=n.attributeDivisors;I[S]=1,z[S]===0&&(e.enableVertexAttribArray(S),z[S]=1),B[S]!==R&&(e.vertexAttribDivisor(S,R),B[S]=R)}function y(){let S=n.newAttributes,R=n.enabledAttributes;for(let I=0,z=R.length;I<z;I++)R[I]!==S[I]&&(e.disableVertexAttribArray(I),R[I]=0)}function v(S,R,I,z,B,W,V){V===!0?e.vertexAttribIPointer(S,R,I,B,W):e.vertexAttribPointer(S,R,I,z,B,W)}function T(S,R,I,z){_();let B=z.attributes,W=I.getAttributes(),V=R.defaultAttributeValues;for(let ie in W){let G=W[ie];if(G.location>=0){let he=B[ie];if(he===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){let pe=he.normalized,Pe=he.itemSize,Ve=t.get(he);if(Ve===void 0)continue;let X=Ve.buffer,fe=Ve.type,j=Ve.bytesPerElement,ce=fe===e.INT||fe===e.UNSIGNED_INT||he.gpuType===gn;if(he.isInterleavedBufferAttribute){let Z=he.data,ge=Z.stride,Me=he.offset;if(Z.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)f(G.location+Ce,Z.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,X);for(let Ce=0;Ce<G.locationSize;Ce++)v(G.location+Ce,Pe/G.locationSize,fe,pe,ge*j,(Me+Pe/G.locationSize*Ce)*j,ce)}else{if(he.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)f(G.location+Z,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);e.bindBuffer(e.ARRAY_BUFFER,X);for(let Z=0;Z<G.locationSize;Z++)v(G.location+Z,Pe/G.locationSize,fe,pe,Pe*j,Pe/G.locationSize*Z*j,ce)}}else if(V!==void 0){let pe=V[ie];if(pe!==void 0)switch(pe.length){case 2:e.vertexAttrib2fv(G.location,pe);break;case 3:e.vertexAttrib3fv(G.location,pe);break;case 4:e.vertexAttrib4fv(G.location,pe);break;default:e.vertexAttrib1fv(G.location,pe)}}}}y()}function D(){U();for(let S in r){let R=r[S];for(let I in R){let z=R[I];for(let B in z)c(z[B].object),delete z[B];delete R[I]}delete r[S]}}function A(S){if(r[S.id]===void 0)return;let R=r[S.id];for(let I in R){let z=R[I];for(let B in z)c(z[B].object),delete z[B];delete R[I]}delete r[S.id]}function C(S){for(let R in r){let I=r[R];if(I[S.id]===void 0)continue;let z=I[S.id];for(let B in z)c(z[B].object),delete z[B];delete I[S.id]}}function U(){M(),s=!0,n!==a&&(n=a,h(n.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Bp(e,t,i){let r;function a(h){r=h}function n(h,c){e.drawArrays(r,h,c),i.update(c,r,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)s(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_]*d[_];i.update(g,r,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vp(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Vt&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let U=C===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==oi&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!U)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:T,vertexTextures:D,maxSamples:A}}function kp(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ji,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!a||g===null||g.length===0||n&&!m)n?c(null):h();else{let y=n?0:r,v=y*4,T=f.clippingState||null;l.value=T,T=c(g,d,v,p);for(let D=0;D!==v;++D)T[D]=i[D];f.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,T=p;v!==_;++v,T+=4)s.copy(u[v]).applyMatrix4(y,o),s.normal.toArray(m,T),m[T+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hp(e){let t=new WeakMap;function i(s,o){return o===dn?s.mapping=rr:o===pn&&(s.mapping=ar),s}function r(s){if(s&&s.isTexture){let o=s.mapping;if(o===dn||o===pn)if(t.has(s)){let l=t.get(s).texture;return i(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Qc(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),i(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:r,dispose:n}}var Ms=class extends ol{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rr=4,dl=[.125,.215,.35,.446,.526,.582],Ji=20,Es=new Ms,pl=new ke,Ts=null,bs=0,ws=0,As=!1,Ki=(1+Math.sqrt(5))/2,Cr=1/Ki,fl=[new L(-Ki,Cr,0),new L(Ki,Cr,0),new L(-Cr,0,Ki),new L(Cr,0,Ki),new L(0,Ki,-Cr),new L(0,Ki,Cr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ts=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ts,bs,ws),this._renderer.xr.enabled=As,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ts=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:nr,format:Vt,colorSpace:hr,depthBuffer:!1},r=ml(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(a)),this._blurMaterial=Wp(a,e,t)}return r}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,i,r){let a=new Pt(90,1,t,i),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(pl),o.toneMapping=$t,o.autoClear=!1;let c=new Gi({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),u=new pt(new Xi,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(pl),d=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,n[g],0),a.lookAt(s[g],0,0)):_===1?(a.up.set(0,0,n[g]),a.lookAt(0,s[g],0)):(a.up.set(0,n[g],0),a.lookAt(0,0,s[g]));let m=this._cubeSize;za(r,_*m,g>2?m:0,m,m),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===rr||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new pt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;za(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Es)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=fl[(r-a-1)%fl.length];this._blur(e,a-1,a,n,s)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new pt(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),g=a/p,_=isFinite(a)?1+Math.floor(h*g):Ji;_>Ji&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ji}`);let m=[],f=0;for(let A=0;A<Ji;++A){let C=A/g,U=Math.exp(-C*C/2);m.push(U),A===0?f+=U:A<_&&(f+=2*U)}for(let A=0;A<m.length;A++)m[A]=m[A]/f;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let v=this._sizeLods[r],T=3*v*(r>y-Rr?r-y+Rr:0),D=4*(this._cubeSize-v);za(t,T,D,3*v,2*v),o.setRenderTarget(t),o.render(c,Es)}};function Gp(e){let t=[],i=[],r=[],a=e,n=e-Rr+1+dl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);i.push(o);let l=1/o;s>e-Rr?l=dl[s-e+Rr-1]:s===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,U=A>2?0:-1,M=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(M,_*g*A),v.set(d,m*g*A);let S=[A,A,A,A,A,A];T.set(S,f*g*A)}let D=new Nt;D.setAttribute("position",new Xt(y,_)),D.setAttribute("uv",new Xt(v,m)),D.setAttribute("faceIndex",new Xt(T,f)),t.push(D),a>Rr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function ml(e,t,i){let r=new Ei(e,t,i);return r.texture.mapping=la,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function za(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Wp(e,t,i){let r=new Float32Array(Ji),a=new L(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function gl(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function _l(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Cs(){return`

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
	`}function Xp(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===dn||l===pn,c=l===rr||l===ar;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new Rs(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new Rs(e)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:s}}function jp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Hr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function qp(e,t,i,r){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",s),delete a[d.id];let p=n.get(d);p&&(t.remove(p),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let v=0,T=y.length;v<T;v+=3){let D=y[v+0],A=y[v+1],C=y[v+2];d.push(D,A,A,C,C,D)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,T=y.length/3-1;v<T;v+=3){let D=v+0,A=v+1,C=v+2;d.push(D,A,A,C,C,D)}}else return;let m=new(Do(d)?il:tl)(d,1);m.version=_;let f=n.get(u);f&&t.remove(f),n.set(u,m)}function c(u){let d=n.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Yp(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,p){e.drawElements(r,p,n,d*s),i.update(p,r,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(r,p,n,d*s,g),i.update(p,r,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,n,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];i.update(_,r,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/s,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,n,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];i.update(f,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Jp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Kp(e,t,i){let r=new WeakMap,a=new ut;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){U.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;g===!0&&(T=1),_===!0&&(T=2),m===!0&&(T=3);let D=o.attributes.position.count*T,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let C=new Float32Array(D*A*4*u),U=new Go(C,D,A,u);U.type=li,U.needsUpdate=!0;let M=T*4;for(let S=0;S<u;S++){let R=f[S],I=y[S],z=v[S],B=D*A*4*S;for(let W=0;W<R.count;W++){let V=W*M;g===!0&&(a.fromBufferAttribute(R,W),C[B+V+0]=a.x,C[B+V+1]=a.y,C[B+V+2]=a.z,C[B+V+3]=0),_===!0&&(a.fromBufferAttribute(I,W),C[B+V+4]=a.x,C[B+V+5]=a.y,C[B+V+6]=a.z,C[B+V+7]=0),m===!0&&(a.fromBufferAttribute(z,W),C[B+V+8]=a.x,C[B+V+9]=a.y,C[B+V+10]=a.z,C[B+V+11]=z.itemSize===4?a.w:1)}}d={count:u,texture:U,size:new _e(D,A)},r.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function Zp(e,t,i,r){let a=new WeakMap;function n(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:n,dispose:s}}var vl=class extends kt{constructor(e,t,i,r,a,n,s,o,l,h=or){if(h!==or&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===or&&(i=Vi),i===void 0&&h===lr&&(i=sr),super(null,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:zt,this.minFilter=o!==void 0?o:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xl=new kt,yl=new vl(1,1),Sl=new Go,Ml=new Fc,El=new cl,Tl=[],bl=[],wl=new Float32Array(16),Al=new Float32Array(9),Rl=new Float32Array(4);function Pr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Tl[a];if(n===void 0&&(n=new Float32Array(a),Tl[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function ft(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function mt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Ba(e,t){let i=bl[t];i===void 0&&(i=new Int32Array(t),bl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function $p(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Qp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ft(i,t))return;e.uniform2fv(this.addr,t),mt(i,t)}}function ef(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ft(i,t))return;e.uniform3fv(this.addr,t),mt(i,t)}}function tf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ft(i,t))return;e.uniform4fv(this.addr,t),mt(i,t)}}function rf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ft(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),mt(i,t)}else{if(ft(i,r))return;Rl.set(r),e.uniformMatrix2fv(this.addr,!1,Rl),mt(i,r)}}function af(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ft(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),mt(i,t)}else{if(ft(i,r))return;Al.set(r),e.uniformMatrix3fv(this.addr,!1,Al),mt(i,r)}}function nf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ft(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),mt(i,t)}else{if(ft(i,r))return;wl.set(r),e.uniformMatrix4fv(this.addr,!1,wl),mt(i,r)}}function sf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function of(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ft(i,t))return;e.uniform2iv(this.addr,t),mt(i,t)}}function lf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ft(i,t))return;e.uniform3iv(this.addr,t),mt(i,t)}}function hf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ft(i,t))return;e.uniform4iv(this.addr,t),mt(i,t)}}function cf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function uf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ft(i,t))return;e.uniform2uiv(this.addr,t),mt(i,t)}}function df(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ft(i,t))return;e.uniform3uiv(this.addr,t),mt(i,t)}}function pf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ft(i,t))return;e.uniform4uiv(this.addr,t),mt(i,t)}}function ff(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(yl.compareFunction=Uo,n=yl):n=xl,i.setTexture2D(t||n,a)}function mf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Ml,a)}function gf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||El,a)}function _f(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Sl,a)}function vf(e){switch(e){case 5126:return $p;case 35664:return Qp;case 35665:return ef;case 35666:return tf;case 35674:return rf;case 35675:return af;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return hf;case 5125:return cf;case 36294:return uf;case 36295:return df;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(e,t){e.uniform1fv(this.addr,t)}function yf(e,t){let i=Pr(t,this.size,2);e.uniform2fv(this.addr,i)}function Sf(e,t){let i=Pr(t,this.size,3);e.uniform3fv(this.addr,i)}function Mf(e,t){let i=Pr(t,this.size,4);e.uniform4fv(this.addr,i)}function Ef(e,t){let i=Pr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Tf(e,t){let i=Pr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function bf(e,t){let i=Pr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function wf(e,t){e.uniform1iv(this.addr,t)}function Af(e,t){e.uniform2iv(this.addr,t)}function Rf(e,t){e.uniform3iv(this.addr,t)}function Cf(e,t){e.uniform4iv(this.addr,t)}function Pf(e,t){e.uniform1uiv(this.addr,t)}function Lf(e,t){e.uniform2uiv(this.addr,t)}function Uf(e,t){e.uniform3uiv(this.addr,t)}function If(e,t){e.uniform4uiv(this.addr,t)}function Nf(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));for(let s=0;s!==a;++s)i.setTexture2D(t[s]||xl,n[s])}function Df(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Ml,n[s])}function Of(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||El,n[s])}function Ff(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Sl,n[s])}function zf(e){switch(e){case 5126:return xf;case 35664:return yf;case 35665:return Sf;case 35666:return Mf;case 35674:return Ef;case 35675:return Tf;case 35676:return bf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Lf;case 36295:return Uf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}var Bf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vf(t.type)}},Vf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zf(t.type)}},kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Ps=/(\w+)(\])?(\[|\.)?/g;function Cl(e,t){e.seq.push(t),e.map[t.id]=t}function Hf(e,t,i){let r=e.name,a=r.length;for(Ps.lastIndex=0;;){let n=Ps.exec(r),s=Ps.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){Cl(i,h===void 0?new Bf(o,e,t):new Vf(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new kf(o),Cl(i,c)),i=c}}}var Va=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),n=e.getUniformLocation(t,a.name);Hf(a,n,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Pl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Gf=37297,Wf=0;function Xf(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Ll=new je;function jf(e){Je._getMatrix(Ll,Je.workingColorSpace,e);let t=`mat3( ${Ll.elements.map(i=>i.toFixed(4))} )`;switch(Je.getTransfer(e)){case _a:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ul(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Xf(e.getShaderSource(t),s)}else return a}function qf(e,t){let i=jf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Yf(e,t){let i;switch(t){case cc:i="Linear";break;case uc:i="Reinhard";break;case dc:i="Cineon";break;case pc:i="ACESFilmic";break;case mc:i="AgX";break;case gc:i="Neutral";break;case fc:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var ka=new L;function Jf(){Je.getLuminanceCoefficients(ka);let e=ka.x.toFixed(4),t=ka.y.toFixed(4),i=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Zf(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function $f(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Kr(e){return e!==""}function Il(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ls(e){return e.replace(Qf,tm)}var em=new Map;function tm(e,t){let i=Xe[t];if(i===void 0){let r=em.get(t);if(r!==void 0)i=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ls(i)}var im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(e){return e.replace(im,rm)}function rm(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Ol(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function am(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===co?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function nm(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case rr:case ar:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sm(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===ar&&(t="ENVMAP_MODE_REFRACTION"),t}function om(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case mo:t="ENVMAP_BLENDING_MULTIPLY";break;case lc:t="ENVMAP_BLENDING_MIX";break;case hc:t="ENVMAP_BLENDING_ADD";break}return t}function lm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hm(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=am(i),h=nm(i),c=sm(i),u=om(i),d=lm(i),p=Kf(i),g=Zf(n),_=a.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Kr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ol(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),f=[Ol(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$t?"#define TONE_MAPPING":"",i.toneMapping!==$t?Xe.tonemapping_pars_fragment:"",i.toneMapping!==$t?Yf("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,qf("linearToOutputTexel",i.outputColorSpace),Jf(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Kr).join(`
`)),s=Ls(s),s=Il(s,i),s=Nl(s,i),o=Ls(o),o=Il(o,i),o=Nl(o,i),s=Dl(s),o=Dl(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+s,T=y+f+o,D=Pl(a,a.VERTEX_SHADER,v),A=Pl(a,a.FRAGMENT_SHADER,T);a.attachShader(_,D),a.attachShader(_,A),i.index0AttributeName!==void 0?a.bindAttribLocation(_,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function C(R){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(_).trim(),z=a.getShaderInfoLog(D).trim(),B=a.getShaderInfoLog(A).trim(),W=!0,V=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,_,D,A);else{let ie=Ul(a,D,"vertex"),G=Ul(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+ie+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||B==="")&&(V=!1);V&&(R.diagnostics={runnable:W,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:f}})}a.deleteShader(D),a.deleteShader(A),U=new Va(a,_),M=$f(a,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(_,Gf)),S},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Wf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}var cm=0,um=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dm(e),t.set(e,i)),i}},dm=class{constructor(e){this.id=cm++,this.code=e,this.usedTimes=0}};function pm(e,t,i,r,a,n,s){let o=new ls,l=new um,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,S,R,I,z){let B=I.fog,W=z.geometry,V=M.isMeshStandardMaterial?I.environment:null,ie=(M.isMeshStandardMaterial?i:t).get(M.envMap||V),G=ie&&ie.mapping===la?ie.image.height:null,he=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Pe=pe!==void 0?pe.length:0,Ve=0;W.morphAttributes.position!==void 0&&(Ve=1),W.morphAttributes.normal!==void 0&&(Ve=2),W.morphAttributes.color!==void 0&&(Ve=3);let X,fe,j,ce;if(he){let Ze=Qt[he];X=Ze.vertexShader,fe=Ze.fragmentShader}else X=M.vertexShader,fe=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);let Z=e.getRenderTarget(),ge=e.state.buffers.depth.getReversed(),Me=z.isInstancedMesh===!0,Ce=z.isBatchedMesh===!0,K=!!M.map,ue=!!M.matcap,b=!!ie,xe=!!M.aoMap,ne=!!M.lightMap,Ee=!!M.bumpMap,le=!!M.normalMap,Ne=!!M.displacementMap,Y=!!M.emissiveMap,Ae=!!M.metalnessMap,w=!!M.roughnessMap,x=M.anisotropy>0,F=M.clearcoat>0,ee=M.dispersion>0,oe=M.iridescence>0,$=M.sheen>0,te=M.transmission>0,q=x&&!!M.anisotropyMap,ae=F&&!!M.clearcoatMap,ve=F&&!!M.clearcoatNormalMap,Q=F&&!!M.clearcoatRoughnessMap,de=oe&&!!M.iridescenceMap,Ue=oe&&!!M.iridescenceThicknessMap,be=$&&!!M.sheenColorMap,ye=$&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ie=!!M.specularColorMap,Fe=!!M.specularIntensityMap,P=te&&!!M.transmissionMap,re=te&&!!M.thicknessMap,J=!!M.gradientMap,se=!!M.alphaMap,we=M.alphaTest>0,Se=!!M.alphaHash,Ye=!!M.extensions,st=$t;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(st=e.toneMapping);let xt={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:fe,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&z._colorsTexture!==null,instancing:Me,instancingColor:Me&&z.instanceColor!==null,instancingMorph:Me&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?e.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:hr,alphaToCoverage:!!M.alphaToCoverage,map:K,matcap:ue,envMap:b,envMapMode:b&&ie.mapping,envMapCubeUVHeight:G,aoMap:xe,lightMap:ne,bumpMap:Ee,normalMap:le,displacementMap:d&&Ne,emissiveMap:Y,normalMapObjectSpace:le&&M.normalMapType===yc,normalMapTangentSpace:le&&M.normalMapType===Po,metalnessMap:Ae,roughnessMap:w,anisotropy:x,anisotropyMap:q,clearcoat:F,clearcoatMap:ae,clearcoatNormalMap:ve,clearcoatRoughnessMap:Q,dispersion:ee,iridescence:oe,iridescenceMap:de,iridescenceThicknessMap:Ue,sheen:$,sheenColorMap:be,sheenRoughnessMap:ye,specularMap:Be,specularColorMap:Ie,specularIntensityMap:Fe,transmission:te,transmissionMap:P,thicknessMap:re,gradientMap:J,opaque:M.transparent===!1&&M.blending===tr&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:we,alphaHash:Se,combine:M.combine,mapUv:K&&_(M.map.channel),aoMapUv:xe&&_(M.aoMap.channel),lightMapUv:ne&&_(M.lightMap.channel),bumpMapUv:Ee&&_(M.bumpMap.channel),normalMapUv:le&&_(M.normalMap.channel),displacementMapUv:Ne&&_(M.displacementMap.channel),emissiveMapUv:Y&&_(M.emissiveMap.channel),metalnessMapUv:Ae&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:q&&_(M.anisotropyMap.channel),clearcoatMapUv:ae&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(M.sheenRoughnessMap.channel),specularMapUv:Be&&_(M.specularMap.channel),specularColorMapUv:Ie&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:P&&_(M.transmissionMap.channel),thicknessMapUv:re&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(le||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(K||se),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:st,decodeVideoTexture:K&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===$e,decodeVideoTextureEmissive:Y&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=h.has(1),xt.vertexUv2s=h.has(2),xt.vertexUv3s=h.has(3),h.clear(),xt}function f(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(e.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function T(M){let S=g[M.type],R;if(S){let I=Qt[S];R=Jc.clone(I.uniforms)}else R=M.uniforms;return R}function D(M,S){let R;for(let I=0,z=c.length;I<z;I++){let B=c[I];if(B.cacheKey===S){R=B,++R.usedTimes;break}}return R===void 0&&(R=new hm(e,S,M,n),c.push(R)),R}function A(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:U}}function fm(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function mm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Fl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function zl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u,d,p,g,_,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){let f=s(u,d,p,g,_,m);p.transmission>0?r.push(f):p.transparent===!0?a.push(f):i.push(f)}function l(u,d,p,g,_,m){let f=s(u,d,p,g,_,m);p.transmission>0?r.unshift(f):p.transparent===!0?a.unshift(f):i.unshift(f)}function h(u,d){i.length>1&&i.sort(u||mm),r.length>1&&r.sort(d||Fl),a.length>1&&a.sort(d||Fl)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function gm(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new zl,e.set(r,[s])):a>=n.length?(s=new zl,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function _m(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new L,color:new ke};break;case"SpotLight":i={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":i={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=i,i}}}function vm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var xm=0;function ym(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Sm(e){let t=new _m,i=vm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new L);let a=new L,n=new ot,s=new ot;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,v=0,T=0,D=0,A=0,C=0;h.sort(ym);for(let M=0,S=h.length;M<S;M++){let R=h[M],I=R.color,z=R.intensity,B=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=I.r*z,u+=I.g*z,d+=I.b*z;else if(R.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(R.sh.coefficients[V],z);C++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ie=R.shadow,G=i.get(R);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,r.directionalShadow[p]=G,r.directionalShadowMap[p]=W,r.directionalShadowMatrix[p]=R.shadow.matrix,y++}r.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(I).multiplyScalar(z),V.distance=B,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,r.spot[_]=V;let ie=R.shadow;if(R.map&&(r.spotLightMap[D]=R.map,D++,ie.updateMatrices(R),R.castShadow&&A++),r.spotLightMatrix[_]=ie.matrix,R.castShadow){let G=i.get(R);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,r.spotShadow[_]=G,r.spotShadowMap[_]=W,T++}_++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(I).multiplyScalar(z),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),r.rectArea[m]=V,m++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let ie=R.shadow,G=i.get(R);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,G.shadowCameraNear=ie.camera.near,G.shadowCameraFar=ie.camera.far,r.pointShadow[g]=G,r.pointShadowMap[g]=W,r.pointShadowMatrix[g]=R.shadow.matrix,v++}r.point[g]=V,g++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(z),V.groundColor.copy(R.groundColor).multiplyScalar(z),r.hemi[f]=V,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let U=r.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==y||U.numPointShadows!==v||U.numSpotShadows!==T||U.numSpotMaps!==D||U.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=f,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=T+D-A,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=y,U.numPointShadows=v,U.numSpotShadows=T,U.numSpotMaps=D,U.numLightProbes=C,r.version=xm++)}function l(h,c){let u=0,d=0,p=0,g=0,_=0,m=c.matrixWorldInverse;for(let f=0,y=h.length;f<y;f++){let v=h[f];if(v.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),u++}else if(v.isSpotLight){let T=r.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let T=r.rectArea[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),s.identity(),n.copy(v.matrixWorld),n.premultiply(m),s.extractRotation(n),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){let T=r.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let T=r.hemi[_];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:r}}function Bl(e){let t=new Sm(e),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function n(c){i.push(c)}function s(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function Mm(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Bl(e),t.set(a,[o])):n>=s.length?(o=new Bl(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Em=class extends Yr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tm=class extends Yr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wm=`uniform sampler2D shadow_pass;
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
}`;function Am(e,t,i){let r=new Ss,a=new _e,n=new _e,s=new ut,o=new Em({depthPacking:xc}),l=new Tm,h={},c=i.maxTextureSize,u={[yi]:bt,[bt]:yi,[Zt]:Zt},d=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:bm,fragmentShader:wm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let f=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=e.getRenderTarget(),S=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),I=e.state;I.setBlending(Si),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let z=f!==ni&&this.type===ni,B=f===ni&&this.type!==ni;for(let W=0,V=A.length;W<V;W++){let ie=A[W],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let he=G.getFrameExtents();if(a.multiply(he),n.copy(G.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/he.x),a.x=n.x*he.x,G.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/he.y),a.y=n.y*he.y,G.mapSize.y=n.y)),G.map===null||z===!0||B===!0){let Pe=this.type!==ni?{minFilter:zt,magFilter:zt}:{};G.map!==null&&G.map.dispose(),G.map=new Ei(a.x,a.y,Pe),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let pe=G.getViewportCount();for(let Pe=0;Pe<pe;Pe++){let Ve=G.getViewport(Pe);s.set(n.x*Ve.x,n.y*Ve.y,n.x*Ve.z,n.y*Ve.w),I.viewport(s),G.updateMatrices(ie,Pe),r=G.getFrustum(),T(C,U,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===ni&&y(G,U),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(M,S,R)};function y(A,C){let U=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ei(a.x,a.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(C,null,U,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(C,null,U,p,_,null)}function v(A,C,U,M){let S=null,R=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=S.uuid,z=C.uuid,B=h[I];B===void 0&&(B={},h[I]=B);let W=B[z];W===void 0&&(W=S.clone(),B[z]=W,C.addEventListener("dispose",D)),S=W}if(S.visible=C.visible,S.wireframe=C.wireframe,M===ni?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=e.properties.get(S);I.light=U}return S}function T(A,C,U,M,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ni)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let I=t.update(A),z=A.material;if(Array.isArray(z)){let B=I.groups;for(let W=0,V=B.length;W<V;W++){let ie=B[W],G=z[ie.materialIndex];if(G&&G.visible){let he=v(A,G,M,S);A.onBeforeShadow(e,A,C,U,I,he,ie),e.renderBufferDirect(U,null,I,he,A,ie),A.onAfterShadow(e,A,C,U,I,he,ie)}}}else if(z.visible){let B=v(A,z,M,S);A.onBeforeShadow(e,A,C,U,I,B,null),e.renderBufferDirect(U,null,I,B,A,null),A.onAfterShadow(e,A,C,U,I,B,null)}}let R=A.children;for(let I=0,z=R.length;I<z;I++)T(R[I],C,U,M,S)}function D(A){A.target.removeEventListener("dispose",D);for(let C in h){let U=h[C],M=A.target.uuid;M in U&&(U[M].dispose(),delete U[M])}}}var Rm={[nn]:sn,[on]:cn,[ln]:un,[ir]:hn,[sn]:nn,[cn]:on,[un]:ln,[hn]:ir};function Cm(e,t){function i(){let P=!1,re=new ut,J=null,se=new ut(0,0,0,0);return{setMask:function(we){J!==we&&!P&&(e.colorMask(we,we,we,we),J=we)},setLocked:function(we){P=we},setClear:function(we,Se,Ye,st,xt){xt===!0&&(we*=st,Se*=st,Ye*=st),re.set(we,Se,Ye,st),se.equals(re)===!1&&(e.clearColor(we,Se,Ye,st),se.copy(re))},reset:function(){P=!1,J=null,se.set(-1,0,0,0)}}}function r(){let P=!1,re=!1,J=null,se=null,we=null;return{setReversed:function(Se){if(re!==Se){let Ye=t.get("EXT_clip_control");re?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let st=we;we=null,this.setClear(st)}re=Se},getReversed:function(){return re},setTest:function(Se){Se?Z(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(Se){J!==Se&&!P&&(e.depthMask(Se),J=Se)},setFunc:function(Se){if(re&&(Se=Rm[Se]),se!==Se){switch(Se){case nn:e.depthFunc(e.NEVER);break;case sn:e.depthFunc(e.ALWAYS);break;case on:e.depthFunc(e.LESS);break;case ir:e.depthFunc(e.LEQUAL);break;case ln:e.depthFunc(e.EQUAL);break;case hn:e.depthFunc(e.GEQUAL);break;case cn:e.depthFunc(e.GREATER);break;case un:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=Se}},setLocked:function(Se){P=Se},setClear:function(Se){we!==Se&&(re&&(Se=1-Se),e.clearDepth(Se),we=Se)},reset:function(){P=!1,J=null,se=null,we=null,re=!1}}}function a(){let P=!1,re=null,J=null,se=null,we=null,Se=null,Ye=null,st=null,xt=null;return{setTest:function(Ze){P||(Ze?Z(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!P&&(e.stencilMask(Ze),re=Ze)},setFunc:function(Ze,ai,Jt){(J!==Ze||se!==ai||we!==Jt)&&(e.stencilFunc(Ze,ai,Jt),J=Ze,se=ai,we=Jt)},setOp:function(Ze,ai,Jt){(Se!==Ze||Ye!==ai||st!==Jt)&&(e.stencilOp(Ze,ai,Jt),Se=Ze,Ye=ai,st=Jt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){xt!==Ze&&(e.clearStencil(Ze),xt=Ze)},reset:function(){P=!1,re=null,J=null,se=null,we=null,Se=null,Ye=null,st=null,xt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,v=null,T=null,D=null,A=null,C=new ke(0,0,0),U=0,M=!1,S=null,R=null,I=null,z=null,B=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=ie>=2);let he=null,pe={},Pe=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),X=new ut().fromArray(Pe),fe=new ut().fromArray(Ve);function j(P,re,J,se){let we=new Uint8Array(4),Se=e.createTexture();e.bindTexture(P,Se),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ye=0;Ye<J;Ye++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(re,0,e.RGBA,1,1,se,0,e.RGBA,e.UNSIGNED_BYTE,we):e.texImage2D(re+Ye,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return Se}let ce={};ce[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Z(e.DEPTH_TEST),s.setFunc(ir),Ee(!1),le(ho),Z(e.CULL_FACE),xe(Si);function Z(P){c[P]!==!0&&(e.enable(P),c[P]=!0)}function ge(P){c[P]!==!1&&(e.disable(P),c[P]=!1)}function Me(P,re){return u[P]!==re?(e.bindFramebuffer(P,re),u[P]=re,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=re),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=re),!0):!1}function Ce(P,re){let J=p,se=!1;if(P){J=d.get(re),J===void 0&&(J=[],d.set(re,J));let we=P.textures;if(J.length!==we.length||J[0]!==e.COLOR_ATTACHMENT0){for(let Se=0,Ye=we.length;Se<Ye;Se++)J[Se]=e.COLOR_ATTACHMENT0+Se;J.length=we.length,se=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,se=!0);se&&e.drawBuffers(J)}function K(P){return g!==P?(e.useProgram(P),g=P,!0):!1}let ue={[zi]:e.FUNC_ADD,[Xh]:e.FUNC_SUBTRACT,[jh]:e.FUNC_REVERSE_SUBTRACT};ue[qh]=e.MIN,ue[Yh]=e.MAX;let b={[Jh]:e.ZERO,[Kh]:e.ONE,[Zh]:e.SRC_COLOR,[rn]:e.SRC_ALPHA,[rc]:e.SRC_ALPHA_SATURATE,[tc]:e.DST_COLOR,[Qh]:e.DST_ALPHA,[$h]:e.ONE_MINUS_SRC_COLOR,[an]:e.ONE_MINUS_SRC_ALPHA,[ic]:e.ONE_MINUS_DST_COLOR,[ec]:e.ONE_MINUS_DST_ALPHA,[ac]:e.CONSTANT_COLOR,[nc]:e.ONE_MINUS_CONSTANT_COLOR,[sc]:e.CONSTANT_ALPHA,[oc]:e.ONE_MINUS_CONSTANT_ALPHA};function xe(P,re,J,se,we,Se,Ye,st,xt,Ze){if(P===Si){_===!0&&(ge(e.BLEND),_=!1);return}if(_===!1&&(Z(e.BLEND),_=!0),P!==Wh){if(P!==m||Ze!==M){if((f!==zi||T!==zi)&&(e.blendEquation(e.FUNC_ADD),f=zi,T=zi),Ze)switch(P){case tr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case uo:e.blendFunc(e.ONE,e.ONE);break;case po:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fo:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case tr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case uo:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case po:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fo:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,v=null,D=null,A=null,C.set(0,0,0),U=0,m=P,M=Ze}return}we=we||re,Se=Se||J,Ye=Ye||se,(re!==f||we!==T)&&(e.blendEquationSeparate(ue[re],ue[we]),f=re,T=we),(J!==y||se!==v||Se!==D||Ye!==A)&&(e.blendFuncSeparate(b[J],b[se],b[Se],b[Ye]),y=J,v=se,D=Se,A=Ye),(st.equals(C)===!1||xt!==U)&&(e.blendColor(st.r,st.g,st.b,xt),C.copy(st),U=xt),m=P,M=!1}function ne(P,re){P.side===Zt?ge(e.CULL_FACE):Z(e.CULL_FACE);let J=P.side===bt;re&&(J=!J),Ee(J),P.blending===tr&&P.transparent===!1?xe(Si):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);let se=P.stencilWrite;o.setTest(se),se&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Y(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Z(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(P){S!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),S=P)}function le(P){P!==kh?(Z(e.CULL_FACE),P!==R&&(P===ho?e.cullFace(e.BACK):P===Hh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ge(e.CULL_FACE),R=P}function Ne(P){P!==I&&(V&&e.lineWidth(P),I=P)}function Y(P,re,J){P?(Z(e.POLYGON_OFFSET_FILL),(z!==re||B!==J)&&(e.polygonOffset(re,J),z=re,B=J)):ge(e.POLYGON_OFFSET_FILL)}function Ae(P){P?Z(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function w(P){P===void 0&&(P=e.TEXTURE0+W-1),he!==P&&(e.activeTexture(P),he=P)}function x(P,re,J){J===void 0&&(he===null?J=e.TEXTURE0+W-1:J=he);let se=pe[J];se===void 0&&(se={type:void 0,texture:void 0},pe[J]=se),(se.type!==P||se.texture!==re)&&(he!==J&&(e.activeTexture(J),he=J),e.bindTexture(P,re||ce[P]),se.type=P,se.texture=re)}function F(){let P=pe[he];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(P){X.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),X.copy(P))}function ye(P){fe.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function Be(P,re){let J=h.get(re);J===void 0&&(J=new WeakMap,h.set(re,J));let se=J.get(P);se===void 0&&(se=e.getUniformBlockIndex(re,P.name),J.set(P,se))}function Ie(P,re){let J=h.get(re).get(P);l.get(re)!==J&&(e.uniformBlockBinding(re,J,P.__bindingPointIndex),l.set(re,J))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},he=null,pe={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,v=null,T=null,D=null,A=null,C=new ke(0,0,0),U=0,M=!1,S=null,R=null,I=null,z=null,B=null,X.set(0,0,e.canvas.width,e.canvas.height),fe.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:Z,disable:ge,bindFramebuffer:Me,drawBuffers:Ce,useProgram:K,setBlending:xe,setMaterial:ne,setFlipSided:Ee,setCullFace:le,setLineWidth:Ne,setPolygonOffset:Y,setScissorTest:Ae,activeTexture:w,bindTexture:x,unbindTexture:F,compressedTexImage2D:ee,compressedTexImage3D:oe,texImage2D:de,texImage3D:Ue,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:ve,texStorage3D:Q,texSubImage2D:$,texSubImage3D:te,compressedTexSubImage2D:q,compressedTexSubImage3D:ae,scissor:be,viewport:ye,reset:Fe}}function Vl(e,t,i,r){let a=Pm(r);switch(i){case yo:return e*t;case Mo:return e*t;case Eo:return e*t*2;case To:return e*t/a.components*a.byteLength;case xn:return e*t/a.components*a.byteLength;case bo:return e*t*2/a.components*a.byteLength;case yn:return e*t*2/a.components*a.byteLength;case So:return e*t*3/a.components*a.byteLength;case Vt:return e*t*4/a.components*a.byteLength;case Sn:return e*t*4/a.components*a.byteLength;case ua:case da:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pa:case fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case En:case bn:return Math.max(e,16)*Math.max(t,8)/4;case Mn:case Tn:return Math.max(e,8)*Math.max(t,8)/2;case wn:case An:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ln:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Un:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case In:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Nn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Dn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case On:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Fn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case zn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Bn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Vn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case kn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ma:case Gn:case Wn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wo:case Xn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jn:case qn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Pm(e){switch(e){case oi:case _o:return{byteLength:1,components:1};case Vr:case vo:case nr:return{byteLength:2,components:1};case _n:case vn:return{byteLength:2,components:4};case Vi:case gn:case li:return{byteLength:4,components:1};case xo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Lm(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _e,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):xa("canvas")}function _(w,x,F){let ee=1,oe=Ae(w);if((oe.width>F||oe.height>F)&&(ee=F/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let $=Math.floor(ee*oe.width),te=Math.floor(ee*oe.height);u===void 0&&(u=g($,te));let q=x?g($,te):u;return q.width=$,q.height=te,q.getContext("2d").drawImage(w,0,0,$,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+$+"x"+te+")."),q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){e.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(w,x,F,ee,oe=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===e.RED&&(F===e.FLOAT&&($=e.R32F),F===e.HALF_FLOAT&&($=e.R16F),F===e.UNSIGNED_BYTE&&($=e.R8)),x===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&($=e.R8UI),F===e.UNSIGNED_SHORT&&($=e.R16UI),F===e.UNSIGNED_INT&&($=e.R32UI),F===e.BYTE&&($=e.R8I),F===e.SHORT&&($=e.R16I),F===e.INT&&($=e.R32I)),x===e.RG&&(F===e.FLOAT&&($=e.RG32F),F===e.HALF_FLOAT&&($=e.RG16F),F===e.UNSIGNED_BYTE&&($=e.RG8)),x===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&($=e.RG8UI),F===e.UNSIGNED_SHORT&&($=e.RG16UI),F===e.UNSIGNED_INT&&($=e.RG32UI),F===e.BYTE&&($=e.RG8I),F===e.SHORT&&($=e.RG16I),F===e.INT&&($=e.RG32I)),x===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&($=e.RGB8UI),F===e.UNSIGNED_SHORT&&($=e.RGB16UI),F===e.UNSIGNED_INT&&($=e.RGB32UI),F===e.BYTE&&($=e.RGB8I),F===e.SHORT&&($=e.RGB16I),F===e.INT&&($=e.RGB32I)),x===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&($=e.RGBA8UI),F===e.UNSIGNED_SHORT&&($=e.RGBA16UI),F===e.UNSIGNED_INT&&($=e.RGBA32UI),F===e.BYTE&&($=e.RGBA8I),F===e.SHORT&&($=e.RGBA16I),F===e.INT&&($=e.RGBA32I)),x===e.RGB&&F===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),x===e.RGBA){let te=oe?_a:Je.getTransfer(ee);F===e.FLOAT&&($=e.RGBA32F),F===e.HALF_FLOAT&&($=e.RGBA16F),F===e.UNSIGNED_BYTE&&($=te===$e?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function T(w,x){let F;return w?x===null||x===Vi||x===sr?F=e.DEPTH24_STENCIL8:x===li?F=e.DEPTH32F_STENCIL8:x===Vr&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vi||x===sr?F=e.DEPTH_COMPONENT24:x===li?F=e.DEPTH_COMPONENT32F:x===Vr&&(F=e.DEPTH_COMPONENT16),F}function D(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==Bt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){let x=w.target;x.removeEventListener("dispose",A),U(x),x.isVideoTexture&&c.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),S(x)}function U(w){let x=r.get(w);if(x.__webglInit===void 0)return;let F=w.source,ee=d.get(F);if(ee){let oe=ee[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&M(w),Object.keys(ee).length===0&&d.delete(F)}r.remove(w)}function M(w){let x=r.get(w);e.deleteTexture(x.__webglTexture);let F=w.source,ee=d.get(F);delete ee[x.__cacheKey],s.memory.textures--}function S(w){let x=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let oe=0;oe<x.__webglFramebuffer[ee].length;oe++)e.deleteFramebuffer(x.__webglFramebuffer[ee][oe]);else e.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)e.deleteFramebuffer(x.__webglFramebuffer[ee]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=w.textures;for(let ee=0,oe=F.length;ee<oe;ee++){let $=r.get(F[ee]);$.__webglTexture&&(e.deleteTexture($.__webglTexture),s.memory.textures--),r.remove(F[ee])}r.remove(w)}let R=0;function I(){R=0}function z(){let w=R;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),R+=1,w}function B(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function W(w,x){let F=r.get(w);if(w.isVideoTexture&&Ne(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(F,w,x);return}}i.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+x)}function V(w,x){let F=r.get(w);if(w.version>0&&F.__version!==w.version){fe(F,w,x);return}i.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+x)}function ie(w,x){let F=r.get(w);if(w.version>0&&F.__version!==w.version){fe(F,w,x);return}i.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+x)}function G(w,x){let F=r.get(w);if(w.version>0&&F.__version!==w.version){j(F,w,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+x)}let he={[ha]:e.REPEAT,[Bi]:e.CLAMP_TO_EDGE,[fn]:e.MIRRORED_REPEAT},pe={[zt]:e.NEAREST,[_c]:e.NEAREST_MIPMAP_NEAREST,[ca]:e.NEAREST_MIPMAP_LINEAR,[Bt]:e.LINEAR,[mn]:e.LINEAR_MIPMAP_NEAREST,[si]:e.LINEAR_MIPMAP_LINEAR},Pe={[Sc]:e.NEVER,[Ac]:e.ALWAYS,[Mc]:e.LESS,[Uo]:e.LEQUAL,[Ec]:e.EQUAL,[wc]:e.GEQUAL,[Tc]:e.GREATER,[bc]:e.NOTEQUAL};function Ve(w,x){if(x.type===li&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Bt||x.magFilter===mn||x.magFilter===ca||x.magFilter===si||x.minFilter===Bt||x.minFilter===mn||x.minFilter===ca||x.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,he[x.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,he[x.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,he[x.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,pe[x.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zt||x.minFilter!==ca&&x.minFilter!==si||x.type===li&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function X(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let ee=x.source,oe=d.get(ee);oe===void 0&&(oe={},d.set(ee,oe));let $=B(x);if($!==w.__cacheKey){oe[$]===void 0&&(oe[$]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,F=!0),oe[$].usedTimes++;let te=oe[w.__cacheKey];te!==void 0&&(oe[w.__cacheKey].usedTimes--,te.usedTimes===0&&M(x)),w.__cacheKey=$,w.__webglTexture=oe[$].texture}return F}function fe(w,x,F){let ee=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=e.TEXTURE_3D);let oe=X(w,x),$=x.source;i.bindTexture(ee,w.__webglTexture,e.TEXTURE0+F);let te=r.get($);if($.version!==te.__version||oe===!0){i.activeTexture(e.TEXTURE0+F);let q=Je.getPrimaries(Je.workingColorSpace),ae=x.colorSpace===Mi?null:Je.getPrimaries(x.colorSpace),ve=x.colorSpace===Mi||q===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=_(x.image,!1,a.maxTextureSize);Q=Y(x,Q);let de=n.convert(x.format,x.colorSpace),Ue=n.convert(x.type),be=v(x.internalFormat,de,Ue,x.colorSpace,x.isVideoTexture);Ve(ee,x);let ye,Be=x.mipmaps,Ie=x.isVideoTexture!==!0,Fe=te.__version===void 0||oe===!0,P=$.dataReady,re=D(x,Q);if(x.isDepthTexture)be=T(x.format===lr,x.type),Fe&&(Ie?i.texStorage2D(e.TEXTURE_2D,1,be,Q.width,Q.height):i.texImage2D(e.TEXTURE_2D,0,be,Q.width,Q.height,0,de,Ue,null));else if(x.isDataTexture)if(Be.length>0){Ie&&Fe&&i.texStorage2D(e.TEXTURE_2D,re,be,Be[0].width,Be[0].height);for(let J=0,se=Be.length;J<se;J++)ye=Be[J],Ie?P&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,ye.width,ye.height,de,Ue,ye.data):i.texImage2D(e.TEXTURE_2D,J,be,ye.width,ye.height,0,de,Ue,ye.data);x.generateMipmaps=!1}else Ie?(Fe&&i.texStorage2D(e.TEXTURE_2D,re,be,Q.width,Q.height),P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Q.width,Q.height,de,Ue,Q.data)):i.texImage2D(e.TEXTURE_2D,0,be,Q.width,Q.height,0,de,Ue,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Fe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,re,be,Be[0].width,Be[0].height,Q.depth);for(let J=0,se=Be.length;J<se;J++)if(ye=Be[J],x.format!==Vt)if(de!==null)if(Ie){if(P)if(x.layerUpdates.size>0){let we=Vl(ye.width,ye.height,x.format,x.type);for(let Se of x.layerUpdates){let Ye=ye.data.subarray(Se*we/ye.data.BYTES_PER_ELEMENT,(Se+1)*we/ye.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,Se,ye.width,ye.height,1,de,Ye)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,Q.depth,de,ye.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,be,ye.width,ye.height,Q.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,Q.depth,de,Ue,ye.data):i.texImage3D(e.TEXTURE_2D_ARRAY,J,be,ye.width,ye.height,Q.depth,0,de,Ue,ye.data)}else{Ie&&Fe&&i.texStorage2D(e.TEXTURE_2D,re,be,Be[0].width,Be[0].height);for(let J=0,se=Be.length;J<se;J++)ye=Be[J],x.format!==Vt?de!==null?Ie?P&&i.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,ye.width,ye.height,de,ye.data):i.compressedTexImage2D(e.TEXTURE_2D,J,be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,ye.width,ye.height,de,Ue,ye.data):i.texImage2D(e.TEXTURE_2D,J,be,ye.width,ye.height,0,de,Ue,ye.data)}else if(x.isDataArrayTexture)if(Ie){if(Fe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,re,be,Q.width,Q.height,Q.depth),P)if(x.layerUpdates.size>0){let J=Vl(Q.width,Q.height,x.format,x.type);for(let se of x.layerUpdates){let we=Q.data.subarray(se*J/Q.data.BYTES_PER_ELEMENT,(se+1)*J/Q.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,Q.width,Q.height,1,de,Ue,we)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ue,Q.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,de,Ue,Q.data);else if(x.isData3DTexture)Ie?(Fe&&i.texStorage3D(e.TEXTURE_3D,re,be,Q.width,Q.height,Q.depth),P&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ue,Q.data)):i.texImage3D(e.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,de,Ue,Q.data);else if(x.isFramebufferTexture){if(Fe)if(Ie)i.texStorage2D(e.TEXTURE_2D,re,be,Q.width,Q.height);else{let J=Q.width,se=Q.height;for(let we=0;we<re;we++)i.texImage2D(e.TEXTURE_2D,we,be,J,se,0,de,Ue,null),J>>=1,se>>=1}}else if(Be.length>0){if(Ie&&Fe){let J=Ae(Be[0]);i.texStorage2D(e.TEXTURE_2D,re,be,J.width,J.height)}for(let J=0,se=Be.length;J<se;J++)ye=Be[J],Ie?P&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,de,Ue,ye):i.texImage2D(e.TEXTURE_2D,J,be,de,Ue,ye);x.generateMipmaps=!1}else if(Ie){if(Fe){let J=Ae(Q);i.texStorage2D(e.TEXTURE_2D,re,be,J.width,J.height)}P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,de,Ue,Q)}else i.texImage2D(e.TEXTURE_2D,0,be,de,Ue,Q);m(x)&&f(ee),te.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,F){if(x.image.length!==6)return;let ee=X(w,x),oe=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+F);let $=r.get(oe);if(oe.version!==$.__version||ee===!0){i.activeTexture(e.TEXTURE0+F);let te=Je.getPrimaries(Je.workingColorSpace),q=x.colorSpace===Mi?null:Je.getPrimaries(x.colorSpace),ae=x.colorSpace===Mi||te===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,de=[];for(let se=0;se<6;se++)!ve&&!Q?de[se]=_(x.image[se],!0,a.maxCubemapSize):de[se]=Q?x.image[se].image:x.image[se],de[se]=Y(x,de[se]);let Ue=de[0],be=n.convert(x.format,x.colorSpace),ye=n.convert(x.type),Be=v(x.internalFormat,be,ye,x.colorSpace),Ie=x.isVideoTexture!==!0,Fe=$.__version===void 0||ee===!0,P=oe.dataReady,re=D(x,Ue);Ve(e.TEXTURE_CUBE_MAP,x);let J;if(ve){Ie&&Fe&&i.texStorage2D(e.TEXTURE_CUBE_MAP,re,Be,Ue.width,Ue.height);for(let se=0;se<6;se++){J=de[se].mipmaps;for(let we=0;we<J.length;we++){let Se=J[we];x.format!==Vt?be!==null?Ie?P&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Se.width,Se.height,be,Se.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,Be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Se.width,Se.height,be,ye,Se.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,Be,Se.width,Se.height,0,be,ye,Se.data)}}}else{if(J=x.mipmaps,Ie&&Fe){J.length>0&&re++;let se=Ae(de[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,re,Be,se.width,se.height)}for(let se=0;se<6;se++)if(Q){Ie?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de[se].width,de[se].height,be,ye,de[se].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,de[se].width,de[se].height,0,be,ye,de[se].data);for(let we=0;we<J.length;we++){let Se=J[we].image[se].image;Ie?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Se.width,Se.height,be,ye,Se.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,Be,Se.width,Se.height,0,be,ye,Se.data)}}else{Ie?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be,ye,de[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,be,ye,de[se]);for(let we=0;we<J.length;we++){let Se=J[we];Ie?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,be,ye,Se.image[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,Be,be,ye,Se.image[se])}}}m(x)&&f(e.TEXTURE_CUBE_MAP),$.__version=oe.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ce(w,x,F,ee,oe,$){let te=n.convert(F.format,F.colorSpace),q=n.convert(F.type),ae=v(F.internalFormat,te,q,F.colorSpace),ve=r.get(x),Q=r.get(F);if(Q.__renderTarget=x,!ve.__hasExternalTextures){let de=Math.max(1,x.width>>$),Ue=Math.max(1,x.height>>$);oe===e.TEXTURE_3D||oe===e.TEXTURE_2D_ARRAY?i.texImage3D(oe,$,ae,de,Ue,x.depth,0,te,q,null):i.texImage2D(oe,$,ae,de,Ue,0,te,q,null)}i.bindFramebuffer(e.FRAMEBUFFER,w),le(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,oe,Q.__webglTexture,0,Ee(x)):(oe===e.TEXTURE_2D||oe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ee,oe,Q.__webglTexture,$),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Z(w,x,F){if(e.bindRenderbuffer(e.RENDERBUFFER,w),x.depthBuffer){let ee=x.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,$=T(x.stencilBuffer,oe),te=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=Ee(x);le(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,q,$,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,q,$,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,$,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,w)}else{let ee=x.textures;for(let oe=0;oe<ee.length;oe++){let $=ee[oe],te=n.convert($.format,$.colorSpace),q=n.convert($.type),ae=v($.internalFormat,te,q,$.colorSpace),ve=Ee(x);F&&le(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,ae,x.width,x.height):le(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,ae,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ae,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ge(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=r.get(x.depthTexture);F.__renderTarget=x,(!F.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);let ee=F.__webglTexture,oe=Ee(x);if(x.depthTexture.format===or)le(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ee,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ee,0);else if(x.depthTexture.format===lr)le(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ee,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Me(w){let x=r.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let ee=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){let oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=ee}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ge(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=e.createRenderbuffer(),Z(x.__webglDepthbuffer[ee],w,!1);else{let oe=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[ee];e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,$)}}else if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Z(x.__webglDepthbuffer,w,!1);else{let ee=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,oe)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(w,x,F){let ee=r.get(w);x!==void 0&&ce(ee.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Me(w)}function K(w){let x=w.texture,F=r.get(w),ee=r.get(x);w.addEventListener("dispose",C);let oe=w.textures,$=w.isWebGLCubeRenderTarget===!0,te=oe.length>1;if(te||(ee.__webglTexture===void 0&&(ee.__webglTexture=e.createTexture()),ee.__version=x.version,s.memory.textures++),$){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let ae=0;ae<x.mipmaps.length;ae++)F.__webglFramebuffer[q][ae]=e.createFramebuffer()}else F.__webglFramebuffer[q]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)F.__webglFramebuffer[q]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(te)for(let q=0,ae=oe.length;q<ae;q++){let ve=r.get(oe[q]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(w.samples>0&&le(w)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<oe.length;q++){let ae=oe[q];F.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[q]);let ve=n.convert(ae.format,ae.colorSpace),Q=n.convert(ae.type),de=v(ae.internalFormat,ve,Q,ae.colorSpace,w.isXRRenderTarget===!0),Ue=Ee(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue,de,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,F.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Z(F.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if($){i.bindTexture(e.TEXTURE_CUBE_MAP,ee.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)ce(F.__webglFramebuffer[q][ae],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae);else ce(F.__webglFramebuffer[q],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(x)&&f(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(te){for(let q=0,ae=oe.length;q<ae;q++){let ve=oe[q],Q=r.get(ve);i.bindTexture(e.TEXTURE_2D,Q.__webglTexture),Ve(e.TEXTURE_2D,ve),ce(F.__webglFramebuffer,w,ve,e.COLOR_ATTACHMENT0+q,e.TEXTURE_2D,0),m(ve)&&f(e.TEXTURE_2D)}i.unbindTexture()}else{let q=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(q,ee.__webglTexture),Ve(q,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)ce(F.__webglFramebuffer[ae],w,x,e.COLOR_ATTACHMENT0,q,ae);else ce(F.__webglFramebuffer,w,x,e.COLOR_ATTACHMENT0,q,0);m(x)&&f(q),i.unbindTexture()}w.depthBuffer&&Me(w)}function ue(w){let x=w.textures;for(let F=0,ee=x.length;F<ee;F++){let oe=x[F];if(m(oe)){let $=y(w),te=r.get(oe).__webglTexture;i.bindTexture($,te),f($),i.unbindTexture()}}}let b=[],xe=[];function ne(w){if(w.samples>0){if(le(w)===!1){let x=w.textures,F=w.width,ee=w.height,oe=e.COLOR_BUFFER_BIT,$=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.get(w),q=x.length>1;if(q)for(let ae=0;ae<x.length;ae++)i.bindFramebuffer(e.FRAMEBUFFER,te.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,te.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(oe|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(oe|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,te.__webglColorRenderbuffer[ae]);let ve=r.get(x[ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,F,ee,0,0,F,ee,oe,e.NEAREST),l===!0&&(b.length=0,xe.length=0,b.push(e.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(b.push($),xe.push($),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,b))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<x.length;ae++){i.bindFramebuffer(e.FRAMEBUFFER,te.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,te.__webglColorRenderbuffer[ae]);let ve=r.get(x[ae]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,te.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,ve,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Ee(w){return Math.min(a.maxSamples,w.samples)}function le(w){let x=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ne(w){let x=s.render.frame;c.get(w)!==x&&(c.set(w,x),w.update())}function Y(w,x){let F=w.colorSpace,ee=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==hr&&F!==Mi&&(Je.getTransfer(F)===$e?(ee!==Vt||oe!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ae(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=le}function Um(e,t){function i(r,a=Mi){let n,s=Je.getTransfer(a);if(r===oi)return e.UNSIGNED_BYTE;if(r===_n)return e.UNSIGNED_SHORT_4_4_4_4;if(r===vn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===xo)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===_o)return e.BYTE;if(r===vo)return e.SHORT;if(r===Vr)return e.UNSIGNED_SHORT;if(r===gn)return e.INT;if(r===Vi)return e.UNSIGNED_INT;if(r===li)return e.FLOAT;if(r===nr)return e.HALF_FLOAT;if(r===yo)return e.ALPHA;if(r===So)return e.RGB;if(r===Vt)return e.RGBA;if(r===Mo)return e.LUMINANCE;if(r===Eo)return e.LUMINANCE_ALPHA;if(r===or)return e.DEPTH_COMPONENT;if(r===lr)return e.DEPTH_STENCIL;if(r===To)return e.RED;if(r===xn)return e.RED_INTEGER;if(r===bo)return e.RG;if(r===yn)return e.RG_INTEGER;if(r===Sn)return e.RGBA_INTEGER;if(r===ua||r===da||r===pa||r===fa)if(s===$e)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===ua)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===ua)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===da)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mn||r===En||r===Tn||r===bn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Mn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===En)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wn||r===An||r===Rn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===wn||r===An)return s===$e?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Rn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cn||r===Pn||r===Ln||r===Un||r===In||r===Nn||r===Dn||r===On||r===Fn||r===zn||r===Bn||r===Vn||r===kn||r===Hn)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Cn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ln)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Un)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===In)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===On)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ma||r===Gn||r===Wn)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===ma)return s===$e?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wo||r===Xn||r===jn||r===qn)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===ma)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Xn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Im=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ei=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nm={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Om=`
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

}`,Fm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new kt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jt({vertexShader:Dm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Dt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zm=class extends ur{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new Fm,_=t.getContextAttributes(),m=null,f=null,y=[],v=[],T=new _e,D=null,A=new Pt;A.viewport=new ut;let C=new Pt;C.viewport=new ut;let U=[A,C],M=new Im,S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let fe=y[X];return fe===void 0&&(fe=new Us,y[X]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(X){let fe=y[X];return fe===void 0&&(fe=new Us,y[X]=fe),fe.getGripSpace()},this.getHand=function(X){let fe=y[X];return fe===void 0&&(fe=new Us,y[X]=fe),fe.getHandSpace()};function I(X){let fe=v.indexOf(X.inputSource);if(fe===-1)return;let j=y[fe];j!==void 0&&(j.update(X.inputSource,X.frame,l||n),j.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B);for(let X=0;X<y.length;X++){let fe=v[X];fe!==null&&(v[X]=null,y[X].disconnect(fe))}S=null,R=null,g.reset(),e.setRenderTarget(m),d=null,u=null,c=null,r=null,f=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Ei(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let fe=null,j=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?lr:or,j=_.stencil?sr:Vi);let Z={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(Z),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new Ei(u.textureWidth,u.textureHeight,{format:Vt,type:oi,depthTexture:new vl(u.textureWidth,u.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(X){for(let fe=0;fe<X.removed.length;fe++){let j=X.removed[fe],ce=v.indexOf(j);ce>=0&&(v[ce]=null,y[ce].disconnect(j))}for(let fe=0;fe<X.added.length;fe++){let j=X.added[fe],ce=v.indexOf(j);if(ce===-1){for(let ge=0;ge<y.length;ge++)if(ge>=v.length){v.push(j),ce=ge;break}else if(v[ge]===null){v[ge]=j,ce=ge;break}if(ce===-1)break}let Z=y[ce];Z&&Z.connect(j)}}let W=new L,V=new L;function ie(X,fe,j){W.setFromMatrixPosition(fe.matrixWorld),V.setFromMatrixPosition(j.matrixWorld);let ce=W.distanceTo(V),Z=fe.projectionMatrix.elements,ge=j.projectionMatrix.elements,Me=Z[14]/(Z[10]-1),Ce=Z[14]/(Z[10]+1),K=(Z[9]+1)/Z[5],ue=(Z[9]-1)/Z[5],b=(Z[8]-1)/Z[0],xe=(ge[8]+1)/ge[0],ne=Me*b,Ee=Me*xe,le=ce/(-b+xe),Ne=le*-b;if(fe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(le),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Z[10]===-1)X.projectionMatrix.copy(fe.projectionMatrix),X.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let Y=Me+le,Ae=Ce+le,w=ne-Ne,x=Ee+(ce-Ne),F=K*Ce/Ae*Y,ee=ue*Ce/Ae*Y;X.projectionMatrix.makePerspective(w,x,F,ee,Y,Ae),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function G(X,fe){fe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(fe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let fe=X.near,j=X.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(j=g.depthFar)),M.near=C.near=A.near=fe,M.far=C.far=A.far=j,(S!==M.near||R!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,R=M.far),A.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let ce=X.parent,Z=M.cameras;G(M,ce);for(let ge=0;ge<Z.length;ge++)G(Z[ge],ce);Z.length===2?ie(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),he(X,M,ce)};function he(X,fe,j){j===null?X.matrix.copy(fe.matrixWorld):(X.matrix.copy(j.matrixWorld),X.matrix.invert(),X.matrix.multiply(fe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(fe.projectionMatrix),X.projectionMatrixInverse.copy(fe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zn*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(X){o=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let pe=null;function Pe(X,fe){if(h=fe.getViewerPose(l||n),p=fe,h!==null){let j=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ce=!1;j.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let ge=0;ge<j.length;ge++){let Me=j[ge],Ce=null;if(d!==null)Ce=d.getViewport(Me);else{let ue=c.getViewSubImage(u,Me);Ce=ue.viewport,ge===0&&(e.setRenderTargetTextures(f,ue.colorTexture,u.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(f))}let K=U[ge];K===void 0&&(K=new Pt,K.layers.enable(ge),K.viewport=new ut,U[ge]=K),K.matrix.fromArray(Me.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Me.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(K)}let Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let ge=c.getDepthInformation(j[0]);ge&&ge.isValid&&ge.texture&&g.init(e,ge,r.renderState)}}for(let j=0;j<y.length;j++){let ce=v[j],Z=y[j];ce!==null&&Z!==void 0&&Z.update(ce,fe,l||n)}pe&&pe(X,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),p=null}let Ve=new ul;Ve.setAnimationLoop(Pe),this.setAnimationLoop=function(X){pe=X},this.dispose=function(){}}},Zi=new Ri,Bm=new ot;function Vm(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,sl(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,y,v,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(m,f):f.isMeshToonMaterial?(n(m,f),u(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f)):f.isMeshStandardMaterial?(n(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(n(m,f),g(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),_(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),v=y.envMap,T=y.envMapRotation;v&&(m.envMap.value=v,Zi.copy(T),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Zi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function km(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let T=v.program;r.uniformBlockBinding(y,T)}function h(y,v){let T=a[y.id];T===void 0&&(g(y),T=c(y),a[y.id]=T,y.addEventListener("dispose",m));let D=v.program;r.updateUBOMapping(y,D);let A=t.render.frame;n[y.id]!==A&&(d(y),n[y.id]=A)}function c(y){let v=u();y.__bindingPointIndex=v;let T=e.createBuffer(),D=y.__size,A=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,D,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,T),T}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=a[y.id],T=y.uniforms,D=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let A=0,C=T.length;A<C;A++){let U=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,S=U.length;M<S;M++){let R=U[M];if(p(R,A,M,D)===!0){let I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],B=0;for(let W=0;W<z.length;W++){let V=z[W],ie=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,I+B,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,B),B+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,v,T,D){let A=y.value,C=v+"_"+T;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{let U=D[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return D[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(y){let v=y.uniforms,T=0,D=16;for(let C=0,U=v.length;C<U;C++){let M=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,R=M.length;S<R;S++){let I=M[S],z=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=z.length;B<W;B++){let V=z[B],ie=_(V),G=T%D,he=G%ie.boundary,pe=G+he;T+=he,pe!==0&&D-pe<ie.storage&&(T+=D-pe),I.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=ie.storage}}}let A=T%D;return A>0&&(T+=D-A),y.__size=T,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let T=s.indexOf(v.__bindingPointIndex);s.splice(T,1),e.deleteBuffer(a[v.id]),delete a[v.id],delete n[v.id]}function f(){for(let y in a)e.deleteBuffer(a[y]);s=[],a={},n={}}return{bind:l,update:h,dispose:f}}var kl=class{constructor(e={}){let{canvas:t=Cc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=n;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this.toneMapping=$t,this.toneMappingExposure=1;let v=this,T=!1,D=0,A=0,C=null,U=-1,M=null,S=new ut,R=new ut,I=null,z=new ke(0),B=0,W=t.width,V=t.height,ie=1,G=null,he=null,pe=new ut(0,0,W,V),Pe=new ut(0,0,W,V),Ve=!1,X=new Ss,fe=!1,j=!1,ce=new ot,Z=new ot,ge=new L,Me=new ut,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function ue(){return C===null?ie:1}let b=i;function xe(E,O){return t.getContext(E,O)}try{let E={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",we,!1),b===null){let O="webgl2";if(b=xe(O,E),b===null)throw xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,Ee,le,Ne,Y,Ae,w,x,F,ee,oe,$,te,q,ae,ve,Q,de,Ue,be,ye,Be,Ie,Fe;function P(){ne=new jp(b),ne.init(),Be=new Um(b,ne),Ee=new Vp(b,ne,e,Be),le=new Cm(b,ne),Ee.reverseDepthBuffer&&u&&le.buffers.depth.setReversed(!0),Ne=new Jp(b),Y=new fm,Ae=new Lm(b,ne,le,Y,Ee,Be,Ne),w=new Hp(v),x=new Xp(v),F=new iu(b),Ie=new zp(b,F),ee=new qp(b,F,Ne,Ie),oe=new Zp(b,ee,F,Ne),Ue=new Kp(b,Ee,Ae),ve=new kp(Y),$=new pm(v,w,x,ne,Ee,Ie,ve),te=new Vm(v,Y),q=new gm,ae=new Mm(ne),de=new Fp(v,w,x,le,oe,d,o),Q=new Am(v,oe,Ee),Fe=new km(b,Ne,Ee,le),be=new Bp(b,ne,Ne),ye=new Yp(b,ne,Ne),Ne.programs=$.programs,v.capabilities=Ee,v.extensions=ne,v.properties=Y,v.renderLists=q,v.shadowMap=Q,v.state=le,v.info=Ne}P();let re=new zm(v,b);this.xr=re,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(W,V,!1))},this.getSize=function(E){return E.set(W,V)},this.setSize=function(E,O,k=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,V=O,t.width=Math.floor(E*ie),t.height=Math.floor(O*ie),k===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(W*ie,V*ie).floor()},this.setDrawingBufferSize=function(E,O,k){W=E,V=O,ie=k,t.width=Math.floor(E*k),t.height=Math.floor(O*k),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,O,k,H){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,O,k,H),le.viewport(S.copy(pe).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(Pe)},this.setScissor=function(E,O,k,H){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,O,k,H),le.scissor(R.copy(Pe).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){le.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(E=!0,O=!0,k=!0){let H=0;if(E){let N=!1;if(C!==null){let me=C.texture.format;N=me===Sn||me===yn||me===xn}if(N){let me=C.texture.type,Re=me===oi||me===Vi||me===Vr||me===sr||me===_n||me===vn,Le=de.getClearColor(),De=de.getClearAlpha(),He=Le.r,Ge=Le.g,ze=Le.b;Re?(p[0]=He,p[1]=Ge,p[2]=ze,p[3]=De,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=He,g[1]=Ge,g[2]=ze,g[3]=De,b.clearBufferiv(b.COLOR,0,g))}else H|=b.COLOR_BUFFER_BIT}O&&(H|=b.DEPTH_BUFFER_BIT),k&&(H|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",we,!1),q.dispose(),ae.dispose(),Y.dispose(),w.dispose(),x.dispose(),oe.dispose(),Ie.dispose(),Fe.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",Jt),re.removeEventListener("sessionend",io),Di.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Ne.autoReset,O=Q.enabled,k=Q.autoUpdate,H=Q.needsUpdate,N=Q.type;P(),Ne.autoReset=E,Q.enabled=O,Q.autoUpdate=k,Q.needsUpdate=H,Q.type=N}function we(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Se(E){let O=E.target;O.removeEventListener("dispose",Se),Ye(O)}function Ye(E){st(E),Y.remove(E)}function st(E){let O=Y.get(E).programs;O!==void 0&&(O.forEach(function(k){$.releaseProgram(k)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,k,H,N,me){O===null&&(O=Ce);let Re=N.isMesh&&N.matrixWorld.determinant()<0,Le=zh(E,O,k,H,N);le.setMaterial(H,Re);let De=k.index,He=1;if(H.wireframe===!0){if(De=ee.getWireframeAttribute(k),De===void 0)return;He=2}let Ge=k.drawRange,ze=k.attributes.position,Ke=Ge.start*He,et=(Ge.start+Ge.count)*He;me!==null&&(Ke=Math.max(Ke,me.start*He),et=Math.min(et,(me.start+me.count)*He)),De!==null?(Ke=Math.max(Ke,0),et=Math.min(et,De.count)):ze!=null&&(Ke=Math.max(Ke,0),et=Math.min(et,ze.count));let tt=et-Ke;if(tt<0||tt===1/0)return;Ie.setup(N,H,Le,k,De);let ht,it=be;if(De!==null&&(ht=F.get(De),it=ye,it.setIndex(ht)),N.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*ue()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(N.isLine){let Oe=H.linewidth;Oe===void 0&&(Oe=1),le.setLineWidth(Oe*ue()),N.isLineSegments?it.setMode(b.LINES):N.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else N.isPoints?it.setMode(b.POINTS):N.isSprite&&it.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Oe=N._multiDrawStarts,Oi=N._multiDrawCounts,Fi=N._multiDrawCount,Ft=De?F.get(De).bytesPerElement:1,er=Y.get(H).currentProgram.getUniforms();for(let At=0;At<Fi;At++)er.setValue(b,"_gl_DrawID",At),it.render(Oe[At]/Ft,Oi[At])}else if(N.isInstancedMesh)it.renderInstances(Ke,tt,N.count);else if(k.isInstancedBufferGeometry){let Oe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Oi=Math.min(k.instanceCount,Oe);it.renderInstances(Ke,tt,Oi)}else it.render(Ke,tt)};function xt(E,O,k){E.transparent===!0&&E.side===Zt&&E.forceSinglePass===!1?(E.side=bt,E.needsUpdate=!0,oa(E,O,k),E.side=yi,E.needsUpdate=!0,oa(E,O,k),E.side=Zt):oa(E,O,k)}this.compile=function(E,O,k=null){k===null&&(k=E),m=ae.get(k),m.init(O),y.push(m),k.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let me=N.material;if(me)if(Array.isArray(me))for(let Re=0;Re<me.length;Re++){let Le=me[Re];xt(Le,k,N),H.add(Le)}else xt(me,k,N),H.add(me)}),y.pop(),m=null,H},this.compileAsync=function(E,O,k=null){let H=this.compile(E,O,k);return new Promise(N=>{function me(){if(H.forEach(function(Re){Y.get(Re).currentProgram.isReady()&&H.delete(Re)}),H.size===0){N(E);return}setTimeout(me,10)}ne.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ze=null;function ai(E){Ze&&Ze(E)}function Jt(){Di.stop()}function io(){Di.start()}let Di=new ul;Di.setAnimationLoop(ai),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(E){Ze=E,re.setAnimationLoop(E),E===null?Di.stop():Di.start()},re.addEventListener("sessionstart",Jt),re.addEventListener("sessionend",io),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,C),m=ae.get(E,y.length),m.init(O),y.push(m),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(Z),j=this.localClippingEnabled,fe=ve.init(this.clippingPlanes,j),_=q.get(E,f.length),_.init(),f.push(_),re.enabled===!0&&re.isPresenting===!0){let me=v.xr.getDepthSensingMesh();me!==null&&tn(me,O,-1/0,v.sortObjects)}tn(E,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,he),K=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,K&&de.addToRenderList(_,E),this.info.render.frame++,fe===!0&&ve.beginShadows();let k=m.state.shadowsArray;Q.render(k,E,O),fe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=_.opaque,N=_.transmissive;if(m.setupLights(),O.isArrayCamera){let me=O.cameras;if(N.length>0)for(let Re=0,Le=me.length;Re<Le;Re++){let De=me[Re];ao(H,N,E,De)}K&&de.render(E);for(let Re=0,Le=me.length;Re<Le;Re++){let De=me[Re];ro(_,E,De,De.viewport)}}else N.length>0&&ao(H,N,E,O),K&&de.render(E),ro(_,E,O);C!==null&&(Ae.updateMultisampleRenderTarget(C),Ae.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,O),Ie.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],fe===!0&&ve.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function tn(E,O,k,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){H&&Me.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);let me=oe.update(E),Re=E.material;Re.visible&&_.push(E,me,Re,k,Me.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let me=oe.update(E),Re=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Me.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Me.copy(me.boundingSphere.center)),Me.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(Re)){let Le=me.groups;for(let De=0,He=Le.length;De<He;De++){let Ge=Le[De],ze=Re[Ge.materialIndex];ze&&ze.visible&&_.push(E,me,ze,k,Me.z,Ge)}}else Re.visible&&_.push(E,me,Re,k,Me.z,null)}}let N=E.children;for(let me=0,Re=N.length;me<Re;me++)tn(N[me],O,k,H)}function ro(E,O,k,H){let N=E.opaque,me=E.transmissive,Re=E.transparent;m.setupLightsView(k),fe===!0&&ve.setGlobalState(v.clippingPlanes,k),H&&le.viewport(S.copy(H)),N.length>0&&sa(N,O,k),me.length>0&&sa(me,O,k),Re.length>0&&sa(Re,O,k),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ao(E,O,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Ei(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?nr:oi,minFilter:si,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let N=m.state.transmissionRenderTarget[H.id],me=H.viewport||S;N.setSize(me.z,me.w);let Re=v.getRenderTarget();v.setRenderTarget(N),v.getClearColor(z),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),K&&de.render(k);let Le=v.toneMapping;v.toneMapping=$t;let De=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),fe===!0&&ve.setGlobalState(v.clippingPlanes,H),sa(E,k,H),Ae.updateMultisampleRenderTarget(N),Ae.updateRenderTargetMipmap(N),ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ge=0,ze=O.length;Ge<ze;Ge++){let Ke=O[Ge],et=Ke.object,tt=Ke.geometry,ht=Ke.material,it=Ke.group;if(ht.side===Zt&&et.layers.test(H.layers)){let Oe=ht.side;ht.side=bt,ht.needsUpdate=!0,no(et,k,H,tt,ht,it),ht.side=Oe,ht.needsUpdate=!0,He=!0}}He===!0&&(Ae.updateMultisampleRenderTarget(N),Ae.updateRenderTargetMipmap(N))}v.setRenderTarget(Re),v.setClearColor(z,B),De!==void 0&&(H.viewport=De),v.toneMapping=Le}function sa(E,O,k){let H=O.isScene===!0?O.overrideMaterial:null;for(let N=0,me=E.length;N<me;N++){let Re=E[N],Le=Re.object,De=Re.geometry,He=H===null?Re.material:H,Ge=Re.group;Le.layers.test(k.layers)&&no(Le,O,k,De,He,Ge)}}function no(E,O,k,H,N,me){E.onBeforeRender(v,O,k,H,N,me),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,O,k,H,E,me),N.transparent===!0&&N.side===Zt&&N.forceSinglePass===!1?(N.side=bt,N.needsUpdate=!0,v.renderBufferDirect(k,O,H,N,E,me),N.side=yi,N.needsUpdate=!0,v.renderBufferDirect(k,O,H,N,E,me),N.side=Zt):v.renderBufferDirect(k,O,H,N,E,me),E.onAfterRender(v,O,k,H,N,me)}function oa(E,O,k){O.isScene!==!0&&(O=Ce);let H=Y.get(E),N=m.state.lights,me=m.state.shadowsArray,Re=N.state.version,Le=$.getParameters(E,N.state,me,O,k),De=$.getProgramCacheKey(Le),He=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?x:w).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Se),He=new Map,H.programs=He);let Ge=He.get(De);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===Re)return oo(E,Le),Ge}else Le.uniforms=$.getUniforms(E),E.onBeforeCompile(Le,v),Ge=$.acquireProgram(Le,De),He.set(De,Ge),H.uniforms=Le.uniforms;let ze=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=ve.uniform),oo(E,Le),H.needsLights=Vh(E),H.lightsStateVersion=Re,H.needsLights&&(ze.ambientLightColor.value=N.state.ambient,ze.lightProbe.value=N.state.probe,ze.directionalLights.value=N.state.directional,ze.directionalLightShadows.value=N.state.directionalShadow,ze.spotLights.value=N.state.spot,ze.spotLightShadows.value=N.state.spotShadow,ze.rectAreaLights.value=N.state.rectArea,ze.ltc_1.value=N.state.rectAreaLTC1,ze.ltc_2.value=N.state.rectAreaLTC2,ze.pointLights.value=N.state.point,ze.pointLightShadows.value=N.state.pointShadow,ze.hemisphereLights.value=N.state.hemi,ze.directionalShadowMap.value=N.state.directionalShadowMap,ze.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ze.spotShadowMap.value=N.state.spotShadowMap,ze.spotLightMatrix.value=N.state.spotLightMatrix,ze.spotLightMap.value=N.state.spotLightMap,ze.pointShadowMap.value=N.state.pointShadowMap,ze.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function so(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Va.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function oo(E,O){let k=Y.get(E);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function zh(E,O,k,H,N){O.isScene!==!0&&(O=Ce),Ae.resetTextureUnits();let me=O.fog,Re=H.isMeshStandardMaterial?O.environment:null,Le=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hr,De=(H.isMeshStandardMaterial?x:w).get(H.envMap||Re),He=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ze=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,et=!!k.morphAttributes.color,tt=$t;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(tt=v.toneMapping);let ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=ht!==void 0?ht.length:0,Oe=Y.get(H),Oi=m.state.lights;if(fe===!0&&(j===!0||E!==M)){let Tt=E===M&&H.id===U;ve.setState(H,E,Tt)}let Fi=!1;H.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Oi.state.version||Oe.outputColorSpace!==Le||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==De||H.fog===!0&&Oe.fog!==me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ve.numPlanes||Oe.numIntersection!==ve.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==Ge||Oe.morphTargets!==ze||Oe.morphNormals!==Ke||Oe.morphColors!==et||Oe.toneMapping!==tt||Oe.morphTargetsCount!==it)&&(Fi=!0):(Fi=!0,Oe.__version=H.version);let Ft=Oe.currentProgram;Fi===!0&&(Ft=oa(H,O,N));let er=!1,At=!1,Fr=!1,Qe=Ft.getUniforms(),Kt=Oe.uniforms;if(le.useProgram(Ft.program)&&(er=!0,At=!0,Fr=!0),H.id!==U&&(U=H.id,At=!0),er||M!==E){le.buffers.depth.getReversed()?(ce.copy(E.projectionMatrix),Lc(ce),Uc(ce),Qe.setValue(b,"projectionMatrix",ce)):Qe.setValue(b,"projectionMatrix",E.projectionMatrix),Qe.setValue(b,"viewMatrix",E.matrixWorldInverse);let Tt=Qe.map.cameraPosition;Tt!==void 0&&Tt.setValue(b,ge.setFromMatrixPosition(E.matrixWorld)),Ee.logarithmicDepthBuffer&&Qe.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Qe.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,At=!0,Fr=!0)}if(N.isSkinnedMesh){Qe.setOptional(b,N,"bindMatrix"),Qe.setOptional(b,N,"bindMatrixInverse");let Tt=N.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Qe.setValue(b,"boneTexture",Tt.boneTexture,Ae))}N.isBatchedMesh&&(Qe.setOptional(b,N,"batchingTexture"),Qe.setValue(b,"batchingTexture",N._matricesTexture,Ae),Qe.setOptional(b,N,"batchingIdTexture"),Qe.setValue(b,"batchingIdTexture",N._indirectTexture,Ae),Qe.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&Qe.setValue(b,"batchingColorTexture",N._colorsTexture,Ae));let zr=k.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&Ue.update(N,k,Ft),(At||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,Qe.setValue(b,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kt.envMap.value=De,Kt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Kt.envMapIntensity.value=O.environmentIntensity),At&&(Qe.setValue(b,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Bh(Kt,Fr),me&&H.fog===!0&&te.refreshFogUniforms(Kt,me),te.refreshMaterialUniforms(Kt,H,ie,V,m.state.transmissionRenderTarget[E.id]),Va.upload(b,so(Oe),Kt,Ae)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Va.upload(b,so(Oe),Kt,Ae),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Qe.setValue(b,"center",N.center),Qe.setValue(b,"modelViewMatrix",N.modelViewMatrix),Qe.setValue(b,"normalMatrix",N.normalMatrix),Qe.setValue(b,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Tt=H.uniformsGroups;for(let Br=0,xi=Tt.length;Br<xi;Br++){let lo=Tt[Br];Fe.update(lo,Ft),Fe.bind(lo,Ft)}}return Ft}function Bh(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Vh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,k){Y.get(E.texture).__webglTexture=O,Y.get(E.depthTexture).__webglTexture=k;let H=Y.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){let k=Y.get(E);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,k=0){C=E,D=O,A=k;let H=!0,N=null,me=!1,Re=!1;if(E){let Le=Y.get(E);if(Le.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(b.FRAMEBUFFER,null),H=!1;else if(Le.__webglFramebuffer===void 0)Ae.setupRenderTarget(E);else if(Le.__hasExternalTextures)Ae.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ge=E.depthTexture;if(Le.__boundDepthTexture!==Ge){if(Ge!==null&&Y.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let He=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[O])?N=He[O][k]:N=He[O],me=!0):E.samples>0&&Ae.useMultisampledRTT(E)===!1?N=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?N=He[k]:N=He,S.copy(E.viewport),R.copy(E.scissor),I=E.scissorTest}else S.copy(pe).multiplyScalar(ie).floor(),R.copy(Pe).multiplyScalar(ie).floor(),I=Ve;if(le.bindFramebuffer(b.FRAMEBUFFER,N)&&H&&le.drawBuffers(E,N),le.viewport(S),le.scissor(R),le.setScissorTest(I),me){let Le=Y.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,Le.__webglTexture,k)}else if(Re){let Le=Y.get(E.texture),De=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Le.__webglTexture,k||0,De)}U=-1},this.readRenderTargetPixels=function(E,O,k,H,N,me,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){le.bindFramebuffer(b.FRAMEBUFFER,Le);try{let De=E.texture,He=De.format,Ge=De.type;if(!Ee.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&k>=0&&k<=E.height-N&&b.readPixels(O,k,H,N,Be.convert(He),Be.convert(Ge),me)}finally{let De=C!==null?Y.get(C).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,O,k,H,N,me,Re){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){let De=E.texture,He=De.format,Ge=De.type;if(!Ee.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-H&&k>=0&&k<=E.height-N){le.bindFramebuffer(b.FRAMEBUFFER,Le);let ze=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.bufferData(b.PIXEL_PACK_BUFFER,me.byteLength,b.STREAM_READ),b.readPixels(O,k,H,N,Be.convert(He),Be.convert(Ge),0);let Ke=C!==null?Y.get(C).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,Ke);let et=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Pc(b,et,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,me),b.deleteBuffer(ze),b.deleteSync(et),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,k=0){E.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);let H=Math.pow(2,-k),N=Math.floor(E.image.width*H),me=Math.floor(E.image.height*H),Re=O!==null?O.x:0,Le=O!==null?O.y:0;Ae.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,k,0,0,Re,Le,N,me),le.unbindTexture()},this.copyTextureToTexture=function(E,O,k=null,H=null,N=0){E.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],O=arguments[2],N=arguments[3]||0,k=null);let me,Re,Le,De,He,Ge,ze,Ke,et,tt=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(me=k.max.x-k.min.x,Re=k.max.y-k.min.y,Le=k.isBox3?k.max.z-k.min.z:1,De=k.min.x,He=k.min.y,Ge=k.isBox3?k.min.z:0):(me=tt.width,Re=tt.height,Le=tt.depth||1,De=0,He=0,Ge=0),H!==null?(ze=H.x,Ke=H.y,et=H.z):(ze=0,Ke=0,et=0);let ht=Be.convert(O.format),it=Be.convert(O.type),Oe;O.isData3DTexture?(Ae.setTexture3D(O,0),Oe=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ae.setTexture2DArray(O,0),Oe=b.TEXTURE_2D_ARRAY):(Ae.setTexture2D(O,0),Oe=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);let Oi=b.getParameter(b.UNPACK_ROW_LENGTH),Fi=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ft=b.getParameter(b.UNPACK_SKIP_PIXELS),er=b.getParameter(b.UNPACK_SKIP_ROWS),At=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,tt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,De),b.pixelStorei(b.UNPACK_SKIP_ROWS,He),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ge);let Fr=E.isDataArrayTexture||E.isData3DTexture,Qe=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Kt=Y.get(E),zr=Y.get(O),Tt=Y.get(Kt.__renderTarget),Br=Y.get(zr.__renderTarget);le.bindFramebuffer(b.READ_FRAMEBUFFER,Tt.__webglFramebuffer),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let xi=0;xi<Le;xi++)Fr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,N,Ge+xi),E.isDepthTexture?(Qe&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Y.get(O).__webglTexture,N,et+xi),b.blitFramebuffer(De,He,me,Re,ze,Ke,me,Re,b.DEPTH_BUFFER_BIT,b.NEAREST)):Qe?b.copyTexSubImage3D(Oe,N,ze,Ke,et+xi,De,He,me,Re):b.copyTexSubImage2D(Oe,N,ze,Ke,et+xi,De,He,me,Re);le.bindFramebuffer(b.READ_FRAMEBUFFER,null),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Qe?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Oe,N,ze,Ke,et,me,Re,Le,ht,it,tt.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(Oe,N,ze,Ke,et,me,Re,Le,ht,tt.data):b.texSubImage3D(Oe,N,ze,Ke,et,me,Re,Le,ht,it,tt):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,N,ze,Ke,me,Re,ht,it,tt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,N,ze,Ke,tt.width,tt.height,ht,tt.data):b.texSubImage2D(b.TEXTURE_2D,N,ze,Ke,me,Re,ht,it,tt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Oi),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Fi),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ft),b.pixelStorei(b.UNPACK_SKIP_ROWS,er),b.pixelStorei(b.UNPACK_SKIP_IMAGES,At),N===0&&O.generateMipmaps&&b.generateMipmap(Oe),le.unbindTexture()},this.copyTextureToTexture3D=function(E,O,k=null,H=null,N=0){return E.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],O=arguments[3],N=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,k,H,N)},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&Ae.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){D=0,A=0,C=null,le.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}},Hm=class Ph{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new ke(t),this.near=i,this.far=r}clone(){return new Ph(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ha=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$i=class extends kt{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(n-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new _e:new L);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,r=[],a=[],n=[],s=new L,o=new ot;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new L)}a[0]=new L,n[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(r[d-1],r[d]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(_t(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,p))}n[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(_t(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Is=class extends ti{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new _e){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gm=class extends Is{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Ns(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,p*=c,a(s,o,d,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var Ga=new L,Ds=new Ns,Os=new Ns,Fs=new Ns,Wm=class extends ti{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Ga.subVectors(r[0],r[1]).add(r[0]),l=Ga);let c=r[s%a],u=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Ga.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Ga),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),Ds.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,_),Os.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,_),Fs.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,_)}else this.curveType==="catmullrom"&&(Ds.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Os.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Fs.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(Ds.calc(o),Os.calc(o),Fs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hl(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Xm(e,t){let i=1-e;return i*i*t}function jm(e,t){return 2*(1-e)*e*t}function qm(e,t){return e*e*t}function Zr(e,t,i,r){return Xm(e,t)+jm(e,i)+qm(e,r)}function Ym(e,t){let i=1-e;return i*i*i*t}function Jm(e,t){let i=1-e;return 3*i*i*e*t}function Km(e,t){return 3*(1-e)*e*e*t}function Zm(e,t){return e*e*e*t}function $r(e,t,i,r,a){return Ym(e,t)+Jm(e,i)+Km(e,r)+Zm(e,a)}var Gl=class extends ti{constructor(e=new _e,t=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _e){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set($r(e,r.x,a.x,n.x,s.x),$r(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$m=class extends ti{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set($r(e,r.x,a.x,n.x,s.x),$r(e,r.y,a.y,n.y,s.y),$r(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wl=class extends ti{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qm=class extends ti{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xl=class extends ti{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Zr(e,r.x,a.x,n.x),Zr(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eg=class extends ti{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Zr(e,r.x,a.x,n.x),Zr(e,r.y,a.y,n.y),Zr(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(Hl(s,o.x,l.x,h.x,c.x),Hl(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _e().fromArray(r))}return this}},zs=Object.freeze({__proto__:null,ArcCurve:Gm,CatmullRomCurve3:Wm,CubicBezierCurve:Gl,CubicBezierCurve3:$m,EllipseCurve:Is,LineCurve:Wl,LineCurve3:Qm,QuadraticBezierCurve:Xl,QuadraticBezierCurve3:eg,SplineCurve:jl}),tg=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new zs[r.type]().fromJSON(r))}return this}},Li=class extends tg{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Wl(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Xl(this.currentPoint.clone(),new _e(e,t),new _e(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Gl(this.currentPoint.clone(),new _e(e,t),new _e(i,r),new _e(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new jl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Is(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ig=class Lh extends Nt{constructor(t=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=_t(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,u=new L,d=new _e,p=new L,g=new L,_=new L,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=i;y++){let v=r+y*c*a,T=Math.sin(v),D=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*D,s.push(u.x,u.y,u.z),d.x=y/i,d.y=A/(t.length-1),o.push(d.x,d.y);let C=l[3*A+0]*T,U=l[3*A+1],M=l[3*A+0]*D;h.push(C,U,M)}}for(let y=0;y<i;y++)for(let v=0;v<t.length-1;v++){let T=v+y*t.length,D=T,A=T+t.length,C=T+t.length+1,U=T+1;n.push(D,A,U),n.push(C,U,A)}this.setIndex(n),this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.points,t.segments,t.phiStart,t.phiLength)}},rg=class Uh extends Nt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new L,c=new _e;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[d]/t+1)/2,c.y=(s[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ag=class Ih extends Nt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],p=[],g=0,_=[],m=r/2,f=0;y(),s===!1&&(t>0&&v(!0),i>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(p,2));function y(){let T=new L,D=new L,A=0,C=(i-t)/r;for(let U=0;U<=n;U++){let M=[],S=U/n,R=S*(i-t)+t;for(let I=0;I<=a;I++){let z=I/a,B=z*l+o,W=Math.sin(B),V=Math.cos(B);D.x=R*W,D.y=-S*r+m,D.z=R*V,u.push(D.x,D.y,D.z),T.set(W,C,V).normalize(),d.push(T.x,T.y,T.z),p.push(z,1-S),M.push(g++)}_.push(M)}for(let U=0;U<a;U++)for(let M=0;M<n;M++){let S=_[M][U],R=_[M+1][U],I=_[M+1][U+1],z=_[M][U+1];(t>0||M!==0)&&(c.push(S,R,z),A+=3),(i>0||M!==n-1)&&(c.push(R,I,z),A+=3)}h.addGroup(f,A,0),f+=A}function v(T){let D=g,A=new _e,C=new L,U=0,M=T===!0?t:i,S=T===!0?1:-1;for(let I=1;I<=a;I++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let R=g;for(let I=0;I<=a;I++){let z=I/a*l+o,B=Math.cos(z),W=Math.sin(z);C.x=M*W,C.y=m*S,C.z=M*B,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=B*.5+.5,A.y=W*.5*S+.5,p.push(A.x,A.y),g++}for(let I=0;I<a;I++){let z=D+I,B=R+I;T===!0?c.push(B,B+1,z):c.push(B+1,B,z),U+=3}h.addGroup(f,U,T===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ui=class extends Li{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Li().fromJSON(r))}return this}},ng={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=ql(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,p;if(r&&(n=cg(e,t,n,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Qr(n,s,i,o,l,p,0),s}};function ql(e,t,i,r,a){let n,s;if(a===Sg(e,t,i,r)>0)for(n=t;n<i;n+=r)s=Kl(n,e[n],e[n+1],s);else for(n=i-r;n>=t;n-=r)s=Kl(n,e[n],e[n+1],s);return s&&Wa(s,s.next)&&(ta(s),s=s.next),s}function Qi(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Wa(i,i.next)||nt(i.prev,i,i.next)===0)){if(ta(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Qr(e,t,i,r,a,n,s){if(!e)return;!s&&n&&mg(e,r,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?og(e,r,a,n):sg(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),ta(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=lg(Qi(e),t,i),Qr(e,t,i,r,a,n,2)):s===2&&hg(e,t,i,r,a,n):Qr(Qi(e),t,i,r,a,n,1);break}}}function sg(e){let t=e.prev,i=e,r=e.next;if(nt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&Lr(a,o,n,l,s,h,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function og(e,t,i,r){let a=e.prev,n=e,s=e.next;if(nt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,_=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,f=Bs(p,g,t,i,r),y=Bs(_,m,t,i,r),v=e.prevZ,T=e.nextZ;for(;v&&v.z>=f&&T&&T.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&Lr(o,c,l,u,h,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,T.x>=p&&T.x<=_&&T.y>=g&&T.y<=m&&T!==a&&T!==s&&Lr(o,c,l,u,h,d,T.x,T.y)&&nt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&Lr(o,c,l,u,h,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;T&&T.z<=y;){if(T.x>=p&&T.x<=_&&T.y>=g&&T.y<=m&&T!==a&&T!==s&&Lr(o,c,l,u,h,d,T.x,T.y)&&nt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function lg(e,t,i){let r=e;do{let a=r.prev,n=r.next.next;!Wa(a,n)&&Yl(a,r,r.next,n)&&ea(a,n)&&ea(n,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(n.i/i|0),ta(r),ta(r.next),r=e=n),r=r.next}while(r!==e);return Qi(r)}function hg(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&vg(s,o)){let l=Jl(s,o);s=Qi(s,s.next),l=Qi(l,l.next),Qr(s,t,i,r,a,n,0),Qr(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function cg(e,t,i,r){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=ql(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(_g(h));for(a.sort(ug),n=0;n<a.length;n++)i=dg(a[n],i);return i}function ug(e,t){return e.x-t.x}function dg(e,t){let i=pg(e,t);if(!i)return t;let r=Jl(i,e);return Qi(r,r.next),Qi(i,i.next)}function pg(e,t){let i=t,r=-1/0,a,n=e.x,s=e.y;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){let d=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do n>=i.x&&i.x>=l&&n!==i.x&&Lr(s<h?n:r,s,l,h,s<h?r:n,s,i.x,i.y)&&(u=Math.abs(s-i.y)/(n-i.x),ea(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&fg(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function fg(e,t){return nt(e.prev,e,t.prev)<0&&nt(t.next,e,e.next)<0}function mg(e,t,i,r){let a=e;do a.z===0&&(a.z=Bs(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,gg(a)}function gg(e){let t,i,r,a,n,s,o,l,h=1;do{for(i=e,e=null,n=null,s=0;i;){for(s++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;i=r}n.nextZ=null,h*=2}while(s>1);return e}function Bs(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function _g(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Lr(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function vg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!xg(e,t)&&(ea(e,t)&&ea(t,e)&&yg(e,t)&&(nt(e.prev,e,t.prev)||nt(e,t.prev,t))||Wa(e,t)&&nt(e.prev,e,e.next)>0&&nt(t.prev,t,t.next)>0)}function nt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Wa(e,t){return e.x===t.x&&e.y===t.y}function Yl(e,t,i,r){let a=ja(nt(e,t,i)),n=ja(nt(e,t,r)),s=ja(nt(i,r,e)),o=ja(nt(i,r,t));return!!(a!==n&&s!==o||a===0&&Xa(e,i,t)||n===0&&Xa(e,r,t)||s===0&&Xa(i,e,r)||o===0&&Xa(i,t,r))}function Xa(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function ja(e){return e>0?1:e<0?-1:0}function xg(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Yl(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function ea(e,t){return nt(e.prev,e,e.next)<0?nt(e,t,e.next)>=0&&nt(e,e.prev,t)>=0:nt(e,t,e.prev)<0||nt(e,e.next,t)<0}function yg(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Jl(e,t){let i=new Vs(e.i,e.x,e.y),r=new Vs(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Kl(e,t,i,r){let a=new Vs(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function ta(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Vs(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sg(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Ur=class Nh{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Nh.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Zl(t),$l(r,t);let s=t.length;i.forEach(Zl);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,$l(r,i[l]);let o=ng.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Zl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function $l(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var ks=class Dh extends Nt{constructor(t=new Ui([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,_=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:Mg,v,T=!1,D,A,C,U;f&&(v=f.getSpacedPoints(c),T=!0,d=!1,D=f.computeFrenetFrames(c,!1),A=new L,C=new L,U=new L),d||(m=0,p=0,g=0,_=0);let M=o.extractPoints(h),S=M.shape,R=M.holes;if(!Ur.isClockWise(S)){S=S.reverse();for(let K=0,ue=R.length;K<ue;K++){let b=R[K];Ur.isClockWise(b)&&(R[K]=b.reverse())}}let I=Ur.triangulateShape(S,R),z=S;for(let K=0,ue=R.length;K<ue;K++){let b=R[K];S=S.concat(b)}function B(K,ue,b){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ue,b)}let W=S.length,V=I.length;function ie(K,ue,b){let xe,ne,Ee,le=K.x-ue.x,Ne=K.y-ue.y,Y=b.x-K.x,Ae=b.y-K.y,w=le*le+Ne*Ne,x=le*Ae-Ne*Y;if(Math.abs(x)>Number.EPSILON){let F=Math.sqrt(w),ee=Math.sqrt(Y*Y+Ae*Ae),oe=ue.x-Ne/F,$=ue.y+le/F,te=b.x-Ae/ee,q=b.y+Y/ee,ae=((te-oe)*Ae-(q-$)*Y)/(le*Ae-Ne*Y);xe=oe+le*ae-K.x,ne=$+Ne*ae-K.y;let ve=xe*xe+ne*ne;if(ve<=2)return new _e(xe,ne);Ee=Math.sqrt(ve/2)}else{let F=!1;le>Number.EPSILON?Y>Number.EPSILON&&(F=!0):le<-Number.EPSILON?Y<-Number.EPSILON&&(F=!0):Math.sign(Ne)===Math.sign(Ae)&&(F=!0),F?(xe=-Ne,ne=le,Ee=Math.sqrt(w)):(xe=le,ne=Ne,Ee=Math.sqrt(w/2))}return new _e(xe/Ee,ne/Ee)}let G=[];for(let K=0,ue=z.length,b=ue-1,xe=K+1;K<ue;K++,b++,xe++)b===ue&&(b=0),xe===ue&&(xe=0),G[K]=ie(z[K],z[b],z[xe]);let he=[],pe,Pe=G.concat();for(let K=0,ue=R.length;K<ue;K++){let b=R[K];pe=[];for(let xe=0,ne=b.length,Ee=ne-1,le=xe+1;xe<ne;xe++,Ee++,le++)Ee===ne&&(Ee=0),le===ne&&(le=0),pe[xe]=ie(b[xe],b[Ee],b[le]);he.push(pe),Pe=Pe.concat(pe)}for(let K=0;K<m;K++){let ue=K/m,b=p*Math.cos(ue*Math.PI/2),xe=g*Math.sin(ue*Math.PI/2)+_;for(let ne=0,Ee=z.length;ne<Ee;ne++){let le=B(z[ne],G[ne],xe);ce(le.x,le.y,-b)}for(let ne=0,Ee=R.length;ne<Ee;ne++){let le=R[ne];pe=he[ne];for(let Ne=0,Y=le.length;Ne<Y;Ne++){let Ae=B(le[Ne],pe[Ne],xe);ce(Ae.x,Ae.y,-b)}}}let Ve=g+_;for(let K=0;K<W;K++){let ue=d?B(S[K],Pe[K],Ve):S[K];T?(C.copy(D.normals[0]).multiplyScalar(ue.x),A.copy(D.binormals[0]).multiplyScalar(ue.y),U.copy(v[0]).add(C).add(A),ce(U.x,U.y,U.z)):ce(ue.x,ue.y,0)}for(let K=1;K<=c;K++)for(let ue=0;ue<W;ue++){let b=d?B(S[ue],Pe[ue],Ve):S[ue];T?(C.copy(D.normals[K]).multiplyScalar(b.x),A.copy(D.binormals[K]).multiplyScalar(b.y),U.copy(v[K]).add(C).add(A),ce(U.x,U.y,U.z)):ce(b.x,b.y,u/c*K)}for(let K=m-1;K>=0;K--){let ue=K/m,b=p*Math.cos(ue*Math.PI/2),xe=g*Math.sin(ue*Math.PI/2)+_;for(let ne=0,Ee=z.length;ne<Ee;ne++){let le=B(z[ne],G[ne],xe);ce(le.x,le.y,u+b)}for(let ne=0,Ee=R.length;ne<Ee;ne++){let le=R[ne];pe=he[ne];for(let Ne=0,Y=le.length;Ne<Y;Ne++){let Ae=B(le[Ne],pe[Ne],xe);T?ce(Ae.x,Ae.y+v[c-1].y,v[c-1].x+b):ce(Ae.x,Ae.y,u+b)}}}X(),fe();function X(){let K=a.length/3;if(d){let ue=0,b=W*ue;for(let xe=0;xe<V;xe++){let ne=I[xe];Z(ne[2]+b,ne[1]+b,ne[0]+b)}ue=c+m*2,b=W*ue;for(let xe=0;xe<V;xe++){let ne=I[xe];Z(ne[0]+b,ne[1]+b,ne[2]+b)}}else{for(let ue=0;ue<V;ue++){let b=I[ue];Z(b[2],b[1],b[0])}for(let ue=0;ue<V;ue++){let b=I[ue];Z(b[0]+W*c,b[1]+W*c,b[2]+W*c)}}r.addGroup(K,a.length/3-K,0)}function fe(){let K=a.length/3,ue=0;j(z,ue),ue+=z.length;for(let b=0,xe=R.length;b<xe;b++){let ne=R[b];j(ne,ue),ue+=ne.length}r.addGroup(K,a.length/3-K,1)}function j(K,ue){let b=K.length;for(;--b>=0;){let xe=b,ne=b-1;ne<0&&(ne=K.length-1);for(let Ee=0,le=c+m*2;Ee<le;Ee++){let Ne=W*Ee,Y=W*(Ee+1),Ae=ue+xe+Ne,w=ue+ne+Ne,x=ue+ne+Y,F=ue+xe+Y;ge(Ae,w,x,F)}}}function ce(K,ue,b){l.push(K),l.push(ue),l.push(b)}function Z(K,ue,b){Me(K),Me(ue),Me(b);let xe=a.length/3,ne=y.generateTopUV(r,a,xe-3,xe-2,xe-1);Ce(ne[0]),Ce(ne[1]),Ce(ne[2])}function ge(K,ue,b,xe){Me(K),Me(ue),Me(xe),Me(ue),Me(b),Me(xe);let ne=a.length/3,Ee=y.generateSideWallUV(r,a,ne-6,ne-3,ne-2,ne-1);Ce(Ee[0]),Ce(Ee[1]),Ce(Ee[3]),Ce(Ee[1]),Ce(Ee[2]),Ce(Ee[3])}function Me(K){a.push(l[K*3+0]),a.push(l[K*3+1]),a.push(l[K*3+2])}function Ce(K){n.push(K.x),n.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Eg(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new zs[a.type]().fromJSON(a)),new Dh(r,t.options)}},Mg={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new _e(n,s),new _e(o,l),new _e(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],_=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new _e(s,1-l),new _e(h,1-u),new _e(d,1-g),new _e(_,1-f)]:[new _e(o,1-l),new _e(c,1-u),new _e(p,1-g),new _e(m,1-f)]}};function Eg(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Hs=class Oh extends Nt{constructor(t=new Ui([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(n,3)),this.setAttribute("uv",new rt(s,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;Ur.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];Ur.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Ur.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];a.push(y.x,y.y,0),n.push(0,0,1),s.push(y.x,y.y)}for(let m=0,f=_.length;m<f;m++){let y=_[m],v=y[0]+u,T=y[1]+u,D=y[2]+u;r.push(v,T,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Tg(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Oh(r,t.curveSegments)}};function Tg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var bg=class Fh extends Nt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],u=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=r;f++){let y=[],v=f/r,T=0;f===0&&s===0?T=.5/i:f===r&&l===Math.PI&&(T=-.5/i);for(let D=0;D<=i;D++){let A=D/i;u.x=-t*Math.cos(a+A*n)*Math.sin(s+v*o),u.y=t*Math.cos(s+v*o),u.z=t*Math.sin(a+A*n)*Math.sin(s+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+T,1-v),y.push(h++)}c.push(y)}for(let f=0;f<r;f++)for(let y=0;y<i;y++){let v=c[f][y+1],T=c[f][y],D=c[f+1][y],A=c[f+1][y+1];(f!==0||s>0)&&p.push(v,T,A),(f!==r-1||l<Math.PI)&&p.push(T,D,A)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},gi=class extends Yr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wg=class extends gi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function qa(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Ag(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ya=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rg=class extends Ya{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ao,endingEnd:Ao}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Ro:a=e,s=2*t-i;break;case Co:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Ro:n=e,o=2*i-t;break;case Co:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,_=g*p,m=-u*_+2*u*g-u*p,f=(1+u)*_+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*_+(1.5+d)*g+.5*p,v=d*_-d*g;for(let T=0;T!==s;++T)a[T]=m*n[h+T]+f*n[l+T]+y*n[o+T]+v*n[c+T];return a}},Cg=class extends Ya{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},Pg=class extends Ya{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_i=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case Yn:t=this.InterpolantFactoryMethodLinear;break;case Jn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Yn;case this.InterpolantFactoryMethodSmooth:return Jn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Ag(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Jn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,u=n*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};_i.prototype.TimeBufferType=Float32Array,_i.prototype.ValueBufferType=Float32Array,_i.prototype.DefaultInterpolation=Yn;var ia=class extends _i{constructor(e,t,i){super(e,t,i)}};ia.prototype.ValueTypeName="bool",ia.prototype.ValueBufferType=Array,ia.prototype.DefaultInterpolation=ga,ia.prototype.InterpolantFactoryMethodLinear=void 0,ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Lg=class extends _i{};Lg.prototype.ValueTypeName="color";var Ug=class extends _i{};Ug.prototype.ValueTypeName="number";var Ig=class extends Ya{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)mr.slerpFlat(a,0,n,l-s,n,l,o);return a}},Ql=class extends _i{InterpolantFactoryMethodLinear(e){return new Ig(this.times,this.values,this.getValueSize(),e)}};Ql.prototype.ValueTypeName="quaternion",Ql.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends _i{constructor(e,t,i){super(e,t,i)}};ra.prototype.ValueTypeName="string",ra.prototype.ValueBufferType=Array,ra.prototype.DefaultInterpolation=ga,ra.prototype.InterpolantFactoryMethodLinear=void 0,ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Ng=class extends _i{};Ng.prototype.ValueTypeName="vector";var Dg=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},Og=new Dg,Fg=class{constructor(e){this.manager=e!==void 0?e:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fg.DEFAULT_MATERIAL_NAME="__DEFAULT";var eh=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gs=new ot,th=new L,ih=new L,zg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),Gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bg=class extends zg{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rh=class extends eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ah=class extends eh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Ws="\\[\\]\\.:\\/",Vg=new RegExp("["+Ws+"]","g"),Xs="[^"+Ws+"]",kg="[^"+Ws.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",Xs),Gg=/(WCOD+)?/.source.replace("WCOD",kg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xs),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xs),jg=new RegExp("^"+Hg+Gg+Wg+Xg+"$"),qg=["material","materials","bones","map"],Yg=class{constructor(e,t,i){let r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class Or{constructor(t,i,r){this.path=i,this.parsedPath=r||Or.parseTrackName(i),this.node=Or.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Or.Composite(t,i,r):new Or(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){let i=jg.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);qg.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Or.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Yg,lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray],lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M0=new Float32Array(1),nh=new ot,Jg=class{constructor(e,t,i=0,r=1/0){this.ray=new Xo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(e,t=!0,i=[]){return js(e,this,i,t),i.sort(sh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)js(e[r],this,i,t);return i.sort(sh),i}};function sh(e,t){return e.distance-t.distance}function js(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)js(n[s],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var aa=new L;function Ot(e,t,i,r,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;aa.copy(t),aa[r]=0,aa.normalize();let h=.5*s/(s+o),c=1-aa.angleTo(e)/l;return Math.sign(aa[i])===1?c*h:o/(s+o)+h+h*(1-c)}var Kg=class extends Xi{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let s=new L,o=new L,l=new L(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new L,g=.5/r;for(let _=0,m=0;_<h.length;_+=3,m+=2)switch(s.fromArray(h,_),o.copy(s),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[_+0]=l.x*Math.sign(s.x)+o.x*a,h[_+1]=l.y*Math.sign(s.y)+o.y*a,h[_+2]=l.z*Math.sign(s.z)+o.z*a,c[_+0]=o.x,c[_+1]=o.y,c[_+2]=o.z,Math.floor(_/d)){case 0:p.set(1,0,0),u[m+0]=Ot(p,o,"z","y",a,i),u[m+1]=1-Ot(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[m+0]=1-Ot(p,o,"z","y",a,i),u[m+1]=1-Ot(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[m+0]=1-Ot(p,o,"x","z",a,e),u[m+1]=Ot(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[m+0]=1-Ot(p,o,"x","z",a,e),u[m+1]=1-Ot(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[m+0]=1-Ot(p,o,"x","y",a,e),u[m+1]=1-Ot(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[m+0]=Ot(p,o,"x","y",a,e),u[m+1]=1-Ot(p,o,"y","x",a,t);break}}};function Zg(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new Nt,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(t){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in n){let u=oh(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in s){let u=s[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<s[c].length;++_)p.push(s[c][_][d]);let g=oh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function oh(e){let t,i,r,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*i}let s=new t(n),o=new Xt(s,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/i;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<i;g++){let _=c.getComponent(d,g);o.setComponent(d+u,g,_)}}else s.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var We="#101010",qe="#f4f3ee",Ja='"DT Punk", Impact, sans-serif',$g='"Inter Tight", "Arial Black", Arial, sans-serif',lh=()=>{let e=document.createElement("canvas");return e.width=e.height=256,e};function Lt(e,t,i){e.beginPath(),t.forEach(([r,a],n)=>n?e.lineTo(r,a):e.moveTo(r,a)),e.closePath(),i&&(e.fillStyle=i,e.fill())}function gt(e,t,i,r,a,n,s){e.beginPath(),e.roundRect(t,i,r,a,n),s&&(e.fillStyle=s,e.fill())}function yt(e,t,i,r,a){e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function Ir(e,t,i,r,a){let n=[];for(let s=0;s<t*2;s++){let o=s/(t*2)*Math.PI*2-Math.PI/2,l=s%2?r:i;n.push([128+Math.cos(o)*l,128+Math.sin(o)*l])}Lt(e,n,a)}function Ii(e,t,{y:i=128,width:r=190,size:a=60,color:n=We,font:s=$g,weight:o=900,gap:l=1}={}){let h=a,c=()=>{e.font=`${o} ${h}px ${s}`};for(c();h>12&&Math.max(...t.map(d=>e.measureText(d).width))>r;)h-=2,c();e.textAlign="center",e.textBaseline="middle",e.fillStyle=n;let u=h*l;t.forEach((d,p)=>e.fillText(d,128,i+(p-(t.length-1)/2)*u))}function qs(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?We:qe:e===We?qe:We}var Qg={ask(e,t){gt(e,26,40,204,140,34,t),Lt(e,[[70,170],[58,226],[124,172]],t),Ii(e,["ASK","DEN"],{y:110,size:62,color:qs(t),font:Ja,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),gt(e,18,84,220,88,44,t),gt(e,88,84,80,88,4,qe);for(let[i,r]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])yt(e,i,r,5,We);e.restore(),Ii(e,["OUCH"],{y:222,size:44,font:Ja,weight:400,color:qe})},camera(e,t){gt(e,28,76,200,130,16,We),gt(e,86,52,70,34,8,We),yt(e,128,142,48,qe),yt(e,128,142,34,We),yt(e,116,130,9,qe),yt(e,200,98,9,t)},file(e,t){Lt(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],qe),Lt(e,[[160,26],[200,66],[160,66]],"#9c9c98"),Ii(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===qe?We:t,gap:1.1})},cursor(e,t){Ir(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),Lt(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],We),e.lineWidth=2.4,e.strokeStyle=qe,e.stroke(),e.restore()},receipt(e,t){let i=[[52,22],[204,22]];for(let r=0;r<=8;r++)i.push([204-r*19,232-(r%2?14:0)]);Lt(e,i,qe),e.fillStyle="#7d7d79";for(let r=0;r<4;r++)e.fillRect(70,48+r*22,r%2?76:116,8);Ii(e,["$$$"],{y:176,size:62,color:t===qe?We:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=qe,e.fill(),Lt(e,[[176,186],[214,236],[136,200]],qe),Ii(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===qe?We:t,font:Ja,weight:400})},root(e){gt(e,24,44,208,168,8,We),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=qe,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),Ii(e,["x"],{y:130,width:60,size:60,color:qe,font:Ja,weight:400})},sun(e,t){Ir(e,14,118,84,t),yt(e,128,128,70,qe),gt(e,66,100,54,36,12,We),gt(e,136,100,54,36,12,We),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=We,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){Ir(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),gt(e,-16,-40,32,130,12,We),yt(e,0,-56,38,We),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),gt(e,-92,-48,184,96,12,qe),e.fillStyle=t===qe?We:t,e.fillRect(-24,-48,116,96),e.restore(),Ii(e,["CTRL+Z"],{width:150,size:36,color:We})},pencil(e,t){e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=We,e.fillRect(-112,-22,28,44),Lt(e,[[52,-22],[100,0],[52,22]],qe),Lt(e,[[84,-7],[100,0],[84,7]],We),e.setTransform(1,0,0,1,0,0)},car(e,t){gt(e,22,118,212,64,22,t),Lt(e,[[66,122],[96,72],[168,72],[198,122]],t),Lt(e,[[86,118],[104,86],[128,86],[128,118]],We),Lt(e,[[138,118],[138,86],[162,86],[180,118]],We),yt(e,78,184,24,We),yt(e,180,184,24,We),yt(e,78,184,9,qe),yt(e,180,184,9,qe)},house(e,t){Lt(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=qe,e.fillRect(52,122,152,100),e.fillStyle=We,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){gt(e,26,26,204,204,26,We),e.lineWidth=7,e.strokeStyle=qe,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[i,r]of[[74,80],[72,180],[184,86],[182,176]])yt(e,i,r,18,t)},fork(e,t){yt(e,128,128,112,qe),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===qe?"#b5b5b1":t,e.stroke(),e.fillStyle=We,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),gt(e,84,106,36,22,10,We),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){Ir(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=We,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){gt(e,22,62,212,132,66,We),[28,58,92,46,76,34,54,22].forEach((i,r)=>gt(e,52+r*21.5,128-i/2,11,i,5.5,r%3===2?t:qe))},bot(e,t){gt(e,40,62,176,152,28,qe),e.fillStyle=We,e.fillRect(122,28,12,38),yt(e,128,26,12,t===qe?We:t),yt(e,94,124,18,We),yt(e,162,124,18,We),e.fillStyle=We,e.fillRect(88,172,80,12)}},hh=[(e,t)=>(Ir(e,16,122,96,t),qs(t)),e=>(gt(e,14,62,228,132,12,We),qe),(e,t)=>(yt(e,128,128,116,t),qs(t)),e=>(gt(e,14,66,228,124,62,qe),We),e=>(Ir(e,12,122,100,We),qe),(e,t)=>(gt(e,18,52,220,152,8,qe),e.strokeStyle=t===qe?We:t,e.lineWidth=10,e.strokeRect(32,66,192,124),We)];function e0(e,t,i,r){let a=hh[i%hh.length](e,r),n=[];for(let s of t.split(" ")){let o=n[n.length-1];o&&(o+" "+s).length<=9?n[n.length-1]=`${o} ${s}`:n.push(s)}Ii(e,n,{color:a,width:i%3===2?170:186,size:66,gap:1.04})}var t0={portfolio:["ask","MAKE THE LOGO BIGGER"],basepoint:["bandaid","TAKE YOUR VITAMINS"],"street-observations":["camera","SAY CHEESE"],template:["file","BE KIND REWIND"],prime:["cursor","ONE MORE CLICK"],sabsus:["receipt","CA-CHING!"],janna:["bonjour","MERCI BEAUCOUP"],"root-framer":["root","SHOW YOUR WORK"],sunfreaks:["sun","WEAR SUNSCREEN"],airtexno:["wrench","IT WORKS ON MY MACHINE"],"concept-undo-studio":["eraser","NEW RELEASE"],"concept-root-square-explorations":["pencil","STILL A SKETCH"],"concept-al-futtaim-themes":["car","CAN IT POP MORE?"],mortgage:["house","SWEET LOAN"],node:["nodes","IF THIS THEN WHY"],restaurant:["fork","TABLE FOR TWO"],wallet:["scissors","BAD HAIR DAY"],wave:["wave","TURN IT UP"],"experiment-chat-portfolio":["bot","NOT A BOT"]};function i0(e){let t=lh(),i=t.getContext("2d"),r=9;for(let a=0;a<28;a++){let n=a/28*Math.PI*2;i.drawImage(e,Math.cos(n)*r,Math.sin(n)*r)}i.globalCompositeOperation="source-in",i.fillStyle=qe,i.fillRect(0,0,256,256),i.globalCompositeOperation="source-over",i.drawImage(e,0,0),i.globalCompositeOperation="source-atop";for(let a=0;a<260;a++)i.globalAlpha=.1+Math.random()*.22,i.fillStyle=Math.random()<.5?"#000":"#fff",i.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2);return i.globalAlpha=1,i.globalCompositeOperation="source-over",t}function ch(e){let t=lh();return e(t.getContext("2d")),i0(t)}function uh(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,n=null;for(let o=0;o<r.length;o+=4){let l=r[o],h=r[o+1],c=r[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,n=[l,h,c])}if(a<60)return null;let s=238/Math.max(...n);return`rgb(${n.map(o=>Math.round(o*s)).join(",")})`}function dh(e,t=0,i=null){let r=t0[e];if(!r)return[];let[a,n]=r,s=i||qe;return[ch(o=>Qg[a](o,s)),ch(o=>e0(o,n,t,s))]}var qt=(e,t,i)=>Math.max(t,Math.min(i,e)),at=(e,t,i)=>e+(t-e)*i,Ys=e=>e*e*(3-2*e);function Js(e,t=0){let i=new Ha;i.background=new ke(526346);let r=(s,o,l,h,c,u)=>{let d=new pt(new Dt(s,o),new Gi({color:new ke(u,u,u),side:Zt}));d.position.set(l,h,c),d.lookAt(0,0,0),i.add(d)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2),t&&r(14,10,0,1,10,t);let a=new Rs(e),n=a.fromScene(i,.025).texture;return a.dispose(),n}function ph(e=256,t=3){let i=document.createElement("canvas");i.width=i.height=e;let r=i.getContext("2d"),a=r.createImageData(e,e);for(let s=0;s<a.data.length;s+=4){let o=120+Math.random()*90;a.data[s]=a.data[s+1]=a.data[s+2]=o,a.data[s+3]=255}r.putImageData(a,0,0);let n=new $i(i);return n.wrapS=n.wrapT=ha,n.repeat.set(t,t),n}var vi=(e,t,i,r,a=0,n=0,s=0)=>(a&&e.rotateX(a),n&&e.rotateY(n),s&&e.rotateZ(s),e.translate(t,i,r),e),r0=e=>e.index?e.toNonIndexed():e,Ks=e=>{let t=e.map(r0);return t.forEach(i=>{Object.keys(i.attributes).forEach(r=>{r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r)})}),Zg(t)};function Ka(e,t,i,r,a,n,s,o,l){return e.moveTo(t+n,i),e.lineTo(r-s,i),e.quadraticCurveTo(r,i,r,i+s),e.lineTo(r,a-o),e.quadraticCurveTo(r,a,r-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,i+n),e.quadraticCurveTo(t,i,t+n,i),e}function Zs(e,t,i,r=0,a=0){return Ka(new Ui,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}function a0(e,t,i,r=0,a=0){return Ka(new Li,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}var ii=18.7,ri=10.3,Za=2.5,n0={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},Yt={w:7.9,h:4.9,y:-.15},$a={x:5.25,y:-.15},Ni=(e,t,i=0)=>{let{x0:r,x1:a,y0:n,y1:s,outer:o,inner:l}=n0,h=r-i,c=a+i,u=n-i,d=s+i,p=o+i*.6,g=l+i*.6,_=new e;return t<0?Ka(_,-c,u,-h,d,p,g,g,p):Ka(_,h,u,c,d,g,p,p,g)};function s0(){let e=1024/ii,t=564/ri,i=1024/2048,r=y=>(y+ii/2)*e,a=y=>(ri/2-y)*t,n=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=564,y},s=n(),o=n(),l=n(),h=s.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=y=>{let v=document.createElement("canvas");return v.width=v.height=6,y(v.getContext("2d")),v};h.fillStyle=h.createPattern(d(y=>{y.fillStyle="#050505",y.fillRect(0,0,6,6),y.fillStyle="#121212",y.fillRect(.5,.5,5,5),y.fillStyle="#1f1f1f",y.fillRect(.5,.5,5,1),y.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(y=>{y.fillStyle="#242424",y.fillRect(0,0,6,6),y.fillStyle="#c8c8c8",y.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=y=>{y.beginPath(),y.roundRect(r(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),y.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*i),h.fillStyle="#242424",h.fillRect(0,a(g)-3*i,1024,3*i),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*i);let _='"Inter Tight", Arial, sans-serif',m=(y,v)=>{y.fillStyle=v,y.font=`500 ${37*i}px ${_}`,y.textBaseline="middle","letterSpacing"in y&&(y.letterSpacing=`${4*i}px`),y.textAlign="right",y.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),a(4.35)),y.textAlign="left",y.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),a(4.35)),y.beginPath(),y.moveTo(r(0),a(4.72)),y.lineTo(r(.34),a(4.05)),y.lineTo(r(-.34),a(4.05)),y.closePath(),y.fill()};m(h,"#3a3a3a"),m(c,"#f0f0f0");for(let y=0;y<240;y++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*i*1.4;let v=Math.random()*1024,T=Math.random()*564,D=Math.random()*6.28,A=(10+Math.random()*120)*i;h.beginPath(),h.moveTo(v,T),h.lineTo(v+Math.cos(D)*A,T+Math.sin(D)*A),h.stroke()}for(let y=0;y<420;y++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let f=(y,v)=>{let T=new $i(y);return v&&(T.colorSpace=ct),T.anisotropy=8,T};return{map:f(s,!0),bump:f(o),rough:f(l)}}function o0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let r=4;r<128;r+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,r,0,6.2832),t.stroke();let i=new $i(e);return i.colorSpace=ct,i}function $s(e){let t=Za/2,i=s0(),r=new gi({map:i.map,bumpMap:i.bump,bumpScale:1.2,roughnessMap:i.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new gi({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:ph(256,5)}),n=new gi({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),s=new gi({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new gi({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new gi({map:o0(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new wg({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=vi(new Kg(ii,ri,Za-c,3,.14),0,0,-c/2),d=Zs(ii-.06,ri-.06,.2);d.holes.push(Ni(Li,-1),Ni(Li,1));let p=new ks(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,_=p.attributes.uv;for(let R=0;R<g.count;R++)_.setXY(R,(g.getX(R)+ii/2)/ii,(g.getY(R)+ri/2)/ri);p.translate(0,0,t-c);let m=(R,I)=>{let z=R;return z.holes.push(I),new ks(z,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},f=[vi(m(Ni(Ui,-1,.16),Ni(Li,-1)),0,0,t),vi(m(Ni(Ui,1,.16),Ni(Li,1)),0,0,t),vi(m(Zs(Yt.w+.36,Yt.h+.36,.16,0,Yt.y),a0(Yt.w+.06,Yt.h+.06,.08,0,Yt.y)),0,0,t),vi(new Xi(ii-.5,.09,.06),0,3.5,t+.02)],y=new Ui;y.absarc(0,0,.98,0,Math.PI*2,!1);let v=new Li;v.absarc(0,0,.6,0,Math.PI*2,!0),y.holes.push(v);let T=[new ks(y,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let R=0;R<6;R++){let I=R/6*Math.PI*2;T.push(vi(new Xi(.2,.44,.1),Math.cos(I)*.46,Math.sin(I)*.46,.05,0,0,I+Math.PI/2))}T.push(vi(new ag(.06,.06,.08,12),0,0,.04,Math.PI/2));let D=new rg(1,56),A=Ks([new Hs(Ni(Ui,-1),12),new Hs(Ni(Ui,1),12)]);A.translate(0,0,t+.012);let C=Zs(Yt.w,Yt.h,.06,0,0),U=new Hs(C,6),M=U.attributes.position,S=U.attributes.uv;for(let R=0;R<M.count;R++)S.setXY(R,M.getX(R)/Yt.w+.5,M.getY(R)/Yt.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:r,lips:Ks(f),gloss:n,floor:vi(new Dt(ii-.4,ri-.4),0,0,t-c+.004),cavity:s,hub:Ks(T),white:o,pack:D,packMat:l,glassGeo:A,glass:h,labelGeo:U,spineGeo:vi(new Dt(16.6,1.72),0,-ri/2-.006,-.08,Math.PI/2),stickerGeo:new Dt(1,1),hit:new Xi(ii,ri,Za)}}var l0=[{x:5.05,y:2.75,size:4.1},{x:-6.35,y:-2.85,size:4.5}],fh=e=>{let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);let r=new $i(t);return r.colorSpace=ct,r},Nr=fh("#ffffff"),mh=fh("rgba(0,0,0,0)");function Qs(e,t=0){let i=new ei,r=(h,c)=>{let u=new pt(h,c);return i.add(u),u};r(e.body,e.plastic),r(e.floor,e.cavity),r(e.slab,e.front),r(e.lips,e.gloss);let a=[-$a.x,$a.x].map(h=>{let c=r(e.pack,e.packMat);c.position.set(h,$a.y,e.FRONT-e.WALL+.012);let u=r(e.hub,e.white);return u.position.set(h,$a.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});r(e.glassGeo,e.glass);let n=()=>new gi({map:Nr,emissiveMap:Nr,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),s=r(e.labelGeo,n());s.position.set(0,Yt.y,e.FRONT+.008),s.rotation.z=t;let o=r(e.spineGeo,n()),l=l0.map((h,c)=>{let u=r(e.stickerGeo,new gi({map:mh,emissiveMap:mh,color:16777215,emissive:16777215,emissiveIntensity:.6,roughness:.42,envMap:e.env,envMapIntensity:.55,alphaTest:.5}));return u.position.set(h.x+t*18,h.y-t*12,e.FRONT+.03+c*.004),u.scale.setScalar(h.size),u.rotation.z=(c?-.16:.2)+t*9,u});return{group:i,reels:a,label:s,spine:o,stickers:l}}function gh(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,n=[16,16,16];for(let l=0;l<r.length;l+=4){let h=r[l],c=r[l+1],u=r[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,n=[h,c,u])}if(a<60)return"#141414";let s=Math.max(...n),o=135/s;return`rgb(${n.map(l=>Math.round(l*o)).join(",")})`}function _h(e,t,i){for(let r=0;r<700;r++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*i,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function vh(e,t,i,r,a){let n=i;for(e.font=`400 ${n}px ${a}`;e.measureText(t).width>r&&n>14;)n-=2,e.font=`400 ${n}px ${a}`;return n}var na=(e,t=8)=>{let i=new $i(e);return i.colorSpace=ct,i.anisotropy=t,i};function eo(e,t){if(e.width<=t)return e;let i=document.createElement("canvas");i.width=t,i.height=Math.max(1,Math.round(e.height*t/e.width));let r=i.getContext("2d");return r.imageSmoothingQuality="high",r.drawImage(e,0,0,i.width,i.height),i}function h0(e,t,i){return na(xh(e,t,i))}function xh(e,t,i){let r=document.createElement("canvas");r.width=790,r.height=490;let a=r.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let n=getComputedStyle(document.body).fontFamily;if(e){let l=e.naturalWidth/e.naturalHeight,h=746/268,c=l>h?e.naturalHeight*h:e.naturalWidth,u=l>h?e.naturalHeight:e.naturalWidth/h;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-c)/2,(e.naturalHeight-u)/2,c,u,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(l=>{a.beginPath(),a.moveTo(24,l),a.lineTo(766,l),a.stroke()});let s='"DT Punk", cursive';a.fillStyle=i;let o=vh(a,t.name.toUpperCase(),66,640,s);return a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${s}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${s}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${n}`,a.textBaseline="middle",["SP","LP","EP"].forEach((l,h)=>{let c=30+h*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(c,440,22,22),a.fillText(l,c+32,452)}),a.strokeStyle=i,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",_h(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over",r}function c0(e,t){return na(yh(e,t))}function yh(e,t){let i=document.createElement("canvas");i.width=1660,i.height=172;let r=i.getContext("2d");r.fillStyle="#e8e6df",r.fillRect(0,0,1660,172),r.fillStyle="#121212",r.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,n='"DT Punk", cursive';r.fillStyle="#efefe9",r.textBaseline="middle",r.font='400 92px "DT Punk", cursive',r.textAlign="center",r.fillText(e.code,75,172/2+6),r.textAlign="left",r.strokeStyle="#b6b3aa",r.lineWidth=2,r.beginPath(),r.moveTo(176,138),r.lineTo(1420,138),r.stroke(),r.fillStyle=t;let s=vh(r,e.name.toUpperCase(),112,1210,n);return r.font=`400 ${s}px ${n}`,r.fillText(e.name.toUpperCase(),186,172/2+2),r.fillStyle="#3c3a35",r.font=`500 30px ${a}`,r.textAlign="right",r.fillText(e.kind,1630,172/2-22),r.font=`500 24px ${a}`,r.fillText("TRBN \xB7 SP 120",1630,172/2+24),_h(r,1660,172),i}var u0="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",d0=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;
float h(float x){return fract(sin(x*91.17)*43758.5453);}
vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
void main(){
 vec2 cc=vUv-.5;
 vec2 q=cc*2.;
 float d=dot(q,q)*.5;
 // The whole screen is bent by a filter where the browser can. Where it can't, the picture bows by itself.
 vec2 uv=.5+cc*mix(1.,.97+d*.055+d*d*.02,bend);
 float row=floor(uv.y*70.);
 uv.x+=(h(row+floor(time*18.))-.5)*glitch*.05*step(.52,h(row*.37+floor(time*11.)));
 // Beams drift out of line towards the edge of a real tube.
 float split=.0004+d*.0026+glitch*.0055;
 vec2 dir=normalize(cc+.0001);
 vec3 c=vec3(texture2D(map,uv+dir*split).r,texture2D(map,uv).g,texture2D(map,uv-dir*split).b);
 // Phosphor bloom from the picture's own light.
 c+=textureLod(map,uv,3.5).rgb*.15+textureLod(map,uv,5.).rgb*.1;
 c=toSRGB(max(c,0.));
 c*=.985+.015*sin(time*72.);
 vec2 e=abs(cc*2.);
 float pillow=pow(pow(e.x,4.6)+pow(e.y,4.6),1./4.6);
 c*=mix(1.,1.-smoothstep(.955,.99,pillow),bend)*power;
 gl_FragColor=vec4(c,1.);
}`,p0="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",f0=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;
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
 gl_FragColor=vec4(c*(.035+.5*near*near),1.);
}`,m0=`varying vec3 vN;varying vec3 vV;uniform float time;uniform float glitch;
float h(float x){return fract(sin(x*91.17)*43758.5453);}
void main(){
 vec4 w=modelMatrix*vec4(position,1.);
 float row=floor(w.y*2.4);
 w.x+=(h(row+floor(time*15.))-.5)*1.15*glitch*step(.5,h(row*.37+floor(time*9.)));
 vec4 mv=viewMatrix*w;
 vN=normalize(normalMatrix*normal);
 vV=normalize(-mv.xyz);
 gl_Position=projectionMatrix*mv;
}`,g0=`precision highp float;varying vec3 vN;varying vec3 vV;uniform float time;uniform float cell;
float b2(vec2 a){a=floor(a);return fract(a.x/2.+a.y*a.y*.75);}
float b4(vec2 a){return b2(.5*a)*.25+b2(a);}
float b8(vec2 a){return b4(.5*a)*.25+b2(a);}
float h(float x){return fract(sin(x*91.17)*43758.5453);}
void main(){
 vec3 n=normalize(vN);
 float l=max(0.,dot(n,normalize(vec3(-.38,.74,.56))));
 float rim=pow(1.-max(0.,dot(n,normalize(vV))),2.1);
 float v=l*.95+rim*.9;
 vec2 c=floor(gl_FragCoord.xy/cell);
 float row=floor(c.y/4.);
 float gone=step(.972,h(row+floor(time*12.)));
 bool on=v>b8(c)*.9+.045&&gone<.5;
 gl_FragColor=vec4(on?vec3(.97):vec3(.0028),1.);
}`;function _0(e,t,i=!1){let r=i?[[0,0],[.86,.05],[1,.15],[.82,.32],[.64,.56],[.5,.78],[.3,.93],[.08,1],[0,1]]:[[0,0],[.84,.02],[1,.1],[.74,.24],[.56,.5],[.62,.76],[.94,.9],[.86,.98],[0,1]];return new ig(r.map(([a,n])=>new _e(Math.max(.001,a*t),n*e)),9)}function v0(e){let t=new jt({vertexShader:m0,fragmentShader:g0,uniforms:{time:{value:0},glitch:{value:0},cell:{value:e}}}),i=new ei,r=new L(0,1,0),a=(m,f,y,v)=>{let T=new pt(_0(f,y,v),t);return m.add(T),T},n=(m,f,y,v)=>{let T=y.clone().sub(f),D=T.length(),A=a(m,D*.96,v);return A.position.copy(f).addScaledVector(T,.02),A.quaternion.setFromUnitVectors(r,T.normalize()),A},s=1,o=[{x:.98,m:3.5,p:[1.85,1.12,.8],r:[.2,.18,.15],a:1.16,y:0},{x:.32,m:3.62,p:[2.05,1.3,.84],r:[.21,.19,.155],a:1.12,y:.09},{x:-.32,m:3.4,p:[1.92,1.22,.8],r:[.2,.18,.15],a:1.18,y:.03},{x:-.94,m:3.05,p:[1.5,.95,.7],r:[.18,.16,.135],a:1.26,y:-.08}],l=m=>{let f=new ei;i.add(f);let y=new L(-m,.17,.2).normalize(),v=new L(0,1,0).addScaledVector(y,-y.y).normalize(),T=new L().crossVectors(v,y),D=new ei;D.quaternion.setFromRotationMatrix(new ot().makeBasis(v,y,T)),D.scale.setScalar(s),D.position.set(m*.55,-.1,-1.78).addScaledVector(y,-3.62*s).addScaledVector(v,-.32*s),f.add(D);let A=[],C=(z,B,W,V)=>{let ie=[],G=new ei;return G.position.copy(z),D.add(G),B.forEach((he,pe)=>{if(G.rotation.x=m*V[pe],ie.push({joint:G,rest:G.rotation.x,weight:pe?.9:.5}),a(G,he*.94,W[pe],pe===B.length-1).position.y=he*.03,pe<B.length-1){let Pe=new ei;Pe.position.y=he,G.add(Pe),G=Pe}}),ie};o.forEach((z,B)=>{let W=new L(z.x,z.m+z.y,0);n(D,new L(z.x*.52,.3,0),W,.22-B*.012),A.push(C(W,z.p,z.r,[z.a,-.95,-.72]))});let U=new L(1.78,2.05,-.1);n(D,new L(.98,.5,0),U,.23),A.push(C(U,[1.28,.98],[.21,.17],[.98,-.92])),[[-.62,.18],[-.12,.08],[.44,.12],[.86,.3],[-.4,.62],[.1,.58],[.58,.7],[-.72,.66]].forEach(([z,B],W)=>{let V=new pt(new bg(1,9,7),t),ie=.27+W%3*.05;V.scale.set(ie,ie*1.25,ie*.85),V.position.set(z,B,W*37%5*.05-.1),D.add(V)});let M=D.position.clone(),S=new L(m*.62,-1,-.3).normalize(),R=new L(S.y,-S.x,0).normalize();[-.36,.36].forEach((z,B)=>{let W=M.clone().addScaledVector(R,z).addScaledVector(S,.1);n(f,W,W.clone().addScaledVector(S,24),.27-B*.04)});let I=Array.from({length:7},(z,B)=>{let W=ie=>{let G=Math.sin((B+1)*(m+3)*12.9898*ie)*43758.5453;return G-Math.floor(G)},V=new pt(new Dt(.075,1),t);return V.position.set(m*(1.5+W(1)*3.4),-1.7-W(2)*1.2,-.9-W(4)*.7),f.add(V),{mesh:V,y:V.position.y,speed:.12+W(3)*.22,phase:W(5),max:.8+W(6)*3.4}});return{s:m,root:f,joints:A,drips:I}},h=[l(-1),l(1)],c={x:0,y:0,half:7},u=0,d=0,p=7,g=0,_=!1;return{group:i,material:t,place(m,f,y,v){c.x=m,c.y=f-v*.18,c.half=y,c.hh=v,_||(_=!0,u=c.x,d=c.y,p=c.half)},update(m,f,y,v){let T=1-Math.exp(-f/180);u+=(c.x-u)*T,d+=(c.y-d)*T,p+=(c.half-p)*T,g+=(qt(y*20,0,1)-g)*(1-Math.exp(-f/140)),h.forEach(({s:D,root:A,joints:C,drips:U},M)=>{U.forEach(S=>{let R=(m*.001*S.speed+S.phase)%1;S.mesh.visible=R<.74;let I=S.mesh.visible?(1-Math.abs(R/.74*2-1))*S.max:0;S.mesh.scale.y=Math.max(.01,I),S.mesh.position.y=S.y-I/2}),A.position.set(u+D*p,d+(D<0?(c.hh||5)*.1:-(c.hh||5)*.08)+Math.sin(m*7e-4+M*2)*.05,0),C.forEach((S,R)=>{let I=Math.sin(m*.0013+R*1.3+M*2.4)*.03;S.forEach(({joint:z,rest:B,weight:W},V)=>{z.rotation.x=B+D*(V?-1:1)*W*(I*(V?1:-1)+g*.14)})})}),t.uniforms.time.value=m/1e3,t.uniforms.glitch.value=v}}}function x0({host:e,stage:t,items:i,onHover:r,onOpen:a,onPlay:n}){let s=document.createElement("canvas");s.className="tv-canvas",s.setAttribute("aria-hidden","true"),e.append(s);let o;try{o=new kl({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return s.remove(),null}let l=Math.min(devicePixelRatio||1,1.25);o.setPixelRatio(l),o.outputColorSpace=ct,o.setClearColor(0,0);let h=Js(o),c=$s(h),u=new Ha;u.background=new ke(131587),u.fog=new Hm(131587,40,96);let d=new rh(16777215,1.5);d.position.set(-8,18,22),u.add(d);let p=new Pt(30,1,1,200);p.position.set(0,0,40);let g=new jt({vertexShader:p0,fragmentShader:f0,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:Nr},b:{value:Nr},fade:{value:1},time:{value:0},focus:{value:new _e(.47,.55)}}}),_=new pt(new Dt(2,2),g);_.frustumCulled=!1,_.renderOrder=-10,u.add(_);let m=new ah(16777215,.32);u.add(m);let f=new ke(16777215),y=new ke(16777215),v=new ke(16777215),T=new pt(new Dt(1,1),new Gi({map:Nr,color:16777215,transparent:!0,opacity:0,fog:!1}));T.renderOrder=1,u.add(T);let D=new pt(new Dt(1,1),new Gi({color:328965,fog:!1}));D.position.z=-.04,u.add(D);let A=v0(Math.max(2,Math.round(2.4*l)));u.add(A.group);let C=i.map((te,q)=>{let ae=ve=>{let Q=Math.sin((q+1)*12.9898*ve)*43758.5453;return Q-Math.floor(Q)};return{rx:ae(1)-.5,ry:ae(2)-.5,rz:ae(3)-.5,wob:ae(4)*6.28,tilt:(ae(5)-.5)*.022,pile:ae(6)-.5}}),U=i.map((te,q)=>{let ae=Qs(c,C[q].tilt),ve=new pt(c.hit,new Gi({visible:!1}));return ve.userData.index=q,ae.group.add(ve),ae.hit=ve,u.add(ae.group),ae}),M=new Map,S=new Map,R=(te,q)=>{if(M.has(te)){let ve=M.get(te);ve.complete&&ve.naturalWidth?q(ve):ve.addEventListener("load",()=>q(ve),{once:!0});return}let ae=new Image;ae.decoding="async",ae.src=i[te].src,M.set(te,ae),ae.addEventListener("load",()=>q(ae),{once:!0})},I=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),z=te=>{U[te].wanted||(U[te].wanted=!0,R(te,q=>I.then(()=>{let ae=gh(q),ve=(Q,de)=>{Q.material.map=de,Q.material.emissiveMap=de,Q.material.emissiveIntensity=.55,Q.material.color.set(16777215),Q.material.needsUpdate=!0};ve(U[te].label,h0(q,i[te],ae)),ve(U[te].spine,c0(i[te],ae)),dh(i[te].project,te,uh(q)).forEach((Q,de)=>{let Ue=U[te].stickers[de],be=new $i(Q);be.colorSpace=ct,be.anisotropy=4,Ue.material.map=be,Ue.material.emissiveMap=be,Ue.material.needsUpdate=!0})})))},B=te=>{S.has(te)||(S.set(te,null),R(te,q=>{let ae=new $i(q);ae.colorSpace=ct,ae.anisotropy=8,ae.generateMipmaps=!0,ae.minFilter=si;let ve=document.createElement("canvas");ve.width=ve.height=6;let Q=ve.getContext("2d",{willReadFrequently:!0});Q.drawImage(q,0,0,6,6);let de=Q.getImageData(0,0,6,6).data,Ue=0,be=0,ye=0;for(let re=0;re<de.length;re+=4)Ue+=de[re],be+=de[re+1],ye+=de[re+2];let Be=new ke(Ue/9180,be/9180,ye/9180).convertSRGBToLinear(),Ie=Math.max(Ue,be,ye,1),Fe=255/Ie,P=`rgba(${[Ue,be,ye].map(re=>Math.round(re*Fe)).join(",")},.3)`;S.set(te,{texture:ae,ratio:q.naturalWidth/q.naturalHeight,avg:Be,glow:P}),te===ce&&Z(te)}))},W=new Ha,V=new Ms(-1,1,1,-1,0,1),ie=new jt({vertexShader:u0,fragmentShader:d0,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1}}}),G=new pt(new Dt(2,2),ie);G.frustumCulled=!1,W.add(G);let he=null,pe=0,Pe=0;function Ve(){let te=Math.round(pe*l),q=Math.round(Pe*l);(!he||he.width!==te||he.height!==q)&&(he?.dispose(),he=new Ei(te,q,{samples:2,type:nr,colorSpace:"",generateMipmaps:!0,minFilter:si,magFilter:Bt})),ie.uniforms.map.value=he.texture,p.aspect=pe/Pe,p.updateProjectionMatrix(),j()}let X=()=>{let te=80*Math.tan(p.fov*Math.PI/360);return{vh:te,vw:te*p.aspect}},fe=4/3;function j(){let{vh:te,vw:q}=X(),ae=q*.62,ve=te*.62,Q=ae,de=Q/fe;de>ve&&(de=ve,Q=de*fe),T.scale.set(Q,de,1),T.position.set(0,te*.06,0),D.scale.set(Q+.16,de+.16,1),D.position.set(T.position.x,T.position.y,-.04),A.place(T.position.x,T.position.y,Q/2,de/2),g.uniforms.focus.value.set(.5+T.position.x/q,.5+T.position.y/te)}let ce=-1;function Z(te){let q=S.get(te);q&&(g.uniforms.a.value!==q.texture&&(g.uniforms.b.value=g.uniforms.a.value===Nr?q.texture:g.uniforms.a.value,g.uniforms.a.value=q.texture,g.uniforms.fade.value=0),y.copy(q.avg).lerp(v,.3),document.documentElement.style.setProperty("--tube-glow",q.glow),T.material.map=q.texture,T.material.opacity=1,T.material.needsUpdate=!0,fe=q.ratio,j())}function ge(){let te=s.clientWidth,q=s.clientHeight;!te||!q||(pe=te,Pe=q,o.setSize(pe,Pe,!1),Ve())}new ResizeObserver(ge).observe(s),ge();let Me=(te,q,ae)=>Ys(qt((ae-te)/(q-te),0,1));function Ce(te,q,ae,ve,Q){let{vh:de,vw:Ue}=X(),be=Ys(qt(1-Math.abs(ve)*1.15,0,1)),ye=te.group,Be=Math.sin(Q*5e-4+q.wob),Ie={x:Ue*.275,y:-de*.265,z:8,s:.52,rx:-.16+Be*.012,ry:-.3+Math.cos(Q*4e-4)*.018,rz:.05},Fe;if(ve>=0){let P=ae%2?1:-1,re=1-ve*4.2;Fe={x:P*Ue*.49,y:de*.1+q.pile*1.2-ve*.12,z:re,s:.46,rx:q.rx*.1,ry:-P*.92+q.ry*.08,rz:P*.03+q.rz*.04},Fe={x:at(Fe.x,Ie.x,be),y:at(Fe.y,Ie.y,be),z:at(Fe.z,Ie.z,be),s:at(Fe.s,Ie.s,be),rx:at(Fe.rx,Ie.rx,be),ry:at(Fe.ry,Ie.ry,be),rz:at(Fe.rz,Ie.rz,be)}}else{let P=Za*.5,re=Me(0,.9,-ve),J={x:-Ue*.265+q.pile*.45,y:-de*.19+(ve+1)*P,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+q.ry*.05,rz:q.rz*.022};Fe={x:at(Ie.x,J.x,re),y:at(Ie.y,J.y,re)+Math.sin(re*Math.PI)*3,z:at(Ie.z,J.z,re),s:at(Ie.s,J.s,re),rx:at(Ie.rx,J.rx,re),ry:at(Ie.ry,J.ry,re),rz:at(Ie.rz,J.rz,re)}}ye.position.set(Fe.x,Fe.y,Fe.z),ye.scale.setScalar(Fe.s),ye.rotation.set(Fe.rx,Fe.ry,Fe.rz),ye.visible=ve>-8&&ve<12&&Fe.y>-de*.85}let K=new Jg,ue=new _e,b=null,xe=-2,ne=!1,Ee=()=>{xe!==-2&&(xe=-2,r(-1),t.classList.remove("is-pointing"))},le=()=>{if(ne=!1,!b){Ee();return}let[te,q]=window.trbnBend?window.trbnBend(b.x,b.y,pe,Pe):[b.x,b.y],ae=te/pe,ve=q/Pe;if(ae<0||ae>1||ve<0||ve>1){Ee();return}ue.set(ae*2-1,-(ve*2-1)),K.setFromCamera(ue,p);let Q=K.intersectObjects([...U.filter(Ue=>Ue.group.visible).map(Ue=>Ue.hit),T],!1)[0],de=Q?Q.object===T?-1:Q.object.userData.index:-2;de!==xe&&(xe=de,r(de>=0?de:-1),t.classList.toggle("is-pointing",de!==-2))};t.addEventListener("pointermove",te=>{let q=s.getBoundingClientRect();b={x:te.clientX-q.left,y:te.clientY-q.top},ne=!0}),t.addEventListener("pointerleave",()=>{b=null,ne=!0}),t.addEventListener("click",te=>{te.target.closest("a, button")||(le(),xe!==-2&&a(xe===-1?ce:xe))});let Ne=!1;Promise.all([o.compileAsync(u,p),o.compileAsync(W,V)]).then(()=>{Ne=!0},()=>{Ne=!0});let Y=1,Ae=0,w=0,x=0,F=0,ee=0,oe=!1,$=!0;return{frame:(te,q,ae,ve=1)=>{if(!$||!Ne)return;let Q=te-x,de=Math.abs(Q);x=te,w+=Q*11+ae*9e-4;let Ue=qt(te/Math.max(1,i.length-1),0,1);U.forEach((Fe,P)=>{let re=P-te;if(re>-7&&re<7&&z(P),Ce(Fe,C[P],P,re,q),Math.abs(re)<3){Fe.reels[0].hub.rotation.z=-w,Fe.reels[1].hub.rotation.z=-w*.82;let J=at(3.15,1.75,Ue),se=at(1.75,3.15,Ue);Fe.reels[0].pack.scale.set(J,J,1),Fe.reels[1].pack.scale.set(se,se,1)}});let be=qt(Math.round(te),0,i.length-1);if(B(be),B(Math.min(i.length-1,be+1)),B(Math.max(0,be-1)),be!==ce){let Fe=ce<0;ce=be,Fe||(Y=1,n?.(be)),Z(be)}Y=Math.max(Y*Math.exp(-ae/170),qt(de*26,0,.7)),Ae||(Ae=q);let ye=Math.min(1,(q-Ae)/700);f.lerp(y,1-Math.exp(-ae/500)),m.color.copy(f),g.uniforms.time.value=q/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+ae/900),ie.uniforms.time.value=q/1e3,ie.uniforms.glitch.value=Y,A.update(q,ae,de,Y),ie.uniforms.power.value=1-(1-ye)**3,ie.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let Be=b?b.x/pe-.5:0,Ie=b?b.y/Pe-.5:0;F+=(Be-F)*(1-Math.exp(-ae/260)),ee+=(Ie-ee)*(1-Math.exp(-ae/260)),p.position.x=F*1.6,p.position.y=-ee*1,p.lookAt(0,0,0),ne&&le(),o.toneMapping=$t,o.setRenderTarget(he),o.clear(),o.render(u,p),o.setRenderTarget(null),o.clear(),o.render(W,V),s.style.opacity=String(Math.min(ye*3,1)*ve),oe||(oe=!0,t.classList.add("tv-on"))},show(te){$=te,s.style.display=te?"":"none",te&&ge()},lighter(){l<=.8||(l=Math.max(.8,l-.2),o.setPixelRatio(l),ge())}}}var Sh={rest:{x:.222,y:-.252,z:6,s:.48,rx:-.22,ry:-.36,rz:.07},lift:{x:.2,y:-.21,z:9,s:.45,rx:-.07,ry:-.12,rz:.025}};function y0(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");return t.filter="blur(16px)",t.fillStyle="rgba(0,0,0,.9)",t.beginPath(),t.roundRect(44,38,168,84,16),t.fill(),na(e,1)}function S0({grid:e,scroller:t,items:i}){let r=document.createElement("canvas");r.className="tape-library",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"absolute",left:"0",top:"0",zIndex:"3",pointerEvents:"none"}),e.append(r);let a;try{a=new kl({canvas:r,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return r.remove(),null}let n=Math.min(devicePixelRatio||1,1.25);a.setPixelRatio(n),a.outputColorSpace=ct,a.toneMapping=$t,a.setClearColor(0,0),a.autoClear=!1;let s=Js(a),o=$s(s),l=new Ha,h=new rh(16777215,1.5);h.position.set(-8,18,22),l.add(h);let c=new ah(16777215,.32);l.add(c);let u=new Pt(30,4/3,1,200);u.position.set(0,0,40),u.lookAt(0,0,0);let d=80*Math.tan(u.fov*Math.PI/360),p=d*u.aspect,g=new pt(new Dt(1,1),new Gi({map:y0(),transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=-1,l.add(g);let _=new ke(16777215),m=i.map((j,ce)=>{let Z=Ce=>{let K=Math.sin((ce+1)*12.9898*Ce)*43758.5453;return K-Math.floor(K)},ge=Qs(o,(Z(5)-.5)*.022);ge.group.visible=!1,l.add(ge.group);let Me=at(1.75,3.15,Z(7));return ge.reels[0].pack.scale.set(Me,Me,1),ge.reels[1].pack.scale.set(4.9-Me,4.9-Me,1),{item:j,tape:ge,seed:{rx:Z(1)-.5,ry:Z(2)-.5,rz:Z(3)-.5},spin:Z(4)*6.28,tint:new ke(1,1,1),wanted:!1,ready:!1,shown:!1,p:0,hover:0,h:0,tx:0,ty:0,px:0,py:0,box:null,dirty:!1}}),f=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),y=(j,ce)=>{let Z=na(ce,4);j.material.map=Z,j.material.emissiveMap=Z,j.material.emissiveIntensity=.55,j.material.color.set(16777215),j.material.needsUpdate=!0};function v(j){if(j.wanted)return;j.wanted=!0;let ce=j.item.card.querySelector("img");if(!ce)return;let Z=()=>f.then(()=>{if(ce.naturalWidth){try{T(j,ce)}catch{}j.ready=!0,X()}});ce.complete&&ce.naturalWidth?Z():ce.addEventListener("load",Z,{once:!0})}function T(j,ce){let Z=gh(ce);y(j.tape.label,eo(xh(ce,j.item,Z),396)),y(j.tape.spine,eo(yh(j.item,Z),830));let ge=null;try{ge=uh(ce)}catch{}dh(j.item.project,j.item.index,ge).forEach((ne,Ee)=>{let le=j.tape.stickers[Ee];if(!le)return;let Ne=na(eo(ne,128),4);le.material.map=Ne,le.material.emissiveMap=Ne,le.material.needsUpdate=!0});let Me=document.createElement("canvas");Me.width=Me.height=6;let Ce=Me.getContext("2d",{willReadFrequently:!0});Ce.drawImage(ce,0,0,6,6);let K=Ce.getImageData(0,0,6,6).data,ue=0,b=0,xe=0;for(let ne=0;ne<K.length;ne+=4)ue+=K[ne],b+=K[ne+1],xe+=K[ne+2];j.tint.setRGB(ue/9180,b/9180,xe/9180).convertSRGBToLinear().lerp(_,.3)}function D(j,ce){let Z=Sh.rest,ge=Sh.lift,Me=Ys(qt(j.h,0,1)),Ce=at(Z.x,ge.x,Me)*p,K=at(Z.y,ge.y,Me)*d,ue=at(Z.rz,ge.rz,Me)+j.seed.rz*.03,b=at(Z.rx,ge.rx,Me)+j.seed.rx*.05-j.py*.2*Me,xe=at(Z.ry,ge.ry,Me)+j.seed.ry*.07+j.px*.28*Me,ne=1-(1-qt(j.p,0,1))**3;Ce+=(1-ne)*4.5,K-=(1-ne)*9.5,ue+=(1-ne)*.22;let Ee=j.tape.group;Ee.position.set(Ce,K,at(Z.z,ge.z,Me)),Ee.scale.setScalar(at(Z.s,ge.s,Me)),Ee.rotation.set(b,xe,ue),j.tape.reels[0].hub.rotation.z=-j.spin,j.tape.reels[1].hub.rotation.z=-j.spin*.82,g.position.set(Ce+1.1+Me*.9,K-1.5-Me*1.1,0),g.scale.set(ii*Ee.scale.x*(1.2+Me*.12),ri*Ee.scale.x*(1.5+Me*.2),1),g.rotation.set(0,0,ue),g.material.opacity=(.78-Me*.2)*ne}let A=220,C=0,U=0,M=-1e9,S=0,R=0,I=!0,z=!0,B=!1,W=!1,V=null,ie=0,G=0,he=0,pe=0,Pe=(j,ce)=>{let{box:Z}=j,ge=Z.left,Me=U-(Z.top-ce+Z.height);a.setViewport(ge,Me,Z.width,Z.height),a.setScissor(ge,Me,Z.width,Z.height),a.clear(),!(!j.shown||!j.ready)&&(V&&V!==j.tape.group&&(V.visible=!1),V=j.tape.group,V.visible=!0,c.color.copy(j.tint),a.render(l,u))};function Ve(j){if(S=0,!z||!B||!W||document.hidden)return;let ce=Math.min(250,j-(R||j));R=j;let Z=t.getBoundingClientRect(),ge=e.getBoundingClientRect(),Me=e.clientWidth,Ce=e.clientHeight,K=m.map(Y=>Y.item.card.hidden?null:Y.item.media.getBoundingClientRect()),ue=Z.top-ge.top,b=Z.bottom-ge.top,xe=Math.max(1,Math.min(Math.round(Z.height+A*2),Math.ceil(Ce)));(Me!==C||xe!==U)&&(C=Me,U=xe,a.setSize(C,U,!1),r.style.width=`${C}px`,r.style.height=`${U}px`,I=!0);let ne=Math.max(0,Math.floor(Ce-U));if(ue<M+A*.35||b>M+U-A*.35||M>ne){let Y=qt(Math.round(ue-A),0,ne);Y!==M&&(M=Y,r.style.transform=`translate3d(0,${M}px,0)`,I=!0)}let Ee=!1,le=!1,Ne=M;if(m.forEach((Y,Ae)=>{let w=K[Ae];if(Y.box=null,!w||!w.width)return;let x=w.top-ge.top,F=w.bottom-ge.top;if(F>ue-900&&x<b+900&&v(Y),F<Ne||x>Ne+U)return;Y.box={left:w.left-ge.left,top:x,width:w.width,height:w.height},Y.ready&&!Y.shown&&F>ue+w.height*.2&&x<b-w.height*.2&&(Y.shown=!0,Y.born=j,Y.p=0,Y.dirty=!0),Y.shown&&Y.p<1&&(Y.p=Math.min(1,(j-Y.born)/620),Y.dirty=!0),(Math.abs(Y.hover-Y.h)>.001||Math.abs(Y.tx-Y.px)>.001||Math.abs(Y.ty-Y.py)>.001||Y.shown&&Y.p<1)&&(Y.dirty=!0,le=!0);let ee=Y.h+(Y.hover-Y.h)*(1-Math.exp(-ce/150));Y.h=Math.abs(ee-Y.hover)<.001?Y.hover:ee,Y.px+=(Y.tx-Y.px)*(1-Math.exp(-ce/170)),Y.py+=(Y.ty-Y.py)*(1-Math.exp(-ce/170)),Y.h>.02&&(Y.spin+=ce*.0034*Y.h,Y.dirty=!0),(Y.dirty||I)&&(Ee||(Ee=Y.dirty))}),Ee&&!le&&!I&&j-ie<30){X();return}ie=j,a.setScissorTest(!1),I&&a.clear(),a.setScissorTest(!0),m.forEach(Y=>{!Y.box||!(I||Y.dirty)||(Y.ready&&Y.shown&&D(Y,j),Pe(Y,Ne),Y.dirty=!1)}),a.setScissorTest(!1),I=!1,Ee?(G++,he+=Math.min(ce,50),G>=40&&(pe=he/G>26?pe+1:0,G=0,he=0,pe>=2&&!navigator.webdriver&&(pe=0,fe())),X()):(G=0,he=0,R=0)}function X(){!S&&z&&B&&W&&!document.hidden&&(S=requestAnimationFrame(Ve))}function fe(){n<=.8||(n=Math.max(.8,n-.2),a.setPixelRatio(n),C=0,I=!0)}return m.forEach(j=>{let{link:ce,media:Z}=j.item,ge=Me=>{let Ce=Z.getBoundingClientRect();Ce.width&&(j.tx=qt((Me.clientX-Ce.left)/Ce.width-.5,-.6,.6),j.ty=qt((Me.clientY-Ce.top)/Ce.height-.5,-.6,.6),X())};ce.addEventListener("pointerenter",Me=>{j.hover=1,ge(Me)}),ce.addEventListener("pointermove",ge),ce.addEventListener("pointerleave",()=>{j.hover=0,j.tx=0,j.ty=0,X()}),ce.addEventListener("focus",()=>{ce.matches(":focus-visible")&&(j.hover=1,X())}),ce.addEventListener("blur",()=>{j.hover=0,X()})}),t.addEventListener("scroll",X,{passive:!0}),new ResizeObserver(()=>{I=!0,X()}).observe(e),new ResizeObserver(()=>{I=!0,X()}).observe(t),new IntersectionObserver(([j])=>{B=j.isIntersecting,B&&(I=!0,X())},{root:t,rootMargin:`${A}px 0px`}).observe(e),document.addEventListener("visibilitychange",()=>{I=!0,X()}),addEventListener("pageshow",()=>{I=!0,X()}),m.forEach(j=>{j.tape.group.visible=!0}),a.compileAsync(l,u).catch(()=>{}).then(()=>{m.forEach(j=>{j.tape.group.visible=!1}),W=!0,I=!0,X()}),{wake(){I=!0,X()},show(j){z=j,r.style.display=j?"":"none",j&&(I=!0,X())}}}export{x0 as default,ph as grainTexture,Qs as makeTape,S0 as startShelf,Js as studioEnv,$s as tapeParts};
