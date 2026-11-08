var hc=0,To=1,cc=2,wo=1,uc=2,ur=3,Tr=0,wt=1,Zt=2,wr=0,li=1,Ao=2,Ro=3,Co=4,dc=5,jr=100,pc=101,fc=102,mc=103,gc=104,_c=200,vc=201,xc=202,yc=203,_n=204,vn=205,Mc=206,Sc=207,Ec=208,bc=209,Tc=210,wc=211,Ac=212,Rc=213,Cc=214,xn=0,yn=1,Mn=2,hi=3,Sn=4,En=5,bn=6,Tn=7,Po=0,Pc=1,Lc=2,$t=0,Uc=1,Ic=2,Nc=3,Dc=4,Oc=5,Fc=6,Bc=7,Lo=300,ci=301,ui=302,wn=303,An=304,xa=306,ya=1e3,qr=1001,Rn=1002,Ct=1003,zc=1004,Ma=1005,Gt=1006,Cn=1007,dr=1008,pr=1009,Uo=1010,Io=1011,qi=1012,Pn=1013,Yr=1014,Qt=1015,di=1016,Ln=1017,Un=1018,pi=1020,No=35902,Do=1021,Oo=1022,Wt=1023,Fo=1024,Bo=1025,fi=1026,mi=1027,In=1028,Nn=1029,zo=1030,Dn=1031,On=1033,Sa=33776,Ea=33777,ba=33778,Ta=33779,Fn=35840,Bn=35841,zn=35842,kn=35843,Hn=36196,Vn=37492,Gn=37496,Wn=37808,Xn=37809,jn=37810,qn=37811,Yn=37812,Jn=37813,Kn=37814,Zn=37815,$n=37816,Qn=37817,es=37818,ts=37819,rs=37820,is=37821,wa=36492,as=36494,ns=36495,ko=36283,ss=36284,os=36285,ls=36286,Aa=2300,hs=2301,cs=2302,Ho=2400,Vo=2401,Go=2402,kc=3200,Hc=3201,Wo=0,Vc=1,Ar="",ct="srgb",gi="srgb-linear",Ra="linear",et="srgb",_i=7680,Xo=519,Gc=512,Wc=513,Xc=514,jo=515,jc=516,qc=517,Yc=518,Jc=519,qo=35044,Yo="300 es",fr=2e3,Ca=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,ds=180/Math.PI;function xi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[e&255]+St[e>>8&255]+St[e>>16&255]+St[e>>24&255]+"-"+St[t&255]+St[t>>8&255]+"-"+St[t>>16&15|64]+St[t>>24&255]+"-"+St[r&63|128]+St[r>>8&255]+"-"+St[r>>16&255]+St[r>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function xt(e,t,r){return Math.max(t,Math.min(r,e))}function Kc(e,t){return(e%t+t)%t}function ps(e,t,r){return(1-r)*e+r*t}function Yi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Ee=class Vh{constructor(t=0,r=0){Vh.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6],this.y=a[1]*r+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),a=Math.sin(r),n=this.x-t.x,s=this.y-t.y;return this.x=n*i-s*a+t.x,this.y=n*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class Gh{constructor(t,r,i,a,n,s,o,l,h){Gh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h)}set(t,r,i,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=r,c[4]=n,c[5]=l,c[6]=i,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=a[0],m=a[3],f=a[6],y=a[1],x=a[4],b=a[7],F=a[2],A=a[5],R=a[8];return n[0]=s*_+o*y+l*F,n[3]=s*m+o*x+l*A,n[6]=s*f+o*b+l*R,n[1]=h*_+c*y+u*F,n[4]=h*m+c*x+u*A,n[7]=h*f+c*b+u*R,n[2]=d*_+p*y+g*F,n[5]=d*m+p*x+g*A,n[8]=d*f+p*b+g*R,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return r*s*c-r*o*h-i*n*c+i*o*l+a*n*h-a*s*l}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,p=h*n-s*l,g=r*u+i*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(a*h-c*i)*_,t[2]=(o*i-a*s)*_,t[3]=d*_,t[4]=(c*r-a*l)*_,t[5]=(a*n-o*r)*_,t[6]=p*_,t[7]=(i*l-h*r)*_,t[8]=(s*r-i*n)*_,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(fs.makeScale(t,r)),this}rotate(t){return this.premultiply(fs.makeRotation(-t)),this}translate(t,r){return this.premultiply(fs.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<9;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fs=new Ye;function Jo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Pa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zc(){let e=Pa("canvas");return e.style.display="block",e}var Ko={};function Ji(e){e in Ko||(Ko[e]=!0,console.warn(e))}function $c(e,t,r){return new Promise(function(i,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,r);break;default:i()}}setTimeout(n,r)})}function Qc(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function eu(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ze={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===et&&(e.r=mr(e.r),e.g=mr(e.g),e.b=mr(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===et&&(e.r=yi(e.r),e.g=yi(e.g),e.b=yi(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Ar?Ra:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function mr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function yi(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Zo=[.64,.33,.3,.6,.15,.06],$o=[.2126,.7152,.0722],Qo=[.3127,.329],el=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[gi]:{primaries:Zo,whitePoint:Qo,transfer:Ra,toXYZ:el,fromXYZ:tl,luminanceCoefficients:$o,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:Zo,whitePoint:Qo,transfer:et,toXYZ:el,fromXYZ:tl,luminanceCoefficients:$o,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}});var Mi,tu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Pa("canvas")),Mi.width=e.width,Mi.height=e.height;let r=Mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pa("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let n=0;n<a.length;n++)a[n]=mr(a[n]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(mr(t[r]/255)*255):t[r]=mr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ru=0,rl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let n=0,s=i.length;n<s;n++)i[n].isDataTexture?a.push(ms(i[n].image)):a.push(ms(i[n]))}else a=ms(i);r.url=a}return t||(e.images[this.uuid]=r),r}};function ms(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?tu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,Ot=class fn extends vi{constructor(t=fn.DEFAULT_IMAGE,r=fn.DEFAULT_MAPPING,i=qr,a=qr,n=Gt,s=dr,o=Wt,l=pr,h=fn.DEFAULT_ANISOTROPY,c=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=xi(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case qr:t.x=t.x<0?0:1;break;case Rn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case qr:t.y=t.y<0?0:1;break;case Rn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=Lo,Ot.DEFAULT_ANISOTROPY=1;var dt=class Wh{constructor(t=0,r=0,i=0,a=1){Wh.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,a){return this.x=t,this.y=r,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*r+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*r+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*r+s[7]*i+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],p=s[2],g=s[6],_=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let f=(o+1)/2,y=(u+1)/2,x=(_+1)/2,b=(l+c)/4,F=(h+p)/4,A=(d+g)/4;return f>y&&f>x?f<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(f),a=b/i,n=F/i):y>x?y<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),i=b/a,n=A/a):x<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),i=F/n,a=A/n),this.set(i,a,n,r),this}let m=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+_-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},au=class extends vi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let a=new Ot(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];let n=r.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rr=class extends au{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},il=class extends Ot{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nu=class extends Ot{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},er=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,n,s){let o=r[i+0],l=r[i+1],h=r[i+2],c=r[i+3],u=a[n+0],d=a[n+1],p=a[n+2],g=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let _=1-s,m=o*u+l*d+h*p+c*g,f=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let b=Math.sqrt(y),F=Math.atan2(b,m*f);_=Math.sin(_*F)/b,s=Math.sin(s*F)/b}let x=s*f;if(o=o*_+u*x,l=l*_+d*x,h=h*_+p*x,c=c*_+g*x,_===1-s){let b=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=b,l*=b,h*=b,c*=b}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,a,n){let s=r[i],o=r[i+1],l=r[i+2],h=r[i+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-s*d,e[t+2]=l*p+h*d+s*u-o*c,e[t+3]=h*p-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(r/2),h=s(i/2),c=s(a/2),u=o(r/2),d=o(i/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=r+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-i)*d}else if(r>s&&r>c){let d=2*Math.sqrt(1+r-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(i+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-r-c);this._w=(a-l)/d,this._x=(i+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-r-s);this._w=(n-i)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=r*h+n*s+i*l-a*o,this._y=i*h+n*o+a*s-r*l,this._z=a*h+n*l+r*o-i*s,this._w=n*h-r*s-i*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,a=this._z,n=this._w,s=n*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=r,this._y=i,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=r*c+this._x*u,this._y=i*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class Xh{constructor(t=0,r=0,i=0){Xh.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(al.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6]*a,this.y=n[1]*r+n[4]*i+n[7]*a,this.z=n[2]*r+n[5]*i+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=t.elements,s=1/(n[3]*r+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*r+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*r+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*i),c=2*(o*r-n*a),u=2*(n*i-s*r);return this.x=r+l*h+s*u-o*c,this.y=i+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[4]*i+n[8]*a,this.y=n[1]*r+n[5]*i+n[9]*a,this.z=n[2]*r+n[6]*i+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,a=t.y,n=t.z,s=r.x,o=r.y,l=r.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gs.copy(this).projectOnVector(t),this.sub(gs)}reflect(t){return this.sub(gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return r*r+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let a=Math.sin(r)*t;return this.x=a*Math.sin(i),this.y=Math.cos(r)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=a,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gs=new I,al=new er,Jr=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Xt):Xt.fromBufferAttribute(a,n),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),La.copy(r.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let i=e.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Ua.subVectors(this.max,Ki),Si.subVectors(e.a,Ki),Ei.subVectors(e.b,Ki),bi.subVectors(e.c,Ki),Cr.subVectors(Ei,Si),Pr.subVectors(bi,Ei),Kr.subVectors(Si,bi);let t=[0,-Cr.z,Cr.y,0,-Pr.z,Pr.y,0,-Kr.z,Kr.y,Cr.z,0,-Cr.x,Pr.z,0,-Pr.x,Kr.z,0,-Kr.x,-Cr.y,Cr.x,0,-Pr.y,Pr.x,0,-Kr.y,Kr.x,0];return!_s(t,Si,Ei,bi,Ua)||(t=[1,0,0,0,1,0,0,0,1],!_s(t,Si,Ei,bi,Ua))?!1:(Ia.crossVectors(Cr,Pr),t=[Ia.x,Ia.y,Ia.z],_s(t,Si,Ei,bi,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gr=[new I,new I,new I,new I,new I,new I,new I,new I],Xt=new I,La=new Jr,Si=new I,Ei=new I,bi=new I,Cr=new I,Pr=new I,Kr=new I,Ki=new I,Ua=new I,Ia=new I,Zr=new I;function _s(e,t,r,i,a){for(let n=0,s=e.length-3;n<=s;n+=3){Zr.fromArray(e,n);let o=a.x*Math.abs(Zr.x)+a.y*Math.abs(Zr.y)+a.z*Math.abs(Zr.z),l=t.dot(Zr),h=r.dot(Zr),c=i.dot(Zr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var su=new Jr,Zi=new I,vs=new I,$i=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):su.setFromPoints(e).getCenter(r);let i=0;for(let a=0,n=e.length;a<n;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);let t=Zi.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Zi,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(vs)),this.expandByPoint(Zi.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_r=new I,xs=new I,Na=new I,Lr=new I,ys=new I,Da=new I,Ms=new I,nl=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){xs.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(xs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Na),s=Lr.dot(this.direction),o=-Lr.dot(Na),l=Lr.lengthSq(),h=Math.abs(1-n*n),c,u,d,p;if(h>0)if(c=n*o-s,u=n*s-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(xs).addScaledVector(Na,u),d}intersectSphere(e,t){_r.subVectors(e.center,this.origin);let r=_r.dot(this.direction),i=_r.dot(_r)-r*r,a=e.radius*e.radius;if(i>a)return null;let n=Math.sqrt(a-i),s=r-n,o=r+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(r=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(r=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),r>n||a>i||((a>r||isNaN(r))&&(r=a),(n<i||isNaN(i))&&(i=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,r,i,a){ys.subVectors(t,e),Da.subVectors(r,e),Ms.crossVectors(ys,Da);let n=this.direction.dot(Ms),s;if(n>0){if(i)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Lr.subVectors(this.origin,e);let o=s*this.direction.dot(Da.crossVectors(Lr,Da));if(o<0)return null;let l=s*this.direction.dot(ys.cross(Lr));if(l<0||o+l>n)return null;let h=-s*Lr.dot(Ms);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class _o{constructor(t,r,i,a,n,s,o,l,h,c,u,d,p,g,_,m){_o.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h,c,u,d,p,g,_,m)}set(t,r,i,a,n,s,o,l,h,c,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=r,f[8]=i,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,a=1/Ti.setFromMatrixColumn(t,0).length(),n=1/Ti.setFromMatrixColumn(t,1).length(),s=1/Ti.setFromMatrixColumn(t,2).length();return r[0]=i[0]*a,r[1]=i[1]*a,r[2]=i[2]*a,r[3]=0,r[4]=i[4]*n,r[5]=i[5]*n,r[6]=i[6]*n,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,a=t.y,n=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,p=s*u,g=o*c,_=o*u;r[0]=l*c,r[4]=-l*u,r[8]=h,r[1]=p+g*h,r[5]=d-_*h,r[9]=-o*l,r[2]=_-d*h,r[6]=g+p*h,r[10]=s*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,_=h*u;r[0]=d+_*o,r[4]=g*o-p,r[8]=s*h,r[1]=s*u,r[5]=s*c,r[9]=-o,r[2]=p*o-g,r[6]=_+d*o,r[10]=s*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,_=h*u;r[0]=d-_*o,r[4]=-s*u,r[8]=g+p*o,r[1]=p+g*o,r[5]=s*c,r[9]=_-d*o,r[2]=-s*h,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let d=s*c,p=s*u,g=o*c,_=o*u;r[0]=l*c,r[4]=g*h-p,r[8]=d*h+_,r[1]=l*u,r[5]=_*h+d,r[9]=p*h-g,r[2]=-h,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let d=s*l,p=s*h,g=o*l,_=o*h;r[0]=l*c,r[4]=_-d*u,r[8]=g*u+p,r[1]=u,r[5]=s*c,r[9]=-o*c,r[2]=-h*c,r[6]=p*u+g,r[10]=d-_*u}else if(t.order==="XZY"){let d=s*l,p=s*h,g=o*l,_=o*h;r[0]=l*c,r[4]=-u,r[8]=h*c,r[1]=d*u+_,r[5]=s*c,r[9]=p*u-g,r[2]=g*u-p,r[6]=o*c,r[10]=_*u+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ou,t,lu)}lookAt(t,r,i){let a=this.elements;return Pt.subVectors(t,r),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Ur.crossVectors(i,Pt),Ur.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Ur.crossVectors(i,Pt)),Ur.normalize(),Oa.crossVectors(Pt,Ur),a[0]=Ur.x,a[4]=Oa.x,a[8]=Pt.x,a[1]=Ur.y,a[5]=Oa.y,a[9]=Pt.y,a[2]=Ur.z,a[6]=Oa.z,a[10]=Pt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],y=i[3],x=i[7],b=i[11],F=i[15],A=a[0],R=a[4],N=a[8],M=a[12],E=a[1],C=a[5],P=a[9],B=a[13],W=a[2],V=a[6],H=a[10],de=a[14],J=a[3],fe=a[7],Me=a[11],De=a[15];return n[0]=s*A+o*E+l*W+h*J,n[4]=s*R+o*C+l*V+h*fe,n[8]=s*N+o*P+l*H+h*Me,n[12]=s*M+o*B+l*de+h*De,n[1]=c*A+u*E+d*W+p*J,n[5]=c*R+u*C+d*V+p*fe,n[9]=c*N+u*P+d*H+p*Me,n[13]=c*M+u*B+d*de+p*De,n[2]=g*A+_*E+m*W+f*J,n[6]=g*R+_*C+m*V+f*fe,n[10]=g*N+_*P+m*H+f*Me,n[14]=g*M+_*B+m*de+f*De,n[3]=y*A+x*E+b*W+F*J,n[7]=y*R+x*C+b*V+F*fe,n[11]=y*N+x*P+b*H+F*Me,n[15]=y*M+x*B+b*de+F*De,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+n*l*u-a*h*u-n*o*d+i*h*d+a*o*p-i*l*p)+_*(+r*l*p-r*h*d+n*s*d-a*s*p+a*h*c-n*l*c)+m*(+r*h*u-r*o*p-n*s*u+i*s*p+n*o*c-i*h*c)+f*(-a*o*c-r*l*u+r*o*d+a*s*u-i*s*d+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=r,a[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*h-_*d*h+_*l*p-o*m*p-u*l*f+o*d*f,x=g*d*h-c*m*h-g*l*p+s*m*p+c*l*f-s*d*f,b=c*_*h-g*u*h+g*o*p-s*_*p-c*o*f+s*u*f,F=g*u*l-c*_*l-g*o*d+s*_*d+c*o*m-s*u*m,A=r*y+i*x+a*b+n*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=y*R,t[1]=(_*d*n-u*m*n-_*a*p+i*m*p+u*a*f-i*d*f)*R,t[2]=(o*m*n-_*l*n+_*a*h-i*m*h-o*a*f+i*l*f)*R,t[3]=(u*l*n-o*d*n-u*a*h+i*d*h+o*a*p-i*l*p)*R,t[4]=x*R,t[5]=(c*m*n-g*d*n+g*a*p-r*m*p-c*a*f+r*d*f)*R,t[6]=(g*l*n-s*m*n-g*a*h+r*m*h+s*a*f-r*l*f)*R,t[7]=(s*d*n-c*l*n+c*a*h-r*d*h-s*a*p+r*l*p)*R,t[8]=b*R,t[9]=(g*u*n-c*_*n-g*i*p+r*_*p+c*i*f-r*u*f)*R,t[10]=(s*_*n-g*o*n+g*i*h-r*_*h-s*i*f+r*o*f)*R,t[11]=(c*o*n-s*u*n-c*i*h+r*u*h+s*i*p-r*o*p)*R,t[12]=F*R,t[13]=(c*_*a-g*u*a+g*i*d-r*_*d-c*i*m+r*u*m)*R,t[14]=(g*o*a-s*_*a-g*i*l+r*_*l+s*i*m-r*o*m)*R,t[15]=(s*u*a-c*o*a+c*i*l-r*u*l-s*i*d+r*o*d)*R,this}scale(t){let r=this.elements,i=t.x,a=t.y,n=t.z;return r[0]*=i,r[4]*=a,r[8]*=n,r[1]*=i,r[5]*=a,r[9]*=n,r[2]*=i,r[6]*=a,r[10]*=n,r[3]*=i,r[7]*=a,r[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,a))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),a=Math.sin(r),n=1-i,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+i,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+i,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,a,n,s){return this.set(1,i,n,0,t,1,s,0,r,a,1,0,0,0,0,1),this}compose(t,r,i){let a=this.elements,n=r._x,s=r._y,o=r._z,l=r._w,h=n+n,c=s+s,u=o+o,d=n*h,p=n*c,g=n*u,_=s*c,m=s*u,f=o*u,y=l*h,x=l*c,b=l*u,F=i.x,A=i.y,R=i.z;return a[0]=(1-(_+f))*F,a[1]=(p+b)*F,a[2]=(g-x)*F,a[3]=0,a[4]=(p-b)*A,a[5]=(1-(d+f))*A,a[6]=(m+y)*A,a[7]=0,a[8]=(g+x)*R,a[9]=(m-y)*R,a[10]=(1-(d+_))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,r,i){let a=this.elements,n=Ti.set(a[0],a[1],a[2]).length(),s=Ti.set(a[4],a[5],a[6]).length(),o=Ti.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],jt.copy(this);let l=1/n,h=1/s,c=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=c,jt.elements[9]*=c,jt.elements[10]*=c,r.setFromRotationMatrix(jt),i.x=n,i.y=s,i.z=o,this}makePerspective(t,r,i,a,n,s,o=fr){let l=this.elements,h=2*n/(r-t),c=2*n/(i-a),u=(r+t)/(r-t),d=(i+a)/(i-a),p,g;if(o===fr)p=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===Ca)p=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,i,a,n,s,o=fr){let l=this.elements,h=1/(r-t),c=1/(i-a),u=1/(s-n),d=(r+t)*h,p=(i+a)*c,g,_;if(o===fr)g=(s+n)*u,_=-2*u;else if(o===Ca)g=n*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<16;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},Ti=new I,jt=new it,ou=new I(0,0,0),lu=new I(1,1,1),Ur=new I,Oa=new I,Pt=new I,sl=new it,ol=new er,Ir=class jh{constructor(t=0,r=0,i=0,a=jh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,a=this._order){return this._x=t,this._y=r,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(r){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ir.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hu=0,ll=new I,wi=new er,vr=new it,Fa=new I,Qi=new I,cu=new I,uu=new er,hl=new I(1,0,0),cl=new I(0,1,0),ul=new I(0,0,1),dl={type:"added"},du={type:"removed"},Ai={type:"childadded",child:null},Es={type:"childremoved",child:null},Ft=class mn extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();let t=new I,r=new Ir,i=new er,a=new I(1,1,1);function n(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new it},normalMatrix:{value:new Ye}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return wi.setFromAxisAngle(t,r),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,r){return wi.setFromAxisAngle(t,r),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(cl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,r){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(cl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?Fa.copy(t):Fa.set(t,r,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Qi,Fa,this.up):vr.lookAt(Fa,Qi,this.up),this.quaternion.setFromRotationMatrix(vr),a&&(vr.extractRotation(a.matrixWorld),wi.setFromRotationMatrix(vr),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(du),Es.child=t,this.dispatchEvent(Es),Es.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vr.multiply(t.parent.matrixWorld)),t.applyMatrix4(vr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,a=this.children.length;i<a;i++){let n=this.children[i].getObjectByProperty(t,r);if(n!==void 0)return n}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};Ft.DEFAULT_UP=new I(0,1,0),Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=new I,xr=new I,bs=new I,yr=new I,Ri=new I,Ci=new I,pl=new I,Ts=new I,ws=new I,As=new I,Rs=new dt,Cs=new dt,Ps=new dt,ea=class Vi{constructor(t=new I,r=new I,i=new I){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,a){a.subVectors(i,r),qt.subVectors(t,r),a.cross(qt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,r,i,a,n){qt.subVectors(a,r),xr.subVectors(i,r),bs.subVectors(t,r);let s=qt.dot(qt),o=qt.dot(xr),l=qt.dot(bs),h=xr.dot(xr),c=xr.dot(bs),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(s*c-o*l)*d;return n.set(1-p-g,g,p)}static containsPoint(t,r,i,a){return this.getBarycoord(t,r,i,a,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(t,r,i,a,n,s,o,l){return this.getBarycoord(t,r,i,a,yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,yr.x),l.addScaledVector(s,yr.y),l.addScaledVector(o,yr.z),l)}static getInterpolatedAttribute(t,r,i,a,n,s){return Rs.setScalar(0),Cs.setScalar(0),Ps.setScalar(0),Rs.fromBufferAttribute(t,r),Cs.fromBufferAttribute(t,i),Ps.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Rs,n.x),s.addScaledVector(Cs,n.y),s.addScaledVector(Ps,n.z),s}static isFrontFacing(t,r,i,a){return qt.subVectors(i,r),xr.subVectors(t,r),qt.cross(xr).dot(a)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,a){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,r,i,a){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qt.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),qt.cross(xr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return Vi.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,a,n){return Vi.getInterpolation(t,this.a,this.b,this.c,r,i,a,n)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,a=this.b,n=this.c,s,o;Ri.subVectors(a,i),Ci.subVectors(n,i),Ts.subVectors(t,i);let l=Ri.dot(Ts),h=Ci.dot(Ts);if(l<=0&&h<=0)return r.copy(i);ws.subVectors(t,a);let c=Ri.dot(ws),u=Ci.dot(ws);if(c>=0&&u<=c)return r.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(Ri,s);As.subVectors(t,n);let p=Ri.dot(As),g=Ci.dot(As);if(g>=0&&p<=g)return r.copy(n);let _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),r.copy(i).addScaledVector(Ci,o);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return pl.subVectors(n,a),o=(u-c)/(u-c+(p-g)),r.copy(a).addScaledVector(pl,o);let f=1/(m+_+d);return s=_*f,o=d*f,r.copy(i).addScaledVector(Ri,s).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Ls(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var Ve=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=Ze.workingColorSpace){if(e=Kc(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+t):r+t-r*t,n=2*r-a;this.r=Ls(n,a,e+1/3),this.g=Ls(n,a,e),this.b=Ls(n,a,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=ct){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let r=fl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Ze.fromWorkingColorSpace(Et.copy(this),e),Math.round(xt(Et.r*255,0,255))*65536+Math.round(xt(Et.g*255,0,255))*256+Math.round(xt(Et.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Et.copy(this),t);let r=Et.r,i=Et.g,a=Et.b,n=Math.max(r,i,a),s=Math.min(r,i,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case r:o=(i-a)/c+(i<a?6:0);break;case i:o=(a-r)/c+2;break;case a:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=ct){Ze.fromWorkingColorSpace(Et.copy(this),e);let t=Et.r,r=Et.g,i=Et.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Ba);let r=ps(Nr.h,Ba.h,t),i=ps(Nr.s,Ba.s,t),a=ps(Nr.l,Ba.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Ve;Ve.NAMES=fl;var pu=0,ta=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=xi(),this.name="",this.blending=li,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_n,this.blendDst=vn,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_n&&(r.blendSrc=this.blendSrc),this.blendDst!==vn&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=i(e.textures),n=i(e.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Dr=class extends ta{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pt=new I,za=new Ee,Bt=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=qo,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Yi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=At(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),r=At(r,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),r=At(r,this.array),i=At(i,this.array),a=At(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}},ml=class extends Bt{constructor(e,t,r){super(new Uint16Array(e),t,r)}},gl=class extends Bt{constructor(e,t,r){super(new Uint32Array(e),t,r)}},tt=class extends Bt{constructor(e,t,r){super(new Float32Array(e),t,r)}},fu=0,zt=new it,Us=new Ft,Pi=new I,Lt=new Jr,ra=new Jr,yt=new I,Ut=class qh extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jo(t)?gl:ml)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new Ye().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zt.makeRotationFromQuaternion(t),this.applyMatrix4(zt),this}rotateX(t){return zt.makeRotationX(t),this.applyMatrix4(zt),this}rotateY(t){return zt.makeRotationY(t),this.applyMatrix4(zt),this}rotateZ(t){return zt.makeRotationZ(t),this.applyMatrix4(zt),this}translate(t,r,i){return zt.makeTranslation(t,r,i),this.applyMatrix4(zt),this}scale(t,r,i){return zt.makeScale(t,r,i),this.applyMatrix4(zt),this}lookAt(t){return Us.lookAt(t),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(i,3))}else{for(let i=0,a=r.count;i<a;i++){let n=t[i];r.setXYZ(i,n.x,n.y,n.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,a=r.length;i<a;i++){let n=r[i];Lt.setFromBufferAttribute(n),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Lt.setFromBufferAttribute(t),r)for(let n=0,s=r.length;n<s;n++){let o=r[n];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Lt.min,ra.min),Lt.expandByPoint(yt),yt.addVectors(Lt.max,ra.max),Lt.expandByPoint(yt)):(Lt.expandByPoint(ra.min),Lt.expandByPoint(ra.max))}Lt.getCenter(i);let a=0;for(let n=0,s=t.count;n<s;n++)yt.fromBufferAttribute(t,n),a=Math.max(a,i.distanceToSquared(yt));if(r)for(let n=0,s=r.length;n<s;n++){let o=r[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)yt.fromBufferAttribute(o,h),l&&(Pi.fromBufferAttribute(t,h),yt.add(Pi)),a=Math.max(a,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,a=r.normal,n=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new I,l[N]=new I;let h=new I,c=new I,u=new I,d=new Ee,p=new Ee,g=new Ee,_=new I,m=new I;function f(N,M,E){h.fromBufferAttribute(i,N),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,E),d.fromBufferAttribute(n,N),p.fromBufferAttribute(n,M),g.fromBufferAttribute(n,E),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(C),o[N].add(_),o[M].add(_),o[E].add(_),l[N].add(m),l[M].add(m),l[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,M=y.length;N<M;++N){let E=y[N],C=E.start,P=E.count;for(let B=C,W=C+P;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new I,b=new I,F=new I,A=new I;function R(N){F.fromBufferAttribute(a,N),A.copy(F);let M=o[N];x.copy(M),x.sub(F.multiplyScalar(F.dot(M))).normalize(),b.crossVectors(A,M);let E=b.dot(l[N])<0?-1:1;s.setXYZW(N,x.x,x.y,x.z,E)}for(let N=0,M=y.length;N<M;++N){let E=y[N],C=E.start,P=E.count;for(let B=C,W=C+P;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let a=new I,n=new I,s=new I,o=new I,l=new I,h=new I,c=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(r,g),n.fromBufferAttribute(r,_),s.fromBufferAttribute(r,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=r.count;d<p;d+=3)a.fromBufferAttribute(r,d+0),n.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)yt.fromBufferAttribute(t,r),yt.normalize(),t.setXYZ(r,yt.x,yt.y,yt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let f=0;f<c;f++)d[g++]=h[p++]}return new Bt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new qh,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,i);r.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,i);l.push(p)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];r.addGroup(h.start,h.count,h.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(r));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(r))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(r));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_l=new it,$r=new nl,ka=new $i,vl=new I,Ha=new I,Va=new I,Ga=new I,Is=new I,Wa=new I,xl=new I,Xa=new I,ft=class extends Ft{constructor(e=new Ut,t=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(a&&s){Wa.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(Is.fromBufferAttribute(c,e),n?Wa.addScaledVector(Is,h):Wa.addScaledVector(Is.sub(t),h))}t.add(Wa)}return t}raycast(e,t){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ka.copy(r.boundingSphere),ka.applyMatrix4(a),$r.copy(e.ray).recast(e.near),!(ka.containsPoint($r.origin)===!1&&($r.intersectSphere(ka,vl)===null||$r.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(_l.copy(a).invert(),$r.copy(e.ray).applyMatrix4(_l),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,r){let i,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let _=u[p],m=n[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(s.count,Math.min(_.start+_.count,d.start+d.count));for(let x=f,b=y;x<b;x+=3){let F=s.getX(x),A=s.getX(x+1),R=s.getX(x+2);i=ja(this,m,e,r,l,h,c,F,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){let f=s.getX(_),y=s.getX(_+1),x=s.getX(_+2);i=ja(this,n,e,r,l,h,c,f,y,x),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let _=u[p],m=n[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let x=f,b=y;x<b;x+=3){let F=x,A=x+1,R=x+2;i=ja(this,m,e,r,l,h,c,F,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){let f=_,y=_+1,x=_+2;i=ja(this,n,e,r,l,h,c,f,y,x),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function mu(e,t,r,i,a,n,s,o){let l;if(t.side===wt?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,t.side===Tr,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(e.matrixWorld);let h=r.ray.origin.distanceTo(Xa);return h<r.near||h>r.far?null:{distance:h,point:Xa.clone(),object:e}}function ja(e,t,r,i,a,n,s,o,l,h){e.getVertexPosition(o,Ha),e.getVertexPosition(l,Va),e.getVertexPosition(h,Ga);let c=mu(e,t,r,i,Ha,Va,Ga,xl);if(c){let u=new I;ea.getBarycoord(xl,Ha,Va,Ga,u),a&&(c.uv=ea.getInterpolatedAttribute(a,o,l,h,u,new Ee)),n&&(c.uv1=ea.getInterpolatedAttribute(n,o,l,h,u,new Ee)),s&&(c.normal=ea.getInterpolatedAttribute(s,o,l,h,u,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new I,materialIndex:0};ea.getNormal(Ha,Va,Ga,d.normal),c.face=d,c.barycoord=u}return c}var Or=class Yh extends Ut{constructor(t=1,r=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,r,t,s,n,0),g("z","y","x",1,-1,i,r,-t,s,n,1),g("x","z","y",1,1,t,i,r,a,s,2),g("x","z","y",1,-1,t,i,-r,a,s,3),g("x","y","z",1,-1,t,r,i,a,n,4),g("x","y","z",-1,-1,t,r,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2));function g(_,m,f,y,x,b,F,A,R,N,M){let E=b/R,C=F/N,P=b/2,B=F/2,W=A/2,V=R+1,H=N+1,de=0,J=0,fe=new I;for(let Me=0;Me<H;Me++){let De=Me*C-B;for(let Ie=0;Ie<V;Ie++){let k=Ie*E-P;fe[_]=k*y,fe[m]=De*x,fe[f]=W,h.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[f]=A>0?1:-1,c.push(fe.x,fe.y,fe.z),u.push(Ie/R),u.push(1-Me/N),de+=1}}for(let Me=0;Me<N;Me++)for(let De=0;De<R;De++){let Ie=d+De+V*Me,k=d+De+V*(Me+1),me=d+(De+1)+V*(Me+1),G=d+(De+1)+V*Me;l.push(Ie,k,G),l.push(k,me,G),J+=6}o.addGroup(p,J,M),p+=J,d+=de}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Li(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let a=e[r][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=a.clone():Array.isArray(a)?t[r][i]=a.slice():t[r][i]=a}}return t}function bt(e){let t={};for(let r=0;r<e.length;r++){let i=Li(e[r]);for(let a in i)t[a]=i[a]}return t}function gu(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function yl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ze.workingColorSpace}var _u={clone:Li,merge:bt},vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tr=class extends ta{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},Ml=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fr=new I,Sl=new Ee,El=new Ee,It=class extends Ml{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,El),t.subVectors(El,Sl)}setViewOffset(e,t,r,i,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(us*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*i/o,t-=n.offsetY*r/l,i*=n.width/o,r*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Ii=1,yu=class extends Ft{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new It(Ui,Ii,e,t);i.layers=this.layers,this.add(i);let a=new It(Ui,Ii,e,t);a.layers=this.layers,this.add(a);let n=new It(Ui,Ii,e,t);n.layers=this.layers,this.add(n);let s=new It(Ui,Ii,e,t);s.layers=this.layers,this.add(s);let o=new It(Ui,Ii,e,t);o.layers=this.layers,this.add(o);let l=new It(Ui,Ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===fr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ca)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,n),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,r.texture.needsPMREMUpdate=!0}},bl=class extends Ot{constructor(e,t,r,i,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,r,i,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mu=class extends Rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new bl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Or(5,5,5),a=new tr({name:"CubemapFromEquirect",uniforms:Li(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wt,blending:wr});a.uniforms.tEquirect.value=t;let n=new ft(i,a),s=t.minFilter;return t.minFilter===dr&&(t.minFilter=Gt),new yu(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,r,i){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,i);e.setRenderTarget(a)}},Ns=new I,Su=new I,Eu=new Ye,Qr=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=Ns.subVectors(r,t).cross(Su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(Ns),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||Eu.getNormalMatrix(e),i=this.coplanarPoint(Ns).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new $i,qa=new I,Ds=class{constructor(e=new Qr,t=new Qr,r=new Qr,i=new Qr,a=new Qr,n=new Qr){this.planes=[e,t,r,i,a,n]}set(e,t,r,i,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=fr){let r=this.planes,i=e.elements,a=i[0],n=i[1],s=i[2],o=i[3],l=i[4],h=i[5],c=i[6],u=i[7],d=i[8],p=i[9],g=i[10],_=i[11],m=i[12],f=i[13],y=i[14],x=i[15];if(r[0].setComponents(o-a,u-l,_-d,x-m).normalize(),r[1].setComponents(o+a,u+l,_+d,x+m).normalize(),r[2].setComponents(o+n,u+h,_+p,x+f).normalize(),r[3].setComponents(o-n,u-h,_-p,x-f).normalize(),r[4].setComponents(o-s,u-c,_-g,x-y).normalize(),t===fr)r[5].setComponents(o+s,u+c,_+g,x+y).normalize();else if(t===Ca)r[5].setComponents(s,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(qa.x=i.normal.x>0?e.max.x:e.min.x,qa.y=i.normal.y>0?e.max.y:e.min.y,qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tl(){let e=null,t=!1,r=null,i=null;function a(n,s){r(n,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){r=n},setContext:function(n){e=n}}}function bu(e){let t=new WeakMap;function r(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];e.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,r(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var kt=class Jh extends Ut{constructor(t=1,r=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:a};let n=t/2,s=r/2,o=Math.floor(i),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=r/l,p=[],g=[],_=[],m=[];for(let f=0;f<c;f++){let y=f*d-s;for(let x=0;x<h;x++){let b=x*u-n;g.push(b,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let x=y+h*f,b=y+h*(f+1),F=y+1+h*(f+1),A=y+1+h*f;p.push(x,b,A),p.push(b,F,A)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jh(t.width,t.height,t.widthSegments,t.heightSegments)}},Tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
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
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
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
#endif`,zu=`#ifdef USE_BUMPMAP
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yu=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#endif`,Ed=`struct PhysicalMaterial {
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
}`,bd=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
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
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
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
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Up=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define MATCAP
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,jp=`#define PHONG
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
}`,qp=`#define PHONG
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
}`,Yp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,Kp=`#define TOON
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
}`,Zp=`#define TOON
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
}`,$p=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,ef=`#include <common>
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
}`,tf=`uniform vec3 color;
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
}`,rf=`uniform float rotation;
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
}`,af=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Tu,alphahash_pars_fragment:wu,alphamap_fragment:Au,alphamap_pars_fragment:Ru,alphatest_fragment:Cu,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Uu,batching_pars_vertex:Iu,batching_vertex:Nu,begin_vertex:Du,beginnormal_vertex:Ou,bsdfs:Fu,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Gu,color_fragment:Wu,color_pars_fragment:Xu,color_pars_vertex:ju,color_vertex:qu,common:Yu,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Ku,displacementmap_pars_vertex:Zu,displacementmap_vertex:$u,emissivemap_fragment:Qu,emissivemap_pars_fragment:ed,colorspace_fragment:td,colorspace_pars_fragment:rd,envmap_fragment:id,envmap_common_pars_fragment:ad,envmap_pars_fragment:nd,envmap_pars_vertex:sd,envmap_physical_pars_fragment:_d,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:hd,fog_fragment:cd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:pd,lights_lambert_fragment:fd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:xd,lights_phong_fragment:yd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:Ed,lights_fragment_begin:bd,lights_fragment_maps:Td,lights_fragment_end:wd,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Ud,map_particle_fragment:Id,map_particle_pars_fragment:Nd,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Od,morphinstance_vertex:Fd,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:kd,morphtarget_vertex:Hd,normal_fragment_begin:Vd,normal_fragment_maps:Gd,normal_pars_fragment:Wd,normal_pars_vertex:Xd,normal_vertex:jd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:Zd,opaque_fragment:$d,packing:Qd,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:rp,dithering_pars_fragment:ip,roughnessmap_fragment:ap,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:hp,skinbase_vertex:cp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:pp,specularmap_fragment:fp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:yp,uv_pars_vertex:Mp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:bp,background_frag:Tp,backgroundCube_vert:wp,backgroundCube_frag:Ap,cube_vert:Rp,cube_frag:Cp,depth_vert:Pp,depth_frag:Lp,distanceRGBA_vert:Up,distanceRGBA_frag:Ip,equirect_vert:Np,equirect_frag:Dp,linedashed_vert:Op,linedashed_frag:Fp,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:kp,meshlambert_frag:Hp,meshmatcap_vert:Vp,meshmatcap_frag:Gp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:jp,meshphong_frag:qp,meshphysical_vert:Yp,meshphysical_frag:Jp,meshtoon_vert:Kp,meshtoon_frag:Zp,points_vert:$p,points_frag:Qp,shadow_vert:ef,shadow_frag:tf,sprite_vert:rf,sprite_frag:af},Re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},rr={basic:{uniforms:bt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:bt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:bt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:bt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:bt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:bt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:bt([Re.points,Re.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:bt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:bt([Re.common,Re.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:bt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:bt([Re.sprite,Re.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:bt([Re.common,Re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:bt([Re.lights,Re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};rr.physical={uniforms:bt([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ya={r:0,b:0,g:0},ti=new Ir,nf=new it;function sf(e,t,r,i,a,n,s){let o=new Ve(0),l=n===!0?0:1,h,c,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?r:t).get(x)),x}function _(y){let x=!1,b=g(y);b===null?f(o,l):b&&b.isColor&&(f(b,1),x=!0);let F=e.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,s):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===xa)?(c===void 0&&(c=new ft(new Or(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Li(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),ti.copy(x.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nf.makeRotationFromEuler(ti)),c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==et,(u!==b||d!==b.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new ft(new kt(2,2),new tr({name:"BackgroundMaterial",uniforms:Li(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(b.colorSpace)!==et,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function f(y,x){y.getRGB(Ya,yl(e)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m}}function of(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null),n=a,s=!1;function o(E,C,P,B,W){let V=!1,H=u(B,P,C);n!==H&&(n=H,h(n.object)),V=p(E,B,P,W),V&&g(E,B,P,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,b(E,C,P,B),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function h(E){return e.bindVertexArray(E)}function c(E){return e.deleteVertexArray(E)}function u(E,C,P){let B=P.wireframe===!0,W=i[E.id];W===void 0&&(W={},i[E.id]=W);let V=W[C.id];V===void 0&&(V={},W[C.id]=V);let H=V[B];return H===void 0&&(H=d(l()),V[B]=H),H}function d(E){let C=[],P=[],B=[];for(let W=0;W<r;W++)C[W]=0,P[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,C,P,B){let W=n.attributes,V=C.attributes,H=0,de=P.getAttributes();for(let J in de)if(de[J].location>=0){let fe=W[J],Me=V[J];if(Me===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;H++}return n.attributesNum!==H||n.index!==B}function g(E,C,P,B){let W={},V=C.attributes,H=0,de=P.getAttributes();for(let J in de)if(de[J].location>=0){let fe=V[J];fe===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));let Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),W[J]=Me,H++}n.attributes=W,n.attributesNum=H,n.index=B}function _(){let E=n.newAttributes;for(let C=0,P=E.length;C<P;C++)E[C]=0}function m(E){f(E,0)}function f(E,C){let P=n.newAttributes,B=n.enabledAttributes,W=n.attributeDivisors;P[E]=1,B[E]===0&&(e.enableVertexAttribArray(E),B[E]=1),W[E]!==C&&(e.vertexAttribDivisor(E,C),W[E]=C)}function y(){let E=n.newAttributes,C=n.enabledAttributes;for(let P=0,B=C.length;P<B;P++)C[P]!==E[P]&&(e.disableVertexAttribArray(P),C[P]=0)}function x(E,C,P,B,W,V,H){H===!0?e.vertexAttribIPointer(E,C,P,W,V):e.vertexAttribPointer(E,C,P,B,W,V)}function b(E,C,P,B){_();let W=B.attributes,V=P.getAttributes(),H=C.defaultAttributeValues;for(let de in V){let J=V[de];if(J.location>=0){let fe=W[de];if(fe===void 0&&(de==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),de==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){let Me=fe.normalized,De=fe.itemSize,Ie=t.get(fe);if(Ie===void 0)continue;let k=Ie.buffer,me=Ie.type,G=Ie.bytesPerElement,ge=me===e.INT||me===e.UNSIGNED_INT||fe.gpuType===Pn;if(fe.isInterleavedBufferAttribute){let te=fe.data,ee=te.stride,_e=fe.offset;if(te.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)f(J.location+Le,te.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Le=0;Le<J.locationSize;Le++)m(J.location+Le);e.bindBuffer(e.ARRAY_BUFFER,k);for(let Le=0;Le<J.locationSize;Le++)x(J.location+Le,De/J.locationSize,me,Me,ee*G,(_e+De/J.locationSize*Le)*G,ge)}else{if(fe.isInstancedBufferAttribute){for(let te=0;te<J.locationSize;te++)f(J.location+te,fe.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let te=0;te<J.locationSize;te++)m(J.location+te);e.bindBuffer(e.ARRAY_BUFFER,k);for(let te=0;te<J.locationSize;te++)x(J.location+te,De/J.locationSize,me,Me,De*G,De/J.locationSize*te*G,ge)}}else if(H!==void 0){let Me=H[de];if(Me!==void 0)switch(Me.length){case 2:e.vertexAttrib2fv(J.location,Me);break;case 3:e.vertexAttrib3fv(J.location,Me);break;case 4:e.vertexAttrib4fv(J.location,Me);break;default:e.vertexAttrib1fv(J.location,Me)}}}}y()}function F(){N();for(let E in i){let C=i[E];for(let P in C){let B=C[P];for(let W in B)c(B[W].object),delete B[W];delete C[P]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;let C=i[E.id];for(let P in C){let B=C[P];for(let W in B)c(B[W].object),delete B[W];delete C[P]}delete i[E.id]}function R(E){for(let C in i){let P=i[C];if(P[E.id]===void 0)continue;let B=P[E.id];for(let W in B)c(B[W].object),delete B[W];delete P[E.id]}}function N(){M(),s=!0,n!==a&&(n=a,h(n.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function lf(e,t,r){let i;function a(h){i=h}function n(h,c){e.drawArrays(i,h,c),r.update(c,i,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(i,h,c,u),r.update(c,i,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];r.update(d,i,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)s(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_]*d[_];r.update(g,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hf(e,t,r,i){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==Wt&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let N=R===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==pr&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qt&&!N)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=r.precision!==void 0?r.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:F,maxSamples:A}}function cf(e){let t=this,r=null,i=0,a=!1,n=!1,s=new Qr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||a;return a=d,i=u.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){r=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!a||g===null||g.length===0||n&&!m)n?c(null):h();else{let y=n?0:i,x=y*4,b=f.clippingState||null;l.value=b,b=c(g,d,x,p);for(let F=0;F!==x;++F)b[F]=r[F];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,b=p;x!==_;++x,b+=4)s.copy(u[x]).applyMatrix4(y,o),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function uf(e){let t=new WeakMap;function r(s,o){return o===wn?s.mapping=ci:o===An&&(s.mapping=ui),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===wn||o===An)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Mu(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),r(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:i,dispose:n}}var Os=class extends Ml{constructor(e=-1,t=1,r=1,i=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-e,n=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ni=4,wl=[.125,.215,.35,.446,.526,.582],ri=20,Fs=new Os,Al=new Ve,Bs=null,zs=0,ks=0,Hs=!1,ii=(1+Math.sqrt(5))/2,Di=1/ii,Rl=[new I(-ii,Di,0),new I(ii,Di,0),new I(-Di,0,ii),new I(Di,0,ii),new I(0,ii,-Di),new I(0,ii,Di),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Bs=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bs,zs,ks),this._renderer.xr.enabled=Hs,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bs=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:di,format:Wt,colorSpace:gi,depthBuffer:!1},i=Cl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(e,t,r);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(a)),this._blurMaterial=pf(a,e,t)}return i}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,r,i){let a=new It(90,1,t,r),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(Al),o.toneMapping=$t,o.autoClear=!1;let c=new Dr({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),u=new ft(new Or,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(Al),d=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,n[g],0),a.lookAt(s[g],0,0)):_===1?(a.up.set(0,0,n[g]),a.lookAt(0,s[g],0)):(a.up.set(0,n[g],0),a.lookAt(0,0,s[g]));let m=this._cubeSize;Ja(i,_*m,g>2?m:0,m,m),o.setRenderTarget(i),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===ci||e.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());let a=i?this._cubemapMaterial:this._equirectMaterial,n=new ft(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Ja(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(n,Fs)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let a=1;a<i;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Rl[(i-a-1)%Rl.length];this._blur(e,a-1,a,n,s)}t.autoClear=r}_blur(e,t,r,i,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,i,"latitudinal",a),this._halfBlur(n,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new ft(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[r]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*ri-1),g=a/p,_=isFinite(a)?1+Math.floor(h*g):ri;_>ri&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ri}`);let m=[],f=0;for(let A=0;A<ri;++A){let R=A/g,N=Math.exp(-R*R/2);m.push(N),A===0?f+=N:A<_&&(f+=2*N)}for(let A=0;A<m.length;A++)m[A]=m[A]/f;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-r;let x=this._sizeLods[i],b=3*x*(i>y-Ni?i-y+Ni:0),F=4*(this._cubeSize-x);Ja(t,b,F,3*x,2*x),o.setRenderTarget(t),o.render(c,Fs)}};function df(e){let t=[],r=[],i=[],a=e,n=e-Ni+1+wl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);r.push(o);let l=1/o;s>e-Ni?l=wl[s-e+Ni-1]:s===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,N=A>2?0:-1,M=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];y.set(M,_*g*A),x.set(d,m*g*A);let E=[A,A,A,A,A,A];b.set(E,f*g*A)}let F=new Ut;F.setAttribute("position",new Bt(y,_)),F.setAttribute("uv",new Bt(x,m)),F.setAttribute("faceIndex",new Bt(b,f)),t.push(F),a>Ni&&a--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function Cl(e,t,r){let i=new Rr(e,t,r);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(e,t,r,i,a){e.viewport.set(t,r,i,a),e.scissor.set(t,r,i,a)}function pf(e,t,r){let i=new Float32Array(ri),a=new I(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Pl(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Ll(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Gs(){return`

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
	`}function ff(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===wn||l===An,c=l===ci||l===ui;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return r===null&&(r=new Vs(e)),u=h?r.fromEquirectangular(o,u):r.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(r===null&&(r=new Vs(e)),u=h?r.fromEquirectangular(o):r.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function mf(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let a=r(i);return a===null&&Ji("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function gf(e,t,r,i){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",s),delete a[d.id];let p=n.get(d);p&&(t.remove(p),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,r.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let x=0,b=y.length;x<b;x+=3){let F=y[x+0],A=y[x+1],R=y[x+2];d.push(F,A,A,R,R,F)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let F=x+0,A=x+1,R=x+2;d.push(F,A,A,R,R,F)}}else return;let m=new(Jo(d)?gl:ml)(d,1);m.version=_;let f=n.get(u);f&&t.remove(f),n.set(u,m)}function c(u){let d=n.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function _f(e,t,r){let i;function a(d){i=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,p){e.drawElements(i,p,n,d*s),r.update(p,i,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(i,p,n,d*s,g),r.update(p,i,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,n,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];r.update(_,i,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/s,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,n,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];r.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function vf(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(n/3);break;case e.LINES:r.lines+=o*(n/2);break;case e.LINE_STRIP:r.lines+=o*(n-1);break;case e.LINE_LOOP:r.lines+=o*n;break;case e.POINTS:r.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:a,update:i}}function xf(e,t,r){let i=new WeakMap,a=new dt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(o);if(d===void 0||d.count!==u){let p=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let F=o.attributes.position.count*b,A=1;F>t.maxTextureSize&&(A=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);let R=new Float32Array(F*A*4*u),N=new il(R,F,A,u);N.type=Qt,N.needsUpdate=!0;let M=b*4;for(let E=0;E<u;E++){let C=f[E],P=y[E],B=x[E],W=F*A*4*E;for(let V=0;V<C.count;V++){let H=V*M;g===!0&&(a.fromBufferAttribute(C,V),R[W+H+0]=a.x,R[W+H+1]=a.y,R[W+H+2]=a.z,R[W+H+3]=0),_===!0&&(a.fromBufferAttribute(P,V),R[W+H+4]=a.x,R[W+H+5]=a.y,R[W+H+6]=a.z,R[W+H+7]=0),m===!0&&(a.fromBufferAttribute(B,V),R[W+H+8]=a.x,R[W+H+9]=a.y,R[W+H+10]=a.z,R[W+H+11]=B.itemSize===4?a.w:1)}}d={count:u,texture:N,size:new Ee(F,A)},i.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function yf(e,t,r,i){let a=new WeakMap;function n(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),r.remove(h.instanceMatrix),h.instanceColor!==null&&r.remove(h.instanceColor)}return{update:n,dispose:s}}var Ul=class extends Ot{constructor(e,t,r,i,a,n,s,o,l,h=fi){if(h!==fi&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===fi&&(r=Yr),r===void 0&&h===mi&&(r=pi),super(null,i,a,n,s,o,h,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ct,this.minFilter=o!==void 0?o:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Il=new Ot,Nl=new Ul(1,1),Dl=new il,Ol=new nu,Fl=new bl,Bl=[],zl=[],kl=new Float32Array(16),Hl=new Float32Array(9),Vl=new Float32Array(4);function Oi(e,t,r){let i=e[0];if(i<=0||i>0)return e;let a=t*r,n=Bl[a];if(n===void 0&&(n=new Float32Array(a),Bl[a]=n),t!==0){i.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(n,o)}return n}function gt(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function _t(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function Ka(e,t){let r=zl[t];r===void 0&&(r=new Int32Array(t),zl[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function Mf(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function Sf(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(gt(r,t))return;e.uniform2fv(this.addr,t),_t(r,t)}}function Ef(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(gt(r,t))return;e.uniform3fv(this.addr,t),_t(r,t)}}function bf(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(gt(r,t))return;e.uniform4fv(this.addr,t),_t(r,t)}}function Tf(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(gt(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),_t(r,t)}else{if(gt(r,i))return;Vl.set(i),e.uniformMatrix2fv(this.addr,!1,Vl),_t(r,i)}}function wf(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(gt(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),_t(r,t)}else{if(gt(r,i))return;Hl.set(i),e.uniformMatrix3fv(this.addr,!1,Hl),_t(r,i)}}function Af(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(gt(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),_t(r,t)}else{if(gt(r,i))return;kl.set(i),e.uniformMatrix4fv(this.addr,!1,kl),_t(r,i)}}function Rf(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function Cf(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(gt(r,t))return;e.uniform2iv(this.addr,t),_t(r,t)}}function Pf(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(gt(r,t))return;e.uniform3iv(this.addr,t),_t(r,t)}}function Lf(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(gt(r,t))return;e.uniform4iv(this.addr,t),_t(r,t)}}function Uf(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function If(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(gt(r,t))return;e.uniform2uiv(this.addr,t),_t(r,t)}}function Nf(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(gt(r,t))return;e.uniform3uiv(this.addr,t),_t(r,t)}}function Df(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(gt(r,t))return;e.uniform4uiv(this.addr,t),_t(r,t)}}function Of(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Nl.compareFunction=jo,n=Nl):n=Il,r.setTexture2D(t||n,a)}function Ff(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(t||Ol,a)}function Bf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(t||Fl,a)}function zf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(t||Dl,a)}function kf(e){switch(e){case 5126:return Mf;case 35664:return Sf;case 35665:return Ef;case 35666:return bf;case 35674:return Tf;case 35675:return wf;case 35676:return Af;case 5124:case 35670:return Rf;case 35667:case 35671:return Cf;case 35668:case 35672:return Pf;case 35669:case 35673:return Lf;case 5125:return Uf;case 36294:return If;case 36295:return Nf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return zf}}function Hf(e,t){e.uniform1fv(this.addr,t)}function Vf(e,t){let r=Oi(t,this.size,2);e.uniform2fv(this.addr,r)}function Gf(e,t){let r=Oi(t,this.size,3);e.uniform3fv(this.addr,r)}function Wf(e,t){let r=Oi(t,this.size,4);e.uniform4fv(this.addr,r)}function Xf(e,t){let r=Oi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function jf(e,t){let r=Oi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function qf(e,t){let r=Oi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function Yf(e,t){e.uniform1iv(this.addr,t)}function Jf(e,t){e.uniform2iv(this.addr,t)}function Kf(e,t){e.uniform3iv(this.addr,t)}function Zf(e,t){e.uniform4iv(this.addr,t)}function $f(e,t){e.uniform1uiv(this.addr,t)}function Qf(e,t){e.uniform2uiv(this.addr,t)}function em(e,t){e.uniform3uiv(this.addr,t)}function tm(e,t){e.uniform4uiv(this.addr,t)}function rm(e,t,r){let i=this.cache,a=t.length,n=Ka(r,a);gt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTexture2D(t[s]||Il,n[s])}function im(e,t,r){let i=this.cache,a=t.length,n=Ka(r,a);gt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTexture3D(t[s]||Ol,n[s])}function am(e,t,r){let i=this.cache,a=t.length,n=Ka(r,a);gt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTextureCube(t[s]||Fl,n[s])}function nm(e,t,r){let i=this.cache,a=t.length,n=Ka(r,a);gt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTexture2DArray(t[s]||Dl,n[s])}function sm(e){switch(e){case 5126:return Hf;case 35664:return Vf;case 35665:return Gf;case 35666:return Wf;case 35674:return Xf;case 35675:return jf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return Jf;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return $f;case 36294:return Qf;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return nm}}var om=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=kf(t.type)}},lm=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sm(t.type)}},hm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let a=0,n=i.length;a!==n;++a){let s=i[a];s.setValue(e,t[s.id],r)}}},Ws=/(\w+)(\])?(\[|\.)?/g;function Gl(e,t){e.seq.push(t),e.map[t.id]=t}function cm(e,t,r){let i=e.name,a=i.length;for(Ws.lastIndex=0;;){let n=Ws.exec(i),s=Ws.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){Gl(r,h===void 0?new om(o,e,t):new lm(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new hm(o),Gl(r,c)),r=c}}}var Za=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let a=e.getActiveUniform(t,i),n=e.getUniformLocation(t,a.name);cm(a,n,this)}}setValue(e,t,r,i){let a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,a=e.length;i!==a;++i){let n=e[i];n.id in t&&r.push(n)}return r}};function Wl(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var um=37297,dm=0;function pm(e,t){let r=e.split(`
`),i=[],a=Math.max(t-6,0),n=Math.min(t+6,r.length);for(let s=a;s<n;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var Xl=new Ye;function fm(e){Ze._getMatrix(Xl,Ze.workingColorSpace,e);let t=`mat3( ${Xl.elements.map(r=>r.toFixed(4))} )`;switch(Ze.getTransfer(e)){case Ra:return[t,"LinearTransferOETF"];case et:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function jl(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return r.toUpperCase()+`

`+a+`

`+pm(e.getShaderSource(t),s)}else return a}function mm(e,t){let r=fm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function gm(e,t){let r;switch(t){case Uc:r="Linear";break;case Ic:r="Reinhard";break;case Nc:r="Cineon";break;case Dc:r="ACESFilmic";break;case Fc:r="AgX";break;case Bc:r="Neutral";break;case Oc:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var $a=new I;function _m(){Ze.getLuminanceCoefficients($a);let e=$a.x.toFixed(4),t=$a.y.toFixed(4),r=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function xm(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function ym(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),r[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function ia(e){return e!==""}function ql(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(e){return e.replace(Mm,Em)}var Sm=new Map;function Em(e,t){let r=qe[t];if(r===void 0){let i=Sm.get(t);if(i!==void 0)r=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xs(r)}var bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(e){return e.replace(bm,Tm)}function Tm(e,t,r,i){let a="";for(let n=parseInt(t);n<parseInt(r);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Kl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function wm(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===uc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ur&&(t="SHADOWMAP_TYPE_VSM"),t}function Am(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ci:case ui:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rm(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===ui&&(t="ENVMAP_MODE_REFRACTION"),t}function Cm(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Po:t="ENVMAP_BLENDING_MULTIPLY";break;case Pc:t="ENVMAP_BLENDING_MIX";break;case Lc:t="ENVMAP_BLENDING_ADD";break}return t}function Pm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function Lm(e,t,r,i){let a=e.getContext(),n=r.defines,s=r.vertexShader,o=r.fragmentShader,l=wm(r),h=Am(r),c=Rm(r),u=Cm(r),d=Pm(r),p=vm(r),g=xm(n),_=a.createProgram(),m,f,y=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g].filter(ia).join(`
`),f.length>0&&(f+=`
`)):(m=[Kl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),f=[Kl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.envMap?"#define "+c:"",r.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==$t?"#define TONE_MAPPING":"",r.toneMapping!==$t?qe.tonemapping_pars_fragment:"",r.toneMapping!==$t?gm("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,mm("linearToOutputTexel",r.outputColorSpace),_m(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(ia).join(`
`)),s=Xs(s),s=ql(s,r),s=Yl(s,r),o=Xs(o),o=ql(o,r),o=Yl(o,r),s=Jl(s),o=Jl(o),r.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",r.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=y+m+s,b=y+f+o,F=Wl(a,a.VERTEX_SHADER,x),A=Wl(a,a.FRAGMENT_SHADER,b);a.attachShader(_,F),a.attachShader(_,A),r.index0AttributeName!==void 0?a.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function R(C){if(e.debug.checkShaderErrors){let P=a.getProgramInfoLog(_).trim(),B=a.getShaderInfoLog(F).trim(),W=a.getShaderInfoLog(A).trim(),V=!0,H=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,_,F,A);else{let de=jl(a,F,"vertex"),J=jl(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+de+`
`+J)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(B===""||W==="")&&(H=!1);H&&(C.diagnostics={runnable:V,programLog:P,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}a.deleteShader(F),a.deleteShader(A),N=new Za(a,_),M=ym(a,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let E=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(_,um)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=A,this}var Um=0,Im=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new Nm(e),t.set(e,r)),r}},Nm=class{constructor(e){this.id=Um++,this.code=e,this.usedTimes=0}};function Dm(e,t,r,i,a,n,s){let o=new Ss,l=new Im,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,E,C,P,B){let W=P.fog,V=B.geometry,H=M.isMeshStandardMaterial?P.environment:null,de=(M.isMeshStandardMaterial?r:t).get(M.envMap||H),J=de&&de.mapping===xa?de.image.height:null,fe=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,De=Me!==void 0?Me.length:0,Ie=0;V.morphAttributes.position!==void 0&&(Ie=1),V.morphAttributes.normal!==void 0&&(Ie=2),V.morphAttributes.color!==void 0&&(Ie=3);let k,me,G,ge;if(fe){let Ke=rr[fe];k=Ke.vertexShader,me=Ke.fragmentShader}else k=M.vertexShader,me=M.fragmentShader,l.update(M),G=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);let te=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),_e=B.isInstancedMesh===!0,Le=B.isBatchedMesh===!0,Q=!!M.map,re=!!M.matcap,w=!!de,we=!!M.aoMap,le=!!M.lightMap,Ae=!!M.bumpMap,ce=!!M.normalMap,Oe=!!M.displacementMap,Y=!!M.emissiveMap,Ce=!!M.metalnessMap,T=!!M.roughnessMap,v=M.anisotropy>0,U=M.clearcoat>0,z=M.dispersion>0,$=M.iridescence>0,K=M.sheen>0,Se=M.transmission>0,ve=v&&!!M.anisotropyMap,Te=U&&!!M.clearcoatMap,Ne=U&&!!M.clearcoatNormalMap,he=U&&!!M.clearcoatRoughnessMap,Pe=$&&!!M.iridescenceMap,ie=$&&!!M.iridescenceThicknessMap,ae=K&&!!M.sheenColorMap,ne=K&&!!M.sheenRoughnessMap,be=!!M.specularMap,ye=!!M.specularColorMap,ue=!!M.specularIntensityMap,L=Se&&!!M.transmissionMap,Z=Se&&!!M.thicknessMap,X=!!M.gradientMap,se=!!M.alphaMap,pe=M.alphaTest>0,oe=!!M.alphaHash,Ge=!!M.extensions,ke=$t;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Qe={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:me,defines:M.defines,customVertexShaderID:G,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Le,batchingColor:Le&&B._colorsTexture!==null,instancing:_e,instancingColor:_e&&B.instanceColor!==null,instancingMorph:_e&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:gi,alphaToCoverage:!!M.alphaToCoverage,map:Q,matcap:re,envMap:w,envMapMode:w&&de.mapping,envMapCubeUVHeight:J,aoMap:we,lightMap:le,bumpMap:Ae,normalMap:ce,displacementMap:d&&Oe,emissiveMap:Y,normalMapObjectSpace:ce&&M.normalMapType===Vc,normalMapTangentSpace:ce&&M.normalMapType===Wo,metalnessMap:Ce,roughnessMap:T,anisotropy:v,anisotropyMap:ve,clearcoat:U,clearcoatMap:Te,clearcoatNormalMap:Ne,clearcoatRoughnessMap:he,dispersion:z,iridescence:$,iridescenceMap:Pe,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:ae,sheenRoughnessMap:ne,specularMap:be,specularColorMap:ye,specularIntensityMap:ue,transmission:Se,transmissionMap:L,thicknessMap:Z,gradientMap:X,opaque:M.transparent===!1&&M.blending===li&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:pe,alphaHash:oe,combine:M.combine,mapUv:Q&&_(M.map.channel),aoMapUv:we&&_(M.aoMap.channel),lightMapUv:le&&_(M.lightMap.channel),bumpMapUv:Ae&&_(M.bumpMap.channel),normalMapUv:ce&&_(M.normalMap.channel),displacementMapUv:Oe&&_(M.displacementMap.channel),emissiveMapUv:Y&&_(M.emissiveMap.channel),metalnessMapUv:Ce&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:ve&&_(M.anisotropyMap.channel),clearcoatMapUv:Te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ne&&_(M.sheenRoughnessMap.channel),specularMapUv:be&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:ue&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:Z&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ce||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Q||se),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ee,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:Q&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===et,decodeVideoTextureEmissive:Y&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&M.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function f(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(E,M),x(E,M),E.push(e.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){let E=g[M.type],C;if(E){let P=rr[E];C=_u.clone(P.uniforms)}else C=M.uniforms;return C}function F(M,E){let C;for(let P=0,B=c.length;P<B;P++){let W=c[P];if(W.cacheKey===E){C=W,++C.usedTimes;break}}return C===void 0&&(C=new Lm(e,E,M,n),c.push(C)),C}function A(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:F,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:N}}function Om(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:r,remove:i,update:a,dispose:n}}function Fm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Zl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function $l(){let e=[],t=0,r=[],i=[],a=[];function n(){t=0,r.length=0,i.length=0,a.length=0}function s(u,d,p,g,_,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){let f=s(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):r.push(f)}function l(u,d,p,g,_,m){let f=s(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):r.unshift(f)}function h(u,d){r.length>1&&r.sort(u||Fm),i.length>1&&i.sort(d||Zl),a.length>1&&a.sort(d||Zl)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:r,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function Bm(){let e=new WeakMap;function t(i,a){let n=e.get(i),s;return n===void 0?(s=new $l,e.set(i,[s])):a>=n.length?(s=new $l,n.push(s)):s=n[a],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function zm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new I,color:new Ve};break;case"SpotLight":r={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":r={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":r={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=r,r}}}function km(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var Hm=0;function Vm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Gm(e){let t=new zm,r=km(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);let a=new I,n=new it,s=new it;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,x=0,b=0,F=0,A=0,R=0;h.sort(Vm);for(let M=0,E=h.length;M<E;M++){let C=h[M],P=C.color,B=C.intensity,W=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=P.r*B,u+=P.g*B,d+=P.b*B;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],B);R++}else if(C.isDirectionalLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let de=C.shadow,J=r.get(C);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=C.shadow.matrix,y++}i.directional[p]=H,p++}else if(C.isSpotLight){let H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(P).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[_]=H;let de=C.shadow;if(C.map&&(i.spotLightMap[F]=C.map,F++,de.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=de.matrix,C.castShadow){let J=r.get(C);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=V,b++}_++}else if(C.isRectAreaLight){let H=t.get(C);H.color.copy(P).multiplyScalar(B),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let de=C.shadow,J=r.get(C);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,J.shadowCameraNear=de.camera.near,J.shadowCameraFar=de.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=C.shadow.matrix,x++}i.point[g]=H,g++}else if(C.isHemisphereLight){let H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(B),H.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[f]=H,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==y||N.numPointShadows!==x||N.numSpotShadows!==b||N.numSpotMaps!==F||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=b+F-A,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,N.directionalLength=p,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=y,N.numPointShadows=x,N.numSpotShadows=b,N.numSpotMaps=F,N.numLightProbes=R,i.version=Hm++)}function l(h,c){let u=0,d=0,p=0,g=0,_=0,m=c.matrixWorldInverse;for(let f=0,y=h.length;f<y;f++){let x=h[f];if(x.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),u++}else if(x.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),s.identity(),n.copy(x.matrixWorld),n.premultiply(m),s.extractRotation(n),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let b=i.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Ql(e){let t=new Gm(e),r=[],i=[];function a(c){h.camera=c,r.length=0,i.length=0}function n(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let h={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function Wm(e){let t=new WeakMap;function r(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Ql(e),t.set(a,[o])):n>=s.length?(o=new Ql(e),s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var Xm=class extends ta{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jm=class extends ta{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function Jm(e,t,r){let i=new Ds,a=new Ee,n=new Ee,s=new dt,o=new Xm({depthPacking:Hc}),l=new jm,h={},c=r.maxTextureSize,u={[Tr]:wt,[wt]:Tr,[Zt]:Zt},d=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let f=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=e.getRenderTarget(),E=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),P=e.state;P.setBlending(wr),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let B=f!==ur&&this.type===ur,W=f===ur&&this.type!==ur;for(let V=0,H=A.length;V<H;V++){let de=A[V],J=de.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);let fe=J.getFrameExtents();if(a.multiply(fe),n.copy(J.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/fe.x),a.x=n.x*fe.x,J.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/fe.y),a.y=n.y*fe.y,J.mapSize.y=n.y)),J.map===null||B===!0||W===!0){let De=this.type!==ur?{minFilter:Ct,magFilter:Ct}:{};J.map!==null&&J.map.dispose(),J.map=new Rr(a.x,a.y,De),J.map.texture.name=de.name+".shadowMap",J.camera.updateProjectionMatrix()}e.setRenderTarget(J.map),e.clear();let Me=J.getViewportCount();for(let De=0;De<Me;De++){let Ie=J.getViewport(De);s.set(n.x*Ie.x,n.y*Ie.y,n.x*Ie.z,n.y*Ie.w),P.viewport(s),J.updateMatrices(de,De),i=J.getFrustum(),b(R,N,J.camera,de,this.type)}J.isPointLightShadow!==!0&&this.type===ur&&y(J,N),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(M,E,C)};function y(A,R){let N=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rr(a.x,a.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,N,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,N,p,_,null)}function x(A,R,N,M){let E=null,C=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)E=C;else if(E=N.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let P=E.uuid,B=R.uuid,W=h[P];W===void 0&&(W={},h[P]=W);let V=W[B];V===void 0&&(V=E.clone(),W[B]=V,R.addEventListener("dispose",F)),E=V}if(E.visible=R.visible,E.wireframe=R.wireframe,M===ur?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let P=e.properties.get(E);P.light=N}return E}function b(A,R,N,M,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ur)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let P=t.update(A),B=A.material;if(Array.isArray(B)){let W=P.groups;for(let V=0,H=W.length;V<H;V++){let de=W[V],J=B[de.materialIndex];if(J&&J.visible){let fe=x(A,J,M,E);A.onBeforeShadow(e,A,R,N,P,fe,de),e.renderBufferDirect(N,null,P,fe,A,de),A.onAfterShadow(e,A,R,N,P,fe,de)}}}else if(B.visible){let W=x(A,B,M,E);A.onBeforeShadow(e,A,R,N,P,W,null),e.renderBufferDirect(N,null,P,W,A,null),A.onAfterShadow(e,A,R,N,P,W,null)}}let C=A.children;for(let P=0,B=C.length;P<B;P++)b(C[P],R,N,M,E)}function F(A){A.target.removeEventListener("dispose",F);for(let R in h){let N=h[R],M=A.target.uuid;M in N&&(N[M].dispose(),delete N[M])}}}var Km={[xn]:yn,[Mn]:bn,[Sn]:Tn,[hi]:En,[yn]:xn,[bn]:Mn,[Tn]:Sn,[En]:hi};function Zm(e,t){function r(){let L=!1,Z=new dt,X=null,se=new dt(0,0,0,0);return{setMask:function(pe){X!==pe&&!L&&(e.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){L=pe},setClear:function(pe,oe,Ge,ke,Qe){Qe===!0&&(pe*=ke,oe*=ke,Ge*=ke),Z.set(pe,oe,Ge,ke),se.equals(Z)===!1&&(e.clearColor(pe,oe,Ge,ke),se.copy(Z))},reset:function(){L=!1,X=null,se.set(-1,0,0,0)}}}function i(){let L=!1,Z=!1,X=null,se=null,pe=null;return{setReversed:function(oe){if(Z!==oe){let Ge=t.get("EXT_clip_control");Z?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let ke=pe;pe=null,this.setClear(ke)}Z=oe},getReversed:function(){return Z},setTest:function(oe){oe?te(e.DEPTH_TEST):ee(e.DEPTH_TEST)},setMask:function(oe){X!==oe&&!L&&(e.depthMask(oe),X=oe)},setFunc:function(oe){if(Z&&(oe=Km[oe]),se!==oe){switch(oe){case xn:e.depthFunc(e.NEVER);break;case yn:e.depthFunc(e.ALWAYS);break;case Mn:e.depthFunc(e.LESS);break;case hi:e.depthFunc(e.LEQUAL);break;case Sn:e.depthFunc(e.EQUAL);break;case En:e.depthFunc(e.GEQUAL);break;case bn:e.depthFunc(e.GREATER);break;case Tn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=oe}},setLocked:function(oe){L=oe},setClear:function(oe){pe!==oe&&(Z&&(oe=1-oe),e.clearDepth(oe),pe=oe)},reset:function(){L=!1,X=null,se=null,pe=null,Z=!1}}}function a(){let L=!1,Z=null,X=null,se=null,pe=null,oe=null,Ge=null,ke=null,Qe=null;return{setTest:function(Ke){L||(Ke?te(e.STENCIL_TEST):ee(e.STENCIL_TEST))},setMask:function(Ke){Z!==Ke&&!L&&(e.stencilMask(Ke),Z=Ke)},setFunc:function(Ke,cr,Jt){(X!==Ke||se!==cr||pe!==Jt)&&(e.stencilFunc(Ke,cr,Jt),X=Ke,se=cr,pe=Jt)},setOp:function(Ke,cr,Jt){(oe!==Ke||Ge!==cr||ke!==Jt)&&(e.stencilOp(Ke,cr,Jt),oe=Ke,Ge=cr,ke=Jt)},setLocked:function(Ke){L=Ke},setClear:function(Ke){Qe!==Ke&&(e.clearStencil(Ke),Qe=Ke)},reset:function(){L=!1,Z=null,X=null,se=null,pe=null,oe=null,Ge=null,ke=null,Qe=null}}}let n=new r,s=new i,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,b=null,F=null,A=null,R=new Ve(0,0,0),N=0,M=!1,E=null,C=null,P=null,B=null,W=null,V=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,de=0,J=e.getParameter(e.VERSION);J.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=de>=1):J.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=de>=2);let fe=null,Me={},De=e.getParameter(e.SCISSOR_BOX),Ie=e.getParameter(e.VIEWPORT),k=new dt().fromArray(De),me=new dt().fromArray(Ie);function G(L,Z,X,se){let pe=new Uint8Array(4),oe=e.createTexture();e.bindTexture(L,oe),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ge=0;Ge<X;Ge++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(Z,0,e.RGBA,1,1,se,0,e.RGBA,e.UNSIGNED_BYTE,pe):e.texImage2D(Z+Ge,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pe);return oe}let ge={};ge[e.TEXTURE_2D]=G(e.TEXTURE_2D,e.TEXTURE_2D,1),ge[e.TEXTURE_CUBE_MAP]=G(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[e.TEXTURE_2D_ARRAY]=G(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ge[e.TEXTURE_3D]=G(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(e.DEPTH_TEST),s.setFunc(hi),Ae(!1),ce(To),te(e.CULL_FACE),we(wr);function te(L){c[L]!==!0&&(e.enable(L),c[L]=!0)}function ee(L){c[L]!==!1&&(e.disable(L),c[L]=!1)}function _e(L,Z){return u[L]!==Z?(e.bindFramebuffer(L,Z),u[L]=Z,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Z),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Z),!0):!1}function Le(L,Z){let X=p,se=!1;if(L){X=d.get(Z),X===void 0&&(X=[],d.set(Z,X));let pe=L.textures;if(X.length!==pe.length||X[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Ge=pe.length;oe<Ge;oe++)X[oe]=e.COLOR_ATTACHMENT0+oe;X.length=pe.length,se=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,se=!0);se&&e.drawBuffers(X)}function Q(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let re={[jr]:e.FUNC_ADD,[pc]:e.FUNC_SUBTRACT,[fc]:e.FUNC_REVERSE_SUBTRACT};re[mc]=e.MIN,re[gc]=e.MAX;let w={[_c]:e.ZERO,[vc]:e.ONE,[xc]:e.SRC_COLOR,[_n]:e.SRC_ALPHA,[Tc]:e.SRC_ALPHA_SATURATE,[Ec]:e.DST_COLOR,[Mc]:e.DST_ALPHA,[yc]:e.ONE_MINUS_SRC_COLOR,[vn]:e.ONE_MINUS_SRC_ALPHA,[bc]:e.ONE_MINUS_DST_COLOR,[Sc]:e.ONE_MINUS_DST_ALPHA,[wc]:e.CONSTANT_COLOR,[Ac]:e.ONE_MINUS_CONSTANT_COLOR,[Rc]:e.CONSTANT_ALPHA,[Cc]:e.ONE_MINUS_CONSTANT_ALPHA};function we(L,Z,X,se,pe,oe,Ge,ke,Qe,Ke){if(L===wr){_===!0&&(ee(e.BLEND),_=!1);return}if(_===!1&&(te(e.BLEND),_=!0),L!==dc){if(L!==m||Ke!==M){if((f!==jr||b!==jr)&&(e.blendEquation(e.FUNC_ADD),f=jr,b=jr),Ke)switch(L){case li:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ao:e.blendFunc(e.ONE,e.ONE);break;case Ro:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Co:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case li:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ao:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Ro:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Co:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,x=null,F=null,A=null,R.set(0,0,0),N=0,m=L,M=Ke}return}pe=pe||Z,oe=oe||X,Ge=Ge||se,(Z!==f||pe!==b)&&(e.blendEquationSeparate(re[Z],re[pe]),f=Z,b=pe),(X!==y||se!==x||oe!==F||Ge!==A)&&(e.blendFuncSeparate(w[X],w[se],w[oe],w[Ge]),y=X,x=se,F=oe,A=Ge),(ke.equals(R)===!1||Qe!==N)&&(e.blendColor(ke.r,ke.g,ke.b,Qe),R.copy(ke),N=Qe),m=L,M=!1}function le(L,Z){L.side===Zt?ee(e.CULL_FACE):te(e.CULL_FACE);let X=L.side===wt;Z&&(X=!X),Ae(X),L.blending===li&&L.transparent===!1?we(wr):we(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let se=L.stencilWrite;o.setTest(se),se&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Y(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(e.SAMPLE_ALPHA_TO_COVERAGE):ee(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){E!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),E=L)}function ce(L){L!==hc?(te(e.CULL_FACE),L!==C&&(L===To?e.cullFace(e.BACK):L===cc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ee(e.CULL_FACE),C=L}function Oe(L){L!==P&&(H&&e.lineWidth(L),P=L)}function Y(L,Z,X){L?(te(e.POLYGON_OFFSET_FILL),(B!==Z||W!==X)&&(e.polygonOffset(Z,X),B=Z,W=X)):ee(e.POLYGON_OFFSET_FILL)}function Ce(L){L?te(e.SCISSOR_TEST):ee(e.SCISSOR_TEST)}function T(L){L===void 0&&(L=e.TEXTURE0+V-1),fe!==L&&(e.activeTexture(L),fe=L)}function v(L,Z,X){X===void 0&&(fe===null?X=e.TEXTURE0+V-1:X=fe);let se=Me[X];se===void 0&&(se={type:void 0,texture:void 0},Me[X]=se),(se.type!==L||se.texture!==Z)&&(fe!==X&&(e.activeTexture(X),fe=X),e.bindTexture(L,Z||ge[L]),se.type=L,se.texture=Z)}function U(){let L=Me[fe];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function z(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(L){k.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),k.copy(L))}function ne(L){me.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),me.copy(L))}function be(L,Z){let X=h.get(Z);X===void 0&&(X=new WeakMap,h.set(Z,X));let se=X.get(L);se===void 0&&(se=e.getUniformBlockIndex(Z,L.name),X.set(L,se))}function ye(L,Z){let X=h.get(Z).get(L);l.get(Z)!==X&&(e.uniformBlockBinding(Z,X,L.__bindingPointIndex),l.set(Z,X))}function ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},fe=null,Me={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,b=null,F=null,A=null,R=new Ve(0,0,0),N=0,M=!1,E=null,C=null,P=null,B=null,W=null,k.set(0,0,e.canvas.width,e.canvas.height),me.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:te,disable:ee,bindFramebuffer:_e,drawBuffers:Le,useProgram:Q,setBlending:we,setMaterial:le,setFlipSided:Ae,setCullFace:ce,setLineWidth:Oe,setPolygonOffset:Y,setScissorTest:Ce,activeTexture:T,bindTexture:v,unbindTexture:U,compressedTexImage2D:z,compressedTexImage3D:$,texImage2D:Pe,texImage3D:ie,updateUBOMapping:be,uniformBlockBinding:ye,texStorage2D:Ne,texStorage3D:he,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:ve,compressedTexSubImage3D:Te,scissor:ae,viewport:ne,reset:ue}}function eh(e,t,r,i){let a=$m(i);switch(r){case Do:return e*t;case Fo:return e*t;case Bo:return e*t*2;case In:return e*t/a.components*a.byteLength;case Nn:return e*t/a.components*a.byteLength;case zo:return e*t*2/a.components*a.byteLength;case Dn:return e*t*2/a.components*a.byteLength;case Oo:return e*t*3/a.components*a.byteLength;case Wt:return e*t*4/a.components*a.byteLength;case On:return e*t*4/a.components*a.byteLength;case Sa:case Ea:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ba:case Ta:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bn:case kn:return Math.max(e,16)*Math.max(t,8)/4;case Fn:case zn:return Math.max(e,8)*Math.max(t,8)/2;case Hn:case Vn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case jn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case qn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Yn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Jn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Kn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Zn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case $n:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Qn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case es:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ts:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case rs:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case is:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case wa:case as:case ns:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ko:case ss:return Math.ceil(e/4)*Math.ceil(t/4)*8;case os:case ls:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function $m(e){switch(e){case pr:case Uo:return{byteLength:1,components:1};case qi:case Io:case di:return{byteLength:2,components:1};case Ln:case Un:return{byteLength:2,components:4};case Yr:case Pn:case Qt:return{byteLength:4,components:1};case No:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Qm(e,t,r,i,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Pa("canvas")}function _(T,v,U){let z=1,$=Ce(T);if(($.width>U||$.height>U)&&(z=U/Math.max($.width,$.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor(z*$.width),Se=Math.floor(z*$.height);u===void 0&&(u=g(K,Se));let ve=v?g(K,Se):u;return ve.width=K,ve.height=Se,ve.getContext("2d").drawImage(T,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+Se+")."),ve}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){e.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(T,v,U,z,$=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=v;if(v===e.RED&&(U===e.FLOAT&&(K=e.R32F),U===e.HALF_FLOAT&&(K=e.R16F),U===e.UNSIGNED_BYTE&&(K=e.R8)),v===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.R8UI),U===e.UNSIGNED_SHORT&&(K=e.R16UI),U===e.UNSIGNED_INT&&(K=e.R32UI),U===e.BYTE&&(K=e.R8I),U===e.SHORT&&(K=e.R16I),U===e.INT&&(K=e.R32I)),v===e.RG&&(U===e.FLOAT&&(K=e.RG32F),U===e.HALF_FLOAT&&(K=e.RG16F),U===e.UNSIGNED_BYTE&&(K=e.RG8)),v===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.RG8UI),U===e.UNSIGNED_SHORT&&(K=e.RG16UI),U===e.UNSIGNED_INT&&(K=e.RG32UI),U===e.BYTE&&(K=e.RG8I),U===e.SHORT&&(K=e.RG16I),U===e.INT&&(K=e.RG32I)),v===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.RGB8UI),U===e.UNSIGNED_SHORT&&(K=e.RGB16UI),U===e.UNSIGNED_INT&&(K=e.RGB32UI),U===e.BYTE&&(K=e.RGB8I),U===e.SHORT&&(K=e.RGB16I),U===e.INT&&(K=e.RGB32I)),v===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),U===e.UNSIGNED_INT&&(K=e.RGBA32UI),U===e.BYTE&&(K=e.RGBA8I),U===e.SHORT&&(K=e.RGBA16I),U===e.INT&&(K=e.RGBA32I)),v===e.RGB&&U===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),v===e.RGBA){let Se=$?Ra:Ze.getTransfer(z);U===e.FLOAT&&(K=e.RGBA32F),U===e.HALF_FLOAT&&(K=e.RGBA16F),U===e.UNSIGNED_BYTE&&(K=Se===et?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(T,v){let U;return T?v===null||v===Yr||v===pi?U=e.DEPTH24_STENCIL8:v===Qt?U=e.DEPTH32F_STENCIL8:v===qi&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yr||v===pi?U=e.DEPTH_COMPONENT24:v===Qt?U=e.DEPTH_COMPONENT32F:v===qi&&(U=e.DEPTH_COMPONENT16),U}function F(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){let v=T.target;v.removeEventListener("dispose",A),N(v),v.isVideoTexture&&c.delete(v)}function R(T){let v=T.target;v.removeEventListener("dispose",R),E(v)}function N(T){let v=i.get(T);if(v.__webglInit===void 0)return;let U=T.source,z=d.get(U);if(z){let $=z[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(T),Object.keys(z).length===0&&d.delete(U)}i.remove(T)}function M(T){let v=i.get(T);e.deleteTexture(v.__webglTexture);let U=T.source,z=d.get(U);delete z[v.__cacheKey],s.memory.textures--}function E(T){let v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let $=0;$<v.__webglFramebuffer[z].length;$++)e.deleteFramebuffer(v.__webglFramebuffer[z][$]);else e.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)e.deleteFramebuffer(v.__webglFramebuffer[z]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=T.textures;for(let z=0,$=U.length;z<$;z++){let K=i.get(U[z]);K.__webglTexture&&(e.deleteTexture(K.__webglTexture),s.memory.textures--),i.remove(U[z])}i.remove(T)}let C=0;function P(){C=0}function B(){let T=C;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),C+=1,T}function W(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function V(T,v){let U=i.get(T);if(T.isVideoTexture&&Oe(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(U,T,v);return}}r.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+v)}function H(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){me(U,T,v);return}r.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+v)}function de(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){me(U,T,v);return}r.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+v)}function J(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){G(U,T,v);return}r.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+v)}let fe={[ya]:e.REPEAT,[qr]:e.CLAMP_TO_EDGE,[Rn]:e.MIRRORED_REPEAT},Me={[Ct]:e.NEAREST,[zc]:e.NEAREST_MIPMAP_NEAREST,[Ma]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[Cn]:e.LINEAR_MIPMAP_NEAREST,[dr]:e.LINEAR_MIPMAP_LINEAR},De={[Gc]:e.NEVER,[Jc]:e.ALWAYS,[Wc]:e.LESS,[jo]:e.LEQUAL,[Xc]:e.EQUAL,[Yc]:e.GEQUAL,[jc]:e.GREATER,[qc]:e.NOTEQUAL};function Ie(T,v){if(v.type===Qt&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Gt||v.magFilter===Cn||v.magFilter===Ma||v.magFilter===dr||v.minFilter===Gt||v.minFilter===Cn||v.minFilter===Ma||v.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,fe[v.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,fe[v.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,fe[v.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Me[v.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Me[v.minFilter]),v.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==Ma&&v.minFilter!==dr||v.type===Qt&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function k(T,v){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let z=v.source,$=d.get(z);$===void 0&&($={},d.set(z,$));let K=W(v);if(K!==T.__cacheKey){$[K]===void 0&&($[K]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,U=!0),$[K].usedTimes++;let Se=$[T.__cacheKey];Se!==void 0&&($[T.__cacheKey].usedTimes--,Se.usedTimes===0&&M(v)),T.__cacheKey=K,T.__webglTexture=$[K].texture}return U}function me(T,v,U){let z=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=e.TEXTURE_3D);let $=k(T,v),K=v.source;r.bindTexture(z,T.__webglTexture,e.TEXTURE0+U);let Se=i.get(K);if(K.version!==Se.__version||$===!0){r.activeTexture(e.TEXTURE0+U);let ve=Ze.getPrimaries(Ze.workingColorSpace),Te=v.colorSpace===Ar?null:Ze.getPrimaries(v.colorSpace),Ne=v.colorSpace===Ar||ve===Te?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let he=_(v.image,!1,a.maxTextureSize);he=Y(v,he);let Pe=n.convert(v.format,v.colorSpace),ie=n.convert(v.type),ae=x(v.internalFormat,Pe,ie,v.colorSpace,v.isVideoTexture);Ie(z,v);let ne,be=v.mipmaps,ye=v.isVideoTexture!==!0,ue=Se.__version===void 0||$===!0,L=K.dataReady,Z=F(v,he);if(v.isDepthTexture)ae=b(v.format===mi,v.type),ue&&(ye?r.texStorage2D(e.TEXTURE_2D,1,ae,he.width,he.height):r.texImage2D(e.TEXTURE_2D,0,ae,he.width,he.height,0,Pe,ie,null));else if(v.isDataTexture)if(be.length>0){ye&&ue&&r.texStorage2D(e.TEXTURE_2D,Z,ae,be[0].width,be[0].height);for(let X=0,se=be.length;X<se;X++)ne=be[X],ye?L&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,ne.width,ne.height,Pe,ie,ne.data):r.texImage2D(e.TEXTURE_2D,X,ae,ne.width,ne.height,0,Pe,ie,ne.data);v.generateMipmaps=!1}else ye?(ue&&r.texStorage2D(e.TEXTURE_2D,Z,ae,he.width,he.height),L&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,he.width,he.height,Pe,ie,he.data)):r.texImage2D(e.TEXTURE_2D,0,ae,he.width,he.height,0,Pe,ie,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ye&&ue&&r.texStorage3D(e.TEXTURE_2D_ARRAY,Z,ae,be[0].width,be[0].height,he.depth);for(let X=0,se=be.length;X<se;X++)if(ne=be[X],v.format!==Wt)if(Pe!==null)if(ye){if(L)if(v.layerUpdates.size>0){let pe=eh(ne.width,ne.height,v.format,v.type);for(let oe of v.layerUpdates){let Ge=ne.data.subarray(oe*pe/ne.data.BYTES_PER_ELEMENT,(oe+1)*pe/ne.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,oe,ne.width,ne.height,1,Pe,Ge)}v.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,ne.width,ne.height,he.depth,Pe,ne.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,ae,ne.width,ne.height,he.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?L&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,ne.width,ne.height,he.depth,Pe,ie,ne.data):r.texImage3D(e.TEXTURE_2D_ARRAY,X,ae,ne.width,ne.height,he.depth,0,Pe,ie,ne.data)}else{ye&&ue&&r.texStorage2D(e.TEXTURE_2D,Z,ae,be[0].width,be[0].height);for(let X=0,se=be.length;X<se;X++)ne=be[X],v.format!==Wt?Pe!==null?ye?L&&r.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,ne.width,ne.height,Pe,ne.data):r.compressedTexImage2D(e.TEXTURE_2D,X,ae,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?L&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,ne.width,ne.height,Pe,ie,ne.data):r.texImage2D(e.TEXTURE_2D,X,ae,ne.width,ne.height,0,Pe,ie,ne.data)}else if(v.isDataArrayTexture)if(ye){if(ue&&r.texStorage3D(e.TEXTURE_2D_ARRAY,Z,ae,he.width,he.height,he.depth),L)if(v.layerUpdates.size>0){let X=eh(he.width,he.height,v.format,v.type);for(let se of v.layerUpdates){let pe=he.data.subarray(se*X/he.data.BYTES_PER_ELEMENT,(se+1)*X/he.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,Pe,ie,pe)}v.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Pe,ie,he.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,ae,he.width,he.height,he.depth,0,Pe,ie,he.data);else if(v.isData3DTexture)ye?(ue&&r.texStorage3D(e.TEXTURE_3D,Z,ae,he.width,he.height,he.depth),L&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Pe,ie,he.data)):r.texImage3D(e.TEXTURE_3D,0,ae,he.width,he.height,he.depth,0,Pe,ie,he.data);else if(v.isFramebufferTexture){if(ue)if(ye)r.texStorage2D(e.TEXTURE_2D,Z,ae,he.width,he.height);else{let X=he.width,se=he.height;for(let pe=0;pe<Z;pe++)r.texImage2D(e.TEXTURE_2D,pe,ae,X,se,0,Pe,ie,null),X>>=1,se>>=1}}else if(be.length>0){if(ye&&ue){let X=Ce(be[0]);r.texStorage2D(e.TEXTURE_2D,Z,ae,X.width,X.height)}for(let X=0,se=be.length;X<se;X++)ne=be[X],ye?L&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,Pe,ie,ne):r.texImage2D(e.TEXTURE_2D,X,ae,Pe,ie,ne);v.generateMipmaps=!1}else if(ye){if(ue){let X=Ce(he);r.texStorage2D(e.TEXTURE_2D,Z,ae,X.width,X.height)}L&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,Pe,ie,he)}else r.texImage2D(e.TEXTURE_2D,0,ae,Pe,ie,he);m(v)&&f(z),Se.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function G(T,v,U){if(v.image.length!==6)return;let z=k(T,v),$=v.source;r.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+U);let K=i.get($);if($.version!==K.__version||z===!0){r.activeTexture(e.TEXTURE0+U);let Se=Ze.getPrimaries(Ze.workingColorSpace),ve=v.colorSpace===Ar?null:Ze.getPrimaries(v.colorSpace),Te=v.colorSpace===Ar||Se===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,Pe=[];for(let se=0;se<6;se++)!Ne&&!he?Pe[se]=_(v.image[se],!0,a.maxCubemapSize):Pe[se]=he?v.image[se].image:v.image[se],Pe[se]=Y(v,Pe[se]);let ie=Pe[0],ae=n.convert(v.format,v.colorSpace),ne=n.convert(v.type),be=x(v.internalFormat,ae,ne,v.colorSpace),ye=v.isVideoTexture!==!0,ue=K.__version===void 0||z===!0,L=$.dataReady,Z=F(v,ie);Ie(e.TEXTURE_CUBE_MAP,v);let X;if(Ne){ye&&ue&&r.texStorage2D(e.TEXTURE_CUBE_MAP,Z,be,ie.width,ie.height);for(let se=0;se<6;se++){X=Pe[se].mipmaps;for(let pe=0;pe<X.length;pe++){let oe=X[pe];v.format!==Wt?ae!==null?ye?L&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,oe.width,oe.height,ae,oe.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,be,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,oe.width,oe.height,ae,ne,oe.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,be,oe.width,oe.height,0,ae,ne,oe.data)}}}else{if(X=v.mipmaps,ye&&ue){X.length>0&&Z++;let se=Ce(Pe[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,Z,be,se.width,se.height)}for(let se=0;se<6;se++)if(he){ye?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe[se].width,Pe[se].height,ae,ne,Pe[se].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,be,Pe[se].width,Pe[se].height,0,ae,ne,Pe[se].data);for(let pe=0;pe<X.length;pe++){let oe=X[pe].image[se].image;ye?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,oe.width,oe.height,ae,ne,oe.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,be,oe.width,oe.height,0,ae,ne,oe.data)}}else{ye?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ae,ne,Pe[se]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,be,ae,ne,Pe[se]);for(let pe=0;pe<X.length;pe++){let oe=X[pe];ye?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,ae,ne,oe.image[se]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,be,ae,ne,oe.image[se])}}}m(v)&&f(e.TEXTURE_CUBE_MAP),K.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ge(T,v,U,z,$,K){let Se=n.convert(U.format,U.colorSpace),ve=n.convert(U.type),Te=x(U.internalFormat,Se,ve,U.colorSpace),Ne=i.get(v),he=i.get(U);if(he.__renderTarget=v,!Ne.__hasExternalTextures){let Pe=Math.max(1,v.width>>K),ie=Math.max(1,v.height>>K);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?r.texImage3D($,K,Te,Pe,ie,v.depth,0,Se,ve,null):r.texImage2D($,K,Te,Pe,ie,0,Se,ve,null)}r.bindFramebuffer(e.FRAMEBUFFER,T),ce(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,$,he.__webglTexture,0,Ae(v)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,$,he.__webglTexture,K),r.bindFramebuffer(e.FRAMEBUFFER,null)}function te(T,v,U){if(e.bindRenderbuffer(e.RENDERBUFFER,T),v.depthBuffer){let z=v.depthTexture,$=z&&z.isDepthTexture?z.type:null,K=b(v.stencilBuffer,$),Se=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=Ae(v);ce(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,K,v.width,v.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,K,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,K,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,T)}else{let z=v.textures;for(let $=0;$<z.length;$++){let K=z[$],Se=n.convert(K.format,K.colorSpace),ve=n.convert(K.type),Te=x(K.internalFormat,Se,ve,K.colorSpace),Ne=Ae(v);U&&ce(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,Te,v.width,v.height):ce(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne,Te,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,Te,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ee(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=i.get(v.depthTexture);U.__renderTarget=v,(!U.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let z=U.__webglTexture,$=Ae(v);if(v.depthTexture.format===fi)ce(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0);else if(v.depthTexture.format===mi)ce(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function _e(T){let v=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",$)};z.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ee(v.__webglFramebuffer,T)}else if(U){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(r.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=e.createRenderbuffer(),te(v.__webglDepthbuffer[z],T,!1);else{let $=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,K)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),te(v.__webglDepthbuffer,T,!1);else{let z=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,$)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(T,v,U){let z=i.get(T);v!==void 0&&ge(z.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&_e(T)}function Q(T){let v=T.texture,U=i.get(T),z=i.get(v);T.addEventListener("dispose",R);let $=T.textures,K=T.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=v.version,s.memory.textures++),K){U.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ve]=[];for(let Te=0;Te<v.mipmaps.length;Te++)U.__webglFramebuffer[ve][Te]=e.createFramebuffer()}else U.__webglFramebuffer[ve]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ve=0;ve<v.mipmaps.length;ve++)U.__webglFramebuffer[ve]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Se)for(let ve=0,Te=$.length;ve<Te;ve++){let Ne=i.get($[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=e.createTexture(),s.memory.textures++)}if(T.samples>0&&ce(T)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ve=0;ve<$.length;ve++){let Te=$[ve];U.__webglColorRenderbuffer[ve]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[ve]);let Ne=n.convert(Te.format,Te.colorSpace),he=n.convert(Te.type),Pe=x(Te.internalFormat,Ne,he,Te.colorSpace,T.isXRRenderTarget===!0),ie=Ae(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,ie,Pe,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,U.__webglColorRenderbuffer[ve])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),te(U.__webglDepthRenderbuffer,T,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(K){r.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,v);for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ge(U.__webglFramebuffer[ve][Te],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else ge(U.__webglFramebuffer[ve],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(v)&&f(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Se){for(let ve=0,Te=$.length;ve<Te;ve++){let Ne=$[ve],he=i.get(Ne);r.bindTexture(e.TEXTURE_2D,he.__webglTexture),Ie(e.TEXTURE_2D,Ne),ge(U.__webglFramebuffer,T,Ne,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,0),m(Ne)&&f(e.TEXTURE_2D)}r.unbindTexture()}else{let ve=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(ve,z.__webglTexture),Ie(ve,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ge(U.__webglFramebuffer[Te],T,v,e.COLOR_ATTACHMENT0,ve,Te);else ge(U.__webglFramebuffer,T,v,e.COLOR_ATTACHMENT0,ve,0);m(v)&&f(ve),r.unbindTexture()}T.depthBuffer&&_e(T)}function re(T){let v=T.textures;for(let U=0,z=v.length;U<z;U++){let $=v[U];if(m($)){let K=y(T),Se=i.get($).__webglTexture;r.bindTexture(K,Se),f(K),r.unbindTexture()}}}let w=[],we=[];function le(T){if(T.samples>0){if(ce(T)===!1){let v=T.textures,U=T.width,z=T.height,$=e.COLOR_BUFFER_BIT,K=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=i.get(T),ve=v.length>1;if(ve)for(let Te=0;Te<v.length;Te++)r.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),ve){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let Ne=i.get(v[Te]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ne,0)}e.blitFramebuffer(0,0,U,z,0,0,U,z,$,e.NEAREST),l===!0&&(w.length=0,we.length=0,w.push(e.COLOR_ATTACHMENT0+Te),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push(K),we.push(K),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<v.length;Te++){r.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let Ne=i.get(v[Te]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,Ne,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Ae(T){return Math.min(a.maxSamples,T.samples)}function ce(T){let v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Oe(T){let v=s.render.frame;c.get(T)!==v&&(c.set(T,v),T.update())}function Y(T,v){let U=T.colorSpace,z=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==gi&&U!==Ar&&(Ze.getTransfer(U)===et?(z!==Wt||$!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=de,this.setTextureCube=J,this.rebindTextures=Le,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ce}function eg(e,t){function r(i,a=Ar){let n,s=Ze.getTransfer(a);if(i===pr)return e.UNSIGNED_BYTE;if(i===Ln)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Un)return e.UNSIGNED_SHORT_5_5_5_1;if(i===No)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Uo)return e.BYTE;if(i===Io)return e.SHORT;if(i===qi)return e.UNSIGNED_SHORT;if(i===Pn)return e.INT;if(i===Yr)return e.UNSIGNED_INT;if(i===Qt)return e.FLOAT;if(i===di)return e.HALF_FLOAT;if(i===Do)return e.ALPHA;if(i===Oo)return e.RGB;if(i===Wt)return e.RGBA;if(i===Fo)return e.LUMINANCE;if(i===Bo)return e.LUMINANCE_ALPHA;if(i===fi)return e.DEPTH_COMPONENT;if(i===mi)return e.DEPTH_STENCIL;if(i===In)return e.RED;if(i===Nn)return e.RED_INTEGER;if(i===zo)return e.RG;if(i===Dn)return e.RG_INTEGER;if(i===On)return e.RGBA_INTEGER;if(i===Sa||i===Ea||i===ba||i===Ta)if(s===et)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===Sa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===Sa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fn||i===Bn||i===zn||i===kn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===Fn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hn||i===Vn||i===Gn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(i===Hn||i===Vn)return s===et?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Gn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wn||i===Xn||i===jn||i===qn||i===Yn||i===Jn||i===Kn||i===Zn||i===$n||i===Qn||i===es||i===ts||i===rs||i===is)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Wn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$n)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qn)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===es)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ts)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rs)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===is)return s===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wa||i===as||i===ns)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(i===wa)return s===et?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===as)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ns)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===ss||i===os||i===ls)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(i===wa)return n.COMPRESSED_RED_RGTC1_EXT;if(i===ss)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===os)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ls)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pi?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var tg=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ai=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},rg={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,r),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new ai;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ag=`
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

}`,ng=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new Ot,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new tr({vertexShader:ig,fragmentShader:ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new kt(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sg=class extends vi{constructor(e,t){super();let r=this,i=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new ng,_=t.getContextAttributes(),m=null,f=null,y=[],x=[],b=new Ee,F=null,A=new It;A.viewport=new dt;let R=new It;R.viewport=new dt;let N=[A,R],M=new tg,E=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let me=y[k];return me===void 0&&(me=new js,y[k]=me),me.getTargetRaySpace()},this.getControllerGrip=function(k){let me=y[k];return me===void 0&&(me=new js,y[k]=me),me.getGripSpace()},this.getHand=function(k){let me=y[k];return me===void 0&&(me=new js,y[k]=me),me.getHandSpace()};function P(k){let me=x.indexOf(k.inputSource);if(me===-1)return;let G=y[me];G!==void 0&&(G.update(k.inputSource,k.frame,l||n),G.dispatchEvent({type:k.type,data:k.inputSource}))}function B(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let k=0;k<y.length;k++){let me=x[k];me!==null&&(x[k]=null,y[k].disconnect(me))}E=null,C=null,g.reset(),e.setRenderTarget(m),d=null,u=null,c=null,i=null,f=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(b.width,b.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0){let me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Rr(d.framebufferWidth,d.framebufferHeight,{format:Wt,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let me=null,G=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?mi:fi,G=_.stencil?pi:Yr);let te={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(te),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new Rr(u.textureWidth,u.textureHeight,{format:Wt,type:pr,depthTexture:new Ul(u.textureWidth,u.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await i.requestReferenceSpace(s),Ie.setContext(i),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(k){for(let me=0;me<k.removed.length;me++){let G=k.removed[me],ge=x.indexOf(G);ge>=0&&(x[ge]=null,y[ge].disconnect(G))}for(let me=0;me<k.added.length;me++){let G=k.added[me],ge=x.indexOf(G);if(ge===-1){for(let ee=0;ee<y.length;ee++)if(ee>=x.length){x.push(G),ge=ee;break}else if(x[ee]===null){x[ee]=G,ge=ee;break}if(ge===-1)break}let te=y[ge];te&&te.connect(G)}}let V=new I,H=new I;function de(k,me,G){V.setFromMatrixPosition(me.matrixWorld),H.setFromMatrixPosition(G.matrixWorld);let ge=V.distanceTo(H),te=me.projectionMatrix.elements,ee=G.projectionMatrix.elements,_e=te[14]/(te[10]-1),Le=te[14]/(te[10]+1),Q=(te[9]+1)/te[5],re=(te[9]-1)/te[5],w=(te[8]-1)/te[0],we=(ee[8]+1)/ee[0],le=_e*w,Ae=_e*we,ce=ge/(-w+we),Oe=ce*-w;if(me.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Oe),k.translateZ(ce),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),te[10]===-1)k.projectionMatrix.copy(me.projectionMatrix),k.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let Y=_e+ce,Ce=Le+ce,T=le-Oe,v=Ae+(ge-Oe),U=Q*Le/Ce*Y,z=re*Le/Ce*Y;k.projectionMatrix.makePerspective(T,v,U,z,Y,Ce),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function J(k,me){me===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(me.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let me=k.near,G=k.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(G=g.depthFar)),M.near=R.near=A.near=me,M.far=R.far=A.far=G,(E!==M.near||C!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,C=M.far),A.layers.mask=k.layers.mask|2,R.layers.mask=k.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;let ge=k.parent,te=M.cameras;J(M,ge);for(let ee=0;ee<te.length;ee++)J(te[ee],ge);te.length===2?de(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),fe(k,M,ge)};function fe(k,me,G){G===null?k.matrix.copy(me.matrixWorld):(k.matrix.copy(G.matrixWorld),k.matrix.invert(),k.matrix.multiply(me.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(me.projectionMatrix),k.projectionMatrixInverse.copy(me.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ds*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(k){o=k,u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Me=null;function De(k,me){if(h=me.getViewerPose(l||n),p=me,h!==null){let G=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ge=!1;G.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let ee=0;ee<G.length;ee++){let _e=G[ee],Le=null;if(d!==null)Le=d.getViewport(_e);else{let re=c.getViewSubImage(u,_e);Le=re.viewport,ee===0&&(e.setRenderTargetTextures(f,re.colorTexture,u.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(f))}let Q=N[ee];Q===void 0&&(Q=new It,Q.layers.enable(ee),Q.viewport=new dt,N[ee]=Q),Q.matrix.fromArray(_e.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(_e.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Le.x,Le.y,Le.width,Le.height),ee===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(Q)}let te=i.enabledFeatures;if(te&&te.includes("depth-sensing")){let ee=c.getDepthInformation(G[0]);ee&&ee.isValid&&ee.texture&&g.init(e,ee,i.renderState)}}for(let G=0;G<y.length;G++){let ge=x[G],te=y[G];ge!==null&&te!==void 0&&te.update(ge,me,l||n)}Me&&Me(k,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),p=null}let Ie=new Tl;Ie.setAnimationLoop(De),this.setAnimationLoop=function(k){Me=k},this.dispose=function(){}}},ni=new Ir,og=new it;function lg(e,t){function r(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,yl(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,y,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(m,f):f.isMeshToonMaterial?(n(m,f),u(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f)):f.isMeshStandardMaterial?(n(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(n(m,f),g(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),_(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,r(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,r(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,r(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,r(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,r(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,r(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,r(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),x=y.envMap,b=y.envMapRotation;x&&(m.envMap.value=x,ni.copy(b),ni.x*=-1,ni.y*=-1,ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,r(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,r(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,r(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,r(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,r(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,r(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,r(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,r(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,r(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,r(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,r(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,r(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,r(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,r(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,r(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,r(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,r(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,r(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,r(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,r(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,r(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function hg(e,t,r,i){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let b=x.program;i.uniformBlockBinding(y,b)}function h(y,x){let b=a[y.id];b===void 0&&(g(y),b=c(y),a[y.id]=b,y.addEventListener("dispose",m));let F=x.program;i.updateUBOMapping(y,F);let A=t.render.frame;n[y.id]!==A&&(d(y),n[y.id]=A)}function c(y){let x=u();y.__bindingPointIndex=x;let b=e.createBuffer(),F=y.__size,A=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,F,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=a[y.id],b=y.uniforms,F=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let A=0,R=b.length;A<R;A++){let N=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,E=N.length;M<E;M++){let C=N[M];if(p(C,A,M,F)===!0){let P=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],W=0;for(let V=0;V<B.length;V++){let H=B[V],de=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,P+W,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,W),W+=de.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,P,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,x,b,F){let A=y.value,R=x+"_"+b;if(F[R]===void 0)return typeof A=="number"||typeof A=="boolean"?F[R]=A:F[R]=A.clone(),!0;{let N=F[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return F[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(y){let x=y.uniforms,b=0,F=16;for(let R=0,N=x.length;R<N;R++){let M=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,C=M.length;E<C;E++){let P=M[E],B=Array.isArray(P.value)?P.value:[P.value];for(let W=0,V=B.length;W<V;W++){let H=B[W],de=_(H),J=b%F,fe=J%de.boundary,Me=J+fe;b+=fe,Me!==0&&F-Me<de.storage&&(b+=F-Me),P.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=de.storage}}}let A=b%F;return A>0&&(b+=F-A),y.__size=b,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let b=s.indexOf(x.__bindingPointIndex);s.splice(b,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function f(){for(let y in a)e.deleteBuffer(a[y]);s=[],a={},n={}}return{bind:l,update:h,dispose:f}}var th=class{constructor(e={}){let{canvas:t=Zc(),context:r=null,depth:i=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=n;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this.toneMapping=$t,this.toneMappingExposure=1;let x=this,b=!1,F=0,A=0,R=null,N=-1,M=null,E=new dt,C=new dt,P=null,B=new Ve(0),W=0,V=t.width,H=t.height,de=1,J=null,fe=null,Me=new dt(0,0,V,H),De=new dt(0,0,V,H),Ie=!1,k=new Ds,me=!1,G=!1,ge=new it,te=new it,ee=new I,_e=new dt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function re(){return R===null?de:1}let w=r;function we(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",pe,!1),w===null){let O="webgl2";if(w=we(O,S),w===null)throw we(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let le,Ae,ce,Oe,Y,Ce,T,v,U,z,$,K,Se,ve,Te,Ne,he,Pe,ie,ae,ne,be,ye,ue;function L(){le=new mf(w),le.init(),be=new eg(w,le),Ae=new hf(w,le,e,be),ce=new Zm(w,le),Ae.reverseDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),Oe=new vf(w),Y=new Om,Ce=new Qm(w,le,ce,Y,Ae,be,Oe),T=new uf(x),v=new ff(x),U=new bu(w),ye=new of(w,U),z=new gf(w,U,Oe,ye),$=new yf(w,z,U,Oe),ie=new xf(w,Ae,Ce),Ne=new cf(Y),K=new Dm(x,T,v,le,Ae,ye,Ne),Se=new lg(x,Y),ve=new Bm,Te=new Wm(le),Pe=new sf(x,T,v,ce,$,d,o),he=new Jm(x,$,Ae),ue=new hg(w,Oe,Ae,ce),ae=new lf(w,le,Oe),ne=new _f(w,le,Oe),Oe.programs=K.programs,x.capabilities=Ae,x.extensions=le,x.properties=Y,x.renderLists=ve,x.shadowMap=he,x.state=ce,x.info=Oe}L();let Z=new sg(x,w);this.xr=Z,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(S){S!==void 0&&(de=S,this.setSize(V,H,!1))},this.getSize=function(S){return S.set(V,H)},this.setSize=function(S,O,j=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,H=O,t.width=Math.floor(S*de),t.height=Math.floor(O*de),j===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(V*de,H*de).floor()},this.setDrawingBufferSize=function(S,O,j){V=S,H=O,de=j,t.width=Math.floor(S*j),t.height=Math.floor(O*j),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,O,j,q){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,O,j,q),ce.viewport(E.copy(Me).multiplyScalar(de).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,O,j,q){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,O,j,q),ce.scissor(C.copy(De).multiplyScalar(de).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(S){ce.setScissorTest(Ie=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){fe=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(S=!0,O=!0,j=!0){let q=0;if(S){let D=!1;if(R!==null){let xe=R.texture.format;D=xe===On||xe===Dn||xe===Nn}if(D){let xe=R.texture.type,Ue=xe===pr||xe===Yr||xe===qi||xe===pi||xe===Ln||xe===Un,Fe=Pe.getClearColor(),Be=Pe.getClearAlpha(),We=Fe.r,Xe=Fe.g,He=Fe.b;Ue?(p[0]=We,p[1]=Xe,p[2]=He,p[3]=Be,w.clearBufferuiv(w.COLOR,0,p)):(g[0]=We,g[1]=Xe,g[2]=He,g[3]=Be,w.clearBufferiv(w.COLOR,0,g))}else q|=w.COLOR_BUFFER_BIT}O&&(q|=w.DEPTH_BUFFER_BIT),j&&(q|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),Te.dispose(),Y.dispose(),T.dispose(),v.dispose(),$.dispose(),ye.dispose(),ue.dispose(),K.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Jt),Z.removeEventListener("sessionend",vo),Gr.stop()};function X(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let S=Oe.autoReset,O=he.enabled,j=he.autoUpdate,q=he.needsUpdate,D=he.type;L(),Oe.autoReset=S,he.enabled=O,he.autoUpdate=j,he.needsUpdate=q,he.type=D}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){let O=S.target;O.removeEventListener("dispose",oe),Ge(O)}function Ge(S){ke(S),Y.remove(S)}function ke(S){let O=Y.get(S).programs;O!==void 0&&(O.forEach(function(j){K.releaseProgram(j)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,j,q,D,xe){O===null&&(O=Le);let Ue=D.isMesh&&D.matrixWorld.determinant()<0,Fe=sc(S,O,j,q,D);ce.setMaterial(q,Ue);let Be=j.index,We=1;if(q.wireframe===!0){if(Be=z.getWireframeAttribute(j),Be===void 0)return;We=2}let Xe=j.drawRange,He=j.attributes.position,$e=Xe.start*We,at=(Xe.start+Xe.count)*We;xe!==null&&($e=Math.max($e,xe.start*We),at=Math.min(at,(xe.start+xe.count)*We)),Be!==null?($e=Math.max($e,0),at=Math.min(at,Be.count)):He!=null&&($e=Math.max($e,0),at=Math.min(at,He.count));let nt=at-$e;if(nt<0||nt===1/0)return;ye.setup(D,q,Fe,j,Be);let ut,st=ae;if(Be!==null&&(ut=U.get(Be),st=ne,st.setIndex(ut)),D.isMesh)q.wireframe===!0?(ce.setLineWidth(q.wireframeLinewidth*re()),st.setMode(w.LINES)):st.setMode(w.TRIANGLES);else if(D.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),ce.setLineWidth(ze*re()),D.isLineSegments?st.setMode(w.LINES):D.isLineLoop?st.setMode(w.LINE_LOOP):st.setMode(w.LINE_STRIP)}else D.isPoints?st.setMode(w.POINTS):D.isSprite&&st.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)st.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))st.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let ze=D._multiDrawStarts,Wr=D._multiDrawCounts,Xr=D._multiDrawCount,Vt=Be?U.get(Be).bytesPerElement:1,oi=Y.get(q).currentProgram.getUniforms();for(let Rt=0;Rt<Xr;Rt++)oi.setValue(w,"_gl_DrawID",Rt),st.render(ze[Rt]/Vt,Wr[Rt])}else if(D.isInstancedMesh)st.renderInstances($e,nt,D.count);else if(j.isInstancedBufferGeometry){let ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Wr=Math.min(j.instanceCount,ze);st.renderInstances($e,nt,Wr)}else st.render($e,nt)};function Qe(S,O,j){S.transparent===!0&&S.side===Zt&&S.forceSinglePass===!1?(S.side=wt,S.needsUpdate=!0,va(S,O,j),S.side=Tr,S.needsUpdate=!0,va(S,O,j),S.side=Zt):va(S,O,j)}this.compile=function(S,O,j=null){j===null&&(j=S),m=Te.get(j),m.init(O),y.push(m),j.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),S!==j&&S.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();let q=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let xe=D.material;if(xe)if(Array.isArray(xe))for(let Ue=0;Ue<xe.length;Ue++){let Fe=xe[Ue];Qe(Fe,j,D),q.add(Fe)}else Qe(xe,j,D),q.add(xe)}),y.pop(),m=null,q},this.compileAsync=function(S,O,j=null){let q=this.compile(S,O,j);return new Promise(D=>{function xe(){if(q.forEach(function(Ue){Y.get(Ue).currentProgram.isReady()&&q.delete(Ue)}),q.size===0){D(S);return}setTimeout(xe,10)}le.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ke=null;function cr(S){Ke&&Ke(S)}function Jt(){Gr.stop()}function vo(){Gr.start()}let Gr=new Tl;Gr.setAnimationLoop(cr),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(S){Ke=S,Z.setAnimationLoop(S),S===null?Gr.stop():Gr.start()},Z.addEventListener("sessionstart",Jt),Z.addEventListener("sessionend",vo),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,O,R),m=Te.get(S,y.length),m.init(O),y.push(m),te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(te),G=this.localClippingEnabled,me=Ne.init(this.clippingPlanes,G),_=ve.get(S,f.length),_.init(),f.push(_),Z.enabled===!0&&Z.isPresenting===!0){let xe=x.xr.getDepthSensingMesh();xe!==null&&gn(xe,O,-1/0,x.sortObjects)}gn(S,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(J,fe),Q=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Q&&Pe.addToRenderList(_,S),this.info.render.frame++,me===!0&&Ne.beginShadows();let j=m.state.shadowsArray;he.render(j,S,O),me===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=_.opaque,D=_.transmissive;if(m.setupLights(),O.isArrayCamera){let xe=O.cameras;if(D.length>0)for(let Ue=0,Fe=xe.length;Ue<Fe;Ue++){let Be=xe[Ue];yo(q,D,S,Be)}Q&&Pe.render(S);for(let Ue=0,Fe=xe.length;Ue<Fe;Ue++){let Be=xe[Ue];xo(_,S,Be,Be.viewport)}}else D.length>0&&yo(q,D,S,O),Q&&Pe.render(S),xo(_,S,O);R!==null&&(Ce.updateMultisampleRenderTarget(R),Ce.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(x,S,O),ye.resetDefaultState(),N=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],me===!0&&Ne.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function gn(S,O,j,q){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){q&&_e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(te);let xe=$.update(S),Ue=S.material;Ue.visible&&_.push(S,xe,Ue,j,_e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){let xe=$.update(S),Ue=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),_e.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),_e.copy(xe.boundingSphere.center)),_e.applyMatrix4(S.matrixWorld).applyMatrix4(te)),Array.isArray(Ue)){let Fe=xe.groups;for(let Be=0,We=Fe.length;Be<We;Be++){let Xe=Fe[Be],He=Ue[Xe.materialIndex];He&&He.visible&&_.push(S,xe,He,j,_e.z,Xe)}}else Ue.visible&&_.push(S,xe,Ue,j,_e.z,null)}}let D=S.children;for(let xe=0,Ue=D.length;xe<Ue;xe++)gn(D[xe],O,j,q)}function xo(S,O,j,q){let D=S.opaque,xe=S.transmissive,Ue=S.transparent;m.setupLightsView(j),me===!0&&Ne.setGlobalState(x.clippingPlanes,j),q&&ce.viewport(E.copy(q)),D.length>0&&_a(D,O,j),xe.length>0&&_a(xe,O,j),Ue.length>0&&_a(Ue,O,j),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function yo(S,O,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Rr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?di:pr,minFilter:dr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let D=m.state.transmissionRenderTarget[q.id],xe=q.viewport||E;D.setSize(xe.z,xe.w);let Ue=x.getRenderTarget();x.setRenderTarget(D),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Pe.render(j);let Fe=x.toneMapping;x.toneMapping=$t;let Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),me===!0&&Ne.setGlobalState(x.clippingPlanes,q),_a(S,j,q),Ce.updateMultisampleRenderTarget(D),Ce.updateRenderTargetMipmap(D),le.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Xe=0,He=O.length;Xe<He;Xe++){let $e=O[Xe],at=$e.object,nt=$e.geometry,ut=$e.material,st=$e.group;if(ut.side===Zt&&at.layers.test(q.layers)){let ze=ut.side;ut.side=wt,ut.needsUpdate=!0,Mo(at,j,q,nt,ut,st),ut.side=ze,ut.needsUpdate=!0,We=!0}}We===!0&&(Ce.updateMultisampleRenderTarget(D),Ce.updateRenderTargetMipmap(D))}x.setRenderTarget(Ue),x.setClearColor(B,W),Be!==void 0&&(q.viewport=Be),x.toneMapping=Fe}function _a(S,O,j){let q=O.isScene===!0?O.overrideMaterial:null;for(let D=0,xe=S.length;D<xe;D++){let Ue=S[D],Fe=Ue.object,Be=Ue.geometry,We=q===null?Ue.material:q,Xe=Ue.group;Fe.layers.test(j.layers)&&Mo(Fe,O,j,Be,We,Xe)}}function Mo(S,O,j,q,D,xe){S.onBeforeRender(x,O,j,q,D,xe),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(x,O,j,q,S,xe),D.transparent===!0&&D.side===Zt&&D.forceSinglePass===!1?(D.side=wt,D.needsUpdate=!0,x.renderBufferDirect(j,O,q,D,S,xe),D.side=Tr,D.needsUpdate=!0,x.renderBufferDirect(j,O,q,D,S,xe),D.side=Zt):x.renderBufferDirect(j,O,q,D,S,xe),S.onAfterRender(x,O,j,q,D,xe)}function va(S,O,j){O.isScene!==!0&&(O=Le);let q=Y.get(S),D=m.state.lights,xe=m.state.shadowsArray,Ue=D.state.version,Fe=K.getParameters(S,D.state,xe,O,j),Be=K.getProgramCacheKey(Fe),We=q.programs;q.environment=S.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(S.isMeshStandardMaterial?v:T).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",oe),We=new Map,q.programs=We);let Xe=We.get(Be);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===Ue)return Eo(S,Fe),Xe}else Fe.uniforms=K.getUniforms(S),S.onBeforeCompile(Fe,x),Xe=K.acquireProgram(Fe,Be),We.set(Be,Xe),q.uniforms=Fe.uniforms;let He=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Ne.uniform),Eo(S,Fe),q.needsLights=lc(S),q.lightsStateVersion=Ue,q.needsLights&&(He.ambientLightColor.value=D.state.ambient,He.lightProbe.value=D.state.probe,He.directionalLights.value=D.state.directional,He.directionalLightShadows.value=D.state.directionalShadow,He.spotLights.value=D.state.spot,He.spotLightShadows.value=D.state.spotShadow,He.rectAreaLights.value=D.state.rectArea,He.ltc_1.value=D.state.rectAreaLTC1,He.ltc_2.value=D.state.rectAreaLTC2,He.pointLights.value=D.state.point,He.pointLightShadows.value=D.state.pointShadow,He.hemisphereLights.value=D.state.hemi,He.directionalShadowMap.value=D.state.directionalShadowMap,He.directionalShadowMatrix.value=D.state.directionalShadowMatrix,He.spotShadowMap.value=D.state.spotShadowMap,He.spotLightMatrix.value=D.state.spotLightMatrix,He.spotLightMap.value=D.state.spotLightMap,He.pointShadowMap.value=D.state.pointShadowMap,He.pointShadowMatrix.value=D.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function So(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Za.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Eo(S,O){let j=Y.get(S);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function sc(S,O,j,q,D){O.isScene!==!0&&(O=Le),Ce.resetTextureUnits();let xe=O.fog,Ue=q.isMeshStandardMaterial?O.environment:null,Fe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gi,Be=(q.isMeshStandardMaterial?v:T).get(q.envMap||Ue),We=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!j.morphAttributes.position,$e=!!j.morphAttributes.normal,at=!!j.morphAttributes.color,nt=$t;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(nt=x.toneMapping);let ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=ut!==void 0?ut.length:0,ze=Y.get(q),Wr=m.state.lights;if(me===!0&&(G===!0||S!==M)){let Tt=S===M&&q.id===N;Ne.setState(q,S,Tt)}let Xr=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Wr.state.version||ze.outputColorSpace!==Fe||D.isBatchedMesh&&ze.batching===!1||!D.isBatchedMesh&&ze.batching===!0||D.isBatchedMesh&&ze.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ze.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ze.instancing===!1||!D.isInstancedMesh&&ze.instancing===!0||D.isSkinnedMesh&&ze.skinning===!1||!D.isSkinnedMesh&&ze.skinning===!0||D.isInstancedMesh&&ze.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ze.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ze.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ze.instancingMorph===!1&&D.morphTexture!==null||ze.envMap!==Be||q.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ne.numPlanes||ze.numIntersection!==Ne.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==Xe||ze.morphTargets!==He||ze.morphNormals!==$e||ze.morphColors!==at||ze.toneMapping!==nt||ze.morphTargetsCount!==st)&&(Xr=!0):(Xr=!0,ze.__version=q.version);let Vt=ze.currentProgram;Xr===!0&&(Vt=va(q,O,D));let oi=!1,Rt=!1,Wi=!1,rt=Vt.getUniforms(),Kt=ze.uniforms;if(ce.useProgram(Vt.program)&&(oi=!0,Rt=!0,Wi=!0),q.id!==N&&(N=q.id,Rt=!0),oi||M!==S){ce.buffers.depth.getReversed()?(ge.copy(S.projectionMatrix),Qc(ge),eu(ge),rt.setValue(w,"projectionMatrix",ge)):rt.setValue(w,"projectionMatrix",S.projectionMatrix),rt.setValue(w,"viewMatrix",S.matrixWorldInverse);let Tt=rt.map.cameraPosition;Tt!==void 0&&Tt.setValue(w,ee.setFromMatrixPosition(S.matrixWorld)),Ae.logarithmicDepthBuffer&&rt.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&rt.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Rt=!0,Wi=!0)}if(D.isSkinnedMesh){rt.setOptional(w,D,"bindMatrix"),rt.setOptional(w,D,"bindMatrixInverse");let Tt=D.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),rt.setValue(w,"boneTexture",Tt.boneTexture,Ce))}D.isBatchedMesh&&(rt.setOptional(w,D,"batchingTexture"),rt.setValue(w,"batchingTexture",D._matricesTexture,Ce),rt.setOptional(w,D,"batchingIdTexture"),rt.setValue(w,"batchingIdTexture",D._indirectTexture,Ce),rt.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&rt.setValue(w,"batchingColorTexture",D._colorsTexture,Ce));let Xi=j.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&ie.update(D,j,Vt),(Rt||ze.receiveShadow!==D.receiveShadow)&&(ze.receiveShadow=D.receiveShadow,rt.setValue(w,"receiveShadow",D.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Kt.envMap.value=Be,Kt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Kt.envMapIntensity.value=O.environmentIntensity),Rt&&(rt.setValue(w,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&oc(Kt,Wi),xe&&q.fog===!0&&Se.refreshFogUniforms(Kt,xe),Se.refreshMaterialUniforms(Kt,q,de,H,m.state.transmissionRenderTarget[S.id]),Za.upload(w,So(ze),Kt,Ce)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Za.upload(w,So(ze),Kt,Ce),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&rt.setValue(w,"center",D.center),rt.setValue(w,"modelViewMatrix",D.modelViewMatrix),rt.setValue(w,"normalMatrix",D.normalMatrix),rt.setValue(w,"modelMatrix",D.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Tt=q.uniformsGroups;for(let ji=0,br=Tt.length;ji<br;ji++){let bo=Tt[ji];ue.update(bo,Vt),ue.bind(bo,Vt)}}return Vt}function oc(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function lc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,O,j){Y.get(S.texture).__webglTexture=O,Y.get(S.depthTexture).__webglTexture=j;let q=Y.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){let j=Y.get(S);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,j=0){R=S,F=O,A=j;let q=!0,D=null,xe=!1,Ue=!1;if(S){let Fe=Y.get(S);if(Fe.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(w.FRAMEBUFFER,null),q=!1;else if(Fe.__webglFramebuffer===void 0)Ce.setupRenderTarget(S);else if(Fe.__hasExternalTextures)Ce.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xe=S.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&Y.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(S)}}let Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ue=!0);let We=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(We[O])?D=We[O][j]:D=We[O],xe=!0):S.samples>0&&Ce.useMultisampledRTT(S)===!1?D=Y.get(S).__webglMultisampledFramebuffer:Array.isArray(We)?D=We[j]:D=We,E.copy(S.viewport),C.copy(S.scissor),P=S.scissorTest}else E.copy(Me).multiplyScalar(de).floor(),C.copy(De).multiplyScalar(de).floor(),P=Ie;if(ce.bindFramebuffer(w.FRAMEBUFFER,D)&&q&&ce.drawBuffers(S,D),ce.viewport(E),ce.scissor(C),ce.setScissorTest(P),xe){let Fe=Y.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,j)}else if(Ue){let Fe=Y.get(S.texture),Be=O||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,Be)}N=-1},this.readRenderTargetPixels=function(S,O,j,q,D,xe,Ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){ce.bindFramebuffer(w.FRAMEBUFFER,Fe);try{let Be=S.texture,We=Be.format,Xe=Be.type;if(!Ae.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-q&&j>=0&&j<=S.height-D&&w.readPixels(O,j,q,D,be.convert(We),be.convert(Xe),xe)}finally{let Be=R!==null?Y.get(R).__webglFramebuffer:null;ce.bindFramebuffer(w.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(S,O,j,q,D,xe,Ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){let Be=S.texture,We=Be.format,Xe=Be.type;if(!Ae.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-q&&j>=0&&j<=S.height-D){ce.bindFramebuffer(w.FRAMEBUFFER,Fe);let He=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.bufferData(w.PIXEL_PACK_BUFFER,xe.byteLength,w.STREAM_READ),w.readPixels(O,j,q,D,be.convert(We),be.convert(Xe),0);let $e=R!==null?Y.get(R).__webglFramebuffer:null;ce.bindFramebuffer(w.FRAMEBUFFER,$e);let at=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await $c(w,at,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,xe),w.deleteBuffer(He),w.deleteSync(at),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,j=0){S.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);let q=Math.pow(2,-j),D=Math.floor(S.image.width*q),xe=Math.floor(S.image.height*q),Ue=O!==null?O.x:0,Fe=O!==null?O.y:0;Ce.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,j,0,0,Ue,Fe,D,xe),ce.unbindTexture()},this.copyTextureToTexture=function(S,O,j=null,q=null,D=0){S.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],O=arguments[2],D=arguments[3]||0,j=null);let xe,Ue,Fe,Be,We,Xe,He,$e,at,nt=S.isCompressedTexture?S.mipmaps[D]:S.image;j!==null?(xe=j.max.x-j.min.x,Ue=j.max.y-j.min.y,Fe=j.isBox3?j.max.z-j.min.z:1,Be=j.min.x,We=j.min.y,Xe=j.isBox3?j.min.z:0):(xe=nt.width,Ue=nt.height,Fe=nt.depth||1,Be=0,We=0,Xe=0),q!==null?(He=q.x,$e=q.y,at=q.z):(He=0,$e=0,at=0);let ut=be.convert(O.format),st=be.convert(O.type),ze;O.isData3DTexture?(Ce.setTexture3D(O,0),ze=w.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ce.setTexture2DArray(O,0),ze=w.TEXTURE_2D_ARRAY):(Ce.setTexture2D(O,0),ze=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);let Wr=w.getParameter(w.UNPACK_ROW_LENGTH),Xr=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Vt=w.getParameter(w.UNPACK_SKIP_PIXELS),oi=w.getParameter(w.UNPACK_SKIP_ROWS),Rt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,nt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,nt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Be),w.pixelStorei(w.UNPACK_SKIP_ROWS,We),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Xe);let Wi=S.isDataArrayTexture||S.isData3DTexture,rt=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Kt=Y.get(S),Xi=Y.get(O),Tt=Y.get(Kt.__renderTarget),ji=Y.get(Xi.__renderTarget);ce.bindFramebuffer(w.READ_FRAMEBUFFER,Tt.__webglFramebuffer),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let br=0;br<Fe;br++)Wi&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,D,Xe+br),S.isDepthTexture?(rt&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Y.get(O).__webglTexture,D,at+br),w.blitFramebuffer(Be,We,xe,Ue,He,$e,xe,Ue,w.DEPTH_BUFFER_BIT,w.NEAREST)):rt?w.copyTexSubImage3D(ze,D,He,$e,at+br,Be,We,xe,Ue):w.copyTexSubImage2D(ze,D,He,$e,at+br,Be,We,xe,Ue);ce.bindFramebuffer(w.READ_FRAMEBUFFER,null),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else rt?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(ze,D,He,$e,at,xe,Ue,Fe,ut,st,nt.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(ze,D,He,$e,at,xe,Ue,Fe,ut,nt.data):w.texSubImage3D(ze,D,He,$e,at,xe,Ue,Fe,ut,st,nt):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,D,He,$e,xe,Ue,ut,st,nt.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,D,He,$e,nt.width,nt.height,ut,nt.data):w.texSubImage2D(w.TEXTURE_2D,D,He,$e,xe,Ue,ut,st,nt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Wr),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xr),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Vt),w.pixelStorei(w.UNPACK_SKIP_ROWS,oi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Rt),D===0&&O.generateMipmaps&&w.generateMipmap(ze),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,O,j=null,q=null,D=0){return S.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,q=arguments[1]||null,S=arguments[2],O=arguments[3],D=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,j,q,D)},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&Ce.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ce.setTextureCube(S,0):S.isData3DTexture?Ce.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ce.setTexture2DArray(S,0):Ce.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){F=0,A=0,R=null,ce.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}},cg=class Kh{constructor(t,r=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(t),this.near=r,this.far=i}clone(){return new Kh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qa=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ug=class extends Ot{constructor(e=null,t=1,r=1,i,a,n,s,o,l=Ct,h=Ct,c,u){super(null,n,s,o,l,h,i,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rh=class extends Bt{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fi=new it,ih=new it,en=[],ah=new Jr,dg=new it,aa=new ft,na=new $i,sa=class extends ft{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rh(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<r;i++)this.setMatrixAt(i,dg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Fi),ah.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Fi),na.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let r=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=r.length+1,n=e*a+1;for(let s=0;s<r.length;s++)r[s]=i[n+s]}raycast(e,t){let r=this.matrixWorld,i=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(r),e.ray.intersectsSphere(na)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Fi),ih.multiplyMatrices(r,Fi),aa.matrixWorld=ih,aa.raycast(e,en);for(let n=0,s=en.length;n<s;n++){let o=en[n];o.instanceId=a,o.object=this,t.push(o)}en.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let r=t.morphTargetInfluences,i=r.length+1;this.morphTexture===null&&(this.morphTexture=new ug(new Float32Array(i*this.count),i,this.count,In,Qt));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<r.length;l++)n+=r[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=i*e;a[o]=s,a.set(r,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Br=class extends Ot{constructor(e,t,r,i,a,n,s,o,l){super(e,t,r,i,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ir=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),i=0,a=r.length,n;t?n=t:n=e*r[a-1];let s=0,o=a-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-n,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===n)return i/(a-1);let h=r[i],c=r[i+1]-h,u=(n-h)/c;return(i+u)/(a-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),n=this.getPoint(i),s=t||(a.isVector2?new Ee:new I);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new I,i=[],a=[],n=[],s=new I,o=new it;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new I)}a[0]=new I,n[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),u<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],s),n[0].crossVectors(i[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(i[d-1],i[d]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(xt(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,p))}n[d].crossVectors(i[d],a[d])}if(t===!0){let d=Math.acos(xt(a[0].dot(a[e]),-1,1));d/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(i[p],d*p)),n[p].crossVectors(i[p],a[p])}return{tangents:i,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qs=class extends ir{constructor(e=0,t=0,r=1,i=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Ee){let r=t,i=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(n?a=0:a=i),this.aClockwise===!0&&!n&&(a===i?a=-i:a=a-i);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pg=class extends qs{constructor(e,t,r,i,a,n){super(e,t,r,r,i,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Ys(){let e=0,t=0,r=0,i=0;function a(n,s,o,l){e=n,t=o,r=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,p*=c,a(s,o,d,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+r*s+i*o}}}var tn=new I,Js=new Ys,Ks=new Ys,Zs=new Ys,fg=class extends ir{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new I){let r=t,i=this.points,a=i.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=i[(s-1)%a]:(tn.subVectors(i[0],i[1]).add(i[0]),l=tn);let c=i[s%a],u=i[(s+1)%a];if(this.closed||s+2<a?h=i[(s+2)%a]:(tn.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=tn),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),Js.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,_),Ks.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,_),Zs.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,_)}else this.curveType==="catmullrom"&&(Js.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Ks.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Zs.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return r.set(Js.calc(o),Ks.calc(o),Zs.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nh(e,t,r,i,a){let n=(i-t)*.5,s=(a-r)*.5,o=e*e,l=e*o;return(2*r-2*i+n+s)*l+(-3*r+3*i-2*n-s)*o+n*e+r}function mg(e,t){let r=1-e;return r*r*t}function gg(e,t){return 2*(1-e)*e*t}function _g(e,t){return e*e*t}function oa(e,t,r,i){return mg(e,t)+gg(e,r)+_g(e,i)}function vg(e,t){let r=1-e;return r*r*r*t}function xg(e,t){let r=1-e;return 3*r*r*e*t}function yg(e,t){return 3*(1-e)*e*e*t}function Mg(e,t){return e*e*e*t}function la(e,t,r,i,a){return vg(e,t)+xg(e,r)+yg(e,i)+Mg(e,a)}var sh=class extends ir{constructor(e=new Ee,t=new Ee,r=new Ee,i=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new Ee){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(la(e,i.x,a.x,n.x,s.x),la(e,i.y,a.y,n.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sg=class extends ir{constructor(e=new I,t=new I,r=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new I){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(la(e,i.x,a.x,n.x,s.x),la(e,i.y,a.y,n.y,s.y),la(e,i.z,a.z,n.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oh=class extends ir{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eg=class extends ir{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends ir{constructor(e=new Ee,t=new Ee,r=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ee){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(oa(e,i.x,a.x,n.x),oa(e,i.y,a.y,n.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bg=class extends ir{constructor(e=new I,t=new I,r=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new I){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(oa(e,i.x,a.x,n.x),oa(e,i.y,a.y,n.y),oa(e,i.z,a.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hh=class extends ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let r=t,i=this.points,a=(i.length-1)*e,n=Math.floor(a),s=a-n,o=i[n===0?n:n-1],l=i[n],h=i[n>i.length-2?i.length-1:n+1],c=i[n>i.length-3?i.length-1:n+2];return r.set(nh(s,o.x,l.x,h.x,c.x),nh(s,o.y,l.y,h.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new Ee().fromArray(i))}return this}},$s=Object.freeze({__proto__:null,ArcCurve:pg,CatmullRomCurve3:fg,CubicBezierCurve:sh,CubicBezierCurve3:Sg,EllipseCurve:qs,LineCurve:oh,LineCurve3:Eg,QuadraticBezierCurve:lh,QuadraticBezierCurve3:bg,SplineCurve:hh}),Tg=class extends ir{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $s[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),a=0;for(;a<i.length;){if(i[a]>=r){let n=i[a]-r,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,a=this.curves;i<a.length;i++){let n=a[i],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];r&&r.equals(h)||(t.push(h),r=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new $s[i.type]().fromJSON(i))}return this}},zr=class extends Tg{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new oh(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let a=new lh(this.currentPoint.clone(),new Ee(e,t),new Ee(r,i));return this.curves.push(a),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,a,n){let s=new sh(this.currentPoint.clone(),new Ee(e,t),new Ee(r,i),new Ee(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new hh(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,a,n),this}absarc(e,t,r,i,a,n){return this.absellipse(e,t,r,r,i,a,n),this}ellipse(e,t,r,i,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,r,i,a,n,s,o),this}absellipse(e,t,r,i,a,n,s,o){let l=new qs(e,t,r,i,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wg=class Zh extends Ut{constructor(t=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],r=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:r,phiStart:i,phiLength:a},r=Math.floor(r),a=xt(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/r,u=new I,d=new Ee,p=new I,g=new I,_=new I,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=r;y++){let x=i+y*c*a,b=Math.sin(x),F=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*b,u.y=t[A].y,u.z=t[A].x*F,s.push(u.x,u.y,u.z),d.x=y/r,d.y=A/(t.length-1),o.push(d.x,d.y);let R=l[3*A+0]*b,N=l[3*A+1],M=l[3*A+0]*F;h.push(R,N,M)}}for(let y=0;y<r;y++)for(let x=0;x<t.length-1;x++){let b=x+y*t.length,F=b,A=b+t.length,R=b+t.length+1,N=b+1;n.push(F,A,N),n.push(R,N,A)}this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zh(t.points,t.segments,t.phiStart,t.phiLength)}},Ag=class $h extends Ut{constructor(t=1,r=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:r,thetaStart:i,thetaLength:a},r=Math.max(3,r);let n=[],s=[],o=[],l=[],h=new I,c=new Ee;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=r;u++,d+=3){let p=i+u/r*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[d]/t+1)/2,c.y=(s[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=r;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $h(t.radius,t.segments,t.thetaStart,t.thetaLength)}},rn=class Qh extends Ut{constructor(t=1,r=1,i=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],p=[],g=0,_=[],m=i/2,f=0;y(),s===!1&&(t>0&&x(!0),r>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function y(){let b=new I,F=new I,A=0,R=(r-t)/i;for(let N=0;N<=n;N++){let M=[],E=N/n,C=E*(r-t)+t;for(let P=0;P<=a;P++){let B=P/a,W=B*l+o,V=Math.sin(W),H=Math.cos(W);F.x=C*V,F.y=-E*i+m,F.z=C*H,u.push(F.x,F.y,F.z),b.set(V,R,H).normalize(),d.push(b.x,b.y,b.z),p.push(B,1-E),M.push(g++)}_.push(M)}for(let N=0;N<a;N++)for(let M=0;M<n;M++){let E=_[M][N],C=_[M+1][N],P=_[M+1][N+1],B=_[M][N+1];(t>0||M!==0)&&(c.push(E,C,B),A+=3),(r>0||M!==n-1)&&(c.push(C,P,B),A+=3)}h.addGroup(f,A,0),f+=A}function x(b){let F=g,A=new Ee,R=new I,N=0,M=b===!0?t:r,E=b===!0?1:-1;for(let P=1;P<=a;P++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;let C=g;for(let P=0;P<=a;P++){let B=P/a*l+o,W=Math.cos(B),V=Math.sin(B);R.x=M*V,R.y=m*E,R.z=M*W,u.push(R.x,R.y,R.z),d.push(0,E,0),A.x=W*.5+.5,A.y=V*.5*E+.5,p.push(A.x,A.y),g++}for(let P=0;P<a;P++){let B=F+P,W=C+P;b===!0?c.push(W,W+1,B):c.push(W+1,W,B),N+=3}h.addGroup(f,N,b===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rg=class ec extends rn{constructor(t=1,r=1,i=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,r,i,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:r,radialSegments:i,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new ec(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kr=class extends zr{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new zr().fromJSON(i))}return this}},Cg={triangulate:function(e,t,r=2){let i=t&&t.length,a=i?t[0]*r:e.length,n=ch(e,0,a,r,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,p;if(i&&(n=Ng(e,t,n,r)),e.length>80*r){o=h=e[0],l=c=e[1];for(let g=r;g<a;g+=r)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return ha(n,s,r,o,l,p,0),s}};function ch(e,t,r,i,a){let n,s;if(a===Xg(e,t,r,i)>0)for(n=t;n<r;n+=i)s=ph(n,e[n],e[n+1],s);else for(n=r-i;n>=t;n-=i)s=ph(n,e[n],e[n+1],s);return s&&an(s,s.next)&&(ua(s),s=s.next),s}function si(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(an(r,r.next)||lt(r.prev,r,r.next)===0)){if(ua(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function ha(e,t,r,i,a,n,s){if(!e)return;!s&&n&&zg(e,i,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?Lg(e,i,a,n):Pg(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(h.i/r|0),ua(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=Ug(si(e),t,r),ha(e,t,r,i,a,n,2)):s===2&&Ig(e,t,r,i,a,n):ha(si(e),t,r,i,a,n,1);break}}}function Pg(e){let t=e.prev,r=e,i=e.next;if(lt(t,r,i)>=0)return!1;let a=t.x,n=r.x,s=i.x,o=t.y,l=r.y,h=i.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,p=o>l?o>h?o:h:l>h?l:h,g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&Bi(a,o,n,l,s,h,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lg(e,t,r,i){let a=e.prev,n=e,s=e.next;if(lt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,_=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,f=Qs(p,g,t,r,i),y=Qs(_,m,t,r,i),x=e.prevZ,b=e.nextZ;for(;x&&x.z>=f&&b&&b.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&Bi(o,c,l,u,h,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==a&&b!==s&&Bi(o,c,l,u,h,d,b.x,b.y)&&lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&Bi(o,c,l,u,h,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==a&&b!==s&&Bi(o,c,l,u,h,d,b.x,b.y)&&lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ug(e,t,r){let i=e;do{let a=i.prev,n=i.next.next;!an(a,n)&&uh(a,i,i.next,n)&&ca(a,n)&&ca(n,a)&&(t.push(a.i/r|0),t.push(i.i/r|0),t.push(n.i/r|0),ua(i),ua(i.next),i=e=n),i=i.next}while(i!==e);return si(i)}function Ig(e,t,r,i,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Vg(s,o)){let l=dh(s,o);s=si(s,s.next),l=si(l,l.next),ha(s,t,r,i,a,n,0),ha(l,t,r,i,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Ng(e,t,r,i){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*i,l=n<s-1?t[n+1]*i:e.length,h=ch(e,o,l,i,!1),h===h.next&&(h.steiner=!0),a.push(Hg(h));for(a.sort(Dg),n=0;n<a.length;n++)r=Og(a[n],r);return r}function Dg(e,t){return e.x-t.x}function Og(e,t){let r=Fg(e,t);if(!r)return t;let i=dh(r,e);return si(i,i.next),si(r,r.next)}function Fg(e,t){let r=t,i=-1/0,a,n=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let d=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=n&&d>i&&(i=d,a=r.x<r.next.x?r:r.next,d===n))return a}r=r.next}while(r!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;r=a;do n>=r.x&&r.x>=l&&n!==r.x&&Bi(s<h?n:i,s,l,h,s<h?i:n,s,r.x,r.y)&&(u=Math.abs(s-r.y)/(n-r.x),ca(r,e)&&(u<c||u===c&&(r.x>a.x||r.x===a.x&&Bg(a,r)))&&(a=r,c=u)),r=r.next;while(r!==o);return a}function Bg(e,t){return lt(e.prev,e,t.prev)<0&&lt(t.next,e,e.next)<0}function zg(e,t,r,i){let a=e;do a.z===0&&(a.z=Qs(a.x,a.y,t,r,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,kg(a)}function kg(e){let t,r,i,a,n,s,o,l,h=1;do{for(r=e,e=null,n=null,s=0;r;){for(s++,i=r,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(a=r,r=r.nextZ,o--):(a=i,i=i.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=i}n.nextZ=null,h*=2}while(s>1);return e}function Qs(e,t,r,i,a){return e=(e-r)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Hg(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function Bi(e,t,r,i,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(n-o)>=(a-s)*(i-o)}function Vg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Gg(e,t)&&(ca(e,t)&&ca(t,e)&&Wg(e,t)&&(lt(e.prev,e,t.prev)||lt(e,t.prev,t))||an(e,t)&&lt(e.prev,e,e.next)>0&&lt(t.prev,t,t.next)>0)}function lt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function an(e,t){return e.x===t.x&&e.y===t.y}function uh(e,t,r,i){let a=sn(lt(e,t,r)),n=sn(lt(e,t,i)),s=sn(lt(r,i,e)),o=sn(lt(r,i,t));return!!(a!==n&&s!==o||a===0&&nn(e,r,t)||n===0&&nn(e,i,t)||s===0&&nn(r,e,i)||o===0&&nn(r,t,i))}function nn(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function sn(e){return e>0?1:e<0?-1:0}function Gg(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&uh(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function ca(e,t){return lt(e.prev,e,e.next)<0?lt(e,t,e.next)>=0&&lt(e,e.prev,t)>=0:lt(e,t,e.prev)<0||lt(e,e.next,t)<0}function Wg(e,t){let r=e,i=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&a<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function dh(e,t){let r=new eo(e.i,e.x,e.y),i=new eo(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=a,a.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function ph(e,t,r,i){let a=new eo(e,t,r);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function ua(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function eo(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xg(e,t,r,i){let a=0;for(let n=t,s=r-i;n<r;n+=i)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var zi=class tc{static area(t){let r=t.length,i=0;for(let a=r-1,n=0;n<r;a=n++)i+=t[a].x*t[n].y-t[n].x*t[a].y;return i*.5}static isClockWise(t){return tc.area(t)<0}static triangulateShape(t,r){let i=[],a=[],n=[];fh(t),mh(i,t);let s=t.length;r.forEach(fh);for(let l=0;l<r.length;l++)a.push(s),s+=r[l].length,mh(i,r[l]);let o=Cg.triangulate(i,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function fh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function mh(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var to=class rc extends Ut{constructor(t=new kr([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(n,2)),this.computeVertexNormals();function s(o){let l=[],h=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,u=r.depth!==void 0?r.depth:1,d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,p=r.bevelThickness!==void 0?r.bevelThickness:.2,g=r.bevelSize!==void 0?r.bevelSize:p-.1,_=r.bevelOffset!==void 0?r.bevelOffset:0,m=r.bevelSegments!==void 0?r.bevelSegments:3,f=r.extrudePath,y=r.UVGenerator!==void 0?r.UVGenerator:jg,x,b=!1,F,A,R,N;f&&(x=f.getSpacedPoints(c),b=!0,d=!1,F=f.computeFrenetFrames(c,!1),A=new I,R=new I,N=new I),d||(m=0,p=0,g=0,_=0);let M=o.extractPoints(h),E=M.shape,C=M.holes;if(!zi.isClockWise(E)){E=E.reverse();for(let Q=0,re=C.length;Q<re;Q++){let w=C[Q];zi.isClockWise(w)&&(C[Q]=w.reverse())}}let P=zi.triangulateShape(E,C),B=E;for(let Q=0,re=C.length;Q<re;Q++){let w=C[Q];E=E.concat(w)}function W(Q,re,w){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,w)}let V=E.length,H=P.length;function de(Q,re,w){let we,le,Ae,ce=Q.x-re.x,Oe=Q.y-re.y,Y=w.x-Q.x,Ce=w.y-Q.y,T=ce*ce+Oe*Oe,v=ce*Ce-Oe*Y;if(Math.abs(v)>Number.EPSILON){let U=Math.sqrt(T),z=Math.sqrt(Y*Y+Ce*Ce),$=re.x-Oe/U,K=re.y+ce/U,Se=w.x-Ce/z,ve=w.y+Y/z,Te=((Se-$)*Ce-(ve-K)*Y)/(ce*Ce-Oe*Y);we=$+ce*Te-Q.x,le=K+Oe*Te-Q.y;let Ne=we*we+le*le;if(Ne<=2)return new Ee(we,le);Ae=Math.sqrt(Ne/2)}else{let U=!1;ce>Number.EPSILON?Y>Number.EPSILON&&(U=!0):ce<-Number.EPSILON?Y<-Number.EPSILON&&(U=!0):Math.sign(Oe)===Math.sign(Ce)&&(U=!0),U?(we=-Oe,le=ce,Ae=Math.sqrt(T)):(we=ce,le=Oe,Ae=Math.sqrt(T/2))}return new Ee(we/Ae,le/Ae)}let J=[];for(let Q=0,re=B.length,w=re-1,we=Q+1;Q<re;Q++,w++,we++)w===re&&(w=0),we===re&&(we=0),J[Q]=de(B[Q],B[w],B[we]);let fe=[],Me,De=J.concat();for(let Q=0,re=C.length;Q<re;Q++){let w=C[Q];Me=[];for(let we=0,le=w.length,Ae=le-1,ce=we+1;we<le;we++,Ae++,ce++)Ae===le&&(Ae=0),ce===le&&(ce=0),Me[we]=de(w[we],w[Ae],w[ce]);fe.push(Me),De=De.concat(Me)}for(let Q=0;Q<m;Q++){let re=Q/m,w=p*Math.cos(re*Math.PI/2),we=g*Math.sin(re*Math.PI/2)+_;for(let le=0,Ae=B.length;le<Ae;le++){let ce=W(B[le],J[le],we);ge(ce.x,ce.y,-w)}for(let le=0,Ae=C.length;le<Ae;le++){let ce=C[le];Me=fe[le];for(let Oe=0,Y=ce.length;Oe<Y;Oe++){let Ce=W(ce[Oe],Me[Oe],we);ge(Ce.x,Ce.y,-w)}}}let Ie=g+_;for(let Q=0;Q<V;Q++){let re=d?W(E[Q],De[Q],Ie):E[Q];b?(R.copy(F.normals[0]).multiplyScalar(re.x),A.copy(F.binormals[0]).multiplyScalar(re.y),N.copy(x[0]).add(R).add(A),ge(N.x,N.y,N.z)):ge(re.x,re.y,0)}for(let Q=1;Q<=c;Q++)for(let re=0;re<V;re++){let w=d?W(E[re],De[re],Ie):E[re];b?(R.copy(F.normals[Q]).multiplyScalar(w.x),A.copy(F.binormals[Q]).multiplyScalar(w.y),N.copy(x[Q]).add(R).add(A),ge(N.x,N.y,N.z)):ge(w.x,w.y,u/c*Q)}for(let Q=m-1;Q>=0;Q--){let re=Q/m,w=p*Math.cos(re*Math.PI/2),we=g*Math.sin(re*Math.PI/2)+_;for(let le=0,Ae=B.length;le<Ae;le++){let ce=W(B[le],J[le],we);ge(ce.x,ce.y,u+w)}for(let le=0,Ae=C.length;le<Ae;le++){let ce=C[le];Me=fe[le];for(let Oe=0,Y=ce.length;Oe<Y;Oe++){let Ce=W(ce[Oe],Me[Oe],we);b?ge(Ce.x,Ce.y+x[c-1].y,x[c-1].x+w):ge(Ce.x,Ce.y,u+w)}}}k(),me();function k(){let Q=a.length/3;if(d){let re=0,w=V*re;for(let we=0;we<H;we++){let le=P[we];te(le[2]+w,le[1]+w,le[0]+w)}re=c+m*2,w=V*re;for(let we=0;we<H;we++){let le=P[we];te(le[0]+w,le[1]+w,le[2]+w)}}else{for(let re=0;re<H;re++){let w=P[re];te(w[2],w[1],w[0])}for(let re=0;re<H;re++){let w=P[re];te(w[0]+V*c,w[1]+V*c,w[2]+V*c)}}i.addGroup(Q,a.length/3-Q,0)}function me(){let Q=a.length/3,re=0;G(B,re),re+=B.length;for(let w=0,we=C.length;w<we;w++){let le=C[w];G(le,re),re+=le.length}i.addGroup(Q,a.length/3-Q,1)}function G(Q,re){let w=Q.length;for(;--w>=0;){let we=w,le=w-1;le<0&&(le=Q.length-1);for(let Ae=0,ce=c+m*2;Ae<ce;Ae++){let Oe=V*Ae,Y=V*(Ae+1),Ce=re+we+Oe,T=re+le+Oe,v=re+le+Y,U=re+we+Y;ee(Ce,T,v,U)}}}function ge(Q,re,w){l.push(Q),l.push(re),l.push(w)}function te(Q,re,w){_e(Q),_e(re),_e(w);let we=a.length/3,le=y.generateTopUV(i,a,we-3,we-2,we-1);Le(le[0]),Le(le[1]),Le(le[2])}function ee(Q,re,w,we){_e(Q),_e(re),_e(we),_e(re),_e(w),_e(we);let le=a.length/3,Ae=y.generateSideWallUV(i,a,le-6,le-3,le-2,le-1);Le(Ae[0]),Le(Ae[1]),Le(Ae[3]),Le(Ae[1]),Le(Ae[2]),Le(Ae[3])}function _e(Q){a.push(l[Q*3+0]),a.push(l[Q*3+1]),a.push(l[Q*3+2])}function Le(Q){n.push(Q.x),n.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return qg(r,i,t)}static fromJSON(t,r){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=r[t.shapes[n]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new $s[a.type]().fromJSON(a)),new rc(i,t.options)}},jg={generateTopUV:function(e,t,r,i,a){let n=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],h=t[a*3],c=t[a*3+1];return[new Ee(n,s),new Ee(o,l),new Ee(h,c)]},generateSideWallUV:function(e,t,r,i,a,n){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],h=t[i*3],c=t[i*3+1],u=t[i*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],_=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new Ee(s,1-l),new Ee(h,1-u),new Ee(d,1-g),new Ee(_,1-f)]:[new Ee(o,1-l),new Ee(c,1-u),new Ee(p,1-g),new Ee(m,1-f)]}};function qg(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let n=e[i];r.shapes.push(n.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var ro=class ic extends Ut{constructor(t=new kr([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let i=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(n,3)),this.setAttribute("uv",new tt(s,2));function h(c){let u=a.length/3,d=c.extractPoints(r),p=d.shape,g=d.holes;zi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];zi.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=zi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];a.push(y.x,y.y,0),n.push(0,0,1),s.push(y.x,y.y)}for(let m=0,f=_.length;m<f;m++){let y=_[m],x=y[0]+u,b=y[1]+u,F=y[2]+u;i.push(x,b,F),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return Yg(r,t)}static fromJSON(t,r){let i=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=r[t.shapes[a]];i.push(s)}return new ic(i,t.curveSegments)}};function Yg(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,i=e.length;r<i;r++){let a=e[r];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var gh=class ac extends Ut{constructor(t=1,r=32,i=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:r,heightSegments:i,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),h=0,c=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let y=[],x=f/i,b=0;f===0&&s===0?b=.5/r:f===i&&l===Math.PI&&(b=-.5/r);for(let F=0;F<=r;F++){let A=F/r;u.x=-t*Math.cos(a+A*n)*Math.sin(s+x*o),u.y=t*Math.cos(s+x*o),u.z=t*Math.sin(a+A*n)*Math.sin(s+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+b,1-x),y.push(h++)}c.push(y)}for(let f=0;f<i;f++)for(let y=0;y<r;y++){let x=c[f][y+1],b=c[f][y],F=c[f+1][y],A=c[f+1][y+1];(f!==0||s>0)&&p.push(x,b,A),(f!==i-1||l<Math.PI)&&p.push(b,F,A)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Jg=class nc extends Ut{constructor(t=1,r=.4,i=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:r,radialSegments:i,tubularSegments:a,arc:n},i=Math.floor(i),a=Math.floor(a);let s=[],o=[],l=[],h=[],c=new I,u=new I,d=new I;for(let p=0;p<=i;p++)for(let g=0;g<=a;g++){let _=g/a*n,m=p/i*Math.PI*2;u.x=(t+r*Math.cos(m))*Math.cos(_),u.y=(t+r*Math.cos(m))*Math.sin(_),u.z=r*Math.sin(m),o.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/a),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=a;g++){let _=(a+1)*p+g-1,m=(a+1)*(p-1)+g-1,f=(a+1)*(p-1)+g,y=(a+1)*p+g;s.push(_,m,y),s.push(m,f,y)}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Nt=class extends ta{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kg=class extends Nt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function on(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Zg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var ln=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],a=t[r-1];r:{e:{let n;t:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=i,i=t[++r],e<i)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=t[--r-1],e>=a)break e}n=r,r=0;break t}break r}for(;r<n;){let s=r+n>>>1;e<t[s]?n=s:r=s+1}if(i=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i;for(let n=0;n!==i;++n)t[n]=r[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$g=class extends ln{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ho,endingEnd:Ho}}intervalChanged_(e,t,r){let i=this.parameterPositions,a=e-2,n=e+1,s=i[a],o=i[n];if(s===void 0)switch(this.getSettings_().endingStart){case Vo:a=e,s=2*t-r;break;case Go:a=i.length-2,s=t+i[a]-i[a+1];break;default:a=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case Vo:n=e,o=2*r-t;break;case Go:n=1,o=r+i[1]-i[0];break;default:n=e-1,o=t}let l=(r-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(r-t)/(i-t),g=p*p,_=g*p,m=-u*_+2*u*g-u*p,f=(1+u)*_+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*_+(1.5+d)*g+.5*p,x=d*_-d*g;for(let b=0;b!==s;++b)a[b]=m*n[h+b]+f*n[l+b]+y*n[o+b]+x*n[c+b];return a}},Qg=class extends ln{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(r-t)/(i-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},e0=class extends ln{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Mr=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=on(t,this.TimeBufferType),this.values=on(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:on(e.times,Array),values:on(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new e0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $g(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case cs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return cs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,a=0,n=i-1;for(;a!==i&&r[a]<e;)++a;for(;n!==-1&&r[n]>t;)--n;if(++n,a!==0||n!==i){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=r.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(i!==void 0&&Zg(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===cs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,u=c-r,d=c+r;for(let p=0;p!==r;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*r,u=n*r;for(let d=0;d!==r;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*r,o=n*r,l=0;l!==r;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Mr.prototype.TimeBufferType=Float32Array,Mr.prototype.ValueBufferType=Float32Array,Mr.prototype.DefaultInterpolation=hs;var da=class extends Mr{constructor(e,t,r){super(e,t,r)}};da.prototype.ValueTypeName="bool",da.prototype.ValueBufferType=Array,da.prototype.DefaultInterpolation=Aa,da.prototype.InterpolantFactoryMethodLinear=void 0,da.prototype.InterpolantFactoryMethodSmooth=void 0;var t0=class extends Mr{};t0.prototype.ValueTypeName="color";var r0=class extends Mr{};r0.prototype.ValueTypeName="number";var i0=class extends ln{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let h=l+s;l!==h;l+=4)er.slerpFlat(a,0,n,l-s,n,l,o);return a}},_h=class extends Mr{InterpolantFactoryMethodLinear(e){return new i0(this.times,this.values,this.getValueSize(),e)}};_h.prototype.ValueTypeName="quaternion",_h.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Mr{constructor(e,t,r){super(e,t,r)}};pa.prototype.ValueTypeName="string",pa.prototype.ValueBufferType=Array,pa.prototype.DefaultInterpolation=Aa,pa.prototype.InterpolantFactoryMethodLinear=void 0,pa.prototype.InterpolantFactoryMethodSmooth=void 0;var a0=class extends Mr{};a0.prototype.ValueTypeName="vector";var n0=class{constructor(e,t,r){let i=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){s++,a===!1&&i.onStart!==void 0&&i.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,i.onProgress!==void 0&&i.onProgress(h,n,s),n===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},s0=new n0,o0=class{constructor(e){this.manager=e!==void 0?e:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};o0.DEFAULT_MATERIAL_NAME="__DEFAULT";var vh=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},io=new it,xh=new I,yh=new I,l0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},h0=class extends l0{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mh=class extends vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new h0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sh=class extends vh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ao="\\[\\]\\.:\\/",c0=new RegExp("["+ao+"]","g"),no="[^"+ao+"]",u0="[^"+ao.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",no),p0=/(WCOD+)?/.source.replace("WCOD",u0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",no),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",no),g0=new RegExp("^"+d0+p0+f0+m0+"$"),_0=["material","materials","bones","map"],v0=class{constructor(e,t,r){let i=r||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},ht=class Gi{constructor(t,r,i){this.path=r,this.parsedPath=i||Gi.parseTrackName(r),this.node=Gi.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new Gi.Composite(t,r,i):new Gi(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(t){let r=g0.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=i.nodeName.substring(a+1);_0.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)t[r++]=i[a]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,n=r.propertyIndex;if(t||(t=Gi.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=v0,ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z0=new Float32Array(1),Eh=new it,x0=class{constructor(e,t,r=0,i=1/0){this.ray=new nl(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(e,t=!0,r=[]){return so(e,this,r,t),r.sort(bh),r}intersectObjects(e,t=!0,r=[]){for(let i=0,a=e.length;i<a;i++)so(e[i],this,r,t);return r.sort(bh),r}};function bh(e,t){return e.distance-t.distance}function so(e,t,r,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,r)===!1&&(a=!1),a===!0&&i===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)so(n[s],t,r,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var fa=new I;function Ht(e,t,r,i,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;fa.copy(t),fa[i]=0,fa.normalize();let h=.5*s/(s+o),c=1-fa.angleTo(e)/l;return Math.sign(fa[r])===1?c*h:o/(s+o)+h+h*(1-c)}var Th=class extends Or{constructor(e=1,t=1,r=1,i=2,a=.1){if(i=i*2+1,a=Math.min(e/2,t/2,r/2,a),super(1,1,1,i,i,i),i===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let s=new I,o=new I,l=new I(e,t,r).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new I,g=.5/i;for(let _=0,m=0;_<h.length;_+=3,m+=2)switch(s.fromArray(h,_),o.copy(s),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[_+0]=l.x*Math.sign(s.x)+o.x*a,h[_+1]=l.y*Math.sign(s.y)+o.y*a,h[_+2]=l.z*Math.sign(s.z)+o.z*a,c[_+0]=o.x,c[_+1]=o.y,c[_+2]=o.z,Math.floor(_/d)){case 0:p.set(1,0,0),u[m+0]=Ht(p,o,"z","y",a,r),u[m+1]=1-Ht(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[m+0]=1-Ht(p,o,"z","y",a,r),u[m+1]=1-Ht(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[m+0]=1-Ht(p,o,"x","z",a,e),u[m+1]=Ht(p,o,"z","x",a,r);break;case 3:p.set(0,-1,0),u[m+0]=1-Ht(p,o,"x","z",a,e),u[m+1]=1-Ht(p,o,"z","x",a,r);break;case 4:p.set(0,0,1),u[m+0]=1-Ht(p,o,"x","y",a,e),u[m+1]=1-Ht(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[m+0]=Ht(p,o,"x","y",a,e),u[m+1]=1-Ht(p,o,"y","x",a,t);break}}};function y0(e,t=!1){let r=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new Ut,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(r!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(t){let p;if(r)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(r){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in n){let u=wh(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in s){let u=s[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<s[c].length;++_)p.push(s[c][_][d]);let g=wh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function wh(e){let t,r,i,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(r===void 0&&(r=c.itemSize),r!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*r}let s=new t(n),o=new Bt(s,r,i),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/r;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<r;g++){let _=c.getComponent(d,g);o.setComponent(d+u,g,_)}}else s.set(c.array,l);l+=c.count*r}return a!==void 0&&(o.gpuType=a),o}var je="#101010",Je="#f4f3ee",hn='"DT Punk", Impact, sans-serif',M0='"Inter Tight", "Arial Black", Arial, sans-serif',Ah=()=>{let e=document.createElement("canvas");return e.width=e.height=256,e};function Dt(e,t,r){e.beginPath(),t.forEach(([i,a],n)=>n?e.lineTo(i,a):e.moveTo(i,a)),e.closePath(),r&&(e.fillStyle=r,e.fill())}function vt(e,t,r,i,a,n,s){e.beginPath(),e.roundRect(t,r,i,a,n),s&&(e.fillStyle=s,e.fill())}function Mt(e,t,r,i,a){e.beginPath(),e.arc(t,r,i,0,Math.PI*2),e.fillStyle=a,e.fill()}function ki(e,t,r,i,a){let n=[];for(let s=0;s<t*2;s++){let o=s/(t*2)*Math.PI*2-Math.PI/2,l=s%2?i:r;n.push([128+Math.cos(o)*l,128+Math.sin(o)*l])}Dt(e,n,a)}function Hr(e,t,{y:r=128,width:i=190,size:a=60,color:n=je,font:s=M0,weight:o=900,gap:l=1}={}){let h=a,c=()=>{e.font=`${o} ${h}px ${s}`};for(c();h>12&&Math.max(...t.map(d=>e.measureText(d).width))>i;)h-=2,c();e.textAlign="center",e.textBaseline="middle",e.fillStyle=n;let u=h*l;t.forEach((d,p)=>e.fillText(d,128,r+(p-(t.length-1)/2)*u))}function oo(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?je:Je:e===je?Je:je}var S0={ask(e,t){vt(e,26,40,204,140,34,t),Dt(e,[[70,170],[58,226],[124,172]],t),Hr(e,["ASK","DEN"],{y:110,size:62,color:oo(t),font:hn,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),vt(e,18,84,220,88,44,t),vt(e,88,84,80,88,4,Je);for(let[r,i]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])Mt(e,r,i,5,je);e.restore(),Hr(e,["OUCH"],{y:222,size:44,font:hn,weight:400,color:Je})},camera(e,t){vt(e,28,76,200,130,16,je),vt(e,86,52,70,34,8,je),Mt(e,128,142,48,Je),Mt(e,128,142,34,je),Mt(e,116,130,9,Je),Mt(e,200,98,9,t)},file(e,t){Dt(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],Je),Dt(e,[[160,26],[200,66],[160,66]],"#9c9c98"),Hr(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===Je?je:t,gap:1.1})},cursor(e,t){ki(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),Dt(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],je),e.lineWidth=2.4,e.strokeStyle=Je,e.stroke(),e.restore()},receipt(e,t){let r=[[52,22],[204,22]];for(let i=0;i<=8;i++)r.push([204-i*19,232-(i%2?14:0)]);Dt(e,r,Je),e.fillStyle="#7d7d79";for(let i=0;i<4;i++)e.fillRect(70,48+i*22,i%2?76:116,8);Hr(e,["$$$"],{y:176,size:62,color:t===Je?je:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=Je,e.fill(),Dt(e,[[176,186],[214,236],[136,200]],Je),Hr(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===Je?je:t,font:hn,weight:400})},root(e){vt(e,24,44,208,168,8,je),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=Je,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),Hr(e,["x"],{y:130,width:60,size:60,color:Je,font:hn,weight:400})},sun(e,t){ki(e,14,118,84,t),Mt(e,128,128,70,Je),vt(e,66,100,54,36,12,je),vt(e,136,100,54,36,12,je),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=je,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){ki(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),vt(e,-16,-40,32,130,12,je),Mt(e,0,-56,38,je),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),vt(e,-92,-48,184,96,12,Je),e.fillStyle=t===Je?je:t,e.fillRect(-24,-48,116,96),e.restore(),Hr(e,["CTRL+Z"],{width:150,size:36,color:je})},pencil(e,t){e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=je,e.fillRect(-112,-22,28,44),Dt(e,[[52,-22],[100,0],[52,22]],Je),Dt(e,[[84,-7],[100,0],[84,7]],je),e.setTransform(1,0,0,1,0,0)},car(e,t){vt(e,22,118,212,64,22,t),Dt(e,[[66,122],[96,72],[168,72],[198,122]],t),Dt(e,[[86,118],[104,86],[128,86],[128,118]],je),Dt(e,[[138,118],[138,86],[162,86],[180,118]],je),Mt(e,78,184,24,je),Mt(e,180,184,24,je),Mt(e,78,184,9,Je),Mt(e,180,184,9,Je)},house(e,t){Dt(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=Je,e.fillRect(52,122,152,100),e.fillStyle=je,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){vt(e,26,26,204,204,26,je),e.lineWidth=7,e.strokeStyle=Je,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[r,i]of[[74,80],[72,180],[184,86],[182,176]])Mt(e,r,i,18,t)},fork(e,t){Mt(e,128,128,112,Je),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===Je?"#b5b5b1":t,e.stroke(),e.fillStyle=je,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),vt(e,84,106,36,22,10,je),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){ki(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=je,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){vt(e,22,62,212,132,66,je),[28,58,92,46,76,34,54,22].forEach((r,i)=>vt(e,52+i*21.5,128-r/2,11,r,5.5,i%3===2?t:Je))},bot(e,t){vt(e,40,62,176,152,28,Je),e.fillStyle=je,e.fillRect(122,28,12,38),Mt(e,128,26,12,t===Je?je:t),Mt(e,94,124,18,je),Mt(e,162,124,18,je),e.fillStyle=je,e.fillRect(88,172,80,12)}},Rh=[(e,t)=>(ki(e,16,122,96,t),oo(t)),e=>(vt(e,14,62,228,132,12,je),Je),(e,t)=>(Mt(e,128,128,116,t),oo(t)),e=>(vt(e,14,66,228,124,62,Je),je),e=>(ki(e,12,122,100,je),Je),(e,t)=>(vt(e,18,52,220,152,8,Je),e.strokeStyle=t===Je?je:t,e.lineWidth=10,e.strokeRect(32,66,192,124),je)];function E0(e,t,r,i){let a=Rh[r%Rh.length](e,i),n=[];for(let s of t.split(" ")){let o=n[n.length-1];o&&(o+" "+s).length<=9?n[n.length-1]=`${o} ${s}`:n.push(s)}Hr(e,n,{color:a,width:r%3===2?170:186,size:66,gap:1.04})}var b0={portfolio:["ask","MAKE THE LOGO BIGGER"],basepoint:["bandaid","TAKE YOUR VITAMINS"],"street-observations":["camera","SAY CHEESE"],template:["file","BE KIND REWIND"],prime:["cursor","ONE MORE CLICK"],sabsus:["receipt","CA-CHING!"],janna:["bonjour","MERCI BEAUCOUP"],"root-framer":["root","SHOW YOUR WORK"],sunfreaks:["sun","WEAR SUNSCREEN"],airtexno:["wrench","IT WORKS ON MY MACHINE"],"concept-undo-studio":["eraser","NEW RELEASE"],"concept-root-square-explorations":["pencil","STILL A SKETCH"],"concept-al-futtaim-themes":["car","CAN IT POP MORE?"],"sabsus-platform":["fork","ORDER UP!"],mortgage:["house","SWEET LOAN"],node:["nodes","IF THIS THEN WHY"],restaurant:["fork","TABLE FOR TWO"],wallet:["scissors","BAD HAIR DAY"],wave:["wave","TURN IT UP"],"experiment-chat-portfolio":["bot","NOT A BOT"]};function T0(e){let t=Ah(),r=t.getContext("2d"),i=9;for(let a=0;a<28;a++){let n=a/28*Math.PI*2;r.drawImage(e,Math.cos(n)*i,Math.sin(n)*i)}r.globalCompositeOperation="source-in",r.fillStyle=Je,r.fillRect(0,0,256,256),r.globalCompositeOperation="source-over",r.drawImage(e,0,0),r.globalCompositeOperation="source-atop";for(let a=0;a<260;a++)r.globalAlpha=.1+Math.random()*.22,r.fillStyle=Math.random()<.5?"#000":"#fff",r.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2);return r.globalAlpha=1,r.globalCompositeOperation="source-over",t}function Ch(e){let t=Ah();return e(t.getContext("2d")),T0(t)}function Ph(e){let t=document.createElement("canvas");t.width=t.height=12;let r=t.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0,12,12);let i=r.getImageData(0,0,12,12).data,a=0,n=null;for(let o=0;o<i.length;o+=4){let l=i[o],h=i[o+1],c=i[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,n=[l,h,c])}if(a<60)return null;let s=238/Math.max(...n);return`rgb(${n.map(o=>Math.round(o*s)).join(",")})`}function Lh(e,t=0,r=null){let i=b0[e];if(!i)return[];let[a,n]=i,s=r||Je;return[Ch(o=>S0[a](o,s)),Ch(o=>E0(o,n,t,s))]}var cn=new I(0,0,1),ar=(e,t,r)=>Math.max(t,Math.min(r,e)),ot=(e,t,r)=>e+(t-e)*r,lo=e=>e*e*(3-2*e);function ho(e,t=0){let r=new Qa;r.background=new Ve(526346);let i=(s,o,l,h,c,u)=>{let d=new ft(new kt(s,o),new Dr({color:new Ve(u,u,u),side:Zt}));d.position.set(l,h,c),d.lookAt(0,0,0),r.add(d)};i(10,2.4,0,7,4,9),i(1.6,8,-8,1,3,6),i(1,7,8,-1,4,3.4),i(8,1,0,-6,5,1.2),t&&i(14,10,0,1,10,t);let a=new Vs(e),n=a.fromScene(r,.025).texture;return a.dispose(),n}function Uh(e=256,t=3){let r=document.createElement("canvas");r.width=r.height=e;let i=r.getContext("2d"),a=i.createImageData(e,e);for(let s=0;s<a.data.length;s+=4){let o=120+Math.random()*90;a.data[s]=a.data[s+1]=a.data[s+2]=o,a.data[s+3]=255}i.putImageData(a,0,0);let n=new Br(r);return n.wrapS=n.wrapT=ya,n.repeat.set(t,t),n}var Sr=(e,t,r,i,a=0,n=0,s=0)=>(a&&e.rotateX(a),n&&e.rotateY(n),s&&e.rotateZ(s),e.translate(t,r,i),e),w0=e=>e.index?e.toNonIndexed():e,co=e=>{let t=e.map(w0);return t.forEach(r=>{Object.keys(r.attributes).forEach(i=>{i!=="position"&&i!=="normal"&&i!=="uv"&&r.deleteAttribute(i)})}),y0(t)};function un(e,t,r,i,a,n,s,o,l){return e.moveTo(t+n,r),e.lineTo(i-s,r),e.quadraticCurveTo(i,r,i,r+s),e.lineTo(i,a-o),e.quadraticCurveTo(i,a,i-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,r+n),e.quadraticCurveTo(t,r,t+n,r),e}function uo(e,t,r,i=0,a=0){return un(new kr,i-e/2,a-t/2,i+e/2,a+t/2,r,r,r,r)}function A0(e,t,r,i=0,a=0){return un(new zr,i-e/2,a-t/2,i+e/2,a+t/2,r,r,r,r)}var nr=18.7,sr=10.3,dn=2.5,R0={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},Yt={w:7.9,h:4.9,y:-.15},pn={x:5.25,y:-.15},Vr=(e,t,r=0)=>{let{x0:i,x1:a,y0:n,y1:s,outer:o,inner:l}=R0,h=i-r,c=a+r,u=n-r,d=s+r,p=o+r*.6,g=l+r*.6,_=new e;return t<0?un(_,-c,u,-h,d,p,g,g,p):un(_,h,u,c,d,g,p,p,g)};function C0(){let e=1024/nr,t=564/sr,r=1024/2048,i=y=>(y+nr/2)*e,a=y=>(sr/2-y)*t,n=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=564,y},s=n(),o=n(),l=n(),h=s.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=y=>{let x=document.createElement("canvas");return x.width=x.height=6,y(x.getContext("2d")),x};h.fillStyle=h.createPattern(d(y=>{y.fillStyle="#050505",y.fillRect(0,0,6,6),y.fillStyle="#121212",y.fillRect(.5,.5,5,5),y.fillStyle="#1f1f1f",y.fillRect(.5,.5,5,1),y.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(y=>{y.fillStyle="#242424",y.fillRect(0,0,6,6),y.fillStyle="#c8c8c8",y.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=y=>{y.beginPath(),y.roundRect(i(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),y.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*r),h.fillStyle="#242424",h.fillRect(0,a(g)-3*r,1024,3*r),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*r);let _='"Inter Tight", Arial, sans-serif',m=(y,x)=>{y.fillStyle=x,y.font=`500 ${37*r}px ${_}`,y.textBaseline="middle","letterSpacing"in y&&(y.letterSpacing=`${4*r}px`),y.textAlign="right",y.fillText("INSERT THIS SIDE INTO RECORDER",i(-.75),a(4.35)),y.textAlign="left",y.fillText("DO NOT TOUCH THE TAPE INSIDE",i(.75),a(4.35)),y.beginPath(),y.moveTo(i(0),a(4.72)),y.lineTo(i(.34),a(4.05)),y.lineTo(i(-.34),a(4.05)),y.closePath(),y.fill()};m(h,"#3a3a3a"),m(c,"#f0f0f0");for(let y=0;y<240;y++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*r*1.4;let x=Math.random()*1024,b=Math.random()*564,F=Math.random()*6.28,A=(10+Math.random()*120)*r;h.beginPath(),h.moveTo(x,b),h.lineTo(x+Math.cos(F)*A,b+Math.sin(F)*A),h.stroke()}for(let y=0;y<420;y++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let f=(y,x)=>{let b=new Br(y);return x&&(b.colorSpace=ct),b.anisotropy=8,b};return{map:f(s,!0),bump:f(o),rough:f(l)}}function P0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let i=4;i<128;i+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,i,0,6.2832),t.stroke();let r=new Br(e);return r.colorSpace=ct,r}function po(e){let t=dn/2,r=C0(),i=new Nt({map:r.map,bumpMap:r.bump,bumpScale:1.2,roughnessMap:r.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new Nt({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:Uh(256,5)}),n=new Nt({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),s=new Nt({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new Nt({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new Nt({map:P0(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new Kg({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=Sr(new Th(nr,sr,dn-c,3,.14),0,0,-c/2),d=uo(nr-.06,sr-.06,.2);d.holes.push(Vr(zr,-1),Vr(zr,1));let p=new to(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,_=p.attributes.uv;for(let C=0;C<g.count;C++)_.setXY(C,(g.getX(C)+nr/2)/nr,(g.getY(C)+sr/2)/sr);p.translate(0,0,t-c);let m=(C,P)=>{let B=C;return B.holes.push(P),new to(B,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},f=[Sr(m(Vr(kr,-1,.16),Vr(zr,-1)),0,0,t),Sr(m(Vr(kr,1,.16),Vr(zr,1)),0,0,t),Sr(m(uo(Yt.w+.36,Yt.h+.36,.16,0,Yt.y),A0(Yt.w+.06,Yt.h+.06,.08,0,Yt.y)),0,0,t),Sr(new Or(nr-.5,.09,.06),0,3.5,t+.02)],y=new kr;y.absarc(0,0,.98,0,Math.PI*2,!1);let x=new zr;x.absarc(0,0,.6,0,Math.PI*2,!0),y.holes.push(x);let b=[new to(y,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let C=0;C<6;C++){let P=C/6*Math.PI*2;b.push(Sr(new Or(.2,.44,.1),Math.cos(P)*.46,Math.sin(P)*.46,.05,0,0,P+Math.PI/2))}b.push(Sr(new rn(.06,.06,.08,12),0,0,.04,Math.PI/2));let F=new Ag(1,56),A=co([new ro(Vr(kr,-1),12),new ro(Vr(kr,1),12)]);A.translate(0,0,t+.012);let R=uo(Yt.w,Yt.h,.06,0,0),N=new ro(R,6),M=N.attributes.position,E=N.attributes.uv;for(let C=0;C<M.count;C++)E.setXY(C,M.getX(C)/Yt.w+.5,M.getY(C)/Yt.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:i,lips:co(f),gloss:n,floor:Sr(new kt(nr-.4,sr-.4),0,0,t-c+.004),cavity:s,hub:co(b),white:o,pack:F,packMat:l,glassGeo:A,glass:h,labelGeo:N,spineGeo:Sr(new kt(16.6,1.72),0,-sr/2-.006,-.08,Math.PI/2),stickerGeo:new kt(1,1),hit:new Or(nr,sr,dn)}}var L0=[{x:5.05,y:2.75,size:4.1},{x:-6.35,y:-2.85,size:4.5}],Ih=e=>{let t=document.createElement("canvas");t.width=t.height=1;let r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);let i=new Br(t);return i.colorSpace=ct,i},Hi=Ih("#ffffff"),Nh=Ih("rgba(0,0,0,0)");function fo(e,t=0){let r=new ai,i=(h,c)=>{let u=new ft(h,c);return r.add(u),u};i(e.body,e.plastic),i(e.floor,e.cavity),i(e.slab,e.front),i(e.lips,e.gloss);let a=[-pn.x,pn.x].map(h=>{let c=i(e.pack,e.packMat);c.position.set(h,pn.y,e.FRONT-e.WALL+.012);let u=i(e.hub,e.white);return u.position.set(h,pn.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});i(e.glassGeo,e.glass);let n=()=>new Nt({map:Hi,emissiveMap:Hi,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),s=i(e.labelGeo,n());s.position.set(0,Yt.y,e.FRONT+.008),s.rotation.z=t;let o=i(e.spineGeo,n()),l=L0.map((h,c)=>{let u=i(e.stickerGeo,new Nt({map:Nh,emissiveMap:Nh,color:16777215,emissive:16777215,emissiveIntensity:.6,roughness:.42,envMap:e.env,envMapIntensity:.55,alphaTest:.5}));return u.position.set(h.x+t*18,h.y-t*12,e.FRONT+.03+c*.004),u.scale.setScalar(h.size),u.rotation.z=(c?-.16:.2)+t*9,u});return{group:r,reels:a,label:s,spine:o,stickers:l}}function Dh(e){let t=document.createElement("canvas");t.width=t.height=12;let r=t.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0,12,12);let i=r.getImageData(0,0,12,12).data,a=0,n=[16,16,16];for(let l=0;l<i.length;l+=4){let h=i[l],c=i[l+1],u=i[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,n=[h,c,u])}if(a<60)return"#141414";let s=Math.max(...n),o=135/s;return`rgb(${n.map(l=>Math.round(l*o)).join(",")})`}function Oh(e,t,r){for(let i=0;i<700;i++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*r,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function Fh(e,t,r,i,a){let n=r;for(e.font=`400 ${n}px ${a}`;e.measureText(t).width>i&&n>14;)n-=2,e.font=`400 ${n}px ${a}`;return n}var ma=(e,t=8)=>{let r=new Br(e);return r.colorSpace=ct,r.anisotropy=t,r};function mo(e,t){if(e.width<=t)return e;let r=document.createElement("canvas");r.width=t,r.height=Math.max(1,Math.round(e.height*t/e.width));let i=r.getContext("2d");return i.imageSmoothingQuality="high",i.drawImage(e,0,0,r.width,r.height),r}function U0(e,t,r){return ma(Bh(e,t,r))}function Bh(e,t,r){let i=document.createElement("canvas");i.width=790,i.height=490;let a=i.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let n=getComputedStyle(document.body).fontFamily;if(e){let l=e.naturalWidth/e.naturalHeight,h=746/268,c=l>h?e.naturalHeight*h:e.naturalWidth,u=l>h?e.naturalHeight:e.naturalWidth/h;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-c)/2,(e.naturalHeight-u)/2,c,u,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(l=>{a.beginPath(),a.moveTo(24,l),a.lineTo(766,l),a.stroke()});let s='"DT Punk", cursive';a.fillStyle=r;let o=Fh(a,t.name.toUpperCase(),66,640,s);return a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${s}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${s}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${n}`,a.textBaseline="middle",["SP","LP","EP"].forEach((l,h)=>{let c=30+h*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(c,440,22,22),a.fillText(l,c+32,452)}),a.strokeStyle=r,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",Oh(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over",i}function I0(e,t){return ma(zh(e,t))}function zh(e,t){let r=document.createElement("canvas");r.width=1660,r.height=172;let i=r.getContext("2d");i.fillStyle="#e8e6df",i.fillRect(0,0,1660,172),i.fillStyle="#121212",i.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,n='"DT Punk", cursive';i.fillStyle="#efefe9",i.textBaseline="middle",i.font='400 92px "DT Punk", cursive',i.textAlign="center",i.fillText(e.code,75,172/2+6),i.textAlign="left",i.strokeStyle="#b6b3aa",i.lineWidth=2,i.beginPath(),i.moveTo(176,138),i.lineTo(1420,138),i.stroke(),i.fillStyle=t;let s=Fh(i,e.name.toUpperCase(),112,1210,n);return i.font=`400 ${s}px ${n}`,i.fillText(e.name.toUpperCase(),186,172/2+2),i.fillStyle="#3c3a35",i.font=`500 30px ${a}`,i.textAlign="right",i.fillText(e.kind,1630,172/2-22),i.font=`500 24px ${a}`,i.fillText("TRBN \xB7 SP 120",1630,172/2+24),Oh(i,1660,172),r}var N0="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",D0=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;uniform float light;
float h(float x){return fract(sin(x*91.17)*43758.5453);}
vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
void main(){
 vec2 cc=vUv-.5;
 vec2 q=cc*2.;
 float d=dot(q,q)*.5;
 // The whole screen is bent by a filter where the browser can. Where it can't, the picture bows by itself.
 vec2 uv=.5+cc*mix(1.,.97+d*.055+d*d*.02,bend);
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
}`,O0="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",F0=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;uniform float light;
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
}`,B0=[[0,0],[.55,0],[.92,.03],[1,.09],[.82,.2],[.6,.33],[.52,.5],[.56,.68],[.74,.84],[.84,.93],[.62,.995],[0,1]],z0=[[0,0],[.55,0],[.92,.04],[1,.11],[.8,.27],[.62,.5],[.6,.68],[.72,.82],[.7,.93],[.42,.995],[0,1]],go=e=>new wg(e.map(([t,r])=>new Ee(Math.max(.001,t),r)),14);function k0(){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d");t.fillStyle="rgba(0,0,0,.075)";for(let r=0;r<16;r++){let i=16-r;t.beginPath(),t.roundRect(26-i,26-i,76+i*2,12+i*2,6+i),t.fill()}return new Br(e)}var mt=1,kh=.5,H0=[{k:[1.32,.42],phi:.4,L:[1.62,1.06,.78],r:.29,base:[3.07,-2.34,-.75]},{k:[1.24,-.16],phi:.33,L:[1.78,1.16,.8],r:.3,base:[2.83,-2.52,-.75]},{k:[1.08,-.72],phi:.26,L:[1.62,1.08,.78],r:.28,base:[2.59,-2.7,-.75]},{k:[.86,-1.22],phi:.17,L:[1.24,.82,.66],r:.25,base:[2.35,-2.88,-.75]}],Er=[[2.2,-2.4,-.8],[.75,-1.55,-1.05],[-.7,-1.15,-.95],[-1.7,-.9,-.8]],V0=[[3.34,-2.65,-.85],[3.08,-2.84,-.85],[2.82,-3.02,-.85],[2.56,-3.21,-.85],[3.52,-3.08,-1],[3.31,-3.23,-1],[3.11,-3.37,-1],[2.9,-3.52,-1]],G0=[[3.76,-3.4,-1.2,.44],[3.14,-3.84,-1.2,.38]];function W0(e){let t=document.createElement("canvas");t.width=t.height=24;let r=t.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0,24,24);let i=r.getImageData(0,0,24,24).data,a=Array.from({length:12},()=>[0,0,0,0]),n=0;for(let c=0;c<i.length;c+=4){let u=i[c],d=i[c+1],p=i[c+2],g=Math.max(u,d,p),_=Math.min(u,d,p),m=g-_;if(n+=1,m<40)continue;let f=g===u?(d-p)/m%6:g===d?(p-u)/m+2:(u-d)/m+4;f<0&&(f+=6);let y=a[Math.floor(f*2)%12],x=m*g;y[0]+=u*x,y[1]+=d*x,y[2]+=p*x,y[3]+=x}let s=a.reduce((c,u)=>u[3]>c[3]?u:c);if(s[3]<n*2600)return null;let o=s.slice(0,3).map(c=>c/s[3]),l=Math.max(...o),h=Math.min(...o);return o.map(c=>Math.max(0,Math.min(1,(c-h*.55)/(l-h*.55))))}var X0={portfolio:{glove:"cut",studs:!0,cuff:"spikes",rings:[0,2]},airtexno:{glove:"cut",cuff:"studs"},wave:{cuff:"spikes",rings:[1]},"concept-undo-studio":{glove:"full"},sabsus:{rings:[0,1,2,3]},basepoint:{band:!0},sunfreaks:{beads:2},"root-framer":{beads:1},janna:{beads:1},wallet:{tie:!0},mortgage:{charm:"key"},"concept-al-futtaim-themes":{charm:"fob"},template:{charm:"cassette"},"street-observations":{charm:"film"},"sabsus-platform":{charm:"tag"}},j0=[[0,0],[.62,.01],[.93,.05],[1,.14],[1,.82],[.94,.93],[.66,.99],[0,1]],or=new Ve(1052692),lr=new Ve(15263982),hr=new Ve(7171446),ga=new Ve(15328988);function q0(e){let t={value:0},r={value:0},i=new Nt({color:15526368,roughness:.46,metalness:0,envMap:e,envMapIntensity:1.25}),a=U=>z=>{z.uniforms.uTime=t,z.uniforms.uRim={value:U},z.uniforms.uPaper=r,z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying float vBoneY;`).replace("#include <project_vertex>",`#include <project_vertex>
 vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uRim;uniform float uPaper;varying float vBoneY;`).replace("#include <opaque_fragment>",`
        float boneRim = pow(1. - saturate(dot(normal, normalize(vViewPosition))), 2.4);
        float boneScan = smoothstep(.1, .0, abs(fract(vBoneY * .06 - uTime * .17) - .5));
        outgoingLight += vec3(uRim * (1. - uPaper * .8)) * boneRim + vec3(.8) * boneScan * (.25 + boneRim) * min(1., uRim * 3.);
        #include <opaque_fragment>`)};i.onBeforeCompile=a(.34);let n=new ai,s=new sa(go(B0),i,32),o=new sa(go(z0),i,10),l=new sa(new gh(1,16,12),i,16),h=new sa(new kt(1,1),new Dr({map:k0(),transparent:!0,depthWrite:!1,fog:!1,opacity:.95}),25);h.renderOrder=2,[s,o,l,h].forEach(U=>{U.frustumCulled=!1,n.add(U)});let c=new Nt({color:16777215,roughness:.56,metalness:0,envMap:e,envMapIntensity:.8}),u=new Nt({color:16777215,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6});c.onBeforeCompile=a(.07),u.onBeforeCompile=a(.16);let d=new Jg(1,.18,8,26),p=new gh(1,12,10),g=new Th(1,1,1,2,.12),_={},m={stall:[go(j0),c,60],band:[new rn(1,1,1,30),c,4],bead:[p,c,60],tie:[d,c,4],block:[g,c,8],spike:[new Rg(1,1,10).translate(0,.5,0),u,44],loop:[d,u,30],pin:[p,u,16],plate:[g,u,10],sleeve:[new rn(1,1,1,22),u,8]};Object.entries(m).forEach(([U,[z,$,K]])=>{let Se=new sa(z,$,K);Se.setColorAt(0,lr),Se.count=0,Se.visible=!1,Se.frustumCulled=!1,Se.userData.most=K,_[U]=Se,n.add(Se)});let f={},y=(U,z,$,K,Se,ve,Te)=>{let Ne=_[U],he=f[U]||0;he>=Ne.userData.most||(A.set(K,Se,ve),Ne.setMatrixAt(he,x.compose(z,$,A)),Ne.setColorAt(he,Te),f[U]=he+1)},x=new it,b=new er,F=new I,A=new I,R=new I,N=new I(0,1,0),M=(U,z,$,K,Se)=>{R.copy(K).sub($);let ve=R.length();R.divideScalar(ve),b.setFromUnitVectors(N,R),F.copy($).addScaledVector(R,ve*.025),A.set(Se,ve*.95,Se*.9),U.setMatrixAt(z,x.compose(F,b,A))},E=(U,z,$)=>{b.identity(),A.set($,$*1.2,$*.82),l.setMatrixAt(U,x.compose(z,b,A))},C=(U,z,$,K)=>{let Se=z.x+z.z*.3,ve=z.y-z.z*.72,Te=$.x+$.z*.3,Ne=$.y-$.z*.72,he=Te-Se,Pe=Ne-ve,ie=Math.hypot(he,Pe);b.setFromAxisAngle(cn,Math.atan2(Pe,he)),F.set((Se+Te)/2,(ve+Ne)/2,.022),A.set(ie*1.68,K,1),h.setMatrixAt(U,x.compose(F,b,A))},P=[new I,new I,new I,new I],B=new I,W=new I,V=new I,H=new I,de=new I,J=new I,fe=new I,Me=new I,De=new I,Ie=new er,k=new er,me=new er().setFromAxisAngle(N,Math.PI/2),G=new Ve(15328988),ge=new Ve(15328988),te=(U,z,$,K,Se)=>{R.copy($).sub(z);let ve=R.length();ve<1e-4||(Ie.setFromUnitVectors(N,R.divideScalar(ve)),y(U,z,Ie,K,ve,K,Se))},ee=0,_e=(U,z,$,K,Se,ve,Te,Ne)=>{let he=1.65*ee;J.set(z*he,$*he,K*he).applyQuaternion(k).add(de),y(U,J,k,Se*he,ve*he,Te*he,Ne)},Le={key(){return _e("loop",0,-.42,0,.36,.36,.46,hr),_e("plate",0,-1.36,0,.17,1.3,.09,hr),_e("plate",.15,-1.84,0,.2,.13,.08,hr),_e("plate",.13,-1.58,0,.15,.12,.08,hr),2},fob(){return _e("plate",0,-.86,0,.86,1.28,.2,lr),_e("block",0,-.86,.04,.72,1.14,.24,or),_e("pin",0,-.62,.17,.15,.15,.05,lr),_e("pin",0,-1.02,.17,.15,.15,.05,lr),1.5},cassette(){return _e("block",0,-.62,0,1.3,.86,.17,ga),_e("block",0,-.44,.09,1.06,.28,.02,G),_e("loop",-.3,-.78,.1,.13,.13,.06,hr),_e("loop",.3,-.78,.1,.13,.13,.06,hr),1.1},film(){return _e("block",0,-.62,0,.7,.92,.7,G),_e("plate",0,-.13,0,.78,.1,.78,lr),_e("plate",0,-1.11,0,.78,.1,.78,lr),_e("block",.46,-.68,0,.34,.5,.03,G),1.2},tag(){return _e("plate",0,-.8,0,.84,1.16,.07,hr),_e("block",0,-.9,.05,.62,.4,.02,or),1.4}},Q=null,re=null,w=1,we=0,le=0,Ae=0,ce=7,Oe=5,Y=0,Ce=!1,T={half:7,tall:5},v=new I;return{group:n,place(U,z){T.half=U,T.tall=z,Ce||(Ce=!0,ce=U,Oe=z)},theme(U){r.value=U,i.color.set(U?3421242:15526368),i.envMapIntensity=U?.7:1.25},dress(U,z){let $=X0[U]||null;z?ge.setRGB(z[0],z[1],z[2],ct):ge.copy(ga),$!==Q&&(Q=$,le+=.9)},update(U,z,$){let K=1-Math.exp(-z/180);ce+=(T.half-ce)*K,Oe+=(T.tall-Oe)*K,Y+=(Math.min(1,$*20)-Y)*(1-Math.exp(-z/140)),t.value=U/1e3;let Se=0,ve=0,Te=0,Ne=0;re!==Q?(w=Math.max(0,w-z/110),w||(re=Q,G.copy(ge))):w=Math.min(1,w+z/260);let he=w-1;ee=re?Math.max(0,1+2.7*he*he*he+1.7*he*he):0,Object.keys(f).forEach(ie=>{f[ie]=0});let Pe=re&&(re.cuff||re.beads||re.tie||re.band);if(Ae+=((Pe?1.25:re?.charm?.9:0)-Ae)*(1-Math.exp(-z/320)),le+=(-we*26-le*2.4+Y*2.2*Math.sin(U*.012))*(z/1e3),we+=le*(z/1e3),[-1,1].forEach((ie,ae)=>{let ne=ie*ce,be=-Oe*(ae?.2:.1)+Math.sin(U*7e-4+ae*2)*.05,ye=(ue,L,Z,X)=>ue.set(ne+ie*L*mt,be+Ae+Z*mt,X);H0.forEach((ue,L)=>{let Z=Math.sin(U*.0013+L*1.3+ae*2.4)*.012-Y*.07,X=Math.cos(ue.phi),se=Math.sin(ue.phi),pe=ue.k[0],oe=ue.k[1];ye(P[0],pe,oe,.34+Z*.4),pe-=ue.L[0]*X,oe+=ue.L[0]*se,ye(P[1],pe,oe,.8+Z);let Ge=ue.k[0]/(ue.k[0]-pe);if(ye(W,0,ue.k[1]+(oe-ue.k[1])*Ge,P[0].z+(P[1].z-P[0].z)*Ge),pe-=ue.L[1]*X,oe+=ue.L[1]*se,ye(P[2],pe,oe,.62+Z*1.4),pe-=ue.L[2]*X,oe+=ue.L[2]*se-.05,ye(P[3],pe,oe,.3+Z),M(s,Se++,P[0],P[1],ue.r*mt),M(s,Se++,P[1],P[2],ue.r*.86*mt),M(o,ve++,P[2],P[3],ue.r*.8*mt),ye(B,ue.base[0],ue.base[1],ue.base[2]),M(s,Se++,B,P[0],.34*mt),re){if(re.glove){let ke=re.glove==="full";te("stall",B,P[0],.5*ee*mt,or),V.copy(P[0]).lerp(P[1],ke?1:.44),te("stall",P[0],V,ue.r*1.3*ee,or),ke&&(V.copy(P[1]).lerp(P[0],.16),H.copy(P[2]).lerp(P[1],-.14),te("stall",V,H,ue.r*1.12*ee,or),V.copy(P[2]).lerp(P[1],.2),te("stall",V,P[3],ue.r*1*ee,or))}if(re.studs&&(V.copy(P[0]),V.z+=ue.r*.7,H.set(ie*.5,.35,.8).normalize(),Ie.setFromUnitVectors(N,H),y("spike",V,Ie,.2*ee,.66*ee,.2*ee,lr)),re.rings?.includes(L)){V.copy(P[0]).lerp(P[1],.6),H.copy(P[1]).sub(P[0]).normalize(),Ie.setFromUnitVectors(N,H);let ke=ue.r*.84*ee;y("sleeve",V,Ie,ke,.32*ee,ke,lr),V.z+=ke*.92,Ie.identity(),y("pin",V,Ie,.17*ee,.17*ee,.09*ee,lr)}ae===1&&L===2&&(fe.copy(P[1]).lerp(P[2],.3),Me.copy(P[2]).sub(P[1]).normalize())}C(Ne++,W,P[1],1.4*mt),C(Ne++,P[1],P[2],1.3*mt),C(Ne++,P[2],P[3],1.1*mt)});for(let ue=0;ue<4;ue++)ye(P[ue],Er[ue][0],Er[ue][1],Er[ue][2]);if(M(s,Se++,P[0],P[1],.37*mt),M(s,Se++,P[1],P[2],.33*mt),M(o,ve++,P[2],P[3],.29*mt),V0.forEach((ue,L)=>E(Te++,ye(B,ue[0],ue[1],ue[2]),(.27+L%3*.04)*mt)),v.set(ie*.3,-1,-.55).normalize(),G0.forEach(([ue,L,Z,X])=>{ye(B,ue,L,Z),M(s,Se++,B,W.copy(B).addScaledVector(v,26),X*mt)}),re){re.glove&&(te("stall",ye(V,3.34,-2.65,-.85),ye(H,2.56,-3.21,-.85),.44*ee*mt,or),te("stall",ye(V,3.52,-3.08,-1),ye(H,2.9,-3.52,-1),.44*ee*mt,or),te("stall",ye(V,Er[0][0],Er[0][1],Er[0][2]),ye(H,Er[1][0],Er[1][1],Er[1][2]),.46*ee*mt,or));let ue=.98*mt;ye(V,3.45,-3.62,-1.2).addScaledVector(v,re.glove?.3:.45),H.copy(v).cross(cn).normalize(),de.copy(H).cross(v);let L=(Z,X)=>J.copy(V).addScaledVector(H,Math.cos(Z)*X).addScaledVector(de,Math.sin(Z)*X);if(Ie.setFromUnitVectors(N,v),re.cuff){y("band",V,Ie,ue*ee,.9*ee,ue*ee,or);let Z=re.cuff==="spikes"?11:16;for(let X=0;X<Z;X++){let se=X/Z*Math.PI*2;L(se,ue*.97),de.copy(J).sub(V).normalize(),k.setFromUnitVectors(N,de);let pe=re.cuff==="spikes"?.62:.2,oe=re.cuff==="spikes"?.17:.13;y("spike",J,k,oe*ee,pe*ee,oe*ee,lr),de.copy(H).cross(v)}}if(re.beads)for(let Z=0;Z<re.beads;Z++){let X=Z*.46,se=13+Z;for(let pe=0;pe<se;pe++)V.addScaledVector(v,X),L(pe/se*Math.PI*2+Z,ue),V.addScaledVector(v,-X),k.identity(),y("bead",J,k,.23*ee,.23*ee,.23*ee,(pe+Z)%3?G:ga)}Ie.setFromUnitVectors(cn,v),re.tie&&y("tie",V,Ie,ue*ee,ue*ee,ue*.9*ee,G),re.band&&(k.setFromUnitVectors(N,v),y("band",V,k,ue*.99*ee,.5*ee,ue*.99*ee,ga),L(Math.PI/2,ue),y("block",J,k,.9*ee,.34*ee,.12*ee,ga))}}),re?.charm){let ie=we+Math.sin(U*9e-4)*.05;De.set(Math.sin(ie),-Math.cos(ie),.07).normalize(),Ie.setFromUnitVectors(cn,Me),y("loop",fe,Ie,.38*ee,.38*ee,.42*ee,hr),V.copy(fe).addScaledVector(De,.34*ee),H.copy(De).negate(),Ie.setFromUnitVectors(N,H);for(let ne=0;ne<4;ne++)V.addScaledVector(De,.33*ee),k.copy(Ie),ne%2&&k.multiply(me),y("loop",V,k,.17*ee,.27*ee,.17*ee,hr);de.copy(V).addScaledVector(De,.3*ee),k.copy(Ie),H.set(0,1,0),k.multiply(b.setFromAxisAngle(H,Math.sin(U*.0011)*.36+we*1.5)),_e("loop",0,0,0,.12,.12,.1,hr);let ae=Le[re.charm]();H.copy(fe).addScaledVector(De,(1.8+ae*1.65)*ee),C(Ne++,fe,H,1.1*mt)}h.count=Ne,Object.entries(_).forEach(([ie,ae])=>{let ne=f[ie]||0;ae.count=ne,ae.visible=ne>0,ne&&(ae.instanceMatrix.needsUpdate=!0,ae.instanceColor.needsUpdate=!0)}),[s,o,l,h].forEach(ie=>{ie.instanceMatrix.needsUpdate=!0})}}}function Y0({host:e,stage:t,items:r,onHover:i,onOpen:a,onPlay:n}){let s=document.createElement("canvas");s.className="tv-canvas",s.setAttribute("aria-hidden","true"),e.append(s);let o;try{o=new th({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return s.remove(),null}let l=Math.min(devicePixelRatio||1,1.25);o.setPixelRatio(l),o.outputColorSpace=ct,o.setClearColor(0,0);let h=ho(o),c=po(h),u=new Qa;u.background=new Ve(131587),u.fog=new cg(131587,40,96);let d=new Mh(16777215,1.5);d.position.set(-8,18,22),u.add(d);let p=new It(30,1,1,200);p.position.set(0,0,40);let g=new tr({vertexShader:O0,fragmentShader:F0,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:Hi},b:{value:Hi},fade:{value:1},time:{value:0},focus:{value:new Ee(.47,.55)},light:{value:0}}}),_=new ft(new kt(2,2),g);_.frustumCulled=!1,_.renderOrder=-10,u.add(_);let m=new Sh(16777215,.32);u.add(m);let f=new Ve(16777215),y=new Ve(16777215),x=new Ve(16777215),b=new ft(new kt(1,1),new Dr({map:Hi,color:16777215,transparent:!0,opacity:0,fog:!1}));b.renderOrder=1;let F=new ai;u.add(F),F.add(b);let A=new ft(new kt(1,1),new Dr({color:328965,fog:!1}));A.position.z=-.04,F.add(A);let R=new ft(new Or(1,1,1),new Nt({color:723723,roughness:.42,envMap:h,envMapIntensity:.9}));F.add(R);let N=q0(h);F.add(N.group);let M=0,E=0,C=r.map((ie,ae)=>{let ne=be=>{let ye=Math.sin((ae+1)*12.9898*be)*43758.5453;return ye-Math.floor(ye)};return{rx:ne(1)-.5,ry:ne(2)-.5,rz:ne(3)-.5,wob:ne(4)*6.28,tilt:(ne(5)-.5)*.022,pile:ne(6)-.5}}),P=r.map((ie,ae)=>{let ne=fo(c,C[ae].tilt),be=new ft(c.hit,new Dr({visible:!1}));return be.userData.index=ae,ne.group.add(be),ne.hit=be,u.add(ne.group),ne}),B=new Map,W=new Map,V=(ie,ae)=>{if(B.has(ie)){let be=B.get(ie);be.complete&&be.naturalWidth?ae(be):be.addEventListener("load",()=>ae(be),{once:!0});return}let ne=new Image;ne.decoding="async",ne.src=r[ie].src,B.set(ie,ne),ne.addEventListener("load",()=>ae(ne),{once:!0})},H=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),de=ie=>{P[ie].wanted||(P[ie].wanted=!0,V(ie,ae=>H.then(()=>{let ne=Dh(ae),be=(ye,ue)=>{ye.material.map=ue,ye.material.emissiveMap=ue,ye.material.emissiveIntensity=.55,ye.material.color.set(16777215),ye.material.needsUpdate=!0};be(P[ie].label,U0(ae,r[ie],ne)),be(P[ie].spine,I0(r[ie],ne)),Lh(r[ie].project,ie,Ph(ae)).forEach((ye,ue)=>{let L=P[ie].stickers[ue],Z=new Br(ye);Z.colorSpace=ct,Z.anisotropy=4,L.material.map=Z,L.material.emissiveMap=Z,L.material.needsUpdate=!0})})))},J=ie=>{W.has(ie)||(W.set(ie,null),V(ie,ae=>{let ne=new Br(ae);ne.colorSpace=ct,ne.anisotropy=8,ne.generateMipmaps=!0,ne.minFilter=dr;let be=document.createElement("canvas");be.width=be.height=6;let ye=be.getContext("2d",{willReadFrequently:!0});ye.drawImage(ae,0,0,6,6);let ue=ye.getImageData(0,0,6,6).data,L=0,Z=0,X=0;for(let ke=0;ke<ue.length;ke+=4)L+=ue[ke],Z+=ue[ke+1],X+=ue[ke+2];let se=new Ve(L/9180,Z/9180,X/9180).convertSRGBToLinear(),pe=Math.max(L,Z,X,1),oe=255/pe,Ge=`rgba(${[L,Z,X].map(ke=>Math.round(ke*oe)).join(",")},.3)`;W.set(ie,{texture:ne,ratio:ae.naturalWidth/ae.naturalHeight,avg:se,glow:Ge,light:W0(ae)}),ie===Q&&re(ie)}))},fe=new Qa,Me=new Os(-1,1,1,-1,0,1),De=new tr({vertexShader:N0,fragmentShader:D0,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1},light:{value:0}}}),Ie=new ft(new kt(2,2),De);Ie.frustumCulled=!1,fe.add(Ie);let k=null,me=0,G=0;function ge(){let ie=Math.round(me*l),ae=Math.round(G*l);(!k||k.width!==ie||k.height!==ae)&&(k?.dispose(),k=new Rr(ie,ae,{samples:2,type:di,colorSpace:"",generateMipmaps:!0,minFilter:dr,magFilter:Gt})),De.uniforms.map.value=k.texture,p.aspect=me/G,p.updateProjectionMatrix(),Le()}let te=()=>{let ie=80*Math.tan(p.fov*Math.PI/360);return{vh:ie,vw:ie*p.aspect}},ee=4/3,_e=0;function Le(){let{vh:ie,vw:ae}=te(),ne=ae*.62,be=ie*.62,ye=ne,ue=ye/ee;ue>be&&(ue=be,ye=ue*ee),_e=ie*.06,b.scale.set(ye,ue,1),A.scale.set(ye+.16,ue+.16,1),R.scale.set(ye+.16,ue+.16,kh),R.position.z=-.05-kh/2,N.place((ye+.16)/2,ue/2),g.uniforms.focus.value.set(.5,.5+_e/ie)}let Q=-1;function re(ie){let ae=W.get(ie);ae&&(g.uniforms.a.value!==ae.texture&&(g.uniforms.b.value=g.uniforms.a.value===Hi?ae.texture:g.uniforms.a.value,g.uniforms.a.value=ae.texture,g.uniforms.fade.value=0),y.copy(ae.avg).lerp(x,.3),document.documentElement.style.setProperty("--tube-glow",ae.glow),window.trbnRingTint?.(ae.light),N.dress(r[ie]?.project,ae.light),b.material.map=ae.texture,b.material.opacity=1,b.material.needsUpdate=!0,ee=ae.ratio,Le())}function w(){let ie=s.clientWidth,ae=s.clientHeight;!ie||!ae||(me=ie,G=ae,o.setSize(me,G,!1),ge())}new ResizeObserver(w).observe(s),w();let we=()=>{let ie=document.documentElement.classList.contains("theme-light")?1:0;g.uniforms.light.value=ie,De.uniforms.light.value=ie,u.fog.color.set(ie?13224389:131587),u.background.set(ie?13224389:131587),N.theme(ie)};we(),addEventListener("trbn:theme",we);let le=(ie,ae,ne)=>lo(ar((ne-ie)/(ae-ie),0,1));function Ae(ie,ae,ne,be,ye){let{vh:ue,vw:L}=te(),Z=lo(ar(1-Math.abs(be)*1.15,0,1)),X=ie.group,se=Math.sin(ye*5e-4+ae.wob),pe={x:L*.275,y:-ue*.265,z:8,s:.52,rx:-.16+se*.012,ry:-.3+Math.cos(ye*4e-4)*.018,rz:.05},oe;if(be>=0){let Ge=ne%2?1:-1,ke=1-be*4.2;oe={x:Ge*L*.49,y:ue*.1+ae.pile*1.2-be*.12,z:ke,s:.46,rx:ae.rx*.1,ry:-Ge*.92+ae.ry*.08,rz:Ge*.03+ae.rz*.04},oe={x:ot(oe.x,pe.x,Z),y:ot(oe.y,pe.y,Z),z:ot(oe.z,pe.z,Z),s:ot(oe.s,pe.s,Z),rx:ot(oe.rx,pe.rx,Z),ry:ot(oe.ry,pe.ry,Z),rz:ot(oe.rz,pe.rz,Z)}}else{let Ge=dn*.5,ke=le(0,.9,-be),Qe={x:-L*.265+ae.pile*.45,y:-ue*.19+(be+1)*Ge,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+ae.ry*.05,rz:ae.rz*.022};oe={x:ot(pe.x,Qe.x,ke),y:ot(pe.y,Qe.y,ke)+Math.sin(ke*Math.PI)*3,z:ot(pe.z,Qe.z,ke),s:ot(pe.s,Qe.s,ke),rx:ot(pe.rx,Qe.rx,ke),ry:ot(pe.ry,Qe.ry,ke),rz:ot(pe.rz,Qe.rz,ke)}}X.position.set(oe.x,oe.y,oe.z),X.scale.setScalar(oe.s),X.rotation.set(oe.rx,oe.ry,oe.rz),X.visible=be>-8&&be<12&&oe.y>-ue*.85}let ce=new x0,Oe=new Ee,Y=null,Ce=-2,T=!1,v=()=>{Ce!==-2&&(Ce=-2,i(-1),t.classList.remove("is-pointing"))},U=()=>{if(T=!1,!Y){v();return}let[ie,ae]=window.trbnBend?window.trbnBend(Y.x,Y.y,me,G):[Y.x,Y.y],ne=ie/me,be=ae/G;if(ne<0||ne>1||be<0||be>1){v();return}Oe.set(ne*2-1,-(be*2-1)),ce.setFromCamera(Oe,p);let ye=ce.intersectObjects([...P.filter(L=>L.group.visible).map(L=>L.hit),b],!1)[0],ue=ye?ye.object===b?-1:ye.object.userData.index:-2;ue!==Ce&&(Ce=ue,i(ue>=0?ue:-1),t.classList.toggle("is-pointing",ue!==-2))};t.addEventListener("pointermove",ie=>{let ae=s.getBoundingClientRect();Y={x:ie.clientX-ae.left,y:ie.clientY-ae.top},T=!0}),t.addEventListener("pointerleave",()=>{Y=null,T=!0}),t.addEventListener("click",ie=>{ie.target.closest("a, button")||(U(),Ce!==-2&&a(Ce===-1?Q:Ce))});let z=!1;Promise.all([o.compileAsync(u,p),o.compileAsync(fe,Me)]).then(()=>{z=!0},()=>{z=!0});let $=1,K=0,Se=0,ve=0,Te=0,Ne=0,he=!1,Pe=!0;return{frame:(ie,ae,ne,be=1)=>{if(!Pe||!z)return;let ye=ie-ve,ue=Math.abs(ye);ve=ie,Se+=ye*11+ne*9e-4;let L=ar(ie/Math.max(1,r.length-1),0,1);P.forEach((oe,Ge)=>{let ke=Ge-ie;if(ke>-7&&ke<7&&de(Ge),Ae(oe,C[Ge],Ge,ke,ae),Math.abs(ke)<3){oe.reels[0].hub.rotation.z=-Se,oe.reels[1].hub.rotation.z=-Se*.82;let Qe=ot(3.15,1.75,L),Ke=ot(1.75,3.15,L);oe.reels[0].pack.scale.set(Qe,Qe,1),oe.reels[1].pack.scale.set(Ke,Ke,1)}});let Z=ar(Math.round(ie),0,r.length-1);if(J(Z),J(Math.min(r.length-1,Z+1)),J(Math.max(0,Z-1)),Z!==Q){let oe=Q<0;Q=Z,oe||($=1,M=(Math.random()<.5?-1:1)*.9,n?.(Z)),re(Z)}$=Math.max($*Math.exp(-ne/170),ar(ue*26,0,.7)),K||(K=ae);let X=Math.min(1,(ae-K)/700);f.lerp(y,1-Math.exp(-ne/500)),m.color.copy(f),g.uniforms.time.value=ae/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+ne/900),De.uniforms.time.value=ae/1e3,De.uniforms.glitch.value=$,E+=(-M*70-E*7)*(ne/1e3),M+=E*(ne/1e3),N.update(ae,ne,ue),De.uniforms.power.value=1-(1-X)**3,De.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let se=Y?Y.x/me-.5:0,pe=Y?Y.y/G-.5:0;Te+=(se-Te)*(1-Math.exp(-ne/260)),Ne+=(pe-Ne)*(1-Math.exp(-ne/260)),p.position.x=Te*1.6,p.position.y=-Ne*1,p.lookAt(0,0,0),F.position.y=_e+Math.sin(ae*83e-5)*.05,F.rotation.set(Math.sin(ae*61e-5)*.009+Ne*.05+M*.012,Math.sin(ae*47e-5)*.013+Te*.1+M*.03,Math.sin(ae*39e-5)*.0045+M*.008),T&&U(),o.toneMapping=$t,o.setRenderTarget(k),o.clear(),o.render(u,p),o.setRenderTarget(null),o.clear(),o.render(fe,Me),s.style.opacity=String(Math.min(X*3,1)*be),he||(he=!0,t.classList.add("tv-on"))},show(ie){Pe=ie,s.style.display=ie?"":"none",ie&&w()},lighter(){l<=.8||(l=Math.max(.8,l-.2),o.setPixelRatio(l),w())}}}var Hh={rest:{x:.222,y:-.252,z:6,s:.48,rx:-.22,ry:-.36,rz:.07},lift:{x:.2,y:-.21,z:9,s:.45,rx:-.07,ry:-.12,rz:.025}};function J0(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");return t.filter="blur(16px)",t.fillStyle="rgba(0,0,0,.9)",t.beginPath(),t.roundRect(44,38,168,84,16),t.fill(),ma(e,1)}function K0({grid:e,scroller:t,items:r}){let i=document.createElement("canvas");i.className="tape-library",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"absolute",left:"0",top:"0",zIndex:"3",pointerEvents:"none"}),e.append(i);let a;try{a=new th({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return i.remove(),null}let n=Math.min(devicePixelRatio||1,1.25);a.setPixelRatio(n),a.outputColorSpace=ct,a.toneMapping=$t,a.setClearColor(0,0),a.autoClear=!1;let s=ho(a),o=po(s),l=new Qa,h=new Mh(16777215,1.5);h.position.set(-8,18,22),l.add(h);let c=new Sh(16777215,.32);l.add(c);let u=new It(30,4/3,1,200);u.position.set(0,0,40),u.lookAt(0,0,0);let d=80*Math.tan(u.fov*Math.PI/360),p=d*u.aspect,g=new ft(new kt(1,1),new Dr({map:J0(),transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=-1,l.add(g);let _=new Ve(16777215),m=r.map((G,ge)=>{let te=Le=>{let Q=Math.sin((ge+1)*12.9898*Le)*43758.5453;return Q-Math.floor(Q)},ee=fo(o,(te(5)-.5)*.022);ee.group.visible=!1,l.add(ee.group);let _e=ot(1.75,3.15,te(7));return ee.reels[0].pack.scale.set(_e,_e,1),ee.reels[1].pack.scale.set(4.9-_e,4.9-_e,1),{item:G,tape:ee,seed:{rx:te(1)-.5,ry:te(2)-.5,rz:te(3)-.5},spin:te(4)*6.28,tint:new Ve(1,1,1),wanted:!1,ready:!1,shown:!1,p:0,hover:0,h:0,tx:0,ty:0,px:0,py:0,box:null,dirty:!1}}),f=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),y=(G,ge)=>{let te=ma(ge,4);G.material.map=te,G.material.emissiveMap=te,G.material.emissiveIntensity=.55,G.material.color.set(16777215),G.material.needsUpdate=!0};function x(G){if(G.wanted)return;G.wanted=!0;let ge=G.item.card.querySelector("img");if(!ge)return;let te=()=>f.then(()=>{if(ge.naturalWidth){try{b(G,ge)}catch{}G.ready=!0,k()}});ge.complete&&ge.naturalWidth?te():ge.addEventListener("load",te,{once:!0})}function b(G,ge){let te=Dh(ge);y(G.tape.label,mo(Bh(ge,G.item,te),396)),y(G.tape.spine,mo(zh(G.item,te),830));let ee=null;try{ee=Ph(ge)}catch{}Lh(G.item.project,G.item.index,ee).forEach((le,Ae)=>{let ce=G.tape.stickers[Ae];if(!ce)return;let Oe=ma(mo(le,128),4);ce.material.map=Oe,ce.material.emissiveMap=Oe,ce.material.needsUpdate=!0});let _e=document.createElement("canvas");_e.width=_e.height=6;let Le=_e.getContext("2d",{willReadFrequently:!0});Le.drawImage(ge,0,0,6,6);let Q=Le.getImageData(0,0,6,6).data,re=0,w=0,we=0;for(let le=0;le<Q.length;le+=4)re+=Q[le],w+=Q[le+1],we+=Q[le+2];G.tint.setRGB(re/9180,w/9180,we/9180).convertSRGBToLinear().lerp(_,.3)}function F(G,ge){let te=Hh.rest,ee=Hh.lift,_e=lo(ar(G.h,0,1)),Le=ot(te.x,ee.x,_e)*p,Q=ot(te.y,ee.y,_e)*d,re=ot(te.rz,ee.rz,_e)+G.seed.rz*.03,w=ot(te.rx,ee.rx,_e)+G.seed.rx*.05-G.py*.2*_e,we=ot(te.ry,ee.ry,_e)+G.seed.ry*.07+G.px*.28*_e,le=1-(1-ar(G.p,0,1))**3;Le+=(1-le)*4.5,Q-=(1-le)*9.5,re+=(1-le)*.22;let Ae=G.tape.group;Ae.position.set(Le,Q,ot(te.z,ee.z,_e)),Ae.scale.setScalar(ot(te.s,ee.s,_e)),Ae.rotation.set(w,we,re),G.tape.reels[0].hub.rotation.z=-G.spin,G.tape.reels[1].hub.rotation.z=-G.spin*.82,g.position.set(Le+1.1+_e*.9,Q-1.5-_e*1.1,0),g.scale.set(nr*Ae.scale.x*(1.2+_e*.12),sr*Ae.scale.x*(1.5+_e*.2),1),g.rotation.set(0,0,re),g.material.opacity=(.78-_e*.2)*le}let A=220,R=0,N=0,M=-1e9,E=0,C=0,P=!0,B=!0,W=!1,V=!1,H=null,de=0,J=0,fe=0,Me=0,De=(G,ge)=>{let{box:te}=G,ee=te.left,_e=N-(te.top-ge+te.height);a.setViewport(ee,_e,te.width,te.height),a.setScissor(ee,_e,te.width,te.height),a.clear(),!(!G.shown||!G.ready)&&(H&&H!==G.tape.group&&(H.visible=!1),H=G.tape.group,H.visible=!0,c.color.copy(G.tint),a.render(l,u))};function Ie(G){if(E=0,!B||!W||!V||document.hidden)return;let ge=Math.min(250,G-(C||G));C=G;let te=t.getBoundingClientRect(),ee=e.getBoundingClientRect(),_e=e.clientWidth,Le=e.clientHeight,Q=m.map(Y=>Y.item.card.hidden?null:Y.item.media.getBoundingClientRect()),re=te.top-ee.top,w=te.bottom-ee.top,we=Math.max(1,Math.min(Math.round(te.height+A*2),Math.ceil(Le)));(_e!==R||we!==N)&&(R=_e,N=we,a.setSize(R,N,!1),i.style.width=`${R}px`,i.style.height=`${N}px`,P=!0);let le=Math.max(0,Math.floor(Le-N));if(re<M+A*.35||w>M+N-A*.35||M>le){let Y=ar(Math.round(re-A),0,le);Y!==M&&(M=Y,i.style.transform=`translate3d(0,${M}px,0)`,P=!0)}let Ae=!1,ce=!1,Oe=M;if(m.forEach((Y,Ce)=>{let T=Q[Ce];if(Y.box=null,!T||!T.width)return;let v=T.top-ee.top,U=T.bottom-ee.top;if(U>re-900&&v<w+900&&x(Y),U<Oe||v>Oe+N)return;Y.box={left:T.left-ee.left,top:v,width:T.width,height:T.height},Y.ready&&!Y.shown&&U>re+T.height*.2&&v<w-T.height*.2&&(Y.shown=!0,Y.born=G,Y.p=0,Y.dirty=!0),Y.shown&&Y.p<1&&(Y.p=Math.min(1,(G-Y.born)/620),Y.dirty=!0),(Math.abs(Y.hover-Y.h)>.001||Math.abs(Y.tx-Y.px)>.001||Math.abs(Y.ty-Y.py)>.001||Y.shown&&Y.p<1)&&(Y.dirty=!0,ce=!0);let z=Y.h+(Y.hover-Y.h)*(1-Math.exp(-ge/150));Y.h=Math.abs(z-Y.hover)<.001?Y.hover:z,Y.px+=(Y.tx-Y.px)*(1-Math.exp(-ge/170)),Y.py+=(Y.ty-Y.py)*(1-Math.exp(-ge/170)),Y.h>.02&&(Y.spin+=ge*.0034*Y.h,Y.dirty=!0),(Y.dirty||P)&&(Ae||(Ae=Y.dirty))}),Ae&&!ce&&!P&&G-de<30){k();return}de=G,a.setScissorTest(!1),P&&a.clear(),a.setScissorTest(!0),m.forEach(Y=>{!Y.box||!(P||Y.dirty)||(Y.ready&&Y.shown&&F(Y,G),De(Y,Oe),Y.dirty=!1)}),a.setScissorTest(!1),P=!1,Ae?(J++,fe+=Math.min(ge,50),J>=40&&(Me=fe/J>26?Me+1:0,J=0,fe=0,Me>=2&&!navigator.webdriver&&(Me=0,me())),k()):(J=0,fe=0,C=0)}function k(){!E&&B&&W&&V&&!document.hidden&&(E=requestAnimationFrame(Ie))}function me(){n<=.8||(n=Math.max(.8,n-.2),a.setPixelRatio(n),R=0,P=!0)}return m.forEach(G=>{let{link:ge,media:te}=G.item,ee=_e=>{let Le=te.getBoundingClientRect();Le.width&&(G.tx=ar((_e.clientX-Le.left)/Le.width-.5,-.6,.6),G.ty=ar((_e.clientY-Le.top)/Le.height-.5,-.6,.6),k())};ge.addEventListener("pointerenter",_e=>{G.hover=1,ee(_e)}),ge.addEventListener("pointermove",ee),ge.addEventListener("pointerleave",()=>{G.hover=0,G.tx=0,G.ty=0,k()}),ge.addEventListener("focus",()=>{ge.matches(":focus-visible")&&(G.hover=1,k())}),ge.addEventListener("blur",()=>{G.hover=0,k()})}),t.addEventListener("scroll",k,{passive:!0}),new ResizeObserver(()=>{P=!0,k()}).observe(e),new ResizeObserver(()=>{P=!0,k()}).observe(t),new IntersectionObserver(([G])=>{W=G.isIntersecting,W&&(P=!0,k())},{root:t,rootMargin:`${A}px 0px`}).observe(e),document.addEventListener("visibilitychange",()=>{P=!0,k()}),addEventListener("pageshow",()=>{P=!0,k()}),m.forEach(G=>{G.tape.group.visible=!0}),a.compileAsync(l,u).catch(()=>{}).then(()=>{m.forEach(G=>{G.tape.group.visible=!1}),V=!0,P=!0,k()}),{wake(){P=!0,k()},show(G){B=G,i.style.display=G?"":"none",G&&(P=!0,k())}}}export{Y0 as default,Uh as grainTexture,fo as makeTape,K0 as startShelf,ho as studioEnv,po as tapeParts};
