var Ch=0,Ks=1,Ph=2,Qs=1,Lh=2,$t=3,vr=0,bt=1,zt=2,_r=0,Zr=1,$s=2,eo=3,to=4,Ih=5,Or=100,Dh=101,Uh=102,Nh=103,Oh=104,Fh=200,zh=201,Bh=202,Vh=203,Qa=204,$a=205,kh=206,Hh=207,Gh=208,Wh=209,Xh=210,jh=211,qh=212,Yh=213,Jh=214,en=0,tn=1,rn=2,Kr=3,an=4,nn=5,sn=6,on=7,ro=0,Zh=1,Kh=2,er=0,Qh=1,$h=2,ec=3,io=4,tc=5,rc=6,ic=7,ao=300,Qr=301,$r=302,ln=303,hn=304,na=306,Di=1e3,Fr=1001,cn=1002,Bt=1003,ac=1004,sa=1005,It=1006,un=1007,tr=1008,rr=1009,no=1010,so=1011,Ui=1012,dn=1013,zr=1014,ir=1015,ei=1016,pn=1017,fn=1018,ti=1020,oo=35902,lo=1021,ho=1022,Vt=1023,co=1024,uo=1025,ri=1026,ii=1027,po=1028,mn=1029,fo=1030,gn=1031,vn=1033,oa=33776,la=33777,ha=33778,ca=33779,_n=35840,xn=35841,Mn=35842,yn=35843,Sn=36196,En=37492,Tn=37496,bn=37808,wn=37809,An=37810,Rn=37811,Cn=37812,Pn=37813,Ln=37814,In=37815,Dn=37816,Un=37817,Nn=37818,On=37819,Fn=37820,zn=37821,ua=36492,Bn=36494,Vn=36495,mo=36283,kn=36284,Hn=36285,Gn=36286,da=2300,Wn=2301,Xn=2302,go=2400,vo=2401,_o=2402,nc=3200,sc=3201,xo=0,oc=1,xr="",gt="srgb",ai="srgb-linear",pa="linear",$e="srgb",ni=7680,Mo=519,lc=512,hc=513,cc=514,yo=515,uc=516,dc=517,pc=518,fc=519,So=35044,Eo="300 es",ar=2e3,fa=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}},Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jn=Math.PI/180,qn=180/Math.PI;function oi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[e&255]+Mt[e>>8&255]+Mt[e>>16&255]+Mt[e>>24&255]+"-"+Mt[t&255]+Mt[t>>8&255]+"-"+Mt[t>>16&15|64]+Mt[t>>24&255]+"-"+Mt[r&63|128]+Mt[r>>8&255]+"-"+Mt[r>>16&255]+Mt[r>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function xt(e,t,r){return Math.max(t,Math.min(r,e))}function mc(e,t){return(e%t+t)%t}function Yn(e,t,r){return(1-r)*e+r*t}function Ni(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var pe=class dh{constructor(t=0,r=0){dh.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6],this.y=a[1]*r+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),a=Math.sin(r),n=this.x-t.x,s=this.y-t.y;return this.x=n*i-s*a+t.x,this.y=n*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class ph{constructor(t,r,i,a,n,s,o,l,h){ph.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h)}set(t,r,i,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=r,c[4]=n,c[5]=l,c[6]=i,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=a[0],m=a[3],p=a[6],T=a[1],x=a[4],E=a[7],z=a[2],P=a[5],C=a[8];return n[0]=s*v+o*T+l*z,n[3]=s*m+o*x+l*P,n[6]=s*p+o*E+l*C,n[1]=h*v+c*T+u*z,n[4]=h*m+c*x+u*P,n[7]=h*p+c*E+u*C,n[2]=d*v+f*T+g*z,n[5]=d*m+f*x+g*P,n[8]=d*p+f*E+g*C,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return r*s*c-r*o*h-i*n*c+i*o*l+a*n*h-a*s*l}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,f=h*n-s*l,g=r*u+i*d+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*i)*v,t[2]=(o*i-a*s)*v,t[3]=d*v,t[4]=(c*r-a*l)*v,t[5]=(a*n-o*r)*v,t[6]=f*v,t[7]=(i*l-h*r)*v,t[8]=(s*r-i*n)*v,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(Jn.makeScale(t,r)),this}rotate(t){return this.premultiply(Jn.makeRotation(-t)),this}translate(t,r){return this.premultiply(Jn.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<9;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jn=new Je;function To(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ma(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function gc(){let e=ma("canvas");return e.style.display="block",e}var bo={};function Oi(e){e in bo||(bo[e]=!0,console.warn(e))}function vc(e,t,r){return new Promise(function(i,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,r);break;default:i()}}setTimeout(n,r)})}function _c(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xc(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ze={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===$e&&(e.r=nr(e.r),e.g=nr(e.g),e.b=nr(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===$e&&(e.r=li(e.r),e.g=li(e.g),e.b=li(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===xr?pa:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function nr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function li(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var wo=[.64,.33,.3,.6,.15,.06],Ao=[.2126,.7152,.0722],Ro=[.3127,.329],Co=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[ai]:{primaries:wo,whitePoint:Ro,transfer:pa,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:Ao,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:wo,whitePoint:Ro,transfer:$e,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:Ao,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}});var hi,Mc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=ma("canvas")),hi.width=e.width,hi.height=e.height;let r=hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let n=0;n<a.length;n++)a[n]=nr(a[n]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yc=0,Lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let n=0,s=i.length;n<s;n++)i[n].isDataTexture?a.push(Zn(i[n].image)):a.push(Zn(i[n]))}else a=Zn(i);r.url=a}return t||(e.images[this.uuid]=r),r}};function Zn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Mc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sc=0,kt=class Za extends si{constructor(t=Za.DEFAULT_IMAGE,r=Za.DEFAULT_MAPPING,i=Fr,a=Fr,n=It,s=tr,o=Vt,l=rr,h=Za.DEFAULT_ANISOTROPY,c=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=oi(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ao)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case cn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case cn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=ao,kt.DEFAULT_ANISOTROPY=1;var rt=class fh{constructor(t=0,r=0,i=0,a=1){fh.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,a){return this.x=t,this.y=r,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*r+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*r+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*r+s[7]*i+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],f=s[2],g=s[6],v=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-f)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let p=(o+1)/2,T=(u+1)/2,x=(v+1)/2,E=(l+c)/4,z=(h+f)/4,P=(d+g)/4;return p>T&&p>x?p<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(p),a=E/i,n=z/i):T>x?T<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(T),i=E/a,n=P/a):x<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),i=z/n,a=P/n),this.set(i,a,n,r),this}let m=Math.sqrt((g-d)*(g-d)+(h-f)*(h-f)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(h-f)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends si{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let a=new kt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];let n=r.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mr=class extends Ec{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},Io=class extends kt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Tc=class extends kt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ci=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,n,s){let o=r[i+0],l=r[i+1],h=r[i+2],c=r[i+3],u=a[n+0],d=a[n+1],f=a[n+2],g=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=f,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==f){let v=1-s,m=o*u+l*d+h*f+c*g,p=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){let E=Math.sqrt(T),z=Math.atan2(E,m*p);v=Math.sin(v*z)/E,s=Math.sin(s*z)/E}let x=s*p;if(o=o*v+u*x,l=l*v+d*x,h=h*v+f*x,c=c*v+g*x,v===1-s){let E=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=E,l*=E,h*=E,c*=E}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,a,n){let s=r[i],o=r[i+1],l=r[i+2],h=r[i+3],c=a[n],u=a[n+1],d=a[n+2],f=a[n+3];return e[t]=s*f+h*c+o*d-l*u,e[t+1]=o*f+h*u+l*c-s*d,e[t+2]=l*f+h*d+s*u-o*c,e[t+3]=h*f-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(r/2),h=s(i/2),c=s(a/2),u=o(r/2),d=o(i/2),f=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c-u*d*f;break;case"YXZ":this._x=u*h*c+l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c+u*d*f;break;case"ZXY":this._x=u*h*c-l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c-u*d*f;break;case"ZYX":this._x=u*h*c-l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c+u*d*f;break;case"YZX":this._x=u*h*c+l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c-u*d*f;break;case"XZY":this._x=u*h*c-l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c+u*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=r+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-i)*d}else if(r>s&&r>c){let d=2*Math.sqrt(1+r-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(i+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-r-c);this._w=(a-l)/d,this._x=(i+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-r-s);this._w=(n-i)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=r*h+n*s+i*l-a*o,this._y=i*h+n*o+a*s-r*l,this._z=a*h+n*l+r*o-i*s,this._w=n*h-r*s-i*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,a=this._z,n=this._w,s=n*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=r,this._y=i,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=r*c+this._x*u,this._y=i*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class mh{constructor(t=0,r=0,i=0){mh.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(Do.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6]*a,this.y=n[1]*r+n[4]*i+n[7]*a,this.z=n[2]*r+n[5]*i+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=t.elements,s=1/(n[3]*r+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*r+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*r+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*i),c=2*(o*r-n*a),u=2*(n*i-s*r);return this.x=r+l*h+s*u-o*c,this.y=i+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[4]*i+n[8]*a,this.y=n[1]*r+n[5]*i+n[9]*a,this.z=n[2]*r+n[6]*i+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,a=t.y,n=t.z,s=r.x,o=r.y,l=r.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kn.copy(this).projectOnVector(t),this.sub(Kn)}reflect(t){return this.sub(Kn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return r*r+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let a=Math.sin(r)*t;return this.x=a*Math.sin(i),this.y=Math.cos(r)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=a,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kn=new L,Do=new ci,Fi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Ht):Ht.fromBufferAttribute(a,n),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ga.copy(r.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let i=e.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),va.subVectors(this.max,zi),ui.subVectors(e.a,zi),di.subVectors(e.b,zi),pi.subVectors(e.c,zi),yr.subVectors(di,ui),Sr.subVectors(pi,di),Br.subVectors(ui,pi);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-Br.z,Br.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,Br.z,0,-Br.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-Br.y,Br.x,0];return!Qn(t,ui,di,pi,va)||(t=[1,0,0,0,1,0,0,0,1],!Qn(t,ui,di,pi,va))?!1:(_a.crossVectors(yr,Sr),t=[_a.x,_a.y,_a.z],Qn(t,ui,di,pi,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},sr=[new L,new L,new L,new L,new L,new L,new L,new L],Ht=new L,ga=new Fi,ui=new L,di=new L,pi=new L,yr=new L,Sr=new L,Br=new L,zi=new L,va=new L,_a=new L,Vr=new L;function Qn(e,t,r,i,a){for(let n=0,s=e.length-3;n<=s;n+=3){Vr.fromArray(e,n);let o=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),l=t.dot(Vr),h=r.dot(Vr),c=i.dot(Vr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var bc=new Fi,Bi=new L,$n=new L,es=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):bc.setFromPoints(e).getCenter(r);let i=0;for(let a=0,n=e.length;a<n;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);let t=Bi.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Bi,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($n.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add($n)),this.expandByPoint(Bi.copy(e.center).sub($n))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},or=new L,ts=new L,xa=new L,Er=new L,rs=new L,Ma=new L,is=new L,Uo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){ts.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(ts);let a=e.distanceTo(t)*.5,n=-this.direction.dot(xa),s=Er.dot(this.direction),o=-Er.dot(xa),l=Er.lengthSq(),h=Math.abs(1-n*n),c,u,d,f;if(h>0)if(c=n*o-s,u=n*s-o,f=a*h,c>=0)if(u>=-f)if(u<=f){let g=1/h;c*=g,u*=g,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-f?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=f?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(ts).addScaledVector(xa,u),d}intersectSphere(e,t){or.subVectors(e.center,this.origin);let r=or.dot(this.direction),i=or.dot(or)-r*r,a=e.radius*e.radius;if(i>a)return null;let n=Math.sqrt(a-i),s=r-n,o=r+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(r=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(r=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),r>n||a>i||((a>r||isNaN(r))&&(r=a),(n<i||isNaN(i))&&(i=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,r,i,a){rs.subVectors(t,e),Ma.subVectors(r,e),is.crossVectors(rs,Ma);let n=this.direction.dot(is),s;if(n>0){if(i)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Er.subVectors(this.origin,e);let o=s*this.direction.dot(Ma.crossVectors(Er,Ma));if(o<0)return null;let l=s*this.direction.dot(rs.cross(Er));if(l<0||o+l>n)return null;let h=-s*Er.dot(is);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class Ws{constructor(t,r,i,a,n,s,o,l,h,c,u,d,f,g,v,m){Ws.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h,c,u,d,f,g,v,m)}set(t,r,i,a,n,s,o,l,h,c,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=r,p[8]=i,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ws().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,a=1/fi.setFromMatrixColumn(t,0).length(),n=1/fi.setFromMatrixColumn(t,1).length(),s=1/fi.setFromMatrixColumn(t,2).length();return r[0]=i[0]*a,r[1]=i[1]*a,r[2]=i[2]*a,r[3]=0,r[4]=i[4]*n,r[5]=i[5]*n,r[6]=i[6]*n,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,a=t.y,n=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,f=s*u,g=o*c,v=o*u;r[0]=l*c,r[4]=-l*u,r[8]=h,r[1]=f+g*h,r[5]=d-v*h,r[9]=-o*l,r[2]=v-d*h,r[6]=g+f*h,r[10]=s*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,g=h*c,v=h*u;r[0]=d+v*o,r[4]=g*o-f,r[8]=s*h,r[1]=s*u,r[5]=s*c,r[9]=-o,r[2]=f*o-g,r[6]=v+d*o,r[10]=s*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,g=h*c,v=h*u;r[0]=d-v*o,r[4]=-s*u,r[8]=g+f*o,r[1]=f+g*o,r[5]=s*c,r[9]=v-d*o,r[2]=-s*h,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let d=s*c,f=s*u,g=o*c,v=o*u;r[0]=l*c,r[4]=g*h-f,r[8]=d*h+v,r[1]=l*u,r[5]=v*h+d,r[9]=f*h-g,r[2]=-h,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let d=s*l,f=s*h,g=o*l,v=o*h;r[0]=l*c,r[4]=v-d*u,r[8]=g*u+f,r[1]=u,r[5]=s*c,r[9]=-o*c,r[2]=-h*c,r[6]=f*u+g,r[10]=d-v*u}else if(t.order==="XZY"){let d=s*l,f=s*h,g=o*l,v=o*h;r[0]=l*c,r[4]=-u,r[8]=h*c,r[1]=d*u+v,r[5]=s*c,r[9]=f*u-g,r[2]=g*u-f,r[6]=o*c,r[10]=v*u+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wc,t,Ac)}lookAt(t,r,i){let a=this.elements;return Ct.subVectors(t,r),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),Tr.crossVectors(i,Ct),Tr.lengthSq()===0&&(Math.abs(i.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),Tr.crossVectors(i,Ct)),Tr.normalize(),ya.crossVectors(Ct,Tr),a[0]=Tr.x,a[4]=ya.x,a[8]=Ct.x,a[1]=Tr.y,a[5]=ya.y,a[9]=Ct.y,a[2]=Tr.z,a[6]=ya.z,a[10]=Ct.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],x=i[7],E=i[11],z=i[15],P=a[0],C=a[4],U=a[8],y=a[12],S=a[1],R=a[5],F=a[9],B=a[13],G=a[2],Y=a[6],X=a[10],ee=a[14],j=a[3],le=a[7],ce=a[11],Ie=a[15];return n[0]=s*P+o*S+l*G+h*j,n[4]=s*C+o*R+l*Y+h*le,n[8]=s*U+o*F+l*X+h*ce,n[12]=s*y+o*B+l*ee+h*Ie,n[1]=c*P+u*S+d*G+f*j,n[5]=c*C+u*R+d*Y+f*le,n[9]=c*U+u*F+d*X+f*ce,n[13]=c*y+u*B+d*ee+f*Ie,n[2]=g*P+v*S+m*G+p*j,n[6]=g*C+v*R+m*Y+p*le,n[10]=g*U+v*F+m*X+p*ce,n[14]=g*y+v*B+m*ee+p*Ie,n[3]=T*P+x*S+E*G+z*j,n[7]=T*C+x*R+E*Y+z*le,n[11]=T*U+x*F+E*X+z*ce,n[15]=T*y+x*B+E*ee+z*Ie,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+n*l*u-a*h*u-n*o*d+i*h*d+a*o*f-i*l*f)+v*(+r*l*f-r*h*d+n*s*d-a*s*f+a*h*c-n*l*c)+m*(+r*h*u-r*o*f-n*s*u+i*s*f+n*o*c-i*h*c)+p*(-a*o*c-r*l*u+r*o*d+a*s*u-i*s*d+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=r,a[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=u*m*h-v*d*h+v*l*f-o*m*f-u*l*p+o*d*p,x=g*d*h-c*m*h-g*l*f+s*m*f+c*l*p-s*d*p,E=c*v*h-g*u*h+g*o*f-s*v*f-c*o*p+s*u*p,z=g*u*l-c*v*l-g*o*d+s*v*d+c*o*m-s*u*m,P=r*T+i*x+a*E+n*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return t[0]=T*C,t[1]=(v*d*n-u*m*n-v*a*f+i*m*f+u*a*p-i*d*p)*C,t[2]=(o*m*n-v*l*n+v*a*h-i*m*h-o*a*p+i*l*p)*C,t[3]=(u*l*n-o*d*n-u*a*h+i*d*h+o*a*f-i*l*f)*C,t[4]=x*C,t[5]=(c*m*n-g*d*n+g*a*f-r*m*f-c*a*p+r*d*p)*C,t[6]=(g*l*n-s*m*n-g*a*h+r*m*h+s*a*p-r*l*p)*C,t[7]=(s*d*n-c*l*n+c*a*h-r*d*h-s*a*f+r*l*f)*C,t[8]=E*C,t[9]=(g*u*n-c*v*n-g*i*f+r*v*f+c*i*p-r*u*p)*C,t[10]=(s*v*n-g*o*n+g*i*h-r*v*h-s*i*p+r*o*p)*C,t[11]=(c*o*n-s*u*n-c*i*h+r*u*h+s*i*f-r*o*f)*C,t[12]=z*C,t[13]=(c*v*a-g*u*a+g*i*d-r*v*d-c*i*m+r*u*m)*C,t[14]=(g*o*a-s*v*a-g*i*l+r*v*l+s*i*m-r*o*m)*C,t[15]=(s*u*a-c*o*a+c*i*l-r*u*l-s*i*d+r*o*d)*C,this}scale(t){let r=this.elements,i=t.x,a=t.y,n=t.z;return r[0]*=i,r[4]*=a,r[8]*=n,r[1]*=i,r[5]*=a,r[9]*=n,r[2]*=i,r[6]*=a,r[10]*=n,r[3]*=i,r[7]*=a,r[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,a))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),a=Math.sin(r),n=1-i,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+i,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+i,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,a,n,s){return this.set(1,i,n,0,t,1,s,0,r,a,1,0,0,0,0,1),this}compose(t,r,i){let a=this.elements,n=r._x,s=r._y,o=r._z,l=r._w,h=n+n,c=s+s,u=o+o,d=n*h,f=n*c,g=n*u,v=s*c,m=s*u,p=o*u,T=l*h,x=l*c,E=l*u,z=i.x,P=i.y,C=i.z;return a[0]=(1-(v+p))*z,a[1]=(f+E)*z,a[2]=(g-x)*z,a[3]=0,a[4]=(f-E)*P,a[5]=(1-(d+p))*P,a[6]=(m+T)*P,a[7]=0,a[8]=(g+x)*C,a[9]=(m-T)*C,a[10]=(1-(d+v))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,r,i){let a=this.elements,n=fi.set(a[0],a[1],a[2]).length(),s=fi.set(a[4],a[5],a[6]).length(),o=fi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Gt.copy(this);let l=1/n,h=1/s,c=1/o;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=c,Gt.elements[9]*=c,Gt.elements[10]*=c,r.setFromRotationMatrix(Gt),i.x=n,i.y=s,i.z=o,this}makePerspective(t,r,i,a,n,s,o=ar){let l=this.elements,h=2*n/(r-t),c=2*n/(i-a),u=(r+t)/(r-t),d=(i+a)/(i-a),f,g;if(o===ar)f=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===fa)f=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,i,a,n,s,o=ar){let l=this.elements,h=1/(r-t),c=1/(i-a),u=1/(s-n),d=(r+t)*h,f=(i+a)*c,g,v;if(o===ar)g=(s+n)*u,v=-2*u;else if(o===fa)g=n*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<16;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},fi=new L,Gt=new lt,wc=new L(0,0,0),Ac=new L(1,1,1),Tr=new L,ya=new L,Ct=new L,No=new lt,Oo=new ci,br=class gh{constructor(t=0,r=0,i=0,a=gh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,a=this._order){return this._x=t,this._y=r,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],f=a[10];switch(r){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};br.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rc=0,Fo=new L,mi=new ci,lr=new lt,Sa=new L,Vi=new L,Cc=new L,Pc=new ci,zo=new L(1,0,0),Bo=new L(0,1,0),Vo=new L(0,0,1),ko={type:"added"},Lc={type:"removed"},gi={type:"childadded",child:null},ns={type:"childremoved",child:null},Dt=class Ka extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ka.DEFAULT_UP.clone();let t=new L,r=new br,i=new ci,a=new L(1,1,1);function n(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new lt},normalMatrix:{value:new Je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ka.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ka.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return mi.setFromAxisAngle(t,r),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,r){return mi.setFromAxisAngle(t,r),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(zo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,r){return Fo.copy(t).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(zo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?Sa.copy(t):Sa.set(t,r,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Vi,Sa,this.up):lr.lookAt(Sa,Vi,this.up),this.quaternion.setFromRotationMatrix(lr),a&&(lr.extractRotation(a.matrixWorld),mi.setFromRotationMatrix(lr),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ko),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(Lc),ns.child=t,this.dispatchEvent(ns),ns.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ko),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,a=this.children.length;i<a;i++){let n=this.children[i].getObjectByProperty(t,r);if(n!==void 0)return n}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,Cc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Pc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),f=s(t.animations),g=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=a,i;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};Dt.DEFAULT_UP=new L(0,1,0),Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=new L,hr=new L,ss=new L,cr=new L,vi=new L,_i=new L,Ho=new L,os=new L,ls=new L,hs=new L,cs=new rt,us=new rt,ds=new rt,ki=class Ri{constructor(t=new L,r=new L,i=new L){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,a){a.subVectors(i,r),Wt.subVectors(t,r),a.cross(Wt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,r,i,a,n){Wt.subVectors(a,r),hr.subVectors(i,r),ss.subVectors(t,r);let s=Wt.dot(Wt),o=Wt.dot(hr),l=Wt.dot(ss),h=hr.dot(hr),c=hr.dot(ss),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,f=(h*l-o*c)*d,g=(s*c-o*l)*d;return n.set(1-f-g,g,f)}static containsPoint(t,r,i,a){return this.getBarycoord(t,r,i,a,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(t,r,i,a,n,s,o,l){return this.getBarycoord(t,r,i,a,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,cr.x),l.addScaledVector(s,cr.y),l.addScaledVector(o,cr.z),l)}static getInterpolatedAttribute(t,r,i,a,n,s){return cs.setScalar(0),us.setScalar(0),ds.setScalar(0),cs.fromBufferAttribute(t,r),us.fromBufferAttribute(t,i),ds.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(cs,n.x),s.addScaledVector(us,n.y),s.addScaledVector(ds,n.z),s}static isFrontFacing(t,r,i,a){return Wt.subVectors(i,r),hr.subVectors(t,r),Wt.cross(hr).dot(a)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,a){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,r,i,a){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wt.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Wt.cross(hr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return Ri.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,a,n){return Ri.getInterpolation(t,this.a,this.b,this.c,r,i,a,n)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,a=this.b,n=this.c,s,o;vi.subVectors(a,i),_i.subVectors(n,i),os.subVectors(t,i);let l=vi.dot(os),h=_i.dot(os);if(l<=0&&h<=0)return r.copy(i);ls.subVectors(t,a);let c=vi.dot(ls),u=_i.dot(ls);if(c>=0&&u<=c)return r.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(vi,s);hs.subVectors(t,n);let f=vi.dot(hs),g=_i.dot(hs);if(g>=0&&f<=g)return r.copy(n);let v=f*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),r.copy(i).addScaledVector(_i,o);let m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return Ho.subVectors(n,a),o=(u-c)/(u-c+(f-g)),r.copy(a).addScaledVector(Ho,o);let p=1/(m+v+d);return s=v*p,o=d*p,r.copy(i).addScaledVector(vi,s).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function ps(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var Xe=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=Ze.workingColorSpace){if(e=mc(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+t):r+t-r*t,n=2*r-a;this.r=ps(n,a,e+1/3),this.g=ps(n,a,e),this.b=ps(n,a,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let r=Go[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ze.fromWorkingColorSpace(yt.copy(this),e),Math.round(xt(yt.r*255,0,255))*65536+Math.round(xt(yt.g*255,0,255))*256+Math.round(xt(yt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(yt.copy(this),t);let r=yt.r,i=yt.g,a=yt.b,n=Math.max(r,i,a),s=Math.min(r,i,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case r:o=(i-a)/c+(i<a?6:0);break;case i:o=(a-r)/c+2;break;case a:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=gt){Ze.fromWorkingColorSpace(yt.copy(this),e);let t=yt.r,r=yt.g,i=yt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Ea);let r=Yn(wr.h,Ea.h,t),i=Yn(wr.s,Ea.s,t),a=Yn(wr.l,Ea.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yt=new Xe;Xe.NAMES=Go;var Ic=0,Hi=class extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=oi(),this.name="",this.blending=Zr,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=$a,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qa&&(r.blendSrc=this.blendSrc),this.blendDst!==$a&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=i(e.textures),n=i(e.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ar=class extends Hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dt=new L,Ta=new pe,Ut=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=So,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ni(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=wt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),i=wt(i,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}},Wo=class extends Ut{constructor(e,t,r){super(new Uint16Array(e),t,r)}},Xo=class extends Ut{constructor(e,t,r){super(new Uint32Array(e),t,r)}},vt=class extends Ut{constructor(e,t,r){super(new Float32Array(e),t,r)}},Dc=0,Nt=new lt,fs=new Dt,xi=new L,Pt=new Fi,Gi=new Fi,_t=new L,Xt=class vh extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(To(t)?Xo:Wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new Je().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nt.makeRotationFromQuaternion(t),this.applyMatrix4(Nt),this}rotateX(t){return Nt.makeRotationX(t),this.applyMatrix4(Nt),this}rotateY(t){return Nt.makeRotationY(t),this.applyMatrix4(Nt),this}rotateZ(t){return Nt.makeRotationZ(t),this.applyMatrix4(Nt),this}translate(t,r,i){return Nt.makeTranslation(t,r,i),this.applyMatrix4(Nt),this}scale(t,r,i){return Nt.makeScale(t,r,i),this.applyMatrix4(Nt),this}lookAt(t){return fs.lookAt(t),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new vt(i,3))}else{for(let i=0,a=r.count;i<a;i++){let n=t[i];r.setXYZ(i,n.x,n.y,n.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,a=r.length;i<a;i++){let n=r[i];Pt.setFromBufferAttribute(n),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Pt.setFromBufferAttribute(t),r)for(let n=0,s=r.length;n<s;n++){let o=r[n];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Pt.min,Gi.min),Pt.expandByPoint(_t),_t.addVectors(Pt.max,Gi.max),Pt.expandByPoint(_t)):(Pt.expandByPoint(Gi.min),Pt.expandByPoint(Gi.max))}Pt.getCenter(i);let a=0;for(let n=0,s=t.count;n<s;n++)_t.fromBufferAttribute(t,n),a=Math.max(a,i.distanceToSquared(_t));if(r)for(let n=0,s=r.length;n<s;n++){let o=r[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)_t.fromBufferAttribute(o,h),l&&(xi.fromBufferAttribute(t,h),_t.add(xi)),a=Math.max(a,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,a=r.normal,n=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new L,l[U]=new L;let h=new L,c=new L,u=new L,d=new pe,f=new pe,g=new pe,v=new L,m=new L;function p(U,y,S){h.fromBufferAttribute(i,U),c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,S),d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,y),g.fromBufferAttribute(n,S),c.sub(h),u.sub(h),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(R),o[U].add(v),o[y].add(v),o[S].add(v),l[U].add(m),l[y].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,y=T.length;U<y;++U){let S=T[U],R=S.start,F=S.count;for(let B=R,G=R+F;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new L,E=new L,z=new L,P=new L;function C(U){z.fromBufferAttribute(a,U),P.copy(z);let y=o[U];x.copy(y),x.sub(z.multiplyScalar(z.dot(y))).normalize(),E.crossVectors(P,y);let S=E.dot(l[U])<0?-1:1;s.setXYZW(U,x.x,x.y,x.z,S)}for(let U=0,y=T.length;U<y;++U){let S=T[U],R=S.start,F=S.count;for(let B=R,G=R+F;B<G;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let a=new L,n=new L,s=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(r,g),n.fromBufferAttribute(r,v),s.fromBufferAttribute(r,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=r.count;d<f;d+=3)a.fromBufferAttribute(r,d+0),n.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)_t.fromBufferAttribute(t,r),_t.normalize(),t.setXYZ(r,_t.x,_t.y,_t.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new Ut(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new vh,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,i);r.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,i);l.push(f)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];r.addGroup(h.start,h.count,h.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(r));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(r))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(r));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jo=new lt,kr=new Uo,ba=new es,qo=new L,wa=new L,Aa=new L,Ra=new L,ms=new L,Ca=new L,Yo=new L,Pa=new L,pt=class extends Dt{constructor(e=new Xt,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(a&&s){Ca.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(ms.fromBufferAttribute(c,e),n?Ca.addScaledVector(ms,h):Ca.addScaledVector(ms.sub(t),h))}t.add(Ca)}return t}raycast(e,t){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ba.copy(r.boundingSphere),ba.applyMatrix4(a),kr.copy(e.ray).recast(e.near),!(ba.containsPoint(kr.origin)===!1&&(kr.intersectSphere(ba,qo)===null||kr.origin.distanceToSquared(qo)>(e.far-e.near)**2))&&(jo.copy(a).invert(),kr.copy(e.ray).applyMatrix4(jo),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,r){let i,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){let v=u[f],m=n[v.materialIndex],p=Math.max(v.start,d.start),T=Math.min(s.count,Math.min(v.start+v.count,d.start+d.count));for(let x=p,E=T;x<E;x+=3){let z=s.getX(x),P=s.getX(x+1),C=s.getX(x+2);i=La(this,m,e,r,l,h,c,z,P,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let f=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let v=f,m=g;v<m;v+=3){let p=s.getX(v),T=s.getX(v+1),x=s.getX(v+2);i=La(this,n,e,r,l,h,c,p,T,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){let v=u[f],m=n[v.materialIndex],p=Math.max(v.start,d.start),T=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let x=p,E=T;x<E;x+=3){let z=x,P=x+1,C=x+2;i=La(this,m,e,r,l,h,c,z,P,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let f=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=f,m=g;v<m;v+=3){let p=v,T=v+1,x=v+2;i=La(this,n,e,r,l,h,c,p,T,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function Uc(e,t,r,i,a,n,s,o){let l;if(t.side===bt?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,t.side===vr,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(e.matrixWorld);let h=r.ray.origin.distanceTo(Pa);return h<r.near||h>r.far?null:{distance:h,point:Pa.clone(),object:e}}function La(e,t,r,i,a,n,s,o,l,h){e.getVertexPosition(o,wa),e.getVertexPosition(l,Aa),e.getVertexPosition(h,Ra);let c=Uc(e,t,r,i,wa,Aa,Ra,Yo);if(c){let u=new L;ki.getBarycoord(Yo,wa,Aa,Ra,u),a&&(c.uv=ki.getInterpolatedAttribute(a,o,l,h,u,new pe)),n&&(c.uv1=ki.getInterpolatedAttribute(n,o,l,h,u,new pe)),s&&(c.normal=ki.getInterpolatedAttribute(s,o,l,h,u,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new L,materialIndex:0};ki.getNormal(wa,Aa,Ra,d.normal),c.face=d,c.barycoord=u}return c}var Rr=class _h extends Xt{constructor(t=1,r=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,r,t,s,n,0),g("z","y","x",1,-1,i,r,-t,s,n,1),g("x","z","y",1,1,t,i,r,a,s,2),g("x","z","y",1,-1,t,i,-r,a,s,3),g("x","y","z",1,-1,t,r,i,a,n,4),g("x","y","z",-1,-1,t,r,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(u,2));function g(v,m,p,T,x,E,z,P,C,U,y){let S=E/C,R=z/U,F=E/2,B=z/2,G=P/2,Y=C+1,X=U+1,ee=0,j=0,le=new L;for(let ce=0;ce<X;ce++){let Ie=ce*R-B;for(let ze=0;ze<Y;ze++){let q=ze*S-F;le[v]=q*T,le[m]=Ie*x,le[p]=G,h.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=P>0?1:-1,c.push(le.x,le.y,le.z),u.push(ze/C),u.push(1-ce/U),ee+=1}}for(let ce=0;ce<U;ce++)for(let Ie=0;Ie<C;Ie++){let ze=d+Ie+Y*ce,q=d+Ie+Y*(ce+1),se=d+(Ie+1)+Y*(ce+1),ye=d+(Ie+1)+Y*ce;l.push(ze,q,ye),l.push(q,se,ye),j+=6}o.addGroup(f,j,y),f+=j,d+=ee}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _h(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Mi(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let a=e[r][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=a.clone():Array.isArray(a)?t[r][i]=a.slice():t[r][i]=a}}return t}function Et(e){let t={};for(let r=0;r<e.length;r++){let i=Mi(e[r]);for(let a in i)t[a]=i[a]}return t}function Nc(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function Jo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ze.workingColorSpace}var Oc={clone:Mi,merge:Et},Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends Hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Nc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},Zo=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cr=new L,Ko=new pe,Qo=new pe,At=class extends Zo{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qn*2*Math.atan(Math.tan(jn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,Qo),t.subVectors(Qo,Ko)}setViewOffset(e,t,r,i,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jn*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*i/o,t-=n.offsetY*r/l,i*=n.width/o,r*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yi=-90,Si=1,Bc=class extends Dt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new At(yi,Si,e,t);i.layers=this.layers,this.add(i);let a=new At(yi,Si,e,t);a.layers=this.layers,this.add(a);let n=new At(yi,Si,e,t);n.layers=this.layers,this.add(n);let s=new At(yi,Si,e,t);s.layers=this.layers,this.add(s);let o=new At(yi,Si,e,t);o.layers=this.layers,this.add(o);let l=new At(yi,Si,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===ar)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===fa)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,n),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},$o=class extends kt{constructor(e,t,r,i,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,r,i,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vc=class extends Mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new $o(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rr(5,5,5),a=new Yt({name:"CubemapFromEquirect",uniforms:Mi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bt,blending:_r});a.uniforms.tEquirect.value=t;let n=new pt(i,a),s=t.minFilter;return t.minFilter===tr&&(t.minFilter=It),new Bc(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,r,i){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,i);e.setRenderTarget(a)}},gs=new L,kc=new L,Hc=new Je,Hr=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=gs.subVectors(r,t).cross(kc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(gs),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||Hc.getNormalMatrix(e),i=this.coplanarPoint(gs).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gr=new es,Ia=new L,vs=class{constructor(e=new Hr,t=new Hr,r=new Hr,i=new Hr,a=new Hr,n=new Hr){this.planes=[e,t,r,i,a,n]}set(e,t,r,i,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ar){let r=this.planes,i=e.elements,a=i[0],n=i[1],s=i[2],o=i[3],l=i[4],h=i[5],c=i[6],u=i[7],d=i[8],f=i[9],g=i[10],v=i[11],m=i[12],p=i[13],T=i[14],x=i[15];if(r[0].setComponents(o-a,u-l,v-d,x-m).normalize(),r[1].setComponents(o+a,u+l,v+d,x+m).normalize(),r[2].setComponents(o+n,u+h,v+f,x+p).normalize(),r[3].setComponents(o-n,u-h,v-f,x-p).normalize(),r[4].setComponents(o-s,u-c,v-g,x-T).normalize(),t===ar)r[5].setComponents(o+s,u+c,v+g,x+T).normalize();else if(t===fa)r[5].setComponents(s,c,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(Ia.x=i.normal.x>0?e.max.x:e.min.x,Ia.y=i.normal.y>0?e.max.y:e.min.y,Ia.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function el(){let e=null,t=!1,r=null,i=null;function a(n,s){r(n,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){r=n},setContext:function(n){e=n}}}function Gc(e){let t=new WeakMap;function r(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,r(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var ur=class xh extends Xt{constructor(t=1,r=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:a};let n=t/2,s=r/2,o=Math.floor(i),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=r/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){let T=p*d-s;for(let x=0;x<h;x++){let E=x*u-n;g.push(E,-T,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let x=T+h*p,E=T+h*(p+1),z=T+1+h*(p+1),P=T+1+h*p;f.push(x,E,P),f.push(E,z,P)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xh(t.width,t.height,t.widthSegments,t.heightSegments)}},Wc=`#ifdef USE_ALPHAHASH
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
#endif`,Jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zc=`#ifdef USE_AOMAP
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
#endif`,Qc=`#ifdef USE_BATCHING
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
#endif`,$c=`#ifdef USE_BATCHING
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
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
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
}`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nu=`uniform bool receiveShadow;
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
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$u=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
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
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
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
}`,Jd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,Qd=`#define DISTANCE
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
}`,$d=`varying vec3 vWorldDirection;
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
}`,Mp=`uniform vec3 color;
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
}`,yp=`uniform float rotation;
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
}`,Ye={alphahash_fragment:Wc,alphahash_pars_fragment:Xc,alphamap_fragment:jc,alphamap_pars_fragment:qc,alphatest_fragment:Yc,alphatest_pars_fragment:Jc,aomap_fragment:Zc,aomap_pars_fragment:Kc,batching_pars_vertex:Qc,batching_vertex:$c,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:ru,iridescence_fragment:iu,bumpmap_pars_fragment:au,clipping_planes_fragment:nu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:hu,color_pars_fragment:cu,color_pars_vertex:uu,color_vertex:du,common:pu,cube_uv_reflection_fragment:fu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:vu,emissivemap_fragment:_u,emissivemap_pars_fragment:xu,colorspace_fragment:Mu,colorspace_pars_fragment:yu,envmap_fragment:Su,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Ou,envmap_vertex:wu,fog_vertex:Au,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Uu,lights_pars_begin:Nu,lights_toon_fragment:Fu,lights_toon_pars_fragment:zu,lights_phong_fragment:Bu,lights_phong_pars_fragment:Vu,lights_physical_fragment:ku,lights_physical_pars_fragment:Hu,lights_fragment_begin:Gu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:qu,logdepthbuf_pars_vertex:Yu,logdepthbuf_vertex:Ju,map_fragment:Zu,map_pars_fragment:Ku,map_particle_fragment:Qu,map_particle_pars_fragment:$u,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphinstance_vertex:rd,morphcolor_vertex:id,morphnormal_vertex:ad,morphtarget_pars_vertex:nd,morphtarget_vertex:sd,normal_fragment_begin:od,normal_fragment_maps:ld,normal_pars_fragment:hd,normal_pars_vertex:cd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:vd,packing:_d,premultiplied_alpha_fragment:xd,project_vertex:Md,dithering_fragment:yd,dithering_pars_fragment:Sd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:wd,shadowmap_vertex:Ad,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Id,specularmap_fragment:Dd,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Od,transmission_fragment:Fd,transmission_pars_fragment:zd,uv_pars_fragment:Bd,uv_pars_vertex:Vd,uv_vertex:kd,worldpos_vertex:Hd,background_vert:Gd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:jd,cube_vert:qd,cube_frag:Yd,depth_vert:Jd,depth_frag:Zd,distanceRGBA_vert:Kd,distanceRGBA_frag:Qd,equirect_vert:$d,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:rp,meshbasic_vert:ip,meshbasic_frag:ap,meshlambert_vert:np,meshlambert_frag:sp,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:hp,meshnormal_frag:cp,meshphong_vert:up,meshphong_frag:dp,meshphysical_vert:pp,meshphysical_frag:fp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:vp,points_frag:_p,shadow_vert:xp,shadow_frag:Mp,sprite_vert:yp,sprite_frag:Sp},fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Jt={basic:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Et([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Et([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Et([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Et([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Et([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Et([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Et([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Et([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Et([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Et([fe.lights,fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Jt.physical={uniforms:Et([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Da={r:0,b:0,g:0},Wr=new br,Ep=new lt;function Tp(e,t,r,i,a,n,s){let o=new Xe(0),l=n===!0?0:1,h,c,u=null,d=0,f=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?r:t).get(x)),x}function v(T){let x=!1,E=g(T);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);let z=e.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,s):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(T,x){let E=g(x);E&&(E.isCubeTexture||E.mapping===na)?(c===void 0&&(c=new pt(new Rr(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Mi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(z,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Wr.copy(x.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(Wr)),c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==$e,(u!==E||d!==E.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=e.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new pt(new ur(2,2),new Yt({name:"BackgroundMaterial",uniforms:Mi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(E.colorSpace)!==$e,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=e.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,x){T.getRGB(Da,Jo(e)),i.buffers.color.setClear(Da.r,Da.g,Da.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(T,x=1){o.set(T),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:v,addToRenderList:m}}function bp(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null),n=a,s=!1;function o(S,R,F,B,G){let Y=!1,X=u(B,F,R);n!==X&&(n=X,h(n.object)),Y=f(S,B,F,G),Y&&g(S,B,F,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,E(S,R,F,B),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function u(S,R,F){let B=F.wireframe===!0,G=i[S.id];G===void 0&&(G={},i[S.id]=G);let Y=G[R.id];Y===void 0&&(Y={},G[R.id]=Y);let X=Y[B];return X===void 0&&(X=d(l()),Y[B]=X),X}function d(S){let R=[],F=[],B=[];for(let G=0;G<r;G++)R[G]=0,F[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,R,F,B){let G=n.attributes,Y=R.attributes,X=0,ee=F.getAttributes();for(let j in ee)if(ee[j].location>=0){let le=G[j],ce=Y[j];if(ce===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),le===void 0||le.attribute!==ce||ce&&le.data!==ce.data)return!0;X++}return n.attributesNum!==X||n.index!==B}function g(S,R,F,B){let G={},Y=R.attributes,X=0,ee=F.getAttributes();for(let j in ee)if(ee[j].location>=0){let le=Y[j];le===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));let ce={};ce.attribute=le,le&&le.data&&(ce.data=le.data),G[j]=ce,X++}n.attributes=G,n.attributesNum=X,n.index=B}function v(){let S=n.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){let F=n.newAttributes,B=n.enabledAttributes,G=n.attributeDivisors;F[S]=1,B[S]===0&&(e.enableVertexAttribArray(S),B[S]=1),G[S]!==R&&(e.vertexAttribDivisor(S,R),G[S]=R)}function T(){let S=n.newAttributes,R=n.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==S[F]&&(e.disableVertexAttribArray(F),R[F]=0)}function x(S,R,F,B,G,Y,X){X===!0?e.vertexAttribIPointer(S,R,F,G,Y):e.vertexAttribPointer(S,R,F,B,G,Y)}function E(S,R,F,B){v();let G=B.attributes,Y=F.getAttributes(),X=R.defaultAttributeValues;for(let ee in Y){let j=Y[ee];if(j.location>=0){let le=G[ee];if(le===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){let ce=le.normalized,Ie=le.itemSize,ze=t.get(le);if(ze===void 0)continue;let q=ze.buffer,se=ze.type,ye=ze.bytesPerElement,Ee=se===e.INT||se===e.UNSIGNED_INT||le.gpuType===dn;if(le.isInterleavedBufferAttribute){let ue=le.data,Re=ue.stride,Be=le.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<j.locationSize;De++)p(j.location+De,ue.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<j.locationSize;De++)m(j.location+De);e.bindBuffer(e.ARRAY_BUFFER,q);for(let De=0;De<j.locationSize;De++)x(j.location+De,Ie/j.locationSize,se,ce,Re*ye,(Be+Ie/j.locationSize*De)*ye,Ee)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)p(j.location+ue,le.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<j.locationSize;ue++)m(j.location+ue);e.bindBuffer(e.ARRAY_BUFFER,q);for(let ue=0;ue<j.locationSize;ue++)x(j.location+ue,Ie/j.locationSize,se,ce,Ie*ye,Ie/j.locationSize*ue*ye,Ee)}}else if(X!==void 0){let ce=X[ee];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(j.location,ce);break;case 3:e.vertexAttrib3fv(j.location,ce);break;case 4:e.vertexAttrib4fv(j.location,ce);break;default:e.vertexAttrib1fv(j.location,ce)}}}}T()}function z(){U();for(let S in i){let R=i[S];for(let F in R){let B=R[F];for(let G in B)c(B[G].object),delete B[G];delete R[F]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;let R=i[S.id];for(let F in R){let B=R[F];for(let G in B)c(B[G].object),delete B[G];delete R[F]}delete i[S.id]}function C(S){for(let R in i){let F=i[R];if(F[S.id]===void 0)continue;let B=F[S.id];for(let G in B)c(B[G].object),delete B[G];delete F[S.id]}}function U(){y(),s=!0,n!==a&&(n=a,h(n.object))}function y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function wp(e,t,r){let i;function a(h){i=h}function n(h,c){e.drawArrays(i,h,c),r.update(c,i,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(i,h,c,u),r.update(c,i,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];r.update(d,i,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)s(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];r.update(g,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ap(e,t,r,i){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Vt&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let U=C===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==rr&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ir&&!U)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=r.precision!==void 0?r.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:z,maxSamples:P}}function Rp(e){let t=this,r=null,i=0,a=!1,n=!1,s=new Hr,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||a;return a=d,i=u.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){r=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=e.get(u);if(!a||g===null||g.length===0||n&&!m)n?c(null):h();else{let T=n?0:i,x=T*4,E=p.clippingState||null;l.value=E,E=c(g,d,x,f);for(let z=0;z!==x;++z)E[z]=r[z];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==v;++x,E+=4)s.copy(u[x]).applyMatrix4(T,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Cp(e){let t=new WeakMap;function r(s,o){return o===ln?s.mapping=Qr:o===hn&&(s.mapping=$r),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===ln||o===hn)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Vc(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),r(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:i,dispose:n}}var tl=class extends Zo{constructor(e=-1,t=1,r=1,i=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-e,n=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ei=4,rl=[.125,.215,.35,.446,.526,.582],Xr=20,_s=new tl,il=new Xe,xs=null,Ms=0,ys=0,Ss=!1,jr=(1+Math.sqrt(5))/2,Ti=1/jr,al=[new L(-jr,Ti,0),new L(jr,Ti,0),new L(-Ti,0,jr),new L(Ti,0,jr),new L(0,jr,-Ti),new L(0,jr,Ti),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Es=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xs,Ms,ys),this._renderer.xr.enabled=Ss,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:It,minFilter:It,generateMipmaps:!1,type:ei,format:Vt,colorSpace:ai,depthBuffer:!1},i=nl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,r);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(a)),this._blurMaterial=Lp(a,e,t)}return i}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,_s)}_sceneToCubeUV(e,t,r,i){let a=new At(90,1,t,r),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(il),o.toneMapping=er,o.autoClear=!1;let c=new Ar({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),u=new pt(new Rr,c),d=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,d=!0):(c.color.copy(il),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,n[g],0),a.lookAt(s[g],0,0)):v===1?(a.up.set(0,0,n[g]),a.lookAt(0,s[g],0)):(a.up.set(0,n[g],0),a.lookAt(0,0,s[g]));let m=this._cubeSize;Ua(i,v*m,g>2?m:0,m,m),o.setRenderTarget(i),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===Qr||e.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());let a=i?this._cubemapMaterial:this._equirectMaterial,n=new pt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Ua(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(n,_s)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let a=1;a<i;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=al[(i-a-1)%al.length];this._blur(e,a-1,a,n,s)}t.autoClear=r}_blur(e,t,r,i,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,i,"latitudinal",a),this._halfBlur(n,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new pt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[r]-1,f=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Xr-1),g=a/f,v=isFinite(a)?1+Math.floor(h*g):Xr;v>Xr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xr}`);let m=[],p=0;for(let P=0;P<Xr;++P){let C=P/g,U=Math.exp(-C*C/2);m.push(U),P===0?p+=U:P<v&&(p+=2*U)}for(let P=0;P<m.length;P++)m[P]=m[P]/p;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:T}=this;u.dTheta.value=f,u.mipInt.value=T-r;let x=this._sizeLods[i],E=3*x*(i>T-Ei?i-T+Ei:0),z=4*(this._cubeSize-x);Ua(t,E,z,3*x,2*x),o.setRenderTarget(t),o.render(c,_s)}};function Pp(e){let t=[],r=[],i=[],a=e,n=e-Ei+1+rl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);r.push(o);let l=1/o;s>e-Ei?l=rl[s-e+Ei-1]:s===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),x=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let P=0;P<f;P++){let C=P%3*2/3-1,U=P>2?0:-1,y=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];T.set(y,v*g*P),x.set(d,m*g*P);let S=[P,P,P,P,P,P];E.set(S,p*g*P)}let z=new Xt;z.setAttribute("position",new Ut(T,v)),z.setAttribute("uv",new Ut(x,m)),z.setAttribute("faceIndex",new Ut(E,p)),t.push(z),a>Ei&&a--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function nl(e,t,r){let i=new Mr(e,t,r);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(e,t,r,i,a){e.viewport.set(t,r,i,a),e.scissor.set(t,r,i,a)}function Lp(e,t,r){let i=new Float32Array(Xr),a=new L(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function sl(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function ol(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Ts(){return`

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
	`}function Ip(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===ln||l===hn,c=l===Qr||l===$r;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return r===null&&(r=new Es(e)),u=h?r.fromEquirectangular(o,u):r.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return h&&f&&f.height>0||c&&f&&a(f)?(r===null&&(r=new Es(e)),u=h?r.fromEquirectangular(o):r.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function Dp(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let a=r(i);return a===null&&Oi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Up(e,t,r,i){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",s),delete a[d.id];let f=n.get(d);f&&(t.remove(f),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,r.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],e.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let T=f.array;v=f.version;for(let x=0,E=T.length;x<E;x+=3){let z=T[x+0],P=T[x+1],C=T[x+2];d.push(z,P,P,C,C,z)}}else if(g!==void 0){let T=g.array;v=g.version;for(let x=0,E=T.length/3-1;x<E;x+=3){let z=x+0,P=x+1,C=x+2;d.push(z,P,P,C,C,z)}}else return;let m=new(To(d)?Xo:Wo)(d,1);m.version=v;let p=n.get(u);p&&t.remove(p),n.set(u,m)}function c(u){let d=n.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Np(e,t,r){let i;function a(d){i=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,f){e.drawElements(i,f,n,d*s),r.update(f,i,1)}function h(d,f,g){g!==0&&(e.drawElementsInstanced(i,f,n,d*s,g),r.update(f,i,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,n,d,0,g);let v=0;for(let m=0;m<g;m++)v+=f[m];r.update(v,i,1)}function u(d,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/s,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,n,d,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];r.update(p,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Op(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(n/3);break;case e.LINES:r.lines+=o*(n/2);break;case e.LINE_STRIP:r.lines+=o*(n-1);break;case e.LINE_LOOP:r.lines+=o*n;break;case e.POINTS:r.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:a,update:i}}function Fp(e,t,r){let i=new WeakMap,a=new rt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(o);if(d===void 0||d.count!==u){let f=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let z=o.attributes.position.count*E,P=1;z>t.maxTextureSize&&(P=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);let C=new Float32Array(z*P*4*u),U=new Io(C,z,P,u);U.type=ir,U.needsUpdate=!0;let y=E*4;for(let S=0;S<u;S++){let R=p[S],F=T[S],B=x[S],G=z*P*4*S;for(let Y=0;Y<R.count;Y++){let X=Y*y;g===!0&&(a.fromBufferAttribute(R,Y),C[G+X+0]=a.x,C[G+X+1]=a.y,C[G+X+2]=a.z,C[G+X+3]=0),v===!0&&(a.fromBufferAttribute(F,Y),C[G+X+4]=a.x,C[G+X+5]=a.y,C[G+X+6]=a.z,C[G+X+7]=0),m===!0&&(a.fromBufferAttribute(B,Y),C[G+X+8]=a.x,C[G+X+9]=a.y,C[G+X+10]=a.z,C[G+X+11]=B.itemSize===4?a.w:1)}}d={count:u,texture:U,size:new pe(z,P)},i.set(o,d),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let f=0;for(let v=0;v<h.length;v++)f+=h[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function zp(e,t,r,i){let a=new WeakMap;function n(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),r.remove(h.instanceMatrix),h.instanceColor!==null&&r.remove(h.instanceColor)}return{update:n,dispose:s}}var ll=class extends kt{constructor(e,t,r,i,a,n,s,o,l,h=ri){if(h!==ri&&h!==ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===ri&&(r=zr),r===void 0&&h===ii&&(r=ti),super(null,i,a,n,s,o,h,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Bt,this.minFilter=o!==void 0?o:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},hl=new kt,cl=new ll(1,1),ul=new Io,dl=new Tc,pl=new $o,fl=[],ml=[],gl=new Float32Array(16),vl=new Float32Array(9),_l=new Float32Array(4);function bi(e,t,r){let i=e[0];if(i<=0||i>0)return e;let a=t*r,n=fl[a];if(n===void 0&&(n=new Float32Array(a),fl[a]=n),t!==0){i.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(n,o)}return n}function ft(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function mt(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function Na(e,t){let r=ml[t];r===void 0&&(r=new Int32Array(t),ml[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function Bp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function Vp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ft(r,t))return;e.uniform2fv(this.addr,t),mt(r,t)}}function kp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(ft(r,t))return;e.uniform3fv(this.addr,t),mt(r,t)}}function Hp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ft(r,t))return;e.uniform4fv(this.addr,t),mt(r,t)}}function Gp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ft(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),mt(r,t)}else{if(ft(r,i))return;_l.set(i),e.uniformMatrix2fv(this.addr,!1,_l),mt(r,i)}}function Wp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ft(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),mt(r,t)}else{if(ft(r,i))return;vl.set(i),e.uniformMatrix3fv(this.addr,!1,vl),mt(r,i)}}function Xp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ft(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),mt(r,t)}else{if(ft(r,i))return;gl.set(i),e.uniformMatrix4fv(this.addr,!1,gl),mt(r,i)}}function jp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function qp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ft(r,t))return;e.uniform2iv(this.addr,t),mt(r,t)}}function Yp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(ft(r,t))return;e.uniform3iv(this.addr,t),mt(r,t)}}function Jp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ft(r,t))return;e.uniform4iv(this.addr,t),mt(r,t)}}function Zp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function Kp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ft(r,t))return;e.uniform2uiv(this.addr,t),mt(r,t)}}function Qp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(ft(r,t))return;e.uniform3uiv(this.addr,t),mt(r,t)}}function $p(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ft(r,t))return;e.uniform4uiv(this.addr,t),mt(r,t)}}function ef(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(cl.compareFunction=yo,n=cl):n=hl,r.setTexture2D(t||n,a)}function tf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(t||dl,a)}function rf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(t||pl,a)}function af(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(t||ul,a)}function nf(e){switch(e){case 5126:return Bp;case 35664:return Vp;case 35665:return kp;case 35666:return Hp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Jp;case 5125:return Zp;case 36294:return Kp;case 36295:return Qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return af}}function sf(e,t){e.uniform1fv(this.addr,t)}function of(e,t){let r=bi(t,this.size,2);e.uniform2fv(this.addr,r)}function lf(e,t){let r=bi(t,this.size,3);e.uniform3fv(this.addr,r)}function hf(e,t){let r=bi(t,this.size,4);e.uniform4fv(this.addr,r)}function cf(e,t){let r=bi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function uf(e,t){let r=bi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function df(e,t){let r=bi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function pf(e,t){e.uniform1iv(this.addr,t)}function ff(e,t){e.uniform2iv(this.addr,t)}function mf(e,t){e.uniform3iv(this.addr,t)}function gf(e,t){e.uniform4iv(this.addr,t)}function vf(e,t){e.uniform1uiv(this.addr,t)}function _f(e,t){e.uniform2uiv(this.addr,t)}function xf(e,t){e.uniform3uiv(this.addr,t)}function Mf(e,t){e.uniform4uiv(this.addr,t)}function yf(e,t,r){let i=this.cache,a=t.length,n=Na(r,a);ft(i,n)||(e.uniform1iv(this.addr,n),mt(i,n));for(let s=0;s!==a;++s)r.setTexture2D(t[s]||hl,n[s])}function Sf(e,t,r){let i=this.cache,a=t.length,n=Na(r,a);ft(i,n)||(e.uniform1iv(this.addr,n),mt(i,n));for(let s=0;s!==a;++s)r.setTexture3D(t[s]||dl,n[s])}function Ef(e,t,r){let i=this.cache,a=t.length,n=Na(r,a);ft(i,n)||(e.uniform1iv(this.addr,n),mt(i,n));for(let s=0;s!==a;++s)r.setTextureCube(t[s]||pl,n[s])}function Tf(e,t,r){let i=this.cache,a=t.length,n=Na(r,a);ft(i,n)||(e.uniform1iv(this.addr,n),mt(i,n));for(let s=0;s!==a;++s)r.setTexture2DArray(t[s]||ul,n[s])}function bf(e){switch(e){case 5126:return sf;case 35664:return of;case 35665:return lf;case 35666:return hf;case 35674:return cf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return pf;case 35667:case 35671:return ff;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return vf;case 36294:return _f;case 36295:return xf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return Tf}}var wf=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=nf(t.type)}},Af=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bf(t.type)}},Rf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let a=0,n=i.length;a!==n;++a){let s=i[a];s.setValue(e,t[s.id],r)}}},bs=/(\w+)(\])?(\[|\.)?/g;function xl(e,t){e.seq.push(t),e.map[t.id]=t}function Cf(e,t,r){let i=e.name,a=i.length;for(bs.lastIndex=0;;){let n=bs.exec(i),s=bs.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){xl(r,h===void 0?new wf(o,e,t):new Af(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new Rf(o),xl(r,c)),r=c}}}var Oa=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let a=e.getActiveUniform(t,i),n=e.getUniformLocation(t,a.name);Cf(a,n,this)}}setValue(e,t,r,i){let a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,a=e.length;i!==a;++i){let n=e[i];n.id in t&&r.push(n)}return r}};function Ml(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var Pf=37297,Lf=0;function If(e,t){let r=e.split(`
`),i=[],a=Math.max(t-6,0),n=Math.min(t+6,r.length);for(let s=a;s<n;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var yl=new Je;function Df(e){Ze._getMatrix(yl,Ze.workingColorSpace,e);let t=`mat3( ${yl.elements.map(r=>r.toFixed(4))} )`;switch(Ze.getTransfer(e)){case pa:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Sl(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return r.toUpperCase()+`

`+a+`

`+If(e.getShaderSource(t),s)}else return a}function Uf(e,t){let r=Df(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Nf(e,t){let r;switch(t){case Qh:r="Linear";break;case $h:r="Reinhard";break;case ec:r="Cineon";break;case io:r="ACESFilmic";break;case rc:r="AgX";break;case ic:r="Neutral";break;case tc:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var Fa=new L;function Of(){Ze.getLuminanceCoefficients(Fa);let e=Fa.x.toFixed(4),t=Fa.y.toFixed(4),r=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ff(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function zf(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function Bf(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),r[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function Wi(e){return e!==""}function El(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(e){return e.replace(Vf,Hf)}var kf=new Map;function Hf(e,t){let r=Ye[t];if(r===void 0){let i=kf.get(t);if(i!==void 0)r=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ws(r)}var Gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(e){return e.replace(Gf,Wf)}function Wf(e,t,r,i){let a="";for(let n=parseInt(t);n<parseInt(r);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function wl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Xf(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Qs?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===$t&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Qr:case $r:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===$r&&(t="ENVMAP_MODE_REFRACTION"),t}function Yf(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ro:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function Jf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function Zf(e,t,r,i){let a=e.getContext(),n=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Xf(r),h=jf(r),c=qf(r),u=Yf(r),d=Jf(r),f=Ff(r),g=zf(n),v=a.createProgram(),m,p,T=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g].filter(Wi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g].filter(Wi).join(`
`),p.length>0&&(p+=`
`)):(m=[wl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),p=[wl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,g,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.envMap?"#define "+c:"",r.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==er?"#define TONE_MAPPING":"",r.toneMapping!==er?Ye.tonemapping_pars_fragment:"",r.toneMapping!==er?Nf("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Uf("linearToOutputTexel",r.outputColorSpace),Of(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Wi).join(`
`)),s=ws(s),s=El(s,r),s=Tl(s,r),o=ws(o),o=El(o,r),o=Tl(o,r),s=bl(s),o=bl(o),r.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",r.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=T+m+s,E=T+p+o,z=Ml(a,a.VERTEX_SHADER,x),P=Ml(a,a.FRAGMENT_SHADER,E);a.attachShader(v,z),a.attachShader(v,P),r.index0AttributeName!==void 0?a.bindAttribLocation(v,0,r.index0AttributeName):r.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function C(R){if(e.debug.checkShaderErrors){let F=a.getProgramInfoLog(v).trim(),B=a.getShaderInfoLog(z).trim(),G=a.getShaderInfoLog(P).trim(),Y=!0,X=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,z,P);else{let ee=Sl(a,z,"vertex"),j=Sl(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+ee+`
`+j)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||G==="")&&(X=!1);X&&(R.diagnostics={runnable:Y,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}a.deleteShader(z),a.deleteShader(P),U=new Oa(a,v),y=Bf(a,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let S=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(v,Pf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Lf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=P,this}var Kf=0,Qf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new $f(e),t.set(e,r)),r}},$f=class{constructor(e){this.id=Kf++,this.code=e,this.usedTimes=0}};function em(e,t,r,i,a,n,s){let o=new as,l=new Qf,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,f=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,F,B){let G=F.fog,Y=B.geometry,X=y.isMeshStandardMaterial?F.environment:null,ee=(y.isMeshStandardMaterial?r:t).get(y.envMap||X),j=ee&&ee.mapping===na?ee.image.height:null,le=g[y.type];y.precision!==null&&(f=a.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ie=ce!==void 0?ce.length:0,ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let q,se,ye,Ee;if(le){let be=Jt[le];q=be.vertexShader,se=be.fragmentShader}else q=y.vertexShader,se=y.fragmentShader,l.update(y),ye=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);let ue=e.getRenderTarget(),Re=e.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,De=B.isBatchedMesh===!0,K=!!y.map,he=!!y.matcap,A=!!ee,_e=!!y.aoMap,ne=!!y.lightMap,Se=!!y.bumpMap,te=!!y.normalMap,Ne=!!y.displacementMap,ve=!!y.emissiveMap,Te=!!y.metalnessMap,b=!!y.roughnessMap,_=y.anisotropy>0,N=y.clearcoat>0,Z=y.dispersion>0,Q=y.iridescence>0,J=y.sheen>0,Le=y.transmission>0,de=_&&!!y.anisotropyMap,me=N&&!!y.clearcoatMap,Oe=N&&!!y.clearcoatNormalMap,oe=N&&!!y.clearcoatRoughnessMap,ge=Q&&!!y.iridescenceMap,je=Q&&!!y.iridescenceThicknessMap,Fe=J&&!!y.sheenColorMap,xe=J&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,ke=!!y.specularColorMap,re=!!y.specularIntensityMap,w=Le&&!!y.transmissionMap,V=Le&&!!y.thicknessMap,O=!!y.gradientMap,W=!!y.alphaMap,$=y.alphaTest>0,ie=!!y.alphaHash,we=!!y.extensions,qe=er;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(qe=e.toneMapping);let Ke={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:se,defines:y.defines,customVertexShaderID:ye,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:De,batchingColor:De&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ai,alphaToCoverage:!!y.alphaToCoverage,map:K,matcap:he,envMap:A,envMapMode:A&&ee.mapping,envMapCubeUVHeight:j,aoMap:_e,lightMap:ne,bumpMap:Se,normalMap:te,displacementMap:d&&Ne,emissiveMap:ve,normalMapObjectSpace:te&&y.normalMapType===oc,normalMapTangentSpace:te&&y.normalMapType===xo,metalnessMap:Te,roughnessMap:b,anisotropy:_,anisotropyMap:de,clearcoat:N,clearcoatMap:me,clearcoatNormalMap:Oe,clearcoatRoughnessMap:oe,dispersion:Z,iridescence:Q,iridescenceMap:ge,iridescenceThicknessMap:je,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:xe,specularMap:Ve,specularColorMap:ke,specularIntensityMap:re,transmission:Le,transmissionMap:w,thicknessMap:V,gradientMap:O,opaque:y.transparent===!1&&y.blending===Zr&&y.alphaToCoverage===!1,alphaMap:W,alphaTest:$,alphaHash:ie,combine:y.combine,mapUv:K&&v(y.map.channel),aoMapUv:_e&&v(y.aoMap.channel),lightMapUv:ne&&v(y.lightMap.channel),bumpMapUv:Se&&v(y.bumpMap.channel),normalMapUv:te&&v(y.normalMap.channel),displacementMapUv:Ne&&v(y.displacementMap.channel),emissiveMapUv:ve&&v(y.emissiveMap.channel),metalnessMapUv:Te&&v(y.metalnessMap.channel),roughnessMapUv:b&&v(y.roughnessMap.channel),anisotropyMapUv:de&&v(y.anisotropyMap.channel),clearcoatMapUv:me&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(y.sheenRoughnessMap.channel),specularMapUv:Ve&&v(y.specularMap.channel),specularColorMapUv:ke&&v(y.specularColorMap.channel),specularIntensityMapUv:re&&v(y.specularIntensityMap.channel),transmissionMapUv:w&&v(y.transmissionMap.channel),thicknessMapUv:V&&v(y.thicknessMap.channel),alphaMapUv:W&&v(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(te||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(K||W),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:qe,decodeVideoTexture:K&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===$e,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===$e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function p(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(T(S,y),x(S,y),S.push(e.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){let S=g[y.type],R;if(S){let F=Jt[S];R=Oc.clone(F.uniforms)}else R=y.uniforms;return R}function z(y,S){let R;for(let F=0,B=c.length;F<B;F++){let G=c[F];if(G.cacheKey===S){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Zf(e,S,y,n),c.push(R)),R}function P(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:z,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:U}}function tm(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:r,remove:i,update:a,dispose:n}}function rm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Al(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Rl(){let e=[],t=0,r=[],i=[],a=[];function n(){t=0,r.length=0,i.length=0,a.length=0}function s(u,d,f,g,v,m){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},e[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){let p=s(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?a.push(p):r.push(p)}function l(u,d,f,g,v,m){let p=s(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?a.unshift(p):r.unshift(p)}function h(u,d){r.length>1&&r.sort(u||rm),i.length>1&&i.sort(d||Al),a.length>1&&a.sort(d||Al)}function c(){for(let u=t,d=e.length;u<d;u++){let f=e[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function im(){let e=new WeakMap;function t(i,a){let n=e.get(i),s;return n===void 0?(s=new Rl,e.set(i,[s])):a>=n.length?(s=new Rl,n.push(s)):s=n[a],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function am(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new L,color:new Xe};break;case"SpotLight":r={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":r={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":r={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=r,r}}}function nm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var sm=0;function om(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lm(e){let t=new am,r=nm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let a=new L,n=new lt,s=new lt;function o(h){let c=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,x=0,E=0,z=0,P=0,C=0;h.sort(om);for(let y=0,S=h.length;y<S;y++){let R=h[y],F=R.color,B=R.intensity,G=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=F.r*B,u+=F.g*B,d+=F.b*B;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],B);C++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,j=r.get(R);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=R.shadow.matrix,T++}i.directional[f]=X,f++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=G,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[v]=X;let ee=R.shadow;if(R.map&&(i.spotLightMap[z]=R.map,z++,ee.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[v]=ee.matrix,R.castShadow){let j=r.get(R);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=Y,E++}v++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=X,m++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let ee=R.shadow,j=r.get(R);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=X,g++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(B),X.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==T||U.numPointShadows!==x||U.numSpotShadows!==E||U.numSpotMaps!==z||U.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+z-P,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,U.directionalLength=f,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=T,U.numPointShadows=x,U.numSpotShadows=E,U.numSpotMaps=z,U.numLightProbes=C,i.version=sm++)}function l(h,c){let u=0,d=0,f=0,g=0,v=0,m=c.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){let x=h[p];if(x.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),u++}else if(x.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),s.identity(),n.copy(x.matrixWorld),n.premultiply(m),s.extractRotation(n),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Cl(e){let t=new lm(e),r=[],i=[];function a(c){h.camera=c,r.length=0,i.length=0}function n(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let h={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function hm(e){let t=new WeakMap;function r(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Cl(e),t.set(a,[o])):n>=s.length?(o=new Cl(e),s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var cm=class extends Hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},um=class extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},dm=`void main() {
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
}`;function fm(e,t,r){let i=new vs,a=new pe,n=new pe,s=new rt,o=new cm({depthPacking:sc}),l=new um,h={},c=r.maxTextureSize,u={[vr]:bt,[bt]:vr,[zt]:zt},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:dm,fragmentShader:pm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let p=this.type;this.render=function(P,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let y=e.getRenderTarget(),S=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),F=e.state;F.setBlending(_r),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==$t&&this.type===$t,G=p===$t&&this.type!==$t;for(let Y=0,X=P.length;Y<X;Y++){let ee=P[Y],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);let le=j.getFrameExtents();if(a.multiply(le),n.copy(j.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/le.x),a.x=n.x*le.x,j.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/le.y),a.y=n.y*le.y,j.mapSize.y=n.y)),j.map===null||B===!0||G===!0){let Ie=this.type!==$t?{minFilter:Bt,magFilter:Bt}:{};j.map!==null&&j.map.dispose(),j.map=new Mr(a.x,a.y,Ie),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}e.setRenderTarget(j.map),e.clear();let ce=j.getViewportCount();for(let Ie=0;Ie<ce;Ie++){let ze=j.getViewport(Ie);s.set(n.x*ze.x,n.y*ze.y,n.x*ze.z,n.y*ze.w),F.viewport(s),j.updateMatrices(ee,Ie),i=j.getFrustum(),E(C,U,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===$t&&T(j,U),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(y,S,R)};function T(P,C){let U=t.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Mr(a.x,a.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(C,null,U,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(C,null,U,f,v,null)}function x(P,C,U,y){let S=null,R=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let F=S.uuid,B=C.uuid,G=h[F];G===void 0&&(G={},h[F]=G);let Y=G[B];Y===void 0&&(Y=S.clone(),G[B]=Y,C.addEventListener("dispose",z)),S=Y}if(S.visible=C.visible,S.wireframe=C.wireframe,y===$t?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=e.properties.get(S);F.light=U}return S}function E(P,C,U,y,S){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===$t)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let F=t.update(P),B=P.material;if(Array.isArray(B)){let G=F.groups;for(let Y=0,X=G.length;Y<X;Y++){let ee=G[Y],j=B[ee.materialIndex];if(j&&j.visible){let le=x(P,j,y,S);P.onBeforeShadow(e,P,C,U,F,le,ee),e.renderBufferDirect(U,null,F,le,P,ee),P.onAfterShadow(e,P,C,U,F,le,ee)}}}else if(B.visible){let G=x(P,B,y,S);P.onBeforeShadow(e,P,C,U,F,G,null),e.renderBufferDirect(U,null,F,G,P,null),P.onAfterShadow(e,P,C,U,F,G,null)}}let R=P.children;for(let F=0,B=R.length;F<B;F++)E(R[F],C,U,y,S)}function z(P){P.target.removeEventListener("dispose",z);for(let C in h){let U=h[C],y=P.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}var mm={[en]:tn,[rn]:sn,[an]:on,[Kr]:nn,[tn]:en,[sn]:rn,[on]:an,[nn]:Kr};function gm(e,t){function r(){let w=!1,V=new rt,O=null,W=new rt(0,0,0,0);return{setMask:function($){O!==$&&!w&&(e.colorMask($,$,$,$),O=$)},setLocked:function($){w=$},setClear:function($,ie,we,qe,Ke){Ke===!0&&($*=qe,ie*=qe,we*=qe),V.set($,ie,we,qe),W.equals(V)===!1&&(e.clearColor($,ie,we,qe),W.copy(V))},reset:function(){w=!1,O=null,W.set(-1,0,0,0)}}}function i(){let w=!1,V=!1,O=null,W=null,$=null;return{setReversed:function(ie){if(V!==ie){let we=t.get("EXT_clip_control");V?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);let qe=$;$=null,this.setClear(qe)}V=ie},getReversed:function(){return V},setTest:function(ie){ie?ue(e.DEPTH_TEST):Re(e.DEPTH_TEST)},setMask:function(ie){O!==ie&&!w&&(e.depthMask(ie),O=ie)},setFunc:function(ie){if(V&&(ie=mm[ie]),W!==ie){switch(ie){case en:e.depthFunc(e.NEVER);break;case tn:e.depthFunc(e.ALWAYS);break;case rn:e.depthFunc(e.LESS);break;case Kr:e.depthFunc(e.LEQUAL);break;case an:e.depthFunc(e.EQUAL);break;case nn:e.depthFunc(e.GEQUAL);break;case sn:e.depthFunc(e.GREATER);break;case on:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}W=ie}},setLocked:function(ie){w=ie},setClear:function(ie){$!==ie&&(V&&(ie=1-ie),e.clearDepth(ie),$=ie)},reset:function(){w=!1,O=null,W=null,$=null,V=!1}}}function a(){let w=!1,V=null,O=null,W=null,$=null,ie=null,we=null,qe=null,Ke=null;return{setTest:function(be){w||(be?ue(e.STENCIL_TEST):Re(e.STENCIL_TEST))},setMask:function(be){V!==be&&!w&&(e.stencilMask(be),V=be)},setFunc:function(be,Ge,et){(O!==be||W!==Ge||$!==et)&&(e.stencilFunc(be,Ge,et),O=be,W=Ge,$=et)},setOp:function(be,Ge,et){(ie!==be||we!==Ge||qe!==et)&&(e.stencilOp(be,Ge,et),ie=be,we=Ge,qe=et)},setLocked:function(be){w=be},setClear:function(be){Ke!==be&&(e.clearStencil(be),Ke=be)},reset:function(){w=!1,V=null,O=null,W=null,$=null,ie=null,we=null,qe=null,Ke=null}}}let n=new r,s=new i,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,x=null,E=null,z=null,P=null,C=new Xe(0,0,0),U=0,y=!1,S=null,R=null,F=null,B=null,G=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ee=0,j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=ee>=2);let le=null,ce={},Ie=e.getParameter(e.SCISSOR_BOX),ze=e.getParameter(e.VIEWPORT),q=new rt().fromArray(Ie),se=new rt().fromArray(ze);function ye(w,V,O,W){let $=new Uint8Array(4),ie=e.createTexture();e.bindTexture(w,ie),e.texParameteri(w,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(w,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let we=0;we<O;we++)w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY?e.texImage3D(V,0,e.RGBA,1,1,W,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(V+we,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return ie}let Ee={};Ee[e.TEXTURE_2D]=ye(e.TEXTURE_2D,e.TEXTURE_2D,1),Ee[e.TEXTURE_CUBE_MAP]=ye(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[e.TEXTURE_2D_ARRAY]=ye(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ee[e.TEXTURE_3D]=ye(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(e.DEPTH_TEST),s.setFunc(Kr),Se(!1),te(Ks),ue(e.CULL_FACE),_e(_r);function ue(w){c[w]!==!0&&(e.enable(w),c[w]=!0)}function Re(w){c[w]!==!1&&(e.disable(w),c[w]=!1)}function Be(w,V){return u[w]!==V?(e.bindFramebuffer(w,V),u[w]=V,w===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=V),w===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=V),!0):!1}function De(w,V){let O=f,W=!1;if(w){O=d.get(V),O===void 0&&(O=[],d.set(V,O));let $=w.textures;if(O.length!==$.length||O[0]!==e.COLOR_ATTACHMENT0){for(let ie=0,we=$.length;ie<we;ie++)O[ie]=e.COLOR_ATTACHMENT0+ie;O.length=$.length,W=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,W=!0);W&&e.drawBuffers(O)}function K(w){return g!==w?(e.useProgram(w),g=w,!0):!1}let he={[Or]:e.FUNC_ADD,[Dh]:e.FUNC_SUBTRACT,[Uh]:e.FUNC_REVERSE_SUBTRACT};he[Nh]=e.MIN,he[Oh]=e.MAX;let A={[Fh]:e.ZERO,[zh]:e.ONE,[Bh]:e.SRC_COLOR,[Qa]:e.SRC_ALPHA,[Xh]:e.SRC_ALPHA_SATURATE,[Gh]:e.DST_COLOR,[kh]:e.DST_ALPHA,[Vh]:e.ONE_MINUS_SRC_COLOR,[$a]:e.ONE_MINUS_SRC_ALPHA,[Wh]:e.ONE_MINUS_DST_COLOR,[Hh]:e.ONE_MINUS_DST_ALPHA,[jh]:e.CONSTANT_COLOR,[qh]:e.ONE_MINUS_CONSTANT_COLOR,[Yh]:e.CONSTANT_ALPHA,[Jh]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(w,V,O,W,$,ie,we,qe,Ke,be){if(w===_r){v===!0&&(Re(e.BLEND),v=!1);return}if(v===!1&&(ue(e.BLEND),v=!0),w!==Ih){if(w!==m||be!==y){if((p!==Or||E!==Or)&&(e.blendEquation(e.FUNC_ADD),p=Or,E=Or),be)switch(w){case Zr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $s:e.blendFunc(e.ONE,e.ONE);break;case eo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case to:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Zr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $s:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case eo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case to:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,x=null,z=null,P=null,C.set(0,0,0),U=0,m=w,y=be}return}$=$||V,ie=ie||O,we=we||W,(V!==p||$!==E)&&(e.blendEquationSeparate(he[V],he[$]),p=V,E=$),(O!==T||W!==x||ie!==z||we!==P)&&(e.blendFuncSeparate(A[O],A[W],A[ie],A[we]),T=O,x=W,z=ie,P=we),(qe.equals(C)===!1||Ke!==U)&&(e.blendColor(qe.r,qe.g,qe.b,Ke),C.copy(qe),U=Ke),m=w,y=!1}function ne(w,V){w.side===zt?Re(e.CULL_FACE):ue(e.CULL_FACE);let O=w.side===bt;V&&(O=!O),Se(O),w.blending===Zr&&w.transparent===!1?_e(_r):_e(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),n.setMask(w.colorWrite);let W=w.stencilWrite;o.setTest(W),W&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ve(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):Re(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(w){S!==w&&(w?e.frontFace(e.CW):e.frontFace(e.CCW),S=w)}function te(w){w!==Ch?(ue(e.CULL_FACE),w!==R&&(w===Ks?e.cullFace(e.BACK):w===Ph?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Re(e.CULL_FACE),R=w}function Ne(w){w!==F&&(X&&e.lineWidth(w),F=w)}function ve(w,V,O){w?(ue(e.POLYGON_OFFSET_FILL),(B!==V||G!==O)&&(e.polygonOffset(V,O),B=V,G=O)):Re(e.POLYGON_OFFSET_FILL)}function Te(w){w?ue(e.SCISSOR_TEST):Re(e.SCISSOR_TEST)}function b(w){w===void 0&&(w=e.TEXTURE0+Y-1),le!==w&&(e.activeTexture(w),le=w)}function _(w,V,O){O===void 0&&(le===null?O=e.TEXTURE0+Y-1:O=le);let W=ce[O];W===void 0&&(W={type:void 0,texture:void 0},ce[O]=W),(W.type!==w||W.texture!==V)&&(le!==O&&(e.activeTexture(O),le=O),e.bindTexture(w,V||Ee[w]),W.type=w,W.texture=V)}function N(){let w=ce[le];w!==void 0&&w.type!==void 0&&(e.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Z(){try{e.compressedTexImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{e.compressedTexImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J(){try{e.texSubImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Le(){try{e.texSubImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function me(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Oe(){try{e.texStorage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(){try{e.texStorage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{e.texImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function je(){try{e.texImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Fe(w){q.equals(w)===!1&&(e.scissor(w.x,w.y,w.z,w.w),q.copy(w))}function xe(w){se.equals(w)===!1&&(e.viewport(w.x,w.y,w.z,w.w),se.copy(w))}function Ve(w,V){let O=h.get(V);O===void 0&&(O=new WeakMap,h.set(V,O));let W=O.get(w);W===void 0&&(W=e.getUniformBlockIndex(V,w.name),O.set(w,W))}function ke(w,V){let O=h.get(V).get(w);l.get(V)!==O&&(e.uniformBlockBinding(V,O,w.__bindingPointIndex),l.set(V,O))}function re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},le=null,ce={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,x=null,E=null,z=null,P=null,C=new Xe(0,0,0),U=0,y=!1,S=null,R=null,F=null,B=null,G=null,q.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ue,disable:Re,bindFramebuffer:Be,drawBuffers:De,useProgram:K,setBlending:_e,setMaterial:ne,setFlipSided:Se,setCullFace:te,setLineWidth:Ne,setPolygonOffset:ve,setScissorTest:Te,activeTexture:b,bindTexture:_,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:ge,texImage3D:je,updateUBOMapping:Ve,uniformBlockBinding:ke,texStorage2D:Oe,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Le,compressedTexSubImage2D:de,compressedTexSubImage3D:me,scissor:Fe,viewport:xe,reset:re}}function Pl(e,t,r,i){let a=vm(i);switch(r){case lo:return e*t;case co:return e*t;case uo:return e*t*2;case po:return e*t/a.components*a.byteLength;case mn:return e*t/a.components*a.byteLength;case fo:return e*t*2/a.components*a.byteLength;case gn:return e*t*2/a.components*a.byteLength;case ho:return e*t*3/a.components*a.byteLength;case Vt:return e*t*4/a.components*a.byteLength;case vn:return e*t*4/a.components*a.byteLength;case oa:case la:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ha:case ca:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xn:case yn:return Math.max(e,16)*Math.max(t,8)/4;case _n:case Mn:return Math.max(e,8)*Math.max(t,8)/2;case Sn:case En:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case An:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Rn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Cn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Pn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ln:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case In:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Dn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Un:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Nn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case On:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ua:case Bn:case Vn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case mo:case kn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Hn:case Gn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function vm(e){switch(e){case rr:case no:return{byteLength:1,components:1};case Ui:case so:case ei:return{byteLength:2,components:1};case pn:case fn:return{byteLength:2,components:4};case zr:case dn:case ir:return{byteLength:4,components:1};case oo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function _m(e,t,r,i,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return f?new OffscreenCanvas(b,_):ma("canvas")}function v(b,_,N){let Z=1,Q=Te(b);if((Q.width>N||Q.height>N)&&(Z=N/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let J=Math.floor(Z*Q.width),Le=Math.floor(Z*Q.height);u===void 0&&(u=g(J,Le));let de=_?g(J,Le):u;return de.width=J,de.height=Le,de.getContext("2d").drawImage(b,0,0,J,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+Le+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){e.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(b,_,N,Z,Q=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=_;if(_===e.RED&&(N===e.FLOAT&&(J=e.R32F),N===e.HALF_FLOAT&&(J=e.R16F),N===e.UNSIGNED_BYTE&&(J=e.R8)),_===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(J=e.R8UI),N===e.UNSIGNED_SHORT&&(J=e.R16UI),N===e.UNSIGNED_INT&&(J=e.R32UI),N===e.BYTE&&(J=e.R8I),N===e.SHORT&&(J=e.R16I),N===e.INT&&(J=e.R32I)),_===e.RG&&(N===e.FLOAT&&(J=e.RG32F),N===e.HALF_FLOAT&&(J=e.RG16F),N===e.UNSIGNED_BYTE&&(J=e.RG8)),_===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(J=e.RG8UI),N===e.UNSIGNED_SHORT&&(J=e.RG16UI),N===e.UNSIGNED_INT&&(J=e.RG32UI),N===e.BYTE&&(J=e.RG8I),N===e.SHORT&&(J=e.RG16I),N===e.INT&&(J=e.RG32I)),_===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(J=e.RGB8UI),N===e.UNSIGNED_SHORT&&(J=e.RGB16UI),N===e.UNSIGNED_INT&&(J=e.RGB32UI),N===e.BYTE&&(J=e.RGB8I),N===e.SHORT&&(J=e.RGB16I),N===e.INT&&(J=e.RGB32I)),_===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),N===e.UNSIGNED_INT&&(J=e.RGBA32UI),N===e.BYTE&&(J=e.RGBA8I),N===e.SHORT&&(J=e.RGBA16I),N===e.INT&&(J=e.RGBA32I)),_===e.RGB&&N===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),_===e.RGBA){let Le=Q?pa:Ze.getTransfer(Z);N===e.FLOAT&&(J=e.RGBA32F),N===e.HALF_FLOAT&&(J=e.RGBA16F),N===e.UNSIGNED_BYTE&&(J=Le===$e?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(b,_){let N;return b?_===null||_===zr||_===ti?N=e.DEPTH24_STENCIL8:_===ir?N=e.DEPTH32F_STENCIL8:_===Ui&&(N=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zr||_===ti?N=e.DEPTH_COMPONENT24:_===ir?N=e.DEPTH_COMPONENT32F:_===Ui&&(N=e.DEPTH_COMPONENT16),N}function z(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bt&&b.minFilter!==It?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function P(b){let _=b.target;_.removeEventListener("dispose",P),U(_),_.isVideoTexture&&c.delete(_)}function C(b){let _=b.target;_.removeEventListener("dispose",C),S(_)}function U(b){let _=i.get(b);if(_.__webglInit===void 0)return;let N=b.source,Z=d.get(N);if(Z){let Q=Z[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(b),Object.keys(Z).length===0&&d.delete(N)}i.remove(b)}function y(b){let _=i.get(b);e.deleteTexture(_.__webglTexture);let N=b.source,Z=d.get(N);delete Z[_.__cacheKey],s.memory.textures--}function S(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let Q=0;Q<_.__webglFramebuffer[Z].length;Q++)e.deleteFramebuffer(_.__webglFramebuffer[Z][Q]);else e.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)e.deleteFramebuffer(_.__webglFramebuffer[Z]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=b.textures;for(let Z=0,Q=N.length;Z<Q;Z++){let J=i.get(N[Z]);J.__webglTexture&&(e.deleteTexture(J.__webglTexture),s.memory.textures--),i.remove(N[Z])}i.remove(b)}let R=0;function F(){R=0}function B(){let b=R;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),R+=1,b}function G(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Y(b,_){let N=i.get(b);if(b.isVideoTexture&&Ne(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,b,_);return}}r.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+_)}function X(b,_){let N=i.get(b);if(b.version>0&&N.__version!==b.version){se(N,b,_);return}r.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+_)}function ee(b,_){let N=i.get(b);if(b.version>0&&N.__version!==b.version){se(N,b,_);return}r.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+_)}function j(b,_){let N=i.get(b);if(b.version>0&&N.__version!==b.version){ye(N,b,_);return}r.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+_)}let le={[Di]:e.REPEAT,[Fr]:e.CLAMP_TO_EDGE,[cn]:e.MIRRORED_REPEAT},ce={[Bt]:e.NEAREST,[ac]:e.NEAREST_MIPMAP_NEAREST,[sa]:e.NEAREST_MIPMAP_LINEAR,[It]:e.LINEAR,[un]:e.LINEAR_MIPMAP_NEAREST,[tr]:e.LINEAR_MIPMAP_LINEAR},Ie={[lc]:e.NEVER,[fc]:e.ALWAYS,[hc]:e.LESS,[yo]:e.LEQUAL,[cc]:e.EQUAL,[pc]:e.GEQUAL,[uc]:e.GREATER,[dc]:e.NOTEQUAL};function ze(b,_){if(_.type===ir&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===It||_.magFilter===un||_.magFilter===sa||_.magFilter===tr||_.minFilter===It||_.minFilter===un||_.minFilter===sa||_.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,le[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,le[_.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,le[_.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,ce[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==sa&&_.minFilter!==tr||_.type===ir&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function q(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",P));let Z=_.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let J=G(_);if(J!==b.__cacheKey){Q[J]===void 0&&(Q[J]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Q[J].usedTimes++;let Le=Q[b.__cacheKey];Le!==void 0&&(Q[b.__cacheKey].usedTimes--,Le.usedTimes===0&&y(_)),b.__cacheKey=J,b.__webglTexture=Q[J].texture}return N}function se(b,_,N){let Z=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=e.TEXTURE_3D);let Q=q(b,_),J=_.source;r.bindTexture(Z,b.__webglTexture,e.TEXTURE0+N);let Le=i.get(J);if(J.version!==Le.__version||Q===!0){r.activeTexture(e.TEXTURE0+N);let de=Ze.getPrimaries(Ze.workingColorSpace),me=_.colorSpace===xr?null:Ze.getPrimaries(_.colorSpace),Oe=_.colorSpace===xr||de===me?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let oe=v(_.image,!1,a.maxTextureSize);oe=ve(_,oe);let ge=n.convert(_.format,_.colorSpace),je=n.convert(_.type),Fe=x(_.internalFormat,ge,je,_.colorSpace,_.isVideoTexture);ze(Z,_);let xe,Ve=_.mipmaps,ke=_.isVideoTexture!==!0,re=Le.__version===void 0||Q===!0,w=J.dataReady,V=z(_,oe);if(_.isDepthTexture)Fe=E(_.format===ii,_.type),re&&(ke?r.texStorage2D(e.TEXTURE_2D,1,Fe,oe.width,oe.height):r.texImage2D(e.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ge,je,null));else if(_.isDataTexture)if(Ve.length>0){ke&&re&&r.texStorage2D(e.TEXTURE_2D,V,Fe,Ve[0].width,Ve[0].height);for(let O=0,W=Ve.length;O<W;O++)xe=Ve[O],ke?w&&r.texSubImage2D(e.TEXTURE_2D,O,0,0,xe.width,xe.height,ge,je,xe.data):r.texImage2D(e.TEXTURE_2D,O,Fe,xe.width,xe.height,0,ge,je,xe.data);_.generateMipmaps=!1}else ke?(re&&r.texStorage2D(e.TEXTURE_2D,V,Fe,oe.width,oe.height),w&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,je,oe.data)):r.texImage2D(e.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ge,je,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&re&&r.texStorage3D(e.TEXTURE_2D_ARRAY,V,Fe,Ve[0].width,Ve[0].height,oe.depth);for(let O=0,W=Ve.length;O<W;O++)if(xe=Ve[O],_.format!==Vt)if(ge!==null)if(ke){if(w)if(_.layerUpdates.size>0){let $=Pl(xe.width,xe.height,_.format,_.type);for(let ie of _.layerUpdates){let we=xe.data.subarray(ie*$/xe.data.BYTES_PER_ELEMENT,(ie+1)*$/xe.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,ie,xe.width,xe.height,1,ge,we)}_.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,oe.depth,ge,xe.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,Fe,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?w&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,oe.depth,ge,je,xe.data):r.texImage3D(e.TEXTURE_2D_ARRAY,O,Fe,xe.width,xe.height,oe.depth,0,ge,je,xe.data)}else{ke&&re&&r.texStorage2D(e.TEXTURE_2D,V,Fe,Ve[0].width,Ve[0].height);for(let O=0,W=Ve.length;O<W;O++)xe=Ve[O],_.format!==Vt?ge!==null?ke?w&&r.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,xe.width,xe.height,ge,xe.data):r.compressedTexImage2D(e.TEXTURE_2D,O,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?w&&r.texSubImage2D(e.TEXTURE_2D,O,0,0,xe.width,xe.height,ge,je,xe.data):r.texImage2D(e.TEXTURE_2D,O,Fe,xe.width,xe.height,0,ge,je,xe.data)}else if(_.isDataArrayTexture)if(ke){if(re&&r.texStorage3D(e.TEXTURE_2D_ARRAY,V,Fe,oe.width,oe.height,oe.depth),w)if(_.layerUpdates.size>0){let O=Pl(oe.width,oe.height,_.format,_.type);for(let W of _.layerUpdates){let $=oe.data.subarray(W*O/oe.data.BYTES_PER_ELEMENT,(W+1)*O/oe.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,W,oe.width,oe.height,1,ge,je,$)}_.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,je,oe.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,ge,je,oe.data);else if(_.isData3DTexture)ke?(re&&r.texStorage3D(e.TEXTURE_3D,V,Fe,oe.width,oe.height,oe.depth),w&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,je,oe.data)):r.texImage3D(e.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,ge,je,oe.data);else if(_.isFramebufferTexture){if(re)if(ke)r.texStorage2D(e.TEXTURE_2D,V,Fe,oe.width,oe.height);else{let O=oe.width,W=oe.height;for(let $=0;$<V;$++)r.texImage2D(e.TEXTURE_2D,$,Fe,O,W,0,ge,je,null),O>>=1,W>>=1}}else if(Ve.length>0){if(ke&&re){let O=Te(Ve[0]);r.texStorage2D(e.TEXTURE_2D,V,Fe,O.width,O.height)}for(let O=0,W=Ve.length;O<W;O++)xe=Ve[O],ke?w&&r.texSubImage2D(e.TEXTURE_2D,O,0,0,ge,je,xe):r.texImage2D(e.TEXTURE_2D,O,Fe,ge,je,xe);_.generateMipmaps=!1}else if(ke){if(re){let O=Te(oe);r.texStorage2D(e.TEXTURE_2D,V,Fe,O.width,O.height)}w&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,ge,je,oe)}else r.texImage2D(e.TEXTURE_2D,0,Fe,ge,je,oe);m(_)&&p(Z),Le.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ye(b,_,N){if(_.image.length!==6)return;let Z=q(b,_),Q=_.source;r.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+N);let J=i.get(Q);if(Q.version!==J.__version||Z===!0){r.activeTexture(e.TEXTURE0+N);let Le=Ze.getPrimaries(Ze.workingColorSpace),de=_.colorSpace===xr?null:Ze.getPrimaries(_.colorSpace),me=_.colorSpace===xr||Le===de?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Oe=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let W=0;W<6;W++)!Oe&&!oe?ge[W]=v(_.image[W],!0,a.maxCubemapSize):ge[W]=oe?_.image[W].image:_.image[W],ge[W]=ve(_,ge[W]);let je=ge[0],Fe=n.convert(_.format,_.colorSpace),xe=n.convert(_.type),Ve=x(_.internalFormat,Fe,xe,_.colorSpace),ke=_.isVideoTexture!==!0,re=J.__version===void 0||Z===!0,w=Q.dataReady,V=z(_,je);ze(e.TEXTURE_CUBE_MAP,_);let O;if(Oe){ke&&re&&r.texStorage2D(e.TEXTURE_CUBE_MAP,V,Ve,je.width,je.height);for(let W=0;W<6;W++){O=ge[W].mipmaps;for(let $=0;$<O.length;$++){let ie=O[$];_.format!==Vt?Fe!==null?ke?w&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$,0,0,ie.width,ie.height,Fe,ie.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$,Ve,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?w&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$,0,0,ie.width,ie.height,Fe,xe,ie.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$,Ve,ie.width,ie.height,0,Fe,xe,ie.data)}}}else{if(O=_.mipmaps,ke&&re){O.length>0&&V++;let W=Te(ge[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,V,Ve,W.width,W.height)}for(let W=0;W<6;W++)if(oe){ke?w&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ge[W].width,ge[W].height,Fe,xe,ge[W].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ve,ge[W].width,ge[W].height,0,Fe,xe,ge[W].data);for(let $=0;$<O.length;$++){let ie=O[$].image[W].image;ke?w&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$+1,0,0,ie.width,ie.height,Fe,xe,ie.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$+1,Ve,ie.width,ie.height,0,Fe,xe,ie.data)}}else{ke?w&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Fe,xe,ge[W]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ve,Fe,xe,ge[W]);for(let $=0;$<O.length;$++){let ie=O[$];ke?w&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$+1,0,0,Fe,xe,ie.image[W]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$+1,Ve,Fe,xe,ie.image[W])}}}m(_)&&p(e.TEXTURE_CUBE_MAP),J.__version=Q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ee(b,_,N,Z,Q,J){let Le=n.convert(N.format,N.colorSpace),de=n.convert(N.type),me=x(N.internalFormat,Le,de,N.colorSpace),Oe=i.get(_),oe=i.get(N);if(oe.__renderTarget=_,!Oe.__hasExternalTextures){let ge=Math.max(1,_.width>>J),je=Math.max(1,_.height>>J);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?r.texImage3D(Q,J,me,ge,je,_.depth,0,Le,de,null):r.texImage2D(Q,J,me,ge,je,0,Le,de,null)}r.bindFramebuffer(e.FRAMEBUFFER,b),te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,Q,oe.__webglTexture,0,Se(_)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,Q,oe.__webglTexture,J),r.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(b,_,N){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer){let Z=_.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,J=E(_.stencilBuffer,Q),Le=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=Se(_);te(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de,J,_.width,_.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,de,J,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,J,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Le,e.RENDERBUFFER,b)}else{let Z=_.textures;for(let Q=0;Q<Z.length;Q++){let J=Z[Q],Le=n.convert(J.format,J.colorSpace),de=n.convert(J.type),me=x(J.internalFormat,Le,de,J.colorSpace),Oe=Se(_);N&&te(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe,me,_.width,_.height):te(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe,me,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,me,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Re(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(_.depthTexture);N.__renderTarget=_,(!N.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);let Z=N.__webglTexture,Q=Se(_);if(_.depthTexture.format===ri)te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,Q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(_.depthTexture.format===ii)te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,Q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Be(b){let _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Z}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,b)}else if(N){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=e.createRenderbuffer(),ue(_.__webglDepthbuffer[Z],b,!1);else{let Q=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,J)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),ue(_.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Q),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,Q)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function De(b,_,N){let Z=i.get(b);_!==void 0&&Ee(Z.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Be(b)}function K(b){let _=b.texture,N=i.get(b),Z=i.get(_);b.addEventListener("dispose",C);let Q=b.textures,J=b.isWebGLCubeRenderTarget===!0,Le=Q.length>1;if(Le||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=_.version,s.memory.textures++),J){N.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[de]=[];for(let me=0;me<_.mipmaps.length;me++)N.__webglFramebuffer[de][me]=e.createFramebuffer()}else N.__webglFramebuffer[de]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)N.__webglFramebuffer[de]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(Le)for(let de=0,me=Q.length;de<me;de++){let Oe=i.get(Q[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=e.createTexture(),s.memory.textures++)}if(b.samples>0&&te(b)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){let me=Q[de];N.__webglColorRenderbuffer[de]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[de]);let Oe=n.convert(me.format,me.colorSpace),oe=n.convert(me.type),ge=x(me.internalFormat,Oe,oe,me.colorSpace,b.isXRRenderTarget===!0),je=Se(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,je,ge,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.RENDERBUFFER,N.__webglColorRenderbuffer[de])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(N.__webglDepthRenderbuffer,b,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(J){r.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),ze(e.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Ee(N.__webglFramebuffer[de][me],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else Ee(N.__webglFramebuffer[de],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&p(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Le){for(let de=0,me=Q.length;de<me;de++){let Oe=Q[de],oe=i.get(Oe);r.bindTexture(e.TEXTURE_2D,oe.__webglTexture),ze(e.TEXTURE_2D,Oe),Ee(N.__webglFramebuffer,b,Oe,e.COLOR_ATTACHMENT0+de,e.TEXTURE_2D,0),m(Oe)&&p(e.TEXTURE_2D)}r.unbindTexture()}else{let de=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(de,Z.__webglTexture),ze(de,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Ee(N.__webglFramebuffer[me],b,_,e.COLOR_ATTACHMENT0,de,me);else Ee(N.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,de,0);m(_)&&p(de),r.unbindTexture()}b.depthBuffer&&Be(b)}function he(b){let _=b.textures;for(let N=0,Z=_.length;N<Z;N++){let Q=_[N];if(m(Q)){let J=T(b),Le=i.get(Q).__webglTexture;r.bindTexture(J,Le),p(J),r.unbindTexture()}}}let A=[],_e=[];function ne(b){if(b.samples>0){if(te(b)===!1){let _=b.textures,N=b.width,Z=b.height,Q=e.COLOR_BUFFER_BIT,J=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Le=i.get(b),de=_.length>1;if(de)for(let me=0;me<_.length;me++)r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let me=0;me<_.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),de){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);let Oe=i.get(_[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Oe,0)}e.blitFramebuffer(0,0,N,Z,0,0,N,Z,Q,e.NEAREST),l===!0&&(A.length=0,_e.length=0,A.push(e.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(A.push(J),_e.push(J),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,A))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),de)for(let me=0;me<_.length;me++){r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);let Oe=i.get(_[me]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,Oe,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Se(b){return Math.min(a.maxSamples,b.samples)}function te(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ne(b){let _=s.render.frame;c.get(b)!==_&&(c.set(b,_),b.update())}function ve(b,_){let N=b.colorSpace,Z=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==ai&&N!==xr&&(Ze.getTransfer(N)===$e?(Z!==Vt||Q!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function Te(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=j,this.rebindTextures=De,this.setupRenderTarget=K,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=te}function xm(e,t){function r(i,a=xr){let n,s=Ze.getTransfer(a);if(i===rr)return e.UNSIGNED_BYTE;if(i===pn)return e.UNSIGNED_SHORT_4_4_4_4;if(i===fn)return e.UNSIGNED_SHORT_5_5_5_1;if(i===oo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===no)return e.BYTE;if(i===so)return e.SHORT;if(i===Ui)return e.UNSIGNED_SHORT;if(i===dn)return e.INT;if(i===zr)return e.UNSIGNED_INT;if(i===ir)return e.FLOAT;if(i===ei)return e.HALF_FLOAT;if(i===lo)return e.ALPHA;if(i===ho)return e.RGB;if(i===Vt)return e.RGBA;if(i===co)return e.LUMINANCE;if(i===uo)return e.LUMINANCE_ALPHA;if(i===ri)return e.DEPTH_COMPONENT;if(i===ii)return e.DEPTH_STENCIL;if(i===po)return e.RED;if(i===mn)return e.RED_INTEGER;if(i===fo)return e.RG;if(i===gn)return e.RG_INTEGER;if(i===vn)return e.RGBA_INTEGER;if(i===oa||i===la||i===ha||i===ca)if(s===$e)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===oa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===oa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_n||i===xn||i===Mn||i===yn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===_n)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sn||i===En||i===Tn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(i===Sn||i===En)return s===$e?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Tn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bn||i===wn||i===An||i===Rn||i===Cn||i===Pn||i===Ln||i===In||i===Dn||i===Un||i===Nn||i===On||i===Fn||i===zn)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(i===bn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===An)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ln)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===In)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Un)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===On)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ua||i===Bn||i===Vn)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(i===ua)return s===$e?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mo||i===kn||i===Hn||i===Gn)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(i===ua)return n.COMPRESSED_RED_RGTC1_EXT;if(i===kn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ti?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var Mm=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xi=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ym={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,r),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,f=.005;l.inputState.pinching&&u>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new Xi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},Sm=`
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

}`,Tm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new kt,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new Yt({vertexShader:Sm,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new ur(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bm=class extends si{constructor(e,t){super();let r=this,i=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,f=null,g=new Tm,v=t.getContextAttributes(),m=null,p=null,T=[],x=[],E=new pe,z=null,P=new At;P.viewport=new rt;let C=new At;C.viewport=new rt;let U=[P,C],y=new Mm,S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=T[q];return se===void 0&&(se=new As,T[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=T[q];return se===void 0&&(se=new As,T[q]=se),se.getGripSpace()},this.getHand=function(q){let se=T[q];return se===void 0&&(se=new As,T[q]=se),se.getHandSpace()};function F(q){let se=x.indexOf(q.inputSource);if(se===-1)return;let ye=T[se];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||n),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let q=0;q<T.length;q++){let se=x[q];se!==null&&(x[q]=null,T[q].disconnect(se))}S=null,R=null,g.reset(),e.setRenderTarget(m),d=null,u=null,c=null,i=null,p=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(E.width,E.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){let se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Mr(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let se=null,ye=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?ii:ri,ye=v.stencil?ti:zr);let ue={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:a};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Mr(u.textureWidth,u.textureHeight,{format:Vt,type:rr,depthTexture:new ll(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await i.requestReferenceSpace(s),ze.setContext(i),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(q){for(let se=0;se<q.removed.length;se++){let ye=q.removed[se],Ee=x.indexOf(ye);Ee>=0&&(x[Ee]=null,T[Ee].disconnect(ye))}for(let se=0;se<q.added.length;se++){let ye=q.added[se],Ee=x.indexOf(ye);if(Ee===-1){for(let Re=0;Re<T.length;Re++)if(Re>=x.length){x.push(ye),Ee=Re;break}else if(x[Re]===null){x[Re]=ye,Ee=Re;break}if(Ee===-1)break}let ue=T[Ee];ue&&ue.connect(ye)}}let Y=new L,X=new L;function ee(q,se,ye){Y.setFromMatrixPosition(se.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);let Ee=Y.distanceTo(X),ue=se.projectionMatrix.elements,Re=ye.projectionMatrix.elements,Be=ue[14]/(ue[10]-1),De=ue[14]/(ue[10]+1),K=(ue[9]+1)/ue[5],he=(ue[9]-1)/ue[5],A=(ue[8]-1)/ue[0],_e=(Re[8]+1)/Re[0],ne=Be*A,Se=Be*_e,te=Ee/(-A+_e),Ne=te*-A;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ne),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ue[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let ve=Be+te,Te=De+te,b=ne-Ne,_=Se+(Ee-Ne),N=K*De/Te*ve,Z=he*De/Te*ve;q.projectionMatrix.makePerspective(b,_,N,Z,ve,Te),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let se=q.near,ye=q.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),y.near=C.near=P.near=se,y.far=C.far=P.far=ye,(S!==y.near||R!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,R=y.far),P.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,y.layers.mask=P.layers.mask|C.layers.mask;let Ee=q.parent,ue=y.cameras;j(y,Ee);for(let Re=0;Re<ue.length;Re++)j(ue[Re],Ee);ue.length===2?ee(y,P,C):y.projectionMatrix.copy(P.projectionMatrix),le(q,y,Ee)};function le(q,se,ye){ye===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qn*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(q){o=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ce=null;function Ie(q,se){if(h=se.getViewerPose(l||n),f=se,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Ee=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let Re=0;Re<ye.length;Re++){let Be=ye[Re],De=null;if(d!==null)De=d.getViewport(Be);else{let he=c.getViewSubImage(u,Be);De=he.viewport,Re===0&&(e.setRenderTargetTextures(p,he.colorTexture,u.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(p))}let K=U[Re];K===void 0&&(K=new At,K.layers.enable(Re),K.viewport=new rt,U[Re]=K),K.matrix.fromArray(Be.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Be.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(De.x,De.y,De.width,De.height),Re===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(K)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let Re=c.getDepthInformation(ye[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,i.renderState)}}for(let ye=0;ye<T.length;ye++){let Ee=x[ye],ue=T[ye];Ee!==null&&ue!==void 0&&ue.update(Ee,se,l||n)}ce&&ce(q,se),se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:se}),f=null}let ze=new el;ze.setAnimationLoop(Ie),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}},qr=new br,wm=new lt;function Am(e,t){function r(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Jo(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,T,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(n(m,p),g(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),v(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,r(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,r(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,r(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,r(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,r(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,r(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),x=T.envMap,E=T.envMapRotation;x&&(m.envMap.value=x,qr.copy(E),qr.x*=-1,qr.y*=-1,qr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),m.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(qr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,r(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,r(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,r(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,r(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,r(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,r(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,r(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,r(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,r(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,r(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,r(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,r(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,r(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,r(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,r(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,r(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,r(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,r(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,r(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Rm(e,t,r,i){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){let E=x.program;i.uniformBlockBinding(T,E)}function h(T,x){let E=a[T.id];E===void 0&&(g(T),E=c(T),a[T.id]=E,T.addEventListener("dispose",m));let z=x.program;i.updateUBOMapping(T,z);let P=t.render.frame;n[T.id]!==P&&(d(T),n[T.id]=P)}function c(T){let x=u();T.__bindingPointIndex=x;let E=e.createBuffer(),z=T.__size,P=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,z,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,E),E}function u(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let x=a[T.id],E=T.uniforms,z=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let P=0,C=E.length;P<C;P++){let U=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,S=U.length;y<S;y++){let R=U[y];if(f(R,P,y,z)===!0){let F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],G=0;for(let Y=0;Y<B.length;Y++){let X=B[Y],ee=v(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,F+G,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,G),G+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(T,x,E,z){let P=T.value,C=x+"_"+E;if(z[C]===void 0)return typeof P=="number"||typeof P=="boolean"?z[C]=P:z[C]=P.clone(),!0;{let U=z[C];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return z[C]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(T){let x=T.uniforms,E=0,z=16;for(let C=0,U=x.length;C<U;C++){let y=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,R=y.length;S<R;S++){let F=y[S],B=Array.isArray(F.value)?F.value:[F.value];for(let G=0,Y=B.length;G<Y;G++){let X=B[G],ee=v(X),j=E%z,le=j%ee.boundary,ce=j+le;E+=le,ce!==0&&z-ce<ee.storage&&(E+=z-ce),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ee.storage}}}let P=E%z;return P>0&&(E+=z-P),T.__size=E,T.__cache={},this}function v(T){let x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){let x=T.target;x.removeEventListener("dispose",m);let E=s.indexOf(x.__bindingPointIndex);s.splice(E,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function p(){for(let T in a)e.deleteBuffer(a[T]);s=[],a={},n={}}return{bind:l,update:h,dispose:p}}var Cm=class{constructor(e={}){let{canvas:t=gc(),context:r=null,depth:i=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=n;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this.toneMapping=er,this.toneMappingExposure=1;let x=this,E=!1,z=0,P=0,C=null,U=-1,y=null,S=new rt,R=new rt,F=null,B=new Xe(0),G=0,Y=t.width,X=t.height,ee=1,j=null,le=null,ce=new rt(0,0,Y,X),Ie=new rt(0,0,Y,X),ze=!1,q=new vs,se=!1,ye=!1,Ee=new lt,ue=new lt,Re=new L,Be=new rt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function he(){return C===null?ee:1}let A=r;function _e(M,D){return t.getContext(M,D)}try{let M={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",O,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",$,!1),A===null){let D="webgl2";if(A=_e(D,M),A===null)throw _e(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ne,Se,te,Ne,ve,Te,b,_,N,Z,Q,J,Le,de,me,Oe,oe,ge,je,Fe,xe,Ve,ke,re;function w(){ne=new Dp(A),ne.init(),Ve=new xm(A,ne),Se=new Ap(A,ne,e,Ve),te=new gm(A,ne),Se.reverseDepthBuffer&&u&&te.buffers.depth.setReversed(!0),Ne=new Op(A),ve=new tm,Te=new _m(A,ne,te,ve,Se,Ve,Ne),b=new Cp(x),_=new Ip(x),N=new Gc(A),ke=new bp(A,N),Z=new Up(A,N,Ne,ke),Q=new zp(A,Z,N,Ne),je=new Fp(A,Se,Te),Oe=new Rp(ve),J=new em(x,b,_,ne,Se,ke,Oe),Le=new Am(x,ve),de=new im,me=new hm(ne),ge=new Tp(x,b,_,te,Q,d,o),oe=new fm(x,Q,Se),re=new Rm(A,Ne,Se,te),Fe=new wp(A,ne,Ne),xe=new Np(A,ne,Ne),Ne.programs=J.programs,x.capabilities=Se,x.extensions=ne,x.properties=ve,x.renderLists=de,x.shadowMap=oe,x.state=te,x.info=Ne}w();let V=new bm(x,A);this.xr=V,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let M=ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(Y,X,!1))},this.getSize=function(M){return M.set(Y,X)},this.setSize=function(M,D,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,X=D,t.width=Math.floor(M*ee),t.height=Math.floor(D*ee),k===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Y*ee,X*ee).floor()},this.setDrawingBufferSize=function(M,D,k){Y=M,X=D,ee=k,t.width=Math.floor(M*k),t.height=Math.floor(D*k),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(ce)},this.setViewport=function(M,D,k,H){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,D,k,H),te.viewport(S.copy(ce).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Ie)},this.setScissor=function(M,D,k,H){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,D,k,H),te.scissor(R.copy(Ie).multiplyScalar(ee).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(M){te.setScissorTest(ze=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(M=!0,D=!0,k=!0){let H=0;if(M){let I=!1;if(C!==null){let ae=C.texture.format;I=ae===vn||ae===gn||ae===mn}if(I){let ae=C.texture.type,Me=ae===rr||ae===zr||ae===Ui||ae===ti||ae===pn||ae===fn,Ae=ge.getClearColor(),Ce=ge.getClearAlpha(),He=Ae.r,We=Ae.g,Ue=Ae.b;Me?(f[0]=He,f[1]=We,f[2]=Ue,f[3]=Ce,A.clearBufferuiv(A.COLOR,0,f)):(g[0]=He,g[1]=We,g[2]=Ue,g[3]=Ce,A.clearBufferiv(A.COLOR,0,g))}else H|=A.COLOR_BUFFER_BIT}D&&(H|=A.DEPTH_BUFFER_BIT),k&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",O,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",$,!1),de.dispose(),me.dispose(),ve.dispose(),b.dispose(),_.dispose(),Q.dispose(),ke.dispose(),re.dispose(),J.dispose(),V.dispose(),V.removeEventListener("sessionstart",et),V.removeEventListener("sessionend",tt),ct.stop()};function O(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=Ne.autoReset,D=oe.enabled,k=oe.autoUpdate,H=oe.needsUpdate,I=oe.type;w(),Ne.autoReset=M,oe.enabled=D,oe.autoUpdate=k,oe.needsUpdate=H,oe.type=I}function $(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ie(M){let D=M.target;D.removeEventListener("dispose",ie),we(D)}function we(M){qe(M),ve.remove(M)}function qe(M){let D=ve.get(M).programs;D!==void 0&&(D.forEach(function(k){J.releaseProgram(k)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,k,H,I,ae){D===null&&(D=De);let Me=I.isMesh&&I.matrixWorld.determinant()<0,Ae=wh(M,D,k,H,I);te.setMaterial(H,Me);let Ce=k.index,He=1;if(H.wireframe===!0){if(Ce=Z.getWireframeAttribute(k),Ce===void 0)return;He=2}let We=k.drawRange,Ue=k.attributes.position,Qe=We.start*He,at=(We.start+We.count)*He;ae!==null&&(Qe=Math.max(Qe,ae.start*He),at=Math.min(at,(ae.start+ae.count)*He)),Ce!==null?(Qe=Math.max(Qe,0),at=Math.min(at,Ce.count)):Ue!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,Ue.count));let nt=at-Qe;if(nt<0||nt===1/0)return;ke.setup(I,H,Ae,k,Ce);let ut,st=Fe;if(Ce!==null&&(ut=N.get(Ce),st=xe,st.setIndex(ut)),I.isMesh)H.wireframe===!0?(te.setLineWidth(H.wireframeLinewidth*he()),st.setMode(A.LINES)):st.setMode(A.TRIANGLES);else if(I.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),te.setLineWidth(Pe*he()),I.isLineSegments?st.setMode(A.LINES):I.isLineLoop?st.setMode(A.LINE_LOOP):st.setMode(A.LINE_STRIP)}else I.isPoints?st.setMode(A.POINTS):I.isSprite&&st.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)st.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))st.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Pe=I._multiDrawStarts,Ur=I._multiDrawCounts,Nr=I._multiDrawCount,Ft=Ce?N.get(Ce).bytesPerElement:1,Jr=ve.get(H).currentProgram.getUniforms();for(let Rt=0;Rt<Nr;Rt++)Jr.setValue(A,"_gl_DrawID",Rt),st.render(Pe[Rt]/Ft,Ur[Rt])}else if(I.isInstancedMesh)st.renderInstances(Qe,nt,I.count);else if(k.isInstancedBufferGeometry){let Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ur=Math.min(k.instanceCount,Pe);st.renderInstances(Qe,nt,Ur)}else st.render(Qe,nt)};function Ke(M,D,k){M.transparent===!0&&M.side===zt&&M.forceSinglePass===!1?(M.side=bt,M.needsUpdate=!0,aa(M,D,k),M.side=vr,M.needsUpdate=!0,aa(M,D,k),M.side=zt):aa(M,D,k)}this.compile=function(M,D,k=null){k===null&&(k=M),m=me.get(k),m.init(D),T.push(m),k.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),M!==k&&M.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();let H=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let ae=I.material;if(ae)if(Array.isArray(ae))for(let Me=0;Me<ae.length;Me++){let Ae=ae[Me];Ke(Ae,k,I),H.add(Ae)}else Ke(ae,k,I),H.add(ae)}),T.pop(),m=null,H},this.compileAsync=function(M,D,k=null){let H=this.compile(M,D,k);return new Promise(I=>{function ae(){if(H.forEach(function(Me){ve.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){I(M);return}setTimeout(ae,10)}ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let be=null;function Ge(M){be&&be(M)}function et(){ct.stop()}function tt(){ct.start()}let ct=new el;ct.setAnimationLoop(Ge),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(M){be=M,V.setAnimationLoop(M),M===null?ct.stop():ct.start()},V.addEventListener("sessionstart",et),V.addEventListener("sessionend",tt),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,D,C),m=me.get(M,T.length),m.init(D),T.push(m),ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(ue),ye=this.localClippingEnabled,se=Oe.init(this.clippingPlanes,ye),v=de.get(M,p.length),v.init(),p.push(v),V.enabled===!0&&V.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&Qt(ae,D,-1/0,x.sortObjects)}Qt(M,D,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(j,le),K=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,K&&ge.addToRenderList(v,M),this.info.render.frame++,se===!0&&Oe.beginShadows();let k=m.state.shadowsArray;oe.render(k,M,D),se===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=v.opaque,I=v.transmissive;if(m.setupLights(),D.isArrayCamera){let ae=D.cameras;if(I.length>0)for(let Me=0,Ae=ae.length;Me<Ae;Me++){let Ce=ae[Me];js(H,I,M,Ce)}K&&ge.render(M);for(let Me=0,Ae=ae.length;Me<Ae;Me++){let Ce=ae[Me];Xs(v,M,Ce,Ce.viewport)}}else I.length>0&&js(H,I,M,D),K&&ge.render(M),Xs(v,M,D);C!==null&&(Te.updateMultisampleRenderTarget(C),Te.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,D),ke.resetDefaultState(),U=-1,y=null,T.pop(),T.length>0?(m=T[T.length-1],se===!0&&Oe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Qt(M,D,k,H){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){H&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);let ae=Q.update(M),Me=M.material;Me.visible&&v.push(M,ae,Me,k,Be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){let ae=Q.update(M),Me=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Be.copy(ae.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){let Ae=ae.groups;for(let Ce=0,He=Ae.length;Ce<He;Ce++){let We=Ae[Ce],Ue=Me[We.materialIndex];Ue&&Ue.visible&&v.push(M,ae,Ue,k,Be.z,We)}}else Me.visible&&v.push(M,ae,Me,k,Be.z,null)}}let I=M.children;for(let ae=0,Me=I.length;ae<Me;ae++)Qt(I[ae],D,k,H)}function Xs(M,D,k,H){let I=M.opaque,ae=M.transmissive,Me=M.transparent;m.setupLightsView(k),se===!0&&Oe.setGlobalState(x.clippingPlanes,k),H&&te.viewport(S.copy(H)),I.length>0&&ia(I,D,k),ae.length>0&&ia(ae,D,k),Me.length>0&&ia(Me,D,k),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function js(M,D,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Mr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ei:rr,minFilter:tr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let I=m.state.transmissionRenderTarget[H.id],ae=H.viewport||S;I.setSize(ae.z,ae.w);let Me=x.getRenderTarget();x.setRenderTarget(I),x.getClearColor(B),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),K&&ge.render(k);let Ae=x.toneMapping;x.toneMapping=er;let Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),se===!0&&Oe.setGlobalState(x.clippingPlanes,H),ia(M,k,H),Te.updateMultisampleRenderTarget(I),Te.updateRenderTargetMipmap(I),ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let We=0,Ue=D.length;We<Ue;We++){let Qe=D[We],at=Qe.object,nt=Qe.geometry,ut=Qe.material,st=Qe.group;if(ut.side===zt&&at.layers.test(H.layers)){let Pe=ut.side;ut.side=bt,ut.needsUpdate=!0,qs(at,k,H,nt,ut,st),ut.side=Pe,ut.needsUpdate=!0,He=!0}}He===!0&&(Te.updateMultisampleRenderTarget(I),Te.updateRenderTargetMipmap(I))}x.setRenderTarget(Me),x.setClearColor(B,G),Ce!==void 0&&(H.viewport=Ce),x.toneMapping=Ae}function ia(M,D,k){let H=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ae=M.length;I<ae;I++){let Me=M[I],Ae=Me.object,Ce=Me.geometry,He=H===null?Me.material:H,We=Me.group;Ae.layers.test(k.layers)&&qs(Ae,D,k,Ce,He,We)}}function qs(M,D,k,H,I,ae){M.onBeforeRender(x,D,k,H,I,ae),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(x,D,k,H,M,ae),I.transparent===!0&&I.side===zt&&I.forceSinglePass===!1?(I.side=bt,I.needsUpdate=!0,x.renderBufferDirect(k,D,H,I,M,ae),I.side=vr,I.needsUpdate=!0,x.renderBufferDirect(k,D,H,I,M,ae),I.side=zt):x.renderBufferDirect(k,D,H,I,M,ae),M.onAfterRender(x,D,k,H,I,ae)}function aa(M,D,k){D.isScene!==!0&&(D=De);let H=ve.get(M),I=m.state.lights,ae=m.state.shadowsArray,Me=I.state.version,Ae=J.getParameters(M,I.state,ae,D,k),Ce=J.getProgramCacheKey(Ae),He=H.programs;H.environment=M.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(M.isMeshStandardMaterial?_:b).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",ie),He=new Map,H.programs=He);let We=He.get(Ce);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===Me)return Js(M,Ae),We}else Ae.uniforms=J.getUniforms(M),M.onBeforeCompile(Ae,x),We=J.acquireProgram(Ae,Ce),He.set(Ce,We),H.uniforms=Ae.uniforms;let Ue=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Oe.uniform),Js(M,Ae),H.needsLights=Rh(M),H.lightsStateVersion=Me,H.needsLights&&(Ue.ambientLightColor.value=I.state.ambient,Ue.lightProbe.value=I.state.probe,Ue.directionalLights.value=I.state.directional,Ue.directionalLightShadows.value=I.state.directionalShadow,Ue.spotLights.value=I.state.spot,Ue.spotLightShadows.value=I.state.spotShadow,Ue.rectAreaLights.value=I.state.rectArea,Ue.ltc_1.value=I.state.rectAreaLTC1,Ue.ltc_2.value=I.state.rectAreaLTC2,Ue.pointLights.value=I.state.point,Ue.pointLightShadows.value=I.state.pointShadow,Ue.hemisphereLights.value=I.state.hemi,Ue.directionalShadowMap.value=I.state.directionalShadowMap,Ue.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ue.spotShadowMap.value=I.state.spotShadowMap,Ue.spotLightMatrix.value=I.state.spotLightMatrix,Ue.spotLightMap.value=I.state.spotLightMap,Ue.pointShadowMap.value=I.state.pointShadowMap,Ue.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=We,H.uniformsList=null,We}function Ys(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Oa.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Js(M,D){let k=ve.get(M);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function wh(M,D,k,H,I){D.isScene!==!0&&(D=De),Te.resetTextureUnits();let ae=D.fog,Me=H.isMeshStandardMaterial?D.environment:null,Ae=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ai,Ce=(H.isMeshStandardMaterial?_:b).get(H.envMap||Me),He=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,We=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,at=!!k.morphAttributes.color,nt=er;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(nt=x.toneMapping);let ut=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=ut!==void 0?ut.length:0,Pe=ve.get(H),Ur=m.state.lights;if(se===!0&&(ye===!0||M!==y)){let Tt=M===y&&H.id===U;Oe.setState(H,M,Tt)}let Nr=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ur.state.version||Pe.outputColorSpace!==Ae||I.isBatchedMesh&&Pe.batching===!1||!I.isBatchedMesh&&Pe.batching===!0||I.isBatchedMesh&&Pe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Pe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Pe.instancing===!1||!I.isInstancedMesh&&Pe.instancing===!0||I.isSkinnedMesh&&Pe.skinning===!1||!I.isSkinnedMesh&&Pe.skinning===!0||I.isInstancedMesh&&Pe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Pe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Pe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Pe.instancingMorph===!1&&I.morphTexture!==null||Pe.envMap!==Ce||H.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Oe.numPlanes||Pe.numIntersection!==Oe.numIntersection)||Pe.vertexAlphas!==He||Pe.vertexTangents!==We||Pe.morphTargets!==Ue||Pe.morphNormals!==Qe||Pe.morphColors!==at||Pe.toneMapping!==nt||Pe.morphTargetsCount!==st)&&(Nr=!0):(Nr=!0,Pe.__version=H.version);let Ft=Pe.currentProgram;Nr===!0&&(Ft=aa(H,D,I));let Jr=!1,Rt=!1,Pi=!1,it=Ft.getUniforms(),qt=Pe.uniforms;if(te.useProgram(Ft.program)&&(Jr=!0,Rt=!0,Pi=!0),H.id!==U&&(U=H.id,Rt=!0),Jr||y!==M){te.buffers.depth.getReversed()?(Ee.copy(M.projectionMatrix),_c(Ee),xc(Ee),it.setValue(A,"projectionMatrix",Ee)):it.setValue(A,"projectionMatrix",M.projectionMatrix),it.setValue(A,"viewMatrix",M.matrixWorldInverse);let Tt=it.map.cameraPosition;Tt!==void 0&&Tt.setValue(A,Re.setFromMatrixPosition(M.matrixWorld)),Se.logarithmicDepthBuffer&&it.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Rt=!0,Pi=!0)}if(I.isSkinnedMesh){it.setOptional(A,I,"bindMatrix"),it.setOptional(A,I,"bindMatrixInverse");let Tt=I.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),it.setValue(A,"boneTexture",Tt.boneTexture,Te))}I.isBatchedMesh&&(it.setOptional(A,I,"batchingTexture"),it.setValue(A,"batchingTexture",I._matricesTexture,Te),it.setOptional(A,I,"batchingIdTexture"),it.setValue(A,"batchingIdTexture",I._indirectTexture,Te),it.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&it.setValue(A,"batchingColorTexture",I._colorsTexture,Te));let Li=k.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&je.update(I,k,Ft),(Rt||Pe.receiveShadow!==I.receiveShadow)&&(Pe.receiveShadow=I.receiveShadow,it.setValue(A,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(qt.envMap.value=Ce,qt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(qt.envMapIntensity.value=D.environmentIntensity),Rt&&(it.setValue(A,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Ah(qt,Pi),ae&&H.fog===!0&&Le.refreshFogUniforms(qt,ae),Le.refreshMaterialUniforms(qt,H,ee,X,m.state.transmissionRenderTarget[M.id]),Oa.upload(A,Ys(Pe),qt,Te)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Oa.upload(A,Ys(Pe),qt,Te),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(A,"center",I.center),it.setValue(A,"modelViewMatrix",I.modelViewMatrix),it.setValue(A,"normalMatrix",I.normalMatrix),it.setValue(A,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Tt=H.uniformsGroups;for(let Ii=0,gr=Tt.length;Ii<gr;Ii++){let Zs=Tt[Ii];re.update(Zs,Ft),re.bind(Zs,Ft)}}return Ft}function Ah(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Rh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,D,k){ve.get(M.texture).__webglTexture=D,ve.get(M.depthTexture).__webglTexture=k;let H=ve.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){let k=ve.get(M);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,k=0){C=M,z=D,P=k;let H=!0,I=null,ae=!1,Me=!1;if(M){let Ae=ve.get(M);if(Ae.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(Ae.__webglFramebuffer===void 0)Te.setupRenderTarget(M);else if(Ae.__hasExternalTextures)Te.rebindTextures(M,ve.get(M.texture).__webglTexture,ve.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let We=M.depthTexture;if(Ae.__boundDepthTexture!==We){if(We!==null&&ve.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Me=!0);let He=ve.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[D])?I=He[D][k]:I=He[D],ae=!0):M.samples>0&&Te.useMultisampledRTT(M)===!1?I=ve.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?I=He[k]:I=He,S.copy(M.viewport),R.copy(M.scissor),F=M.scissorTest}else S.copy(ce).multiplyScalar(ee).floor(),R.copy(Ie).multiplyScalar(ee).floor(),F=ze;if(te.bindFramebuffer(A.FRAMEBUFFER,I)&&H&&te.drawBuffers(M,I),te.viewport(S),te.scissor(R),te.setScissorTest(F),ae){let Ae=ve.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,k)}else if(Me){let Ae=ve.get(M.texture),Ce=D||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ae.__webglTexture,k||0,Ce)}U=-1},this.readRenderTargetPixels=function(M,D,k,H,I,ae,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){te.bindFramebuffer(A.FRAMEBUFFER,Ae);try{let Ce=M.texture,He=Ce.format,We=Ce.type;if(!Se.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-H&&k>=0&&k<=M.height-I&&A.readPixels(D,k,H,I,Ve.convert(He),Ve.convert(We),ae)}finally{let Ce=C!==null?ve.get(C).__webglFramebuffer:null;te.bindFramebuffer(A.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,D,k,H,I,ae,Me){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){let Ce=M.texture,He=Ce.format,We=Ce.type;if(!Se.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-H&&k>=0&&k<=M.height-I){te.bindFramebuffer(A.FRAMEBUFFER,Ae);let Ue=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.bufferData(A.PIXEL_PACK_BUFFER,ae.byteLength,A.STREAM_READ),A.readPixels(D,k,H,I,Ve.convert(He),Ve.convert(We),0);let Qe=C!==null?ve.get(C).__webglFramebuffer:null;te.bindFramebuffer(A.FRAMEBUFFER,Qe);let at=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await vc(A,at,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ae),A.deleteBuffer(Ue),A.deleteSync(at),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,k=0){M.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);let H=Math.pow(2,-k),I=Math.floor(M.image.width*H),ae=Math.floor(M.image.height*H),Me=D!==null?D.x:0,Ae=D!==null?D.y:0;Te.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,Me,Ae,I,ae),te.unbindTexture()},this.copyTextureToTexture=function(M,D,k=null,H=null,I=0){M.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],D=arguments[2],I=arguments[3]||0,k=null);let ae,Me,Ae,Ce,He,We,Ue,Qe,at,nt=M.isCompressedTexture?M.mipmaps[I]:M.image;k!==null?(ae=k.max.x-k.min.x,Me=k.max.y-k.min.y,Ae=k.isBox3?k.max.z-k.min.z:1,Ce=k.min.x,He=k.min.y,We=k.isBox3?k.min.z:0):(ae=nt.width,Me=nt.height,Ae=nt.depth||1,Ce=0,He=0,We=0),H!==null?(Ue=H.x,Qe=H.y,at=H.z):(Ue=0,Qe=0,at=0);let ut=Ve.convert(D.format),st=Ve.convert(D.type),Pe;D.isData3DTexture?(Te.setTexture3D(D,0),Pe=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Te.setTexture2DArray(D,0),Pe=A.TEXTURE_2D_ARRAY):(Te.setTexture2D(D,0),Pe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);let Ur=A.getParameter(A.UNPACK_ROW_LENGTH),Nr=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ft=A.getParameter(A.UNPACK_SKIP_PIXELS),Jr=A.getParameter(A.UNPACK_SKIP_ROWS),Rt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,nt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,nt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ce),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,We);let Pi=M.isDataArrayTexture||M.isData3DTexture,it=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let qt=ve.get(M),Li=ve.get(D),Tt=ve.get(qt.__renderTarget),Ii=ve.get(Li.__renderTarget);te.bindFramebuffer(A.READ_FRAMEBUFFER,Tt.__webglFramebuffer),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let gr=0;gr<Ae;gr++)Pi&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(M).__webglTexture,I,We+gr),M.isDepthTexture?(it&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(D).__webglTexture,I,at+gr),A.blitFramebuffer(Ce,He,ae,Me,Ue,Qe,ae,Me,A.DEPTH_BUFFER_BIT,A.NEAREST)):it?A.copyTexSubImage3D(Pe,I,Ue,Qe,at+gr,Ce,He,ae,Me):A.copyTexSubImage2D(Pe,I,Ue,Qe,at+gr,Ce,He,ae,Me);te.bindFramebuffer(A.READ_FRAMEBUFFER,null),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else it?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Pe,I,Ue,Qe,at,ae,Me,Ae,ut,st,nt.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(Pe,I,Ue,Qe,at,ae,Me,Ae,ut,nt.data):A.texSubImage3D(Pe,I,Ue,Qe,at,ae,Me,Ae,ut,st,nt):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,I,Ue,Qe,ae,Me,ut,st,nt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,I,Ue,Qe,nt.width,nt.height,ut,nt.data):A.texSubImage2D(A.TEXTURE_2D,I,Ue,Qe,ae,Me,ut,st,nt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ur),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Nr),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ft),A.pixelStorei(A.UNPACK_SKIP_ROWS,Jr),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Rt),I===0&&D.generateMipmaps&&A.generateMipmap(Pe),te.unbindTexture()},this.copyTextureToTexture3D=function(M,D,k=null,H=null,I=0){return M.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,M=arguments[2],D=arguments[3],I=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,k,H,I)},this.initRenderTarget=function(M){ve.get(M).__webglFramebuffer===void 0&&Te.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Te.setTextureCube(M,0):M.isData3DTexture?Te.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Te.setTexture2DArray(M,0):Te.setTexture2D(M,0),te.unbindTexture()},this.resetState=function(){z=0,P=0,C=null,te.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}},Pm=class Mh{constructor(t,r=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(t),this.near=r,this.far=i}clone(){return new Mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pr=class extends kt{constructor(e,t,r,i,a,n,s,o,l){super(e,t,r,i,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),i=0,a=r.length,n;t?n=t:n=e*r[a-1];let s=0,o=a-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-n,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===n)return i/(a-1);let h=r[i],c=r[i+1]-h,u=(n-h)/c;return(i+u)/(a-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),n=this.getPoint(i),s=t||(a.isVector2?new pe:new L);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new L,i=[],a=[],n=[],s=new L,o=new lt;for(let d=0;d<=e;d++){let f=d/e;i[d]=this.getTangentAt(f,new L)}a[0]=new L,n[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),u<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],s),n[0].crossVectors(i[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(i[d-1],i[d]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(xt(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,f))}n[d].crossVectors(i[d],a[d])}if(t===!0){let d=Math.acos(xt(a[0].dot(a[e]),-1,1));d/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(i[f],d*f)),n[f].crossVectors(i[f],a[f])}return{tangents:i,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cs=class extends Zt{constructor(e=0,t=0,r=1,i=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new pe){let r=t,i=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(n?a=0:a=i),this.aClockwise===!0&&!n&&(a===i?a=-i:a=a-i);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lm=class extends Cs{constructor(e,t,r,i,a,n){super(e,t,r,r,i,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Ps(){let e=0,t=0,r=0,i=0;function a(n,s,o,l){e=n,t=o,r=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,f*=c,a(s,o,d,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+r*s+i*o}}}var za=new L,Ls=new Ps,Is=new Ps,Ds=new Ps,Im=class extends Zt{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new L){let r=t,i=this.points,a=i.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=i[(s-1)%a]:(za.subVectors(i[0],i[1]).add(i[0]),l=za);let c=i[s%a],u=i[(s+1)%a];if(this.closed||s+2<a?h=i[(s+2)%a]:(za.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),f<1e-4&&(f=g),v<1e-4&&(v=g),Ls.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,f,g,v),Is.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,f,g,v),Ds.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,f,g,v)}else this.curveType==="catmullrom"&&(Ls.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Is.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Ds.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return r.set(Ls.calc(o),Is.calc(o),Ds.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ll(e,t,r,i,a){let n=(i-t)*.5,s=(a-r)*.5,o=e*e,l=e*o;return(2*r-2*i+n+s)*l+(-3*r+3*i-2*n-s)*o+n*e+r}function Dm(e,t){let r=1-e;return r*r*t}function Um(e,t){return 2*(1-e)*e*t}function Nm(e,t){return e*e*t}function ji(e,t,r,i){return Dm(e,t)+Um(e,r)+Nm(e,i)}function Om(e,t){let r=1-e;return r*r*r*t}function Fm(e,t){let r=1-e;return 3*r*r*e*t}function zm(e,t){return 3*(1-e)*e*e*t}function Bm(e,t){return e*e*e*t}function qi(e,t,r,i,a){return Om(e,t)+Fm(e,r)+zm(e,i)+Bm(e,a)}var Il=class extends Zt{constructor(e=new pe,t=new pe,r=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new pe){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(qi(e,i.x,a.x,n.x,s.x),qi(e,i.y,a.y,n.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vm=class extends Zt{constructor(e=new L,t=new L,r=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new L){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(qi(e,i.x,a.x,n.x,s.x),qi(e,i.y,a.y,n.y,s.y),qi(e,i.z,a.z,n.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dl=class extends Zt{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},km=class extends Zt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends Zt{constructor(e=new pe,t=new pe,r=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new pe){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(ji(e,i.x,a.x,n.x),ji(e,i.y,a.y,n.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hm=class extends Zt{constructor(e=new L,t=new L,r=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new L){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(ji(e,i.x,a.x,n.x),ji(e,i.y,a.y,n.y),ji(e,i.z,a.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let r=t,i=this.points,a=(i.length-1)*e,n=Math.floor(a),s=a-n,o=i[n===0?n:n-1],l=i[n],h=i[n>i.length-2?i.length-1:n+1],c=i[n>i.length-3?i.length-1:n+2];return r.set(Ll(s,o.x,l.x,h.x,c.x),Ll(s,o.y,l.y,h.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new pe().fromArray(i))}return this}},Us=Object.freeze({__proto__:null,ArcCurve:Lm,CatmullRomCurve3:Im,CubicBezierCurve:Il,CubicBezierCurve3:Vm,EllipseCurve:Cs,LineCurve:Dl,LineCurve3:km,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Hm,SplineCurve:Nl}),Gm=class extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Us[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),a=0;for(;a<i.length;){if(i[a]>=r){let n=i[a]-r,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,a=this.curves;i<a.length;i++){let n=a[i],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];r&&r.equals(h)||(t.push(h),r=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new Us[i.type]().fromJSON(i))}return this}},Lr=class extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new Dl(this.currentPoint.clone(),new pe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let a=new Ul(this.currentPoint.clone(),new pe(e,t),new pe(r,i));return this.curves.push(a),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,a,n){let s=new Il(this.currentPoint.clone(),new pe(e,t),new pe(r,i),new pe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new Nl(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,a,n),this}absarc(e,t,r,i,a,n){return this.absellipse(e,t,r,r,i,a,n),this}ellipse(e,t,r,i,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,r,i,a,n,s,o),this}absellipse(e,t,r,i,a,n,s,o){let l=new Cs(e,t,r,i,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ol=class yh extends Xt{constructor(t=1,r=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:r,thetaStart:i,thetaLength:a},r=Math.max(3,r);let n=[],s=[],o=[],l=[],h=new L,c=new pe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=r;u++,d+=3){let f=i+u/r*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[d]/t+1)/2,c.y=(s[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=r;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ns=class Sh extends Xt{constructor(t=1,r=1,i=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],f=[],g=0,v=[],m=i/2,p=0;T(),s===!1&&(t>0&&x(!0),r>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function T(){let E=new L,z=new L,P=0,C=(r-t)/i;for(let U=0;U<=n;U++){let y=[],S=U/n,R=S*(r-t)+t;for(let F=0;F<=a;F++){let B=F/a,G=B*l+o,Y=Math.sin(G),X=Math.cos(G);z.x=R*Y,z.y=-S*i+m,z.z=R*X,u.push(z.x,z.y,z.z),E.set(Y,C,X).normalize(),d.push(E.x,E.y,E.z),f.push(B,1-S),y.push(g++)}v.push(y)}for(let U=0;U<a;U++)for(let y=0;y<n;y++){let S=v[y][U],R=v[y+1][U],F=v[y+1][U+1],B=v[y][U+1];(t>0||y!==0)&&(c.push(S,R,B),P+=3),(r>0||y!==n-1)&&(c.push(R,F,B),P+=3)}h.addGroup(p,P,0),p+=P}function x(E){let z=g,P=new pe,C=new L,U=0,y=E===!0?t:r,S=E===!0?1:-1;for(let F=1;F<=a;F++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let R=g;for(let F=0;F<=a;F++){let B=F/a*l+o,G=Math.cos(B),Y=Math.sin(B);C.x=y*Y,C.y=m*S,C.z=y*G,u.push(C.x,C.y,C.z),d.push(0,S,0),P.x=G*.5+.5,P.y=Y*.5*S+.5,f.push(P.x,P.y),g++}for(let F=0;F<a;F++){let B=z+F,G=R+F;E===!0?c.push(G,G+1,B):c.push(G+1,G,B),U+=3}h.addGroup(p,U,E===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kt=class extends Lr{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new Lr().fromJSON(i))}return this}},Wm={triangulate:function(e,t,r=2){let i=t&&t.length,a=i?t[0]*r:e.length,n=Fl(e,0,a,r,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,f;if(i&&(n=Jm(e,t,n,r)),e.length>80*r){o=h=e[0],l=c=e[1];for(let g=r;g<a;g+=r)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-o,c-l),f=f!==0?32767/f:0}return Yi(n,s,r,o,l,f,0),s}};function Fl(e,t,r,i,a){let n,s;if(a===sg(e,t,r,i)>0)for(n=t;n<r;n+=i)s=Vl(n,e[n],e[n+1],s);else for(n=r-i;n>=t;n-=i)s=Vl(n,e[n],e[n+1],s);return s&&Ba(s,s.next)&&(Zi(s),s=s.next),s}function Yr(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(Ba(r,r.next)||ot(r.prev,r,r.next)===0)){if(Zi(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function Yi(e,t,r,i,a,n,s){if(!e)return;!s&&n&&eg(e,i,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?jm(e,i,a,n):Xm(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(h.i/r|0),Zi(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=qm(Yr(e),t,r),Yi(e,t,r,i,a,n,2)):s===2&&Ym(e,t,r,i,a,n):Yi(Yr(e),t,r,i,a,n,1);break}}}function Xm(e){let t=e.prev,r=e,i=e.next;if(ot(t,r,i)>=0)return!1;let a=t.x,n=r.x,s=i.x,o=t.y,l=r.y,h=i.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,f=o>l?o>h?o:h:l>h?l:h,g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&wi(a,o,n,l,s,h,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jm(e,t,r,i){let a=e.prev,n=e,s=e.next;if(ot(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,f=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,p=Os(f,g,t,r,i),T=Os(v,m,t,r,i),x=e.prevZ,E=e.nextZ;for(;x&&x.z>=p&&E&&E.z<=T;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&wi(o,c,l,u,h,d,x.x,x.y)&&ot(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==a&&E!==s&&wi(o,c,l,u,h,d,E.x,E.y)&&ot(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&wi(o,c,l,u,h,d,x.x,x.y)&&ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=T;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==a&&E!==s&&wi(o,c,l,u,h,d,E.x,E.y)&&ot(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function qm(e,t,r){let i=e;do{let a=i.prev,n=i.next.next;!Ba(a,n)&&zl(a,i,i.next,n)&&Ji(a,n)&&Ji(n,a)&&(t.push(a.i/r|0),t.push(i.i/r|0),t.push(n.i/r|0),Zi(i),Zi(i.next),i=e=n),i=i.next}while(i!==e);return Yr(i)}function Ym(e,t,r,i,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&ig(s,o)){let l=Bl(s,o);s=Yr(s,s.next),l=Yr(l,l.next),Yi(s,t,r,i,a,n,0),Yi(l,t,r,i,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Jm(e,t,r,i){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*i,l=n<s-1?t[n+1]*i:e.length,h=Fl(e,o,l,i,!1),h===h.next&&(h.steiner=!0),a.push(rg(h));for(a.sort(Zm),n=0;n<a.length;n++)r=Km(a[n],r);return r}function Zm(e,t){return e.x-t.x}function Km(e,t){let r=Qm(e,t);if(!r)return t;let i=Bl(r,e);return Yr(i,i.next),Yr(r,r.next)}function Qm(e,t){let r=t,i=-1/0,a,n=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let d=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=n&&d>i&&(i=d,a=r.x<r.next.x?r:r.next,d===n))return a}r=r.next}while(r!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;r=a;do n>=r.x&&r.x>=l&&n!==r.x&&wi(s<h?n:i,s,l,h,s<h?i:n,s,r.x,r.y)&&(u=Math.abs(s-r.y)/(n-r.x),Ji(r,e)&&(u<c||u===c&&(r.x>a.x||r.x===a.x&&$m(a,r)))&&(a=r,c=u)),r=r.next;while(r!==o);return a}function $m(e,t){return ot(e.prev,e,t.prev)<0&&ot(t.next,e,e.next)<0}function eg(e,t,r,i){let a=e;do a.z===0&&(a.z=Os(a.x,a.y,t,r,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,tg(a)}function tg(e){let t,r,i,a,n,s,o,l,h=1;do{for(r=e,e=null,n=null,s=0;r;){for(s++,i=r,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(a=r,r=r.nextZ,o--):(a=i,i=i.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=i}n.nextZ=null,h*=2}while(s>1);return e}function Os(e,t,r,i,a){return e=(e-r)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function rg(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function wi(e,t,r,i,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(n-o)>=(a-s)*(i-o)}function ig(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ag(e,t)&&(Ji(e,t)&&Ji(t,e)&&ng(e,t)&&(ot(e.prev,e,t.prev)||ot(e,t.prev,t))||Ba(e,t)&&ot(e.prev,e,e.next)>0&&ot(t.prev,t,t.next)>0)}function ot(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Ba(e,t){return e.x===t.x&&e.y===t.y}function zl(e,t,r,i){let a=ka(ot(e,t,r)),n=ka(ot(e,t,i)),s=ka(ot(r,i,e)),o=ka(ot(r,i,t));return!!(a!==n&&s!==o||a===0&&Va(e,r,t)||n===0&&Va(e,i,t)||s===0&&Va(r,e,i)||o===0&&Va(r,t,i))}function Va(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function ka(e){return e>0?1:e<0?-1:0}function ag(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&zl(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function Ji(e,t){return ot(e.prev,e,e.next)<0?ot(e,t,e.next)>=0&&ot(e,e.prev,t)>=0:ot(e,t,e.prev)<0||ot(e,e.next,t)<0}function ng(e,t){let r=e,i=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&a<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Bl(e,t){let r=new Fs(e.i,e.x,e.y),i=new Fs(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=a,a.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function Vl(e,t,r,i){let a=new Fs(e,t,r);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Zi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Fs(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sg(e,t,r,i){let a=0;for(let n=t,s=r-i;n<r;n+=i)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Ai=class Eh{static area(t){let r=t.length,i=0;for(let a=r-1,n=0;n<r;a=n++)i+=t[a].x*t[n].y-t[n].x*t[a].y;return i*.5}static isClockWise(t){return Eh.area(t)<0}static triangulateShape(t,r){let i=[],a=[],n=[];kl(t),Hl(i,t);let s=t.length;r.forEach(kl);for(let l=0;l<r.length;l++)a.push(s),s+=r[l].length,Hl(i,r[l]);let o=Wm.triangulate(i,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function kl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Hl(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var Ki=class Th extends Xt{constructor(t=new Kt([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new vt(a,3)),this.setAttribute("uv",new vt(n,2)),this.computeVertexNormals();function s(o){let l=[],h=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,u=r.depth!==void 0?r.depth:1,d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,g=r.bevelSize!==void 0?r.bevelSize:f-.1,v=r.bevelOffset!==void 0?r.bevelOffset:0,m=r.bevelSegments!==void 0?r.bevelSegments:3,p=r.extrudePath,T=r.UVGenerator!==void 0?r.UVGenerator:og,x,E=!1,z,P,C,U;p&&(x=p.getSpacedPoints(c),E=!0,d=!1,z=p.computeFrenetFrames(c,!1),P=new L,C=new L,U=new L),d||(m=0,f=0,g=0,v=0);let y=o.extractPoints(h),S=y.shape,R=y.holes;if(!Ai.isClockWise(S)){S=S.reverse();for(let K=0,he=R.length;K<he;K++){let A=R[K];Ai.isClockWise(A)&&(R[K]=A.reverse())}}let F=Ai.triangulateShape(S,R),B=S;for(let K=0,he=R.length;K<he;K++){let A=R[K];S=S.concat(A)}function G(K,he,A){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(he,A)}let Y=S.length,X=F.length;function ee(K,he,A){let _e,ne,Se,te=K.x-he.x,Ne=K.y-he.y,ve=A.x-K.x,Te=A.y-K.y,b=te*te+Ne*Ne,_=te*Te-Ne*ve;if(Math.abs(_)>Number.EPSILON){let N=Math.sqrt(b),Z=Math.sqrt(ve*ve+Te*Te),Q=he.x-Ne/N,J=he.y+te/N,Le=A.x-Te/Z,de=A.y+ve/Z,me=((Le-Q)*Te-(de-J)*ve)/(te*Te-Ne*ve);_e=Q+te*me-K.x,ne=J+Ne*me-K.y;let Oe=_e*_e+ne*ne;if(Oe<=2)return new pe(_e,ne);Se=Math.sqrt(Oe/2)}else{let N=!1;te>Number.EPSILON?ve>Number.EPSILON&&(N=!0):te<-Number.EPSILON?ve<-Number.EPSILON&&(N=!0):Math.sign(Ne)===Math.sign(Te)&&(N=!0),N?(_e=-Ne,ne=te,Se=Math.sqrt(b)):(_e=te,ne=Ne,Se=Math.sqrt(b/2))}return new pe(_e/Se,ne/Se)}let j=[];for(let K=0,he=B.length,A=he-1,_e=K+1;K<he;K++,A++,_e++)A===he&&(A=0),_e===he&&(_e=0),j[K]=ee(B[K],B[A],B[_e]);let le=[],ce,Ie=j.concat();for(let K=0,he=R.length;K<he;K++){let A=R[K];ce=[];for(let _e=0,ne=A.length,Se=ne-1,te=_e+1;_e<ne;_e++,Se++,te++)Se===ne&&(Se=0),te===ne&&(te=0),ce[_e]=ee(A[_e],A[Se],A[te]);le.push(ce),Ie=Ie.concat(ce)}for(let K=0;K<m;K++){let he=K/m,A=f*Math.cos(he*Math.PI/2),_e=g*Math.sin(he*Math.PI/2)+v;for(let ne=0,Se=B.length;ne<Se;ne++){let te=G(B[ne],j[ne],_e);Ee(te.x,te.y,-A)}for(let ne=0,Se=R.length;ne<Se;ne++){let te=R[ne];ce=le[ne];for(let Ne=0,ve=te.length;Ne<ve;Ne++){let Te=G(te[Ne],ce[Ne],_e);Ee(Te.x,Te.y,-A)}}}let ze=g+v;for(let K=0;K<Y;K++){let he=d?G(S[K],Ie[K],ze):S[K];E?(C.copy(z.normals[0]).multiplyScalar(he.x),P.copy(z.binormals[0]).multiplyScalar(he.y),U.copy(x[0]).add(C).add(P),Ee(U.x,U.y,U.z)):Ee(he.x,he.y,0)}for(let K=1;K<=c;K++)for(let he=0;he<Y;he++){let A=d?G(S[he],Ie[he],ze):S[he];E?(C.copy(z.normals[K]).multiplyScalar(A.x),P.copy(z.binormals[K]).multiplyScalar(A.y),U.copy(x[K]).add(C).add(P),Ee(U.x,U.y,U.z)):Ee(A.x,A.y,u/c*K)}for(let K=m-1;K>=0;K--){let he=K/m,A=f*Math.cos(he*Math.PI/2),_e=g*Math.sin(he*Math.PI/2)+v;for(let ne=0,Se=B.length;ne<Se;ne++){let te=G(B[ne],j[ne],_e);Ee(te.x,te.y,u+A)}for(let ne=0,Se=R.length;ne<Se;ne++){let te=R[ne];ce=le[ne];for(let Ne=0,ve=te.length;Ne<ve;Ne++){let Te=G(te[Ne],ce[Ne],_e);E?Ee(Te.x,Te.y+x[c-1].y,x[c-1].x+A):Ee(Te.x,Te.y,u+A)}}}q(),se();function q(){let K=a.length/3;if(d){let he=0,A=Y*he;for(let _e=0;_e<X;_e++){let ne=F[_e];ue(ne[2]+A,ne[1]+A,ne[0]+A)}he=c+m*2,A=Y*he;for(let _e=0;_e<X;_e++){let ne=F[_e];ue(ne[0]+A,ne[1]+A,ne[2]+A)}}else{for(let he=0;he<X;he++){let A=F[he];ue(A[2],A[1],A[0])}for(let he=0;he<X;he++){let A=F[he];ue(A[0]+Y*c,A[1]+Y*c,A[2]+Y*c)}}i.addGroup(K,a.length/3-K,0)}function se(){let K=a.length/3,he=0;ye(B,he),he+=B.length;for(let A=0,_e=R.length;A<_e;A++){let ne=R[A];ye(ne,he),he+=ne.length}i.addGroup(K,a.length/3-K,1)}function ye(K,he){let A=K.length;for(;--A>=0;){let _e=A,ne=A-1;ne<0&&(ne=K.length-1);for(let Se=0,te=c+m*2;Se<te;Se++){let Ne=Y*Se,ve=Y*(Se+1),Te=he+_e+Ne,b=he+ne+Ne,_=he+ne+ve,N=he+_e+ve;Re(Te,b,_,N)}}}function Ee(K,he,A){l.push(K),l.push(he),l.push(A)}function ue(K,he,A){Be(K),Be(he),Be(A);let _e=a.length/3,ne=T.generateTopUV(i,a,_e-3,_e-2,_e-1);De(ne[0]),De(ne[1]),De(ne[2])}function Re(K,he,A,_e){Be(K),Be(he),Be(_e),Be(he),Be(A),Be(_e);let ne=a.length/3,Se=T.generateSideWallUV(i,a,ne-6,ne-3,ne-2,ne-1);De(Se[0]),De(Se[1]),De(Se[3]),De(Se[1]),De(Se[2]),De(Se[3])}function Be(K){a.push(l[K*3+0]),a.push(l[K*3+1]),a.push(l[K*3+2])}function De(K){n.push(K.x),n.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return lg(r,i,t)}static fromJSON(t,r){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=r[t.shapes[n]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Us[a.type]().fromJSON(a)),new Th(i,t.options)}},og={generateTopUV:function(e,t,r,i,a){let n=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],h=t[a*3],c=t[a*3+1];return[new pe(n,s),new pe(o,l),new pe(h,c)]},generateSideWallUV:function(e,t,r,i,a,n){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],h=t[i*3],c=t[i*3+1],u=t[i*3+2],d=t[a*3],f=t[a*3+1],g=t[a*3+2],v=t[n*3],m=t[n*3+1],p=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new pe(s,1-l),new pe(h,1-u),new pe(d,1-g),new pe(v,1-p)]:[new pe(o,1-l),new pe(c,1-u),new pe(f,1-g),new pe(m,1-p)]}};function lg(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let n=e[i];r.shapes.push(n.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var Ha=class bh extends Xt{constructor(t=new Kt([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let i=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(n,3)),this.setAttribute("uv",new vt(s,2));function h(c){let u=a.length/3,d=c.extractPoints(r),f=d.shape,g=d.holes;Ai.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];Ai.isClockWise(T)===!0&&(g[m]=T.reverse())}let v=Ai.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];a.push(T.x,T.y,0),n.push(0,0,1),s.push(T.x,T.y)}for(let m=0,p=v.length;m<p;m++){let T=v[m],x=T[0]+u,E=T[1]+u,z=T[2]+u;i.push(x,E,z),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return hg(r,t)}static fromJSON(t,r){let i=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=r[t.shapes[a]];i.push(s)}return new bh(i,t.curveSegments)}};function hg(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,i=e.length;r<i;r++){let a=e[r];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Lt=class extends Hi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cg=class extends Lt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ga(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function ug(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Wa=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],a=t[r-1];r:{e:{let n;t:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=i,i=t[++r],e<i)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=t[--r-1],e>=a)break e}n=r,r=0;break t}break r}for(;r<n;){let s=r+n>>>1;e<t[s]?n=s:r=s+1}if(i=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i;for(let n=0;n!==i;++n)t[n]=r[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dg=class extends Wa{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(e,t,r){let i=this.parameterPositions,a=e-2,n=e+1,s=i[a],o=i[n];if(s===void 0)switch(this.getSettings_().endingStart){case vo:a=e,s=2*t-r;break;case _o:a=i.length-2,s=t+i[a]-i[a+1];break;default:a=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case vo:n=e,o=2*r-t;break;case _o:n=1,o=r+i[1]-i[0];break;default:n=e-1,o=t}let l=(r-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(r-t)/(i-t),g=f*f,v=g*f,m=-u*v+2*u*g-u*f,p=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*f+1,T=(-1-d)*v+(1.5+d)*g+.5*f,x=d*v-d*g;for(let E=0;E!==s;++E)a[E]=m*n[h+E]+p*n[l+E]+T*n[o+E]+x*n[c+E];return a}},pg=class extends Wa{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(r-t)/(i-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},fg=class extends Wa{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},dr=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case Wn:t=this.InterpolantFactoryMethodLinear;break;case Xn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return Wn;case this.InterpolantFactoryMethodSmooth:return Xn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,a=0,n=i-1;for(;a!==i&&r[a]<e;)++a;for(;n!==-1&&r[n]>t;)--n;if(++n,a!==0||n!==i){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=r.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(i!==void 0&&ug(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===Xn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,u=c-r,d=c+r;for(let f=0;f!==r;++f){let g=t[c+f];if(g!==t[u+f]||g!==t[d+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*r,u=n*r;for(let d=0;d!==r;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*r,o=n*r,l=0;l!==r;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};dr.prototype.TimeBufferType=Float32Array,dr.prototype.ValueBufferType=Float32Array,dr.prototype.DefaultInterpolation=Wn;var Qi=class extends dr{constructor(e,t,r){super(e,t,r)}};Qi.prototype.ValueTypeName="bool",Qi.prototype.ValueBufferType=Array,Qi.prototype.DefaultInterpolation=da,Qi.prototype.InterpolantFactoryMethodLinear=void 0,Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var mg=class extends dr{};mg.prototype.ValueTypeName="color";var gg=class extends dr{};gg.prototype.ValueTypeName="number";var vg=class extends Wa{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let h=l+s;l!==h;l+=4)ci.slerpFlat(a,0,n,l-s,n,l,o);return a}},Gl=class extends dr{InterpolantFactoryMethodLinear(e){return new vg(this.times,this.values,this.getValueSize(),e)}};Gl.prototype.ValueTypeName="quaternion",Gl.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends dr{constructor(e,t,r){super(e,t,r)}};$i.prototype.ValueTypeName="string",$i.prototype.ValueBufferType=Array,$i.prototype.DefaultInterpolation=da,$i.prototype.InterpolantFactoryMethodLinear=void 0,$i.prototype.InterpolantFactoryMethodSmooth=void 0;var _g=class extends dr{};_g.prototype.ValueTypeName="vector";var xg=class{constructor(e,t,r){let i=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){s++,a===!1&&i.onStart!==void 0&&i.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,i.onProgress!==void 0&&i.onProgress(h,n,s),n===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],f=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null}}},Mg=new xg,yg=class{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yg.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bs=new lt,Wl=new L,Xl=new L,jl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),Bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bs),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ql=new lt,ea=new L,Vs=new L,Sg=class extends jl{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,i=this.matrix,a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),r.position.copy(ea),Vs.copy(r.position),Vs.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Vs),r.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),ql.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql)}},Eg=class extends zs{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new Sg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tg=class extends jl{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yl=class extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Jl=class extends zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ks="\\[\\]\\.:\\/",bg=new RegExp("["+ks+"]","g"),Hs="[^"+ks+"]",wg="[^"+ks.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",Hs),Rg=/(WCOD+)?/.source.replace("WCOD",wg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hs),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hs),Lg=new RegExp("^"+Ag+Rg+Cg+Pg+"$"),Ig=["material","materials","bones","map"],Dg=class{constructor(e,t,r){let i=r||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},ht=class Ci{constructor(t,r,i){this.path=r,this.parsedPath=i||Ci.parseTrackName(r),this.node=Ci.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new Ci.Composite(t,r,i):new Ci(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(t){let r=Lg.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=i.nodeName.substring(a+1);Ig.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)t[r++]=i[a]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,n=r.propertyIndex;if(t||(t=Ci.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Dg,ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zg=new Float32Array(1),Zl=new lt,Ug=class{constructor(e,t,r=0,i=1/0){this.ray=new Uo(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zl),this}intersectObject(e,t=!0,r=[]){return Gs(e,this,r,t),r.sort(Kl),r}intersectObjects(e,t=!0,r=[]){for(let i=0,a=e.length;i<a;i++)Gs(e[i],this,r,t);return r.sort(Kl),r}};function Kl(e,t){return e.distance-t.distance}function Gs(e,t,r,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,r)===!1&&(a=!1),a===!0&&i===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Gs(n[s],t,r,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ta=new L;function Ot(e,t,r,i,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;ta.copy(t),ta[i]=0,ta.normalize();let h=.5*s/(s+o),c=1-ta.angleTo(e)/l;return Math.sign(ta[r])===1?c*h:o/(s+o)+h+h*(1-c)}var Xa=class extends Rr{constructor(e=1,t=1,r=1,i=2,a=.1){if(i=i*2+1,a=Math.min(e/2,t/2,r/2,a),super(1,1,1,i,i,i),i===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let s=new L,o=new L,l=new L(e,t,r).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,f=new L,g=.5/i;for(let v=0,m=0;v<h.length;v+=3,m+=2)switch(s.fromArray(h,v),o.copy(s),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(s.x)+o.x*a,h[v+1]=l.y*Math.sign(s.y)+o.y*a,h[v+2]=l.z*Math.sign(s.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:f.set(1,0,0),u[m+0]=Ot(f,o,"z","y",a,r),u[m+1]=1-Ot(f,o,"y","z",a,t);break;case 1:f.set(-1,0,0),u[m+0]=1-Ot(f,o,"z","y",a,r),u[m+1]=1-Ot(f,o,"y","z",a,t);break;case 2:f.set(0,1,0),u[m+0]=1-Ot(f,o,"x","z",a,e),u[m+1]=Ot(f,o,"z","x",a,r);break;case 3:f.set(0,-1,0),u[m+0]=1-Ot(f,o,"x","z",a,e),u[m+1]=1-Ot(f,o,"z","x",a,r);break;case 4:f.set(0,0,1),u[m+0]=1-Ot(f,o,"x","y",a,e),u[m+1]=1-Ot(f,o,"y","x",a,t);break;case 5:f.set(0,0,-1),u[m+0]=Ot(f,o,"x","y",a,e),u[m+1]=1-Ot(f,o,"y","x",a,t);break}}};function Ng(e,t=!1){let r=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new Xt,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(r!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;n[f]===void 0&&(n[f]=[]),n[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!a.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.morphAttributes[f])}if(t){let f;if(r)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(r){let c=0,u=[];for(let d=0;d<e.length;++d){let f=e[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in n){let u=Ql(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in s){let u=s[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<s[c].length;++v)f.push(s[c][v][d]);let g=Ql(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Ql(e){let t,r,i,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(r===void 0&&(r=c.itemSize),r!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*r}let s=new t(n),o=new Ut(s,r,i),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/r;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<r;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else s.set(c.array,l);l+=c.count*r}return a!==void 0&&(o.gpuType=a),o}var ra=(e,t,r)=>Math.max(t,Math.min(r,e)),St=(e,t,r)=>e+(t-e)*r,$l=e=>e*e*(3-2*e);function eh(e,t=0){let r=new Rs;r.background=new Xe(526346);let i=(s,o,l,h,c,u)=>{let d=new pt(new ur(s,o),new Ar({color:new Xe(u,u,u),side:zt}));d.position.set(l,h,c),d.lookAt(0,0,0),r.add(d)};i(10,2.4,0,7,4,9),i(1.6,8,-8,1,3,6),i(1,7,8,-1,4,3.4),i(8,1,0,-6,5,1.2),t&&i(14,10,0,1,10,t);let a=new Es(e),n=a.fromScene(r,.025).texture;return a.dispose(),n}function th(e=256,t=3){let r=document.createElement("canvas");r.width=r.height=e;let i=r.getContext("2d"),a=i.createImageData(e,e);for(let s=0;s<a.data.length;s+=4){let o=120+Math.random()*90;a.data[s]=a.data[s+1]=a.data[s+2]=o,a.data[s+3]=255}i.putImageData(a,0,0);let n=new Pr(r);return n.wrapS=n.wrapT=Di,n.repeat.set(t,t),n}var pr=(e,t,r,i,a=0,n=0,s=0)=>(a&&e.rotateX(a),n&&e.rotateY(n),s&&e.rotateZ(s),e.translate(t,r,i),e),Og=e=>e.index?e.toNonIndexed():e,ja=e=>{let t=e.map(Og);return t.forEach(r=>{Object.keys(r.attributes).forEach(i=>{i!=="position"&&i!=="normal"&&i!=="uv"&&r.deleteAttribute(i)})}),Ng(t)};function qa(e,t,r,i,a,n,s,o,l){return e.moveTo(t+n,r),e.lineTo(i-s,r),e.quadraticCurveTo(i,r,i,r+s),e.lineTo(i,a-o),e.quadraticCurveTo(i,a,i-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,r+n),e.quadraticCurveTo(t,r,t+n,r),e}function Ir(e,t,r,i=0,a=0){return qa(new Kt,i-e/2,a-t/2,i+e/2,a+t/2,r,r,r,r)}function rh(e,t,r,i=0,a=0){return qa(new Lr,i-e/2,a-t/2,i+e/2,a+t/2,r,r,r,r)}var fr=18.7,mr=10.3,Ya=2.5,Fg={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},jt={w:7.9,h:4.9,y:-.15},Ja={x:5.25,y:-.15},Dr=(e,t,r=0)=>{let{x0:i,x1:a,y0:n,y1:s,outer:o,inner:l}=Fg,h=i-r,c=a+r,u=n-r,d=s+r,f=o+r*.6,g=l+r*.6,v=new e;return t<0?qa(v,-c,u,-h,d,f,g,g,f):qa(v,h,u,c,d,g,f,f,g)};function zg(){let e=2048/fr,t=1128/mr,r=p=>(p+fr/2)*e,i=p=>(mr/2-p)*t,a=()=>{let p=document.createElement("canvas");return p.width=2048,p.height=1128,p},n=a(),s=a(),o=a(),l=n.getContext("2d"),h=s.getContext("2d"),c=o.getContext("2d"),u=p=>{let T=document.createElement("canvas");return T.width=T.height=12,p(T.getContext("2d")),T};l.fillStyle=l.createPattern(u(p=>{p.fillStyle="#050505",p.fillRect(0,0,12,12),p.fillStyle="#121212",p.fillRect(1,1,10,10),p.fillStyle="#1f1f1f",p.fillRect(1,1,10,2),p.fillRect(1,1,2,10)}),"repeat"),l.fillRect(0,0,2048,1128),h.fillStyle=h.createPattern(u(p=>{p.fillStyle="#242424",p.fillRect(0,0,12,12),p.fillStyle="#c8c8c8",p.fillRect(2,2,8,8)}),"repeat"),h.fillRect(0,0,2048,1128),c.fillStyle="#a8a8a8",c.fillRect(0,0,2048,1128);let d=p=>{p.beginPath(),p.roundRect(r(-9.15),i(2.6),18.3*e,5.5*t,2.2*e),p.fill()};l.fillStyle="#0b0b0b",d(l),h.fillStyle="#808080",d(h),c.fillStyle="#5c5c5c",d(c);let f=3.5;l.fillStyle="#0e0e0e",l.fillRect(0,0,2048,i(f)),h.fillStyle="#909090",h.fillRect(0,0,2048,i(f)),c.fillStyle="#707070",c.fillRect(0,0,2048,i(f)),l.fillStyle="#050505",l.fillRect(0,i(f),2048,7),l.fillStyle="#242424",l.fillRect(0,i(f)-3,2048,3),h.fillStyle="#000",h.fillRect(0,i(f),2048,8);let g='"Inter Tight", Arial, sans-serif',v=(p,T)=>{p.fillStyle=T,p.font=`500 37px ${g}`,p.textBaseline="middle","letterSpacing"in p&&(p.letterSpacing="4px"),p.textAlign="right",p.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),i(4.35)),p.textAlign="left",p.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),i(4.35)),p.beginPath(),p.moveTo(r(0),i(4.72)),p.lineTo(r(.34),i(4.05)),p.lineTo(r(-.34),i(4.05)),p.closePath(),p.fill()};v(l,"#3a3a3a"),v(h,"#f0f0f0");for(let p=0;p<420;p++){l.globalAlpha=.02+Math.random()*.05,l.strokeStyle="#fff",l.lineWidth=.6+Math.random()*.9;let T=Math.random()*2048,x=Math.random()*1128,E=Math.random()*6.28,z=10+Math.random()*120;l.beginPath(),l.moveTo(T,x),l.lineTo(T+Math.cos(E)*z,x+Math.sin(E)*z),l.stroke()}for(let p=0;p<900;p++)l.globalAlpha=.05+Math.random()*.12,l.fillStyle="#b8b8b8",l.fillRect(Math.random()*2048,Math.random()*1128,1+Math.random()*2,1+Math.random()*2);l.globalAlpha=1;let m=(p,T)=>{let x=new Pr(p);return T&&(x.colorSpace=gt),x.anisotropy=8,x};return{map:m(n,!0),bump:m(s),rough:m(o)}}function Bg(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let i=4;i<128;i+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,i,0,6.2832),t.stroke();let r=new Pr(e);return r.colorSpace=gt,r}function ih(e){let t=Ya/2,r=zg(),i=new Lt({map:r.map,bumpMap:r.bump,bumpScale:1.2,roughnessMap:r.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new Lt({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:th(256,5)}),n=new Lt({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),s=new Lt({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new Lt({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new Lt({map:Bg(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new cg({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=pr(new Xa(fr,mr,Ya-c,3,.14),0,0,-c/2),d=Ir(fr-.06,mr-.06,.2);d.holes.push(Dr(Lr,-1),Dr(Lr,1));let f=new Ki(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=f.attributes.position,v=f.attributes.uv;for(let R=0;R<g.count;R++)v.setXY(R,(g.getX(R)+fr/2)/fr,(g.getY(R)+mr/2)/mr);f.translate(0,0,t-c);let m=(R,F)=>{let B=R;return B.holes.push(F),new Ki(B,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},p=[pr(m(Dr(Kt,-1,.16),Dr(Lr,-1)),0,0,t),pr(m(Dr(Kt,1,.16),Dr(Lr,1)),0,0,t),pr(m(Ir(jt.w+.36,jt.h+.36,.16,0,jt.y),rh(jt.w+.06,jt.h+.06,.08,0,jt.y)),0,0,t),pr(new Rr(fr-.5,.09,.06),0,3.5,t+.02)],T=new Kt;T.absarc(0,0,.98,0,Math.PI*2,!1);let x=new Lr;x.absarc(0,0,.6,0,Math.PI*2,!0),T.holes.push(x);let E=[new Ki(T,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let R=0;R<6;R++){let F=R/6*Math.PI*2;E.push(pr(new Rr(.2,.44,.1),Math.cos(F)*.46,Math.sin(F)*.46,.05,0,0,F+Math.PI/2))}E.push(pr(new Ns(.06,.06,.08,12),0,0,.04,Math.PI/2));let z=new Ol(1,56),P=ja([new Ha(Dr(Kt,-1),12),new Ha(Dr(Kt,1),12)]);P.translate(0,0,t+.012);let C=Ir(jt.w,jt.h,.06,0,0),U=new Ha(C,6),y=U.attributes.position,S=U.attributes.uv;for(let R=0;R<y.count;R++)S.setXY(R,y.getX(R)/jt.w+.5,y.getY(R)/jt.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:f,front:i,lips:ja(p),gloss:n,floor:pr(new ur(fr-.4,mr-.4),0,0,t-c+.004),cavity:s,hub:ja(E),white:o,pack:z,packMat:l,glassGeo:P,glass:h,labelGeo:U,spineGeo:pr(new ur(16.6,1.72),0,-mr/2-.006,-.08,Math.PI/2),hit:new Rr(fr,mr,Ya)}}function ah(e,t=0){let r=new Xi,i=(l,h)=>{let c=new pt(l,h);return r.add(c),c};i(e.body,e.plastic),i(e.floor,e.cavity),i(e.slab,e.front),i(e.lips,e.gloss);let a=[-Ja.x,Ja.x].map(l=>{let h=i(e.pack,e.packMat);h.position.set(l,Ja.y,e.FRONT-e.WALL+.012);let c=i(e.hub,e.white);return c.position.set(l,Ja.y,e.FRONT-e.WALL+.02),{pack:h,hub:c}});i(e.glassGeo,e.glass);let n=()=>new Lt({color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),s=i(e.labelGeo,n());s.position.set(0,jt.y,e.FRONT+.008),s.rotation.z=t;let o=i(e.spineGeo,n());return{group:r,reels:a,label:s,spine:o}}function Vg(e){let t=document.createElement("canvas");t.width=t.height=12;let r=t.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0,12,12);let i=r.getImageData(0,0,12,12).data,a=0,n=[16,16,16];for(let l=0;l<i.length;l+=4){let h=i[l],c=i[l+1],u=i[l+2],d=Math.max(h,c,u),f=Math.min(h,c,u),g=d-f;g>a&&d>50&&(a=g,n=[h,c,u])}if(a<60)return"#141414";let s=Math.max(...n),o=135/s;return`rgb(${n.map(l=>Math.round(l*o)).join(",")})`}function nh(e,t,r){for(let i=0;i<700;i++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*r,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function sh(e,t,r,i,a){let n=r;for(e.font=`400 ${n}px ${a}`;e.measureText(t).width>i&&n>14;)n-=2,e.font=`400 ${n}px ${a}`;return n}function kg(e,t,r){let i=document.createElement("canvas");i.width=790,i.height=490;let a=i.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let n=getComputedStyle(document.body).fontFamily;if(e){let h=e.naturalWidth/e.naturalHeight,c=746/268,u=h>c?e.naturalHeight*c:e.naturalWidth,d=h>c?e.naturalHeight:e.naturalWidth/c;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-u)/2,(e.naturalHeight-d)/2,u,d,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(h=>{a.beginPath(),a.moveTo(24,h),a.lineTo(766,h),a.stroke()});let s='"DT Punk", cursive';a.fillStyle=r;let o=sh(a,t.name.toUpperCase(),66,640,s);a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${s}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${s}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${n}`,a.textBaseline="middle",["SP","LP","EP"].forEach((h,c)=>{let u=30+c*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(u,440,22,22),a.fillText(h,u+32,452)}),a.strokeStyle=r,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",nh(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over";let l=new Pr(i);return l.colorSpace=gt,l.anisotropy=8,l}function Hg(e,t){let r=document.createElement("canvas");r.width=1660,r.height=172;let i=r.getContext("2d");i.fillStyle="#e8e6df",i.fillRect(0,0,1660,172),i.fillStyle="#121212",i.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,n='"DT Punk", cursive';i.fillStyle="#efefe9",i.textBaseline="middle",i.font='400 92px "DT Punk", cursive',i.textAlign="center",i.fillText(e.code,75,172/2+6),i.textAlign="left",i.strokeStyle="#b6b3aa",i.lineWidth=2,i.beginPath(),i.moveTo(176,138),i.lineTo(1420,138),i.stroke(),i.fillStyle=t;let s=sh(i,e.name.toUpperCase(),112,1210,n);i.font=`400 ${s}px ${n}`,i.fillText(e.name.toUpperCase(),186,172/2+2),i.fillStyle="#3c3a35",i.font=`500 30px ${a}`,i.textAlign="right",i.fillText(e.kind,1630,172/2-22),i.font=`500 24px ${a}`,i.fillText("TRBN \xB7 SP 120",1630,172/2+24),nh(i,1660,172);let o=new Pr(r);return o.colorSpace=gt,o.anisotropy=8,o}function Gg(e,t=112){let r=e.length,i=e.map(([o])=>o.getSpacedPoints(t)),a=new Float32Array((t+1)*r*3),n=[];for(let o=0;o<=t;o++)if(e.forEach(([,l],h)=>a.set([i[h][o].x,i[h][o].y,l],(o*r+h)*3)),o<t)for(let l=0;l<r-1;l++){let h=o*r+l,c=h+1,u=h+r,d=u+1;n.push(h,c,u,c,d,u)}let s=new Xt;return s.setAttribute("position",new Ut(a,3)),s.setIndex(n),s.computeVertexNormals(),s}function oh(e=1,t=6){let r=document.createElement("canvas");r.width=512,r.height=256;let i=r.getContext("2d");i.fillStyle="#7c7c7c",i.fillRect(0,0,512,256);for(let n=0;n<2600;n++){let s=90+Math.random()*90|0;i.fillStyle=`rgba(${s},${s},${s},${.1+Math.random()*.25})`,i.fillRect(Math.random()*512-80,Math.random()*256,40+Math.random()*260,1)}let a=new Pr(r);return a.wrapS=a.wrapT=Di,a.repeat.set(e,t),a}function Wg(e){let t=new Ns(e,e*1.04,.13,96,1,!0),r=t.attributes.position;for(let n=0;n<r.count;n++){let s=Math.atan2(r.getZ(n),r.getX(n)),o=1+Math.sign(Math.sin(s*44))*.014;r.setX(n,r.getX(n)*o),r.setZ(n,r.getZ(n)*o)}t.computeVertexNormals(),t.rotateX(Math.PI/2);let i=new Kt;i.absarc(0,0,e*.9,0,Math.PI*2,!1);let a=new Ki(i,{depth:.02,bevelEnabled:!0,bevelSize:e*.08,bevelThickness:.02,bevelSegments:4,curveSegments:48});return a.translate(0,0,.055),ja([t,a])}var lh={side:.34,top:.88,bottom:.98,tube:.62,open:.74};function hh(e){return{rim:new Lt({color:15000804,roughness:.13,metalness:1,envMap:e,envMapIntensity:1.8}),hood:new Lt({color:657930,roughness:.3,metalness:.62,envMap:e,envMapIntensity:1,side:zt}),chrome:new Lt({color:13816530,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6}),dialFace:new Lt({color:10263708,roughness:.34,metalness:1,roughnessMap:oh(2,2),envMap:e,envMapIntensity:1.5}),slot:new Lt({color:131586,roughness:.6,envMap:e,envMapIntensity:.3})}}function ch(e,t,r,i,a=0,n=0){let s=Ir(e+i*2,t+i*2,r+i,a,n);return s.holes.push(rh(e,t,r,a,n)),new Ki(s,{depth:.012,bevelEnabled:!0,bevelSize:.022,bevelOffset:-.011,bevelThickness:.026,bevelSegments:7,curveSegments:28})}function uh(e,t,r,i,{frame:a=!0,details:n=!0}={}){let{rim:s,hood:o,chrome:l,dialFace:h,slot:c}=t,u=[],d=[],f=(U,y,S=0,R=0,F=0)=>{let B=new pt(U,y);return B.position.set(R,F,S),e.add(B),u.push(B),B},g=r/100,v=i/100,{side:m,top:p,bottom:T,tube:x,open:E}=lh,z=g-m*2,P=v-p-T,C=(T-p)/2;if(a){let U=z+.4,y=P+.36;f(ch(U,y,E,.06,0,C),s,0);let S=Ir(z+.12,P+.11,x+.05,0,C);f(Gg([[Ir(U,y,E,0,C),.01],[Ir(z+.26,P+.24,x+.08,0,C),-.13],[S,-.26],[Ir(z,P,x,0,C),-.34]]),o,0)}if(n){let U=-v/2+.375,y=g/2,S=(R,F)=>{let B=new Kt;B.absarc(0,0,R+.035,0,Math.PI*2,!1),f(new Ha(B,40),c,.001,F,U);let G=f(Wg(R),l,.005,F,U),Y=new pt(new Ol(R*.62,48),h);Y.position.z=.1,G.add(Y);let X=new pt(new Rr(R*.08,R*.36,.012),new Ar({color:16777215}));X.position.set(0,R*.66,.102),G.add(X),d.push(G)};if(S(.27,y-.55),S(.17,y-1.08),g>8){let R=y-2.14;f(new Xa(1.5,.14,.016,2,.007),c,.001,R,U+.19),f(new Xa(1.44,.018,.012,1,.005),l,.01,R,U+.145),[-.03,-.11,-.19].forEach(B=>f(new Xa(1.5,.026,.01,1,.004),c,.001,R,U+B));let F=f(new Ns(.022,.022,.012,16),new Ar({color:16777215}),.008,R-.86,U+.19);F.rotation.x=Math.PI/2}}return{meshes:u,dials:d,w:g,h:v,sw:z,sh:P,sy:C,side:m,top:p,bottom:T}}var Xg="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",jg=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform sampler2D osd;uniform float time;uniform float glitch;uniform vec2 size;uniform float power;
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
 // Tape display, with the doubled ghost of a worn VHS head.
 vec2 ou=uv;ou.x+=(h(floor(uv.y*90.)+floor(time*7.))-.5)*.0016+glitch*(h(floor(uv.y*50.)+time)-.5)*.02;
 float o=texture2D(osd,ou).r;float ghost=texture2D(osd,ou+vec2(-.003,-.018)).r;
 c=mix(c,vec3(.97),max(o,ghost*.3));
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
}`;function Jg({host:e,stage:t,items:r,onHover:i,onOpen:a,dots:n}){let s=document.createElement("canvas");s.className="tv-canvas",s.setAttribute("aria-hidden","true"),e.append(s);let o;try{o=new Cm({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return s.remove(),null}let l=Math.min(devicePixelRatio||1,1.6);o.setPixelRatio(l),o.outputColorSpace=gt,o.setClearColor(0,0);let h=eh(o),c=ih(h),u=new Rs;u.background=new Xe(131587),u.fog=new Pm(131587,40,96);let d=new Yl(16777215,1.5);d.position.set(-8,18,22),u.add(d);let f=new At(30,1,1,200);f.position.set(0,0,40);let g=new Yt({vertexShader:qg,fragmentShader:Yg,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:null},b:{value:null},fade:{value:1},time:{value:0},focus:{value:new pe(.47,.55)}}}),v=new pt(new ur(2,2),g);v.frustumCulled=!1,v.renderOrder=-10,u.add(v);let m=new Jl(16777215,.32);u.add(m);let p=new Xe(16777215),T=new Xe(16777215),x=new Xe(16777215),E=new pt(new ur(1,1),new Ar({color:16777215,transparent:!0,opacity:0,fog:!1}));E.renderOrder=1,u.add(E);let z=new pt(new ur(1,1),new Ar({color:328965,fog:!1}));z.position.z=-.04,u.add(z);let P=r.map((re,w)=>{let V=O=>{let W=Math.sin((w+1)*12.9898*O)*43758.5453;return W-Math.floor(W)};return{rx:V(1)-.5,ry:V(2)-.5,rz:V(3)-.5,wob:V(4)*6.28,tilt:(V(5)-.5)*.022,pile:V(6)-.5}}),C=r.map((re,w)=>{let V=ah(c,P[w].tilt),O=new pt(c.hit,new Ar({visible:!1}));return O.userData.index=w,V.group.add(O),V.hit=O,u.add(V.group),V}),U=new Map,y=new Map,S=(re,w)=>{if(U.has(re)){let O=U.get(re);O.complete&&O.naturalWidth?w(O):O.addEventListener("load",()=>w(O),{once:!0});return}let V=new Image;V.decoding="async",V.src=r[re].src,U.set(re,V),V.addEventListener("load",()=>w(V),{once:!0})},R=document.fonts?.load?document.fonts.load('40px "DT Punk"').catch(()=>{}):Promise.resolve(),F=re=>{C[re].wanted||(C[re].wanted=!0,S(re,w=>R.then(()=>{let V=Vg(w),O=(W,$)=>{W.material.map=$,W.material.emissiveMap=$,W.material.emissiveIntensity=.55,W.material.color.set(16777215),W.material.needsUpdate=!0};O(C[re].label,kg(w,r[re],V)),O(C[re].spine,Hg(r[re],V))})))},B=re=>{y.has(re)||(y.set(re,null),S(re,w=>{let V=new Pr(w);V.colorSpace=gt,V.anisotropy=8,V.generateMipmaps=!0,V.minFilter=tr;let O=document.createElement("canvas");O.width=O.height=6;let W=O.getContext("2d",{willReadFrequently:!0});W.drawImage(w,0,0,6,6);let $=W.getImageData(0,0,6,6).data,ie=0,we=0,qe=0;for(let be=0;be<$.length;be+=4)ie+=$[be],we+=$[be+1],qe+=$[be+2];let Ke=new Xe(ie/9180,we/9180,qe/9180).convertSRGBToLinear();y.set(re,{texture:V,ratio:w.naturalWidth/w.naturalHeight,avg:Ke}),re===Se&&te(re)}))},G=document.createElement("canvas");G.width=1024,G.height=768;let Y=G.getContext("2d"),X=new Pr(G);X.minFilter=It;let ee="",j=(re,w,V,O,W)=>{let $=n.width(re)*O,ie=W?w-$:w;for(let we of re){let qe=n.glyph(we);for(let Ke=0;Ke<5;Ke++)for(let be=0;be<7;be++)qe[Ke]>>be&1&&Y.fillRect(ie+Ke*O,V+be*O,O+.5,O+.5);ie+=6*O}},le=(re,w,V)=>{let O=Math.floor(V),W=`${Math.floor(O/3600)}:${String(Math.floor(O/60)%60).padStart(2,"0")}:${String(O%60).padStart(2,"0")}`,$=`${re}|${w}|${W}`;$!==ee&&(ee=$,Y.fillStyle="#000",Y.fillRect(0,0,1024,768),Y.fillStyle="#fff",j(re,78,64,4),j(w,946,64,4,!0),j(`SP ${W}`,78,106,2.5),X.needsUpdate=!0)},ce=new Rs,Ie=new At(16,1,1,400),ze=new Yl(16777215,1.6);ze.position.set(-3,9,10),ce.add(ze),ce.add(new Jl(16777215,.35));let q=new Eg(16777215,0,8,1.2);ce.add(q);let se=hh(h),ye=new Yt({vertexShader:Xg,fragmentShader:jg,toneMapped:!1,uniforms:{map:{value:null},osd:{value:X},time:{value:0},glitch:{value:1},size:{value:new pe(1,1)},power:{value:0}}}),Ee=[],ue=[],Re=null,Be=0,De=0,K={x:0,y:0,w:1,h:1};function he(){Ee.forEach(tt=>{ce.remove(tt),tt.geometry.dispose()});let re=uh(ce,se,Be,De);Ee=re.meshes,ue=re.dials;let{h:w,sw:V,sh:O,sy:W,side:$,top:ie}=re;K={x:$*100,y:ie*100,w:V*100,h:O*100};let we=new ur(V+.06,O+.06,48,34),qe=we.attributes.position;for(let tt=0;tt<qe.count;tt++){let ct=qe.getX(tt)/(V/2),Qt=qe.getY(tt)/(O/2);qe.setZ(tt,(1-(ct*ct+Qt*Qt)/2)*.16)}we.computeVertexNormals();let Ke=new pt(we,ye);Ke.position.set(0,W,-.36),ce.add(Ke),Ee.push(Ke),q.position.set(0,W,.1),q.distance=Math.max(V,O)*1.3,Ie.aspect=Be/De;let be=w/2/Math.tan(Ie.fov*Math.PI/360);Ie.position.set(0,0,be),Ie.updateProjectionMatrix();let Ge=Math.round(V*100*l),et=Math.round(O*100*l);(!Re||Re.width!==Ge||Re.height!==et)&&(Re?.dispose(),Re=new Mr(Ge,et,{samples:4,type:ei,colorSpace:"",generateMipmaps:!0,minFilter:tr,magFilter:It})),ye.uniforms.map.value=Re.texture,ye.uniforms.size.value.set(Ge,et),f.aspect=V/O,f.updateProjectionMatrix(),ne()}let A=()=>{let re=80*Math.tan(f.fov*Math.PI/360);return{vh:re,vw:re*f.aspect}},_e=4/3;function ne(){let{vh:re,vw:w}=A(),V=w*.62,O=re*.64,W=V,$=W/_e;$>O&&($=O,W=$*_e),E.scale.set(W,$,1),E.position.set(0,re*.1,0),z.scale.set(W+.16,$+.16,1),z.position.set(E.position.x,E.position.y,-.04),g.uniforms.focus.value.set(.5+E.position.x/w,.5+E.position.y/re)}let Se=-1;function te(re){let w=y.get(re);w&&(g.uniforms.a.value!==w.texture&&(g.uniforms.b.value=g.uniforms.a.value||w.texture,g.uniforms.a.value=w.texture,g.uniforms.fade.value=0),T.copy(w.avg).lerp(x,.3),E.material.map=w.texture,E.material.opacity=1,E.material.needsUpdate=!0,_e=w.ratio,ne())}function Ne(){let re=s.clientWidth,w=s.clientHeight;!re||!w||(Be=re,De=w,o.setSize(Be,De,!1),he())}new ResizeObserver(Ne).observe(s),Ne();let ve=(re,w,V)=>$l(ra((V-re)/(w-re),0,1));function Te(re,w,V,O,W){let{vh:$,vw:ie}=A(),we=$l(ra(1-Math.abs(O)*1.15,0,1)),qe=re.group,Ke=Math.sin(W*5e-4+w.wob),be={x:ie*.275,y:-$*.265,z:8,s:.52,rx:-.16+Ke*.012,ry:-.3+Math.cos(W*4e-4)*.018,rz:.05},Ge;if(O>=0){let et=V%2?1:-1,tt=1-O*4.2;Ge={x:et*ie*.49,y:$*.1+w.pile*1.2-O*.12,z:tt,s:.46,rx:w.rx*.1,ry:-et*.92+w.ry*.08,rz:et*.03+w.rz*.04},Ge={x:St(Ge.x,be.x,we),y:St(Ge.y,be.y,we),z:St(Ge.z,be.z,we),s:St(Ge.s,be.s,we),rx:St(Ge.rx,be.rx,we),ry:St(Ge.ry,be.ry,we),rz:St(Ge.rz,be.rz,we)}}else{let et=Ya*.5,tt=ve(0,.9,-O),ct={x:-ie*.265+w.pile*.45,y:-$*.19+(O+1)*et,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+w.ry*.05,rz:w.rz*.022};Ge={x:St(be.x,ct.x,tt),y:St(be.y,ct.y,tt)+Math.sin(tt*Math.PI)*3,z:St(be.z,ct.z,tt),s:St(be.s,ct.s,tt),rx:St(be.rx,ct.rx,tt),ry:St(be.ry,ct.ry,tt),rz:St(be.rz,ct.rz,tt)}}qe.position.set(Ge.x,Ge.y,Ge.z),qe.scale.setScalar(Ge.s),qe.rotation.set(Ge.rx,Ge.ry,Ge.rz),qe.visible=O>-8&&O<12&&Ge.y>-$*.85}let b=new Ug,_=new pe,N=null,Z=-2,Q=!1,J=()=>{Z!==-2&&(Z=-2,i(-1),t.style.cursor="")},Le=()=>{if(Q=!1,!N){J();return}let re=(N.x-K.x)/K.w,w=(N.y-K.y)/K.h;if(re<0||re>1||w<0||w>1){J();return}_.set(re*2-1,-(w*2-1)),b.setFromCamera(_,f);let V=b.intersectObjects([...C.filter(W=>W.group.visible).map(W=>W.hit),E],!1)[0],O=V?V.object===E?-1:V.object.userData.index:-2;O!==Z&&(Z=O,i(O>=0?O:-1),t.style.cursor=O===-2?"":"pointer")};t.addEventListener("pointermove",re=>{let w=s.getBoundingClientRect();N={x:re.clientX-w.left,y:re.clientY-w.top},Q=!0}),t.addEventListener("pointerleave",()=>{N=null,Q=!0}),t.addEventListener("click",re=>{re.target.closest("a, button")||(Le(),Z!==-2&&a(Z===-1?Se:Z))});let de=1,me=0,Oe=0,oe=0,ge=0,je=0,Fe=!1,xe=0,Ve=!0,ke=0;return{frame:(re,w,V,O=1)=>{if(!Ve)return;let W=re-oe,$=Math.abs(W);oe=re,Oe+=W*11+V*9e-4;let ie=ra(re/Math.max(1,r.length-1),0,1);C.forEach((Ge,et)=>{let tt=et-re;if(tt>-7&&tt<7&&F(et),Te(Ge,P[et],et,tt,w),Math.abs(tt)<3){Ge.reels[0].hub.rotation.z=-Oe,Ge.reels[1].hub.rotation.z=-Oe*.82;let ct=St(3.15,1.75,ie),Qt=St(1.75,3.15,ie);Ge.reels[0].pack.scale.set(ct,ct,1),Ge.reels[1].pack.scale.set(Qt,Qt,1)}}),ue.forEach((Ge,et)=>{Ge.rotation.z=-re*(et?1.1:.55)});let we=ra(Math.round(re),0,r.length-1);if(B(we),B(Math.min(r.length-1,we+1)),B(Math.max(0,we-1)),we!==Se){let Ge=Se<0;Se=we,Ge||(de=1),te(we)}de=Math.max(de*Math.exp(-V/170),ra($*26,0,.7)),me||(me=w);let qe=Math.min(1,(w-me)/700);p.lerp(T,1-Math.exp(-V/500)),m.color.copy(p),q.color.copy(p),q.intensity=16*qe,g.uniforms.time.value=w/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+V/900),ye.uniforms.time.value=w/1e3,ye.uniforms.glitch.value=de,ye.uniforms.power.value=1-(1-qe)**3,ke=$>.0012?Math.sign(W):0,ke||(xe+=V/1e3),le(ke>0?"FF \u25B6\u25B6":ke<0?"REW \u25C0\u25C0":"PLAY \u25B6",r[we].code,re*340+xe);let Ke=N?N.x/Be-.5:0,be=N?N.y/De-.5:0;ge+=(Ke-ge)*(1-Math.exp(-V/260)),je+=(be-je)*(1-Math.exp(-V/260)),f.position.x=ge*1.6,f.position.y=-je*1,f.lookAt(0,0,0),Q&&Le(),o.toneMapping=er,o.setRenderTarget(Re),o.clear(),o.render(u,f),o.setRenderTarget(null),o.toneMapping=io,o.clear(),o.render(ce,Ie),s.style.opacity=String(Math.min(qe*3,1)*O),Fe||(Fe=!0,t.classList.add("tv-on"))},show(re){Ve=re,s.style.display=re?"":"none",re&&Ne()}}}export{lh as SET,uh as addSet,oh as brushedTexture,Jg as default,th as grainTexture,ah as makeTape,ch as ringGeometry,hh as setMaterials,eh as studioEnv,ih as tapeParts};
