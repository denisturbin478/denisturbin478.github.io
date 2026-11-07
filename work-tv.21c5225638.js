var uh=0,Hs=1,dh=2,ks=1,ph=2,Jt=3,cr=0,Mt=1,kt=2,ur=0,Vr=1,Gs=2,Ws=3,Xs=4,fh=5,br=100,mh=101,gh=102,_h=103,vh=104,xh=200,Mh=201,yh=202,Sh=203,Ba=204,za=205,Eh=206,Th=207,bh=208,wh=209,Ah=210,Rh=211,Ch=212,Ph=213,Lh=214,Va=0,Ha=1,ka=2,Hr=3,Ga=4,Wa=5,Xa=6,ja=7,js=0,Nh=1,Uh=2,Kt=0,Ih=1,Dh=2,Oh=3,qs=4,Fh=5,Bh=6,zh=7,Ys=300,kr=301,Gr=302,qa=303,Ya=304,Yi=306,Zi=1e3,wr=1001,Za=1002,Ut=1003,Vh=1004,Ji=1005,It=1006,Ja=1007,$t=1008,Qt=1009,Zs=1010,Js=1011,Ei=1012,Ka=1013,Ar=1014,er=1015,Wr=1016,$a=1017,Qa=1018,Xr=1020,Ks=35902,$s=1021,Qs=1022,Dt=1023,eo=1024,to=1025,jr=1026,qr=1027,ro=1028,en=1029,io=1030,tn=1031,rn=1033,Ki=33776,$i=33777,Qi=33778,ea=33779,an=35840,nn=35841,sn=35842,on=35843,ln=36196,hn=37492,cn=37496,un=37808,dn=37809,pn=37810,fn=37811,mn=37812,gn=37813,_n=37814,vn=37815,xn=37816,Mn=37817,yn=37818,Sn=37819,En=37820,Tn=37821,ta=36492,bn=36494,wn=36495,ao=36283,An=36284,Rn=36285,Cn=36286,ra=2300,Pn=2301,Ln=2302,no=2400,so=2401,oo=2402,Hh=3200,kh=3201,lo=0,Gh=1,dr="",_t="srgb",Yr="srgb-linear",ia="linear",Je="srgb",Zr=7680,ho=519,Wh=512,Xh=513,jh=514,co=515,qh=516,Yh=517,Zh=518,Jh=519,uo=35044,po="300 es",tr=2e3,aa=2001,Jr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}},mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nn=Math.PI/180,Un=180/Math.PI;function Kr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[e&255]+mt[e>>8&255]+mt[e>>16&255]+mt[e>>24&255]+"-"+mt[t&255]+mt[t>>8&255]+"-"+mt[t>>16&15|64]+mt[t>>24&255]+"-"+mt[r&63|128]+mt[r>>8&255]+"-"+mt[r>>16&255]+mt[r>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function dt(e,t,r){return Math.max(t,Math.min(r,e))}function Kh(e,t){return(e%t+t)%t}function In(e,t,r){return(1-r)*e+r*t}function Ti(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ge=class Jl{constructor(t=0,r=0){Jl.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6],this.y=a[1]*r+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(dt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),a=Math.sin(r),n=this.x-t.x,s=this.y-t.y;return this.x=n*i-s*a+t.x,this.y=n*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class Kl{constructor(t,r,i,a,n,s,o,l,h){Kl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h)}set(t,r,i,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=r,c[4]=n,c[5]=l,c[6]=i,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],_=i[8],g=a[0],m=a[3],f=a[6],w=a[1],M=a[4],E=a[7],F=a[2],R=a[5],A=a[8];return n[0]=s*g+o*w+l*F,n[3]=s*m+o*M+l*R,n[6]=s*f+o*E+l*A,n[1]=h*g+c*w+u*F,n[4]=h*m+c*M+u*R,n[7]=h*f+c*E+u*A,n[2]=d*g+p*w+_*F,n[5]=d*m+p*M+_*R,n[8]=d*f+p*E+_*A,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return r*s*c-r*o*h-i*n*c+i*o*l+a*n*h-a*s*l}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,p=h*n-s*l,_=r*u+i*d+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(a*h-c*i)*g,t[2]=(o*i-a*s)*g,t[3]=d*g,t[4]=(c*r-a*l)*g,t[5]=(a*n-o*r)*g,t[6]=p*g,t[7]=(i*l-h*r)*g,t[8]=(s*r-i*n)*g,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(Dn.makeScale(t,r)),this}rotate(t){return this.premultiply(Dn.makeRotation(-t)),this}translate(t,r){return this.premultiply(Dn.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<9;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dn=new je;function fo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bi(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function $h(){let e=bi("canvas");return e.style.display="block",e}var mo={};function wi(e){e in mo||(mo[e]=!0,console.warn(e))}function Qh(e,t,r){return new Promise(function(i,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,r);break;default:i()}}setTimeout(n,r)})}function ec(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tc(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qe={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===Je&&(e.r=rr(e.r),e.g=rr(e.g),e.b=rr(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Je&&(e.r=$r(e.r),e.g=$r(e.g),e.b=$r(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===dr?ia:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function rr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function $r(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var go=[.64,.33,.3,.6,.15,.06],_o=[.2126,.7152,.0722],vo=[.3127,.329],xo=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mo=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Yr]:{primaries:go,whitePoint:vo,transfer:ia,toXYZ:xo,fromXYZ:Mo,luminanceCoefficients:_o,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:go,whitePoint:vo,transfer:Je,toXYZ:xo,fromXYZ:Mo,luminanceCoefficients:_o,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var Qr,rc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qr===void 0&&(Qr=bi("canvas")),Qr.width=e.width,Qr.height=e.height;let r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bi("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let n=0;n<a.length;n++)a[n]=rr(a[n]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(rr(t[r]/255)*255):t[r]=rr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ic=0,yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let n=0,s=i.length;n<s;n++)i[n].isDataTexture?a.push(On(i[n].image)):a.push(On(i[n]))}else a=On(i);r.url=a}return t||(e.images[this.uuid]=r),r}};function On(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?rc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ac=0,At=class Da extends Jr{constructor(t=Da.DEFAULT_IMAGE,r=Da.DEFAULT_MAPPING,i=wr,a=wr,n=It,s=$t,o=Dt,l=Qt,h=Da.DEFAULT_ANISOTROPY,c=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Kr(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ys)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=Ys,At.DEFAULT_ANISOTROPY=1;var Ke=class $l{constructor(t=0,r=0,i=0,a=1){$l.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,a){return this.x=t,this.y=r,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*r+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*r+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*r+s[7]*i+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],p=s[2],_=s[6],g=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let f=(o+1)/2,w=(u+1)/2,M=(g+1)/2,E=(l+c)/4,F=(h+p)/4,R=(d+_)/4;return f>w&&f>M?f<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(f),a=E/i,n=F/i):w>M?w<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(w),i=E/a,n=R/a):M<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(M),i=F/n,a=R/n),this.set(i,a,n,r),this}let m=Math.sqrt((_-d)*(_-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(_-d)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+g-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends Jr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let a=new At(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];let n=r.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pr=class extends nc{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},So=class extends At{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sc=class extends At{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,n,s){let o=r[i+0],l=r[i+1],h=r[i+2],c=r[i+3],u=a[n+0],d=a[n+1],p=a[n+2],_=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c!==_||o!==u||l!==d||h!==p){let g=1-s,m=o*u+l*d+h*p+c*_,f=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let E=Math.sqrt(w),F=Math.atan2(E,m*f);g=Math.sin(g*F)/E,s=Math.sin(s*F)/E}let M=s*f;if(o=o*g+u*M,l=l*g+d*M,h=h*g+p*M,c=c*g+_*M,g===1-s){let E=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=E,l*=E,h*=E,c*=E}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,a,n){let s=r[i],o=r[i+1],l=r[i+2],h=r[i+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-s*d,e[t+2]=l*p+h*d+s*u-o*c,e[t+3]=h*p-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(r/2),h=s(i/2),c=s(a/2),u=o(r/2),d=o(i/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=r+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-i)*d}else if(r>s&&r>c){let d=2*Math.sqrt(1+r-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(i+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-r-c);this._w=(a-l)/d,this._x=(i+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-r-s);this._w=(n-i)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=r*h+n*s+i*l-a*o,this._y=i*h+n*o+a*s-r*l,this._z=a*h+n*l+r*o-i*s,this._w=n*h-r*s-i*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,a=this._z,n=this._w,s=n*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=r,this._y=i,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=r*c+this._x*u,this._y=i*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class Ql{constructor(t=0,r=0,i=0){Ql.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(Eo.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(Eo.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6]*a,this.y=n[1]*r+n[4]*i+n[7]*a,this.z=n[2]*r+n[5]*i+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=t.elements,s=1/(n[3]*r+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*r+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*r+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*i),c=2*(o*r-n*a),u=2*(n*i-s*r);return this.x=r+l*h+s*u-o*c,this.y=i+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[4]*i+n[8]*a,this.y=n[1]*r+n[5]*i+n[9]*a,this.z=n[2]*r+n[6]*i+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,a=t.y,n=t.z,s=r.x,o=r.y,l=r.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fn.copy(this).projectOnVector(t),this.sub(Fn)}reflect(t){return this.sub(Fn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(dt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return r*r+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let a=Math.sin(r)*t;return this.x=a*Math.sin(i),this.y=Math.cos(r)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=a,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fn=new L,Eo=new ei,Ai=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Ot):Ot.fromBufferAttribute(a,n),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),na.copy(r.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let i=e.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),sa.subVectors(this.max,Ri),ti.subVectors(e.a,Ri),ri.subVectors(e.b,Ri),ii.subVectors(e.c,Ri),fr.subVectors(ri,ti),mr.subVectors(ii,ri),Rr.subVectors(ti,ii);let t=[0,-fr.z,fr.y,0,-mr.z,mr.y,0,-Rr.z,Rr.y,fr.z,0,-fr.x,mr.z,0,-mr.x,Rr.z,0,-Rr.x,-fr.y,fr.x,0,-mr.y,mr.x,0,-Rr.y,Rr.x,0];return!Bn(t,ti,ri,ii,sa)||(t=[1,0,0,0,1,0,0,0,1],!Bn(t,ti,ri,ii,sa))?!1:(oa.crossVectors(fr,mr),t=[oa.x,oa.y,oa.z],Bn(t,ti,ri,ii,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ir=[new L,new L,new L,new L,new L,new L,new L,new L],Ot=new L,na=new Ai,ti=new L,ri=new L,ii=new L,fr=new L,mr=new L,Rr=new L,Ri=new L,sa=new L,oa=new L,Cr=new L;function Bn(e,t,r,i,a){for(let n=0,s=e.length-3;n<=s;n+=3){Cr.fromArray(e,n);let o=a.x*Math.abs(Cr.x)+a.y*Math.abs(Cr.y)+a.z*Math.abs(Cr.z),l=t.dot(Cr),h=r.dot(Cr),c=i.dot(Cr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var oc=new Ai,Ci=new L,zn=new L,Vn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):oc.setFromPoints(e).getCenter(r);let i=0;for(let a=0,n=e.length;a<n;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);let t=Ci.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Ci,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(zn)),this.expandByPoint(Ci.copy(e.center).sub(zn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ar=new L,Hn=new L,la=new L,gr=new L,kn=new L,ha=new L,Gn=new L,To=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Hn.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Hn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(la),s=gr.dot(this.direction),o=-gr.dot(la),l=gr.lengthSq(),h=Math.abs(1-n*n),c,u,d,p;if(h>0)if(c=n*o-s,u=n*s-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let _=1/h;c*=_,u*=_,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Hn).addScaledVector(la,u),d}intersectSphere(e,t){ar.subVectors(e.center,this.origin);let r=ar.dot(this.direction),i=ar.dot(ar)-r*r,a=e.radius*e.radius;if(i>a)return null;let n=Math.sqrt(a-i),s=r-n,o=r+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(r=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(r=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),r>n||a>i||((a>r||isNaN(r))&&(r=a),(n<i||isNaN(i))&&(i=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,i,a){kn.subVectors(t,e),ha.subVectors(r,e),Gn.crossVectors(kn,ha);let n=this.direction.dot(Gn),s;if(n>0){if(i)return null;s=1}else if(n<0)s=-1,n=-n;else return null;gr.subVectors(this.origin,e);let o=s*this.direction.dot(ha.crossVectors(gr,ha));if(o<0)return null;let l=s*this.direction.dot(kn.cross(gr));if(l<0||o+l>n)return null;let h=-s*gr.dot(Gn);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class Us{constructor(t,r,i,a,n,s,o,l,h,c,u,d,p,_,g,m){Us.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h,c,u,d,p,_,g,m)}set(t,r,i,a,n,s,o,l,h,c,u,d,p,_,g,m){let f=this.elements;return f[0]=t,f[4]=r,f[8]=i,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Us().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,a=1/ai.setFromMatrixColumn(t,0).length(),n=1/ai.setFromMatrixColumn(t,1).length(),s=1/ai.setFromMatrixColumn(t,2).length();return r[0]=i[0]*a,r[1]=i[1]*a,r[2]=i[2]*a,r[3]=0,r[4]=i[4]*n,r[5]=i[5]*n,r[6]=i[6]*n,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,a=t.y,n=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,p=s*u,_=o*c,g=o*u;r[0]=l*c,r[4]=-l*u,r[8]=h,r[1]=p+_*h,r[5]=d-g*h,r[9]=-o*l,r[2]=g-d*h,r[6]=_+p*h,r[10]=s*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,_=h*c,g=h*u;r[0]=d+g*o,r[4]=_*o-p,r[8]=s*h,r[1]=s*u,r[5]=s*c,r[9]=-o,r[2]=p*o-_,r[6]=g+d*o,r[10]=s*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,_=h*c,g=h*u;r[0]=d-g*o,r[4]=-s*u,r[8]=_+p*o,r[1]=p+_*o,r[5]=s*c,r[9]=g-d*o,r[2]=-s*h,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let d=s*c,p=s*u,_=o*c,g=o*u;r[0]=l*c,r[4]=_*h-p,r[8]=d*h+g,r[1]=l*u,r[5]=g*h+d,r[9]=p*h-_,r[2]=-h,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let d=s*l,p=s*h,_=o*l,g=o*h;r[0]=l*c,r[4]=g-d*u,r[8]=_*u+p,r[1]=u,r[5]=s*c,r[9]=-o*c,r[2]=-h*c,r[6]=p*u+_,r[10]=d-g*u}else if(t.order==="XZY"){let d=s*l,p=s*h,_=o*l,g=o*h;r[0]=l*c,r[4]=-u,r[8]=h*c,r[1]=d*u+g,r[5]=s*c,r[9]=p*u-_,r[2]=_*u-p,r[6]=o*c,r[10]=g*u+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lc,t,hc)}lookAt(t,r,i){let a=this.elements;return Tt.subVectors(t,r),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),_r.crossVectors(i,Tt),_r.lengthSq()===0&&(Math.abs(i.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),_r.crossVectors(i,Tt)),_r.normalize(),ca.crossVectors(Tt,_r),a[0]=_r.x,a[4]=ca.x,a[8]=Tt.x,a[1]=_r.y,a[5]=ca.y,a[9]=Tt.y,a[2]=_r.z,a[6]=ca.z,a[10]=Tt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],w=i[3],M=i[7],E=i[11],F=i[15],R=a[0],A=a[4],D=a[8],y=a[12],S=a[1],C=a[5],O=a[9],B=a[13],H=a[2],Z=a[6],W=a[10],ae=a[14],j=a[3],oe=a[7],fe=a[11],Ne=a[15];return n[0]=s*R+o*S+l*H+h*j,n[4]=s*A+o*C+l*Z+h*oe,n[8]=s*D+o*O+l*W+h*fe,n[12]=s*y+o*B+l*ae+h*Ne,n[1]=c*R+u*S+d*H+p*j,n[5]=c*A+u*C+d*Z+p*oe,n[9]=c*D+u*O+d*W+p*fe,n[13]=c*y+u*B+d*ae+p*Ne,n[2]=_*R+g*S+m*H+f*j,n[6]=_*A+g*C+m*Z+f*oe,n[10]=_*D+g*O+m*W+f*fe,n[14]=_*y+g*B+m*ae+f*Ne,n[3]=w*R+M*S+E*H+F*j,n[7]=w*A+M*C+E*Z+F*oe,n[11]=w*D+M*O+E*W+F*fe,n[15]=w*y+M*B+E*ae+F*Ne,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+n*l*u-a*h*u-n*o*d+i*h*d+a*o*p-i*l*p)+g*(+r*l*p-r*h*d+n*s*d-a*s*p+a*h*c-n*l*c)+m*(+r*h*u-r*o*p-n*s*u+i*s*p+n*o*c-i*h*c)+f*(-a*o*c-r*l*u+r*o*d+a*s*u-i*s*d+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=r,a[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],w=u*m*h-g*d*h+g*l*p-o*m*p-u*l*f+o*d*f,M=_*d*h-c*m*h-_*l*p+s*m*p+c*l*f-s*d*f,E=c*g*h-_*u*h+_*o*p-s*g*p-c*o*f+s*u*f,F=_*u*l-c*g*l-_*o*d+s*g*d+c*o*m-s*u*m,R=r*w+i*M+a*E+n*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return t[0]=w*A,t[1]=(g*d*n-u*m*n-g*a*p+i*m*p+u*a*f-i*d*f)*A,t[2]=(o*m*n-g*l*n+g*a*h-i*m*h-o*a*f+i*l*f)*A,t[3]=(u*l*n-o*d*n-u*a*h+i*d*h+o*a*p-i*l*p)*A,t[4]=M*A,t[5]=(c*m*n-_*d*n+_*a*p-r*m*p-c*a*f+r*d*f)*A,t[6]=(_*l*n-s*m*n-_*a*h+r*m*h+s*a*f-r*l*f)*A,t[7]=(s*d*n-c*l*n+c*a*h-r*d*h-s*a*p+r*l*p)*A,t[8]=E*A,t[9]=(_*u*n-c*g*n-_*i*p+r*g*p+c*i*f-r*u*f)*A,t[10]=(s*g*n-_*o*n+_*i*h-r*g*h-s*i*f+r*o*f)*A,t[11]=(c*o*n-s*u*n-c*i*h+r*u*h+s*i*p-r*o*p)*A,t[12]=F*A,t[13]=(c*g*a-_*u*a+_*i*d-r*g*d-c*i*m+r*u*m)*A,t[14]=(_*o*a-s*g*a-_*i*l+r*g*l+s*i*m-r*o*m)*A,t[15]=(s*u*a-c*o*a+c*i*l-r*u*l-s*i*d+r*o*d)*A,this}scale(t){let r=this.elements,i=t.x,a=t.y,n=t.z;return r[0]*=i,r[4]*=a,r[8]*=n,r[1]*=i,r[5]*=a,r[9]*=n,r[2]*=i,r[6]*=a,r[10]*=n,r[3]*=i,r[7]*=a,r[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,a))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),a=Math.sin(r),n=1-i,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+i,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+i,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,a,n,s){return this.set(1,i,n,0,t,1,s,0,r,a,1,0,0,0,0,1),this}compose(t,r,i){let a=this.elements,n=r._x,s=r._y,o=r._z,l=r._w,h=n+n,c=s+s,u=o+o,d=n*h,p=n*c,_=n*u,g=s*c,m=s*u,f=o*u,w=l*h,M=l*c,E=l*u,F=i.x,R=i.y,A=i.z;return a[0]=(1-(g+f))*F,a[1]=(p+E)*F,a[2]=(_-M)*F,a[3]=0,a[4]=(p-E)*R,a[5]=(1-(d+f))*R,a[6]=(m+w)*R,a[7]=0,a[8]=(_+M)*A,a[9]=(m-w)*A,a[10]=(1-(d+g))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,r,i){let a=this.elements,n=ai.set(a[0],a[1],a[2]).length(),s=ai.set(a[4],a[5],a[6]).length(),o=ai.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Ft.copy(this);let l=1/n,h=1/s,c=1/o;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=c,Ft.elements[9]*=c,Ft.elements[10]*=c,r.setFromRotationMatrix(Ft),i.x=n,i.y=s,i.z=o,this}makePerspective(t,r,i,a,n,s,o=tr){let l=this.elements,h=2*n/(r-t),c=2*n/(i-a),u=(r+t)/(r-t),d=(i+a)/(i-a),p,_;if(o===tr)p=-(s+n)/(s-n),_=-2*s*n/(s-n);else if(o===aa)p=-s/(s-n),_=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,i,a,n,s,o=tr){let l=this.elements,h=1/(r-t),c=1/(i-a),u=1/(s-n),d=(r+t)*h,p=(i+a)*c,_,g;if(o===tr)_=(s+n)*u,g=-2*u;else if(o===aa)_=n*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<16;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},ai=new L,Ft=new at,lc=new L(0,0,0),hc=new L(1,1,1),_r=new L,ca=new L,Tt=new L,bo=new at,wo=new ei,vr=class eh{constructor(t=0,r=0,i=0,a=eh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,a=this._order){return this._x=t,this._y=r,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(r){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bo,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return wo.setFromEuler(this),this.setFromQuaternion(wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vr.DEFAULT_ORDER="XYZ";var Wn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cc=0,Ao=new L,ni=new ei,nr=new at,ua=new L,Pi=new L,uc=new L,dc=new ei,Ro=new L(1,0,0),Co=new L(0,1,0),Po=new L(0,0,1),Lo={type:"added"},pc={type:"removed"},si={type:"childadded",child:null},Xn={type:"childremoved",child:null},Rt=class Oa extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oa.DEFAULT_UP.clone();let t=new L,r=new vr,i=new ei,a=new L(1,1,1);function n(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new at},normalMatrix:{value:new je}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Oa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return ni.setFromAxisAngle(t,r),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,r){return ni.setFromAxisAngle(t,r),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(Ro,t)}rotateY(t){return this.rotateOnAxis(Co,t)}rotateZ(t){return this.rotateOnAxis(Po,t)}translateOnAxis(t,r){return Ao.copy(t).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(Ro,t)}translateY(t){return this.translateOnAxis(Co,t)}translateZ(t){return this.translateOnAxis(Po,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?ua.copy(t):ua.set(t,r,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Pi,ua,this.up):nr.lookAt(ua,Pi,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),ni.setFromRotationMatrix(nr),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lo),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(pc),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nr.multiply(t.parent.matrixWorld)),t.applyMatrix4(nr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lo),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,a=this.children.length;i<a;i++){let n=this.children[i].getObjectByProperty(t,r);if(n!==void 0)return n}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,uc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,dc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),p=s(t.animations),_=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};Rt.DEFAULT_UP=new L(0,1,0),Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=new L,sr=new L,jn=new L,or=new L,oi=new L,li=new L,No=new L,qn=new L,Yn=new L,Zn=new L,Jn=new Ke,Kn=new Ke,$n=new Ke,Li=class vi{constructor(t=new L,r=new L,i=new L){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,a){a.subVectors(i,r),Bt.subVectors(t,r),a.cross(Bt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,r,i,a,n){Bt.subVectors(a,r),sr.subVectors(i,r),jn.subVectors(t,r);let s=Bt.dot(Bt),o=Bt.dot(sr),l=Bt.dot(jn),h=sr.dot(sr),c=sr.dot(jn),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,_=(s*c-o*l)*d;return n.set(1-p-_,_,p)}static containsPoint(t,r,i,a){return this.getBarycoord(t,r,i,a,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(t,r,i,a,n,s,o,l){return this.getBarycoord(t,r,i,a,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,or.x),l.addScaledVector(s,or.y),l.addScaledVector(o,or.z),l)}static getInterpolatedAttribute(t,r,i,a,n,s){return Jn.setScalar(0),Kn.setScalar(0),$n.setScalar(0),Jn.fromBufferAttribute(t,r),Kn.fromBufferAttribute(t,i),$n.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Jn,n.x),s.addScaledVector(Kn,n.y),s.addScaledVector($n,n.z),s}static isFrontFacing(t,r,i,a){return Bt.subVectors(i,r),sr.subVectors(t,r),Bt.cross(sr).dot(a)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,a){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,r,i,a){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bt.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Bt.cross(sr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return vi.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,a,n){return vi.getInterpolation(t,this.a,this.b,this.c,r,i,a,n)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,a=this.b,n=this.c,s,o;oi.subVectors(a,i),li.subVectors(n,i),qn.subVectors(t,i);let l=oi.dot(qn),h=li.dot(qn);if(l<=0&&h<=0)return r.copy(i);Yn.subVectors(t,a);let c=oi.dot(Yn),u=li.dot(Yn);if(c>=0&&u<=c)return r.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(oi,s);Zn.subVectors(t,n);let p=oi.dot(Zn),_=li.dot(Zn);if(_>=0&&p<=_)return r.copy(n);let g=p*h-l*_;if(g<=0&&h>=0&&_<=0)return o=h/(h-_),r.copy(i).addScaledVector(li,o);let m=c*_-p*u;if(m<=0&&u-c>=0&&p-_>=0)return No.subVectors(n,a),o=(u-c)/(u-c+(p-_)),r.copy(a).addScaledVector(No,o);let f=1/(m+g+d);return s=g*f,o=d*f,r.copy(i).addScaledVector(oi,s).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},da={h:0,s:0,l:0};function Qn(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var ke=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=r,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=qe.workingColorSpace){if(e=Kh(e,1),t=dt(t,0,1),r=dt(r,0,1),t===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+t):r+t-r*t,n=2*r-a;this.r=Qn(n,a,e+1/3),this.g=Qn(n,a,e),this.b=Qn(n,a,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let r=Uo[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return qe.fromWorkingColorSpace(gt.copy(this),e),Math.round(dt(gt.r*255,0,255))*65536+Math.round(dt(gt.g*255,0,255))*256+Math.round(dt(gt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(gt.copy(this),t);let r=gt.r,i=gt.g,a=gt.b,n=Math.max(r,i,a),s=Math.min(r,i,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case r:o=(i-a)/c+(i<a?6:0);break;case i:o=(a-r)/c+2;break;case a:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=_t){qe.fromWorkingColorSpace(gt.copy(this),e);let t=gt.r,r=gt.g,i=gt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(da);let r=In(xr.h,da.h,t),i=In(xr.s,da.s,t),a=In(xr.l,da.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gt=new ke;ke.NAMES=Uo;var fc=0,Ni=class extends Jr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=Kr(),this.name="",this.blending=Vr,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ba&&(r.blendSrc=this.blendSrc),this.blendDst!==za&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=i(e.textures),n=i(e.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pr=class extends Ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ot=new L,pa=new ge,zt=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=uo,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ti(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=yt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array),i=yt(i,this.array),a=yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uo&&(e.usage=this.usage),e}},Io=class extends zt{constructor(e,t,r){super(new Uint16Array(e),t,r)}},Do=class extends zt{constructor(e,t,r){super(new Uint32Array(e),t,r)}},Ct=class extends zt{constructor(e,t,r){super(new Float32Array(e),t,r)}},mc=0,Pt=new at,es=new Rt,hi=new L,bt=new Ai,Ui=new Ai,ct=new L,Mr=class th extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fo(t)?Do:Io)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new je().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pt.makeRotationFromQuaternion(t),this.applyMatrix4(Pt),this}rotateX(t){return Pt.makeRotationX(t),this.applyMatrix4(Pt),this}rotateY(t){return Pt.makeRotationY(t),this.applyMatrix4(Pt),this}rotateZ(t){return Pt.makeRotationZ(t),this.applyMatrix4(Pt),this}translate(t,r,i){return Pt.makeTranslation(t,r,i),this.applyMatrix4(Pt),this}scale(t,r,i){return Pt.makeScale(t,r,i),this.applyMatrix4(Pt),this}lookAt(t){return es.lookAt(t),es.updateMatrix(),this.applyMatrix4(es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ct(i,3))}else{for(let i=0,a=r.count;i<a;i++){let n=t[i];r.setXYZ(i,n.x,n.y,n.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,a=r.length;i<a;i++){let n=r[i];bt.setFromBufferAttribute(n),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(bt.setFromBufferAttribute(t),r)for(let n=0,s=r.length;n<s;n++){let o=r[n];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(bt.min,Ui.min),bt.expandByPoint(ct),ct.addVectors(bt.max,Ui.max),bt.expandByPoint(ct)):(bt.expandByPoint(Ui.min),bt.expandByPoint(Ui.max))}bt.getCenter(i);let a=0;for(let n=0,s=t.count;n<s;n++)ct.fromBufferAttribute(t,n),a=Math.max(a,i.distanceToSquared(ct));if(r)for(let n=0,s=r.length;n<s;n++){let o=r[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)ct.fromBufferAttribute(o,h),l&&(hi.fromBufferAttribute(t,h),ct.add(hi)),a=Math.max(a,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,a=r.normal,n=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new L,l[D]=new L;let h=new L,c=new L,u=new L,d=new ge,p=new ge,_=new ge,g=new L,m=new L;function f(D,y,S){h.fromBufferAttribute(i,D),c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,S),d.fromBufferAttribute(n,D),p.fromBufferAttribute(n,y),_.fromBufferAttribute(n,S),c.sub(h),u.sub(h),p.sub(d),_.sub(d);let C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(C),o[D].add(g),o[y].add(g),o[S].add(g),l[D].add(m),l[y].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,y=w.length;D<y;++D){let S=w[D],C=S.start,O=S.count;for(let B=C,H=C+O;B<H;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new L,E=new L,F=new L,R=new L;function A(D){F.fromBufferAttribute(a,D),R.copy(F);let y=o[D];M.copy(y),M.sub(F.multiplyScalar(F.dot(y))).normalize(),E.crossVectors(R,y);let S=E.dot(l[D])<0?-1:1;s.setXYZW(D,M.x,M.y,M.z,S)}for(let D=0,y=w.length;D<y;++D){let S=w[D],C=S.start,O=S.count;for(let B=C,H=C+O;B<H;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let a=new L,n=new L,s=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(r,_),n.fromBufferAttribute(r,g),s.fromBufferAttribute(r,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=r.count;d<p;d+=3)a.fromBufferAttribute(r,d+0),n.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)ct.fromBufferAttribute(t,r),ct.normalize(),t.setXYZ(r,ct.x,ct.y,ct.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*c;for(let f=0;f<c;f++)d[_++]=h[p++]}return new zt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new th,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,i);r.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,i);l.push(p)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];r.addGroup(h.start,h.count,h.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(r));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(r))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(r));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oo=new at,Lr=new To,fa=new Vn,Fo=new L,ma=new L,ga=new L,_a=new L,ts=new L,va=new L,Bo=new L,xa=new L,pt=class extends Rt{constructor(e=new Mr,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(a&&s){va.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(ts.fromBufferAttribute(c,e),n?va.addScaledVector(ts,h):va.addScaledVector(ts.sub(t),h))}t.add(va)}return t}raycast(e,t){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fa.copy(r.boundingSphere),fa.applyMatrix4(a),Lr.copy(e.ray).recast(e.near),!(fa.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(fa,Fo)===null||Lr.origin.distanceToSquared(Fo)>(e.far-e.near)**2))&&(Oo.copy(a).invert(),Lr.copy(e.ray).applyMatrix4(Oo),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,r){let i,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=n[g.materialIndex],f=Math.max(g.start,d.start),w=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let M=f,E=w;M<E;M+=3){let F=s.getX(M),R=s.getX(M+1),A=s.getX(M+2);i=Ma(this,m,e,r,l,h,c,F,R,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let f=s.getX(g),w=s.getX(g+1),M=s.getX(g+2);i=Ma(this,n,e,r,l,h,c,f,w,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=n[g.materialIndex],f=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=f,E=w;M<E;M+=3){let F=M,R=M+1,A=M+2;i=Ma(this,m,e,r,l,h,c,F,R,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let f=g,w=g+1,M=g+2;i=Ma(this,n,e,r,l,h,c,f,w,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function gc(e,t,r,i,a,n,s,o){let l;if(t.side===Mt?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,t.side===cr,o),l===null)return null;xa.copy(o),xa.applyMatrix4(e.matrixWorld);let h=r.ray.origin.distanceTo(xa);return h<r.near||h>r.far?null:{distance:h,point:xa.clone(),object:e}}function Ma(e,t,r,i,a,n,s,o,l,h){e.getVertexPosition(o,ma),e.getVertexPosition(l,ga),e.getVertexPosition(h,_a);let c=gc(e,t,r,i,ma,ga,_a,Bo);if(c){let u=new L;Li.getBarycoord(Bo,ma,ga,_a,u),a&&(c.uv=Li.getInterpolatedAttribute(a,o,l,h,u,new ge)),n&&(c.uv1=Li.getInterpolatedAttribute(n,o,l,h,u,new ge)),s&&(c.normal=Li.getInterpolatedAttribute(s,o,l,h,u,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new L,materialIndex:0};Li.getNormal(ma,ga,_a,d.normal),c.face=d,c.barycoord=u}return c}var wt=class rh extends Mr{constructor(t=1,r=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,p=0;_("z","y","x",-1,-1,i,r,t,s,n,0),_("z","y","x",1,-1,i,r,-t,s,n,1),_("x","z","y",1,1,t,i,r,a,s,2),_("x","z","y",1,-1,t,i,-r,a,s,3),_("x","y","z",1,-1,t,r,i,a,n,4),_("x","y","z",-1,-1,t,r,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2));function _(g,m,f,w,M,E,F,R,A,D,y){let S=E/A,C=F/D,O=E/2,B=F/2,H=R/2,Z=A+1,W=D+1,ae=0,j=0,oe=new L;for(let fe=0;fe<W;fe++){let Ne=fe*C-B;for(let Be=0;Be<Z;Be++){let q=Be*S-O;oe[g]=q*w,oe[m]=Ne*M,oe[f]=H,h.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[f]=R>0?1:-1,c.push(oe.x,oe.y,oe.z),u.push(Be/A),u.push(1-fe/D),ae+=1}}for(let fe=0;fe<D;fe++)for(let Ne=0;Ne<A;Ne++){let Be=d+Ne+Z*fe,q=d+Ne+Z*(fe+1),se=d+(Ne+1)+Z*(fe+1),be=d+(Ne+1)+Z*fe;l.push(Be,q,be),l.push(q,se,be),j+=6}o.addGroup(p,j,y),p+=j,d+=ae}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ci(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let a=e[r][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=a.clone():Array.isArray(a)?t[r][i]=a.slice():t[r][i]=a}}return t}function vt(e){let t={};for(let r=0;r<e.length;r++){let i=ci(e[r]);for(let a in i)t[a]=i[a]}return t}function _c(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function zo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}var vc={clone:ci,merge:vt},xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xc,this.fragmentShader=Mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=_c(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},Vo=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yr=new L,Ho=new ge,ko=new ge,St=class extends Vo{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Un*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Un*2*Math.atan(Math.tan(Nn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,Ho,ko),t.subVectors(ko,Ho)}setViewOffset(e,t,r,i,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nn*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*i/o,t-=n.offsetY*r/l,i*=n.width/o,r*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ui=-90,di=1,yc=class extends Rt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new St(ui,di,e,t);i.layers=this.layers,this.add(i);let a=new St(ui,di,e,t);a.layers=this.layers,this.add(a);let n=new St(ui,di,e,t);n.layers=this.layers,this.add(n);let s=new St(ui,di,e,t);s.layers=this.layers,this.add(s);let o=new St(ui,di,e,t);o.layers=this.layers,this.add(o);let l=new St(ui,di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===aa)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,n),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,i),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,r.texture.needsPMREMUpdate=!0}},Go=class extends At{constructor(e,t,r,i,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:kr,super(e,t,r,i,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Go(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wt(5,5,5),a=new Gt({name:"CubemapFromEquirect",uniforms:ci(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mt,blending:ur});a.uniforms.tEquirect.value=t;let n=new pt(i,a),s=t.minFilter;return t.minFilter===$t&&(t.minFilter=It),new yc(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,r,i){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,i);e.setRenderTarget(a)}},rs=new L,Ec=new L,Tc=new je,Nr=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=rs.subVectors(r,t).cross(Ec.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(rs),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||Tc.getNormalMatrix(e),i=this.coplanarPoint(rs).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new Vn,ya=new L,is=class{constructor(e=new Nr,t=new Nr,r=new Nr,i=new Nr,a=new Nr,n=new Nr){this.planes=[e,t,r,i,a,n]}set(e,t,r,i,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr){let r=this.planes,i=e.elements,a=i[0],n=i[1],s=i[2],o=i[3],l=i[4],h=i[5],c=i[6],u=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],f=i[13],w=i[14],M=i[15];if(r[0].setComponents(o-a,u-l,g-d,M-m).normalize(),r[1].setComponents(o+a,u+l,g+d,M+m).normalize(),r[2].setComponents(o+n,u+h,g+p,M+f).normalize(),r[3].setComponents(o-n,u-h,g-p,M-f).normalize(),r[4].setComponents(o-s,u-c,g-_,M-w).normalize(),t===tr)r[5].setComponents(o+s,u+c,g+_,M+w).normalize();else if(t===aa)r[5].setComponents(s,c,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(ya.x=i.normal.x>0?e.max.x:e.min.x,ya.y=i.normal.y>0?e.max.y:e.min.y,ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wo(){let e=null,t=!1,r=null,i=null;function a(n,s){r(n,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){r=n},setContext:function(n){e=n}}}function bc(e){let t=new WeakMap;function r(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){let _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){let g=u[p];e.bufferSubData(h,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,r(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Wt=class ih extends Mr{constructor(t=1,r=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:a};let n=t/2,s=r/2,o=Math.floor(i),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=r/l,p=[],_=[],g=[],m=[];for(let f=0;f<c;f++){let w=f*d-s;for(let M=0;M<h;M++){let E=M*u-n;_.push(E,-w,0),g.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let M=w+h*f,E=w+h*(f+1),F=w+1+h*(f+1),R=w+1+h*f;p.push(M,E,R),p.push(E,F,R)}this.setIndex(p),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(g,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.width,t.height,t.widthSegments,t.heightSegments)}},wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ac=`#ifdef USE_ALPHAHASH
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
#endif`,Rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nc=`#ifdef USE_AOMAP
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
#endif`,Uc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ic=`#ifdef USE_BATCHING
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
#endif`,Dc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zc=`#ifdef USE_IRIDESCENCE
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
#endif`,Vc=`#ifdef USE_BUMPMAP
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
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zc=`#define PI 3.141592653589793
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
} // validated`,Jc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kc=`vec3 transformedNormal = objectNormal;
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
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
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
}`,fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_u=`uniform bool receiveShadow;
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
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eu=`PhysicalMaterial material;
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
#endif`,Tu=`struct PhysicalMaterial {
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
}`,bu=`
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ru=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Du=`#if defined( USE_POINTS_UV )
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
#endif`,Ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
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
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yu=`#ifdef USE_NORMALMAP
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
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cd=`float getShadowMask() {
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
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,Md=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`#include <common>
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
}`,Nd=`#if DEPTH_PACKING == 3200
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
}`,Ud=`#define DISTANCE
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
}`,Id=`#define DISTANCE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`uniform float scale;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,zd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Hd=`#define LAMBERT
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
}`,kd=`#define LAMBERT
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
}`,Gd=`#define MATCAP
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
}`,Wd=`#define MATCAP
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
}`,Xd=`#define NORMAL
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
}`,jd=`#define NORMAL
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
}`,qd=`#define PHONG
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
}`,Yd=`#define PHONG
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
}`,Zd=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
}`,Kd=`#define TOON
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
}`,$d=`#define TOON
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
}`,Qd=`uniform float size;
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
}`,ep=`uniform vec3 diffuse;
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
}`,tp=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,ip=`uniform float rotation;
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
}`,ap=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:wc,alphahash_pars_fragment:Ac,alphamap_fragment:Rc,alphamap_pars_fragment:Cc,alphatest_fragment:Pc,alphatest_pars_fragment:Lc,aomap_fragment:Nc,aomap_pars_fragment:Uc,batching_pars_vertex:Ic,batching_vertex:Dc,begin_vertex:Oc,beginnormal_vertex:Fc,bsdfs:Bc,iridescence_fragment:zc,bumpmap_pars_fragment:Vc,clipping_planes_fragment:Hc,clipping_planes_pars_fragment:kc,clipping_planes_pars_vertex:Gc,clipping_planes_vertex:Wc,color_fragment:Xc,color_pars_fragment:jc,color_pars_vertex:qc,color_vertex:Yc,common:Zc,cube_uv_reflection_fragment:Jc,defaultnormal_vertex:Kc,displacementmap_pars_vertex:$c,displacementmap_vertex:Qc,emissivemap_fragment:eu,emissivemap_pars_fragment:tu,colorspace_fragment:ru,colorspace_pars_fragment:iu,envmap_fragment:au,envmap_common_pars_fragment:nu,envmap_pars_fragment:su,envmap_pars_vertex:ou,envmap_physical_pars_fragment:vu,envmap_vertex:lu,fog_vertex:hu,fog_pars_vertex:cu,fog_fragment:uu,fog_pars_fragment:du,gradientmap_pars_fragment:pu,lightmap_pars_fragment:fu,lights_lambert_fragment:mu,lights_lambert_pars_fragment:gu,lights_pars_begin:_u,lights_toon_fragment:xu,lights_toon_pars_fragment:Mu,lights_phong_fragment:yu,lights_phong_pars_fragment:Su,lights_physical_fragment:Eu,lights_physical_pars_fragment:Tu,lights_fragment_begin:bu,lights_fragment_maps:wu,lights_fragment_end:Au,logdepthbuf_fragment:Ru,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Pu,logdepthbuf_vertex:Lu,map_fragment:Nu,map_pars_fragment:Uu,map_particle_fragment:Iu,map_particle_pars_fragment:Du,metalnessmap_fragment:Ou,metalnessmap_pars_fragment:Fu,morphinstance_vertex:Bu,morphcolor_vertex:zu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Hu,morphtarget_vertex:ku,normal_fragment_begin:Gu,normal_fragment_maps:Wu,normal_pars_fragment:Xu,normal_pars_vertex:ju,normal_vertex:qu,normalmap_pars_fragment:Yu,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Ku,iridescence_pars_fragment:$u,opaque_fragment:Qu,packing:ed,premultiplied_alpha_fragment:td,project_vertex:rd,dithering_fragment:id,dithering_pars_fragment:ad,roughnessmap_fragment:nd,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:od,shadowmap_pars_vertex:ld,shadowmap_vertex:hd,shadowmask_pars_fragment:cd,skinbase_vertex:ud,skinning_pars_vertex:dd,skinning_vertex:pd,skinnormal_vertex:fd,specularmap_fragment:md,specularmap_pars_fragment:gd,tonemapping_fragment:_d,tonemapping_pars_fragment:vd,transmission_fragment:xd,transmission_pars_fragment:Md,uv_pars_fragment:yd,uv_pars_vertex:Sd,uv_vertex:Ed,worldpos_vertex:Td,background_vert:bd,background_frag:wd,backgroundCube_vert:Ad,backgroundCube_frag:Rd,cube_vert:Cd,cube_frag:Pd,depth_vert:Ld,depth_frag:Nd,distanceRGBA_vert:Ud,distanceRGBA_frag:Id,equirect_vert:Dd,equirect_frag:Od,linedashed_vert:Fd,linedashed_frag:Bd,meshbasic_vert:zd,meshbasic_frag:Vd,meshlambert_vert:Hd,meshlambert_frag:kd,meshmatcap_vert:Gd,meshmatcap_frag:Wd,meshnormal_vert:Xd,meshnormal_frag:jd,meshphong_vert:qd,meshphong_frag:Yd,meshphysical_vert:Zd,meshphysical_frag:Jd,meshtoon_vert:Kd,meshtoon_frag:$d,points_vert:Qd,points_frag:ep,shadow_vert:tp,shadow_frag:rp,sprite_vert:ip,sprite_frag:ap},_e={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Xt={basic:{uniforms:vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:vt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:vt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:vt([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:vt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:vt([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:vt([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:vt([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:vt([_e.lights,_e.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Xt.physical={uniforms:vt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Sa={r:0,b:0,g:0},Ir=new vr,np=new at;function sp(e,t,r,i,a,n,s){let o=new ke(0),l=n===!0?0:1,h,c,u=null,d=0,p=null;function _(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?r:t).get(M)),M}function g(w){let M=!1,E=_(w);E===null?f(o,l):E&&E.isColor&&(f(E,1),M=!0);let F=e.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,s):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(w,M){let E=_(M);E&&(E.isCubeTexture||E.mapping===Yi)?(c===void 0&&(c=new pt(new wt(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:ci(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Ir.copy(M.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(np.makeRotationFromEuler(Ir)),c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,(u!==E||d!==E.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=e.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new pt(new Wt(2,2),new Gt({name:"BackgroundMaterial",uniforms:ci(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=e.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,M){w.getRGB(Sa,zo(e)),i.buffers.color.setClear(Sa.r,Sa.g,Sa.b,M,s)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:g,addToRenderList:m}}function op(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null),n=a,s=!1;function o(S,C,O,B,H){let Z=!1,W=u(B,O,C);n!==W&&(n=W,h(n.object)),Z=p(S,B,O,H),Z&&_(S,B,O,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,E(S,C,O,B),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function u(S,C,O){let B=O.wireframe===!0,H=i[S.id];H===void 0&&(H={},i[S.id]=H);let Z=H[C.id];Z===void 0&&(Z={},H[C.id]=Z);let W=Z[B];return W===void 0&&(W=d(l()),Z[B]=W),W}function d(S){let C=[],O=[],B=[];for(let H=0;H<r;H++)C[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,C,O,B){let H=n.attributes,Z=C.attributes,W=0,ae=O.getAttributes();for(let j in ae)if(ae[j].location>=0){let oe=H[j],fe=Z[j];if(fe===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;W++}return n.attributesNum!==W||n.index!==B}function _(S,C,O,B){let H={},Z=C.attributes,W=0,ae=O.getAttributes();for(let j in ae)if(ae[j].location>=0){let oe=Z[j];oe===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));let fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),H[j]=fe,W++}n.attributes=H,n.attributesNum=W,n.index=B}function g(){let S=n.newAttributes;for(let C=0,O=S.length;C<O;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){let O=n.newAttributes,B=n.enabledAttributes,H=n.attributeDivisors;O[S]=1,B[S]===0&&(e.enableVertexAttribArray(S),B[S]=1),H[S]!==C&&(e.vertexAttribDivisor(S,C),H[S]=C)}function w(){let S=n.newAttributes,C=n.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==S[O]&&(e.disableVertexAttribArray(O),C[O]=0)}function M(S,C,O,B,H,Z,W){W===!0?e.vertexAttribIPointer(S,C,O,H,Z):e.vertexAttribPointer(S,C,O,B,H,Z)}function E(S,C,O,B){g();let H=B.attributes,Z=O.getAttributes(),W=C.defaultAttributeValues;for(let ae in Z){let j=Z[ae];if(j.location>=0){let oe=H[ae];if(oe===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){let fe=oe.normalized,Ne=oe.itemSize,Be=t.get(oe);if(Be===void 0)continue;let q=Be.buffer,se=Be.type,be=Be.bytesPerElement,Ee=se===e.INT||se===e.UNSIGNED_INT||oe.gpuType===Ka;if(oe.isInterleavedBufferAttribute){let ue=oe.data,Ue=ue.stride,ze=oe.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<j.locationSize;Fe++)f(j.location+Fe,ue.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<j.locationSize;Fe++)m(j.location+Fe);e.bindBuffer(e.ARRAY_BUFFER,q);for(let Fe=0;Fe<j.locationSize;Fe++)M(j.location+Fe,Ne/j.locationSize,se,fe,Ue*be,(ze+Ne/j.locationSize*Fe)*be,Ee)}else{if(oe.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)f(j.location+ue,oe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ue=0;ue<j.locationSize;ue++)m(j.location+ue);e.bindBuffer(e.ARRAY_BUFFER,q);for(let ue=0;ue<j.locationSize;ue++)M(j.location+ue,Ne/j.locationSize,se,fe,Ne*be,Ne/j.locationSize*ue*be,Ee)}}else if(W!==void 0){let fe=W[ae];if(fe!==void 0)switch(fe.length){case 2:e.vertexAttrib2fv(j.location,fe);break;case 3:e.vertexAttrib3fv(j.location,fe);break;case 4:e.vertexAttrib4fv(j.location,fe);break;default:e.vertexAttrib1fv(j.location,fe)}}}}w()}function F(){D();for(let S in i){let C=i[S];for(let O in C){let B=C[O];for(let H in B)c(B[H].object),delete B[H];delete C[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let C=i[S.id];for(let O in C){let B=C[O];for(let H in B)c(B[H].object),delete B[H];delete C[O]}delete i[S.id]}function A(S){for(let C in i){let O=i[C];if(O[S.id]===void 0)continue;let B=O[S.id];for(let H in B)c(B[H].object),delete B[H];delete O[S.id]}}function D(){y(),s=!0,n!==a&&(n=a,h(n.object))}function y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function lp(e,t,r){let i;function a(h){i=h}function n(h,c){e.drawArrays(i,h,c),r.update(c,i,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(i,h,c,u),r.update(c,i,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];r.update(d,i,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h.length;_++)s(h[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=c[g]*d[g];r.update(_,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hp(e,t,r,i){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Dt&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let D=A===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Qt&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==er&&!D)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=r.precision!==void 0?r.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:F,maxSamples:R}}function cp(e){let t=this,r=null,i=0,a=!1,n=!1,s=new Nr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||a;return a=d,i=u.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){r=c(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!a||_===null||_.length===0||n&&!m)n?c(null):h();else{let w=n?0:i,M=w*4,E=f.clippingState||null;l.value=E,E=c(_,d,M,p);for(let F=0;F!==M;++F)E[F]=r[F];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,p,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let f=p+g*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,E=p;M!==g;++M,E+=4)s.copy(u[M]).applyMatrix4(w,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function up(e){let t=new WeakMap;function r(s,o){return o===qa?s.mapping=kr:o===Ya&&(s.mapping=Gr),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===qa||o===Ya)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Sc(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),r(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:i,dispose:n}}var Xo=class extends Vo{constructor(e=-1,t=1,r=1,i=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-e,n=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pi=4,jo=[.125,.215,.35,.446,.526,.582],Dr=20,as=new Xo,qo=new ke,ns=null,ss=0,os=0,ls=!1,Or=(1+Math.sqrt(5))/2,fi=1/Or,Yo=[new L(-Or,fi,0),new L(Or,fi,0),new L(-fi,0,Or),new L(fi,0,Or),new L(0,Or,-fi),new L(0,Or,fi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],hs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){ns=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ns,ss,os),this._renderer.xr.enabled=ls,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ns=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:It,minFilter:It,generateMipmaps:!1,type:Wr,format:Dt,colorSpace:Yr,depthBuffer:!1},i=Zo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,r);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(a)),this._blurMaterial=pp(a,e,t)}return i}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,as)}_sceneToCubeUV(e,t,r,i){let a=new St(90,1,t,r),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(qo),o.toneMapping=Kt,o.autoClear=!1;let c=new Pr({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),u=new pt(new wt,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(qo),d=!0);for(let _=0;_<6;_++){let g=_%3;g===0?(a.up.set(0,n[_],0),a.lookAt(s[_],0,0)):g===1?(a.up.set(0,0,n[_]),a.lookAt(0,s[_],0)):(a.up.set(0,n[_],0),a.lookAt(0,0,s[_]));let m=this._cubeSize;Ea(i,g*m,_>2?m:0,m,m),o.setRenderTarget(i),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===kr||e.mapping===Gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());let a=i?this._cubemapMaterial:this._equirectMaterial,n=new pt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Ea(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(n,as)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let a=1;a<i;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Yo[(i-a-1)%Yo.length];this._blur(e,a-1,a,n,s)}t.autoClear=r}_blur(e,t,r,i,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,i,"latitudinal",a),this._halfBlur(n,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new pt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[r]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Dr-1),_=a/p,g=isFinite(a)?1+Math.floor(h*_):Dr;g>Dr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);let m=[],f=0;for(let R=0;R<Dr;++R){let A=R/_,D=Math.exp(-A*A/2);m.push(D),R===0?f+=D:R<g&&(f+=2*D)}for(let R=0;R<m.length;R++)m[R]=m[R]/f;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:w}=this;u.dTheta.value=p,u.mipInt.value=w-r;let M=this._sizeLods[i],E=3*M*(i>w-pi?i-w+pi:0),F=4*(this._cubeSize-M);Ea(t,E,F,3*M,2*M),o.setRenderTarget(t),o.render(c,as)}};function dp(e){let t=[],r=[],i=[],a=e,n=e-pi+1+jo.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);r.push(o);let l=1/o;s>e-pi?l=jo[s-e+pi-1]:s===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,_=6,g=3,m=2,f=1,w=new Float32Array(g*_*p),M=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let R=0;R<p;R++){let A=R%3*2/3-1,D=R>2?0:-1,y=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];w.set(y,g*_*R),M.set(d,m*_*R);let S=[R,R,R,R,R,R];E.set(S,f*_*R)}let F=new Mr;F.setAttribute("position",new zt(w,g)),F.setAttribute("uv",new zt(M,m)),F.setAttribute("faceIndex",new zt(E,f)),t.push(F),a>pi&&a--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function Zo(e,t,r){let i=new pr(e,t,r);return i.texture.mapping=Yi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(e,t,r,i,a){e.viewport.set(t,r,i,a),e.scissor.set(t,r,i,a)}function pp(e,t,r){let i=new Float32Array(Dr),a=new L(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cs(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Jo(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cs(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ko(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function cs(){return`

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
	`}function fp(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===qa||l===Ya,c=l===kr||l===Gr;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return r===null&&(r=new hs(e)),u=h?r.fromEquirectangular(o,u):r.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(r===null&&(r=new hs(e)),u=h?r.fromEquirectangular(o):r.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function mp(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let a=r(i);return a===null&&wi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function gp(e,t,r,i){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",s),delete a[d.id];let p=n.get(d);p&&(t.remove(p),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,r.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)t.update(d[_],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,_=u.attributes.position,g=0;if(p!==null){let w=p.array;g=p.version;for(let M=0,E=w.length;M<E;M+=3){let F=w[M+0],R=w[M+1],A=w[M+2];d.push(F,R,R,A,A,F)}}else if(_!==void 0){let w=_.array;g=_.version;for(let M=0,E=w.length/3-1;M<E;M+=3){let F=M+0,R=M+1,A=M+2;d.push(F,R,R,A,A,F)}}else return;let m=new(fo(d)?Do:Io)(d,1);m.version=g;let f=n.get(u);f&&t.remove(f),n.set(u,m)}function c(u){let d=n.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function _p(e,t,r){let i;function a(d){i=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,p){e.drawElements(i,p,n,d*s),r.update(p,i,1)}function h(d,p,_){_!==0&&(e.drawElementsInstanced(i,p,n,d*s,_),r.update(p,i,_))}function c(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,n,d,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];r.update(g,i,1)}function u(d,p,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,n,d,0,g,0,_);let f=0;for(let w=0;w<_;w++)f+=p[w]*g[w];r.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function vp(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(n/3);break;case e.LINES:r.lines+=o*(n/2);break;case e.LINE_STRIP:r.lines+=o*(n-1);break;case e.LINE_LOOP:r.lines+=o*n;break;case e.POINTS:r.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:a,update:i}}function xp(e,t,r){let i=new WeakMap,a=new Ke;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(o);if(d===void 0||d.count!==u){let p=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let F=o.attributes.position.count*E,R=1;F>t.maxTextureSize&&(R=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);let A=new Float32Array(F*R*4*u),D=new So(A,F,R,u);D.type=er,D.needsUpdate=!0;let y=E*4;for(let S=0;S<u;S++){let C=f[S],O=w[S],B=M[S],H=F*R*4*S;for(let Z=0;Z<C.count;Z++){let W=Z*y;_===!0&&(a.fromBufferAttribute(C,Z),A[H+W+0]=a.x,A[H+W+1]=a.y,A[H+W+2]=a.z,A[H+W+3]=0),g===!0&&(a.fromBufferAttribute(O,Z),A[H+W+4]=a.x,A[H+W+5]=a.y,A[H+W+6]=a.z,A[H+W+7]=0),m===!0&&(a.fromBufferAttribute(B,Z),A[H+W+8]=a.x,A[H+W+9]=a.y,A[H+W+10]=a.z,A[H+W+11]=B.itemSize===4?a.w:1)}}d={count:u,texture:D,size:new ge(F,R)},i.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function Mp(e,t,r,i){let a=new WeakMap;function n(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),r.remove(h.instanceMatrix),h.instanceColor!==null&&r.remove(h.instanceColor)}return{update:n,dispose:s}}var $o=class extends At{constructor(e,t,r,i,a,n,s,o,l,h=jr){if(h!==jr&&h!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===jr&&(r=Ar),r===void 0&&h===qr&&(r=Xr),super(null,i,a,n,s,o,h,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ut,this.minFilter=o!==void 0?o:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qo=new At,el=new $o(1,1),tl=new So,rl=new sc,il=new Go,al=[],nl=[],sl=new Float32Array(16),ol=new Float32Array(9),ll=new Float32Array(4);function mi(e,t,r){let i=e[0];if(i<=0||i>0)return e;let a=t*r,n=al[a];if(n===void 0&&(n=new Float32Array(a),al[a]=n),t!==0){i.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(n,o)}return n}function lt(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function ht(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function Ta(e,t){let r=nl[t];r===void 0&&(r=new Int32Array(t),nl[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function yp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function Sp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(lt(r,t))return;e.uniform2fv(this.addr,t),ht(r,t)}}function Ep(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(lt(r,t))return;e.uniform3fv(this.addr,t),ht(r,t)}}function Tp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(lt(r,t))return;e.uniform4fv(this.addr,t),ht(r,t)}}function bp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(lt(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),ht(r,t)}else{if(lt(r,i))return;ll.set(i),e.uniformMatrix2fv(this.addr,!1,ll),ht(r,i)}}function wp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(lt(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),ht(r,t)}else{if(lt(r,i))return;ol.set(i),e.uniformMatrix3fv(this.addr,!1,ol),ht(r,i)}}function Ap(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(lt(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),ht(r,t)}else{if(lt(r,i))return;sl.set(i),e.uniformMatrix4fv(this.addr,!1,sl),ht(r,i)}}function Rp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function Cp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(lt(r,t))return;e.uniform2iv(this.addr,t),ht(r,t)}}function Pp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(lt(r,t))return;e.uniform3iv(this.addr,t),ht(r,t)}}function Lp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(lt(r,t))return;e.uniform4iv(this.addr,t),ht(r,t)}}function Np(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function Up(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(lt(r,t))return;e.uniform2uiv(this.addr,t),ht(r,t)}}function Ip(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(lt(r,t))return;e.uniform3uiv(this.addr,t),ht(r,t)}}function Dp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(lt(r,t))return;e.uniform4uiv(this.addr,t),ht(r,t)}}function Op(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(el.compareFunction=co,n=el):n=Qo,r.setTexture2D(t||n,a)}function Fp(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(t||rl,a)}function Bp(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(t||il,a)}function zp(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(t||tl,a)}function Vp(e){switch(e){case 5126:return yp;case 35664:return Sp;case 35665:return Ep;case 35666:return Tp;case 35674:return bp;case 35675:return wp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Np;case 36294:return Up;case 36295:return Ip;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function Hp(e,t){e.uniform1fv(this.addr,t)}function kp(e,t){let r=mi(t,this.size,2);e.uniform2fv(this.addr,r)}function Gp(e,t){let r=mi(t,this.size,3);e.uniform3fv(this.addr,r)}function Wp(e,t){let r=mi(t,this.size,4);e.uniform4fv(this.addr,r)}function Xp(e,t){let r=mi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function jp(e,t){let r=mi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function qp(e,t){let r=mi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function Yp(e,t){e.uniform1iv(this.addr,t)}function Zp(e,t){e.uniform2iv(this.addr,t)}function Jp(e,t){e.uniform3iv(this.addr,t)}function Kp(e,t){e.uniform4iv(this.addr,t)}function $p(e,t){e.uniform1uiv(this.addr,t)}function Qp(e,t){e.uniform2uiv(this.addr,t)}function ef(e,t){e.uniform3uiv(this.addr,t)}function tf(e,t){e.uniform4uiv(this.addr,t)}function rf(e,t,r){let i=this.cache,a=t.length,n=Ta(r,a);lt(i,n)||(e.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)r.setTexture2D(t[s]||Qo,n[s])}function af(e,t,r){let i=this.cache,a=t.length,n=Ta(r,a);lt(i,n)||(e.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)r.setTexture3D(t[s]||rl,n[s])}function nf(e,t,r){let i=this.cache,a=t.length,n=Ta(r,a);lt(i,n)||(e.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)r.setTextureCube(t[s]||il,n[s])}function sf(e,t,r){let i=this.cache,a=t.length,n=Ta(r,a);lt(i,n)||(e.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)r.setTexture2DArray(t[s]||tl,n[s])}function of(e){switch(e){case 5126:return Hp;case 35664:return kp;case 35665:return Gp;case 35666:return Wp;case 35674:return Xp;case 35675:return jp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return Kp;case 5125:return $p;case 36294:return Qp;case 36295:return ef;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return sf}}var lf=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Vp(t.type)}},hf=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=of(t.type)}},cf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let a=0,n=i.length;a!==n;++a){let s=i[a];s.setValue(e,t[s.id],r)}}},us=/(\w+)(\])?(\[|\.)?/g;function hl(e,t){e.seq.push(t),e.map[t.id]=t}function uf(e,t,r){let i=e.name,a=i.length;for(us.lastIndex=0;;){let n=us.exec(i),s=us.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){hl(r,h===void 0?new lf(o,e,t):new hf(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new cf(o),hl(r,c)),r=c}}}var ba=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let a=e.getActiveUniform(t,i),n=e.getUniformLocation(t,a.name);uf(a,n,this)}}setValue(e,t,r,i){let a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,a=e.length;i!==a;++i){let n=e[i];n.id in t&&r.push(n)}return r}};function cl(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var df=37297,pf=0;function ff(e,t){let r=e.split(`
`),i=[],a=Math.max(t-6,0),n=Math.min(t+6,r.length);for(let s=a;s<n;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var ul=new je;function mf(e){qe._getMatrix(ul,qe.workingColorSpace,e);let t=`mat3( ${ul.elements.map(r=>r.toFixed(4))} )`;switch(qe.getTransfer(e)){case ia:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function dl(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return r.toUpperCase()+`

`+a+`

`+ff(e.getShaderSource(t),s)}else return a}function gf(e,t){let r=mf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function _f(e,t){let r;switch(t){case Ih:r="Linear";break;case Dh:r="Reinhard";break;case Oh:r="Cineon";break;case qs:r="ACESFilmic";break;case Bh:r="AgX";break;case zh:r="Neutral";break;case Fh:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var wa=new L;function vf(){qe.getLuminanceCoefficients(wa);let e=wa.x.toFixed(4),t=wa.y.toFixed(4),r=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Mf(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function yf(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),r[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function Ii(e){return e!==""}function pl(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ds(e){return e.replace(Sf,Tf)}var Ef=new Map;function Tf(e,t){let r=Ge[t];if(r===void 0){let i=Ef.get(t);if(i!==void 0)r=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ds(r)}var bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(e){return e.replace(bf,wf)}function wf(e,t,r,i){let a="";for(let n=parseInt(t);n<parseInt(r);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function gl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Af(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ks?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Jt&&(t="SHADOWMAP_TYPE_VSM"),t}function Rf(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case kr:case Gr:t="ENVMAP_TYPE_CUBE";break;case Yi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cf(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Gr&&(t="ENVMAP_MODE_REFRACTION"),t}function Pf(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case js:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case Uh:t="ENVMAP_BLENDING_ADD";break}return t}function Lf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function Nf(e,t,r,i){let a=e.getContext(),n=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Af(r),h=Rf(r),c=Cf(r),u=Pf(r),d=Lf(r),p=xf(r),_=Mf(n),g=a.createProgram(),m,f,w=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(Ii).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(Ii).join(`
`),f.length>0&&(f+=`
`)):(m=[gl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),f=[gl(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.envMap?"#define "+c:"",r.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Kt?"#define TONE_MAPPING":"",r.toneMapping!==Kt?Ge.tonemapping_pars_fragment:"",r.toneMapping!==Kt?_f("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,gf("linearToOutputTexel",r.outputColorSpace),vf(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Ii).join(`
`)),s=ds(s),s=pl(s,r),s=fl(s,r),o=ds(o),o=pl(o,r),o=fl(o,r),s=ml(s),o=ml(o),r.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",r.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=w+m+s,E=w+f+o,F=cl(a,a.VERTEX_SHADER,M),R=cl(a,a.FRAGMENT_SHADER,E);a.attachShader(g,F),a.attachShader(g,R),r.index0AttributeName!==void 0?a.bindAttribLocation(g,0,r.index0AttributeName):r.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function A(C){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(g).trim(),B=a.getShaderInfoLog(F).trim(),H=a.getShaderInfoLog(R).trim(),Z=!0,W=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,F,R);else{let ae=dl(a,F,"vertex"),j=dl(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+ae+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||H==="")&&(W=!1);W&&(C.diagnostics={runnable:Z,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:f}})}a.deleteShader(F),a.deleteShader(R),D=new ba(a,g),y=yf(a,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(g,df)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=pf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=R,this}var Uf=0,If=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new Df(e),t.set(e,r)),r}},Df=class{constructor(e){this.id=Uf++,this.code=e,this.usedTimes=0}};function Of(e,t,r,i,a,n,s){let o=new Wn,l=new If,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,S,C,O,B){let H=O.fog,Z=B.geometry,W=y.isMeshStandardMaterial?O.environment:null,ae=(y.isMeshStandardMaterial?r:t).get(y.envMap||W),j=ae&&ae.mapping===Yi?ae.image.height:null,oe=_[y.type];y.precision!==null&&(p=a.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ne=fe!==void 0?fe.length:0,Be=0;Z.morphAttributes.position!==void 0&&(Be=1),Z.morphAttributes.normal!==void 0&&(Be=2),Z.morphAttributes.color!==void 0&&(Be=3);let q,se,be,Ee;if(oe){let Ze=Xt[oe];q=Ze.vertexShader,se=Ze.fragmentShader}else q=y.vertexShader,se=y.fragmentShader,l.update(y),be=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);let ue=e.getRenderTarget(),Ue=e.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,Q=!!y.map,ce=!!y.matcap,b=!!ae,ye=!!y.aoMap,he=!!y.lightMap,ve=!!y.bumpMap,te=!!y.normalMap,De=!!y.displacementMap,xe=!!y.emissiveMap,Se=!!y.metalnessMap,T=!!y.roughnessMap,v=y.anisotropy>0,I=y.clearcoat>0,$=y.dispersion>0,ee=y.iridescence>0,Y=y.sheen>0,Le=y.transmission>0,k=v&&!!y.anisotropyMap,J=I&&!!y.clearcoatMap,ne=I&&!!y.clearcoatNormalMap,G=I&&!!y.clearcoatRoughnessMap,ie=ee&&!!y.iridescenceMap,Te=ee&&!!y.iridescenceThicknessMap,Re=Y&&!!y.sheenColorMap,pe=Y&&!!y.sheenRoughnessMap,we=!!y.specularMap,Ie=!!y.specularColorMap,We=!!y.specularIntensityMap,P=Le&&!!y.transmissionMap,re=Le&&!!y.thicknessMap,X=!!y.gradientMap,K=!!y.alphaMap,me=y.alphaTest>0,de=!!y.alphaHash,Xe=!!y.extensions,it=Kt;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=e.toneMapping);let ut={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:se,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Yr,alphaToCoverage:!!y.alphaToCoverage,map:Q,matcap:ce,envMap:b,envMapMode:b&&ae.mapping,envMapCubeUVHeight:j,aoMap:ye,lightMap:he,bumpMap:ve,normalMap:te,displacementMap:d&&De,emissiveMap:xe,normalMapObjectSpace:te&&y.normalMapType===Gh,normalMapTangentSpace:te&&y.normalMapType===lo,metalnessMap:Se,roughnessMap:T,anisotropy:v,anisotropyMap:k,clearcoat:I,clearcoatMap:J,clearcoatNormalMap:ne,clearcoatRoughnessMap:G,dispersion:$,iridescence:ee,iridescenceMap:ie,iridescenceThicknessMap:Te,sheen:Y,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:we,specularColorMap:Ie,specularIntensityMap:We,transmission:Le,transmissionMap:P,thicknessMap:re,gradientMap:X,opaque:y.transparent===!1&&y.blending===Vr&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:me,alphaHash:de,combine:y.combine,mapUv:Q&&g(y.map.channel),aoMapUv:ye&&g(y.aoMap.channel),lightMapUv:he&&g(y.lightMap.channel),bumpMapUv:ve&&g(y.bumpMap.channel),normalMapUv:te&&g(y.normalMap.channel),displacementMapUv:De&&g(y.displacementMap.channel),emissiveMapUv:xe&&g(y.emissiveMap.channel),metalnessMapUv:Se&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:k&&g(y.anisotropyMap.channel),clearcoatMapUv:J&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(y.sheenRoughnessMap.channel),specularMapUv:we&&g(y.specularMap.channel),specularColorMapUv:Ie&&g(y.specularColorMap.channel),specularIntensityMapUv:We&&g(y.specularIntensityMap.channel),transmissionMapUv:P&&g(y.transmissionMap.channel),thicknessMapUv:re&&g(y.thicknessMap.channel),alphaMapUv:K&&g(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(te||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Q||K),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Q&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kt,flipSided:y.side===Mt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&y.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=h.has(1),ut.vertexUv2s=h.has(2),ut.vertexUv3s=h.has(3),h.clear(),ut}function f(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(w(S,y),M(S,y),S.push(e.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function w(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){let S=_[y.type],C;if(S){let O=Xt[S];C=vc.clone(O.uniforms)}else C=y.uniforms;return C}function F(y,S){let C;for(let O=0,B=c.length;O<B;O++){let H=c[O];if(H.cacheKey===S){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Nf(e,S,y,n),c.push(C)),C}function R(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:F,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:D}}function Ff(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:r,remove:i,update:a,dispose:n}}function Bf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function _l(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function vl(){let e=[],t=0,r=[],i=[],a=[];function n(){t=0,r.length=0,i.length=0,a.length=0}function s(u,d,p,_,g,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,_,g,m){let f=s(u,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):r.push(f)}function l(u,d,p,_,g,m){let f=s(u,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):r.unshift(f)}function h(u,d){r.length>1&&r.sort(u||Bf),i.length>1&&i.sort(d||_l),a.length>1&&a.sort(d||_l)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:r,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function zf(){let e=new WeakMap;function t(i,a){let n=e.get(i),s;return n===void 0?(s=new vl,e.set(i,[s])):a>=n.length?(s=new vl,n.push(s)):s=n[a],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function Vf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new L,color:new ke};break;case"SpotLight":r={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":r={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":r={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=r,r}}}function Hf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var kf=0;function Gf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Wf(e){let t=new Vf,r=Hf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let a=new L,n=new at,s=new at;function o(h){let c=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,w=0,M=0,E=0,F=0,R=0,A=0;h.sort(Gf);for(let y=0,S=h.length;y<S;y++){let C=h[y],O=C.color,B=C.intensity,H=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=O.r*B,u+=O.g*B,d+=O.b*B;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],B);A++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ae=C.shadow,j=r.get(C);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=C.shadow.matrix,w++}i.directional[p]=W,p++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[g]=W;let ae=C.shadow;if(C.map&&(i.spotLightMap[F]=C.map,F++,ae.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[g]=ae.matrix,C.castShadow){let j=r.get(C);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,i.spotShadow[g]=j,i.spotShadowMap[g]=Z,E++}g++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let ae=C.shadow,j=r.get(C);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,j.shadowCameraNear=ae.camera.near,j.shadowCameraFar=ae.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=C.shadow.matrix,M++}i.point[_]=W,_++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(B),W.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[f]=W,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==M||D.numSpotShadows!==E||D.numSpotMaps!==F||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+F-R,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,D.directionalLength=p,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=M,D.numSpotShadows=E,D.numSpotMaps=F,D.numLightProbes=A,i.version=kf++)}function l(h,c){let u=0,d=0,p=0,_=0,g=0,m=c.matrixWorldInverse;for(let f=0,w=h.length;f<w;f++){let M=h[f];if(M.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),u++}else if(M.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),s.identity(),n.copy(M.matrixWorld),n.premultiply(m),s.extractRotation(n),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(M.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function xl(e){let t=new Wf(e),r=[],i=[];function a(c){h.camera=c,r.length=0,i.length=0}function n(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let h={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function Xf(e){let t=new WeakMap;function r(a,n=0){let s=t.get(a),o;return s===void 0?(o=new xl(e),t.set(a,[o])):n>=s.length?(o=new xl(e),s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var jf=class extends Ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qf=class extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zf=`uniform sampler2D shadow_pass;
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
}`;function Jf(e,t,r){let i=new is,a=new ge,n=new ge,s=new Ke,o=new jf({depthPacking:kh}),l=new qf,h={},c=r.maxTextureSize,u={[cr]:Mt,[Mt]:cr,[kt]:kt},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Yf,fragmentShader:Zf}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new Mr;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new pt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let f=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let y=e.getRenderTarget(),S=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),O=e.state;O.setBlending(ur),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=f!==Jt&&this.type===Jt,H=f===Jt&&this.type!==Jt;for(let Z=0,W=R.length;Z<W;Z++){let ae=R[Z],j=ae.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);let oe=j.getFrameExtents();if(a.multiply(oe),n.copy(j.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/oe.x),a.x=n.x*oe.x,j.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/oe.y),a.y=n.y*oe.y,j.mapSize.y=n.y)),j.map===null||B===!0||H===!0){let Ne=this.type!==Jt?{minFilter:Ut,magFilter:Ut}:{};j.map!==null&&j.map.dispose(),j.map=new pr(a.x,a.y,Ne),j.map.texture.name=ae.name+".shadowMap",j.camera.updateProjectionMatrix()}e.setRenderTarget(j.map),e.clear();let fe=j.getViewportCount();for(let Ne=0;Ne<fe;Ne++){let Be=j.getViewport(Ne);s.set(n.x*Be.x,n.y*Be.y,n.x*Be.z,n.y*Be.w),O.viewport(s),j.updateMatrices(ae,Ne),i=j.getFrustum(),E(A,D,j.camera,ae,this.type)}j.isPointLightShadow!==!0&&this.type===Jt&&w(j,D),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(y,S,C)};function w(R,A){let D=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pr(a.x,a.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(A,null,D,d,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(A,null,D,p,g,null)}function M(R,A,D,y){let S=null,C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=D.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=S.uuid,B=A.uuid,H=h[O];H===void 0&&(H={},h[O]=H);let Z=H[B];Z===void 0&&(Z=S.clone(),H[B]=Z,A.addEventListener("dispose",F)),S=Z}if(S.visible=A.visible,S.wireframe=A.wireframe,y===Jt?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=e.properties.get(S);O.light=D}return S}function E(R,A,D,y,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Jt)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let O=t.update(R),B=R.material;if(Array.isArray(B)){let H=O.groups;for(let Z=0,W=H.length;Z<W;Z++){let ae=H[Z],j=B[ae.materialIndex];if(j&&j.visible){let oe=M(R,j,y,S);R.onBeforeShadow(e,R,A,D,O,oe,ae),e.renderBufferDirect(D,null,O,oe,R,ae),R.onAfterShadow(e,R,A,D,O,oe,ae)}}}else if(B.visible){let H=M(R,B,y,S);R.onBeforeShadow(e,R,A,D,O,H,null),e.renderBufferDirect(D,null,O,H,R,null),R.onAfterShadow(e,R,A,D,O,H,null)}}let C=R.children;for(let O=0,B=C.length;O<B;O++)E(C[O],A,D,y,S)}function F(R){R.target.removeEventListener("dispose",F);for(let A in h){let D=h[A],y=R.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}var Kf={[Va]:Ha,[ka]:Xa,[Ga]:ja,[Hr]:Wa,[Ha]:Va,[Xa]:ka,[ja]:Ga,[Wa]:Hr};function $f(e,t){function r(){let P=!1,re=new Ke,X=null,K=new Ke(0,0,0,0);return{setMask:function(me){X!==me&&!P&&(e.colorMask(me,me,me,me),X=me)},setLocked:function(me){P=me},setClear:function(me,de,Xe,it,ut){ut===!0&&(me*=it,de*=it,Xe*=it),re.set(me,de,Xe,it),K.equals(re)===!1&&(e.clearColor(me,de,Xe,it),K.copy(re))},reset:function(){P=!1,X=null,K.set(-1,0,0,0)}}}function i(){let P=!1,re=!1,X=null,K=null,me=null;return{setReversed:function(de){if(re!==de){let Xe=t.get("EXT_clip_control");re?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);let it=me;me=null,this.setClear(it)}re=de},getReversed:function(){return re},setTest:function(de){de?ue(e.DEPTH_TEST):Ue(e.DEPTH_TEST)},setMask:function(de){X!==de&&!P&&(e.depthMask(de),X=de)},setFunc:function(de){if(re&&(de=Kf[de]),K!==de){switch(de){case Va:e.depthFunc(e.NEVER);break;case Ha:e.depthFunc(e.ALWAYS);break;case ka:e.depthFunc(e.LESS);break;case Hr:e.depthFunc(e.LEQUAL);break;case Ga:e.depthFunc(e.EQUAL);break;case Wa:e.depthFunc(e.GEQUAL);break;case Xa:e.depthFunc(e.GREATER);break;case ja:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=de}},setLocked:function(de){P=de},setClear:function(de){me!==de&&(re&&(de=1-de),e.clearDepth(de),me=de)},reset:function(){P=!1,X=null,K=null,me=null,re=!1}}}function a(){let P=!1,re=null,X=null,K=null,me=null,de=null,Xe=null,it=null,ut=null;return{setTest:function(Ze){P||(Ze?ue(e.STENCIL_TEST):Ue(e.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!P&&(e.stencilMask(Ze),re=Ze)},setFunc:function(Ze,Zt,Vt){(X!==Ze||K!==Zt||me!==Vt)&&(e.stencilFunc(Ze,Zt,Vt),X=Ze,K=Zt,me=Vt)},setOp:function(Ze,Zt,Vt){(de!==Ze||Xe!==Zt||it!==Vt)&&(e.stencilOp(Ze,Zt,Vt),de=Ze,Xe=Zt,it=Vt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){ut!==Ze&&(e.clearStencil(Ze),ut=Ze)},reset:function(){P=!1,re=null,X=null,K=null,me=null,de=null,Xe=null,it=null,ut=null}}}let n=new r,s=new i,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,w=null,M=null,E=null,F=null,R=null,A=new ke(0,0,0),D=0,y=!1,S=null,C=null,O=null,B=null,H=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ae=0,j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=ae>=1):j.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=ae>=2);let oe=null,fe={},Ne=e.getParameter(e.SCISSOR_BOX),Be=e.getParameter(e.VIEWPORT),q=new Ke().fromArray(Ne),se=new Ke().fromArray(Be);function be(P,re,X,K){let me=new Uint8Array(4),de=e.createTexture();e.bindTexture(P,de),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Xe=0;Xe<X;Xe++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(re,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,me):e.texImage2D(re+Xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,me);return de}let Ee={};Ee[e.TEXTURE_2D]=be(e.TEXTURE_2D,e.TEXTURE_2D,1),Ee[e.TEXTURE_CUBE_MAP]=be(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[e.TEXTURE_2D_ARRAY]=be(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ee[e.TEXTURE_3D]=be(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(e.DEPTH_TEST),s.setFunc(Hr),ve(!1),te(Hs),ue(e.CULL_FACE),ye(ur);function ue(P){c[P]!==!0&&(e.enable(P),c[P]=!0)}function Ue(P){c[P]!==!1&&(e.disable(P),c[P]=!1)}function ze(P,re){return u[P]!==re?(e.bindFramebuffer(P,re),u[P]=re,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=re),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=re),!0):!1}function Fe(P,re){let X=p,K=!1;if(P){X=d.get(re),X===void 0&&(X=[],d.set(re,X));let me=P.textures;if(X.length!==me.length||X[0]!==e.COLOR_ATTACHMENT0){for(let de=0,Xe=me.length;de<Xe;de++)X[de]=e.COLOR_ATTACHMENT0+de;X.length=me.length,K=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,K=!0);K&&e.drawBuffers(X)}function Q(P){return _!==P?(e.useProgram(P),_=P,!0):!1}let ce={[br]:e.FUNC_ADD,[mh]:e.FUNC_SUBTRACT,[gh]:e.FUNC_REVERSE_SUBTRACT};ce[_h]=e.MIN,ce[vh]=e.MAX;let b={[xh]:e.ZERO,[Mh]:e.ONE,[yh]:e.SRC_COLOR,[Ba]:e.SRC_ALPHA,[Ah]:e.SRC_ALPHA_SATURATE,[bh]:e.DST_COLOR,[Eh]:e.DST_ALPHA,[Sh]:e.ONE_MINUS_SRC_COLOR,[za]:e.ONE_MINUS_SRC_ALPHA,[wh]:e.ONE_MINUS_DST_COLOR,[Th]:e.ONE_MINUS_DST_ALPHA,[Rh]:e.CONSTANT_COLOR,[Ch]:e.ONE_MINUS_CONSTANT_COLOR,[Ph]:e.CONSTANT_ALPHA,[Lh]:e.ONE_MINUS_CONSTANT_ALPHA};function ye(P,re,X,K,me,de,Xe,it,ut,Ze){if(P===ur){g===!0&&(Ue(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),P!==fh){if(P!==m||Ze!==y){if((f!==br||E!==br)&&(e.blendEquation(e.FUNC_ADD),f=br,E=br),Ze)switch(P){case Vr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gs:e.blendFunc(e.ONE,e.ONE);break;case Ws:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xs:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gs:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Ws:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xs:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,M=null,F=null,R=null,A.set(0,0,0),D=0,m=P,y=Ze}return}me=me||re,de=de||X,Xe=Xe||K,(re!==f||me!==E)&&(e.blendEquationSeparate(ce[re],ce[me]),f=re,E=me),(X!==w||K!==M||de!==F||Xe!==R)&&(e.blendFuncSeparate(b[X],b[K],b[de],b[Xe]),w=X,M=K,F=de,R=Xe),(it.equals(A)===!1||ut!==D)&&(e.blendColor(it.r,it.g,it.b,ut),A.copy(it),D=ut),m=P,y=!1}function he(P,re){P.side===kt?Ue(e.CULL_FACE):ue(e.CULL_FACE);let X=P.side===Mt;re&&(X=!X),ve(X),P.blending===Vr&&P.transparent===!1?ye(ur):ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);let K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),xe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):Ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(P){S!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),S=P)}function te(P){P!==uh?(ue(e.CULL_FACE),P!==C&&(P===Hs?e.cullFace(e.BACK):P===dh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ue(e.CULL_FACE),C=P}function De(P){P!==O&&(W&&e.lineWidth(P),O=P)}function xe(P,re,X){P?(ue(e.POLYGON_OFFSET_FILL),(B!==re||H!==X)&&(e.polygonOffset(re,X),B=re,H=X)):Ue(e.POLYGON_OFFSET_FILL)}function Se(P){P?ue(e.SCISSOR_TEST):Ue(e.SCISSOR_TEST)}function T(P){P===void 0&&(P=e.TEXTURE0+Z-1),oe!==P&&(e.activeTexture(P),oe=P)}function v(P,re,X){X===void 0&&(oe===null?X=e.TEXTURE0+Z-1:X=oe);let K=fe[X];K===void 0&&(K={type:void 0,texture:void 0},fe[X]=K),(K.type!==P||K.texture!==re)&&(oe!==X&&(e.activeTexture(X),oe=X),e.bindTexture(P,re||Ee[P]),K.type=P,K.texture=re)}function I(){let P=fe[oe];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){q.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function pe(P){se.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function we(P,re){let X=h.get(re);X===void 0&&(X=new WeakMap,h.set(re,X));let K=X.get(P);K===void 0&&(K=e.getUniformBlockIndex(re,P.name),X.set(P,K))}function Ie(P,re){let X=h.get(re).get(P);l.get(re)!==X&&(e.uniformBlockBinding(re,X,P.__bindingPointIndex),l.set(re,X))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},oe=null,fe={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,w=null,M=null,E=null,F=null,R=null,A=new ke(0,0,0),D=0,y=!1,S=null,C=null,O=null,B=null,H=null,q.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ue,disable:Ue,bindFramebuffer:ze,drawBuffers:Fe,useProgram:Q,setBlending:ye,setMaterial:he,setFlipSided:ve,setCullFace:te,setLineWidth:De,setPolygonOffset:xe,setScissorTest:Se,activeTexture:T,bindTexture:v,unbindTexture:I,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:ie,texImage3D:Te,updateUBOMapping:we,uniformBlockBinding:Ie,texStorage2D:ne,texStorage3D:G,texSubImage2D:Y,texSubImage3D:Le,compressedTexSubImage2D:k,compressedTexSubImage3D:J,scissor:Re,viewport:pe,reset:We}}function Ml(e,t,r,i){let a=Qf(i);switch(r){case $s:return e*t;case eo:return e*t;case to:return e*t*2;case ro:return e*t/a.components*a.byteLength;case en:return e*t/a.components*a.byteLength;case io:return e*t*2/a.components*a.byteLength;case tn:return e*t*2/a.components*a.byteLength;case Qs:return e*t*3/a.components*a.byteLength;case Dt:return e*t*4/a.components*a.byteLength;case rn:return e*t*4/a.components*a.byteLength;case Ki:case $i:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qi:case ea:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nn:case on:return Math.max(e,16)*Math.max(t,8)/4;case an:case sn:return Math.max(e,8)*Math.max(t,8)/2;case ln:case hn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case un:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case mn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case gn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _n:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case vn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case yn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Sn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case En:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Tn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ta:case bn:case wn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ao:case An:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Rn:case Cn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function Qf(e){switch(e){case Qt:case Zs:return{byteLength:1,components:1};case Ei:case Js:case Wr:return{byteLength:2,components:1};case $a:case Qa:return{byteLength:2,components:4};case Ar:case Ka:case er:return{byteLength:4,components:1};case Ks:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function em(e,t,r,i,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ge,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return p?new OffscreenCanvas(T,v):bi("canvas")}function g(T,v,I){let $=1,ee=Se(T);if((ee.width>I||ee.height>I)&&($=I/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor($*ee.width),Le=Math.floor($*ee.height);u===void 0&&(u=_(Y,Le));let k=v?_(Y,Le):u;return k.width=Y,k.height=Le,k.getContext("2d").drawImage(T,0,0,Y,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Le+")."),k}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){e.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(T,v,I,$,ee=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=v;if(v===e.RED&&(I===e.FLOAT&&(Y=e.R32F),I===e.HALF_FLOAT&&(Y=e.R16F),I===e.UNSIGNED_BYTE&&(Y=e.R8)),v===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.R8UI),I===e.UNSIGNED_SHORT&&(Y=e.R16UI),I===e.UNSIGNED_INT&&(Y=e.R32UI),I===e.BYTE&&(Y=e.R8I),I===e.SHORT&&(Y=e.R16I),I===e.INT&&(Y=e.R32I)),v===e.RG&&(I===e.FLOAT&&(Y=e.RG32F),I===e.HALF_FLOAT&&(Y=e.RG16F),I===e.UNSIGNED_BYTE&&(Y=e.RG8)),v===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.RG8UI),I===e.UNSIGNED_SHORT&&(Y=e.RG16UI),I===e.UNSIGNED_INT&&(Y=e.RG32UI),I===e.BYTE&&(Y=e.RG8I),I===e.SHORT&&(Y=e.RG16I),I===e.INT&&(Y=e.RG32I)),v===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),I===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),I===e.UNSIGNED_INT&&(Y=e.RGB32UI),I===e.BYTE&&(Y=e.RGB8I),I===e.SHORT&&(Y=e.RGB16I),I===e.INT&&(Y=e.RGB32I)),v===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),I===e.UNSIGNED_INT&&(Y=e.RGBA32UI),I===e.BYTE&&(Y=e.RGBA8I),I===e.SHORT&&(Y=e.RGBA16I),I===e.INT&&(Y=e.RGBA32I)),v===e.RGB&&I===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),v===e.RGBA){let Le=ee?ia:qe.getTransfer($);I===e.FLOAT&&(Y=e.RGBA32F),I===e.HALF_FLOAT&&(Y=e.RGBA16F),I===e.UNSIGNED_BYTE&&(Y=Le===Je?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function E(T,v){let I;return T?v===null||v===Ar||v===Xr?I=e.DEPTH24_STENCIL8:v===er?I=e.DEPTH32F_STENCIL8:v===Ei&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ar||v===Xr?I=e.DEPTH_COMPONENT24:v===er?I=e.DEPTH_COMPONENT32F:v===Ei&&(I=e.DEPTH_COMPONENT16),I}function F(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){let v=T.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&c.delete(v)}function A(T){let v=T.target;v.removeEventListener("dispose",A),S(v)}function D(T){let v=i.get(T);if(v.__webglInit===void 0)return;let I=T.source,$=d.get(I);if($){let ee=$[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(T),Object.keys($).length===0&&d.delete(I)}i.remove(T)}function y(T){let v=i.get(T);e.deleteTexture(v.__webglTexture);let I=T.source,$=d.get(I);delete $[v.__cacheKey],s.memory.textures--}function S(T){let v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ee=0;ee<v.__webglFramebuffer[$].length;ee++)e.deleteFramebuffer(v.__webglFramebuffer[$][ee]);else e.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)e.deleteFramebuffer(v.__webglFramebuffer[$]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let I=T.textures;for(let $=0,ee=I.length;$<ee;$++){let Y=i.get(I[$]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(I[$])}i.remove(T)}let C=0;function O(){C=0}function B(){let T=C;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),C+=1,T}function H(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Z(T,v){let I=i.get(T);if(T.isVideoTexture&&De(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(I,T,v);return}}r.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+v)}function W(T,v){let I=i.get(T);if(T.version>0&&I.__version!==T.version){se(I,T,v);return}r.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+v)}function ae(T,v){let I=i.get(T);if(T.version>0&&I.__version!==T.version){se(I,T,v);return}r.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+v)}function j(T,v){let I=i.get(T);if(T.version>0&&I.__version!==T.version){be(I,T,v);return}r.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+v)}let oe={[Zi]:e.REPEAT,[wr]:e.CLAMP_TO_EDGE,[Za]:e.MIRRORED_REPEAT},fe={[Ut]:e.NEAREST,[Vh]:e.NEAREST_MIPMAP_NEAREST,[Ji]:e.NEAREST_MIPMAP_LINEAR,[It]:e.LINEAR,[Ja]:e.LINEAR_MIPMAP_NEAREST,[$t]:e.LINEAR_MIPMAP_LINEAR},Ne={[Wh]:e.NEVER,[Jh]:e.ALWAYS,[Xh]:e.LESS,[co]:e.LEQUAL,[jh]:e.EQUAL,[Zh]:e.GEQUAL,[qh]:e.GREATER,[Yh]:e.NOTEQUAL};function Be(T,v){if(v.type===er&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===It||v.magFilter===Ja||v.magFilter===Ji||v.magFilter===$t||v.minFilter===It||v.minFilter===Ja||v.minFilter===Ji||v.minFilter===$t)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,oe[v.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,oe[v.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,oe[v.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,fe[v.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Ne[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==Ji&&v.minFilter!==$t||v.type===er&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function q(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));let $=v.source,ee=d.get($);ee===void 0&&(ee={},d.set($,ee));let Y=H(v);if(Y!==T.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,I=!0),ee[Y].usedTimes++;let Le=ee[T.__cacheKey];Le!==void 0&&(ee[T.__cacheKey].usedTimes--,Le.usedTimes===0&&y(v)),T.__cacheKey=Y,T.__webglTexture=ee[Y].texture}return I}function se(T,v,I){let $=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=e.TEXTURE_3D);let ee=q(T,v),Y=v.source;r.bindTexture($,T.__webglTexture,e.TEXTURE0+I);let Le=i.get(Y);if(Y.version!==Le.__version||ee===!0){r.activeTexture(e.TEXTURE0+I);let k=qe.getPrimaries(qe.workingColorSpace),J=v.colorSpace===dr?null:qe.getPrimaries(v.colorSpace),ne=v.colorSpace===dr||k===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let G=g(v.image,!1,a.maxTextureSize);G=xe(v,G);let ie=n.convert(v.format,v.colorSpace),Te=n.convert(v.type),Re=M(v.internalFormat,ie,Te,v.colorSpace,v.isVideoTexture);Be($,v);let pe,we=v.mipmaps,Ie=v.isVideoTexture!==!0,We=Le.__version===void 0||ee===!0,P=Y.dataReady,re=F(v,G);if(v.isDepthTexture)Re=E(v.format===qr,v.type),We&&(Ie?r.texStorage2D(e.TEXTURE_2D,1,Re,G.width,G.height):r.texImage2D(e.TEXTURE_2D,0,Re,G.width,G.height,0,ie,Te,null));else if(v.isDataTexture)if(we.length>0){Ie&&We&&r.texStorage2D(e.TEXTURE_2D,re,Re,we[0].width,we[0].height);for(let X=0,K=we.length;X<K;X++)pe=we[X],Ie?P&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,pe.width,pe.height,ie,Te,pe.data):r.texImage2D(e.TEXTURE_2D,X,Re,pe.width,pe.height,0,ie,Te,pe.data);v.generateMipmaps=!1}else Ie?(We&&r.texStorage2D(e.TEXTURE_2D,re,Re,G.width,G.height),P&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,G.width,G.height,ie,Te,G.data)):r.texImage2D(e.TEXTURE_2D,0,Re,G.width,G.height,0,ie,Te,G.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&We&&r.texStorage3D(e.TEXTURE_2D_ARRAY,re,Re,we[0].width,we[0].height,G.depth);for(let X=0,K=we.length;X<K;X++)if(pe=we[X],v.format!==Dt)if(ie!==null)if(Ie){if(P)if(v.layerUpdates.size>0){let me=Ml(pe.width,pe.height,v.format,v.type);for(let de of v.layerUpdates){let Xe=pe.data.subarray(de*me/pe.data.BYTES_PER_ELEMENT,(de+1)*me/pe.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,de,pe.width,pe.height,1,ie,Xe)}v.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,G.depth,ie,pe.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,Re,pe.width,pe.height,G.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,G.depth,ie,Te,pe.data):r.texImage3D(e.TEXTURE_2D_ARRAY,X,Re,pe.width,pe.height,G.depth,0,ie,Te,pe.data)}else{Ie&&We&&r.texStorage2D(e.TEXTURE_2D,re,Re,we[0].width,we[0].height);for(let X=0,K=we.length;X<K;X++)pe=we[X],v.format!==Dt?ie!==null?Ie?P&&r.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,pe.width,pe.height,ie,pe.data):r.compressedTexImage2D(e.TEXTURE_2D,X,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,pe.width,pe.height,ie,Te,pe.data):r.texImage2D(e.TEXTURE_2D,X,Re,pe.width,pe.height,0,ie,Te,pe.data)}else if(v.isDataArrayTexture)if(Ie){if(We&&r.texStorage3D(e.TEXTURE_2D_ARRAY,re,Re,G.width,G.height,G.depth),P)if(v.layerUpdates.size>0){let X=Ml(G.width,G.height,v.format,v.type);for(let K of v.layerUpdates){let me=G.data.subarray(K*X/G.data.BYTES_PER_ELEMENT,(K+1)*X/G.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,G.width,G.height,1,ie,Te,me)}v.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ie,Te,G.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,Re,G.width,G.height,G.depth,0,ie,Te,G.data);else if(v.isData3DTexture)Ie?(We&&r.texStorage3D(e.TEXTURE_3D,re,Re,G.width,G.height,G.depth),P&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ie,Te,G.data)):r.texImage3D(e.TEXTURE_3D,0,Re,G.width,G.height,G.depth,0,ie,Te,G.data);else if(v.isFramebufferTexture){if(We)if(Ie)r.texStorage2D(e.TEXTURE_2D,re,Re,G.width,G.height);else{let X=G.width,K=G.height;for(let me=0;me<re;me++)r.texImage2D(e.TEXTURE_2D,me,Re,X,K,0,ie,Te,null),X>>=1,K>>=1}}else if(we.length>0){if(Ie&&We){let X=Se(we[0]);r.texStorage2D(e.TEXTURE_2D,re,Re,X.width,X.height)}for(let X=0,K=we.length;X<K;X++)pe=we[X],Ie?P&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,ie,Te,pe):r.texImage2D(e.TEXTURE_2D,X,Re,ie,Te,pe);v.generateMipmaps=!1}else if(Ie){if(We){let X=Se(G);r.texStorage2D(e.TEXTURE_2D,re,Re,X.width,X.height)}P&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,Te,G)}else r.texImage2D(e.TEXTURE_2D,0,Re,ie,Te,G);m(v)&&f($),Le.__version=Y.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function be(T,v,I){if(v.image.length!==6)return;let $=q(T,v),ee=v.source;r.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+I);let Y=i.get(ee);if(ee.version!==Y.__version||$===!0){r.activeTexture(e.TEXTURE0+I);let Le=qe.getPrimaries(qe.workingColorSpace),k=v.colorSpace===dr?null:qe.getPrimaries(v.colorSpace),J=v.colorSpace===dr||Le===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ne=v.isCompressedTexture||v.image[0].isCompressedTexture,G=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let K=0;K<6;K++)!ne&&!G?ie[K]=g(v.image[K],!0,a.maxCubemapSize):ie[K]=G?v.image[K].image:v.image[K],ie[K]=xe(v,ie[K]);let Te=ie[0],Re=n.convert(v.format,v.colorSpace),pe=n.convert(v.type),we=M(v.internalFormat,Re,pe,v.colorSpace),Ie=v.isVideoTexture!==!0,We=Y.__version===void 0||$===!0,P=ee.dataReady,re=F(v,Te);Be(e.TEXTURE_CUBE_MAP,v);let X;if(ne){Ie&&We&&r.texStorage2D(e.TEXTURE_CUBE_MAP,re,we,Te.width,Te.height);for(let K=0;K<6;K++){X=ie[K].mipmaps;for(let me=0;me<X.length;me++){let de=X[me];v.format!==Dt?Re!==null?Ie?P&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,de.width,de.height,Re,de.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,de.width,de.height,Re,pe,de.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,we,de.width,de.height,0,Re,pe,de.data)}}}else{if(X=v.mipmaps,Ie&&We){X.length>0&&re++;let K=Se(ie[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,re,we,K.width,K.height)}for(let K=0;K<6;K++)if(G){Ie?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ie[K].width,ie[K].height,Re,pe,ie[K].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,we,ie[K].width,ie[K].height,0,Re,pe,ie[K].data);for(let me=0;me<X.length;me++){let de=X[me].image[K].image;Ie?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,de.width,de.height,Re,pe,de.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,we,de.width,de.height,0,Re,pe,de.data)}}else{Ie?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,pe,ie[K]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,we,Re,pe,ie[K]);for(let me=0;me<X.length;me++){let de=X[me];Ie?P&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Re,pe,de.image[K]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,we,Re,pe,de.image[K])}}}m(v)&&f(e.TEXTURE_CUBE_MAP),Y.__version=ee.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ee(T,v,I,$,ee,Y){let Le=n.convert(I.format,I.colorSpace),k=n.convert(I.type),J=M(I.internalFormat,Le,k,I.colorSpace),ne=i.get(v),G=i.get(I);if(G.__renderTarget=v,!ne.__hasExternalTextures){let ie=Math.max(1,v.width>>Y),Te=Math.max(1,v.height>>Y);ee===e.TEXTURE_3D||ee===e.TEXTURE_2D_ARRAY?r.texImage3D(ee,Y,J,ie,Te,v.depth,0,Le,k,null):r.texImage2D(ee,Y,J,ie,Te,0,Le,k,null)}r.bindFramebuffer(e.FRAMEBUFFER,T),te(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,ee,G.__webglTexture,0,ve(v)):(ee===e.TEXTURE_2D||ee>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,ee,G.__webglTexture,Y),r.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(T,v,I){if(e.bindRenderbuffer(e.RENDERBUFFER,T),v.depthBuffer){let $=v.depthTexture,ee=$&&$.isDepthTexture?$.type:null,Y=E(v.stencilBuffer,ee),Le=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=ve(v);te(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,k,Y,v.width,v.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,k,Y,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,Y,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Le,e.RENDERBUFFER,T)}else{let $=v.textures;for(let ee=0;ee<$.length;ee++){let Y=$[ee],Le=n.convert(Y.format,Y.colorSpace),k=n.convert(Y.type),J=M(Y.internalFormat,Le,k,Y.colorSpace),ne=ve(v);I&&te(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ne,J,v.width,v.height):te(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ne,J,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,J,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ue(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=i.get(v.depthTexture);I.__renderTarget=v,(!I.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let $=I.__webglTexture,ee=ve(v);if(v.depthTexture.format===jr)te(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,ee):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(v.depthTexture.format===qr)te(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,ee):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(T){let v=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=$}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ue(v.__webglFramebuffer,T)}else if(I){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(r.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=e.createRenderbuffer(),ue(v.__webglDepthbuffer[$],T,!1);else{let ee=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,Y)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),ue(v.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ee)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(T,v,I){let $=i.get(T);v!==void 0&&Ee($.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&ze(T)}function Q(T){let v=T.texture,I=i.get(T),$=i.get(v);T.addEventListener("dispose",A);let ee=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Le=ee.length>1;if(Le||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=v.version,s.memory.textures++),Y){I.__webglFramebuffer=[];for(let k=0;k<6;k++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[k]=[];for(let J=0;J<v.mipmaps.length;J++)I.__webglFramebuffer[k][J]=e.createFramebuffer()}else I.__webglFramebuffer[k]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let k=0;k<v.mipmaps.length;k++)I.__webglFramebuffer[k]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Le)for(let k=0,J=ee.length;k<J;k++){let ne=i.get(ee[k]);ne.__webglTexture===void 0&&(ne.__webglTexture=e.createTexture(),s.memory.textures++)}if(T.samples>0&&te(T)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let k=0;k<ee.length;k++){let J=ee[k];I.__webglColorRenderbuffer[k]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[k]);let ne=n.convert(J.format,J.colorSpace),G=n.convert(J.type),ie=M(J.internalFormat,ne,G,J.colorSpace,T.isXRRenderTarget===!0),Te=ve(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Te,ie,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+k,e.RENDERBUFFER,I.__webglColorRenderbuffer[k])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(I.__webglDepthRenderbuffer,T,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){r.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Be(e.TEXTURE_CUBE_MAP,v);for(let k=0;k<6;k++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Ee(I.__webglFramebuffer[k][J],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,J);else Ee(I.__webglFramebuffer[k],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);m(v)&&f(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Le){for(let k=0,J=ee.length;k<J;k++){let ne=ee[k],G=i.get(ne);r.bindTexture(e.TEXTURE_2D,G.__webglTexture),Be(e.TEXTURE_2D,ne),Ee(I.__webglFramebuffer,T,ne,e.COLOR_ATTACHMENT0+k,e.TEXTURE_2D,0),m(ne)&&f(e.TEXTURE_2D)}r.unbindTexture()}else{let k=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(k=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(k,$.__webglTexture),Be(k,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Ee(I.__webglFramebuffer[J],T,v,e.COLOR_ATTACHMENT0,k,J);else Ee(I.__webglFramebuffer,T,v,e.COLOR_ATTACHMENT0,k,0);m(v)&&f(k),r.unbindTexture()}T.depthBuffer&&ze(T)}function ce(T){let v=T.textures;for(let I=0,$=v.length;I<$;I++){let ee=v[I];if(m(ee)){let Y=w(T),Le=i.get(ee).__webglTexture;r.bindTexture(Y,Le),f(Y),r.unbindTexture()}}}let b=[],ye=[];function he(T){if(T.samples>0){if(te(T)===!1){let v=T.textures,I=T.width,$=T.height,ee=e.COLOR_BUFFER_BIT,Y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Le=i.get(T),k=v.length>1;if(k)for(let J=0;J<v.length;J++)r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let J=0;J<v.length;J++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=e.STENCIL_BUFFER_BIT)),k){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Le.__webglColorRenderbuffer[J]);let ne=i.get(v[J]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0)}e.blitFramebuffer(0,0,I,$,0,0,I,$,ee,e.NEAREST),l===!0&&(b.length=0,ye.length=0,b.push(e.COLOR_ATTACHMENT0+J),T.depthBuffer&&T.resolveDepthBuffer===!1&&(b.push(Y),ye.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,b))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),k)for(let J=0;J<v.length;J++){r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,Le.__webglColorRenderbuffer[J]);let ne=i.get(v[J]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.TEXTURE_2D,ne,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function ve(T){return Math.min(a.maxSamples,T.samples)}function te(T){let v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function De(T){let v=s.render.frame;c.get(T)!==v&&(c.set(T,v),T.update())}function xe(T,v){let I=T.colorSpace,$=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Yr&&I!==dr&&(qe.getTransfer(I)===Je?($!==Dt||ee!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=ae,this.setTextureCube=j,this.rebindTextures=Fe,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=te}function tm(e,t){function r(i,a=dr){let n,s=qe.getTransfer(a);if(i===Qt)return e.UNSIGNED_BYTE;if(i===$a)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ks)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Zs)return e.BYTE;if(i===Js)return e.SHORT;if(i===Ei)return e.UNSIGNED_SHORT;if(i===Ka)return e.INT;if(i===Ar)return e.UNSIGNED_INT;if(i===er)return e.FLOAT;if(i===Wr)return e.HALF_FLOAT;if(i===$s)return e.ALPHA;if(i===Qs)return e.RGB;if(i===Dt)return e.RGBA;if(i===eo)return e.LUMINANCE;if(i===to)return e.LUMINANCE_ALPHA;if(i===jr)return e.DEPTH_COMPONENT;if(i===qr)return e.DEPTH_STENCIL;if(i===ro)return e.RED;if(i===en)return e.RED_INTEGER;if(i===io)return e.RG;if(i===tn)return e.RG_INTEGER;if(i===rn)return e.RGBA_INTEGER;if(i===Ki||i===$i||i===Qi||i===ea)if(s===Je)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===Ki)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$i)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qi)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===Ki)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$i)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qi)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===an||i===nn||i===sn||i===on)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===an)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===on)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ln||i===hn||i===cn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(i===ln||i===hn)return s===Je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===cn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===un||i===dn||i===pn||i===fn||i===mn||i===gn||i===_n||i===vn||i===xn||i===Mn||i===yn||i===Sn||i===En||i===Tn)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(i===un)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_n)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===En)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tn)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ta||i===bn||i===wn)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(i===ta)return s===Je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ao||i===An||i===Rn||i===Cn)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(i===ta)return n.COMPRESSED_RED_RGTC1_EXT;if(i===An)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var rm=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Di=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,r),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(im)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new Di;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
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

}`,sm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new At,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new Gt({vertexShader:am,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Wt(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},om=class extends Jr{constructor(e,t){super();let r=this,i=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,_=new sm,g=t.getContextAttributes(),m=null,f=null,w=[],M=[],E=new ge,F=null,R=new St;R.viewport=new Ke;let A=new St;A.viewport=new Ke;let D=[R,A],y=new rm,S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=w[q];return se===void 0&&(se=new ps,w[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=w[q];return se===void 0&&(se=new ps,w[q]=se),se.getGripSpace()},this.getHand=function(q){let se=w[q];return se===void 0&&(se=new ps,w[q]=se),se.getHandSpace()};function O(q){let se=M.indexOf(q.inputSource);if(se===-1)return;let be=w[se];be!==void 0&&(be.update(q.inputSource,q.frame,l||n),be.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",H);for(let q=0;q<w.length;q++){let se=M[q];se!==null&&(M[q]=null,w[q].disconnect(se))}S=null,C=null,_.reset(),e.setRenderTarget(m),d=null,u=null,c=null,i=null,f=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(E.width,E.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){let se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new pr(d.framebufferWidth,d.framebufferHeight,{format:Dt,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,be=null,Ee=null;g.depth&&(Ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?qr:jr,be=g.stencil?Xr:Ar);let ue={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:a};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new pr(u.textureWidth,u.textureHeight,{format:Dt,type:Qt,depthTexture:new $o(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await i.requestReferenceSpace(s),Be.setContext(i),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(q){for(let se=0;se<q.removed.length;se++){let be=q.removed[se],Ee=M.indexOf(be);Ee>=0&&(M[Ee]=null,w[Ee].disconnect(be))}for(let se=0;se<q.added.length;se++){let be=q.added[se],Ee=M.indexOf(be);if(Ee===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=M.length){M.push(be),Ee=Ue;break}else if(M[Ue]===null){M[Ue]=be,Ee=Ue;break}if(Ee===-1)break}let ue=w[Ee];ue&&ue.connect(be)}}let Z=new L,W=new L;function ae(q,se,be){Z.setFromMatrixPosition(se.matrixWorld),W.setFromMatrixPosition(be.matrixWorld);let Ee=Z.distanceTo(W),ue=se.projectionMatrix.elements,Ue=be.projectionMatrix.elements,ze=ue[14]/(ue[10]-1),Fe=ue[14]/(ue[10]+1),Q=(ue[9]+1)/ue[5],ce=(ue[9]-1)/ue[5],b=(ue[8]-1)/ue[0],ye=(Ue[8]+1)/Ue[0],he=ze*b,ve=ze*ye,te=Ee/(-b+ye),De=te*-b;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ue[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let xe=ze+te,Se=Fe+te,T=he-De,v=ve+(Ee-De),I=Q*Fe/Se*xe,$=ce*Fe/Se*xe;q.projectionMatrix.makePerspective(T,v,I,$,xe,Se),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let se=q.near,be=q.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(be=_.depthFar)),y.near=A.near=R.near=se,y.far=A.far=R.far=be,(S!==y.near||C!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,C=y.far),R.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,y.layers.mask=R.layers.mask|A.layers.mask;let Ee=q.parent,ue=y.cameras;j(y,Ee);for(let Ue=0;Ue<ue.length;Ue++)j(ue[Ue],Ee);ue.length===2?ae(y,R,A):y.projectionMatrix.copy(R.projectionMatrix),oe(q,y,Ee)};function oe(q,se,be){be===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Un*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(q){o=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let fe=null;function Ne(q,se){if(h=se.getViewerPose(l||n),p=se,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let Ee=!1;be.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let Ue=0;Ue<be.length;Ue++){let ze=be[Ue],Fe=null;if(d!==null)Fe=d.getViewport(ze);else{let ce=c.getViewSubImage(u,ze);Fe=ce.viewport,Ue===0&&(e.setRenderTargetTextures(f,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(f))}let Q=D[Ue];Q===void 0&&(Q=new St,Q.layers.enable(Ue),Q.viewport=new Ke,D[Ue]=Q),Q.matrix.fromArray(ze.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ze.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ue===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(Q)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let Ue=c.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,i.renderState)}}for(let be=0;be<w.length;be++){let Ee=M[be],ue=w[be];Ee!==null&&ue!==void 0&&ue.update(Ee,se,l||n)}fe&&fe(q,se),se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:se}),p=null}let Be=new Wo;Be.setAnimationLoop(Ne),this.setAnimationLoop=function(q){fe=q},this.dispose=function(){}}},Fr=new vr,lm=new at;function hm(e,t){function r(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,zo(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,w,M,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(m,f):f.isMeshToonMaterial?(n(m,f),u(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f)):f.isMeshStandardMaterial?(n(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(n(m,f),_(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),g(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,M):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,r(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,r(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,r(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,r(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,r(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,r(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,r(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f),M=w.envMap,E=w.envMapRotation;M&&(m.envMap.value=M,Fr.copy(E),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),m.envMapRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Fr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,r(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,r(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,r(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=M*.5,f.map&&(m.map.value=f.map,r(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,r(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,r(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,r(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,r(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,r(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,r(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,r(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,r(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,r(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,r(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,r(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,r(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,r(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,r(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,r(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,r(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,r(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function cm(e,t,r,i){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){let E=M.program;i.uniformBlockBinding(w,E)}function h(w,M){let E=a[w.id];E===void 0&&(_(w),E=c(w),a[w.id]=E,w.addEventListener("dispose",m));let F=M.program;i.updateUBOMapping(w,F);let R=t.render.frame;n[w.id]!==R&&(d(w),n[w.id]=R)}function c(w){let M=u();w.__bindingPointIndex=M;let E=e.createBuffer(),F=w.__size,R=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,F,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,E),E}function u(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let M=a[w.id],E=w.uniforms,F=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let R=0,A=E.length;R<A;R++){let D=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,S=D.length;y<S;y++){let C=D[y];if(p(C,R,y,F)===!0){let O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],H=0;for(let Z=0;Z<B.length;Z++){let W=B[Z],ae=g(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,O+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(w,M,E,F){let R=w.value,A=M+"_"+E;if(F[A]===void 0)return typeof R=="number"||typeof R=="boolean"?F[A]=R:F[A]=R.clone(),!0;{let D=F[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return F[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(w){let M=w.uniforms,E=0,F=16;for(let A=0,D=M.length;A<D;A++){let y=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,C=y.length;S<C;S++){let O=y[S],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Z=B.length;H<Z;H++){let W=B[H],ae=g(W),j=E%F,oe=j%ae.boundary,fe=j+oe;E+=oe,fe!==0&&F-fe<ae.storage&&(E+=F-fe),O.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=ae.storage}}}let R=E%F;return R>0&&(E+=F-R),w.__size=E,w.__cache={},this}function g(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){let M=w.target;M.removeEventListener("dispose",m);let E=s.indexOf(M.__bindingPointIndex);s.splice(E,1),e.deleteBuffer(a[M.id]),delete a[M.id],delete n[M.id]}function f(){for(let w in a)e.deleteBuffer(a[w]);s=[],a={},n={}}return{bind:l,update:h,dispose:f}}var um=class{constructor(e={}){let{canvas:t=$h(),context:r=null,depth:i=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=n;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,f=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Kt,this.toneMappingExposure=1;let M=this,E=!1,F=0,R=0,A=null,D=-1,y=null,S=new Ke,C=new Ke,O=null,B=new ke(0),H=0,Z=t.width,W=t.height,ae=1,j=null,oe=null,fe=new Ke(0,0,Z,W),Ne=new Ke(0,0,Z,W),Be=!1,q=new is,se=!1,be=!1,Ee=new at,ue=new at,Ue=new L,ze=new Ke,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ce(){return A===null?ae:1}let b=r;function ye(x,U){return t.getContext(x,U)}try{let x={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",me,!1),b===null){let U="webgl2";if(b=ye(U,x),b===null)throw ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let he,ve,te,De,xe,Se,T,v,I,$,ee,Y,Le,k,J,ne,G,ie,Te,Re,pe,we,Ie,We;function P(){he=new mp(b),he.init(),we=new tm(b,he),ve=new hp(b,he,e,we),te=new $f(b,he),ve.reverseDepthBuffer&&u&&te.buffers.depth.setReversed(!0),De=new vp(b),xe=new Ff,Se=new em(b,he,te,xe,ve,we,De),T=new up(M),v=new fp(M),I=new bc(b),Ie=new op(b,I),$=new gp(b,I,De,Ie),ee=new Mp(b,$,I,De),Te=new xp(b,ve,Se),ne=new cp(xe),Y=new Of(M,T,v,he,ve,Ie,ne),Le=new hm(M,xe),k=new zf,J=new Xf(he),ie=new sp(M,T,v,te,ee,d,o),G=new Jf(M,ee,ve),We=new cm(b,De,ve,te),Re=new lp(b,he,De),pe=new _p(b,he,De),De.programs=Y.programs,M.capabilities=ve,M.extensions=he,M.properties=xe,M.renderLists=k,M.shadowMap=G,M.state=te,M.info=De}P();let re=new om(M,b);this.xr=re,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let x=he.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=he.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(x){x!==void 0&&(ae=x,this.setSize(Z,W,!1))},this.getSize=function(x){return x.set(Z,W)},this.setSize=function(x,U,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,W=U,t.width=Math.floor(x*ae),t.height=Math.floor(U*ae),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Z*ae,W*ae).floor()},this.setDrawingBufferSize=function(x,U,z){Z=x,W=U,ae=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(S)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,U,z,V){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,U,z,V),te.viewport(S.copy(fe).multiplyScalar(ae).round())},this.getScissor=function(x){return x.copy(Ne)},this.setScissor=function(x,U,z,V){x.isVector4?Ne.set(x.x,x.y,x.z,x.w):Ne.set(x,U,z,V),te.scissor(C.copy(Ne).multiplyScalar(ae).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(x){te.setScissorTest(Be=x)},this.setOpaqueSort=function(x){j=x},this.setTransparentSort=function(x){oe=x},this.getClearColor=function(x){return x.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(x=!0,U=!0,z=!0){let V=0;if(x){let N=!1;if(A!==null){let le=A.texture.format;N=le===rn||le===tn||le===en}if(N){let le=A.texture.type,Me=le===Qt||le===Ar||le===Ei||le===Xr||le===$a||le===Qa,Ae=ie.getClearColor(),Ce=ie.getClearAlpha(),Ve=Ae.r,He=Ae.g,Oe=Ae.b;Me?(p[0]=Ve,p[1]=He,p[2]=Oe,p[3]=Ce,b.clearBufferuiv(b.COLOR,0,p)):(_[0]=Ve,_[1]=He,_[2]=Oe,_[3]=Ce,b.clearBufferiv(b.COLOR,0,_))}else V|=b.COLOR_BUFFER_BIT}U&&(V|=b.DEPTH_BUFFER_BIT),z&&(V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",me,!1),k.dispose(),J.dispose(),xe.dispose(),T.dispose(),v.dispose(),ee.dispose(),Ie.dispose(),We.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",Vt),re.removeEventListener("sessionend",Is),Sr.stop()};function X(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let x=De.autoReset,U=G.enabled,z=G.autoUpdate,V=G.needsUpdate,N=G.type;P(),De.autoReset=x,G.enabled=U,G.autoUpdate=z,G.needsUpdate=V,G.type=N}function me(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function de(x){let U=x.target;U.removeEventListener("dispose",de),Xe(U)}function Xe(x){it(x),xe.remove(x)}function it(x){let U=xe.get(x).programs;U!==void 0&&(U.forEach(function(z){Y.releaseProgram(z)}),x.isShaderMaterial&&Y.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,V,N,le){U===null&&(U=Fe);let Me=N.isMesh&&N.matrixWorld.determinant()<0,Ae=lh(x,U,z,V,N);te.setMaterial(V,Me);let Ce=z.index,Ve=1;if(V.wireframe===!0){if(Ce=$.getWireframeAttribute(z),Ce===void 0)return;Ve=2}let He=z.drawRange,Oe=z.attributes.position,Ye=He.start*Ve,Qe=(He.start+He.count)*Ve;le!==null&&(Ye=Math.max(Ye,le.start*Ve),Qe=Math.min(Qe,(le.start+le.count)*Ve)),Ce!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Ce.count)):Oe!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Oe.count));let et=Qe-Ye;if(et<0||et===1/0)return;Ie.setup(N,V,Ae,z,Ce);let st,tt=Re;if(Ce!==null&&(st=I.get(Ce),tt=pe,tt.setIndex(st)),N.isMesh)V.wireframe===!0?(te.setLineWidth(V.wireframeLinewidth*ce()),tt.setMode(b.LINES)):tt.setMode(b.TRIANGLES);else if(N.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),te.setLineWidth(Pe*ce()),N.isLineSegments?tt.setMode(b.LINES):N.isLineLoop?tt.setMode(b.LINE_LOOP):tt.setMode(b.LINE_STRIP)}else N.isPoints?tt.setMode(b.POINTS):N.isSprite&&tt.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Pe=N._multiDrawStarts,Er=N._multiDrawCounts,Tr=N._multiDrawCount,Nt=Ce?I.get(Ce).bytesPerElement:1,zr=xe.get(V).currentProgram.getUniforms();for(let Et=0;Et<Tr;Et++)zr.setValue(b,"_gl_DrawID",Et),tt.render(Pe[Et]/Nt,Er[Et])}else if(N.isInstancedMesh)tt.renderInstances(Ye,et,N.count);else if(z.isInstancedBufferGeometry){let Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Er=Math.min(z.instanceCount,Pe);tt.renderInstances(Ye,et,Er)}else tt.render(Ye,et)};function ut(x,U,z){x.transparent===!0&&x.side===kt&&x.forceSinglePass===!1?(x.side=Mt,x.needsUpdate=!0,qi(x,U,z),x.side=cr,x.needsUpdate=!0,qi(x,U,z),x.side=kt):qi(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),m=J.get(z),m.init(U),w.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let le=N.material;if(le)if(Array.isArray(le))for(let Me=0;Me<le.length;Me++){let Ae=le[Me];ut(Ae,z,N),V.add(Ae)}else ut(le,z,N),V.add(le)}),w.pop(),m=null,V},this.compileAsync=function(x,U,z=null){let V=this.compile(x,U,z);return new Promise(N=>{function le(){if(V.forEach(function(Me){xe.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){N(x);return}setTimeout(le,10)}he.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ze=null;function Zt(x){Ze&&Ze(x)}function Vt(){Sr.stop()}function Is(){Sr.start()}let Sr=new Wo;Sr.setAnimationLoop(Zt),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(x){Ze=x,re.setAnimationLoop(x),x===null?Sr.stop():Sr.start()},re.addEventListener("sessionstart",Vt),re.addEventListener("sessionend",Is),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,U,A),m=J.get(x,w.length),m.init(U),w.push(m),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(ue),be=this.localClippingEnabled,se=ne.init(this.clippingPlanes,be),g=k.get(x,f.length),g.init(),f.push(g),re.enabled===!0&&re.isPresenting===!0){let le=M.xr.getDepthSensingMesh();le!==null&&Fa(le,U,-1/0,M.sortObjects)}Fa(x,U,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(j,oe),Q=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Q&&ie.addToRenderList(g,x),this.info.render.frame++,se===!0&&ne.beginShadows();let z=m.state.shadowsArray;G.render(z,x,U),se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(m.setupLights(),U.isArrayCamera){let le=U.cameras;if(N.length>0)for(let Me=0,Ae=le.length;Me<Ae;Me++){let Ce=le[Me];Os(V,N,x,Ce)}Q&&ie.render(x);for(let Me=0,Ae=le.length;Me<Ae;Me++){let Ce=le[Me];Ds(g,x,Ce,Ce.viewport)}}else N.length>0&&Os(V,N,x,U),Q&&ie.render(x),Ds(g,x,U);A!==null&&(Se.updateMultisampleRenderTarget(A),Se.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(M,x,U),Ie.resetDefaultState(),D=-1,y=null,w.pop(),w.length>0?(m=w[w.length-1],se===!0&&ne.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Fa(x,U,z,V){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){V&&ze.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ue);let le=ee.update(x),Me=x.material;Me.visible&&g.push(x,le,Me,z,ze.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){let le=ee.update(x),Me=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ze.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ze.copy(le.boundingSphere.center)),ze.applyMatrix4(x.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){let Ae=le.groups;for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){let He=Ae[Ce],Oe=Me[He.materialIndex];Oe&&Oe.visible&&g.push(x,le,Oe,z,ze.z,He)}}else Me.visible&&g.push(x,le,Me,z,ze.z,null)}}let N=x.children;for(let le=0,Me=N.length;le<Me;le++)Fa(N[le],U,z,V)}function Ds(x,U,z,V){let N=x.opaque,le=x.transmissive,Me=x.transparent;m.setupLightsView(z),se===!0&&ne.setGlobalState(M.clippingPlanes,z),V&&te.viewport(S.copy(V)),N.length>0&&ji(N,U,z),le.length>0&&ji(le,U,z),Me.length>0&&ji(Me,U,z),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Os(x,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new pr(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Wr:Qt,minFilter:$t,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));let N=m.state.transmissionRenderTarget[V.id],le=V.viewport||S;N.setSize(le.z,le.w);let Me=M.getRenderTarget();M.setRenderTarget(N),M.getClearColor(B),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),Q&&ie.render(z);let Ae=M.toneMapping;M.toneMapping=Kt;let Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),se===!0&&ne.setGlobalState(M.clippingPlanes,V),ji(x,z,V),Se.updateMultisampleRenderTarget(N),Se.updateRenderTargetMipmap(N),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let He=0,Oe=U.length;He<Oe;He++){let Ye=U[He],Qe=Ye.object,et=Ye.geometry,st=Ye.material,tt=Ye.group;if(st.side===kt&&Qe.layers.test(V.layers)){let Pe=st.side;st.side=Mt,st.needsUpdate=!0,Fs(Qe,z,V,et,st,tt),st.side=Pe,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(Se.updateMultisampleRenderTarget(N),Se.updateRenderTargetMipmap(N))}M.setRenderTarget(Me),M.setClearColor(B,H),Ce!==void 0&&(V.viewport=Ce),M.toneMapping=Ae}function ji(x,U,z){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){let Me=x[N],Ae=Me.object,Ce=Me.geometry,Ve=V===null?Me.material:V,He=Me.group;Ae.layers.test(z.layers)&&Fs(Ae,U,z,Ce,Ve,He)}}function Fs(x,U,z,V,N,le){x.onBeforeRender(M,U,z,V,N,le),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,U,z,V,x,le),N.transparent===!0&&N.side===kt&&N.forceSinglePass===!1?(N.side=Mt,N.needsUpdate=!0,M.renderBufferDirect(z,U,V,N,x,le),N.side=cr,N.needsUpdate=!0,M.renderBufferDirect(z,U,V,N,x,le),N.side=kt):M.renderBufferDirect(z,U,V,N,x,le),x.onAfterRender(M,U,z,V,N,le)}function qi(x,U,z){U.isScene!==!0&&(U=Fe);let V=xe.get(x),N=m.state.lights,le=m.state.shadowsArray,Me=N.state.version,Ae=Y.getParameters(x,N.state,le,U,z),Ce=Y.getProgramCacheKey(Ae),Ve=V.programs;V.environment=x.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(x.isMeshStandardMaterial?v:T).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ve===void 0&&(x.addEventListener("dispose",de),Ve=new Map,V.programs=Ve);let He=Ve.get(Ce);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===Me)return zs(x,Ae),He}else Ae.uniforms=Y.getUniforms(x),x.onBeforeCompile(Ae,M),He=Y.acquireProgram(Ae,Ce),Ve.set(Ce,He),V.uniforms=Ae.uniforms;let Oe=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Oe.clippingPlanes=ne.uniform),zs(x,Ae),V.needsLights=ch(x),V.lightsStateVersion=Me,V.needsLights&&(Oe.ambientLightColor.value=N.state.ambient,Oe.lightProbe.value=N.state.probe,Oe.directionalLights.value=N.state.directional,Oe.directionalLightShadows.value=N.state.directionalShadow,Oe.spotLights.value=N.state.spot,Oe.spotLightShadows.value=N.state.spotShadow,Oe.rectAreaLights.value=N.state.rectArea,Oe.ltc_1.value=N.state.rectAreaLTC1,Oe.ltc_2.value=N.state.rectAreaLTC2,Oe.pointLights.value=N.state.point,Oe.pointLightShadows.value=N.state.pointShadow,Oe.hemisphereLights.value=N.state.hemi,Oe.directionalShadowMap.value=N.state.directionalShadowMap,Oe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Oe.spotShadowMap.value=N.state.spotShadowMap,Oe.spotLightMatrix.value=N.state.spotLightMatrix,Oe.spotLightMap.value=N.state.spotLightMap,Oe.pointShadowMap.value=N.state.pointShadowMap,Oe.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=He,V.uniformsList=null,He}function Bs(x){if(x.uniformsList===null){let U=x.currentProgram.getUniforms();x.uniformsList=ba.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function zs(x,U){let z=xe.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function lh(x,U,z,V,N){U.isScene!==!0&&(U=Fe),Se.resetTextureUnits();let le=U.fog,Me=V.isMeshStandardMaterial?U.environment:null,Ae=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yr,Ce=(V.isMeshStandardMaterial?v:T).get(V.envMap||Me),Ve=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color,et=Kt;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(et=M.toneMapping);let st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=st!==void 0?st.length:0,Pe=xe.get(V),Er=m.state.lights;if(se===!0&&(be===!0||x!==y)){let xt=x===y&&V.id===D;ne.setState(V,x,xt)}let Tr=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Er.state.version||Pe.outputColorSpace!==Ae||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==Ce||V.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ne.numPlanes||Pe.numIntersection!==ne.numIntersection)||Pe.vertexAlphas!==Ve||Pe.vertexTangents!==He||Pe.morphTargets!==Oe||Pe.morphNormals!==Ye||Pe.morphColors!==Qe||Pe.toneMapping!==et||Pe.morphTargetsCount!==tt)&&(Tr=!0):(Tr=!0,Pe.__version=V.version);let Nt=Pe.currentProgram;Tr===!0&&(Nt=qi(V,U,N));let zr=!1,Et=!1,Mi=!1,$e=Nt.getUniforms(),Ht=Pe.uniforms;if(te.useProgram(Nt.program)&&(zr=!0,Et=!0,Mi=!0),V.id!==D&&(D=V.id,Et=!0),zr||y!==x){te.buffers.depth.getReversed()?(Ee.copy(x.projectionMatrix),ec(Ee),tc(Ee),$e.setValue(b,"projectionMatrix",Ee)):$e.setValue(b,"projectionMatrix",x.projectionMatrix),$e.setValue(b,"viewMatrix",x.matrixWorldInverse);let xt=$e.map.cameraPosition;xt!==void 0&&xt.setValue(b,Ue.setFromMatrixPosition(x.matrixWorld)),ve.logarithmicDepthBuffer&&$e.setValue(b,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&$e.setValue(b,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Et=!0,Mi=!0)}if(N.isSkinnedMesh){$e.setOptional(b,N,"bindMatrix"),$e.setOptional(b,N,"bindMatrixInverse");let xt=N.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),$e.setValue(b,"boneTexture",xt.boneTexture,Se))}N.isBatchedMesh&&($e.setOptional(b,N,"batchingTexture"),$e.setValue(b,"batchingTexture",N._matricesTexture,Se),$e.setOptional(b,N,"batchingIdTexture"),$e.setValue(b,"batchingIdTexture",N._indirectTexture,Se),$e.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&$e.setValue(b,"batchingColorTexture",N._colorsTexture,Se));let yi=z.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Te.update(N,z,Nt),(Et||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,$e.setValue(b,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ht.envMap.value=Ce,Ht.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Et&&($e.setValue(b,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&hh(Ht,Mi),le&&V.fog===!0&&Le.refreshFogUniforms(Ht,le),Le.refreshMaterialUniforms(Ht,V,ae,W,m.state.transmissionRenderTarget[x.id]),ba.upload(b,Bs(Pe),Ht,Se)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ba.upload(b,Bs(Pe),Ht,Se),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&$e.setValue(b,"center",N.center),$e.setValue(b,"modelViewMatrix",N.modelViewMatrix),$e.setValue(b,"normalMatrix",N.normalMatrix),$e.setValue(b,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let xt=V.uniformsGroups;for(let Si=0,hr=xt.length;Si<hr;Si++){let Vs=xt[Si];We.update(Vs,Nt),We.bind(Vs,Nt)}}return Nt}function hh(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function ch(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,U,z){xe.get(x.texture).__webglTexture=U,xe.get(x.depthTexture).__webglTexture=z;let V=xe.get(x);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){let z=xe.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,z=0){A=x,F=U,R=z;let V=!0,N=null,le=!1,Me=!1;if(x){let Ae=xe.get(x);if(Ae.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(b.FRAMEBUFFER,null),V=!1;else if(Ae.__webglFramebuffer===void 0)Se.setupRenderTarget(x);else if(Ae.__hasExternalTextures)Se.rebindTextures(x,xe.get(x.texture).__webglTexture,xe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let He=x.depthTexture;if(Ae.__boundDepthTexture!==He){if(He!==null&&xe.has(He)&&(x.width!==He.image.width||x.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(x)}}let Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Me=!0);let Ve=xe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?N=Ve[U][z]:N=Ve[U],le=!0):x.samples>0&&Se.useMultisampledRTT(x)===!1?N=xe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[z]:N=Ve,S.copy(x.viewport),C.copy(x.scissor),O=x.scissorTest}else S.copy(fe).multiplyScalar(ae).floor(),C.copy(Ne).multiplyScalar(ae).floor(),O=Be;if(te.bindFramebuffer(b.FRAMEBUFFER,N)&&V&&te.drawBuffers(x,N),te.viewport(S),te.scissor(C),te.setScissorTest(O),le){let Ae=xe.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,z)}else if(Me){let Ae=xe.get(x.texture),Ce=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Ce)}D=-1},this.readRenderTargetPixels=function(x,U,z,V,N,le,Me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=xe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){te.bindFramebuffer(b.FRAMEBUFFER,Ae);try{let Ce=x.texture,Ve=Ce.format,He=Ce.type;if(!ve.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-V&&z>=0&&z<=x.height-N&&b.readPixels(U,z,V,N,we.convert(Ve),we.convert(He),le)}finally{let Ce=A!==null?xe.get(A).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,V,N,le,Me){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=xe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){let Ce=x.texture,Ve=Ce.format,He=Ce.type;if(!ve.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-V&&z>=0&&z<=x.height-N){te.bindFramebuffer(b.FRAMEBUFFER,Ae);let Oe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Oe),b.bufferData(b.PIXEL_PACK_BUFFER,le.byteLength,b.STREAM_READ),b.readPixels(U,z,V,N,we.convert(Ve),we.convert(He),0);let Ye=A!==null?xe.get(A).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,Ye);let Qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Qh(b,Qe,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Oe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,le),b.deleteBuffer(Oe),b.deleteSync(Qe),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,z=0){x.isTexture!==!0&&(wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);let V=Math.pow(2,-z),N=Math.floor(x.image.width*V),le=Math.floor(x.image.height*V),Me=U!==null?U.x:0,Ae=U!==null?U.y:0;Se.setTexture2D(x,0),b.copyTexSubImage2D(b.TEXTURE_2D,z,0,0,Me,Ae,N,le),te.unbindTexture()},this.copyTextureToTexture=function(x,U,z=null,V=null,N=0){x.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,x=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let le,Me,Ae,Ce,Ve,He,Oe,Ye,Qe,et=x.isCompressedTexture?x.mipmaps[N]:x.image;z!==null?(le=z.max.x-z.min.x,Me=z.max.y-z.min.y,Ae=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Ve=z.min.y,He=z.isBox3?z.min.z:0):(le=et.width,Me=et.height,Ae=et.depth||1,Ce=0,Ve=0,He=0),V!==null?(Oe=V.x,Ye=V.y,Qe=V.z):(Oe=0,Ye=0,Qe=0);let st=we.convert(U.format),tt=we.convert(U.type),Pe;U.isData3DTexture?(Se.setTexture3D(U,0),Pe=b.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Se.setTexture2DArray(U,0),Pe=b.TEXTURE_2D_ARRAY):(Se.setTexture2D(U,0),Pe=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);let Er=b.getParameter(b.UNPACK_ROW_LENGTH),Tr=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Nt=b.getParameter(b.UNPACK_SKIP_PIXELS),zr=b.getParameter(b.UNPACK_SKIP_ROWS),Et=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,et.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,et.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ce),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ve),b.pixelStorei(b.UNPACK_SKIP_IMAGES,He);let Mi=x.isDataArrayTexture||x.isData3DTexture,$e=U.isDataArrayTexture||U.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let Ht=xe.get(x),yi=xe.get(U),xt=xe.get(Ht.__renderTarget),Si=xe.get(yi.__renderTarget);te.bindFramebuffer(b.READ_FRAMEBUFFER,xt.__webglFramebuffer),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let hr=0;hr<Ae;hr++)Mi&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xe.get(x).__webglTexture,N,He+hr),x.isDepthTexture?($e&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xe.get(U).__webglTexture,N,Qe+hr),b.blitFramebuffer(Ce,Ve,le,Me,Oe,Ye,le,Me,b.DEPTH_BUFFER_BIT,b.NEAREST)):$e?b.copyTexSubImage3D(Pe,N,Oe,Ye,Qe+hr,Ce,Ve,le,Me):b.copyTexSubImage2D(Pe,N,Oe,Ye,Qe+hr,Ce,Ve,le,Me);te.bindFramebuffer(b.READ_FRAMEBUFFER,null),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else $e?x.isDataTexture||x.isData3DTexture?b.texSubImage3D(Pe,N,Oe,Ye,Qe,le,Me,Ae,st,tt,et.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Pe,N,Oe,Ye,Qe,le,Me,Ae,st,et.data):b.texSubImage3D(Pe,N,Oe,Ye,Qe,le,Me,Ae,st,tt,et):x.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,N,Oe,Ye,le,Me,st,tt,et.data):x.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,N,Oe,Ye,et.width,et.height,st,et.data):b.texSubImage2D(b.TEXTURE_2D,N,Oe,Ye,le,Me,st,tt,et);b.pixelStorei(b.UNPACK_ROW_LENGTH,Er),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Tr),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Nt),b.pixelStorei(b.UNPACK_SKIP_ROWS,zr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Et),N===0&&U.generateMipmaps&&b.generateMipmap(Pe),te.unbindTexture()},this.copyTextureToTexture3D=function(x,U,z=null,V=null,N=0){return x.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,x=arguments[2],U=arguments[3],N=arguments[4]||0),wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,z,V,N)},this.initRenderTarget=function(x){xe.get(x).__webglFramebuffer===void 0&&Se.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Se.setTextureCube(x,0):x.isData3DTexture?Se.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Se.setTexture2DArray(x,0):Se.setTexture2D(x,0),te.unbindTexture()},this.resetState=function(){F=0,R=0,A=null,te.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}},dm=class ah{constructor(t,r=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(t),this.near=r,this.far=i}clone(){return new ah(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ms=class extends At{constructor(e,t,r,i,a,n,s,o,l){super(e,t,r,i,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),i=0,a=r.length,n;t?n=t:n=e*r[a-1];let s=0,o=a-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-n,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===n)return i/(a-1);let h=r[i],c=r[i+1]-h,u=(n-h)/c;return(i+u)/(a-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),n=this.getPoint(i),s=t||(a.isVector2?new ge:new L);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new L,i=[],a=[],n=[],s=new L,o=new at;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new L)}a[0]=new L,n[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),u<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],s),n[0].crossVectors(i[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(i[d-1],i[d]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(dt(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,p))}n[d].crossVectors(i[d],a[d])}if(t===!0){let d=Math.acos(dt(a[0].dot(a[e]),-1,1));d/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(i[p],d*p)),n[p].crossVectors(i[p],a[p])}return{tangents:i,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gs=class extends jt{constructor(e=0,t=0,r=1,i=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ge){let r=t,i=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(n?a=0:a=i),this.aClockwise===!0&&!n&&(a===i?a=-i:a=a-i);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pm=class extends gs{constructor(e,t,r,i,a,n){super(e,t,r,r,i,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function _s(){let e=0,t=0,r=0,i=0;function a(n,s,o,l){e=n,t=o,r=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,p*=c,a(s,o,d,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+r*s+i*o}}}var Aa=new L,vs=new _s,xs=new _s,Ms=new _s,fm=class extends jt{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new L){let r=t,i=this.points,a=i.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=i[(s-1)%a]:(Aa.subVectors(i[0],i[1]).add(i[0]),l=Aa);let c=i[s%a],u=i[(s+1)%a];if(this.closed||s+2<a?h=i[(s+2)%a]:(Aa.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),_=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),vs.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,_,g),xs.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,_,g),Ms.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(vs.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),xs.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Ms.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return r.set(vs.calc(o),xs.calc(o),Ms.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yl(e,t,r,i,a){let n=(i-t)*.5,s=(a-r)*.5,o=e*e,l=e*o;return(2*r-2*i+n+s)*l+(-3*r+3*i-2*n-s)*o+n*e+r}function mm(e,t){let r=1-e;return r*r*t}function gm(e,t){return 2*(1-e)*e*t}function _m(e,t){return e*e*t}function Oi(e,t,r,i){return mm(e,t)+gm(e,r)+_m(e,i)}function vm(e,t){let r=1-e;return r*r*r*t}function xm(e,t){let r=1-e;return 3*r*r*e*t}function Mm(e,t){return 3*(1-e)*e*e*t}function ym(e,t){return e*e*e*t}function Fi(e,t,r,i,a){return vm(e,t)+xm(e,r)+Mm(e,i)+ym(e,a)}var Sl=class extends jt{constructor(e=new ge,t=new ge,r=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new ge){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(Fi(e,i.x,a.x,n.x,s.x),Fi(e,i.y,a.y,n.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sm=class extends jt{constructor(e=new L,t=new L,r=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new L){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(Fi(e,i.x,a.x,n.x,s.x),Fi(e,i.y,a.y,n.y,s.y),Fi(e,i.z,a.z,n.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends jt{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Em=class extends jt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends jt{constructor(e=new ge,t=new ge,r=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ge){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(Oi(e,i.x,a.x,n.x),Oi(e,i.y,a.y,n.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tm=class extends jt{constructor(e=new L,t=new L,r=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new L){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(Oi(e,i.x,a.x,n.x),Oi(e,i.y,a.y,n.y),Oi(e,i.z,a.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let r=t,i=this.points,a=(i.length-1)*e,n=Math.floor(a),s=a-n,o=i[n===0?n:n-1],l=i[n],h=i[n>i.length-2?i.length-1:n+1],c=i[n>i.length-3?i.length-1:n+2];return r.set(yl(s,o.x,l.x,h.x,c.x),yl(s,o.y,l.y,h.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new ge().fromArray(i))}return this}},ys=Object.freeze({__proto__:null,ArcCurve:pm,CatmullRomCurve3:fm,CubicBezierCurve:Sl,CubicBezierCurve3:Sm,EllipseCurve:gs,LineCurve:El,LineCurve3:Em,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:Tm,SplineCurve:bl}),bm=class extends jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ys[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),a=0;for(;a<i.length;){if(i[a]>=r){let n=i[a]-r,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,a=this.curves;i<a.length;i++){let n=a[i],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];r&&r.equals(h)||(t.push(h),r=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new ys[i.type]().fromJSON(i))}return this}},wl=class extends bm{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new El(this.currentPoint.clone(),new ge(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let a=new Tl(this.currentPoint.clone(),new ge(e,t),new ge(r,i));return this.curves.push(a),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,a,n){let s=new Sl(this.currentPoint.clone(),new ge(e,t),new ge(r,i),new ge(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new bl(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,a,n),this}absarc(e,t,r,i,a,n){return this.absellipse(e,t,r,r,i,a,n),this}ellipse(e,t,r,i,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,r,i,a,n,s,o),this}absellipse(e,t,r,i,a,n,s,o){let l=new gs(e,t,r,i,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ra=class nh extends Mr{constructor(t=1,r=1,i=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],p=[],_=0,g=[],m=i/2,f=0;w(),s===!1&&(t>0&&M(!0),r>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(p,2));function w(){let E=new L,F=new L,R=0,A=(r-t)/i;for(let D=0;D<=n;D++){let y=[],S=D/n,C=S*(r-t)+t;for(let O=0;O<=a;O++){let B=O/a,H=B*l+o,Z=Math.sin(H),W=Math.cos(H);F.x=C*Z,F.y=-S*i+m,F.z=C*W,u.push(F.x,F.y,F.z),E.set(Z,A,W).normalize(),d.push(E.x,E.y,E.z),p.push(B,1-S),y.push(_++)}g.push(y)}for(let D=0;D<a;D++)for(let y=0;y<n;y++){let S=g[y][D],C=g[y+1][D],O=g[y+1][D+1],B=g[y][D+1];(t>0||y!==0)&&(c.push(S,C,B),R+=3),(r>0||y!==n-1)&&(c.push(C,O,B),R+=3)}h.addGroup(f,R,0),f+=R}function M(E){let F=_,R=new ge,A=new L,D=0,y=E===!0?t:r,S=E===!0?1:-1;for(let O=1;O<=a;O++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;let C=_;for(let O=0;O<=a;O++){let B=O/a*l+o,H=Math.cos(B),Z=Math.sin(B);A.x=y*Z,A.y=m*S,A.z=y*H,u.push(A.x,A.y,A.z),d.push(0,S,0),R.x=H*.5+.5,R.y=Z*.5*S+.5,p.push(R.x,R.y),_++}for(let O=0;O<a;O++){let B=F+O,H=C+O;E===!0?c.push(H,H+1,B):c.push(H+1,H,B),D+=3}h.addGroup(f,D,E===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Al=class extends wl{constructor(e){super(e),this.uuid=Kr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new wl().fromJSON(i))}return this}},wm={triangulate:function(e,t,r=2){let i=t&&t.length,a=i?t[0]*r:e.length,n=Rl(e,0,a,r,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,p;if(i&&(n=Lm(e,t,n,r)),e.length>80*r){o=h=e[0],l=c=e[1];for(let _=r;_<a;_+=r)u=e[_],d=e[_+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Bi(n,s,r,o,l,p,0),s}};function Rl(e,t,r,i,a){let n,s;if(a===km(e,t,r,i)>0)for(n=t;n<r;n+=i)s=Ll(n,e[n],e[n+1],s);else for(n=r-i;n>=t;n-=i)s=Ll(n,e[n],e[n+1],s);return s&&Ca(s,s.next)&&(Vi(s),s=s.next),s}function Br(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(Ca(r,r.next)||rt(r.prev,r,r.next)===0)){if(Vi(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function Bi(e,t,r,i,a,n,s){if(!e)return;!s&&n&&Om(e,i,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?Rm(e,i,a,n):Am(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(h.i/r|0),Vi(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=Cm(Br(e),t,r),Bi(e,t,r,i,a,n,2)):s===2&&Pm(e,t,r,i,a,n):Bi(Br(e),t,r,i,a,n,1);break}}}function Am(e){let t=e.prev,r=e,i=e.next;if(rt(t,r,i)>=0)return!1;let a=t.x,n=r.x,s=i.x,o=t.y,l=r.y,h=i.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,p=o>l?o>h?o:h:l>h?l:h,_=i.next;for(;_!==t;){if(_.x>=c&&_.x<=d&&_.y>=u&&_.y<=p&&gi(a,o,n,l,s,h,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Rm(e,t,r,i){let a=e.prev,n=e,s=e.next;if(rt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,p=o<l?o<h?o:h:l<h?l:h,_=c<u?c<d?c:d:u<d?u:d,g=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,f=Ss(p,_,t,r,i),w=Ss(g,m,t,r,i),M=e.prevZ,E=e.nextZ;for(;M&&M.z>=f&&E&&E.z<=w;){if(M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==a&&M!==s&&gi(o,c,l,u,h,d,M.x,M.y)&&rt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=p&&E.x<=g&&E.y>=_&&E.y<=m&&E!==a&&E!==s&&gi(o,c,l,u,h,d,E.x,E.y)&&rt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==a&&M!==s&&gi(o,c,l,u,h,d,M.x,M.y)&&rt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=w;){if(E.x>=p&&E.x<=g&&E.y>=_&&E.y<=m&&E!==a&&E!==s&&gi(o,c,l,u,h,d,E.x,E.y)&&rt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Cm(e,t,r){let i=e;do{let a=i.prev,n=i.next.next;!Ca(a,n)&&Cl(a,i,i.next,n)&&zi(a,n)&&zi(n,a)&&(t.push(a.i/r|0),t.push(i.i/r|0),t.push(n.i/r|0),Vi(i),Vi(i.next),i=e=n),i=i.next}while(i!==e);return Br(i)}function Pm(e,t,r,i,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&zm(s,o)){let l=Pl(s,o);s=Br(s,s.next),l=Br(l,l.next),Bi(s,t,r,i,a,n,0),Bi(l,t,r,i,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Lm(e,t,r,i){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*i,l=n<s-1?t[n+1]*i:e.length,h=Rl(e,o,l,i,!1),h===h.next&&(h.steiner=!0),a.push(Bm(h));for(a.sort(Nm),n=0;n<a.length;n++)r=Um(a[n],r);return r}function Nm(e,t){return e.x-t.x}function Um(e,t){let r=Im(e,t);if(!r)return t;let i=Pl(r,e);return Br(i,i.next),Br(r,r.next)}function Im(e,t){let r=t,i=-1/0,a,n=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let d=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=n&&d>i&&(i=d,a=r.x<r.next.x?r:r.next,d===n))return a}r=r.next}while(r!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;r=a;do n>=r.x&&r.x>=l&&n!==r.x&&gi(s<h?n:i,s,l,h,s<h?i:n,s,r.x,r.y)&&(u=Math.abs(s-r.y)/(n-r.x),zi(r,e)&&(u<c||u===c&&(r.x>a.x||r.x===a.x&&Dm(a,r)))&&(a=r,c=u)),r=r.next;while(r!==o);return a}function Dm(e,t){return rt(e.prev,e,t.prev)<0&&rt(t.next,e,e.next)<0}function Om(e,t,r,i){let a=e;do a.z===0&&(a.z=Ss(a.x,a.y,t,r,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Fm(a)}function Fm(e){let t,r,i,a,n,s,o,l,h=1;do{for(r=e,e=null,n=null,s=0;r;){for(s++,i=r,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(a=r,r=r.nextZ,o--):(a=i,i=i.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=i}n.nextZ=null,h*=2}while(s>1);return e}function Ss(e,t,r,i,a){return e=(e-r)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Bm(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function gi(e,t,r,i,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(n-o)>=(a-s)*(i-o)}function zm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Vm(e,t)&&(zi(e,t)&&zi(t,e)&&Hm(e,t)&&(rt(e.prev,e,t.prev)||rt(e,t.prev,t))||Ca(e,t)&&rt(e.prev,e,e.next)>0&&rt(t.prev,t,t.next)>0)}function rt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Ca(e,t){return e.x===t.x&&e.y===t.y}function Cl(e,t,r,i){let a=La(rt(e,t,r)),n=La(rt(e,t,i)),s=La(rt(r,i,e)),o=La(rt(r,i,t));return!!(a!==n&&s!==o||a===0&&Pa(e,r,t)||n===0&&Pa(e,i,t)||s===0&&Pa(r,e,i)||o===0&&Pa(r,t,i))}function Pa(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function La(e){return e>0?1:e<0?-1:0}function Vm(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Cl(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function zi(e,t){return rt(e.prev,e,e.next)<0?rt(e,t,e.next)>=0&&rt(e,e.prev,t)>=0:rt(e,t,e.prev)<0||rt(e,e.next,t)<0}function Hm(e,t){let r=e,i=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&a<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Pl(e,t){let r=new Es(e.i,e.x,e.y),i=new Es(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=a,a.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function Ll(e,t,r,i){let a=new Es(e,t,r);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Vi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Es(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function km(e,t,r,i){let a=0;for(let n=t,s=r-i;n<r;n+=i)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Ts=class sh{static area(t){let r=t.length,i=0;for(let a=r-1,n=0;n<r;a=n++)i+=t[a].x*t[n].y-t[n].x*t[a].y;return i*.5}static isClockWise(t){return sh.area(t)<0}static triangulateShape(t,r){let i=[],a=[],n=[];Nl(t),Ul(i,t);let s=t.length;r.forEach(Nl);for(let l=0;l<r.length;l++)a.push(s),s+=r[l].length,Ul(i,r[l]);let o=wm.triangulate(i,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Nl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ul(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var Il=class oh extends Mr{constructor(t=new Al([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new Ct(a,3)),this.setAttribute("uv",new Ct(n,2)),this.computeVertexNormals();function s(o){let l=[],h=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,u=r.depth!==void 0?r.depth:1,d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,p=r.bevelThickness!==void 0?r.bevelThickness:.2,_=r.bevelSize!==void 0?r.bevelSize:p-.1,g=r.bevelOffset!==void 0?r.bevelOffset:0,m=r.bevelSegments!==void 0?r.bevelSegments:3,f=r.extrudePath,w=r.UVGenerator!==void 0?r.UVGenerator:Gm,M,E=!1,F,R,A,D;f&&(M=f.getSpacedPoints(c),E=!0,d=!1,F=f.computeFrenetFrames(c,!1),R=new L,A=new L,D=new L),d||(m=0,p=0,_=0,g=0);let y=o.extractPoints(h),S=y.shape,C=y.holes;if(!Ts.isClockWise(S)){S=S.reverse();for(let Q=0,ce=C.length;Q<ce;Q++){let b=C[Q];Ts.isClockWise(b)&&(C[Q]=b.reverse())}}let O=Ts.triangulateShape(S,C),B=S;for(let Q=0,ce=C.length;Q<ce;Q++){let b=C[Q];S=S.concat(b)}function H(Q,ce,b){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ce,b)}let Z=S.length,W=O.length;function ae(Q,ce,b){let ye,he,ve,te=Q.x-ce.x,De=Q.y-ce.y,xe=b.x-Q.x,Se=b.y-Q.y,T=te*te+De*De,v=te*Se-De*xe;if(Math.abs(v)>Number.EPSILON){let I=Math.sqrt(T),$=Math.sqrt(xe*xe+Se*Se),ee=ce.x-De/I,Y=ce.y+te/I,Le=b.x-Se/$,k=b.y+xe/$,J=((Le-ee)*Se-(k-Y)*xe)/(te*Se-De*xe);ye=ee+te*J-Q.x,he=Y+De*J-Q.y;let ne=ye*ye+he*he;if(ne<=2)return new ge(ye,he);ve=Math.sqrt(ne/2)}else{let I=!1;te>Number.EPSILON?xe>Number.EPSILON&&(I=!0):te<-Number.EPSILON?xe<-Number.EPSILON&&(I=!0):Math.sign(De)===Math.sign(Se)&&(I=!0),I?(ye=-De,he=te,ve=Math.sqrt(T)):(ye=te,he=De,ve=Math.sqrt(T/2))}return new ge(ye/ve,he/ve)}let j=[];for(let Q=0,ce=B.length,b=ce-1,ye=Q+1;Q<ce;Q++,b++,ye++)b===ce&&(b=0),ye===ce&&(ye=0),j[Q]=ae(B[Q],B[b],B[ye]);let oe=[],fe,Ne=j.concat();for(let Q=0,ce=C.length;Q<ce;Q++){let b=C[Q];fe=[];for(let ye=0,he=b.length,ve=he-1,te=ye+1;ye<he;ye++,ve++,te++)ve===he&&(ve=0),te===he&&(te=0),fe[ye]=ae(b[ye],b[ve],b[te]);oe.push(fe),Ne=Ne.concat(fe)}for(let Q=0;Q<m;Q++){let ce=Q/m,b=p*Math.cos(ce*Math.PI/2),ye=_*Math.sin(ce*Math.PI/2)+g;for(let he=0,ve=B.length;he<ve;he++){let te=H(B[he],j[he],ye);Ee(te.x,te.y,-b)}for(let he=0,ve=C.length;he<ve;he++){let te=C[he];fe=oe[he];for(let De=0,xe=te.length;De<xe;De++){let Se=H(te[De],fe[De],ye);Ee(Se.x,Se.y,-b)}}}let Be=_+g;for(let Q=0;Q<Z;Q++){let ce=d?H(S[Q],Ne[Q],Be):S[Q];E?(A.copy(F.normals[0]).multiplyScalar(ce.x),R.copy(F.binormals[0]).multiplyScalar(ce.y),D.copy(M[0]).add(A).add(R),Ee(D.x,D.y,D.z)):Ee(ce.x,ce.y,0)}for(let Q=1;Q<=c;Q++)for(let ce=0;ce<Z;ce++){let b=d?H(S[ce],Ne[ce],Be):S[ce];E?(A.copy(F.normals[Q]).multiplyScalar(b.x),R.copy(F.binormals[Q]).multiplyScalar(b.y),D.copy(M[Q]).add(A).add(R),Ee(D.x,D.y,D.z)):Ee(b.x,b.y,u/c*Q)}for(let Q=m-1;Q>=0;Q--){let ce=Q/m,b=p*Math.cos(ce*Math.PI/2),ye=_*Math.sin(ce*Math.PI/2)+g;for(let he=0,ve=B.length;he<ve;he++){let te=H(B[he],j[he],ye);Ee(te.x,te.y,u+b)}for(let he=0,ve=C.length;he<ve;he++){let te=C[he];fe=oe[he];for(let De=0,xe=te.length;De<xe;De++){let Se=H(te[De],fe[De],ye);E?Ee(Se.x,Se.y+M[c-1].y,M[c-1].x+b):Ee(Se.x,Se.y,u+b)}}}q(),se();function q(){let Q=a.length/3;if(d){let ce=0,b=Z*ce;for(let ye=0;ye<W;ye++){let he=O[ye];ue(he[2]+b,he[1]+b,he[0]+b)}ce=c+m*2,b=Z*ce;for(let ye=0;ye<W;ye++){let he=O[ye];ue(he[0]+b,he[1]+b,he[2]+b)}}else{for(let ce=0;ce<W;ce++){let b=O[ce];ue(b[2],b[1],b[0])}for(let ce=0;ce<W;ce++){let b=O[ce];ue(b[0]+Z*c,b[1]+Z*c,b[2]+Z*c)}}i.addGroup(Q,a.length/3-Q,0)}function se(){let Q=a.length/3,ce=0;be(B,ce),ce+=B.length;for(let b=0,ye=C.length;b<ye;b++){let he=C[b];be(he,ce),ce+=he.length}i.addGroup(Q,a.length/3-Q,1)}function be(Q,ce){let b=Q.length;for(;--b>=0;){let ye=b,he=b-1;he<0&&(he=Q.length-1);for(let ve=0,te=c+m*2;ve<te;ve++){let De=Z*ve,xe=Z*(ve+1),Se=ce+ye+De,T=ce+he+De,v=ce+he+xe,I=ce+ye+xe;Ue(Se,T,v,I)}}}function Ee(Q,ce,b){l.push(Q),l.push(ce),l.push(b)}function ue(Q,ce,b){ze(Q),ze(ce),ze(b);let ye=a.length/3,he=w.generateTopUV(i,a,ye-3,ye-2,ye-1);Fe(he[0]),Fe(he[1]),Fe(he[2])}function Ue(Q,ce,b,ye){ze(Q),ze(ce),ze(ye),ze(ce),ze(b),ze(ye);let he=a.length/3,ve=w.generateSideWallUV(i,a,he-6,he-3,he-2,he-1);Fe(ve[0]),Fe(ve[1]),Fe(ve[3]),Fe(ve[1]),Fe(ve[2]),Fe(ve[3])}function ze(Q){a.push(l[Q*3+0]),a.push(l[Q*3+1]),a.push(l[Q*3+2])}function Fe(Q){n.push(Q.x),n.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return Wm(r,i,t)}static fromJSON(t,r){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=r[t.shapes[n]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new ys[a.type]().fromJSON(a)),new oh(i,t.options)}},Gm={generateTopUV:function(e,t,r,i,a){let n=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],h=t[a*3],c=t[a*3+1];return[new ge(n,s),new ge(o,l),new ge(h,c)]},generateSideWallUV:function(e,t,r,i,a,n){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],h=t[i*3],c=t[i*3+1],u=t[i*3+2],d=t[a*3],p=t[a*3+1],_=t[a*3+2],g=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new ge(s,1-l),new ge(h,1-u),new ge(d,1-_),new ge(g,1-f)]:[new ge(o,1-l),new ge(c,1-u),new ge(p,1-_),new ge(m,1-f)]}};function Wm(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let n=e[i];r.shapes.push(n.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var qt=class extends Ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xm=class extends qt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Na(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function jm(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ua=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],a=t[r-1];r:{e:{let n;t:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=i,i=t[++r],e<i)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=t[--r-1],e>=a)break e}n=r,r=0;break t}break r}for(;r<n;){let s=r+n>>>1;e<t[s]?n=s:r=s+1}if(i=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i;for(let n=0;n!==i;++n)t[n]=r[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qm=class extends Ua{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:no,endingEnd:no}}intervalChanged_(e,t,r){let i=this.parameterPositions,a=e-2,n=e+1,s=i[a],o=i[n];if(s===void 0)switch(this.getSettings_().endingStart){case so:a=e,s=2*t-r;break;case oo:a=i.length-2,s=t+i[a]-i[a+1];break;default:a=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case so:n=e,o=2*r-t;break;case oo:n=1,o=r+i[1]-i[0];break;default:n=e-1,o=t}let l=(r-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(r-t)/(i-t),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,f=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,w=(-1-d)*g+(1.5+d)*_+.5*p,M=d*g-d*_;for(let E=0;E!==s;++E)a[E]=m*n[h+E]+f*n[l+E]+w*n[o+E]+M*n[c+E];return a}},Ym=class extends Ua{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(r-t)/(i-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},Zm=class extends Ua{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},lr=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new Zm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ym(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case Pn:t=this.InterpolantFactoryMethodLinear;break;case Ln:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Pn;case this.InterpolantFactoryMethodSmooth:return Ln}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,a=0,n=i-1;for(;a!==i&&r[a]<e;)++a;for(;n!==-1&&r[n]>t;)--n;if(++n,a!==0||n!==i){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=r.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(i!==void 0&&jm(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===Ln,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,u=c-r,d=c+r;for(let p=0;p!==r;++p){let _=t[c+p];if(_!==t[u+p]||_!==t[d+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*r,u=n*r;for(let d=0;d!==r;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*r,o=n*r,l=0;l!==r;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};lr.prototype.TimeBufferType=Float32Array,lr.prototype.ValueBufferType=Float32Array,lr.prototype.DefaultInterpolation=Pn;var Hi=class extends lr{constructor(e,t,r){super(e,t,r)}};Hi.prototype.ValueTypeName="bool",Hi.prototype.ValueBufferType=Array,Hi.prototype.DefaultInterpolation=ra,Hi.prototype.InterpolantFactoryMethodLinear=void 0,Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jm=class extends lr{};Jm.prototype.ValueTypeName="color";var Km=class extends lr{};Km.prototype.ValueTypeName="number";var $m=class extends Ua{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let h=l+s;l!==h;l+=4)ei.slerpFlat(a,0,n,l-s,n,l,o);return a}},Dl=class extends lr{InterpolantFactoryMethodLinear(e){return new $m(this.times,this.values,this.getValueSize(),e)}};Dl.prototype.ValueTypeName="quaternion",Dl.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends lr{constructor(e,t,r){super(e,t,r)}};ki.prototype.ValueTypeName="string",ki.prototype.ValueBufferType=Array,ki.prototype.DefaultInterpolation=ra,ki.prototype.InterpolantFactoryMethodLinear=void 0,ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Qm=class extends lr{};Qm.prototype.ValueTypeName="vector";var Ol={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},eg=class{constructor(e,t,r){let i=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){s++,a===!1&&i.onStart!==void 0&&i.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,i.onProgress!==void 0&&i.onProgress(h,n,s),n===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},tg=new eg,bs=class{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var rg=class extends bs{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Ol.get(e);if(n!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;let s=bi("img");function o(){h(),Ol.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(c){h(),i&&i(c),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}},ig=class extends bs{constructor(e){super(e)}load(e,t,r,i){let a=new At,n=new rg(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},r,i),a}},ws=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},As=new at,Fl=new L,Bl=new L,zl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bl),t.updateMatrixWorld(),As.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(As),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(As)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vl=new at,Gi=new L,Rs=new L,ag=class extends zl{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,i=this.matrix,a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),Gi.setFromMatrixPosition(e.matrixWorld),r.position.copy(Gi),Rs.copy(r.position),Rs.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Rs),r.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Vl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl)}},ng=class extends ws{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sg=class extends zl{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hl=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kl=class extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Cs="\\[\\]\\.:\\/",og=new RegExp("["+Cs+"]","g"),Ps="[^"+Cs+"]",lg="[^"+Cs.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Ps),cg=/(WCOD+)?/.source.replace("WCOD",lg),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ps),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ps),pg=new RegExp("^"+hg+cg+ug+dg+"$"),fg=["material","materials","bones","map"],mg=class{constructor(e,t,r){let i=r||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},nt=class xi{constructor(t,r,i){this.path=r,this.parsedPath=i||xi.parseTrackName(r),this.node=xi.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new xi.Composite(t,r,i):new xi(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){let r=pg.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=i.nodeName.substring(a+1);fg.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)t[r++]=i[a]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,n=r.propertyIndex;if(t||(t=xi.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=mg,nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bg=new Float32Array(1),Gl=new at,gg=class{constructor(e,t,r=0,i=1/0){this.ray=new To(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new Wn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(e,t=!0,r=[]){return Ls(e,this,r,t),r.sort(Wl),r}intersectObjects(e,t=!0,r=[]){for(let i=0,a=e.length;i<a;i++)Ls(e[i],this,r,t);return r.sort(Wl),r}};function Wl(e,t){return e.distance-t.distance}function Ls(e,t,r,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,r)===!1&&(a=!1),a===!0&&i===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Ls(n[s],t,r,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Wi=new L;function Lt(e,t,r,i,a,n){let s=2*Math.PI*a/4,o=Math.max(n-2*a,0),l=Math.PI/4;Wi.copy(t),Wi[i]=0,Wi.normalize();let h=.5*s/(s+o),c=1-Wi.angleTo(e)/l;return Math.sign(Wi[r])===1?c*h:o/(s+o)+h+h*(1-c)}var _i=class extends wt{constructor(e=1,t=1,r=1,i=2,a=.1){if(i=i*2+1,a=Math.min(e/2,t/2,r/2,a),super(1,1,1,i,i,i),i===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let s=new L,o=new L,l=new L(e,t,r).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new L,_=.5/i;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(s.fromArray(h,g),o.copy(s),o.x-=Math.sign(o.x)*_,o.y-=Math.sign(o.y)*_,o.z-=Math.sign(o.z)*_,o.normalize(),h[g+0]=l.x*Math.sign(s.x)+o.x*a,h[g+1]=l.y*Math.sign(s.y)+o.y*a,h[g+2]=l.z*Math.sign(s.z)+o.z*a,c[g+0]=o.x,c[g+1]=o.y,c[g+2]=o.z,Math.floor(g/d)){case 0:p.set(1,0,0),u[m+0]=Lt(p,o,"z","y",a,r),u[m+1]=1-Lt(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[m+0]=1-Lt(p,o,"z","y",a,r),u[m+1]=1-Lt(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[m+0]=1-Lt(p,o,"x","z",a,e),u[m+1]=Lt(p,o,"z","x",a,r);break;case 3:p.set(0,-1,0),u[m+0]=1-Lt(p,o,"x","z",a,e),u[m+1]=1-Lt(p,o,"z","x",a,r);break;case 4:p.set(0,0,1),u[m+0]=1-Lt(p,o,"x","y",a,e),u[m+1]=1-Lt(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[m+0]=Lt(p,o,"x","y",a,e),u[m+1]=1-Lt(p,o,"y","x",a,t);break}}};function _g(e,t=!1){let r=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new Mr,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(r!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(t){let p;if(r)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(r){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let _=0;_<p.count;++_)u.push(p.getX(_)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in n){let u=Xl(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in s){let u=s[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let g=0;g<s[c].length;++g)p.push(s[c][g][d]);let _=Xl(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(_)}}return l}function Xl(e){let t,r,i,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(r===void 0&&(r=c.itemSize),r!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*r}let s=new t(n),o=new zt(s,r,i),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/r;for(let d=0,p=c.count;d<p;d++)for(let _=0;_<r;_++){let g=c.getComponent(d,_);o.setComponent(d+u,_,g)}}else s.set(c.array,l);l+=c.count*r}return a!==void 0&&(o.gpuType=a),o}var Xi=(e,t,r)=>Math.max(t,Math.min(r,e)),Yt=(e,t,r)=>e+(t-e)*r;function jl(e){let t=new fs;t.background=new ke(526346);let r=(n,s,o,l,h,c)=>{let u=new pt(new Wt(n,s),new Pr({color:new ke(c,c,c),side:kt}));u.position.set(o,l,h),u.lookAt(0,0,0),t.add(u)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2);let i=new hs(e),a=i.fromScene(t,.025).texture;return i.dispose(),a}function Ns(e=256,t=3){let r=document.createElement("canvas");r.width=r.height=e;let i=r.getContext("2d"),a=i.createImageData(e,e);for(let s=0;s<a.data.length;s+=4){let o=120+Math.random()*90;a.data[s]=a.data[s+1]=a.data[s+2]=o,a.data[s+3]=255}i.putImageData(a,0,0);let n=new ms(r);return n.wrapS=n.wrapT=Zi,n.repeat.set(t,t),n}var ft=(e,t,r,i,a=0,n=0,s=0)=>(a&&e.rotateX(a),n&&e.rotateY(n),s&&e.rotateZ(s),e.translate(t,r,i),e),vg=e=>{let t=e.toNonIndexed();return t.deleteAttribute("uv2"),t};function ql(e){let t=new qt({color:1315860,roughness:.42,metalness:0,envMap:e,envMapIntensity:1,roughnessMap:Ns(256,5)}),r=new qt({color:328965,roughness:.75,envMap:e,envMapIntensity:.4}),i=new qt({color:10132122,roughness:.28,metalness:1,envMap:e,envMapIntensity:1.2}),a=new qt({color:14277078,roughness:.5,envMap:e,envMapIntensity:.8}),n=new qt({color:1840914,roughness:.32,metalness:.55,envMap:e,envMapIntensity:.9}),s=new Xm({color:9079434,roughness:.08,metalness:0,transparent:!0,opacity:.07,envMap:e,envMapIntensity:1.1}),o=[ft(new _i(18.7,10.3,2.5/2-.03,3,.14),0,0,2.5/4+.015),ft(new _i(18.7-.04,10.3-.04,2.5/2-.03,3,.14),0,0,-2.5/4-.015),ft(new _i(18.7-.7,1.75,.36,2,.07),0,-10.3/2+1.25,1.25+.1),ft(new wt(12.4,.14,.08),0,1.65,1.25+.03),ft(new wt(12.4,.14,.08),0,-2.75,1.25+.03),ft(new wt(.14,4.5,.08),-6.2,-.55,1.25+.03),ft(new wt(.14,4.5,.08),6.2,-.55,1.25+.03)];for(let u=0;u<9;u++)o.push(ft(new wt(1.1,.1,.07),-7.95,-2.5+u*.46,1.25+.03)),o.push(ft(new wt(1.1,.1,.07),7.95,-2.5+u*.46,1.25+.03));for(let u=0;u<24;u++)o.push(ft(new wt(.09,.9,.05),-8+u*(16/23),-10.3/2+1.25,1.25+.29));let l=[[-8.7,4.5],[8.7,4.5],[-8.7,-4.5],[8.7,-4.5],[0,3.05]].map(([u,d])=>ft(new Ra(.24,.24,.06,20),u,d,1.25+.025,Math.PI/2)),h=[ft(new Ra(.92,.92,.12,36),0,0,0,Math.PI/2)];for(let u=0;u<6;u++)h.push(ft(new wt(.2,.5,.16),Math.cos(u*Math.PI/3)*.62,Math.sin(u*Math.PI/3)*.62,.03,0,0,u*Math.PI/3+Math.PI/2));let c=u=>_g(u.map(vg));return{W:18.7,H:10.3,D:2.5,FRONT:1.25,shell:c(o),plastic:t,screws:c(l),metal:i,inner:ft(new Wt(12.2,4.3),0,-.55,1.25-.02),dark:r,glassGeo:ft(new Wt(12.3,4.4),0,-.55,1.25+.02),glass:s,hub:c(h),white:a,pack:ft(new Ra(1,1,.05,48),0,0,0,Math.PI/2),packMat:n,labelGeo:ft(new Wt(17.1,3.15),0,3.3,1.25+.012),hit:new wt(18.7,10.3,2.5)}}function Yl(e){let t=new Di,r=(s,o)=>{let l=new pt(s,o);return t.add(l),l};r(e.shell,e.plastic),r(e.screws,e.metal),r(e.inner,e.dark);let i=[-3.3,3.3].map(s=>{let o=r(e.pack,e.packMat);o.position.set(s,-.55,e.FRONT-.01);let l=r(e.hub,e.white);return l.position.set(s,-.55,e.FRONT-.002),{pack:o,hub:l}});r(e.glassGeo,e.glass);let a=new qt({color:13619147,roughness:.78,envMap:e.plastic.envMap,envMapIntensity:.35}),n=r(e.labelGeo,a);return{group:t,reels:i,label:n}}function xg(e,t){let r=document.createElement("canvas");r.width=1024,r.height=188;let i=r.getContext("2d");i.fillStyle="#e6e6e1",i.fillRect(0,0,r.width,r.height);let a=r.height,n=a*1.5,s=e.naturalWidth/e.naturalHeight,o=s>1.5?e.naturalHeight*1.5:e.naturalWidth,l=s>1.5?e.naturalHeight:e.naturalWidth/1.5;i.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-l)/2,o,l,0,0,n,a);let h=n+28;i.strokeStyle="#b4b4ae",i.lineWidth=2,[58,122,168].forEach(p=>{i.beginPath(),i.moveTo(h,p),i.lineTo(r.width-24,p),i.stroke()});let c=getComputedStyle(document.body).fontFamily;i.fillStyle="#0a0a0a",i.font=`500 54px ${c}`;let u=t.name;for(;i.measureText(u).width>r.width-h-130&&u.length>4;)u=u.slice(0,-2);i.fillText(u===t.name?u:`${u.trimEnd()}\u2026`,h,110),i.fillStyle="#55554f",i.font=`400 30px ${c}`,i.fillText(t.kind,h,158),i.fillStyle="#0a0a0a",i.font='400 64px "DT Punk", sans-serif',i.textAlign="right",i.fillText(t.code,r.width-22,112);let d=new ms(r);return d.colorSpace=_t,d.anisotropy=8,d}function Ia(e,t,r,i=0,a=0){let n=new Al,s=i-e/2,o=a-t/2;return n.moveTo(s+r,o),n.lineTo(s+e-r,o),n.quadraticCurveTo(s+e,o,s+e,o+r),n.lineTo(s+e,o+t-r),n.quadraticCurveTo(s+e,o+t,s+e-r,o+t),n.lineTo(s+r,o+t),n.quadraticCurveTo(s,o+t,s,o+t-r),n.lineTo(s,o+r),n.quadraticCurveTo(s,o,s+r,o),n}function Zl(e,{body:t,trim:r,chrome:i},a,n,{hole:s=!1,details:o=!0}={}){let l=[],h=(E,F,R=0,A=0,D=0)=>{let y=new pt(E,F);return y.position.set(A,D,R),e.add(y),l.push(y),y},c=a*.01,u=n*.01,d=.16,p=.84,_=.92,g=c-d*2-.1,m=u-p-_-.08,f=(_-p)/2+.04,w=Ia(c-.02,u-.02,.3);s&&w.holes.push(Ia(g+.02,m+.02,.34,0,f)),h(new Il(w,{depth:.5,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:3,curveSegments:18}),t,-.56);let M=Ia(g+.22,m+.22,.4,0,f);if(M.holes.push(Ia(g,m,.34,0,f)),h(new Il(M,{depth:.03,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:4,curveSegments:18}),r,-.02),o&&c>9){let E=-u/2+_/2-.02,F=c*.15;h(new _i(1.5,.1,.03,2,.012),r,.005,F,E+.2),h(new _i(1.46,.03,.02,1,.006),i,.025,F,E+.2);for(let A=0;A<10;A++)h(new _i(.026,.26,.012,1,.005),r,.004,F-.73+A*(1.46/9),E-.1);let R=h(new Ra(.025,.025,.02,16),new Pr({color:16777215}),.01,F+.86,E+.2);R.rotation.x=Math.PI/2}return{meshes:l,w:c,h:u,sw:g,sh:m,sy:f,side:d,top:p,bottom:_}}var Mg="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",yg=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform vec2 size;uniform float power;
float h(float x){return fract(sin(x*91.17)*43758.5453);}
float n2(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
float box(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
void main(){
 vec2 cc=vUv-.5;
 float asp=size.x/size.y;
 // The glass bulges towards you: straight lines bow outwards and the picture curves away at the sides.
 vec2 pc=cc*vec2(min(asp,1.),min(1./asp,1.))*2.;
 float d=dot(pc,pc);
 vec2 uv=.5+cc*(.95+d*.06+d*d*.022);
 float row=floor(uv.y*70.);
 float tear=(h(row+floor(time*18.))-.5)*glitch*.05*step(.52,h(row*.37+floor(time*11.)));
 float roll=mod(time*.07,1.2)-.1;
 float band=smoothstep(.028,.0,abs(uv.y-roll));
 uv.x+=tear+band*.0035*sin(uv.y*700.+time*30.);
 // Beams drift out of line towards the edge of a real tube.
 float split=.0005+d*.0026+glitch*.0055;
 vec2 dir=normalize(cc+.0001);
 vec3 c=vec3(texture2D(map,uv+dir*split).r,texture2D(map,uv).g,texture2D(map,uv-dir*split).b);
 // Phosphor bloom from the picture's own light.
 c+=textureLod(map,uv,3.5).rgb*.16+textureLod(map,uv,5.).rgb*.1;
 c=toSRGB(max(c,0.));
 // Scan lines and the aperture grille.
 float px=uv.x*size.x;
 c*=.93+.07*sin(uv.y*size.y*1.6);
 c*=vec3(.97+.03*sin(px*2.09),.97+.03*sin(px*2.09+2.09),.97+.03*sin(px*2.09+4.19));
 c+=(n2(uv*size+time*60.)-.5)*(.02+glitch*.09);
 c+=band*(n2(uv*size*.5+time*40.)*.05);
 c*=.985+.015*sin(time*72.);
 // Dark at the sides and corners, where the glass turns away.
 float fall=clamp(1.-d*.34,0.,1.);
 c*=pow(fall,1.7)*1.08;
 c*=1.-smoothstep(.72,1.45,d)*.55;
 // The tube's soft rounded edge.
 float edge=1.-smoothstep(-.016,.012,box(cc*vec2(asp,1.),vec2(.5*asp,.5)-.004,.052));
 c*=edge*power;
 // Glass: a dim grey even when off, a soft window reflection, a thin rim of light on the curve.
 vec3 glass=vec3(.018)*edge;
 float glare=smoothstep(.62,.0,length((vUv-vec2(.26,.8))*vec2(1.,1.7)));
 glass+=vec3(.05)*glare*glare*edge;
 float rim=smoothstep(.04,.0,abs(box(cc*vec2(asp,1.),vec2(.5*asp,.5)-.03,.06)));
 glass+=vec3(.05)*rim*step(.0,vUv.y-.5)*edge;
 gl_FragColor=vec4(c+glass,1.);
}`,Sg="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",Eg=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;
float s(vec2 p){return sin(p.x)*sin(p.y);}
void main(){
 vec2 p=vUv*3.;float t=time*.13;
 vec2 w=vec2(s(p+vec2(t,1.7))+.5*s(p*2.1-vec2(t*1.3,.4)),s(p.yx+vec2(.8,-t))+.5*s(p.yx*1.9+vec2(t,2.1)))*.11;
 vec2 uv=(vUv-.5)*.62+.5+w;
 vec3 c=mix(textureLod(b,uv,5.6).rgb,textureLod(a,uv,5.6).rgb,fade);
 float l=dot(c,vec3(.3,.59,.11));
 c=max(mix(vec3(l),c,1.7),0.);
 float near=exp(-dot((vUv-focus)*vec2(1.25,1.45),(vUv-focus)*vec2(1.25,1.45))*3.4);
 gl_FragColor=vec4(c*(.035+.5*near*near),1.);
}`;function Tg({stage:e,items:t,onHover:r,onOpen:i}){let a=document.createElement("canvas");a.className="tv-canvas",a.setAttribute("aria-hidden","true"),e.prepend(a);let n;try{n=new um({canvas:a,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return a.remove(),null}let s=Math.min(devicePixelRatio||1,1.6);n.setPixelRatio(s),n.outputColorSpace=_t,n.setClearColor(0,0);let o=jl(n),l=ql(o),h=new fs;h.background=new ke(131587),h.fog=new dm(131587,34,74);let c=new Hl(16777215,2.2);c.position.set(-8,14,22),h.add(c);let u=new St(30,1,1,160);u.position.set(0,0,40);let d=new Gt({vertexShader:Sg,fragmentShader:Eg,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:null},b:{value:null},fade:{value:1},time:{value:0},focus:{value:new ge(.47,.55)}}}),p=new pt(new Wt(2,2),d);p.frustumCulled=!1,p.renderOrder=-10,h.add(p);let _=new kl(16777215,.5);h.add(_);let g=new ke(16777215),m=new ke(16777215),f=new ke(16777215),w=new pt(new Wt(1,1),new Pr({color:16777215,transparent:!0,opacity:0}));w.position.z=0,h.add(w);let M=new pt(new Wt(1,1),new Pr({color:789516}));M.position.z=-.04,h.add(M);let E=t.map((k,J)=>{let ne=G=>{let ie=Math.sin((J+1)*12.9898*G)*43758.5453;return ie-Math.floor(ie)};return{rx:(ne(1)-.5)*1.5,ry:(ne(2)-.5)*1.9,rz:(ne(3)-.5)*1.4,wob:ne(4)*6.28,lift:(ne(5)-.5)*2.4}}),F=t.map((k,J)=>{let ne=Yl(l);ne.group.userData.index=J;let G=new pt(l.hit,new Pr({visible:!1}));return G.userData.index=J,ne.group.add(G),ne.hit=G,h.add(ne.group),ne}),R=new ig,A=new Map,D=new Map,y=(k,J)=>{if(A.has(k)){let G=A.get(k);G.complete&&G.naturalWidth?J(G):G.addEventListener("load",()=>J(G),{once:!0});return}let ne=new Image;ne.decoding="async",ne.src=t[k].src,A.set(k,ne),ne.addEventListener("load",()=>J(ne),{once:!0})},S=k=>{F[k].wanted||(F[k].wanted=!0,y(k,J=>{let ne=F[k].label.material;ne.map=xg(J,t[k]),ne.color.set(16777215),ne.needsUpdate=!0}))},C=k=>{D.has(k)||(D.set(k,null),y(k,J=>{let ne=new ms(J);ne.colorSpace=_t,ne.anisotropy=8,ne.generateMipmaps=!0,ne.minFilter=$t;let G=document.createElement("canvas");G.width=G.height=6;let ie=G.getContext("2d",{willReadFrequently:!0});ie.drawImage(J,0,0,6,6);let Te=ie.getImageData(0,0,6,6).data,Re=0,pe=0,we=0;for(let We=0;We<Te.length;We+=4)Re+=Te[We],pe+=Te[We+1],we+=Te[We+2];let Ie=new ke(Re/9180,pe/9180,we/9180).convertSRGBToLinear();D.set(k,{texture:ne,ratio:J.naturalWidth/J.naturalHeight,avg:Ie}),k===ze&&Fe(k)}))},O=new fs,B=new St(16,1,1,400),H=new Hl(16777215,2.4);H.position.set(-3,9,10),O.add(H),O.add(new kl(16777215,.9));let Z=new ng(16777215,0,6,1.4);O.add(Z);let W=new qt({color:2500134,roughness:.46,envMap:o,envMapIntensity:1,roughnessMap:Ns(256,8)}),ae=new qt({color:1052688,roughness:.3,envMap:o,envMapIntensity:1.2}),j=new qt({color:11842740,roughness:.24,metalness:1,envMap:o,envMapIntensity:1.4}),oe=new Gt({vertexShader:Mg,fragmentShader:yg,toneMapped:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},size:{value:new ge(1,1)},power:{value:0}}}),fe=[],Ne=null,Be=0,q=0,se={x:0,y:0,w:1,h:1};function be(){fe.forEach(K=>{O.remove(K),K.geometry.dispose()});let k=Zl(O,{body:W,trim:ae,chrome:j},Be,q);fe=k.meshes;let{w:J,h:ne,sw:G,sh:ie,sy:Te,side:Re,top:pe}=k;se={x:Re+.05,y:pe+.04,w:G*100,h:ie*100};let we=new Wt(G,ie,40,28),Ie=we.attributes.position;for(let K=0;K<Ie.count;K++){let me=Ie.getX(K)/(G/2),de=Ie.getY(K)/(ie/2);Ie.setZ(K,(1-(me*me+de*de)/2)*.04)}we.computeVertexNormals();let We=new pt(we,oe);We.position.set(0,Te,-.022),Z.position.set(0,Te,.5),Z.distance=Math.max(G,ie)*1.1,O.add(We),fe.push(We),B.aspect=Be/q;let P=ne/2/Math.tan(B.fov*Math.PI/360);B.position.set(0,0,P+.02),B.updateProjectionMatrix();let re=Math.round(G*100*s),X=Math.round(ie*100*s);(!Ne||Ne.width!==re||Ne.height!==X)&&(Ne?.dispose(),Ne=new pr(re,X,{samples:4,type:Wr,colorSpace:"",generateMipmaps:!0,minFilter:$t,magFilter:It})),oe.uniforms.map.value=Ne.texture,oe.uniforms.size.value.set(re,X),u.aspect=G/ie,u.updateProjectionMatrix(),Ue()}let Ee=()=>{let k=80*Math.tan(u.fov*Math.PI/360);return{vh:k,vw:k*u.aspect}},ue=4/3;function Ue(){let{vh:k,vw:J}=Ee(),ne=J*.66,G=k*.7,ie=ne,Te=ie/ue;Te>G&&(Te=G,ie=Te*ue),w.scale.set(ie,Te,1),w.position.set(-J*.035,k*.05,0),M.scale.set(ie+.2,Te+.2,1),M.position.set(w.position.x,w.position.y,-.04),d.uniforms.focus.value.set(.5+w.position.x/J,.5+w.position.y/k)}let ze=-1;function Fe(k){let J=D.get(k);J&&(d.uniforms.a.value!==J.texture&&(d.uniforms.b.value=d.uniforms.a.value||J.texture,d.uniforms.a.value=J.texture,d.uniforms.fade.value=0),m.copy(J.avg).lerp(f,.25),w.material.map=J.texture,w.material.opacity=1,w.material.needsUpdate=!0,ue=J.ratio,Ue())}function Q(){let k=e.getBoundingClientRect();!k.width||!k.height||(Be=k.width,q=k.height,n.setSize(Be,q,!1),be())}new ResizeObserver(Q).observe(e),Q();let ce={rx:-.28,ry:-.46,rz:.1};function b(k,J,ne,G){let{vh:ie,vw:Te}=Ee(),Re=Xi(1-Math.abs(ne)*1.25,0,1),pe=Re*Re*(3-2*Re),we=.72-ne*.56,Ie=Te*.5,We=22,P=Math.cos(we)*Ie,re=Math.sin(we)*We-10,X=-ie*.3+ne*ie*.1+J.lift*(1-pe),K=.62,me=1;if(ne<0){let Xe=Xi(-ne,0,1.4);P=Yt(Te*.29,Te*.4,Xe),X=-ie*.29-Xe*Xe*ie*.62,re=5+Xe*4,me=Xe}else P=Yt(P,Te*.29,pe),X=Yt(X,-ie*.29,pe),re=Yt(re,5,pe),K=Yt(.62,.5,pe);k.group.position.set(P,X,re),k.group.scale.setScalar(K);let de=Math.sin(G*24e-5+J.wob);return k.group.rotation.set(Yt(J.rx+de*.1,ce.rx+Math.sin(G*5e-4)*.018,pe),Yt(J.ry+G*5e-5*(J.rz>0?1:-1),ce.ry+Math.cos(G*4e-4)*.025,pe),Yt(J.rz,ce.rz,pe)),k.group.visible=me<1.35&&ne<11,pe}let ye=new gg,he=new ge,ve=null,te=-2,De=!1,xe=()=>{if(De=!1,!ve){te!==-2&&(te=-2,r(-1),e.style.cursor="");return}let k=(ve.x-se.x)/se.w,J=(ve.y-se.y)/se.h;if(k<0||k>1||J<0||J>1){te!==-2&&(te=-2,r(-1),e.style.cursor="");return}he.set(k*2-1,-(J*2-1)),ye.setFromCamera(he,u);let ne=ye.intersectObjects([...F.filter(ie=>ie.group.visible).map(ie=>ie.hit),w],!1)[0],G=ne?ne.object===w?-1:ne.object.userData.index:-2;G!==te&&(te=G,r(G>=0?G:-1),e.style.cursor=G===-2?"":"pointer")};e.addEventListener("pointermove",k=>{let J=e.getBoundingClientRect();ve={x:k.clientX-J.left,y:k.clientY-J.top},De=!0}),e.addEventListener("pointerleave",()=>{ve=null,De=!0}),e.addEventListener("click",k=>{k.target.closest("a, button")||(xe(),te!==-2&&i(te===-1?ze:te))});let Se=1,T=0,v=0,I=0,$=0,ee=0,Y=0,Le=!1;return{frame:(k,J,ne)=>{let G=Math.abs(k-$);$=k,I+=G*11+ne*9e-4;let ie=Xi(k/Math.max(1,t.length-1),0,1);F.forEach((we,Ie)=>{let We=Ie-k;if(Math.abs(We)<7&&S(Ie),b(we,E[Ie],We,J),Math.abs(We)<4){we.reels[0].hub.rotation.z=-I,we.reels[1].hub.rotation.z=-I*.82;let P=Yt(3,1.65,ie),re=Yt(1.65,3,ie);we.reels[0].pack.scale.set(P,P,1),we.reels[1].pack.scale.set(re,re,1)}});let Te=Xi(Math.round(k),0,t.length-1);if(C(Te),C(Math.min(t.length-1,Te+1)),C(Math.max(0,Te-1)),Te!==ze){let we=ze<0;ze=Te,we||(Se=1),Fe(Te)}Se=Math.max(Se*Math.exp(-ne/170),Xi(G*26,0,.7)),v||(v=J),T=Math.min(1,(J-v)/700),g.lerp(m,1-Math.exp(-ne/500)),_.color.copy(g),Z.color.copy(g),Z.intensity=7*oe.uniforms.power.value,d.uniforms.time.value=J/1e3,d.uniforms.fade.value=Math.min(1,d.uniforms.fade.value+ne/900),oe.uniforms.time.value=J/1e3,oe.uniforms.glitch.value=Se,oe.uniforms.power.value=1-(1-T)**3;let Re=ve?ve.x/Be-.5:0,pe=ve?ve.y/q-.5:0;return ee+=(Re-ee)*(1-Math.exp(-ne/260)),Y+=(pe-Y)*(1-Math.exp(-ne/260)),u.position.x=ee*2.2,u.position.y=-Y*1.4,u.lookAt(0,0,0),De&&xe(),n.toneMapping=Kt,n.setRenderTarget(Ne),n.clear(),n.render(h,u),n.setRenderTarget(null),n.toneMapping=qs,n.clear(),n.render(O,B),Le||(Le=!0,e.classList.add("tv-on")),se}}}export{Zl as addSet,Tg as default,Ns as grainTexture,Yl as makeTape,jl as studioEnv,ql as tapeParts};
