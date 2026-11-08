var Rh=0,ro=1,Ch=2,ao=1,Ph=2,ei=3,_i=0,bt=1,Yt=2,xi=0,$i=1,no=2,so=3,oo=4,Lh=5,Fi=100,Ih=101,Nh=102,Uh=103,Dh=104,Oh=200,Fh=201,Bh=202,zh=203,en=204,tn=205,Hh=206,Vh=207,Gh=208,kh=209,Wh=210,Xh=211,jh=212,Yh=213,qh=214,rn=0,an=1,nn=2,Qi=3,sn=4,on=5,ln=6,hn=7,lo=0,Jh=1,Kh=2,ti=0,Zh=1,$h=2,Qh=3,ec=4,tc=5,ic=6,rc=7,ho=300,er=301,tr=302,cn=303,un=304,oa=306,la=1e3,Bi=1001,dn=1002,Ot=1003,ac=1004,ha=1005,Ft=1006,pn=1007,ii=1008,ri=1009,co=1010,uo=1011,Br=1012,fn=1013,zi=1014,ai=1015,ir=1016,mn=1017,gn=1018,rr=1020,po=35902,fo=1021,mo=1022,Bt=1023,go=1024,vo=1025,ar=1026,nr=1027,_o=1028,vn=1029,xo=1030,_n=1031,xn=1033,ca=33776,ua=33777,da=33778,pa=33779,yn=35840,Sn=35841,Mn=35842,En=35843,Tn=36196,bn=37492,An=37496,wn=37808,Rn=37809,Cn=37810,Pn=37811,Ln=37812,In=37813,Nn=37814,Un=37815,Dn=37816,On=37817,Fn=37818,Bn=37819,zn=37820,Hn=37821,fa=36492,Vn=36494,Gn=36495,yo=36283,kn=36284,Wn=36285,Xn=36286,ma=2300,jn=2301,Yn=2302,So=2400,Mo=2401,Eo=2402,nc=3200,sc=3201,To=0,oc=1,yi="",lt="srgb",sr="srgb-linear",ga="linear",$e="srgb",or=7680,bo=519,lc=512,hc=513,cc=514,Ao=515,uc=516,dc=517,pc=518,fc=519,wo=35044,Ro="300 es",ni=2e3,va=2001,lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qn=Math.PI/180,Jn=180/Math.PI;function hr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[e&255]+xt[e>>8&255]+xt[e>>16&255]+xt[e>>24&255]+"-"+xt[t&255]+xt[t>>8&255]+"-"+xt[t>>16&15|64]+xt[t>>24&255]+"-"+xt[i&63|128]+xt[i>>8&255]+"-"+xt[i>>16&255]+xt[i>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toLowerCase()}function vt(e,t,i){return Math.max(t,Math.min(i,e))}function mc(e,t){return(e%t+t)%t}function Kn(e,t,i){return(1-i)*e+i*t}function zr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var pe=class uh{constructor(t=0,i=0){uh.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(vt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class dh{constructor(t,i,r,a,n,s,o,l,h){dh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],v=a[0],m=a[3],f=a[6],E=a[1],x=a[4],T=a[7],z=a[2],C=a[5],R=a[8];return n[0]=s*v+o*E+l*z,n[3]=s*m+o*x+l*C,n[6]=s*f+o*T+l*R,n[1]=h*v+c*E+u*z,n[4]=h*m+c*x+u*C,n[7]=h*f+c*T+u*R,n[2]=d*v+p*E+g*z,n[5]=d*m+p*x+g*C,n[8]=d*f+p*T+g*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,p=h*n-s*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*r)*v,t[2]=(o*r-a*s)*v,t[3]=d*v,t[4]=(c*i-a*l)*v,t[5]=(a*n-o*i)*v,t[6]=p*v,t[7]=(r*l-h*i)*v,t[8]=(s*i-r*n)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Zn.makeScale(t,i)),this}rotate(t){return this.premultiply(Zn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zn=new je;function Co(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _a(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function gc(){let e=_a("canvas");return e.style.display="block",e}var Po={};function Hr(e){e in Po||(Po[e]=!0,console.warn(e))}function vc(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function _c(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xc(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Je={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(e,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===$e&&(e.r=si(e.r),e.g=si(e.g),e.b=si(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===$e&&(e.r=cr(e.r),e.g=cr(e.g),e.b=cr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===yi?ga:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function si(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function cr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Lo=[.64,.33,.3,.6,.15,.06],Io=[.2126,.7152,.0722],No=[.3127,.329],Uo=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Do=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[sr]:{primaries:Lo,whitePoint:No,transfer:ga,toXYZ:Uo,fromXYZ:Do,luminanceCoefficients:Io,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:Lo,whitePoint:No,transfer:$e,toXYZ:Uo,fromXYZ:Do,luminanceCoefficients:Io,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}});var ur,yc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=_a("canvas")),ur.width=e.width,ur.height=e.height;let i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=si(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sc=0,Oo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push($n(r[n].image)):a.push($n(r[n]))}else a=$n(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function $n(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?yc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mc=0,zt=class Za extends lr{constructor(t=Za.DEFAULT_IMAGE,i=Za.DEFAULT_MAPPING,r=Bi,a=Bi,n=Ft,s=ii,o=Bt,l=ri,h=Za.DEFAULT_ANISOTROPY,c=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=hr(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case dn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case dn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=ho,zt.DEFAULT_ANISOTROPY=1;var ht=class ph{constructor(t=0,i=0,r=0,a=1){ph.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],p=s[2],g=s[6],v=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,E=(u+1)/2,x=(v+1)/2,T=(l+c)/4,z=(h+p)/4,C=(d+g)/4;return f>E&&f>x?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=T/r,n=z/r):E>x?E<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(E),r=T/a,n=C/a):x<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),r=z/n,a=C/n),this.set(r,a,n,i),this}let m=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fo=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Tc=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[n+0],d=a[n+1],p=a[n+2],g=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let v=1-s,m=o*u+l*d+h*p+c*g,f=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let T=Math.sqrt(E),z=Math.atan2(T,m*f);v=Math.sin(v*z)/T,s=Math.sin(s*z)/T}let x=s*f;if(o=o*v+u*x,l=l*v+d*x,h=h*v+p*x,c=c*v+g*x,v===1-s){let T=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=T,l*=T,h*=T,c*=T}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-s*d,e[t+2]=l*p+h*d+s*u-o*c,e[t+3]=h*p-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-r)*d}else if(i>s&&i>c){let d=2*Math.sqrt(1+i-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-i-c);this._w=(a-l)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-s);this._w=(n-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,s=n*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class fh{constructor(t=0,i=0,r=0){fh.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Bo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),u=2*(n*r-s*i);return this.x=i+l*h+s*u-o*c,this.y=r+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Qn.copy(this).projectOnVector(t),this.sub(Qn)}reflect(t){return this.sub(Qn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(vt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qn=new U,Bo=new dr,Vr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Ht):Ht.fromBufferAttribute(a,n),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),ya.subVectors(this.max,Gr),pr.subVectors(e.a,Gr),fr.subVectors(e.b,Gr),mr.subVectors(e.c,Gr),Mi.subVectors(fr,pr),Ei.subVectors(mr,fr),Hi.subVectors(pr,mr);let t=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Hi.z,Hi.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Hi.z,0,-Hi.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Hi.y,Hi.x,0];return!es(t,pr,fr,mr,ya)||(t=[1,0,0,0,1,0,0,0,1],!es(t,pr,fr,mr,ya))?!1:(Sa.crossVectors(Mi,Ei),t=[Sa.x,Sa.y,Sa.z],es(t,pr,fr,mr,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new U,new U,new U,new U,new U,new U,new U,new U],Ht=new U,xa=new Vr,pr=new U,fr=new U,mr=new U,Mi=new U,Ei=new U,Hi=new U,Gr=new U,ya=new U,Sa=new U,Vi=new U;function es(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Vi.fromArray(e,n);let o=a.x*Math.abs(Vi.x)+a.y*Math.abs(Vi.y)+a.z*Math.abs(Vi.z),l=t.dot(Vi),h=i.dot(Vi),c=r.dot(Vi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var bc=new Vr,kr=new U,ts=new U,is=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(ts)),this.expandByPoint(kr.copy(e.center).sub(ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new U,rs=new U,Ma=new U,Ti=new U,as=new U,Ea=new U,ns=new U,zo=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rs.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(rs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Ma),s=Ti.dot(this.direction),o=-Ti.dot(Ma),l=Ti.lengthSq(),h=Math.abs(1-n*n),c,u,d,p;if(h>0)if(c=n*o-s,u=n*s-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(rs).addScaledVector(Ma,u),d}intersectSphere(e,t){li.subVectors(e.center,this.origin);let i=li.dot(this.direction),r=li.dot(li)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,r,a){as.subVectors(t,e),Ea.subVectors(i,e),ns.crossVectors(as,Ea);let n=this.direction.dot(ns),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Ti.subVectors(this.origin,e);let o=s*this.direction.dot(Ea.crossVectors(Ti,Ea));if(o<0)return null;let l=s*this.direction.dot(as.cross(Ti));if(l<0||o+l>n)return null;let h=-s*Ti.dot(ns);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class Js{constructor(t,i,r,a,n,s,o,l,h,c,u,d,p,g,v,m){Js.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,u,d,p,g,v,m)}set(t,i,r,a,n,s,o,l,h,c,u,d,p,g,v,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Js().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/gr.setFromMatrixColumn(t,0).length(),n=1/gr.setFromMatrixColumn(t,1).length(),s=1/gr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,p=s*u,g=o*c,v=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-v*h,i[9]=-o*l,i[2]=v-d*h,i[6]=g+p*h,i[10]=s*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d+v*o,i[4]=g*o-p,i[8]=s*h,i[1]=s*u,i[5]=s*c,i[9]=-o,i[2]=p*o-g,i[6]=v+d*o,i[10]=s*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d-v*o,i[4]=-s*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*c,i[9]=v-d*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let d=s*c,p=s*u,g=o*c,v=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+v,i[1]=l*u,i[5]=v*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let d=s*l,p=s*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-d*u,i[8]=g*u+p,i[1]=u,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-v*u}else if(t.order==="XZY"){let d=s*l,p=s*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+v,i[5]=s*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=v*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ac,t,wc)}lookAt(t,i,r){let a=this.elements;return Rt.subVectors(t,i),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),bi.crossVectors(r,Rt),bi.lengthSq()===0&&(Math.abs(r.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),bi.crossVectors(r,Rt)),bi.normalize(),Ta.crossVectors(Rt,bi),a[0]=bi.x,a[4]=Ta.x,a[8]=Rt.x,a[1]=bi.y,a[5]=Ta.y,a[9]=Rt.y,a[2]=bi.z,a[6]=Ta.z,a[10]=Rt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],v=r[6],m=r[10],f=r[14],E=r[3],x=r[7],T=r[11],z=r[15],C=a[0],R=a[4],O=a[8],S=a[12],M=a[1],w=a[5],B=a[9],H=a[13],k=a[2],j=a[6],X=a[10],ee=a[14],W=a[3],ae=a[7],me=a[11],Oe=a[15];return n[0]=s*C+o*M+l*k+h*W,n[4]=s*R+o*w+l*j+h*ae,n[8]=s*O+o*B+l*X+h*me,n[12]=s*S+o*H+l*ee+h*Oe,n[1]=c*C+u*M+d*k+p*W,n[5]=c*R+u*w+d*j+p*ae,n[9]=c*O+u*B+d*X+p*me,n[13]=c*S+u*H+d*ee+p*Oe,n[2]=g*C+v*M+m*k+f*W,n[6]=g*R+v*w+m*j+f*ae,n[10]=g*O+v*B+m*X+f*me,n[14]=g*S+v*H+m*ee+f*Oe,n[3]=E*C+x*M+T*k+z*W,n[7]=E*R+x*w+T*j+z*ae,n[11]=E*O+x*B+T*X+z*me,n[15]=E*S+x*H+T*ee+z*Oe,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+n*l*u-a*h*u-n*o*d+r*h*d+a*o*p-r*l*p)+v*(+i*l*p-i*h*d+n*s*d-a*s*p+a*h*c-n*l*c)+m*(+i*h*u-i*o*p-n*s*u+r*s*p+n*o*c-r*h*c)+f*(-a*o*c-i*l*u+i*o*d+a*s*u-r*s*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],E=u*m*h-v*d*h+v*l*p-o*m*p-u*l*f+o*d*f,x=g*d*h-c*m*h-g*l*p+s*m*p+c*l*f-s*d*f,T=c*v*h-g*u*h+g*o*p-s*v*p-c*o*f+s*u*f,z=g*u*l-c*v*l-g*o*d+s*v*d+c*o*m-s*u*m,C=i*E+r*x+a*T+n*z;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=E*R,t[1]=(v*d*n-u*m*n-v*a*p+r*m*p+u*a*f-r*d*f)*R,t[2]=(o*m*n-v*l*n+v*a*h-r*m*h-o*a*f+r*l*f)*R,t[3]=(u*l*n-o*d*n-u*a*h+r*d*h+o*a*p-r*l*p)*R,t[4]=x*R,t[5]=(c*m*n-g*d*n+g*a*p-i*m*p-c*a*f+i*d*f)*R,t[6]=(g*l*n-s*m*n-g*a*h+i*m*h+s*a*f-i*l*f)*R,t[7]=(s*d*n-c*l*n+c*a*h-i*d*h-s*a*p+i*l*p)*R,t[8]=T*R,t[9]=(g*u*n-c*v*n-g*r*p+i*v*p+c*r*f-i*u*f)*R,t[10]=(s*v*n-g*o*n+g*r*h-i*v*h-s*r*f+i*o*f)*R,t[11]=(c*o*n-s*u*n-c*r*h+i*u*h+s*r*p-i*o*p)*R,t[12]=z*R,t[13]=(c*v*a-g*u*a+g*r*d-i*v*d-c*r*m+i*u*m)*R,t[14]=(g*o*a-s*v*a-g*r*l+i*v*l+s*r*m-i*o*m)*R,t[15]=(s*u*a-c*o*a+c*r*l-i*u*l-s*r*d+i*o*d)*R,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,u=o+o,d=n*h,p=n*c,g=n*u,v=s*c,m=s*u,f=o*u,E=l*h,x=l*c,T=l*u,z=r.x,C=r.y,R=r.z;return a[0]=(1-(v+f))*z,a[1]=(p+T)*z,a[2]=(g-x)*z,a[3]=0,a[4]=(p-T)*C,a[5]=(1-(d+f))*C,a[6]=(m+E)*C,a[7]=0,a[8]=(g+x)*R,a[9]=(m-E)*R,a[10]=(1-(d+v))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,n=gr.set(a[0],a[1],a[2]).length(),s=gr.set(a[4],a[5],a[6]).length(),o=gr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Vt.copy(this);let l=1/n,h=1/s,c=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=c,Vt.elements[9]*=c,Vt.elements[10]*=c,i.setFromRotationMatrix(Vt),r.x=n,r.y=s,r.z=o,this}makePerspective(t,i,r,a,n,s,o=ni){let l=this.elements,h=2*n/(i-t),c=2*n/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===ni)p=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===va)p=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=ni){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(s-n),d=(i+t)*h,p=(r+a)*c,g,v;if(o===ni)g=(s+n)*u,v=-2*u;else if(o===va)g=n*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},gr=new U,Vt=new st,Ac=new U(0,0,0),wc=new U(1,1,1),bi=new U,Ta=new U,Rt=new U,Ho=new st,Vo=new dr,Ai=class mh{constructor(t=0,i=0,r=0,a=mh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rc=0,Go=new U,vr=new dr,hi=new st,ba=new U,Wr=new U,Cc=new U,Pc=new dr,ko=new U(1,0,0),Wo=new U(0,1,0),Xo=new U(0,0,1),jo={type:"added"},Lc={type:"removed"},_r={type:"childadded",child:null},os={type:"childremoved",child:null},Lt=class $a extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$a.DEFAULT_UP.clone();let t=new U,i=new Ai,r=new dr,a=new U(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new st},normalMatrix:{value:new je}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=$a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(Wo,t)}rotateZ(t){return this.rotateOnAxis(Xo,t)}translateOnAxis(t,i){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(Wo,t)}translateZ(t){return this.translateOnAxis(Xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ba.copy(t):ba.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Wr,ba,this.up):hi.lookAt(ba,Wr,this.up),this.quaternion.setFromRotationMatrix(hi),a&&(hi.extractRotation(a.matrixWorld),vr.setFromRotationMatrix(hi),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jo),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Lc),os.child=t,this.dispatchEvent(os),os.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jo),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,Cc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Pc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};Lt.DEFAULT_UP=new U(0,1,0),Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=new U,ci=new U,ls=new U,ui=new U,xr=new U,yr=new U,Yo=new U,hs=new U,cs=new U,us=new U,ds=new ht,ps=new ht,fs=new ht,Xr=class Nr{constructor(t=new U,i=new U,r=new U){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Gt.subVectors(t,i),a.cross(Gt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Gt.subVectors(a,i),ci.subVectors(r,i),ls.subVectors(t,i);let s=Gt.dot(Gt),o=Gt.dot(ci),l=Gt.dot(ls),h=ci.dot(ci),c=ci.dot(ls),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(s*c-o*l)*d;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,ui.x),l.addScaledVector(s,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return ds.setScalar(0),ps.setScalar(0),fs.setScalar(0),ds.fromBufferAttribute(t,i),ps.fromBufferAttribute(t,r),fs.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(ds,n.x),s.addScaledVector(ps,n.y),s.addScaledVector(fs,n.z),s}static isFrontFacing(t,i,r,a){return Gt.subVectors(r,i),ci.subVectors(t,i),Gt.cross(ci).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gt.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Gt.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Nr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Nr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Nr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;xr.subVectors(a,r),yr.subVectors(n,r),hs.subVectors(t,r);let l=xr.dot(hs),h=yr.dot(hs);if(l<=0&&h<=0)return i.copy(r);cs.subVectors(t,a);let c=xr.dot(cs),u=yr.dot(cs);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(xr,s);us.subVectors(t,n);let p=xr.dot(us),g=yr.dot(us);if(g>=0&&p<=g)return i.copy(n);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(yr,o);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return Yo.subVectors(n,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(Yo,o);let f=1/(m+v+d);return s=v*f,o=d*f,i.copy(r).addScaledVector(xr,s).addScaledVector(yr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function ms(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=mc(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=ms(n,a,e+1/3),this.g=ms(n,a,e),this.b=ms(n,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=lt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let i=qo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Je.fromWorkingColorSpace(yt.copy(this),e),Math.round(vt(yt.r*255,0,255))*65536+Math.round(vt(yt.g*255,0,255))*256+Math.round(vt(yt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(yt.copy(this),t);let i=yt.r,r=yt.g,a=yt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=lt){Je.fromWorkingColorSpace(yt.copy(this),e);let t=yt.r,i=yt.g,r=yt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Aa);let i=Kn(wi.h,Aa.h,t),r=Kn(wi.s,Aa.s,t),a=Kn(wi.l,Aa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yt=new Ge;Ge.NAMES=qo;var Ic=0,jr=class extends lr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=hr(),this.name="",this.blending=$i,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=en,this.blendDst=tn,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==en&&(i.blendSrc=this.blendSrc),this.blendDst!==tn&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sr=class extends jr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ct=new U,wa=new pe,kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wo,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),a=At(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}},Jo=class extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Ko=class extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ft=class extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Nc=0,It=new st,gs=new Lt,Mr=new U,Ct=new Vr,Yr=new Vr,mt=new U,qt=class gh extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Co(t)?Ko:Jo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new je().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return It.makeRotationFromQuaternion(t),this.applyMatrix4(It),this}rotateX(t){return It.makeRotationX(t),this.applyMatrix4(It),this}rotateY(t){return It.makeRotationY(t),this.applyMatrix4(It),this}rotateZ(t){return It.makeRotationZ(t),this.applyMatrix4(It),this}translate(t,i,r){return It.makeTranslation(t,i,r),this.applyMatrix4(It),this}scale(t,i,r){return It.makeScale(t,i,r),this.applyMatrix4(It),this}lookAt(t){return gs.lookAt(t),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ft(r,3))}else{for(let r=0,a=i.count;r<a;r++){let n=t[r];i.setXYZ(r,n.x,n.y,n.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Ct.setFromBufferAttribute(n),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let r=this.boundingSphere.center;if(Ct.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ct.min,Yr.min),Ct.expandByPoint(mt),mt.addVectors(Ct.max,Yr.max),Ct.expandByPoint(mt)):(Ct.expandByPoint(Yr.min),Ct.expandByPoint(Yr.max))}Ct.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)mt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(mt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)mt.fromBufferAttribute(o,h),l&&(Mr.fromBufferAttribute(t,h),mt.add(Mr)),a=Math.max(a,r.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<r.count;O++)o[O]=new U,l[O]=new U;let h=new U,c=new U,u=new U,d=new pe,p=new pe,g=new pe,v=new U,m=new U;function f(O,S,M){h.fromBufferAttribute(r,O),c.fromBufferAttribute(r,S),u.fromBufferAttribute(r,M),d.fromBufferAttribute(n,O),p.fromBufferAttribute(n,S),g.fromBufferAttribute(n,M),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(w),o[O].add(v),o[S].add(v),o[M].add(v),l[O].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let O=0,S=E.length;O<S;++O){let M=E[O],w=M.start,B=M.count;for(let H=w,k=w+B;H<k;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let x=new U,T=new U,z=new U,C=new U;function R(O){z.fromBufferAttribute(a,O),C.copy(z);let S=o[O];x.copy(S),x.sub(z.multiplyScalar(z.dot(S))).normalize(),T.crossVectors(C,S);let M=T.dot(l[O])<0?-1:1;s.setXYZW(O,x.x,x.y,x.z,M)}for(let O=0,S=E.length;O<S;++O){let M=E[O],w=M.start,B=M.count;for(let H=w,k=w+B;H<k;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new kt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new U,n=new U,s=new U,o=new U,l=new U,h=new U,c=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,v),s.fromBufferAttribute(i,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)mt.fromBufferAttribute(t,i),mt.normalize(),t.setXYZ(i,mt.x,mt.y,mt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let f=0;f<c;f++)d[g++]=h[p++]}return new kt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new gh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zo=new st,Gi=new zo,Ra=new is,$o=new U,Ca=new U,Pa=new U,La=new U,vs=new U,Ia=new U,Qo=new U,Na=new U,St=class extends Lt{constructor(e=new qt,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Ia.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(vs.fromBufferAttribute(c,e),n?Ia.addScaledVector(vs,h):Ia.addScaledVector(vs.sub(t),h))}t.add(Ia)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(a),Gi.copy(e.ray).recast(e.near),!(Ra.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ra,$o)===null||Gi.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Zo.copy(a).invert(),Gi.copy(e.ray).applyMatrix4(Zo),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let v=u[p],m=n[v.materialIndex],f=Math.max(v.start,d.start),E=Math.min(s.count,Math.min(v.start+v.count,d.start+d.count));for(let x=f,T=E;x<T;x+=3){let z=s.getX(x),C=s.getX(x+1),R=s.getX(x+2);r=Ua(this,m,e,i,l,h,c,z,C,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){let f=s.getX(v),E=s.getX(v+1),x=s.getX(v+2);r=Ua(this,n,e,i,l,h,c,f,E,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=u.length;p<g;p++){let v=u[p],m=n[v.materialIndex],f=Math.max(v.start,d.start),E=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let x=f,T=E;x<T;x+=3){let z=x,C=x+1,R=x+2;r=Ua(this,m,e,i,l,h,c,z,C,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){let f=v,E=v+1,x=v+2;r=Ua(this,n,e,i,l,h,c,f,E,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function Uc(e,t,i,r,a,n,s,o){let l;if(t.side===bt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===_i,o),l===null)return null;Na.copy(o),Na.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Na);return h<i.near||h>i.far?null:{distance:h,point:Na.clone(),object:e}}function Ua(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,Ca),e.getVertexPosition(l,Pa),e.getVertexPosition(h,La);let c=Uc(e,t,i,r,Ca,Pa,La,Qo);if(c){let u=new U;Xr.getBarycoord(Qo,Ca,Pa,La,u),a&&(c.uv=Xr.getInterpolatedAttribute(a,o,l,h,u,new pe)),n&&(c.uv1=Xr.getInterpolatedAttribute(n,o,l,h,u,new pe)),s&&(c.normal=Xr.getInterpolatedAttribute(s,o,l,h,u,new U),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new U,materialIndex:0};Xr.getNormal(Ca,Pa,La,d.normal),c.face=d,c.barycoord=u}return c}var ki=class vh extends qt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2));function g(v,m,f,E,x,T,z,C,R,O,S){let M=T/R,w=z/O,B=T/2,H=z/2,k=C/2,j=R+1,X=O+1,ee=0,W=0,ae=new U;for(let me=0;me<X;me++){let Oe=me*w-H;for(let ze=0;ze<j;ze++){let Y=ze*M-B;ae[v]=Y*E,ae[m]=Oe*x,ae[f]=k,h.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[f]=C>0?1:-1,c.push(ae.x,ae.y,ae.z),u.push(ze/R),u.push(1-me/O),ee+=1}}for(let me=0;me<O;me++)for(let Oe=0;Oe<R;Oe++){let ze=d+Oe+j*me,Y=d+Oe+j*(me+1),ne=d+(Oe+1)+j*(me+1),Ae=d+(Oe+1)+j*me;l.push(ze,Y,Ae),l.push(Y,ne,Ae),W+=6}o.addGroup(p,W,S),p+=W,d+=ee}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Er(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function Et(e){let t={};for(let i=0;i<e.length;i++){let r=Er(e[i]);for(let a in r)t[a]=r[a]}return t}function Dc(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function el(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}var Oc={clone:Er,merge:Et},Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends jr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Dc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},tl=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ri=new U,il=new pe,rl=new pe,Nt=class extends tl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan(qn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,il,rl),t.subVectors(rl,il)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tr=-90,br=1,zc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nt(Tr,br,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Tr,br,e,t);a.layers=this.layers,this.add(a);let n=new Nt(Tr,br,e,t);n.layers=this.layers,this.add(n);let s=new Nt(Tr,br,e,t);s.layers=this.layers,this.add(s);let o=new Nt(Tr,br,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Tr,br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},al=class extends zt{constructor(e,t,i,r,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new al(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ki(5,5,5),a=new Jt({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:xi});a.uniforms.tEquirect.value=t;let n=new St(r,a),s=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ft),new zc(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},_s=new U,Vc=new U,Gc=new je,Wi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=_s.subVectors(i,t).cross(Vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(_s),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gc.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new is,Da=new U,xs=class{constructor(e=new Wi,t=new Wi,i=new Wi,r=new Wi,a=new Wi,n=new Wi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){let i=this.planes,r=e.elements,a=r[0],n=r[1],s=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],v=r[11],m=r[12],f=r[13],E=r[14],x=r[15];if(i[0].setComponents(o-a,u-l,v-d,x-m).normalize(),i[1].setComponents(o+a,u+l,v+d,x+m).normalize(),i[2].setComponents(o+n,u+h,v+p,x+f).normalize(),i[3].setComponents(o-n,u-h,v-p,x-f).normalize(),i[4].setComponents(o-s,u-c,v-g,x-E).normalize(),t===ni)i[5].setComponents(o+s,u+c,v+g,x+E).normalize();else if(t===va)i[5].setComponents(s,c,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nl(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function kc(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Kt=class _h extends qt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){let E=f*d-s;for(let x=0;x<h;x++){let T=x*u-n;g.push(T,-E,0),v.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let x=E+h*f,T=E+h*(f+1),z=E+1+h*(f+1),C=E+1+h*f;p.push(x,T,C),p.push(T,z,C)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _h(t.width,t.height,t.widthSegments,t.heightSegments)}},Wc=`#ifdef USE_ALPHAHASH
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
#endif`,Yc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kc=`#ifdef USE_AOMAP
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
#endif`,Zc=`#ifdef USE_AOMAP
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
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ru=`#ifdef USE_IRIDESCENCE
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
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_FOG
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
#endif`,Nu=`LambertMaterial material;
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
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
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
#endif`,Gu=`struct PhysicalMaterial {
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
}`,ku=`
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
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zu=`#ifdef USE_MAP
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
#endif`,id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
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
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
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
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nd=`float specularStrength;
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
#endif`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kd=`varying vec2 vUv;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
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
}`,Kd=`#if DEPTH_PACKING == 3200
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
}`,Zd=`#define DISTANCE
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
}`,ip=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,Sp=`uniform float rotation;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Wc,alphahash_pars_fragment:Xc,alphamap_fragment:jc,alphamap_pars_fragment:Yc,alphatest_fragment:qc,alphatest_pars_fragment:Jc,aomap_fragment:Kc,aomap_pars_fragment:Zc,batching_pars_vertex:$c,batching_vertex:Qc,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:iu,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:nu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:hu,color_pars_fragment:cu,color_pars_vertex:uu,color_vertex:du,common:pu,cube_uv_reflection_fragment:fu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:vu,emissivemap_fragment:_u,emissivemap_pars_fragment:xu,colorspace_fragment:yu,colorspace_pars_fragment:Su,envmap_fragment:Mu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Ou,envmap_vertex:Au,fog_vertex:wu,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Uu,lights_pars_begin:Du,lights_toon_fragment:Fu,lights_toon_pars_fragment:Bu,lights_phong_fragment:zu,lights_phong_pars_fragment:Hu,lights_physical_fragment:Vu,lights_physical_pars_fragment:Gu,lights_fragment_begin:ku,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Ju,map_fragment:Ku,map_pars_fragment:Zu,map_particle_fragment:$u,map_particle_pars_fragment:Qu,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphinstance_vertex:id,morphcolor_vertex:rd,morphnormal_vertex:ad,morphtarget_pars_vertex:nd,morphtarget_vertex:sd,normal_fragment_begin:od,normal_fragment_maps:ld,normal_pars_fragment:hd,normal_pars_vertex:cd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:vd,packing:_d,premultiplied_alpha_fragment:xd,project_vertex:yd,dithering_fragment:Sd,dithering_pars_fragment:Md,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Ad,shadowmap_vertex:wd,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Id,specularmap_fragment:Nd,specularmap_pars_fragment:Ud,tonemapping_fragment:Dd,tonemapping_pars_fragment:Od,transmission_fragment:Fd,transmission_pars_fragment:Bd,uv_pars_fragment:zd,uv_pars_vertex:Hd,uv_vertex:Vd,worldpos_vertex:Gd,background_vert:kd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:jd,cube_vert:Yd,cube_frag:qd,depth_vert:Jd,depth_frag:Kd,distanceRGBA_vert:Zd,distanceRGBA_frag:$d,equirect_vert:Qd,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:ip,meshbasic_vert:rp,meshbasic_frag:ap,meshlambert_vert:np,meshlambert_frag:sp,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:hp,meshnormal_frag:cp,meshphong_vert:up,meshphong_frag:dp,meshphysical_vert:pp,meshphysical_frag:fp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:vp,points_frag:_p,shadow_vert:xp,shadow_frag:yp,sprite_vert:Sp,sprite_frag:Mp},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Zt={basic:{uniforms:Et([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Et([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Et([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Et([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Et([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Et([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Et([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Et([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Et([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Et([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Et([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Et([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Et([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Zt.physical={uniforms:Et([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Oa={r:0,b:0,g:0},ji=new Ai,Ep=new st;function Tp(e,t,i,r,a,n,s){let o=new Ge(0),l=n===!0?0:1,h,c,u=null,d=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?i:t).get(x)),x}function v(E){let x=!1,T=g(E);T===null?f(o,l):T&&T.isColor&&(f(T,1),x=!0);let z=e.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,s):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(E,x){let T=g(x);T&&(T.isCubeTexture||T.mapping===oa)?(c===void 0&&(c=new St(new ki(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Er(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(z,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),ji.copy(x.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(ji)),c.material.toneMapped=Je.getTransfer(T.colorSpace)!==$e,(u!==T||d!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new St(new Kt(2,2),new Jt({name:"BackgroundMaterial",uniforms:Er(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Je.getTransfer(T.colorSpace)!==$e,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function f(E,x){E.getRGB(Oa,el(e)),r.buffers.color.setClear(Oa.r,Oa.g,Oa.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m}}function bp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function o(M,w,B,H,k){let j=!1,X=u(H,B,w);n!==X&&(n=X,h(n.object)),j=p(M,H,B,k),j&&g(M,H,B,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,T(M,w,B,H),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function h(M){return e.bindVertexArray(M)}function c(M){return e.deleteVertexArray(M)}function u(M,w,B){let H=B.wireframe===!0,k=r[M.id];k===void 0&&(k={},r[M.id]=k);let j=k[w.id];j===void 0&&(j={},k[w.id]=j);let X=j[H];return X===void 0&&(X=d(l()),j[H]=X),X}function d(M){let w=[],B=[],H=[];for(let k=0;k<i;k++)w[k]=0,B[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,w,B,H){let k=n.attributes,j=w.attributes,X=0,ee=B.getAttributes();for(let W in ee)if(ee[W].location>=0){let ae=k[W],me=j[W];if(me===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;X++}return n.attributesNum!==X||n.index!==H}function g(M,w,B,H){let k={},j=w.attributes,X=0,ee=B.getAttributes();for(let W in ee)if(ee[W].location>=0){let ae=j[W];ae===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));let me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),k[W]=me,X++}n.attributes=k,n.attributesNum=X,n.index=H}function v(){let M=n.newAttributes;for(let w=0,B=M.length;w<B;w++)M[w]=0}function m(M){f(M,0)}function f(M,w){let B=n.newAttributes,H=n.enabledAttributes,k=n.attributeDivisors;B[M]=1,H[M]===0&&(e.enableVertexAttribArray(M),H[M]=1),k[M]!==w&&(e.vertexAttribDivisor(M,w),k[M]=w)}function E(){let M=n.newAttributes,w=n.enabledAttributes;for(let B=0,H=w.length;B<H;B++)w[B]!==M[B]&&(e.disableVertexAttribArray(B),w[B]=0)}function x(M,w,B,H,k,j,X){X===!0?e.vertexAttribIPointer(M,w,B,k,j):e.vertexAttribPointer(M,w,B,H,k,j)}function T(M,w,B,H){v();let k=H.attributes,j=B.getAttributes(),X=w.defaultAttributeValues;for(let ee in j){let W=j[ee];if(W.location>=0){let ae=k[ee];if(ae===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){let me=ae.normalized,Oe=ae.itemSize,ze=t.get(ae);if(ze===void 0)continue;let Y=ze.buffer,ne=ze.type,Ae=ze.bytesPerElement,Me=ne===e.INT||ne===e.UNSIGNED_INT||ae.gpuType===fn;if(ae.isInterleavedBufferAttribute){let de=ae.data,Ie=de.stride,We=ae.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)f(W.location+Fe,de.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let Fe=0;Fe<W.locationSize;Fe++)x(W.location+Fe,Oe/W.locationSize,ne,me,Ie*Ae,(We+Oe/W.locationSize*Fe)*Ae,Me)}else{if(ae.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)f(W.location+de,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let de=0;de<W.locationSize;de++)x(W.location+de,Oe/W.locationSize,ne,me,Oe*Ae,Oe/W.locationSize*de*Ae,Me)}}else if(X!==void 0){let me=X[ee];if(me!==void 0)switch(me.length){case 2:e.vertexAttrib2fv(W.location,me);break;case 3:e.vertexAttrib3fv(W.location,me);break;case 4:e.vertexAttrib4fv(W.location,me);break;default:e.vertexAttrib1fv(W.location,me)}}}}E()}function z(){O();for(let M in r){let w=r[M];for(let B in w){let H=w[B];for(let k in H)c(H[k].object),delete H[k];delete w[B]}delete r[M]}}function C(M){if(r[M.id]===void 0)return;let w=r[M.id];for(let B in w){let H=w[B];for(let k in H)c(H[k].object),delete H[k];delete w[B]}delete r[M.id]}function R(M){for(let w in r){let B=r[w];if(B[M.id]===void 0)continue;let H=B[M.id];for(let k in H)c(H[k].object),delete H[k];delete B[M.id]}}function O(){S(),s=!0,n!==a&&(n=a,h(n.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:O,resetDefaultState:S,dispose:z,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Ap(e,t,i){let r;function a(h){r=h}function n(h,c){e.drawArrays(r,h,c),i.update(c,r,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)s(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];i.update(g,r,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wp(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==Bt&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let O=R===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ri&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!O)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:z,maxSamples:C}}function Rp(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Wi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!a||g===null||g.length===0||n&&!m)n?c(null):h();else{let E=n?0:r,x=E*4,T=f.clippingState||null;l.value=T,T=c(g,d,x,p);for(let z=0;z!==x;++z)T[z]=i[z];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,T=p;x!==v;++x,T+=4)s.copy(u[x]).applyMatrix4(E,o),s.normal.toArray(m,T),m[T+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Cp(e){let t=new WeakMap;function i(s,o){return o===cn?s.mapping=er:o===un&&(s.mapping=tr),s}function r(s){if(s&&s.isTexture){let o=s.mapping;if(o===cn||o===un)if(t.has(s)){let l=t.get(s).texture;return i(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Hc(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),i(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:r,dispose:n}}var ys=class extends tl{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ar=4,sl=[.125,.215,.35,.446,.526,.582],Yi=20,Ss=new ys,ol=new Ge,Ms=null,Es=0,Ts=0,bs=!1,qi=(1+Math.sqrt(5))/2,wr=1/qi,ll=[new U(-qi,wr,0),new U(qi,wr,0),new U(-wr,0,qi),new U(wr,0,qi),new U(0,qi,-wr),new U(0,qi,wr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ms=this._renderer.getRenderTarget(),Es=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ms,Es,Ts),this._renderer.xr.enabled=bs,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ms=this._renderer.getRenderTarget(),Es=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ir,format:Bt,colorSpace:sr,depthBuffer:!1},r=hl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(a)),this._blurMaterial=Lp(a,e,t)}return r}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Ss)}_sceneToCubeUV(e,t,i,r){let a=new Nt(90,1,t,i),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(ol),o.toneMapping=ti,o.autoClear=!1;let c=new Sr({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),u=new St(new ki,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(ol),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,n[g],0),a.lookAt(s[g],0,0)):v===1?(a.up.set(0,0,n[g]),a.lookAt(0,s[g],0)):(a.up.set(0,n[g],0),a.lookAt(0,0,s[g]));let m=this._cubeSize;Fa(r,v*m,g>2?m:0,m,m),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===er||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new St(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Fa(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Ss)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=ll[(r-a-1)%ll.length];this._blur(e,a-1,a,n,s)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new St(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),g=a/p,v=isFinite(a)?1+Math.floor(h*g):Yi;v>Yi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Yi}`);let m=[],f=0;for(let C=0;C<Yi;++C){let R=C/g,O=Math.exp(-R*R/2);m.push(O),C===0?f+=O:C<v&&(f+=2*O)}for(let C=0;C<m.length;C++)m[C]=m[C]/f;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:E}=this;u.dTheta.value=p,u.mipInt.value=E-i;let x=this._sizeLods[r],T=3*x*(r>E-Ar?r-E+Ar:0),z=4*(this._cubeSize-x);Fa(t,T,z,3*x,2*x),o.setRenderTarget(t),o.render(c,Ss)}};function Pp(e){let t=[],i=[],r=[],a=e,n=e-Ar+1+sl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);i.push(o);let l=1/o;s>e-Ar?l=sl[s-e+Ar-1]:s===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,v=3,m=2,f=1,E=new Float32Array(v*g*p),x=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let C=0;C<p;C++){let R=C%3*2/3-1,O=C>2?0:-1,S=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];E.set(S,v*g*C),x.set(d,m*g*C);let M=[C,C,C,C,C,C];T.set(M,f*g*C)}let z=new qt;z.setAttribute("position",new kt(E,v)),z.setAttribute("uv",new kt(x,m)),z.setAttribute("faceIndex",new kt(T,f)),t.push(z),a>Ar&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function hl(e,t,i){let r=new Si(e,t,i);return r.texture.mapping=oa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fa(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Lp(e,t,i){let r=new Float32Array(Yi),a=new U(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ws(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function cl(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ws(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ul(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ws(){return`

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
	`}function Ip(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===cn||l===un,c=l===er||l===tr;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new As(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new As(e)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:s}}function Np(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Hr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Up(e,t,i,r){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",s),delete a[d.id];let p=n.get(d);p&&(t.remove(p),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let x=0,T=E.length;x<T;x+=3){let z=E[x+0],C=E[x+1],R=E[x+2];d.push(z,C,C,R,R,z)}}else if(g!==void 0){let E=g.array;v=g.version;for(let x=0,T=E.length/3-1;x<T;x+=3){let z=x+0,C=x+1,R=x+2;d.push(z,C,C,R,R,z)}}else return;let m=new(Co(d)?Ko:Jo)(d,1);m.version=v;let f=n.get(u);f&&t.remove(f),n.set(u,m)}function c(u){let d=n.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Dp(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,p){e.drawElements(r,p,n,d*s),i.update(p,r,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(r,p,n,d*s,g),i.update(p,r,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,n,d,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];i.update(v,r,1)}function u(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/s,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,n,d,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*v[E];i.update(f,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Op(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Fp(e,t,i){let r=new WeakMap,a=new ht;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){O.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],T=0;g===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let z=o.attributes.position.count*T,C=1;z>t.maxTextureSize&&(C=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);let R=new Float32Array(z*C*4*u),O=new Fo(R,z,C,u);O.type=ai,O.needsUpdate=!0;let S=T*4;for(let M=0;M<u;M++){let w=f[M],B=E[M],H=x[M],k=z*C*4*M;for(let j=0;j<w.count;j++){let X=j*S;g===!0&&(a.fromBufferAttribute(w,j),R[k+X+0]=a.x,R[k+X+1]=a.y,R[k+X+2]=a.z,R[k+X+3]=0),v===!0&&(a.fromBufferAttribute(B,j),R[k+X+4]=a.x,R[k+X+5]=a.y,R[k+X+6]=a.z,R[k+X+7]=0),m===!0&&(a.fromBufferAttribute(H,j),R[k+X+8]=a.x,R[k+X+9]=a.y,R[k+X+10]=a.z,R[k+X+11]=H.itemSize===4?a.w:1)}}d={count:u,texture:O,size:new pe(z,C)},r.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function Bp(e,t,i,r){let a=new WeakMap;function n(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:n,dispose:s}}var dl=class extends zt{constructor(e,t,i,r,a,n,s,o,l,h=ar){if(h!==ar&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=zi),i===void 0&&h===nr&&(i=rr),super(null,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ot,this.minFilter=o!==void 0?o:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pl=new zt,fl=new dl(1,1),ml=new Fo,gl=new Tc,vl=new al,_l=[],xl=[],yl=new Float32Array(16),Sl=new Float32Array(9),Ml=new Float32Array(4);function Rr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=_l[a];if(n===void 0&&(n=new Float32Array(a),_l[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function ut(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function dt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Ba(e,t){let i=xl[t];i===void 0&&(i=new Int32Array(t),xl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function zp(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Hp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ut(i,t))return;e.uniform2fv(this.addr,t),dt(i,t)}}function Vp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ut(i,t))return;e.uniform3fv(this.addr,t),dt(i,t)}}function Gp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ut(i,t))return;e.uniform4fv(this.addr,t),dt(i,t)}}function kp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ut(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),dt(i,t)}else{if(ut(i,r))return;Ml.set(r),e.uniformMatrix2fv(this.addr,!1,Ml),dt(i,r)}}function Wp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ut(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),dt(i,t)}else{if(ut(i,r))return;Sl.set(r),e.uniformMatrix3fv(this.addr,!1,Sl),dt(i,r)}}function Xp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ut(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),dt(i,t)}else{if(ut(i,r))return;yl.set(r),e.uniformMatrix4fv(this.addr,!1,yl),dt(i,r)}}function jp(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Yp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ut(i,t))return;e.uniform2iv(this.addr,t),dt(i,t)}}function qp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ut(i,t))return;e.uniform3iv(this.addr,t),dt(i,t)}}function Jp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ut(i,t))return;e.uniform4iv(this.addr,t),dt(i,t)}}function Kp(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Zp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ut(i,t))return;e.uniform2uiv(this.addr,t),dt(i,t)}}function $p(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ut(i,t))return;e.uniform3uiv(this.addr,t),dt(i,t)}}function Qp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ut(i,t))return;e.uniform4uiv(this.addr,t),dt(i,t)}}function ef(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(fl.compareFunction=Ao,n=fl):n=pl,i.setTexture2D(t||n,a)}function tf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||gl,a)}function rf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||vl,a)}function af(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||ml,a)}function nf(e){switch(e){case 5126:return zp;case 35664:return Hp;case 35665:return Vp;case 35666:return Gp;case 35674:return kp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return Yp;case 35668:case 35672:return qp;case 35669:case 35673:return Jp;case 5125:return Kp;case 36294:return Zp;case 36295:return $p;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return af}}function sf(e,t){e.uniform1fv(this.addr,t)}function of(e,t){let i=Rr(t,this.size,2);e.uniform2fv(this.addr,i)}function lf(e,t){let i=Rr(t,this.size,3);e.uniform3fv(this.addr,i)}function hf(e,t){let i=Rr(t,this.size,4);e.uniform4fv(this.addr,i)}function cf(e,t){let i=Rr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function uf(e,t){let i=Rr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function df(e,t){let i=Rr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function pf(e,t){e.uniform1iv(this.addr,t)}function ff(e,t){e.uniform2iv(this.addr,t)}function mf(e,t){e.uniform3iv(this.addr,t)}function gf(e,t){e.uniform4iv(this.addr,t)}function vf(e,t){e.uniform1uiv(this.addr,t)}function _f(e,t){e.uniform2uiv(this.addr,t)}function xf(e,t){e.uniform3uiv(this.addr,t)}function yf(e,t){e.uniform4uiv(this.addr,t)}function Sf(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ut(r,n)||(e.uniform1iv(this.addr,n),dt(r,n));for(let s=0;s!==a;++s)i.setTexture2D(t[s]||pl,n[s])}function Mf(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ut(r,n)||(e.uniform1iv(this.addr,n),dt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||gl,n[s])}function Ef(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ut(r,n)||(e.uniform1iv(this.addr,n),dt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||vl,n[s])}function Tf(e,t,i){let r=this.cache,a=t.length,n=Ba(i,a);ut(r,n)||(e.uniform1iv(this.addr,n),dt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||ml,n[s])}function bf(e){switch(e){case 5126:return sf;case 35664:return of;case 35665:return lf;case 35666:return hf;case 35674:return cf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return pf;case 35667:case 35671:return ff;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return vf;case 36294:return _f;case 36295:return xf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return Tf}}var Af=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nf(t.type)}},wf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bf(t.type)}},Rf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Rs=/(\w+)(\])?(\[|\.)?/g;function El(e,t){e.seq.push(t),e.map[t.id]=t}function Cf(e,t,i){let r=e.name,a=r.length;for(Rs.lastIndex=0;;){let n=Rs.exec(r),s=Rs.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){El(i,h===void 0?new Af(o,e,t):new wf(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Rf(o),El(i,c)),i=c}}}var za=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),n=e.getUniformLocation(t,a.name);Cf(a,n,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Tl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Pf=37297,Lf=0;function If(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var bl=new je;function Nf(e){Je._getMatrix(bl,Je.workingColorSpace,e);let t=`mat3( ${bl.elements.map(i=>i.toFixed(4))} )`;switch(Je.getTransfer(e)){case ga:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Al(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+If(e.getShaderSource(t),s)}else return a}function Uf(e,t){let i=Nf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Df(e,t){let i;switch(t){case Zh:i="Linear";break;case $h:i="Reinhard";break;case Qh:i="Cineon";break;case ec:i="ACESFilmic";break;case ic:i="AgX";break;case rc:i="Neutral";break;case tc:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ha=new U;function Of(){Je.getLuminanceCoefficients(Ha);let e=Ha.x.toFixed(4),t=Ha.y.toFixed(4),i=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ff(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function Bf(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function zf(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function qr(e){return e!==""}function wl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cs(e){return e.replace(Hf,Gf)}var Vf=new Map;function Gf(e,t){let i=Xe[t];if(i===void 0){let r=Vf.get(t);if(r!==void 0)i=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cs(i)}var kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(e){return e.replace(kf,Wf)}function Wf(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Pl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Xf(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ao?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Ph?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case er:case tr:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yf(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===tr&&(t="ENVMAP_MODE_REFRACTION"),t}function qf(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function Jf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Kf(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=Xf(i),h=jf(i),c=Yf(i),u=qf(i),d=Jf(i),p=Ff(i),g=Bf(n),v=a.createProgram(),m,f,E=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(qr).join(`
`),f.length>0&&(f+=`
`)):(m=[Pl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),f=[Pl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ti?"#define TONE_MAPPING":"",i.toneMapping!==ti?Xe.tonemapping_pars_fragment:"",i.toneMapping!==ti?Df("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Uf("linearToOutputTexel",i.outputColorSpace),Of(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qr).join(`
`)),s=Cs(s),s=wl(s,i),s=Rl(s,i),o=Cs(o),o=wl(o,i),o=Rl(o,i),s=Cl(s),o=Cl(o),i.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=E+m+s,T=E+f+o,z=Tl(a,a.VERTEX_SHADER,x),C=Tl(a,a.FRAGMENT_SHADER,T);a.attachShader(v,z),a.attachShader(v,C),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function R(w){if(e.debug.checkShaderErrors){let B=a.getProgramInfoLog(v).trim(),H=a.getShaderInfoLog(z).trim(),k=a.getShaderInfoLog(C).trim(),j=!0,X=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,z,C);else{let ee=Al(a,z,"vertex"),W=Al(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+ee+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||k==="")&&(X=!1);X&&(w.diagnostics={runnable:j,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:f}})}a.deleteShader(z),a.deleteShader(C),O=new za(a,v),S=zf(a,v)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(v,Pf)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Lf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=C,this}var Zf=0,$f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qf(e),t.set(e,i)),i}},Qf=class{constructor(e){this.id=Zf++,this.code=e,this.usedTimes=0}};function em(e,t,i,r,a,n,s){let o=new ss,l=new $f,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,M,w,B,H){let k=B.fog,j=H.geometry,X=S.isMeshStandardMaterial?B.environment:null,ee=(S.isMeshStandardMaterial?i:t).get(S.envMap||X),W=ee&&ee.mapping===oa?ee.image.height:null,ae=g[S.type];S.precision!==null&&(p=a.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Oe=me!==void 0?me.length:0,ze=0;j.morphAttributes.position!==void 0&&(ze=1),j.morphAttributes.normal!==void 0&&(ze=2),j.morphAttributes.color!==void 0&&(ze=3);let Y,ne,Ae,Me;if(ae){let Ze=Zt[ae];Y=Ze.vertexShader,ne=Ze.fragmentShader}else Y=S.vertexShader,ne=S.fragmentShader,l.update(S),Ae=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);let de=e.getRenderTarget(),Ie=e.state.buffers.depth.getReversed(),We=H.isInstancedMesh===!0,Fe=H.isBatchedMesh===!0,q=!!S.map,le=!!S.matcap,A=!!ee,Ee=!!S.aoMap,ce=!!S.lightMap,Te=!!S.bumpMap,te=!!S.normalMap,De=!!S.displacementMap,_e=!!S.emissiveMap,be=!!S.metalnessMap,b=!!S.roughnessMap,_=S.anisotropy>0,D=S.clearcoat>0,Z=S.dispersion>0,F=S.iridescence>0,N=S.sheen>0,ie=S.transmission>0,K=_&&!!S.anisotropyMap,re=D&&!!S.clearcoatMap,ve=D&&!!S.clearcoatNormalMap,$=D&&!!S.clearcoatRoughnessMap,he=F&&!!S.iridescenceMap,Ne=F&&!!S.iridescenceThicknessMap,Pe=N&&!!S.sheenColorMap,ue=N&&!!S.sheenRoughnessMap,xe=!!S.specularMap,Le=!!S.specularColorMap,Be=!!S.specularIntensityMap,P=ie&&!!S.transmissionMap,se=ie&&!!S.thicknessMap,J=!!S.gradientMap,Q=!!S.alphaMap,ye=S.alphaTest>0,fe=!!S.alphaHash,qe=!!S.extensions,at=ti;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(at=e.toneMapping);let gt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:ne,defines:S.defines,customVertexShaderID:Ae,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&H._colorsTexture!==null,instancing:We,instancingColor:We&&H.instanceColor!==null,instancingMorph:We&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?e.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:sr,alphaToCoverage:!!S.alphaToCoverage,map:q,matcap:le,envMap:A,envMapMode:A&&ee.mapping,envMapCubeUVHeight:W,aoMap:Ee,lightMap:ce,bumpMap:Te,normalMap:te,displacementMap:d&&De,emissiveMap:_e,normalMapObjectSpace:te&&S.normalMapType===oc,normalMapTangentSpace:te&&S.normalMapType===To,metalnessMap:be,roughnessMap:b,anisotropy:_,anisotropyMap:K,clearcoat:D,clearcoatMap:re,clearcoatNormalMap:ve,clearcoatRoughnessMap:$,dispersion:Z,iridescence:F,iridescenceMap:he,iridescenceThicknessMap:Ne,sheen:N,sheenColorMap:Pe,sheenRoughnessMap:ue,specularMap:xe,specularColorMap:Le,specularIntensityMap:Be,transmission:ie,transmissionMap:P,thicknessMap:se,gradientMap:J,opaque:S.transparent===!1&&S.blending===$i&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:ye,alphaHash:fe,combine:S.combine,mapUv:q&&v(S.map.channel),aoMapUv:Ee&&v(S.aoMap.channel),lightMapUv:ce&&v(S.lightMap.channel),bumpMapUv:Te&&v(S.bumpMap.channel),normalMapUv:te&&v(S.normalMap.channel),displacementMapUv:De&&v(S.displacementMap.channel),emissiveMapUv:_e&&v(S.emissiveMap.channel),metalnessMapUv:be&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:K&&v(S.anisotropyMap.channel),clearcoatMapUv:re&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ue&&v(S.sheenRoughnessMap.channel),specularMapUv:xe&&v(S.specularMap.channel),specularColorMapUv:Le&&v(S.specularColorMap.channel),specularIntensityMapUv:Be&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:se&&v(S.thicknessMap.channel),alphaMapUv:Q&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(te||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(q||Q),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:at,decodeVideoTexture:q&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===$e,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===$e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=h.has(1),gt.vertexUv2s=h.has(2),gt.vertexUv3s=h.has(3),h.clear(),gt}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(E(M,S),x(M,S),M.push(e.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function T(S){let M=g[S.type],w;if(M){let B=Zt[M];w=Oc.clone(B.uniforms)}else w=S.uniforms;return w}function z(S,M){let w;for(let B=0,H=c.length;B<H;B++){let k=c[B];if(k.cacheKey===M){w=k,++w.usedTimes;break}}return w===void 0&&(w=new Kf(e,M,S,n),c.push(w)),w}function C(S){if(--S.usedTimes===0){let M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:z,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:O}}function tm(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function im(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ll(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Il(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u,d,p,g,v,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){let f=s(u,d,p,g,v,m);p.transmission>0?r.push(f):p.transparent===!0?a.push(f):i.push(f)}function l(u,d,p,g,v,m){let f=s(u,d,p,g,v,m);p.transmission>0?r.unshift(f):p.transparent===!0?a.unshift(f):i.unshift(f)}function h(u,d){i.length>1&&i.sort(u||im),r.length>1&&r.sort(d||Ll),a.length>1&&a.sort(d||Ll)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function rm(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Il,e.set(r,[s])):a>=n.length?(s=new Il,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function am(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new U,color:new Ge};break;case"SpotLight":i={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=i,i}}}function nm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var sm=0;function om(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lm(e){let t=new am,i=nm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);let a=new U,n=new st,s=new st;function o(h){let c=0,u=0,d=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,E=0,x=0,T=0,z=0,C=0,R=0;h.sort(om);for(let S=0,M=h.length;S<M;S++){let w=h[S],B=w.color,H=w.intensity,k=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=B.r*H,u+=B.g*H,d+=B.b*H;else if(w.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(w.sh.coefficients[X],H);R++}else if(w.isDirectionalLight){let X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let ee=w.shadow,W=i.get(w);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,r.directionalShadow[p]=W,r.directionalShadowMap[p]=j,r.directionalShadowMatrix[p]=w.shadow.matrix,E++}r.directional[p]=X,p++}else if(w.isSpotLight){let X=t.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=k,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,r.spot[v]=X;let ee=w.shadow;if(w.map&&(r.spotLightMap[z]=w.map,z++,ee.updateMatrices(w),w.castShadow&&C++),r.spotLightMatrix[v]=ee.matrix,w.castShadow){let W=i.get(w);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,r.spotShadow[v]=W,r.spotShadowMap[v]=j,T++}v++}else if(w.isRectAreaLight){let X=t.get(w);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),r.rectArea[m]=X,m++}else if(w.isPointLight){let X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){let ee=w.shadow,W=i.get(w);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,r.pointShadow[g]=W,r.pointShadowMap[g]=j,r.pointShadowMatrix[g]=w.shadow.matrix,x++}r.point[g]=X,g++}else if(w.isHemisphereLight){let X=t.get(w);X.skyColor.copy(w.color).multiplyScalar(H),X.groundColor.copy(w.groundColor).multiplyScalar(H),r.hemi[f]=X,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let O=r.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==E||O.numPointShadows!==x||O.numSpotShadows!==T||O.numSpotMaps!==z||O.numLightProbes!==R)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=f,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=T+z-C,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=R,O.directionalLength=p,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=E,O.numPointShadows=x,O.numSpotShadows=T,O.numSpotMaps=z,O.numLightProbes=R,r.version=sm++)}function l(h,c){let u=0,d=0,p=0,g=0,v=0,m=c.matrixWorldInverse;for(let f=0,E=h.length;f<E;f++){let x=h[f];if(x.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),u++}else if(x.isSpotLight){let T=r.spot[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let T=r.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),s.identity(),n.copy(x.matrixWorld),n.premultiply(m),s.extractRotation(n),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){let T=r.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let T=r.hemi[v];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:r}}function Nl(e){let t=new lm(e),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function n(c){i.push(c)}function s(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function hm(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Nl(e),t.set(a,[o])):n>=s.length?(o=new Nl(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var cm=class extends jr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},um=class extends jr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},dm=`void main() {
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
}`;function fm(e,t,i){let r=new xs,a=new pe,n=new pe,s=new ht,o=new cm({depthPacking:sc}),l=new um,h={},c=i.maxTextureSize,u={[_i]:bt,[bt]:_i,[Yt]:Yt},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:dm,fragmentShader:pm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let f=this.type;this.render=function(C,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=e.getRenderTarget(),M=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),B=e.state;B.setBlending(xi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=f!==ei&&this.type===ei,k=f===ei&&this.type!==ei;for(let j=0,X=C.length;j<X;j++){let ee=C[j],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let ae=W.getFrameExtents();if(a.multiply(ae),n.copy(W.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/ae.x),a.x=n.x*ae.x,W.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/ae.y),a.y=n.y*ae.y,W.mapSize.y=n.y)),W.map===null||H===!0||k===!0){let Oe=this.type!==ei?{minFilter:Ot,magFilter:Ot}:{};W.map!==null&&W.map.dispose(),W.map=new Si(a.x,a.y,Oe),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}e.setRenderTarget(W.map),e.clear();let me=W.getViewportCount();for(let Oe=0;Oe<me;Oe++){let ze=W.getViewport(Oe);s.set(n.x*ze.x,n.y*ze.y,n.x*ze.z,n.y*ze.w),B.viewport(s),W.updateMatrices(ee,Oe),r=W.getFrustum(),T(R,O,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===ei&&E(W,O),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(S,M,w)};function E(C,R){let O=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Si(a.x,a.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(R,null,O,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(R,null,O,p,v,null)}function x(C,R,O,S){let M=null,w=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=O.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let B=M.uuid,H=R.uuid,k=h[B];k===void 0&&(k={},h[B]=k);let j=k[H];j===void 0&&(j=M.clone(),k[H]=j,R.addEventListener("dispose",z)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,S===ei?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=e.properties.get(M);B.light=O}return M}function T(C,R,O,S,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ei)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let B=t.update(C),H=C.material;if(Array.isArray(H)){let k=B.groups;for(let j=0,X=k.length;j<X;j++){let ee=k[j],W=H[ee.materialIndex];if(W&&W.visible){let ae=x(C,W,S,M);C.onBeforeShadow(e,C,R,O,B,ae,ee),e.renderBufferDirect(O,null,B,ae,C,ee),C.onAfterShadow(e,C,R,O,B,ae,ee)}}}else if(H.visible){let k=x(C,H,S,M);C.onBeforeShadow(e,C,R,O,B,k,null),e.renderBufferDirect(O,null,B,k,C,null),C.onAfterShadow(e,C,R,O,B,k,null)}}let w=C.children;for(let B=0,H=w.length;B<H;B++)T(w[B],R,O,S,M)}function z(C){C.target.removeEventListener("dispose",z);for(let R in h){let O=h[R],S=C.target.uuid;S in O&&(O[S].dispose(),delete O[S])}}}var mm={[rn]:an,[nn]:ln,[sn]:hn,[Qi]:on,[an]:rn,[ln]:nn,[hn]:sn,[on]:Qi};function gm(e,t){function i(){let P=!1,se=new ht,J=null,Q=new ht(0,0,0,0);return{setMask:function(ye){J!==ye&&!P&&(e.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){P=ye},setClear:function(ye,fe,qe,at,gt){gt===!0&&(ye*=at,fe*=at,qe*=at),se.set(ye,fe,qe,at),Q.equals(se)===!1&&(e.clearColor(ye,fe,qe,at),Q.copy(se))},reset:function(){P=!1,J=null,Q.set(-1,0,0,0)}}}function r(){let P=!1,se=!1,J=null,Q=null,ye=null;return{setReversed:function(fe){if(se!==fe){let qe=t.get("EXT_clip_control");se?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let at=ye;ye=null,this.setClear(at)}se=fe},getReversed:function(){return se},setTest:function(fe){fe?de(e.DEPTH_TEST):Ie(e.DEPTH_TEST)},setMask:function(fe){J!==fe&&!P&&(e.depthMask(fe),J=fe)},setFunc:function(fe){if(se&&(fe=mm[fe]),Q!==fe){switch(fe){case rn:e.depthFunc(e.NEVER);break;case an:e.depthFunc(e.ALWAYS);break;case nn:e.depthFunc(e.LESS);break;case Qi:e.depthFunc(e.LEQUAL);break;case sn:e.depthFunc(e.EQUAL);break;case on:e.depthFunc(e.GEQUAL);break;case ln:e.depthFunc(e.GREATER);break;case hn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Q=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ye!==fe&&(se&&(fe=1-fe),e.clearDepth(fe),ye=fe)},reset:function(){P=!1,J=null,Q=null,ye=null,se=!1}}}function a(){let P=!1,se=null,J=null,Q=null,ye=null,fe=null,qe=null,at=null,gt=null;return{setTest:function(Ze){P||(Ze?de(e.STENCIL_TEST):Ie(e.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!P&&(e.stencilMask(Ze),se=Ze)},setFunc:function(Ze,Qt,Xt){(J!==Ze||Q!==Qt||ye!==Xt)&&(e.stencilFunc(Ze,Qt,Xt),J=Ze,Q=Qt,ye=Xt)},setOp:function(Ze,Qt,Xt){(fe!==Ze||qe!==Qt||at!==Xt)&&(e.stencilOp(Ze,Qt,Xt),fe=Ze,qe=Qt,at=Xt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){gt!==Ze&&(e.clearStencil(Ze),gt=Ze)},reset:function(){P=!1,se=null,J=null,Q=null,ye=null,fe=null,qe=null,at=null,gt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,E=null,x=null,T=null,z=null,C=null,R=new Ge(0,0,0),O=0,S=!1,M=null,w=null,B=null,H=null,k=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ee=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=ee>=2);let ae=null,me={},Oe=e.getParameter(e.SCISSOR_BOX),ze=e.getParameter(e.VIEWPORT),Y=new ht().fromArray(Oe),ne=new ht().fromArray(ze);function Ae(P,se,J,Q){let ye=new Uint8Array(4),fe=e.createTexture();e.bindTexture(P,fe),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let qe=0;qe<J;qe++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(se,0,e.RGBA,1,1,Q,0,e.RGBA,e.UNSIGNED_BYTE,ye):e.texImage2D(se+qe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ye);return fe}let Me={};Me[e.TEXTURE_2D]=Ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Me[e.TEXTURE_CUBE_MAP]=Ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[e.TEXTURE_2D_ARRAY]=Ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Me[e.TEXTURE_3D]=Ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(e.DEPTH_TEST),s.setFunc(Qi),Te(!1),te(ro),de(e.CULL_FACE),Ee(xi);function de(P){c[P]!==!0&&(e.enable(P),c[P]=!0)}function Ie(P){c[P]!==!1&&(e.disable(P),c[P]=!1)}function We(P,se){return u[P]!==se?(e.bindFramebuffer(P,se),u[P]=se,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=se),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=se),!0):!1}function Fe(P,se){let J=p,Q=!1;if(P){J=d.get(se),J===void 0&&(J=[],d.set(se,J));let ye=P.textures;if(J.length!==ye.length||J[0]!==e.COLOR_ATTACHMENT0){for(let fe=0,qe=ye.length;fe<qe;fe++)J[fe]=e.COLOR_ATTACHMENT0+fe;J.length=ye.length,Q=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,Q=!0);Q&&e.drawBuffers(J)}function q(P){return g!==P?(e.useProgram(P),g=P,!0):!1}let le={[Fi]:e.FUNC_ADD,[Ih]:e.FUNC_SUBTRACT,[Nh]:e.FUNC_REVERSE_SUBTRACT};le[Uh]=e.MIN,le[Dh]=e.MAX;let A={[Oh]:e.ZERO,[Fh]:e.ONE,[Bh]:e.SRC_COLOR,[en]:e.SRC_ALPHA,[Wh]:e.SRC_ALPHA_SATURATE,[Gh]:e.DST_COLOR,[Hh]:e.DST_ALPHA,[zh]:e.ONE_MINUS_SRC_COLOR,[tn]:e.ONE_MINUS_SRC_ALPHA,[kh]:e.ONE_MINUS_DST_COLOR,[Vh]:e.ONE_MINUS_DST_ALPHA,[Xh]:e.CONSTANT_COLOR,[jh]:e.ONE_MINUS_CONSTANT_COLOR,[Yh]:e.CONSTANT_ALPHA,[qh]:e.ONE_MINUS_CONSTANT_ALPHA};function Ee(P,se,J,Q,ye,fe,qe,at,gt,Ze){if(P===xi){v===!0&&(Ie(e.BLEND),v=!1);return}if(v===!1&&(de(e.BLEND),v=!0),P!==Lh){if(P!==m||Ze!==S){if((f!==Fi||T!==Fi)&&(e.blendEquation(e.FUNC_ADD),f=Fi,T=Fi),Ze)switch(P){case $i:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case no:e.blendFunc(e.ONE,e.ONE);break;case so:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case oo:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case $i:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case no:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case so:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case oo:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,x=null,z=null,C=null,R.set(0,0,0),O=0,m=P,S=Ze}return}ye=ye||se,fe=fe||J,qe=qe||Q,(se!==f||ye!==T)&&(e.blendEquationSeparate(le[se],le[ye]),f=se,T=ye),(J!==E||Q!==x||fe!==z||qe!==C)&&(e.blendFuncSeparate(A[J],A[Q],A[fe],A[qe]),E=J,x=Q,z=fe,C=qe),(at.equals(R)===!1||gt!==O)&&(e.blendColor(at.r,at.g,at.b,gt),R.copy(at),O=gt),m=P,S=!1}function ce(P,se){P.side===Yt?Ie(e.CULL_FACE):de(e.CULL_FACE);let J=P.side===bt;se&&(J=!J),Te(J),P.blending===$i&&P.transparent===!1?Ee(xi):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);let Q=P.stencilWrite;o.setTest(Q),Q&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),_e(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):Ie(e.SAMPLE_ALPHA_TO_COVERAGE)}function Te(P){M!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),M=P)}function te(P){P!==Rh?(de(e.CULL_FACE),P!==w&&(P===ro?e.cullFace(e.BACK):P===Ch?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ie(e.CULL_FACE),w=P}function De(P){P!==B&&(X&&e.lineWidth(P),B=P)}function _e(P,se,J){P?(de(e.POLYGON_OFFSET_FILL),(H!==se||k!==J)&&(e.polygonOffset(se,J),H=se,k=J)):Ie(e.POLYGON_OFFSET_FILL)}function be(P){P?de(e.SCISSOR_TEST):Ie(e.SCISSOR_TEST)}function b(P){P===void 0&&(P=e.TEXTURE0+j-1),ae!==P&&(e.activeTexture(P),ae=P)}function _(P,se,J){J===void 0&&(ae===null?J=e.TEXTURE0+j-1:J=ae);let Q=me[J];Q===void 0&&(Q={type:void 0,texture:void 0},me[J]=Q),(Q.type!==P||Q.texture!==se)&&(ae!==J&&(e.activeTexture(J),ae=J),e.bindTexture(P,se||Me[P]),Q.type=P,Q.texture=se)}function D(){let P=me[ae];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(P){Y.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function ue(P){ne.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function xe(P,se){let J=h.get(se);J===void 0&&(J=new WeakMap,h.set(se,J));let Q=J.get(P);Q===void 0&&(Q=e.getUniformBlockIndex(se,P.name),J.set(P,Q))}function Le(P,se){let J=h.get(se).get(P);l.get(se)!==J&&(e.uniformBlockBinding(se,J,P.__bindingPointIndex),l.set(se,J))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},ae=null,me={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,E=null,x=null,T=null,z=null,C=null,R=new Ge(0,0,0),O=0,S=!1,M=null,w=null,B=null,H=null,k=null,Y.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:de,disable:Ie,bindFramebuffer:We,drawBuffers:Fe,useProgram:q,setBlending:Ee,setMaterial:ce,setFlipSided:Te,setCullFace:te,setLineWidth:De,setPolygonOffset:_e,setScissorTest:be,activeTexture:b,bindTexture:_,unbindTexture:D,compressedTexImage2D:Z,compressedTexImage3D:F,texImage2D:he,texImage3D:Ne,updateUBOMapping:xe,uniformBlockBinding:Le,texStorage2D:ve,texStorage3D:$,texSubImage2D:N,texSubImage3D:ie,compressedTexSubImage2D:K,compressedTexSubImage3D:re,scissor:Pe,viewport:ue,reset:Be}}function Ul(e,t,i,r){let a=vm(r);switch(i){case fo:return e*t;case go:return e*t;case vo:return e*t*2;case _o:return e*t/a.components*a.byteLength;case vn:return e*t/a.components*a.byteLength;case xo:return e*t*2/a.components*a.byteLength;case _n:return e*t*2/a.components*a.byteLength;case mo:return e*t*3/a.components*a.byteLength;case Bt:return e*t*4/a.components*a.byteLength;case xn:return e*t*4/a.components*a.byteLength;case ca:case ua:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case da:case pa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sn:case En:return Math.max(e,16)*Math.max(t,8)/4;case yn:case Mn:return Math.max(e,8)*Math.max(t,8)/2;case Tn:case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case An:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ln:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case In:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Un:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Dn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case On:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Fn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case zn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case fa:case Vn:case Gn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case yo:case kn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wn:case Xn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vm(e){switch(e){case ri:case co:return{byteLength:1,components:1};case Br:case uo:case ir:return{byteLength:2,components:1};case mn:case gn:return{byteLength:2,components:4};case zi:case fn:case ai:return{byteLength:4,components:1};case po:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function _m(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):_a("canvas")}function v(b,_,D){let Z=1,F=be(b);if((F.width>D||F.height>D)&&(Z=D/Math.max(F.width,F.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let N=Math.floor(Z*F.width),ie=Math.floor(Z*F.height);u===void 0&&(u=g(N,ie));let K=_?g(N,ie):u;return K.width=N,K.height=ie,K.getContext("2d").drawImage(b,0,0,N,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+N+"x"+ie+")."),K}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){e.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(b,_,D,Z,F=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let N=_;if(_===e.RED&&(D===e.FLOAT&&(N=e.R32F),D===e.HALF_FLOAT&&(N=e.R16F),D===e.UNSIGNED_BYTE&&(N=e.R8)),_===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(N=e.R8UI),D===e.UNSIGNED_SHORT&&(N=e.R16UI),D===e.UNSIGNED_INT&&(N=e.R32UI),D===e.BYTE&&(N=e.R8I),D===e.SHORT&&(N=e.R16I),D===e.INT&&(N=e.R32I)),_===e.RG&&(D===e.FLOAT&&(N=e.RG32F),D===e.HALF_FLOAT&&(N=e.RG16F),D===e.UNSIGNED_BYTE&&(N=e.RG8)),_===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(N=e.RG8UI),D===e.UNSIGNED_SHORT&&(N=e.RG16UI),D===e.UNSIGNED_INT&&(N=e.RG32UI),D===e.BYTE&&(N=e.RG8I),D===e.SHORT&&(N=e.RG16I),D===e.INT&&(N=e.RG32I)),_===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(N=e.RGB8UI),D===e.UNSIGNED_SHORT&&(N=e.RGB16UI),D===e.UNSIGNED_INT&&(N=e.RGB32UI),D===e.BYTE&&(N=e.RGB8I),D===e.SHORT&&(N=e.RGB16I),D===e.INT&&(N=e.RGB32I)),_===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(N=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(N=e.RGBA16UI),D===e.UNSIGNED_INT&&(N=e.RGBA32UI),D===e.BYTE&&(N=e.RGBA8I),D===e.SHORT&&(N=e.RGBA16I),D===e.INT&&(N=e.RGBA32I)),_===e.RGB&&D===e.UNSIGNED_INT_5_9_9_9_REV&&(N=e.RGB9_E5),_===e.RGBA){let ie=F?ga:Je.getTransfer(Z);D===e.FLOAT&&(N=e.RGBA32F),D===e.HALF_FLOAT&&(N=e.RGBA16F),D===e.UNSIGNED_BYTE&&(N=ie===$e?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(N=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(N=e.RGB5_A1)}return(N===e.R16F||N===e.R32F||N===e.RG16F||N===e.RG32F||N===e.RGBA16F||N===e.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function T(b,_){let D;return b?_===null||_===zi||_===rr?D=e.DEPTH24_STENCIL8:_===ai?D=e.DEPTH32F_STENCIL8:_===Br&&(D=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===rr?D=e.DEPTH_COMPONENT24:_===ai?D=e.DEPTH_COMPONENT32F:_===Br&&(D=e.DEPTH_COMPONENT16),D}function z(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ot&&b.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function C(b){let _=b.target;_.removeEventListener("dispose",C),O(_),_.isVideoTexture&&c.delete(_)}function R(b){let _=b.target;_.removeEventListener("dispose",R),M(_)}function O(b){let _=r.get(b);if(_.__webglInit===void 0)return;let D=b.source,Z=d.get(D);if(Z){let F=Z[_.__cacheKey];F.usedTimes--,F.usedTimes===0&&S(b),Object.keys(Z).length===0&&d.delete(D)}r.remove(b)}function S(b){let _=r.get(b);e.deleteTexture(_.__webglTexture);let D=b.source,Z=d.get(D);delete Z[_.__cacheKey],s.memory.textures--}function M(b){let _=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let F=0;F<_.__webglFramebuffer[Z].length;F++)e.deleteFramebuffer(_.__webglFramebuffer[Z][F]);else e.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)e.deleteFramebuffer(_.__webglFramebuffer[Z]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=b.textures;for(let Z=0,F=D.length;Z<F;Z++){let N=r.get(D[Z]);N.__webglTexture&&(e.deleteTexture(N.__webglTexture),s.memory.textures--),r.remove(D[Z])}r.remove(b)}let w=0;function B(){w=0}function H(){let b=w;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),w+=1,b}function k(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){let D=r.get(b);if(b.isVideoTexture&&De(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(D,b,_);return}}i.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+_)}function X(b,_){let D=r.get(b);if(b.version>0&&D.__version!==b.version){ne(D,b,_);return}i.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+_)}function ee(b,_){let D=r.get(b);if(b.version>0&&D.__version!==b.version){ne(D,b,_);return}i.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+_)}function W(b,_){let D=r.get(b);if(b.version>0&&D.__version!==b.version){Ae(D,b,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+_)}let ae={[la]:e.REPEAT,[Bi]:e.CLAMP_TO_EDGE,[dn]:e.MIRRORED_REPEAT},me={[Ot]:e.NEAREST,[ac]:e.NEAREST_MIPMAP_NEAREST,[ha]:e.NEAREST_MIPMAP_LINEAR,[Ft]:e.LINEAR,[pn]:e.LINEAR_MIPMAP_NEAREST,[ii]:e.LINEAR_MIPMAP_LINEAR},Oe={[lc]:e.NEVER,[fc]:e.ALWAYS,[hc]:e.LESS,[Ao]:e.LEQUAL,[cc]:e.EQUAL,[pc]:e.GEQUAL,[uc]:e.GREATER,[dc]:e.NOTEQUAL};function ze(b,_){if(_.type===ai&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ft||_.magFilter===pn||_.magFilter===ha||_.magFilter===ii||_.minFilter===Ft||_.minFilter===pn||_.minFilter===ha||_.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,ae[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,ae[_.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,ae[_.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,me[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Oe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot||_.minFilter!==ha&&_.minFilter!==ii||_.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function Y(b,_){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",C));let Z=_.source,F=d.get(Z);F===void 0&&(F={},d.set(Z,F));let N=k(_);if(N!==b.__cacheKey){F[N]===void 0&&(F[N]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,D=!0),F[N].usedTimes++;let ie=F[b.__cacheKey];ie!==void 0&&(F[b.__cacheKey].usedTimes--,ie.usedTimes===0&&S(_)),b.__cacheKey=N,b.__webglTexture=F[N].texture}return D}function ne(b,_,D){let Z=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=e.TEXTURE_3D);let F=Y(b,_),N=_.source;i.bindTexture(Z,b.__webglTexture,e.TEXTURE0+D);let ie=r.get(N);if(N.version!==ie.__version||F===!0){i.activeTexture(e.TEXTURE0+D);let K=Je.getPrimaries(Je.workingColorSpace),re=_.colorSpace===yi?null:Je.getPrimaries(_.colorSpace),ve=_.colorSpace===yi||K===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let $=v(_.image,!1,a.maxTextureSize);$=_e(_,$);let he=n.convert(_.format,_.colorSpace),Ne=n.convert(_.type),Pe=x(_.internalFormat,he,Ne,_.colorSpace,_.isVideoTexture);ze(Z,_);let ue,xe=_.mipmaps,Le=_.isVideoTexture!==!0,Be=ie.__version===void 0||F===!0,P=N.dataReady,se=z(_,$);if(_.isDepthTexture)Pe=T(_.format===nr,_.type),Be&&(Le?i.texStorage2D(e.TEXTURE_2D,1,Pe,$.width,$.height):i.texImage2D(e.TEXTURE_2D,0,Pe,$.width,$.height,0,he,Ne,null));else if(_.isDataTexture)if(xe.length>0){Le&&Be&&i.texStorage2D(e.TEXTURE_2D,se,Pe,xe[0].width,xe[0].height);for(let J=0,Q=xe.length;J<Q;J++)ue=xe[J],Le?P&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,ue.width,ue.height,he,Ne,ue.data):i.texImage2D(e.TEXTURE_2D,J,Pe,ue.width,ue.height,0,he,Ne,ue.data);_.generateMipmaps=!1}else Le?(Be&&i.texStorage2D(e.TEXTURE_2D,se,Pe,$.width,$.height),P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,$.width,$.height,he,Ne,$.data)):i.texImage2D(e.TEXTURE_2D,0,Pe,$.width,$.height,0,he,Ne,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,se,Pe,xe[0].width,xe[0].height,$.depth);for(let J=0,Q=xe.length;J<Q;J++)if(ue=xe[J],_.format!==Bt)if(he!==null)if(Le){if(P)if(_.layerUpdates.size>0){let ye=Ul(ue.width,ue.height,_.format,_.type);for(let fe of _.layerUpdates){let qe=ue.data.subarray(fe*ye/ue.data.BYTES_PER_ELEMENT,(fe+1)*ye/ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,fe,ue.width,ue.height,1,he,qe)}_.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,he,ue.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,Pe,ue.width,ue.height,$.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?P&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,he,Ne,ue.data):i.texImage3D(e.TEXTURE_2D_ARRAY,J,Pe,ue.width,ue.height,$.depth,0,he,Ne,ue.data)}else{Le&&Be&&i.texStorage2D(e.TEXTURE_2D,se,Pe,xe[0].width,xe[0].height);for(let J=0,Q=xe.length;J<Q;J++)ue=xe[J],_.format!==Bt?he!==null?Le?P&&i.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,ue.width,ue.height,he,ue.data):i.compressedTexImage2D(e.TEXTURE_2D,J,Pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?P&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,ue.width,ue.height,he,Ne,ue.data):i.texImage2D(e.TEXTURE_2D,J,Pe,ue.width,ue.height,0,he,Ne,ue.data)}else if(_.isDataArrayTexture)if(Le){if(Be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,se,Pe,$.width,$.height,$.depth),P)if(_.layerUpdates.size>0){let J=Ul($.width,$.height,_.format,_.type);for(let Q of _.layerUpdates){let ye=$.data.subarray(Q*J/$.data.BYTES_PER_ELEMENT,(Q+1)*J/$.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,$.width,$.height,1,he,Ne,ye)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,he,Ne,$.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Pe,$.width,$.height,$.depth,0,he,Ne,$.data);else if(_.isData3DTexture)Le?(Be&&i.texStorage3D(e.TEXTURE_3D,se,Pe,$.width,$.height,$.depth),P&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,he,Ne,$.data)):i.texImage3D(e.TEXTURE_3D,0,Pe,$.width,$.height,$.depth,0,he,Ne,$.data);else if(_.isFramebufferTexture){if(Be)if(Le)i.texStorage2D(e.TEXTURE_2D,se,Pe,$.width,$.height);else{let J=$.width,Q=$.height;for(let ye=0;ye<se;ye++)i.texImage2D(e.TEXTURE_2D,ye,Pe,J,Q,0,he,Ne,null),J>>=1,Q>>=1}}else if(xe.length>0){if(Le&&Be){let J=be(xe[0]);i.texStorage2D(e.TEXTURE_2D,se,Pe,J.width,J.height)}for(let J=0,Q=xe.length;J<Q;J++)ue=xe[J],Le?P&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,he,Ne,ue):i.texImage2D(e.TEXTURE_2D,J,Pe,he,Ne,ue);_.generateMipmaps=!1}else if(Le){if(Be){let J=be($);i.texStorage2D(e.TEXTURE_2D,se,Pe,J.width,J.height)}P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,he,Ne,$)}else i.texImage2D(e.TEXTURE_2D,0,Pe,he,Ne,$);m(_)&&f(Z),ie.__version=N.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ae(b,_,D){if(_.image.length!==6)return;let Z=Y(b,_),F=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+D);let N=r.get(F);if(F.version!==N.__version||Z===!0){i.activeTexture(e.TEXTURE0+D);let ie=Je.getPrimaries(Je.workingColorSpace),K=_.colorSpace===yi?null:Je.getPrimaries(_.colorSpace),re=_.colorSpace===yi||ie===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=_.isCompressedTexture||_.image[0].isCompressedTexture,$=_.image[0]&&_.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!ve&&!$?he[Q]=v(_.image[Q],!0,a.maxCubemapSize):he[Q]=$?_.image[Q].image:_.image[Q],he[Q]=_e(_,he[Q]);let Ne=he[0],Pe=n.convert(_.format,_.colorSpace),ue=n.convert(_.type),xe=x(_.internalFormat,Pe,ue,_.colorSpace),Le=_.isVideoTexture!==!0,Be=N.__version===void 0||Z===!0,P=F.dataReady,se=z(_,Ne);ze(e.TEXTURE_CUBE_MAP,_);let J;if(ve){Le&&Be&&i.texStorage2D(e.TEXTURE_CUBE_MAP,se,xe,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){J=he[Q].mipmaps;for(let ye=0;ye<J.length;ye++){let fe=J[ye];_.format!==Bt?Pe!==null?Le?P&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,fe.width,fe.height,Pe,fe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,fe.width,fe.height,Pe,ue,fe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,xe,fe.width,fe.height,0,Pe,ue,fe.data)}}}else{if(J=_.mipmaps,Le&&Be){J.length>0&&se++;let Q=be(he[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,se,xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if($){Le?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,Pe,ue,he[Q].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,xe,he[Q].width,he[Q].height,0,Pe,ue,he[Q].data);for(let ye=0;ye<J.length;ye++){let fe=J[ye].image[Q].image;Le?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,fe.width,fe.height,Pe,ue,fe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,xe,fe.width,fe.height,0,Pe,ue,fe.data)}}else{Le?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,ue,he[Q]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,xe,Pe,ue,he[Q]);for(let ye=0;ye<J.length;ye++){let fe=J[ye];Le?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Pe,ue,fe.image[Q]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,xe,Pe,ue,fe.image[Q])}}}m(_)&&f(e.TEXTURE_CUBE_MAP),N.__version=F.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Me(b,_,D,Z,F,N){let ie=n.convert(D.format,D.colorSpace),K=n.convert(D.type),re=x(D.internalFormat,ie,K,D.colorSpace),ve=r.get(_),$=r.get(D);if($.__renderTarget=_,!ve.__hasExternalTextures){let he=Math.max(1,_.width>>N),Ne=Math.max(1,_.height>>N);F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?i.texImage3D(F,N,re,he,Ne,_.depth,0,ie,K,null):i.texImage2D(F,N,re,he,Ne,0,ie,K,null)}i.bindFramebuffer(e.FRAMEBUFFER,b),te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,F,$.__webglTexture,0,Te(_)):(F===e.TEXTURE_2D||F>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,F,$.__webglTexture,N),i.bindFramebuffer(e.FRAMEBUFFER,null)}function de(b,_,D){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer){let Z=_.depthTexture,F=Z&&Z.isDepthTexture?Z.type:null,N=T(_.stencilBuffer,F),ie=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=Te(_);te(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,K,N,_.width,_.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,K,N,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,N,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,b)}else{let Z=_.textures;for(let F=0;F<Z.length;F++){let N=Z[F],ie=n.convert(N.format,N.colorSpace),K=n.convert(N.type),re=x(N.internalFormat,ie,K,N.colorSpace),ve=Te(_);D&&te(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,re,_.width,_.height):te(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,re,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,re,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ie(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let D=r.get(_.depthTexture);D.__renderTarget=_,(!D.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);let Z=D.__webglTexture,F=Te(_);if(_.depthTexture.format===ar)te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(_.depthTexture.format===nr)te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function We(b){let _=r.get(b),D=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let F=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",F)};Z.addEventListener("dispose",F),_.__depthDisposeCallback=F}_.__boundDepthTexture=Z}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,b)}else if(D){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=e.createRenderbuffer(),de(_.__webglDepthbuffer[Z],b,!1);else{let F=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,N=_.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,N),e.framebufferRenderbuffer(e.FRAMEBUFFER,F,e.RENDERBUFFER,N)}}else if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),de(_.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,F)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(b,_,D){let Z=r.get(b);_!==void 0&&Me(Z.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&We(b)}function q(b){let _=b.texture,D=r.get(b),Z=r.get(_);b.addEventListener("dispose",R);let F=b.textures,N=b.isWebGLCubeRenderTarget===!0,ie=F.length>1;if(ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=_.version,s.memory.textures++),N){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let re=0;re<_.mipmaps.length;re++)D.__webglFramebuffer[K][re]=e.createFramebuffer()}else D.__webglFramebuffer[K]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)D.__webglFramebuffer[K]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(ie)for(let K=0,re=F.length;K<re;K++){let ve=r.get(F[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(b.samples>0&&te(b)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let K=0;K<F.length;K++){let re=F[K];D.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[K]);let ve=n.convert(re.format,re.colorSpace),$=n.convert(re.type),he=x(re.internalFormat,ve,$,re.colorSpace,b.isXRRenderTarget===!0),Ne=Te(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,he,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,D.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),de(D.__webglDepthRenderbuffer,b,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(N){i.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),ze(e.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Me(D.__webglFramebuffer[K][re],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,re);else Me(D.__webglFramebuffer[K],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(_)&&f(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ie){for(let K=0,re=F.length;K<re;K++){let ve=F[K],$=r.get(ve);i.bindTexture(e.TEXTURE_2D,$.__webglTexture),ze(e.TEXTURE_2D,ve),Me(D.__webglFramebuffer,b,ve,e.COLOR_ATTACHMENT0+K,e.TEXTURE_2D,0),m(ve)&&f(e.TEXTURE_2D)}i.unbindTexture()}else{let K=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(K,Z.__webglTexture),ze(K,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Me(D.__webglFramebuffer[re],b,_,e.COLOR_ATTACHMENT0,K,re);else Me(D.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,K,0);m(_)&&f(K),i.unbindTexture()}b.depthBuffer&&We(b)}function le(b){let _=b.textures;for(let D=0,Z=_.length;D<Z;D++){let F=_[D];if(m(F)){let N=E(b),ie=r.get(F).__webglTexture;i.bindTexture(N,ie),f(N),i.unbindTexture()}}}let A=[],Ee=[];function ce(b){if(b.samples>0){if(te(b)===!1){let _=b.textures,D=b.width,Z=b.height,F=e.COLOR_BUFFER_BIT,N=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=r.get(b),K=_.length>1;if(K)for(let re=0;re<_.length;re++)i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let re=0;re<_.length;re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(F|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(F|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ie.__webglColorRenderbuffer[re]);let ve=r.get(_[re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,D,Z,0,0,D,Z,F,e.NEAREST),l===!0&&(A.length=0,Ee.length=0,A.push(e.COLOR_ATTACHMENT0+re),b.depthBuffer&&b.resolveDepthBuffer===!1&&(A.push(N),Ee.push(N),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,A))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let re=0;re<_.length;re++){i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,ie.__webglColorRenderbuffer[re]);let ve=r.get(_[re]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,ve,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Te(b){return Math.min(a.maxSamples,b.samples)}function te(b){let _=r.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function De(b){let _=s.render.frame;c.get(b)!==_&&(c.set(b,_),b.update())}function _e(b,_){let D=b.colorSpace,Z=b.format,F=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==sr&&D!==yi&&(Je.getTransfer(D)===$e?(Z!==Bt||F!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function be(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=q,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=te}function xm(e,t){function i(r,a=yi){let n,s=Je.getTransfer(a);if(r===ri)return e.UNSIGNED_BYTE;if(r===mn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===gn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===po)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===co)return e.BYTE;if(r===uo)return e.SHORT;if(r===Br)return e.UNSIGNED_SHORT;if(r===fn)return e.INT;if(r===zi)return e.UNSIGNED_INT;if(r===ai)return e.FLOAT;if(r===ir)return e.HALF_FLOAT;if(r===fo)return e.ALPHA;if(r===mo)return e.RGB;if(r===Bt)return e.RGBA;if(r===go)return e.LUMINANCE;if(r===vo)return e.LUMINANCE_ALPHA;if(r===ar)return e.DEPTH_COMPONENT;if(r===nr)return e.DEPTH_STENCIL;if(r===_o)return e.RED;if(r===vn)return e.RED_INTEGER;if(r===xo)return e.RG;if(r===_n)return e.RG_INTEGER;if(r===xn)return e.RGBA_INTEGER;if(r===ca||r===ua||r===da||r===pa)if(s===$e)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===ca)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===ca)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ua)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===da)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yn||r===Sn||r===Mn||r===En)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===yn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===En)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tn||r===bn||r===An)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Tn||r===bn)return s===$e?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===An)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wn||r===Rn||r===Cn||r===Pn||r===Ln||r===In||r===Nn||r===Un||r===Dn||r===On||r===Fn||r===Bn||r===zn||r===Hn)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===wn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ln)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===In)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Un)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===On)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hn)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fa||r===Vn||r===Gn)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===fa)return s===$e?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yo||r===kn||r===Wn||r===Xn)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===fa)return n.COMPRESSED_RED_RGTC1_EXT;if(r===kn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var ym=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Jr=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,i),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mm=`
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

}`,Tm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new zt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Jt({vertexShader:Mm,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bm=class extends lr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new Tm,v=t.getContextAttributes(),m=null,f=null,E=[],x=[],T=new pe,z=null,C=new Nt;C.viewport=new ht;let R=new Nt;R.viewport=new ht;let O=[C,R],S=new ym,M=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=E[Y];return ne===void 0&&(ne=new Ps,E[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=E[Y];return ne===void 0&&(ne=new Ps,E[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=E[Y];return ne===void 0&&(ne=new Ps,E[Y]=ne),ne.getHandSpace()};function B(Y){let ne=x.indexOf(Y.inputSource);if(ne===-1)return;let Ae=E[ne];Ae!==void 0&&(Ae.update(Y.inputSource,Y.frame,l||n),Ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<E.length;Y++){let ne=x[Y];ne!==null&&(x[Y]=null,E[Y].disconnect(ne))}M=null,w=null,g.reset(),e.setRenderTarget(m),d=null,u=null,c=null,r=null,f=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){let ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Si(d.framebufferWidth,d.framebufferHeight,{format:Bt,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,Ae=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?nr:ar,Ae=v.stencil?rr:zi);let de={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(de),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new Si(u.textureWidth,u.textureHeight,{format:Bt,type:ri,depthTexture:new dl(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Y){for(let ne=0;ne<Y.removed.length;ne++){let Ae=Y.removed[ne],Me=x.indexOf(Ae);Me>=0&&(x[Me]=null,E[Me].disconnect(Ae))}for(let ne=0;ne<Y.added.length;ne++){let Ae=Y.added[ne],Me=x.indexOf(Ae);if(Me===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=x.length){x.push(Ae),Me=Ie;break}else if(x[Ie]===null){x[Ie]=Ae,Me=Ie;break}if(Me===-1)break}let de=E[Me];de&&de.connect(Ae)}}let j=new U,X=new U;function ee(Y,ne,Ae){j.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(Ae.matrixWorld);let Me=j.distanceTo(X),de=ne.projectionMatrix.elements,Ie=Ae.projectionMatrix.elements,We=de[14]/(de[10]-1),Fe=de[14]/(de[10]+1),q=(de[9]+1)/de[5],le=(de[9]-1)/de[5],A=(de[8]-1)/de[0],Ee=(Ie[8]+1)/Ie[0],ce=We*A,Te=We*Ee,te=Me/(-A+Ee),De=te*-A;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),de[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let _e=We+te,be=Fe+te,b=ce-De,_=Te+(Me-De),D=q*Fe/be*_e,Z=le*Fe/be*_e;Y.projectionMatrix.makePerspective(b,_,D,Z,_e,be),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function W(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,Ae=Y.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),S.near=R.near=C.near=ne,S.far=R.far=C.far=Ae,(M!==S.near||w!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,w=S.far),C.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,S.layers.mask=C.layers.mask|R.layers.mask;let Me=Y.parent,de=S.cameras;W(S,Me);for(let Ie=0;Ie<de.length;Ie++)W(de[Ie],Me);de.length===2?ee(S,C,R):S.projectionMatrix.copy(C.projectionMatrix),ae(Y,S,Me)};function ae(Y,ne,Ae){Ae===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(Ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(Y){o=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let me=null;function Oe(Y,ne){if(h=ne.getViewerPose(l||n),p=ne,h!==null){let Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let Me=!1;Ae.length!==S.cameras.length&&(S.cameras.length=0,Me=!0);for(let Ie=0;Ie<Ae.length;Ie++){let We=Ae[Ie],Fe=null;if(d!==null)Fe=d.getViewport(We);else{let le=c.getViewSubImage(u,We);Fe=le.viewport,Ie===0&&(e.setRenderTargetTextures(f,le.colorTexture,u.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(f))}let q=O[Ie];q===void 0&&(q=new Nt,q.layers.enable(Ie),q.viewport=new ht,O[Ie]=q),q.matrix.fromArray(We.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(We.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ie===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Me===!0&&S.cameras.push(q)}let de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){let Ie=c.getDepthInformation(Ae[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,r.renderState)}}for(let Ae=0;Ae<E.length;Ae++){let Me=x[Ae],de=E[Ae];Me!==null&&de!==void 0&&de.update(Me,ne,l||n)}me&&me(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let ze=new nl;ze.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}},Ji=new Ai,Am=new st;function wm(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,el(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,E,x,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(m,f):f.isMeshToonMaterial?(n(m,f),u(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f)):f.isMeshStandardMaterial?(n(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(n(m,f),g(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),v(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,x):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),x=E.envMap,T=E.envMapRotation;x&&(m.envMap.value=x,Ji.copy(T),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Ji)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=x*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Rm(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){let T=x.program;r.uniformBlockBinding(E,T)}function h(E,x){let T=a[E.id];T===void 0&&(g(E),T=c(E),a[E.id]=T,E.addEventListener("dispose",m));let z=x.program;r.updateUBOMapping(E,z);let C=t.render.frame;n[E.id]!==C&&(d(E),n[E.id]=C)}function c(E){let x=u();E.__bindingPointIndex=x;let T=e.createBuffer(),z=E.__size,C=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,z,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,T),T}function u(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let x=a[E.id],T=E.uniforms,z=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let C=0,R=T.length;C<R;C++){let O=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,M=O.length;S<M;S++){let w=O[S];if(p(w,C,S,z)===!0){let B=w.__offset,H=Array.isArray(w.value)?w.value:[w.value],k=0;for(let j=0;j<H.length;j++){let X=H[j],ee=v(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,B+k,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,k),k+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(E,x,T,z){let C=E.value,R=x+"_"+T;if(z[R]===void 0)return typeof C=="number"||typeof C=="boolean"?z[R]=C:z[R]=C.clone(),!0;{let O=z[R];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return z[R]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(E){let x=E.uniforms,T=0,z=16;for(let R=0,O=x.length;R<O;R++){let S=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,w=S.length;M<w;M++){let B=S[M],H=Array.isArray(B.value)?B.value:[B.value];for(let k=0,j=H.length;k<j;k++){let X=H[k],ee=v(X),W=T%z,ae=W%ee.boundary,me=W+ae;T+=ae,me!==0&&z-me<ee.storage&&(T+=z-me),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=ee.storage}}}let C=T%z;return C>0&&(T+=z-C),E.__size=T,E.__cache={},this}function v(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){let x=E.target;x.removeEventListener("dispose",m);let T=s.indexOf(x.__bindingPointIndex);s.splice(T,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function f(){for(let E in a)e.deleteBuffer(a[E]);s=[],a={},n={}}return{bind:l,update:h,dispose:f}}var Cm=class{constructor(e={}){let{canvas:t=gc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=n;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this.toneMapping=ti,this.toneMappingExposure=1;let x=this,T=!1,z=0,C=0,R=null,O=-1,S=null,M=new ht,w=new ht,B=null,H=new Ge(0),k=0,j=t.width,X=t.height,ee=1,W=null,ae=null,me=new ht(0,0,j,X),Oe=new ht(0,0,j,X),ze=!1,Y=new xs,ne=!1,Ae=!1,Me=new st,de=new st,Ie=new U,We=new ht,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function le(){return R===null?ee:1}let A=i;function Ee(y,I){return t.getContext(y,I)}try{let y={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ye,!1),A===null){let I="webgl2";if(A=Ee(I,y),A===null)throw Ee(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ce,Te,te,De,_e,be,b,_,D,Z,F,N,ie,K,re,ve,$,he,Ne,Pe,ue,xe,Le,Be;function P(){ce=new Np(A),ce.init(),xe=new xm(A,ce),Te=new wp(A,ce,e,xe),te=new gm(A,ce),Te.reverseDepthBuffer&&u&&te.buffers.depth.setReversed(!0),De=new Op(A),_e=new tm,be=new _m(A,ce,te,_e,Te,xe,De),b=new Cp(x),_=new Ip(x),D=new kc(A),Le=new bp(A,D),Z=new Up(A,D,De,Le),F=new Bp(A,Z,D,De),Ne=new Fp(A,Te,be),ve=new Rp(_e),N=new em(x,b,_,ce,Te,Le,ve),ie=new wm(x,_e),K=new rm,re=new hm(ce),he=new Tp(x,b,_,te,F,d,o),$=new fm(x,F,Te),Be=new Rm(A,De,Te,te),Pe=new Ap(A,ce,De),ue=new Dp(A,ce,De),De.programs=N.programs,x.capabilities=Te,x.extensions=ce,x.properties=_e,x.renderLists=K,x.shadowMap=$,x.state=te,x.info=De}P();let se=new bm(x,A);this.xr=se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let y=ce.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ce.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(j,X,!1))},this.getSize=function(y){return y.set(j,X)},this.setSize=function(y,I,V=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,X=I,t.width=Math.floor(y*ee),t.height=Math.floor(I*ee),V===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(j*ee,X*ee).floor()},this.setDrawingBufferSize=function(y,I,V){j=y,X=I,ee=V,t.width=Math.floor(y*V),t.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,I,V,G){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,I,V,G),te.viewport(M.copy(me).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,I,V,G){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,I,V,G),te.scissor(w.copy(Oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){te.setScissorTest(ze=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(y=!0,I=!0,V=!0){let G=0;if(y){let L=!1;if(R!==null){let oe=R.texture.format;L=oe===xn||oe===_n||oe===vn}if(L){let oe=R.texture.type,Se=oe===ri||oe===zi||oe===Br||oe===rr||oe===mn||oe===gn,we=he.getClearColor(),Re=he.getClearAlpha(),He=we.r,Ve=we.g,Ue=we.b;Se?(p[0]=He,p[1]=Ve,p[2]=Ue,p[3]=Re,A.clearBufferuiv(A.COLOR,0,p)):(g[0]=He,g[1]=Ve,g[2]=Ue,g[3]=Re,A.clearBufferiv(A.COLOR,0,g))}else G|=A.COLOR_BUFFER_BIT}I&&(G|=A.DEPTH_BUFFER_BIT),V&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),K.dispose(),re.dispose(),_e.dispose(),b.dispose(),_.dispose(),F.dispose(),Le.dispose(),Be.dispose(),N.dispose(),se.dispose(),se.removeEventListener("sessionstart",Xt),se.removeEventListener("sessionend",Ks),Ui.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let y=De.autoReset,I=$.enabled,V=$.autoUpdate,G=$.needsUpdate,L=$.type;P(),De.autoReset=y,$.enabled=I,$.autoUpdate=V,$.needsUpdate=G,$.type=L}function ye(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function fe(y){let I=y.target;I.removeEventListener("dispose",fe),qe(I)}function qe(y){at(y),_e.remove(y)}function at(y){let I=_e.get(y).programs;I!==void 0&&(I.forEach(function(V){N.releaseProgram(V)}),y.isShaderMaterial&&N.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,G,L,oe){I===null&&(I=Fe);let Se=L.isMesh&&L.matrixWorld.determinant()<0,we=bh(y,I,V,G,L);te.setMaterial(G,Se);let Re=V.index,He=1;if(G.wireframe===!0){if(Re=Z.getWireframeAttribute(V),Re===void 0)return;He=2}let Ve=V.drawRange,Ue=V.attributes.position,Ke=Ve.start*He,et=(Ve.start+Ve.count)*He;oe!==null&&(Ke=Math.max(Ke,oe.start*He),et=Math.min(et,(oe.start+oe.count)*He)),Re!==null?(Ke=Math.max(Ke,0),et=Math.min(et,Re.count)):Ue!=null&&(Ke=Math.max(Ke,0),et=Math.min(et,Ue.count));let tt=et-Ke;if(tt<0||tt===1/0)return;Le.setup(L,G,we,V,Re);let ot,it=Pe;if(Re!==null&&(ot=D.get(Re),it=ue,it.setIndex(ot)),L.isMesh)G.wireframe===!0?(te.setLineWidth(G.wireframeLinewidth*le()),it.setMode(A.LINES)):it.setMode(A.TRIANGLES);else if(L.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),te.setLineWidth(Ce*le()),L.isLineSegments?it.setMode(A.LINES):L.isLineLoop?it.setMode(A.LINE_LOOP):it.setMode(A.LINE_STRIP)}else L.isPoints?it.setMode(A.POINTS):L.isSprite&&it.setMode(A.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)it.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))it.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ce=L._multiDrawStarts,Di=L._multiDrawCounts,Oi=L._multiDrawCount,Dt=Re?D.get(Re).bytesPerElement:1,Zi=_e.get(G).currentProgram.getUniforms();for(let wt=0;wt<Oi;wt++)Zi.setValue(A,"_gl_DrawID",wt),it.render(Ce[wt]/Dt,Di[wt])}else if(L.isInstancedMesh)it.renderInstances(Ke,tt,L.count);else if(V.isInstancedBufferGeometry){let Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Di=Math.min(V.instanceCount,Ce);it.renderInstances(Ke,tt,Di)}else it.render(Ke,tt)};function gt(y,I,V){y.transparent===!0&&y.side===Yt&&y.forceSinglePass===!1?(y.side=bt,y.needsUpdate=!0,sa(y,I,V),y.side=_i,y.needsUpdate=!0,sa(y,I,V),y.side=Yt):sa(y,I,V)}this.compile=function(y,I,V=null){V===null&&(V=y),m=re.get(V),m.init(I),E.push(m),V.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),y!==V&&y.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights();let G=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let oe=L.material;if(oe)if(Array.isArray(oe))for(let Se=0;Se<oe.length;Se++){let we=oe[Se];gt(we,V,L),G.add(we)}else gt(oe,V,L),G.add(oe)}),E.pop(),m=null,G},this.compileAsync=function(y,I,V=null){let G=this.compile(y,I,V);return new Promise(L=>{function oe(){if(G.forEach(function(Se){_e.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){L(y);return}setTimeout(oe,10)}ce.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ze=null;function Qt(y){Ze&&Ze(y)}function Xt(){Ui.stop()}function Ks(){Ui.start()}let Ui=new nl;Ui.setAnimationLoop(Qt),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(y){Ze=y,se.setAnimationLoop(y),y===null?Ui.stop():Ui.start()},se.addEventListener("sessionstart",Xt),se.addEventListener("sessionend",Ks),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,R),m=re.get(y,E.length),m.init(I),E.push(m),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(de),Ae=this.localClippingEnabled,ne=ve.init(this.clippingPlanes,Ae),v=K.get(y,f.length),v.init(),f.push(v),se.enabled===!0&&se.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&Qa(oe,I,-1/0,x.sortObjects)}Qa(y,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(W,ae),q=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,q&&he.addToRenderList(v,y),this.info.render.frame++,ne===!0&&ve.beginShadows();let V=m.state.shadowsArray;$.render(V,y,I),ne===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=v.opaque,L=v.transmissive;if(m.setupLights(),I.isArrayCamera){let oe=I.cameras;if(L.length>0)for(let Se=0,we=oe.length;Se<we;Se++){let Re=oe[Se];$s(G,L,y,Re)}q&&he.render(y);for(let Se=0,we=oe.length;Se<we;Se++){let Re=oe[Se];Zs(v,y,Re,Re.viewport)}}else L.length>0&&$s(G,L,y,I),q&&he.render(y),Zs(v,y,I);R!==null&&(be.updateMultisampleRenderTarget(R),be.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(x,y,I),Le.resetDefaultState(),O=-1,S=null,E.pop(),E.length>0?(m=E[E.length-1],ne===!0&&ve.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Qa(y,I,V,G){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){G&&We.setFromMatrixPosition(y.matrixWorld).applyMatrix4(de);let oe=F.update(y),Se=y.material;Se.visible&&v.push(y,oe,Se,V,We.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){let oe=F.update(y),Se=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),We.copy(y.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),We.copy(oe.boundingSphere.center)),We.applyMatrix4(y.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){let we=oe.groups;for(let Re=0,He=we.length;Re<He;Re++){let Ve=we[Re],Ue=Se[Ve.materialIndex];Ue&&Ue.visible&&v.push(y,oe,Ue,V,We.z,Ve)}}else Se.visible&&v.push(y,oe,Se,V,We.z,null)}}let L=y.children;for(let oe=0,Se=L.length;oe<Se;oe++)Qa(L[oe],I,V,G)}function Zs(y,I,V,G){let L=y.opaque,oe=y.transmissive,Se=y.transparent;m.setupLightsView(V),ne===!0&&ve.setGlobalState(x.clippingPlanes,V),G&&te.viewport(M.copy(G)),L.length>0&&na(L,I,V),oe.length>0&&na(oe,I,V),Se.length>0&&na(Se,I,V),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function $s(y,I,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Si(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?ir:ri,minFilter:ii,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let L=m.state.transmissionRenderTarget[G.id],oe=G.viewport||M;L.setSize(oe.z,oe.w);let Se=x.getRenderTarget();x.setRenderTarget(L),x.getClearColor(H),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),q&&he.render(V);let we=x.toneMapping;x.toneMapping=ti;let Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),ne===!0&&ve.setGlobalState(x.clippingPlanes,G),na(y,V,G),be.updateMultisampleRenderTarget(L),be.updateRenderTargetMipmap(L),ce.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ve=0,Ue=I.length;Ve<Ue;Ve++){let Ke=I[Ve],et=Ke.object,tt=Ke.geometry,ot=Ke.material,it=Ke.group;if(ot.side===Yt&&et.layers.test(G.layers)){let Ce=ot.side;ot.side=bt,ot.needsUpdate=!0,Qs(et,V,G,tt,ot,it),ot.side=Ce,ot.needsUpdate=!0,He=!0}}He===!0&&(be.updateMultisampleRenderTarget(L),be.updateRenderTargetMipmap(L))}x.setRenderTarget(Se),x.setClearColor(H,k),Re!==void 0&&(G.viewport=Re),x.toneMapping=we}function na(y,I,V){let G=I.isScene===!0?I.overrideMaterial:null;for(let L=0,oe=y.length;L<oe;L++){let Se=y[L],we=Se.object,Re=Se.geometry,He=G===null?Se.material:G,Ve=Se.group;we.layers.test(V.layers)&&Qs(we,I,V,Re,He,Ve)}}function Qs(y,I,V,G,L,oe){y.onBeforeRender(x,I,V,G,L,oe),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(x,I,V,G,y,oe),L.transparent===!0&&L.side===Yt&&L.forceSinglePass===!1?(L.side=bt,L.needsUpdate=!0,x.renderBufferDirect(V,I,G,L,y,oe),L.side=_i,L.needsUpdate=!0,x.renderBufferDirect(V,I,G,L,y,oe),L.side=Yt):x.renderBufferDirect(V,I,G,L,y,oe),y.onAfterRender(x,I,V,G,L,oe)}function sa(y,I,V){I.isScene!==!0&&(I=Fe);let G=_e.get(y),L=m.state.lights,oe=m.state.shadowsArray,Se=L.state.version,we=N.getParameters(y,L.state,oe,I,V),Re=N.getProgramCacheKey(we),He=G.programs;G.environment=y.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(y.isMeshStandardMaterial?_:b).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,He===void 0&&(y.addEventListener("dispose",fe),He=new Map,G.programs=He);let Ve=He.get(Re);if(Ve!==void 0){if(G.currentProgram===Ve&&G.lightsStateVersion===Se)return to(y,we),Ve}else we.uniforms=N.getUniforms(y),y.onBeforeCompile(we,x),Ve=N.acquireProgram(we,Re),He.set(Re,Ve),G.uniforms=we.uniforms;let Ue=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=ve.uniform),to(y,we),G.needsLights=wh(y),G.lightsStateVersion=Se,G.needsLights&&(Ue.ambientLightColor.value=L.state.ambient,Ue.lightProbe.value=L.state.probe,Ue.directionalLights.value=L.state.directional,Ue.directionalLightShadows.value=L.state.directionalShadow,Ue.spotLights.value=L.state.spot,Ue.spotLightShadows.value=L.state.spotShadow,Ue.rectAreaLights.value=L.state.rectArea,Ue.ltc_1.value=L.state.rectAreaLTC1,Ue.ltc_2.value=L.state.rectAreaLTC2,Ue.pointLights.value=L.state.point,Ue.pointLightShadows.value=L.state.pointShadow,Ue.hemisphereLights.value=L.state.hemi,Ue.directionalShadowMap.value=L.state.directionalShadowMap,Ue.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ue.spotShadowMap.value=L.state.spotShadowMap,Ue.spotLightMatrix.value=L.state.spotLightMatrix,Ue.spotLightMap.value=L.state.spotLightMap,Ue.pointShadowMap.value=L.state.pointShadowMap,Ue.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=Ve,G.uniformsList=null,Ve}function eo(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=za.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function to(y,I){let V=_e.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function bh(y,I,V,G,L){I.isScene!==!0&&(I=Fe),be.resetTextureUnits();let oe=I.fog,Se=G.isMeshStandardMaterial?I.environment:null,we=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:sr,Re=(G.isMeshStandardMaterial?_:b).get(G.envMap||Se),He=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,et=!!V.morphAttributes.color,tt=ti;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(tt=x.toneMapping);let ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,it=ot!==void 0?ot.length:0,Ce=_e.get(G),Di=m.state.lights;if(ne===!0&&(Ae===!0||y!==S)){let Tt=y===S&&G.id===O;ve.setState(G,y,Tt)}let Oi=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Di.state.version||Ce.outputColorSpace!==we||L.isBatchedMesh&&Ce.batching===!1||!L.isBatchedMesh&&Ce.batching===!0||L.isBatchedMesh&&Ce.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ce.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ce.instancing===!1||!L.isInstancedMesh&&Ce.instancing===!0||L.isSkinnedMesh&&Ce.skinning===!1||!L.isSkinnedMesh&&Ce.skinning===!0||L.isInstancedMesh&&Ce.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ce.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ce.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ce.instancingMorph===!1&&L.morphTexture!==null||Ce.envMap!==Re||G.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ve.numPlanes||Ce.numIntersection!==ve.numIntersection)||Ce.vertexAlphas!==He||Ce.vertexTangents!==Ve||Ce.morphTargets!==Ue||Ce.morphNormals!==Ke||Ce.morphColors!==et||Ce.toneMapping!==tt||Ce.morphTargetsCount!==it)&&(Oi=!0):(Oi=!0,Ce.__version=G.version);let Dt=Ce.currentProgram;Oi===!0&&(Dt=sa(G,I,L));let Zi=!1,wt=!1,Dr=!1,Qe=Dt.getUniforms(),jt=Ce.uniforms;if(te.useProgram(Dt.program)&&(Zi=!0,wt=!0,Dr=!0),G.id!==O&&(O=G.id,wt=!0),Zi||S!==y){te.buffers.depth.getReversed()?(Me.copy(y.projectionMatrix),_c(Me),xc(Me),Qe.setValue(A,"projectionMatrix",Me)):Qe.setValue(A,"projectionMatrix",y.projectionMatrix),Qe.setValue(A,"viewMatrix",y.matrixWorldInverse);let Tt=Qe.map.cameraPosition;Tt!==void 0&&Tt.setValue(A,Ie.setFromMatrixPosition(y.matrixWorld)),Te.logarithmicDepthBuffer&&Qe.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Qe.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,wt=!0,Dr=!0)}if(L.isSkinnedMesh){Qe.setOptional(A,L,"bindMatrix"),Qe.setOptional(A,L,"bindMatrixInverse");let Tt=L.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Qe.setValue(A,"boneTexture",Tt.boneTexture,be))}L.isBatchedMesh&&(Qe.setOptional(A,L,"batchingTexture"),Qe.setValue(A,"batchingTexture",L._matricesTexture,be),Qe.setOptional(A,L,"batchingIdTexture"),Qe.setValue(A,"batchingIdTexture",L._indirectTexture,be),Qe.setOptional(A,L,"batchingColorTexture"),L._colorsTexture!==null&&Qe.setValue(A,"batchingColorTexture",L._colorsTexture,be));let Or=V.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&Ne.update(L,V,Dt),(wt||Ce.receiveShadow!==L.receiveShadow)&&(Ce.receiveShadow=L.receiveShadow,Qe.setValue(A,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(jt.envMap.value=Re,jt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(jt.envMapIntensity.value=I.environmentIntensity),wt&&(Qe.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Ah(jt,Dr),oe&&G.fog===!0&&ie.refreshFogUniforms(jt,oe),ie.refreshMaterialUniforms(jt,G,ee,X,m.state.transmissionRenderTarget[y.id]),za.upload(A,eo(Ce),jt,be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(za.upload(A,eo(Ce),jt,be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Qe.setValue(A,"center",L.center),Qe.setValue(A,"modelViewMatrix",L.modelViewMatrix),Qe.setValue(A,"normalMatrix",L.normalMatrix),Qe.setValue(A,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Tt=G.uniformsGroups;for(let Fr=0,vi=Tt.length;Fr<vi;Fr++){let io=Tt[Fr];Be.update(io,Dt),Be.bind(io,Dt)}}return Dt}function Ah(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function wh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,I,V){_e.get(y.texture).__webglTexture=I,_e.get(y.depthTexture).__webglTexture=V;let G=_e.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){let V=_e.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,V=0){R=y,z=I,C=V;let G=!0,L=null,oe=!1,Se=!1;if(y){let we=_e.get(y);if(we.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)be.setupRenderTarget(y);else if(we.__hasExternalTextures)be.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ve=y.depthTexture;if(we.__boundDepthTexture!==Ve){if(Ve!==null&&_e.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(y)}}let Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);let He=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[I])?L=He[I][V]:L=He[I],oe=!0):y.samples>0&&be.useMultisampledRTT(y)===!1?L=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?L=He[V]:L=He,M.copy(y.viewport),w.copy(y.scissor),B=y.scissorTest}else M.copy(me).multiplyScalar(ee).floor(),w.copy(Oe).multiplyScalar(ee).floor(),B=ze;if(te.bindFramebuffer(A.FRAMEBUFFER,L)&&G&&te.drawBuffers(y,L),te.viewport(M),te.scissor(w),te.setScissorTest(B),oe){let we=_e.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,V)}else if(Se){let we=_e.get(y.texture),Re=I||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.__webglTexture,V||0,Re)}O=-1},this.readRenderTargetPixels=function(y,I,V,G,L,oe,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){te.bindFramebuffer(A.FRAMEBUFFER,we);try{let Re=y.texture,He=Re.format,Ve=Re.type;if(!Te.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-G&&V>=0&&V<=y.height-L&&A.readPixels(I,V,G,L,xe.convert(He),xe.convert(Ve),oe)}finally{let Re=R!==null?_e.get(R).__webglFramebuffer:null;te.bindFramebuffer(A.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,G,L,oe,Se){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){let Re=y.texture,He=Re.format,Ve=Re.type;if(!Te.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-G&&V>=0&&V<=y.height-L){te.bindFramebuffer(A.FRAMEBUFFER,we);let Ue=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.bufferData(A.PIXEL_PACK_BUFFER,oe.byteLength,A.STREAM_READ),A.readPixels(I,V,G,L,xe.convert(He),xe.convert(Ve),0);let Ke=R!==null?_e.get(R).__webglFramebuffer:null;te.bindFramebuffer(A.FRAMEBUFFER,Ke);let et=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await vc(A,et,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,oe),A.deleteBuffer(Ue),A.deleteSync(et),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,V=0){y.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);let G=Math.pow(2,-V),L=Math.floor(y.image.width*G),oe=Math.floor(y.image.height*G),Se=I!==null?I.x:0,we=I!==null?I.y:0;be.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,V,0,0,Se,we,L,oe),te.unbindTexture()},this.copyTextureToTexture=function(y,I,V=null,G=null,L=0){y.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],I=arguments[2],L=arguments[3]||0,V=null);let oe,Se,we,Re,He,Ve,Ue,Ke,et,tt=y.isCompressedTexture?y.mipmaps[L]:y.image;V!==null?(oe=V.max.x-V.min.x,Se=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,He=V.min.y,Ve=V.isBox3?V.min.z:0):(oe=tt.width,Se=tt.height,we=tt.depth||1,Re=0,He=0,Ve=0),G!==null?(Ue=G.x,Ke=G.y,et=G.z):(Ue=0,Ke=0,et=0);let ot=xe.convert(I.format),it=xe.convert(I.type),Ce;I.isData3DTexture?(be.setTexture3D(I,0),Ce=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(be.setTexture2DArray(I,0),Ce=A.TEXTURE_2D_ARRAY):(be.setTexture2D(I,0),Ce=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);let Di=A.getParameter(A.UNPACK_ROW_LENGTH),Oi=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Dt=A.getParameter(A.UNPACK_SKIP_PIXELS),Zi=A.getParameter(A.UNPACK_SKIP_ROWS),wt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,tt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,tt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Re),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ve);let Dr=y.isDataArrayTexture||y.isData3DTexture,Qe=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let jt=_e.get(y),Or=_e.get(I),Tt=_e.get(jt.__renderTarget),Fr=_e.get(Or.__renderTarget);te.bindFramebuffer(A.READ_FRAMEBUFFER,Tt.__webglFramebuffer),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let vi=0;vi<we;vi++)Dr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,L,Ve+vi),y.isDepthTexture?(Qe&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(I).__webglTexture,L,et+vi),A.blitFramebuffer(Re,He,oe,Se,Ue,Ke,oe,Se,A.DEPTH_BUFFER_BIT,A.NEAREST)):Qe?A.copyTexSubImage3D(Ce,L,Ue,Ke,et+vi,Re,He,oe,Se):A.copyTexSubImage2D(Ce,L,Ue,Ke,et+vi,Re,He,oe,Se);te.bindFramebuffer(A.READ_FRAMEBUFFER,null),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Qe?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(Ce,L,Ue,Ke,et,oe,Se,we,ot,it,tt.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(Ce,L,Ue,Ke,et,oe,Se,we,ot,tt.data):A.texSubImage3D(Ce,L,Ue,Ke,et,oe,Se,we,ot,it,tt):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,L,Ue,Ke,oe,Se,ot,it,tt.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,L,Ue,Ke,tt.width,tt.height,ot,tt.data):A.texSubImage2D(A.TEXTURE_2D,L,Ue,Ke,oe,Se,ot,it,tt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Di),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Oi),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Dt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Zi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,wt),L===0&&I.generateMipmaps&&A.generateMipmap(Ce),te.unbindTexture()},this.copyTextureToTexture3D=function(y,I,V=null,G=null,L=0){return y.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,y=arguments[2],I=arguments[3],L=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,V,G,L)},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&be.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?be.setTextureCube(y,0):y.isData3DTexture?be.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?be.setTexture2DArray(y,0):be.setTexture2D(y,0),te.unbindTexture()},this.resetState=function(){z=0,C=0,R=null,te.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}},Pm=class xh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ge(t),this.near=i,this.far=r}clone(){return new xh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ci=class extends zt{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},$t=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(n-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new pe:new U);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new U,r=[],a=[],n=[],s=new U,o=new st;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new U)}a[0]=new U,n[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(r[d-1],r[d]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(vt(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,p))}n[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(vt(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Is=class extends $t{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new pe){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lm=class extends Is{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Ns(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,p*=c,a(s,o,d,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var Va=new U,Us=new Ns,Ds=new Ns,Os=new Ns,Im=class extends $t{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Va.subVectors(r[0],r[1]).add(r[0]),l=Va);let c=r[s%a],u=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Va.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Va),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),Us.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,v),Ds.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,v),Os.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(Us.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Ds.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Os.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(Us.calc(o),Ds.calc(o),Os.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dl(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Nm(e,t){let i=1-e;return i*i*t}function Um(e,t){return 2*(1-e)*e*t}function Dm(e,t){return e*e*t}function Kr(e,t,i,r){return Nm(e,t)+Um(e,i)+Dm(e,r)}function Om(e,t){let i=1-e;return i*i*i*t}function Fm(e,t){let i=1-e;return 3*i*i*e*t}function Bm(e,t){return 3*(1-e)*e*e*t}function zm(e,t){return e*e*e*t}function Zr(e,t,i,r,a){return Om(e,t)+Fm(e,i)+Bm(e,r)+zm(e,a)}var Ol=class extends $t{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Zr(e,r.x,a.x,n.x,s.x),Zr(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hm=class extends $t{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Zr(e,r.x,a.x,n.x,s.x),Zr(e,r.y,a.y,n.y,s.y),Zr(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fl=class extends $t{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vm=class extends $t{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends $t{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Kr(e,r.x,a.x,n.x),Kr(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gm=class extends $t{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Kr(e,r.x,a.x,n.x),Kr(e,r.y,a.y,n.y),Kr(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(Dl(s,o.x,l.x,h.x,c.x),Dl(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},Fs=Object.freeze({__proto__:null,ArcCurve:Lm,CatmullRomCurve3:Im,CubicBezierCurve:Ol,CubicBezierCurve3:Hm,EllipseCurve:Is,LineCurve:Fl,LineCurve3:Vm,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:Gm,SplineCurve:zl}),km=class extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Fs[r.type]().fromJSON(r))}return this}},Pi=class extends km{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Fl(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Bl(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Ol(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new zl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Is(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wm=class yh extends qt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new U,c=new pe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[d]/t+1)/2,c.y=(s[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xm=class Sh extends qt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],p=[],g=0,v=[],m=r/2,f=0;E(),s===!1&&(t>0&&x(!0),i>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(p,2));function E(){let T=new U,z=new U,C=0,R=(i-t)/r;for(let O=0;O<=n;O++){let S=[],M=O/n,w=M*(i-t)+t;for(let B=0;B<=a;B++){let H=B/a,k=H*l+o,j=Math.sin(k),X=Math.cos(k);z.x=w*j,z.y=-M*r+m,z.z=w*X,u.push(z.x,z.y,z.z),T.set(j,R,X).normalize(),d.push(T.x,T.y,T.z),p.push(H,1-M),S.push(g++)}v.push(S)}for(let O=0;O<a;O++)for(let S=0;S<n;S++){let M=v[S][O],w=v[S+1][O],B=v[S+1][O+1],H=v[S][O+1];(t>0||S!==0)&&(c.push(M,w,H),C+=3),(i>0||S!==n-1)&&(c.push(w,B,H),C+=3)}h.addGroup(f,C,0),f+=C}function x(T){let z=g,C=new pe,R=new U,O=0,S=T===!0?t:i,M=T===!0?1:-1;for(let B=1;B<=a;B++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let w=g;for(let B=0;B<=a;B++){let H=B/a*l+o,k=Math.cos(H),j=Math.sin(H);R.x=S*j,R.y=m*M,R.z=S*k,u.push(R.x,R.y,R.z),d.push(0,M,0),C.x=k*.5+.5,C.y=j*.5*M+.5,p.push(C.x,C.y),g++}for(let B=0;B<a;B++){let H=z+B,k=w+B;T===!0?c.push(k,k+1,H):c.push(k+1,k,H),O+=3}h.addGroup(f,O,T===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Li=class extends Pi{constructor(e){super(e),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Pi().fromJSON(r))}return this}},jm={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Hl(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,p;if(r&&(n=Zm(e,t,n,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return $r(n,s,i,o,l,p,0),s}};function Hl(e,t,i,r,a){let n,s;if(a===lg(e,t,i,r)>0)for(n=t;n<i;n+=r)s=kl(n,e[n],e[n+1],s);else for(n=i-r;n>=t;n-=r)s=kl(n,e[n],e[n+1],s);return s&&Ga(s,s.next)&&(ea(s),s=s.next),s}function Ki(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Ga(i,i.next)||rt(i.prev,i,i.next)===0)){if(ea(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function $r(e,t,i,r,a,n,s){if(!e)return;!s&&n&&ig(e,r,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?qm(e,r,a,n):Ym(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),ea(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=Jm(Ki(e),t,i),$r(e,t,i,r,a,n,2)):s===2&&Km(e,t,i,r,a,n):$r(Ki(e),t,i,r,a,n,1);break}}}function Ym(e){let t=e.prev,i=e,r=e.next;if(rt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&Cr(a,o,n,l,s,h,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qm(e,t,i,r){let a=e.prev,n=e,s=e.next;if(rt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,f=Bs(p,g,t,i,r),E=Bs(v,m,t,i,r),x=e.prevZ,T=e.nextZ;for(;x&&x.z>=f&&T&&T.z<=E;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&Cr(o,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0||(x=x.prevZ,T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==a&&T!==s&&Cr(o,c,l,u,h,d,T.x,T.y)&&rt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==a&&x!==s&&Cr(o,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;T&&T.z<=E;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==a&&T!==s&&Cr(o,c,l,u,h,d,T.x,T.y)&&rt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Jm(e,t,i){let r=e;do{let a=r.prev,n=r.next.next;!Ga(a,n)&&Vl(a,r,r.next,n)&&Qr(a,n)&&Qr(n,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(n.i/i|0),ea(r),ea(r.next),r=e=n),r=r.next}while(r!==e);return Ki(r)}function Km(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&ng(s,o)){let l=Gl(s,o);s=Ki(s,s.next),l=Ki(l,l.next),$r(s,t,i,r,a,n,0),$r(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Zm(e,t,i,r){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=Hl(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(ag(h));for(a.sort($m),n=0;n<a.length;n++)i=Qm(a[n],i);return i}function $m(e,t){return e.x-t.x}function Qm(e,t){let i=eg(e,t);if(!i)return t;let r=Gl(i,e);return Ki(r,r.next),Ki(i,i.next)}function eg(e,t){let i=t,r=-1/0,a,n=e.x,s=e.y;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){let d=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do n>=i.x&&i.x>=l&&n!==i.x&&Cr(s<h?n:r,s,l,h,s<h?r:n,s,i.x,i.y)&&(u=Math.abs(s-i.y)/(n-i.x),Qr(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&tg(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function tg(e,t){return rt(e.prev,e,t.prev)<0&&rt(t.next,e,e.next)<0}function ig(e,t,i,r){let a=e;do a.z===0&&(a.z=Bs(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,rg(a)}function rg(e){let t,i,r,a,n,s,o,l,h=1;do{for(i=e,e=null,n=null,s=0;i;){for(s++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;i=r}n.nextZ=null,h*=2}while(s>1);return e}function Bs(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ag(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Cr(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function ng(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!sg(e,t)&&(Qr(e,t)&&Qr(t,e)&&og(e,t)&&(rt(e.prev,e,t.prev)||rt(e,t.prev,t))||Ga(e,t)&&rt(e.prev,e,e.next)>0&&rt(t.prev,t,t.next)>0)}function rt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Ga(e,t){return e.x===t.x&&e.y===t.y}function Vl(e,t,i,r){let a=Wa(rt(e,t,i)),n=Wa(rt(e,t,r)),s=Wa(rt(i,r,e)),o=Wa(rt(i,r,t));return!!(a!==n&&s!==o||a===0&&ka(e,i,t)||n===0&&ka(e,r,t)||s===0&&ka(i,e,r)||o===0&&ka(i,t,r))}function ka(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Wa(e){return e>0?1:e<0?-1:0}function sg(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Vl(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Qr(e,t){return rt(e.prev,e,e.next)<0?rt(e,t,e.next)>=0&&rt(e,e.prev,t)>=0:rt(e,t,e.prev)<0||rt(e,e.next,t)<0}function og(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Gl(e,t){let i=new zs(e.i,e.x,e.y),r=new zs(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function kl(e,t,i,r){let a=new zs(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function ea(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function zs(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lg(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Pr=class Mh{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Mh.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Wl(t),Xl(r,t);let s=t.length;i.forEach(Wl);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Xl(r,i[l]);let o=jm.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Wl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Xl(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Hs=class Eh extends qt{constructor(t=new Li([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new ft(a,3)),this.setAttribute("uv",new ft(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,E=i.UVGenerator!==void 0?i.UVGenerator:hg,x,T=!1,z,C,R,O;f&&(x=f.getSpacedPoints(c),T=!0,d=!1,z=f.computeFrenetFrames(c,!1),C=new U,R=new U,O=new U),d||(m=0,p=0,g=0,v=0);let S=o.extractPoints(h),M=S.shape,w=S.holes;if(!Pr.isClockWise(M)){M=M.reverse();for(let q=0,le=w.length;q<le;q++){let A=w[q];Pr.isClockWise(A)&&(w[q]=A.reverse())}}let B=Pr.triangulateShape(M,w),H=M;for(let q=0,le=w.length;q<le;q++){let A=w[q];M=M.concat(A)}function k(q,le,A){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(le,A)}let j=M.length,X=B.length;function ee(q,le,A){let Ee,ce,Te,te=q.x-le.x,De=q.y-le.y,_e=A.x-q.x,be=A.y-q.y,b=te*te+De*De,_=te*be-De*_e;if(Math.abs(_)>Number.EPSILON){let D=Math.sqrt(b),Z=Math.sqrt(_e*_e+be*be),F=le.x-De/D,N=le.y+te/D,ie=A.x-be/Z,K=A.y+_e/Z,re=((ie-F)*be-(K-N)*_e)/(te*be-De*_e);Ee=F+te*re-q.x,ce=N+De*re-q.y;let ve=Ee*Ee+ce*ce;if(ve<=2)return new pe(Ee,ce);Te=Math.sqrt(ve/2)}else{let D=!1;te>Number.EPSILON?_e>Number.EPSILON&&(D=!0):te<-Number.EPSILON?_e<-Number.EPSILON&&(D=!0):Math.sign(De)===Math.sign(be)&&(D=!0),D?(Ee=-De,ce=te,Te=Math.sqrt(b)):(Ee=te,ce=De,Te=Math.sqrt(b/2))}return new pe(Ee/Te,ce/Te)}let W=[];for(let q=0,le=H.length,A=le-1,Ee=q+1;q<le;q++,A++,Ee++)A===le&&(A=0),Ee===le&&(Ee=0),W[q]=ee(H[q],H[A],H[Ee]);let ae=[],me,Oe=W.concat();for(let q=0,le=w.length;q<le;q++){let A=w[q];me=[];for(let Ee=0,ce=A.length,Te=ce-1,te=Ee+1;Ee<ce;Ee++,Te++,te++)Te===ce&&(Te=0),te===ce&&(te=0),me[Ee]=ee(A[Ee],A[Te],A[te]);ae.push(me),Oe=Oe.concat(me)}for(let q=0;q<m;q++){let le=q/m,A=p*Math.cos(le*Math.PI/2),Ee=g*Math.sin(le*Math.PI/2)+v;for(let ce=0,Te=H.length;ce<Te;ce++){let te=k(H[ce],W[ce],Ee);Me(te.x,te.y,-A)}for(let ce=0,Te=w.length;ce<Te;ce++){let te=w[ce];me=ae[ce];for(let De=0,_e=te.length;De<_e;De++){let be=k(te[De],me[De],Ee);Me(be.x,be.y,-A)}}}let ze=g+v;for(let q=0;q<j;q++){let le=d?k(M[q],Oe[q],ze):M[q];T?(R.copy(z.normals[0]).multiplyScalar(le.x),C.copy(z.binormals[0]).multiplyScalar(le.y),O.copy(x[0]).add(R).add(C),Me(O.x,O.y,O.z)):Me(le.x,le.y,0)}for(let q=1;q<=c;q++)for(let le=0;le<j;le++){let A=d?k(M[le],Oe[le],ze):M[le];T?(R.copy(z.normals[q]).multiplyScalar(A.x),C.copy(z.binormals[q]).multiplyScalar(A.y),O.copy(x[q]).add(R).add(C),Me(O.x,O.y,O.z)):Me(A.x,A.y,u/c*q)}for(let q=m-1;q>=0;q--){let le=q/m,A=p*Math.cos(le*Math.PI/2),Ee=g*Math.sin(le*Math.PI/2)+v;for(let ce=0,Te=H.length;ce<Te;ce++){let te=k(H[ce],W[ce],Ee);Me(te.x,te.y,u+A)}for(let ce=0,Te=w.length;ce<Te;ce++){let te=w[ce];me=ae[ce];for(let De=0,_e=te.length;De<_e;De++){let be=k(te[De],me[De],Ee);T?Me(be.x,be.y+x[c-1].y,x[c-1].x+A):Me(be.x,be.y,u+A)}}}Y(),ne();function Y(){let q=a.length/3;if(d){let le=0,A=j*le;for(let Ee=0;Ee<X;Ee++){let ce=B[Ee];de(ce[2]+A,ce[1]+A,ce[0]+A)}le=c+m*2,A=j*le;for(let Ee=0;Ee<X;Ee++){let ce=B[Ee];de(ce[0]+A,ce[1]+A,ce[2]+A)}}else{for(let le=0;le<X;le++){let A=B[le];de(A[2],A[1],A[0])}for(let le=0;le<X;le++){let A=B[le];de(A[0]+j*c,A[1]+j*c,A[2]+j*c)}}r.addGroup(q,a.length/3-q,0)}function ne(){let q=a.length/3,le=0;Ae(H,le),le+=H.length;for(let A=0,Ee=w.length;A<Ee;A++){let ce=w[A];Ae(ce,le),le+=ce.length}r.addGroup(q,a.length/3-q,1)}function Ae(q,le){let A=q.length;for(;--A>=0;){let Ee=A,ce=A-1;ce<0&&(ce=q.length-1);for(let Te=0,te=c+m*2;Te<te;Te++){let De=j*Te,_e=j*(Te+1),be=le+Ee+De,b=le+ce+De,_=le+ce+_e,D=le+Ee+_e;Ie(be,b,_,D)}}}function Me(q,le,A){l.push(q),l.push(le),l.push(A)}function de(q,le,A){We(q),We(le),We(A);let Ee=a.length/3,ce=E.generateTopUV(r,a,Ee-3,Ee-2,Ee-1);Fe(ce[0]),Fe(ce[1]),Fe(ce[2])}function Ie(q,le,A,Ee){We(q),We(le),We(Ee),We(le),We(A),We(Ee);let ce=a.length/3,Te=E.generateSideWallUV(r,a,ce-6,ce-3,ce-2,ce-1);Fe(Te[0]),Fe(Te[1]),Fe(Te[3]),Fe(Te[1]),Fe(Te[2]),Fe(Te[3])}function We(q){a.push(l[q*3+0]),a.push(l[q*3+1]),a.push(l[q*3+2])}function Fe(q){n.push(q.x),n.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return cg(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Fs[a.type]().fromJSON(a)),new Eh(r,t.options)}},hg={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new pe(n,s),new pe(o,l),new pe(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],v=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new pe(s,1-l),new pe(h,1-u),new pe(d,1-g),new pe(v,1-f)]:[new pe(o,1-l),new pe(c,1-u),new pe(p,1-g),new pe(m,1-f)]}};function cg(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Vs=class Th extends qt{constructor(t=new Li([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(n,3)),this.setAttribute("uv",new ft(s,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;Pr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let E=g[m];Pr.isClockWise(E)===!0&&(g[m]=E.reverse())}let v=Pr.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let E=g[m];p=p.concat(E)}for(let m=0,f=p.length;m<f;m++){let E=p[m];a.push(E.x,E.y,0),n.push(0,0,1),s.push(E.x,E.y)}for(let m=0,f=v.length;m<f;m++){let E=v[m],x=E[0]+u,T=E[1]+u,z=E[2]+u;r.push(x,T,z),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return ug(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Th(r,t.curveSegments)}};function ug(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var di=class extends jr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dg=class extends di{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Xa(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function pg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var ja=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fg=class extends ja{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Mo:a=e,s=2*t-i;break;case Eo:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Mo:n=e,o=2*i-t;break;case Eo:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,m=-u*v+2*u*g-u*p,f=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,E=(-1-d)*v+(1.5+d)*g+.5*p,x=d*v-d*g;for(let T=0;T!==s;++T)a[T]=m*n[h+T]+f*n[l+T]+E*n[o+T]+x*n[c+T];return a}},mg=class extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},gg=class extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case jn:t=this.InterpolantFactoryMethodLinear;break;case Yn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return jn;case this.InterpolantFactoryMethodSmooth:return Yn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&pg(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Yn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,u=n*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};pi.prototype.TimeBufferType=Float32Array,pi.prototype.ValueBufferType=Float32Array,pi.prototype.DefaultInterpolation=jn;var ta=class extends pi{constructor(e,t,i){super(e,t,i)}};ta.prototype.ValueTypeName="bool",ta.prototype.ValueBufferType=Array,ta.prototype.DefaultInterpolation=ma,ta.prototype.InterpolantFactoryMethodLinear=void 0,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var vg=class extends pi{};vg.prototype.ValueTypeName="color";var _g=class extends pi{};_g.prototype.ValueTypeName="number";var xg=class extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)dr.slerpFlat(a,0,n,l-s,n,l,o);return a}},jl=class extends pi{InterpolantFactoryMethodLinear(e){return new xg(this.times,this.values,this.getValueSize(),e)}};jl.prototype.ValueTypeName="quaternion",jl.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends pi{constructor(e,t,i){super(e,t,i)}};ia.prototype.ValueTypeName="string",ia.prototype.ValueBufferType=Array,ia.prototype.DefaultInterpolation=ma,ia.prototype.InterpolantFactoryMethodLinear=void 0,ia.prototype.InterpolantFactoryMethodSmooth=void 0;var yg=class extends pi{};yg.prototype.ValueTypeName="vector";var Sg=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},Mg=new Sg,Eg=class{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Eg.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yl=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gs=new st,ql=new U,Jl=new U,Tg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),Gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bg=class extends Tg{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ag=class extends Yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wg=class extends Yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ks="\\[\\]\\.:\\/",Rg=new RegExp("["+ks+"]","g"),Ws="[^"+ks+"]",Cg="[^"+ks.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Ws),Lg=/(WCOD+)?/.source.replace("WCOD",Cg),Ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ws),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ws),Ug=new RegExp("^"+Pg+Lg+Ig+Ng+"$"),Dg=["material","materials","bones","map"],Og=class{constructor(e,t,i){let r=i||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},nt=class Ur{constructor(t,i,r){this.path=i,this.parsedPath=r||Ur.parseTrackName(i),this.node=Ur.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Ur.Composite(t,i,r):new Ur(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(t){let i=Ug.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Dg.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Ur.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=Og,nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ov=new Float32Array(1),Kl=new st,Fg=class{constructor(e,t,i=0,r=1/0){this.ray=new zo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(e,t=!0,i=[]){return Xs(e,this,i,t),i.sort(Zl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Xs(e[r],this,i,t);return i.sort(Zl),i}};function Zl(e,t){return e.distance-t.distance}function Xs(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Xs(n[s],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ra=new U;function Ut(e,t,i,r,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;ra.copy(t),ra[r]=0,ra.normalize();let h=.5*s/(s+o),c=1-ra.angleTo(e)/l;return Math.sign(ra[i])===1?c*h:o/(s+o)+h+h*(1-c)}var Bg=class extends ki{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let s=new U,o=new U,l=new U(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new U,g=.5/r;for(let v=0,m=0;v<h.length;v+=3,m+=2)switch(s.fromArray(h,v),o.copy(s),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(s.x)+o.x*a,h[v+1]=l.y*Math.sign(s.y)+o.y*a,h[v+2]=l.z*Math.sign(s.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:p.set(1,0,0),u[m+0]=Ut(p,o,"z","y",a,i),u[m+1]=1-Ut(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[m+0]=1-Ut(p,o,"z","y",a,i),u[m+1]=1-Ut(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[m+0]=1-Ut(p,o,"x","z",a,e),u[m+1]=Ut(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[m+0]=1-Ut(p,o,"x","z",a,e),u[m+1]=1-Ut(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[m+0]=1-Ut(p,o,"x","y",a,e),u[m+1]=1-Ut(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[m+0]=Ut(p,o,"x","y",a,e),u[m+1]=1-Ut(p,o,"y","x",a,t);break}}};function zg(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new qt,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(t){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in n){let u=$l(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in s){let u=s[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<s[c].length;++v)p.push(s[c][v][d]);let g=$l(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function $l(e){let t,i,r,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*i}let s=new t(n),o=new kt(s,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/i;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<i;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else s.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var ke="#101010",Ye="#f4f3ee",Ya='"DT Punk", Impact, sans-serif',Hg='"Inter Tight", "Arial Black", Arial, sans-serif',Ql=()=>{let e=document.createElement("canvas");return e.width=e.height=256,e};function Pt(e,t,i){e.beginPath(),t.forEach(([r,a],n)=>n?e.lineTo(r,a):e.moveTo(r,a)),e.closePath(),i&&(e.fillStyle=i,e.fill())}function pt(e,t,i,r,a,n,s){e.beginPath(),e.roundRect(t,i,r,a,n),s&&(e.fillStyle=s,e.fill())}function _t(e,t,i,r,a){e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function Lr(e,t,i,r,a){let n=[];for(let s=0;s<t*2;s++){let o=s/(t*2)*Math.PI*2-Math.PI/2,l=s%2?r:i;n.push([128+Math.cos(o)*l,128+Math.sin(o)*l])}Pt(e,n,a)}function Ii(e,t,{y:i=128,width:r=190,size:a=60,color:n=ke,font:s=Hg,weight:o=900,gap:l=1}={}){let h=a,c=()=>{e.font=`${o} ${h}px ${s}`};for(c();h>12&&Math.max(...t.map(d=>e.measureText(d).width))>r;)h-=2,c();e.textAlign="center",e.textBaseline="middle",e.fillStyle=n;let u=h*l;t.forEach((d,p)=>e.fillText(d,128,i+(p-(t.length-1)/2)*u))}function js(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?ke:Ye:e===ke?Ye:ke}var Vg={ask(e,t){pt(e,26,40,204,140,34,t),Pt(e,[[70,170],[58,226],[124,172]],t),Ii(e,["ASK","DEN"],{y:110,size:62,color:js(t),font:Ya,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),pt(e,18,84,220,88,44,t),pt(e,88,84,80,88,4,Ye);for(let[i,r]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])_t(e,i,r,5,ke);e.restore(),Ii(e,["OUCH"],{y:222,size:44,font:Ya,weight:400,color:Ye})},camera(e,t){pt(e,28,76,200,130,16,ke),pt(e,86,52,70,34,8,ke),_t(e,128,142,48,Ye),_t(e,128,142,34,ke),_t(e,116,130,9,Ye),_t(e,200,98,9,t)},file(e,t){Pt(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],Ye),Pt(e,[[160,26],[200,66],[160,66]],"#9c9c98"),Ii(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===Ye?ke:t,gap:1.1})},cursor(e,t){Lr(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),Pt(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],ke),e.lineWidth=2.4,e.strokeStyle=Ye,e.stroke(),e.restore()},receipt(e,t){let i=[[52,22],[204,22]];for(let r=0;r<=8;r++)i.push([204-r*19,232-(r%2?14:0)]);Pt(e,i,Ye),e.fillStyle="#7d7d79";for(let r=0;r<4;r++)e.fillRect(70,48+r*22,r%2?76:116,8);Ii(e,["$$$"],{y:176,size:62,color:t===Ye?ke:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=Ye,e.fill(),Pt(e,[[176,186],[214,236],[136,200]],Ye),Ii(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===Ye?ke:t,font:Ya,weight:400})},root(e){pt(e,24,44,208,168,8,ke),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=Ye,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),Ii(e,["x"],{y:130,width:60,size:60,color:Ye,font:Ya,weight:400})},sun(e,t){Lr(e,14,118,84,t),_t(e,128,128,70,Ye),pt(e,66,100,54,36,12,ke),pt(e,136,100,54,36,12,ke),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=ke,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){Lr(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),pt(e,-16,-40,32,130,12,ke),_t(e,0,-56,38,ke),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),pt(e,-92,-48,184,96,12,Ye),e.fillStyle=t===Ye?ke:t,e.fillRect(-24,-48,116,96),e.restore(),Ii(e,["CTRL+Z"],{width:150,size:36,color:ke})},pencil(e,t){e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=ke,e.fillRect(-112,-22,28,44),Pt(e,[[52,-22],[100,0],[52,22]],Ye),Pt(e,[[84,-7],[100,0],[84,7]],ke),e.setTransform(1,0,0,1,0,0)},car(e,t){pt(e,22,118,212,64,22,t),Pt(e,[[66,122],[96,72],[168,72],[198,122]],t),Pt(e,[[86,118],[104,86],[128,86],[128,118]],ke),Pt(e,[[138,118],[138,86],[162,86],[180,118]],ke),_t(e,78,184,24,ke),_t(e,180,184,24,ke),_t(e,78,184,9,Ye),_t(e,180,184,9,Ye)},house(e,t){Pt(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=Ye,e.fillRect(52,122,152,100),e.fillStyle=ke,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){pt(e,26,26,204,204,26,ke),e.lineWidth=7,e.strokeStyle=Ye,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[i,r]of[[74,80],[72,180],[184,86],[182,176]])_t(e,i,r,18,t)},fork(e,t){_t(e,128,128,112,Ye),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===Ye?"#b5b5b1":t,e.stroke(),e.fillStyle=ke,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),pt(e,84,106,36,22,10,ke),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){Lr(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=ke,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){pt(e,22,62,212,132,66,ke),[28,58,92,46,76,34,54,22].forEach((i,r)=>pt(e,52+r*21.5,128-i/2,11,i,5.5,r%3===2?t:Ye))},bot(e,t){pt(e,40,62,176,152,28,Ye),e.fillStyle=ke,e.fillRect(122,28,12,38),_t(e,128,26,12,t===Ye?ke:t),_t(e,94,124,18,ke),_t(e,162,124,18,ke),e.fillStyle=ke,e.fillRect(88,172,80,12)}},eh=[(e,t)=>(Lr(e,16,122,96,t),js(t)),e=>(pt(e,14,62,228,132,12,ke),Ye),(e,t)=>(_t(e,128,128,116,t),js(t)),e=>(pt(e,14,66,228,124,62,Ye),ke),e=>(Lr(e,12,122,100,ke),Ye),(e,t)=>(pt(e,18,52,220,152,8,Ye),e.strokeStyle=t===Ye?ke:t,e.lineWidth=10,e.strokeRect(32,66,192,124),ke)];function Gg(e,t,i,r){let a=eh[i%eh.length](e,r),n=[];for(let s of t.split(" ")){let o=n[n.length-1];o&&(o+" "+s).length<=9?n[n.length-1]=`${o} ${s}`:n.push(s)}Ii(e,n,{color:a,width:i%3===2?170:186,size:66,gap:1.04})}var kg={portfolio:["ask","MAKE THE LOGO BIGGER"],basepoint:["bandaid","TAKE YOUR VITAMINS"],"street-observations":["camera","SAY CHEESE"],template:["file","BE KIND REWIND"],prime:["cursor","ONE MORE CLICK"],sabsus:["receipt","CA-CHING!"],janna:["bonjour","MERCI BEAUCOUP"],"root-framer":["root","SHOW YOUR WORK"],sunfreaks:["sun","WEAR SUNSCREEN"],airtexno:["wrench","IT WORKS ON MY MACHINE"],"concept-undo-studio":["eraser","NEW RELEASE"],"concept-root-square-explorations":["pencil","STILL A SKETCH"],"concept-al-futtaim-themes":["car","CAN IT POP MORE?"],mortgage:["house","SWEET LOAN"],node:["nodes","IF THIS THEN WHY"],restaurant:["fork","TABLE FOR TWO"],wallet:["scissors","BAD HAIR DAY"],wave:["wave","TURN IT UP"],"experiment-chat-portfolio":["bot","NOT A BOT"]};function Wg(e){let t=Ql(),i=t.getContext("2d"),r=9;for(let a=0;a<28;a++){let n=a/28*Math.PI*2;i.drawImage(e,Math.cos(n)*r,Math.sin(n)*r)}i.globalCompositeOperation="source-in",i.fillStyle=Ye,i.fillRect(0,0,256,256),i.globalCompositeOperation="source-over",i.drawImage(e,0,0),i.globalCompositeOperation="source-atop";for(let a=0;a<260;a++)i.globalAlpha=.1+Math.random()*.22,i.fillStyle=Math.random()<.5?"#000":"#fff",i.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2);return i.globalAlpha=1,i.globalCompositeOperation="source-over",t}function th(e){let t=Ql();return e(t.getContext("2d")),Wg(t)}function Xg(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,n=null;for(let o=0;o<r.length;o+=4){let l=r[o],h=r[o+1],c=r[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,n=[l,h,c])}if(a<60)return null;let s=238/Math.max(...n);return`rgb(${n.map(o=>Math.round(o*s)).join(",")})`}function jg(e,t=0,i=null){let r=kg[e];if(!r)return[];let[a,n]=r,s=i||Ye;return[th(o=>Vg[a](o,s)),th(o=>Gg(o,n,t,s))]}var aa=(e,t,i)=>Math.max(t,Math.min(i,e)),Mt=(e,t,i)=>e+(t-e)*i,ih=e=>e*e*(3-2*e);function rh(e,t=0){let i=new Ls;i.background=new Ge(526346);let r=(s,o,l,h,c,u)=>{let d=new St(new Kt(s,o),new Sr({color:new Ge(u,u,u),side:Yt}));d.position.set(l,h,c),d.lookAt(0,0,0),i.add(d)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2),t&&r(14,10,0,1,10,t);let a=new As(e),n=a.fromScene(i,.025).texture;return a.dispose(),n}function ah(e=256,t=3){let i=document.createElement("canvas");i.width=i.height=e;let r=i.getContext("2d"),a=r.createImageData(e,e);for(let s=0;s<a.data.length;s+=4){let o=120+Math.random()*90;a.data[s]=a.data[s+1]=a.data[s+2]=o,a.data[s+3]=255}r.putImageData(a,0,0);let n=new Ci(i);return n.wrapS=n.wrapT=la,n.repeat.set(t,t),n}var fi=(e,t,i,r,a=0,n=0,s=0)=>(a&&e.rotateX(a),n&&e.rotateY(n),s&&e.rotateZ(s),e.translate(t,i,r),e),Yg=e=>e.index?e.toNonIndexed():e,Ys=e=>{let t=e.map(Yg);return t.forEach(i=>{Object.keys(i.attributes).forEach(r=>{r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r)})}),zg(t)};function qa(e,t,i,r,a,n,s,o,l){return e.moveTo(t+n,i),e.lineTo(r-s,i),e.quadraticCurveTo(r,i,r,i+s),e.lineTo(r,a-o),e.quadraticCurveTo(r,a,r-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,i+n),e.quadraticCurveTo(t,i,t+n,i),e}function qs(e,t,i,r=0,a=0){return qa(new Li,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}function qg(e,t,i,r=0,a=0){return qa(new Pi,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}var mi=18.7,gi=10.3,Ja=2.5,Jg={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},Wt={w:7.9,h:4.9,y:-.15},Ka={x:5.25,y:-.15},Ni=(e,t,i=0)=>{let{x0:r,x1:a,y0:n,y1:s,outer:o,inner:l}=Jg,h=r-i,c=a+i,u=n-i,d=s+i,p=o+i*.6,g=l+i*.6,v=new e;return t<0?qa(v,-c,u,-h,d,p,g,g,p):qa(v,h,u,c,d,g,p,p,g)};function Kg(){let e=1024/mi,t=564/gi,i=1024/2048,r=E=>(E+mi/2)*e,a=E=>(gi/2-E)*t,n=()=>{let E=document.createElement("canvas");return E.width=1024,E.height=564,E},s=n(),o=n(),l=n(),h=s.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=E=>{let x=document.createElement("canvas");return x.width=x.height=6,E(x.getContext("2d")),x};h.fillStyle=h.createPattern(d(E=>{E.fillStyle="#050505",E.fillRect(0,0,6,6),E.fillStyle="#121212",E.fillRect(.5,.5,5,5),E.fillStyle="#1f1f1f",E.fillRect(.5,.5,5,1),E.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(E=>{E.fillStyle="#242424",E.fillRect(0,0,6,6),E.fillStyle="#c8c8c8",E.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=E=>{E.beginPath(),E.roundRect(r(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),E.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*i),h.fillStyle="#242424",h.fillRect(0,a(g)-3*i,1024,3*i),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*i);let v='"Inter Tight", Arial, sans-serif',m=(E,x)=>{E.fillStyle=x,E.font=`500 ${37*i}px ${v}`,E.textBaseline="middle","letterSpacing"in E&&(E.letterSpacing=`${4*i}px`),E.textAlign="right",E.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),a(4.35)),E.textAlign="left",E.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),a(4.35)),E.beginPath(),E.moveTo(r(0),a(4.72)),E.lineTo(r(.34),a(4.05)),E.lineTo(r(-.34),a(4.05)),E.closePath(),E.fill()};m(h,"#3a3a3a"),m(c,"#f0f0f0");for(let E=0;E<240;E++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*i*1.4;let x=Math.random()*1024,T=Math.random()*564,z=Math.random()*6.28,C=(10+Math.random()*120)*i;h.beginPath(),h.moveTo(x,T),h.lineTo(x+Math.cos(z)*C,T+Math.sin(z)*C),h.stroke()}for(let E=0;E<420;E++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let f=(E,x)=>{let T=new Ci(E);return x&&(T.colorSpace=lt),T.anisotropy=8,T};return{map:f(s,!0),bump:f(o),rough:f(l)}}function Zg(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let r=4;r<128;r+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,r,0,6.2832),t.stroke();let i=new Ci(e);return i.colorSpace=lt,i}function nh(e){let t=Ja/2,i=Kg(),r=new di({map:i.map,bumpMap:i.bump,bumpScale:1.2,roughnessMap:i.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new di({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:ah(256,5)}),n=new di({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),s=new di({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new di({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new di({map:Zg(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new dg({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=fi(new Bg(mi,gi,Ja-c,3,.14),0,0,-c/2),d=qs(mi-.06,gi-.06,.2);d.holes.push(Ni(Pi,-1),Ni(Pi,1));let p=new Hs(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,v=p.attributes.uv;for(let w=0;w<g.count;w++)v.setXY(w,(g.getX(w)+mi/2)/mi,(g.getY(w)+gi/2)/gi);p.translate(0,0,t-c);let m=(w,B)=>{let H=w;return H.holes.push(B),new Hs(H,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},f=[fi(m(Ni(Li,-1,.16),Ni(Pi,-1)),0,0,t),fi(m(Ni(Li,1,.16),Ni(Pi,1)),0,0,t),fi(m(qs(Wt.w+.36,Wt.h+.36,.16,0,Wt.y),qg(Wt.w+.06,Wt.h+.06,.08,0,Wt.y)),0,0,t),fi(new ki(mi-.5,.09,.06),0,3.5,t+.02)],E=new Li;E.absarc(0,0,.98,0,Math.PI*2,!1);let x=new Pi;x.absarc(0,0,.6,0,Math.PI*2,!0),E.holes.push(x);let T=[new Hs(E,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let w=0;w<6;w++){let B=w/6*Math.PI*2;T.push(fi(new ki(.2,.44,.1),Math.cos(B)*.46,Math.sin(B)*.46,.05,0,0,B+Math.PI/2))}T.push(fi(new Xm(.06,.06,.08,12),0,0,.04,Math.PI/2));let z=new Wm(1,56),C=Ys([new Vs(Ni(Li,-1),12),new Vs(Ni(Li,1),12)]);C.translate(0,0,t+.012);let R=qs(Wt.w,Wt.h,.06,0,0),O=new Vs(R,6),S=O.attributes.position,M=O.attributes.uv;for(let w=0;w<S.count;w++)M.setXY(w,S.getX(w)/Wt.w+.5,S.getY(w)/Wt.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:r,lips:Ys(f),gloss:n,floor:fi(new Kt(mi-.4,gi-.4),0,0,t-c+.004),cavity:s,hub:Ys(T),white:o,pack:z,packMat:l,glassGeo:C,glass:h,labelGeo:O,spineGeo:fi(new Kt(16.6,1.72),0,-gi/2-.006,-.08,Math.PI/2),stickerGeo:new Kt(1,1),hit:new ki(mi,gi,Ja)}}var $g=[{x:5.05,y:2.75,size:4.1},{x:-6.35,y:-2.85,size:4.5}],sh=e=>{let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);let r=new Ci(t);return r.colorSpace=lt,r},Ir=sh("#ffffff"),oh=sh("rgba(0,0,0,0)");function lh(e,t=0){let i=new Jr,r=(h,c)=>{let u=new St(h,c);return i.add(u),u};r(e.body,e.plastic),r(e.floor,e.cavity),r(e.slab,e.front),r(e.lips,e.gloss);let a=[-Ka.x,Ka.x].map(h=>{let c=r(e.pack,e.packMat);c.position.set(h,Ka.y,e.FRONT-e.WALL+.012);let u=r(e.hub,e.white);return u.position.set(h,Ka.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});r(e.glassGeo,e.glass);let n=()=>new di({map:Ir,emissiveMap:Ir,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),s=r(e.labelGeo,n());s.position.set(0,Wt.y,e.FRONT+.008),s.rotation.z=t;let o=r(e.spineGeo,n()),l=$g.map((h,c)=>{let u=r(e.stickerGeo,new di({map:oh,emissiveMap:oh,color:16777215,emissive:16777215,emissiveIntensity:.6,roughness:.42,envMap:e.env,envMapIntensity:.55,alphaTest:.5}));return u.position.set(h.x+t*18,h.y-t*12,e.FRONT+.03+c*.004),u.scale.setScalar(h.size),u.rotation.z=(c?-.16:.2)+t*9,u});return{group:i,reels:a,label:s,spine:o,stickers:l}}function Qg(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,n=[16,16,16];for(let l=0;l<r.length;l+=4){let h=r[l],c=r[l+1],u=r[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,n=[h,c,u])}if(a<60)return"#141414";let s=Math.max(...n),o=135/s;return`rgb(${n.map(l=>Math.round(l*o)).join(",")})`}function hh(e,t,i){for(let r=0;r<700;r++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*i,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function ch(e,t,i,r,a){let n=i;for(e.font=`400 ${n}px ${a}`;e.measureText(t).width>r&&n>14;)n-=2,e.font=`400 ${n}px ${a}`;return n}function ev(e,t,i){let r=document.createElement("canvas");r.width=790,r.height=490;let a=r.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let n=getComputedStyle(document.body).fontFamily;if(e){let h=e.naturalWidth/e.naturalHeight,c=746/268,u=h>c?e.naturalHeight*c:e.naturalWidth,d=h>c?e.naturalHeight:e.naturalWidth/c;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-u)/2,(e.naturalHeight-d)/2,u,d,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(h=>{a.beginPath(),a.moveTo(24,h),a.lineTo(766,h),a.stroke()});let s='"DT Punk", cursive';a.fillStyle=i;let o=ch(a,t.name.toUpperCase(),66,640,s);a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${s}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${s}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${n}`,a.textBaseline="middle",["SP","LP","EP"].forEach((h,c)=>{let u=30+c*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(u,440,22,22),a.fillText(h,u+32,452)}),a.strokeStyle=i,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",hh(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over";let l=new Ci(r);return l.colorSpace=lt,l.anisotropy=8,l}function tv(e,t){let i=document.createElement("canvas");i.width=1660,i.height=172;let r=i.getContext("2d");r.fillStyle="#e8e6df",r.fillRect(0,0,1660,172),r.fillStyle="#121212",r.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,n='"DT Punk", cursive';r.fillStyle="#efefe9",r.textBaseline="middle",r.font='400 92px "DT Punk", cursive',r.textAlign="center",r.fillText(e.code,75,172/2+6),r.textAlign="left",r.strokeStyle="#b6b3aa",r.lineWidth=2,r.beginPath(),r.moveTo(176,138),r.lineTo(1420,138),r.stroke(),r.fillStyle=t;let s=ch(r,e.name.toUpperCase(),112,1210,n);r.font=`400 ${s}px ${n}`,r.fillText(e.name.toUpperCase(),186,172/2+2),r.fillStyle="#3c3a35",r.font=`500 30px ${a}`,r.textAlign="right",r.fillText(e.kind,1630,172/2-22),r.font=`500 24px ${a}`,r.fillText("TRBN \xB7 SP 120",1630,172/2+24),hh(r,1660,172);let o=new Ci(i);return o.colorSpace=lt,o.anisotropy=8,o}var iv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",rv=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;
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
}`,av="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",nv=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;
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
}`;function sv({host:e,stage:t,items:i,onHover:r,onOpen:a}){let n=document.createElement("canvas");n.className="tv-canvas",n.setAttribute("aria-hidden","true"),e.append(n);let s;try{s=new Cm({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return n.remove(),null}let o=Math.min(devicePixelRatio||1,1.25);s.setPixelRatio(o),s.outputColorSpace=lt,s.setClearColor(0,0);let l=rh(s),h=nh(l),c=new Ls;c.background=new Ge(131587),c.fog=new Pm(131587,40,96);let u=new Ag(16777215,1.5);u.position.set(-8,18,22),c.add(u);let d=new Nt(30,1,1,200);d.position.set(0,0,40);let p=new Jt({vertexShader:av,fragmentShader:nv,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:Ir},b:{value:Ir},fade:{value:1},time:{value:0},focus:{value:new pe(.47,.55)}}}),g=new St(new Kt(2,2),p);g.frustumCulled=!1,g.renderOrder=-10,c.add(g);let v=new wg(16777215,.32);c.add(v);let m=new Ge(16777215),f=new Ge(16777215),E=new Ge(16777215),x=new St(new Kt(1,1),new Sr({map:Ir,color:16777215,transparent:!0,opacity:0,fog:!1}));x.renderOrder=1,c.add(x);let T=new St(new Kt(1,1),new Sr({color:328965,fog:!1}));T.position.z=-.04,c.add(T);let z=i.map((F,N)=>{let ie=K=>{let re=Math.sin((N+1)*12.9898*K)*43758.5453;return re-Math.floor(re)};return{rx:ie(1)-.5,ry:ie(2)-.5,rz:ie(3)-.5,wob:ie(4)*6.28,tilt:(ie(5)-.5)*.022,pile:ie(6)-.5}}),C=i.map((F,N)=>{let ie=lh(h,z[N].tilt),K=new St(h.hit,new Sr({visible:!1}));return K.userData.index=N,ie.group.add(K),ie.hit=K,c.add(ie.group),ie}),R=new Map,O=new Map,S=(F,N)=>{if(R.has(F)){let K=R.get(F);K.complete&&K.naturalWidth?N(K):K.addEventListener("load",()=>N(K),{once:!0});return}let ie=new Image;ie.decoding="async",ie.src=i[F].src,R.set(F,ie),ie.addEventListener("load",()=>N(ie),{once:!0})},M=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),w=F=>{C[F].wanted||(C[F].wanted=!0,S(F,N=>M.then(()=>{let ie=Qg(N),K=(re,ve)=>{re.material.map=ve,re.material.emissiveMap=ve,re.material.emissiveIntensity=.55,re.material.color.set(16777215),re.material.needsUpdate=!0};K(C[F].label,ev(N,i[F],ie)),K(C[F].spine,tv(i[F],ie)),jg(i[F].project,F,Xg(N)).forEach((re,ve)=>{let $=C[F].stickers[ve],he=new Ci(re);he.colorSpace=lt,he.anisotropy=4,$.material.map=he,$.material.emissiveMap=he,$.material.needsUpdate=!0})})))},B=F=>{O.has(F)||(O.set(F,null),S(F,N=>{let ie=new Ci(N);ie.colorSpace=lt,ie.anisotropy=8,ie.generateMipmaps=!0,ie.minFilter=ii;let K=document.createElement("canvas");K.width=K.height=6;let re=K.getContext("2d",{willReadFrequently:!0});re.drawImage(N,0,0,6,6);let ve=re.getImageData(0,0,6,6).data,$=0,he=0,Ne=0;for(let Be=0;Be<ve.length;Be+=4)$+=ve[Be],he+=ve[Be+1],Ne+=ve[Be+2];let Pe=new Ge($/9180,he/9180,Ne/9180).convertSRGBToLinear(),ue=Math.max($,he,Ne,1),xe=255/ue,Le=`rgba(${[$,he,Ne].map(Be=>Math.round(Be*xe)).join(",")},.3)`;O.set(F,{texture:ie,ratio:N.naturalWidth/N.naturalHeight,avg:Pe,glow:Le}),F===ne&&Ae(F)}))},H=new Ls,k=new ys(-1,1,1,-1,0,1),j=new Jt({vertexShader:iv,fragmentShader:rv,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1}}}),X=new St(new Kt(2,2),j);X.frustumCulled=!1,H.add(X);let ee=null,W=0,ae=0;function me(){let F=Math.round(W*o),N=Math.round(ae*o);(!ee||ee.width!==F||ee.height!==N)&&(ee?.dispose(),ee=new Si(F,N,{samples:2,type:ir,colorSpace:"",generateMipmaps:!0,minFilter:ii,magFilter:Ft})),j.uniforms.map.value=ee.texture,d.aspect=W/ae,d.updateProjectionMatrix(),Y()}let Oe=()=>{let F=80*Math.tan(d.fov*Math.PI/360);return{vh:F,vw:F*d.aspect}},ze=4/3;function Y(){let{vh:F,vw:N}=Oe(),ie=N*.62,K=F*.62,re=ie,ve=re/ze;ve>K&&(ve=K,re=ve*ze),x.scale.set(re,ve,1),x.position.set(0,F*.06,0),T.scale.set(re+.16,ve+.16,1),T.position.set(x.position.x,x.position.y,-.04),p.uniforms.focus.value.set(.5+x.position.x/N,.5+x.position.y/F)}let ne=-1;function Ae(F){let N=O.get(F);N&&(p.uniforms.a.value!==N.texture&&(p.uniforms.b.value=p.uniforms.a.value===Ir?N.texture:p.uniforms.a.value,p.uniforms.a.value=N.texture,p.uniforms.fade.value=0),f.copy(N.avg).lerp(E,.3),document.documentElement.style.setProperty("--tube-glow",N.glow),x.material.map=N.texture,x.material.opacity=1,x.material.needsUpdate=!0,ze=N.ratio,Y())}function Me(){let F=n.clientWidth,N=n.clientHeight;!F||!N||(W=F,ae=N,s.setSize(W,ae,!1),me())}new ResizeObserver(Me).observe(n),Me();let de=(F,N,ie)=>ih(aa((ie-F)/(N-F),0,1));function Ie(F,N,ie,K,re){let{vh:ve,vw:$}=Oe(),he=ih(aa(1-Math.abs(K)*1.15,0,1)),Ne=F.group,Pe=Math.sin(re*5e-4+N.wob),ue={x:$*.275,y:-ve*.265,z:8,s:.52,rx:-.16+Pe*.012,ry:-.3+Math.cos(re*4e-4)*.018,rz:.05},xe;if(K>=0){let Le=ie%2?1:-1,Be=1-K*4.2;xe={x:Le*$*.49,y:ve*.1+N.pile*1.2-K*.12,z:Be,s:.46,rx:N.rx*.1,ry:-Le*.92+N.ry*.08,rz:Le*.03+N.rz*.04},xe={x:Mt(xe.x,ue.x,he),y:Mt(xe.y,ue.y,he),z:Mt(xe.z,ue.z,he),s:Mt(xe.s,ue.s,he),rx:Mt(xe.rx,ue.rx,he),ry:Mt(xe.ry,ue.ry,he),rz:Mt(xe.rz,ue.rz,he)}}else{let Le=Ja*.5,Be=de(0,.9,-K),P={x:-$*.265+N.pile*.45,y:-ve*.19+(K+1)*Le,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+N.ry*.05,rz:N.rz*.022};xe={x:Mt(ue.x,P.x,Be),y:Mt(ue.y,P.y,Be)+Math.sin(Be*Math.PI)*3,z:Mt(ue.z,P.z,Be),s:Mt(ue.s,P.s,Be),rx:Mt(ue.rx,P.rx,Be),ry:Mt(ue.ry,P.ry,Be),rz:Mt(ue.rz,P.rz,Be)}}Ne.position.set(xe.x,xe.y,xe.z),Ne.scale.setScalar(xe.s),Ne.rotation.set(xe.rx,xe.ry,xe.rz),Ne.visible=K>-8&&K<12&&xe.y>-ve*.85}let We=new Fg,Fe=new pe,q=null,le=-2,A=!1,Ee=()=>{le!==-2&&(le=-2,r(-1),t.classList.remove("is-pointing"))},ce=()=>{if(A=!1,!q){Ee();return}let[F,N]=window.trbnBend?window.trbnBend(q.x,q.y,W,ae):[q.x,q.y],ie=F/W,K=N/ae;if(ie<0||ie>1||K<0||K>1){Ee();return}Fe.set(ie*2-1,-(K*2-1)),We.setFromCamera(Fe,d);let re=We.intersectObjects([...C.filter($=>$.group.visible).map($=>$.hit),x],!1)[0],ve=re?re.object===x?-1:re.object.userData.index:-2;ve!==le&&(le=ve,r(ve>=0?ve:-1),t.classList.toggle("is-pointing",ve!==-2))};t.addEventListener("pointermove",F=>{let N=n.getBoundingClientRect();q={x:F.clientX-N.left,y:F.clientY-N.top},A=!0}),t.addEventListener("pointerleave",()=>{q=null,A=!0}),t.addEventListener("click",F=>{F.target.closest("a, button")||(ce(),le!==-2&&a(le===-1?ne:le))});let Te=!1;Promise.all([s.compileAsync(c,d),s.compileAsync(H,k)]).then(()=>{Te=!0},()=>{Te=!0});let te=1,De=0,_e=0,be=0,b=0,_=0,D=!1,Z=!0;return{frame:(F,N,ie,K=1)=>{if(!Z||!Te)return;let re=F-be,ve=Math.abs(re);be=F,_e+=re*11+ie*9e-4;let $=aa(F/Math.max(1,i.length-1),0,1);C.forEach((xe,Le)=>{let Be=Le-F;if(Be>-7&&Be<7&&w(Le),Ie(xe,z[Le],Le,Be,N),Math.abs(Be)<3){xe.reels[0].hub.rotation.z=-_e,xe.reels[1].hub.rotation.z=-_e*.82;let P=Mt(3.15,1.75,$),se=Mt(1.75,3.15,$);xe.reels[0].pack.scale.set(P,P,1),xe.reels[1].pack.scale.set(se,se,1)}});let he=aa(Math.round(F),0,i.length-1);if(B(he),B(Math.min(i.length-1,he+1)),B(Math.max(0,he-1)),he!==ne){let xe=ne<0;ne=he,xe||(te=1),Ae(he)}te=Math.max(te*Math.exp(-ie/170),aa(ve*26,0,.7)),De||(De=N);let Ne=Math.min(1,(N-De)/700);m.lerp(f,1-Math.exp(-ie/500)),v.color.copy(m),p.uniforms.time.value=N/1e3,p.uniforms.fade.value=Math.min(1,p.uniforms.fade.value+ie/900),j.uniforms.time.value=N/1e3,j.uniforms.glitch.value=te,j.uniforms.power.value=1-(1-Ne)**3,j.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let Pe=q?q.x/W-.5:0,ue=q?q.y/ae-.5:0;b+=(Pe-b)*(1-Math.exp(-ie/260)),_+=(ue-_)*(1-Math.exp(-ie/260)),d.position.x=b*1.6,d.position.y=-_*1,d.lookAt(0,0,0),A&&ce(),s.toneMapping=ti,s.setRenderTarget(ee),s.clear(),s.render(c,d),s.setRenderTarget(null),s.clear(),s.render(H,k),n.style.opacity=String(Math.min(Ne*3,1)*K),D||(D=!0,t.classList.add("tv-on"))},show(F){Z=F,n.style.display=F?"":"none",F&&Me()},lighter(){o<=.8||(o=Math.max(.8,o-.2),s.setPixelRatio(o),Me())}}}export{sv as default,ah as grainTexture,lh as makeTape,rh as studioEnv,nh as tapeParts};
