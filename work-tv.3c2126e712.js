var Ch=0,Ks=1,Ph=2,$s=1,Lh=2,Jt=3,fr=0,Mt=1,It=2,mr=0,Yr=1,Qs=2,eo=3,to=4,Nh=5,Ir=100,Ih=101,Uh=102,Dh=103,Oh=104,Fh=200,zh=201,Bh=202,Vh=203,Ka=204,$a=205,kh=206,Hh=207,Gh=208,Wh=209,Xh=210,jh=211,qh=212,Yh=213,Zh=214,Qa=0,en=1,tn=2,Zr=3,rn=4,an=5,nn=6,sn=7,ro=0,Jh=1,Kh=2,Kt=0,$h=1,Qh=2,ec=3,io=4,tc=5,rc=6,ic=7,ao=300,Jr=301,Kr=302,on=303,ln=304,ia=306,Li=1e3,Ur=1001,hn=1002,Ut=1003,ac=1004,aa=1005,Dt=1006,cn=1007,$t=1008,Qt=1009,no=1010,so=1011,Ni=1012,un=1013,Dr=1014,er=1015,$r=1016,dn=1017,pn=1018,Qr=1020,oo=35902,lo=1021,ho=1022,Ot=1023,co=1024,uo=1025,ei=1026,ti=1027,po=1028,fn=1029,fo=1030,mn=1031,gn=1033,na=33776,sa=33777,oa=33778,la=33779,vn=35840,_n=35841,xn=35842,yn=35843,Mn=36196,Sn=37492,En=37496,Tn=37808,bn=37809,wn=37810,An=37811,Rn=37812,Cn=37813,Pn=37814,Ln=37815,Nn=37816,In=37817,Un=37818,Dn=37819,On=37820,Fn=37821,ha=36492,zn=36494,Bn=36495,mo=36283,Vn=36284,kn=36285,Hn=36286,ca=2300,Gn=2301,Wn=2302,go=2400,vo=2401,_o=2402,nc=3200,sc=3201,xo=0,oc=1,gr="",ut="srgb",ri="srgb-linear",ua="linear",Je="srgb",ii=7680,yo=519,lc=512,hc=513,cc=514,Mo=515,uc=516,dc=517,pc=518,fc=519,So=35044,Eo="300 es",tr=2e3,da=2001,ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xn=Math.PI/180,jn=180/Math.PI;function ni(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[e&255]+gt[e>>8&255]+gt[e>>16&255]+gt[e>>24&255]+"-"+gt[t&255]+gt[t>>8&255]+"-"+gt[t>>16&15|64]+gt[t>>24&255]+"-"+gt[r&63|128]+gt[r>>8&255]+"-"+gt[r>>16&255]+gt[r>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function mt(e,t,r){return Math.max(t,Math.min(r,e))}function mc(e,t){return(e%t+t)%t}function qn(e,t,r){return(1-r)*e+r*t}function Ii(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function St(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var pe=class dh{constructor(t=0,r=0){dh.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6],this.y=a[1]*r+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(mt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),a=Math.sin(r),n=this.x-t.x,s=this.y-t.y;return this.x=n*i-s*a+t.x,this.y=n*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class ph{constructor(t,r,i,a,n,s,o,l,h){ph.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h)}set(t,r,i,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=r,c[4]=n,c[5]=l,c[6]=i,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=a[0],m=a[3],p=a[6],T=a[1],x=a[4],E=a[7],z=a[2],C=a[5],R=a[8];return n[0]=s*v+o*T+l*z,n[3]=s*m+o*x+l*C,n[6]=s*p+o*E+l*R,n[1]=h*v+c*T+u*z,n[4]=h*m+c*x+u*C,n[7]=h*p+c*E+u*R,n[2]=d*v+f*T+g*z,n[5]=d*m+f*x+g*C,n[8]=d*p+f*E+g*R,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return r*s*c-r*o*h-i*n*c+i*o*l+a*n*h-a*s*l}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,f=h*n-s*l,g=r*u+i*d+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*i)*v,t[2]=(o*i-a*s)*v,t[3]=d*v,t[4]=(c*r-a*l)*v,t[5]=(a*n-o*r)*v,t[6]=f*v,t[7]=(i*l-h*r)*v,t[8]=(s*r-i*n)*v,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(Yn.makeScale(t,r)),this}rotate(t){return this.premultiply(Yn.makeRotation(-t)),this}translate(t,r){return this.premultiply(Yn.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<9;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yn=new We;function To(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function gc(){let e=pa("canvas");return e.style.display="block",e}var bo={};function Ui(e){e in bo||(bo[e]=!0,console.warn(e))}function vc(e,t,r){return new Promise(function(i,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,r);break;default:i()}}setTimeout(n,r)})}function _c(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xc(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qe={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===Je&&(e.r=rr(e.r),e.g=rr(e.g),e.b=rr(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Je&&(e.r=si(e.r),e.g=si(e.g),e.b=si(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===gr?ua:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function rr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function si(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var wo=[.64,.33,.3,.6,.15,.06],Ao=[.2126,.7152,.0722],Ro=[.3127,.329],Co=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[ri]:{primaries:wo,whitePoint:Ro,transfer:ua,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:Ao,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:wo,whitePoint:Ro,transfer:Je,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:Ao,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}});var oi,yc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=pa("canvas")),oi.width=e.width,oi.height=e.height;let r=oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pa("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let n=0;n<a.length;n++)a[n]=rr(a[n]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(rr(t[r]/255)*255):t[r]=rr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mc=0,Lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let n=0,s=i.length;n<s;n++)i[n].isDataTexture?a.push(Zn(i[n].image)):a.push(Zn(i[n]))}else a=Zn(i);r.url=a}return t||(e.images[this.uuid]=r),r}};function Zn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?yc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sc=0,Ft=class Ya extends ai{constructor(t=Ya.DEFAULT_IMAGE,r=Ya.DEFAULT_MAPPING,i=Ur,a=Ur,n=Dt,s=$t,o=Ot,l=Qt,h=Ya.DEFAULT_ANISOTROPY,c=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=ni(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ao)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Li:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case hn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Li:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case hn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null,Ft.DEFAULT_MAPPING=ao,Ft.DEFAULT_ANISOTROPY=1;var Ke=class fh{constructor(t=0,r=0,i=0,a=1){fh.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,a){return this.x=t,this.y=r,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*r+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*r+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*r+s[7]*i+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],f=s[2],g=s[6],v=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-f)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let p=(o+1)/2,T=(u+1)/2,x=(v+1)/2,E=(l+c)/4,z=(h+f)/4,C=(d+g)/4;return p>T&&p>x?p<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(p),a=E/i,n=z/i):T>x?T<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(T),i=E/a,n=C/a):x<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),i=z/n,a=C/n),this.set(i,a,n,r),this}let m=Math.sqrt((g-d)*(g-d)+(h-f)*(h-f)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(h-f)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends ai{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let a=new Ft(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];let n=r.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vr=class extends Ec{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},No=class extends Ft{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Tc=class extends Ft{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},li=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,n,s){let o=r[i+0],l=r[i+1],h=r[i+2],c=r[i+3],u=a[n+0],d=a[n+1],f=a[n+2],g=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=f,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==f){let v=1-s,m=o*u+l*d+h*f+c*g,p=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){let E=Math.sqrt(T),z=Math.atan2(E,m*p);v=Math.sin(v*z)/E,s=Math.sin(s*z)/E}let x=s*p;if(o=o*v+u*x,l=l*v+d*x,h=h*v+f*x,c=c*v+g*x,v===1-s){let E=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=E,l*=E,h*=E,c*=E}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,a,n){let s=r[i],o=r[i+1],l=r[i+2],h=r[i+3],c=a[n],u=a[n+1],d=a[n+2],f=a[n+3];return e[t]=s*f+h*c+o*d-l*u,e[t+1]=o*f+h*u+l*c-s*d,e[t+2]=l*f+h*d+s*u-o*c,e[t+3]=h*f-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(r/2),h=s(i/2),c=s(a/2),u=o(r/2),d=o(i/2),f=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c-u*d*f;break;case"YXZ":this._x=u*h*c+l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c+u*d*f;break;case"ZXY":this._x=u*h*c-l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c-u*d*f;break;case"ZYX":this._x=u*h*c-l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c+u*d*f;break;case"YZX":this._x=u*h*c+l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c-u*d*f;break;case"XZY":this._x=u*h*c-l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c+u*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=r+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-i)*d}else if(r>s&&r>c){let d=2*Math.sqrt(1+r-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(i+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-r-c);this._w=(a-l)/d,this._x=(i+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-r-s);this._w=(n-i)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=r*h+n*s+i*l-a*o,this._y=i*h+n*o+a*s-r*l,this._z=a*h+n*l+r*o-i*s,this._w=n*h-r*s-i*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,a=this._z,n=this._w,s=n*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=r,this._y=i,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=r*c+this._x*u,this._y=i*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class mh{constructor(t=0,r=0,i=0){mh.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(Io.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(Io.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6]*a,this.y=n[1]*r+n[4]*i+n[7]*a,this.z=n[2]*r+n[5]*i+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=t.elements,s=1/(n[3]*r+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*r+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*r+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*i),c=2*(o*r-n*a),u=2*(n*i-s*r);return this.x=r+l*h+s*u-o*c,this.y=i+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[4]*i+n[8]*a,this.y=n[1]*r+n[5]*i+n[9]*a,this.z=n[2]*r+n[6]*i+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,a=t.y,n=t.z,s=r.x,o=r.y,l=r.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jn.copy(this).projectOnVector(t),this.sub(Jn)}reflect(t){return this.sub(Jn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(mt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return r*r+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let a=Math.sin(r)*t;return this.x=a*Math.sin(i),this.y=Math.cos(r)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=a,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jn=new L,Io=new li,Di=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,zt):zt.fromBufferAttribute(a,n),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fa.copy(r.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}let i=e.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),ma.subVectors(this.max,Oi),hi.subVectors(e.a,Oi),ci.subVectors(e.b,Oi),ui.subVectors(e.c,Oi),_r.subVectors(ci,hi),xr.subVectors(ui,ci),Or.subVectors(hi,ui);let t=[0,-_r.z,_r.y,0,-xr.z,xr.y,0,-Or.z,Or.y,_r.z,0,-_r.x,xr.z,0,-xr.x,Or.z,0,-Or.x,-_r.y,_r.x,0,-xr.y,xr.x,0,-Or.y,Or.x,0];return!Kn(t,hi,ci,ui,ma)||(t=[1,0,0,0,1,0,0,0,1],!Kn(t,hi,ci,ui,ma))?!1:(ga.crossVectors(_r,xr),t=[ga.x,ga.y,ga.z],Kn(t,hi,ci,ui,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ir=[new L,new L,new L,new L,new L,new L,new L,new L],zt=new L,fa=new Di,hi=new L,ci=new L,ui=new L,_r=new L,xr=new L,Or=new L,Oi=new L,ma=new L,ga=new L,Fr=new L;function Kn(e,t,r,i,a){for(let n=0,s=e.length-3;n<=s;n+=3){Fr.fromArray(e,n);let o=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),l=t.dot(Fr),h=r.dot(Fr),c=i.dot(Fr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var bc=new Di,Fi=new L,$n=new L,Qn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):bc.setFromPoints(e).getCenter(r);let i=0;for(let a=0,n=e.length;a<n;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);let t=Fi.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Fi,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($n.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add($n)),this.expandByPoint(Fi.copy(e.center).sub($n))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ar=new L,es=new L,va=new L,yr=new L,ts=new L,_a=new L,rs=new L,Uo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){es.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(es);let a=e.distanceTo(t)*.5,n=-this.direction.dot(va),s=yr.dot(this.direction),o=-yr.dot(va),l=yr.lengthSq(),h=Math.abs(1-n*n),c,u,d,f;if(h>0)if(c=n*o-s,u=n*s-o,f=a*h,c>=0)if(u>=-f)if(u<=f){let g=1/h;c*=g,u*=g,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-f?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=f?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(es).addScaledVector(va,u),d}intersectSphere(e,t){ar.subVectors(e.center,this.origin);let r=ar.dot(this.direction),i=ar.dot(ar)-r*r,a=e.radius*e.radius;if(i>a)return null;let n=Math.sqrt(a-i),s=r-n,o=r+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(r=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(r=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),r>n||a>i||((a>r||isNaN(r))&&(r=a),(n<i||isNaN(i))&&(i=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,i,a){ts.subVectors(t,e),_a.subVectors(r,e),rs.crossVectors(ts,_a);let n=this.direction.dot(rs),s;if(n>0){if(i)return null;s=1}else if(n<0)s=-1,n=-n;else return null;yr.subVectors(this.origin,e);let o=s*this.direction.dot(_a.crossVectors(yr,_a));if(o<0)return null;let l=s*this.direction.dot(ts.cross(yr));if(l<0||o+l>n)return null;let h=-s*yr.dot(rs);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class Gs{constructor(t,r,i,a,n,s,o,l,h,c,u,d,f,g,v,m){Gs.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h,c,u,d,f,g,v,m)}set(t,r,i,a,n,s,o,l,h,c,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=r,p[8]=i,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gs().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,a=1/di.setFromMatrixColumn(t,0).length(),n=1/di.setFromMatrixColumn(t,1).length(),s=1/di.setFromMatrixColumn(t,2).length();return r[0]=i[0]*a,r[1]=i[1]*a,r[2]=i[2]*a,r[3]=0,r[4]=i[4]*n,r[5]=i[5]*n,r[6]=i[6]*n,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,a=t.y,n=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,f=s*u,g=o*c,v=o*u;r[0]=l*c,r[4]=-l*u,r[8]=h,r[1]=f+g*h,r[5]=d-v*h,r[9]=-o*l,r[2]=v-d*h,r[6]=g+f*h,r[10]=s*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,g=h*c,v=h*u;r[0]=d+v*o,r[4]=g*o-f,r[8]=s*h,r[1]=s*u,r[5]=s*c,r[9]=-o,r[2]=f*o-g,r[6]=v+d*o,r[10]=s*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,g=h*c,v=h*u;r[0]=d-v*o,r[4]=-s*u,r[8]=g+f*o,r[1]=f+g*o,r[5]=s*c,r[9]=v-d*o,r[2]=-s*h,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let d=s*c,f=s*u,g=o*c,v=o*u;r[0]=l*c,r[4]=g*h-f,r[8]=d*h+v,r[1]=l*u,r[5]=v*h+d,r[9]=f*h-g,r[2]=-h,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let d=s*l,f=s*h,g=o*l,v=o*h;r[0]=l*c,r[4]=v-d*u,r[8]=g*u+f,r[1]=u,r[5]=s*c,r[9]=-o*c,r[2]=-h*c,r[6]=f*u+g,r[10]=d-v*u}else if(t.order==="XZY"){let d=s*l,f=s*h,g=o*l,v=o*h;r[0]=l*c,r[4]=-u,r[8]=h*c,r[1]=d*u+v,r[5]=s*c,r[9]=f*u-g,r[2]=g*u-f,r[6]=o*c,r[10]=v*u+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wc,t,Ac)}lookAt(t,r,i){let a=this.elements;return bt.subVectors(t,r),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),Mr.crossVectors(i,bt),Mr.lengthSq()===0&&(Math.abs(i.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),Mr.crossVectors(i,bt)),Mr.normalize(),xa.crossVectors(bt,Mr),a[0]=Mr.x,a[4]=xa.x,a[8]=bt.x,a[1]=Mr.y,a[5]=xa.y,a[9]=bt.y,a[2]=Mr.z,a[6]=xa.z,a[10]=bt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],x=i[7],E=i[11],z=i[15],C=a[0],R=a[4],U=a[8],M=a[12],S=a[1],A=a[5],D=a[9],F=a[13],k=a[2],K=a[6],G=a[10],ae=a[14],q=a[3],le=a[7],me=a[11],Ie=a[15];return n[0]=s*C+o*S+l*k+h*q,n[4]=s*R+o*A+l*K+h*le,n[8]=s*U+o*D+l*G+h*me,n[12]=s*M+o*F+l*ae+h*Ie,n[1]=c*C+u*S+d*k+f*q,n[5]=c*R+u*A+d*K+f*le,n[9]=c*U+u*D+d*G+f*me,n[13]=c*M+u*F+d*ae+f*Ie,n[2]=g*C+v*S+m*k+p*q,n[6]=g*R+v*A+m*K+p*le,n[10]=g*U+v*D+m*G+p*me,n[14]=g*M+v*F+m*ae+p*Ie,n[3]=T*C+x*S+E*k+z*q,n[7]=T*R+x*A+E*K+z*le,n[11]=T*U+x*D+E*G+z*me,n[15]=T*M+x*F+E*ae+z*Ie,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+n*l*u-a*h*u-n*o*d+i*h*d+a*o*f-i*l*f)+v*(+r*l*f-r*h*d+n*s*d-a*s*f+a*h*c-n*l*c)+m*(+r*h*u-r*o*f-n*s*u+i*s*f+n*o*c-i*h*c)+p*(-a*o*c-r*l*u+r*o*d+a*s*u-i*s*d+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=r,a[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=u*m*h-v*d*h+v*l*f-o*m*f-u*l*p+o*d*p,x=g*d*h-c*m*h-g*l*f+s*m*f+c*l*p-s*d*p,E=c*v*h-g*u*h+g*o*f-s*v*f-c*o*p+s*u*p,z=g*u*l-c*v*l-g*o*d+s*v*d+c*o*m-s*u*m,C=r*T+i*x+a*E+n*z;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=T*R,t[1]=(v*d*n-u*m*n-v*a*f+i*m*f+u*a*p-i*d*p)*R,t[2]=(o*m*n-v*l*n+v*a*h-i*m*h-o*a*p+i*l*p)*R,t[3]=(u*l*n-o*d*n-u*a*h+i*d*h+o*a*f-i*l*f)*R,t[4]=x*R,t[5]=(c*m*n-g*d*n+g*a*f-r*m*f-c*a*p+r*d*p)*R,t[6]=(g*l*n-s*m*n-g*a*h+r*m*h+s*a*p-r*l*p)*R,t[7]=(s*d*n-c*l*n+c*a*h-r*d*h-s*a*f+r*l*f)*R,t[8]=E*R,t[9]=(g*u*n-c*v*n-g*i*f+r*v*f+c*i*p-r*u*p)*R,t[10]=(s*v*n-g*o*n+g*i*h-r*v*h-s*i*p+r*o*p)*R,t[11]=(c*o*n-s*u*n-c*i*h+r*u*h+s*i*f-r*o*f)*R,t[12]=z*R,t[13]=(c*v*a-g*u*a+g*i*d-r*v*d-c*i*m+r*u*m)*R,t[14]=(g*o*a-s*v*a-g*i*l+r*v*l+s*i*m-r*o*m)*R,t[15]=(s*u*a-c*o*a+c*i*l-r*u*l-s*i*d+r*o*d)*R,this}scale(t){let r=this.elements,i=t.x,a=t.y,n=t.z;return r[0]*=i,r[4]*=a,r[8]*=n,r[1]*=i,r[5]*=a,r[9]*=n,r[2]*=i,r[6]*=a,r[10]*=n,r[3]*=i,r[7]*=a,r[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,a))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),a=Math.sin(r),n=1-i,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+i,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+i,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,a,n,s){return this.set(1,i,n,0,t,1,s,0,r,a,1,0,0,0,0,1),this}compose(t,r,i){let a=this.elements,n=r._x,s=r._y,o=r._z,l=r._w,h=n+n,c=s+s,u=o+o,d=n*h,f=n*c,g=n*u,v=s*c,m=s*u,p=o*u,T=l*h,x=l*c,E=l*u,z=i.x,C=i.y,R=i.z;return a[0]=(1-(v+p))*z,a[1]=(f+E)*z,a[2]=(g-x)*z,a[3]=0,a[4]=(f-E)*C,a[5]=(1-(d+p))*C,a[6]=(m+T)*C,a[7]=0,a[8]=(g+x)*R,a[9]=(m-T)*R,a[10]=(1-(d+v))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,r,i){let a=this.elements,n=di.set(a[0],a[1],a[2]).length(),s=di.set(a[4],a[5],a[6]).length(),o=di.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Bt.copy(this);let l=1/n,h=1/s,c=1/o;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=c,Bt.elements[9]*=c,Bt.elements[10]*=c,r.setFromRotationMatrix(Bt),i.x=n,i.y=s,i.z=o,this}makePerspective(t,r,i,a,n,s,o=tr){let l=this.elements,h=2*n/(r-t),c=2*n/(i-a),u=(r+t)/(r-t),d=(i+a)/(i-a),f,g;if(o===tr)f=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===da)f=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,i,a,n,s,o=tr){let l=this.elements,h=1/(r-t),c=1/(i-a),u=1/(s-n),d=(r+t)*h,f=(i+a)*c,g,v;if(o===tr)g=(s+n)*u,v=-2*u;else if(o===da)g=n*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<16;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},di=new L,Bt=new at,wc=new L(0,0,0),Ac=new L(1,1,1),Mr=new L,xa=new L,bt=new L,Do=new at,Oo=new li,Sr=class gh{constructor(t=0,r=0,i=0,a=gh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,a=this._order){return this._x=t,this._y=r,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],f=a[10];switch(r){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sr.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rc=0,Fo=new L,pi=new li,nr=new at,ya=new L,zi=new L,Cc=new L,Pc=new li,zo=new L(1,0,0),Bo=new L(0,1,0),Vo=new L(0,0,1),ko={type:"added"},Lc={type:"removed"},fi={type:"childadded",child:null},as={type:"childremoved",child:null},Rt=class Za extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Za.DEFAULT_UP.clone();let t=new L,r=new Sr,i=new li,a=new L(1,1,1);function n(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new at},normalMatrix:{value:new We}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Za.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Za.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return pi.setFromAxisAngle(t,r),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,r){return pi.setFromAxisAngle(t,r),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(zo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,r){return Fo.copy(t).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(zo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?ya.copy(t):ya.set(t,r,i);let a=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(zi,ya,this.up):nr.lookAt(ya,zi,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),pi.setFromRotationMatrix(nr),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ko),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(Lc),as.child=t,this.dispatchEvent(as),as.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nr.multiply(t.parent.matrixWorld)),t.applyMatrix4(nr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ko),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,a=this.children.length;i<a;i++){let n=this.children[i].getObjectByProperty(t,r);if(n!==void 0)return n}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,Cc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Pc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),f=s(t.animations),g=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=a,i;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};Rt.DEFAULT_UP=new L(0,1,0),Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=new L,sr=new L,ns=new L,or=new L,mi=new L,gi=new L,Ho=new L,ss=new L,os=new L,ls=new L,hs=new Ke,cs=new Ke,us=new Ke,Bi=class wi{constructor(t=new L,r=new L,i=new L){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,a){a.subVectors(i,r),Vt.subVectors(t,r),a.cross(Vt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,r,i,a,n){Vt.subVectors(a,r),sr.subVectors(i,r),ns.subVectors(t,r);let s=Vt.dot(Vt),o=Vt.dot(sr),l=Vt.dot(ns),h=sr.dot(sr),c=sr.dot(ns),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,f=(h*l-o*c)*d,g=(s*c-o*l)*d;return n.set(1-f-g,g,f)}static containsPoint(t,r,i,a){return this.getBarycoord(t,r,i,a,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(t,r,i,a,n,s,o,l){return this.getBarycoord(t,r,i,a,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,or.x),l.addScaledVector(s,or.y),l.addScaledVector(o,or.z),l)}static getInterpolatedAttribute(t,r,i,a,n,s){return hs.setScalar(0),cs.setScalar(0),us.setScalar(0),hs.fromBufferAttribute(t,r),cs.fromBufferAttribute(t,i),us.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(hs,n.x),s.addScaledVector(cs,n.y),s.addScaledVector(us,n.z),s}static isFrontFacing(t,r,i,a){return Vt.subVectors(i,r),sr.subVectors(t,r),Vt.cross(sr).dot(a)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,a){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,r,i,a){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vt.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Vt.cross(sr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return wi.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,a,n){return wi.getInterpolation(t,this.a,this.b,this.c,r,i,a,n)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,a=this.b,n=this.c,s,o;mi.subVectors(a,i),gi.subVectors(n,i),ss.subVectors(t,i);let l=mi.dot(ss),h=gi.dot(ss);if(l<=0&&h<=0)return r.copy(i);os.subVectors(t,a);let c=mi.dot(os),u=gi.dot(os);if(c>=0&&u<=c)return r.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(mi,s);ls.subVectors(t,n);let f=mi.dot(ls),g=gi.dot(ls);if(g>=0&&f<=g)return r.copy(n);let v=f*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),r.copy(i).addScaledVector(gi,o);let m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return Ho.subVectors(n,a),o=(u-c)/(u-c+(f-g)),r.copy(a).addScaledVector(Ho,o);let p=1/(m+v+d);return s=v*p,o=d*p,r.copy(i).addScaledVector(mi,s).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function ds(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var He=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=r,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=qe.workingColorSpace){if(e=mc(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+t):r+t-r*t,n=2*r-a;this.r=ds(n,a,e+1/3),this.g=ds(n,a,e),this.b=ds(n,a,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let r=Go[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return qe.fromWorkingColorSpace(vt.copy(this),e),Math.round(mt(vt.r*255,0,255))*65536+Math.round(mt(vt.g*255,0,255))*256+Math.round(mt(vt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(vt.copy(this),t);let r=vt.r,i=vt.g,a=vt.b,n=Math.max(r,i,a),s=Math.min(r,i,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case r:o=(i-a)/c+(i<a?6:0);break;case i:o=(a-r)/c+2;break;case a:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=ut){qe.fromWorkingColorSpace(vt.copy(this),e);let t=vt.r,r=vt.g,i=vt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(Ma);let r=qn(Er.h,Ma.h,t),i=qn(Er.s,Ma.s,t),a=qn(Er.l,Ma.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vt=new He;He.NAMES=Go;var Nc=0,Vi=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=ni(),this.name="",this.blending=Yr,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=$a,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ka&&(r.blendSrc=this.blendSrc),this.blendDst!==$a&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=i(e.textures),n=i(e.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tr=class extends Vi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ot=new L,Sa=new pe,Ct=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=So,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=St(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array),i=St(i,this.array),a=St(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}},Wo=class extends Ct{constructor(e,t,r){super(new Uint16Array(e),t,r)}},Xo=class extends Ct{constructor(e,t,r){super(new Uint32Array(e),t,r)}},dt=class extends Ct{constructor(e,t,r){super(new Float32Array(e),t,r)}},Ic=0,Pt=new at,ps=new Rt,vi=new L,wt=new Di,ki=new Di,pt=new L,kt=class vh extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(To(t)?Xo:Wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new We().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pt.makeRotationFromQuaternion(t),this.applyMatrix4(Pt),this}rotateX(t){return Pt.makeRotationX(t),this.applyMatrix4(Pt),this}rotateY(t){return Pt.makeRotationY(t),this.applyMatrix4(Pt),this}rotateZ(t){return Pt.makeRotationZ(t),this.applyMatrix4(Pt),this}translate(t,r,i){return Pt.makeTranslation(t,r,i),this.applyMatrix4(Pt),this}scale(t,r,i){return Pt.makeScale(t,r,i),this.applyMatrix4(Pt),this}lookAt(t){return ps.lookAt(t),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new dt(i,3))}else{for(let i=0,a=r.count;i<a;i++){let n=t[i];r.setXYZ(i,n.x,n.y,n.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,a=r.length;i<a;i++){let n=r[i];wt.setFromBufferAttribute(n),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(wt.setFromBufferAttribute(t),r)for(let n=0,s=r.length;n<s;n++){let o=r[n];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(wt.min,ki.min),wt.expandByPoint(pt),pt.addVectors(wt.max,ki.max),wt.expandByPoint(pt)):(wt.expandByPoint(ki.min),wt.expandByPoint(ki.max))}wt.getCenter(i);let a=0;for(let n=0,s=t.count;n<s;n++)pt.fromBufferAttribute(t,n),a=Math.max(a,i.distanceToSquared(pt));if(r)for(let n=0,s=r.length;n<s;n++){let o=r[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)pt.fromBufferAttribute(o,h),l&&(vi.fromBufferAttribute(t,h),pt.add(vi)),a=Math.max(a,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,a=r.normal,n=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new L,l[U]=new L;let h=new L,c=new L,u=new L,d=new pe,f=new pe,g=new pe,v=new L,m=new L;function p(U,M,S){h.fromBufferAttribute(i,U),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,M),g.fromBufferAttribute(n,S),c.sub(h),u.sub(h),f.sub(d),g.sub(d);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(A),o[U].add(v),o[M].add(v),o[S].add(v),l[U].add(m),l[M].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,M=T.length;U<M;++U){let S=T[U],A=S.start,D=S.count;for(let F=A,k=A+D;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let x=new L,E=new L,z=new L,C=new L;function R(U){z.fromBufferAttribute(a,U),C.copy(z);let M=o[U];x.copy(M),x.sub(z.multiplyScalar(z.dot(M))).normalize(),E.crossVectors(C,M);let S=E.dot(l[U])<0?-1:1;s.setXYZW(U,x.x,x.y,x.z,S)}for(let U=0,M=T.length;U<M;++U){let S=T[U],A=S.start,D=S.count;for(let F=A,k=A+D;F<k;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let a=new L,n=new L,s=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(r,g),n.fromBufferAttribute(r,v),s.fromBufferAttribute(r,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=r.count;d<f;d+=3)a.fromBufferAttribute(r,d+0),n.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)pt.fromBufferAttribute(t,r),pt.normalize(),t.setXYZ(r,pt.x,pt.y,pt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new Ct(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new vh,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,i);r.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,i);l.push(f)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];r.addGroup(h.start,h.count,h.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(r));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(r))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(r));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jo=new at,zr=new Uo,Ea=new Qn,qo=new L,Ta=new L,ba=new L,wa=new L,fs=new L,Aa=new L,Yo=new L,Ra=new L,lt=class extends Rt{constructor(e=new kt,t=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(a&&s){Aa.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(fs.fromBufferAttribute(c,e),n?Aa.addScaledVector(fs,h):Aa.addScaledVector(fs.sub(t),h))}t.add(Aa)}return t}raycast(e,t){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ea.copy(r.boundingSphere),Ea.applyMatrix4(a),zr.copy(e.ray).recast(e.near),!(Ea.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Ea,qo)===null||zr.origin.distanceToSquared(qo)>(e.far-e.near)**2))&&(jo.copy(a).invert(),zr.copy(e.ray).applyMatrix4(jo),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,r){let i,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){let v=u[f],m=n[v.materialIndex],p=Math.max(v.start,d.start),T=Math.min(s.count,Math.min(v.start+v.count,d.start+d.count));for(let x=p,E=T;x<E;x+=3){let z=s.getX(x),C=s.getX(x+1),R=s.getX(x+2);i=Ca(this,m,e,r,l,h,c,z,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let f=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let v=f,m=g;v<m;v+=3){let p=s.getX(v),T=s.getX(v+1),x=s.getX(v+2);i=Ca(this,n,e,r,l,h,c,p,T,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){let v=u[f],m=n[v.materialIndex],p=Math.max(v.start,d.start),T=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let x=p,E=T;x<E;x+=3){let z=x,C=x+1,R=x+2;i=Ca(this,m,e,r,l,h,c,z,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let f=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=f,m=g;v<m;v+=3){let p=v,T=v+1,x=v+2;i=Ca(this,n,e,r,l,h,c,p,T,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function Uc(e,t,r,i,a,n,s,o){let l;if(t.side===Mt?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,t.side===fr,o),l===null)return null;Ra.copy(o),Ra.applyMatrix4(e.matrixWorld);let h=r.ray.origin.distanceTo(Ra);return h<r.near||h>r.far?null:{distance:h,point:Ra.clone(),object:e}}function Ca(e,t,r,i,a,n,s,o,l,h){e.getVertexPosition(o,Ta),e.getVertexPosition(l,ba),e.getVertexPosition(h,wa);let c=Uc(e,t,r,i,Ta,ba,wa,Yo);if(c){let u=new L;Bi.getBarycoord(Yo,Ta,ba,wa,u),a&&(c.uv=Bi.getInterpolatedAttribute(a,o,l,h,u,new pe)),n&&(c.uv1=Bi.getInterpolatedAttribute(n,o,l,h,u,new pe)),s&&(c.normal=Bi.getInterpolatedAttribute(s,o,l,h,u,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new L,materialIndex:0};Bi.getNormal(Ta,ba,wa,d.normal),c.face=d,c.barycoord=u}return c}var br=class _h extends kt{constructor(t=1,r=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,r,t,s,n,0),g("z","y","x",1,-1,i,r,-t,s,n,1),g("x","z","y",1,1,t,i,r,a,s,2),g("x","z","y",1,-1,t,i,-r,a,s,3),g("x","y","z",1,-1,t,r,i,a,n,4),g("x","y","z",-1,-1,t,r,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2));function g(v,m,p,T,x,E,z,C,R,U,M){let S=E/R,A=z/U,D=E/2,F=z/2,k=C/2,K=R+1,G=U+1,ae=0,q=0,le=new L;for(let me=0;me<G;me++){let Ie=me*A-F;for(let ze=0;ze<K;ze++){let Z=ze*S-D;le[v]=Z*T,le[m]=Ie*x,le[p]=k,h.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=C>0?1:-1,c.push(le.x,le.y,le.z),u.push(ze/R),u.push(1-me/U),ae+=1}}for(let me=0;me<U;me++)for(let Ie=0;Ie<R;Ie++){let ze=d+Ie+K*me,Z=d+Ie+K*(me+1),ne=d+(Ie+1)+K*(me+1),Ae=d+(Ie+1)+K*me;l.push(ze,Z,Ae),l.push(Z,ne,Ae),q+=6}o.addGroup(f,q,M),f+=q,d+=ae}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _h(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _i(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let a=e[r][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=a.clone():Array.isArray(a)?t[r][i]=a.slice():t[r][i]=a}}return t}function xt(e){let t={};for(let r=0;r<e.length;r++){let i=_i(e[r]);for(let a in i)t[a]=i[a]}return t}function Dc(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function Zo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}var Oc={clone:_i,merge:xt},Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends Vi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Dc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},Jo=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wr=new L,Ko=new pe,$o=new pe,Et=class extends Jo{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jn*2*Math.atan(Math.tan(Xn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,$o),t.subVectors($o,Ko)}setViewOffset(e,t,r,i,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xn*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*i/o,t-=n.offsetY*r/l,i*=n.width/o,r*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xi=-90,yi=1,Bc=class extends Rt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(xi,yi,e,t);i.layers=this.layers,this.add(i);let a=new Et(xi,yi,e,t);a.layers=this.layers,this.add(a);let n=new Et(xi,yi,e,t);n.layers=this.layers,this.add(n);let s=new Et(xi,yi,e,t);s.layers=this.layers,this.add(s);let o=new Et(xi,yi,e,t);o.layers=this.layers,this.add(o);let l=new Et(xi,yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===da)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,n),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},Qo=class extends Ft{constructor(e,t,r,i,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,r,i,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vc=class extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Qo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new br(5,5,5),a=new Xt({name:"CubemapFromEquirect",uniforms:_i(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mt,blending:mr});a.uniforms.tEquirect.value=t;let n=new lt(i,a),s=t.minFilter;return t.minFilter===$t&&(t.minFilter=Dt),new Bc(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,r,i){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,i);e.setRenderTarget(a)}},ms=new L,kc=new L,Hc=new We,Br=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=ms.subVectors(r,t).cross(kc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(ms),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||Hc.getNormalMatrix(e),i=this.coplanarPoint(ms).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vr=new Qn,Pa=new L,gs=class{constructor(e=new Br,t=new Br,r=new Br,i=new Br,a=new Br,n=new Br){this.planes=[e,t,r,i,a,n]}set(e,t,r,i,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr){let r=this.planes,i=e.elements,a=i[0],n=i[1],s=i[2],o=i[3],l=i[4],h=i[5],c=i[6],u=i[7],d=i[8],f=i[9],g=i[10],v=i[11],m=i[12],p=i[13],T=i[14],x=i[15];if(r[0].setComponents(o-a,u-l,v-d,x-m).normalize(),r[1].setComponents(o+a,u+l,v+d,x+m).normalize(),r[2].setComponents(o+n,u+h,v+f,x+p).normalize(),r[3].setComponents(o-n,u-h,v-f,x-p).normalize(),r[4].setComponents(o-s,u-c,v-g,x-T).normalize(),t===tr)r[5].setComponents(o+s,u+c,v+g,x+T).normalize();else if(t===da)r[5].setComponents(s,c,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(Pa.x=i.normal.x>0?e.max.x:e.min.x,Pa.y=i.normal.y>0?e.max.y:e.min.y,Pa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function el(){let e=null,t=!1,r=null,i=null;function a(n,s){r(n,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){r=n},setContext:function(n){e=n}}}function Gc(e){let t=new WeakMap;function r(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,r(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var lr=class xh extends kt{constructor(t=1,r=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:a};let n=t/2,s=r/2,o=Math.floor(i),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=r/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){let T=p*d-s;for(let x=0;x<h;x++){let E=x*u-n;g.push(E,-T,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let x=T+h*p,E=T+h*(p+1),z=T+1+h*(p+1),C=T+1+h*p;f.push(x,E,C),f.push(E,z,C)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xh(t.width,t.height,t.widthSegments,t.heightSegments)}},Wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xc=`#ifdef USE_ALPHAHASH
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
#endif`,jc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,Kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$c=`#ifdef USE_BATCHING
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
#endif`,Qc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iu=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pu=`#define PI 3.141592653589793
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
} // validated`,fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mu=`vec3 transformedNormal = objectNormal;
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
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Su=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
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
}`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
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
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ku=`PhysicalMaterial material;
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
#endif`,Hu=`struct PhysicalMaterial {
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
}`,Gu=`
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qu=`#if defined( USE_POINTS_UV )
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
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
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
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rd=`float getShadowMask() {
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
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,Kd=`#define DISTANCE
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
}`,$d=`#define DISTANCE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
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
}`,rp=`uniform vec3 diffuse;
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
}`,ip=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,sp=`#define LAMBERT
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
}`,op=`#define MATCAP
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
}`,lp=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,cp=`#define NORMAL
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
}`,up=`#define PHONG
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
}`,dp=`#define PHONG
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
}`,pp=`#define STANDARD
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
}`,fp=`#define STANDARD
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
}`,mp=`#define TOON
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
}`,gp=`#define TOON
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
}`,vp=`uniform float size;
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
}`,_p=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,yp=`uniform vec3 color;
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
}`,Mp=`uniform float rotation;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Wc,alphahash_pars_fragment:Xc,alphamap_fragment:jc,alphamap_pars_fragment:qc,alphatest_fragment:Yc,alphatest_pars_fragment:Zc,aomap_fragment:Jc,aomap_pars_fragment:Kc,batching_pars_vertex:$c,batching_vertex:Qc,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:ru,iridescence_fragment:iu,bumpmap_pars_fragment:au,clipping_planes_fragment:nu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:hu,color_pars_fragment:cu,color_pars_vertex:uu,color_vertex:du,common:pu,cube_uv_reflection_fragment:fu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:vu,emissivemap_fragment:_u,emissivemap_pars_fragment:xu,colorspace_fragment:yu,colorspace_pars_fragment:Mu,envmap_fragment:Su,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Ou,envmap_vertex:wu,fog_vertex:Au,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Uu,lights_pars_begin:Du,lights_toon_fragment:Fu,lights_toon_pars_fragment:zu,lights_phong_fragment:Bu,lights_phong_pars_fragment:Vu,lights_physical_fragment:ku,lights_physical_pars_fragment:Hu,lights_fragment_begin:Gu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:qu,logdepthbuf_pars_vertex:Yu,logdepthbuf_vertex:Zu,map_fragment:Ju,map_pars_fragment:Ku,map_particle_fragment:$u,map_particle_pars_fragment:Qu,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphinstance_vertex:rd,morphcolor_vertex:id,morphnormal_vertex:ad,morphtarget_pars_vertex:nd,morphtarget_vertex:sd,normal_fragment_begin:od,normal_fragment_maps:ld,normal_pars_fragment:hd,normal_pars_vertex:cd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:vd,packing:_d,premultiplied_alpha_fragment:xd,project_vertex:yd,dithering_fragment:Md,dithering_pars_fragment:Sd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:wd,shadowmap_vertex:Ad,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Nd,specularmap_fragment:Id,specularmap_pars_fragment:Ud,tonemapping_fragment:Dd,tonemapping_pars_fragment:Od,transmission_fragment:Fd,transmission_pars_fragment:zd,uv_pars_fragment:Bd,uv_pars_vertex:Vd,uv_vertex:kd,worldpos_vertex:Hd,background_vert:Gd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:jd,cube_vert:qd,cube_frag:Yd,depth_vert:Zd,depth_frag:Jd,distanceRGBA_vert:Kd,distanceRGBA_frag:$d,equirect_vert:Qd,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:rp,meshbasic_vert:ip,meshbasic_frag:ap,meshlambert_vert:np,meshlambert_frag:sp,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:hp,meshnormal_frag:cp,meshphong_vert:up,meshphong_frag:dp,meshphysical_vert:pp,meshphysical_frag:fp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:vp,points_frag:_p,shadow_vert:xp,shadow_frag:yp,sprite_vert:Mp,sprite_frag:Sp},ve={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},jt={basic:{uniforms:xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:xt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:xt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:xt([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:xt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:xt([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:xt([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:xt([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:xt([ve.lights,ve.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};jt.physical={uniforms:xt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var La={r:0,b:0,g:0},kr=new Sr,Ep=new at;function Tp(e,t,r,i,a,n,s){let o=new He(0),l=n===!0?0:1,h,c,u=null,d=0,f=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?r:t).get(x)),x}function v(T){let x=!1,E=g(T);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);let z=e.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,s):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(T,x){let E=g(x);E&&(E.isCubeTexture||E.mapping===ia)?(c===void 0&&(c=new lt(new br(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:_i(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(z,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),kr.copy(x.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(kr)),c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,(u!==E||d!==E.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=e.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new lt(new lr(2,2),new Xt({name:"BackgroundMaterial",uniforms:_i(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=e.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,x){T.getRGB(La,Zo(e)),i.buffers.color.setClear(La.r,La.g,La.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(T,x=1){o.set(T),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:v,addToRenderList:m}}function bp(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null),n=a,s=!1;function o(S,A,D,F,k){let K=!1,G=u(F,D,A);n!==G&&(n=G,h(n.object)),K=f(S,F,D,k),K&&g(S,F,D,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,E(S,A,D,F),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function u(S,A,D){let F=D.wireframe===!0,k=i[S.id];k===void 0&&(k={},i[S.id]=k);let K=k[A.id];K===void 0&&(K={},k[A.id]=K);let G=K[F];return G===void 0&&(G=d(l()),K[F]=G),G}function d(S){let A=[],D=[],F=[];for(let k=0;k<r;k++)A[k]=0,D[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,A,D,F){let k=n.attributes,K=A.attributes,G=0,ae=D.getAttributes();for(let q in ae)if(ae[q].location>=0){let le=k[q],me=K[q];if(me===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;G++}return n.attributesNum!==G||n.index!==F}function g(S,A,D,F){let k={},K=A.attributes,G=0,ae=D.getAttributes();for(let q in ae)if(ae[q].location>=0){let le=K[q];le===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));let me={};me.attribute=le,le&&le.data&&(me.data=le.data),k[q]=me,G++}n.attributes=k,n.attributesNum=G,n.index=F}function v(){let S=n.newAttributes;for(let A=0,D=S.length;A<D;A++)S[A]=0}function m(S){p(S,0)}function p(S,A){let D=n.newAttributes,F=n.enabledAttributes,k=n.attributeDivisors;D[S]=1,F[S]===0&&(e.enableVertexAttribArray(S),F[S]=1),k[S]!==A&&(e.vertexAttribDivisor(S,A),k[S]=A)}function T(){let S=n.newAttributes,A=n.enabledAttributes;for(let D=0,F=A.length;D<F;D++)A[D]!==S[D]&&(e.disableVertexAttribArray(D),A[D]=0)}function x(S,A,D,F,k,K,G){G===!0?e.vertexAttribIPointer(S,A,D,k,K):e.vertexAttribPointer(S,A,D,F,k,K)}function E(S,A,D,F){v();let k=F.attributes,K=D.getAttributes(),G=A.defaultAttributeValues;for(let ae in K){let q=K[ae];if(q.location>=0){let le=k[ae];if(le===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){let me=le.normalized,Ie=le.itemSize,ze=t.get(le);if(ze===void 0)continue;let Z=ze.buffer,ne=ze.type,Ae=ze.bytesPerElement,Te=ne===e.INT||ne===e.UNSIGNED_INT||le.gpuType===un;if(le.isInterleavedBufferAttribute){let de=le.data,Ue=de.stride,Be=le.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<q.locationSize;Fe++)p(q.location+Fe,de.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)m(q.location+Fe);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let Fe=0;Fe<q.locationSize;Fe++)x(q.location+Fe,Ie/q.locationSize,ne,me,Ue*Ae,(Be+Ie/q.locationSize*Fe)*Ae,Te)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)p(q.location+de,le.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<q.locationSize;de++)m(q.location+de);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let de=0;de<q.locationSize;de++)x(q.location+de,Ie/q.locationSize,ne,me,Ie*Ae,Ie/q.locationSize*de*Ae,Te)}}else if(G!==void 0){let me=G[ae];if(me!==void 0)switch(me.length){case 2:e.vertexAttrib2fv(q.location,me);break;case 3:e.vertexAttrib3fv(q.location,me);break;case 4:e.vertexAttrib4fv(q.location,me);break;default:e.vertexAttrib1fv(q.location,me)}}}}T()}function z(){U();for(let S in i){let A=i[S];for(let D in A){let F=A[D];for(let k in F)c(F[k].object),delete F[k];delete A[D]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;let A=i[S.id];for(let D in A){let F=A[D];for(let k in F)c(F[k].object),delete F[k];delete A[D]}delete i[S.id]}function R(S){for(let A in i){let D=i[A];if(D[S.id]===void 0)continue;let F=D[S.id];for(let k in F)c(F[k].object),delete F[k];delete D[S.id]}}function U(){M(),s=!0,n!==a&&(n=a,h(n.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:z,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function wp(e,t,r){let i;function a(h){i=h}function n(h,c){e.drawArrays(i,h,c),r.update(c,i,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(i,h,c,u),r.update(c,i,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];r.update(d,i,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)s(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];r.update(g,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ap(e,t,r,i){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==Ot&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let U=R===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qt&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==er&&!U)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=r.precision!==void 0?r.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:z,maxSamples:C}}function Rp(e){let t=this,r=null,i=0,a=!1,n=!1,s=new Br,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||a;return a=d,i=u.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){r=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=e.get(u);if(!a||g===null||g.length===0||n&&!m)n?c(null):h();else{let T=n?0:i,x=T*4,E=p.clippingState||null;l.value=E,E=c(g,d,x,f);for(let z=0;z!==x;++z)E[z]=r[z];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==v;++x,E+=4)s.copy(u[x]).applyMatrix4(T,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Cp(e){let t=new WeakMap;function r(s,o){return o===on?s.mapping=Jr:o===ln&&(s.mapping=Kr),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===on||o===ln)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Vc(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),r(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:i,dispose:n}}var tl=class extends Jo{constructor(e=-1,t=1,r=1,i=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-e,n=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mi=4,rl=[.125,.215,.35,.446,.526,.582],Hr=20,vs=new tl,il=new He,_s=null,xs=0,ys=0,Ms=!1,Gr=(1+Math.sqrt(5))/2,Si=1/Gr,al=[new L(-Gr,Si,0),new L(Gr,Si,0),new L(-Si,0,Gr),new L(Si,0,Gr),new L(0,Gr,-Si),new L(0,Gr,Si),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ss=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){_s=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_s,xs,ys),this._renderer.xr.enabled=Ms,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_s=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:$r,format:Ot,colorSpace:ri,depthBuffer:!1},i=nl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,r);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(a)),this._blurMaterial=Lp(a,e,t)}return i}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,r,i){let a=new Et(90,1,t,r),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(il),o.toneMapping=Kt,o.autoClear=!1;let c=new Tr({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),u=new lt(new br,c),d=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,d=!0):(c.color.copy(il),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,n[g],0),a.lookAt(s[g],0,0)):v===1?(a.up.set(0,0,n[g]),a.lookAt(0,s[g],0)):(a.up.set(0,n[g],0),a.lookAt(0,0,s[g]));let m=this._cubeSize;Na(i,v*m,g>2?m:0,m,m),o.setRenderTarget(i),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===Jr||e.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());let a=i?this._cubemapMaterial:this._equirectMaterial,n=new lt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Na(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(n,vs)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let a=1;a<i;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=al[(i-a-1)%al.length];this._blur(e,a-1,a,n,s)}t.autoClear=r}_blur(e,t,r,i,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,i,"latitudinal",a),this._halfBlur(n,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new lt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[r]-1,f=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Hr-1),g=a/f,v=isFinite(a)?1+Math.floor(h*g):Hr;v>Hr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Hr}`);let m=[],p=0;for(let C=0;C<Hr;++C){let R=C/g,U=Math.exp(-R*R/2);m.push(U),C===0?p+=U:C<v&&(p+=2*U)}for(let C=0;C<m.length;C++)m[C]=m[C]/p;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:T}=this;u.dTheta.value=f,u.mipInt.value=T-r;let x=this._sizeLods[i],E=3*x*(i>T-Mi?i-T+Mi:0),z=4*(this._cubeSize-x);Na(t,E,z,3*x,2*x),o.setRenderTarget(t),o.render(c,vs)}};function Pp(e){let t=[],r=[],i=[],a=e,n=e-Mi+1+rl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);r.push(o);let l=1/o;s>e-Mi?l=rl[s-e+Mi-1]:s===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),x=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let C=0;C<f;C++){let R=C%3*2/3-1,U=C>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];T.set(M,v*g*C),x.set(d,m*g*C);let S=[C,C,C,C,C,C];E.set(S,p*g*C)}let z=new kt;z.setAttribute("position",new Ct(T,v)),z.setAttribute("uv",new Ct(x,m)),z.setAttribute("faceIndex",new Ct(E,p)),t.push(z),a>Mi&&a--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function nl(e,t,r){let i=new vr(e,t,r);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(e,t,r,i,a){e.viewport.set(t,r,i,a),e.scissor.set(t,r,i,a)}function Lp(e,t,r){let i=new Float32Array(Hr),a=new L(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Es(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function sl(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Es(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function ol(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Es(){return`

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
	`}function Np(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===on||l===ln,c=l===Jr||l===Kr;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return r===null&&(r=new Ss(e)),u=h?r.fromEquirectangular(o,u):r.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return h&&f&&f.height>0||c&&f&&a(f)?(r===null&&(r=new Ss(e)),u=h?r.fromEquirectangular(o):r.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function Ip(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let a=r(i);return a===null&&Ui("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Up(e,t,r,i){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",s),delete a[d.id];let f=n.get(d);f&&(t.remove(f),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,r.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],e.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let T=f.array;v=f.version;for(let x=0,E=T.length;x<E;x+=3){let z=T[x+0],C=T[x+1],R=T[x+2];d.push(z,C,C,R,R,z)}}else if(g!==void 0){let T=g.array;v=g.version;for(let x=0,E=T.length/3-1;x<E;x+=3){let z=x+0,C=x+1,R=x+2;d.push(z,C,C,R,R,z)}}else return;let m=new(To(d)?Xo:Wo)(d,1);m.version=v;let p=n.get(u);p&&t.remove(p),n.set(u,m)}function c(u){let d=n.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Dp(e,t,r){let i;function a(d){i=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,f){e.drawElements(i,f,n,d*s),r.update(f,i,1)}function h(d,f,g){g!==0&&(e.drawElementsInstanced(i,f,n,d*s,g),r.update(f,i,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,n,d,0,g);let v=0;for(let m=0;m<g;m++)v+=f[m];r.update(v,i,1)}function u(d,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/s,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,n,d,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];r.update(p,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Op(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(n/3);break;case e.LINES:r.lines+=o*(n/2);break;case e.LINE_STRIP:r.lines+=o*(n-1);break;case e.LINE_LOOP:r.lines+=o*n;break;case e.POINTS:r.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:a,update:i}}function Fp(e,t,r){let i=new WeakMap,a=new Ke;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(o);if(d===void 0||d.count!==u){let f=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let z=o.attributes.position.count*E,C=1;z>t.maxTextureSize&&(C=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);let R=new Float32Array(z*C*4*u),U=new No(R,z,C,u);U.type=er,U.needsUpdate=!0;let M=E*4;for(let S=0;S<u;S++){let A=p[S],D=T[S],F=x[S],k=z*C*4*S;for(let K=0;K<A.count;K++){let G=K*M;g===!0&&(a.fromBufferAttribute(A,K),R[k+G+0]=a.x,R[k+G+1]=a.y,R[k+G+2]=a.z,R[k+G+3]=0),v===!0&&(a.fromBufferAttribute(D,K),R[k+G+4]=a.x,R[k+G+5]=a.y,R[k+G+6]=a.z,R[k+G+7]=0),m===!0&&(a.fromBufferAttribute(F,K),R[k+G+8]=a.x,R[k+G+9]=a.y,R[k+G+10]=a.z,R[k+G+11]=F.itemSize===4?a.w:1)}}d={count:u,texture:U,size:new pe(z,C)},i.set(o,d),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let f=0;for(let v=0;v<h.length;v++)f+=h[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function zp(e,t,r,i){let a=new WeakMap;function n(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),r.remove(h.instanceMatrix),h.instanceColor!==null&&r.remove(h.instanceColor)}return{update:n,dispose:s}}var ll=class extends Ft{constructor(e,t,r,i,a,n,s,o,l,h=ei){if(h!==ei&&h!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===ei&&(r=Dr),r===void 0&&h===ti&&(r=Qr),super(null,i,a,n,s,o,h,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ut,this.minFilter=o!==void 0?o:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},hl=new Ft,cl=new ll(1,1),ul=new No,dl=new Tc,pl=new Qo,fl=[],ml=[],gl=new Float32Array(16),vl=new Float32Array(9),_l=new Float32Array(4);function Ei(e,t,r){let i=e[0];if(i<=0||i>0)return e;let a=t*r,n=fl[a];if(n===void 0&&(n=new Float32Array(a),fl[a]=n),t!==0){i.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(n,o)}return n}function ht(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function ct(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function Ia(e,t){let r=ml[t];r===void 0&&(r=new Int32Array(t),ml[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function Bp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function Vp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ht(r,t))return;e.uniform2fv(this.addr,t),ct(r,t)}}function kp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(ht(r,t))return;e.uniform3fv(this.addr,t),ct(r,t)}}function Hp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ht(r,t))return;e.uniform4fv(this.addr,t),ct(r,t)}}function Gp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ht(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),ct(r,t)}else{if(ht(r,i))return;_l.set(i),e.uniformMatrix2fv(this.addr,!1,_l),ct(r,i)}}function Wp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ht(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),ct(r,t)}else{if(ht(r,i))return;vl.set(i),e.uniformMatrix3fv(this.addr,!1,vl),ct(r,i)}}function Xp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ht(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),ct(r,t)}else{if(ht(r,i))return;gl.set(i),e.uniformMatrix4fv(this.addr,!1,gl),ct(r,i)}}function jp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function qp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ht(r,t))return;e.uniform2iv(this.addr,t),ct(r,t)}}function Yp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(ht(r,t))return;e.uniform3iv(this.addr,t),ct(r,t)}}function Zp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ht(r,t))return;e.uniform4iv(this.addr,t),ct(r,t)}}function Jp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function Kp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ht(r,t))return;e.uniform2uiv(this.addr,t),ct(r,t)}}function $p(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(ht(r,t))return;e.uniform3uiv(this.addr,t),ct(r,t)}}function Qp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ht(r,t))return;e.uniform4uiv(this.addr,t),ct(r,t)}}function ef(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(cl.compareFunction=Mo,n=cl):n=hl,r.setTexture2D(t||n,a)}function tf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(t||dl,a)}function rf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(t||pl,a)}function af(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(t||ul,a)}function nf(e){switch(e){case 5126:return Bp;case 35664:return Vp;case 35665:return kp;case 35666:return Hp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Kp;case 36295:return $p;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return af}}function sf(e,t){e.uniform1fv(this.addr,t)}function of(e,t){let r=Ei(t,this.size,2);e.uniform2fv(this.addr,r)}function lf(e,t){let r=Ei(t,this.size,3);e.uniform3fv(this.addr,r)}function hf(e,t){let r=Ei(t,this.size,4);e.uniform4fv(this.addr,r)}function cf(e,t){let r=Ei(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function uf(e,t){let r=Ei(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function df(e,t){let r=Ei(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function pf(e,t){e.uniform1iv(this.addr,t)}function ff(e,t){e.uniform2iv(this.addr,t)}function mf(e,t){e.uniform3iv(this.addr,t)}function gf(e,t){e.uniform4iv(this.addr,t)}function vf(e,t){e.uniform1uiv(this.addr,t)}function _f(e,t){e.uniform2uiv(this.addr,t)}function xf(e,t){e.uniform3uiv(this.addr,t)}function yf(e,t){e.uniform4uiv(this.addr,t)}function Mf(e,t,r){let i=this.cache,a=t.length,n=Ia(r,a);ht(i,n)||(e.uniform1iv(this.addr,n),ct(i,n));for(let s=0;s!==a;++s)r.setTexture2D(t[s]||hl,n[s])}function Sf(e,t,r){let i=this.cache,a=t.length,n=Ia(r,a);ht(i,n)||(e.uniform1iv(this.addr,n),ct(i,n));for(let s=0;s!==a;++s)r.setTexture3D(t[s]||dl,n[s])}function Ef(e,t,r){let i=this.cache,a=t.length,n=Ia(r,a);ht(i,n)||(e.uniform1iv(this.addr,n),ct(i,n));for(let s=0;s!==a;++s)r.setTextureCube(t[s]||pl,n[s])}function Tf(e,t,r){let i=this.cache,a=t.length,n=Ia(r,a);ht(i,n)||(e.uniform1iv(this.addr,n),ct(i,n));for(let s=0;s!==a;++s)r.setTexture2DArray(t[s]||ul,n[s])}function bf(e){switch(e){case 5126:return sf;case 35664:return of;case 35665:return lf;case 35666:return hf;case 35674:return cf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return pf;case 35667:case 35671:return ff;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return vf;case 36294:return _f;case 36295:return xf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return Tf}}var wf=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=nf(t.type)}},Af=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bf(t.type)}},Rf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let a=0,n=i.length;a!==n;++a){let s=i[a];s.setValue(e,t[s.id],r)}}},Ts=/(\w+)(\])?(\[|\.)?/g;function xl(e,t){e.seq.push(t),e.map[t.id]=t}function Cf(e,t,r){let i=e.name,a=i.length;for(Ts.lastIndex=0;;){let n=Ts.exec(i),s=Ts.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){xl(r,h===void 0?new wf(o,e,t):new Af(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new Rf(o),xl(r,c)),r=c}}}var Ua=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let a=e.getActiveUniform(t,i),n=e.getUniformLocation(t,a.name);Cf(a,n,this)}}setValue(e,t,r,i){let a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,a=e.length;i!==a;++i){let n=e[i];n.id in t&&r.push(n)}return r}};function yl(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var Pf=37297,Lf=0;function Nf(e,t){let r=e.split(`
`),i=[],a=Math.max(t-6,0),n=Math.min(t+6,r.length);for(let s=a;s<n;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var Ml=new We;function If(e){qe._getMatrix(Ml,qe.workingColorSpace,e);let t=`mat3( ${Ml.elements.map(r=>r.toFixed(4))} )`;switch(qe.getTransfer(e)){case ua:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Sl(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return r.toUpperCase()+`

`+a+`

`+Nf(e.getShaderSource(t),s)}else return a}function Uf(e,t){let r=If(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Df(e,t){let r;switch(t){case $h:r="Linear";break;case Qh:r="Reinhard";break;case ec:r="Cineon";break;case io:r="ACESFilmic";break;case rc:r="AgX";break;case ic:r="Neutral";break;case tc:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var Da=new L;function Of(){qe.getLuminanceCoefficients(Da);let e=Da.x.toFixed(4),t=Da.y.toFixed(4),r=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ff(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function zf(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function Bf(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),r[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function Hi(e){return e!==""}function El(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function bs(e){return e.replace(Vf,Hf)}var kf=new Map;function Hf(e,t){let r=Ge[t];if(r===void 0){let i=kf.get(t);if(i!==void 0)r=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bs(r)}var Gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(e){return e.replace(Gf,Wf)}function Wf(e,t,r,i){let a="";for(let n=parseInt(t);n<parseInt(r);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function wl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Xf(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===$s?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Jt&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Jr:case Kr:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Kr&&(t="ENVMAP_MODE_REFRACTION"),t}function Yf(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ro:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function Zf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function Jf(e,t,r,i){let a=e.getContext(),n=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Xf(r),h=jf(r),c=qf(r),u=Yf(r),d=Zf(r),f=Ff(r),g=zf(n),v=a.createProgram(),m,p,T=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`)):(m=[wl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),p=[wl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.envMap?"#define "+c:"",r.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Kt?"#define TONE_MAPPING":"",r.toneMapping!==Kt?Ge.tonemapping_pars_fragment:"",r.toneMapping!==Kt?Df("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Uf("linearToOutputTexel",r.outputColorSpace),Of(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Hi).join(`
`)),s=bs(s),s=El(s,r),s=Tl(s,r),o=bs(o),o=El(o,r),o=Tl(o,r),s=bl(s),o=bl(o),r.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",r.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=T+m+s,E=T+p+o,z=yl(a,a.VERTEX_SHADER,x),C=yl(a,a.FRAGMENT_SHADER,E);a.attachShader(v,z),a.attachShader(v,C),r.index0AttributeName!==void 0?a.bindAttribLocation(v,0,r.index0AttributeName):r.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function R(A){if(e.debug.checkShaderErrors){let D=a.getProgramInfoLog(v).trim(),F=a.getShaderInfoLog(z).trim(),k=a.getShaderInfoLog(C).trim(),K=!0,G=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,z,C);else{let ae=Sl(a,z,"vertex"),q=Sl(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+ae+`
`+q)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||k==="")&&(G=!1);G&&(A.diagnostics={runnable:K,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}a.deleteShader(z),a.deleteShader(C),U=new Ua(a,v),M=Bf(a,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(v,Pf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Lf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=C,this}var Kf=0,$f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new Qf(e),t.set(e,r)),r}},Qf=class{constructor(e){this.id=Kf++,this.code=e,this.usedTimes=0}};function em(e,t,r,i,a,n,s){let o=new is,l=new $f,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,f=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,S,A,D,F){let k=D.fog,K=F.geometry,G=M.isMeshStandardMaterial?D.environment:null,ae=(M.isMeshStandardMaterial?r:t).get(M.envMap||G),q=ae&&ae.mapping===ia?ae.image.height:null,le=g[M.type];M.precision!==null&&(f=a.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ie=me!==void 0?me.length:0,ze=0;K.morphAttributes.position!==void 0&&(ze=1),K.morphAttributes.normal!==void 0&&(ze=2),K.morphAttributes.color!==void 0&&(ze=3);let Z,ne,Ae,Te;if(le){let Ze=jt[le];Z=Ze.vertexShader,ne=Ze.fragmentShader}else Z=M.vertexShader,ne=M.fragmentShader,l.update(M),Ae=l.getVertexShaderID(M),Te=l.getFragmentShaderID(M);let de=e.getRenderTarget(),Ue=e.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,ee=!!M.map,he=!!M.matcap,w=!!ae,Ee=!!M.aoMap,oe=!!M.lightMap,_e=!!M.bumpMap,ie=!!M.normalMap,De=!!M.displacementMap,xe=!!M.emissiveMap,be=!!M.metalnessMap,b=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,Q=M.dispersion>0,te=M.iridescence>0,J=M.sheen>0,Le=M.transmission>0,fe=_&&!!M.anisotropyMap,X=O&&!!M.clearcoatMap,re=O&&!!M.clearcoatNormalMap,H=O&&!!M.clearcoatRoughnessMap,$=te&&!!M.iridescenceMap,Me=te&&!!M.iridescenceThicknessMap,ye=J&&!!M.sheenColorMap,ge=J&&!!M.sheenRoughnessMap,we=!!M.specularMap,Ne=!!M.specularColorMap,Xe=!!M.specularIntensityMap,P=Le&&!!M.transmissionMap,Y=Le&&!!M.thicknessMap,W=!!M.gradientMap,j=!!M.alphaMap,ce=M.alphaTest>0,ue=!!M.alphaHash,je=!!M.extensions,it=Kt;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(it=e.toneMapping);let ft={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:ne,defines:M.defines,customVertexShaderID:Ae,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?e.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ri,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:he,envMap:w,envMapMode:w&&ae.mapping,envMapCubeUVHeight:q,aoMap:Ee,lightMap:oe,bumpMap:_e,normalMap:ie,displacementMap:d&&De,emissiveMap:xe,normalMapObjectSpace:ie&&M.normalMapType===oc,normalMapTangentSpace:ie&&M.normalMapType===xo,metalnessMap:be,roughnessMap:b,anisotropy:_,anisotropyMap:fe,clearcoat:O,clearcoatMap:X,clearcoatNormalMap:re,clearcoatRoughnessMap:H,dispersion:Q,iridescence:te,iridescenceMap:$,iridescenceThicknessMap:Me,sheen:J,sheenColorMap:ye,sheenRoughnessMap:ge,specularMap:we,specularColorMap:Ne,specularIntensityMap:Xe,transmission:Le,transmissionMap:P,thicknessMap:Y,gradientMap:W,opaque:M.transparent===!1&&M.blending===Yr&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:ue,combine:M.combine,mapUv:ee&&v(M.map.channel),aoMapUv:Ee&&v(M.aoMap.channel),lightMapUv:oe&&v(M.lightMap.channel),bumpMapUv:_e&&v(M.bumpMap.channel),normalMapUv:ie&&v(M.normalMap.channel),displacementMapUv:De&&v(M.displacementMap.channel),emissiveMapUv:xe&&v(M.emissiveMap.channel),metalnessMapUv:be&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:fe&&v(M.anisotropyMap.channel),clearcoatMapUv:X&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(M.sheenRoughnessMap.channel),specularMapUv:we&&v(M.specularMap.channel),specularColorMapUv:Ne&&v(M.specularColorMap.channel),specularIntensityMapUv:Xe&&v(M.specularIntensityMap.channel),transmissionMapUv:P&&v(M.transmissionMap.channel),thicknessMapUv:Y&&v(M.thicknessMap.channel),alphaMapUv:j&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ie||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(ee||j),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:xe&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===It,flipSided:M.side===Mt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:je&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&M.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ft.vertexUv1s=h.has(1),ft.vertexUv2s=h.has(2),ft.vertexUv3s=h.has(3),h.clear(),ft}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)S.push(A),S.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(T(S,M),x(S,M),S.push(e.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){let S=g[M.type],A;if(S){let D=jt[S];A=Oc.clone(D.uniforms)}else A=M.uniforms;return A}function z(M,S){let A;for(let D=0,F=c.length;D<F;D++){let k=c[D];if(k.cacheKey===S){A=k,++A.usedTimes;break}}return A===void 0&&(A=new Jf(e,S,M,n),c.push(A)),A}function C(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:z,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:U}}function tm(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:r,remove:i,update:a,dispose:n}}function rm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Al(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Rl(){let e=[],t=0,r=[],i=[],a=[];function n(){t=0,r.length=0,i.length=0,a.length=0}function s(u,d,f,g,v,m){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},e[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){let p=s(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?a.push(p):r.push(p)}function l(u,d,f,g,v,m){let p=s(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?a.unshift(p):r.unshift(p)}function h(u,d){r.length>1&&r.sort(u||rm),i.length>1&&i.sort(d||Al),a.length>1&&a.sort(d||Al)}function c(){for(let u=t,d=e.length;u<d;u++){let f=e[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function im(){let e=new WeakMap;function t(i,a){let n=e.get(i),s;return n===void 0?(s=new Rl,e.set(i,[s])):a>=n.length?(s=new Rl,n.push(s)):s=n[a],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function am(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new L,color:new He};break;case"SpotLight":r={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":r={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":r={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=r,r}}}function nm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var sm=0;function om(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lm(e){let t=new am,r=nm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let a=new L,n=new at,s=new at;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,x=0,E=0,z=0,C=0,R=0;h.sort(om);for(let M=0,S=h.length;M<S;M++){let A=h[M],D=A.color,F=A.intensity,k=A.distance,K=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=D.r*F,u+=D.g*F,d+=D.b*F;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],F);R++}else if(A.isDirectionalLight){let G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ae=A.shadow,q=r.get(A);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=A.shadow.matrix,T++}i.directional[f]=G,f++}else if(A.isSpotLight){let G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(D).multiplyScalar(F),G.distance=k,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[v]=G;let ae=A.shadow;if(A.map&&(i.spotLightMap[z]=A.map,z++,ae.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[v]=ae.matrix,A.castShadow){let q=r.get(A);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=K,E++}v++}else if(A.isRectAreaLight){let G=t.get(A);G.color.copy(D).multiplyScalar(F),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=G,m++}else if(A.isPointLight){let G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let ae=A.shadow,q=r.get(A);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,q.shadowCameraNear=ae.camera.near,q.shadowCameraFar=ae.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=A.shadow.matrix,x++}i.point[g]=G,g++}else if(A.isHemisphereLight){let G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(F),G.groundColor.copy(A.groundColor).multiplyScalar(F),i.hemi[p]=G,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==T||U.numPointShadows!==x||U.numSpotShadows!==E||U.numSpotMaps!==z||U.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+z-C,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,U.directionalLength=f,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=T,U.numPointShadows=x,U.numSpotShadows=E,U.numSpotMaps=z,U.numLightProbes=R,i.version=sm++)}function l(h,c){let u=0,d=0,f=0,g=0,v=0,m=c.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){let x=h[p];if(x.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),u++}else if(x.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),s.identity(),n.copy(x.matrixWorld),n.premultiply(m),s.extractRotation(n),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Cl(e){let t=new lm(e),r=[],i=[];function a(c){h.camera=c,r.length=0,i.length=0}function n(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let h={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function hm(e){let t=new WeakMap;function r(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Cl(e),t.set(a,[o])):n>=s.length?(o=new Cl(e),s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var cm=class extends Vi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},um=class extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function fm(e,t,r){let i=new gs,a=new pe,n=new pe,s=new Ke,o=new cm({depthPacking:sc}),l=new um,h={},c=r.maxTextureSize,u={[fr]:Mt,[Mt]:fr,[It]:It},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:dm,fragmentShader:pm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let p=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=e.getRenderTarget(),S=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),D=e.state;D.setBlending(mr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==Jt&&this.type===Jt,k=p===Jt&&this.type!==Jt;for(let K=0,G=C.length;K<G;K++){let ae=C[K],q=ae.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);let le=q.getFrameExtents();if(a.multiply(le),n.copy(q.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/le.x),a.x=n.x*le.x,q.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/le.y),a.y=n.y*le.y,q.mapSize.y=n.y)),q.map===null||F===!0||k===!0){let Ie=this.type!==Jt?{minFilter:Ut,magFilter:Ut}:{};q.map!==null&&q.map.dispose(),q.map=new vr(a.x,a.y,Ie),q.map.texture.name=ae.name+".shadowMap",q.camera.updateProjectionMatrix()}e.setRenderTarget(q.map),e.clear();let me=q.getViewportCount();for(let Ie=0;Ie<me;Ie++){let ze=q.getViewport(Ie);s.set(n.x*ze.x,n.y*ze.y,n.x*ze.z,n.y*ze.w),D.viewport(s),q.updateMatrices(ae,Ie),i=q.getFrustum(),E(R,U,q.camera,ae,this.type)}q.isPointLightShadow!==!0&&this.type===Jt&&T(q,U),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(M,S,A)};function T(C,R){let U=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vr(a.x,a.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(R,null,U,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(R,null,U,f,v,null)}function x(C,R,U,M){let S=null,A=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)S=A;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let D=S.uuid,F=R.uuid,k=h[D];k===void 0&&(k={},h[D]=k);let K=k[F];K===void 0&&(K=S.clone(),k[F]=K,R.addEventListener("dispose",z)),S=K}if(S.visible=R.visible,S.wireframe=R.wireframe,M===Jt?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=e.properties.get(S);D.light=U}return S}function E(C,R,U,M,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Jt)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let D=t.update(C),F=C.material;if(Array.isArray(F)){let k=D.groups;for(let K=0,G=k.length;K<G;K++){let ae=k[K],q=F[ae.materialIndex];if(q&&q.visible){let le=x(C,q,M,S);C.onBeforeShadow(e,C,R,U,D,le,ae),e.renderBufferDirect(U,null,D,le,C,ae),C.onAfterShadow(e,C,R,U,D,le,ae)}}}else if(F.visible){let k=x(C,F,M,S);C.onBeforeShadow(e,C,R,U,D,k,null),e.renderBufferDirect(U,null,D,k,C,null),C.onAfterShadow(e,C,R,U,D,k,null)}}let A=C.children;for(let D=0,F=A.length;D<F;D++)E(A[D],R,U,M,S)}function z(C){C.target.removeEventListener("dispose",z);for(let R in h){let U=h[R],M=C.target.uuid;M in U&&(U[M].dispose(),delete U[M])}}}var mm={[Qa]:en,[tn]:nn,[rn]:sn,[Zr]:an,[en]:Qa,[nn]:tn,[sn]:rn,[an]:Zr};function gm(e,t){function r(){let P=!1,Y=new Ke,W=null,j=new Ke(0,0,0,0);return{setMask:function(ce){W!==ce&&!P&&(e.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){P=ce},setClear:function(ce,ue,je,it,ft){ft===!0&&(ce*=it,ue*=it,je*=it),Y.set(ce,ue,je,it),j.equals(Y)===!1&&(e.clearColor(ce,ue,je,it),j.copy(Y))},reset:function(){P=!1,W=null,j.set(-1,0,0,0)}}}function i(){let P=!1,Y=!1,W=null,j=null,ce=null;return{setReversed:function(ue){if(Y!==ue){let je=t.get("EXT_clip_control");Y?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);let it=ce;ce=null,this.setClear(it)}Y=ue},getReversed:function(){return Y},setTest:function(ue){ue?de(e.DEPTH_TEST):Ue(e.DEPTH_TEST)},setMask:function(ue){W!==ue&&!P&&(e.depthMask(ue),W=ue)},setFunc:function(ue){if(Y&&(ue=mm[ue]),j!==ue){switch(ue){case Qa:e.depthFunc(e.NEVER);break;case en:e.depthFunc(e.ALWAYS);break;case tn:e.depthFunc(e.LESS);break;case Zr:e.depthFunc(e.LEQUAL);break;case rn:e.depthFunc(e.EQUAL);break;case an:e.depthFunc(e.GEQUAL);break;case nn:e.depthFunc(e.GREATER);break;case sn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}j=ue}},setLocked:function(ue){P=ue},setClear:function(ue){ce!==ue&&(Y&&(ue=1-ue),e.clearDepth(ue),ce=ue)},reset:function(){P=!1,W=null,j=null,ce=null,Y=!1}}}function a(){let P=!1,Y=null,W=null,j=null,ce=null,ue=null,je=null,it=null,ft=null;return{setTest:function(Ze){P||(Ze?de(e.STENCIL_TEST):Ue(e.STENCIL_TEST))},setMask:function(Ze){Y!==Ze&&!P&&(e.stencilMask(Ze),Y=Ze)},setFunc:function(Ze,Zt,Gt){(W!==Ze||j!==Zt||ce!==Gt)&&(e.stencilFunc(Ze,Zt,Gt),W=Ze,j=Zt,ce=Gt)},setOp:function(Ze,Zt,Gt){(ue!==Ze||je!==Zt||it!==Gt)&&(e.stencilOp(Ze,Zt,Gt),ue=Ze,je=Zt,it=Gt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){ft!==Ze&&(e.clearStencil(Ze),ft=Ze)},reset:function(){P=!1,Y=null,W=null,j=null,ce=null,ue=null,je=null,it=null,ft=null}}}let n=new r,s=new i,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,x=null,E=null,z=null,C=null,R=new He(0,0,0),U=0,M=!1,S=null,A=null,D=null,F=null,k=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ae=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=ae>=1):q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=ae>=2);let le=null,me={},Ie=e.getParameter(e.SCISSOR_BOX),ze=e.getParameter(e.VIEWPORT),Z=new Ke().fromArray(Ie),ne=new Ke().fromArray(ze);function Ae(P,Y,W,j){let ce=new Uint8Array(4),ue=e.createTexture();e.bindTexture(P,ue),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let je=0;je<W;je++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(Y,0,e.RGBA,1,1,j,0,e.RGBA,e.UNSIGNED_BYTE,ce):e.texImage2D(Y+je,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ce);return ue}let Te={};Te[e.TEXTURE_2D]=Ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Te[e.TEXTURE_CUBE_MAP]=Ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[e.TEXTURE_2D_ARRAY]=Ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Te[e.TEXTURE_3D]=Ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(e.DEPTH_TEST),s.setFunc(Zr),_e(!1),ie(Ks),de(e.CULL_FACE),Ee(mr);function de(P){c[P]!==!0&&(e.enable(P),c[P]=!0)}function Ue(P){c[P]!==!1&&(e.disable(P),c[P]=!1)}function Be(P,Y){return u[P]!==Y?(e.bindFramebuffer(P,Y),u[P]=Y,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Y),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Y),!0):!1}function Fe(P,Y){let W=f,j=!1;if(P){W=d.get(Y),W===void 0&&(W=[],d.set(Y,W));let ce=P.textures;if(W.length!==ce.length||W[0]!==e.COLOR_ATTACHMENT0){for(let ue=0,je=ce.length;ue<je;ue++)W[ue]=e.COLOR_ATTACHMENT0+ue;W.length=ce.length,j=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,j=!0);j&&e.drawBuffers(W)}function ee(P){return g!==P?(e.useProgram(P),g=P,!0):!1}let he={[Ir]:e.FUNC_ADD,[Ih]:e.FUNC_SUBTRACT,[Uh]:e.FUNC_REVERSE_SUBTRACT};he[Dh]=e.MIN,he[Oh]=e.MAX;let w={[Fh]:e.ZERO,[zh]:e.ONE,[Bh]:e.SRC_COLOR,[Ka]:e.SRC_ALPHA,[Xh]:e.SRC_ALPHA_SATURATE,[Gh]:e.DST_COLOR,[kh]:e.DST_ALPHA,[Vh]:e.ONE_MINUS_SRC_COLOR,[$a]:e.ONE_MINUS_SRC_ALPHA,[Wh]:e.ONE_MINUS_DST_COLOR,[Hh]:e.ONE_MINUS_DST_ALPHA,[jh]:e.CONSTANT_COLOR,[qh]:e.ONE_MINUS_CONSTANT_COLOR,[Yh]:e.CONSTANT_ALPHA,[Zh]:e.ONE_MINUS_CONSTANT_ALPHA};function Ee(P,Y,W,j,ce,ue,je,it,ft,Ze){if(P===mr){v===!0&&(Ue(e.BLEND),v=!1);return}if(v===!1&&(de(e.BLEND),v=!0),P!==Nh){if(P!==m||Ze!==M){if((p!==Ir||E!==Ir)&&(e.blendEquation(e.FUNC_ADD),p=Ir,E=Ir),Ze)switch(P){case Yr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qs:e.blendFunc(e.ONE,e.ONE);break;case eo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case to:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qs:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case eo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case to:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,x=null,z=null,C=null,R.set(0,0,0),U=0,m=P,M=Ze}return}ce=ce||Y,ue=ue||W,je=je||j,(Y!==p||ce!==E)&&(e.blendEquationSeparate(he[Y],he[ce]),p=Y,E=ce),(W!==T||j!==x||ue!==z||je!==C)&&(e.blendFuncSeparate(w[W],w[j],w[ue],w[je]),T=W,x=j,z=ue,C=je),(it.equals(R)===!1||ft!==U)&&(e.blendColor(it.r,it.g,it.b,ft),R.copy(it),U=ft),m=P,M=!1}function oe(P,Y){P.side===It?Ue(e.CULL_FACE):de(e.CULL_FACE);let W=P.side===Mt;Y&&(W=!W),_e(W),P.blending===Yr&&P.transparent===!1?Ee(mr):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);let j=P.stencilWrite;o.setTest(j),j&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),xe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):Ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(P){S!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),S=P)}function ie(P){P!==Ch?(de(e.CULL_FACE),P!==A&&(P===Ks?e.cullFace(e.BACK):P===Ph?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ue(e.CULL_FACE),A=P}function De(P){P!==D&&(G&&e.lineWidth(P),D=P)}function xe(P,Y,W){P?(de(e.POLYGON_OFFSET_FILL),(F!==Y||k!==W)&&(e.polygonOffset(Y,W),F=Y,k=W)):Ue(e.POLYGON_OFFSET_FILL)}function be(P){P?de(e.SCISSOR_TEST):Ue(e.SCISSOR_TEST)}function b(P){P===void 0&&(P=e.TEXTURE0+K-1),le!==P&&(e.activeTexture(P),le=P)}function _(P,Y,W){W===void 0&&(le===null?W=e.TEXTURE0+K-1:W=le);let j=me[W];j===void 0&&(j={type:void 0,texture:void 0},me[W]=j),(j.type!==P||j.texture!==Y)&&(le!==W&&(e.activeTexture(W),le=W),e.bindTexture(P,Y||Te[P]),j.type=P,j.texture=Y)}function O(){let P=me[le];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){Z.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function ge(P){ne.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function we(P,Y){let W=h.get(Y);W===void 0&&(W=new WeakMap,h.set(Y,W));let j=W.get(P);j===void 0&&(j=e.getUniformBlockIndex(Y,P.name),W.set(P,j))}function Ne(P,Y){let W=h.get(Y).get(P);l.get(Y)!==W&&(e.uniformBlockBinding(Y,W,P.__bindingPointIndex),l.set(Y,W))}function Xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},le=null,me={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,x=null,E=null,z=null,C=null,R=new He(0,0,0),U=0,M=!1,S=null,A=null,D=null,F=null,k=null,Z.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:de,disable:Ue,bindFramebuffer:Be,drawBuffers:Fe,useProgram:ee,setBlending:Ee,setMaterial:oe,setFlipSided:_e,setCullFace:ie,setLineWidth:De,setPolygonOffset:xe,setScissorTest:be,activeTexture:b,bindTexture:_,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:$,texImage3D:Me,updateUBOMapping:we,uniformBlockBinding:Ne,texStorage2D:re,texStorage3D:H,texSubImage2D:J,texSubImage3D:Le,compressedTexSubImage2D:fe,compressedTexSubImage3D:X,scissor:ye,viewport:ge,reset:Xe}}function Pl(e,t,r,i){let a=vm(i);switch(r){case lo:return e*t;case co:return e*t;case uo:return e*t*2;case po:return e*t/a.components*a.byteLength;case fn:return e*t/a.components*a.byteLength;case fo:return e*t*2/a.components*a.byteLength;case mn:return e*t*2/a.components*a.byteLength;case ho:return e*t*3/a.components*a.byteLength;case Ot:return e*t*4/a.components*a.byteLength;case gn:return e*t*4/a.components*a.byteLength;case na:case sa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oa:case la:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _n:case yn:return Math.max(e,16)*Math.max(t,8)/4;case vn:case xn:return Math.max(e,8)*Math.max(t,8)/2;case Mn:case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case En:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case wn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case An:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Rn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Cn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Pn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ln:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Nn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case In:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Un:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case On:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ha:case zn:case Bn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case mo:case Vn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case kn:case Hn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function vm(e){switch(e){case Qt:case no:return{byteLength:1,components:1};case Ni:case so:case $r:return{byteLength:2,components:1};case dn:case pn:return{byteLength:2,components:4};case Dr:case un:case er:return{byteLength:4,components:1};case oo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function _m(e,t,r,i,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return f?new OffscreenCanvas(b,_):pa("canvas")}function v(b,_,O){let Q=1,te=be(b);if((te.width>O||te.height>O)&&(Q=O/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let J=Math.floor(Q*te.width),Le=Math.floor(Q*te.height);u===void 0&&(u=g(J,Le));let fe=_?g(J,Le):u;return fe.width=J,fe.height=Le,fe.getContext("2d").drawImage(b,0,0,J,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Le+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){e.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(b,_,O,Q,te=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=_;if(_===e.RED&&(O===e.FLOAT&&(J=e.R32F),O===e.HALF_FLOAT&&(J=e.R16F),O===e.UNSIGNED_BYTE&&(J=e.R8)),_===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.R8UI),O===e.UNSIGNED_SHORT&&(J=e.R16UI),O===e.UNSIGNED_INT&&(J=e.R32UI),O===e.BYTE&&(J=e.R8I),O===e.SHORT&&(J=e.R16I),O===e.INT&&(J=e.R32I)),_===e.RG&&(O===e.FLOAT&&(J=e.RG32F),O===e.HALF_FLOAT&&(J=e.RG16F),O===e.UNSIGNED_BYTE&&(J=e.RG8)),_===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RG8UI),O===e.UNSIGNED_SHORT&&(J=e.RG16UI),O===e.UNSIGNED_INT&&(J=e.RG32UI),O===e.BYTE&&(J=e.RG8I),O===e.SHORT&&(J=e.RG16I),O===e.INT&&(J=e.RG32I)),_===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGB8UI),O===e.UNSIGNED_SHORT&&(J=e.RGB16UI),O===e.UNSIGNED_INT&&(J=e.RGB32UI),O===e.BYTE&&(J=e.RGB8I),O===e.SHORT&&(J=e.RGB16I),O===e.INT&&(J=e.RGB32I)),_===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),O===e.UNSIGNED_INT&&(J=e.RGBA32UI),O===e.BYTE&&(J=e.RGBA8I),O===e.SHORT&&(J=e.RGBA16I),O===e.INT&&(J=e.RGBA32I)),_===e.RGB&&O===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),_===e.RGBA){let Le=te?ua:qe.getTransfer(Q);O===e.FLOAT&&(J=e.RGBA32F),O===e.HALF_FLOAT&&(J=e.RGBA16F),O===e.UNSIGNED_BYTE&&(J=Le===Je?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(b,_){let O;return b?_===null||_===Dr||_===Qr?O=e.DEPTH24_STENCIL8:_===er?O=e.DEPTH32F_STENCIL8:_===Ni&&(O=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Dr||_===Qr?O=e.DEPTH_COMPONENT24:_===er?O=e.DEPTH_COMPONENT32F:_===Ni&&(O=e.DEPTH_COMPONENT16),O}function z(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ut&&b.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function C(b){let _=b.target;_.removeEventListener("dispose",C),U(_),_.isVideoTexture&&c.delete(_)}function R(b){let _=b.target;_.removeEventListener("dispose",R),S(_)}function U(b){let _=i.get(b);if(_.__webglInit===void 0)return;let O=b.source,Q=d.get(O);if(Q){let te=Q[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(b),Object.keys(Q).length===0&&d.delete(O)}i.remove(b)}function M(b){let _=i.get(b);e.deleteTexture(_.__webglTexture);let O=b.source,Q=d.get(O);delete Q[_.__cacheKey],s.memory.textures--}function S(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let te=0;te<_.__webglFramebuffer[Q].length;te++)e.deleteFramebuffer(_.__webglFramebuffer[Q][te]);else e.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)e.deleteFramebuffer(_.__webglFramebuffer[Q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=b.textures;for(let Q=0,te=O.length;Q<te;Q++){let J=i.get(O[Q]);J.__webglTexture&&(e.deleteTexture(J.__webglTexture),s.memory.textures--),i.remove(O[Q])}i.remove(b)}let A=0;function D(){A=0}function F(){let b=A;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),A+=1,b}function k(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function K(b,_){let O=i.get(b);if(b.isVideoTexture&&De(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){let Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(O,b,_);return}}r.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function G(b,_){let O=i.get(b);if(b.version>0&&O.__version!==b.version){ne(O,b,_);return}r.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function ae(b,_){let O=i.get(b);if(b.version>0&&O.__version!==b.version){ne(O,b,_);return}r.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function q(b,_){let O=i.get(b);if(b.version>0&&O.__version!==b.version){Ae(O,b,_);return}r.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}let le={[Li]:e.REPEAT,[Ur]:e.CLAMP_TO_EDGE,[hn]:e.MIRRORED_REPEAT},me={[Ut]:e.NEAREST,[ac]:e.NEAREST_MIPMAP_NEAREST,[aa]:e.NEAREST_MIPMAP_LINEAR,[Dt]:e.LINEAR,[cn]:e.LINEAR_MIPMAP_NEAREST,[$t]:e.LINEAR_MIPMAP_LINEAR},Ie={[lc]:e.NEVER,[fc]:e.ALWAYS,[hc]:e.LESS,[Mo]:e.LEQUAL,[cc]:e.EQUAL,[pc]:e.GEQUAL,[uc]:e.GREATER,[dc]:e.NOTEQUAL};function ze(b,_){if(_.type===er&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Dt||_.magFilter===cn||_.magFilter===aa||_.magFilter===$t||_.minFilter===Dt||_.minFilter===cn||_.minFilter===aa||_.minFilter===$t)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,le[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,le[_.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,le[_.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,me[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==aa&&_.minFilter!==$t||_.type===er&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",C));let Q=_.source,te=d.get(Q);te===void 0&&(te={},d.set(Q,te));let J=k(_);if(J!==b.__cacheKey){te[J]===void 0&&(te[J]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,O=!0),te[J].usedTimes++;let Le=te[b.__cacheKey];Le!==void 0&&(te[b.__cacheKey].usedTimes--,Le.usedTimes===0&&M(_)),b.__cacheKey=J,b.__webglTexture=te[J].texture}return O}function ne(b,_,O){let Q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=e.TEXTURE_3D);let te=Z(b,_),J=_.source;r.bindTexture(Q,b.__webglTexture,e.TEXTURE0+O);let Le=i.get(J);if(J.version!==Le.__version||te===!0){r.activeTexture(e.TEXTURE0+O);let fe=qe.getPrimaries(qe.workingColorSpace),X=_.colorSpace===gr?null:qe.getPrimaries(_.colorSpace),re=_.colorSpace===gr||fe===X?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let H=v(_.image,!1,a.maxTextureSize);H=xe(_,H);let $=n.convert(_.format,_.colorSpace),Me=n.convert(_.type),ye=x(_.internalFormat,$,Me,_.colorSpace,_.isVideoTexture);ze(Q,_);let ge,we=_.mipmaps,Ne=_.isVideoTexture!==!0,Xe=Le.__version===void 0||te===!0,P=J.dataReady,Y=z(_,H);if(_.isDepthTexture)ye=E(_.format===ti,_.type),Xe&&(Ne?r.texStorage2D(e.TEXTURE_2D,1,ye,H.width,H.height):r.texImage2D(e.TEXTURE_2D,0,ye,H.width,H.height,0,$,Me,null));else if(_.isDataTexture)if(we.length>0){Ne&&Xe&&r.texStorage2D(e.TEXTURE_2D,Y,ye,we[0].width,we[0].height);for(let W=0,j=we.length;W<j;W++)ge=we[W],Ne?P&&r.texSubImage2D(e.TEXTURE_2D,W,0,0,ge.width,ge.height,$,Me,ge.data):r.texImage2D(e.TEXTURE_2D,W,ye,ge.width,ge.height,0,$,Me,ge.data);_.generateMipmaps=!1}else Ne?(Xe&&r.texStorage2D(e.TEXTURE_2D,Y,ye,H.width,H.height),P&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,H.width,H.height,$,Me,H.data)):r.texImage2D(e.TEXTURE_2D,0,ye,H.width,H.height,0,$,Me,H.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Xe&&r.texStorage3D(e.TEXTURE_2D_ARRAY,Y,ye,we[0].width,we[0].height,H.depth);for(let W=0,j=we.length;W<j;W++)if(ge=we[W],_.format!==Ot)if($!==null)if(Ne){if(P)if(_.layerUpdates.size>0){let ce=Pl(ge.width,ge.height,_.format,_.type);for(let ue of _.layerUpdates){let je=ge.data.subarray(ue*ce/ge.data.BYTES_PER_ELEMENT,(ue+1)*ce/ge.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,ue,ge.width,ge.height,1,$,je)}_.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,H.depth,$,ge.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,ye,ge.width,ge.height,H.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?P&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,H.depth,$,Me,ge.data):r.texImage3D(e.TEXTURE_2D_ARRAY,W,ye,ge.width,ge.height,H.depth,0,$,Me,ge.data)}else{Ne&&Xe&&r.texStorage2D(e.TEXTURE_2D,Y,ye,we[0].width,we[0].height);for(let W=0,j=we.length;W<j;W++)ge=we[W],_.format!==Ot?$!==null?Ne?P&&r.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,ge.width,ge.height,$,ge.data):r.compressedTexImage2D(e.TEXTURE_2D,W,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?P&&r.texSubImage2D(e.TEXTURE_2D,W,0,0,ge.width,ge.height,$,Me,ge.data):r.texImage2D(e.TEXTURE_2D,W,ye,ge.width,ge.height,0,$,Me,ge.data)}else if(_.isDataArrayTexture)if(Ne){if(Xe&&r.texStorage3D(e.TEXTURE_2D_ARRAY,Y,ye,H.width,H.height,H.depth),P)if(_.layerUpdates.size>0){let W=Pl(H.width,H.height,_.format,_.type);for(let j of _.layerUpdates){let ce=H.data.subarray(j*W/H.data.BYTES_PER_ELEMENT,(j+1)*W/H.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,j,H.width,H.height,1,$,Me,ce)}_.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,$,Me,H.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,H.width,H.height,H.depth,0,$,Me,H.data);else if(_.isData3DTexture)Ne?(Xe&&r.texStorage3D(e.TEXTURE_3D,Y,ye,H.width,H.height,H.depth),P&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,$,Me,H.data)):r.texImage3D(e.TEXTURE_3D,0,ye,H.width,H.height,H.depth,0,$,Me,H.data);else if(_.isFramebufferTexture){if(Xe)if(Ne)r.texStorage2D(e.TEXTURE_2D,Y,ye,H.width,H.height);else{let W=H.width,j=H.height;for(let ce=0;ce<Y;ce++)r.texImage2D(e.TEXTURE_2D,ce,ye,W,j,0,$,Me,null),W>>=1,j>>=1}}else if(we.length>0){if(Ne&&Xe){let W=be(we[0]);r.texStorage2D(e.TEXTURE_2D,Y,ye,W.width,W.height)}for(let W=0,j=we.length;W<j;W++)ge=we[W],Ne?P&&r.texSubImage2D(e.TEXTURE_2D,W,0,0,$,Me,ge):r.texImage2D(e.TEXTURE_2D,W,ye,$,Me,ge);_.generateMipmaps=!1}else if(Ne){if(Xe){let W=be(H);r.texStorage2D(e.TEXTURE_2D,Y,ye,W.width,W.height)}P&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,$,Me,H)}else r.texImage2D(e.TEXTURE_2D,0,ye,$,Me,H);m(_)&&p(Q),Le.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ae(b,_,O){if(_.image.length!==6)return;let Q=Z(b,_),te=_.source;r.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+O);let J=i.get(te);if(te.version!==J.__version||Q===!0){r.activeTexture(e.TEXTURE0+O);let Le=qe.getPrimaries(qe.workingColorSpace),fe=_.colorSpace===gr?null:qe.getPrimaries(_.colorSpace),X=_.colorSpace===gr||Le===fe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let re=_.isCompressedTexture||_.image[0].isCompressedTexture,H=_.image[0]&&_.image[0].isDataTexture,$=[];for(let j=0;j<6;j++)!re&&!H?$[j]=v(_.image[j],!0,a.maxCubemapSize):$[j]=H?_.image[j].image:_.image[j],$[j]=xe(_,$[j]);let Me=$[0],ye=n.convert(_.format,_.colorSpace),ge=n.convert(_.type),we=x(_.internalFormat,ye,ge,_.colorSpace),Ne=_.isVideoTexture!==!0,Xe=J.__version===void 0||Q===!0,P=te.dataReady,Y=z(_,Me);ze(e.TEXTURE_CUBE_MAP,_);let W;if(re){Ne&&Xe&&r.texStorage2D(e.TEXTURE_CUBE_MAP,Y,we,Me.width,Me.height);for(let j=0;j<6;j++){W=$[j].mipmaps;for(let ce=0;ce<W.length;ce++){let ue=W[ce];_.format!==Ot?ye!==null?Ne?P&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,ue.width,ue.height,ye,ue.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,ue.width,ue.height,ye,ge,ue.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,we,ue.width,ue.height,0,ye,ge,ue.data)}}}else{if(W=_.mipmaps,Ne&&Xe){W.length>0&&Y++;let j=be($[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,Y,we,j.width,j.height)}for(let j=0;j<6;j++)if(H){Ne?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,$[j].width,$[j].height,ye,ge,$[j].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,we,$[j].width,$[j].height,0,ye,ge,$[j].data);for(let ce=0;ce<W.length;ce++){let ue=W[ce].image[j].image;Ne?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,ue.width,ue.height,ye,ge,ue.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,we,ue.width,ue.height,0,ye,ge,ue.data)}}else{Ne?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye,ge,$[j]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,we,ye,ge,$[j]);for(let ce=0;ce<W.length;ce++){let ue=W[ce];Ne?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,ye,ge,ue.image[j]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,we,ye,ge,ue.image[j])}}}m(_)&&p(e.TEXTURE_CUBE_MAP),J.__version=te.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Te(b,_,O,Q,te,J){let Le=n.convert(O.format,O.colorSpace),fe=n.convert(O.type),X=x(O.internalFormat,Le,fe,O.colorSpace),re=i.get(_),H=i.get(O);if(H.__renderTarget=_,!re.__hasExternalTextures){let $=Math.max(1,_.width>>J),Me=Math.max(1,_.height>>J);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?r.texImage3D(te,J,X,$,Me,_.depth,0,Le,fe,null):r.texImage2D(te,J,X,$,Me,0,Le,fe,null)}r.bindFramebuffer(e.FRAMEBUFFER,b),ie(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,te,H.__webglTexture,0,_e(_)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Q,te,H.__webglTexture,J),r.bindFramebuffer(e.FRAMEBUFFER,null)}function de(b,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer){let Q=_.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=E(_.stencilBuffer,te),Le=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=_e(_);ie(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe,J,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe,J,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,J,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Le,e.RENDERBUFFER,b)}else{let Q=_.textures;for(let te=0;te<Q.length;te++){let J=Q[te],Le=n.convert(J.format,J.colorSpace),fe=n.convert(J.type),X=x(J.internalFormat,Le,fe,J.colorSpace),re=_e(_);O&&ie(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,X,_.width,_.height):ie(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,X,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,X,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ue(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=i.get(_.depthTexture);O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let Q=O.__webglTexture,te=_e(_);if(_.depthTexture.format===ei)ie(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,te):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(_.depthTexture.format===ti)ie(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,te):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Be(b){let _=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let Q=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=Q}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(_.__webglFramebuffer,b)}else if(O){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=e.createRenderbuffer(),de(_.__webglDepthbuffer[Q],b,!1);else{let te=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Q];e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,J)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),de(_.__webglDepthbuffer,b,!1);else{let Q=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,te)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(b,_,O){let Q=i.get(b);_!==void 0&&Te(Q.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&Be(b)}function ee(b){let _=b.texture,O=i.get(b),Q=i.get(_);b.addEventListener("dispose",R);let te=b.textures,J=b.isWebGLCubeRenderTarget===!0,Le=te.length>1;if(Le||(Q.__webglTexture===void 0&&(Q.__webglTexture=e.createTexture()),Q.__version=_.version,s.memory.textures++),J){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let X=0;X<_.mipmaps.length;X++)O.__webglFramebuffer[fe][X]=e.createFramebuffer()}else O.__webglFramebuffer[fe]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)O.__webglFramebuffer[fe]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(Le)for(let fe=0,X=te.length;fe<X;fe++){let re=i.get(te[fe]);re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture(),s.memory.textures++)}if(b.samples>0&&ie(b)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){let X=te[fe];O.__webglColorRenderbuffer[fe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);let re=n.convert(X.format,X.colorSpace),H=n.convert(X.type),$=x(X.internalFormat,re,H,X.colorSpace,b.isXRRenderTarget===!0),Me=_e(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,$,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),de(O.__webglDepthRenderbuffer,b,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(J){r.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(e.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let X=0;X<_.mipmaps.length;X++)Te(O.__webglFramebuffer[fe][X],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,X);else Te(O.__webglFramebuffer[fe],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Le){for(let fe=0,X=te.length;fe<X;fe++){let re=te[fe],H=i.get(re);r.bindTexture(e.TEXTURE_2D,H.__webglTexture),ze(e.TEXTURE_2D,re),Te(O.__webglFramebuffer,b,re,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,0),m(re)&&p(e.TEXTURE_2D)}r.unbindTexture()}else{let fe=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(fe,Q.__webglTexture),ze(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let X=0;X<_.mipmaps.length;X++)Te(O.__webglFramebuffer[X],b,_,e.COLOR_ATTACHMENT0,fe,X);else Te(O.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),r.unbindTexture()}b.depthBuffer&&Be(b)}function he(b){let _=b.textures;for(let O=0,Q=_.length;O<Q;O++){let te=_[O];if(m(te)){let J=T(b),Le=i.get(te).__webglTexture;r.bindTexture(J,Le),p(J),r.unbindTexture()}}}let w=[],Ee=[];function oe(b){if(b.samples>0){if(ie(b)===!1){let _=b.textures,O=b.width,Q=b.height,te=e.COLOR_BUFFER_BIT,J=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Le=i.get(b),fe=_.length>1;if(fe)for(let X=0;X<_.length;X++)r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+X,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+X,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let X=0;X<_.length;X++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),fe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Le.__webglColorRenderbuffer[X]);let re=i.get(_[X]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,re,0)}e.blitFramebuffer(0,0,O,Q,0,0,O,Q,te,e.NEAREST),l===!0&&(w.length=0,Ee.length=0,w.push(e.COLOR_ATTACHMENT0+X),b.depthBuffer&&b.resolveDepthBuffer===!1&&(w.push(J),Ee.push(J),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),fe)for(let X=0;X<_.length;X++){r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+X,e.RENDERBUFFER,Le.__webglColorRenderbuffer[X]);let re=i.get(_[X]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+X,e.TEXTURE_2D,re,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function _e(b){return Math.min(a.maxSamples,b.samples)}function ie(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function De(b){let _=s.render.frame;c.get(b)!==_&&(c.set(b,_),b.update())}function xe(b,_){let O=b.colorSpace,Q=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ri&&O!==gr&&(qe.getTransfer(O)===Je?(Q!==Ot||te!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function be(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=ae,this.setTextureCube=q,this.rebindTextures=Fe,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ie}function xm(e,t){function r(i,a=gr){let n,s=qe.getTransfer(a);if(i===Qt)return e.UNSIGNED_BYTE;if(i===dn)return e.UNSIGNED_SHORT_4_4_4_4;if(i===pn)return e.UNSIGNED_SHORT_5_5_5_1;if(i===oo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===no)return e.BYTE;if(i===so)return e.SHORT;if(i===Ni)return e.UNSIGNED_SHORT;if(i===un)return e.INT;if(i===Dr)return e.UNSIGNED_INT;if(i===er)return e.FLOAT;if(i===$r)return e.HALF_FLOAT;if(i===lo)return e.ALPHA;if(i===ho)return e.RGB;if(i===Ot)return e.RGBA;if(i===co)return e.LUMINANCE;if(i===uo)return e.LUMINANCE_ALPHA;if(i===ei)return e.DEPTH_COMPONENT;if(i===ti)return e.DEPTH_STENCIL;if(i===po)return e.RED;if(i===fn)return e.RED_INTEGER;if(i===fo)return e.RG;if(i===mn)return e.RG_INTEGER;if(i===gn)return e.RGBA_INTEGER;if(i===na||i===sa||i===oa||i===la)if(s===Je)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===na)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===na)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vn||i===_n||i===xn||i===yn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===vn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_n)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mn||i===Sn||i===En)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(i===Mn||i===Sn)return s===Je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===En)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tn||i===bn||i===wn||i===An||i===Rn||i===Cn||i===Pn||i===Ln||i===Nn||i===In||i===Un||i===Dn||i===On||i===Fn)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Tn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===An)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ln)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===In)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Un)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===On)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===zn||i===Bn)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(i===ha)return s===Je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mo||i===Vn||i===kn||i===Hn)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(i===ha)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Vn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var ym=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Gi=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mm={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,r),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,f=.005;l.inputState.pinching&&u>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new Gi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},Sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Em=`
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

}`,Tm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new Ft,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new Xt({vertexShader:Sm,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new lr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bm=class extends ai{constructor(e,t){super();let r=this,i=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,f=null,g=new Tm,v=t.getContextAttributes(),m=null,p=null,T=[],x=[],E=new pe,z=null,C=new Et;C.viewport=new Ke;let R=new Et;R.viewport=new Ke;let U=[C,R],M=new ym,S=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=T[Z];return ne===void 0&&(ne=new ws,T[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=T[Z];return ne===void 0&&(ne=new ws,T[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=T[Z];return ne===void 0&&(ne=new ws,T[Z]=ne),ne.getHandSpace()};function D(Z){let ne=x.indexOf(Z.inputSource);if(ne===-1)return;let Ae=T[ne];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,l||n),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",k);for(let Z=0;Z<T.length;Z++){let ne=x[Z];ne!==null&&(x[Z]=null,T[Z].disconnect(ne))}S=null,A=null,g.reset(),e.setRenderTarget(m),d=null,u=null,c=null,i=null,p=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(E.width,E.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){s=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){let ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new vr(d.framebufferWidth,d.framebufferHeight,{format:Ot,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,Ae=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?ti:ei,Ae=v.stencil?Qr:Dr);let de={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(de),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new vr(u.textureWidth,u.textureHeight,{format:Ot,type:Qt,depthTexture:new ll(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await i.requestReferenceSpace(s),ze.setContext(i),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Z){for(let ne=0;ne<Z.removed.length;ne++){let Ae=Z.removed[ne],Te=x.indexOf(Ae);Te>=0&&(x[Te]=null,T[Te].disconnect(Ae))}for(let ne=0;ne<Z.added.length;ne++){let Ae=Z.added[ne],Te=x.indexOf(Ae);if(Te===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=x.length){x.push(Ae),Te=Ue;break}else if(x[Ue]===null){x[Ue]=Ae,Te=Ue;break}if(Te===-1)break}let de=T[Te];de&&de.connect(Ae)}}let K=new L,G=new L;function ae(Z,ne,Ae){K.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(Ae.matrixWorld);let Te=K.distanceTo(G),de=ne.projectionMatrix.elements,Ue=Ae.projectionMatrix.elements,Be=de[14]/(de[10]-1),Fe=de[14]/(de[10]+1),ee=(de[9]+1)/de[5],he=(de[9]-1)/de[5],w=(de[8]-1)/de[0],Ee=(Ue[8]+1)/Ue[0],oe=Be*w,_e=Be*Ee,ie=Te/(-w+Ee),De=ie*-w;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),de[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let xe=Be+ie,be=Fe+ie,b=oe-De,_=_e+(Te-De),O=ee*Fe/be*xe,Q=he*Fe/be*xe;Z.projectionMatrix.makePerspective(b,_,O,Q,xe,be),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function q(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ne=Z.near,Ae=Z.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),M.near=R.near=C.near=ne,M.far=R.far=C.far=Ae,(S!==M.near||A!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,A=M.far),C.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,M.layers.mask=C.layers.mask|R.layers.mask;let Te=Z.parent,de=M.cameras;q(M,Te);for(let Ue=0;Ue<de.length;Ue++)q(de[Ue],Te);de.length===2?ae(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),le(Z,M,Te)};function le(Z,ne,Ae){Ae===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=jn*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(Z){o=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let me=null;function Ie(Z,ne){if(h=ne.getViewerPose(l||n),f=ne,h!==null){let Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Te=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let Ue=0;Ue<Ae.length;Ue++){let Be=Ae[Ue],Fe=null;if(d!==null)Fe=d.getViewport(Be);else{let he=c.getViewSubImage(u,Be);Fe=he.viewport,Ue===0&&(e.setRenderTargetTextures(p,he.colorTexture,u.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(p))}let ee=U[Ue];ee===void 0&&(ee=new Et,ee.layers.enable(Ue),ee.viewport=new Ke,U[Ue]=ee),ee.matrix.fromArray(Be.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Be.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ue===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(ee)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")){let Ue=c.getDepthInformation(Ae[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(e,Ue,i.renderState)}}for(let Ae=0;Ae<T.length;Ae++){let Te=x[Ae],de=T[Ae];Te!==null&&de!==void 0&&de.update(Te,ne,l||n)}me&&me(Z,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),f=null}let ze=new el;ze.setAnimationLoop(Ie),this.setAnimationLoop=function(Z){me=Z},this.dispose=function(){}}},Wr=new Sr,wm=new at;function Am(e,t){function r(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zo(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,T,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(n(m,p),g(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),v(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,r(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,r(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,r(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,r(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,r(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,r(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),x=T.envMap,E=T.envMapRotation;x&&(m.envMap.value=x,Wr.copy(E),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),m.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(Wr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,r(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,r(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,r(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,r(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,r(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,r(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,r(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,r(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,r(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,r(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,r(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,r(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,r(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,r(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,r(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,r(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,r(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,r(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,r(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Rm(e,t,r,i){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){let E=x.program;i.uniformBlockBinding(T,E)}function h(T,x){let E=a[T.id];E===void 0&&(g(T),E=c(T),a[T.id]=E,T.addEventListener("dispose",m));let z=x.program;i.updateUBOMapping(T,z);let C=t.render.frame;n[T.id]!==C&&(d(T),n[T.id]=C)}function c(T){let x=u();T.__bindingPointIndex=x;let E=e.createBuffer(),z=T.__size,C=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,z,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,E),E}function u(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let x=a[T.id],E=T.uniforms,z=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let C=0,R=E.length;C<R;C++){let U=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,S=U.length;M<S;M++){let A=U[M];if(f(A,C,M,z)===!0){let D=A.__offset,F=Array.isArray(A.value)?A.value:[A.value],k=0;for(let K=0;K<F.length;K++){let G=F[K],ae=v(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,D+k,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,k),k+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,D,A.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(T,x,E,z){let C=T.value,R=x+"_"+E;if(z[R]===void 0)return typeof C=="number"||typeof C=="boolean"?z[R]=C:z[R]=C.clone(),!0;{let U=z[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return z[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(T){let x=T.uniforms,E=0,z=16;for(let R=0,U=x.length;R<U;R++){let M=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,A=M.length;S<A;S++){let D=M[S],F=Array.isArray(D.value)?D.value:[D.value];for(let k=0,K=F.length;k<K;k++){let G=F[k],ae=v(G),q=E%z,le=q%ae.boundary,me=q+le;E+=le,me!==0&&z-me<ae.storage&&(E+=z-me),D.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=ae.storage}}}let C=E%z;return C>0&&(E+=z-C),T.__size=E,T.__cache={},this}function v(T){let x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){let x=T.target;x.removeEventListener("dispose",m);let E=s.indexOf(x.__bindingPointIndex);s.splice(E,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function p(){for(let T in a)e.deleteBuffer(a[T]);s=[],a={},n={}}return{bind:l,update:h,dispose:p}}var Cm=class{constructor(e={}){let{canvas:t=gc(),context:r=null,depth:i=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=n;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this.toneMapping=Kt,this.toneMappingExposure=1;let x=this,E=!1,z=0,C=0,R=null,U=-1,M=null,S=new Ke,A=new Ke,D=null,F=new He(0),k=0,K=t.width,G=t.height,ae=1,q=null,le=null,me=new Ke(0,0,K,G),Ie=new Ke(0,0,K,G),ze=!1,Z=new gs,ne=!1,Ae=!1,Te=new at,de=new at,Ue=new L,Be=new Ke,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function he(){return R===null?ae:1}let w=r;function Ee(y,I){return t.getContext(y,I)}try{let y={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ce,!1),w===null){let I="webgl2";if(w=Ee(I,y),w===null)throw Ee(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let oe,_e,ie,De,xe,be,b,_,O,Q,te,J,Le,fe,X,re,H,$,Me,ye,ge,we,Ne,Xe;function P(){oe=new Ip(w),oe.init(),we=new xm(w,oe),_e=new Ap(w,oe,e,we),ie=new gm(w,oe),_e.reverseDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),De=new Op(w),xe=new tm,be=new _m(w,oe,ie,xe,_e,we,De),b=new Cp(x),_=new Np(x),O=new Gc(w),Ne=new bp(w,O),Q=new Up(w,O,De,Ne),te=new zp(w,Q,O,De),Me=new Fp(w,_e,be),re=new Rp(xe),J=new em(x,b,_,oe,_e,Ne,re),Le=new Am(x,xe),fe=new im,X=new hm(oe),$=new Tp(x,b,_,ie,te,d,o),H=new fm(x,te,_e),Xe=new Rm(w,De,_e,ie),ye=new wp(w,oe,De),ge=new Dp(w,oe,De),De.programs=J.programs,x.capabilities=_e,x.extensions=oe,x.properties=xe,x.renderLists=fe,x.shadowMap=H,x.state=ie,x.info=De}P();let Y=new bm(x,w);this.xr=Y,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let y=oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(y){y!==void 0&&(ae=y,this.setSize(K,G,!1))},this.getSize=function(y){return y.set(K,G)},this.setSize=function(y,I,B=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,G=I,t.width=Math.floor(y*ae),t.height=Math.floor(I*ae),B===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(K*ae,G*ae).floor()},this.setDrawingBufferSize=function(y,I,B){K=y,G=I,ae=B,t.width=Math.floor(y*B),t.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,I,B,V){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,I,B,V),ie.viewport(S.copy(me).multiplyScalar(ae).round())},this.getScissor=function(y){return y.copy(Ie)},this.setScissor=function(y,I,B,V){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,I,B,V),ie.scissor(A.copy(Ie).multiplyScalar(ae).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){ie.setScissorTest(ze=y)},this.setOpaqueSort=function(y){q=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(y=!0,I=!0,B=!0){let V=0;if(y){let N=!1;if(R!==null){let se=R.texture.format;N=se===gn||se===mn||se===fn}if(N){let se=R.texture.type,Se=se===Qt||se===Dr||se===Ni||se===Qr||se===dn||se===pn,Re=$.getClearColor(),Ce=$.getClearAlpha(),Ve=Re.r,ke=Re.g,Oe=Re.b;Se?(f[0]=Ve,f[1]=ke,f[2]=Oe,f[3]=Ce,w.clearBufferuiv(w.COLOR,0,f)):(g[0]=Ve,g[1]=ke,g[2]=Oe,g[3]=Ce,w.clearBufferiv(w.COLOR,0,g))}else V|=w.COLOR_BUFFER_BIT}I&&(V|=w.DEPTH_BUFFER_BIT),B&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),X.dispose(),xe.dispose(),b.dispose(),_.dispose(),te.dispose(),Ne.dispose(),Xe.dispose(),J.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Gt),Y.removeEventListener("sessionend",Ws),Pr.stop()};function W(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let y=De.autoReset,I=H.enabled,B=H.autoUpdate,V=H.needsUpdate,N=H.type;P(),De.autoReset=y,H.enabled=I,H.autoUpdate=B,H.needsUpdate=V,H.type=N}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ue(y){let I=y.target;I.removeEventListener("dispose",ue),je(I)}function je(y){it(y),xe.remove(y)}function it(y){let I=xe.get(y).programs;I!==void 0&&(I.forEach(function(B){J.releaseProgram(B)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,V,N,se){I===null&&(I=Fe);let Se=N.isMesh&&N.matrixWorld.determinant()<0,Re=wh(y,I,B,V,N);ie.setMaterial(V,Se);let Ce=B.index,Ve=1;if(V.wireframe===!0){if(Ce=Q.getWireframeAttribute(B),Ce===void 0)return;Ve=2}let ke=B.drawRange,Oe=B.attributes.position,Ye=ke.start*Ve,Qe=(ke.start+ke.count)*Ve;se!==null&&(Ye=Math.max(Ye,se.start*Ve),Qe=Math.min(Qe,(se.start+se.count)*Ve)),Ce!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Ce.count)):Oe!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Oe.count));let et=Qe-Ye;if(et<0||et===1/0)return;Ne.setup(N,V,Re,B,Ce);let st,tt=ye;if(Ce!==null&&(st=O.get(Ce),tt=ge,tt.setIndex(st)),N.isMesh)V.wireframe===!0?(ie.setLineWidth(V.wireframeLinewidth*he()),tt.setMode(w.LINES)):tt.setMode(w.TRIANGLES);else if(N.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),ie.setLineWidth(Pe*he()),N.isLineSegments?tt.setMode(w.LINES):N.isLineLoop?tt.setMode(w.LINE_LOOP):tt.setMode(w.LINE_STRIP)}else N.isPoints?tt.setMode(w.POINTS):N.isSprite&&tt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Pe=N._multiDrawStarts,Lr=N._multiDrawCounts,Nr=N._multiDrawCount,Nt=Ce?O.get(Ce).bytesPerElement:1,qr=xe.get(V).currentProgram.getUniforms();for(let Tt=0;Tt<Nr;Tt++)qr.setValue(w,"_gl_DrawID",Tt),tt.render(Pe[Tt]/Nt,Lr[Tt])}else if(N.isInstancedMesh)tt.renderInstances(Ye,et,N.count);else if(B.isInstancedBufferGeometry){let Pe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lr=Math.min(B.instanceCount,Pe);tt.renderInstances(Ye,et,Lr)}else tt.render(Ye,et)};function ft(y,I,B){y.transparent===!0&&y.side===It&&y.forceSinglePass===!1?(y.side=Mt,y.needsUpdate=!0,ra(y,I,B),y.side=fr,y.needsUpdate=!0,ra(y,I,B),y.side=It):ra(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),m=X.get(B),m.init(I),T.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),y!==B&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let Se=0;Se<se.length;Se++){let Re=se[Se];ft(Re,B,N),V.add(Re)}else ft(se,B,N),V.add(se)}),T.pop(),m=null,V},this.compileAsync=function(y,I,B=null){let V=this.compile(y,I,B);return new Promise(N=>{function se(){if(V.forEach(function(Se){xe.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){N(y);return}setTimeout(se,10)}oe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ze=null;function Zt(y){Ze&&Ze(y)}function Gt(){Pr.stop()}function Ws(){Pr.start()}let Pr=new el;Pr.setAnimationLoop(Zt),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(y){Ze=y,Y.setAnimationLoop(y),y===null?Pr.stop():Pr.start()},Y.addEventListener("sessionstart",Gt),Y.addEventListener("sessionend",Ws),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,R),m=X.get(y,T.length),m.init(I),T.push(m),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Z.setFromProjectionMatrix(de),Ae=this.localClippingEnabled,ne=re.init(this.clippingPlanes,Ae),v=fe.get(y,p.length),v.init(),p.push(v),Y.enabled===!0&&Y.isPresenting===!0){let se=x.xr.getDepthSensingMesh();se!==null&&Ja(se,I,-1/0,x.sortObjects)}Ja(y,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(q,le),ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ee&&$.addToRenderList(v,y),this.info.render.frame++,ne===!0&&re.beginShadows();let B=m.state.shadowsArray;H.render(B,y,I),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=v.opaque,N=v.transmissive;if(m.setupLights(),I.isArrayCamera){let se=I.cameras;if(N.length>0)for(let Se=0,Re=se.length;Se<Re;Se++){let Ce=se[Se];js(V,N,y,Ce)}ee&&$.render(y);for(let Se=0,Re=se.length;Se<Re;Se++){let Ce=se[Se];Xs(v,y,Ce,Ce.viewport)}}else N.length>0&&js(V,N,y,I),ee&&$.render(y),Xs(v,y,I);R!==null&&(be.updateMultisampleRenderTarget(R),be.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(x,y,I),Ne.resetDefaultState(),U=-1,M=null,T.pop(),T.length>0?(m=T[T.length-1],ne===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ja(y,I,B,V){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){V&&Be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(de);let se=te.update(y),Se=y.material;Se.visible&&v.push(y,se,Se,B,Be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Z.intersectsObject(y))){let se=te.update(y),Se=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Be.copy(y.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Be.copy(se.boundingSphere.center)),Be.applyMatrix4(y.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){let Re=se.groups;for(let Ce=0,Ve=Re.length;Ce<Ve;Ce++){let ke=Re[Ce],Oe=Se[ke.materialIndex];Oe&&Oe.visible&&v.push(y,se,Oe,B,Be.z,ke)}}else Se.visible&&v.push(y,se,Se,B,Be.z,null)}}let N=y.children;for(let se=0,Se=N.length;se<Se;se++)Ja(N[se],I,B,V)}function Xs(y,I,B,V){let N=y.opaque,se=y.transmissive,Se=y.transparent;m.setupLightsView(B),ne===!0&&re.setGlobalState(x.clippingPlanes,B),V&&ie.viewport(S.copy(V)),N.length>0&&ta(N,I,B),se.length>0&&ta(se,I,B),Se.length>0&&ta(Se,I,B),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function js(y,I,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new vr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?$r:Qt,minFilter:$t,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));let N=m.state.transmissionRenderTarget[V.id],se=V.viewport||S;N.setSize(se.z,se.w);let Se=x.getRenderTarget();x.setRenderTarget(N),x.getClearColor(F),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),ee&&$.render(B);let Re=x.toneMapping;x.toneMapping=Kt;let Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),ne===!0&&re.setGlobalState(x.clippingPlanes,V),ta(y,B,V),be.updateMultisampleRenderTarget(N),be.updateRenderTargetMipmap(N),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ke=0,Oe=I.length;ke<Oe;ke++){let Ye=I[ke],Qe=Ye.object,et=Ye.geometry,st=Ye.material,tt=Ye.group;if(st.side===It&&Qe.layers.test(V.layers)){let Pe=st.side;st.side=Mt,st.needsUpdate=!0,qs(Qe,B,V,et,st,tt),st.side=Pe,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(be.updateMultisampleRenderTarget(N),be.updateRenderTargetMipmap(N))}x.setRenderTarget(Se),x.setClearColor(F,k),Ce!==void 0&&(V.viewport=Ce),x.toneMapping=Re}function ta(y,I,B){let V=I.isScene===!0?I.overrideMaterial:null;for(let N=0,se=y.length;N<se;N++){let Se=y[N],Re=Se.object,Ce=Se.geometry,Ve=V===null?Se.material:V,ke=Se.group;Re.layers.test(B.layers)&&qs(Re,I,B,Ce,Ve,ke)}}function qs(y,I,B,V,N,se){y.onBeforeRender(x,I,B,V,N,se),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(x,I,B,V,y,se),N.transparent===!0&&N.side===It&&N.forceSinglePass===!1?(N.side=Mt,N.needsUpdate=!0,x.renderBufferDirect(B,I,V,N,y,se),N.side=fr,N.needsUpdate=!0,x.renderBufferDirect(B,I,V,N,y,se),N.side=It):x.renderBufferDirect(B,I,V,N,y,se),y.onAfterRender(x,I,B,V,N,se)}function ra(y,I,B){I.isScene!==!0&&(I=Fe);let V=xe.get(y),N=m.state.lights,se=m.state.shadowsArray,Se=N.state.version,Re=J.getParameters(y,N.state,se,I,B),Ce=J.getProgramCacheKey(Re),Ve=V.programs;V.environment=y.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(y.isMeshStandardMaterial?_:b).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",ue),Ve=new Map,V.programs=Ve);let ke=Ve.get(Ce);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===Se)return Zs(y,Re),ke}else Re.uniforms=J.getUniforms(y),y.onBeforeCompile(Re,x),ke=J.acquireProgram(Re,Ce),Ve.set(Ce,ke),V.uniforms=Re.uniforms;let Oe=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=re.uniform),Zs(y,Re),V.needsLights=Rh(y),V.lightsStateVersion=Se,V.needsLights&&(Oe.ambientLightColor.value=N.state.ambient,Oe.lightProbe.value=N.state.probe,Oe.directionalLights.value=N.state.directional,Oe.directionalLightShadows.value=N.state.directionalShadow,Oe.spotLights.value=N.state.spot,Oe.spotLightShadows.value=N.state.spotShadow,Oe.rectAreaLights.value=N.state.rectArea,Oe.ltc_1.value=N.state.rectAreaLTC1,Oe.ltc_2.value=N.state.rectAreaLTC2,Oe.pointLights.value=N.state.point,Oe.pointLightShadows.value=N.state.pointShadow,Oe.hemisphereLights.value=N.state.hemi,Oe.directionalShadowMap.value=N.state.directionalShadowMap,Oe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Oe.spotShadowMap.value=N.state.spotShadowMap,Oe.spotLightMatrix.value=N.state.spotLightMatrix,Oe.spotLightMap.value=N.state.spotLightMap,Oe.pointShadowMap.value=N.state.pointShadowMap,Oe.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function Ys(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Ua.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Zs(y,I){let B=xe.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function wh(y,I,B,V,N){I.isScene!==!0&&(I=Fe),be.resetTextureUnits();let se=I.fog,Se=V.isMeshStandardMaterial?I.environment:null,Re=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ri,Ce=(V.isMeshStandardMaterial?_:b).get(V.envMap||Se),Ve=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,Qe=!!B.morphAttributes.color,et=Kt;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(et=x.toneMapping);let st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tt=st!==void 0?st.length:0,Pe=xe.get(V),Lr=m.state.lights;if(ne===!0&&(Ae===!0||y!==M)){let yt=y===M&&V.id===U;re.setState(V,y,yt)}let Nr=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Lr.state.version||Pe.outputColorSpace!==Re||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==Ce||V.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Ve||Pe.vertexTangents!==ke||Pe.morphTargets!==Oe||Pe.morphNormals!==Ye||Pe.morphColors!==Qe||Pe.toneMapping!==et||Pe.morphTargetsCount!==tt)&&(Nr=!0):(Nr=!0,Pe.__version=V.version);let Nt=Pe.currentProgram;Nr===!0&&(Nt=ra(V,I,N));let qr=!1,Tt=!1,Ri=!1,$e=Nt.getUniforms(),Wt=Pe.uniforms;if(ie.useProgram(Nt.program)&&(qr=!0,Tt=!0,Ri=!0),V.id!==U&&(U=V.id,Tt=!0),qr||M!==y){ie.buffers.depth.getReversed()?(Te.copy(y.projectionMatrix),_c(Te),xc(Te),$e.setValue(w,"projectionMatrix",Te)):$e.setValue(w,"projectionMatrix",y.projectionMatrix),$e.setValue(w,"viewMatrix",y.matrixWorldInverse);let yt=$e.map.cameraPosition;yt!==void 0&&yt.setValue(w,Ue.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&$e.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&$e.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Tt=!0,Ri=!0)}if(N.isSkinnedMesh){$e.setOptional(w,N,"bindMatrix"),$e.setOptional(w,N,"bindMatrixInverse");let yt=N.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),$e.setValue(w,"boneTexture",yt.boneTexture,be))}N.isBatchedMesh&&($e.setOptional(w,N,"batchingTexture"),$e.setValue(w,"batchingTexture",N._matricesTexture,be),$e.setOptional(w,N,"batchingIdTexture"),$e.setValue(w,"batchingIdTexture",N._indirectTexture,be),$e.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&$e.setValue(w,"batchingColorTexture",N._colorsTexture,be));let Ci=B.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Me.update(N,B,Nt),(Tt||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,$e.setValue(w,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Wt.envMap.value=Ce,Wt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Wt.envMapIntensity.value=I.environmentIntensity),Tt&&($e.setValue(w,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Ah(Wt,Ri),se&&V.fog===!0&&Le.refreshFogUniforms(Wt,se),Le.refreshMaterialUniforms(Wt,V,ae,G,m.state.transmissionRenderTarget[y.id]),Ua.upload(w,Ys(Pe),Wt,be)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ua.upload(w,Ys(Pe),Wt,be),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&$e.setValue(w,"center",N.center),$e.setValue(w,"modelViewMatrix",N.modelViewMatrix),$e.setValue(w,"normalMatrix",N.normalMatrix),$e.setValue(w,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let yt=V.uniformsGroups;for(let Pi=0,pr=yt.length;Pi<pr;Pi++){let Js=yt[Pi];Xe.update(Js,Nt),Xe.bind(Js,Nt)}}return Nt}function Ah(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Rh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,I,B){xe.get(y.texture).__webglTexture=I,xe.get(y.depthTexture).__webglTexture=B;let V=xe.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){let B=xe.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){R=y,z=I,C=B;let V=!0,N=null,se=!1,Se=!1;if(y){let Re=xe.get(y);if(Re.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)be.setupRenderTarget(y);else if(Re.__hasExternalTextures)be.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ke=y.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&xe.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(y)}}let Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);let Ve=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ve[I])?N=Ve[I][B]:N=Ve[I],se=!0):y.samples>0&&be.useMultisampledRTT(y)===!1?N=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[B]:N=Ve,S.copy(y.viewport),A.copy(y.scissor),D=y.scissorTest}else S.copy(me).multiplyScalar(ae).floor(),A.copy(Ie).multiplyScalar(ae).floor(),D=ze;if(ie.bindFramebuffer(w.FRAMEBUFFER,N)&&V&&ie.drawBuffers(y,N),ie.viewport(S),ie.scissor(A),ie.setScissorTest(D),se){let Re=xe.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,B)}else if(Se){let Re=xe.get(y.texture),Ce=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Re.__webglTexture,B||0,Ce)}U=-1},this.readRenderTargetPixels=function(y,I,B,V,N,se,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){ie.bindFramebuffer(w.FRAMEBUFFER,Re);try{let Ce=y.texture,Ve=Ce.format,ke=Ce.type;if(!_e.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-V&&B>=0&&B<=y.height-N&&w.readPixels(I,B,V,N,we.convert(Ve),we.convert(ke),se)}finally{let Ce=R!==null?xe.get(R).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,I,B,V,N,se,Se){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){let Ce=y.texture,Ve=Ce.format,ke=Ce.type;if(!_e.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-V&&B>=0&&B<=y.height-N){ie.bindFramebuffer(w.FRAMEBUFFER,Re);let Oe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Oe),w.bufferData(w.PIXEL_PACK_BUFFER,se.byteLength,w.STREAM_READ),w.readPixels(I,B,V,N,we.convert(Ve),we.convert(ke),0);let Ye=R!==null?xe.get(R).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,Ye);let Qe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await vc(w,Qe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Oe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,se),w.deleteBuffer(Oe),w.deleteSync(Qe),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,B=0){y.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);let V=Math.pow(2,-B),N=Math.floor(y.image.width*V),se=Math.floor(y.image.height*V),Se=I!==null?I.x:0,Re=I!==null?I.y:0;be.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,Se,Re,N,se),ie.unbindTexture()},this.copyTextureToTexture=function(y,I,B=null,V=null,N=0){y.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],I=arguments[2],N=arguments[3]||0,B=null);let se,Se,Re,Ce,Ve,ke,Oe,Ye,Qe,et=y.isCompressedTexture?y.mipmaps[N]:y.image;B!==null?(se=B.max.x-B.min.x,Se=B.max.y-B.min.y,Re=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,Ve=B.min.y,ke=B.isBox3?B.min.z:0):(se=et.width,Se=et.height,Re=et.depth||1,Ce=0,Ve=0,ke=0),V!==null?(Oe=V.x,Ye=V.y,Qe=V.z):(Oe=0,Ye=0,Qe=0);let st=we.convert(I.format),tt=we.convert(I.type),Pe;I.isData3DTexture?(be.setTexture3D(I,0),Pe=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(be.setTexture2DArray(I,0),Pe=w.TEXTURE_2D_ARRAY):(be.setTexture2D(I,0),Pe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);let Lr=w.getParameter(w.UNPACK_ROW_LENGTH),Nr=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Nt=w.getParameter(w.UNPACK_SKIP_PIXELS),qr=w.getParameter(w.UNPACK_SKIP_ROWS),Tt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,et.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ve),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ke);let Ri=y.isDataArrayTexture||y.isData3DTexture,$e=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let Wt=xe.get(y),Ci=xe.get(I),yt=xe.get(Wt.__renderTarget),Pi=xe.get(Ci.__renderTarget);ie.bindFramebuffer(w.READ_FRAMEBUFFER,yt.__webglFramebuffer),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let pr=0;pr<Re;pr++)Ri&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xe.get(y).__webglTexture,N,ke+pr),y.isDepthTexture?($e&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,N,Qe+pr),w.blitFramebuffer(Ce,Ve,se,Se,Oe,Ye,se,Se,w.DEPTH_BUFFER_BIT,w.NEAREST)):$e?w.copyTexSubImage3D(Pe,N,Oe,Ye,Qe+pr,Ce,Ve,se,Se):w.copyTexSubImage2D(Pe,N,Oe,Ye,Qe+pr,Ce,Ve,se,Se);ie.bindFramebuffer(w.READ_FRAMEBUFFER,null),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else $e?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Pe,N,Oe,Ye,Qe,se,Se,Re,st,tt,et.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Pe,N,Oe,Ye,Qe,se,Se,Re,st,et.data):w.texSubImage3D(Pe,N,Oe,Ye,Qe,se,Se,Re,st,tt,et):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Oe,Ye,se,Se,st,tt,et.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Oe,Ye,et.width,et.height,st,et.data):w.texSubImage2D(w.TEXTURE_2D,N,Oe,Ye,se,Se,st,tt,et);w.pixelStorei(w.UNPACK_ROW_LENGTH,Lr),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Nr),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Nt),w.pixelStorei(w.UNPACK_SKIP_ROWS,qr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Tt),N===0&&I.generateMipmaps&&w.generateMipmap(Pe),ie.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B=null,V=null,N=0){return y.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,y=arguments[2],I=arguments[3],N=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,B,V,N)},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&be.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?be.setTextureCube(y,0):y.isData3DTexture?be.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?be.setTexture2DArray(y,0):be.setTexture2D(y,0),ie.unbindTexture()},this.resetState=function(){z=0,C=0,R=null,ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}},Pm=class yh{constructor(t,r=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(t),this.near=r,this.far=i}clone(){return new yh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xr=class extends Ft{constructor(e,t,r,i,a,n,s,o,l){super(e,t,r,i,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),i=0,a=r.length,n;t?n=t:n=e*r[a-1];let s=0,o=a-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-n,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===n)return i/(a-1);let h=r[i],c=r[i+1]-h,u=(n-h)/c;return(i+u)/(a-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),n=this.getPoint(i),s=t||(a.isVector2?new pe:new L);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new L,i=[],a=[],n=[],s=new L,o=new at;for(let d=0;d<=e;d++){let f=d/e;i[d]=this.getTangentAt(f,new L)}a[0]=new L,n[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),u<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],s),n[0].crossVectors(i[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(i[d-1],i[d]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(mt(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,f))}n[d].crossVectors(i[d],a[d])}if(t===!0){let d=Math.acos(mt(a[0].dot(a[e]),-1,1));d/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(i[f],d*f)),n[f].crossVectors(i[f],a[f])}return{tangents:i,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rs=class extends qt{constructor(e=0,t=0,r=1,i=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new pe){let r=t,i=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(n?a=0:a=i),this.aClockwise===!0&&!n&&(a===i?a=-i:a=a-i);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lm=class extends Rs{constructor(e,t,r,i,a,n){super(e,t,r,r,i,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Cs(){let e=0,t=0,r=0,i=0;function a(n,s,o,l){e=n,t=o,r=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,f*=c,a(s,o,d,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+r*s+i*o}}}var Oa=new L,Ps=new Cs,Ls=new Cs,Ns=new Cs,Nm=class extends qt{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new L){let r=t,i=this.points,a=i.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=i[(s-1)%a]:(Oa.subVectors(i[0],i[1]).add(i[0]),l=Oa);let c=i[s%a],u=i[(s+1)%a];if(this.closed||s+2<a?h=i[(s+2)%a]:(Oa.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),f<1e-4&&(f=g),v<1e-4&&(v=g),Ps.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,f,g,v),Ls.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,f,g,v),Ns.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,f,g,v)}else this.curveType==="catmullrom"&&(Ps.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Ls.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Ns.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return r.set(Ps.calc(o),Ls.calc(o),Ns.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ll(e,t,r,i,a){let n=(i-t)*.5,s=(a-r)*.5,o=e*e,l=e*o;return(2*r-2*i+n+s)*l+(-3*r+3*i-2*n-s)*o+n*e+r}function Im(e,t){let r=1-e;return r*r*t}function Um(e,t){return 2*(1-e)*e*t}function Dm(e,t){return e*e*t}function Wi(e,t,r,i){return Im(e,t)+Um(e,r)+Dm(e,i)}function Om(e,t){let r=1-e;return r*r*r*t}function Fm(e,t){let r=1-e;return 3*r*r*e*t}function zm(e,t){return 3*(1-e)*e*e*t}function Bm(e,t){return e*e*e*t}function Xi(e,t,r,i,a){return Om(e,t)+Fm(e,r)+zm(e,i)+Bm(e,a)}var Nl=class extends qt{constructor(e=new pe,t=new pe,r=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new pe){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(Xi(e,i.x,a.x,n.x,s.x),Xi(e,i.y,a.y,n.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vm=class extends qt{constructor(e=new L,t=new L,r=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new L){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(Xi(e,i.x,a.x,n.x,s.x),Xi(e,i.y,a.y,n.y,s.y),Xi(e,i.z,a.z,n.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Il=class extends qt{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},km=class extends qt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends qt{constructor(e=new pe,t=new pe,r=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new pe){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(Wi(e,i.x,a.x,n.x),Wi(e,i.y,a.y,n.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hm=class extends qt{constructor(e=new L,t=new L,r=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new L){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(Wi(e,i.x,a.x,n.x),Wi(e,i.y,a.y,n.y),Wi(e,i.z,a.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let r=t,i=this.points,a=(i.length-1)*e,n=Math.floor(a),s=a-n,o=i[n===0?n:n-1],l=i[n],h=i[n>i.length-2?i.length-1:n+1],c=i[n>i.length-3?i.length-1:n+2];return r.set(Ll(s,o.x,l.x,h.x,c.x),Ll(s,o.y,l.y,h.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new pe().fromArray(i))}return this}},Is=Object.freeze({__proto__:null,ArcCurve:Lm,CatmullRomCurve3:Nm,CubicBezierCurve:Nl,CubicBezierCurve3:Vm,EllipseCurve:Rs,LineCurve:Il,LineCurve3:km,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Hm,SplineCurve:Dl}),Gm=class extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Is[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),a=0;for(;a<i.length;){if(i[a]>=r){let n=i[a]-r,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,a=this.curves;i<a.length;i++){let n=a[i],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];r&&r.equals(h)||(t.push(h),r=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new Is[i.type]().fromJSON(i))}return this}},Ar=class extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new Il(this.currentPoint.clone(),new pe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let a=new Ul(this.currentPoint.clone(),new pe(e,t),new pe(r,i));return this.curves.push(a),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,a,n){let s=new Nl(this.currentPoint.clone(),new pe(e,t),new pe(r,i),new pe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new Dl(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,a,n),this}absarc(e,t,r,i,a,n){return this.absellipse(e,t,r,r,i,a,n),this}ellipse(e,t,r,i,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,r,i,a,n,s,o),this}absellipse(e,t,r,i,a,n,s,o){let l=new Rs(e,t,r,i,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ol=class Mh extends kt{constructor(t=1,r=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:r,thetaStart:i,thetaLength:a},r=Math.max(3,r);let n=[],s=[],o=[],l=[],h=new L,c=new pe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=r;u++,d+=3){let f=i+u/r*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[d]/t+1)/2,c.y=(s[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=r;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Us=class Sh extends kt{constructor(t=1,r=1,i=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],f=[],g=0,v=[],m=i/2,p=0;T(),s===!1&&(t>0&&x(!0),r>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function T(){let E=new L,z=new L,C=0,R=(r-t)/i;for(let U=0;U<=n;U++){let M=[],S=U/n,A=S*(r-t)+t;for(let D=0;D<=a;D++){let F=D/a,k=F*l+o,K=Math.sin(k),G=Math.cos(k);z.x=A*K,z.y=-S*i+m,z.z=A*G,u.push(z.x,z.y,z.z),E.set(K,R,G).normalize(),d.push(E.x,E.y,E.z),f.push(F,1-S),M.push(g++)}v.push(M)}for(let U=0;U<a;U++)for(let M=0;M<n;M++){let S=v[M][U],A=v[M+1][U],D=v[M+1][U+1],F=v[M][U+1];(t>0||M!==0)&&(c.push(S,A,F),C+=3),(r>0||M!==n-1)&&(c.push(A,D,F),C+=3)}h.addGroup(p,C,0),p+=C}function x(E){let z=g,C=new pe,R=new L,U=0,M=E===!0?t:r,S=E===!0?1:-1;for(let D=1;D<=a;D++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let A=g;for(let D=0;D<=a;D++){let F=D/a*l+o,k=Math.cos(F),K=Math.sin(F);R.x=M*K,R.y=m*S,R.z=M*k,u.push(R.x,R.y,R.z),d.push(0,S,0),C.x=k*.5+.5,C.y=K*.5*S+.5,f.push(C.x,C.y),g++}for(let D=0;D<a;D++){let F=z+D,k=A+D;E===!0?c.push(k,k+1,F):c.push(k+1,k,F),U+=3}h.addGroup(p,U,E===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yt=class extends Ar{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new Ar().fromJSON(i))}return this}},Wm={triangulate:function(e,t,r=2){let i=t&&t.length,a=i?t[0]*r:e.length,n=Fl(e,0,a,r,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,f;if(i&&(n=Zm(e,t,n,r)),e.length>80*r){o=h=e[0],l=c=e[1];for(let g=r;g<a;g+=r)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-o,c-l),f=f!==0?32767/f:0}return ji(n,s,r,o,l,f,0),s}};function Fl(e,t,r,i,a){let n,s;if(a===sg(e,t,r,i)>0)for(n=t;n<r;n+=i)s=Vl(n,e[n],e[n+1],s);else for(n=r-i;n>=t;n-=i)s=Vl(n,e[n],e[n+1],s);return s&&Fa(s,s.next)&&(Yi(s),s=s.next),s}function jr(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(Fa(r,r.next)||rt(r.prev,r,r.next)===0)){if(Yi(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function ji(e,t,r,i,a,n,s){if(!e)return;!s&&n&&eg(e,i,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?jm(e,i,a,n):Xm(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(h.i/r|0),Yi(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=qm(jr(e),t,r),ji(e,t,r,i,a,n,2)):s===2&&Ym(e,t,r,i,a,n):ji(jr(e),t,r,i,a,n,1);break}}}function Xm(e){let t=e.prev,r=e,i=e.next;if(rt(t,r,i)>=0)return!1;let a=t.x,n=r.x,s=i.x,o=t.y,l=r.y,h=i.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,f=o>l?o>h?o:h:l>h?l:h,g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&Ti(a,o,n,l,s,h,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jm(e,t,r,i){let a=e.prev,n=e,s=e.next;if(rt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,f=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,p=Ds(f,g,t,r,i),T=Ds(v,m,t,r,i),x=e.prevZ,E=e.nextZ;for(;x&&x.z>=p&&E&&E.z<=T;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&Ti(o,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==a&&E!==s&&Ti(o,c,l,u,h,d,E.x,E.y)&&rt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&Ti(o,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=T;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==a&&E!==s&&Ti(o,c,l,u,h,d,E.x,E.y)&&rt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function qm(e,t,r){let i=e;do{let a=i.prev,n=i.next.next;!Fa(a,n)&&zl(a,i,i.next,n)&&qi(a,n)&&qi(n,a)&&(t.push(a.i/r|0),t.push(i.i/r|0),t.push(n.i/r|0),Yi(i),Yi(i.next),i=e=n),i=i.next}while(i!==e);return jr(i)}function Ym(e,t,r,i,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&ig(s,o)){let l=Bl(s,o);s=jr(s,s.next),l=jr(l,l.next),ji(s,t,r,i,a,n,0),ji(l,t,r,i,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Zm(e,t,r,i){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*i,l=n<s-1?t[n+1]*i:e.length,h=Fl(e,o,l,i,!1),h===h.next&&(h.steiner=!0),a.push(rg(h));for(a.sort(Jm),n=0;n<a.length;n++)r=Km(a[n],r);return r}function Jm(e,t){return e.x-t.x}function Km(e,t){let r=$m(e,t);if(!r)return t;let i=Bl(r,e);return jr(i,i.next),jr(r,r.next)}function $m(e,t){let r=t,i=-1/0,a,n=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let d=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=n&&d>i&&(i=d,a=r.x<r.next.x?r:r.next,d===n))return a}r=r.next}while(r!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;r=a;do n>=r.x&&r.x>=l&&n!==r.x&&Ti(s<h?n:i,s,l,h,s<h?i:n,s,r.x,r.y)&&(u=Math.abs(s-r.y)/(n-r.x),qi(r,e)&&(u<c||u===c&&(r.x>a.x||r.x===a.x&&Qm(a,r)))&&(a=r,c=u)),r=r.next;while(r!==o);return a}function Qm(e,t){return rt(e.prev,e,t.prev)<0&&rt(t.next,e,e.next)<0}function eg(e,t,r,i){let a=e;do a.z===0&&(a.z=Ds(a.x,a.y,t,r,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,tg(a)}function tg(e){let t,r,i,a,n,s,o,l,h=1;do{for(r=e,e=null,n=null,s=0;r;){for(s++,i=r,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(a=r,r=r.nextZ,o--):(a=i,i=i.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=i}n.nextZ=null,h*=2}while(s>1);return e}function Ds(e,t,r,i,a){return e=(e-r)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function rg(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function Ti(e,t,r,i,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(n-o)>=(a-s)*(i-o)}function ig(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ag(e,t)&&(qi(e,t)&&qi(t,e)&&ng(e,t)&&(rt(e.prev,e,t.prev)||rt(e,t.prev,t))||Fa(e,t)&&rt(e.prev,e,e.next)>0&&rt(t.prev,t,t.next)>0)}function rt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Fa(e,t){return e.x===t.x&&e.y===t.y}function zl(e,t,r,i){let a=Ba(rt(e,t,r)),n=Ba(rt(e,t,i)),s=Ba(rt(r,i,e)),o=Ba(rt(r,i,t));return!!(a!==n&&s!==o||a===0&&za(e,r,t)||n===0&&za(e,i,t)||s===0&&za(r,e,i)||o===0&&za(r,t,i))}function za(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function Ba(e){return e>0?1:e<0?-1:0}function ag(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&zl(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function qi(e,t){return rt(e.prev,e,e.next)<0?rt(e,t,e.next)>=0&&rt(e,e.prev,t)>=0:rt(e,t,e.prev)<0||rt(e,e.next,t)<0}function ng(e,t){let r=e,i=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&a<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Bl(e,t){let r=new Os(e.i,e.x,e.y),i=new Os(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=a,a.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function Vl(e,t,r,i){let a=new Os(e,t,r);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Yi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Os(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sg(e,t,r,i){let a=0;for(let n=t,s=r-i;n<r;n+=i)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var bi=class Eh{static area(t){let r=t.length,i=0;for(let a=r-1,n=0;n<r;a=n++)i+=t[a].x*t[n].y-t[n].x*t[a].y;return i*.5}static isClockWise(t){return Eh.area(t)<0}static triangulateShape(t,r){let i=[],a=[],n=[];kl(t),Hl(i,t);let s=t.length;r.forEach(kl);for(let l=0;l<r.length;l++)a.push(s),s+=r[l].length,Hl(i,r[l]);let o=Wm.triangulate(i,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function kl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Hl(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var Zi=class Th extends kt{constructor(t=new Yt([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(n,2)),this.computeVertexNormals();function s(o){let l=[],h=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,u=r.depth!==void 0?r.depth:1,d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,g=r.bevelSize!==void 0?r.bevelSize:f-.1,v=r.bevelOffset!==void 0?r.bevelOffset:0,m=r.bevelSegments!==void 0?r.bevelSegments:3,p=r.extrudePath,T=r.UVGenerator!==void 0?r.UVGenerator:og,x,E=!1,z,C,R,U;p&&(x=p.getSpacedPoints(c),E=!0,d=!1,z=p.computeFrenetFrames(c,!1),C=new L,R=new L,U=new L),d||(m=0,f=0,g=0,v=0);let M=o.extractPoints(h),S=M.shape,A=M.holes;if(!bi.isClockWise(S)){S=S.reverse();for(let ee=0,he=A.length;ee<he;ee++){let w=A[ee];bi.isClockWise(w)&&(A[ee]=w.reverse())}}let D=bi.triangulateShape(S,A),F=S;for(let ee=0,he=A.length;ee<he;ee++){let w=A[ee];S=S.concat(w)}function k(ee,he,w){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(he,w)}let K=S.length,G=D.length;function ae(ee,he,w){let Ee,oe,_e,ie=ee.x-he.x,De=ee.y-he.y,xe=w.x-ee.x,be=w.y-ee.y,b=ie*ie+De*De,_=ie*be-De*xe;if(Math.abs(_)>Number.EPSILON){let O=Math.sqrt(b),Q=Math.sqrt(xe*xe+be*be),te=he.x-De/O,J=he.y+ie/O,Le=w.x-be/Q,fe=w.y+xe/Q,X=((Le-te)*be-(fe-J)*xe)/(ie*be-De*xe);Ee=te+ie*X-ee.x,oe=J+De*X-ee.y;let re=Ee*Ee+oe*oe;if(re<=2)return new pe(Ee,oe);_e=Math.sqrt(re/2)}else{let O=!1;ie>Number.EPSILON?xe>Number.EPSILON&&(O=!0):ie<-Number.EPSILON?xe<-Number.EPSILON&&(O=!0):Math.sign(De)===Math.sign(be)&&(O=!0),O?(Ee=-De,oe=ie,_e=Math.sqrt(b)):(Ee=ie,oe=De,_e=Math.sqrt(b/2))}return new pe(Ee/_e,oe/_e)}let q=[];for(let ee=0,he=F.length,w=he-1,Ee=ee+1;ee<he;ee++,w++,Ee++)w===he&&(w=0),Ee===he&&(Ee=0),q[ee]=ae(F[ee],F[w],F[Ee]);let le=[],me,Ie=q.concat();for(let ee=0,he=A.length;ee<he;ee++){let w=A[ee];me=[];for(let Ee=0,oe=w.length,_e=oe-1,ie=Ee+1;Ee<oe;Ee++,_e++,ie++)_e===oe&&(_e=0),ie===oe&&(ie=0),me[Ee]=ae(w[Ee],w[_e],w[ie]);le.push(me),Ie=Ie.concat(me)}for(let ee=0;ee<m;ee++){let he=ee/m,w=f*Math.cos(he*Math.PI/2),Ee=g*Math.sin(he*Math.PI/2)+v;for(let oe=0,_e=F.length;oe<_e;oe++){let ie=k(F[oe],q[oe],Ee);Te(ie.x,ie.y,-w)}for(let oe=0,_e=A.length;oe<_e;oe++){let ie=A[oe];me=le[oe];for(let De=0,xe=ie.length;De<xe;De++){let be=k(ie[De],me[De],Ee);Te(be.x,be.y,-w)}}}let ze=g+v;for(let ee=0;ee<K;ee++){let he=d?k(S[ee],Ie[ee],ze):S[ee];E?(R.copy(z.normals[0]).multiplyScalar(he.x),C.copy(z.binormals[0]).multiplyScalar(he.y),U.copy(x[0]).add(R).add(C),Te(U.x,U.y,U.z)):Te(he.x,he.y,0)}for(let ee=1;ee<=c;ee++)for(let he=0;he<K;he++){let w=d?k(S[he],Ie[he],ze):S[he];E?(R.copy(z.normals[ee]).multiplyScalar(w.x),C.copy(z.binormals[ee]).multiplyScalar(w.y),U.copy(x[ee]).add(R).add(C),Te(U.x,U.y,U.z)):Te(w.x,w.y,u/c*ee)}for(let ee=m-1;ee>=0;ee--){let he=ee/m,w=f*Math.cos(he*Math.PI/2),Ee=g*Math.sin(he*Math.PI/2)+v;for(let oe=0,_e=F.length;oe<_e;oe++){let ie=k(F[oe],q[oe],Ee);Te(ie.x,ie.y,u+w)}for(let oe=0,_e=A.length;oe<_e;oe++){let ie=A[oe];me=le[oe];for(let De=0,xe=ie.length;De<xe;De++){let be=k(ie[De],me[De],Ee);E?Te(be.x,be.y+x[c-1].y,x[c-1].x+w):Te(be.x,be.y,u+w)}}}Z(),ne();function Z(){let ee=a.length/3;if(d){let he=0,w=K*he;for(let Ee=0;Ee<G;Ee++){let oe=D[Ee];de(oe[2]+w,oe[1]+w,oe[0]+w)}he=c+m*2,w=K*he;for(let Ee=0;Ee<G;Ee++){let oe=D[Ee];de(oe[0]+w,oe[1]+w,oe[2]+w)}}else{for(let he=0;he<G;he++){let w=D[he];de(w[2],w[1],w[0])}for(let he=0;he<G;he++){let w=D[he];de(w[0]+K*c,w[1]+K*c,w[2]+K*c)}}i.addGroup(ee,a.length/3-ee,0)}function ne(){let ee=a.length/3,he=0;Ae(F,he),he+=F.length;for(let w=0,Ee=A.length;w<Ee;w++){let oe=A[w];Ae(oe,he),he+=oe.length}i.addGroup(ee,a.length/3-ee,1)}function Ae(ee,he){let w=ee.length;for(;--w>=0;){let Ee=w,oe=w-1;oe<0&&(oe=ee.length-1);for(let _e=0,ie=c+m*2;_e<ie;_e++){let De=K*_e,xe=K*(_e+1),be=he+Ee+De,b=he+oe+De,_=he+oe+xe,O=he+Ee+xe;Ue(be,b,_,O)}}}function Te(ee,he,w){l.push(ee),l.push(he),l.push(w)}function de(ee,he,w){Be(ee),Be(he),Be(w);let Ee=a.length/3,oe=T.generateTopUV(i,a,Ee-3,Ee-2,Ee-1);Fe(oe[0]),Fe(oe[1]),Fe(oe[2])}function Ue(ee,he,w,Ee){Be(ee),Be(he),Be(Ee),Be(he),Be(w),Be(Ee);let oe=a.length/3,_e=T.generateSideWallUV(i,a,oe-6,oe-3,oe-2,oe-1);Fe(_e[0]),Fe(_e[1]),Fe(_e[3]),Fe(_e[1]),Fe(_e[2]),Fe(_e[3])}function Be(ee){a.push(l[ee*3+0]),a.push(l[ee*3+1]),a.push(l[ee*3+2])}function Fe(ee){n.push(ee.x),n.push(ee.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return lg(r,i,t)}static fromJSON(t,r){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=r[t.shapes[n]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Is[a.type]().fromJSON(a)),new Th(i,t.options)}},og={generateTopUV:function(e,t,r,i,a){let n=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],h=t[a*3],c=t[a*3+1];return[new pe(n,s),new pe(o,l),new pe(h,c)]},generateSideWallUV:function(e,t,r,i,a,n){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],h=t[i*3],c=t[i*3+1],u=t[i*3+2],d=t[a*3],f=t[a*3+1],g=t[a*3+2],v=t[n*3],m=t[n*3+1],p=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new pe(s,1-l),new pe(h,1-u),new pe(d,1-g),new pe(v,1-p)]:[new pe(o,1-l),new pe(c,1-u),new pe(f,1-g),new pe(m,1-p)]}};function lg(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let n=e[i];r.shapes.push(n.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var Va=class bh extends kt{constructor(t=new Yt([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let i=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(n,3)),this.setAttribute("uv",new dt(s,2));function h(c){let u=a.length/3,d=c.extractPoints(r),f=d.shape,g=d.holes;bi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];bi.isClockWise(T)===!0&&(g[m]=T.reverse())}let v=bi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];a.push(T.x,T.y,0),n.push(0,0,1),s.push(T.x,T.y)}for(let m=0,p=v.length;m<p;m++){let T=v[m],x=T[0]+u,E=T[1]+u,z=T[2]+u;i.push(x,E,z),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return hg(r,t)}static fromJSON(t,r){let i=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=r[t.shapes[a]];i.push(s)}return new bh(i,t.curveSegments)}};function hg(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,i=e.length;r<i;r++){let a=e[r];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var At=class extends Vi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cg=class extends At{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ka(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function ug(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ha=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],a=t[r-1];r:{e:{let n;t:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=i,i=t[++r],e<i)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=t[--r-1],e>=a)break e}n=r,r=0;break t}break r}for(;r<n;){let s=r+n>>>1;e<t[s]?n=s:r=s+1}if(i=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i;for(let n=0;n!==i;++n)t[n]=r[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dg=class extends Ha{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(e,t,r){let i=this.parameterPositions,a=e-2,n=e+1,s=i[a],o=i[n];if(s===void 0)switch(this.getSettings_().endingStart){case vo:a=e,s=2*t-r;break;case _o:a=i.length-2,s=t+i[a]-i[a+1];break;default:a=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case vo:n=e,o=2*r-t;break;case _o:n=1,o=r+i[1]-i[0];break;default:n=e-1,o=t}let l=(r-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(r-t)/(i-t),g=f*f,v=g*f,m=-u*v+2*u*g-u*f,p=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*f+1,T=(-1-d)*v+(1.5+d)*g+.5*f,x=d*v-d*g;for(let E=0;E!==s;++E)a[E]=m*n[h+E]+p*n[l+E]+T*n[o+E]+x*n[c+E];return a}},pg=class extends Ha{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(r-t)/(i-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},fg=class extends Ha{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},hr=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ka(t,this.TimeBufferType),this.values=ka(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:ka(e.times,Array),values:ka(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case Gn:t=this.InterpolantFactoryMethodLinear;break;case Wn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return Gn;case this.InterpolantFactoryMethodSmooth:return Wn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,a=0,n=i-1;for(;a!==i&&r[a]<e;)++a;for(;n!==-1&&r[n]>t;)--n;if(++n,a!==0||n!==i){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=r.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(i!==void 0&&ug(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===Wn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,u=c-r,d=c+r;for(let f=0;f!==r;++f){let g=t[c+f];if(g!==t[u+f]||g!==t[d+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*r,u=n*r;for(let d=0;d!==r;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*r,o=n*r,l=0;l!==r;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};hr.prototype.TimeBufferType=Float32Array,hr.prototype.ValueBufferType=Float32Array,hr.prototype.DefaultInterpolation=Gn;var Ji=class extends hr{constructor(e,t,r){super(e,t,r)}};Ji.prototype.ValueTypeName="bool",Ji.prototype.ValueBufferType=Array,Ji.prototype.DefaultInterpolation=ca,Ji.prototype.InterpolantFactoryMethodLinear=void 0,Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var mg=class extends hr{};mg.prototype.ValueTypeName="color";var gg=class extends hr{};gg.prototype.ValueTypeName="number";var vg=class extends Ha{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let h=l+s;l!==h;l+=4)li.slerpFlat(a,0,n,l-s,n,l,o);return a}},Gl=class extends hr{InterpolantFactoryMethodLinear(e){return new vg(this.times,this.values,this.getValueSize(),e)}};Gl.prototype.ValueTypeName="quaternion",Gl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends hr{constructor(e,t,r){super(e,t,r)}};Ki.prototype.ValueTypeName="string",Ki.prototype.ValueBufferType=Array,Ki.prototype.DefaultInterpolation=ca,Ki.prototype.InterpolantFactoryMethodLinear=void 0,Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var _g=class extends hr{};_g.prototype.ValueTypeName="vector";var xg=class{constructor(e,t,r){let i=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){s++,a===!1&&i.onStart!==void 0&&i.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,i.onProgress!==void 0&&i.onProgress(h,n,s),n===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],f=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null}}},yg=new xg,Mg=class{constructor(e){this.manager=e!==void 0?e:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Mg.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zs=new at,Wl=new L,Xl=new L,jl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zs),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ql=new at,$i=new L,Bs=new L,Sg=class extends jl{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,i=this.matrix,a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),r.position.copy($i),Bs.copy(r.position),Bs.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Bs),r.updateMatrixWorld(),i.makeTranslation(-$i.x,-$i.y,-$i.z),ql.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql)}},Eg=class extends Fs{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new Sg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tg=class extends jl{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yl=class extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zl=class extends Fs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Vs="\\[\\]\\.:\\/",bg=new RegExp("["+Vs+"]","g"),ks="[^"+Vs+"]",wg="[^"+Vs.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",ks),Rg=/(WCOD+)?/.source.replace("WCOD",wg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ks),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ks),Lg=new RegExp("^"+Ag+Rg+Cg+Pg+"$"),Ng=["material","materials","bones","map"],Ig=class{constructor(e,t,r){let i=r||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},nt=class Ai{constructor(t,r,i){this.path=r,this.parsedPath=i||Ai.parseTrackName(r),this.node=Ai.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new Ai.Composite(t,r,i):new Ai(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(t){let r=Lg.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=i.nodeName.substring(a+1);Ng.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)t[r++]=i[a]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,n=r.propertyIndex;if(t||(t=Ai.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=Ig,nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jg=new Float32Array(1),Jl=new at,Ug=class{constructor(e,t,r=0,i=1/0){this.ray=new Uo(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jl),this}intersectObject(e,t=!0,r=[]){return Hs(e,this,r,t),r.sort(Kl),r}intersectObjects(e,t=!0,r=[]){for(let i=0,a=e.length;i<a;i++)Hs(e[i],this,r,t);return r.sort(Kl),r}};function Kl(e,t){return e.distance-t.distance}function Hs(e,t,r,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,r)===!1&&(a=!1),a===!0&&i===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Hs(n[s],t,r,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Qi=new L;function Lt(e,t,r,i,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;Qi.copy(t),Qi[i]=0,Qi.normalize();let h=.5*s/(s+o),c=1-Qi.angleTo(e)/l;return Math.sign(Qi[r])===1?c*h:o/(s+o)+h+h*(1-c)}var Ga=class extends br{constructor(e=1,t=1,r=1,i=2,a=.1){if(i=i*2+1,a=Math.min(e/2,t/2,r/2,a),super(1,1,1,i,i,i),i===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let s=new L,o=new L,l=new L(e,t,r).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,f=new L,g=.5/i;for(let v=0,m=0;v<h.length;v+=3,m+=2)switch(s.fromArray(h,v),o.copy(s),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(s.x)+o.x*a,h[v+1]=l.y*Math.sign(s.y)+o.y*a,h[v+2]=l.z*Math.sign(s.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:f.set(1,0,0),u[m+0]=Lt(f,o,"z","y",a,r),u[m+1]=1-Lt(f,o,"y","z",a,t);break;case 1:f.set(-1,0,0),u[m+0]=1-Lt(f,o,"z","y",a,r),u[m+1]=1-Lt(f,o,"y","z",a,t);break;case 2:f.set(0,1,0),u[m+0]=1-Lt(f,o,"x","z",a,e),u[m+1]=Lt(f,o,"z","x",a,r);break;case 3:f.set(0,-1,0),u[m+0]=1-Lt(f,o,"x","z",a,e),u[m+1]=1-Lt(f,o,"z","x",a,r);break;case 4:f.set(0,0,1),u[m+0]=1-Lt(f,o,"x","y",a,e),u[m+1]=1-Lt(f,o,"y","x",a,t);break;case 5:f.set(0,0,-1),u[m+0]=Lt(f,o,"x","y",a,e),u[m+1]=1-Lt(f,o,"y","x",a,t);break}}};function Dg(e,t=!1){let r=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new kt,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(r!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;n[f]===void 0&&(n[f]=[]),n[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!a.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.morphAttributes[f])}if(t){let f;if(r)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(r){let c=0,u=[];for(let d=0;d<e.length;++d){let f=e[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in n){let u=$l(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in s){let u=s[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<s[c].length;++v)f.push(s[c][v][d]);let g=$l(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function $l(e){let t,r,i,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(r===void 0&&(r=c.itemSize),r!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*r}let s=new t(n),o=new Ct(s,r,i),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/r;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<r;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else s.set(c.array,l);l+=c.count*r}return a!==void 0&&(o.gpuType=a),o}var ea=(e,t,r)=>Math.max(t,Math.min(r,e)),_t=(e,t,r)=>e+(t-e)*r,Ql=e=>e*e*(3-2*e);function eh(e,t=0){let r=new As;r.background=new He(526346);let i=(s,o,l,h,c,u)=>{let d=new lt(new lr(s,o),new Tr({color:new He(u,u,u),side:It}));d.position.set(l,h,c),d.lookAt(0,0,0),r.add(d)};i(10,2.4,0,7,4,9),i(1.6,8,-8,1,3,6),i(1,7,8,-1,4,3.4),i(8,1,0,-6,5,1.2),t&&i(14,10,0,1,10,t);let a=new Ss(e),n=a.fromScene(r,.025).texture;return a.dispose(),n}function th(e=256,t=3){let r=document.createElement("canvas");r.width=r.height=e;let i=r.getContext("2d"),a=i.createImageData(e,e);for(let s=0;s<a.data.length;s+=4){let o=120+Math.random()*90;a.data[s]=a.data[s+1]=a.data[s+2]=o,a.data[s+3]=255}i.putImageData(a,0,0);let n=new Xr(r);return n.wrapS=n.wrapT=Li,n.repeat.set(t,t),n}var cr=(e,t,r,i,a=0,n=0,s=0)=>(a&&e.rotateX(a),n&&e.rotateY(n),s&&e.rotateZ(s),e.translate(t,r,i),e),Og=e=>e.index?e.toNonIndexed():e,Wa=e=>{let t=e.map(Og);return t.forEach(r=>{Object.keys(r.attributes).forEach(i=>{i!=="position"&&i!=="normal"&&i!=="uv"&&r.deleteAttribute(i)})}),Dg(t)};function Xa(e,t,r,i,a,n,s,o,l){return e.moveTo(t+n,r),e.lineTo(i-s,r),e.quadraticCurveTo(i,r,i,r+s),e.lineTo(i,a-o),e.quadraticCurveTo(i,a,i-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,r+n),e.quadraticCurveTo(t,r,t+n,r),e}function Rr(e,t,r,i=0,a=0){return Xa(new Yt,i-e/2,a-t/2,i+e/2,a+t/2,r,r,r,r)}function rh(e,t,r,i=0,a=0){return Xa(new Ar,i-e/2,a-t/2,i+e/2,a+t/2,r,r,r,r)}var ur=18.7,dr=10.3,ja=2.5,Fg={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},Ht={w:7.9,h:4.9,y:-.15},qa={x:5.25,y:-.15},Cr=(e,t,r=0)=>{let{x0:i,x1:a,y0:n,y1:s,outer:o,inner:l}=Fg,h=i-r,c=a+r,u=n-r,d=s+r,f=o+r*.6,g=l+r*.6,v=new e;return t<0?Xa(v,-c,u,-h,d,f,g,g,f):Xa(v,h,u,c,d,g,f,f,g)};function zg(){let e=2048/ur,t=1128/dr,r=p=>(p+ur/2)*e,i=p=>(dr/2-p)*t,a=()=>{let p=document.createElement("canvas");return p.width=2048,p.height=1128,p},n=a(),s=a(),o=a(),l=n.getContext("2d"),h=s.getContext("2d"),c=o.getContext("2d"),u=p=>{let T=document.createElement("canvas");return T.width=T.height=12,p(T.getContext("2d")),T};l.fillStyle=l.createPattern(u(p=>{p.fillStyle="#050505",p.fillRect(0,0,12,12),p.fillStyle="#121212",p.fillRect(1,1,10,10),p.fillStyle="#1f1f1f",p.fillRect(1,1,10,2),p.fillRect(1,1,2,10)}),"repeat"),l.fillRect(0,0,2048,1128),h.fillStyle=h.createPattern(u(p=>{p.fillStyle="#242424",p.fillRect(0,0,12,12),p.fillStyle="#c8c8c8",p.fillRect(2,2,8,8)}),"repeat"),h.fillRect(0,0,2048,1128),c.fillStyle="#a8a8a8",c.fillRect(0,0,2048,1128);let d=p=>{p.beginPath(),p.roundRect(r(-9.15),i(2.6),18.3*e,5.5*t,2.2*e),p.fill()};l.fillStyle="#0b0b0b",d(l),h.fillStyle="#808080",d(h),c.fillStyle="#5c5c5c",d(c);let f=3.5;l.fillStyle="#0e0e0e",l.fillRect(0,0,2048,i(f)),h.fillStyle="#909090",h.fillRect(0,0,2048,i(f)),c.fillStyle="#707070",c.fillRect(0,0,2048,i(f)),l.fillStyle="#050505",l.fillRect(0,i(f),2048,7),l.fillStyle="#242424",l.fillRect(0,i(f)-3,2048,3),h.fillStyle="#000",h.fillRect(0,i(f),2048,8);let g='"Inter Tight", Arial, sans-serif',v=(p,T)=>{p.fillStyle=T,p.font=`500 37px ${g}`,p.textBaseline="middle","letterSpacing"in p&&(p.letterSpacing="4px"),p.textAlign="right",p.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),i(4.35)),p.textAlign="left",p.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),i(4.35)),p.beginPath(),p.moveTo(r(0),i(4.72)),p.lineTo(r(.34),i(4.05)),p.lineTo(r(-.34),i(4.05)),p.closePath(),p.fill()};v(l,"#3a3a3a"),v(h,"#f0f0f0");for(let p=0;p<420;p++){l.globalAlpha=.02+Math.random()*.05,l.strokeStyle="#fff",l.lineWidth=.6+Math.random()*.9;let T=Math.random()*2048,x=Math.random()*1128,E=Math.random()*6.28,z=10+Math.random()*120;l.beginPath(),l.moveTo(T,x),l.lineTo(T+Math.cos(E)*z,x+Math.sin(E)*z),l.stroke()}for(let p=0;p<900;p++)l.globalAlpha=.05+Math.random()*.12,l.fillStyle="#b8b8b8",l.fillRect(Math.random()*2048,Math.random()*1128,1+Math.random()*2,1+Math.random()*2);l.globalAlpha=1;let m=(p,T)=>{let x=new Xr(p);return T&&(x.colorSpace=ut),x.anisotropy=8,x};return{map:m(n,!0),bump:m(s),rough:m(o)}}function Bg(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let i=4;i<128;i+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,i,0,6.2832),t.stroke();let r=new Xr(e);return r.colorSpace=ut,r}function ih(e){let t=ja/2,r=zg(),i=new At({map:r.map,bumpMap:r.bump,bumpScale:1.2,roughnessMap:r.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new At({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:th(256,5)}),n=new At({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),s=new At({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new At({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new At({map:Bg(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new cg({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=cr(new Ga(ur,dr,ja-c,3,.14),0,0,-c/2),d=Rr(ur-.06,dr-.06,.2);d.holes.push(Cr(Ar,-1),Cr(Ar,1));let f=new Zi(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=f.attributes.position,v=f.attributes.uv;for(let A=0;A<g.count;A++)v.setXY(A,(g.getX(A)+ur/2)/ur,(g.getY(A)+dr/2)/dr);f.translate(0,0,t-c);let m=(A,D)=>{let F=A;return F.holes.push(D),new Zi(F,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},p=[cr(m(Cr(Yt,-1,.16),Cr(Ar,-1)),0,0,t),cr(m(Cr(Yt,1,.16),Cr(Ar,1)),0,0,t),cr(m(Rr(Ht.w+.36,Ht.h+.36,.16,0,Ht.y),rh(Ht.w+.06,Ht.h+.06,.08,0,Ht.y)),0,0,t),cr(new br(ur-.5,.09,.06),0,3.5,t+.02)],T=new Yt;T.absarc(0,0,.98,0,Math.PI*2,!1);let x=new Ar;x.absarc(0,0,.6,0,Math.PI*2,!0),T.holes.push(x);let E=[new Zi(T,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let A=0;A<6;A++){let D=A/6*Math.PI*2;E.push(cr(new br(.2,.44,.1),Math.cos(D)*.46,Math.sin(D)*.46,.05,0,0,D+Math.PI/2))}E.push(cr(new Us(.06,.06,.08,12),0,0,.04,Math.PI/2));let z=new Ol(1,56),C=Wa([new Va(Cr(Yt,-1),12),new Va(Cr(Yt,1),12)]);C.translate(0,0,t+.012);let R=Rr(Ht.w,Ht.h,.06,0,0),U=new Va(R,6),M=U.attributes.position,S=U.attributes.uv;for(let A=0;A<M.count;A++)S.setXY(A,M.getX(A)/Ht.w+.5,M.getY(A)/Ht.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:f,front:i,lips:Wa(p),gloss:n,floor:cr(new lr(ur-.4,dr-.4),0,0,t-c+.004),cavity:s,hub:Wa(E),white:o,pack:z,packMat:l,glassGeo:C,glass:h,labelGeo:U,spineGeo:cr(new lr(16.6,1.72),0,-dr/2-.006,-.08,Math.PI/2),hit:new br(ur,dr,ja)}}function ah(e,t=0){let r=new Gi,i=(l,h)=>{let c=new lt(l,h);return r.add(c),c};i(e.body,e.plastic),i(e.floor,e.cavity),i(e.slab,e.front),i(e.lips,e.gloss);let a=[-qa.x,qa.x].map(l=>{let h=i(e.pack,e.packMat);h.position.set(l,qa.y,e.FRONT-e.WALL+.012);let c=i(e.hub,e.white);return c.position.set(l,qa.y,e.FRONT-e.WALL+.02),{pack:h,hub:c}});i(e.glassGeo,e.glass);let n=()=>new At({color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),s=i(e.labelGeo,n());s.position.set(0,Ht.y,e.FRONT+.008),s.rotation.z=t;let o=i(e.spineGeo,n());return{group:r,reels:a,label:s,spine:o}}function Vg(e){let t=document.createElement("canvas");t.width=t.height=12;let r=t.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0,12,12);let i=r.getImageData(0,0,12,12).data,a=0,n=[16,16,16];for(let l=0;l<i.length;l+=4){let h=i[l],c=i[l+1],u=i[l+2],d=Math.max(h,c,u),f=Math.min(h,c,u),g=d-f;g>a&&d>50&&(a=g,n=[h,c,u])}if(a<60)return"#141414";let s=Math.max(...n),o=135/s;return`rgb(${n.map(l=>Math.round(l*o)).join(",")})`}function nh(e,t,r){for(let i=0;i<700;i++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*r,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function sh(e,t,r,i,a){let n=r;for(e.font=`400 ${n}px ${a}`;e.measureText(t).width>i&&n>14;)n-=2,e.font=`400 ${n}px ${a}`;return n}function kg(e,t,r){let i=document.createElement("canvas");i.width=790,i.height=490;let a=i.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let n=getComputedStyle(document.body).fontFamily;if(e){let h=e.naturalWidth/e.naturalHeight,c=746/268,u=h>c?e.naturalHeight*c:e.naturalWidth,d=h>c?e.naturalHeight:e.naturalWidth/c;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-u)/2,(e.naturalHeight-d)/2,u,d,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(h=>{a.beginPath(),a.moveTo(24,h),a.lineTo(766,h),a.stroke()});let s='"DT Punk", cursive';a.fillStyle=r;let o=sh(a,t.name.toUpperCase(),66,640,s);a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${s}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${s}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${n}`,a.textBaseline="middle",["SP","LP","EP"].forEach((h,c)=>{let u=30+c*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(u,440,22,22),a.fillText(h,u+32,452)}),a.strokeStyle=r,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",nh(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over";let l=new Xr(i);return l.colorSpace=ut,l.anisotropy=8,l}function Hg(e,t){let r=document.createElement("canvas");r.width=1660,r.height=172;let i=r.getContext("2d");i.fillStyle="#e8e6df",i.fillRect(0,0,1660,172),i.fillStyle="#121212",i.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,n='"DT Punk", cursive';i.fillStyle="#efefe9",i.textBaseline="middle",i.font='400 92px "DT Punk", cursive',i.textAlign="center",i.fillText(e.code,75,172/2+6),i.textAlign="left",i.strokeStyle="#b6b3aa",i.lineWidth=2,i.beginPath(),i.moveTo(176,138),i.lineTo(1420,138),i.stroke(),i.fillStyle=t;let s=sh(i,e.name.toUpperCase(),112,1210,n);i.font=`400 ${s}px ${n}`,i.fillText(e.name.toUpperCase(),186,172/2+2),i.fillStyle="#3c3a35",i.font=`500 30px ${a}`,i.textAlign="right",i.fillText(e.kind,1630,172/2-22),i.font=`500 24px ${a}`,i.fillText("TRBN \xB7 SP 120",1630,172/2+24),nh(i,1660,172);let o=new Xr(r);return o.colorSpace=ut,o.anisotropy=8,o}function Gg(e,t=112){let r=e.length,i=e.map(([o])=>o.getSpacedPoints(t)),a=new Float32Array((t+1)*r*3),n=[];for(let o=0;o<=t;o++)if(e.forEach(([,l],h)=>a.set([i[h][o].x,i[h][o].y,l],(o*r+h)*3)),o<t)for(let l=0;l<r-1;l++){let h=o*r+l,c=h+1,u=h+r,d=u+1;n.push(h,c,u,c,d,u)}let s=new kt;return s.setAttribute("position",new Ct(a,3)),s.setIndex(n),s.computeVertexNormals(),s}function oh(e=1,t=6){let r=document.createElement("canvas");r.width=512,r.height=256;let i=r.getContext("2d");i.fillStyle="#7c7c7c",i.fillRect(0,0,512,256);for(let n=0;n<2600;n++){let s=90+Math.random()*90|0;i.fillStyle=`rgba(${s},${s},${s},${.1+Math.random()*.25})`,i.fillRect(Math.random()*512-80,Math.random()*256,40+Math.random()*260,1)}let a=new Xr(r);return a.wrapS=a.wrapT=Li,a.repeat.set(e,t),a}function Wg(e){let t=new Us(e,e*1.04,.13,96,1,!0),r=t.attributes.position;for(let n=0;n<r.count;n++){let s=Math.atan2(r.getZ(n),r.getX(n)),o=1+Math.sign(Math.sin(s*44))*.014;r.setX(n,r.getX(n)*o),r.setZ(n,r.getZ(n)*o)}t.computeVertexNormals(),t.rotateX(Math.PI/2);let i=new Yt;i.absarc(0,0,e*.9,0,Math.PI*2,!1);let a=new Zi(i,{depth:.02,bevelEnabled:!0,bevelSize:e*.08,bevelThickness:.02,bevelSegments:4,curveSegments:48});return a.translate(0,0,.055),Wa([t,a])}var lh={side:.4,top:.4,bottom:.98,tube:.62,open:.74};function hh(e){return{rim:new At({color:15000804,roughness:.13,metalness:1,envMap:e,envMapIntensity:1.8}),hood:new At({color:657930,roughness:.3,metalness:.62,envMap:e,envMapIntensity:1,side:It}),chrome:new At({color:13816530,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6}),dialFace:new At({color:10263708,roughness:.34,metalness:1,roughnessMap:oh(2,2),envMap:e,envMapIntensity:1.5}),slot:new At({color:131586,roughness:.6,envMap:e,envMapIntensity:.3})}}function ch(e,t,r,i,a=0,n=0){let s=Rr(e+i*2,t+i*2,r+i,a,n);return s.holes.push(rh(e,t,r,a,n)),new Zi(s,{depth:.012,bevelEnabled:!0,bevelSize:.022,bevelOffset:-.011,bevelThickness:.026,bevelSegments:7,curveSegments:28})}function uh(e,t,r,i,{frame:a=!0,details:n=!0}={}){let{rim:s,hood:o,chrome:l,dialFace:h,slot:c}=t,u=[],d=[],f=(U,M,S=0,A=0,D=0)=>{let F=new lt(U,M);return F.position.set(A,D,S),e.add(F),u.push(F),F},g=r/100,v=i/100,{side:m,top:p,bottom:T,tube:x,open:E}=lh,z=g-m*2,C=v-p-T,R=(T-p)/2;if(a){let U=z+.4,M=C+.36;f(ch(U,M,E,.06,0,R),s,0);let S=Rr(z+.12,C+.11,x+.05,0,R);f(Gg([[Rr(U,M,E,0,R),.01],[Rr(z+.26,C+.24,x+.08,0,R),-.13],[S,-.26],[Rr(z,C,x,0,R),-.34]]),o,0)}if(n){let U=-v/2+.375,M=g/2,S=(A,D)=>{let F=new Yt;F.absarc(0,0,A+.035,0,Math.PI*2,!1),f(new Va(F,40),c,.001,D,U);let k=f(Wg(A),l,.005,D,U),K=new lt(new Ol(A*.62,48),h);K.position.z=.1,k.add(K);let G=new lt(new br(A*.08,A*.36,.012),new Tr({color:16777215}));G.position.set(0,A*.66,.102),k.add(G),d.push(k)};if(S(.27,M-.55),S(.17,M-1.08),g>8){let A=M-2.14;f(new Ga(1.5,.14,.016,2,.007),c,.001,A,U+.19),f(new Ga(1.44,.018,.012,1,.005),l,.01,A,U+.145),[-.03,-.11,-.19].forEach(F=>f(new Ga(1.5,.026,.01,1,.004),c,.001,A,U+F));let D=f(new Us(.022,.022,.012,16),new Tr({color:16777215}),.008,A-.86,U+.19);D.rotation.x=Math.PI/2}}return{meshes:u,dials:d,w:g,h:v,sw:z,sh:C,sy:R,side:m,top:p,bottom:T}}var Xg="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",jg=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform vec2 size;uniform float power;
float h(float x){return fract(sin(x*91.17)*43758.5453);}
float n2(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
void main(){
 vec2 cc=vUv-.5;
 float asp=size.x/size.y;
 vec2 q=cc*2.;
 float d=dot(q,q)*.5;
 // The glass bulges towards you: straight lines bow outwards and the picture curves away at the sides.
 vec2 uv=.5+cc*(.91+d*.12+d*d*.05);
 float row=floor(uv.y*70.);
 float tear=(h(row+floor(time*18.))-.5)*glitch*.05*step(.52,h(row*.37+floor(time*11.)));
 float roll=mod(time*.07,1.2)-.1;
 float band=smoothstep(.028,.0,abs(uv.y-roll));
 uv.x+=tear+band*.0035*sin(uv.y*700.+time*30.);
 // Beams drift out of line towards the edge of a real tube.
 float split=.0004+d*.003+glitch*.0055;
 vec2 dir=normalize(cc+.0001);
 vec3 c=vec3(texture2D(map,uv+dir*split).r,texture2D(map,uv).g,texture2D(map,uv-dir*split).b);
 // Phosphor bloom from the picture's own light.
 c+=textureLod(map,uv,3.5).rgb*.15+textureLod(map,uv,5.).rgb*.1;
 c=toSRGB(max(c,0.));
 // Scan lines and the phosphor dots of the mask.
 vec2 px=vUv*size;
 c*=.94+.06*sin(uv.y*size.y*1.57);
 float dots=.5+.5*cos(px.x*2.0944)*cos(px.y*2.0944);
 c*=mix(.84,1.1,dots);
 c+=(n2(uv*size+time*60.)-.5)*(.018+glitch*.09);
 c+=band*(n2(uv*size*.5+time*40.)*.05);
 c*=.985+.015*sin(time*72.);
 // Dark at the sides and corners, where the glass turns away.
 float fall=clamp(1.-d*.54,0.,1.);
 c*=pow(fall,1.9)*1.1;
 // The picture stops on a pillow shape, not a rectangle: the sides of a real tube bulge.
 vec2 e=abs(cc*2.);
 float pillow=pow(pow(e.x,4.6)+pow(e.y,4.6),1./4.6);
 float edge=1.-smoothstep(.945,.985,pillow);
 c*=edge*power;
 // Glass: nearly black when off, a soft window high on the bulge, a long highlight along the curve.
 float glassMask=1.-smoothstep(1.,1.04,pillow);
 vec3 glass=vec3(.01)*glassMask;
 vec2 win=(vUv-vec2(.3,.8))*vec2(1.,1.9);
 float glare=smoothstep(.52,.0,length(win));
 glass+=vec3(.075)*glare*glare*glassMask;
 float sweep=smoothstep(.05,.0,abs(pillow-.86))*smoothstep(.1,.5,cc.y)*smoothstep(.45,.0,abs(cc.x+.1));
 glass+=vec3(.08)*sweep*glassMask;
 float rim=smoothstep(.02,.0,abs(pillow-.975));
 glass+=vec3(.05)*rim*step(.0,cc.y)*glassMask;
 gl_FragColor=vec4(c+glass,1.);
}`,qg="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",Yg=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;
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
}`;function Zg({host:e,stage:t,items:r,onHover:i,onOpen:a}){let n=document.createElement("canvas");n.className="tv-canvas",n.setAttribute("aria-hidden","true"),e.append(n);let s;try{s=new Cm({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return n.remove(),null}let o=Math.min(devicePixelRatio||1,1.6);s.setPixelRatio(o),s.outputColorSpace=ut,s.setClearColor(0,0);let l=eh(s),h=ih(l),c=new As;c.background=new He(131587),c.fog=new Pm(131587,40,96);let u=new Yl(16777215,1.5);u.position.set(-8,18,22),c.add(u);let d=new Et(30,1,1,200);d.position.set(0,0,40);let f=new Xt({vertexShader:qg,fragmentShader:Yg,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:null},b:{value:null},fade:{value:1},time:{value:0},focus:{value:new pe(.47,.55)}}}),g=new lt(new lr(2,2),f);g.frustumCulled=!1,g.renderOrder=-10,c.add(g);let v=new Zl(16777215,.32);c.add(v);let m=new He(16777215),p=new He(16777215),T=new He(16777215),x=new lt(new lr(1,1),new Tr({color:16777215,transparent:!0,opacity:0,fog:!1}));x.renderOrder=1,c.add(x);let E=new lt(new lr(1,1),new Tr({color:328965,fog:!1}));E.position.z=-.04,c.add(E);let z=r.map((X,re)=>{let H=$=>{let Me=Math.sin((re+1)*12.9898*$)*43758.5453;return Me-Math.floor(Me)};return{rx:H(1)-.5,ry:H(2)-.5,rz:H(3)-.5,wob:H(4)*6.28,tilt:(H(5)-.5)*.022,pile:H(6)-.5}}),C=r.map((X,re)=>{let H=ah(h,z[re].tilt),$=new lt(h.hit,new Tr({visible:!1}));return $.userData.index=re,H.group.add($),H.hit=$,c.add(H.group),H}),R=new Map,U=new Map,M=(X,re)=>{if(R.has(X)){let $=R.get(X);$.complete&&$.naturalWidth?re($):$.addEventListener("load",()=>re($),{once:!0});return}let H=new Image;H.decoding="async",H.src=r[X].src,R.set(X,H),H.addEventListener("load",()=>re(H),{once:!0})},S=document.fonts?.load?document.fonts.load('40px "DT Punk"').catch(()=>{}):Promise.resolve(),A=X=>{C[X].wanted||(C[X].wanted=!0,M(X,re=>S.then(()=>{let H=Vg(re),$=(Me,ye)=>{Me.material.map=ye,Me.material.emissiveMap=ye,Me.material.emissiveIntensity=.55,Me.material.color.set(16777215),Me.material.needsUpdate=!0};$(C[X].label,kg(re,r[X],H)),$(C[X].spine,Hg(r[X],H))})))},D=X=>{U.has(X)||(U.set(X,null),M(X,re=>{let H=new Xr(re);H.colorSpace=ut,H.anisotropy=8,H.generateMipmaps=!0,H.minFilter=$t;let $=document.createElement("canvas");$.width=$.height=6;let Me=$.getContext("2d",{willReadFrequently:!0});Me.drawImage(re,0,0,6,6);let ye=Me.getImageData(0,0,6,6).data,ge=0,we=0,Ne=0;for(let P=0;P<ye.length;P+=4)ge+=ye[P],we+=ye[P+1],Ne+=ye[P+2];let Xe=new He(ge/9180,we/9180,Ne/9180).convertSRGBToLinear();U.set(X,{texture:H,ratio:re.naturalWidth/re.naturalHeight,avg:Xe}),X===Be&&Fe(X)}))},F=new As,k=new Et(16,1,1,400),K=new Yl(16777215,1.6);K.position.set(-3,9,10),F.add(K),F.add(new Zl(16777215,.35));let G=new Eg(16777215,0,8,1.2);F.add(G);let ae=hh(l),q=new Xt({vertexShader:Xg,fragmentShader:jg,toneMapped:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},size:{value:new pe(1,1)},power:{value:0}}}),le=[],me=[],Ie=null,ze=0,Z=0,ne={x:0,y:0,w:1,h:1};function Ae(){le.forEach(j=>{F.remove(j),j.geometry.dispose()});let X=uh(F,ae,ze,Z,{details:!1});le=X.meshes,me=X.dials;let{h:re,sw:H,sh:$,sy:Me,side:ye,top:ge}=X;ne={x:ye*100,y:ge*100,w:H*100,h:$*100};let we=new lr(H+.06,$+.06,48,34),Ne=we.attributes.position;for(let j=0;j<Ne.count;j++){let ce=Ne.getX(j)/(H/2),ue=Ne.getY(j)/($/2);Ne.setZ(j,(1-(ce*ce+ue*ue)/2)*.16)}we.computeVertexNormals();let Xe=new lt(we,q);Xe.position.set(0,Me,-.36),F.add(Xe),le.push(Xe),G.position.set(0,Me,.1),G.distance=Math.max(H,$)*1.3,k.aspect=ze/Z;let P=re/2/Math.tan(k.fov*Math.PI/360);k.position.set(0,0,P),k.updateProjectionMatrix();let Y=Math.round(H*100*o),W=Math.round($*100*o);(!Ie||Ie.width!==Y||Ie.height!==W)&&(Ie?.dispose(),Ie=new vr(Y,W,{samples:4,type:$r,colorSpace:"",generateMipmaps:!0,minFilter:$t,magFilter:Dt})),q.uniforms.map.value=Ie.texture,q.uniforms.size.value.set(Y,W),d.aspect=H/$,d.updateProjectionMatrix(),Ue()}let Te=()=>{let X=80*Math.tan(d.fov*Math.PI/360);return{vh:X,vw:X*d.aspect}},de=4/3;function Ue(){let{vh:X,vw:re}=Te(),H=re*.62,$=X*.62,Me=H,ye=Me/de;ye>$&&(ye=$,Me=ye*de),x.scale.set(Me,ye,1),x.position.set(0,X*.06,0),E.scale.set(Me+.16,ye+.16,1),E.position.set(x.position.x,x.position.y,-.04),f.uniforms.focus.value.set(.5+x.position.x/re,.5+x.position.y/X)}let Be=-1;function Fe(X){let re=U.get(X);re&&(f.uniforms.a.value!==re.texture&&(f.uniforms.b.value=f.uniforms.a.value||re.texture,f.uniforms.a.value=re.texture,f.uniforms.fade.value=0),p.copy(re.avg).lerp(T,.3),x.material.map=re.texture,x.material.opacity=1,x.material.needsUpdate=!0,de=re.ratio,Ue())}function ee(){let X=n.clientWidth,re=n.clientHeight;!X||!re||(ze=X,Z=re,s.setSize(ze,Z,!1),Ae())}new ResizeObserver(ee).observe(n),ee();let he=(X,re,H)=>Ql(ea((H-X)/(re-X),0,1));function w(X,re,H,$,Me){let{vh:ye,vw:ge}=Te(),we=Ql(ea(1-Math.abs($)*1.15,0,1)),Ne=X.group,Xe=Math.sin(Me*5e-4+re.wob),P={x:ge*.275,y:-ye*.265,z:8,s:.52,rx:-.16+Xe*.012,ry:-.3+Math.cos(Me*4e-4)*.018,rz:.05},Y;if($>=0){let W=H%2?1:-1,j=1-$*4.2;Y={x:W*ge*.49,y:ye*.1+re.pile*1.2-$*.12,z:j,s:.46,rx:re.rx*.1,ry:-W*.92+re.ry*.08,rz:W*.03+re.rz*.04},Y={x:_t(Y.x,P.x,we),y:_t(Y.y,P.y,we),z:_t(Y.z,P.z,we),s:_t(Y.s,P.s,we),rx:_t(Y.rx,P.rx,we),ry:_t(Y.ry,P.ry,we),rz:_t(Y.rz,P.rz,we)}}else{let W=ja*.5,j=he(0,.9,-$),ce={x:-ge*.265+re.pile*.45,y:-ye*.19+($+1)*W,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+re.ry*.05,rz:re.rz*.022};Y={x:_t(P.x,ce.x,j),y:_t(P.y,ce.y,j)+Math.sin(j*Math.PI)*3,z:_t(P.z,ce.z,j),s:_t(P.s,ce.s,j),rx:_t(P.rx,ce.rx,j),ry:_t(P.ry,ce.ry,j),rz:_t(P.rz,ce.rz,j)}}Ne.position.set(Y.x,Y.y,Y.z),Ne.scale.setScalar(Y.s),Ne.rotation.set(Y.rx,Y.ry,Y.rz),Ne.visible=$>-8&&$<12&&Y.y>-ye*.85}let Ee=new Ug,oe=new pe,_e=null,ie=-2,De=!1,xe=()=>{ie!==-2&&(ie=-2,i(-1),t.style.cursor="")},be=()=>{if(De=!1,!_e){xe();return}let X=(_e.x-ne.x)/ne.w,re=(_e.y-ne.y)/ne.h;if(X<0||X>1||re<0||re>1){xe();return}oe.set(X*2-1,-(re*2-1)),Ee.setFromCamera(oe,d);let H=Ee.intersectObjects([...C.filter(Me=>Me.group.visible).map(Me=>Me.hit),x],!1)[0],$=H?H.object===x?-1:H.object.userData.index:-2;$!==ie&&(ie=$,i($>=0?$:-1),t.style.cursor=$===-2?"":"pointer")};t.addEventListener("pointermove",X=>{let re=n.getBoundingClientRect();_e={x:X.clientX-re.left,y:X.clientY-re.top},De=!0}),t.addEventListener("pointerleave",()=>{_e=null,De=!0}),t.addEventListener("click",X=>{X.target.closest("a, button")||(be(),ie!==-2&&a(ie===-1?Be:ie))});let b=1,_=0,O=0,Q=0,te=0,J=0,Le=!1,fe=!0;return{frame:(X,re,H,$=1)=>{if(!fe)return;let Me=X-Q,ye=Math.abs(Me);Q=X,O+=Me*11+H*9e-4;let ge=ea(X/Math.max(1,r.length-1),0,1);C.forEach((Y,W)=>{let j=W-X;if(j>-7&&j<7&&A(W),w(Y,z[W],W,j,re),Math.abs(j)<3){Y.reels[0].hub.rotation.z=-O,Y.reels[1].hub.rotation.z=-O*.82;let ce=_t(3.15,1.75,ge),ue=_t(1.75,3.15,ge);Y.reels[0].pack.scale.set(ce,ce,1),Y.reels[1].pack.scale.set(ue,ue,1)}}),me.forEach((Y,W)=>{Y.rotation.z=-X*(W?1.1:.55)});let we=ea(Math.round(X),0,r.length-1);if(D(we),D(Math.min(r.length-1,we+1)),D(Math.max(0,we-1)),we!==Be){let Y=Be<0;Be=we,Y||(b=1),Fe(we)}b=Math.max(b*Math.exp(-H/170),ea(ye*26,0,.7)),_||(_=re);let Ne=Math.min(1,(re-_)/700);m.lerp(p,1-Math.exp(-H/500)),v.color.copy(m),G.color.copy(m),G.intensity=16*Ne,f.uniforms.time.value=re/1e3,f.uniforms.fade.value=Math.min(1,f.uniforms.fade.value+H/900),q.uniforms.time.value=re/1e3,q.uniforms.glitch.value=b,q.uniforms.power.value=1-(1-Ne)**3;let Xe=_e?_e.x/ze-.5:0,P=_e?_e.y/Z-.5:0;te+=(Xe-te)*(1-Math.exp(-H/260)),J+=(P-J)*(1-Math.exp(-H/260)),d.position.x=te*1.6,d.position.y=-J*1,d.lookAt(0,0,0),De&&be(),s.toneMapping=Kt,s.setRenderTarget(Ie),s.clear(),s.render(c,d),s.setRenderTarget(null),s.toneMapping=io,s.clear(),s.render(F,k),n.style.opacity=String(Math.min(Ne*3,1)*$),Le||(Le=!0,t.classList.add("tv-on"))},show(X){fe=X,n.style.display=X?"":"none",X&&ee()}}}export{lh as SET,uh as addSet,oh as brushedTexture,Zg as default,th as grainTexture,ah as makeTape,ch as ringGeometry,hh as setMaterials,eh as studioEnv,ih as tapeParts};
