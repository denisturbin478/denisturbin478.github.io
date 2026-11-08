var Cc=0,ko=1,Pc=2,Vo=1,Lc=2,fi=3,Ri=0,Lt=1,ii=2,Ci=0,dr=1,Wo=2,Xo=3,jo=4,Nc=5,Ji=100,Ic=101,Uc=102,Dc=103,Oc=104,Fc=200,zc=201,Bc=202,Hc=203,Cn=204,Pn=205,Gc=206,kc=207,Vc=208,Wc=209,Xc=210,jc=211,qc=212,Yc=213,Jc=214,Ln=0,Nn=1,In=2,pr=3,Un=4,Dn=5,On=6,Fn=7,qo=0,Zc=1,$c=2,ri=0,Kc=1,Qc=2,eu=3,tu=4,iu=5,ru=6,au=7,Yo=300,fr=301,mr=302,zn=303,Bn=304,Ca=306,Pa=1e3,Zi=1001,Hn=1002,Ot=1003,nu=1004,La=1005,qt=1006,Gn=1007,mi=1008,gi=1009,Jo=1010,Zo=1011,ea=1012,kn=1013,$i=1014,ai=1015,gr=1016,Vn=1017,Wn=1018,vr=1020,$o=35902,Ko=1021,Qo=1022,Yt=1023,el=1024,tl=1025,_r=1026,xr=1027,Xn=1028,jn=1029,il=1030,qn=1031,Yn=1033,Na=33776,Ia=33777,Ua=33778,Da=33779,Jn=35840,Zn=35841,$n=35842,Kn=35843,Qn=36196,es=37492,ts=37496,is=37808,rs=37809,as=37810,ns=37811,ss=37812,os=37813,ls=37814,hs=37815,cs=37816,us=37817,ds=37818,ps=37819,fs=37820,ms=37821,Oa=36492,gs=36494,vs=36495,rl=36283,_s=36284,xs=36285,ys=36286,Fa=2300,Ms=2301,Ss=2302,al=2400,nl=2401,sl=2402,su=3200,ou=3201,ol=0,lu=1,Pi="",ut="srgb",yr="srgb-linear",za="linear",et="srgb",Mr=7680,ll=519,hu=512,cu=513,uu=514,hl=515,du=516,pu=517,fu=518,mu=519,cl=35044,Es=35048,ul="300 es",vi=2e3,Ba=2001,Sr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ts=Math.PI/180,bs=180/Math.PI;function Er(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wt[e&255]+wt[e>>8&255]+wt[e>>16&255]+wt[e>>24&255]+"-"+wt[t&255]+wt[t>>8&255]+"-"+wt[t>>16&15|64]+wt[t>>24&255]+"-"+wt[i&63|128]+wt[i>>8&255]+"-"+wt[i>>16&255]+wt[i>>24&255]+wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]).toLowerCase()}function Mt(e,t,i){return Math.max(t,Math.min(i,e))}function gu(e,t){return(e%t+t)%t}function ws(e,t,i){return(1-i)*e+i*t}function ta(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Ce=class lc{constructor(t=0,i=0){lc.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class hc{constructor(t,i,r,a,n,s,o,l,h){hc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],v=a[0],m=a[3],f=a[6],y=a[1],_=a[4],T=a[7],B=a[2],A=a[5],C=a[8];return n[0]=s*v+o*y+l*B,n[3]=s*m+o*_+l*A,n[6]=s*f+o*T+l*C,n[1]=h*v+c*y+u*B,n[4]=h*m+c*_+u*A,n[7]=h*f+c*T+u*C,n[2]=d*v+p*y+g*B,n[5]=d*m+p*_+g*A,n[8]=d*f+p*T+g*C,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,p=h*n-s*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*r)*v,t[2]=(o*r-a*s)*v,t[3]=d*v,t[4]=(c*i-a*l)*v,t[5]=(a*n-o*i)*v,t[6]=p*v,t[7]=(r*l-h*i)*v,t[8]=(s*i-r*n)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(As.makeScale(t,i)),this}rotate(t){return this.premultiply(As.makeRotation(-t)),this}translate(t,i){return this.premultiply(As.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},As=new $e;function dl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ha(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function vu(){let e=Ha("canvas");return e.style.display="block",e}var pl={};function ia(e){e in pl||(pl[e]=!0,console.warn(e))}function _u(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function xu(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yu(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ke={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(e,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===et&&(e.r=_i(e.r),e.g=_i(e.g),e.b=_i(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===et&&(e.r=Tr(e.r),e.g=Tr(e.g),e.b=Tr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Pi?za:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function _i(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Tr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var fl=[.64,.33,.3,.6,.15,.06],ml=[.2126,.7152,.0722],gl=[.3127,.329],vl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[yr]:{primaries:fl,whitePoint:gl,transfer:za,toXYZ:vl,fromXYZ:_l,luminanceCoefficients:ml,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:fl,whitePoint:gl,transfer:et,toXYZ:vl,fromXYZ:_l,luminanceCoefficients:ml,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}});var br,Mu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Ha("canvas")),br.width=e.width,br.height=e.height;let i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ha("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=_i(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Su=0,xl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Rs(r[n].image)):a.push(Rs(r[n]))}else a=Rs(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Rs(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Mu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eu=0,Gt=class wn extends Sr{constructor(t=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=Zi,a=Zi,n=qt,s=mi,o=Yt,l=gi,h=wn.DEFAULT_ANISOTROPY,c=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Er(),this.name="",this.source=new xl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case Hn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case Hn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null,Gt.DEFAULT_MAPPING=Yo,Gt.DEFAULT_ANISOTROPY=1;var mt=class cc{constructor(t=0,i=0,r=0,a=1){cc.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],p=s[2],g=s[6],v=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,y=(u+1)/2,_=(v+1)/2,T=(l+c)/4,B=(h+p)/4,A=(d+g)/4;return f>y&&f>_?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=T/r,n=B/r):y>_?y<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),r=T/a,n=A/a):_<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(_),r=B/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends Sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Li=class extends Tu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},yl=class extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},bu=class extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ni=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[n+0],d=a[n+1],p=a[n+2],g=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let v=1-s,m=o*u+l*d+h*p+c*g,f=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let T=Math.sqrt(y),B=Math.atan2(T,m*f);v=Math.sin(v*B)/T,s=Math.sin(s*B)/T}let _=s*f;if(o=o*v+u*_,l=l*v+d*_,h=h*v+p*_,c=c*v+g*_,v===1-s){let T=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=T,l*=T,h*=T,c*=T}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-s*d,e[t+2]=l*p+h*d+s*u-o*c,e[t+3]=h*p-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-r)*d}else if(i>s&&i>c){let d=2*Math.sqrt(1+i-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-i-c);this._w=(a-l)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-s);this._w=(n-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,s=n*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class uc{constructor(t=0,i=0,r=0){uc.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ml.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ml.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),u=2*(n*r-s*i);return this.x=i+l*h+s*u-o*c,this.y=r+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cs=new N,Ml=new ni,Ki=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Jt):Jt.fromBufferAttribute(a,n),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),ka.subVectors(this.max,ra),wr.subVectors(e.a,ra),Ar.subVectors(e.b,ra),Rr.subVectors(e.c,ra),Ni.subVectors(Ar,wr),Ii.subVectors(Rr,Ar),Qi.subVectors(wr,Rr);let t=[0,-Ni.z,Ni.y,0,-Ii.z,Ii.y,0,-Qi.z,Qi.y,Ni.z,0,-Ni.x,Ii.z,0,-Ii.x,Qi.z,0,-Qi.x,-Ni.y,Ni.x,0,-Ii.y,Ii.x,0,-Qi.y,Qi.x,0];return!Ps(t,wr,Ar,Rr,ka)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,wr,Ar,Rr,ka))?!1:(Va.crossVectors(Ni,Ii),t=[Va.x,Va.y,Va.z],Ps(t,wr,Ar,Rr,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new N,new N,new N,new N,new N,new N,new N,new N],Jt=new N,Ga=new Ki,wr=new N,Ar=new N,Rr=new N,Ni=new N,Ii=new N,Qi=new N,ra=new N,ka=new N,Va=new N,er=new N;function Ps(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){er.fromArray(e,n);let o=a.x*Math.abs(er.x)+a.y*Math.abs(er.y)+a.z*Math.abs(er.z),l=t.dot(er),h=i.dot(er),c=r.dot(er);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var wu=new Ki,aa=new N,Ls=new N,na=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Ls)),this.expandByPoint(aa.copy(e.center).sub(Ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new N,Ns=new N,Wa=new N,Ui=new N,Is=new N,Xa=new N,Us=new N,Sl=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ns.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ns);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Wa),s=Ui.dot(this.direction),o=-Ui.dot(Wa),l=Ui.lengthSq(),h=Math.abs(1-n*n),c,u,d,p;if(h>0)if(c=n*o-s,u=n*s-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Ns).addScaledVector(Wa,u),d}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),r=yi.dot(yi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,a){Is.subVectors(t,e),Xa.subVectors(i,e),Us.crossVectors(Is,Xa);let n=this.direction.dot(Us),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Ui.subVectors(this.origin,e);let o=s*this.direction.dot(Xa.crossVectors(Ui,Xa));if(o<0)return null;let l=s*this.direction.dot(Is.cross(Ui));if(l<0||o+l>n)return null;let h=-s*Ui.dot(Us);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class Uo{constructor(t,i,r,a,n,s,o,l,h,c,u,d,p,g,v,m){Uo.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,u,d,p,g,v,m)}set(t,i,r,a,n,s,o,l,h,c,u,d,p,g,v,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/Cr.setFromMatrixColumn(t,0).length(),n=1/Cr.setFromMatrixColumn(t,1).length(),s=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,p=s*u,g=o*c,v=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-v*h,i[9]=-o*l,i[2]=v-d*h,i[6]=g+p*h,i[10]=s*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d+v*o,i[4]=g*o-p,i[8]=s*h,i[1]=s*u,i[5]=s*c,i[9]=-o,i[2]=p*o-g,i[6]=v+d*o,i[10]=s*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d-v*o,i[4]=-s*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*c,i[9]=v-d*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let d=s*c,p=s*u,g=o*c,v=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+v,i[1]=l*u,i[5]=v*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let d=s*l,p=s*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-d*u,i[8]=g*u+p,i[1]=u,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-v*u}else if(t.order==="XZY"){let d=s*l,p=s*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+v,i[5]=s*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=v*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Au,t,Ru)}lookAt(t,i,r){let a=this.elements;return Ft.subVectors(t,i),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Di.crossVectors(r,Ft),Di.lengthSq()===0&&(Math.abs(r.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Di.crossVectors(r,Ft)),Di.normalize(),ja.crossVectors(Ft,Di),a[0]=Di.x,a[4]=ja.x,a[8]=Ft.x,a[1]=Di.y,a[5]=ja.y,a[9]=Ft.y,a[2]=Di.z,a[6]=ja.z,a[10]=Ft.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],v=r[6],m=r[10],f=r[14],y=r[3],_=r[7],T=r[11],B=r[15],A=a[0],C=a[4],U=a[8],M=a[12],S=a[1],R=a[5],I=a[9],k=a[13],F=a[2],ae=a[6],G=a[10],de=a[14],Y=a[3],he=a[7],Se=a[11],Ue=a[15];return n[0]=s*A+o*S+l*F+h*Y,n[4]=s*C+o*R+l*ae+h*he,n[8]=s*U+o*I+l*G+h*Se,n[12]=s*M+o*k+l*de+h*Ue,n[1]=c*A+u*S+d*F+p*Y,n[5]=c*C+u*R+d*ae+p*he,n[9]=c*U+u*I+d*G+p*Se,n[13]=c*M+u*k+d*de+p*Ue,n[2]=g*A+v*S+m*F+f*Y,n[6]=g*C+v*R+m*ae+f*he,n[10]=g*U+v*I+m*G+f*Se,n[14]=g*M+v*k+m*de+f*Ue,n[3]=y*A+_*S+T*F+B*Y,n[7]=y*C+_*R+T*ae+B*he,n[11]=y*U+_*I+T*G+B*Se,n[15]=y*M+_*k+T*de+B*Ue,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+n*l*u-a*h*u-n*o*d+r*h*d+a*o*p-r*l*p)+v*(+i*l*p-i*h*d+n*s*d-a*s*p+a*h*c-n*l*c)+m*(+i*h*u-i*o*p-n*s*u+r*s*p+n*o*c-r*h*c)+f*(-a*o*c-i*l*u+i*o*d+a*s*u-r*s*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],y=u*m*h-v*d*h+v*l*p-o*m*p-u*l*f+o*d*f,_=g*d*h-c*m*h-g*l*p+s*m*p+c*l*f-s*d*f,T=c*v*h-g*u*h+g*o*p-s*v*p-c*o*f+s*u*f,B=g*u*l-c*v*l-g*o*d+s*v*d+c*o*m-s*u*m,A=i*y+r*_+a*T+n*B;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=y*C,t[1]=(v*d*n-u*m*n-v*a*p+r*m*p+u*a*f-r*d*f)*C,t[2]=(o*m*n-v*l*n+v*a*h-r*m*h-o*a*f+r*l*f)*C,t[3]=(u*l*n-o*d*n-u*a*h+r*d*h+o*a*p-r*l*p)*C,t[4]=_*C,t[5]=(c*m*n-g*d*n+g*a*p-i*m*p-c*a*f+i*d*f)*C,t[6]=(g*l*n-s*m*n-g*a*h+i*m*h+s*a*f-i*l*f)*C,t[7]=(s*d*n-c*l*n+c*a*h-i*d*h-s*a*p+i*l*p)*C,t[8]=T*C,t[9]=(g*u*n-c*v*n-g*r*p+i*v*p+c*r*f-i*u*f)*C,t[10]=(s*v*n-g*o*n+g*r*h-i*v*h-s*r*f+i*o*f)*C,t[11]=(c*o*n-s*u*n-c*r*h+i*u*h+s*r*p-i*o*p)*C,t[12]=B*C,t[13]=(c*v*a-g*u*a+g*r*d-i*v*d-c*r*m+i*u*m)*C,t[14]=(g*o*a-s*v*a-g*r*l+i*v*l+s*r*m-i*o*m)*C,t[15]=(s*u*a-c*o*a+c*r*l-i*u*l-s*r*d+i*o*d)*C,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,u=o+o,d=n*h,p=n*c,g=n*u,v=s*c,m=s*u,f=o*u,y=l*h,_=l*c,T=l*u,B=r.x,A=r.y,C=r.z;return a[0]=(1-(v+f))*B,a[1]=(p+T)*B,a[2]=(g-_)*B,a[3]=0,a[4]=(p-T)*A,a[5]=(1-(d+f))*A,a[6]=(m+y)*A,a[7]=0,a[8]=(g+_)*C,a[9]=(m-y)*C,a[10]=(1-(d+v))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,n=Cr.set(a[0],a[1],a[2]).length(),s=Cr.set(a[4],a[5],a[6]).length(),o=Cr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Zt.copy(this);let l=1/n,h=1/s,c=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=c,Zt.elements[9]*=c,Zt.elements[10]*=c,i.setFromRotationMatrix(Zt),r.x=n,r.y=s,r.z=o,this}makePerspective(t,i,r,a,n,s,o=vi){let l=this.elements,h=2*n/(i-t),c=2*n/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===vi)p=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===Ba)p=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=vi){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(s-n),d=(i+t)*h,p=(r+a)*c,g,v;if(o===vi)g=(s+n)*u,v=-2*u;else if(o===Ba)g=n*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Cr=new N,Zt=new rt,Au=new N(0,0,0),Ru=new N(1,1,1),Di=new N,ja=new N,Ft=new N,El=new rt,Tl=new ni,Oi=class dc{constructor(t=0,i=0,r=0,a=dc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return El.makeRotationFromQuaternion(t),this.setFromRotationMatrix(El,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cu=0,bl=new N,Pr=new ni,Mi=new rt,qa=new N,sa=new N,Pu=new N,Lu=new ni,wl=new N(1,0,0),Al=new N(0,1,0),Rl=new N(0,0,1),Cl={type:"added"},Nu={type:"removed"},Lr={type:"childadded",child:null},Os={type:"childremoved",child:null},kt=class An extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();let t=new N,i=new Oi,r=new ni,a=new N(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new rt},normalMatrix:{value:new $e}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(Al,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,i){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(Al,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?qa.copy(t):qa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(sa,qa,this.up):Mi.lookAt(qa,sa,this.up),this.quaternion.setFromRotationMatrix(Mi),a&&(Mi.extractRotation(a.matrixWorld),Pr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cl),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Nu),Os.child=t,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cl),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,t,Pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};kt.DEFAULT_UP=new N(0,1,0),kt.DEFAULT_MATRIX_AUTO_UPDATE=!0,kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $t=new N,Si=new N,Fs=new N,Ei=new N,Nr=new N,Ir=new N,Pl=new N,zs=new N,Bs=new N,Hs=new N,Gs=new mt,ks=new mt,Vs=new mt,oa=class Jr{constructor(t=new N,i=new N,r=new N){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),$t.subVectors(t,i),a.cross($t);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){$t.subVectors(a,i),Si.subVectors(r,i),Fs.subVectors(t,i);let s=$t.dot($t),o=$t.dot(Si),l=$t.dot(Fs),h=Si.dot(Si),c=Si.dot(Fs),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(s*c-o*l)*d;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ei.x),l.addScaledVector(s,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Gs.setScalar(0),ks.setScalar(0),Vs.setScalar(0),Gs.fromBufferAttribute(t,i),ks.fromBufferAttribute(t,r),Vs.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Gs,n.x),s.addScaledVector(ks,n.y),s.addScaledVector(Vs,n.z),s}static isFrontFacing(t,i,r,a){return $t.subVectors(r,i),Si.subVectors(t,i),$t.cross(Si).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $t.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$t.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Jr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Jr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Jr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Jr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Jr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Nr.subVectors(a,r),Ir.subVectors(n,r),zs.subVectors(t,r);let l=Nr.dot(zs),h=Ir.dot(zs);if(l<=0&&h<=0)return i.copy(r);Bs.subVectors(t,a);let c=Nr.dot(Bs),u=Ir.dot(Bs);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(Nr,s);Hs.subVectors(t,n);let p=Nr.dot(Hs),g=Ir.dot(Hs);if(g>=0&&p<=g)return i.copy(n);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Ir,o);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return Pl.subVectors(n,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(Pl,o);let f=1/(m+v+d);return s=v*f,o=d*f,i.copy(r).addScaledVector(Nr,s).addScaledVector(Ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Ws(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=gu(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Ws(n,a,e+1/3),this.g=Ws(n,a,e),this.b=Ws(n,a,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let i=Ll[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Ke.fromWorkingColorSpace(At.copy(this),e),Math.round(Mt(At.r*255,0,255))*65536+Math.round(Mt(At.g*255,0,255))*256+Math.round(Mt(At.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(At.copy(this),t);let i=At.r,r=At.g,a=At.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=ut){Ke.fromWorkingColorSpace(At.copy(this),e);let t=At.r,i=At.g,r=At.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Ya);let i=ws(Fi.h,Ya.h,t),r=ws(Fi.s,Ya.s,t),a=ws(Fi.l,Ya.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Xe;Xe.NAMES=Ll;var Iu=0,la=class extends Sr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Er(),this.name="",this.blending=dr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cn,this.blendDst=Pn,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cn&&(i.blendSrc=this.blendSrc),this.blendDst!==Pn&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zi=class extends la{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gt=new N,Ja=new Ce,Rt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cl,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}},Nl=class extends Rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Il=class extends Rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},tt=class extends Rt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Uu=0,Vt=new rt,Xs=new kt,Ur=new N,zt=new Ki,ha=new Ki,St=new N,It=class pc extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dl(t)?Il:Nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new $e().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vt.makeRotationFromQuaternion(t),this.applyMatrix4(Vt),this}rotateX(t){return Vt.makeRotationX(t),this.applyMatrix4(Vt),this}rotateY(t){return Vt.makeRotationY(t),this.applyMatrix4(Vt),this}rotateZ(t){return Vt.makeRotationZ(t),this.applyMatrix4(Vt),this}translate(t,i,r){return Vt.makeTranslation(t,i,r),this.applyMatrix4(Vt),this}scale(t,i,r){return Vt.makeScale(t,i,r),this.applyMatrix4(Vt),this}lookAt(t){return Xs.lookAt(t),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(r,3))}else{for(let r=0,a=i.count;r<a;r++){let n=t[r];i.setXYZ(r,n.x,n.y,n.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];zt.setFromBufferAttribute(n),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let r=this.boundingSphere.center;if(zt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(zt.min,ha.min),zt.expandByPoint(St),St.addVectors(zt.max,ha.max),zt.expandByPoint(St)):(zt.expandByPoint(ha.min),zt.expandByPoint(ha.max))}zt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)St.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(St));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)St.fromBufferAttribute(o,h),l&&(Ur.fromBufferAttribute(t,h),St.add(Ur)),a=Math.max(a,r.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<r.count;U++)o[U]=new N,l[U]=new N;let h=new N,c=new N,u=new N,d=new Ce,p=new Ce,g=new Ce,v=new N,m=new N;function f(U,M,S){h.fromBufferAttribute(r,U),c.fromBufferAttribute(r,M),u.fromBufferAttribute(r,S),d.fromBufferAttribute(n,U),p.fromBufferAttribute(n,M),g.fromBufferAttribute(n,S),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),o[U].add(v),o[M].add(v),o[S].add(v),l[U].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,M=y.length;U<M;++U){let S=y[U],R=S.start,I=S.count;for(let k=R,F=R+I;k<F;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let _=new N,T=new N,B=new N,A=new N;function C(U){B.fromBufferAttribute(a,U),A.copy(B);let M=o[U];_.copy(M),_.sub(B.multiplyScalar(B.dot(M))).normalize(),T.crossVectors(A,M);let S=T.dot(l[U])<0?-1:1;s.setXYZW(U,_.x,_.y,_.z,S)}for(let U=0,M=y.length;U<M;++U){let S=y[U],R=S.start,I=S.count;for(let k=R,F=R+I;k<F;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Rt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new N,n=new N,s=new N,o=new N,l=new N,h=new N,c=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,v),s.fromBufferAttribute(i,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)St.fromBufferAttribute(t,i),St.normalize(),t.setXYZ(i,St.x,St.y,St.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let f=0;f<c;f++)d[g++]=h[p++]}return new Rt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new pc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ul=new rt,tr=new Sl,Za=new na,Dl=new N,$a=new N,Ka=new N,Qa=new N,js=new N,en=new N,Ol=new N,tn=new N,dt=class extends kt{constructor(e=new It,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){en.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(js.fromBufferAttribute(c,e),n?en.addScaledVector(js,h):en.addScaledVector(js.sub(t),h))}t.add(en)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(a),tr.copy(e.ray).recast(e.near),!(Za.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Za,Dl)===null||tr.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Ul.copy(a).invert(),tr.copy(e.ray).applyMatrix4(Ul),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let v=u[p],m=n[v.materialIndex],f=Math.max(v.start,d.start),y=Math.min(s.count,Math.min(v.start+v.count,d.start+d.count));for(let _=f,T=y;_<T;_+=3){let B=s.getX(_),A=s.getX(_+1),C=s.getX(_+2);r=rn(this,m,e,i,l,h,c,B,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){let f=s.getX(v),y=s.getX(v+1),_=s.getX(v+2);r=rn(this,n,e,i,l,h,c,f,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let v=u[p],m=n[v.materialIndex],f=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=f,T=y;_<T;_+=3){let B=_,A=_+1,C=_+2;r=rn(this,m,e,i,l,h,c,B,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){let f=v,y=v+1,_=v+2;r=rn(this,n,e,i,l,h,c,f,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function Du(e,t,i,r,a,n,s,o){let l;if(t.side===Lt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Ri,o),l===null)return null;tn.copy(o),tn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(tn);return h<i.near||h>i.far?null:{distance:h,point:tn.clone(),object:e}}function rn(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,$a),e.getVertexPosition(l,Ka),e.getVertexPosition(h,Qa);let c=Du(e,t,i,r,$a,Ka,Qa,Ol);if(c){let u=new N;oa.getBarycoord(Ol,$a,Ka,Qa,u),a&&(c.uv=oa.getInterpolatedAttribute(a,o,l,h,u,new Ce)),n&&(c.uv1=oa.getInterpolatedAttribute(n,o,l,h,u,new Ce)),s&&(c.normal=oa.getInterpolatedAttribute(s,o,l,h,u,new N),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new N,materialIndex:0};oa.getNormal($a,Ka,Qa,d.normal),c.face=d,c.barycoord=u}return c}var Bi=class fc extends It{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2));function g(v,m,f,y,_,T,B,A,C,U,M){let S=T/C,R=B/U,I=T/2,k=B/2,F=A/2,ae=C+1,G=U+1,de=0,Y=0,he=new N;for(let Se=0;Se<G;Se++){let Ue=Se*R-k;for(let Be=0;Be<ae;Be++){let q=Be*S-I;he[v]=q*y,he[m]=Ue*_,he[f]=F,h.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[f]=A>0?1:-1,c.push(he.x,he.y,he.z),u.push(Be/C),u.push(1-Se/U),de+=1}}for(let Se=0;Se<U;Se++)for(let Ue=0;Ue<C;Ue++){let Be=d+Ue+ae*Se,q=d+Ue+ae*(Se+1),ye=d+(Ue+1)+ae*(Se+1),O=d+(Ue+1)+ae*Se;l.push(Be,q,O),l.push(q,ye,O),Y+=6}o.addGroup(p,Y,M),p+=Y,d+=de}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Dr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function Ct(e){let t={};for(let i=0;i<e.length;i++){let r=Dr(e[i]);for(let a in r)t[a]=r[a]}return t}function Ou(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Fl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ke.workingColorSpace}var Fu={clone:Dr,merge:Ct},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends la{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},zl=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new N,Bl=new Ce,Hl=new Ce,Bt=class extends zl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Bl,Hl),t.subVectors(Hl,Bl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ts*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Or=-90,Fr=1,Hu=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(Or,Fr,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Or,Fr,e,t);a.layers=this.layers,this.add(a);let n=new Bt(Or,Fr,e,t);n.layers=this.layers,this.add(n);let s=new Bt(Or,Fr,e,t);s.layers=this.layers,this.add(s);let o=new Bt(Or,Fr,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Or,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Gl=class extends Gt{constructor(e,t,i,r,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gu=class extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bi(5,5,5),a=new si({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Ci});a.uniforms.tEquirect.value=t;let n=new dt(r,a),s=t.minFilter;return t.minFilter===mi&&(t.minFilter=qt),new Hu(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},qs=new N,ku=new N,Vu=new $e,ir=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=qs.subVectors(i,t).cross(ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(qs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vu.getNormalMatrix(e),r=this.coplanarPoint(qs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new na,an=new N,Ys=class{constructor(e=new ir,t=new ir,i=new ir,r=new ir,a=new ir,n=new ir){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){let i=this.planes,r=e.elements,a=r[0],n=r[1],s=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],v=r[11],m=r[12],f=r[13],y=r[14],_=r[15];if(i[0].setComponents(o-a,u-l,v-d,_-m).normalize(),i[1].setComponents(o+a,u+l,v+d,_+m).normalize(),i[2].setComponents(o+n,u+h,v+p,_+f).normalize(),i[3].setComponents(o-n,u-h,v-p,_-f).normalize(),i[4].setComponents(o-s,u-c,v-g,_-y).normalize(),t===vi)i[5].setComponents(o+s,u+c,v+g,_+y).normalize();else if(t===Ba)i[5].setComponents(s,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(an.x=r.normal.x>0?e.max.x:e.min.x,an.y=r.normal.y>0?e.max.y:e.min.y,an.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(an)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kl(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Wu(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Wt=class mc extends It{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){let y=f*d-s;for(let _=0;_<h;_++){let T=_*u-n;g.push(T,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let _=y+h*f,T=y+h*(f+1),B=y+1+h*(f+1),A=y+1+h*f;p.push(_,T,A),p.push(T,B,A)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.width,t.height,t.widthSegments,t.heightSegments)}},Xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ju=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
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
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,nd=`#ifdef USE_BUMPMAP
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fd=`#define PI 3.141592653589793
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
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
#endif`,Vd=`struct PhysicalMaterial {
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
}`,Wd=`
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
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
}`,af=`uniform vec3 diffuse;
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
}`,nf=`#include <common>
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
}`,sf=`uniform vec3 diffuse;
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
}`,of=`#define LAMBERT
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
}`,lf=`#define LAMBERT
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
}`,hf=`#define MATCAP
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
}`,cf=`#define MATCAP
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
}`,uf=`#define NORMAL
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
}`,df=`#define NORMAL
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
}`,pf=`#define PHONG
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
}`,ff=`#define PHONG
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
}`,mf=`#define STANDARD
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
}`,gf=`#define STANDARD
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
}`,vf=`#define TOON
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
}`,_f=`#define TOON
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
}`,xf=`uniform float size;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Mf=`#include <common>
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
}`,Sf=`uniform vec3 color;
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
}`,Ef=`uniform float rotation;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Xu,alphahash_pars_fragment:ju,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Ju,alphatest_pars_fragment:Zu,aomap_fragment:$u,aomap_pars_fragment:Ku,batching_pars_vertex:Qu,batching_vertex:ed,begin_vertex:td,beginnormal_vertex:id,bsdfs:rd,iridescence_fragment:ad,bumpmap_pars_fragment:nd,clipping_planes_fragment:sd,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ld,clipping_planes_vertex:hd,color_fragment:cd,color_pars_fragment:ud,color_pars_vertex:dd,color_vertex:pd,common:fd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:vd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:yd,colorspace_fragment:Md,colorspace_pars_fragment:Sd,envmap_fragment:Ed,envmap_common_pars_fragment:Td,envmap_pars_fragment:bd,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Fd,envmap_vertex:Ad,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Id,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Dd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:Bd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Gd,lights_physical_fragment:kd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:jd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Zd,map_fragment:$d,map_pars_fragment:Kd,map_particle_fragment:Qd,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:ip,morphinstance_vertex:rp,morphcolor_vertex:ap,morphnormal_vertex:np,morphtarget_pars_vertex:sp,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:hp,normal_pars_fragment:cp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:_p,packing:xp,premultiplied_alpha_fragment:yp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:Ep,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Np,skinnormal_vertex:Ip,specularmap_fragment:Up,specularmap_pars_fragment:Dp,tonemapping_fragment:Op,tonemapping_pars_fragment:Fp,transmission_fragment:zp,transmission_pars_fragment:Bp,uv_pars_fragment:Hp,uv_pars_vertex:Gp,uv_vertex:kp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:jp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:Jp,depth_vert:Zp,depth_frag:$p,distanceRGBA_vert:Kp,distanceRGBA_frag:Qp,equirect_vert:ef,equirect_frag:tf,linedashed_vert:rf,linedashed_frag:af,meshbasic_vert:nf,meshbasic_frag:sf,meshlambert_vert:of,meshlambert_frag:lf,meshmatcap_vert:hf,meshmatcap_frag:cf,meshnormal_vert:uf,meshnormal_frag:df,meshphong_vert:pf,meshphong_frag:ff,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:vf,meshtoon_frag:_f,points_vert:xf,points_frag:yf,shadow_vert:Mf,shadow_frag:Sf,sprite_vert:Ef,sprite_frag:Tf},Le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},oi={basic:{uniforms:Ct([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ct([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ct([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ct([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ct([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ct([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ct([Le.points,Le.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ct([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ct([Le.common,Le.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ct([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ct([Le.sprite,Le.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Ct([Le.common,Le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Ct([Le.lights,Le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};oi.physical={uniforms:Ct([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var nn={r:0,b:0,g:0},ar=new Oi,bf=new rt;function wf(e,t,i,r,a,n,s){let o=new Xe(0),l=n===!0?0:1,h,c,u=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?i:t).get(_)),_}function v(y){let _=!1,T=g(y);T===null?f(o,l):T&&T.isColor&&(f(T,1),_=!0);let B=e.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,s):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,_){let T=g(_);T&&(T.isCubeTexture||T.mapping===Ca)?(c===void 0&&(c=new dt(new Bi(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Dr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(B,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),ar.copy(_.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bf.makeRotationFromEuler(ar)),c.material.toneMapped=Ke.getTransfer(T.colorSpace)!==et,(u!==T||d!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new dt(new Wt(2,2),new si({name:"BackgroundMaterial",uniforms:Dr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(T.colorSpace)!==et,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function f(y,_){y.getRGB(nn,Fl(e)),r.buffers.color.setClear(nn.r,nn.g,nn.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:v,addToRenderList:m}}function Af(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function o(S,R,I,k,F){let ae=!1,G=u(k,I,R);n!==G&&(n=G,h(n.object)),ae=p(S,k,I,F),ae&&g(S,k,I,F),F!==null&&t.update(F,e.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,T(S,R,I,k),F!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function u(S,R,I){let k=I.wireframe===!0,F=r[S.id];F===void 0&&(F={},r[S.id]=F);let ae=F[R.id];ae===void 0&&(ae={},F[R.id]=ae);let G=ae[k];return G===void 0&&(G=d(l()),ae[k]=G),G}function d(S){let R=[],I=[],k=[];for(let F=0;F<i;F++)R[F]=0,I[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,R,I,k){let F=n.attributes,ae=R.attributes,G=0,de=I.getAttributes();for(let Y in de)if(de[Y].location>=0){let he=F[Y],Se=ae[Y];if(Se===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;G++}return n.attributesNum!==G||n.index!==k}function g(S,R,I,k){let F={},ae=R.attributes,G=0,de=I.getAttributes();for(let Y in de)if(de[Y].location>=0){let he=ae[Y];he===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));let Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),F[Y]=Se,G++}n.attributes=F,n.attributesNum=G,n.index=k}function v(){let S=n.newAttributes;for(let R=0,I=S.length;R<I;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){let I=n.newAttributes,k=n.enabledAttributes,F=n.attributeDivisors;I[S]=1,k[S]===0&&(e.enableVertexAttribArray(S),k[S]=1),F[S]!==R&&(e.vertexAttribDivisor(S,R),F[S]=R)}function y(){let S=n.newAttributes,R=n.enabledAttributes;for(let I=0,k=R.length;I<k;I++)R[I]!==S[I]&&(e.disableVertexAttribArray(I),R[I]=0)}function _(S,R,I,k,F,ae,G){G===!0?e.vertexAttribIPointer(S,R,I,F,ae):e.vertexAttribPointer(S,R,I,k,F,ae)}function T(S,R,I,k){v();let F=k.attributes,ae=I.getAttributes(),G=R.defaultAttributeValues;for(let de in ae){let Y=ae[de];if(Y.location>=0){let he=F[de];if(he===void 0&&(de==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),de==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){let Se=he.normalized,Ue=he.itemSize,Be=t.get(he);if(Be===void 0)continue;let q=Be.buffer,ye=Be.type,O=Be.bytesPerElement,j=ye===e.INT||ye===e.UNSIGNED_INT||he.gpuType===kn;if(he.isInterleavedBufferAttribute){let H=he.data,le=H.stride,pe=he.offset;if(H.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Y.locationSize;Ee++)f(Y.location+Ee,H.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)m(Y.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,q);for(let Ee=0;Ee<Y.locationSize;Ee++)_(Y.location+Ee,Ue/Y.locationSize,ye,Se,le*O,(pe+Ue/Y.locationSize*Ee)*O,j)}else{if(he.isInstancedBufferAttribute){for(let H=0;H<Y.locationSize;H++)f(Y.location+H,he.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let H=0;H<Y.locationSize;H++)m(Y.location+H);e.bindBuffer(e.ARRAY_BUFFER,q);for(let H=0;H<Y.locationSize;H++)_(Y.location+H,Ue/Y.locationSize,ye,Se,Ue*O,Ue/Y.locationSize*H*O,j)}}else if(G!==void 0){let Se=G[de];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(Y.location,Se);break;case 3:e.vertexAttrib3fv(Y.location,Se);break;case 4:e.vertexAttrib4fv(Y.location,Se);break;default:e.vertexAttrib1fv(Y.location,Se)}}}}y()}function B(){U();for(let S in r){let R=r[S];for(let I in R){let k=R[I];for(let F in k)c(k[F].object),delete k[F];delete R[I]}delete r[S]}}function A(S){if(r[S.id]===void 0)return;let R=r[S.id];for(let I in R){let k=R[I];for(let F in k)c(k[F].object),delete k[F];delete R[I]}delete r[S.id]}function C(S){for(let R in r){let I=r[R];if(I[S.id]===void 0)continue;let k=I[S.id];for(let F in k)c(k[F].object),delete k[F];delete I[S.id]}}function U(){M(),s=!0,n!==a&&(n=a,h(n.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Rf(e,t,i){let r;function a(h){r=h}function n(h,c){e.drawArrays(r,h,c),i.update(c,r,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)s(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];i.update(g,r,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cf(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Yt&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let U=C===gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gi&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ai&&!U)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:B,maxSamples:A}}function Pf(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ir,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!a||g===null||g.length===0||n&&!m)n?c(null):h();else{let y=n?0:r,_=y*4,T=f.clippingState||null;l.value=T,T=c(g,d,_,p);for(let B=0;B!==_;++B)T[B]=i[B];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,T=p;_!==v;++_,T+=4)s.copy(u[_]).applyMatrix4(y,o),s.normal.toArray(m,T),m[T+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Lf(e){let t=new WeakMap;function i(s,o){return o===zn?s.mapping=fr:o===Bn&&(s.mapping=mr),s}function r(s){if(s&&s.isTexture){let o=s.mapping;if(o===zn||o===Bn)if(t.has(s)){let l=t.get(s).texture;return i(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Gu(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),i(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:r,dispose:n}}var Js=class extends zl{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zr=4,Vl=[.125,.215,.35,.446,.526,.582],nr=20,Zs=new Js,Wl=new Xe,$s=null,Ks=0,Qs=0,eo=!1,sr=(1+Math.sqrt(5))/2,Br=1/sr,Xl=[new N(-sr,Br,0),new N(sr,Br,0),new N(-Br,0,sr),new N(Br,0,sr),new N(0,sr,-Br),new N(0,sr,Br),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Ks,Qs),this._renderer.xr.enabled=eo,e.scissorTest=!1,sn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:gr,format:Yt,colorSpace:yr,depthBuffer:!1},r=jl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(a)),this._blurMaterial=If(a,e,t)}return r}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r){let a=new Bt(90,1,t,i),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(Wl),o.toneMapping=ri,o.autoClear=!1;let c=new zi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),u=new dt(new Bi,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(Wl),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,n[g],0),a.lookAt(s[g],0,0)):v===1?(a.up.set(0,0,n[g]),a.lookAt(0,s[g],0)):(a.up.set(0,n[g],0),a.lookAt(0,0,s[g]));let m=this._cubeSize;sn(r,v*m,g>2?m:0,m,m),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new dt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;sn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Zs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Xl[(r-a-1)%Xl.length];this._blur(e,a-1,a,n,s)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new dt(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*nr-1),g=a/p,v=isFinite(a)?1+Math.floor(h*g):nr;v>nr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${nr}`);let m=[],f=0;for(let A=0;A<nr;++A){let C=A/g,U=Math.exp(-C*C/2);m.push(U),A===0?f+=U:A<v&&(f+=2*U)}for(let A=0;A<m.length;A++)m[A]=m[A]/f;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let _=this._sizeLods[r],T=3*_*(r>y-zr?r-y+zr:0),B=4*(this._cubeSize-_);sn(t,T,B,3*_,2*_),o.setRenderTarget(t),o.render(c,Zs)}};function Nf(e){let t=[],i=[],r=[],a=e,n=e-zr+1+Vl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);i.push(o);let l=1/o;s>e-zr?l=Vl[s-e+zr-1]:s===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,U=A>2?0:-1,M=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(M,v*g*A),_.set(d,m*g*A);let S=[A,A,A,A,A,A];T.set(S,f*g*A)}let B=new It;B.setAttribute("position",new Rt(y,v)),B.setAttribute("uv",new Rt(_,m)),B.setAttribute("faceIndex",new Rt(T,f)),t.push(B),a>zr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function jl(e,t,i){let r=new Li(e,t,i);return r.texture.mapping=Ca,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sn(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function If(e,t,i){let r=new Float32Array(nr),a=new N(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:io(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ql(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Yl(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Uf(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===zn||l===Bn,c=l===fr||l===mr;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new to(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new to(e)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:s}}function Df(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&ia("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Of(e,t,i,r){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",s),delete a[d.id];let p=n.get(d);p&&(t.remove(p),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let _=0,T=y.length;_<T;_+=3){let B=y[_+0],A=y[_+1],C=y[_+2];d.push(B,A,A,C,C,B)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,T=y.length/3-1;_<T;_+=3){let B=_+0,A=_+1,C=_+2;d.push(B,A,A,C,C,B)}}else return;let m=new(dl(d)?Il:Nl)(d,1);m.version=v;let f=n.get(u);f&&t.remove(f),n.set(u,m)}function c(u){let d=n.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Ff(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,p){e.drawElements(r,p,n,d*s),i.update(p,r,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(r,p,n,d*s,g),i.update(p,r,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,n,d,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];i.update(v,r,1)}function u(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/s,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,n,d,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*v[y];i.update(f,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function zf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Bf(e,t,i){let r=new WeakMap,a=new mt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){U.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;g===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let B=o.attributes.position.count*T,A=1;B>t.maxTextureSize&&(A=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);let C=new Float32Array(B*A*4*u),U=new yl(C,B,A,u);U.type=ai,U.needsUpdate=!0;let M=T*4;for(let S=0;S<u;S++){let R=f[S],I=y[S],k=_[S],F=B*A*4*S;for(let ae=0;ae<R.count;ae++){let G=ae*M;g===!0&&(a.fromBufferAttribute(R,ae),C[F+G+0]=a.x,C[F+G+1]=a.y,C[F+G+2]=a.z,C[F+G+3]=0),v===!0&&(a.fromBufferAttribute(I,ae),C[F+G+4]=a.x,C[F+G+5]=a.y,C[F+G+6]=a.z,C[F+G+7]=0),m===!0&&(a.fromBufferAttribute(k,ae),C[F+G+8]=a.x,C[F+G+9]=a.y,C[F+G+10]=a.z,C[F+G+11]=k.itemSize===4?a.w:1)}}d={count:u,texture:U,size:new Ce(B,A)},r.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function Hf(e,t,i,r){let a=new WeakMap;function n(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:n,dispose:s}}var Jl=class extends Gt{constructor(e,t,i,r,a,n,s,o,l,h=_r){if(h!==_r&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_r&&(i=$i),i===void 0&&h===xr&&(i=vr),super(null,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ot,this.minFilter=o!==void 0?o:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zl=new Gt,$l=new Jl(1,1),Kl=new yl,Ql=new bu,eh=new Gl,th=[],ih=[],rh=new Float32Array(16),ah=new Float32Array(9),nh=new Float32Array(4);function Hr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=th[a];if(n===void 0&&(n=new Float32Array(a),th[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function _t(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function xt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function on(e,t){let i=ih[t];i===void 0&&(i=new Int32Array(t),ih[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Gf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_t(i,t))return;e.uniform2fv(this.addr,t),xt(i,t)}}function Vf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_t(i,t))return;e.uniform3fv(this.addr,t),xt(i,t)}}function Wf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_t(i,t))return;e.uniform4fv(this.addr,t),xt(i,t)}}function Xf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_t(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),xt(i,t)}else{if(_t(i,r))return;nh.set(r),e.uniformMatrix2fv(this.addr,!1,nh),xt(i,r)}}function jf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_t(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),xt(i,t)}else{if(_t(i,r))return;ah.set(r),e.uniformMatrix3fv(this.addr,!1,ah),xt(i,r)}}function qf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_t(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),xt(i,t)}else{if(_t(i,r))return;rh.set(r),e.uniformMatrix4fv(this.addr,!1,rh),xt(i,r)}}function Yf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Jf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_t(i,t))return;e.uniform2iv(this.addr,t),xt(i,t)}}function Zf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_t(i,t))return;e.uniform3iv(this.addr,t),xt(i,t)}}function $f(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_t(i,t))return;e.uniform4iv(this.addr,t),xt(i,t)}}function Kf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Qf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_t(i,t))return;e.uniform2uiv(this.addr,t),xt(i,t)}}function em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_t(i,t))return;e.uniform3uiv(this.addr,t),xt(i,t)}}function tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_t(i,t))return;e.uniform4uiv(this.addr,t),xt(i,t)}}function im(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?($l.compareFunction=hl,n=$l):n=Zl,i.setTexture2D(t||n,a)}function rm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Ql,a)}function am(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||eh,a)}function nm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Kl,a)}function sm(e){switch(e){case 5126:return Gf;case 35664:return kf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return jf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return Jf;case 35668:case 35672:return Zf;case 35669:case 35673:return $f;case 5125:return Kf;case 36294:return Qf;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return nm}}function om(e,t){e.uniform1fv(this.addr,t)}function lm(e,t){let i=Hr(t,this.size,2);e.uniform2fv(this.addr,i)}function hm(e,t){let i=Hr(t,this.size,3);e.uniform3fv(this.addr,i)}function cm(e,t){let i=Hr(t,this.size,4);e.uniform4fv(this.addr,i)}function um(e,t){let i=Hr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function dm(e,t){let i=Hr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function pm(e,t){let i=Hr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function fm(e,t){e.uniform1iv(this.addr,t)}function mm(e,t){e.uniform2iv(this.addr,t)}function gm(e,t){e.uniform3iv(this.addr,t)}function vm(e,t){e.uniform4iv(this.addr,t)}function _m(e,t){e.uniform1uiv(this.addr,t)}function xm(e,t){e.uniform2uiv(this.addr,t)}function ym(e,t){e.uniform3uiv(this.addr,t)}function Mm(e,t){e.uniform4uiv(this.addr,t)}function Sm(e,t,i){let r=this.cache,a=t.length,n=on(i,a);_t(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));for(let s=0;s!==a;++s)i.setTexture2D(t[s]||Zl,n[s])}function Em(e,t,i){let r=this.cache,a=t.length,n=on(i,a);_t(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Ql,n[s])}function Tm(e,t,i){let r=this.cache,a=t.length,n=on(i,a);_t(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||eh,n[s])}function bm(e,t,i){let r=this.cache,a=t.length,n=on(i,a);_t(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Kl,n[s])}function wm(e){switch(e){case 5126:return om;case 35664:return lm;case 35665:return hm;case 35666:return cm;case 35674:return um;case 35675:return dm;case 35676:return pm;case 5124:case 35670:return fm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return vm;case 5125:return _m;case 36294:return xm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return bm}}var Am=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sm(t.type)}},Rm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wm(t.type)}},Cm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},ro=/(\w+)(\])?(\[|\.)?/g;function sh(e,t){e.seq.push(t),e.map[t.id]=t}function Pm(e,t,i){let r=e.name,a=r.length;for(ro.lastIndex=0;;){let n=ro.exec(r),s=ro.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){sh(i,h===void 0?new Am(o,e,t):new Rm(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Cm(o),sh(i,c)),i=c}}}var ln=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),n=e.getUniformLocation(t,a.name);Pm(a,n,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function oh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Lm=37297,Nm=0;function Im(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var lh=new $e;function Um(e){Ke._getMatrix(lh,Ke.workingColorSpace,e);let t=`mat3( ${lh.elements.map(i=>i.toFixed(4))} )`;switch(Ke.getTransfer(e)){case za:return[t,"LinearTransferOETF"];case et:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function hh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Im(e.getShaderSource(t),s)}else return a}function Dm(e,t){let i=Um(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Om(e,t){let i;switch(t){case Kc:i="Linear";break;case Qc:i="Reinhard";break;case eu:i="Cineon";break;case tu:i="ACESFilmic";break;case ru:i="AgX";break;case au:i="Neutral";break;case iu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var hn=new N;function Fm(){Ke.getLuminanceCoefficients(hn);let e=hn.x.toFixed(4),t=hn.y.toFixed(4),i=hn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Bm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Hm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function ca(e){return e!==""}function ch(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(e){return e.replace(Gm,Vm)}var km=new Map;function Vm(e,t){let i=Ze[t];if(i===void 0){let r=km.get(t);if(r!==void 0)i=Ze[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ao(i)}var Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(e){return e.replace(Wm,Xm)}function Xm(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function ph(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function jm(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function qm(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case fr:case mr:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ym(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===mr&&(t="ENVMAP_MODE_REFRACTION"),t}function Jm(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case qo:t="ENVMAP_BLENDING_MULTIPLY";break;case Zc:t="ENVMAP_BLENDING_MIX";break;case $c:t="ENVMAP_BLENDING_ADD";break}return t}function Zm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $m(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=jm(i),h=qm(i),c=Ym(i),u=Jm(i),d=Zm(i),p=zm(i),g=Bm(n),v=a.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(ca).join(`
`),f.length>0&&(f+=`
`)):(m=[ph(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),f=[ph(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ri?"#define TONE_MAPPING":"",i.toneMapping!==ri?Ze.tonemapping_pars_fragment:"",i.toneMapping!==ri?Om("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Dm("linearToOutputTexel",i.outputColorSpace),Fm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ca).join(`
`)),s=ao(s),s=ch(s,i),s=uh(s,i),o=ao(o),o=ch(o,i),o=uh(o,i),s=dh(s),o=dh(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=y+m+s,T=y+f+o,B=oh(a,a.VERTEX_SHADER,_),A=oh(a,a.FRAGMENT_SHADER,T);a.attachShader(v,B),a.attachShader(v,A),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function C(R){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(v).trim(),k=a.getShaderInfoLog(B).trim(),F=a.getShaderInfoLog(A).trim(),ae=!0,G=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(ae=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,B,A);else{let de=hh(a,B,"vertex"),Y=hh(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+de+`
`+Y)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||F==="")&&(G=!1);G&&(R.diagnostics={runnable:ae,programLog:I,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:f}})}a.deleteShader(B),a.deleteShader(A),U=new ln(a,v),M=Hm(a,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(v,Lm)),S},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=A,this}var Km=0,Qm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new eg(e),t.set(e,i)),i}},eg=class{constructor(e){this.id=Km++,this.code=e,this.usedTimes=0}};function tg(e,t,i,r,a,n,s){let o=new Ds,l=new Qm,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,S,R,I,k){let F=I.fog,ae=k.geometry,G=M.isMeshStandardMaterial?I.environment:null,de=(M.isMeshStandardMaterial?i:t).get(M.envMap||G),Y=de&&de.mapping===Ca?de.image.height:null,he=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ue=Se!==void 0?Se.length:0,Be=0;ae.morphAttributes.position!==void 0&&(Be=1),ae.morphAttributes.normal!==void 0&&(Be=2),ae.morphAttributes.color!==void 0&&(Be=3);let q,ye,O,j;if(he){let je=oi[he];q=je.vertexShader,ye=je.fragmentShader}else q=M.vertexShader,ye=M.fragmentShader,l.update(M),O=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let H=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),pe=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,J=!!M.map,W=!!M.matcap,b=!!de,be=!!M.aoMap,ue=!!M.lightMap,ce=!!M.bumpMap,se=!!M.normalMap,Pe=!!M.displacementMap,X=!!M.emissiveMap,ve=!!M.metalnessMap,w=!!M.roughnessMap,x=M.anisotropy>0,P=M.clearcoat>0,te=M.dispersion>0,ne=M.iridescence>0,$=M.sheen>0,Me=M.transmission>0,ee=x&&!!M.anisotropyMap,_e=P&&!!M.clearcoatMap,Ne=P&&!!M.clearcoatNormalMap,me=P&&!!M.clearcoatRoughnessMap,we=ne&&!!M.iridescenceMap,ge=ne&&!!M.iridescenceThicknessMap,oe=$&&!!M.sheenColorMap,re=$&&!!M.sheenRoughnessMap,Re=!!M.specularMap,Ae=!!M.specularColorMap,Ie=!!M.specularIntensityMap,L=Me&&!!M.transmissionMap,fe=Me&&!!M.thicknessMap,Q=!!M.gradientMap,V=!!M.alphaMap,xe=M.alphaTest>0,ie=!!M.alphaHash,Oe=!!M.extensions,Ve=ri;M.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ve=e.toneMapping);let qe={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:ye,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:pe,instancingColor:pe&&k.instanceColor!==null,instancingMorph:pe&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?e.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:yr,alphaToCoverage:!!M.alphaToCoverage,map:J,matcap:W,envMap:b,envMapMode:b&&de.mapping,envMapCubeUVHeight:Y,aoMap:be,lightMap:ue,bumpMap:ce,normalMap:se,displacementMap:d&&Pe,emissiveMap:X,normalMapObjectSpace:se&&M.normalMapType===lu,normalMapTangentSpace:se&&M.normalMapType===ol,metalnessMap:ve,roughnessMap:w,anisotropy:x,anisotropyMap:ee,clearcoat:P,clearcoatMap:_e,clearcoatNormalMap:Ne,clearcoatRoughnessMap:me,dispersion:te,iridescence:ne,iridescenceMap:we,iridescenceThicknessMap:ge,sheen:$,sheenColorMap:oe,sheenRoughnessMap:re,specularMap:Re,specularColorMap:Ae,specularIntensityMap:Ie,transmission:Me,transmissionMap:L,thicknessMap:fe,gradientMap:Q,opaque:M.transparent===!1&&M.blending===dr&&M.alphaToCoverage===!1,alphaMap:V,alphaTest:xe,alphaHash:ie,combine:M.combine,mapUv:J&&v(M.map.channel),aoMapUv:be&&v(M.aoMap.channel),lightMapUv:ue&&v(M.lightMap.channel),bumpMapUv:ce&&v(M.bumpMap.channel),normalMapUv:se&&v(M.normalMap.channel),displacementMapUv:Pe&&v(M.displacementMap.channel),emissiveMapUv:X&&v(M.emissiveMap.channel),metalnessMapUv:ve&&v(M.metalnessMap.channel),roughnessMapUv:w&&v(M.roughnessMap.channel),anisotropyMapUv:ee&&v(M.anisotropyMap.channel),clearcoatMapUv:_e&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:re&&v(M.sheenRoughnessMap.channel),specularMapUv:Re&&v(M.specularMap.channel),specularColorMapUv:Ae&&v(M.specularColorMap.channel),specularIntensityMapUv:Ie&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:fe&&v(M.thicknessMap.channel),alphaMapUv:V&&v(M.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(se||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ae.attributes.uv&&(J||V),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:le,skinning:k.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ve,decodeVideoTexture:J&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===et,decodeVideoTextureEmissive:X&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ii,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||Ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function f(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(S,M),_(S,M),S.push(e.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function T(M){let S=g[M.type],R;if(S){let I=oi[S];R=Fu.clone(I.uniforms)}else R=M.uniforms;return R}function B(M,S){let R;for(let I=0,k=c.length;I<k;I++){let F=c[I];if(F.cacheKey===S){R=F,++R.usedTimes;break}}return R===void 0&&(R=new $m(e,S,M,n),c.push(R)),R}function A(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:B,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:U}}function ig(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function rg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function fh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function mh(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u,d,p,g,v,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){let f=s(u,d,p,g,v,m);p.transmission>0?r.push(f):p.transparent===!0?a.push(f):i.push(f)}function l(u,d,p,g,v,m){let f=s(u,d,p,g,v,m);p.transmission>0?r.unshift(f):p.transparent===!0?a.unshift(f):i.unshift(f)}function h(u,d){i.length>1&&i.sort(u||rg),r.length>1&&r.sort(d||fh),a.length>1&&a.sort(d||fh)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function ag(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new mh,e.set(r,[s])):a>=n.length?(s=new mh,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function ng(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new N,color:new Xe};break;case"SpotLight":i={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=i,i}}}function sg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var og=0;function lg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function hg(e){let t=new ng,i=sg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);let a=new N,n=new rt,s=new rt;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,_=0,T=0,B=0,A=0,C=0;h.sort(lg);for(let M=0,S=h.length;M<S;M++){let R=h[M],I=R.color,k=R.intensity,F=R.distance,ae=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=I.r*k,u+=I.g*k,d+=I.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(R.sh.coefficients[G],k);C++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let de=R.shadow,Y=i.get(R);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,r.directionalShadow[p]=Y,r.directionalShadowMap[p]=ae,r.directionalShadowMatrix[p]=R.shadow.matrix,y++}r.directional[p]=G,p++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(I).multiplyScalar(k),G.distance=F,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,r.spot[v]=G;let de=R.shadow;if(R.map&&(r.spotLightMap[B]=R.map,B++,de.updateMatrices(R),R.castShadow&&A++),r.spotLightMatrix[v]=de.matrix,R.castShadow){let Y=i.get(R);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,r.spotShadow[v]=Y,r.spotShadowMap[v]=ae,T++}v++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(I).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),r.rectArea[m]=G,m++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let de=R.shadow,Y=i.get(R);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,Y.shadowCameraNear=de.camera.near,Y.shadowCameraFar=de.camera.far,r.pointShadow[g]=Y,r.pointShadowMap[g]=ae,r.pointShadowMatrix[g]=R.shadow.matrix,_++}r.point[g]=G,g++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),r.hemi[f]=G,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let U=r.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==y||U.numPointShadows!==_||U.numSpotShadows!==T||U.numSpotMaps!==B||U.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=f,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=T+B-A,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=y,U.numPointShadows=_,U.numSpotShadows=T,U.numSpotMaps=B,U.numLightProbes=C,r.version=og++)}function l(h,c){let u=0,d=0,p=0,g=0,v=0,m=c.matrixWorldInverse;for(let f=0,y=h.length;f<y;f++){let _=h[f];if(_.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),u++}else if(_.isSpotLight){let T=r.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let T=r.rectArea[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),s.identity(),n.copy(_.matrixWorld),n.premultiply(m),s.extractRotation(n),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),g++}else if(_.isPointLight){let T=r.point[d];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let T=r.hemi[v];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:r}}function gh(e){let t=new hg(e),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function n(c){i.push(c)}function s(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function cg(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new gh(e),t.set(a,[o])):n>=s.length?(o=new gh(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var ug=class extends la{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dg=class extends la{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function mg(e,t,i){let r=new Ys,a=new Ce,n=new Ce,s=new mt,o=new ug({depthPacking:ou}),l=new dg,h={},c=i.maxTextureSize,u={[Ri]:Lt,[Lt]:Ri,[ii]:ii},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:pg,fragmentShader:fg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let f=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=e.getRenderTarget(),S=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),I=e.state;I.setBlending(Ci),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=f!==fi&&this.type===fi,F=f===fi&&this.type!==fi;for(let ae=0,G=A.length;ae<G;ae++){let de=A[ae],Y=de.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);let he=Y.getFrameExtents();if(a.multiply(he),n.copy(Y.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/he.x),a.x=n.x*he.x,Y.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/he.y),a.y=n.y*he.y,Y.mapSize.y=n.y)),Y.map===null||k===!0||F===!0){let Ue=this.type!==fi?{minFilter:Ot,magFilter:Ot}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Li(a.x,a.y,Ue),Y.map.texture.name=de.name+".shadowMap",Y.camera.updateProjectionMatrix()}e.setRenderTarget(Y.map),e.clear();let Se=Y.getViewportCount();for(let Ue=0;Ue<Se;Ue++){let Be=Y.getViewport(Ue);s.set(n.x*Be.x,n.y*Be.y,n.x*Be.z,n.y*Be.w),I.viewport(s),Y.updateMatrices(de,Ue),r=Y.getFrustum(),T(C,U,Y.camera,de,this.type)}Y.isPointLightShadow!==!0&&this.type===fi&&y(Y,U),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(M,S,R)};function y(A,C){let U=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(a.x,a.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(C,null,U,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(C,null,U,p,v,null)}function _(A,C,U,M){let S=null,R=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=S.uuid,k=C.uuid,F=h[I];F===void 0&&(F={},h[I]=F);let ae=F[k];ae===void 0&&(ae=S.clone(),F[k]=ae,C.addEventListener("dispose",B)),S=ae}if(S.visible=C.visible,S.wireframe=C.wireframe,M===fi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=e.properties.get(S);I.light=U}return S}function T(A,C,U,M,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===fi)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let I=t.update(A),k=A.material;if(Array.isArray(k)){let F=I.groups;for(let ae=0,G=F.length;ae<G;ae++){let de=F[ae],Y=k[de.materialIndex];if(Y&&Y.visible){let he=_(A,Y,M,S);A.onBeforeShadow(e,A,C,U,I,he,de),e.renderBufferDirect(U,null,I,he,A,de),A.onAfterShadow(e,A,C,U,I,he,de)}}}else if(k.visible){let F=_(A,k,M,S);A.onBeforeShadow(e,A,C,U,I,F,null),e.renderBufferDirect(U,null,I,F,A,null),A.onAfterShadow(e,A,C,U,I,F,null)}}let R=A.children;for(let I=0,k=R.length;I<k;I++)T(R[I],C,U,M,S)}function B(A){A.target.removeEventListener("dispose",B);for(let C in h){let U=h[C],M=A.target.uuid;M in U&&(U[M].dispose(),delete U[M])}}}var gg={[Ln]:Nn,[In]:On,[Un]:Fn,[pr]:Dn,[Nn]:Ln,[On]:In,[Fn]:Un,[Dn]:pr};function vg(e,t){function i(){let L=!1,fe=new mt,Q=null,V=new mt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!L&&(e.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){L=xe},setClear:function(xe,ie,Oe,Ve,qe){qe===!0&&(xe*=Ve,ie*=Ve,Oe*=Ve),fe.set(xe,ie,Oe,Ve),V.equals(fe)===!1&&(e.clearColor(xe,ie,Oe,Ve),V.copy(fe))},reset:function(){L=!1,Q=null,V.set(-1,0,0,0)}}}function r(){let L=!1,fe=!1,Q=null,V=null,xe=null;return{setReversed:function(ie){if(fe!==ie){let Oe=t.get("EXT_clip_control");fe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);let Ve=xe;xe=null,this.setClear(Ve)}fe=ie},getReversed:function(){return fe},setTest:function(ie){ie?H(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!L&&(e.depthMask(ie),Q=ie)},setFunc:function(ie){if(fe&&(ie=gg[ie]),V!==ie){switch(ie){case Ln:e.depthFunc(e.NEVER);break;case Nn:e.depthFunc(e.ALWAYS);break;case In:e.depthFunc(e.LESS);break;case pr:e.depthFunc(e.LEQUAL);break;case Un:e.depthFunc(e.EQUAL);break;case Dn:e.depthFunc(e.GEQUAL);break;case On:e.depthFunc(e.GREATER);break;case Fn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}V=ie}},setLocked:function(ie){L=ie},setClear:function(ie){xe!==ie&&(fe&&(ie=1-ie),e.clearDepth(ie),xe=ie)},reset:function(){L=!1,Q=null,V=null,xe=null,fe=!1}}}function a(){let L=!1,fe=null,Q=null,V=null,xe=null,ie=null,Oe=null,Ve=null,qe=null;return{setTest:function(je){L||(je?H(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(je){fe!==je&&!L&&(e.stencilMask(je),fe=je)},setFunc:function(je,Ht,vt){(Q!==je||V!==Ht||xe!==vt)&&(e.stencilFunc(je,Ht,vt),Q=je,V=Ht,xe=vt)},setOp:function(je,Ht,vt){(ie!==je||Oe!==Ht||Ve!==vt)&&(e.stencilOp(je,Ht,vt),ie=je,Oe=Ht,Ve=vt)},setLocked:function(je){L=je},setClear:function(je){qe!==je&&(e.clearStencil(je),qe=je)},reset:function(){L=!1,fe=null,Q=null,V=null,xe=null,ie=null,Oe=null,Ve=null,qe=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,T=null,B=null,A=null,C=new Xe(0,0,0),U=0,M=!1,S=null,R=null,I=null,k=null,F=null,ae=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,de=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=de>=1):Y.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=de>=2);let he=null,Se={},Ue=e.getParameter(e.SCISSOR_BOX),Be=e.getParameter(e.VIEWPORT),q=new mt().fromArray(Ue),ye=new mt().fromArray(Be);function O(L,fe,Q,V){let xe=new Uint8Array(4),ie=e.createTexture();e.bindTexture(L,ie),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<Q;Oe++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(fe,0,e.RGBA,1,1,V,0,e.RGBA,e.UNSIGNED_BYTE,xe):e.texImage2D(fe+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return ie}let j={};j[e.TEXTURE_2D]=O(e.TEXTURE_2D,e.TEXTURE_2D,1),j[e.TEXTURE_CUBE_MAP]=O(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[e.TEXTURE_2D_ARRAY]=O(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),j[e.TEXTURE_3D]=O(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(e.DEPTH_TEST),s.setFunc(pr),ce(!1),se(ko),H(e.CULL_FACE),be(Ci);function H(L){c[L]!==!0&&(e.enable(L),c[L]=!0)}function le(L){c[L]!==!1&&(e.disable(L),c[L]=!1)}function pe(L,fe){return u[L]!==fe?(e.bindFramebuffer(L,fe),u[L]=fe,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=fe),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ee(L,fe){let Q=p,V=!1;if(L){Q=d.get(fe),Q===void 0&&(Q=[],d.set(fe,Q));let xe=L.textures;if(Q.length!==xe.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let ie=0,Oe=xe.length;ie<Oe;ie++)Q[ie]=e.COLOR_ATTACHMENT0+ie;Q.length=xe.length,V=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,V=!0);V&&e.drawBuffers(Q)}function J(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let W={[Ji]:e.FUNC_ADD,[Ic]:e.FUNC_SUBTRACT,[Uc]:e.FUNC_REVERSE_SUBTRACT};W[Dc]=e.MIN,W[Oc]=e.MAX;let b={[Fc]:e.ZERO,[zc]:e.ONE,[Bc]:e.SRC_COLOR,[Cn]:e.SRC_ALPHA,[Xc]:e.SRC_ALPHA_SATURATE,[Vc]:e.DST_COLOR,[Gc]:e.DST_ALPHA,[Hc]:e.ONE_MINUS_SRC_COLOR,[Pn]:e.ONE_MINUS_SRC_ALPHA,[Wc]:e.ONE_MINUS_DST_COLOR,[kc]:e.ONE_MINUS_DST_ALPHA,[jc]:e.CONSTANT_COLOR,[qc]:e.ONE_MINUS_CONSTANT_COLOR,[Yc]:e.CONSTANT_ALPHA,[Jc]:e.ONE_MINUS_CONSTANT_ALPHA};function be(L,fe,Q,V,xe,ie,Oe,Ve,qe,je){if(L===Ci){v===!0&&(le(e.BLEND),v=!1);return}if(v===!1&&(H(e.BLEND),v=!0),L!==Nc){if(L!==m||je!==M){if((f!==Ji||T!==Ji)&&(e.blendEquation(e.FUNC_ADD),f=Ji,T=Ji),je)switch(L){case dr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wo:e.blendFunc(e.ONE,e.ONE);break;case Xo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case jo:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case dr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wo:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Xo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case jo:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,_=null,B=null,A=null,C.set(0,0,0),U=0,m=L,M=je}return}xe=xe||fe,ie=ie||Q,Oe=Oe||V,(fe!==f||xe!==T)&&(e.blendEquationSeparate(W[fe],W[xe]),f=fe,T=xe),(Q!==y||V!==_||ie!==B||Oe!==A)&&(e.blendFuncSeparate(b[Q],b[V],b[ie],b[Oe]),y=Q,_=V,B=ie,A=Oe),(Ve.equals(C)===!1||qe!==U)&&(e.blendColor(Ve.r,Ve.g,Ve.b,qe),C.copy(Ve),U=qe),m=L,M=!1}function ue(L,fe){L.side===ii?le(e.CULL_FACE):H(e.CULL_FACE);let Q=L.side===Lt;fe&&(Q=!Q),ce(Q),L.blending===dr&&L.transparent===!1?be(Ci):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let V=L.stencilWrite;o.setTest(V),V&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),X(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?H(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){S!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),S=L)}function se(L){L!==Cc?(H(e.CULL_FACE),L!==R&&(L===ko?e.cullFace(e.BACK):L===Pc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),R=L}function Pe(L){L!==I&&(G&&e.lineWidth(L),I=L)}function X(L,fe,Q){L?(H(e.POLYGON_OFFSET_FILL),(k!==fe||F!==Q)&&(e.polygonOffset(fe,Q),k=fe,F=Q)):le(e.POLYGON_OFFSET_FILL)}function ve(L){L?H(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function w(L){L===void 0&&(L=e.TEXTURE0+ae-1),he!==L&&(e.activeTexture(L),he=L)}function x(L,fe,Q){Q===void 0&&(he===null?Q=e.TEXTURE0+ae-1:Q=he);let V=Se[Q];V===void 0&&(V={type:void 0,texture:void 0},Se[Q]=V),(V.type!==L||V.texture!==fe)&&(he!==Q&&(e.activeTexture(Q),he=Q),e.bindTexture(L,fe||j[L]),V.type=L,V.texture=fe)}function P(){let L=Se[he];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(L){q.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function re(L){ye.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function Re(L,fe){let Q=h.get(fe);Q===void 0&&(Q=new WeakMap,h.set(fe,Q));let V=Q.get(L);V===void 0&&(V=e.getUniformBlockIndex(fe,L.name),Q.set(L,V))}function Ae(L,fe){let Q=h.get(fe).get(L);l.get(fe)!==Q&&(e.uniformBlockBinding(fe,Q,L.__bindingPointIndex),l.set(fe,Q))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},he=null,Se={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,T=null,B=null,A=null,C=new Xe(0,0,0),U=0,M=!1,S=null,R=null,I=null,k=null,F=null,q.set(0,0,e.canvas.width,e.canvas.height),ye.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:H,disable:le,bindFramebuffer:pe,drawBuffers:Ee,useProgram:J,setBlending:be,setMaterial:ue,setFlipSided:ce,setCullFace:se,setLineWidth:Pe,setPolygonOffset:X,setScissorTest:ve,activeTexture:w,bindTexture:x,unbindTexture:P,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:we,texImage3D:ge,updateUBOMapping:Re,uniformBlockBinding:Ae,texStorage2D:Ne,texStorage3D:me,texSubImage2D:$,texSubImage3D:Me,compressedTexSubImage2D:ee,compressedTexSubImage3D:_e,scissor:oe,viewport:re,reset:Ie}}function vh(e,t,i,r){let a=_g(r);switch(i){case Ko:return e*t;case el:return e*t;case tl:return e*t*2;case Xn:return e*t/a.components*a.byteLength;case jn:return e*t/a.components*a.byteLength;case il:return e*t*2/a.components*a.byteLength;case qn:return e*t*2/a.components*a.byteLength;case Qo:return e*t*3/a.components*a.byteLength;case Yt:return e*t*4/a.components*a.byteLength;case Yn:return e*t*4/a.components*a.byteLength;case Na:case Ia:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Da:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zn:case Kn:return Math.max(e,16)*Math.max(t,8)/4;case Jn:case $n:return Math.max(e,8)*Math.max(t,8)/2;case Qn:case es:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ts:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case is:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case as:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ns:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ss:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case os:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ls:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case hs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case cs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case us:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ds:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ps:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case fs:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ms:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oa:case gs:case vs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case rl:case _s:return Math.ceil(e/4)*Math.ceil(t/4)*8;case xs:case ys:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _g(e){switch(e){case gi:case Jo:return{byteLength:1,components:1};case ea:case Zo:case gr:return{byteLength:2,components:1};case Vn:case Wn:return{byteLength:2,components:4};case $i:case kn:case ai:return{byteLength:4,components:1};case $o:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function xg(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ce,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Ha("canvas")}function v(w,x,P){let te=1,ne=ve(w);if((ne.width>P||ne.height>P)&&(te=P/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let $=Math.floor(te*ne.width),Me=Math.floor(te*ne.height);u===void 0&&(u=g($,Me));let ee=x?g($,Me):u;return ee.width=$,ee.height=Me,ee.getContext("2d").drawImage(w,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Me+")."),ee}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){e.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(w,x,P,te,ne=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===e.RED&&(P===e.FLOAT&&($=e.R32F),P===e.HALF_FLOAT&&($=e.R16F),P===e.UNSIGNED_BYTE&&($=e.R8)),x===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&($=e.R8UI),P===e.UNSIGNED_SHORT&&($=e.R16UI),P===e.UNSIGNED_INT&&($=e.R32UI),P===e.BYTE&&($=e.R8I),P===e.SHORT&&($=e.R16I),P===e.INT&&($=e.R32I)),x===e.RG&&(P===e.FLOAT&&($=e.RG32F),P===e.HALF_FLOAT&&($=e.RG16F),P===e.UNSIGNED_BYTE&&($=e.RG8)),x===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&($=e.RG8UI),P===e.UNSIGNED_SHORT&&($=e.RG16UI),P===e.UNSIGNED_INT&&($=e.RG32UI),P===e.BYTE&&($=e.RG8I),P===e.SHORT&&($=e.RG16I),P===e.INT&&($=e.RG32I)),x===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&($=e.RGB8UI),P===e.UNSIGNED_SHORT&&($=e.RGB16UI),P===e.UNSIGNED_INT&&($=e.RGB32UI),P===e.BYTE&&($=e.RGB8I),P===e.SHORT&&($=e.RGB16I),P===e.INT&&($=e.RGB32I)),x===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&($=e.RGBA8UI),P===e.UNSIGNED_SHORT&&($=e.RGBA16UI),P===e.UNSIGNED_INT&&($=e.RGBA32UI),P===e.BYTE&&($=e.RGBA8I),P===e.SHORT&&($=e.RGBA16I),P===e.INT&&($=e.RGBA32I)),x===e.RGB&&P===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),x===e.RGBA){let Me=ne?za:Ke.getTransfer(te);P===e.FLOAT&&($=e.RGBA32F),P===e.HALF_FLOAT&&($=e.RGBA16F),P===e.UNSIGNED_BYTE&&($=Me===et?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function T(w,x){let P;return w?x===null||x===$i||x===vr?P=e.DEPTH24_STENCIL8:x===ai?P=e.DEPTH32F_STENCIL8:x===ea&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$i||x===vr?P=e.DEPTH_COMPONENT24:x===ai?P=e.DEPTH_COMPONENT32F:x===ea&&(P=e.DEPTH_COMPONENT16),P}function B(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){let x=w.target;x.removeEventListener("dispose",A),U(x),x.isVideoTexture&&c.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),S(x)}function U(w){let x=r.get(w);if(x.__webglInit===void 0)return;let P=w.source,te=d.get(P);if(te){let ne=te[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(w),Object.keys(te).length===0&&d.delete(P)}r.remove(w)}function M(w){let x=r.get(w);e.deleteTexture(x.__webglTexture);let P=w.source,te=d.get(P);delete te[x.__cacheKey],s.memory.textures--}function S(w){let x=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ne=0;ne<x.__webglFramebuffer[te].length;ne++)e.deleteFramebuffer(x.__webglFramebuffer[te][ne]);else e.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)e.deleteFramebuffer(x.__webglFramebuffer[te]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=w.textures;for(let te=0,ne=P.length;te<ne;te++){let $=r.get(P[te]);$.__webglTexture&&(e.deleteTexture($.__webglTexture),s.memory.textures--),r.remove(P[te])}r.remove(w)}let R=0;function I(){R=0}function k(){let w=R;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),R+=1,w}function F(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ae(w,x){let P=r.get(w);if(w.isVideoTexture&&Pe(w),w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){let te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(P,w,x);return}}i.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+x)}function G(w,x){let P=r.get(w);if(w.version>0&&P.__version!==w.version){ye(P,w,x);return}i.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+x)}function de(w,x){let P=r.get(w);if(w.version>0&&P.__version!==w.version){ye(P,w,x);return}i.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+x)}function Y(w,x){let P=r.get(w);if(w.version>0&&P.__version!==w.version){O(P,w,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+x)}let he={[Pa]:e.REPEAT,[Zi]:e.CLAMP_TO_EDGE,[Hn]:e.MIRRORED_REPEAT},Se={[Ot]:e.NEAREST,[nu]:e.NEAREST_MIPMAP_NEAREST,[La]:e.NEAREST_MIPMAP_LINEAR,[qt]:e.LINEAR,[Gn]:e.LINEAR_MIPMAP_NEAREST,[mi]:e.LINEAR_MIPMAP_LINEAR},Ue={[hu]:e.NEVER,[mu]:e.ALWAYS,[cu]:e.LESS,[hl]:e.LEQUAL,[uu]:e.EQUAL,[fu]:e.GEQUAL,[du]:e.GREATER,[pu]:e.NOTEQUAL};function Be(w,x){if(x.type===ai&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===Gn||x.magFilter===La||x.magFilter===mi||x.minFilter===qt||x.minFilter===Gn||x.minFilter===La||x.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,he[x.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,he[x.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,he[x.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Se[x.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Se[x.minFilter]),x.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Ue[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ot||x.minFilter!==La&&x.minFilter!==mi||x.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function q(w,x){let P=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let te=x.source,ne=d.get(te);ne===void 0&&(ne={},d.set(te,ne));let $=F(x);if($!==w.__cacheKey){ne[$]===void 0&&(ne[$]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,P=!0),ne[$].usedTimes++;let Me=ne[w.__cacheKey];Me!==void 0&&(ne[w.__cacheKey].usedTimes--,Me.usedTimes===0&&M(x)),w.__cacheKey=$,w.__webglTexture=ne[$].texture}return P}function ye(w,x,P){let te=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=e.TEXTURE_3D);let ne=q(w,x),$=x.source;i.bindTexture(te,w.__webglTexture,e.TEXTURE0+P);let Me=r.get($);if($.version!==Me.__version||ne===!0){i.activeTexture(e.TEXTURE0+P);let ee=Ke.getPrimaries(Ke.workingColorSpace),_e=x.colorSpace===Pi?null:Ke.getPrimaries(x.colorSpace),Ne=x.colorSpace===Pi||ee===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let me=v(x.image,!1,a.maxTextureSize);me=X(x,me);let we=n.convert(x.format,x.colorSpace),ge=n.convert(x.type),oe=_(x.internalFormat,we,ge,x.colorSpace,x.isVideoTexture);Be(te,x);let re,Re=x.mipmaps,Ae=x.isVideoTexture!==!0,Ie=Me.__version===void 0||ne===!0,L=$.dataReady,fe=B(x,me);if(x.isDepthTexture)oe=T(x.format===xr,x.type),Ie&&(Ae?i.texStorage2D(e.TEXTURE_2D,1,oe,me.width,me.height):i.texImage2D(e.TEXTURE_2D,0,oe,me.width,me.height,0,we,ge,null));else if(x.isDataTexture)if(Re.length>0){Ae&&Ie&&i.texStorage2D(e.TEXTURE_2D,fe,oe,Re[0].width,Re[0].height);for(let Q=0,V=Re.length;Q<V;Q++)re=Re[Q],Ae?L&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,re.width,re.height,we,ge,re.data):i.texImage2D(e.TEXTURE_2D,Q,oe,re.width,re.height,0,we,ge,re.data);x.generateMipmaps=!1}else Ae?(Ie&&i.texStorage2D(e.TEXTURE_2D,fe,oe,me.width,me.height),L&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,me.width,me.height,we,ge,me.data)):i.texImage2D(e.TEXTURE_2D,0,oe,me.width,me.height,0,we,ge,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ae&&Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,fe,oe,Re[0].width,Re[0].height,me.depth);for(let Q=0,V=Re.length;Q<V;Q++)if(re=Re[Q],x.format!==Yt)if(we!==null)if(Ae){if(L)if(x.layerUpdates.size>0){let xe=vh(re.width,re.height,x.format,x.type);for(let ie of x.layerUpdates){let Oe=re.data.subarray(ie*xe/re.data.BYTES_PER_ELEMENT,(ie+1)*xe/re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,ie,re.width,re.height,1,we,Oe)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,me.depth,we,re.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,oe,re.width,re.height,me.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?L&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,me.depth,we,ge,re.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Q,oe,re.width,re.height,me.depth,0,we,ge,re.data)}else{Ae&&Ie&&i.texStorage2D(e.TEXTURE_2D,fe,oe,Re[0].width,Re[0].height);for(let Q=0,V=Re.length;Q<V;Q++)re=Re[Q],x.format!==Yt?we!==null?Ae?L&&i.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,re.width,re.height,we,re.data):i.compressedTexImage2D(e.TEXTURE_2D,Q,oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?L&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,re.width,re.height,we,ge,re.data):i.texImage2D(e.TEXTURE_2D,Q,oe,re.width,re.height,0,we,ge,re.data)}else if(x.isDataArrayTexture)if(Ae){if(Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,fe,oe,me.width,me.height,me.depth),L)if(x.layerUpdates.size>0){let Q=vh(me.width,me.height,x.format,x.type);for(let V of x.layerUpdates){let xe=me.data.subarray(V*Q/me.data.BYTES_PER_ELEMENT,(V+1)*Q/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,V,me.width,me.height,1,we,ge,xe)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,we,ge,me.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,oe,me.width,me.height,me.depth,0,we,ge,me.data);else if(x.isData3DTexture)Ae?(Ie&&i.texStorage3D(e.TEXTURE_3D,fe,oe,me.width,me.height,me.depth),L&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,we,ge,me.data)):i.texImage3D(e.TEXTURE_3D,0,oe,me.width,me.height,me.depth,0,we,ge,me.data);else if(x.isFramebufferTexture){if(Ie)if(Ae)i.texStorage2D(e.TEXTURE_2D,fe,oe,me.width,me.height);else{let Q=me.width,V=me.height;for(let xe=0;xe<fe;xe++)i.texImage2D(e.TEXTURE_2D,xe,oe,Q,V,0,we,ge,null),Q>>=1,V>>=1}}else if(Re.length>0){if(Ae&&Ie){let Q=ve(Re[0]);i.texStorage2D(e.TEXTURE_2D,fe,oe,Q.width,Q.height)}for(let Q=0,V=Re.length;Q<V;Q++)re=Re[Q],Ae?L&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,we,ge,re):i.texImage2D(e.TEXTURE_2D,Q,oe,we,ge,re);x.generateMipmaps=!1}else if(Ae){if(Ie){let Q=ve(me);i.texStorage2D(e.TEXTURE_2D,fe,oe,Q.width,Q.height)}L&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,we,ge,me)}else i.texImage2D(e.TEXTURE_2D,0,oe,we,ge,me);m(x)&&f(te),Me.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function O(w,x,P){if(x.image.length!==6)return;let te=q(w,x),ne=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+P);let $=r.get(ne);if(ne.version!==$.__version||te===!0){i.activeTexture(e.TEXTURE0+P);let Me=Ke.getPrimaries(Ke.workingColorSpace),ee=x.colorSpace===Pi?null:Ke.getPrimaries(x.colorSpace),_e=x.colorSpace===Pi||Me===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,we=[];for(let V=0;V<6;V++)!Ne&&!me?we[V]=v(x.image[V],!0,a.maxCubemapSize):we[V]=me?x.image[V].image:x.image[V],we[V]=X(x,we[V]);let ge=we[0],oe=n.convert(x.format,x.colorSpace),re=n.convert(x.type),Re=_(x.internalFormat,oe,re,x.colorSpace),Ae=x.isVideoTexture!==!0,Ie=$.__version===void 0||te===!0,L=ne.dataReady,fe=B(x,ge);Be(e.TEXTURE_CUBE_MAP,x);let Q;if(Ne){Ae&&Ie&&i.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Re,ge.width,ge.height);for(let V=0;V<6;V++){Q=we[V].mipmaps;for(let xe=0;xe<Q.length;xe++){let ie=Q[xe];x.format!==Yt?oe!==null?Ae?L&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe,0,0,ie.width,ie.height,oe,ie.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe,Re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?L&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe,0,0,ie.width,ie.height,oe,re,ie.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe,Re,ie.width,ie.height,0,oe,re,ie.data)}}}else{if(Q=x.mipmaps,Ae&&Ie){Q.length>0&&fe++;let V=ve(we[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Re,V.width,V.height)}for(let V=0;V<6;V++)if(me){Ae?L&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,we[V].width,we[V].height,oe,re,we[V].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Re,we[V].width,we[V].height,0,oe,re,we[V].data);for(let xe=0;xe<Q.length;xe++){let ie=Q[xe].image[V].image;Ae?L&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe+1,0,0,ie.width,ie.height,oe,re,ie.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe+1,Re,ie.width,ie.height,0,oe,re,ie.data)}}else{Ae?L&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,oe,re,we[V]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Re,oe,re,we[V]);for(let xe=0;xe<Q.length;xe++){let ie=Q[xe];Ae?L&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe+1,0,0,oe,re,ie.image[V]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe+1,Re,oe,re,ie.image[V])}}}m(x)&&f(e.TEXTURE_CUBE_MAP),$.__version=ne.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,P,te,ne,$){let Me=n.convert(P.format,P.colorSpace),ee=n.convert(P.type),_e=_(P.internalFormat,Me,ee,P.colorSpace),Ne=r.get(x),me=r.get(P);if(me.__renderTarget=x,!Ne.__hasExternalTextures){let we=Math.max(1,x.width>>$),ge=Math.max(1,x.height>>$);ne===e.TEXTURE_3D||ne===e.TEXTURE_2D_ARRAY?i.texImage3D(ne,$,_e,we,ge,x.depth,0,Me,ee,null):i.texImage2D(ne,$,_e,we,ge,0,Me,ee,null)}i.bindFramebuffer(e.FRAMEBUFFER,w),se(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,ne,me.__webglTexture,0,ce(x)):(ne===e.TEXTURE_2D||ne>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,te,ne,me.__webglTexture,$),i.bindFramebuffer(e.FRAMEBUFFER,null)}function H(w,x,P){if(e.bindRenderbuffer(e.RENDERBUFFER,w),x.depthBuffer){let te=x.depthTexture,ne=te&&te.isDepthTexture?te.type:null,$=T(x.stencilBuffer,ne),Me=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=ce(x);se(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,$,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,$,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,$,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,w)}else{let te=x.textures;for(let ne=0;ne<te.length;ne++){let $=te[ne],Me=n.convert($.format,$.colorSpace),ee=n.convert($.type),_e=_($.internalFormat,Me,ee,$.colorSpace),Ne=ce(x);P&&se(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,_e,x.width,x.height):se(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne,_e,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,_e,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let P=r.get(x.depthTexture);P.__renderTarget=x,(!P.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);let te=P.__webglTexture,ne=ce(x);if(x.depthTexture.format===_r)se(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,te,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,te,0);else if(x.depthTexture.format===xr)se(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,te,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function pe(w){let x=r.get(w),P=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let te=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",ne)};te.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=te}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,w)}else if(P){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=e.createRenderbuffer(),H(x.__webglDepthbuffer[te],w,!1);else{let ne=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[te];e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,$)}}else if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),H(x.__webglDepthbuffer,w,!1);else{let te=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ne),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,ne)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(w,x,P){let te=r.get(w);x!==void 0&&j(te.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&pe(w)}function J(w){let x=w.texture,P=r.get(w),te=r.get(x);w.addEventListener("dispose",C);let ne=w.textures,$=w.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(te.__webglTexture===void 0&&(te.__webglTexture=e.createTexture()),te.__version=x.version,s.memory.textures++),$){P.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[ee]=[];for(let _e=0;_e<x.mipmaps.length;_e++)P.__webglFramebuffer[ee][_e]=e.createFramebuffer()}else P.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let ee=0;ee<x.mipmaps.length;ee++)P.__webglFramebuffer[ee]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Me)for(let ee=0,_e=ne.length;ee<_e;ee++){let Ne=r.get(ne[ee]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=e.createTexture(),s.memory.textures++)}if(w.samples>0&&se(w)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ee=0;ee<ne.length;ee++){let _e=ne[ee];P.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ee]);let Ne=n.convert(_e.format,_e.colorSpace),me=n.convert(_e.type),we=_(_e.internalFormat,Ne,me,_e.colorSpace,w.isXRRenderTarget===!0),ge=ce(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,ge,we,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,P.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),H(P.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if($){i.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture),Be(e.TEXTURE_CUBE_MAP,x);for(let ee=0;ee<6;ee++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)j(P.__webglFramebuffer[ee][_e],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e);else j(P.__webglFramebuffer[ee],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(x)&&f(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Me){for(let ee=0,_e=ne.length;ee<_e;ee++){let Ne=ne[ee],me=r.get(Ne);i.bindTexture(e.TEXTURE_2D,me.__webglTexture),Be(e.TEXTURE_2D,Ne),j(P.__webglFramebuffer,w,Ne,e.COLOR_ATTACHMENT0+ee,e.TEXTURE_2D,0),m(Ne)&&f(e.TEXTURE_2D)}i.unbindTexture()}else{let ee=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ee,te.__webglTexture),Be(ee,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)j(P.__webglFramebuffer[_e],w,x,e.COLOR_ATTACHMENT0,ee,_e);else j(P.__webglFramebuffer,w,x,e.COLOR_ATTACHMENT0,ee,0);m(x)&&f(ee),i.unbindTexture()}w.depthBuffer&&pe(w)}function W(w){let x=w.textures;for(let P=0,te=x.length;P<te;P++){let ne=x[P];if(m(ne)){let $=y(w),Me=r.get(ne).__webglTexture;i.bindTexture($,Me),f($),i.unbindTexture()}}}let b=[],be=[];function ue(w){if(w.samples>0){if(se(w)===!1){let x=w.textures,P=w.width,te=w.height,ne=e.COLOR_BUFFER_BIT,$=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=r.get(w),ee=x.length>1;if(ee)for(let _e=0;_e<x.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let Ne=r.get(x[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ne,0)}e.blitFramebuffer(0,0,P,te,0,0,P,te,ne,e.NEAREST),l===!0&&(b.length=0,be.length=0,b.push(e.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.resolveDepthBuffer===!1&&(b.push($),be.push($),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,b))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let _e=0;_e<x.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let Ne=r.get(x[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Ne,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ce(w){return Math.min(a.maxSamples,w.samples)}function se(w){let x=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pe(w){let x=s.render.frame;c.get(w)!==x&&(c.set(w,x),w.update())}function X(w,x){let P=w.colorSpace,te=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||P!==yr&&P!==Pi&&(Ke.getTransfer(P)===et?(te!==Yt||ne!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}function ve(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=ae,this.setTexture2DArray=G,this.setTexture3D=de,this.setTextureCube=Y,this.rebindTextures=Ee,this.setupRenderTarget=J,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=j,this.useMultisampledRTT=se}function yg(e,t){function i(r,a=Pi){let n,s=Ke.getTransfer(a);if(r===gi)return e.UNSIGNED_BYTE;if(r===Vn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Wn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===$o)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Jo)return e.BYTE;if(r===Zo)return e.SHORT;if(r===ea)return e.UNSIGNED_SHORT;if(r===kn)return e.INT;if(r===$i)return e.UNSIGNED_INT;if(r===ai)return e.FLOAT;if(r===gr)return e.HALF_FLOAT;if(r===Ko)return e.ALPHA;if(r===Qo)return e.RGB;if(r===Yt)return e.RGBA;if(r===el)return e.LUMINANCE;if(r===tl)return e.LUMINANCE_ALPHA;if(r===_r)return e.DEPTH_COMPONENT;if(r===xr)return e.DEPTH_STENCIL;if(r===Xn)return e.RED;if(r===jn)return e.RED_INTEGER;if(r===il)return e.RG;if(r===qn)return e.RG_INTEGER;if(r===Yn)return e.RGBA_INTEGER;if(r===Na||r===Ia||r===Ua||r===Da)if(s===et)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Na)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ia)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Na)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ia)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ua)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jn||r===Zn||r===$n||r===Kn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Jn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$n)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qn||r===es||r===ts)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Qn||r===es)return s===et?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===ts)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===is||r===rs||r===as||r===ns||r===ss||r===os||r===ls||r===hs||r===cs||r===us||r===ds||r===ps||r===fs||r===ms)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===is)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rs)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===as)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ns)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ss)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===os)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ls)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hs)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cs)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===us)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ds)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ps)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fs)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ms)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oa||r===gs||r===vs)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Oa)return s===et?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rl||r===_s||r===xs||r===ys)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Oa)return n.COMPRESSED_RED_RGTC1_EXT;if(r===_s)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xs)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ys)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Mg=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},or=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sg={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,i),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
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

}`,bg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Gt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new si({vertexShader:Eg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Wt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wg=class extends Sr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new bg,v=t.getContextAttributes(),m=null,f=null,y=[],_=[],T=new Ce,B=null,A=new Bt;A.viewport=new mt;let C=new Bt;C.viewport=new mt;let U=[A,C],M=new Mg,S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ye=y[q];return ye===void 0&&(ye=new no,y[q]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(q){let ye=y[q];return ye===void 0&&(ye=new no,y[q]=ye),ye.getGripSpace()},this.getHand=function(q){let ye=y[q];return ye===void 0&&(ye=new no,y[q]=ye),ye.getHandSpace()};function I(q){let ye=_.indexOf(q.inputSource);if(ye===-1)return;let O=y[ye];O!==void 0&&(O.update(q.inputSource,q.frame,l||n),O.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",F);for(let q=0;q<y.length;q++){let ye=_[q];ye!==null&&(_[q]=null,y[q].disconnect(ye))}S=null,R=null,g.reset(),e.setRenderTarget(m),d=null,u=null,c=null,r=null,f=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",k),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){let ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Li(d.framebufferWidth,d.framebufferHeight,{format:Yt,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ye=null,O=null,j=null;v.depth&&(j=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?xr:_r,O=v.stencil?vr:$i);let H={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(H),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new Li(u.textureWidth,u.textureHeight,{format:Yt,type:gi,depthTexture:new Jl(u.textureWidth,u.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(q){for(let ye=0;ye<q.removed.length;ye++){let O=q.removed[ye],j=_.indexOf(O);j>=0&&(_[j]=null,y[j].disconnect(O))}for(let ye=0;ye<q.added.length;ye++){let O=q.added[ye],j=_.indexOf(O);if(j===-1){for(let le=0;le<y.length;le++)if(le>=_.length){_.push(O),j=le;break}else if(_[le]===null){_[le]=O,j=le;break}if(j===-1)break}let H=y[j];H&&H.connect(O)}}let ae=new N,G=new N;function de(q,ye,O){ae.setFromMatrixPosition(ye.matrixWorld),G.setFromMatrixPosition(O.matrixWorld);let j=ae.distanceTo(G),H=ye.projectionMatrix.elements,le=O.projectionMatrix.elements,pe=H[14]/(H[10]-1),Ee=H[14]/(H[10]+1),J=(H[9]+1)/H[5],W=(H[9]-1)/H[5],b=(H[8]-1)/H[0],be=(le[8]+1)/le[0],ue=pe*b,ce=pe*be,se=j/(-b+be),Pe=se*-b;if(ye.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),H[10]===-1)q.projectionMatrix.copy(ye.projectionMatrix),q.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{let X=pe+se,ve=Ee+se,w=ue-Pe,x=ce+(j-Pe),P=J*Ee/ve*X,te=W*Ee/ve*X;q.projectionMatrix.makePerspective(w,x,P,te,X,ve),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Y(q,ye){ye===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ye.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ye=q.near,O=q.far;g.texture!==null&&(g.depthNear>0&&(ye=g.depthNear),g.depthFar>0&&(O=g.depthFar)),M.near=C.near=A.near=ye,M.far=C.far=A.far=O,(S!==M.near||R!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,R=M.far),A.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let j=q.parent,H=M.cameras;Y(M,j);for(let le=0;le<H.length;le++)Y(H[le],j);H.length===2?de(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),he(q,M,j)};function he(q,ye,O){O===null?q.matrix.copy(ye.matrixWorld):(q.matrix.copy(O.matrixWorld),q.matrix.invert(),q.matrix.multiply(ye.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ye.projectionMatrix),q.projectionMatrixInverse.copy(ye.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(q){o=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Se=null;function Ue(q,ye){if(h=ye.getViewerPose(l||n),p=ye,h!==null){let O=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let j=!1;O.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let le=0;le<O.length;le++){let pe=O[le],Ee=null;if(d!==null)Ee=d.getViewport(pe);else{let W=c.getViewSubImage(u,pe);Ee=W.viewport,le===0&&(e.setRenderTargetTextures(f,W.colorTexture,u.ignoreDepthValues?void 0:W.depthStencilTexture),e.setRenderTarget(f))}let J=U[le];J===void 0&&(J=new Bt,J.layers.enable(le),J.viewport=new mt,U[le]=J),J.matrix.fromArray(pe.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(pe.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),le===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(J)}let H=r.enabledFeatures;if(H&&H.includes("depth-sensing")){let le=c.getDepthInformation(O[0]);le&&le.isValid&&le.texture&&g.init(e,le,r.renderState)}}for(let O=0;O<y.length;O++){let j=_[O],H=y[O];j!==null&&H!==void 0&&H.update(j,ye,l||n)}Se&&Se(q,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),p=null}let Be=new kl;Be.setAnimationLoop(Ue),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}},lr=new Oi,Ag=new rt;function Rg(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Fl(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,y,_,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(m,f):f.isMeshToonMaterial?(n(m,f),u(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f)):f.isMeshStandardMaterial?(n(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(n(m,f),g(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),v(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Lt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Lt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),_=y.envMap,T=y.envMapRotation;_&&(m.envMap.value=_,lr.copy(T),lr.x*=-1,lr.y*=-1,lr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(lr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Cg(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let T=_.program;r.uniformBlockBinding(y,T)}function h(y,_){let T=a[y.id];T===void 0&&(g(y),T=c(y),a[y.id]=T,y.addEventListener("dispose",m));let B=_.program;r.updateUBOMapping(y,B);let A=t.render.frame;n[y.id]!==A&&(d(y),n[y.id]=A)}function c(y){let _=u();y.__bindingPointIndex=_;let T=e.createBuffer(),B=y.__size,A=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,B,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,T),T}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=a[y.id],T=y.uniforms,B=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let A=0,C=T.length;A<C;A++){let U=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,S=U.length;M<S;M++){let R=U[M];if(p(R,A,M,B)===!0){let I=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],F=0;for(let ae=0;ae<k.length;ae++){let G=k[ae],de=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,I+F,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,F),F+=de.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,_,T,B){let A=y.value,C=_+"_"+T;if(B[C]===void 0)return typeof A=="number"||typeof A=="boolean"?B[C]=A:B[C]=A.clone(),!0;{let U=B[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return B[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(y){let _=y.uniforms,T=0,B=16;for(let C=0,U=_.length;C<U;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,R=M.length;S<R;S++){let I=M[S],k=Array.isArray(I.value)?I.value:[I.value];for(let F=0,ae=k.length;F<ae;F++){let G=k[F],de=v(G),Y=T%B,he=Y%de.boundary,Se=Y+he;T+=he,Se!==0&&B-Se<de.storage&&(T+=B-Se),I.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=de.storage}}}let A=T%B;return A>0&&(T+=B-A),y.__size=T,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let T=s.indexOf(_.__bindingPointIndex);s.splice(T,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete n[_.id]}function f(){for(let y in a)e.deleteBuffer(a[y]);s=[],a={},n={}}return{bind:l,update:h,dispose:f}}var _h=class{constructor(e={}){let{canvas:t=vu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=n;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this.toneMapping=ri,this.toneMappingExposure=1;let _=this,T=!1,B=0,A=0,C=null,U=-1,M=null,S=new mt,R=new mt,I=null,k=new Xe(0),F=0,ae=t.width,G=t.height,de=1,Y=null,he=null,Se=new mt(0,0,ae,G),Ue=new mt(0,0,ae,G),Be=!1,q=new Ys,ye=!1,O=!1,j=new rt,H=new rt,le=new N,pe=new mt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function W(){return C===null?de:1}let b=i;function be(E,z){return t.getContext(E,z)}try{let E={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",xe,!1),b===null){let z="webgl2";if(b=be(z,E),b===null)throw be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ue,ce,se,Pe,X,ve,w,x,P,te,ne,$,Me,ee,_e,Ne,me,we,ge,oe,re,Re,Ae,Ie;function L(){ue=new Df(b),ue.init(),Re=new yg(b,ue),ce=new Cf(b,ue,e,Re),se=new vg(b,ue),ce.reverseDepthBuffer&&u&&se.buffers.depth.setReversed(!0),Pe=new zf(b),X=new ig,ve=new xg(b,ue,se,X,ce,Re,Pe),w=new Lf(_),x=new Uf(_),P=new Wu(b),Ae=new Af(b,P),te=new Of(b,P,Pe,Ae),ne=new Hf(b,te,P,Pe),ge=new Bf(b,ce,ve),Ne=new Pf(X),$=new tg(_,w,x,ue,ce,Ae,Ne),Me=new Rg(_,X),ee=new ag,_e=new cg(ue),we=new wf(_,w,x,se,ne,d,o),me=new mg(_,ne,ce),Ie=new Cg(b,Pe,ce,se),oe=new Rf(b,ue,Pe),re=new Ff(b,ue,Pe),Pe.programs=$.programs,_.capabilities=ce,_.extensions=ue,_.properties=X,_.renderLists=ee,_.shadowMap=me,_.state=se,_.info=Pe}L();let fe=new wg(_,b);this.xr=fe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(ae,G,!1))},this.getSize=function(E){return E.set(ae,G)},this.setSize=function(E,z,Z=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,G=z,t.width=Math.floor(E*de),t.height=Math.floor(z*de),Z===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ae*de,G*de).floor()},this.setDrawingBufferSize=function(E,z,Z){ae=E,G=z,de=Z,t.width=Math.floor(E*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,z,Z,K){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,z,Z,K),se.viewport(S.copy(Se).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,z,Z,K){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,z,Z,K),se.scissor(R.copy(Ue).multiplyScalar(de).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){se.setScissorTest(Be=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(E=!0,z=!0,Z=!0){let K=0;if(E){let D=!1;if(C!==null){let Te=C.texture.format;D=Te===Yn||Te===qn||Te===jn}if(D){let Te=C.texture.type,De=Te===gi||Te===$i||Te===ea||Te===vr||Te===Vn||Te===Wn,ze=we.getClearColor(),Ge=we.getClearAlpha(),Ye=ze.r,Je=ze.g,We=ze.b;De?(p[0]=Ye,p[1]=Je,p[2]=We,p[3]=Ge,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=Ye,g[1]=Je,g[2]=We,g[3]=Ge,b.clearBufferiv(b.COLOR,0,g))}else K|=b.COLOR_BUFFER_BIT}z&&(K|=b.DEPTH_BUFFER_BIT),Z&&(K|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ee.dispose(),_e.dispose(),X.dispose(),w.dispose(),x.dispose(),ne.dispose(),Ae.dispose(),Ie.dispose(),$.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",vt),fe.removeEventListener("sessionend",Do),ji.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Pe.autoReset,z=me.enabled,Z=me.autoUpdate,K=me.needsUpdate,D=me.type;L(),Pe.autoReset=E,me.enabled=z,me.autoUpdate=Z,me.needsUpdate=K,me.type=D}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){let z=E.target;z.removeEventListener("dispose",ie),Oe(z)}function Oe(E){Ve(E),X.remove(E)}function Ve(E){let z=X.get(E).programs;z!==void 0&&(z.forEach(function(Z){$.releaseProgram(Z)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Z,K,D,Te){z===null&&(z=Ee);let De=D.isMesh&&D.matrixWorld.determinant()<0,ze=wc(E,z,Z,K,D);se.setMaterial(K,De);let Ge=Z.index,Ye=1;if(K.wireframe===!0){if(Ge=te.getWireframeAttribute(Z),Ge===void 0)return;Ye=2}let Je=Z.drawRange,We=Z.attributes.position,Qe=Je.start*Ye,at=(Je.start+Je.count)*Ye;Te!==null&&(Qe=Math.max(Qe,Te.start*Ye),at=Math.min(at,(Te.start+Te.count)*Ye)),Ge!==null?(Qe=Math.max(Qe,0),at=Math.min(at,Ge.count)):We!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,We.count));let nt=at-Qe;if(nt<0||nt===1/0)return;Ae.setup(D,K,ze,Z,Ge);let ft,st=oe;if(Ge!==null&&(ft=P.get(Ge),st=re,st.setIndex(ft)),D.isMesh)K.wireframe===!0?(se.setLineWidth(K.wireframeLinewidth*W()),st.setMode(b.LINES)):st.setMode(b.TRIANGLES);else if(D.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),se.setLineWidth(ke*W()),D.isLineSegments?st.setMode(b.LINES):D.isLineLoop?st.setMode(b.LINE_LOOP):st.setMode(b.LINE_STRIP)}else D.isPoints?st.setMode(b.POINTS):D.isSprite&&st.setMode(b.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)st.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))st.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let ke=D._multiDrawStarts,qi=D._multiDrawCounts,Yi=D._multiDrawCount,jt=Ge?P.get(Ge).bytesPerElement:1,ur=X.get(K).currentProgram.getUniforms();for(let Dt=0;Dt<Yi;Dt++)ur.setValue(b,"_gl_DrawID",Dt),st.render(ke[Dt]/jt,qi[Dt])}else if(D.isInstancedMesh)st.renderInstances(Qe,nt,D.count);else if(Z.isInstancedBufferGeometry){let ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,qi=Math.min(Z.instanceCount,ke);st.renderInstances(Qe,nt,qi)}else st.render(Qe,nt)};function qe(E,z,Z){E.transparent===!0&&E.side===ii&&E.forceSinglePass===!1?(E.side=Lt,E.needsUpdate=!0,Ra(E,z,Z),E.side=Ri,E.needsUpdate=!0,Ra(E,z,Z),E.side=ii):Ra(E,z,Z)}this.compile=function(E,z,Z=null){Z===null&&(Z=E),m=_e.get(Z),m.init(z),y.push(m),Z.traverseVisible(function(D){D.isLight&&D.layers.test(z.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),E!==Z&&E.traverseVisible(function(D){D.isLight&&D.layers.test(z.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();let K=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let Te=D.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){let ze=Te[De];qe(ze,Z,D),K.add(ze)}else qe(Te,Z,D),K.add(Te)}),y.pop(),m=null,K},this.compileAsync=function(E,z,Z=null){let K=this.compile(E,z,Z);return new Promise(D=>{function Te(){if(K.forEach(function(De){X.get(De).currentProgram.isReady()&&K.delete(De)}),K.size===0){D(E);return}setTimeout(Te,10)}ue.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let je=null;function Ht(E){je&&je(E)}function vt(){ji.stop()}function Do(){ji.start()}let ji=new kl;ji.setAnimationLoop(Ht),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(E){je=E,fe.setAnimationLoop(E),E===null?ji.stop():ji.start()},fe.addEventListener("sessionstart",vt),fe.addEventListener("sessionend",Do),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,z,C),m=_e.get(E,y.length),m.init(z),y.push(m),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(H),O=this.localClippingEnabled,ye=Ne.init(this.clippingPlanes,O),v=ee.get(E,f.length),v.init(),f.push(v),fe.enabled===!0&&fe.isPresenting===!0){let Te=_.xr.getDepthSensingMesh();Te!==null&&Rn(Te,z,-1/0,_.sortObjects)}Rn(E,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,he),J=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,J&&we.addToRenderList(v,E),this.info.render.frame++,ye===!0&&Ne.beginShadows();let Z=m.state.shadowsArray;me.render(Z,E,z),ye===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=v.opaque,D=v.transmissive;if(m.setupLights(),z.isArrayCamera){let Te=z.cameras;if(D.length>0)for(let De=0,ze=Te.length;De<ze;De++){let Ge=Te[De];Fo(K,D,E,Ge)}J&&we.render(E);for(let De=0,ze=Te.length;De<ze;De++){let Ge=Te[De];Oo(v,E,Ge,Ge.viewport)}}else D.length>0&&Fo(K,D,E,z),J&&we.render(E),Oo(v,E,z);C!==null&&(ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,z),Ae.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],ye===!0&&Ne.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Rn(E,z,Z,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){K&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);let Te=ne.update(E),De=E.material;De.visible&&v.push(E,Te,De,Z,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let Te=ne.update(E),De=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),pe.copy(Te.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(De)){let ze=Te.groups;for(let Ge=0,Ye=ze.length;Ge<Ye;Ge++){let Je=ze[Ge],We=De[Je.materialIndex];We&&We.visible&&v.push(E,Te,We,Z,pe.z,Je)}}else De.visible&&v.push(E,Te,De,Z,pe.z,null)}}let D=E.children;for(let Te=0,De=D.length;Te<De;Te++)Rn(D[Te],z,Z,K)}function Oo(E,z,Z,K){let D=E.opaque,Te=E.transmissive,De=E.transparent;m.setupLightsView(Z),ye===!0&&Ne.setGlobalState(_.clippingPlanes,Z),K&&se.viewport(S.copy(K)),D.length>0&&Aa(D,z,Z),Te.length>0&&Aa(Te,z,Z),De.length>0&&Aa(De,z,Z),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Fo(E,z,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Li(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?gr:gi,minFilter:mi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let D=m.state.transmissionRenderTarget[K.id],Te=K.viewport||S;D.setSize(Te.z,Te.w);let De=_.getRenderTarget();_.setRenderTarget(D),_.getClearColor(k),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),J&&we.render(Z);let ze=_.toneMapping;_.toneMapping=ri;let Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ye===!0&&Ne.setGlobalState(_.clippingPlanes,K),Aa(E,Z,K),ve.updateMultisampleRenderTarget(D),ve.updateRenderTargetMipmap(D),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Je=0,We=z.length;Je<We;Je++){let Qe=z[Je],at=Qe.object,nt=Qe.geometry,ft=Qe.material,st=Qe.group;if(ft.side===ii&&at.layers.test(K.layers)){let ke=ft.side;ft.side=Lt,ft.needsUpdate=!0,zo(at,Z,K,nt,ft,st),ft.side=ke,ft.needsUpdate=!0,Ye=!0}}Ye===!0&&(ve.updateMultisampleRenderTarget(D),ve.updateRenderTargetMipmap(D))}_.setRenderTarget(De),_.setClearColor(k,F),Ge!==void 0&&(K.viewport=Ge),_.toneMapping=ze}function Aa(E,z,Z){let K=z.isScene===!0?z.overrideMaterial:null;for(let D=0,Te=E.length;D<Te;D++){let De=E[D],ze=De.object,Ge=De.geometry,Ye=K===null?De.material:K,Je=De.group;ze.layers.test(Z.layers)&&zo(ze,z,Z,Ge,Ye,Je)}}function zo(E,z,Z,K,D,Te){E.onBeforeRender(_,z,Z,K,D,Te),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(_,z,Z,K,E,Te),D.transparent===!0&&D.side===ii&&D.forceSinglePass===!1?(D.side=Lt,D.needsUpdate=!0,_.renderBufferDirect(Z,z,K,D,E,Te),D.side=Ri,D.needsUpdate=!0,_.renderBufferDirect(Z,z,K,D,E,Te),D.side=ii):_.renderBufferDirect(Z,z,K,D,E,Te),E.onAfterRender(_,z,Z,K,D,Te)}function Ra(E,z,Z){z.isScene!==!0&&(z=Ee);let K=X.get(E),D=m.state.lights,Te=m.state.shadowsArray,De=D.state.version,ze=$.getParameters(E,D.state,Te,z,Z),Ge=$.getProgramCacheKey(ze),Ye=K.programs;K.environment=E.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(E.isMeshStandardMaterial?x:w).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",ie),Ye=new Map,K.programs=Ye);let Je=Ye.get(Ge);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===De)return Ho(E,ze),Je}else ze.uniforms=$.getUniforms(E),E.onBeforeCompile(ze,_),Je=$.acquireProgram(ze,Ge),Ye.set(Ge,Je),K.uniforms=ze.uniforms;let We=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=Ne.uniform),Ho(E,ze),K.needsLights=Rc(E),K.lightsStateVersion=De,K.needsLights&&(We.ambientLightColor.value=D.state.ambient,We.lightProbe.value=D.state.probe,We.directionalLights.value=D.state.directional,We.directionalLightShadows.value=D.state.directionalShadow,We.spotLights.value=D.state.spot,We.spotLightShadows.value=D.state.spotShadow,We.rectAreaLights.value=D.state.rectArea,We.ltc_1.value=D.state.rectAreaLTC1,We.ltc_2.value=D.state.rectAreaLTC2,We.pointLights.value=D.state.point,We.pointLightShadows.value=D.state.pointShadow,We.hemisphereLights.value=D.state.hemi,We.directionalShadowMap.value=D.state.directionalShadowMap,We.directionalShadowMatrix.value=D.state.directionalShadowMatrix,We.spotShadowMap.value=D.state.spotShadowMap,We.spotLightMatrix.value=D.state.spotLightMatrix,We.spotLightMap.value=D.state.spotLightMap,We.pointShadowMap.value=D.state.pointShadowMap,We.pointShadowMatrix.value=D.state.pointShadowMatrix),K.currentProgram=Je,K.uniformsList=null,Je}function Bo(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=ln.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ho(E,z){let Z=X.get(E);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function wc(E,z,Z,K,D){z.isScene!==!0&&(z=Ee),ve.resetTextureUnits();let Te=z.fog,De=K.isMeshStandardMaterial?z.environment:null,ze=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yr,Ge=(K.isMeshStandardMaterial?x:w).get(K.envMap||De),Ye=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Je=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,at=!!Z.morphAttributes.color,nt=ri;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(nt=_.toneMapping);let ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,st=ft!==void 0?ft.length:0,ke=X.get(K),qi=m.state.lights;if(ye===!0&&(O===!0||E!==M)){let Pt=E===M&&K.id===U;Ne.setState(K,E,Pt)}let Yi=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==qi.state.version||ke.outputColorSpace!==ze||D.isBatchedMesh&&ke.batching===!1||!D.isBatchedMesh&&ke.batching===!0||D.isBatchedMesh&&ke.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ke.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ke.instancing===!1||!D.isInstancedMesh&&ke.instancing===!0||D.isSkinnedMesh&&ke.skinning===!1||!D.isSkinnedMesh&&ke.skinning===!0||D.isInstancedMesh&&ke.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ke.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ke.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ke.instancingMorph===!1&&D.morphTexture!==null||ke.envMap!==Ge||K.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ne.numPlanes||ke.numIntersection!==Ne.numIntersection)||ke.vertexAlphas!==Ye||ke.vertexTangents!==Je||ke.morphTargets!==We||ke.morphNormals!==Qe||ke.morphColors!==at||ke.toneMapping!==nt||ke.morphTargetsCount!==st)&&(Yi=!0):(Yi=!0,ke.__version=K.version);let jt=ke.currentProgram;Yi===!0&&(jt=Ra(K,z,D));let ur=!1,Dt=!1,$r=!1,it=jt.getUniforms(),ti=ke.uniforms;if(se.useProgram(jt.program)&&(ur=!0,Dt=!0,$r=!0),K.id!==U&&(U=K.id,Dt=!0),ur||M!==E){se.buffers.depth.getReversed()?(j.copy(E.projectionMatrix),xu(j),yu(j),it.setValue(b,"projectionMatrix",j)):it.setValue(b,"projectionMatrix",E.projectionMatrix),it.setValue(b,"viewMatrix",E.matrixWorldInverse);let Pt=it.map.cameraPosition;Pt!==void 0&&Pt.setValue(b,le.setFromMatrixPosition(E.matrixWorld)),ce.logarithmicDepthBuffer&&it.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&it.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Dt=!0,$r=!0)}if(D.isSkinnedMesh){it.setOptional(b,D,"bindMatrix"),it.setOptional(b,D,"bindMatrixInverse");let Pt=D.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),it.setValue(b,"boneTexture",Pt.boneTexture,ve))}D.isBatchedMesh&&(it.setOptional(b,D,"batchingTexture"),it.setValue(b,"batchingTexture",D._matricesTexture,ve),it.setOptional(b,D,"batchingIdTexture"),it.setValue(b,"batchingIdTexture",D._indirectTexture,ve),it.setOptional(b,D,"batchingColorTexture"),D._colorsTexture!==null&&it.setValue(b,"batchingColorTexture",D._colorsTexture,ve));let Kr=Z.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0)&&ge.update(D,Z,jt),(Dt||ke.receiveShadow!==D.receiveShadow)&&(ke.receiveShadow=D.receiveShadow,it.setValue(b,"receiveShadow",D.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ti.envMap.value=Ge,ti.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(ti.envMapIntensity.value=z.environmentIntensity),Dt&&(it.setValue(b,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Ac(ti,$r),Te&&K.fog===!0&&Me.refreshFogUniforms(ti,Te),Me.refreshMaterialUniforms(ti,K,de,G,m.state.transmissionRenderTarget[E.id]),ln.upload(b,Bo(ke),ti,ve)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ln.upload(b,Bo(ke),ti,ve),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&it.setValue(b,"center",D.center),it.setValue(b,"modelViewMatrix",D.modelViewMatrix),it.setValue(b,"normalMatrix",D.normalMatrix),it.setValue(b,"modelMatrix",D.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Pt=K.uniformsGroups;for(let Qr=0,Ai=Pt.length;Qr<Ai;Qr++){let Go=Pt[Qr];Ie.update(Go,jt),Ie.bind(Go,jt)}}return jt}function Ac(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Rc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,z,Z){X.get(E.texture).__webglTexture=z,X.get(E.depthTexture).__webglTexture=Z;let K=X.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let Z=X.get(E);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Z=0){C=E,B=z,A=Z;let K=!0,D=null,Te=!1,De=!1;if(E){let ze=X.get(E);if(ze.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(b.FRAMEBUFFER,null),K=!1;else if(ze.__webglFramebuffer===void 0)ve.setupRenderTarget(E);else if(ze.__hasExternalTextures)ve.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Je=E.depthTexture;if(ze.__boundDepthTexture!==Je){if(Je!==null&&X.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(E)}}let Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);let Ye=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[z])?D=Ye[z][Z]:D=Ye[z],Te=!0):E.samples>0&&ve.useMultisampledRTT(E)===!1?D=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?D=Ye[Z]:D=Ye,S.copy(E.viewport),R.copy(E.scissor),I=E.scissorTest}else S.copy(Se).multiplyScalar(de).floor(),R.copy(Ue).multiplyScalar(de).floor(),I=Be;if(se.bindFramebuffer(b.FRAMEBUFFER,D)&&K&&se.drawBuffers(E,D),se.viewport(S),se.scissor(R),se.setScissorTest(I),Te){let ze=X.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+z,ze.__webglTexture,Z)}else if(De){let ze=X.get(E.texture),Ge=z||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ze.__webglTexture,Z||0,Ge)}U=-1},this.readRenderTargetPixels=function(E,z,Z,K,D,Te,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){se.bindFramebuffer(b.FRAMEBUFFER,ze);try{let Ge=E.texture,Ye=Ge.format,Je=Ge.type;if(!ce.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-K&&Z>=0&&Z<=E.height-D&&b.readPixels(z,Z,K,D,Re.convert(Ye),Re.convert(Je),Te)}finally{let Ge=C!==null?X.get(C).__webglFramebuffer:null;se.bindFramebuffer(b.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,z,Z,K,D,Te,De){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){let Ge=E.texture,Ye=Ge.format,Je=Ge.type;if(!ce.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-K&&Z>=0&&Z<=E.height-D){se.bindFramebuffer(b.FRAMEBUFFER,ze);let We=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,We),b.bufferData(b.PIXEL_PACK_BUFFER,Te.byteLength,b.STREAM_READ),b.readPixels(z,Z,K,D,Re.convert(Ye),Re.convert(Je),0);let Qe=C!==null?X.get(C).__webglFramebuffer:null;se.bindFramebuffer(b.FRAMEBUFFER,Qe);let at=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await _u(b,at,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,We),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Te),b.deleteBuffer(We),b.deleteSync(at),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,Z=0){E.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let K=Math.pow(2,-Z),D=Math.floor(E.image.width*K),Te=Math.floor(E.image.height*K),De=z!==null?z.x:0,ze=z!==null?z.y:0;ve.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,Z,0,0,De,ze,D,Te),se.unbindTexture()},this.copyTextureToTexture=function(E,z,Z=null,K=null,D=0){E.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],z=arguments[2],D=arguments[3]||0,Z=null);let Te,De,ze,Ge,Ye,Je,We,Qe,at,nt=E.isCompressedTexture?E.mipmaps[D]:E.image;Z!==null?(Te=Z.max.x-Z.min.x,De=Z.max.y-Z.min.y,ze=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,Ye=Z.min.y,Je=Z.isBox3?Z.min.z:0):(Te=nt.width,De=nt.height,ze=nt.depth||1,Ge=0,Ye=0,Je=0),K!==null?(We=K.x,Qe=K.y,at=K.z):(We=0,Qe=0,at=0);let ft=Re.convert(z.format),st=Re.convert(z.type),ke;z.isData3DTexture?(ve.setTexture3D(z,0),ke=b.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ve.setTexture2DArray(z,0),ke=b.TEXTURE_2D_ARRAY):(ve.setTexture2D(z,0),ke=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);let qi=b.getParameter(b.UNPACK_ROW_LENGTH),Yi=b.getParameter(b.UNPACK_IMAGE_HEIGHT),jt=b.getParameter(b.UNPACK_SKIP_PIXELS),ur=b.getParameter(b.UNPACK_SKIP_ROWS),Dt=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,nt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,nt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ge),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Je);let $r=E.isDataArrayTexture||E.isData3DTexture,it=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let ti=X.get(E),Kr=X.get(z),Pt=X.get(ti.__renderTarget),Qr=X.get(Kr.__renderTarget);se.bindFramebuffer(b.READ_FRAMEBUFFER,Pt.__webglFramebuffer),se.bindFramebuffer(b.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Ai=0;Ai<ze;Ai++)$r&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,X.get(E).__webglTexture,D,Je+Ai),E.isDepthTexture?(it&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,X.get(z).__webglTexture,D,at+Ai),b.blitFramebuffer(Ge,Ye,Te,De,We,Qe,Te,De,b.DEPTH_BUFFER_BIT,b.NEAREST)):it?b.copyTexSubImage3D(ke,D,We,Qe,at+Ai,Ge,Ye,Te,De):b.copyTexSubImage2D(ke,D,We,Qe,at+Ai,Ge,Ye,Te,De);se.bindFramebuffer(b.READ_FRAMEBUFFER,null),se.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else it?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(ke,D,We,Qe,at,Te,De,ze,ft,st,nt.data):z.isCompressedArrayTexture?b.compressedTexSubImage3D(ke,D,We,Qe,at,Te,De,ze,ft,nt.data):b.texSubImage3D(ke,D,We,Qe,at,Te,De,ze,ft,st,nt):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,D,We,Qe,Te,De,ft,st,nt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,D,We,Qe,nt.width,nt.height,ft,nt.data):b.texSubImage2D(b.TEXTURE_2D,D,We,Qe,Te,De,ft,st,nt);b.pixelStorei(b.UNPACK_ROW_LENGTH,qi),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Yi),b.pixelStorei(b.UNPACK_SKIP_PIXELS,jt),b.pixelStorei(b.UNPACK_SKIP_ROWS,ur),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Dt),D===0&&z.generateMipmaps&&b.generateMipmap(ke),se.unbindTexture()},this.copyTextureToTexture3D=function(E,z,Z=null,K=null,D=0){return E.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,E=arguments[2],z=arguments[3],D=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,Z,K,D)},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){B=0,A=0,C=null,se.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}},Pg=class gc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Xe(t),this.near=i,this.far=r}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cn=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Lg=class extends Gt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Ot,h=Ot,c,u){super(null,n,s,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xh=class extends Rt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new rt,yh=new rt,un=[],Mh=new Ki,Ng=new rt,ua=new dt,da=new na,pa=class extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ng)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),Mh.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new na),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),da.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Gr),yh.multiplyMatrices(i,Gr),ua.matrixWorld=yh,ua.raycast(e,un);for(let n=0,s=un.length;n<s;n++){let o=un[n];o.instanceId=a,o.object=this,t.push(o)}un.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lg(new Float32Array(r*this.count),r,this.count,Xn,ai));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;a[o]=s,a.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Gi=class extends Gt{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(n-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new Ce:new N);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new N,r=[],a=[],n=[],s=new N,o=new rt;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new N)}a[0]=new N,n[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(r[d-1],r[d]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(Mt(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,p))}n[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(Mt(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},so=class extends li{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Ce){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ig=class extends so{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function oo(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,p*=c,a(s,o,d,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var dn=new N,lo=new oo,ho=new oo,co=new oo,Ug=class extends li{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(dn.subVectors(r[0],r[1]).add(r[0]),l=dn);let c=r[s%a],u=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(dn.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=dn),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),lo.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,v),ho.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,v),co.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),ho.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),co.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(lo.calc(o),ho.calc(o),co.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sh(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Dg(e,t){let i=1-e;return i*i*t}function Og(e,t){return 2*(1-e)*e*t}function Fg(e,t){return e*e*t}function fa(e,t,i,r){return Dg(e,t)+Og(e,i)+Fg(e,r)}function zg(e,t){let i=1-e;return i*i*i*t}function Bg(e,t){let i=1-e;return 3*i*i*e*t}function Hg(e,t){return 3*(1-e)*e*e*t}function Gg(e,t){return e*e*e*t}function ma(e,t,i,r,a){return zg(e,t)+Bg(e,i)+Hg(e,r)+Gg(e,a)}var Eh=class extends li{constructor(e=new Ce,t=new Ce,i=new Ce,r=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ce){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ma(e,r.x,a.x,n.x,s.x),ma(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kg=class extends li{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ma(e,r.x,a.x,n.x,s.x),ma(e,r.y,a.y,n.y,s.y),ma(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Th=class extends li{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vg=class extends li{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends li{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(fa(e,r.x,a.x,n.x),fa(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wg=class extends li{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(fa(e,r.x,a.x,n.x),fa(e,r.y,a.y,n.y),fa(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wh=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(Sh(s,o.x,l.x,h.x,c.x),Sh(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Ce().fromArray(r))}return this}},uo=Object.freeze({__proto__:null,ArcCurve:Ig,CatmullRomCurve3:Ug,CubicBezierCurve:Eh,CubicBezierCurve3:kg,EllipseCurve:so,LineCurve:Th,LineCurve3:Vg,QuadraticBezierCurve:bh,QuadraticBezierCurve3:Wg,SplineCurve:wh}),Xg=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new uo[r.type]().fromJSON(r))}return this}},ki=class extends Xg{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Th(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new bh(this.currentPoint.clone(),new Ce(e,t),new Ce(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Eh(this.currentPoint.clone(),new Ce(e,t),new Ce(i,r),new Ce(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new so(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jg=class vc extends It{constructor(t=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Mt(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,u=new N,d=new Ce,p=new N,g=new N,v=new N,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=i;y++){let _=r+y*c*a,T=Math.sin(_),B=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*B,s.push(u.x,u.y,u.z),d.x=y/i,d.y=A/(t.length-1),o.push(d.x,d.y);let C=l[3*A+0]*T,U=l[3*A+1],M=l[3*A+0]*B;h.push(C,U,M)}}for(let y=0;y<i;y++)for(let _=0;_<t.length-1;_++){let T=_+y*t.length,B=T,A=T+t.length,C=T+t.length+1,U=T+1;n.push(B,A,U),n.push(C,U,A)}this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.points,t.segments,t.phiStart,t.phiLength)}},qg=class _c extends It{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new N,c=new Ce;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[d]/t+1)/2,c.y=(s[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pn=class xc extends It{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],p=[],g=0,v=[],m=r/2,f=0;y(),s===!1&&(t>0&&_(!0),i>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function y(){let T=new N,B=new N,A=0,C=(i-t)/r;for(let U=0;U<=n;U++){let M=[],S=U/n,R=S*(i-t)+t;for(let I=0;I<=a;I++){let k=I/a,F=k*l+o,ae=Math.sin(F),G=Math.cos(F);B.x=R*ae,B.y=-S*r+m,B.z=R*G,u.push(B.x,B.y,B.z),T.set(ae,C,G).normalize(),d.push(T.x,T.y,T.z),p.push(k,1-S),M.push(g++)}v.push(M)}for(let U=0;U<a;U++)for(let M=0;M<n;M++){let S=v[M][U],R=v[M+1][U],I=v[M+1][U+1],k=v[M][U+1];(t>0||M!==0)&&(c.push(S,R,k),A+=3),(i>0||M!==n-1)&&(c.push(R,I,k),A+=3)}h.addGroup(f,A,0),f+=A}function _(T){let B=g,A=new Ce,C=new N,U=0,M=T===!0?t:i,S=T===!0?1:-1;for(let I=1;I<=a;I++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let R=g;for(let I=0;I<=a;I++){let k=I/a*l+o,F=Math.cos(k),ae=Math.sin(k);C.x=M*ae,C.y=m*S,C.z=M*F,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=F*.5+.5,A.y=ae*.5*S+.5,p.push(A.x,A.y),g++}for(let I=0;I<a;I++){let k=B+I,F=R+I;T===!0?c.push(F,F+1,k):c.push(F+1,F,k),U+=3}h.addGroup(f,U,T===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yg=class yc extends pn{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new yc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class extends ki{constructor(e){super(e),this.uuid=Er(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ki().fromJSON(r))}return this}},Jg={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Ah(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,p;if(r&&(n=e0(e,t,n,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return ga(n,s,i,o,l,p,0),s}};function Ah(e,t,i,r,a){let n,s;if(a===u0(e,t,i,r)>0)for(n=t;n<i;n+=r)s=Ph(n,e[n],e[n+1],s);else for(n=i-r;n>=t;n-=r)s=Ph(n,e[n],e[n+1],s);return s&&fn(s,s.next)&&(_a(s),s=s.next),s}function hr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(fn(i,i.next)||ht(i.prev,i,i.next)===0)){if(_a(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function ga(e,t,i,r,a,n,s){if(!e)return;!s&&n&&n0(e,r,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?$g(e,r,a,n):Zg(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),_a(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=Kg(hr(e),t,i),ga(e,t,i,r,a,n,2)):s===2&&Qg(e,t,i,r,a,n):ga(hr(e),t,i,r,a,n,1);break}}}function Zg(e){let t=e.prev,i=e,r=e.next;if(ht(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&kr(a,o,n,l,s,h,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(e,t,i,r){let a=e.prev,n=e,s=e.next;if(ht(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,f=po(p,g,t,i,r),y=po(v,m,t,i,r),_=e.prevZ,T=e.nextZ;for(;_&&_.z>=f&&T&&T.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==a&&_!==s&&kr(o,c,l,u,h,d,_.x,_.y)&&ht(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==a&&T!==s&&kr(o,c,l,u,h,d,T.x,T.y)&&ht(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==a&&_!==s&&kr(o,c,l,u,h,d,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=y;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==a&&T!==s&&kr(o,c,l,u,h,d,T.x,T.y)&&ht(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Kg(e,t,i){let r=e;do{let a=r.prev,n=r.next.next;!fn(a,n)&&Rh(a,r,r.next,n)&&va(a,n)&&va(n,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(n.i/i|0),_a(r),_a(r.next),r=e=n),r=r.next}while(r!==e);return hr(r)}function Qg(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&l0(s,o)){let l=Ch(s,o);s=hr(s,s.next),l=hr(l,l.next),ga(s,t,i,r,a,n,0),ga(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function e0(e,t,i,r){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=Ah(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(o0(h));for(a.sort(t0),n=0;n<a.length;n++)i=i0(a[n],i);return i}function t0(e,t){return e.x-t.x}function i0(e,t){let i=r0(e,t);if(!i)return t;let r=Ch(i,e);return hr(r,r.next),hr(i,i.next)}function r0(e,t){let i=t,r=-1/0,a,n=e.x,s=e.y;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){let d=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do n>=i.x&&i.x>=l&&n!==i.x&&kr(s<h?n:r,s,l,h,s<h?r:n,s,i.x,i.y)&&(u=Math.abs(s-i.y)/(n-i.x),va(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&a0(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function a0(e,t){return ht(e.prev,e,t.prev)<0&&ht(t.next,e,e.next)<0}function n0(e,t,i,r){let a=e;do a.z===0&&(a.z=po(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,s0(a)}function s0(e){let t,i,r,a,n,s,o,l,h=1;do{for(i=e,e=null,n=null,s=0;i;){for(s++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;i=r}n.nextZ=null,h*=2}while(s>1);return e}function po(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function o0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function kr(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function l0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!h0(e,t)&&(va(e,t)&&va(t,e)&&c0(e,t)&&(ht(e.prev,e,t.prev)||ht(e,t.prev,t))||fn(e,t)&&ht(e.prev,e,e.next)>0&&ht(t.prev,t,t.next)>0)}function ht(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function fn(e,t){return e.x===t.x&&e.y===t.y}function Rh(e,t,i,r){let a=gn(ht(e,t,i)),n=gn(ht(e,t,r)),s=gn(ht(i,r,e)),o=gn(ht(i,r,t));return!!(a!==n&&s!==o||a===0&&mn(e,i,t)||n===0&&mn(e,r,t)||s===0&&mn(i,e,r)||o===0&&mn(i,t,r))}function mn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function gn(e){return e>0?1:e<0?-1:0}function h0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Rh(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function va(e,t){return ht(e.prev,e,e.next)<0?ht(e,t,e.next)>=0&&ht(e,e.prev,t)>=0:ht(e,t,e.prev)<0||ht(e,e.next,t)<0}function c0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Ch(e,t){let i=new fo(e.i,e.x,e.y),r=new fo(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Ph(e,t,i,r){let a=new fo(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function _a(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function fo(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function u0(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Vr=class Mc{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Mc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Lh(t),Nh(r,t);let s=t.length;i.forEach(Lh);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Nh(r,i[l]);let o=Jg.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Lh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Nh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var mo=class Sc extends It{constructor(t=new Vi([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:d0,_,T=!1,B,A,C,U;f&&(_=f.getSpacedPoints(c),T=!0,d=!1,B=f.computeFrenetFrames(c,!1),A=new N,C=new N,U=new N),d||(m=0,p=0,g=0,v=0);let M=o.extractPoints(h),S=M.shape,R=M.holes;if(!Vr.isClockWise(S)){S=S.reverse();for(let J=0,W=R.length;J<W;J++){let b=R[J];Vr.isClockWise(b)&&(R[J]=b.reverse())}}let I=Vr.triangulateShape(S,R),k=S;for(let J=0,W=R.length;J<W;J++){let b=R[J];S=S.concat(b)}function F(J,W,b){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(W,b)}let ae=S.length,G=I.length;function de(J,W,b){let be,ue,ce,se=J.x-W.x,Pe=J.y-W.y,X=b.x-J.x,ve=b.y-J.y,w=se*se+Pe*Pe,x=se*ve-Pe*X;if(Math.abs(x)>Number.EPSILON){let P=Math.sqrt(w),te=Math.sqrt(X*X+ve*ve),ne=W.x-Pe/P,$=W.y+se/P,Me=b.x-ve/te,ee=b.y+X/te,_e=((Me-ne)*ve-(ee-$)*X)/(se*ve-Pe*X);be=ne+se*_e-J.x,ue=$+Pe*_e-J.y;let Ne=be*be+ue*ue;if(Ne<=2)return new Ce(be,ue);ce=Math.sqrt(Ne/2)}else{let P=!1;se>Number.EPSILON?X>Number.EPSILON&&(P=!0):se<-Number.EPSILON?X<-Number.EPSILON&&(P=!0):Math.sign(Pe)===Math.sign(ve)&&(P=!0),P?(be=-Pe,ue=se,ce=Math.sqrt(w)):(be=se,ue=Pe,ce=Math.sqrt(w/2))}return new Ce(be/ce,ue/ce)}let Y=[];for(let J=0,W=k.length,b=W-1,be=J+1;J<W;J++,b++,be++)b===W&&(b=0),be===W&&(be=0),Y[J]=de(k[J],k[b],k[be]);let he=[],Se,Ue=Y.concat();for(let J=0,W=R.length;J<W;J++){let b=R[J];Se=[];for(let be=0,ue=b.length,ce=ue-1,se=be+1;be<ue;be++,ce++,se++)ce===ue&&(ce=0),se===ue&&(se=0),Se[be]=de(b[be],b[ce],b[se]);he.push(Se),Ue=Ue.concat(Se)}for(let J=0;J<m;J++){let W=J/m,b=p*Math.cos(W*Math.PI/2),be=g*Math.sin(W*Math.PI/2)+v;for(let ue=0,ce=k.length;ue<ce;ue++){let se=F(k[ue],Y[ue],be);j(se.x,se.y,-b)}for(let ue=0,ce=R.length;ue<ce;ue++){let se=R[ue];Se=he[ue];for(let Pe=0,X=se.length;Pe<X;Pe++){let ve=F(se[Pe],Se[Pe],be);j(ve.x,ve.y,-b)}}}let Be=g+v;for(let J=0;J<ae;J++){let W=d?F(S[J],Ue[J],Be):S[J];T?(C.copy(B.normals[0]).multiplyScalar(W.x),A.copy(B.binormals[0]).multiplyScalar(W.y),U.copy(_[0]).add(C).add(A),j(U.x,U.y,U.z)):j(W.x,W.y,0)}for(let J=1;J<=c;J++)for(let W=0;W<ae;W++){let b=d?F(S[W],Ue[W],Be):S[W];T?(C.copy(B.normals[J]).multiplyScalar(b.x),A.copy(B.binormals[J]).multiplyScalar(b.y),U.copy(_[J]).add(C).add(A),j(U.x,U.y,U.z)):j(b.x,b.y,u/c*J)}for(let J=m-1;J>=0;J--){let W=J/m,b=p*Math.cos(W*Math.PI/2),be=g*Math.sin(W*Math.PI/2)+v;for(let ue=0,ce=k.length;ue<ce;ue++){let se=F(k[ue],Y[ue],be);j(se.x,se.y,u+b)}for(let ue=0,ce=R.length;ue<ce;ue++){let se=R[ue];Se=he[ue];for(let Pe=0,X=se.length;Pe<X;Pe++){let ve=F(se[Pe],Se[Pe],be);T?j(ve.x,ve.y+_[c-1].y,_[c-1].x+b):j(ve.x,ve.y,u+b)}}}q(),ye();function q(){let J=a.length/3;if(d){let W=0,b=ae*W;for(let be=0;be<G;be++){let ue=I[be];H(ue[2]+b,ue[1]+b,ue[0]+b)}W=c+m*2,b=ae*W;for(let be=0;be<G;be++){let ue=I[be];H(ue[0]+b,ue[1]+b,ue[2]+b)}}else{for(let W=0;W<G;W++){let b=I[W];H(b[2],b[1],b[0])}for(let W=0;W<G;W++){let b=I[W];H(b[0]+ae*c,b[1]+ae*c,b[2]+ae*c)}}r.addGroup(J,a.length/3-J,0)}function ye(){let J=a.length/3,W=0;O(k,W),W+=k.length;for(let b=0,be=R.length;b<be;b++){let ue=R[b];O(ue,W),W+=ue.length}r.addGroup(J,a.length/3-J,1)}function O(J,W){let b=J.length;for(;--b>=0;){let be=b,ue=b-1;ue<0&&(ue=J.length-1);for(let ce=0,se=c+m*2;ce<se;ce++){let Pe=ae*ce,X=ae*(ce+1),ve=W+be+Pe,w=W+ue+Pe,x=W+ue+X,P=W+be+X;le(ve,w,x,P)}}}function j(J,W,b){l.push(J),l.push(W),l.push(b)}function H(J,W,b){pe(J),pe(W),pe(b);let be=a.length/3,ue=y.generateTopUV(r,a,be-3,be-2,be-1);Ee(ue[0]),Ee(ue[1]),Ee(ue[2])}function le(J,W,b,be){pe(J),pe(W),pe(be),pe(W),pe(b),pe(be);let ue=a.length/3,ce=y.generateSideWallUV(r,a,ue-6,ue-3,ue-2,ue-1);Ee(ce[0]),Ee(ce[1]),Ee(ce[3]),Ee(ce[1]),Ee(ce[2]),Ee(ce[3])}function pe(J){a.push(l[J*3+0]),a.push(l[J*3+1]),a.push(l[J*3+2])}function Ee(J){n.push(J.x),n.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return p0(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new uo[a.type]().fromJSON(a)),new Sc(r,t.options)}},d0={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new Ce(n,s),new Ce(o,l),new Ce(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],v=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new Ce(s,1-l),new Ce(h,1-u),new Ce(d,1-g),new Ce(v,1-f)]:[new Ce(o,1-l),new Ce(c,1-u),new Ce(p,1-g),new Ce(m,1-f)]}};function p0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var go=class Ec extends It{constructor(t=new Vi([new Ce(0,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(n,3)),this.setAttribute("uv",new tt(s,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;Vr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];Vr.isClockWise(y)===!0&&(g[m]=y.reverse())}let v=Vr.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];a.push(y.x,y.y,0),n.push(0,0,1),s.push(y.x,y.y)}for(let m=0,f=v.length;m<f;m++){let y=v[m],_=y[0]+u,T=y[1]+u,B=y[2]+u;r.push(_,T,B),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return f0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Ec(r,t.curveSegments)}};function f0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Ih=class Tc extends It{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],u=new N,d=new N,p=[],g=[],v=[],m=[];for(let f=0;f<=r;f++){let y=[],_=f/r,T=0;f===0&&s===0?T=.5/i:f===r&&l===Math.PI&&(T=-.5/i);for(let B=0;B<=i;B++){let A=B/i;u.x=-t*Math.cos(a+A*n)*Math.sin(s+_*o),u.y=t*Math.cos(s+_*o),u.z=t*Math.sin(a+A*n)*Math.sin(s+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+T,1-_),y.push(h++)}c.push(y)}for(let f=0;f<r;f++)for(let y=0;y<i;y++){let _=c[f][y+1],T=c[f][y],B=c[f+1][y],A=c[f+1][y+1];(f!==0||s>0)&&p.push(_,T,A),(f!==r-1||l<Math.PI)&&p.push(T,B,A)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},m0=class bc extends It{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n},r=Math.floor(r),a=Math.floor(a);let s=[],o=[],l=[],h=[],c=new N,u=new N,d=new N;for(let p=0;p<=r;p++)for(let g=0;g<=a;g++){let v=g/a*n,m=p/r*Math.PI*2;u.x=(t+i*Math.cos(m))*Math.cos(v),u.y=(t+i*Math.cos(m))*Math.sin(v),u.z=i*Math.sin(m),o.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/a),h.push(p/r)}for(let p=1;p<=r;p++)for(let g=1;g<=a;g++){let v=(a+1)*p+g-1,m=(a+1)*(p-1)+g-1,f=(a+1)*(p-1)+g,y=(a+1)*p+g;s.push(v,m,y),s.push(m,f,y)}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ut=class extends la{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},g0=class extends Ut{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function vn(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function v0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var _n=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_0=class extends _n{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case nl:a=e,s=2*t-i;break;case sl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case nl:n=e,o=2*i-t;break;case sl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,m=-u*v+2*u*g-u*p,f=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*v+(1.5+d)*g+.5*p,_=d*v-d*g;for(let T=0;T!==s;++T)a[T]=m*n[h+T]+f*n[l+T]+y*n[o+T]+_*n[c+T];return a}},x0=class extends _n{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},y0=class extends _n{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ti=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vn(t,this.TimeBufferType),this.values=vn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vn(e.times,Array),values:vn(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new x0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fa:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case Ss:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return Ss}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&v0(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ss,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,u=n*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ti.prototype.TimeBufferType=Float32Array,Ti.prototype.ValueBufferType=Float32Array,Ti.prototype.DefaultInterpolation=Ms;var xa=class extends Ti{constructor(e,t,i){super(e,t,i)}};xa.prototype.ValueTypeName="bool",xa.prototype.ValueBufferType=Array,xa.prototype.DefaultInterpolation=Fa,xa.prototype.InterpolantFactoryMethodLinear=void 0,xa.prototype.InterpolantFactoryMethodSmooth=void 0;var M0=class extends Ti{};M0.prototype.ValueTypeName="color";var S0=class extends Ti{};S0.prototype.ValueTypeName="number";var E0=class extends _n{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)ni.slerpFlat(a,0,n,l-s,n,l,o);return a}},Uh=class extends Ti{InterpolantFactoryMethodLinear(e){return new E0(this.times,this.values,this.getValueSize(),e)}};Uh.prototype.ValueTypeName="quaternion",Uh.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Ti{constructor(e,t,i){super(e,t,i)}};ya.prototype.ValueTypeName="string",ya.prototype.ValueBufferType=Array,ya.prototype.DefaultInterpolation=Fa,ya.prototype.InterpolantFactoryMethodLinear=void 0,ya.prototype.InterpolantFactoryMethodSmooth=void 0;var T0=class extends Ti{};T0.prototype.ValueTypeName="vector";var b0=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},w0=new b0,A0=class{constructor(e){this.manager=e!==void 0?e:w0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};A0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dh=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},vo=new rt,Oh=new N,Fh=new N,R0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},C0=class extends R0{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zh=class extends Dh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new C0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bh=class extends Dh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},_o="\\[\\]\\.:\\/",P0=new RegExp("["+_o+"]","g"),xo="[^"+_o+"]",L0="[^"+_o.replace("\\.","")+"]",N0=/((?:WC+[\/:])*)/.source.replace("WC",xo),I0=/(WCOD+)?/.source.replace("WCOD",L0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xo),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xo),O0=new RegExp("^"+N0+I0+U0+D0+"$"),F0=["material","materials","bones","map"],z0=class{constructor(e,t,i){let r=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ct=class Zr{constructor(t,i,r){this.path=i,this.parsedPath=r||Zr.parseTrackName(i),this.node=Zr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Zr.Composite(t,i,r):new Zr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(t){let i=O0.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);F0.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Zr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=z0,ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray],ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ev=new Float32Array(1),Hh=new rt,B0=class{constructor(e,t,i=0,r=1/0){this.ray=new Sl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,i=[]){return yo(e,this,i,t),i.sort(Gh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)yo(e[r],this,i,t);return i.sort(Gh),i}};function Gh(e,t){return e.distance-t.distance}function yo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)yo(n[s],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ma=new N;function Xt(e,t,i,r,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;Ma.copy(t),Ma[r]=0,Ma.normalize();let h=.5*s/(s+o),c=1-Ma.angleTo(e)/l;return Math.sign(Ma[i])===1?c*h:o/(s+o)+h+h*(1-c)}var kh=class extends Bi{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let s=new N,o=new N,l=new N(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new N,g=.5/r;for(let v=0,m=0;v<h.length;v+=3,m+=2)switch(s.fromArray(h,v),o.copy(s),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(s.x)+o.x*a,h[v+1]=l.y*Math.sign(s.y)+o.y*a,h[v+2]=l.z*Math.sign(s.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:p.set(1,0,0),u[m+0]=Xt(p,o,"z","y",a,i),u[m+1]=1-Xt(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[m+0]=1-Xt(p,o,"z","y",a,i),u[m+1]=1-Xt(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[m+0]=1-Xt(p,o,"x","z",a,e),u[m+1]=Xt(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[m+0]=1-Xt(p,o,"x","z",a,e),u[m+1]=1-Xt(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[m+0]=1-Xt(p,o,"x","y",a,e),u[m+1]=1-Xt(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[m+0]=Xt(p,o,"x","y",a,e),u[m+1]=1-Xt(p,o,"y","x",a,t);break}}};function H0(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new It,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(t){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in n){let u=Vh(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in s){let u=s[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<s[c].length;++v)p.push(s[c][v][d]);let g=Vh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Vh(e){let t,i,r,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*i}let s=new t(n),o=new Rt(s,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/i;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<i;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else s.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var Fe="#101010",He="#f4f3ee",Sa='"DT Punk", Impact, sans-serif',Mo='"Inter Tight", "Arial Black", Arial, sans-serif',G0=(e,t,i)=>Math.max(t,Math.min(i,e)),Wh=()=>{let e=document.createElement("canvas");return e.width=e.height=512,e},k0=e=>()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function pt(e,t,i){e.beginPath(),t.forEach(([r,a],n)=>n?e.lineTo(r,a):e.moveTo(r,a)),e.closePath(),i&&(e.fillStyle=i,e.fill())}function Et(e,t,i,r,a,n,s){e.beginPath(),e.roundRect(t,i,r,a,n),s&&(e.fillStyle=s,e.fill())}function ot(e,t,i,r,a){e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function Wr(e,t,i,r,a,n=128,s=128){let o=[];for(let l=0;l<t*2;l++){let h=l/(t*2)*Math.PI*2-Math.PI/2,c=l%2?r:i;o.push([n+Math.cos(h)*c,s+Math.sin(h)*c])}pt(e,o,a)}function Tt(e,t,{x:i=128,y:r=128,width:a=190,size:n=60,color:s=Fe,font:o=Mo,weight:l=900,gap:h=1,stroke:c=null,strokeWidth:u=0}={}){let d=n,p=()=>{e.font=`${l} ${d}px ${o}`};for(p();d>10&&Math.max(...t.map(v=>e.measureText(v).width))>a;)d-=1,p();e.textAlign="center",e.textBaseline="middle";let g=d*h;return t.forEach((v,m)=>{let f=r+(m-(t.length-1)/2)*g;c&&(e.lineJoin="round",e.lineWidth=u,e.strokeStyle=c,e.strokeText(v,i,f)),e.fillStyle=s,e.fillText(v,i,f)}),d}function Xh(e,t,i,r,a,n,{font:s=Mo,weight:o=900,spacing:l=1.16,bottom:h=!1,cx:c=128,cy:u=128}={}){e.save(),e.font=`${o} ${a}px ${s}`,e.fillStyle=n,e.textAlign="center",e.textBaseline="middle";let d=[...t],p=d.map(m=>e.measureText(m).width*l),g=p.reduce((m,f)=>m+f,0),v=r+(h?g/2/i:-g/2/i);d.forEach((m,f)=>{let y=p[f]/2/i;v+=h?-y:y,e.save(),e.translate(c+Math.cos(v)*i,u+Math.sin(v)*i),e.rotate(h?v-Math.PI/2:v+Math.PI/2),e.fillText(m,0,0),e.restore(),v+=h?-y:y}),e.restore()}function So(e,t,i,{angle:r=.55,step:a=7,weight:n=.62,from:s=-.15}={}){e.save(),t(),e.clip(),e.translate(128,128),e.rotate(r),e.fillStyle=i;for(let o=-200;o<200;o+=a){let l=Math.round(o/a)%2?a/2:0;for(let h=-200;h<200;h+=a){let c=G0((h+l)/230+o/420+.5+s,0,1),u=c*a*n;u<.45||(e.beginPath(),e.arc(h+l,o,u,0,7),e.fill())}}e.restore()}function xn(e,t,i,r,a){let n=[];for(let s=0;s<10;s++){let o=s*Math.PI/5-Math.PI/2,l=s%2?r*.42:r;n.push([t+Math.cos(o)*l,i+Math.sin(o)*l])}pt(e,n,a)}function V0(e,t,i,r,a,n){e.save(),e.translate(t,i),e.scale(r,r),e.beginPath(),e.roundRect(-30,-36,60,50,22),e.fillStyle=a,e.fill(),e.fillRect(-17,8,34,22),ot(e,-13,-8,10,n),ot(e,13,-8,10,n),pt(e,[[0,2],[-5,12],[5,12]],n),e.fillStyle=n;for(let s=-1;s<2;s++)e.fillRect(s*9-1.2,18,2.4,12);e.restore()}function W0(e,t,i,r,a,n,s){e.fillStyle=n;for(let o=0;o<r;){let l=1+s()*3;e.fillRect(t+o,i,l,a),o+=l+1+s()*3}}var jh=(e,t,i,r,a,n,s,o=14)=>{e.save(),e.beginPath(),e.rect(t,i,r,a),e.clip(),e.fillStyle=n,e.fillRect(t,i,r,a),e.fillStyle=s;for(let l=-a;l<r+a;l+=o*2)pt(e,[[t+l,i+a],[t+l+o,i+a],[t+l+o+a,i],[t+l+a,i]],s);e.restore()};function Wi(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?Fe:He:e===Fe?He:Fe}var X0={ask(e,t){Et(e,26,40,204,140,34,t),pt(e,[[70,170],[58,226],[124,172]],t),Tt(e,["ASK","DEN"],{y:110,size:62,color:Wi(t),font:Sa,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),Et(e,18,84,220,88,44,t),Et(e,88,84,80,88,4,He);for(let[i,r]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])ot(e,i,r,5,Fe);e.restore(),Tt(e,["OUCH"],{y:222,size:44,font:Sa,weight:400,color:He})},camera(e,t){Et(e,28,76,200,130,16,Fe),Et(e,86,52,70,34,8,Fe),ot(e,128,142,48,He),ot(e,128,142,34,Fe),ot(e,116,130,9,He),ot(e,200,98,9,t)},file(e,t){pt(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],He),pt(e,[[160,26],[200,66],[160,66]],"#9c9c98"),Tt(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===He?Fe:t,gap:1.1})},cursor(e,t){Wr(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),pt(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],Fe),e.lineWidth=2.4,e.strokeStyle=He,e.stroke(),e.restore()},receipt(e,t){let i=[[52,22],[204,22]];for(let r=0;r<=8;r++)i.push([204-r*19,232-(r%2?14:0)]);pt(e,i,He),e.fillStyle="#7d7d79";for(let r=0;r<4;r++)e.fillRect(70,48+r*22,r%2?76:116,8);Tt(e,["$$$"],{y:176,size:62,color:t===He?Fe:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=He,e.fill(),pt(e,[[176,186],[214,236],[136,200]],He),Tt(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===He?Fe:t,font:Sa,weight:400})},root(e){Et(e,24,44,208,168,8,Fe),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=He,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),Tt(e,["x"],{y:130,width:60,size:60,color:He,font:Sa,weight:400})},sun(e,t){Wr(e,14,118,84,t),ot(e,128,128,70,He),Et(e,66,100,54,36,12,Fe),Et(e,136,100,54,36,12,Fe),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=Fe,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){Wr(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),Et(e,-16,-40,32,130,12,Fe),ot(e,0,-56,38,Fe),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),Et(e,-92,-48,184,96,12,He),e.fillStyle=t===He?Fe:t,e.fillRect(-24,-48,116,96),e.restore(),Tt(e,["CTRL+Z"],{width:150,size:36,color:Fe})},pencil(e,t){e.save(),e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=Fe,e.fillRect(-112,-22,28,44),pt(e,[[52,-22],[100,0],[52,22]],He),pt(e,[[84,-7],[100,0],[84,7]],Fe),e.restore()},car(e,t){Et(e,22,118,212,64,22,t),pt(e,[[66,122],[96,72],[168,72],[198,122]],t),pt(e,[[86,118],[104,86],[128,86],[128,118]],Fe),pt(e,[[138,118],[138,86],[162,86],[180,118]],Fe),ot(e,78,184,24,Fe),ot(e,180,184,24,Fe),ot(e,78,184,9,He),ot(e,180,184,9,He)},house(e,t){pt(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=He,e.fillRect(52,122,152,100),e.fillStyle=Fe,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){Et(e,26,26,204,204,26,Fe),e.lineWidth=7,e.strokeStyle=He,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[i,r]of[[74,80],[72,180],[184,86],[182,176]])ot(e,i,r,18,t)},fork(e,t){ot(e,128,128,112,He),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===He?"#b5b5b1":t,e.stroke(),e.fillStyle=Fe,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),Et(e,84,106,36,22,10,Fe),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){Wr(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=Fe,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){Et(e,22,62,212,132,66,Fe),[28,58,92,46,76,34,54,22].forEach((i,r)=>Et(e,52+r*21.5,128-i/2,11,i,5.5,r%3===2?t:He))},bot(e,t){Et(e,40,62,176,152,28,He),e.fillStyle=Fe,e.fillRect(122,28,12,38),ot(e,128,26,12,t===He?Fe:t),ot(e,94,124,18,Fe),ot(e,162,124,18,Fe),e.fillStyle=Fe,e.fillRect(88,172,80,12)}};function j0(e,t,i,r,a){let n=r===He?"#cfcfca":r;ot(e,128,128,122,Fe),ot(e,128,128,86,n),So(e,()=>{e.beginPath(),e.arc(128,128,86,0,7)},Fe,{step:6.5,weight:.5,angle:.7,from:-.22}),e.lineWidth=2,e.strokeStyle=He,e.beginPath(),e.arc(128,128,117,0,7),e.stroke(),e.lineWidth=3,e.beginPath(),e.arc(128,128,89,0,7),e.stroke();let[s,o]=i;Xh(e,s,103,-Math.PI/2,19,He),Xh(e,o,103,Math.PI/2,15,He,{bottom:!0}),xn(e,22,128,8,He),xn(e,234,128,8,He),e.save(),e.translate(128,128),e.rotate((a()-.5)*.24),e.scale(.56,.56),e.translate(-128,-128),X0[t](e,r===He?"#8a8a86":r),e.restore()}var Xr=(e,t)=>{let i=[];for(let r of e.split(" ")){let a=i[i.length-1];a&&`${a} ${r}`.length<=t?i[i.length-1]=`${a} ${r}`:i.push(r)}return i},qh=[(e,t,i,r)=>{let a=i===He?He:i,n=Wi(a);Wr(e,18,122,98,Fe,133,134),Wr(e,18,118,94,a),So(e,()=>{let s=[];for(let o=0;o<36;o++){let l=o/36*Math.PI*2-Math.PI/2,h=o%2?94:118;s.push([128+Math.cos(l)*h,128+Math.sin(l)*h])}pt(e,s)},n===Fe?"rgba(0,0,0,.72)":"rgba(255,255,255,.5)",{step:7,weight:.52}),e.save(),e.translate(128,128),e.rotate(-.1+r()*.1),e.translate(-128,-128),Tt(e,Xr(t,8),{width:164,size:66,y:126,color:n,gap:1.02,stroke:n===Fe?He:Fe,strokeWidth:6}),e.restore(),Tt(e,["NOT RATED"],{y:200,width:90,size:13,color:n})},(e,t,i,r)=>{let a=i===He?Fe:i;e.save(),e.translate(128,128),e.rotate(-.12),e.translate(-128,-128),e.beginPath(),e.roundRect(8,58,240,140,10),e.fillStyle=He,e.fill();for(let[n,s]of[[8,128],[248,128]])e.save(),e.globalCompositeOperation="destination-out",ot(e,n,s,15,"#000"),e.restore();e.fillStyle=a,e.fillRect(16,66,224,25),Tt(e,["ADMIT ONE"],{y:79,width:200,size:18,color:Wi(a)===Fe?Fe:He,weight:800});for(let n=95;n<190;n+=8)e.fillStyle="#8c8c88",e.fillRect(190,n,2.4,4.4);Tt(e,Xr(t,11),{x:102,y:136,width:158,size:42,color:Fe,gap:1.05}),W0(e,198,100,40,62,Fe,r),Tt(e,["N\xBA 00"+(10+Math.floor(r()*89))],{x:218,y:176,width:40,size:12,color:Fe}),e.restore()},(e,t,i)=>{let r=i===He?"#cfcfca":i;e.save(),e.translate(128,128),e.rotate(.08),e.translate(-128,-128),Et(e,6,44,244,168,12,Fe),jh(e,14,52,228,26,r,Fe),jh(e,14,178,228,26,r,Fe),pt(e,[[46,96],[62,124],[30,124]],r),Tt(e,["!"],{x:46,y:113,size:22,color:Wi(r)}),Tt(e,["WARNING"],{x:146,y:98,width:150,size:30,color:r,weight:900}),Tt(e,Xr(t,13),{x:128,y:146,width:214,size:38,color:He,gap:1.05}),e.restore()},(e,t,i,r)=>{let a=Xr(t,9),n=i===He?"#cfcfca":i,s=[[Mo,900],[Sa,400],['Georgia, "Times New Roman", serif',700]],o=a.length,l=Math.min(64,190/o),h=0;a.forEach((c,u)=>{let d=c.split(" "),p=128+(u-(o-1)/2)*l,g=d.map((y,_)=>{let[T,B]=s[(h+_)%s.length];return e.font=`${B} ${l*.62}px ${T}`,e.measureText(y).width+18}),v=g.reduce((y,_)=>y+_,0),m=Math.min(1,226/v),f=128-v*m/2;d.forEach((y,_)=>{let[T,B]=s[h%s.length],A=[Fe,He,n,He][h%4];h++,e.save();let C=f+g[_]*m/2;e.translate(C,p+(r()-.5)*6),e.rotate((r()-.5)*.16);let U=g[_]*m/2,M=l*.47,S=[];for(let R=0;R<=10;R++)S.push([-U+R/10*U*2,-M+(r()-.5)*3.4]);for(let R=0;R<=10;R++)S.push([U-R/10*U*2,M+(r()-.5)*3.4]);pt(e,S,A),Tt(e,[y],{x:0,y:1,width:g[_]*m-10,size:l*.62,color:Wi(A),font:T,weight:B}),e.restore(),f+=g[_]*m})})},(e,t,i,r)=>{let a=i===He?"#cfcfca":i;ot(e,128,118,104,Fe),ot(e,128,118,96,a),So(e,()=>{e.beginPath(),e.arc(128,118,96,0,7)},Wi(a)===Fe?"rgba(0,0,0,.6)":"rgba(255,255,255,.45)",{step:6,weight:.55,angle:-.5}),V0(e,128,70,1.05,He,Fe),xn(e,52,70,13,He),xn(e,204,70,13,He);let n=Xr(t,12),s=n.length>1?74:54;pt(e,[[6,150-s/2+12],[38,150-s/2+12],[38,150+s/2+12],[6,150+s/2+12],[20,162]],Fe),pt(e,[[250,150-s/2+12],[218,150-s/2+12],[218,150+s/2+12],[250,150+s/2+12],[236,162]],Fe),Et(e,26,150-s/2,204,s,3,He),e.strokeStyle=Fe,e.lineWidth=3,e.strokeRect(31,150-s/2+5,194,s-10),Tt(e,n,{y:150,width:180,size:44,color:Fe,gap:1.04})}],Yh=["$2.99","1 NIGHT","$0.99","NEW","REWIND","50\xA2","STAFF PICK","2 FOR 1"];function q0(e,t,i){let r=i===He?He:i;ot(e,128,128,116,r),e.lineWidth=5,e.strokeStyle=Wi(r),e.setLineDash([3,9]),e.lineCap="round",e.beginPath(),e.arc(128,128,100,0,7),e.stroke(),e.setLineDash([]),Tt(e,Xr(t,6),{width:170,size:84,color:Wi(r),gap:.98})}var Y0={portfolio:["ask","MAKE THE LOGO BIGGER",["APPROVED BY NOBODY","NO REVISIONS"]],basepoint:["bandaid","TAKE YOUR VITAMINS",["DOCTOR NOT INCLUDED","SHAKE WELL"]],"street-observations":["camera","SAY CHEESE",["NO FLASH NO MERCY","SHOT ON THE RUN"]],template:["file","BE KIND REWIND",["FINAL FINAL FINAL","DO NOT OVERWRITE"]],prime:["cursor","ONE MORE CLICK",["ADD TO CART OR ELSE","NO REFUNDS"]],sabsus:["receipt","CA-CHING!",["CASH ONLY FOREVER","KEEP THE CHANGE"]],janna:["bonjour","MERCI BEAUCOUP",["LE\xC7ON NUM\xC9RO UN","R\xC9P\xC9TEZ"]],"root-framer":["root","SHOW YOUR WORK",["MATH IS PUNK","NO CALCULATORS"]],sunfreaks:["sun","WEAR SUNSCREEN",["SPF 50 FOREVER","STAY WEIRD"]],airtexno:["wrench","IT WORKS ON MY MACHINE",["HAVE YOU TRIED RESTARTING","SERVICE DUE"]],"concept-undo-studio":["eraser","NEW RELEASE",["NOTHING IS PERMANENT","CTRL+Z"]],"concept-root-square-explorations":["pencil","STILL A SKETCH",["DO NOT ERASE","DRAFT 41"]],"concept-al-futtaim-themes":["car","CAN IT POP MORE?",["CHECK ENGINE LIGHT","NO PARKING"]],"sabsus-platform":["fork","ORDER UP!",["THE KITCHEN IS OPEN","TABLE 12"]],mortgage:["house","SWEET LOAN",["INTEREST NOT INCLUDED","SIGN HERE"]],node:["nodes","IF THIS THEN WHY",["ALL WIRED UP","DO NOT UNPLUG"]],restaurant:["fork","TABLE FOR TWO",["NO SUBSTITUTIONS","TIP YOUR WAITER"]],wallet:["scissors","BAD HAIR DAY",["JUST THE ENDS PLEASE","WALK-INS OK"]],wave:["wave","TURN IT UP",["LOUD IS A FEATURE","NO SKIPPING"]],"experiment-chat-portfolio":["bot","NOT A BOT",["ASK ME ANYTHING","BEEP BOOP"]]};function J0(e,t){let i=Wh(),r=i.getContext("2d"),a=14;for(let s=0;s<32;s++){let o=s/32*Math.PI*2;r.drawImage(e,Math.cos(o)*a,Math.sin(o)*a)}r.globalCompositeOperation="source-in",r.fillStyle=He,r.fillRect(0,0,512,512),r.globalCompositeOperation="source-over",r.drawImage(e,0,0),r.globalCompositeOperation="source-atop";for(let s=0;s<1500;s++){r.globalAlpha=.08+t()*.3,r.fillStyle=t()<.5?"#000":"#fff";let o=.6+t()*t()*3;r.fillRect(t()*512,t()*512,o,o)}r.strokeStyle="#fff";for(let s=0;s<16;s++){r.globalAlpha=.12+t()*.3,r.lineWidth=.6+t()*.9;let o=t()*512,l=t()*512,h=-.7+t()*.4,c=30+t()*140;r.beginPath(),r.moveTo(o,l),r.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),r.stroke()}for(let s=0;s<90;s++){let o=t()*7,l=512*(.36+t()*.14);r.globalAlpha=.2+t()*.5,r.fillStyle=He,r.fillRect(512/2+Math.cos(o)*l,512/2+Math.sin(o)*l,1+t()*5,1+t()*3)}r.globalAlpha=.13;let n=r.createLinearGradient(512*.1,0,512*.72,512*.9);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.46,"rgba(255,255,255,1)"),n.addColorStop(.6,"rgba(255,255,255,0)"),r.fillStyle=n,r.fillRect(0,0,512,512),r.globalAlpha=1,r.globalCompositeOperation="source-over",i}function Eo(e,t){let i=Wh(),r=k0(t),a=i.getContext("2d");return a.scale(2,2),e(a,r),J0(i,r)}function Jh(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,n=null;for(let o=0;o<r.length;o+=4){let l=r[o],h=r[o+1],c=r[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,n=[l,h,c])}if(a<60)return null;let s=238/Math.max(...n);return`rgb(${n.map(o=>Math.round(o*s)).join(",")})`}function Zh(e,t=0,i=null){let r=Y0[e];if(!r)return[];let[a,n,s]=r,o=i||He,l=t*131+7;return[Eo((h,c)=>qh[t%qh.length](h,n,o,c),l),Eo((h,c)=>j0(h,a,s,o,c),l+1),Eo(h=>q0(h,Yh[t%Yh.length],o),l+2)]}var Kt=16,jr=48,yn=[3,11,9,8,7],To=yn.reduce((e,t)=>e+t,0),Ea=22,bo=2,qr=5,cr=To*Kt,Z0=Ea*jr,Ta=cr*qr+Z0,bt=()=>new N,Qt=e=>e*e*(3-2*e),$0=e=>Math.max(0,Math.min(1,e));function K0(e,t){let i=Ta*bo,r=new Float32Array(i*3),a=new Float32Array(i*3),n=new Float32Array(i*4),s=new It,o=new Rt(r,3).setUsage(Es),l=new Rt(a,3).setUsage(Es),h=new Rt(n,4).setUsage(Es);s.setAttribute("position",o),s.setAttribute("normal",l),s.setAttribute("aG",h);let c=[],u=(O,j,H)=>{for(let le=0;le<j-1;le++)for(let pe=0;pe<H;pe++){let Ee=O+le*H+pe,J=O+le*H+(pe+1)%H,W=Ee+H,b=J+H;c.push(Ee,J,W,J,b,W)}};for(let O=0;O<bo;O++){let j=O*Ta;for(let H=0;H<qr;H++)u(j+H*cr,To,Kt);u(j+qr*cr,Ea,jr)}s.setIndex(c);let d={value:0},p=new Ut({color:1184278,roughness:.5,metalness:0,envMap:e,envMapIntensity:1.65}),g=t(.1);p.onBeforeCompile=(O,j)=>{g(O,j),O.uniforms.uRubber=d,O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aG;varying vec4 vG;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vG = aG;`).replace("vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;","vBoneY = (modelMatrix * vec4(transformed, 1.)).y;"),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
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
 }`)};let v=new dt(s,p);v.frustumCulled=!1,v.visible=!1;let m=bt(),f=bt(),y=bt(),_=bt(),T=bt(),B=bt(),A=bt(),C=bt(),U=bt(),M=bt(),S=bt(),R=new N(0,0,1),I=(O,j,H,le,pe,Ee)=>{r[O*3]=j.x,r[O*3+1]=j.y,r[O*3+2]=j.z,n[O*4]=H,n[O*4+1]=le,n[O*4+2]=pe,n[O*4+3]=Ee},k=(O,j,H,le,pe,Ee)=>{let J=Ee*Ee,W=J*Ee;return O.x=.5*(2*H.x+(le.x-j.x)*Ee+(2*j.x-5*H.x+4*le.x-pe.x)*J+(3*H.x-j.x-3*le.x+pe.x)*W),O.y=.5*(2*H.y+(le.y-j.y)*Ee+(2*j.y-5*H.y+4*le.y-pe.y)*J+(3*H.y-j.y-3*le.y+pe.y)*W),O.z=.5*(2*H.z+(le.z-j.z)*Ee+(2*j.z-5*H.z+4*le.z-pe.z)*J+(3*H.z-j.z-3*le.z+pe.z)*W),O},F=Array.from({length:8},bt),ae=[1.3,1.17,1.05,.95];function G(O,j,H,le,pe,Ee){let J=O*Ta+j*cr;F[1].copy(H[0]),F[2].copy(H[1]),F[3].copy(H[2]),F[4].copy(H[3]),F[5].copy(H[4]),F[0].copy(F[1]).multiplyScalar(2).sub(F[2]),A.copy(F[5]).sub(F[4]).normalize(),F[6].copy(F[5]).addScaledVector(A,le*1.05),F[7].copy(F[6]).addScaledVector(A,le);let W=0,b=0,be=[0,0,0,0];T.copy(F[1]);let ue=0;for(let ve=1;ve<=4;ve++)ue+=F[ve].distanceTo(F[ve+1]||F[ve]),ve<=4&&(be[ve-1]=ue);let ce=0,se=yn.length-1,Pe=!1,X=0;for(let ve=0;ve<yn.length;ve++){let w=yn[ve];for(let x=0;x<w;x++,b++){let P=x/w;k(_,F[ve],F[ve+1],F[ve+2],F[Math.min(7,ve+3)],P),k(A,F[ve],F[ve+1],F[ve+2],F[Math.min(7,ve+3)],P+.02),m.copy(A).sub(_).normalize(),W+=b?_.distanceTo(T):0,T.copy(_),f.copy(R).addScaledVector(m,-R.dot(m)).normalize(),y.copy(m).cross(f).normalize();let te;ve===0?te=ae[0]*(1.02+.1*P):ve<se?te=(ae[ve-1]+(ae[ve]-ae[ve-1])*Qt(P))*(1-.075*Math.sin(Math.PI*P)):te=ae[3]*Math.sqrt(Math.max(0,1-P*P)),ce=le*te*Ee;let ne=ve===1?P:ve>1?1:0,$=pe&&ve===1&&ne>pe-.16&&ne<=pe;if(pe&&(ve>1||ve===1&&ne>pe)){Pe||(Pe=!0,X=ce),k(_,F[1],F[2],F[3],F[4],pe),A.copy(_),k(_,F[0],F[1],F[2],F[3],0),_.copy(A),ce=le*.94*Ee;for(let ee=0;ee<Kt;ee++){let _e=ee/Kt*Math.PI*2;S.copy(_).addScaledVector(f,Math.cos(_e)*ce*.92).addScaledVector(y,Math.sin(_e)*ce),I(J+b*Kt+ee,S,(ee/Kt+.5)%1-.5,W,0,1)}continue}$&&(ce*=1+.1*Qt($0(1-Math.abs((ne-(pe-.08))/.08))));let Me=0;for(let ee=0;ee<3;ee++)Me=Math.max(Me,Math.exp(-(((W-be[ee+1-1])/(.22*(ee?.85:1)))**2)));for(let ee=0;ee<Kt;ee++){let _e=ee/Kt*Math.PI*2;S.copy(_).addScaledVector(f,Math.cos(_e)*ce*.93).addScaledVector(y,Math.sin(_e)*ce),I(J+b*Kt+ee,S,(ee/Kt+.5)%1-.5,W,Me,1)}}}}let de=bt(),Y=bt(),he=bt(),Se=bt(),Ue=bt(),Be=[0,0,0,0];function q(O,j,H,le,pe,Ee,J){let W=O*Ta+qr*cr;de.set(0,0,0),Y.set(0,0,0);for(let se=0;se<4;se++)de.add(j[se]),Y.add(H[se]);de.multiplyScalar(.25),Y.multiplyScalar(.25),Se.copy(j[0]).sub(j[3]);let b=Se.length()/2+Ee*1.28;Se.normalize(),Ue.copy(H[0]).sub(H[3]);let be=Ue.length()/2+.46;Ue.normalize(),he.copy(le);let ue=he.distanceTo(Y)+Y.distanceTo(de)+.32,ce=0;for(let se=0;se<Ea;se++){let Pe=se/(Ea-1),X,ve,w;if(Pe<.3){let P=Pe/.3;_.copy(he).addScaledVector(pe,.7*(1-P)).lerp(Y,Qt(P)*.55),X=.98+(be-.98)*Qt(P)*.6,ve=.72+(.56-.72)*Qt(P)}else if(Pe<.5){let P=(Pe-.3)/.2;T.copy(he).lerp(Y,.55),_.copy(T).lerp(Y,Qt(P)),X=.98+(be-.98)*.6+(be-(.98+(be-.98)*.6))*Qt(P),ve=.56+(.5-.56)*Qt(P)}else{let P=(Pe-.5)/.5;if(_.copy(Y).lerp(de,P),P>.9&&_.addScaledVector(A.copy(de).sub(Y).normalize(),(P-.9)*2.4),X=be+(b-be)*Qt(P),ve=.5+(.42-.5)*Qt(P),P>.92){let te=(P-.92)/.08,ne=Math.sqrt(Math.max(0,1-te*te*.86));X*=.9+.1*ne,ve*=ne}}se&&(ce+=_.distanceTo(T.copy(M))),M.copy(_),Pe<.5?m.copy(Y).sub(he).normalize():m.copy(de).sub(Y).normalize(),U.copy(R).addScaledVector(m,-R.dot(m)).normalize(),y.copy(m).cross(U).normalize();let x=J;for(let P=0;P<4;P++)Be[P]=A.copy(j[P]).sub(de).dot(y);for(let P=0;P<jr;P++){let te=P/jr*Math.PI*2,ne=Math.cos(te),$=Math.sin(te),Me=Math.sign($)*Math.abs($)**.62*X*x,ee=Math.sign(ne)*Math.abs(ne)**.82*ve*x;if(ne>0&&Pe>.62){let _e=0;for(let Ne=0;Ne<4;Ne++)_e=Math.max(_e,Math.exp(-(((Me-Be[Ne])/.24)**2)));ee+=_e*.16*Qt((Pe-.62)/.3)*x}S.copy(_).addScaledVector(y,Me).addScaledVector(U,ee),I(W+se*jr+P,S,X?Math.max(-1,Math.min(1,Me/(X*x||1))):0,ce,ue,0)}}}function ye(){let O=(j,H,le)=>{for(let pe=0;pe<H;pe++)for(let Ee=0;Ee<le;Ee++){let J=j+pe*le+Ee,W=j+pe*le+(Ee+1)%le,b=j+pe*le+(Ee+le-1)%le,be=j+Math.min(H-1,pe+1)*le+Ee,ue=j+Math.max(0,pe-1)*le+Ee,ce=r[W*3]-r[b*3],se=r[W*3+1]-r[b*3+1],Pe=r[W*3+2]-r[b*3+2],X=r[be*3]-r[ue*3],ve=r[be*3+1]-r[ue*3+1],w=r[be*3+2]-r[ue*3+2],x=se*w-Pe*ve,P=Pe*X-ce*w,te=ce*ve-se*X,ne=Math.hypot(x,P,te);if(ne<1e-7){x=X,P=ve,te=w;let $=Math.hypot(x,P,te)||1;x/=$,P/=$,te/=$}else x/=ne,P/=ne,te/=ne;a[J*3]=x,a[J*3+1]=P,a[J*3+2]=te}};for(let j=0;j<bo;j++){let H=j*Ta;for(let le=0;le<qr;le++)O(H+le*cr,To,Kt);O(H+qr*cr,Ea,jr)}}return{mesh:v,finger:G,palm:q,commit(O){d.value=O==="full"?1:0,ye(),o.needsUpdate=!0,l.needsUpdate=!0,h.needsUpdate=!0,v.visible=!0},hide(){v.visible=!1}}}var Mn=new N(0,0,1),hi=(e,t,i)=>Math.max(t,Math.min(i,e)),lt=(e,t,i)=>e+(t-e)*i,wo=e=>e*e*(3-2*e);function Ao(e,t=0){let i=new cn;i.background=new Xe(526346);let r=(s,o,l,h,c,u)=>{let d=new dt(new Wt(s,o),new zi({color:new Xe(u,u,u),side:ii}));d.position.set(l,h,c),d.lookAt(0,0,0),i.add(d)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2),t&&r(14,10,0,1,10,t);let a=new to(e),n=a.fromScene(i,.025).texture;return a.dispose(),n}function $h(e=256,t=3){let i=document.createElement("canvas");i.width=i.height=e;let r=i.getContext("2d"),a=r.createImageData(e,e);for(let s=0;s<a.data.length;s+=4){let o=120+Math.random()*90;a.data[s]=a.data[s+1]=a.data[s+2]=o,a.data[s+3]=255}r.putImageData(a,0,0);let n=new Gi(i);return n.wrapS=n.wrapT=Pa,n.repeat.set(t,t),n}var bi=(e,t,i,r,a=0,n=0,s=0)=>(a&&e.rotateX(a),n&&e.rotateY(n),s&&e.rotateZ(s),e.translate(t,i,r),e),Q0=e=>e.index?e.toNonIndexed():e,Ro=e=>{let t=e.map(Q0);return t.forEach(i=>{Object.keys(i.attributes).forEach(r=>{r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r)})}),H0(t)};function Sn(e,t,i,r,a,n,s,o,l){return e.moveTo(t+n,i),e.lineTo(r-s,i),e.quadraticCurveTo(r,i,r,i+s),e.lineTo(r,a-o),e.quadraticCurveTo(r,a,r-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,i+n),e.quadraticCurveTo(t,i,t+n,i),e}function Co(e,t,i,r=0,a=0){return Sn(new Vi,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}function ev(e,t,i,r=0,a=0){return Sn(new ki,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}var ci=18.7,ui=10.3,En=2.5,tv={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},ei={w:7.9,h:4.9,y:-.15},Tn={x:5.25,y:-.15},Xi=(e,t,i=0)=>{let{x0:r,x1:a,y0:n,y1:s,outer:o,inner:l}=tv,h=r-i,c=a+i,u=n-i,d=s+i,p=o+i*.6,g=l+i*.6,v=new e;return t<0?Sn(v,-c,u,-h,d,p,g,g,p):Sn(v,h,u,c,d,g,p,p,g)};function iv(){let e=1024/ci,t=564/ui,i=1024/2048,r=y=>(y+ci/2)*e,a=y=>(ui/2-y)*t,n=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=564,y},s=n(),o=n(),l=n(),h=s.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=y=>{let _=document.createElement("canvas");return _.width=_.height=6,y(_.getContext("2d")),_};h.fillStyle=h.createPattern(d(y=>{y.fillStyle="#050505",y.fillRect(0,0,6,6),y.fillStyle="#121212",y.fillRect(.5,.5,5,5),y.fillStyle="#1f1f1f",y.fillRect(.5,.5,5,1),y.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(y=>{y.fillStyle="#242424",y.fillRect(0,0,6,6),y.fillStyle="#c8c8c8",y.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=y=>{y.beginPath(),y.roundRect(r(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),y.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*i),h.fillStyle="#242424",h.fillRect(0,a(g)-3*i,1024,3*i),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*i);let v='"Inter Tight", Arial, sans-serif',m=(y,_)=>{y.fillStyle=_,y.font=`500 ${37*i}px ${v}`,y.textBaseline="middle","letterSpacing"in y&&(y.letterSpacing=`${4*i}px`),y.textAlign="right",y.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),a(4.35)),y.textAlign="left",y.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),a(4.35)),y.beginPath(),y.moveTo(r(0),a(4.72)),y.lineTo(r(.34),a(4.05)),y.lineTo(r(-.34),a(4.05)),y.closePath(),y.fill()};m(h,"#3a3a3a"),m(c,"#f0f0f0");for(let y=0;y<240;y++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*i*1.4;let _=Math.random()*1024,T=Math.random()*564,B=Math.random()*6.28,A=(10+Math.random()*120)*i;h.beginPath(),h.moveTo(_,T),h.lineTo(_+Math.cos(B)*A,T+Math.sin(B)*A),h.stroke()}for(let y=0;y<420;y++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let f=(y,_)=>{let T=new Gi(y);return _&&(T.colorSpace=ut),T.anisotropy=8,T};return{map:f(s,!0),bump:f(o),rough:f(l)}}function rv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let r=4;r<128;r+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,r,0,6.2832),t.stroke();let i=new Gi(e);return i.colorSpace=ut,i}function Po(e){let t=En/2,i=iv(),r=new Ut({map:i.map,bumpMap:i.bump,bumpScale:1.2,roughnessMap:i.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new Ut({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:$h(256,5)}),n=new Ut({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),s=new Ut({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new Ut({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new Ut({map:rv(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new g0({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=bi(new kh(ci,ui,En-c,3,.14),0,0,-c/2),d=Co(ci-.06,ui-.06,.2);d.holes.push(Xi(ki,-1),Xi(ki,1));let p=new mo(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,v=p.attributes.uv;for(let R=0;R<g.count;R++)v.setXY(R,(g.getX(R)+ci/2)/ci,(g.getY(R)+ui/2)/ui);p.translate(0,0,t-c);let m=(R,I)=>{let k=R;return k.holes.push(I),new mo(k,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},f=[bi(m(Xi(Vi,-1,.16),Xi(ki,-1)),0,0,t),bi(m(Xi(Vi,1,.16),Xi(ki,1)),0,0,t),bi(m(Co(ei.w+.36,ei.h+.36,.16,0,ei.y),ev(ei.w+.06,ei.h+.06,.08,0,ei.y)),0,0,t),bi(new Bi(ci-.5,.09,.06),0,3.5,t+.02)],y=new Vi;y.absarc(0,0,.98,0,Math.PI*2,!1);let _=new ki;_.absarc(0,0,.6,0,Math.PI*2,!0),y.holes.push(_);let T=[new mo(y,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let R=0;R<6;R++){let I=R/6*Math.PI*2;T.push(bi(new Bi(.2,.44,.1),Math.cos(I)*.46,Math.sin(I)*.46,.05,0,0,I+Math.PI/2))}T.push(bi(new pn(.06,.06,.08,12),0,0,.04,Math.PI/2));let B=new qg(1,56),A=Ro([new go(Xi(Vi,-1),12),new go(Xi(Vi,1),12)]);A.translate(0,0,t+.012);let C=Co(ei.w,ei.h,.06,0,0),U=new go(C,6),M=U.attributes.position,S=U.attributes.uv;for(let R=0;R<M.count;R++)S.setXY(R,M.getX(R)/ei.w+.5,M.getY(R)/ei.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:r,lips:Ro(f),gloss:n,floor:bi(new Wt(ci-.4,ui-.4),0,0,t-c+.004),cavity:s,hub:Ro(T),white:o,pack:B,packMat:l,glassGeo:A,glass:h,labelGeo:U,spineGeo:bi(new Wt(16.6,1.72),0,-ui/2-.006,-.08,Math.PI/2),stickerGeo:new Wt(1,1),hit:new Bi(ci,ui,En)}}var av=[{x:-7.1,y:3.46,size:3.7,turn:-.13,over:!0},{x:7.1,y:3.46,size:3.7,turn:.11,over:!0},{x:3.3,y:-3.84,size:2.42,turn:-.2}],Kh=e=>{let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);let r=new Gi(t);return r.colorSpace=ut,r},Yr=Kh("#ffffff"),Qh=Kh("rgba(0,0,0,0)");function Lo(e,t=0){let i=new or,r=(h,c)=>{let u=new dt(h,c);return i.add(u),u};r(e.body,e.plastic),r(e.floor,e.cavity),r(e.slab,e.front),r(e.lips,e.gloss);let a=[-Tn.x,Tn.x].map(h=>{let c=r(e.pack,e.packMat);c.position.set(h,Tn.y,e.FRONT-e.WALL+.012);let u=r(e.hub,e.white);return u.position.set(h,Tn.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});r(e.glassGeo,e.glass);let n=()=>new Ut({map:Yr,emissiveMap:Yr,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),s=r(e.labelGeo,n());s.position.set(0,ei.y,e.FRONT+.008),s.rotation.z=t;let o=r(e.spineGeo,n()),l=av.map((h,c)=>{let u=r(e.stickerGeo,new Ut({map:Qh,emissiveMap:Qh,color:16777215,emissive:16777215,emissiveIntensity:.42,roughness:.36,envMap:e.env,envMapIntensity:.75,alphaTest:.5}));return u.position.set(h.x+t*3,h.y-t*2,e.FRONT+(h.over?.085:.03)+c*.004),u.scale.setScalar(h.size),u.rotation.z=h.turn+t*9,u});return{group:i,reels:a,label:s,spine:o,stickers:l}}function ec(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,n=[16,16,16];for(let l=0;l<r.length;l+=4){let h=r[l],c=r[l+1],u=r[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,n=[h,c,u])}if(a<60)return"#141414";let s=Math.max(...n),o=135/s;return`rgb(${n.map(l=>Math.round(l*o)).join(",")})`}function tc(e,t,i){for(let r=0;r<700;r++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*i,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function ic(e,t,i,r,a){let n=i;for(e.font=`400 ${n}px ${a}`;e.measureText(t).width>r&&n>14;)n-=2,e.font=`400 ${n}px ${a}`;return n}var ba=(e,t=8)=>{let i=new Gi(e);return i.colorSpace=ut,i.anisotropy=t,i};function bn(e,t){if(e.width<=t)return e;let i=document.createElement("canvas");i.width=t,i.height=Math.max(1,Math.round(e.height*t/e.width));let r=i.getContext("2d");return r.imageSmoothingQuality="high",r.drawImage(e,0,0,i.width,i.height),i}function nv(e,t,i){return ba(rc(e,t,i))}function rc(e,t,i){let r=document.createElement("canvas");r.width=790,r.height=490;let a=r.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let n=getComputedStyle(document.body).fontFamily;if(e){let l=e.naturalWidth/e.naturalHeight,h=746/268,c=l>h?e.naturalHeight*h:e.naturalWidth,u=l>h?e.naturalHeight:e.naturalWidth/h;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-c)/2,(e.naturalHeight-u)/2,c,u,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(l=>{a.beginPath(),a.moveTo(24,l),a.lineTo(766,l),a.stroke()});let s='"DT Punk", cursive';a.fillStyle=i;let o=ic(a,t.name.toUpperCase(),66,640,s);return a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${s}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${s}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${n}`,a.textBaseline="middle",["SP","LP","EP"].forEach((l,h)=>{let c=30+h*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(c,440,22,22),a.fillText(l,c+32,452)}),a.strokeStyle=i,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",tc(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over",r}function sv(e,t){return ba(ac(e,t))}function ac(e,t){let i=document.createElement("canvas");i.width=1660,i.height=172;let r=i.getContext("2d");r.fillStyle="#e8e6df",r.fillRect(0,0,1660,172),r.fillStyle="#121212",r.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,n='"DT Punk", cursive';r.fillStyle="#efefe9",r.textBaseline="middle",r.font='400 92px "DT Punk", cursive',r.textAlign="center",r.fillText(e.code,75,172/2+6),r.textAlign="left",r.strokeStyle="#b6b3aa",r.lineWidth=2,r.beginPath(),r.moveTo(176,138),r.lineTo(1420,138),r.stroke(),r.fillStyle=t;let s=ic(r,e.name.toUpperCase(),112,1210,n);return r.font=`400 ${s}px ${n}`,r.fillText(e.name.toUpperCase(),186,172/2+2),r.fillStyle="#3c3a35",r.font=`500 30px ${a}`,r.textAlign="right",r.fillText(e.kind,1630,172/2-22),r.font=`500 24px ${a}`,r.fillText("TRBN \xB7 SP 120",1630,172/2+24),tc(r,1660,172),i}var ov="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",lv=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;uniform float light;
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
}`,hv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",cv=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;uniform float light;
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
}`,uv=[[0,0],[.55,0],[.92,.03],[1,.09],[.82,.2],[.6,.33],[.52,.5],[.56,.68],[.74,.84],[.84,.93],[.62,.995],[0,1]],dv=[[0,0],[.55,0],[.92,.04],[1,.11],[.8,.27],[.62,.5],[.6,.68],[.72,.82],[.7,.93],[.42,.995],[0,1]],No=e=>new jg(e.map(([t,i])=>new Ce(Math.max(.001,t),i)),14);function pv(){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d");t.fillStyle="rgba(0,0,0,.075)";for(let i=0;i<16;i++){let r=16-i;t.beginPath(),t.roundRect(26-r,26-r,76+r*2,12+r*2,6+r),t.fill()}return new Gi(e)}var yt=1,nc=.5,sc=[{k:[1.32,.42],phi:.4,L:[1.62,1.06,.78],r:.29,base:[3.07,-2.34,-.75]},{k:[1.24,-.16],phi:.33,L:[1.78,1.16,.8],r:.3,base:[2.83,-2.52,-.75]},{k:[1.08,-.72],phi:.26,L:[1.62,1.08,.78],r:.28,base:[2.59,-2.7,-.75]},{k:[.86,-1.22],phi:.17,L:[1.24,.82,.66],r:.25,base:[2.35,-2.88,-.75]}],wi=[[2.2,-2.4,-.8],[.75,-1.55,-1.05],[-.7,-1.15,-.95],[-1.7,-.9,-.8]],fv=[[3.34,-2.65,-.85],[3.08,-2.84,-.85],[2.82,-3.02,-.85],[2.56,-3.21,-.85],[3.52,-3.08,-1],[3.31,-3.23,-1],[3.11,-3.37,-1],[2.9,-3.52,-1]],mv=[[3.76,-3.4,-1.2,.44],[3.14,-3.84,-1.2,.38]];function gv(e){let t=document.createElement("canvas");t.width=t.height=24;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,24,24);let r=i.getImageData(0,0,24,24).data,a=Array.from({length:12},()=>[0,0,0,0]),n=0;for(let c=0;c<r.length;c+=4){let u=r[c],d=r[c+1],p=r[c+2],g=Math.max(u,d,p),v=Math.min(u,d,p),m=g-v;if(n+=1,m<40)continue;let f=g===u?(d-p)/m%6:g===d?(p-u)/m+2:(u-d)/m+4;f<0&&(f+=6);let y=a[Math.floor(f*2)%12],_=m*g;y[0]+=u*_,y[1]+=d*_,y[2]+=p*_,y[3]+=_}let s=a.reduce((c,u)=>u[3]>c[3]?u:c);if(s[3]<n*2600)return null;let o=s.slice(0,3).map(c=>c/s[3]),l=Math.max(...o),h=Math.min(...o);return o.map(c=>Math.max(0,Math.min(1,(c-h*.55)/(l-h*.55))))}var vv={portfolio:{glove:"cut",studs:!0,cuff:"spikes",rings:[0,2]},airtexno:{glove:"cut",cuff:"studs"},wave:{cuff:"spikes",rings:[1]},"concept-undo-studio":{glove:"full"},sabsus:{rings:[0,1,2,3]},basepoint:{band:!0},sunfreaks:{beads:2},"root-framer":{beads:1},janna:{beads:1},wallet:{tie:!0},mortgage:{charm:"key"},"concept-al-futtaim-themes":{charm:"fob"},template:{charm:"cassette"},"street-observations":{charm:"film"},"sabsus-platform":{charm:"tag"}},_v=[[0,0],[.62,.01],[.93,.05],[1,.14],[1,.82],[.94,.93],[.66,.99],[0,1]],Io=new Xe(1052692),di=new Xe(15263982),pi=new Xe(7171446),wa=new Xe(15328988);function xv(e){let t={value:0},i={value:0},r=new Ut({color:15526368,roughness:.46,metalness:0,envMap:e,envMapIntensity:1.25}),a=Me=>ee=>{ee.uniforms.uTime=t,ee.uniforms.uRim={value:Me},ee.uniforms.uPaper=i,ee.vertexShader=ee.vertexShader.replace("#include <common>",`#include <common>
varying float vBoneY;`).replace("#include <project_vertex>",`#include <project_vertex>
 vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;`),ee.fragmentShader=ee.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uRim;uniform float uPaper;varying float vBoneY;`).replace("#include <opaque_fragment>",`
        float boneRim = pow(1. - saturate(dot(normal, normalize(vViewPosition))), 2.4);
        float boneScan = smoothstep(.1, .0, abs(fract(vBoneY * .06 - uTime * .17) - .5));
        outgoingLight += vec3(uRim * (1. - uPaper * .8)) * boneRim + vec3(.8) * boneScan * (.25 + boneRim) * min(1., uRim * 3.);
        #include <opaque_fragment>`)};r.onBeforeCompile=a(.34);let n=new or,s=new pa(No(uv),r,32),o=new pa(No(dv),r,10),l=new pa(new Ih(1,16,12),r,16),h=new pa(new Wt(1,1),new zi({map:pv(),transparent:!0,depthWrite:!1,fog:!1,opacity:.95}),25);h.renderOrder=2,[s,o,l,h].forEach(Me=>{Me.frustumCulled=!1,n.add(Me)});let c=K0(e,a);n.add(c.mesh);let u=Array.from({length:4},()=>new N),d=Array.from({length:4},()=>new N),p=Array.from({length:5},()=>new N),g=new Ut({color:16777215,roughness:.56,metalness:0,envMap:e,envMapIntensity:.8}),v=new Ut({color:16777215,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6});g.onBeforeCompile=a(.07),v.onBeforeCompile=a(.16);let m=new m0(1,.18,8,26),f=new Ih(1,12,10),y=new kh(1,1,1,2,.12),_={},T={stall:[No(_v),g,60],band:[new pn(1,1,1,30),g,4],bead:[f,g,60],tie:[m,g,4],block:[y,g,8],spike:[new Yg(1,1,10).translate(0,.5,0),v,44],loop:[m,v,30],pin:[f,v,16],plate:[y,v,10],sleeve:[new pn(1,1,1,22),v,8]};Object.entries(T).forEach(([Me,[ee,_e,Ne]])=>{let me=new pa(ee,_e,Ne);me.setColorAt(0,di),me.count=0,me.visible=!1,me.frustumCulled=!1,me.userData.most=Ne,_[Me]=me,n.add(me)});let B={},A=(Me,ee,_e,Ne,me,we,ge)=>{let oe=_[Me],re=B[Me]||0;re>=oe.userData.most||(S.set(Ne,me,we),oe.setMatrixAt(re,C.compose(ee,_e,S)),oe.setColorAt(re,ge),B[Me]=re+1)},C=new rt,U=new ni,M=new N,S=new N,R=new N,I=new N(0,1,0),k=(Me,ee,_e,Ne,me)=>{R.copy(Ne).sub(_e);let we=R.length();R.divideScalar(we),U.setFromUnitVectors(I,R),M.copy(_e).addScaledVector(R,we*.025),S.set(me,we*.95,me*.9),Me.setMatrixAt(ee,C.compose(M,U,S))},F=(Me,ee,_e)=>{U.identity(),S.set(_e,_e*1.2,_e*.82),l.setMatrixAt(Me,C.compose(ee,U,S))},ae=(Me,ee,_e,Ne)=>{let me=ee.x+ee.z*.3,we=ee.y-ee.z*.72,ge=_e.x+_e.z*.3,oe=_e.y-_e.z*.72,re=ge-me,Re=oe-we,Ae=Math.hypot(re,Re);U.setFromAxisAngle(Mn,Math.atan2(Re,re)),M.set((me+ge)/2,(we+oe)/2,.022),S.set(Ae*1.68,Ne,1),h.setMatrixAt(Me,C.compose(M,U,S))},G=[new N,new N,new N,new N],de=new N,Y=new N,he=new N,Se=new N,Ue=new N,Be=new N,q=new N,ye=new N,O=new N,j=new ni,H=new ni,le=new ni().setFromAxisAngle(I,Math.PI/2),pe=new Xe(15328988),Ee=new Xe(15328988),J=(Me,ee,_e,Ne,me)=>{R.copy(_e).sub(ee);let we=R.length();we<1e-4||(j.setFromUnitVectors(I,R.divideScalar(we)),A(Me,ee,j,Ne,we,Ne,me))},W=0,b=(Me,ee,_e,Ne,me,we,ge,oe)=>{let re=1.65*W;Be.set(ee*re,_e*re,Ne*re).applyQuaternion(H).add(Ue),A(Me,Be,H,me*re,we*re,ge*re,oe)},be={key(){return b("loop",0,-.42,0,.36,.36,.46,pi),b("plate",0,-1.36,0,.17,1.3,.09,pi),b("plate",.15,-1.84,0,.2,.13,.08,pi),b("plate",.13,-1.58,0,.15,.12,.08,pi),2},fob(){return b("plate",0,-.86,0,.86,1.28,.2,di),b("block",0,-.86,.04,.72,1.14,.24,Io),b("pin",0,-.62,.17,.15,.15,.05,di),b("pin",0,-1.02,.17,.15,.15,.05,di),1.5},cassette(){return b("block",0,-.62,0,1.3,.86,.17,wa),b("block",0,-.44,.09,1.06,.28,.02,pe),b("loop",-.3,-.78,.1,.13,.13,.06,pi),b("loop",.3,-.78,.1,.13,.13,.06,pi),1.1},film(){return b("block",0,-.62,0,.7,.92,.7,pe),b("plate",0,-.13,0,.78,.1,.78,di),b("plate",0,-1.11,0,.78,.1,.78,di),b("block",.46,-.68,0,.34,.5,.03,pe),1.2},tag(){return b("plate",0,-.8,0,.84,1.16,.07,pi),b("block",0,-.9,.05,.62,.4,.02,Io),1.4}},ue=null,ce=null,se=1,Pe=0,X=0,ve=0,w=7,x=5,P=0,te=!1,ne={half:7,tall:5},$=new N;return{group:n,place(Me,ee){ne.half=Me,ne.tall=ee,te||(te=!0,w=Me,x=ee)},theme(Me){i.value=Me,r.color.set(Me?3421242:15526368),r.envMapIntensity=Me?.7:1.25},dress(Me,ee){let _e=vv[Me]||null;ee?Ee.setRGB(ee[0],ee[1],ee[2],ut):Ee.copy(wa),_e!==ue&&(ue=_e,X+=.9)},update(Me,ee,_e){let Ne=1-Math.exp(-ee/180);w+=(ne.half-w)*Ne,x+=(ne.tall-x)*Ne,P+=(Math.min(1,_e*20)-P)*(1-Math.exp(-ee/140)),t.value=Me/1e3;let me=0,we=0,ge=0,oe=0;ce!==ue?(se=Math.max(0,se-ee/110),se||(ce=ue,pe.copy(Ee))):se=Math.min(1,se+ee/260);let re=se-1;W=ce?Math.max(0,1+2.7*re*re*re+1.7*re*re):0,Object.keys(B).forEach(Ae=>{B[Ae]=0});let Re=ce&&(ce.cuff||ce.beads||ce.tie||ce.band);if(ve+=((Re?1.25:ce?.charm?.9:0)-ve)*(1-Math.exp(-ee/320)),X+=(-Pe*26-X*2.4+P*2.2*Math.sin(Me*.012))*(ee/1e3),Pe+=X*(ee/1e3),[-1,1].forEach((Ae,Ie)=>{let L=Ae*w,fe=-x*(Ie?.2:.1)+Math.sin(Me*7e-4+Ie*2)*.05,Q=(V,xe,ie,Oe)=>V.set(L+Ae*xe*yt,fe+ve+ie*yt,Oe);sc.forEach((V,xe)=>{let ie=Math.sin(Me*.0013+xe*1.3+Ie*2.4)*.012-P*.07,Oe=Math.cos(V.phi),Ve=Math.sin(V.phi),qe=V.k[0],je=V.k[1];Q(G[0],qe,je,.34+ie*.4),qe-=V.L[0]*Oe,je+=V.L[0]*Ve,Q(G[1],qe,je,.8+ie);let Ht=V.k[0]/(V.k[0]-qe);if(Q(Y,0,V.k[1]+(je-V.k[1])*Ht,G[0].z+(G[1].z-G[0].z)*Ht),qe-=V.L[1]*Oe,je+=V.L[1]*Ve,Q(G[2],qe,je,.62+ie*1.4),qe-=V.L[2]*Oe,je+=V.L[2]*Ve-.05,Q(G[3],qe,je,.3+ie),k(s,me++,G[0],G[1],V.r*yt),k(s,me++,G[1],G[2],V.r*.86*yt),k(o,we++,G[2],G[3],V.r*.8*yt),Q(de,V.base[0],V.base[1],V.base[2]),k(s,me++,de,G[0],.34*yt),ce){if(ce.glove){u[xe].copy(G[0]),d[xe].copy(de),p[0].copy(de).lerp(G[0],.72);for(let vt=0;vt<4;vt++)p[vt+1].copy(G[vt]);c.finger(Ie,xe,p,V.r*yt,ce.glove==="full"?0:.5,W)}if(ce.studs&&(he.copy(G[0]),he.z+=V.r*1.2,Se.set(Ae*.5,.35,.8).normalize(),j.setFromUnitVectors(I,Se),A("spike",he,j,.2*W,.66*W,.2*W,di)),ce.rings?.includes(xe)){he.copy(G[0]).lerp(G[1],.6),Se.copy(G[1]).sub(G[0]).normalize(),j.setFromUnitVectors(I,Se);let vt=V.r*.84*W;A("sleeve",he,j,vt,.32*W,vt,di),he.z+=vt*.92,j.identity(),A("pin",he,j,.17*W,.17*W,.09*W,di)}Ie===1&&xe===2&&(q.copy(G[1]).lerp(G[2],.3),ye.copy(G[2]).sub(G[1]).normalize())}ae(oe++,Y,G[1],1.4*yt),ae(oe++,G[1],G[2],1.3*yt),ae(oe++,G[2],G[3],1.1*yt)});for(let V=0;V<4;V++)Q(G[V],wi[V][0],wi[V][1],wi[V][2]);if(k(s,me++,G[0],G[1],.37*yt),k(s,me++,G[1],G[2],.33*yt),k(o,we++,G[2],G[3],.29*yt),fv.forEach((V,xe)=>F(ge++,Q(de,V[0],V[1],V[2]),(.27+xe%3*.04)*yt)),$.set(Ae*.3,-1,-.55).normalize(),mv.forEach(([V,xe,ie,Oe])=>{Q(de,V,xe,ie),k(s,me++,de,Y.copy(de).addScaledVector($,26),Oe*yt)}),ce){if(ce.glove){Q(p[0],wi[0][0]+.55,wi[0][1]-.5,wi[0][2]-.05);for(let ie=0;ie<4;ie++)Q(p[ie+1],wi[ie][0],wi[ie][1],wi[ie][2]);c.finger(Ie,4,p,.4*yt,ce.glove==="full"?0:.55,W),c.palm(Ie,u,d,Q(he,3.45,-3.62,-1.2),$,sc[0].r*yt,W)}let V=.98*yt;Q(he,3.45,-3.62,-1.2).addScaledVector($,ce.glove?.3:.45),Se.copy($).cross(Mn).normalize(),Ue.copy(Se).cross($);let xe=(ie,Oe)=>Be.copy(he).addScaledVector(Se,Math.cos(ie)*Oe).addScaledVector(Ue,Math.sin(ie)*Oe);if(j.setFromUnitVectors(I,$),ce.cuff){A("band",he,j,V*W,.9*W,V*W,Io);let ie=ce.cuff==="spikes"?11:16;for(let Oe=0;Oe<ie;Oe++){let Ve=Oe/ie*Math.PI*2;xe(Ve,V*.97),Ue.copy(Be).sub(he).normalize(),H.setFromUnitVectors(I,Ue);let qe=ce.cuff==="spikes"?.62:.2,je=ce.cuff==="spikes"?.17:.13;A("spike",Be,H,je*W,qe*W,je*W,di),Ue.copy(Se).cross($)}}if(ce.beads)for(let ie=0;ie<ce.beads;ie++){let Oe=ie*.46,Ve=13+ie;for(let qe=0;qe<Ve;qe++)he.addScaledVector($,Oe),xe(qe/Ve*Math.PI*2+ie,V),he.addScaledVector($,-Oe),H.identity(),A("bead",Be,H,.23*W,.23*W,.23*W,(qe+ie)%3?pe:wa)}j.setFromUnitVectors(Mn,$),ce.tie&&A("tie",he,j,V*W,V*W,V*.9*W,pe),ce.band&&(H.setFromUnitVectors(I,$),A("band",he,H,V*.99*W,.5*W,V*.99*W,wa),xe(Math.PI/2,V),A("block",Be,H,.9*W,.34*W,.12*W,wa))}}),ce?.charm){let Ae=Pe+Math.sin(Me*9e-4)*.05;O.set(Math.sin(Ae),-Math.cos(Ae),.07).normalize(),j.setFromUnitVectors(Mn,ye),A("loop",q,j,.38*W,.38*W,.42*W,pi),he.copy(q).addScaledVector(O,.34*W),Se.copy(O).negate(),j.setFromUnitVectors(I,Se);for(let L=0;L<4;L++)he.addScaledVector(O,.33*W),H.copy(j),L%2&&H.multiply(le),A("loop",he,H,.17*W,.27*W,.17*W,pi);Ue.copy(he).addScaledVector(O,.3*W),H.copy(j),Se.set(0,1,0),H.multiply(U.setFromAxisAngle(Se,Math.sin(Me*.0011)*.36+Pe*1.5)),b("loop",0,0,0,.12,.12,.1,pi);let Ie=be[ce.charm]();Se.copy(q).addScaledVector(O,(1.8+Ie*1.65)*W),ae(oe++,q,Se,1.1*yt)}h.count=oe,ce?.glove?c.commit(ce.glove):c.hide(),Object.entries(_).forEach(([Ae,Ie])=>{let L=B[Ae]||0;Ie.count=L,Ie.visible=L>0,L&&(Ie.instanceMatrix.needsUpdate=!0,Ie.instanceColor.needsUpdate=!0)}),[s,o,l,h].forEach(Ae=>{Ae.instanceMatrix.needsUpdate=!0})}}}function yv({host:e,stage:t,items:i,onHover:r,onOpen:a,onPlay:n}){let s=document.createElement("canvas");s.className="tv-canvas",s.setAttribute("aria-hidden","true"),e.append(s);let o;try{o=new _h({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return s.remove(),null}let l=Math.min(devicePixelRatio||1,1.25);o.setPixelRatio(l),o.outputColorSpace=ut,o.setClearColor(0,0);let h=Ao(o),c=Po(h),u=new cn;u.background=new Xe(131587),u.fog=new Pg(131587,40,96);let d=new zh(16777215,1.5);d.position.set(-8,18,22),u.add(d);let p=new Bt(30,1,1,200);p.position.set(0,0,40);let g=new si({vertexShader:hv,fragmentShader:cv,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:Yr},b:{value:Yr},fade:{value:1},time:{value:0},focus:{value:new Ce(.47,.55)},light:{value:0}}}),v=new dt(new Wt(2,2),g);v.frustumCulled=!1,v.renderOrder=-10,u.add(v);let m=new Bh(16777215,.32);u.add(m);let f=new Xe(16777215),y=new Xe(16777215),_=new Xe(16777215),T=new dt(new Wt(1,1),new zi({map:Yr,color:16777215,transparent:!0,opacity:0,fog:!1}));T.renderOrder=1;let B=new or;u.add(B),B.add(T);let A=new dt(new Wt(1,1),new zi({color:328965,fog:!1}));A.position.z=-.04,B.add(A);let C=new dt(new Bi(1,1,1),new Ut({color:723723,roughness:.42,envMap:h,envMapIntensity:.9}));B.add(C);let U=xv(h);B.add(U.group);let M=0,S=0,R=i.map((ge,oe)=>{let re=Re=>{let Ae=Math.sin((oe+1)*12.9898*Re)*43758.5453;return Ae-Math.floor(Ae)};return{rx:re(1)-.5,ry:re(2)-.5,rz:re(3)-.5,wob:re(4)*6.28,tilt:(re(5)-.5)*.022,pile:re(6)-.5}}),I=i.map((ge,oe)=>{let re=Lo(c,R[oe].tilt),Re=new dt(c.hit,new zi({visible:!1}));return Re.userData.index=oe,re.group.add(Re),re.hit=Re,u.add(re.group),re}),k=new Map,F=new Map,ae=(ge,oe)=>{if(k.has(ge)){let Re=k.get(ge);Re.complete&&Re.naturalWidth?oe(Re):Re.addEventListener("load",()=>oe(Re),{once:!0});return}let re=new Image;re.decoding="async",re.src=i[ge].src,k.set(ge,re),re.addEventListener("load",()=>oe(re),{once:!0})},G=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),de=ge=>{I[ge].wanted||(I[ge].wanted=!0,ae(ge,oe=>G.then(()=>{let re=ec(oe),Re=(Ae,Ie)=>{Ae.material.map=Ie,Ae.material.emissiveMap=Ie,Ae.material.emissiveIntensity=.55,Ae.material.color.set(16777215),Ae.material.needsUpdate=!0};Re(I[ge].label,nv(oe,i[ge],re)),Re(I[ge].spine,sv(i[ge],re)),Zh(i[ge].project,ge,Jh(oe)).forEach((Ae,Ie)=>{let L=I[ge].stickers[Ie];if(!L)return;let fe=new Gi(bn(Ae,256));fe.colorSpace=ut,fe.anisotropy=4,L.material.map=fe,L.material.emissiveMap=fe,L.material.needsUpdate=!0})})))},Y=ge=>{F.has(ge)||(F.set(ge,null),ae(ge,oe=>{let re=new Gi(oe);re.colorSpace=ut,re.anisotropy=8,re.generateMipmaps=!0,re.minFilter=mi;let Re=document.createElement("canvas");Re.width=Re.height=6;let Ae=Re.getContext("2d",{willReadFrequently:!0});Ae.drawImage(oe,0,0,6,6);let Ie=Ae.getImageData(0,0,6,6).data,L=0,fe=0,Q=0;for(let Ve=0;Ve<Ie.length;Ve+=4)L+=Ie[Ve],fe+=Ie[Ve+1],Q+=Ie[Ve+2];let V=new Xe(L/9180,fe/9180,Q/9180).convertSRGBToLinear(),xe=Math.max(L,fe,Q,1),ie=255/xe,Oe=`rgba(${[L,fe,Q].map(Ve=>Math.round(Ve*ie)).join(",")},.3)`;F.set(ge,{texture:re,ratio:oe.naturalWidth/oe.naturalHeight,avg:V,glow:Oe,light:gv(oe)}),ge===J&&W(ge)}))},he=new cn,Se=new Js(-1,1,1,-1,0,1),Ue=new si({vertexShader:ov,fragmentShader:lv,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1},light:{value:0}}}),Be=new dt(new Wt(2,2),Ue);Be.frustumCulled=!1,he.add(Be);let q=null,ye=0,O=0;function j(){let ge=Math.round(ye*l),oe=Math.round(O*l);(!q||q.width!==ge||q.height!==oe)&&(q?.dispose(),q=new Li(ge,oe,{samples:2,type:gr,colorSpace:"",generateMipmaps:!0,minFilter:mi,magFilter:qt})),Ue.uniforms.map.value=q.texture,p.aspect=ye/O,p.updateProjectionMatrix(),Ee()}let H=()=>{let ge=80*Math.tan(p.fov*Math.PI/360);return{vh:ge,vw:ge*p.aspect}},le=4/3,pe=0;function Ee(){let{vh:ge,vw:oe}=H(),re=oe*.62,Re=ge*.62,Ae=re,Ie=Ae/le;Ie>Re&&(Ie=Re,Ae=Ie*le),pe=ge*.06,T.scale.set(Ae,Ie,1),A.scale.set(Ae+.16,Ie+.16,1),C.scale.set(Ae+.16,Ie+.16,nc),C.position.z=-.05-nc/2,U.place((Ae+.16)/2,Ie/2),g.uniforms.focus.value.set(.5,.5+pe/ge)}let J=-1;function W(ge){let oe=F.get(ge);oe&&(g.uniforms.a.value!==oe.texture&&(g.uniforms.b.value=g.uniforms.a.value===Yr?oe.texture:g.uniforms.a.value,g.uniforms.a.value=oe.texture,g.uniforms.fade.value=0),y.copy(oe.avg).lerp(_,.3),document.documentElement.style.setProperty("--tube-glow",oe.glow),window.trbnRingTint?.(oe.light),U.dress(i[ge]?.project,oe.light),T.material.map=oe.texture,T.material.opacity=1,T.material.needsUpdate=!0,le=oe.ratio,Ee())}function b(){let ge=s.clientWidth,oe=s.clientHeight;!ge||!oe||(ye=ge,O=oe,o.setSize(ye,O,!1),j())}new ResizeObserver(b).observe(s),b();let be=()=>{let ge=document.documentElement.classList.contains("theme-light")?1:0;g.uniforms.light.value=ge,Ue.uniforms.light.value=ge,u.fog.color.set(ge?13224389:131587),u.background.set(ge?13224389:131587),U.theme(ge)};be(),addEventListener("trbn:theme",be);let ue=(ge,oe,re)=>wo(hi((re-ge)/(oe-ge),0,1));function ce(ge,oe,re,Re,Ae){let{vh:Ie,vw:L}=H(),fe=wo(hi(1-Math.abs(Re)*1.15,0,1)),Q=ge.group,V=Math.sin(Ae*5e-4+oe.wob),xe={x:L*.275,y:-Ie*.265,z:8,s:.52,rx:-.16+V*.012,ry:-.3+Math.cos(Ae*4e-4)*.018,rz:.05},ie;if(Re>=0){let Oe=re%2?1:-1,Ve=1-Re*4.2;ie={x:Oe*L*.49,y:Ie*.1+oe.pile*1.2-Re*.12,z:Ve,s:.46,rx:oe.rx*.1,ry:-Oe*.92+oe.ry*.08,rz:Oe*.03+oe.rz*.04},ie={x:lt(ie.x,xe.x,fe),y:lt(ie.y,xe.y,fe),z:lt(ie.z,xe.z,fe),s:lt(ie.s,xe.s,fe),rx:lt(ie.rx,xe.rx,fe),ry:lt(ie.ry,xe.ry,fe),rz:lt(ie.rz,xe.rz,fe)}}else{let Oe=En*.5,Ve=ue(0,.9,-Re),qe={x:-L*.265+oe.pile*.45,y:-Ie*.19+(Re+1)*Oe,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+oe.ry*.05,rz:oe.rz*.022};ie={x:lt(xe.x,qe.x,Ve),y:lt(xe.y,qe.y,Ve)+Math.sin(Ve*Math.PI)*3,z:lt(xe.z,qe.z,Ve),s:lt(xe.s,qe.s,Ve),rx:lt(xe.rx,qe.rx,Ve),ry:lt(xe.ry,qe.ry,Ve),rz:lt(xe.rz,qe.rz,Ve)}}Q.position.set(ie.x,ie.y,ie.z),Q.scale.setScalar(ie.s),Q.rotation.set(ie.rx,ie.ry,ie.rz),Q.visible=Re>-8&&Re<12&&ie.y>-Ie*.85}let se=new B0,Pe=new Ce,X=null,ve=-2,w=!1,x=()=>{ve!==-2&&(ve=-2,r(-1),t.classList.remove("is-pointing"))},P=()=>{if(w=!1,!X){x();return}let[ge,oe]=window.trbnBend?window.trbnBend(X.x,X.y,ye,O):[X.x,X.y],re=ge/ye,Re=oe/O;if(re<0||re>1||Re<0||Re>1){x();return}Pe.set(re*2-1,-(Re*2-1)),se.setFromCamera(Pe,p);let Ae=se.intersectObjects([...I.filter(L=>L.group.visible).map(L=>L.hit),T],!1)[0],Ie=Ae?Ae.object===T?-1:Ae.object.userData.index:-2;Ie!==ve&&(ve=Ie,r(Ie>=0?Ie:-1),t.classList.toggle("is-pointing",Ie!==-2))};t.addEventListener("pointermove",ge=>{let oe=s.getBoundingClientRect();X={x:ge.clientX-oe.left,y:ge.clientY-oe.top},w=!0}),t.addEventListener("pointerleave",()=>{X=null,w=!0}),t.addEventListener("click",ge=>{ge.target.closest("a, button")||(P(),ve!==-2&&a(ve===-1?J:ve))});let te=!1;Promise.all([o.compileAsync(u,p),o.compileAsync(he,Se)]).then(()=>{te=!0},()=>{te=!0});let ne=1,$=0,Me=0,ee=0,_e=0,Ne=0,me=!1,we=!0;return{frame:(ge,oe,re,Re=1)=>{if(!we||!te)return;let Ae=ge-ee,Ie=Math.abs(Ae);ee=ge,Me+=Ae*11+re*9e-4;let L=hi(ge/Math.max(1,i.length-1),0,1);I.forEach((ie,Oe)=>{let Ve=Oe-ge;if(Ve>-7&&Ve<7&&de(Oe),ce(ie,R[Oe],Oe,Ve,oe),Math.abs(Ve)<3){ie.reels[0].hub.rotation.z=-Me,ie.reels[1].hub.rotation.z=-Me*.82;let qe=lt(3.15,1.75,L),je=lt(1.75,3.15,L);ie.reels[0].pack.scale.set(qe,qe,1),ie.reels[1].pack.scale.set(je,je,1)}});let fe=hi(Math.round(ge),0,i.length-1);if(Y(fe),Y(Math.min(i.length-1,fe+1)),Y(Math.max(0,fe-1)),fe!==J){let ie=J<0;J=fe,ie||(ne=1,M=(Math.random()<.5?-1:1)*.9,n?.(fe)),W(fe)}ne=Math.max(ne*Math.exp(-re/170),hi(Ie*26,0,.7)),$||($=oe);let Q=Math.min(1,(oe-$)/700);f.lerp(y,1-Math.exp(-re/500)),m.color.copy(f),g.uniforms.time.value=oe/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+re/900),Ue.uniforms.time.value=oe/1e3,Ue.uniforms.glitch.value=ne,S+=(-M*70-S*7)*(re/1e3),M+=S*(re/1e3),U.update(oe,re,Ie),Ue.uniforms.power.value=1-(1-Q)**3,Ue.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let V=X?X.x/ye-.5:0,xe=X?X.y/O-.5:0;_e+=(V-_e)*(1-Math.exp(-re/260)),Ne+=(xe-Ne)*(1-Math.exp(-re/260)),p.position.x=_e*1.6,p.position.y=-Ne*1,p.lookAt(0,0,0),B.position.y=pe+Math.sin(oe*83e-5)*.05,B.rotation.set(Math.sin(oe*61e-5)*.009+Ne*.05+M*.012,Math.sin(oe*47e-5)*.013+_e*.1+M*.03,Math.sin(oe*39e-5)*.0045+M*.008),w&&P(),o.toneMapping=ri,o.setRenderTarget(q),o.clear(),o.render(u,p),o.setRenderTarget(null),o.clear(),o.render(he,Se),s.style.opacity=String(Math.min(Q*3,1)*Re),me||(me=!0,t.classList.add("tv-on"))},show(ge){we=ge,s.style.display=ge?"":"none",ge&&b()},lighter(){l<=.8||(l=Math.max(.8,l-.2),o.setPixelRatio(l),b())}}}var oc={rest:{x:.222,y:-.252,z:6,s:.48,rx:-.22,ry:-.36,rz:.07},lift:{x:.2,y:-.21,z:9,s:.45,rx:-.07,ry:-.12,rz:.025}};function Mv(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");return t.filter="blur(16px)",t.fillStyle="rgba(0,0,0,.9)",t.beginPath(),t.roundRect(44,38,168,84,16),t.fill(),ba(e,1)}function Sv({grid:e,scroller:t,items:i}){let r=document.createElement("canvas");r.className="tape-library",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"absolute",left:"0",top:"0",zIndex:"3",pointerEvents:"none"}),e.append(r);let a;try{a=new _h({canvas:r,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return r.remove(),null}let n=Math.min(devicePixelRatio||1,1.25);a.setPixelRatio(n),a.outputColorSpace=ut,a.toneMapping=ri,a.setClearColor(0,0),a.autoClear=!1;let s=Ao(a),o=Po(s),l=new cn,h=new zh(16777215,1.5);h.position.set(-8,18,22),l.add(h);let c=new Bh(16777215,.32);l.add(c);let u=new Bt(30,4/3,1,200);u.position.set(0,0,40),u.lookAt(0,0,0);let d=80*Math.tan(u.fov*Math.PI/360),p=d*u.aspect,g=new dt(new Wt(1,1),new zi({map:Mv(),transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=-1,l.add(g);let v=new Xe(16777215),m=i.map((O,j)=>{let H=Ee=>{let J=Math.sin((j+1)*12.9898*Ee)*43758.5453;return J-Math.floor(J)},le=Lo(o,(H(5)-.5)*.022);le.group.visible=!1,l.add(le.group);let pe=lt(1.75,3.15,H(7));return le.reels[0].pack.scale.set(pe,pe,1),le.reels[1].pack.scale.set(4.9-pe,4.9-pe,1),{item:O,tape:le,seed:{rx:H(1)-.5,ry:H(2)-.5,rz:H(3)-.5},spin:H(4)*6.28,tint:new Xe(1,1,1),wanted:!1,ready:!1,shown:!1,p:0,hover:0,h:0,tx:0,ty:0,px:0,py:0,box:null,dirty:!1}}),f=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),y=(O,j)=>{let H=ba(j,4);O.material.map=H,O.material.emissiveMap=H,O.material.emissiveIntensity=.55,O.material.color.set(16777215),O.material.needsUpdate=!0};function _(O){if(O.wanted)return;O.wanted=!0;let j=O.item.card.querySelector("img");if(!j)return;let H=()=>f.then(()=>{if(j.naturalWidth){try{T(O,j)}catch{}O.ready=!0,q()}});j.complete&&j.naturalWidth?H():j.addEventListener("load",H,{once:!0})}function T(O,j){let H=ec(j);y(O.tape.label,bn(rc(j,O.item,H),396)),y(O.tape.spine,bn(ac(O.item,H),830));let le=null;try{le=Jh(j)}catch{}Zh(O.item.project,O.item.index,le).forEach((ue,ce)=>{let se=O.tape.stickers[ce];if(!se)return;let Pe=ba(bn(ue,256),4);se.material.map=Pe,se.material.emissiveMap=Pe,se.material.needsUpdate=!0});let pe=document.createElement("canvas");pe.width=pe.height=6;let Ee=pe.getContext("2d",{willReadFrequently:!0});Ee.drawImage(j,0,0,6,6);let J=Ee.getImageData(0,0,6,6).data,W=0,b=0,be=0;for(let ue=0;ue<J.length;ue+=4)W+=J[ue],b+=J[ue+1],be+=J[ue+2];O.tint.setRGB(W/9180,b/9180,be/9180).convertSRGBToLinear().lerp(v,.3)}function B(O,j){let H=oc.rest,le=oc.lift,pe=wo(hi(O.h,0,1)),Ee=lt(H.x,le.x,pe)*p,J=lt(H.y,le.y,pe)*d,W=lt(H.rz,le.rz,pe)+O.seed.rz*.03,b=lt(H.rx,le.rx,pe)+O.seed.rx*.05-O.py*.2*pe,be=lt(H.ry,le.ry,pe)+O.seed.ry*.07+O.px*.28*pe,ue=1-(1-hi(O.p,0,1))**3;Ee+=(1-ue)*4.5,J-=(1-ue)*9.5,W+=(1-ue)*.22;let ce=O.tape.group;ce.position.set(Ee,J,lt(H.z,le.z,pe)),ce.scale.setScalar(lt(H.s,le.s,pe)),ce.rotation.set(b,be,W),O.tape.reels[0].hub.rotation.z=-O.spin,O.tape.reels[1].hub.rotation.z=-O.spin*.82,g.position.set(Ee+1.1+pe*.9,J-1.5-pe*1.1,0),g.scale.set(ci*ce.scale.x*(1.2+pe*.12),ui*ce.scale.x*(1.5+pe*.2),1),g.rotation.set(0,0,W),g.material.opacity=(.78-pe*.2)*ue}let A=220,C=0,U=0,M=-1e9,S=0,R=0,I=!0,k=!0,F=!1,ae=!1,G=null,de=0,Y=0,he=0,Se=0,Ue=(O,j)=>{let{box:H}=O,le=H.left,pe=U-(H.top-j+H.height);a.setViewport(le,pe,H.width,H.height),a.setScissor(le,pe,H.width,H.height),a.clear(),!(!O.shown||!O.ready)&&(G&&G!==O.tape.group&&(G.visible=!1),G=O.tape.group,G.visible=!0,c.color.copy(O.tint),a.render(l,u))};function Be(O){if(S=0,!k||!F||!ae||document.hidden)return;let j=Math.min(250,O-(R||O));R=O;let H=t.getBoundingClientRect(),le=e.getBoundingClientRect(),pe=e.clientWidth,Ee=e.clientHeight,J=m.map(X=>X.item.card.hidden?null:X.item.media.getBoundingClientRect()),W=H.top-le.top,b=H.bottom-le.top,be=Math.max(1,Math.min(Math.round(H.height+A*2),Math.ceil(Ee)));(pe!==C||be!==U)&&(C=pe,U=be,a.setSize(C,U,!1),r.style.width=`${C}px`,r.style.height=`${U}px`,I=!0);let ue=Math.max(0,Math.floor(Ee-U));if(W<M+A*.35||b>M+U-A*.35||M>ue){let X=hi(Math.round(W-A),0,ue);X!==M&&(M=X,r.style.transform=`translate3d(0,${M}px,0)`,I=!0)}let ce=!1,se=!1,Pe=M;if(m.forEach((X,ve)=>{let w=J[ve];if(X.box=null,!w||!w.width)return;let x=w.top-le.top,P=w.bottom-le.top;if(P>W-900&&x<b+900&&_(X),P<Pe||x>Pe+U)return;X.box={left:w.left-le.left,top:x,width:w.width,height:w.height},X.ready&&!X.shown&&P>W+w.height*.2&&x<b-w.height*.2&&(X.shown=!0,X.born=O,X.p=0,X.dirty=!0),X.shown&&X.p<1&&(X.p=Math.min(1,(O-X.born)/620),X.dirty=!0),(Math.abs(X.hover-X.h)>.001||Math.abs(X.tx-X.px)>.001||Math.abs(X.ty-X.py)>.001||X.shown&&X.p<1)&&(X.dirty=!0,se=!0);let te=X.h+(X.hover-X.h)*(1-Math.exp(-j/150));X.h=Math.abs(te-X.hover)<.001?X.hover:te,X.px+=(X.tx-X.px)*(1-Math.exp(-j/170)),X.py+=(X.ty-X.py)*(1-Math.exp(-j/170)),X.h>.02&&(X.spin+=j*.0034*X.h,X.dirty=!0),(X.dirty||I)&&(ce||(ce=X.dirty))}),ce&&!se&&!I&&O-de<30){q();return}de=O,a.setScissorTest(!1),I&&a.clear(),a.setScissorTest(!0),m.forEach(X=>{!X.box||!(I||X.dirty)||(X.ready&&X.shown&&B(X,O),Ue(X,Pe),X.dirty=!1)}),a.setScissorTest(!1),I=!1,ce?(Y++,he+=Math.min(j,50),Y>=40&&(Se=he/Y>26?Se+1:0,Y=0,he=0,Se>=2&&!navigator.webdriver&&(Se=0,ye())),q()):(Y=0,he=0,R=0)}function q(){!S&&k&&F&&ae&&!document.hidden&&(S=requestAnimationFrame(Be))}function ye(){n<=.8||(n=Math.max(.8,n-.2),a.setPixelRatio(n),C=0,I=!0)}return m.forEach(O=>{let{link:j,media:H}=O.item,le=pe=>{let Ee=H.getBoundingClientRect();Ee.width&&(O.tx=hi((pe.clientX-Ee.left)/Ee.width-.5,-.6,.6),O.ty=hi((pe.clientY-Ee.top)/Ee.height-.5,-.6,.6),q())};j.addEventListener("pointerenter",pe=>{O.hover=1,le(pe)}),j.addEventListener("pointermove",le),j.addEventListener("pointerleave",()=>{O.hover=0,O.tx=0,O.ty=0,q()}),j.addEventListener("focus",()=>{j.matches(":focus-visible")&&(O.hover=1,q())}),j.addEventListener("blur",()=>{O.hover=0,q()})}),t.addEventListener("scroll",q,{passive:!0}),new ResizeObserver(()=>{I=!0,q()}).observe(e),new ResizeObserver(()=>{I=!0,q()}).observe(t),new IntersectionObserver(([O])=>{F=O.isIntersecting,F&&(I=!0,q())},{root:t,rootMargin:`${A}px 0px`}).observe(e),document.addEventListener("visibilitychange",()=>{I=!0,q()}),addEventListener("pageshow",()=>{I=!0,q()}),m.forEach(O=>{O.tape.group.visible=!0}),a.compileAsync(l,u).catch(()=>{}).then(()=>{m.forEach(O=>{O.tape.group.visible=!1}),ae=!0,I=!0,q()}),{wake(){I=!0,q()},show(O){k=O,r.style.display=O?"":"none",O&&(I=!0,q())}}}export{yv as default,$h as grainTexture,Lo as makeTape,Sv as startShelf,Ao as studioEnv,Po as tapeParts};
