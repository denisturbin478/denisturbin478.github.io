var Pc=0,jo=1,Lc=2,Yo=1,Nc=2,Si=3,Di=0,Dt=1,hi=2,Oi=0,Sr=1,qo=2,Jo=3,Ko=4,Uc=5,ir=100,Ic=101,Dc=102,Oc=103,Fc=104,zc=200,Bc=201,kc=202,Hc=203,ks=204,Hs=205,Vc=206,Gc=207,Wc=208,Xc=209,jc=210,Yc=211,qc=212,Jc=213,Kc=214,Vs=0,Gs=1,Ws=2,Mr=3,Xs=4,js=5,Ys=6,qs=7,Zo=0,Zc=1,$c=2,ci=0,Qc=1,eu=2,tu=3,iu=4,ru=5,au=6,su=7,$o=300,Er=301,Tr=302,Js=303,Ks=304,ka=306,Ha=1e3,rr=1001,Zs=1002,kt=1003,nu=1004,Va=1005,Qt=1006,$s=1007,Mi=1008,Ei=1009,Qo=1010,el=1011,fa=1012,Qs=1013,ar=1014,ui=1015,br=1016,en=1017,tn=1018,wr=1020,tl=35902,il=1021,rl=1022,ei=1023,al=1024,sl=1025,Ar=1026,Rr=1027,rn=1028,an=1029,nl=1030,sn=1031,nn=1033,Ga=33776,Wa=33777,Xa=33778,ja=33779,on=35840,ln=35841,hn=35842,cn=35843,un=36196,dn=37492,pn=37496,fn=37808,mn=37809,gn=37810,vn=37811,_n=37812,xn=37813,yn=37814,Sn=37815,Mn=37816,En=37817,Tn=37818,bn=37819,wn=37820,An=37821,Ya=36492,Rn=36494,Cn=36495,ol=36283,Pn=36284,Ln=36285,Nn=36286,qa=2300,Un=2301,In=2302,ll=2400,hl=2401,cl=2402,ou=3200,lu=3201,ul=0,hu=1,Fi="",mt="srgb",Cr="srgb-linear",Ja="linear",st="srgb",Pr=7680,dl=519,cu=512,uu=513,du=514,pl=515,pu=516,fu=517,mu=518,gu=519,fl=35044,Dn=35048,ml="300 es",Ti=2e3,Ka=2001,Lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],On=Math.PI/180,Fn=180/Math.PI;function Nr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[e&255]+Rt[e>>8&255]+Rt[e>>16&255]+Rt[e>>24&255]+"-"+Rt[t&255]+Rt[t>>8&255]+"-"+Rt[t>>16&15|64]+Rt[t>>24&255]+"-"+Rt[i&63|128]+Rt[i>>8&255]+"-"+Rt[i>>16&255]+Rt[i>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function Et(e,t,i){return Math.max(t,Math.min(i,e))}function vu(e,t){return(e%t+t)%t}function zn(e,t,i){return(1-i)*e+i*t}function ma(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Ae=class dc{constructor(t=0,i=0){dc.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),s=this.x-t.x,n=this.y-t.y;return this.x=s*r-n*a+t.x,this.y=s*a+n*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class pc{constructor(t,i,r,a,s,n,o,l,h){pc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h)}set(t,i,r,a,s,n,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=s,c[5]=l,c[6]=r,c[7]=n,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],v=a[0],f=a[3],m=a[6],y=a[1],_=a[4],T=a[7],k=a[2],A=a[5],C=a[8];return s[0]=n*v+o*y+l*k,s[3]=n*f+o*_+l*A,s[6]=n*m+o*T+l*C,s[1]=h*v+c*y+u*k,s[4]=h*f+c*_+u*A,s[7]=h*m+c*T+u*C,s[2]=d*v+p*y+g*k,s[5]=d*f+p*_+g*A,s[8]=d*m+p*T+g*C,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*n*c-i*o*h-r*s*c+r*o*l+a*s*h-a*n*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*n-o*h,d=o*l-c*s,p=h*s-n*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*r)*v,t[2]=(o*r-a*n)*v,t[3]=d*v,t[4]=(c*i-a*l)*v,t[5]=(a*s-o*i)*v,t[6]=p*v,t[7]=(r*l-h*i)*v,t[8]=(n*i-r*s)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,s,n,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*n+h*o)+n+t,-a*h,a*l,-a*(-h*n+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Bn.makeScale(t,i)),this}rotate(t){return this.premultiply(Bn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Bn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bn=new et;function gl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Za(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function _u(){let e=Za("canvas");return e.style.display="block",e}var vl={};function ga(e){e in vl||(vl[e]=!0,console.warn(e))}function xu(e,t,i){return new Promise(function(r,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}function yu(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Su(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var rt={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(e,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===st&&(e.r=bi(e.r),e.g=bi(e.g),e.b=bi(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===st&&(e.r=Ur(e.r),e.g=Ur(e.g),e.b=Ur(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Fi?Ja:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function bi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ur(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var _l=[.64,.33,.3,.6,.15,.06],xl=[.2126,.7152,.0722],yl=[.3127,.329],Sl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Cr]:{primaries:_l,whitePoint:yl,transfer:Ja,toXYZ:Sl,fromXYZ:Ml,luminanceCoefficients:xl,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:_l,whitePoint:yl,transfer:st,toXYZ:Sl,fromXYZ:Ml,luminanceCoefficients:xl,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});var Ir,Mu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=Za("canvas")),Ir.width=e.width,Ir.height=e.height;let i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Za("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=bi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eu=0,El=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,n=r.length;s<n;s++)r[s].isDataTexture?a.push(kn(r[s].image)):a.push(kn(r[s]))}else a=kn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function kn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Mu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tu=0,Xt=class zs extends Lr{constructor(t=zs.DEFAULT_IMAGE,i=zs.DEFAULT_MAPPING,r=rr,a=rr,s=Qt,n=Mi,o=ei,l=Ei,h=zs.DEFAULT_ANISOTROPY,c=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Nr(),this.name="",this.source=new El(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$o)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case rr:t.x=t.x<0?0:1;break;case Zs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case rr:t.y=t.y<0?0:1;break;case Zs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=$o,Xt.DEFAULT_ANISOTROPY=1;var _t=class fc{constructor(t=0,i=0,r=0,a=1){fc.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=this.w,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*i+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*i+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*i+n[7]*r+n[11]*a+n[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,s,n=t.elements,o=n[0],l=n[4],h=n[8],c=n[1],u=n[5],d=n[9],p=n[2],g=n[6],v=n[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,y=(u+1)/2,_=(v+1)/2,T=(l+c)/4,k=(h+p)/4,A=(d+g)/4;return m>y&&m>_?m<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(m),a=T/r,s=k/r):y>_?y<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),r=T/a,s=A/a):_<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(_),r=k/s,a=A/s),this.set(r,a,s,i),this}let f=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(f)<.001&&(f=1),this.x=(g-d)/f,this.y=(h-p)/f,this.z=(c-l)/f,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bu=class extends Lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let n=0;n<s;n++)this.textures[n]=a.clone(),this.textures[n].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new El(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends bu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Tl=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},wu=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},di=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[s+0],d=a[s+1],p=a[s+2],g=a[s+3];if(n===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(n===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let v=1-n,f=o*u+l*d+h*p+c*g,m=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let T=Math.sqrt(y),k=Math.atan2(T,f*m);v=Math.sin(v*k)/T,n=Math.sin(n*k)/T}let _=n*m;if(o=o*v+u*_,l=l*v+d*_,h=h*v+p*_,c=c*v+g*_,v===1-n){let T=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=T,l*=T,h*=T,c*=T}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[s],u=a[s+1],d=a[s+2],p=a[s+3];return e[t]=n*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-n*d,e[t+2]=l*p+h*d+n*u-o*c,e[t+3]=h*p-n*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),c=n(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+n+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(s-r)*d}else if(i>n&&i>c){let d=2*Math.sqrt(1+i-n-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+l)/d}else if(n>c){let d=2*Math.sqrt(1+n-i-c);this._w=(a-l)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-n);this._w=(s-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,n=s*e._w+i*e._x+r*e._y+a*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let o=1-n*n;if(o<=Number.EPSILON){let d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,n),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=s*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class mc{constructor(t=0,i=0,r=0){mc.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(bl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(bl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[3]*r+s[6]*a,this.y=s[1]*i+s[4]*r+s[7]*a,this.z=s[2]*i+s[5]*r+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=t.elements,n=1/(s[3]*i+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*i+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*i+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,s=t.x,n=t.y,o=t.z,l=t.w,h=2*(n*a-o*r),c=2*(o*i-s*a),u=2*(s*r-n*i);return this.x=i+l*h+n*u-o*c,this.y=r+l*c+o*h-s*u,this.z=a+l*u+s*c-n*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a,this.y=s[1]*i+s[5]*r+s[9]*a,this.z=s[2]*i+s[6]*r+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,s=t.z,n=i.x,o=i.y,l=i.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Hn.copy(this).projectOnVector(t),this.sub(Hn)}reflect(t){return this.sub(Hn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hn=new N,bl=new di,sr=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,n=a.count;s<n;s++)e.isMesh===!0?e.getVertexPosition(s,ti):ti.fromBufferAttribute(a,s),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Qa.subVectors(this.max,va),Dr.subVectors(e.a,va),Or.subVectors(e.b,va),Fr.subVectors(e.c,va),Bi.subVectors(Or,Dr),ki.subVectors(Fr,Or),nr.subVectors(Dr,Fr);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-nr.z,nr.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,nr.z,0,-nr.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-nr.y,nr.x,0];return!Vn(t,Dr,Or,Fr,Qa)||(t=[1,0,0,0,1,0,0,0,1],!Vn(t,Dr,Or,Fr,Qa))?!1:(es.crossVectors(Bi,ki),t=[es.x,es.y,es.z],Vn(t,Dr,Or,Fr,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new N,new N,new N,new N,new N,new N,new N,new N],ti=new N,$a=new sr,Dr=new N,Or=new N,Fr=new N,Bi=new N,ki=new N,nr=new N,va=new N,Qa=new N,es=new N,or=new N;function Vn(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){or.fromArray(e,s);let o=a.x*Math.abs(or.x)+a.y*Math.abs(or.y)+a.z*Math.abs(or.z),l=t.dot(or),h=i.dot(or),c=r.dot(or);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Au=new sr,_a=new N,Gn=new N,xa=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Au.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Gn)),this.expandByPoint(_a.copy(e.center).sub(Gn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new N,Wn=new N,ts=new N,Hi=new N,Xn=new N,is=new N,jn=new N,wl=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wn.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Wn);let a=e.distanceTo(t)*.5,s=-this.direction.dot(ts),n=Hi.dot(this.direction),o=-Hi.dot(ts),l=Hi.lengthSq(),h=Math.abs(1-s*s),c,u,d,p;if(h>0)if(c=s*o-n,u=s*n-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+s*u+2*n)+u*(s*c+u+2*o)+l}else u=a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-s*a+n)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(s*a+n)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=s>0?-a:a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Wn).addScaledVector(ts,u),d}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),c>=0?(n=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(n=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||n>r)||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,a){Xn.subVectors(t,e),is.subVectors(i,e),jn.crossVectors(Xn,is);let s=this.direction.dot(jn),n;if(s>0){if(r)return null;n=1}else if(s<0)n=-1,s=-s;else return null;Hi.subVectors(this.origin,e);let o=n*this.direction.dot(is.crossVectors(Hi,is));if(o<0)return null;let l=n*this.direction.dot(Xn.cross(Hi));if(l<0||o+l>s)return null;let h=-n*Hi.dot(jn);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class Wo{constructor(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){Wo.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f)}set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=a,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wo().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/zr.setFromMatrixColumn(t,0).length(),s=1/zr.setFromMatrixColumn(t,1).length(),n=1/zr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*n,i[9]=r[9]*n,i[10]=r[10]*n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,s=t.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-v*h,i[9]=-o*l,i[2]=v-d*h,i[6]=g+p*h,i[10]=n*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d+v*o,i[4]=g*o-p,i[8]=n*h,i[1]=n*u,i[5]=n*c,i[9]=-o,i[2]=p*o-g,i[6]=v+d*o,i[10]=n*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d-v*o,i[4]=-n*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=n*c,i[9]=v-d*o,i[2]=-n*h,i[6]=o,i[10]=n*l}else if(t.order==="ZYX"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+v,i[1]=l*u,i[5]=v*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=n*l}else if(t.order==="YZX"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-d*u,i[8]=g*u+p,i[1]=u,i[5]=n*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-v*u}else if(t.order==="XZY"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+v,i[5]=n*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=v*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ru,t,Cu)}lookAt(t,i,r){let a=this.elements;return Ht.subVectors(t,i),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Vi.crossVectors(r,Ht),Vi.lengthSq()===0&&(Math.abs(r.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Vi.crossVectors(r,Ht)),Vi.normalize(),rs.crossVectors(Ht,Vi),a[0]=Vi.x,a[4]=rs.x,a[8]=Ht.x,a[1]=Vi.y,a[5]=rs.y,a[9]=Ht.y,a[2]=Vi.z,a[6]=rs.z,a[10]=Ht.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],v=r[6],f=r[10],m=r[14],y=r[3],_=r[7],T=r[11],k=r[15],A=a[0],C=a[4],U=a[8],M=a[12],E=a[1],R=a[5],I=a[9],H=a[13],z=a[2],ne=a[6],ee=a[10],ge=a[14],q=a[3],K=a[7],Ee=a[11],Oe=a[15];return s[0]=n*A+o*E+l*z+h*q,s[4]=n*C+o*R+l*ne+h*K,s[8]=n*U+o*I+l*ee+h*Ee,s[12]=n*M+o*H+l*ge+h*Oe,s[1]=c*A+u*E+d*z+p*q,s[5]=c*C+u*R+d*ne+p*K,s[9]=c*U+u*I+d*ee+p*Ee,s[13]=c*M+u*H+d*ge+p*Oe,s[2]=g*A+v*E+f*z+m*q,s[6]=g*C+v*R+f*ne+m*K,s[10]=g*U+v*I+f*ee+m*Ee,s[14]=g*M+v*H+f*ge+m*Oe,s[3]=y*A+_*E+T*z+k*q,s[7]=y*C+_*R+T*ne+k*K,s[11]=y*U+_*I+T*ee+k*Ee,s[15]=y*M+_*H+T*ge+k*Oe,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[12],n=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+s*l*u-a*h*u-s*o*d+r*h*d+a*o*p-r*l*p)+v*(+i*l*p-i*h*d+s*n*d-a*n*p+a*h*c-s*l*c)+f*(+i*h*u-i*o*p-s*n*u+r*n*p+s*o*c-r*h*c)+m*(-a*o*c-i*l*u+i*o*d+a*n*u-r*n*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],y=u*f*h-v*d*h+v*l*p-o*f*p-u*l*m+o*d*m,_=g*d*h-c*f*h-g*l*p+n*f*p+c*l*m-n*d*m,T=c*v*h-g*u*h+g*o*p-n*v*p-c*o*m+n*u*m,k=g*u*l-c*v*l-g*o*d+n*v*d+c*o*f-n*u*f,A=i*y+r*_+a*T+s*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=y*C,t[1]=(v*d*s-u*f*s-v*a*p+r*f*p+u*a*m-r*d*m)*C,t[2]=(o*f*s-v*l*s+v*a*h-r*f*h-o*a*m+r*l*m)*C,t[3]=(u*l*s-o*d*s-u*a*h+r*d*h+o*a*p-r*l*p)*C,t[4]=_*C,t[5]=(c*f*s-g*d*s+g*a*p-i*f*p-c*a*m+i*d*m)*C,t[6]=(g*l*s-n*f*s-g*a*h+i*f*h+n*a*m-i*l*m)*C,t[7]=(n*d*s-c*l*s+c*a*h-i*d*h-n*a*p+i*l*p)*C,t[8]=T*C,t[9]=(g*u*s-c*v*s-g*r*p+i*v*p+c*r*m-i*u*m)*C,t[10]=(n*v*s-g*o*s+g*r*h-i*v*h-n*r*m+i*o*m)*C,t[11]=(c*o*s-n*u*s-c*r*h+i*u*h+n*r*p-i*o*p)*C,t[12]=k*C,t[13]=(c*v*a-g*u*a+g*r*d-i*v*d-c*r*f+i*u*f)*C,t[14]=(g*o*a-n*v*a-g*r*l+i*v*l+n*r*f-i*o*f)*C,t[15]=(n*u*a-c*o*a+c*r*l-i*u*l-n*r*d+i*o*d)*C,this}scale(t){let i=this.elements,r=t.x,a=t.y,s=t.z;return i[0]*=r,i[4]*=a,i[8]*=s,i[1]*=r,i[5]*=a,i[9]*=s,i[2]*=r,i[6]*=a,i[10]*=s,i[3]*=r,i[7]*=a,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),s=1-r,n=t.x,o=t.y,l=t.z,h=s*n,c=s*o;return this.set(h*n+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*n,0,h*l-a*o,c*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,s,n){return this.set(1,r,s,0,t,1,n,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,s=i._x,n=i._y,o=i._z,l=i._w,h=s+s,c=n+n,u=o+o,d=s*h,p=s*c,g=s*u,v=n*c,f=n*u,m=o*u,y=l*h,_=l*c,T=l*u,k=r.x,A=r.y,C=r.z;return a[0]=(1-(v+m))*k,a[1]=(p+T)*k,a[2]=(g-_)*k,a[3]=0,a[4]=(p-T)*A,a[5]=(1-(d+m))*A,a[6]=(f+y)*A,a[7]=0,a[8]=(g+_)*C,a[9]=(f-y)*C,a[10]=(1-(d+v))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,s=zr.set(a[0],a[1],a[2]).length(),n=zr.set(a[4],a[5],a[6]).length(),o=zr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],ii.copy(this);let l=1/s,h=1/n,c=1/o;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=c,ii.elements[9]*=c,ii.elements[10]*=c,i.setFromRotationMatrix(ii),r.x=s,r.y=n,r.z=o,this}makePerspective(t,i,r,a,s,n,o=Ti){let l=this.elements,h=2*s/(i-t),c=2*s/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===Ti)p=-(n+s)/(n-s),g=-2*n*s/(n-s);else if(o===Ka)p=-n/(n-s),g=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,s,n,o=Ti){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(n-s),d=(i+t)*h,p=(r+a)*c,g,v;if(o===Ti)g=(n+s)*u,v=-2*u;else if(o===Ka)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},zr=new N,ii=new ht,Ru=new N(0,0,0),Cu=new N(1,1,1),Vi=new N,rs=new N,Ht=new N,Al=new ht,Rl=new di,Gi=class gc{constructor(t=0,i=0,r=0,a=gc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,s=a[0],n=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var Yn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pu=0,Cl=new N,Br=new di,Ri=new ht,as=new N,ya=new N,Lu=new N,Nu=new di,Pl=new N(1,0,0),Ll=new N(0,1,0),Nl=new N(0,0,1),Ul={type:"added"},Uu={type:"removed"},kr={type:"childadded",child:null},qn={type:"childremoved",child:null},jt=class Bs extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bs.DEFAULT_UP.clone();let t=new N,i=new Gi,r=new di,a=new N(1,1,1);function s(){r.setFromEuler(i,!1)}function n(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new et}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Bs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Br.setFromAxisAngle(t,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,i){return Br.setFromAxisAngle(t,i),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,i){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?as.copy(t):as.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ya,as,this.up):Ri.lookAt(as,ya,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),Br.setFromRotationMatrix(Ri),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),kr.child=t,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Uu),qn.child=t,this.dispatchEvent(qn),qn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),kr.child=t,this.dispatchEvent(kr),kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),c=n(t.images),u=n(t.shapes),d=n(t.skeletons),p=n(t.animations),g=n(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function n(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};jt.DEFAULT_UP=new N(0,1,0),jt.DEFAULT_MATRIX_AUTO_UPDATE=!0,jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new N,Ci=new N,Jn=new N,Pi=new N,Hr=new N,Vr=new N,Il=new N,Kn=new N,Zn=new N,$n=new N,Qn=new _t,eo=new _t,to=new _t,Sa=class na{constructor(t=new N,i=new N,r=new N){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ri.subVectors(t,i),a.cross(ri);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,i,r,a,s){ri.subVectors(a,i),Ci.subVectors(r,i),Jn.subVectors(t,i);let n=ri.dot(ri),o=ri.dot(Ci),l=ri.dot(Jn),h=Ci.dot(Ci),c=Ci.dot(Jn),u=n*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(n*c-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,i,r,a,s,n,o,l){return this.getBarycoord(t,i,r,a,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(n,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,i,r,a,s,n){return Qn.setScalar(0),eo.setScalar(0),to.setScalar(0),Qn.fromBufferAttribute(t,i),eo.fromBufferAttribute(t,r),to.fromBufferAttribute(t,a),n.setScalar(0),n.addScaledVector(Qn,s.x),n.addScaledVector(eo,s.y),n.addScaledVector(to,s.z),n}static isFrontFacing(t,i,r,a){return ri.subVectors(r,i),Ci.subVectors(t,i),ri.cross(Ci).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ri.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return na.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return na.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,s){return na.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}containsPoint(t){return na.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return na.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,s=this.c,n,o;Hr.subVectors(a,r),Vr.subVectors(s,r),Kn.subVectors(t,r);let l=Hr.dot(Kn),h=Vr.dot(Kn);if(l<=0&&h<=0)return i.copy(r);Zn.subVectors(t,a);let c=Hr.dot(Zn),u=Vr.dot(Zn);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return n=l/(l-c),i.copy(r).addScaledVector(Hr,n);$n.subVectors(t,s);let p=Hr.dot($n),g=Vr.dot($n);if(g>=0&&p<=g)return i.copy(s);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Vr,o);let f=c*g-p*u;if(f<=0&&u-c>=0&&p-g>=0)return Il.subVectors(s,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(Il,o);let m=1/(f+v+d);return n=v*m,o=d*m,i.copy(r).addScaledVector(Hr,n).addScaledVector(Vr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ss={h:0,s:0,l:0};function io(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=vu(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=io(s,a,e+1/3),this.g=io(s,a,e),this.b=io(s,a,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],n=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let i=Dl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return rt.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Et(Ct.r*255,0,255))*65536+Math.round(Et(Ct.g*255,0,255))*256+Math.round(Et(Ct.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ct.copy(this),t);let i=Ct.r,r=Ct.g,a=Ct.b,s=Math.max(i,r,a),n=Math.min(i,r,a),o,l,h=(n+s)/2;if(n===s)o=0,l=0;else{let c=s-n;switch(l=h<=.5?c/(s+n):c/(2-s-n),s){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=mt){rt.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,i=Ct.g,r=Ct.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(ss);let i=zn(Wi.h,ss.h,t),r=zn(Wi.s,ss.s,t),a=zn(Wi.l,ss.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new je;je.NAMES=Dl;var Iu=0,Ma=class extends Lr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Nr(),this.name="",this.blending=Sr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=Hs,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ks&&(i.blendSrc=this.blendSrc),this.blendDst!==Hs&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let n in a){let o=a[n];delete o.metadata,s.push(o)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xi=class extends Ma{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xt=new N,ns=new Ae,Lt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fl,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}},Ol=class extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Fl=class extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ot=class extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Du=0,Yt=new ht,ro=new jt,Gr=new N,Vt=new sr,Ea=new sr,Tt=new N,Ft=class vc extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gl(t)?Fl:Ol)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new et().getNormalMatrix(t);r.applyNormalMatrix(s),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yt.makeRotationFromQuaternion(t),this.applyMatrix4(Yt),this}rotateX(t){return Yt.makeRotationX(t),this.applyMatrix4(Yt),this}rotateY(t){return Yt.makeRotationY(t),this.applyMatrix4(Yt),this}rotateZ(t){return Yt.makeRotationZ(t),this.applyMatrix4(Yt),this}translate(t,i,r){return Yt.makeTranslation(t,i,r),this.applyMatrix4(Yt),this}scale(t,i,r){return Yt.makeScale(t,i,r),this.applyMatrix4(Yt),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,s=t.length;a<s;a++){let n=t[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new ot(r,3))}else{for(let r=0,a=i.count;r<a;r++){let s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let s=i[r];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(t),i)for(let s=0,n=i.length;s<n;s++){let o=i[s];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Vt.min,Ea.min),Vt.expandByPoint(Tt),Tt.addVectors(Vt.max,Ea.max),Vt.expandByPoint(Tt)):(Vt.expandByPoint(Ea.min),Vt.expandByPoint(Ea.max))}Vt.getCenter(r);let a=0;for(let s=0,n=t.count;s<n;s++)Tt.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(Tt));if(i)for(let s=0,n=i.length;s<n;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Tt.fromBufferAttribute(o,h),l&&(Gr.fromBufferAttribute(t,h),Tt.add(Gr)),a=Math.max(a,r.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*r.count),4));let n=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<r.count;U++)o[U]=new N,l[U]=new N;let h=new N,c=new N,u=new N,d=new Ae,p=new Ae,g=new Ae,v=new N,f=new N;function m(U,M,E){h.fromBufferAttribute(r,U),c.fromBufferAttribute(r,M),u.fromBufferAttribute(r,E),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,E),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),f.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),o[U].add(v),o[M].add(v),o[E].add(v),l[U].add(f),l[M].add(f),l[E].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,M=y.length;U<M;++U){let E=y[U],R=E.start,I=E.count;for(let H=R,z=R+I;H<z;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let _=new N,T=new N,k=new N,A=new N;function C(U){k.fromBufferAttribute(a,U),A.copy(k);let M=o[U];_.copy(M),_.sub(k.multiplyScalar(k.dot(M))).normalize(),T.crossVectors(A,M);let E=T.dot(l[U])<0?-1:1;n.setXYZW(U,_.x,_.y,_.z,E)}for(let U=0,M=y.length;U<M;++U){let E=y[U],R=E.start,I=E.count;for(let H=R,z=R+I;H<z;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Lt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new N,s=new N,n=new N,o=new N,l=new N,h=new N,c=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);a.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),n.fromBufferAttribute(i,f),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,f),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),s.fromBufferAttribute(i,d+1),n.fromBufferAttribute(i,d+2),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tt.fromBufferAttribute(t,i),Tt.normalize(),t.setXYZ(i,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let m=0;m<c;m++)d[g++]=h[p++]}return new Lt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new vc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let s=t.morphAttributes;for(let h in s){let c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,c=n.length;h<c;h++){let u=n[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zl=new ht,lr=new wl,os=new xa,Bl=new N,ls=new N,hs=new N,cs=new N,ao=new N,us=new N,kl=new N,ds=new N,gt=class extends jt{constructor(e=new Ft,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){us.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=n[o],c=a[o];h!==0&&(ao.fromBufferAttribute(c,e),s?us.addScaledVector(ao,h):us.addScaledVector(ao.sub(t),h))}t.add(us)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(a),lr.copy(e.ray).recast(e.near),!(os.containsPoint(lr.origin)===!1&&(lr.intersectSphere(os,Bl)===null||lr.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(zl.copy(a).invert(),lr.copy(e.ray).applyMatrix4(zl),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(n!==null)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(n.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,T=y;_<T;_+=3){let k=n.getX(_),A=n.getX(_+1),C=n.getX(_+2);r=ps(this,f,e,i,l,h,c,k,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(n.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=n.getX(v),y=n.getX(v+1),_=n.getX(v+2);r=ps(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,T=y;_<T;_+=3){let k=_,A=_+1,C=_+2;r=ps(this,f,e,i,l,h,c,k,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=v,y=v+1,_=v+2;r=ps(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function Ou(e,t,i,r,a,s,n,o){let l;if(t.side===Dt?l=r.intersectTriangle(n,s,a,!0,o):l=r.intersectTriangle(a,s,n,t.side===Di,o),l===null)return null;ds.copy(o),ds.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(ds);return h<i.near||h>i.far?null:{distance:h,point:ds.clone(),object:e}}function ps(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,ls),e.getVertexPosition(l,hs),e.getVertexPosition(h,cs);let c=Ou(e,t,i,r,ls,hs,cs,kl);if(c){let u=new N;Sa.getBarycoord(kl,ls,hs,cs,u),a&&(c.uv=Sa.getInterpolatedAttribute(a,o,l,h,u,new Ae)),s&&(c.uv1=Sa.getInterpolatedAttribute(s,o,l,h,u,new Ae)),n&&(c.normal=Sa.getInterpolatedAttribute(n,o,l,h,u,new N),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new N,materialIndex:0};Sa.getNormal(ls,hs,cs,d.normal),c.face=d,c.barycoord=u}return c}var ji=class _c extends Ft{constructor(t=1,i=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};let o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,n,s,0),g("z","y","x",1,-1,r,i,-t,n,s,1),g("x","z","y",1,1,t,r,i,a,n,2),g("x","z","y",1,-1,t,r,-i,a,n,3),g("x","y","z",1,-1,t,i,r,a,s,4),g("x","y","z",-1,-1,t,i,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2));function g(v,f,m,y,_,T,k,A,C,U,M){let E=T/C,R=k/U,I=T/2,H=k/2,z=A/2,ne=C+1,ee=U+1,ge=0,q=0,K=new N;for(let Ee=0;Ee<ee;Ee++){let Oe=Ee*R-H;for(let Le=0;Le<ne;Le++){let G=Le*E-I;K[v]=G*y,K[f]=Oe*_,K[m]=z,h.push(K.x,K.y,K.z),K[v]=0,K[f]=0,K[m]=A>0?1:-1,c.push(K.x,K.y,K.z),u.push(Le/C),u.push(1-Ee/U),ge+=1}}for(let Ee=0;Ee<U;Ee++)for(let Oe=0;Oe<C;Oe++){let Le=d+Oe+ne*Ee,G=d+Oe+ne*(Ee+1),fe=d+(Oe+1)+ne*(Ee+1),F=d+(Oe+1)+ne*Ee;l.push(Le,G,F),l.push(G,fe,F),q+=6}o.addGroup(p,q,M),p+=q,d+=ge}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function Nt(e){let t={};for(let i=0;i<e.length;i++){let r=Wr(e[i]);for(let a in r)t[a]=r[a]}return t}function Fu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Hl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:rt.workingColorSpace}var zu={clone:Wr,merge:Nt},Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends Ma{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Fu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Vl=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new N,Gl=new Ae,Wl=new Ae,Gt=class extends Vl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(On*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fn*2*Math.atan(Math.tan(On*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(On*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let n=this.filmOffset;n!==0&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xr=-90,jr=1,Hu=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(Xr,jr,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Xr,jr,e,t);a.layers=this.layers,this.add(a);let s=new Gt(Xr,jr,e,t);s.layers=this.layers,this.add(s);let n=new Gt(Xr,jr,e,t);n.layers=this.layers,this.add(n);let o=new Gt(Xr,jr,e,t);o.layers=this.layers,this.add(o);let l=new Gt(Xr,jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let l of t)this.remove(l);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,n),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Xl=class extends Xt{constructor(e,t,i,r,a,s,n,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vu=class extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),a=new pi({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Oi});a.uniforms.tEquirect.value=t;let s=new gt(r,a),n=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Qt),new Hu(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},so=new N,Gu=new N,Wu=new et,hr=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=so.subVectors(i,t).cross(Gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(so),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wu.getNormalMatrix(e),r=this.coplanarPoint(so).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new xa,fs=new N,no=class{constructor(e=new hr,t=new hr,i=new hr,r=new hr,a=new hr,s=new hr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){let i=this.planes,r=e.elements,a=r[0],s=r[1],n=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],v=r[11],f=r[12],m=r[13],y=r[14],_=r[15];if(i[0].setComponents(o-a,u-l,v-d,_-f).normalize(),i[1].setComponents(o+a,u+l,v+d,_+f).normalize(),i[2].setComponents(o+s,u+h,v+p,_+m).normalize(),i[3].setComponents(o-s,u-h,v-p,_-m).normalize(),i[4].setComponents(o-n,u-c,v-g,_-y).normalize(),t===Ti)i[5].setComponents(o+n,u+c,v+g,_+y).normalize();else if(t===Ka)i[5].setComponents(n,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jl(){let e=null,t=!1,i=null,r=null;function a(s,n){i(s,n),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Xu(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:s,update:n}}var qt=class xc extends Ft{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let s=t/2,n=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],v=[],f=[];for(let m=0;m<c;m++){let y=m*d-n;for(let _=0;_<h;_++){let T=_*u-s;g.push(T,-y,0),v.push(0,0,1),f.push(_/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+h*m,T=y+h*(m+1),k=y+1+h*(m+1),A=y+1+h*m;p.push(_,T,A),p.push(T,k,A)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.width,t.height,t.widthSegments,t.heightSegments)}},ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yu=`#ifdef USE_ALPHAHASH
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
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
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
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sd=`#ifdef USE_IRIDESCENCE
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,md=`#define PI 3.141592653589793
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
} // validated`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Td=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
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
#endif`,Dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
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
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
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
#endif`,Wd=`struct PhysicalMaterial {
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
}`,Xd=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
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
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
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
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
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
}`,Qp=`#define DISTANCE
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
}`,ef=`#define DISTANCE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
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
}`,sf=`uniform vec3 diffuse;
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
}`,of=`uniform vec3 diffuse;
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
}`,lf=`#define LAMBERT
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
}`,hf=`#define LAMBERT
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
}`,cf=`#define MATCAP
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
}`,uf=`#define MATCAP
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
}`,df=`#define NORMAL
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
}`,pf=`#define NORMAL
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
}`,ff=`#define PHONG
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
}`,mf=`#define PHONG
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
}`,gf=`#define STANDARD
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
}`,vf=`#define STANDARD
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
}`,_f=`#define TOON
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
}`,xf=`#define TOON
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
}`,yf=`uniform float size;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`uniform vec3 color;
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
}`,Tf=`uniform float rotation;
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
}`,bf=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:ju,alphahash_pars_fragment:Yu,alphamap_fragment:qu,alphamap_pars_fragment:Ju,alphatest_fragment:Ku,alphatest_pars_fragment:Zu,aomap_fragment:$u,aomap_pars_fragment:Qu,batching_pars_vertex:ed,batching_vertex:td,begin_vertex:id,beginnormal_vertex:rd,bsdfs:ad,iridescence_fragment:sd,bumpmap_pars_fragment:nd,clipping_planes_fragment:od,clipping_planes_pars_fragment:ld,clipping_planes_pars_vertex:hd,clipping_planes_vertex:cd,color_fragment:ud,color_pars_fragment:dd,color_pars_vertex:pd,color_vertex:fd,common:md,cube_uv_reflection_fragment:gd,defaultnormal_vertex:vd,displacementmap_pars_vertex:_d,displacementmap_vertex:xd,emissivemap_fragment:yd,emissivemap_pars_fragment:Sd,colorspace_fragment:Md,colorspace_pars_fragment:Ed,envmap_fragment:Td,envmap_common_pars_fragment:bd,envmap_pars_fragment:wd,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:zd,envmap_vertex:Rd,fog_vertex:Cd,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Nd,gradientmap_pars_fragment:Ud,lightmap_pars_fragment:Id,lights_lambert_fragment:Dd,lights_lambert_pars_fragment:Od,lights_pars_begin:Fd,lights_toon_fragment:Bd,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Vd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:jd,lights_fragment_end:Yd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Zd,map_fragment:$d,map_pars_fragment:Qd,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:ip,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:sp,morphnormal_vertex:np,morphtarget_pars_vertex:op,morphtarget_vertex:lp,normal_fragment_begin:hp,normal_fragment_maps:cp,normal_pars_fragment:up,normal_pars_vertex:dp,normal_vertex:pp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:_p,opaque_fragment:xp,packing:yp,premultiplied_alpha_fragment:Sp,project_vertex:Mp,dithering_fragment:Ep,dithering_pars_fragment:Tp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Ip,specularmap_fragment:Dp,specularmap_pars_fragment:Op,tonemapping_fragment:Fp,tonemapping_pars_fragment:zp,transmission_fragment:Bp,transmission_pars_fragment:kp,uv_pars_fragment:Hp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:jp,backgroundCube_vert:Yp,backgroundCube_frag:qp,cube_vert:Jp,cube_frag:Kp,depth_vert:Zp,depth_frag:$p,distanceRGBA_vert:Qp,distanceRGBA_frag:ef,equirect_vert:tf,equirect_frag:rf,linedashed_vert:af,linedashed_frag:sf,meshbasic_vert:nf,meshbasic_frag:of,meshlambert_vert:lf,meshlambert_frag:hf,meshmatcap_vert:cf,meshmatcap_frag:uf,meshnormal_vert:df,meshnormal_frag:pf,meshphong_vert:ff,meshphong_frag:mf,meshphysical_vert:gf,meshphysical_frag:vf,meshtoon_vert:_f,meshtoon_frag:xf,points_vert:yf,points_frag:Sf,shadow_vert:Mf,shadow_frag:Ef,sprite_vert:Tf,sprite_frag:bf},Pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},fi={basic:{uniforms:Nt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Nt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Nt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Nt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Nt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Nt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Nt([Pe.points,Pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Nt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Nt([Pe.common,Pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Nt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Nt([Pe.sprite,Pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Nt([Pe.common,Pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Nt([Pe.lights,Pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};fi.physical={uniforms:Nt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var ms={r:0,b:0,g:0},ur=new Gi,wf=new ht;function Af(e,t,i,r,a,s,n){let o=new je(0),l=s===!0?0:1,h,c,u=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?i:t).get(_)),_}function v(y){let _=!1,T=g(y);T===null?m(o,l):T&&T.isColor&&(m(T,1),_=!0);let k=e.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,n):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,n),(e.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(y,_){let T=g(_);T&&(T.isCubeTexture||T.mapping===ka)?(c===void 0&&(c=new gt(new ji(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Wr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(k,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),ur.copy(_.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wf.makeRotationFromEuler(ur)),c.material.toneMapped=rt.getTransfer(T.colorSpace)!==st,(u!==T||d!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new gt(new qt(2,2),new pi({name:"BackgroundMaterial",uniforms:Wr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=rt.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function m(y,_){y.getRGB(ms,Hl(e)),r.buffers.color.setClear(ms.r,ms.g,ms.b,_,n)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:f}}function Rf(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),s=a,n=!1;function o(E,R,I,H,z){let ne=!1,ee=u(H,I,R);s!==ee&&(s=ee,h(s.object)),ne=p(E,H,I,z),ne&&g(E,H,I,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(ne||n)&&(n=!1,T(E,R,I,H),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function h(E){return e.bindVertexArray(E)}function c(E){return e.deleteVertexArray(E)}function u(E,R,I){let H=I.wireframe===!0,z=r[E.id];z===void 0&&(z={},r[E.id]=z);let ne=z[R.id];ne===void 0&&(ne={},z[R.id]=ne);let ee=ne[H];return ee===void 0&&(ee=d(l()),ne[H]=ee),ee}function d(E){let R=[],I=[],H=[];for(let z=0;z<i;z++)R[z]=0,I[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,R,I,H){let z=s.attributes,ne=R.attributes,ee=0,ge=I.getAttributes();for(let q in ge)if(ge[q].location>=0){let K=z[q],Ee=ne[q];if(Ee===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(Ee=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(Ee=E.instanceColor)),K===void 0||K.attribute!==Ee||Ee&&K.data!==Ee.data)return!0;ee++}return s.attributesNum!==ee||s.index!==H}function g(E,R,I,H){let z={},ne=R.attributes,ee=0,ge=I.getAttributes();for(let q in ge)if(ge[q].location>=0){let K=ne[q];K===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(K=E.instanceColor));let Ee={};Ee.attribute=K,K&&K.data&&(Ee.data=K.data),z[q]=Ee,ee++}s.attributes=z,s.attributesNum=ee,s.index=H}function v(){let E=s.newAttributes;for(let R=0,I=E.length;R<I;R++)E[R]=0}function f(E){m(E,0)}function m(E,R){let I=s.newAttributes,H=s.enabledAttributes,z=s.attributeDivisors;I[E]=1,H[E]===0&&(e.enableVertexAttribArray(E),H[E]=1),z[E]!==R&&(e.vertexAttribDivisor(E,R),z[E]=R)}function y(){let E=s.newAttributes,R=s.enabledAttributes;for(let I=0,H=R.length;I<H;I++)R[I]!==E[I]&&(e.disableVertexAttribArray(I),R[I]=0)}function _(E,R,I,H,z,ne,ee){ee===!0?e.vertexAttribIPointer(E,R,I,z,ne):e.vertexAttribPointer(E,R,I,H,z,ne)}function T(E,R,I,H){v();let z=H.attributes,ne=I.getAttributes(),ee=R.defaultAttributeValues;for(let ge in ne){let q=ne[ge];if(q.location>=0){let K=z[ge];if(K===void 0&&(ge==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),ge==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){let Ee=K.normalized,Oe=K.itemSize,Le=t.get(K);if(Le===void 0)continue;let G=Le.buffer,fe=Le.type,F=Le.bytesPerElement,Z=fe===e.INT||fe===e.UNSIGNED_INT||K.gpuType===Qs;if(K.isInterleavedBufferAttribute){let V=K.data,se=V.stride,re=K.offset;if(V.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)m(q.location+ye,V.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ye=0;ye<q.locationSize;ye++)f(q.location+ye);e.bindBuffer(e.ARRAY_BUFFER,G);for(let ye=0;ye<q.locationSize;ye++)_(q.location+ye,Oe/q.locationSize,fe,Ee,se*F,(re+Oe/q.locationSize*ye)*F,Z)}else{if(K.isInstancedBufferAttribute){for(let V=0;V<q.locationSize;V++)m(q.location+V,K.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let V=0;V<q.locationSize;V++)f(q.location+V);e.bindBuffer(e.ARRAY_BUFFER,G);for(let V=0;V<q.locationSize;V++)_(q.location+V,Oe/q.locationSize,fe,Ee,Oe*F,Oe/q.locationSize*V*F,Z)}}else if(ee!==void 0){let Ee=ee[ge];if(Ee!==void 0)switch(Ee.length){case 2:e.vertexAttrib2fv(q.location,Ee);break;case 3:e.vertexAttrib3fv(q.location,Ee);break;case 4:e.vertexAttrib4fv(q.location,Ee);break;default:e.vertexAttrib1fv(q.location,Ee)}}}}y()}function k(){U();for(let E in r){let R=r[E];for(let I in R){let H=R[I];for(let z in H)c(H[z].object),delete H[z];delete R[I]}delete r[E]}}function A(E){if(r[E.id]===void 0)return;let R=r[E.id];for(let I in R){let H=R[I];for(let z in H)c(H[z].object),delete H[z];delete R[I]}delete r[E.id]}function C(E){for(let R in r){let I=r[R];if(I[E.id]===void 0)continue;let H=I[E.id];for(let z in H)c(H[z].object),delete H[z];delete I[E.id]}}function U(){M(),n=!0,s!==a&&(s=a,h(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:y}}function Cf(e,t,i){let r;function a(h){r=h}function s(h,c){e.drawArrays(r,h,c),i.update(c,r,1)}function n(h,c,u){u!==0&&(e.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)n(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];i.update(g,r,1)}}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pf(e,t,i,r){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(C){return!(C!==ei&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let U=C===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ei&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ui&&!U)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:k,maxSamples:A}}function Lf(e){let t=this,i=null,r=0,a=!1,s=!1,n=new hr,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,m=e.get(u);if(!a||g===null||g.length===0||s&&!f)s?c(null):h();else{let y=s?0:r,_=y*4,T=m.clippingState||null;l.value=T,T=c(g,d,_,p);for(let k=0;k!==_;++k)T[k]=i[k];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let v=u!==null?u.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let m=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,T=p;_!==v;++_,T+=4)n.copy(u[_]).applyMatrix4(y,o),n.normal.toArray(f,T),f[T+3]=n.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Nf(e){let t=new WeakMap;function i(n,o){return o===Js?n.mapping=Er:o===Ks&&(n.mapping=Tr),n}function r(n){if(n&&n.isTexture){let o=n.mapping;if(o===Js||o===Ks)if(t.has(n)){let l=t.get(n).texture;return i(l,n.mapping)}else{let l=n.image;if(l&&l.height>0){let h=new Vu(l.height);return h.fromEquirectangularTexture(e,n),t.set(n,h),n.addEventListener("dispose",a),i(h.texture,n.mapping)}else return null}}return n}function a(n){let o=n.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:r,dispose:s}}var oo=class extends Vl{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yr=4,Yl=[.125,.215,.35,.446,.526,.582],dr=20,lo=new oo,ql=new je,ho=null,co=0,uo=0,po=!1,pr=(1+Math.sqrt(5))/2,qr=1/pr,Jl=[new N(-pr,qr,0),new N(pr,qr,0),new N(-qr,0,pr),new N(qr,0,pr),new N(0,pr,-qr),new N(0,pr,qr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ho=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,co,uo),this._renderer.xr.enabled=po,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:br,format:ei,colorSpace:Cr,depthBuffer:!1},r=Kl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(a)),this._blurMaterial=If(a,e,t)}return r}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,i,r){let a=new Gt(90,1,t,i),s=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(ql),o.toneMapping=ci,o.autoClear=!1;let c=new Xi({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),u=new gt(new ji,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(ql),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,s[g],0),a.lookAt(n[g],0,0)):v===1?(a.up.set(0,0,s[g]),a.lookAt(0,n[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,n[g]));let f=this._cubeSize;gs(r,v*f,g>2?f:0,f,f),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Er||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new gt(this._lodPlanes[0],a),n=a.uniforms;n.envMap.value=e;let o=this._cubeSize;gs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),n=Jl[(r-a-1)%Jl.length];this._blur(e,a-1,a,s,n)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,n){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new gt(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*dr-1),g=a/p,v=isFinite(a)?1+Math.floor(h*g):dr;v>dr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${dr}`);let f=[],m=0;for(let A=0;A<dr;++A){let C=A/g,U=Math.exp(-C*C/2);f.push(U),A===0?m+=U:A<v&&(m+=2*U)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=s==="latitudinal",n&&(u.poleAxis.value=n);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let _=this._sizeLods[r],T=3*_*(r>y-Yr?r-y+Yr:0),k=4*(this._cubeSize-_);gs(t,T,k,3*_,2*_),o.setRenderTarget(t),o.render(c,lo)}};function Uf(e){let t=[],i=[],r=[],a=e,s=e-Yr+1+Yl.length;for(let n=0;n<s;n++){let o=Math.pow(2,a);i.push(o);let l=1/o;n>e-Yr?l=Yl[n-e+Yr-1]:n===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,v=3,f=2,m=1,y=new Float32Array(v*g*p),_=new Float32Array(f*g*p),T=new Float32Array(m*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,U=A>2?0:-1,M=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(M,v*g*A),_.set(d,f*g*A);let E=[A,A,A,A,A,A];T.set(E,m*g*A)}let k=new Ft;k.setAttribute("position",new Lt(y,v)),k.setAttribute("uv",new Lt(_,f)),k.setAttribute("faceIndex",new Lt(T,m)),t.push(k),a>Yr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Kl(e,t,i){let r=new zi(e,t,i);return r.texture.mapping=ka,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gs(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function If(e,t,i){let r=new Float32Array(dr),a=new N(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mo(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Zl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function $l(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function mo(){return`

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
	`}function Df(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===Js||l===Ks,c=l===Er||l===Tr;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new fo(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new fo(e)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function s(o){let l=o.target;l.removeEventListener("dispose",s);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function n(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:n}}function Of(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&ga("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Ff(e,t,i,r){let a={},s=new WeakMap;function n(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}d.removeEventListener("dispose",n),delete a[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",n),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let _=0,T=y.length;_<T;_+=3){let k=y[_+0],A=y[_+1],C=y[_+2];d.push(k,A,A,C,C,k)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,T=y.length/3-1;_<T;_+=3){let k=_+0,A=_+1,C=_+2;d.push(k,A,A,C,C,k)}}else return;let f=new(gl(d)?Fl:Ol)(d,1);f.version=v;let m=s.get(u);m&&t.remove(m),s.set(u,f)}function c(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function zf(e,t,i){let r;function a(d){r=d}let s,n;function o(d){s=d.type,n=d.bytesPerElement}function l(d,p){e.drawElements(r,p,s,d*n),i.update(p,r,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(r,p,s,d*n,g),i.update(p,r,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,d,0,g);let v=0;for(let f=0;f<g;f++)v+=p[f];i.update(v,r,1)}function u(d,p,g,v){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)h(d[m]/n,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(r,p,0,s,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y]*v[y];i.update(m,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Bf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function kf(e,t,i){let r=new WeakMap,a=new _t;function s(n,o,l){let h=n.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){U.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;g===!0&&(T=1),v===!0&&(T=2),f===!0&&(T=3);let k=o.attributes.position.count*T,A=1;k>t.maxTextureSize&&(A=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);let C=new Float32Array(k*A*4*u),U=new Tl(C,k,A,u);U.type=ui,U.needsUpdate=!0;let M=T*4;for(let E=0;E<u;E++){let R=m[E],I=y[E],H=_[E],z=k*A*4*E;for(let ne=0;ne<R.count;ne++){let ee=ne*M;g===!0&&(a.fromBufferAttribute(R,ne),C[z+ee+0]=a.x,C[z+ee+1]=a.y,C[z+ee+2]=a.z,C[z+ee+3]=0),v===!0&&(a.fromBufferAttribute(I,ne),C[z+ee+4]=a.x,C[z+ee+5]=a.y,C[z+ee+6]=a.z,C[z+ee+7]=0),f===!0&&(a.fromBufferAttribute(H,ne),C[z+ee+8]=a.x,C[z+ee+9]=a.y,C[z+ee+10]=a.z,C[z+ee+11]=H.itemSize===4?a.w:1)}}d={count:u,texture:U,size:new Ae(k,A)},r.set(o,d),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function Hf(e,t,i,r){let a=new WeakMap;function s(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function n(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:n}}var Ql=class extends Xt{constructor(e,t,i,r,a,s,n,o,l,h=Ar){if(h!==Ar&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ar&&(i=ar),i===void 0&&h===Rr&&(i=wr),super(null,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=n!==void 0?n:kt,this.minFilter=o!==void 0?o:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},eh=new Xt,th=new Ql(1,1),ih=new Tl,rh=new wu,ah=new Xl,sh=[],nh=[],oh=new Float32Array(16),lh=new Float32Array(9),hh=new Float32Array(4);function Jr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=sh[a];if(s===void 0&&(s=new Float32Array(a),sh[a]=s),t!==0){r.toArray(s,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(s,o)}return s}function yt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function St(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function vs(e,t){let i=nh[t];i===void 0&&(i=new Int32Array(t),nh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Vf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Gf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yt(i,t))return;e.uniform2fv(this.addr,t),St(i,t)}}function Wf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yt(i,t))return;e.uniform3fv(this.addr,t),St(i,t)}}function Xf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yt(i,t))return;e.uniform4fv(this.addr,t),St(i,t)}}function jf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(yt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),St(i,t)}else{if(yt(i,r))return;hh.set(r),e.uniformMatrix2fv(this.addr,!1,hh),St(i,r)}}function Yf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(yt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),St(i,t)}else{if(yt(i,r))return;lh.set(r),e.uniformMatrix3fv(this.addr,!1,lh),St(i,r)}}function qf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(yt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),St(i,t)}else{if(yt(i,r))return;oh.set(r),e.uniformMatrix4fv(this.addr,!1,oh),St(i,r)}}function Jf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yt(i,t))return;e.uniform2iv(this.addr,t),St(i,t)}}function Zf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yt(i,t))return;e.uniform3iv(this.addr,t),St(i,t)}}function $f(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yt(i,t))return;e.uniform4iv(this.addr,t),St(i,t)}}function Qf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yt(i,t))return;e.uniform2uiv(this.addr,t),St(i,t)}}function tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yt(i,t))return;e.uniform3uiv(this.addr,t),St(i,t)}}function im(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yt(i,t))return;e.uniform4uiv(this.addr,t),St(i,t)}}function rm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(th.compareFunction=pl,s=th):s=eh,i.setTexture2D(t||s,a)}function am(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||rh,a)}function sm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||ah,a)}function nm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||ih,a)}function om(e){switch(e){case 5126:return Vf;case 35664:return Gf;case 35665:return Wf;case 35666:return Xf;case 35674:return jf;case 35675:return Yf;case 35676:return qf;case 5124:case 35670:return Jf;case 35667:case 35671:return Kf;case 35668:case 35672:return Zf;case 35669:case 35673:return $f;case 5125:return Qf;case 36294:return em;case 36295:return tm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return nm}}function lm(e,t){e.uniform1fv(this.addr,t)}function hm(e,t){let i=Jr(t,this.size,2);e.uniform2fv(this.addr,i)}function cm(e,t){let i=Jr(t,this.size,3);e.uniform3fv(this.addr,i)}function um(e,t){let i=Jr(t,this.size,4);e.uniform4fv(this.addr,i)}function dm(e,t){let i=Jr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function pm(e,t){let i=Jr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function fm(e,t){let i=Jr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function mm(e,t){e.uniform1iv(this.addr,t)}function gm(e,t){e.uniform2iv(this.addr,t)}function vm(e,t){e.uniform3iv(this.addr,t)}function _m(e,t){e.uniform4iv(this.addr,t)}function xm(e,t){e.uniform1uiv(this.addr,t)}function ym(e,t){e.uniform2uiv(this.addr,t)}function Sm(e,t){e.uniform3uiv(this.addr,t)}function Mm(e,t){e.uniform4uiv(this.addr,t)}function Em(e,t,i){let r=this.cache,a=t.length,s=vs(i,a);yt(r,s)||(e.uniform1iv(this.addr,s),St(r,s));for(let n=0;n!==a;++n)i.setTexture2D(t[n]||eh,s[n])}function Tm(e,t,i){let r=this.cache,a=t.length,s=vs(i,a);yt(r,s)||(e.uniform1iv(this.addr,s),St(r,s));for(let n=0;n!==a;++n)i.setTexture3D(t[n]||rh,s[n])}function bm(e,t,i){let r=this.cache,a=t.length,s=vs(i,a);yt(r,s)||(e.uniform1iv(this.addr,s),St(r,s));for(let n=0;n!==a;++n)i.setTextureCube(t[n]||ah,s[n])}function wm(e,t,i){let r=this.cache,a=t.length,s=vs(i,a);yt(r,s)||(e.uniform1iv(this.addr,s),St(r,s));for(let n=0;n!==a;++n)i.setTexture2DArray(t[n]||ih,s[n])}function Am(e){switch(e){case 5126:return lm;case 35664:return hm;case 35665:return cm;case 35666:return um;case 35674:return dm;case 35675:return pm;case 35676:return fm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return vm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return ym;case 36295:return Sm;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return wm}}var Rm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=om(t.type)}},Cm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Am(t.type)}},Pm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let n=r[a];n.setValue(e,t[n.id],i)}}},go=/(\w+)(\])?(\[|\.)?/g;function ch(e,t){e.seq.push(t),e.map[t.id]=t}function Lm(e,t,i){let r=e.name,a=r.length;for(go.lastIndex=0;;){let s=go.exec(r),n=go.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===a){ch(i,h===void 0?new Rm(o,e,t):new Cm(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Pm(o),ch(i,c)),i=c}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Lm(a,s,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let n=t[a],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function uh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Nm=37297,Um=0;function Im(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let n=a;n<s;n++){let o=n+1;r.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return r.join(`
`)}var dh=new et;function Dm(e){rt._getMatrix(dh,rt.workingColorSpace,e);let t=`mat3( ${dh.elements.map(i=>i.toFixed(4))} )`;switch(rt.getTransfer(e)){case Ja:return[t,"LinearTransferOETF"];case st:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ph(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let n=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+Im(e.getShaderSource(t),n)}else return a}function Om(e,t){let i=Dm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Fm(e,t){let i;switch(t){case Qc:i="Linear";break;case eu:i="Reinhard";break;case tu:i="Cineon";break;case iu:i="ACESFilmic";break;case au:i="AgX";break;case su:i="Neutral";break;case ru:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var xs=new N;function zm(){rt.getLuminanceCoefficients(xs);let e=xs.x.toFixed(4),t=xs.y.toFixed(4),i=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function km(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Hm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let s=e.getActiveAttrib(t,a),n=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[n]={type:s.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function Ta(e){return e!==""}function fh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(e){return e.replace(Vm,Wm)}var Gm=new Map;function Wm(e,t){let i=$e[t];if(i===void 0){let r=Gm.get(t);if(r!==void 0)i=$e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return vo(i)}var Xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(e){return e.replace(Xm,jm)}function jm(e,t,i,r){let a="";for(let s=parseInt(t);s<parseInt(i);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function vh(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Ym(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Yo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function qm(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jm(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Tr&&(t="ENVMAP_MODE_REFRACTION"),t}function Km(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Zo:t="ENVMAP_BLENDING_MULTIPLY";break;case Zc:t="ENVMAP_BLENDING_MIX";break;case $c:t="ENVMAP_BLENDING_ADD";break}return t}function Zm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $m(e,t,i,r){let a=e.getContext(),s=i.defines,n=i.vertexShader,o=i.fragmentShader,l=Ym(i),h=qm(i),c=Jm(i),u=Km(i),d=Zm(i),p=Bm(i),g=km(s),v=a.createProgram(),f,m,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ta).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ta).join(`
`),m.length>0&&(m+=`
`)):(f=[vh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),m=[vh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ci?"#define TONE_MAPPING":"",i.toneMapping!==ci?$e.tonemapping_pars_fragment:"",i.toneMapping!==ci?Fm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Om("linearToOutputTexel",i.outputColorSpace),zm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ta).join(`
`)),n=vo(n),n=fh(n,i),n=mh(n,i),o=vo(o),o=fh(o,i),o=mh(o,i),n=gh(n),o=gh(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",i.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=y+f+n,T=y+m+o,k=uh(a,a.VERTEX_SHADER,_),A=uh(a,a.FRAGMENT_SHADER,T);a.attachShader(v,k),a.attachShader(v,A),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function C(R){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(v).trim(),H=a.getShaderInfoLog(k).trim(),z=a.getShaderInfoLog(A).trim(),ne=!0,ee=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,k,A);else{let ge=ph(a,k,"vertex"),q=ph(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+ge+`
`+q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(H===""||z==="")&&(ee=!1);ee&&(R.diagnostics={runnable:ne,programLog:I,vertexShader:{log:H,prefix:f},fragmentShader:{log:z,prefix:m}})}a.deleteShader(k),a.deleteShader(A),U=new _s(a,v),M=Hm(a,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(v,Nm)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Um++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=A,this}var Qm=0,eg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tg(e),t.set(e,i)),i}},tg=class{constructor(e){this.id=Qm++,this.code=e,this.usedTimes=0}};function ig(e,t,i,r,a,s,n){let o=new Yn,l=new eg,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function f(M,E,R,I,H){let z=I.fog,ne=H.geometry,ee=M.isMeshStandardMaterial?I.environment:null,ge=(M.isMeshStandardMaterial?i:t).get(M.envMap||ee),q=ge&&ge.mapping===ka?ge.image.height:null,K=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Ee=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Oe=Ee!==void 0?Ee.length:0,Le=0;ne.morphAttributes.position!==void 0&&(Le=1),ne.morphAttributes.normal!==void 0&&(Le=2),ne.morphAttributes.color!==void 0&&(Le=3);let G,fe,F,Z;if(K){let Ze=fi[K];G=Ze.vertexShader,fe=Ze.fragmentShader}else G=M.vertexShader,fe=M.fragmentShader,l.update(M),F=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);let V=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),re=H.isInstancedMesh===!0,ye=H.isBatchedMesh===!0,J=!!M.map,ce=!!M.matcap,b=!!ge,be=!!M.aoMap,W=!!M.lightMap,ve=!!M.bumpMap,ue=!!M.normalMap,Re=!!M.displacementMap,B=!!M.emissiveMap,de=!!M.metalnessMap,w=!!M.roughnessMap,x=M.anisotropy>0,L=M.clearcoat>0,$=M.dispersion>0,ae=M.iridescence>0,te=M.sheen>0,Ie=M.transmission>0,xe=x&&!!M.anisotropyMap,we=L&&!!M.clearcoatMap,He=L&&!!M.clearcoatNormalMap,Te=L&&!!M.clearcoatRoughnessMap,Ne=ae&&!!M.iridescenceMap,pe=ae&&!!M.iridescenceThicknessMap,oe=te&&!!M.sheenColorMap,X=te&&!!M.sheenRoughnessMap,he=!!M.specularMap,Se=!!M.specularColorMap,Ce=!!M.specularIntensityMap,P=Ie&&!!M.transmissionMap,ie=Ie&&!!M.thicknessMap,Q=!!M.gradientMap,le=!!M.alphaMap,_e=M.alphaTest>0,me=!!M.alphaHash,Xe=!!M.extensions,De=ci;M.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(De=e.toneMapping);let Ye={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:fe,defines:M.defines,customVertexShaderID:F,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ye,batchingColor:ye&&H._colorsTexture!==null,instancing:re,instancingColor:re&&H.instanceColor!==null,instancingMorph:re&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?e.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Cr,alphaToCoverage:!!M.alphaToCoverage,map:J,matcap:ce,envMap:b,envMapMode:b&&ge.mapping,envMapCubeUVHeight:q,aoMap:be,lightMap:W,bumpMap:ve,normalMap:ue,displacementMap:d&&Re,emissiveMap:B,normalMapObjectSpace:ue&&M.normalMapType===hu,normalMapTangentSpace:ue&&M.normalMapType===ul,metalnessMap:de,roughnessMap:w,anisotropy:x,anisotropyMap:xe,clearcoat:L,clearcoatMap:we,clearcoatNormalMap:He,clearcoatRoughnessMap:Te,dispersion:$,iridescence:ae,iridescenceMap:Ne,iridescenceThicknessMap:pe,sheen:te,sheenColorMap:oe,sheenRoughnessMap:X,specularMap:he,specularColorMap:Se,specularIntensityMap:Ce,transmission:Ie,transmissionMap:P,thicknessMap:ie,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Sr&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:_e,alphaHash:me,combine:M.combine,mapUv:J&&v(M.map.channel),aoMapUv:be&&v(M.aoMap.channel),lightMapUv:W&&v(M.lightMap.channel),bumpMapUv:ve&&v(M.bumpMap.channel),normalMapUv:ue&&v(M.normalMap.channel),displacementMapUv:Re&&v(M.displacementMap.channel),emissiveMapUv:B&&v(M.emissiveMap.channel),metalnessMapUv:de&&v(M.metalnessMap.channel),roughnessMapUv:w&&v(M.roughnessMap.channel),anisotropyMapUv:xe&&v(M.anisotropyMap.channel),clearcoatMapUv:we&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(M.sheenRoughnessMap.channel),specularMapUv:he&&v(M.specularMap.channel),specularColorMapUv:Se&&v(M.specularColorMap.channel),specularIntensityMapUv:Ce&&v(M.specularIntensityMap.channel),transmissionMapUv:P&&v(M.transmissionMap.channel),thicknessMapUv:ie&&v(M.thicknessMap.channel),alphaMapUv:le&&v(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ue||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(J||le),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:se,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:J&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:B&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===Dt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xe&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&M.extensions.multiDraw===!0||ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=h.has(1),Ye.vertexUv2s=h.has(2),Ye.vertexUv3s=h.has(3),h.clear(),Ye}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)E.push(R),E.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(E,M),_(E,M),E.push(e.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function T(M){let E=g[M.type],R;if(E){let I=fi[E];R=zu.clone(I.uniforms)}else R=M.uniforms;return R}function k(M,E){let R;for(let I=0,H=c.length;I<H;I++){let z=c[I];if(z.cacheKey===E){R=z,++R.usedTimes;break}}return R===void 0&&(R=new $m(e,E,M,s),c.push(R)),R}function A(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:T,acquireProgram:k,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:U}}function rg(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function r(n){e.delete(n)}function a(n,o,l){e.get(n)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:s}}function ag(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function _h(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function xh(){let e=[],t=0,i=[],r=[],a=[];function s(){t=0,i.length=0,r.length=0,a.length=0}function n(u,d,p,g,v,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function o(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.push(m):p.transparent===!0?a.push(m):i.push(m)}function l(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.unshift(m):p.transparent===!0?a.unshift(m):i.unshift(m)}function h(u,d){i.length>1&&i.sort(u||ag),r.length>1&&r.sort(d||_h),a.length>1&&a.sort(d||_h)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:s,push:o,unshift:l,finish:c,sort:h}}function sg(){let e=new WeakMap;function t(r,a){let s=e.get(r),n;return s===void 0?(n=new xh,e.set(r,[n])):a>=s.length?(n=new xh,s.push(n)):n=s[a],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function ng(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new N,color:new je};break;case"SpotLight":i={position:new N,direction:new N,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new N,color:new je,distance:0,decay:0};break;case"HemisphereLight":i={direction:new N,skyColor:new je,groundColor:new je};break;case"RectAreaLight":i={color:new je,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=i,i}}}function og(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var lg=0;function hg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function cg(e){let t=new ng,i=og(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);let a=new N,s=new ht,n=new ht;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,y=0,_=0,T=0,k=0,A=0,C=0;h.sort(hg);for(let M=0,E=h.length;M<E;M++){let R=h[M],I=R.color,H=R.intensity,z=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=I.r*H,u+=I.g*H,d+=I.b*H;else if(R.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(R.sh.coefficients[ee],H);C++}else if(R.isDirectionalLight){let ee=t.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ge=R.shadow,q=i.get(R);q.shadowIntensity=ge.intensity,q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,r.directionalShadow[p]=q,r.directionalShadowMap[p]=ne,r.directionalShadowMatrix[p]=R.shadow.matrix,y++}r.directional[p]=ee,p++}else if(R.isSpotLight){let ee=t.get(R);ee.position.setFromMatrixPosition(R.matrixWorld),ee.color.copy(I).multiplyScalar(H),ee.distance=z,ee.coneCos=Math.cos(R.angle),ee.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ee.decay=R.decay,r.spot[v]=ee;let ge=R.shadow;if(R.map&&(r.spotLightMap[k]=R.map,k++,ge.updateMatrices(R),R.castShadow&&A++),r.spotLightMatrix[v]=ge.matrix,R.castShadow){let q=i.get(R);q.shadowIntensity=ge.intensity,q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,r.spotShadow[v]=q,r.spotShadowMap[v]=ne,T++}v++}else if(R.isRectAreaLight){let ee=t.get(R);ee.color.copy(I).multiplyScalar(H),ee.halfWidth.set(R.width*.5,0,0),ee.halfHeight.set(0,R.height*.5,0),r.rectArea[f]=ee,f++}else if(R.isPointLight){let ee=t.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),ee.distance=R.distance,ee.decay=R.decay,R.castShadow){let ge=R.shadow,q=i.get(R);q.shadowIntensity=ge.intensity,q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,q.shadowCameraNear=ge.camera.near,q.shadowCameraFar=ge.camera.far,r.pointShadow[g]=q,r.pointShadowMap[g]=ne,r.pointShadowMatrix[g]=R.shadow.matrix,_++}r.point[g]=ee,g++}else if(R.isHemisphereLight){let ee=t.get(R);ee.skyColor.copy(R.color).multiplyScalar(H),ee.groundColor.copy(R.groundColor).multiplyScalar(H),r.hemi[m]=ee,m++}}f>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let U=r.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==f||U.hemiLength!==m||U.numDirectionalShadows!==y||U.numPointShadows!==_||U.numSpotShadows!==T||U.numSpotMaps!==k||U.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=f,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=T+k-A,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=f,U.hemiLength=m,U.numDirectionalShadows=y,U.numPointShadows=_,U.numSpotShadows=T,U.numSpotMaps=k,U.numLightProbes=C,r.version=lg++)}function l(h,c){let u=0,d=0,p=0,g=0,v=0,f=c.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){let _=h[m];if(_.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),u++}else if(_.isSpotLight){let T=r.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),p++}else if(_.isRectAreaLight){let T=r.rectArea[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),n.identity(),s.copy(_.matrixWorld),s.premultiply(f),n.extractRotation(s),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(n),T.halfHeight.applyMatrix4(n),g++}else if(_.isPointLight){let T=r.point[d];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let T=r.hemi[v];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:r}}function yh(e){let t=new cg(e),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function s(c){i.push(c)}function n(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function ug(e){let t=new WeakMap;function i(a,s=0){let n=t.get(a),o;return n===void 0?(o=new yh(e),t.set(a,[o])):s>=n.length?(o=new yh(e),n.push(o)):o=n[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var dg=class extends Ma{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pg=class extends Ma{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`;function gg(e,t,i){let r=new no,a=new Ae,s=new Ae,n=new _t,o=new dg({depthPacking:lu}),l=new pg,h={},c=i.maxTextureSize,u={[Di]:Dt,[Dt]:Di,[hi]:hi},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:fg,fragmentShader:mg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new gt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let m=this.type;this.render=function(A,C,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let M=e.getRenderTarget(),E=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),I=e.state;I.setBlending(Oi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=m!==Si&&this.type===Si,z=m===Si&&this.type!==Si;for(let ne=0,ee=A.length;ne<ee;ne++){let ge=A[ne],q=ge.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);let K=q.getFrameExtents();if(a.multiply(K),s.copy(q.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/K.x),a.x=s.x*K.x,q.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/K.y),a.y=s.y*K.y,q.mapSize.y=s.y)),q.map===null||H===!0||z===!0){let Oe=this.type!==Si?{minFilter:kt,magFilter:kt}:{};q.map!==null&&q.map.dispose(),q.map=new zi(a.x,a.y,Oe),q.map.texture.name=ge.name+".shadowMap",q.camera.updateProjectionMatrix()}e.setRenderTarget(q.map),e.clear();let Ee=q.getViewportCount();for(let Oe=0;Oe<Ee;Oe++){let Le=q.getViewport(Oe);n.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),I.viewport(n),q.updateMatrices(ge,Oe),r=q.getFrustum(),T(C,U,q.camera,ge,this.type)}q.isPointLightShadow!==!0&&this.type===Si&&y(q,U),q.needsUpdate=!1}m=this.type,f.needsUpdate=!1,e.setRenderTarget(M,E,R)};function y(A,C){let U=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zi(a.x,a.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(C,null,U,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(C,null,U,p,v,null)}function _(A,C,U,M){let E=null,R=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)E=R;else if(E=U.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=E.uuid,H=C.uuid,z=h[I];z===void 0&&(z={},h[I]=z);let ne=z[H];ne===void 0&&(ne=E.clone(),z[H]=ne,C.addEventListener("dispose",k)),E=ne}if(E.visible=C.visible,E.wireframe=C.wireframe,M===Si?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=e.properties.get(E);I.light=U}return E}function T(A,C,U,M,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Si)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let I=t.update(A),H=A.material;if(Array.isArray(H)){let z=I.groups;for(let ne=0,ee=z.length;ne<ee;ne++){let ge=z[ne],q=H[ge.materialIndex];if(q&&q.visible){let K=_(A,q,M,E);A.onBeforeShadow(e,A,C,U,I,K,ge),e.renderBufferDirect(U,null,I,K,A,ge),A.onAfterShadow(e,A,C,U,I,K,ge)}}}else if(H.visible){let z=_(A,H,M,E);A.onBeforeShadow(e,A,C,U,I,z,null),e.renderBufferDirect(U,null,I,z,A,null),A.onAfterShadow(e,A,C,U,I,z,null)}}let R=A.children;for(let I=0,H=R.length;I<H;I++)T(R[I],C,U,M,E)}function k(A){A.target.removeEventListener("dispose",k);for(let C in h){let U=h[C],M=A.target.uuid;M in U&&(U[M].dispose(),delete U[M])}}}var vg={[Vs]:Gs,[Ws]:Ys,[Xs]:qs,[Mr]:js,[Gs]:Vs,[Ys]:Ws,[qs]:Xs,[js]:Mr};function _g(e,t){function i(){let P=!1,ie=new _t,Q=null,le=new _t(0,0,0,0);return{setMask:function(_e){Q!==_e&&!P&&(e.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){P=_e},setClear:function(_e,me,Xe,De,Ye){Ye===!0&&(_e*=De,me*=De,Xe*=De),ie.set(_e,me,Xe,De),le.equals(ie)===!1&&(e.clearColor(_e,me,Xe,De),le.copy(ie))},reset:function(){P=!1,Q=null,le.set(-1,0,0,0)}}}function r(){let P=!1,ie=!1,Q=null,le=null,_e=null;return{setReversed:function(me){if(ie!==me){let Xe=t.get("EXT_clip_control");ie?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);let De=_e;_e=null,this.setClear(De)}ie=me},getReversed:function(){return ie},setTest:function(me){me?V(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(me){Q!==me&&!P&&(e.depthMask(me),Q=me)},setFunc:function(me){if(ie&&(me=vg[me]),le!==me){switch(me){case Vs:e.depthFunc(e.NEVER);break;case Gs:e.depthFunc(e.ALWAYS);break;case Ws:e.depthFunc(e.LESS);break;case Mr:e.depthFunc(e.LEQUAL);break;case Xs:e.depthFunc(e.EQUAL);break;case js:e.depthFunc(e.GEQUAL);break;case Ys:e.depthFunc(e.GREATER);break;case qs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}le=me}},setLocked:function(me){P=me},setClear:function(me){_e!==me&&(ie&&(me=1-me),e.clearDepth(me),_e=me)},reset:function(){P=!1,Q=null,le=null,_e=null,ie=!1}}}function a(){let P=!1,ie=null,Q=null,le=null,_e=null,me=null,Xe=null,De=null,Ye=null;return{setTest:function(Ze){P||(Ze?V(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!P&&(e.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Kt,Ut){(Q!==Ze||le!==Kt||_e!==Ut)&&(e.stencilFunc(Ze,Kt,Ut),Q=Ze,le=Kt,_e=Ut)},setOp:function(Ze,Kt,Ut){(me!==Ze||Xe!==Kt||De!==Ut)&&(e.stencilOp(Ze,Kt,Ut),me=Ze,Xe=Kt,De=Ut)},setLocked:function(Ze){P=Ze},setClear:function(Ze){Ye!==Ze&&(e.clearStencil(Ze),Ye=Ze)},reset:function(){P=!1,ie=null,Q=null,le=null,_e=null,me=null,Xe=null,De=null,Ye=null}}}let s=new i,n=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,v=!1,f=null,m=null,y=null,_=null,T=null,k=null,A=null,C=new je(0,0,0),U=0,M=!1,E=null,R=null,I=null,H=null,z=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,ge=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(q)[1]),ee=ge>=1):q.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ee=ge>=2);let K=null,Ee={},Oe=e.getParameter(e.SCISSOR_BOX),Le=e.getParameter(e.VIEWPORT),G=new _t().fromArray(Oe),fe=new _t().fromArray(Le);function F(P,ie,Q,le){let _e=new Uint8Array(4),me=e.createTexture();e.bindTexture(P,me),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Xe=0;Xe<Q;Xe++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(ie,0,e.RGBA,1,1,le,0,e.RGBA,e.UNSIGNED_BYTE,_e):e.texImage2D(ie+Xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_e);return me}let Z={};Z[e.TEXTURE_2D]=F(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=F(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=F(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=F(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),V(e.DEPTH_TEST),n.setFunc(Mr),ve(!1),ue(jo),V(e.CULL_FACE),be(Oi);function V(P){c[P]!==!0&&(e.enable(P),c[P]=!0)}function se(P){c[P]!==!1&&(e.disable(P),c[P]=!1)}function re(P,ie){return u[P]!==ie?(e.bindFramebuffer(P,ie),u[P]=ie,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ie),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ie),!0):!1}function ye(P,ie){let Q=p,le=!1;if(P){Q=d.get(ie),Q===void 0&&(Q=[],d.set(ie,Q));let _e=P.textures;if(Q.length!==_e.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let me=0,Xe=_e.length;me<Xe;me++)Q[me]=e.COLOR_ATTACHMENT0+me;Q.length=_e.length,le=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,le=!0);le&&e.drawBuffers(Q)}function J(P){return g!==P?(e.useProgram(P),g=P,!0):!1}let ce={[ir]:e.FUNC_ADD,[Ic]:e.FUNC_SUBTRACT,[Dc]:e.FUNC_REVERSE_SUBTRACT};ce[Oc]=e.MIN,ce[Fc]=e.MAX;let b={[zc]:e.ZERO,[Bc]:e.ONE,[kc]:e.SRC_COLOR,[ks]:e.SRC_ALPHA,[jc]:e.SRC_ALPHA_SATURATE,[Wc]:e.DST_COLOR,[Vc]:e.DST_ALPHA,[Hc]:e.ONE_MINUS_SRC_COLOR,[Hs]:e.ONE_MINUS_SRC_ALPHA,[Xc]:e.ONE_MINUS_DST_COLOR,[Gc]:e.ONE_MINUS_DST_ALPHA,[Yc]:e.CONSTANT_COLOR,[qc]:e.ONE_MINUS_CONSTANT_COLOR,[Jc]:e.CONSTANT_ALPHA,[Kc]:e.ONE_MINUS_CONSTANT_ALPHA};function be(P,ie,Q,le,_e,me,Xe,De,Ye,Ze){if(P===Oi){v===!0&&(se(e.BLEND),v=!1);return}if(v===!1&&(V(e.BLEND),v=!0),P!==Uc){if(P!==f||Ze!==M){if((m!==ir||T!==ir)&&(e.blendEquation(e.FUNC_ADD),m=ir,T=ir),Ze)switch(P){case Sr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qo:e.blendFunc(e.ONE,e.ONE);break;case Jo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ko:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Sr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qo:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Jo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ko:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,_=null,k=null,A=null,C.set(0,0,0),U=0,f=P,M=Ze}return}_e=_e||ie,me=me||Q,Xe=Xe||le,(ie!==m||_e!==T)&&(e.blendEquationSeparate(ce[ie],ce[_e]),m=ie,T=_e),(Q!==y||le!==_||me!==k||Xe!==A)&&(e.blendFuncSeparate(b[Q],b[le],b[me],b[Xe]),y=Q,_=le,k=me,A=Xe),(De.equals(C)===!1||Ye!==U)&&(e.blendColor(De.r,De.g,De.b,Ye),C.copy(De),U=Ye),f=P,M=!1}function W(P,ie){P.side===hi?se(e.CULL_FACE):V(e.CULL_FACE);let Q=P.side===Dt;ie&&(Q=!Q),ve(Q),P.blending===Sr&&P.transparent===!1?be(Oi):be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),n.setFunc(P.depthFunc),n.setTest(P.depthTest),n.setMask(P.depthWrite),s.setMask(P.colorWrite);let le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?V(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(P){E!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),E=P)}function ue(P){P!==Pc?(V(e.CULL_FACE),P!==R&&(P===jo?e.cullFace(e.BACK):P===Lc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),R=P}function Re(P){P!==I&&(ee&&e.lineWidth(P),I=P)}function B(P,ie,Q){P?(V(e.POLYGON_OFFSET_FILL),(H!==ie||z!==Q)&&(e.polygonOffset(ie,Q),H=ie,z=Q)):se(e.POLYGON_OFFSET_FILL)}function de(P){P?V(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function w(P){P===void 0&&(P=e.TEXTURE0+ne-1),K!==P&&(e.activeTexture(P),K=P)}function x(P,ie,Q){Q===void 0&&(K===null?Q=e.TEXTURE0+ne-1:Q=K);let le=Ee[Q];le===void 0&&(le={type:void 0,texture:void 0},Ee[Q]=le),(le.type!==P||le.texture!==ie)&&(K!==Q&&(e.activeTexture(Q),K=Q),e.bindTexture(P,ie||Z[P]),le.type=P,le.texture=ie)}function L(){let P=Ee[K];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(P){G.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),G.copy(P))}function X(P){fe.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function he(P,ie){let Q=h.get(ie);Q===void 0&&(Q=new WeakMap,h.set(ie,Q));let le=Q.get(P);le===void 0&&(le=e.getUniformBlockIndex(ie,P.name),Q.set(P,le))}function Se(P,ie){let Q=h.get(ie).get(P);l.get(ie)!==Q&&(e.uniformBlockBinding(ie,Q,P.__bindingPointIndex),l.set(ie,Q))}function Ce(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},K=null,Ee={},u={},d=new WeakMap,p=[],g=null,v=!1,f=null,m=null,y=null,_=null,T=null,k=null,A=null,C=new je(0,0,0),U=0,M=!1,E=null,R=null,I=null,H=null,z=null,G.set(0,0,e.canvas.width,e.canvas.height),fe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:V,disable:se,bindFramebuffer:re,drawBuffers:ye,useProgram:J,setBlending:be,setMaterial:W,setFlipSided:ve,setCullFace:ue,setLineWidth:Re,setPolygonOffset:B,setScissorTest:de,activeTexture:w,bindTexture:x,unbindTexture:L,compressedTexImage2D:$,compressedTexImage3D:ae,texImage2D:Ne,texImage3D:pe,updateUBOMapping:he,uniformBlockBinding:Se,texStorage2D:He,texStorage3D:Te,texSubImage2D:te,texSubImage3D:Ie,compressedTexSubImage2D:xe,compressedTexSubImage3D:we,scissor:oe,viewport:X,reset:Ce}}function Sh(e,t,i,r){let a=xg(r);switch(i){case il:return e*t;case al:return e*t;case sl:return e*t*2;case rn:return e*t/a.components*a.byteLength;case an:return e*t/a.components*a.byteLength;case nl:return e*t*2/a.components*a.byteLength;case sn:return e*t*2/a.components*a.byteLength;case rl:return e*t*3/a.components*a.byteLength;case ei:return e*t*4/a.components*a.byteLength;case nn:return e*t*4/a.components*a.byteLength;case Ga:case Wa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xa:case ja:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ln:case cn:return Math.max(e,16)*Math.max(t,8)/4;case on:case hn:return Math.max(e,8)*Math.max(t,8)/2;case un:case dn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case gn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case vn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _n:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Sn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Mn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case En:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Tn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case An:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ya:case Rn:case Cn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ol:case Pn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ln:case Nn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xg(e){switch(e){case Ei:case Qo:return{byteLength:1,components:1};case fa:case el:case br:return{byteLength:2,components:1};case en:case tn:return{byteLength:2,components:4};case ar:case Qs:case ui:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function yg(e,t,i,r,a,s,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ae,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Za("canvas")}function v(w,x,L){let $=1,ae=de(w);if((ae.width>L||ae.height>L)&&($=L/Math.max(ae.width,ae.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let te=Math.floor($*ae.width),Ie=Math.floor($*ae.height);u===void 0&&(u=g(te,Ie));let xe=x?g(te,Ie):u;return xe.width=te,xe.height=Ie,xe.getContext("2d").drawImage(w,0,0,te,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Ie+")."),xe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),w;return w}function f(w){return w.generateMipmaps}function m(w){e.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(w,x,L,$,ae=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=x;if(x===e.RED&&(L===e.FLOAT&&(te=e.R32F),L===e.HALF_FLOAT&&(te=e.R16F),L===e.UNSIGNED_BYTE&&(te=e.R8)),x===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(te=e.R8UI),L===e.UNSIGNED_SHORT&&(te=e.R16UI),L===e.UNSIGNED_INT&&(te=e.R32UI),L===e.BYTE&&(te=e.R8I),L===e.SHORT&&(te=e.R16I),L===e.INT&&(te=e.R32I)),x===e.RG&&(L===e.FLOAT&&(te=e.RG32F),L===e.HALF_FLOAT&&(te=e.RG16F),L===e.UNSIGNED_BYTE&&(te=e.RG8)),x===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(te=e.RG8UI),L===e.UNSIGNED_SHORT&&(te=e.RG16UI),L===e.UNSIGNED_INT&&(te=e.RG32UI),L===e.BYTE&&(te=e.RG8I),L===e.SHORT&&(te=e.RG16I),L===e.INT&&(te=e.RG32I)),x===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(te=e.RGB8UI),L===e.UNSIGNED_SHORT&&(te=e.RGB16UI),L===e.UNSIGNED_INT&&(te=e.RGB32UI),L===e.BYTE&&(te=e.RGB8I),L===e.SHORT&&(te=e.RGB16I),L===e.INT&&(te=e.RGB32I)),x===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(te=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(te=e.RGBA16UI),L===e.UNSIGNED_INT&&(te=e.RGBA32UI),L===e.BYTE&&(te=e.RGBA8I),L===e.SHORT&&(te=e.RGBA16I),L===e.INT&&(te=e.RGBA32I)),x===e.RGB&&L===e.UNSIGNED_INT_5_9_9_9_REV&&(te=e.RGB9_E5),x===e.RGBA){let Ie=ae?Ja:rt.getTransfer($);L===e.FLOAT&&(te=e.RGBA32F),L===e.HALF_FLOAT&&(te=e.RGBA16F),L===e.UNSIGNED_BYTE&&(te=Ie===st?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT_4_4_4_4&&(te=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(te=e.RGB5_A1)}return(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)&&t.get("EXT_color_buffer_float"),te}function T(w,x){let L;return w?x===null||x===ar||x===wr?L=e.DEPTH24_STENCIL8:x===ui?L=e.DEPTH32F_STENCIL8:x===fa&&(L=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ar||x===wr?L=e.DEPTH_COMPONENT24:x===ui?L=e.DEPTH_COMPONENT32F:x===fa&&(L=e.DEPTH_COMPONENT16),L}function k(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==kt&&w.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){let x=w.target;x.removeEventListener("dispose",A),U(x),x.isVideoTexture&&c.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),E(x)}function U(w){let x=r.get(w);if(x.__webglInit===void 0)return;let L=w.source,$=d.get(L);if($){let ae=$[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&M(w),Object.keys($).length===0&&d.delete(L)}r.remove(w)}function M(w){let x=r.get(w);e.deleteTexture(x.__webglTexture);let L=w.source,$=d.get(L);delete $[x.__cacheKey],n.memory.textures--}function E(w){let x=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ae=0;ae<x.__webglFramebuffer[$].length;ae++)e.deleteFramebuffer(x.__webglFramebuffer[$][ae]);else e.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)e.deleteFramebuffer(x.__webglFramebuffer[$]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let L=w.textures;for(let $=0,ae=L.length;$<ae;$++){let te=r.get(L[$]);te.__webglTexture&&(e.deleteTexture(te.__webglTexture),n.memory.textures--),r.remove(L[$])}r.remove(w)}let R=0;function I(){R=0}function H(){let w=R;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),R+=1,w}function z(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ne(w,x){let L=r.get(w);if(w.isVideoTexture&&Re(w),w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(L,w,x);return}}i.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+x)}function ee(w,x){let L=r.get(w);if(w.version>0&&L.__version!==w.version){fe(L,w,x);return}i.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+x)}function ge(w,x){let L=r.get(w);if(w.version>0&&L.__version!==w.version){fe(L,w,x);return}i.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+x)}function q(w,x){let L=r.get(w);if(w.version>0&&L.__version!==w.version){F(L,w,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+x)}let K={[Ha]:e.REPEAT,[rr]:e.CLAMP_TO_EDGE,[Zs]:e.MIRRORED_REPEAT},Ee={[kt]:e.NEAREST,[nu]:e.NEAREST_MIPMAP_NEAREST,[Va]:e.NEAREST_MIPMAP_LINEAR,[Qt]:e.LINEAR,[$s]:e.LINEAR_MIPMAP_NEAREST,[Mi]:e.LINEAR_MIPMAP_LINEAR},Oe={[cu]:e.NEVER,[gu]:e.ALWAYS,[uu]:e.LESS,[pl]:e.LEQUAL,[du]:e.EQUAL,[mu]:e.GEQUAL,[pu]:e.GREATER,[fu]:e.NOTEQUAL};function Le(w,x){if(x.type===ui&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===$s||x.magFilter===Va||x.magFilter===Mi||x.minFilter===Qt||x.minFilter===$s||x.minFilter===Va||x.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,K[x.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,K[x.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,K[x.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Ee[x.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Ee[x.minFilter]),x.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Oe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==Va&&x.minFilter!==Mi||x.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function G(w,x){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let $=x.source,ae=d.get($);ae===void 0&&(ae={},d.set($,ae));let te=z(x);if(te!==w.__cacheKey){ae[te]===void 0&&(ae[te]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,L=!0),ae[te].usedTimes++;let Ie=ae[w.__cacheKey];Ie!==void 0&&(ae[w.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(x)),w.__cacheKey=te,w.__webglTexture=ae[te].texture}return L}function fe(w,x,L){let $=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=e.TEXTURE_3D);let ae=G(w,x),te=x.source;i.bindTexture($,w.__webglTexture,e.TEXTURE0+L);let Ie=r.get(te);if(te.version!==Ie.__version||ae===!0){i.activeTexture(e.TEXTURE0+L);let xe=rt.getPrimaries(rt.workingColorSpace),we=x.colorSpace===Fi?null:rt.getPrimaries(x.colorSpace),He=x.colorSpace===Fi||xe===we?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Te=v(x.image,!1,a.maxTextureSize);Te=B(x,Te);let Ne=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),oe=_(x.internalFormat,Ne,pe,x.colorSpace,x.isVideoTexture);Le($,x);let X,he=x.mipmaps,Se=x.isVideoTexture!==!0,Ce=Ie.__version===void 0||ae===!0,P=te.dataReady,ie=k(x,Te);if(x.isDepthTexture)oe=T(x.format===Rr,x.type),Ce&&(Se?i.texStorage2D(e.TEXTURE_2D,1,oe,Te.width,Te.height):i.texImage2D(e.TEXTURE_2D,0,oe,Te.width,Te.height,0,Ne,pe,null));else if(x.isDataTexture)if(he.length>0){Se&&Ce&&i.texStorage2D(e.TEXTURE_2D,ie,oe,he[0].width,he[0].height);for(let Q=0,le=he.length;Q<le;Q++)X=he[Q],Se?P&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,X.width,X.height,Ne,pe,X.data):i.texImage2D(e.TEXTURE_2D,Q,oe,X.width,X.height,0,Ne,pe,X.data);x.generateMipmaps=!1}else Se?(Ce&&i.texStorage2D(e.TEXTURE_2D,ie,oe,Te.width,Te.height),P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Te.width,Te.height,Ne,pe,Te.data)):i.texImage2D(e.TEXTURE_2D,0,oe,Te.width,Te.height,0,Ne,pe,Te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Se&&Ce&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ie,oe,he[0].width,he[0].height,Te.depth);for(let Q=0,le=he.length;Q<le;Q++)if(X=he[Q],x.format!==ei)if(Ne!==null)if(Se){if(P)if(x.layerUpdates.size>0){let _e=Sh(X.width,X.height,x.format,x.type);for(let me of x.layerUpdates){let Xe=X.data.subarray(me*_e/X.data.BYTES_PER_ELEMENT,(me+1)*_e/X.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,me,X.width,X.height,1,Ne,Xe)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,X.width,X.height,Te.depth,Ne,X.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,oe,X.width,X.height,Te.depth,0,X.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?P&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,X.width,X.height,Te.depth,Ne,pe,X.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Q,oe,X.width,X.height,Te.depth,0,Ne,pe,X.data)}else{Se&&Ce&&i.texStorage2D(e.TEXTURE_2D,ie,oe,he[0].width,he[0].height);for(let Q=0,le=he.length;Q<le;Q++)X=he[Q],x.format!==ei?Ne!==null?Se?P&&i.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,X.width,X.height,Ne,X.data):i.compressedTexImage2D(e.TEXTURE_2D,Q,oe,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?P&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,X.width,X.height,Ne,pe,X.data):i.texImage2D(e.TEXTURE_2D,Q,oe,X.width,X.height,0,Ne,pe,X.data)}else if(x.isDataArrayTexture)if(Se){if(Ce&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ie,oe,Te.width,Te.height,Te.depth),P)if(x.layerUpdates.size>0){let Q=Sh(Te.width,Te.height,x.format,x.type);for(let le of x.layerUpdates){let _e=Te.data.subarray(le*Q/Te.data.BYTES_PER_ELEMENT,(le+1)*Q/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,le,Te.width,Te.height,1,Ne,pe,_e)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ne,pe,Te.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,oe,Te.width,Te.height,Te.depth,0,Ne,pe,Te.data);else if(x.isData3DTexture)Se?(Ce&&i.texStorage3D(e.TEXTURE_3D,ie,oe,Te.width,Te.height,Te.depth),P&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ne,pe,Te.data)):i.texImage3D(e.TEXTURE_3D,0,oe,Te.width,Te.height,Te.depth,0,Ne,pe,Te.data);else if(x.isFramebufferTexture){if(Ce)if(Se)i.texStorage2D(e.TEXTURE_2D,ie,oe,Te.width,Te.height);else{let Q=Te.width,le=Te.height;for(let _e=0;_e<ie;_e++)i.texImage2D(e.TEXTURE_2D,_e,oe,Q,le,0,Ne,pe,null),Q>>=1,le>>=1}}else if(he.length>0){if(Se&&Ce){let Q=de(he[0]);i.texStorage2D(e.TEXTURE_2D,ie,oe,Q.width,Q.height)}for(let Q=0,le=he.length;Q<le;Q++)X=he[Q],Se?P&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,Ne,pe,X):i.texImage2D(e.TEXTURE_2D,Q,oe,Ne,pe,X);x.generateMipmaps=!1}else if(Se){if(Ce){let Q=de(Te);i.texStorage2D(e.TEXTURE_2D,ie,oe,Q.width,Q.height)}P&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Ne,pe,Te)}else i.texImage2D(e.TEXTURE_2D,0,oe,Ne,pe,Te);f(x)&&m($),Ie.__version=te.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function F(w,x,L){if(x.image.length!==6)return;let $=G(w,x),ae=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+L);let te=r.get(ae);if(ae.version!==te.__version||$===!0){i.activeTexture(e.TEXTURE0+L);let Ie=rt.getPrimaries(rt.workingColorSpace),xe=x.colorSpace===Fi?null:rt.getPrimaries(x.colorSpace),we=x.colorSpace===Fi||Ie===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let He=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,Ne=[];for(let le=0;le<6;le++)!He&&!Te?Ne[le]=v(x.image[le],!0,a.maxCubemapSize):Ne[le]=Te?x.image[le].image:x.image[le],Ne[le]=B(x,Ne[le]);let pe=Ne[0],oe=s.convert(x.format,x.colorSpace),X=s.convert(x.type),he=_(x.internalFormat,oe,X,x.colorSpace),Se=x.isVideoTexture!==!0,Ce=te.__version===void 0||$===!0,P=ae.dataReady,ie=k(x,pe);Le(e.TEXTURE_CUBE_MAP,x);let Q;if(He){Se&&Ce&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ie,he,pe.width,pe.height);for(let le=0;le<6;le++){Q=Ne[le].mipmaps;for(let _e=0;_e<Q.length;_e++){let me=Q[_e];x.format!==ei?oe!==null?Se?P&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,0,0,me.width,me.height,oe,me.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,he,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,0,0,me.width,me.height,oe,X,me.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,he,me.width,me.height,0,oe,X,me.data)}}}else{if(Q=x.mipmaps,Se&&Ce){Q.length>0&&ie++;let le=de(Ne[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ie,he,le.width,le.height)}for(let le=0;le<6;le++)if(Te){Se?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ne[le].width,Ne[le].height,oe,X,Ne[le].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,Ne[le].width,Ne[le].height,0,oe,X,Ne[le].data);for(let _e=0;_e<Q.length;_e++){let me=Q[_e].image[le].image;Se?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,0,0,me.width,me.height,oe,X,me.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,he,me.width,me.height,0,oe,X,me.data)}}else{Se?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,oe,X,Ne[le]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,oe,X,Ne[le]);for(let _e=0;_e<Q.length;_e++){let me=Q[_e];Se?P&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,0,0,oe,X,me.image[le]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,he,oe,X,me.image[le])}}}f(x)&&m(e.TEXTURE_CUBE_MAP),te.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Z(w,x,L,$,ae,te){let Ie=s.convert(L.format,L.colorSpace),xe=s.convert(L.type),we=_(L.internalFormat,Ie,xe,L.colorSpace),He=r.get(x),Te=r.get(L);if(Te.__renderTarget=x,!He.__hasExternalTextures){let Ne=Math.max(1,x.width>>te),pe=Math.max(1,x.height>>te);ae===e.TEXTURE_3D||ae===e.TEXTURE_2D_ARRAY?i.texImage3D(ae,te,we,Ne,pe,x.depth,0,Ie,xe,null):i.texImage2D(ae,te,we,Ne,pe,0,Ie,xe,null)}i.bindFramebuffer(e.FRAMEBUFFER,w),ue(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,ae,Te.__webglTexture,0,ve(x)):(ae===e.TEXTURE_2D||ae>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,ae,Te.__webglTexture,te),i.bindFramebuffer(e.FRAMEBUFFER,null)}function V(w,x,L){if(e.bindRenderbuffer(e.RENDERBUFFER,w),x.depthBuffer){let $=x.depthTexture,ae=$&&$.isDepthTexture?$.type:null,te=T(x.stencilBuffer,ae),Ie=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=ve(x);ue(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe,te,x.width,x.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,te,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,te,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ie,e.RENDERBUFFER,w)}else{let $=x.textures;for(let ae=0;ae<$.length;ae++){let te=$[ae],Ie=s.convert(te.format,te.colorSpace),xe=s.convert(te.type),we=_(te.internalFormat,Ie,xe,te.colorSpace),He=ve(x);L&&ue(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,He,we,x.width,x.height):ue(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,He,we,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,we,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function se(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let L=r.get(x.depthTexture);L.__renderTarget=x,(!L.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne(x.depthTexture,0);let $=L.__webglTexture,ae=ve(x);if(x.depthTexture.format===Ar)ue(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,ae):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(x.depthTexture.format===Rr)ue(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,ae):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function re(w){let x=r.get(w),L=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ae)};$.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=$}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");se(x.__webglFramebuffer,w)}else if(L){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=e.createRenderbuffer(),V(x.__webglDepthbuffer[$],w,!1);else{let ae=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,te)}}else if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),V(x.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ae),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ae)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(w,x,L){let $=r.get(w);x!==void 0&&Z($.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&re(w)}function J(w){let x=w.texture,L=r.get(w),$=r.get(x);w.addEventListener("dispose",C);let ae=w.textures,te=w.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=x.version,n.memory.textures++),te){L.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[xe]=[];for(let we=0;we<x.mipmaps.length;we++)L.__webglFramebuffer[xe][we]=e.createFramebuffer()}else L.__webglFramebuffer[xe]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let xe=0;xe<x.mipmaps.length;xe++)L.__webglFramebuffer[xe]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(Ie)for(let xe=0,we=ae.length;xe<we;xe++){let He=r.get(ae[xe]);He.__webglTexture===void 0&&(He.__webglTexture=e.createTexture(),n.memory.textures++)}if(w.samples>0&&ue(w)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let xe=0;xe<ae.length;xe++){let we=ae[xe];L.__webglColorRenderbuffer[xe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[xe]);let He=s.convert(we.format,we.colorSpace),Te=s.convert(we.type),Ne=_(we.internalFormat,He,Te,we.colorSpace,w.isXRRenderTarget===!0),pe=ve(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,pe,Ne,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,L.__webglColorRenderbuffer[xe])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),V(L.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){i.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Le(e.TEXTURE_CUBE_MAP,x);for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)Z(L.__webglFramebuffer[xe][we],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else Z(L.__webglFramebuffer[xe],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);f(x)&&m(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let xe=0,we=ae.length;xe<we;xe++){let He=ae[xe],Te=r.get(He);i.bindTexture(e.TEXTURE_2D,Te.__webglTexture),Le(e.TEXTURE_2D,He),Z(L.__webglFramebuffer,w,He,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,0),f(He)&&m(e.TEXTURE_2D)}i.unbindTexture()}else{let xe=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xe=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(xe,$.__webglTexture),Le(xe,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)Z(L.__webglFramebuffer[we],w,x,e.COLOR_ATTACHMENT0,xe,we);else Z(L.__webglFramebuffer,w,x,e.COLOR_ATTACHMENT0,xe,0);f(x)&&m(xe),i.unbindTexture()}w.depthBuffer&&re(w)}function ce(w){let x=w.textures;for(let L=0,$=x.length;L<$;L++){let ae=x[L];if(f(ae)){let te=y(w),Ie=r.get(ae).__webglTexture;i.bindTexture(te,Ie),m(te),i.unbindTexture()}}}let b=[],be=[];function W(w){if(w.samples>0){if(ue(w)===!1){let x=w.textures,L=w.width,$=w.height,ae=e.COLOR_BUFFER_BIT,te=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ie=r.get(w),xe=x.length>1;if(xe)for(let we=0;we<x.length;we++)i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<x.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ae|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ae|=e.STENCIL_BUFFER_BIT)),xe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);let He=r.get(x[we]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,He,0)}e.blitFramebuffer(0,0,L,$,0,0,L,$,ae,e.NEAREST),l===!0&&(b.length=0,be.length=0,b.push(e.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.resolveDepthBuffer===!1&&(b.push(te),be.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,b))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<x.length;we++){i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);let He=r.get(x[we]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.TEXTURE_2D,He,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ve(w){return Math.min(a.maxSamples,w.samples)}function ue(w){let x=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Re(w){let x=n.render.frame;c.get(w)!==x&&(c.set(w,x),w.update())}function B(w,x){let L=w.colorSpace,$=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Cr&&L!==Fi&&(rt.getTransfer(L)===st?($!==ei||ae!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),x}function de(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=ne,this.setTexture2DArray=ee,this.setTexture3D=ge,this.setTextureCube=q,this.rebindTextures=ye,this.setupRenderTarget=J,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ue}function Sg(e,t){function i(r,a=Fi){let s,n=rt.getTransfer(a);if(r===Ei)return e.UNSIGNED_BYTE;if(r===en)return e.UNSIGNED_SHORT_4_4_4_4;if(r===tn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===tl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Qo)return e.BYTE;if(r===el)return e.SHORT;if(r===fa)return e.UNSIGNED_SHORT;if(r===Qs)return e.INT;if(r===ar)return e.UNSIGNED_INT;if(r===ui)return e.FLOAT;if(r===br)return e.HALF_FLOAT;if(r===il)return e.ALPHA;if(r===rl)return e.RGB;if(r===ei)return e.RGBA;if(r===al)return e.LUMINANCE;if(r===sl)return e.LUMINANCE_ALPHA;if(r===Ar)return e.DEPTH_COMPONENT;if(r===Rr)return e.DEPTH_STENCIL;if(r===rn)return e.RED;if(r===an)return e.RED_INTEGER;if(r===nl)return e.RG;if(r===sn)return e.RG_INTEGER;if(r===nn)return e.RGBA_INTEGER;if(r===Ga||r===Wa||r===Xa||r===ja)if(n===st)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===on||r===ln||r===hn||r===cn)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===on)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ln)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===un||r===dn||r===pn)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===un||r===dn)return n===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===pn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fn||r===mn||r===gn||r===vn||r===_n||r===xn||r===yn||r===Sn||r===Mn||r===En||r===Tn||r===bn||r===wn||r===An)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===fn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_n)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===En)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===An)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ya||r===Rn||r===Cn)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Ya)return n===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rn)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cn)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ol||r===Pn||r===Ln||r===Nn)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Pn)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ln)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Mg=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fr=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eg={type:"move"},_o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,i),f=this._getHandJoint(l,g);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return n!==null&&(n.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`,wg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Xt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new pi({vertexShader:Tg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ag=class extends Lr{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new wg,v=t.getContextAttributes(),f=null,m=null,y=[],_=[],T=new Ae,k=null,A=new Gt;A.viewport=new _t;let C=new Gt;C.viewport=new _t;let U=[A,C],M=new Mg,E=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let fe=y[G];return fe===void 0&&(fe=new _o,y[G]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(G){let fe=y[G];return fe===void 0&&(fe=new _o,y[G]=fe),fe.getGripSpace()},this.getHand=function(G){let fe=y[G];return fe===void 0&&(fe=new _o,y[G]=fe),fe.getHandSpace()};function I(G){let fe=_.indexOf(G.inputSource);if(fe===-1)return;let F=y[fe];F!==void 0&&(F.update(G.inputSource,G.frame,l||s),F.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",z);for(let G=0;G<y.length;G++){let fe=_[G];fe!==null&&(_[G]=null,y[G].disconnect(fe))}E=null,R=null,g.reset(),e.setRenderTarget(f),d=null,u=null,c=null,r=null,m=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){n=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){let fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new zi(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,F=null,Z=null;v.depth&&(Z=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?Rr:Ar,F=v.stencil?wr:ar);let V={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(V),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new zi(u.textureWidth,u.textureHeight,{format:ei,type:Ei,depthTexture:new Ql(u.textureWidth,u.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(G){for(let fe=0;fe<G.removed.length;fe++){let F=G.removed[fe],Z=_.indexOf(F);Z>=0&&(_[Z]=null,y[Z].disconnect(F))}for(let fe=0;fe<G.added.length;fe++){let F=G.added[fe],Z=_.indexOf(F);if(Z===-1){for(let se=0;se<y.length;se++)if(se>=_.length){_.push(F),Z=se;break}else if(_[se]===null){_[se]=F,Z=se;break}if(Z===-1)break}let V=y[Z];V&&V.connect(F)}}let ne=new N,ee=new N;function ge(G,fe,F){ne.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(F.matrixWorld);let Z=ne.distanceTo(ee),V=fe.projectionMatrix.elements,se=F.projectionMatrix.elements,re=V[14]/(V[10]-1),ye=V[14]/(V[10]+1),J=(V[9]+1)/V[5],ce=(V[9]-1)/V[5],b=(V[8]-1)/V[0],be=(se[8]+1)/se[0],W=re*b,ve=re*be,ue=Z/(-b+be),Re=ue*-b;if(fe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Re),G.translateZ(ue),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),V[10]===-1)G.projectionMatrix.copy(fe.projectionMatrix),G.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let B=re+ue,de=ye+ue,w=W-Re,x=ve+(Z-Re),L=J*ye/de*B,$=ce*ye/de*B;G.projectionMatrix.makePerspective(w,x,L,$,B,de),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,fe){fe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(fe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let fe=G.near,F=G.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(F=g.depthFar)),M.near=C.near=A.near=fe,M.far=C.far=A.far=F,(E!==M.near||R!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,R=M.far),A.layers.mask=G.layers.mask|2,C.layers.mask=G.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let Z=G.parent,V=M.cameras;q(M,Z);for(let se=0;se<V.length;se++)q(V[se],Z);V.length===2?ge(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),K(G,M,Z)};function K(G,fe,F){F===null?G.matrix.copy(fe.matrixWorld):(G.matrix.copy(F.matrixWorld),G.matrix.invert(),G.matrix.multiply(fe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(fe.projectionMatrix),G.projectionMatrixInverse.copy(fe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Fn*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(G){o=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Ee=null;function Oe(G,fe){if(h=fe.getViewerPose(l||s),p=fe,h!==null){let F=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Z=!1;F.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let se=0;se<F.length;se++){let re=F[se],ye=null;if(d!==null)ye=d.getViewport(re);else{let ce=c.getViewSubImage(u,re);ye=ce.viewport,se===0&&(e.setRenderTargetTextures(m,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(m))}let J=U[se];J===void 0&&(J=new Gt,J.layers.enable(se),J.viewport=new _t,U[se]=J),J.matrix.fromArray(re.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(re.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ye.x,ye.y,ye.width,ye.height),se===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Z===!0&&M.cameras.push(J)}let V=r.enabledFeatures;if(V&&V.includes("depth-sensing")){let se=c.getDepthInformation(F[0]);se&&se.isValid&&se.texture&&g.init(e,se,r.renderState)}}for(let F=0;F<y.length;F++){let Z=_[F],V=y[F];Z!==null&&V!==void 0&&V.update(Z,fe,l||s)}Ee&&Ee(G,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),p=null}let Le=new jl;Le.setAnimationLoop(Oe),this.setAnimationLoop=function(G){Ee=G},this.dispose=function(){}}},mr=new Gi,Rg=new ht;function Cg(e,t){function i(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function r(f,m){m.color.getRGB(f.fogColor.value,Hl(e)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,y,_,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),u(f,m)):m.isMeshPhongMaterial?(s(f,m),c(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,T)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),v(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(n(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,_):m.isSpriteMaterial?h(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,i(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Dt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,i(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Dt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,i(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,i(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y=t.get(m),_=y.envMap,T=y.envMapRotation;_&&(f.envMap.value=_,mr.copy(T),mr.x*=-1,mr.y*=-1,mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),f.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(mr)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,f.aoMapTransform))}function n(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=_*.5,m.map&&(f.map.value=m.map,i(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){let y=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Pg(e,t,i,r){let a={},s={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let T=_.program;r.uniformBlockBinding(y,T)}function h(y,_){let T=a[y.id];T===void 0&&(g(y),T=c(y),a[y.id]=T,y.addEventListener("dispose",f));let k=_.program;r.updateUBOMapping(y,k);let A=t.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function c(y){let _=u();y.__bindingPointIndex=_;let T=e.createBuffer(),k=y.__size,A=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,k,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,T),T}function u(){for(let y=0;y<o;y++)if(n.indexOf(y)===-1)return n.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=a[y.id],T=y.uniforms,k=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let A=0,C=T.length;A<C;A++){let U=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,E=U.length;M<E;M++){let R=U[M];if(p(R,A,M,k)===!0){let I=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],z=0;for(let ne=0;ne<H.length;ne++){let ee=H[ne],ge=v(ee);typeof ee=="number"||typeof ee=="boolean"?(R.__data[0]=ee,e.bufferSubData(e.UNIFORM_BUFFER,I+z,R.__data)):ee.isMatrix3?(R.__data[0]=ee.elements[0],R.__data[1]=ee.elements[1],R.__data[2]=ee.elements[2],R.__data[3]=0,R.__data[4]=ee.elements[3],R.__data[5]=ee.elements[4],R.__data[6]=ee.elements[5],R.__data[7]=0,R.__data[8]=ee.elements[6],R.__data[9]=ee.elements[7],R.__data[10]=ee.elements[8],R.__data[11]=0):(ee.toArray(R.__data,z),z+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,_,T,k){let A=y.value,C=_+"_"+T;if(k[C]===void 0)return typeof A=="number"||typeof A=="boolean"?k[C]=A:k[C]=A.clone(),!0;{let U=k[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return k[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(y){let _=y.uniforms,T=0,k=16;for(let C=0,U=_.length;C<U;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,R=M.length;E<R;E++){let I=M[E],H=Array.isArray(I.value)?I.value:[I.value];for(let z=0,ne=H.length;z<ne;z++){let ee=H[z],ge=v(ee),q=T%k,K=q%ge.boundary,Ee=q+K;T+=K,Ee!==0&&k-Ee<ge.storage&&(T+=k-Ee),I.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=ge.storage}}}let A=T%k;return A>0&&(T+=k-A),y.__size=T,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){let _=y.target;_.removeEventListener("dispose",f);let T=n.indexOf(_.__bindingPointIndex);n.splice(T,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function m(){for(let y in a)e.deleteBuffer(a[y]);n=[],a={},s={}}return{bind:l,update:h,dispose:m}}var Mh=class{constructor(e={}){let{canvas:t=_u(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let p=new Uint32Array(4),g=new Int32Array(4),v=null,f=null,m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=ci,this.toneMappingExposure=1;let _=this,T=!1,k=0,A=0,C=null,U=-1,M=null,E=new _t,R=new _t,I=null,H=new je(0),z=0,ne=t.width,ee=t.height,ge=1,q=null,K=null,Ee=new _t(0,0,ne,ee),Oe=new _t(0,0,ne,ee),Le=!1,G=new no,fe=!1,F=!1,Z=new ht,V=new ht,se=new N,re=new _t,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function ce(){return C===null?ge:1}let b=i;function be(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:r,stencil:a,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",_e,!1),b===null){let O="webgl2";if(b=be(O,S),b===null)throw be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let W,ve,ue,Re,B,de,w,x,L,$,ae,te,Ie,xe,we,He,Te,Ne,pe,oe,X,he,Se,Ce;function P(){W=new Of(b),W.init(),he=new Sg(b,W),ve=new Pf(b,W,e,he),ue=new _g(b,W),ve.reverseDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),Re=new Bf(b),B=new rg,de=new yg(b,W,ue,B,ve,he,Re),w=new Nf(_),x=new Df(_),L=new Xu(b),Se=new Rf(b,L),$=new Ff(b,L,Re,Se),ae=new Hf(b,$,L,Re),pe=new kf(b,ve,de),He=new Lf(B),te=new ig(_,w,x,W,ve,Se,He),Ie=new Cg(_,B),xe=new sg,we=new ug(W),Ne=new Af(_,w,x,ue,ae,d,o),Te=new gg(_,ae,ve),Ce=new Pg(b,Re,ve,ue),oe=new Cf(b,W,Re),X=new zf(b,W,Re),Re.programs=te.programs,_.capabilities=ve,_.extensions=W,_.properties=B,_.renderLists=xe,_.shadowMap=Te,_.state=ue,_.info=Re}P();let ie=new Ag(_,b);this.xr=ie,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let S=W.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=W.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(S){S!==void 0&&(ge=S,this.setSize(ne,ee,!1))},this.getSize=function(S){return S.set(ne,ee)},this.setSize=function(S,O,j=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,ee=O,t.width=Math.floor(S*ge),t.height=Math.floor(O*ge),j===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(ne*ge,ee*ge).floor()},this.setDrawingBufferSize=function(S,O,j){ne=S,ee=O,ge=j,t.width=Math.floor(S*j),t.height=Math.floor(O*j),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,O,j,Y){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,O,j,Y),ue.viewport(E.copy(Ee).multiplyScalar(ge).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,O,j,Y){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,O,j,Y),ue.scissor(R.copy(Oe).multiplyScalar(ge).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(S){ue.setScissorTest(Le=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(S=!0,O=!0,j=!0){let Y=0;if(S){let D=!1;if(C!==null){let Me=C.texture.format;D=Me===nn||Me===sn||Me===an}if(D){let Me=C.texture.type,Ue=Me===Ei||Me===ar||Me===fa||Me===wr||Me===en||Me===tn,Fe=Ne.getClearColor(),ze=Ne.getClearAlpha(),qe=Fe.r,Ke=Fe.g,Ge=Fe.b;Ue?(p[0]=qe,p[1]=Ke,p[2]=Ge,p[3]=ze,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=qe,g[1]=Ke,g[2]=Ge,g[3]=ze,b.clearBufferiv(b.COLOR,0,g))}else Y|=b.COLOR_BUFFER_BIT}O&&(Y|=b.DEPTH_BUFFER_BIT),j&&(Y|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),xe.dispose(),we.dispose(),B.dispose(),w.dispose(),x.dispose(),ae.dispose(),Se.dispose(),Ce.dispose(),te.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ut),ie.removeEventListener("sessionend",Ui),Zt.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let S=Re.autoReset,O=Te.enabled,j=Te.autoUpdate,Y=Te.needsUpdate,D=Te.type;P(),Re.autoReset=S,Te.enabled=O,Te.autoUpdate=j,Te.needsUpdate=Y,Te.type=D}function _e(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function me(S){let O=S.target;O.removeEventListener("dispose",me),Xe(O)}function Xe(S){De(S),B.remove(S)}function De(S){let O=B.get(S).programs;O!==void 0&&(O.forEach(function(j){te.releaseProgram(j)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,j,Y,D,Me){O===null&&(O=ye);let Ue=D.isMesh&&D.matrixWorld.determinant()<0,Fe=We(S,O,j,Y,D);ue.setMaterial(Y,Ue);let ze=j.index,qe=1;if(Y.wireframe===!0){if(ze=$.getWireframeAttribute(j),ze===void 0)return;qe=2}let Ke=j.drawRange,Ge=j.attributes.position,it=Ke.start*qe,Je=(Ke.start+Ke.count)*qe;Me!==null&&(it=Math.max(it,Me.start*qe),Je=Math.min(Je,(Me.start+Me.count)*qe)),ze!==null?(it=Math.max(it,0),Je=Math.min(Je,ze.count)):Ge!=null&&(it=Math.max(it,0),Je=Math.min(Je,Ge.count));let at=Je-it;if(at<0||at===1/0)return;Se.setup(D,Y,Fe,j,ze);let dt,nt=oe;if(ze!==null&&(dt=L.get(ze),nt=X,nt.setIndex(dt)),D.isMesh)Y.wireframe===!0?(ue.setLineWidth(Y.wireframeLinewidth*ce()),nt.setMode(b.LINES)):nt.setMode(b.TRIANGLES);else if(D.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),ue.setLineWidth(ke*ce()),D.isLineSegments?nt.setMode(b.LINES):D.isLineLoop?nt.setMode(b.LINE_LOOP):nt.setMode(b.LINE_STRIP)}else D.isPoints?nt.setMode(b.POINTS):D.isSprite&&nt.setMode(b.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)nt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))nt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let ke=D._multiDrawStarts,oi=D._multiDrawCounts,tr=D._multiDrawCount,$t=ze?L.get(ze).bytesPerElement:1,yr=B.get(Y).currentProgram.getUniforms();for(let Bt=0;Bt<tr;Bt++)yr.setValue(b,"_gl_DrawID",Bt),nt.render(ke[Bt]/$t,oi[Bt])}else if(D.isInstancedMesh)nt.renderInstances(it,at,D.count);else if(j.isInstancedBufferGeometry){let ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,oi=Math.min(j.instanceCount,ke);nt.renderInstances(it,at,oi)}else nt.render(it,at)};function Ye(S,O,j){S.transparent===!0&&S.side===hi&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,yi(S,O,j),S.side=Di,S.needsUpdate=!0,yi(S,O,j),S.side=hi):yi(S,O,j)}this.compile=function(S,O,j=null){j===null&&(j=S),f=we.get(j),f.init(O),y.push(f),j.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),S!==j&&S.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let Y=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let Me=D.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){let Fe=Me[Ue];Ye(Fe,j,D),Y.add(Fe)}else Ye(Me,j,D),Y.add(Me)}),y.pop(),f=null,Y},this.compileAsync=function(S,O,j=null){let Y=this.compile(S,O,j);return new Promise(D=>{function Me(){if(Y.forEach(function(Ue){B.get(Ue).currentProgram.isReady()&&Y.delete(Ue)}),Y.size===0){D(S);return}setTimeout(Me,10)}W.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ze=null;function Kt(S){Ze&&Ze(S)}function Ut(){Zt.stop()}function Ui(){Zt.start()}let Zt=new jl;Zt.setAnimationLoop(Kt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(S){Ze=S,ie.setAnimationLoop(S),S===null?Zt.stop():Zt.start()},ie.addEventListener("sessionstart",Ut),ie.addEventListener("sessionend",Ui),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,O,C),f=we.get(S,y.length),f.init(O),y.push(f),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(V),F=this.localClippingEnabled,fe=He.init(this.clippingPlanes,F),v=xe.get(S,m.length),v.init(),m.push(v),ie.enabled===!0&&ie.isPresenting===!0){let Me=_.xr.getDepthSensingMesh();Me!==null&&_r(Me,O,-1/0,_.sortObjects)}_r(S,O,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,K),J=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,J&&Ne.addToRenderList(v,S),this.info.render.frame++,fe===!0&&He.beginShadows();let j=f.state.shadowsArray;Te.render(j,S,O),fe===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=v.opaque,D=v.transmissive;if(f.setupLights(),O.isArrayCamera){let Me=O.cameras;if(D.length>0)for(let Ue=0,Fe=Me.length;Ue<Fe;Ue++){let ze=Me[Ue];ha(Y,D,S,ze)}J&&Ne.render(S);for(let Ue=0,Fe=Me.length;Ue<Fe;Ue++){let ze=Me[Ue];la(v,S,ze,ze.viewport)}}else D.length>0&&ha(Y,D,S,O),J&&Ne.render(S),la(v,S,O);C!==null&&(de.updateMultisampleRenderTarget(C),de.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,O),Se.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],fe===!0&&He.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function _r(S,O,j,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){Y&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);let Me=ae.update(S),Ue=S.material;Ue.visible&&v.push(S,Me,Ue,j,re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){let Me=ae.update(S),Ue=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),re.copy(S.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),re.copy(Me.boundingSphere.center)),re.applyMatrix4(S.matrixWorld).applyMatrix4(V)),Array.isArray(Ue)){let Fe=Me.groups;for(let ze=0,qe=Fe.length;ze<qe;ze++){let Ke=Fe[ze],Ge=Ue[Ke.materialIndex];Ge&&Ge.visible&&v.push(S,Me,Ge,j,re.z,Ke)}}else Ue.visible&&v.push(S,Me,Ue,j,re.z,null)}}let D=S.children;for(let Me=0,Ue=D.length;Me<Ue;Me++)_r(D[Me],O,j,Y)}function la(S,O,j,Y){let D=S.opaque,Me=S.transmissive,Ue=S.transparent;f.setupLightsView(j),fe===!0&&He.setGlobalState(_.clippingPlanes,j),Y&&ue.viewport(E.copy(Y)),D.length>0&&Qi(D,O,j),Me.length>0&&Qi(Me,O,j),Ue.length>0&&Qi(Ue,O,j),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ha(S,O,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new zi(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?br:Ei,minFilter:Mi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let D=f.state.transmissionRenderTarget[Y.id],Me=Y.viewport||E;D.setSize(Me.z,Me.w);let Ue=_.getRenderTarget();_.setRenderTarget(D),_.getClearColor(H),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ne.render(j);let Fe=_.toneMapping;_.toneMapping=ci;let ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),fe===!0&&He.setGlobalState(_.clippingPlanes,Y),Qi(S,j,Y),de.updateMultisampleRenderTarget(D),de.updateRenderTargetMipmap(D),W.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ke=0,Ge=O.length;Ke<Ge;Ke++){let it=O[Ke],Je=it.object,at=it.geometry,dt=it.material,nt=it.group;if(dt.side===hi&&Je.layers.test(Y.layers)){let ke=dt.side;dt.side=Dt,dt.needsUpdate=!0,ca(Je,j,Y,at,dt,nt),dt.side=ke,dt.needsUpdate=!0,qe=!0}}qe===!0&&(de.updateMultisampleRenderTarget(D),de.updateRenderTargetMipmap(D))}_.setRenderTarget(Ue),_.setClearColor(H,z),ze!==void 0&&(Y.viewport=ze),_.toneMapping=Fe}function Qi(S,O,j){let Y=O.isScene===!0?O.overrideMaterial:null;for(let D=0,Me=S.length;D<Me;D++){let Ue=S[D],Fe=Ue.object,ze=Ue.geometry,qe=Y===null?Ue.material:Y,Ke=Ue.group;Fe.layers.test(j.layers)&&ca(Fe,O,j,ze,qe,Ke)}}function ca(S,O,j,Y,D,Me){S.onBeforeRender(_,O,j,Y,D,Me),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(_,O,j,Y,S,Me),D.transparent===!0&&D.side===hi&&D.forceSinglePass===!1?(D.side=Dt,D.needsUpdate=!0,_.renderBufferDirect(j,O,Y,D,S,Me),D.side=Di,D.needsUpdate=!0,_.renderBufferDirect(j,O,Y,D,S,Me),D.side=hi):_.renderBufferDirect(j,O,Y,D,S,Me),S.onAfterRender(_,O,j,Y,D,Me)}function yi(S,O,j){O.isScene!==!0&&(O=ye);let Y=B.get(S),D=f.state.lights,Me=f.state.shadowsArray,Ue=D.state.version,Fe=te.getParameters(S,D.state,Me,O,j),ze=te.getProgramCacheKey(Fe),qe=Y.programs;Y.environment=S.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(S.isMeshStandardMaterial?x:w).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",me),qe=new Map,Y.programs=qe);let Ke=qe.get(ze);if(Ke!==void 0){if(Y.currentProgram===Ke&&Y.lightsStateVersion===Ue)return er(S,Fe),Ke}else Fe.uniforms=te.getUniforms(S),S.onBeforeCompile(Fe,_),Ke=te.acquireProgram(Fe,ze),qe.set(ze,Ke),Y.uniforms=Fe.uniforms;let Ge=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=He.uniform),er(S,Fe),Y.needsLights=tt(S),Y.lightsStateVersion=Ue,Y.needsLights&&(Ge.ambientLightColor.value=D.state.ambient,Ge.lightProbe.value=D.state.probe,Ge.directionalLights.value=D.state.directional,Ge.directionalLightShadows.value=D.state.directionalShadow,Ge.spotLights.value=D.state.spot,Ge.spotLightShadows.value=D.state.spotShadow,Ge.rectAreaLights.value=D.state.rectArea,Ge.ltc_1.value=D.state.rectAreaLTC1,Ge.ltc_2.value=D.state.rectAreaLTC2,Ge.pointLights.value=D.state.point,Ge.pointLightShadows.value=D.state.pointShadow,Ge.hemisphereLights.value=D.state.hemi,Ge.directionalShadowMap.value=D.state.directionalShadowMap,Ge.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ge.spotShadowMap.value=D.state.spotShadowMap,Ge.spotLightMatrix.value=D.state.spotLightMatrix,Ge.spotLightMap.value=D.state.spotLightMap,Ge.pointShadowMap.value=D.state.pointShadowMap,Ge.pointShadowMatrix.value=D.state.pointShadowMatrix),Y.currentProgram=Ke,Y.uniformsList=null,Ke}function xr(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=_s.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function er(S,O){let j=B.get(S);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function We(S,O,j,Y,D){O.isScene!==!0&&(O=ye),de.resetTextureUnits();let Me=O.fog,Ue=Y.isMeshStandardMaterial?O.environment:null,Fe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cr,ze=(Y.isMeshStandardMaterial?x:w).get(Y.envMap||Ue),qe=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ke=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,Je=!!j.morphAttributes.color,at=ci;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(at=_.toneMapping);let dt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nt=dt!==void 0?dt.length:0,ke=B.get(Y),oi=f.state.lights;if(fe===!0&&(F===!0||S!==M)){let It=S===M&&Y.id===U;He.setState(Y,S,It)}let tr=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==oi.state.version||ke.outputColorSpace!==Fe||D.isBatchedMesh&&ke.batching===!1||!D.isBatchedMesh&&ke.batching===!0||D.isBatchedMesh&&ke.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ke.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ke.instancing===!1||!D.isInstancedMesh&&ke.instancing===!0||D.isSkinnedMesh&&ke.skinning===!1||!D.isSkinnedMesh&&ke.skinning===!0||D.isInstancedMesh&&ke.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ke.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ke.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ke.instancingMorph===!1&&D.morphTexture!==null||ke.envMap!==ze||Y.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==He.numPlanes||ke.numIntersection!==He.numIntersection)||ke.vertexAlphas!==qe||ke.vertexTangents!==Ke||ke.morphTargets!==Ge||ke.morphNormals!==it||ke.morphColors!==Je||ke.toneMapping!==at||ke.morphTargetsCount!==nt)&&(tr=!0):(tr=!0,ke.__version=Y.version);let $t=ke.currentProgram;tr===!0&&($t=yi(Y,O,D));let yr=!1,Bt=!1,ua=!1,lt=$t.getUniforms(),li=ke.uniforms;if(ue.useProgram($t.program)&&(yr=!0,Bt=!0,ua=!0),Y.id!==U&&(U=Y.id,Bt=!0),yr||M!==S){ue.buffers.depth.getReversed()?(Z.copy(S.projectionMatrix),yu(Z),Su(Z),lt.setValue(b,"projectionMatrix",Z)):lt.setValue(b,"projectionMatrix",S.projectionMatrix),lt.setValue(b,"viewMatrix",S.matrixWorldInverse);let It=lt.map.cameraPosition;It!==void 0&&It.setValue(b,se.setFromMatrixPosition(S.matrixWorld)),ve.logarithmicDepthBuffer&&lt.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&lt.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Bt=!0,ua=!0)}if(D.isSkinnedMesh){lt.setOptional(b,D,"bindMatrix"),lt.setOptional(b,D,"bindMatrixInverse");let It=D.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),lt.setValue(b,"boneTexture",It.boneTexture,de))}D.isBatchedMesh&&(lt.setOptional(b,D,"batchingTexture"),lt.setValue(b,"batchingTexture",D._matricesTexture,de),lt.setOptional(b,D,"batchingIdTexture"),lt.setValue(b,"batchingIdTexture",D._indirectTexture,de),lt.setOptional(b,D,"batchingColorTexture"),D._colorsTexture!==null&&lt.setValue(b,"batchingColorTexture",D._colorsTexture,de));let da=j.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0)&&pe.update(D,j,$t),(Bt||ke.receiveShadow!==D.receiveShadow)&&(ke.receiveShadow=D.receiveShadow,lt.setValue(b,"receiveShadow",D.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(li.envMap.value=ze,li.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(li.envMapIntensity.value=O.environmentIntensity),Bt&&(lt.setValue(b,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Qe(li,ua),Me&&Y.fog===!0&&Ie.refreshFogUniforms(li,Me),Ie.refreshMaterialUniforms(li,Y,ge,ee,f.state.transmissionRenderTarget[S.id]),_s.upload(b,xr(ke),li,de)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_s.upload(b,xr(ke),li,de),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&lt.setValue(b,"center",D.center),lt.setValue(b,"modelViewMatrix",D.modelViewMatrix),lt.setValue(b,"normalMatrix",D.normalMatrix),lt.setValue(b,"modelMatrix",D.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let It=Y.uniformsGroups;for(let pa=0,Ii=It.length;pa<Ii;pa++){let Xo=It[pa];Ce.update(Xo,$t),Ce.bind(Xo,$t)}}return $t}function Qe(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function tt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,O,j){B.get(S.texture).__webglTexture=O,B.get(S.depthTexture).__webglTexture=j;let Y=B.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){let j=B.get(S);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,j=0){C=S,k=O,A=j;let Y=!0,D=null,Me=!1,Ue=!1;if(S){let Fe=B.get(S);if(Fe.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(b.FRAMEBUFFER,null),Y=!1;else if(Fe.__webglFramebuffer===void 0)de.setupRenderTarget(S);else if(Fe.__hasExternalTextures)de.rebindTextures(S,B.get(S.texture).__webglTexture,B.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ke=S.depthTexture;if(Fe.__boundDepthTexture!==Ke){if(Ke!==null&&B.has(Ke)&&(S.width!==Ke.image.width||S.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(S)}}let ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ue=!0);let qe=B.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[O])?D=qe[O][j]:D=qe[O],Me=!0):S.samples>0&&de.useMultisampledRTT(S)===!1?D=B.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?D=qe[j]:D=qe,E.copy(S.viewport),R.copy(S.scissor),I=S.scissorTest}else E.copy(Ee).multiplyScalar(ge).floor(),R.copy(Oe).multiplyScalar(ge).floor(),I=Le;if(ue.bindFramebuffer(b.FRAMEBUFFER,D)&&Y&&ue.drawBuffers(S,D),ue.viewport(E),ue.scissor(R),ue.setScissorTest(I),Me){let Fe=B.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,j)}else if(Ue){let Fe=B.get(S.texture),ze=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,ze)}U=-1},this.readRenderTargetPixels=function(S,O,j,Y,D,Me,Ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){ue.bindFramebuffer(b.FRAMEBUFFER,Fe);try{let ze=S.texture,qe=ze.format,Ke=ze.type;if(!ve.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&j>=0&&j<=S.height-D&&b.readPixels(O,j,Y,D,he.convert(qe),he.convert(Ke),Me)}finally{let ze=C!==null?B.get(C).__webglFramebuffer:null;ue.bindFramebuffer(b.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,O,j,Y,D,Me,Ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){let ze=S.texture,qe=ze.format,Ke=ze.type;if(!ve.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-Y&&j>=0&&j<=S.height-D){ue.bindFramebuffer(b.FRAMEBUFFER,Fe);let Ge=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ge),b.bufferData(b.PIXEL_PACK_BUFFER,Me.byteLength,b.STREAM_READ),b.readPixels(O,j,Y,D,he.convert(qe),he.convert(Ke),0);let it=C!==null?B.get(C).__webglFramebuffer:null;ue.bindFramebuffer(b.FRAMEBUFFER,it);let Je=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await xu(b,Je,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ge),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Me),b.deleteBuffer(Ge),b.deleteSync(Je),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,j=0){S.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);let Y=Math.pow(2,-j),D=Math.floor(S.image.width*Y),Me=Math.floor(S.image.height*Y),Ue=O!==null?O.x:0,Fe=O!==null?O.y:0;de.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,j,0,0,Ue,Fe,D,Me),ue.unbindTexture()},this.copyTextureToTexture=function(S,O,j=null,Y=null,D=0){S.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],O=arguments[2],D=arguments[3]||0,j=null);let Me,Ue,Fe,ze,qe,Ke,Ge,it,Je,at=S.isCompressedTexture?S.mipmaps[D]:S.image;j!==null?(Me=j.max.x-j.min.x,Ue=j.max.y-j.min.y,Fe=j.isBox3?j.max.z-j.min.z:1,ze=j.min.x,qe=j.min.y,Ke=j.isBox3?j.min.z:0):(Me=at.width,Ue=at.height,Fe=at.depth||1,ze=0,qe=0,Ke=0),Y!==null?(Ge=Y.x,it=Y.y,Je=Y.z):(Ge=0,it=0,Je=0);let dt=he.convert(O.format),nt=he.convert(O.type),ke;O.isData3DTexture?(de.setTexture3D(O,0),ke=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(de.setTexture2DArray(O,0),ke=b.TEXTURE_2D_ARRAY):(de.setTexture2D(O,0),ke=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);let oi=b.getParameter(b.UNPACK_ROW_LENGTH),tr=b.getParameter(b.UNPACK_IMAGE_HEIGHT),$t=b.getParameter(b.UNPACK_SKIP_PIXELS),yr=b.getParameter(b.UNPACK_SKIP_ROWS),Bt=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,at.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,at.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ze),b.pixelStorei(b.UNPACK_SKIP_ROWS,qe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ke);let ua=S.isDataArrayTexture||S.isData3DTexture,lt=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let li=B.get(S),da=B.get(O),It=B.get(li.__renderTarget),pa=B.get(da.__renderTarget);ue.bindFramebuffer(b.READ_FRAMEBUFFER,It.__webglFramebuffer),ue.bindFramebuffer(b.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let Ii=0;Ii<Fe;Ii++)ua&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,B.get(S).__webglTexture,D,Ke+Ii),S.isDepthTexture?(lt&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,B.get(O).__webglTexture,D,Je+Ii),b.blitFramebuffer(ze,qe,Me,Ue,Ge,it,Me,Ue,b.DEPTH_BUFFER_BIT,b.NEAREST)):lt?b.copyTexSubImage3D(ke,D,Ge,it,Je+Ii,ze,qe,Me,Ue):b.copyTexSubImage2D(ke,D,Ge,it,Je+Ii,ze,qe,Me,Ue);ue.bindFramebuffer(b.READ_FRAMEBUFFER,null),ue.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else lt?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(ke,D,Ge,it,Je,Me,Ue,Fe,dt,nt,at.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(ke,D,Ge,it,Je,Me,Ue,Fe,dt,at.data):b.texSubImage3D(ke,D,Ge,it,Je,Me,Ue,Fe,dt,nt,at):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,D,Ge,it,Me,Ue,dt,nt,at.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,D,Ge,it,at.width,at.height,dt,at.data):b.texSubImage2D(b.TEXTURE_2D,D,Ge,it,Me,Ue,dt,nt,at);b.pixelStorei(b.UNPACK_ROW_LENGTH,oi),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tr),b.pixelStorei(b.UNPACK_SKIP_PIXELS,$t),b.pixelStorei(b.UNPACK_SKIP_ROWS,yr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Bt),D===0&&O.generateMipmaps&&b.generateMipmap(ke),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,O,j=null,Y=null,D=0){return S.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],O=arguments[3],D=arguments[4]||0),ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,j,Y,D)},this.initRenderTarget=function(S){B.get(S).__webglFramebuffer===void 0&&de.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?de.setTextureCube(S,0):S.isData3DTexture?de.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?de.setTexture2DArray(S,0):de.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){k=0,A=0,C=null,ue.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}},Lg=class yc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new je(t),this.near=i,this.far=r}clone(){return new yc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ys=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ng=class extends Xt{constructor(e=null,t=1,i=1,r,a,s,n,o,l=kt,h=kt,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Eh=class extends Lt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Kr=new ht,Th=new ht,Ss=[],bh=new sr,Ug=new ht,ba=new gt,wa=new xa,Zr=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),bh.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(bh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),wa.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let n=0;n<i.length;n++)i[n]=r[s+n]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(i),e.ray.intersectsSphere(wa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Kr),Th.multiplyMatrices(i,Kr),ba.matrixWorld=Th,ba.raycast(e,Ss);for(let s=0,n=Ss.length;s<n;s++){let o=Ss[s];o.instanceId=a,o.object=this,t.push(o)}Ss.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ng(new Float32Array(r*this.count),r,this.count,rn,ui));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let n=this.geometry.morphTargetsRelative?1:1-s,o=r*e;a[o]=n,a.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},qi=class extends Xt{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,s;t?s=t:s=e*i[a-1];let n=0,o=a-1,l;for(;n<=o;)if(r=Math.floor(n+(o-n)/2),l=i[r]-s,l<0)n=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(s-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),s=this.getPoint(r),n=t||(a.isVector2?new Ae:new N);return n.copy(s).sub(a).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new N,r=[],a=[],s=[],n=new N,o=new ht;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new N)}a[0]=new N,s[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),n.crossVectors(r[d-1],r[d]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(Et(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(n,p))}s[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(Et(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xo=class extends mi{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new Ae){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ig=class extends xo{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function yo(){let e=0,t=0,i=0,r=0;function a(s,n,o,l){e=s,t=o,i=-3*s+3*n-2*o-l,r=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,h){a(n,o,h*(o-s),h*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,h,c,u){let d=(n-s)/h-(o-s)/(h+c)+(o-n)/c,p=(o-n)/c-(l-n)/(c+u)+(l-o)/u;d*=c,p*=c,a(n,o,d,p)},calc:function(s){let n=s*s,o=n*s;return e+t*s+i*n+r*o}}}var Ms=new N,So=new yo,Mo=new yo,Eo=new yo,Dg=class extends mi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,n=Math.floor(s),o=s-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/a)+1)*a:o===0&&n===a-1&&(n=a-2,o=1);let l,h;this.closed||n>0?l=r[(n-1)%a]:(Ms.subVectors(r[0],r[1]).add(r[0]),l=Ms);let c=r[n%a],u=r[(n+1)%a];if(this.closed||n+2<a?h=r[(n+2)%a]:(Ms.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Ms),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),So.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,v),Mo.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,v),Eo.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(So.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Mo.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Eo.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(So.calc(o),Mo.calc(o),Eo.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wh(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+s+n)*l+(-3*i+3*r-2*s-n)*o+s*e+i}function Og(e,t){let i=1-e;return i*i*t}function Fg(e,t){return 2*(1-e)*e*t}function zg(e,t){return e*e*t}function Aa(e,t,i,r){return Og(e,t)+Fg(e,i)+zg(e,r)}function Bg(e,t){let i=1-e;return i*i*i*t}function kg(e,t){let i=1-e;return 3*i*i*e*t}function Hg(e,t){return 3*(1-e)*e*e*t}function Vg(e,t){return e*e*e*t}function Ra(e,t,i,r,a){return Bg(e,t)+kg(e,i)+Hg(e,r)+Vg(e,a)}var Ah=class extends mi{constructor(e=new Ae,t=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ae){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Ra(e,r.x,a.x,s.x,n.x),Ra(e,r.y,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gg=class extends mi{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Ra(e,r.x,a.x,s.x,n.x),Ra(e,r.y,a.y,s.y,n.y),Ra(e,r.z,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rh=class extends mi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wg=class extends mi{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ch=class extends mi{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Aa(e,r.x,a.x,s.x),Aa(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xg=class extends mi{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Aa(e,r.x,a.x,s.x),Aa(e,r.y,a.y,s.y),Aa(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ph=class extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),n=a-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(wh(n,o.x,l.x,h.x,c.x),wh(n,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}},To=Object.freeze({__proto__:null,ArcCurve:Ig,CatmullRomCurve3:Dg,CubicBezierCurve:Ah,CubicBezierCurve3:Gg,EllipseCurve:xo,LineCurve:Rh,LineCurve3:Wg,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:Xg,SplineCurve:Ph}),jg=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,n=this.curves[a],o=n.getLength(),l=o===0?0:1-s/o;return n.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new To[r.type]().fromJSON(r))}return this}},Ji=class extends jg{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Rh(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Ch(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new Ah(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r),new Ae(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ph(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new xo(e,t,i,r,a,s,n,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yg=class Sc extends Ft{constructor(t=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Et(a,0,Math.PI*2);let s=[],n=[],o=[],l=[],h=[],c=1/i,u=new N,d=new Ae,p=new N,g=new N,v=new N,f=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=i;y++){let _=r+y*c*a,T=Math.sin(_),k=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*k,n.push(u.x,u.y,u.z),d.x=y/i,d.y=A/(t.length-1),o.push(d.x,d.y);let C=l[3*A+0]*T,U=l[3*A+1],M=l[3*A+0]*k;h.push(C,U,M)}}for(let y=0;y<i;y++)for(let _=0;_<t.length-1;_++){let T=_+y*t.length,k=T,A=T+t.length,C=T+t.length+1,U=T+1;s.push(k,A,U),s.push(C,U,A)}this.setIndex(s),this.setAttribute("position",new ot(n,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sc(t.points,t.segments,t.phiStart,t.phiLength)}},qg=class Mc extends Ft{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let s=[],n=[],o=[],l=[],h=new N,c=new Ae;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(n[d]/t+1)/2,c.y=(n[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ot(n,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Es=class Ec extends Ft{constructor(t=1,i=1,r=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),s=Math.floor(s);let c=[],u=[],d=[],p=[],g=0,v=[],f=r/2,m=0;y(),n===!1&&(t>0&&_(!0),i>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(p,2));function y(){let T=new N,k=new N,A=0,C=(i-t)/r;for(let U=0;U<=s;U++){let M=[],E=U/s,R=E*(i-t)+t;for(let I=0;I<=a;I++){let H=I/a,z=H*l+o,ne=Math.sin(z),ee=Math.cos(z);k.x=R*ne,k.y=-E*r+f,k.z=R*ee,u.push(k.x,k.y,k.z),T.set(ne,C,ee).normalize(),d.push(T.x,T.y,T.z),p.push(H,1-E),M.push(g++)}v.push(M)}for(let U=0;U<a;U++)for(let M=0;M<s;M++){let E=v[M][U],R=v[M+1][U],I=v[M+1][U+1],H=v[M][U+1];(t>0||M!==0)&&(c.push(E,R,H),A+=3),(i>0||M!==s-1)&&(c.push(R,I,H),A+=3)}h.addGroup(m,A,0),m+=A}function _(T){let k=g,A=new Ae,C=new N,U=0,M=T===!0?t:i,E=T===!0?1:-1;for(let I=1;I<=a;I++)u.push(0,f*E,0),d.push(0,E,0),p.push(.5,.5),g++;let R=g;for(let I=0;I<=a;I++){let H=I/a*l+o,z=Math.cos(H),ne=Math.sin(H);C.x=M*ne,C.y=f*E,C.z=M*z,u.push(C.x,C.y,C.z),d.push(0,E,0),A.x=z*.5+.5,A.y=ne*.5*E+.5,p.push(A.x,A.y),g++}for(let I=0;I<a;I++){let H=k+I,z=R+I;T===!0?c.push(z,z+1,H):c.push(z+1,z,H),U+=3}h.addGroup(m,U,T===!0?1:2),m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Jg=class Tc extends Es{constructor(t=1,i=1,r=32,a=1,s=!1,n=0,o=Math.PI*2){super(0,t,i,r,a,s,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(t){return new Tc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ki=class extends Ji{constructor(e){super(e),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ji().fromJSON(r))}return this}},Kg={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,s=Lh(e,0,a,i,!0),n=[];if(!s||s.next===s.prev)return n;let o,l,h,c,u,d,p;if(r&&(s=t0(e,t,s,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Ca(s,n,i,o,l,p,0),n}};function Lh(e,t,i,r,a){let s,n;if(a===d0(e,t,i,r)>0)for(s=t;s<i;s+=r)n=Ih(s,e[s],e[s+1],n);else for(s=i-r;s>=t;s-=r)n=Ih(s,e[s],e[s+1],n);return n&&Ts(n,n.next)&&(La(n),n=n.next),n}function gr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Ts(i,i.next)||pt(i.prev,i,i.next)===0)){if(La(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Ca(e,t,i,r,a,s,n){if(!e)return;!n&&s&&n0(e,r,a,s);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,s?$g(e,r,a,s):Zg(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),La(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=Qg(gr(e),t,i),Ca(e,t,i,r,a,s,2)):n===2&&e0(e,t,i,r,a,s):Ca(gr(e),t,i,r,a,s,1);break}}}function Zg(e){let t=e.prev,i=e,r=e.next;if(pt(t,i,r)>=0)return!1;let a=t.x,s=i.x,n=r.x,o=t.y,l=i.y,h=r.y,c=a<s?a<n?a:n:s<n?s:n,u=o<l?o<h?o:h:l<h?l:h,d=a>s?a>n?a:n:s>n?s:n,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&$r(a,o,s,l,n,h,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(e,t,i,r){let a=e.prev,s=e,n=e.next;if(pt(a,s,n)>=0)return!1;let o=a.x,l=s.x,h=n.x,c=a.y,u=s.y,d=n.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,m=bo(p,g,t,i,r),y=bo(v,f,t,i,r),_=e.prevZ,T=e.nextZ;for(;_&&_.z>=m&&T&&T.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&$r(o,c,l,u,h,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=v&&T.y>=g&&T.y<=f&&T!==a&&T!==n&&$r(o,c,l,u,h,d,T.x,T.y)&&pt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&$r(o,c,l,u,h,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=y;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=f&&T!==a&&T!==n&&$r(o,c,l,u,h,d,T.x,T.y)&&pt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Qg(e,t,i){let r=e;do{let a=r.prev,s=r.next.next;!Ts(a,s)&&Nh(a,r,r.next,s)&&Pa(a,s)&&Pa(s,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(s.i/i|0),La(r),La(r.next),r=e=s),r=r.next}while(r!==e);return gr(r)}function e0(e,t,i,r,a,s){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&h0(n,o)){let l=Uh(n,o);n=gr(n,n.next),l=gr(l,l.next),Ca(n,t,i,r,a,s,0),Ca(l,t,i,r,a,s,0);return}o=o.next}n=n.next}while(n!==e)}function t0(e,t,i,r){let a=[],s,n,o,l,h;for(s=0,n=t.length;s<n;s++)o=t[s]*r,l=s<n-1?t[s+1]*r:e.length,h=Lh(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(l0(h));for(a.sort(i0),s=0;s<a.length;s++)i=r0(a[s],i);return i}function i0(e,t){return e.x-t.x}function r0(e,t){let i=a0(e,t);if(!i)return t;let r=Uh(i,e);return gr(r,r.next),gr(i,i.next)}function a0(e,t){let i=t,r=-1/0,a,s=e.x,n=e.y;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===s))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do s>=i.x&&i.x>=l&&s!==i.x&&$r(n<h?s:r,n,l,h,n<h?r:s,n,i.x,i.y)&&(u=Math.abs(n-i.y)/(s-i.x),Pa(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&s0(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function s0(e,t){return pt(e.prev,e,t.prev)<0&&pt(t.next,e,e.next)<0}function n0(e,t,i,r){let a=e;do a.z===0&&(a.z=bo(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,o0(a)}function o0(e){let t,i,r,a,s,n,o,l,h=1;do{for(i=e,e=null,s=null,n=0;i;){for(n++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,h*=2}while(n>1);return e}function bo(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function l0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function $r(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function h0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!c0(e,t)&&(Pa(e,t)&&Pa(t,e)&&u0(e,t)&&(pt(e.prev,e,t.prev)||pt(e,t.prev,t))||Ts(e,t)&&pt(e.prev,e,e.next)>0&&pt(t.prev,t,t.next)>0)}function pt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Ts(e,t){return e.x===t.x&&e.y===t.y}function Nh(e,t,i,r){let a=ws(pt(e,t,i)),s=ws(pt(e,t,r)),n=ws(pt(i,r,e)),o=ws(pt(i,r,t));return!!(a!==s&&n!==o||a===0&&bs(e,i,t)||s===0&&bs(e,r,t)||n===0&&bs(i,e,r)||o===0&&bs(i,t,r))}function bs(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function ws(e){return e>0?1:e<0?-1:0}function c0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Nh(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Pa(e,t){return pt(e.prev,e,e.next)<0?pt(e,t,e.next)>=0&&pt(e,e.prev,t)>=0:pt(e,t,e.prev)<0||pt(e,e.next,t)<0}function u0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Uh(e,t){let i=new wo(e.i,e.x,e.y),r=new wo(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Ih(e,t,i,r){let a=new wo(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function La(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function wo(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d0(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}var Qr=class bc{static area(t){let i=t.length,r=0;for(let a=i-1,s=0;s<i;a=s++)r+=t[a].x*t[s].y-t[s].x*t[a].y;return r*.5}static isClockWise(t){return bc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],s=[];Dh(t),Oh(r,t);let n=t.length;i.forEach(Dh);for(let l=0;l<i.length;l++)a.push(n),n+=i[l].length,Oh(r,i[l]);let o=Kg.triangulate(r,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Dh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Oh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Ao=class wc extends Ft{constructor(t=new Ki([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(s,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,f=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:p0,_,T=!1,k,A,C,U;m&&(_=m.getSpacedPoints(c),T=!0,d=!1,k=m.computeFrenetFrames(c,!1),A=new N,C=new N,U=new N),d||(f=0,p=0,g=0,v=0);let M=o.extractPoints(h),E=M.shape,R=M.holes;if(!Qr.isClockWise(E)){E=E.reverse();for(let J=0,ce=R.length;J<ce;J++){let b=R[J];Qr.isClockWise(b)&&(R[J]=b.reverse())}}let I=Qr.triangulateShape(E,R),H=E;for(let J=0,ce=R.length;J<ce;J++){let b=R[J];E=E.concat(b)}function z(J,ce,b){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ce,b)}let ne=E.length,ee=I.length;function ge(J,ce,b){let be,W,ve,ue=J.x-ce.x,Re=J.y-ce.y,B=b.x-J.x,de=b.y-J.y,w=ue*ue+Re*Re,x=ue*de-Re*B;if(Math.abs(x)>Number.EPSILON){let L=Math.sqrt(w),$=Math.sqrt(B*B+de*de),ae=ce.x-Re/L,te=ce.y+ue/L,Ie=b.x-de/$,xe=b.y+B/$,we=((Ie-ae)*de-(xe-te)*B)/(ue*de-Re*B);be=ae+ue*we-J.x,W=te+Re*we-J.y;let He=be*be+W*W;if(He<=2)return new Ae(be,W);ve=Math.sqrt(He/2)}else{let L=!1;ue>Number.EPSILON?B>Number.EPSILON&&(L=!0):ue<-Number.EPSILON?B<-Number.EPSILON&&(L=!0):Math.sign(Re)===Math.sign(de)&&(L=!0),L?(be=-Re,W=ue,ve=Math.sqrt(w)):(be=ue,W=Re,ve=Math.sqrt(w/2))}return new Ae(be/ve,W/ve)}let q=[];for(let J=0,ce=H.length,b=ce-1,be=J+1;J<ce;J++,b++,be++)b===ce&&(b=0),be===ce&&(be=0),q[J]=ge(H[J],H[b],H[be]);let K=[],Ee,Oe=q.concat();for(let J=0,ce=R.length;J<ce;J++){let b=R[J];Ee=[];for(let be=0,W=b.length,ve=W-1,ue=be+1;be<W;be++,ve++,ue++)ve===W&&(ve=0),ue===W&&(ue=0),Ee[be]=ge(b[be],b[ve],b[ue]);K.push(Ee),Oe=Oe.concat(Ee)}for(let J=0;J<f;J++){let ce=J/f,b=p*Math.cos(ce*Math.PI/2),be=g*Math.sin(ce*Math.PI/2)+v;for(let W=0,ve=H.length;W<ve;W++){let ue=z(H[W],q[W],be);Z(ue.x,ue.y,-b)}for(let W=0,ve=R.length;W<ve;W++){let ue=R[W];Ee=K[W];for(let Re=0,B=ue.length;Re<B;Re++){let de=z(ue[Re],Ee[Re],be);Z(de.x,de.y,-b)}}}let Le=g+v;for(let J=0;J<ne;J++){let ce=d?z(E[J],Oe[J],Le):E[J];T?(C.copy(k.normals[0]).multiplyScalar(ce.x),A.copy(k.binormals[0]).multiplyScalar(ce.y),U.copy(_[0]).add(C).add(A),Z(U.x,U.y,U.z)):Z(ce.x,ce.y,0)}for(let J=1;J<=c;J++)for(let ce=0;ce<ne;ce++){let b=d?z(E[ce],Oe[ce],Le):E[ce];T?(C.copy(k.normals[J]).multiplyScalar(b.x),A.copy(k.binormals[J]).multiplyScalar(b.y),U.copy(_[J]).add(C).add(A),Z(U.x,U.y,U.z)):Z(b.x,b.y,u/c*J)}for(let J=f-1;J>=0;J--){let ce=J/f,b=p*Math.cos(ce*Math.PI/2),be=g*Math.sin(ce*Math.PI/2)+v;for(let W=0,ve=H.length;W<ve;W++){let ue=z(H[W],q[W],be);Z(ue.x,ue.y,u+b)}for(let W=0,ve=R.length;W<ve;W++){let ue=R[W];Ee=K[W];for(let Re=0,B=ue.length;Re<B;Re++){let de=z(ue[Re],Ee[Re],be);T?Z(de.x,de.y+_[c-1].y,_[c-1].x+b):Z(de.x,de.y,u+b)}}}G(),fe();function G(){let J=a.length/3;if(d){let ce=0,b=ne*ce;for(let be=0;be<ee;be++){let W=I[be];V(W[2]+b,W[1]+b,W[0]+b)}ce=c+f*2,b=ne*ce;for(let be=0;be<ee;be++){let W=I[be];V(W[0]+b,W[1]+b,W[2]+b)}}else{for(let ce=0;ce<ee;ce++){let b=I[ce];V(b[2],b[1],b[0])}for(let ce=0;ce<ee;ce++){let b=I[ce];V(b[0]+ne*c,b[1]+ne*c,b[2]+ne*c)}}r.addGroup(J,a.length/3-J,0)}function fe(){let J=a.length/3,ce=0;F(H,ce),ce+=H.length;for(let b=0,be=R.length;b<be;b++){let W=R[b];F(W,ce),ce+=W.length}r.addGroup(J,a.length/3-J,1)}function F(J,ce){let b=J.length;for(;--b>=0;){let be=b,W=b-1;W<0&&(W=J.length-1);for(let ve=0,ue=c+f*2;ve<ue;ve++){let Re=ne*ve,B=ne*(ve+1),de=ce+be+Re,w=ce+W+Re,x=ce+W+B,L=ce+be+B;se(de,w,x,L)}}}function Z(J,ce,b){l.push(J),l.push(ce),l.push(b)}function V(J,ce,b){re(J),re(ce),re(b);let be=a.length/3,W=y.generateTopUV(r,a,be-3,be-2,be-1);ye(W[0]),ye(W[1]),ye(W[2])}function se(J,ce,b,be){re(J),re(ce),re(be),re(ce),re(b),re(be);let W=a.length/3,ve=y.generateSideWallUV(r,a,W-6,W-3,W-2,W-1);ye(ve[0]),ye(ve[1]),ye(ve[3]),ye(ve[1]),ye(ve[2]),ye(ve[3])}function re(J){a.push(l[J*3+0]),a.push(l[J*3+1]),a.push(l[J*3+2])}function ye(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return f0(i,r,t)}static fromJSON(t,i){let r=[];for(let s=0,n=t.shapes.length;s<n;s++){let o=i[t.shapes[s]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new To[a.type]().fromJSON(a)),new wc(r,t.options)}},p0={generateTopUV:function(e,t,i,r,a){let s=t[i*3],n=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new Ae(s,n),new Ae(o,l),new Ae(h,c)]},generateSideWallUV:function(e,t,i,r,a,s){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],v=t[s*3],f=t[s*3+1],m=t[s*3+2];return Math.abs(o-c)<Math.abs(n-h)?[new Ae(n,1-l),new Ae(h,1-u),new Ae(d,1-g),new Ae(v,1-m)]:[new Ae(o,1-l),new Ae(c,1-u),new Ae(p,1-g),new Ae(f,1-m)]}};function f0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Ro=class Ac extends Ft{constructor(t=new Ki([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],s=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(s,3)),this.setAttribute("uv",new ot(n,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;Qr.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let y=g[f];Qr.isClockWise(y)===!0&&(g[f]=y.reverse())}let v=Qr.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let y=g[f];p=p.concat(y)}for(let f=0,m=p.length;f<m;f++){let y=p[f];a.push(y.x,y.y,0),s.push(0,0,1),n.push(y.x,y.y)}for(let f=0,m=v.length;f<m;f++){let y=v[f],_=y[0]+u,T=y[1]+u,k=y[2]+u;r.push(_,T,k),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return m0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let n=i[t.shapes[a]];r.push(n)}return new Ac(r,t.curveSegments)}};function m0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Fh=class Rc extends Ft{constructor(t=1,i=32,r=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(n+o,Math.PI),h=0,c=[],u=new N,d=new N,p=[],g=[],v=[],f=[];for(let m=0;m<=r;m++){let y=[],_=m/r,T=0;m===0&&n===0?T=.5/i:m===r&&l===Math.PI&&(T=-.5/i);for(let k=0;k<=i;k++){let A=k/i;u.x=-t*Math.cos(a+A*s)*Math.sin(n+_*o),u.y=t*Math.cos(n+_*o),u.z=t*Math.sin(a+A*s)*Math.sin(n+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(A+T,1-_),y.push(h++)}c.push(y)}for(let m=0;m<r;m++)for(let y=0;y<i;y++){let _=c[m][y+1],T=c[m][y],k=c[m+1][y],A=c[m+1][y+1];(m!==0||n>0)&&p.push(_,T,A),(m!==r-1||l<Math.PI)&&p.push(T,k,A)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},g0=class Cc extends Ft{constructor(t=1,i=.4,r=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:s},r=Math.floor(r),a=Math.floor(a);let n=[],o=[],l=[],h=[],c=new N,u=new N,d=new N;for(let p=0;p<=r;p++)for(let g=0;g<=a;g++){let v=g/a*s,f=p/r*Math.PI*2;u.x=(t+i*Math.cos(f))*Math.cos(v),u.y=(t+i*Math.cos(f))*Math.sin(v),u.z=i*Math.sin(f),o.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/a),h.push(p/r)}for(let p=1;p<=r;p++)for(let g=1;g<=a;g++){let v=(a+1)*p+g-1,f=(a+1)*(p-1)+g-1,m=(a+1)*(p-1)+g,y=(a+1)*p+g;n.push(v,f,y),n.push(f,m,y)}this.setIndex(n),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},zt=class extends Ma{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},v0=class extends zt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function As(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function _0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Rs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},x0=class extends Rs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(n===void 0)switch(this.getSettings_().endingStart){case hl:a=e,n=2*t-i;break;case cl:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case hl:s=e,o=2*i-t;break;case cl:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,f=-u*v+2*u*g-u*p,m=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*v+(1.5+d)*g+.5*p,_=d*v-d*g;for(let T=0;T!==n;++T)a[T]=f*s[h+T]+m*s[l+T]+y*s[o+T]+_*s[c+T];return a}},y0=class extends Rs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==n;++u)a[u]=s[l+u]*c+s[o+u]*h;return a}},S0=class extends Rs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Li=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new S0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new x0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case Un:t=this.InterpolantFactoryMethodLinear;break;case In:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Un;case this.InterpolantFactoryMethodSmooth:return In}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let n=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*n,s*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let n=0;n!==a;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,n,o,s),e=!1;break}s=o}if(r!==void 0&&_0(r))for(let n=0,o=r.length;n!==o;++n){let l=r[n];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===In,a=e.length-1,s=1;for(let n=1;n<a;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(r)o=!0;else{let c=n*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(n!==s){e[s]=e[n];let c=n*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++s}}if(a>0){e[s]=e[a];for(let n=a*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[n+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Li.prototype.TimeBufferType=Float32Array,Li.prototype.ValueBufferType=Float32Array,Li.prototype.DefaultInterpolation=Un;var Na=class extends Li{constructor(e,t,i){super(e,t,i)}};Na.prototype.ValueTypeName="bool",Na.prototype.ValueBufferType=Array,Na.prototype.DefaultInterpolation=qa,Na.prototype.InterpolantFactoryMethodLinear=void 0,Na.prototype.InterpolantFactoryMethodSmooth=void 0;var M0=class extends Li{};M0.prototype.ValueTypeName="color";var E0=class extends Li{};E0.prototype.ValueTypeName="number";var T0=class extends Rs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let h=l+n;l!==h;l+=4)di.slerpFlat(a,0,s,l-n,s,l,o);return a}},zh=class extends Li{InterpolantFactoryMethodLinear(e){return new T0(this.times,this.values,this.getValueSize(),e)}};zh.prototype.ValueTypeName="quaternion",zh.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Li{constructor(e,t,i){super(e,t,i)}};Ua.prototype.ValueTypeName="string",Ua.prototype.ValueBufferType=Array,Ua.prototype.DefaultInterpolation=qa,Ua.prototype.InterpolantFactoryMethodLinear=void 0,Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var b0=class extends Li{};b0.prototype.ValueTypeName="vector";var w0=class{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){n++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,n),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,n),s===n&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},A0=new w0,R0=class{constructor(e){this.manager=e!==void 0?e:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};R0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bh=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Co=new ht,kh=new N,Hh=new N,C0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},P0=class extends C0{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vh=class extends Bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new P0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gh=class extends Bh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Po="\\[\\]\\.:\\/",L0=new RegExp("["+Po+"]","g"),Lo="[^"+Po+"]",N0="[^"+Po.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",Lo),I0=/(WCOD+)?/.source.replace("WCOD",N0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lo),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lo),F0=new RegExp("^"+U0+I0+D0+O0+"$"),z0=["material","materials","bones","map"],B0=class{constructor(e,t,i){let r=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class oa{constructor(t,i,r){this.path=i,this.parsedPath=r||oa.parseTrackName(i),this.node=oa.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new oa.Composite(t,i,r):new oa(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(t){let i=F0.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=r.nodeName.substring(a+1);z0.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let n=0;n<s.length;n++){let o=s[n];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,s=i.propertyIndex;if(t||(t=oa.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[a];if(n===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=B0,ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray],ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wv=new Float32Array(1),Wh=new ht,k0=class{constructor(e,t,i=0,r=1/0){this.ray=new wl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Yn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(e,t=!0,i=[]){return No(e,this,i,t),i.sort(Xh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)No(e[r],this,i,t);return i.sort(Xh),i}};function Xh(e,t){return e.distance-t.distance}function No(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let s=e.children;for(let n=0,o=s.length;n<o;n++)No(s[n],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ia=new N;function Jt(e,t,i,r,a,s){let n=2*Math.PI*a/4,o=Math.max(s-2*a,0),l=Math.PI/4;Ia.copy(t),Ia[r]=0,Ia.normalize();let h=.5*n/(n+o),c=1-Ia.angleTo(e)/l;return Math.sign(Ia[i])===1?c*h:o/(n+o)+h+h*(1-c)}var jh=class extends ji{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;let s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;let n=new N,o=new N,l=new N(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new N,g=.5/r;for(let v=0,f=0;v<h.length;v+=3,f+=2)switch(n.fromArray(h,v),o.copy(n),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(n.x)+o.x*a,h[v+1]=l.y*Math.sign(n.y)+o.y*a,h[v+2]=l.z*Math.sign(n.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:p.set(1,0,0),u[f+0]=Jt(p,o,"z","y",a,i),u[f+1]=1-Jt(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[f+0]=1-Jt(p,o,"z","y",a,i),u[f+1]=1-Jt(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[f+0]=1-Jt(p,o,"x","z",a,e),u[f+1]=Jt(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[f+0]=1-Jt(p,o,"x","z",a,e),u[f+1]=1-Jt(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[f+0]=1-Jt(p,o,"x","y",a,e),u[f+1]=1-Jt(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[f+0]=Jt(p,o,"x","y",a,e),u[f+1]=1-Jt(p,o,"y","x",a,t);break}}};function H0(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),s={},n={},o=e[0].morphTargetsRelative,l=new Ft,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.morphAttributes[p])}if(t){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in s){let u=Yh(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in n){let u=n[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<n[c].length;++v)p.push(n[c][v][d]);let g=Yh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Yh(e){let t,i,r,a=-1,s=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*i}let n=new t(s),o=new Lt(n,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/i;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<i;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else n.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var Be="#101010",Ve="#f4f3ee",Da='"DT Punk", Impact, sans-serif',Uo='"Inter Tight", "Arial Black", Arial, sans-serif',V0=(e,t,i)=>Math.max(t,Math.min(i,e)),qh=()=>{let e=document.createElement("canvas");return e.width=e.height=512,e},G0=e=>()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function vt(e,t,i){e.beginPath(),t.forEach(([r,a],s)=>s?e.lineTo(r,a):e.moveTo(r,a)),e.closePath(),i&&(e.fillStyle=i,e.fill())}function bt(e,t,i,r,a,s,n){e.beginPath(),e.roundRect(t,i,r,a,s),n&&(e.fillStyle=n,e.fill())}function ct(e,t,i,r,a){e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function ea(e,t,i,r,a,s=128,n=128){let o=[];for(let l=0;l<t*2;l++){let h=l/(t*2)*Math.PI*2-Math.PI/2,c=l%2?r:i;o.push([s+Math.cos(h)*c,n+Math.sin(h)*c])}vt(e,o,a)}function wt(e,t,{x:i=128,y:r=128,width:a=190,size:s=60,color:n=Be,font:o=Uo,weight:l=900,gap:h=1,stroke:c=null,strokeWidth:u=0}={}){let d=s,p=()=>{e.font=`${l} ${d}px ${o}`};for(p();d>10&&Math.max(...t.map(v=>e.measureText(v).width))>a;)d-=1,p();e.textAlign="center",e.textBaseline="middle";let g=d*h;return t.forEach((v,f)=>{let m=r+(f-(t.length-1)/2)*g;c&&(e.lineJoin="round",e.lineWidth=u,e.strokeStyle=c,e.strokeText(v,i,m)),e.fillStyle=n,e.fillText(v,i,m)}),d}function Jh(e,t,i,r,a,s,{font:n=Uo,weight:o=900,spacing:l=1.16,bottom:h=!1,cx:c=128,cy:u=128}={}){e.save(),e.font=`${o} ${a}px ${n}`,e.fillStyle=s,e.textAlign="center",e.textBaseline="middle";let d=[...t],p=d.map(f=>e.measureText(f).width*l),g=p.reduce((f,m)=>f+m,0),v=r+(h?g/2/i:-g/2/i);d.forEach((f,m)=>{let y=p[m]/2/i;v+=h?-y:y,e.save(),e.translate(c+Math.cos(v)*i,u+Math.sin(v)*i),e.rotate(h?v-Math.PI/2:v+Math.PI/2),e.fillText(f,0,0),e.restore(),v+=h?-y:y}),e.restore()}function Io(e,t,i,{angle:r=.55,step:a=7,weight:s=.62,from:n=-.15}={}){e.save(),t(),e.clip(),e.translate(128,128),e.rotate(r),e.fillStyle=i;for(let o=-200;o<200;o+=a){let l=Math.round(o/a)%2?a/2:0;for(let h=-200;h<200;h+=a){let c=V0((h+l)/230+o/420+.5+n,0,1),u=c*a*s;u<.45||(e.beginPath(),e.arc(h+l,o,u,0,7),e.fill())}}e.restore()}function Cs(e,t,i,r,a){let s=[];for(let n=0;n<10;n++){let o=n*Math.PI/5-Math.PI/2,l=n%2?r*.42:r;s.push([t+Math.cos(o)*l,i+Math.sin(o)*l])}vt(e,s,a)}function W0(e,t,i,r,a,s){e.save(),e.translate(t,i),e.scale(r,r),e.beginPath(),e.roundRect(-30,-36,60,50,22),e.fillStyle=a,e.fill(),e.fillRect(-17,8,34,22),ct(e,-13,-8,10,s),ct(e,13,-8,10,s),vt(e,[[0,2],[-5,12],[5,12]],s),e.fillStyle=s;for(let n=-1;n<2;n++)e.fillRect(n*9-1.2,18,2.4,12);e.restore()}function X0(e,t,i,r,a,s,n){e.fillStyle=s;for(let o=0;o<r;){let l=1+n()*3;e.fillRect(t+o,i,l,a),o+=l+1+n()*3}}var Kh=(e,t,i,r,a,s,n,o=14)=>{e.save(),e.beginPath(),e.rect(t,i,r,a),e.clip(),e.fillStyle=s,e.fillRect(t,i,r,a),e.fillStyle=n;for(let l=-a;l<r+a;l+=o*2)vt(e,[[t+l,i+a],[t+l+o,i+a],[t+l+o+a,i],[t+l+a,i]],n);e.restore()};function Zi(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?Be:Ve:e===Be?Ve:Be}var j0={ask(e,t){bt(e,26,40,204,140,34,t),vt(e,[[70,170],[58,226],[124,172]],t),wt(e,["ASK","DEN"],{y:110,size:62,color:Zi(t),font:Da,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),bt(e,18,84,220,88,44,t),bt(e,88,84,80,88,4,Ve);for(let[i,r]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])ct(e,i,r,5,Be);e.restore(),wt(e,["OUCH"],{y:222,size:44,font:Da,weight:400,color:Ve})},camera(e,t){bt(e,28,76,200,130,16,Be),bt(e,86,52,70,34,8,Be),ct(e,128,142,48,Ve),ct(e,128,142,34,Be),ct(e,116,130,9,Ve),ct(e,200,98,9,t)},file(e,t){vt(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],Ve),vt(e,[[160,26],[200,66],[160,66]],"#9c9c98"),wt(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===Ve?Be:t,gap:1.1})},cursor(e,t){ea(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),vt(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],Be),e.lineWidth=2.4,e.strokeStyle=Ve,e.stroke(),e.restore()},receipt(e,t){let i=[[52,22],[204,22]];for(let r=0;r<=8;r++)i.push([204-r*19,232-(r%2?14:0)]);vt(e,i,Ve),e.fillStyle="#7d7d79";for(let r=0;r<4;r++)e.fillRect(70,48+r*22,r%2?76:116,8);wt(e,["$$$"],{y:176,size:62,color:t===Ve?Be:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=Ve,e.fill(),vt(e,[[176,186],[214,236],[136,200]],Ve),wt(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===Ve?Be:t,font:Da,weight:400})},root(e){bt(e,24,44,208,168,8,Be),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=Ve,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),wt(e,["x"],{y:130,width:60,size:60,color:Ve,font:Da,weight:400})},sun(e,t){ea(e,14,118,84,t),ct(e,128,128,70,Ve),bt(e,66,100,54,36,12,Be),bt(e,136,100,54,36,12,Be),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=Be,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){ea(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),bt(e,-16,-40,32,130,12,Be),ct(e,0,-56,38,Be),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),bt(e,-92,-48,184,96,12,Ve),e.fillStyle=t===Ve?Be:t,e.fillRect(-24,-48,116,96),e.restore(),wt(e,["CTRL+Z"],{width:150,size:36,color:Be})},pencil(e,t){e.save(),e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=Be,e.fillRect(-112,-22,28,44),vt(e,[[52,-22],[100,0],[52,22]],Ve),vt(e,[[84,-7],[100,0],[84,7]],Be),e.restore()},car(e,t){bt(e,22,118,212,64,22,t),vt(e,[[66,122],[96,72],[168,72],[198,122]],t),vt(e,[[86,118],[104,86],[128,86],[128,118]],Be),vt(e,[[138,118],[138,86],[162,86],[180,118]],Be),ct(e,78,184,24,Be),ct(e,180,184,24,Be),ct(e,78,184,9,Ve),ct(e,180,184,9,Ve)},house(e,t){vt(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=Ve,e.fillRect(52,122,152,100),e.fillStyle=Be,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){bt(e,26,26,204,204,26,Be),e.lineWidth=7,e.strokeStyle=Ve,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[i,r]of[[74,80],[72,180],[184,86],[182,176]])ct(e,i,r,18,t)},fork(e,t){ct(e,128,128,112,Ve),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===Ve?"#b5b5b1":t,e.stroke(),e.fillStyle=Be,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),bt(e,84,106,36,22,10,Be),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){ea(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=Be,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){bt(e,22,62,212,132,66,Be),[28,58,92,46,76,34,54,22].forEach((i,r)=>bt(e,52+r*21.5,128-i/2,11,i,5.5,r%3===2?t:Ve))},bot(e,t){bt(e,40,62,176,152,28,Ve),e.fillStyle=Be,e.fillRect(122,28,12,38),ct(e,128,26,12,t===Ve?Be:t),ct(e,94,124,18,Be),ct(e,162,124,18,Be),e.fillStyle=Be,e.fillRect(88,172,80,12)}};function Y0(e,t,i,r,a){let s=r===Ve?"#cfcfca":r;ct(e,128,128,122,Be),ct(e,128,128,86,s),Io(e,()=>{e.beginPath(),e.arc(128,128,86,0,7)},Be,{step:6.5,weight:.5,angle:.7,from:-.22}),e.lineWidth=2,e.strokeStyle=Ve,e.beginPath(),e.arc(128,128,117,0,7),e.stroke(),e.lineWidth=3,e.beginPath(),e.arc(128,128,89,0,7),e.stroke();let[n,o]=i;Jh(e,n,103,-Math.PI/2,19,Ve),Jh(e,o,103,Math.PI/2,15,Ve,{bottom:!0}),Cs(e,22,128,8,Ve),Cs(e,234,128,8,Ve),e.save(),e.translate(128,128),e.rotate((a()-.5)*.24),e.scale(.56,.56),e.translate(-128,-128),j0[t](e,r===Ve?"#8a8a86":r),e.restore()}var ta=(e,t)=>{let i=[];for(let r of e.split(" ")){let a=i[i.length-1];a&&`${a} ${r}`.length<=t?i[i.length-1]=`${a} ${r}`:i.push(r)}return i},Zh=[(e,t,i,r)=>{let a=i===Ve?Ve:i,s=Zi(a);ea(e,18,122,98,Be,133,134),ea(e,18,118,94,a),Io(e,()=>{let n=[];for(let o=0;o<36;o++){let l=o/36*Math.PI*2-Math.PI/2,h=o%2?94:118;n.push([128+Math.cos(l)*h,128+Math.sin(l)*h])}vt(e,n)},s===Be?"rgba(0,0,0,.72)":"rgba(255,255,255,.5)",{step:7,weight:.52}),e.save(),e.translate(128,128),e.rotate(-.1+r()*.1),e.translate(-128,-128),wt(e,ta(t,8),{width:164,size:66,y:126,color:s,gap:1.02,stroke:s===Be?Ve:Be,strokeWidth:6}),e.restore(),wt(e,["NOT RATED"],{y:200,width:90,size:13,color:s})},(e,t,i,r)=>{let a=i===Ve?Be:i;e.save(),e.translate(128,128),e.rotate(-.12),e.translate(-128,-128),e.beginPath(),e.roundRect(8,58,240,140,10),e.fillStyle=Ve,e.fill();for(let[s,n]of[[8,128],[248,128]])e.save(),e.globalCompositeOperation="destination-out",ct(e,s,n,15,"#000"),e.restore();e.fillStyle=a,e.fillRect(16,66,224,25),wt(e,["ADMIT ONE"],{y:79,width:200,size:18,color:Zi(a)===Be?Be:Ve,weight:800});for(let s=95;s<190;s+=8)e.fillStyle="#8c8c88",e.fillRect(190,s,2.4,4.4);wt(e,ta(t,11),{x:102,y:136,width:158,size:42,color:Be,gap:1.05}),X0(e,198,100,40,62,Be,r),wt(e,["N\xBA 00"+(10+Math.floor(r()*89))],{x:218,y:176,width:40,size:12,color:Be}),e.restore()},(e,t,i)=>{let r=i===Ve?"#cfcfca":i;e.save(),e.translate(128,128),e.rotate(.08),e.translate(-128,-128),bt(e,6,44,244,168,12,Be),Kh(e,14,52,228,26,r,Be),Kh(e,14,178,228,26,r,Be),vt(e,[[46,96],[62,124],[30,124]],r),wt(e,["!"],{x:46,y:113,size:22,color:Zi(r)}),wt(e,["WARNING"],{x:146,y:98,width:150,size:30,color:r,weight:900}),wt(e,ta(t,13),{x:128,y:146,width:214,size:38,color:Ve,gap:1.05}),e.restore()},(e,t,i,r)=>{let a=ta(t,9),s=i===Ve?"#cfcfca":i,n=[[Uo,900],[Da,400],['Georgia, "Times New Roman", serif',700]],o=a.length,l=Math.min(64,190/o),h=0;a.forEach((c,u)=>{let d=c.split(" "),p=128+(u-(o-1)/2)*l,g=d.map((y,_)=>{let[T,k]=n[(h+_)%n.length];return e.font=`${k} ${l*.62}px ${T}`,e.measureText(y).width+18}),v=g.reduce((y,_)=>y+_,0),f=Math.min(1,226/v),m=128-v*f/2;d.forEach((y,_)=>{let[T,k]=n[h%n.length],A=[Be,Ve,s,Ve][h%4];h++,e.save();let C=m+g[_]*f/2;e.translate(C,p+(r()-.5)*6),e.rotate((r()-.5)*.16);let U=g[_]*f/2,M=l*.47,E=[];for(let R=0;R<=10;R++)E.push([-U+R/10*U*2,-M+(r()-.5)*3.4]);for(let R=0;R<=10;R++)E.push([U-R/10*U*2,M+(r()-.5)*3.4]);vt(e,E,A),wt(e,[y],{x:0,y:1,width:g[_]*f-10,size:l*.62,color:Zi(A),font:T,weight:k}),e.restore(),m+=g[_]*f})})},(e,t,i,r)=>{let a=i===Ve?"#cfcfca":i;ct(e,128,118,104,Be),ct(e,128,118,96,a),Io(e,()=>{e.beginPath(),e.arc(128,118,96,0,7)},Zi(a)===Be?"rgba(0,0,0,.6)":"rgba(255,255,255,.45)",{step:6,weight:.55,angle:-.5}),W0(e,128,70,1.05,Ve,Be),Cs(e,52,70,13,Ve),Cs(e,204,70,13,Ve);let s=ta(t,12),n=s.length>1?74:54;vt(e,[[6,150-n/2+12],[38,150-n/2+12],[38,150+n/2+12],[6,150+n/2+12],[20,162]],Be),vt(e,[[250,150-n/2+12],[218,150-n/2+12],[218,150+n/2+12],[250,150+n/2+12],[236,162]],Be),bt(e,26,150-n/2,204,n,3,Ve),e.strokeStyle=Be,e.lineWidth=3,e.strokeRect(31,150-n/2+5,194,n-10),wt(e,s,{y:150,width:180,size:44,color:Be,gap:1.04})}],$h=["$2.99","1 NIGHT","$0.99","NEW","REWIND","50\xA2","STAFF PICK","2 FOR 1"];function q0(e,t,i){let r=i===Ve?Ve:i;ct(e,128,128,116,r),e.lineWidth=5,e.strokeStyle=Zi(r),e.setLineDash([3,9]),e.lineCap="round",e.beginPath(),e.arc(128,128,100,0,7),e.stroke(),e.setLineDash([]),wt(e,ta(t,6),{width:170,size:84,color:Zi(r),gap:.98})}var J0={portfolio:["ask","MAKE THE LOGO BIGGER",["APPROVED BY NOBODY","NO REVISIONS"]],basepoint:["bandaid","TAKE YOUR VITAMINS",["DOCTOR NOT INCLUDED","SHAKE WELL"]],"street-observations":["camera","SAY CHEESE",["NO FLASH NO MERCY","SHOT ON THE RUN"]],template:["file","BE KIND REWIND",["FINAL FINAL FINAL","DO NOT OVERWRITE"]],prime:["cursor","ONE MORE CLICK",["ADD TO CART OR ELSE","NO REFUNDS"]],sabsus:["receipt","CA-CHING!",["CASH ONLY FOREVER","KEEP THE CHANGE"]],janna:["bonjour","MERCI BEAUCOUP",["LE\xC7ON NUM\xC9RO UN","R\xC9P\xC9TEZ"]],"root-framer":["root","SHOW YOUR WORK",["MATH IS PUNK","NO CALCULATORS"]],sunfreaks:["sun","WEAR SUNSCREEN",["SPF 50 FOREVER","STAY WEIRD"]],airtexno:["wrench","IT WORKS ON MY MACHINE",["HAVE YOU TRIED RESTARTING","SERVICE DUE"]],"concept-undo-studio":["eraser","NEW RELEASE",["NOTHING IS PERMANENT","CTRL+Z"]],"concept-root-square-explorations":["pencil","STILL A SKETCH",["DO NOT ERASE","DRAFT 41"]],"concept-al-futtaim-themes":["car","CAN IT POP MORE?",["CHECK ENGINE LIGHT","NO PARKING"]],"sabsus-platform":["fork","ORDER UP!",["THE KITCHEN IS OPEN","TABLE 12"]],mortgage:["house","SWEET LOAN",["INTEREST NOT INCLUDED","SIGN HERE"]],node:["nodes","IF THIS THEN WHY",["ALL WIRED UP","DO NOT UNPLUG"]],restaurant:["fork","TABLE FOR TWO",["NO SUBSTITUTIONS","TIP YOUR WAITER"]],wallet:["scissors","BAD HAIR DAY",["JUST THE ENDS PLEASE","WALK-INS OK"]],wave:["wave","TURN IT UP",["LOUD IS A FEATURE","NO SKIPPING"]],"experiment-chat-portfolio":["bot","NOT A BOT",["ASK ME ANYTHING","BEEP BOOP"]]};function K0(e,t){let i=qh(),r=i.getContext("2d"),a=14;for(let n=0;n<32;n++){let o=n/32*Math.PI*2;r.drawImage(e,Math.cos(o)*a,Math.sin(o)*a)}r.globalCompositeOperation="source-in",r.fillStyle=Ve,r.fillRect(0,0,512,512),r.globalCompositeOperation="source-over",r.drawImage(e,0,0),r.globalCompositeOperation="source-atop";for(let n=0;n<1500;n++){r.globalAlpha=.08+t()*.3,r.fillStyle=t()<.5?"#000":"#fff";let o=.6+t()*t()*3;r.fillRect(t()*512,t()*512,o,o)}r.strokeStyle="#fff";for(let n=0;n<16;n++){r.globalAlpha=.12+t()*.3,r.lineWidth=.6+t()*.9;let o=t()*512,l=t()*512,h=-.7+t()*.4,c=30+t()*140;r.beginPath(),r.moveTo(o,l),r.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),r.stroke()}for(let n=0;n<90;n++){let o=t()*7,l=512*(.36+t()*.14);r.globalAlpha=.2+t()*.5,r.fillStyle=Ve,r.fillRect(512/2+Math.cos(o)*l,512/2+Math.sin(o)*l,1+t()*5,1+t()*3)}r.globalAlpha=.13;let s=r.createLinearGradient(512*.1,0,512*.72,512*.9);return s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.46,"rgba(255,255,255,1)"),s.addColorStop(.6,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,512,512),r.globalAlpha=1,r.globalCompositeOperation="source-over",i}function Do(e,t){let i=qh(),r=G0(t),a=i.getContext("2d");return a.scale(2,2),e(a,r),K0(i,r)}function Qh(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=null;for(let o=0;o<r.length;o+=4){let l=r[o],h=r[o+1],c=r[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,s=[l,h,c])}if(a<60)return null;let n=238/Math.max(...s);return`rgb(${s.map(o=>Math.round(o*n)).join(",")})`}function ec(e,t=0,i=null){let r=J0[e];if(!r)return[];let[a,s,n]=r,o=i||Ve,l=t*131+7;return[Do((h,c)=>Zh[t%Zh.length](h,s,o,c),l),Do((h,c)=>Y0(h,a,n,o,c),l+1),Do(h=>q0(h,$h[t%$h.length],o),l+2)]}var ai=16,ia=48,Ps=[3,11,9,8,7],Oo=Ps.reduce((e,t)=>e+t,0),Oa=22,Fo=2,ra=5,vr=Oo*ai,Z0=Oa*ia,Fa=vr*ra+Z0,At=()=>new N,si=e=>e*e*(3-2*e),$0=e=>Math.max(0,Math.min(1,e));function Q0(e,t){let i=Fa*Fo,r=new Float32Array(i*3),a=new Float32Array(i*3),s=new Float32Array(i*4),n=new Ft,o=new Lt(r,3).setUsage(Dn),l=new Lt(a,3).setUsage(Dn),h=new Lt(s,4).setUsage(Dn);n.setAttribute("position",o),n.setAttribute("normal",l),n.setAttribute("aG",h);let c=[],u=(F,Z,V)=>{for(let se=0;se<Z-1;se++)for(let re=0;re<V;re++){let ye=F+se*V+re,J=F+se*V+(re+1)%V,ce=ye+V,b=J+V;c.push(ye,J,ce,J,b,ce)}};for(let F=0;F<Fo;F++){let Z=F*Fa;for(let V=0;V<ra;V++)u(Z+V*vr,Oo,ai);u(Z+ra*vr,Oa,ia)}n.setIndex(c);let d={value:0},p=new zt({color:1184278,roughness:.5,metalness:0,envMap:e,envMapIntensity:1.65}),g=t(.1);p.onBeforeCompile=(F,Z)=>{g(F,Z),F.uniforms.uRubber=d,F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aG;varying vec4 vG;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vG = aG;`).replace("vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;","vBoneY = (modelMatrix * vec4(transformed, 1.)).y;"),F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
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
 }`)};let v=new gt(n,p);v.frustumCulled=!1,v.visible=!1;let f=At(),m=At(),y=At(),_=At(),T=At(),k=At(),A=At(),C=At(),U=At(),M=At(),E=At(),R=new N(0,0,1),I=(F,Z,V,se,re,ye)=>{r[F*3]=Z.x,r[F*3+1]=Z.y,r[F*3+2]=Z.z,s[F*4]=V,s[F*4+1]=se,s[F*4+2]=re,s[F*4+3]=ye},H=(F,Z,V,se,re,ye)=>{let J=ye*ye,ce=J*ye;return F.x=.5*(2*V.x+(se.x-Z.x)*ye+(2*Z.x-5*V.x+4*se.x-re.x)*J+(3*V.x-Z.x-3*se.x+re.x)*ce),F.y=.5*(2*V.y+(se.y-Z.y)*ye+(2*Z.y-5*V.y+4*se.y-re.y)*J+(3*V.y-Z.y-3*se.y+re.y)*ce),F.z=.5*(2*V.z+(se.z-Z.z)*ye+(2*Z.z-5*V.z+4*se.z-re.z)*J+(3*V.z-Z.z-3*se.z+re.z)*ce),F},z=Array.from({length:8},At),ne=[1.3,1.17,1.05,.95];function ee(F,Z,V,se,re,ye){let J=F*Fa+Z*vr;z[1].copy(V[0]),z[2].copy(V[1]),z[3].copy(V[2]),z[4].copy(V[3]),z[5].copy(V[4]),z[0].copy(z[1]).multiplyScalar(2).sub(z[2]),A.copy(z[5]).sub(z[4]).normalize(),z[6].copy(z[5]).addScaledVector(A,se*1.05),z[7].copy(z[6]).addScaledVector(A,se);let ce=0,b=0,be=[0,0,0,0];T.copy(z[1]);let W=0;for(let de=1;de<=4;de++)W+=z[de].distanceTo(z[de+1]||z[de]),de<=4&&(be[de-1]=W);let ve=0,ue=Ps.length-1,Re=!1,B=0;for(let de=0;de<Ps.length;de++){let w=Ps[de];for(let x=0;x<w;x++,b++){let L=x/w;H(_,z[de],z[de+1],z[de+2],z[Math.min(7,de+3)],L),H(A,z[de],z[de+1],z[de+2],z[Math.min(7,de+3)],L+.02),f.copy(A).sub(_).normalize(),ce+=b?_.distanceTo(T):0,T.copy(_),m.copy(R).addScaledVector(f,-R.dot(f)).normalize(),y.copy(f).cross(m).normalize();let $;de===0?$=ne[0]*(1.02+.1*L):de<ue?$=(ne[de-1]+(ne[de]-ne[de-1])*si(L))*(1-.075*Math.sin(Math.PI*L)):$=ne[3]*Math.sqrt(Math.max(0,1-L*L)),ve=se*$*ye;let ae=de===1?L:de>1?1:0,te=re&&de===1&&ae>re-.16&&ae<=re;if(re&&(de>1||de===1&&ae>re)){Re||(Re=!0,B=ve),H(_,z[1],z[2],z[3],z[4],re),A.copy(_),H(_,z[0],z[1],z[2],z[3],0),_.copy(A),ve=se*.94*ye;for(let xe=0;xe<ai;xe++){let we=xe/ai*Math.PI*2;E.copy(_).addScaledVector(m,Math.cos(we)*ve*.92).addScaledVector(y,Math.sin(we)*ve),I(J+b*ai+xe,E,(xe/ai+.5)%1-.5,ce,0,1)}continue}te&&(ve*=1+.1*si($0(1-Math.abs((ae-(re-.08))/.08))));let Ie=0;for(let xe=0;xe<3;xe++)Ie=Math.max(Ie,Math.exp(-(((ce-be[xe+1-1])/(.22*(xe?.85:1)))**2)));for(let xe=0;xe<ai;xe++){let we=xe/ai*Math.PI*2;E.copy(_).addScaledVector(m,Math.cos(we)*ve*.93).addScaledVector(y,Math.sin(we)*ve),I(J+b*ai+xe,E,(xe/ai+.5)%1-.5,ce,Ie,1)}}}}let ge=At(),q=At(),K=At(),Ee=At(),Oe=At(),Le=[0,0,0,0];function G(F,Z,V,se,re,ye,J){let ce=F*Fa+ra*vr;ge.set(0,0,0),q.set(0,0,0);for(let ue=0;ue<4;ue++)ge.add(Z[ue]),q.add(V[ue]);ge.multiplyScalar(.25),q.multiplyScalar(.25),Ee.copy(Z[0]).sub(Z[3]);let b=Ee.length()/2+ye*1.28;Ee.normalize(),Oe.copy(V[0]).sub(V[3]);let be=Oe.length()/2+.46;Oe.normalize(),K.copy(se);let W=K.distanceTo(q)+q.distanceTo(ge)+.32,ve=0;for(let ue=0;ue<Oa;ue++){let Re=ue/(Oa-1),B,de,w;if(Re<.3){let L=Re/.3;_.copy(K).addScaledVector(re,.7*(1-L)).lerp(q,si(L)*.55),B=.98+(be-.98)*si(L)*.6,de=.72+(.56-.72)*si(L)}else if(Re<.5){let L=(Re-.3)/.2;T.copy(K).lerp(q,.55),_.copy(T).lerp(q,si(L)),B=.98+(be-.98)*.6+(be-(.98+(be-.98)*.6))*si(L),de=.56+(.5-.56)*si(L)}else{let L=(Re-.5)/.5;if(_.copy(q).lerp(ge,L),L>.9&&_.addScaledVector(A.copy(ge).sub(q).normalize(),(L-.9)*2.4),B=be+(b-be)*si(L),de=.5+(.42-.5)*si(L),L>.92){let $=(L-.92)/.08,ae=Math.sqrt(Math.max(0,1-$*$*.86));B*=.9+.1*ae,de*=ae}}ue&&(ve+=_.distanceTo(T.copy(M))),M.copy(_),Re<.5?f.copy(q).sub(K).normalize():f.copy(ge).sub(q).normalize(),U.copy(R).addScaledVector(f,-R.dot(f)).normalize(),y.copy(f).cross(U).normalize();let x=J;for(let L=0;L<4;L++)Le[L]=A.copy(Z[L]).sub(ge).dot(y);for(let L=0;L<ia;L++){let $=L/ia*Math.PI*2,ae=Math.cos($),te=Math.sin($),Ie=Math.sign(te)*Math.abs(te)**.62*B*x,xe=Math.sign(ae)*Math.abs(ae)**.82*de*x;if(ae>0&&Re>.62){let we=0;for(let He=0;He<4;He++)we=Math.max(we,Math.exp(-(((Ie-Le[He])/.24)**2)));xe+=we*.16*si((Re-.62)/.3)*x}E.copy(_).addScaledVector(y,Ie).addScaledVector(U,xe),I(ce+ue*ia+L,E,B?Math.max(-1,Math.min(1,Ie/(B*x||1))):0,ve,W,0)}}}function fe(){let F=(Z,V,se)=>{for(let re=0;re<V;re++)for(let ye=0;ye<se;ye++){let J=Z+re*se+ye,ce=Z+re*se+(ye+1)%se,b=Z+re*se+(ye+se-1)%se,be=Z+Math.min(V-1,re+1)*se+ye,W=Z+Math.max(0,re-1)*se+ye,ve=r[ce*3]-r[b*3],ue=r[ce*3+1]-r[b*3+1],Re=r[ce*3+2]-r[b*3+2],B=r[be*3]-r[W*3],de=r[be*3+1]-r[W*3+1],w=r[be*3+2]-r[W*3+2],x=ue*w-Re*de,L=Re*B-ve*w,$=ve*de-ue*B,ae=Math.hypot(x,L,$);if(ae<1e-7){x=B,L=de,$=w;let te=Math.hypot(x,L,$)||1;x/=te,L/=te,$/=te}else x/=ae,L/=ae,$/=ae;a[J*3]=x,a[J*3+1]=L,a[J*3+2]=$}};for(let Z=0;Z<Fo;Z++){let V=Z*Fa;for(let se=0;se<ra;se++)F(V+se*vr,Oo,ai);F(V+ra*vr,Oa,ia)}}return{mesh:v,finger:ee,palm:G,commit(F){d.value=F==="full"?1:0,fe(),o.needsUpdate=!0,l.needsUpdate=!0,h.needsUpdate=!0,v.visible=!0},hide(){v.visible=!1}}}var Ls=new N(0,0,1),Wt=(e,t,i)=>Math.max(t,Math.min(i,e)),ut=(e,t,i)=>e+(t-e)*i,Ns=e=>e*e*(3-2*e);function zo(e,t=0){let i=new ys;i.background=new je(526346);let r=(n,o,l,h,c,u)=>{let d=new gt(new qt(n,o),new Xi({color:new je(u,u,u),side:hi}));d.position.set(l,h,c),d.lookAt(0,0,0),i.add(d)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2),t&&r(14,10,0,1,10,t);let a=new fo(e),s=a.fromScene(i,.025).texture;return a.dispose(),s}function tc(e=256,t=3){let i=document.createElement("canvas");i.width=i.height=e;let r=i.getContext("2d"),a=r.createImageData(e,e);for(let n=0;n<a.data.length;n+=4){let o=120+Math.random()*90;a.data[n]=a.data[n+1]=a.data[n+2]=o,a.data[n+3]=255}r.putImageData(a,0,0);let s=new qi(i);return s.wrapS=s.wrapT=Ha,s.repeat.set(t,t),s}var Ni=(e,t,i,r,a=0,s=0,n=0)=>(a&&e.rotateX(a),s&&e.rotateY(s),n&&e.rotateZ(n),e.translate(t,i,r),e),ev=e=>e.index?e.toNonIndexed():e,Bo=e=>{let t=e.map(ev);return t.forEach(i=>{Object.keys(i.attributes).forEach(r=>{r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r)})}),H0(t)};function Us(e,t,i,r,a,s,n,o,l){return e.moveTo(t+s,i),e.lineTo(r-n,i),e.quadraticCurveTo(r,i,r,i+n),e.lineTo(r,a-o),e.quadraticCurveTo(r,a,r-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,i+s),e.quadraticCurveTo(t,i,t+s,i),e}function ko(e,t,i,r=0,a=0){return Us(new Ki,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}function tv(e,t,i,r=0,a=0){return Us(new Ji,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}var gi=18.7,vi=10.3,Is=2.5,iv={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},ni={w:7.9,h:4.9,y:-.15},Ds={x:5.25,y:-.15},$i=(e,t,i=0)=>{let{x0:r,x1:a,y0:s,y1:n,outer:o,inner:l}=iv,h=r-i,c=a+i,u=s-i,d=n+i,p=o+i*.6,g=l+i*.6,v=new e;return t<0?Us(v,-c,u,-h,d,p,g,g,p):Us(v,h,u,c,d,g,p,p,g)};function rv(){let e=1024/gi,t=564/vi,i=1024/2048,r=y=>(y+gi/2)*e,a=y=>(vi/2-y)*t,s=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=564,y},n=s(),o=s(),l=s(),h=n.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=y=>{let _=document.createElement("canvas");return _.width=_.height=6,y(_.getContext("2d")),_};h.fillStyle=h.createPattern(d(y=>{y.fillStyle="#050505",y.fillRect(0,0,6,6),y.fillStyle="#121212",y.fillRect(.5,.5,5,5),y.fillStyle="#1f1f1f",y.fillRect(.5,.5,5,1),y.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(y=>{y.fillStyle="#242424",y.fillRect(0,0,6,6),y.fillStyle="#c8c8c8",y.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=y=>{y.beginPath(),y.roundRect(r(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),y.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*i),h.fillStyle="#242424",h.fillRect(0,a(g)-3*i,1024,3*i),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*i);let v='"Inter Tight", Arial, sans-serif',f=(y,_)=>{y.fillStyle=_,y.font=`500 ${37*i}px ${v}`,y.textBaseline="middle","letterSpacing"in y&&(y.letterSpacing=`${4*i}px`),y.textAlign="right",y.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),a(4.35)),y.textAlign="left",y.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),a(4.35)),y.beginPath(),y.moveTo(r(0),a(4.72)),y.lineTo(r(.34),a(4.05)),y.lineTo(r(-.34),a(4.05)),y.closePath(),y.fill()};f(h,"#3a3a3a"),f(c,"#f0f0f0");for(let y=0;y<240;y++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*i*1.4;let _=Math.random()*1024,T=Math.random()*564,k=Math.random()*6.28,A=(10+Math.random()*120)*i;h.beginPath(),h.moveTo(_,T),h.lineTo(_+Math.cos(k)*A,T+Math.sin(k)*A),h.stroke()}for(let y=0;y<420;y++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let m=(y,_)=>{let T=new qi(y);return _&&(T.colorSpace=mt),T.anisotropy=8,T};return{map:m(n,!0),bump:m(o),rough:m(l)}}function av(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let r=4;r<128;r+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,r,0,6.2832),t.stroke();let i=new qi(e);return i.colorSpace=mt,i}function Ho(e){let t=Is/2,i=rv(),r=new zt({map:i.map,bumpMap:i.bump,bumpScale:1.2,roughnessMap:i.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new zt({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:tc(256,5)}),s=new zt({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),n=new zt({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new zt({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new zt({map:av(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new v0({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=Ni(new jh(gi,vi,Is-c,3,.14),0,0,-c/2),d=ko(gi-.06,vi-.06,.2);d.holes.push($i(Ji,-1),$i(Ji,1));let p=new Ao(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,v=p.attributes.uv;for(let R=0;R<g.count;R++)v.setXY(R,(g.getX(R)+gi/2)/gi,(g.getY(R)+vi/2)/vi);p.translate(0,0,t-c);let f=(R,I)=>{let H=R;return H.holes.push(I),new Ao(H,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},m=[Ni(f($i(Ki,-1,.16),$i(Ji,-1)),0,0,t),Ni(f($i(Ki,1,.16),$i(Ji,1)),0,0,t),Ni(f(ko(ni.w+.36,ni.h+.36,.16,0,ni.y),tv(ni.w+.06,ni.h+.06,.08,0,ni.y)),0,0,t),Ni(new ji(gi-.5,.09,.06),0,3.5,t+.02)],y=new Ki;y.absarc(0,0,.98,0,Math.PI*2,!1);let _=new Ji;_.absarc(0,0,.6,0,Math.PI*2,!0),y.holes.push(_);let T=[new Ao(y,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let R=0;R<6;R++){let I=R/6*Math.PI*2;T.push(Ni(new ji(.2,.44,.1),Math.cos(I)*.46,Math.sin(I)*.46,.05,0,0,I+Math.PI/2))}T.push(Ni(new Es(.06,.06,.08,12),0,0,.04,Math.PI/2));let k=new qg(1,56),A=Bo([new Ro($i(Ki,-1),12),new Ro($i(Ki,1),12)]);A.translate(0,0,t+.012);let C=ko(ni.w,ni.h,.06,0,0),U=new Ro(C,6),M=U.attributes.position,E=U.attributes.uv;for(let R=0;R<M.count;R++)E.setXY(R,M.getX(R)/ni.w+.5,M.getY(R)/ni.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:r,lips:Bo(m),gloss:s,floor:Ni(new qt(gi-.4,vi-.4),0,0,t-c+.004),cavity:n,hub:Bo(T),white:o,pack:k,packMat:l,glassGeo:A,glass:h,labelGeo:U,spineGeo:Ni(new qt(16.6,1.72),0,-vi/2-.006,-.08,Math.PI/2),stickerGeo:new qt(1,1),hit:new ji(gi,vi,Is)}}var sv=[{x:-7.1,y:3.46,size:3.7,turn:-.13,over:!0},{x:7.1,y:3.46,size:3.7,turn:.11,over:!0},{x:3.3,y:-3.84,size:2.42,turn:-.2}],ic=e=>{let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);let r=new qi(t);return r.colorSpace=mt,r},aa=ic("#ffffff"),rc=ic("rgba(0,0,0,0)");function Vo(e,t=0){let i=new fr,r=(h,c)=>{let u=new gt(h,c);return i.add(u),u};r(e.body,e.plastic),r(e.floor,e.cavity),r(e.slab,e.front),r(e.lips,e.gloss);let a=[-Ds.x,Ds.x].map(h=>{let c=r(e.pack,e.packMat);c.position.set(h,Ds.y,e.FRONT-e.WALL+.012);let u=r(e.hub,e.white);return u.position.set(h,Ds.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});r(e.glassGeo,e.glass);let s=()=>new zt({map:aa,emissiveMap:aa,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),n=r(e.labelGeo,s());n.position.set(0,ni.y,e.FRONT+.008),n.rotation.z=t;let o=r(e.spineGeo,s()),l=sv.map((h,c)=>{let u=r(e.stickerGeo,new zt({map:rc,emissiveMap:rc,color:16777215,emissive:16777215,emissiveIntensity:.42,roughness:.36,envMap:e.env,envMapIntensity:.75,alphaTest:.5}));return u.position.set(h.x+t*3,h.y-t*2,e.FRONT+(h.over?.085:.03)+c*.004),u.scale.setScalar(h.size),u.rotation.z=h.turn+t*9,u});return{group:i,reels:a,label:n,spine:o,stickers:l}}function ac(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=[16,16,16];for(let l=0;l<r.length;l+=4){let h=r[l],c=r[l+1],u=r[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,s=[h,c,u])}if(a<60)return"#141414";let n=Math.max(...s),o=135/n;return`rgb(${s.map(l=>Math.round(l*o)).join(",")})`}function sc(e,t,i){for(let r=0;r<700;r++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*i,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function nc(e,t,i,r,a){let s=i;for(e.font=`400 ${s}px ${a}`;e.measureText(t).width>r&&s>14;)s-=2,e.font=`400 ${s}px ${a}`;return s}var za=(e,t=8)=>{let i=new qi(e);return i.colorSpace=mt,i.anisotropy=t,i};function Os(e,t){if(e.width<=t)return e;let i=document.createElement("canvas");i.width=t,i.height=Math.max(1,Math.round(e.height*t/e.width));let r=i.getContext("2d");return r.imageSmoothingQuality="high",r.drawImage(e,0,0,i.width,i.height),i}function nv(e,t,i){return za(oc(e,t,i))}function oc(e,t,i){let r=document.createElement("canvas");r.width=790,r.height=490;let a=r.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let s=getComputedStyle(document.body).fontFamily;if(e){let l=e.naturalWidth/e.naturalHeight,h=746/268,c=l>h?e.naturalHeight*h:e.naturalWidth,u=l>h?e.naturalHeight:e.naturalWidth/h;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-c)/2,(e.naturalHeight-u)/2,c,u,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(l=>{a.beginPath(),a.moveTo(24,l),a.lineTo(766,l),a.stroke()});let n='"DT Punk", cursive';a.fillStyle=i;let o=nc(a,t.name.toUpperCase(),66,640,n);return a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${n}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${n}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${s}`,a.textBaseline="middle",["SP","LP","EP"].forEach((l,h)=>{let c=30+h*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(c,440,22,22),a.fillText(l,c+32,452)}),a.strokeStyle=i,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",sc(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over",r}function ov(e,t){return za(lc(e,t))}function lc(e,t){let i=document.createElement("canvas");i.width=1660,i.height=172;let r=i.getContext("2d");r.fillStyle="#e8e6df",r.fillRect(0,0,1660,172),r.fillStyle="#121212",r.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,s='"DT Punk", cursive';r.fillStyle="#efefe9",r.textBaseline="middle",r.font='400 92px "DT Punk", cursive',r.textAlign="center",r.fillText(e.code,75,172/2+6),r.textAlign="left",r.strokeStyle="#b6b3aa",r.lineWidth=2,r.beginPath(),r.moveTo(176,138),r.lineTo(1420,138),r.stroke(),r.fillStyle=t;let n=nc(r,e.name.toUpperCase(),112,1210,s);return r.font=`400 ${n}px ${s}`,r.fillText(e.name.toUpperCase(),186,172/2+2),r.fillStyle="#3c3a35",r.font=`500 30px ${a}`,r.textAlign="right",r.fillText(e.kind,1630,172/2-22),r.font=`500 24px ${a}`,r.fillText("TRBN \xB7 SP 120",1630,172/2+24),sc(r,1660,172),i}var lv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",hv=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;uniform float light;
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
}`,cv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",uv=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;uniform float light;
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
}`,dv=[[0,0],[.55,0],[.92,.03],[1,.09],[.82,.2],[.6,.33],[.52,.5],[.56,.68],[.74,.84],[.84,.93],[.62,.995],[0,1]],pv=[[0,0],[.55,0],[.92,.04],[1,.11],[.8,.27],[.62,.5],[.6,.68],[.72,.82],[.7,.93],[.42,.995],[0,1]],Fs=e=>new Yg(e.map(([t,i])=>new Ae(Math.max(.001,t),i)),14);function fv(){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d");t.fillStyle="rgba(0,0,0,.075)";for(let i=0;i<16;i++){let r=16-i;t.beginPath(),t.roundRect(26-r,26-r,76+r*2,12+r*2,6+r),t.fill()}return new qi(e)}var Pt=1,hc=.5,cc=[{k:[1.32,.42],phi:.4,L:[1.62,1.06,.78],r:.29,base:[3.07,-2.34,-.75]},{k:[1.24,-.16],phi:.33,L:[1.78,1.16,.8],r:.3,base:[2.83,-2.52,-.75]},{k:[1.08,-.72],phi:.26,L:[1.62,1.08,.78],r:.28,base:[2.59,-2.7,-.75]},{k:[.86,-1.22],phi:.17,L:[1.24,.82,.66],r:.25,base:[2.35,-2.88,-.75]}],mv=[[2.2,-2.4,-.8],[.75,-1.55,-1.05],[-.7,-1.15,-.95],[-1.7,-.9,-.8]],gv=[[3.34,-2.65,-.85],[3.08,-2.84,-.85],[2.82,-3.02,-.85],[2.56,-3.21,-.85],[3.52,-3.08,-1],[3.31,-3.23,-1],[3.11,-3.37,-1],[2.9,-3.52,-1]],sa=[3.45,-3.62,-1.2],vv=[[.33,.24,.32],[-.33,-.24,.27]],_v=[[0,0],[.5,0],[.92,.004],[1,.012],[.92,.022],[.7,.04],[.55,.07],[.5,.12],[.48,.4],[.5,.8],[.62,.94],[.9,.985],[.5,1],[0,1]],Mt={wrist:[3.5,-2.1,.75],knuckle:[[-.94,2.56],[-.31,2.74],[.31,2.64],[.9,2.36]],spread:[-.2,-.06,.07,.22],base:[[-.52,.78],[-.17,.84],[.17,.82],[.52,.74]],carpal:[[-.62,.5],[-.21,.56],[.21,.55],[.62,.48],[-.56,.08],[-.19,.12],[.19,.11],[.56,.06]],thumb:[[-.72,.5],[-1.62,1.16],[-2.4,1.78],[-2.86,2.42]]};function xv(e){let t=document.createElement("canvas");t.width=t.height=24;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,24,24);let r=i.getImageData(0,0,24,24).data,a=Array.from({length:12},()=>[0,0,0,0]),s=0;for(let c=0;c<r.length;c+=4){let u=r[c],d=r[c+1],p=r[c+2],g=Math.max(u,d,p),v=Math.min(u,d,p),f=g-v;if(s+=1,f<40)continue;let m=g===u?(d-p)/f%6:g===d?(p-u)/f+2:(u-d)/f+4;m<0&&(m+=6);let y=a[Math.floor(m*2)%12],_=f*g;y[0]+=u*_,y[1]+=d*_,y[2]+=p*_,y[3]+=_}let n=a.reduce((c,u)=>u[3]>c[3]?u:c);if(n[3]<s*2600)return null;let o=n.slice(0,3).map(c=>c/n[3]),l=Math.max(...o),h=Math.min(...o);return o.map(c=>Math.max(0,Math.min(1,(c-h*.55)/(l-h*.55))))}var yv={portfolio:{glove:"cut",studs:!0,cuff:"spikes",rings:[0,2]},airtexno:{glove:"cut",cuff:"studs"},wave:{cuff:"spikes",rings:[1]},"concept-undo-studio":{glove:"full"},sabsus:{rings:[0,1,2,3]},basepoint:{band:!0},sunfreaks:{beads:2},"root-framer":{beads:1},janna:{beads:1},wallet:{tie:!0},mortgage:{charm:"key"},"concept-al-futtaim-themes":{charm:"fob"},template:{charm:"cassette"},"street-observations":{charm:"film"},"sabsus-platform":{charm:"tag"}},Sv=[[0,0],[.62,.01],[.93,.05],[1,.14],[1,.82],[.94,.93],[.66,.99],[0,1]],Go=new je(1052692),_i=new je(15263982),xi=new je(7171446),Ba=new je(15328988);function Mv(e){let t={value:0},i={value:0},r=new zt({color:15526368,roughness:.46,metalness:0,envMap:e,envMapIntensity:1.25}),a=X=>he=>{he.uniforms.uTime=t,he.uniforms.uRim={value:X},he.uniforms.uPaper=i,he.vertexShader=he.vertexShader.replace("#include <common>",`#include <common>
varying float vBoneY;`).replace("#include <project_vertex>",`#include <project_vertex>
 vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;`),he.fragmentShader=he.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uRim;uniform float uPaper;varying float vBoneY;`).replace("#include <opaque_fragment>",`
        float boneRim = pow(1. - saturate(dot(normal, normalize(vViewPosition))), 2.4);
        float boneScan = smoothstep(.1, .0, abs(fract(vBoneY * .06 - uTime * .17) - .5));
        outgoingLight += vec3(uRim * (1. - uPaper * .8)) * boneRim + vec3(.8) * boneScan * (.25 + boneRim) * min(1., uRim * 3.);
        #include <opaque_fragment>`)};r.onBeforeCompile=a(.34);let s=new fr,n=new Zr(Fs(dv),r,28),o=new Zr(Fs(pv),r,10),l=new Zr(new Fh(1,16,12),r,16),h=new Zr(new qt(1,1),new Xi({map:fv(),transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),48);h.renderOrder=2;let c=new Zr(Fs(_v),r,4);[n,o,l,h,c].forEach(X=>{X.frustumCulled=!1,s.add(X)});let u=Q0(e,a);s.add(u.mesh);let d=Array.from({length:4},()=>new N),p=Array.from({length:4},()=>new N),g=Array.from({length:5},()=>new N),v=new zt({color:16777215,roughness:.56,metalness:0,envMap:e,envMapIntensity:.8}),f=new zt({color:16777215,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6});v.onBeforeCompile=a(.07),f.onBeforeCompile=a(.16);let m=new g0(1,.18,8,26),y=new Fh(1,12,10),_=new jh(1,1,1,2,.12),T={},k={stall:[Fs(Sv),v,60],band:[new Es(1,1,1,30),v,4],bead:[y,v,60],tie:[m,v,4],block:[_,v,8],spike:[new Jg(1,1,10).translate(0,.5,0),f,44],loop:[m,f,30],pin:[y,f,16],plate:[_,f,10],sleeve:[new Es(1,1,1,22),f,8]};Object.entries(k).forEach(([X,[he,Se,Ce]])=>{let P=new Zr(he,Se,Ce);P.setColorAt(0,_i),P.count=0,P.visible=!1,P.frustumCulled=!1,P.userData.most=Ce,T[X]=P,s.add(P)});let A={},C=(X,he,Se,Ce,P,ie,Q)=>{let le=T[X],_e=A[X]||0;_e>=le.userData.most||(R.set(Ce,P,ie),le.setMatrixAt(_e,U.compose(he,Se,R)),le.setColorAt(_e,Q),A[X]=_e+1)},U=new ht,M=new di,E=new N,R=new N,I=new N,H=new N(0,1,0),z=(X,he,Se,Ce,P)=>{I.copy(Ce).sub(Se);let ie=I.length();I.divideScalar(ie),M.setFromUnitVectors(H,I),E.copy(Se).addScaledVector(I,ie*.025),R.set(P,ie*.95,P*.9),X.setMatrixAt(he,U.compose(E,M,R))},ne=(X,he,Se,Ce)=>{M.setFromUnitVectors(H,Se),R.set(Ce,26,Ce*.9),c.setMatrixAt(X,U.compose(he,M,R))},ee=()=>{xe=Math.random()<.5?0:1,we=0},ge=(X,he,Se)=>{M.identity(),R.set(Se,Se*1.2,Se*.82),l.setMatrixAt(X,U.compose(he,M,R))},q=(X,he,Se,Ce)=>{let P=he.x+he.z*.3,ie=he.y-he.z*.72,Q=Se.x+Se.z*.3,le=Se.y-Se.z*.72,_e=Q-P,me=le-ie,Xe=Math.hypot(_e,me);M.setFromAxisAngle(Ls,Math.atan2(me,_e)),E.set((P+Q)/2,(ie+le)/2,.022),R.set(Xe*1.68,Ce,1),h.setMatrixAt(X,U.compose(E,M,R))},K=[new N,new N,new N,new N],Ee=new N,Oe=new N,Le=new N,G=new N,fe=new N,F=new N,Z=new N,V=new N,se=new N,re=new di,ye=new di,J=new di().setFromAxisAngle(H,Math.PI/2),ce=new je(15328988),b=new je(15328988),be=(X,he,Se,Ce,P)=>{I.copy(Se).sub(he);let ie=I.length();ie<1e-4||(re.setFromUnitVectors(H,I.divideScalar(ie)),C(X,he,re,Ce,ie,Ce,P))},W=0,ve=(X,he,Se,Ce,P,ie,Q,le)=>{let _e=1.65*W;F.set(he*_e,Se*_e,Ce*_e).applyQuaternion(ye).add(fe),C(X,F,ye,P*_e,ie*_e,Q*_e,le)},ue={key(){return ve("loop",0,-.42,0,.36,.36,.46,xi),ve("plate",0,-1.36,0,.17,1.3,.09,xi),ve("plate",.15,-1.84,0,.2,.13,.08,xi),ve("plate",.13,-1.58,0,.15,.12,.08,xi),2},fob(){return ve("plate",0,-.86,0,.86,1.28,.2,_i),ve("block",0,-.86,.04,.72,1.14,.24,Go),ve("pin",0,-.62,.17,.15,.15,.05,_i),ve("pin",0,-1.02,.17,.15,.15,.05,_i),1.5},cassette(){return ve("block",0,-.62,0,1.3,.86,.17,Ba),ve("block",0,-.44,.09,1.06,.28,.02,ce),ve("loop",-.3,-.78,.1,.13,.13,.06,xi),ve("loop",.3,-.78,.1,.13,.13,.06,xi),1.1},film(){return ve("block",0,-.62,0,.7,.92,.7,ce),ve("plate",0,-.13,0,.78,.1,.78,_i),ve("plate",0,-1.11,0,.78,.1,.78,_i),ve("block",.46,-.68,0,.34,.5,.03,ce),1.2},tag(){return ve("plate",0,-.8,0,.84,1.16,.07,xi),ve("block",0,-.9,.05,.62,.4,.02,Go),1.4}},Re=null,B=null,de=1,w=0,x=0,L=0,$=7,ae=5,te=0,Ie=!1,xe=-1,we=0,He=0,Te=0,Ne=13,pe={half:7,tall:5},oe=new N;return{group:s,get tilt(){return xe<0?0:(xe?-1:1)*He},wave(X=Math.random()<.5?0:1){xe<0&&(xe=X,we=0)},place(X,he,Se){pe.half=X,pe.tall=he,Se&&(Ne=Se),Ie||(Ie=!0,$=X,ae=he)},theme(X){i.value=X,r.color.set(X?3421242:15526368),r.envMapIntensity=X?.7:1.25},dress(X,he){let Se=yv[X]||null;he?b.setRGB(he[0],he[1],he[2],mt):b.copy(Ba),Se!==Re&&(Re=Se,x+=.9)},update(X,he,Se){let Ce=1-Math.exp(-he/180);$+=(pe.half-$)*Ce,ae+=(pe.tall-ae)*Ce,te+=(Math.min(1,Se*20)-te)*(1-Math.exp(-he/140)),t.value=X/1e3;let P=0,ie=0,Q=0,le=0;B!==Re?(de=Math.max(0,de-he/110),de||(B=Re,ce.copy(b))):de=Math.min(1,de+he/260);let _e=de-1;W=B?Math.max(0,1+2.7*_e*_e*_e+1.7*_e*_e):0,Object.keys(A).forEach(De=>{A[De]=0});let me=B&&(B.cuff||B.beads||B.tie||B.band);if(L+=((me?1.25:B?.charm?.9:0)-L)*(1-Math.exp(-he/320)),x+=(-w*26-x*2.4+te*2.2*Math.sin(X*.012))*(he/1e3),w+=x*(he/1e3),Te||(Te=X+12e3+Math.random()*16e3),xe<0&&X>Te&&Se<.01&&ee(),xe>=0){we+=he;let De=Wt(we/420,0,1),Ye=Wt((3200-we)/460,0,1);He=Ns(Math.min(De,Ye)),we>3200&&(xe=-1,He=0,Te=X+24e3+Math.random()*42e3)}let Xe=Math.sin(X*.0118);if([-1,1].forEach((De,Ye)=>{let Ze=De*$,Kt=-ae*(Ye?.2:.1)+Math.sin(X*7e-4+Ye*2)*.05,Ut=(We,Qe,tt,S)=>We.set(Ze+De*Qe*Pt,Kt+L+tt*Pt,S),Ui=Ye===xe?He:0,Zt=-.1+Xe*.42,_r=Math.cos(Zt),la=Math.sin(Zt),ha=Wt(Ne-$-2.9,-1.6,Mt.wrist[0]),Qi=(We,Qe)=>ha+We*_r+Qe*la,ca=(We,Qe)=>Mt.wrist[1]-We*la+Qe*_r,yi=(We,Qe,tt,S,O,j,Y)=>Ut(We,Qe+(O-Qe)*Ui,tt+(j-tt)*Ui,S+(Y-S)*Ui),xr=(We,Qe,tt,S,O)=>yi(We,Qe[0],Qe[1],Qe[2],Qi(tt,S),ca(tt,S),O);cc.forEach((We,Qe)=>{let tt=Math.sin(X*.0013+Qe*1.3+Ye*2.4)*.012-te*.07,S=Math.cos(We.phi),O=Math.sin(We.phi),j=Ye===1&&Qe>=2,Y=j?[.12,-.98,-1.1,-.86]:[.52+tt*.4,1.2+tt,.92+tt*1.3,.3+tt*.4],D=We.k[0],Me=We.k[1],Ue=Zt+Mt.spread[Qe],Fe=Qi(Mt.knuckle[Qe][0],Mt.knuckle[Qe][1]),ze=ca(Mt.knuckle[Qe][0],Mt.knuckle[Qe][1]),qe=Mt.wrist[2]+.06;yi(K[0],D,Me,Y[0],Fe,ze,qe);let Ke=D,Ge=Me,it=Y[0];for(let Je=0;Je<3;Je++){let at=Y[Je+1]-Y[Je],dt=Math.sqrt(Math.max(.03,We.L[Je]*We.L[Je]-at*at)),nt=D-dt*S,ke=Me+dt*O;if(Je===0){let oi=Ke/(Ke-nt);Ge=Me+(ke-Me)*oi,it=Y[0]+at*oi}D=nt,Me=ke,Fe+=Math.sin(Ue)*We.L[Je],ze+=Math.cos(Ue)*We.L[Je],qe+=.14*(Je+1)*(.5+Je*.25),Ue+=.05,yi(K[Je+1],D,Me,Y[Je+1],Fe,ze,qe)}if(Ut(Oe,0,Ge,it),z(n,P++,K[0],K[1],We.r*Pt),z(n,P++,K[1],K[2],We.r*.86*Pt),z(o,ie++,K[2],K[3],We.r*.8*Pt),xr(Ee,We.base,Mt.base[Qe][0],Mt.base[Qe][1],Mt.wrist[2]),z(n,P++,Ee,K[0],.34*Pt),B){if(B.glove){d[Qe].copy(K[0]),p[Qe].copy(Ee),g[0].copy(Ee).lerp(K[0],.72);for(let Je=0;Je<4;Je++)g[Je+1].copy(K[Je]);u.finger(Ye,Qe,g,We.r*Pt,B.glove==="full"?0:.5,W)}if(B.studs&&(Le.copy(K[0]),Le.z+=We.r*1.2,G.set(De*.5,.35,.8).normalize(),re.setFromUnitVectors(H,G),C("spike",Le,re,.2*W,.66*W,.2*W,_i)),B.rings?.includes(Qe)){Le.copy(K[0]).lerp(K[1],.6),G.copy(K[1]).sub(K[0]).normalize(),re.setFromUnitVectors(H,G);let Je=We.r*.84*W;C("sleeve",Le,re,Je,.32*W,Je,_i),Le.z+=Je*.92,re.identity(),C("pin",Le,re,.17*W,.17*W,.09*W,_i)}Ye===1&&Qe===1&&(Z.copy(K[1]).lerp(K[2],.3),V.copy(K[2]).sub(K[1]).normalize())}!j&&Ui<.3&&(q(le++,Oe,K[1],1.1+K[1].z*.55),q(le++,K[1],K[2],.95+K[2].z*.5),q(le++,K[2],K[3],.8),fe.copy(K[3]),fe.z=.05,F.copy(K[3]).lerp(K[2],.3),F.z=.12,q(le++,F,fe,.46))});for(let We=0;We<4;We++)xr(K[We],mv[We],Mt.thumb[We][0],Mt.thumb[We][1],Mt.wrist[2]+.05+We*.05);z(n,P++,K[0],K[1],.37*Pt),z(n,P++,K[1],K[2],.33*Pt),z(o,ie++,K[2],K[3],.29*Pt),gv.forEach((We,Qe)=>ge(Q++,xr(Ee,We,Mt.carpal[Qe][0],Mt.carpal[Qe][1],Mt.wrist[2]-.02),(.27+Qe%3*.04)*Pt));let er=We=>yi(We,sa[0],sa[1],sa[2],ha,Mt.wrist[1],Mt.wrist[2]);if(Ut(Le,sa[0],sa[1],sa[2]),oe.set(De*.3,-1,-.55).normalize(),Ui&&(G.copy(Le).addScaledVector(oe,26),er(fe),oe.copy(G).sub(fe).normalize()),vv.forEach(([We,Qe,tt],S)=>{er(Ee),Ee.x+=De*We,Ee.y+=Qe,ne(S+Ye*2,Ee,oe,tt*Pt)}),B){if(B.glove){g[0].copy(K[0]).lerp(K[1],-.45);for(let tt=0;tt<4;tt++)g[tt+1].copy(K[tt]);u.finger(Ye,4,g,.4*Pt,B.glove==="full"?0:.55,W),u.palm(Ye,d,p,er(Le),oe,cc[0].r*Pt,W)}let We=.98*Pt;er(Le).addScaledVector(oe,B.glove?.3:.45),G.copy(oe).cross(Ls).normalize(),fe.copy(G).cross(oe);let Qe=(tt,S)=>F.copy(Le).addScaledVector(G,Math.cos(tt)*S).addScaledVector(fe,Math.sin(tt)*S);if(re.setFromUnitVectors(H,oe),B.cuff){C("band",Le,re,We*W,.9*W,We*W,Go);let tt=B.cuff==="spikes"?11:16;for(let S=0;S<tt;S++){let O=S/tt*Math.PI*2;Qe(O,We*.97),fe.copy(F).sub(Le).normalize(),ye.setFromUnitVectors(H,fe);let j=B.cuff==="spikes"?.62:.2,Y=B.cuff==="spikes"?.17:.13;C("spike",F,ye,Y*W,j*W,Y*W,_i),fe.copy(G).cross(oe)}}if(B.beads)for(let tt=0;tt<B.beads;tt++){let S=tt*.46,O=13+tt;for(let j=0;j<O;j++)Le.addScaledVector(oe,S),Qe(j/O*Math.PI*2+tt,We),Le.addScaledVector(oe,-S),ye.identity(),C("bead",F,ye,.23*W,.23*W,.23*W,(j+tt)%3?ce:Ba)}re.setFromUnitVectors(Ls,oe),B.tie&&C("tie",Le,re,We*W,We*W,We*.9*W,ce),B.band&&(ye.setFromUnitVectors(H,oe),C("band",Le,ye,We*.99*W,.5*W,We*.99*W,Ba),Qe(Math.PI/2,We),C("block",F,ye,.9*W,.34*W,.12*W,Ba))}}),B?.charm){let De=w+Math.sin(X*9e-4)*.05;se.set(Math.sin(De),-Math.cos(De),.07).normalize(),re.setFromUnitVectors(Ls,V),C("loop",Z,re,.38*W,.38*W,.42*W,xi),Le.copy(Z).addScaledVector(se,.34*W),G.copy(se).negate(),re.setFromUnitVectors(H,G);for(let Ze=0;Ze<4;Ze++)Le.addScaledVector(se,.33*W),ye.copy(re),Ze%2&&ye.multiply(J),C("loop",Le,ye,.17*W,.27*W,.17*W,xi);fe.copy(Le).addScaledVector(se,.3*W),ye.copy(re),G.set(0,1,0),ye.multiply(M.setFromAxisAngle(G,Math.sin(X*.0011)*.36+w*1.5)),ve("loop",0,0,0,.12,.12,.1,xi);let Ye=ue[B.charm]();G.copy(Z).addScaledVector(se,(1.8+Ye*1.65)*W),q(le++,Z,G,1.1*Pt)}h.count=le,B?.glove?u.commit(B.glove):u.hide(),Object.entries(T).forEach(([De,Ye])=>{let Ze=A[De]||0;Ye.count=Ze,Ye.visible=Ze>0,Ze&&(Ye.instanceMatrix.needsUpdate=!0,Ye.instanceColor.needsUpdate=!0)}),[n,o,l,h,c].forEach(De=>{De.instanceMatrix.needsUpdate=!0})}}}function Ev({host:e,stage:t,items:i,onHover:r,onOpen:a,onPlay:s}){let n=document.createElement("canvas");n.className="tv-canvas",n.setAttribute("aria-hidden","true"),e.append(n);let o;try{o=new Mh({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return n.remove(),null}let l=Math.min(devicePixelRatio||1,1.25);o.setPixelRatio(l),o.outputColorSpace=mt,o.setClearColor(0,0);let h=zo(o),c=Ho(h),u=new ys;u.background=new je(131587),u.fog=new Lg(131587,40,96);let d=new Vh(16777215,1.5);d.position.set(-8,18,22),u.add(d);let p=new Gt(30,1,1,200);p.position.set(0,0,40);let g=new pi({vertexShader:cv,fragmentShader:uv,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:aa},b:{value:aa},fade:{value:1},time:{value:0},focus:{value:new Ae(.47,.55)},light:{value:0}}}),v=new gt(new qt(2,2),g);v.frustumCulled=!1,v.renderOrder=-10,u.add(v);let f=new Gh(16777215,.32);u.add(f);let m=new je(16777215),y=new je(16777215),_=new je(16777215),T=new gt(new qt(1,1),new Xi({map:aa,color:16777215,transparent:!0,opacity:0,fog:!1}));T.renderOrder=1;let k=new fr;u.add(k),k.add(T);let A=new gt(new qt(1,1),new Xi({color:328965,fog:!1}));A.position.z=-.04,k.add(A);let C=new gt(new ji(1,1,1),new zt({color:723723,roughness:.42,envMap:h,envMapIntensity:.9}));k.add(C);let U=Mv(h);k.add(U.group);let M=0,E=0,R=i.map((pe,oe)=>{let X=he=>{let Se=Math.sin((oe+1)*12.9898*he)*43758.5453;return Se-Math.floor(Se)};return{rx:X(1)-.5,ry:X(2)-.5,rz:X(3)-.5,wob:X(4)*6.28,tilt:(X(5)-.5)*.022,pile:X(6)-.5}}),I=i.map((pe,oe)=>{let X=Vo(c,R[oe].tilt),he=new gt(c.hit,new Xi({visible:!1}));return he.userData.index=oe,X.group.add(he),X.hit=he,u.add(X.group),X}),H=new Map,z=new Map,ne=(pe,oe)=>{if(H.has(pe)){let he=H.get(pe);he.complete&&he.naturalWidth?oe(he):he.addEventListener("load",()=>oe(he),{once:!0});return}let X=new Image;X.decoding="async",X.src=i[pe].src,H.set(pe,X),X.addEventListener("load",()=>oe(X),{once:!0})},ee=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),ge=pe=>{I[pe].wanted||(I[pe].wanted=!0,ne(pe,oe=>ee.then(()=>{let X=ac(oe),he=(Se,Ce)=>{Se.material.map=Ce,Se.material.emissiveMap=Ce,Se.material.emissiveIntensity=.55,Se.material.color.set(16777215),Se.material.needsUpdate=!0};he(I[pe].label,nv(oe,i[pe],X)),he(I[pe].spine,ov(i[pe],X)),ec(i[pe].project,pe,Qh(oe)).forEach((Se,Ce)=>{let P=I[pe].stickers[Ce];if(!P)return;let ie=new qi(Os(Se,256));ie.colorSpace=mt,ie.anisotropy=4,P.material.map=ie,P.material.emissiveMap=ie,P.material.needsUpdate=!0})})))},q=pe=>{z.has(pe)||(z.set(pe,null),ne(pe,oe=>{let X=new qi(oe);X.colorSpace=mt,X.anisotropy=8,X.generateMipmaps=!0,X.minFilter=Mi;let he=document.createElement("canvas");he.width=he.height=6;let Se=he.getContext("2d",{willReadFrequently:!0});Se.drawImage(oe,0,0,6,6);let Ce=Se.getImageData(0,0,6,6).data,P=0,ie=0,Q=0;for(let De=0;De<Ce.length;De+=4)P+=Ce[De],ie+=Ce[De+1],Q+=Ce[De+2];let le=new je(P/9180,ie/9180,Q/9180).convertSRGBToLinear(),_e=Math.max(P,ie,Q,1),me=255/_e,Xe=`rgba(${[P,ie,Q].map(De=>Math.round(De*me)).join(",")},.3)`;z.set(pe,{texture:X,ratio:oe.naturalWidth/oe.naturalHeight,avg:le,glow:Xe,light:xv(oe)}),pe===J&&ce(pe)}))},K=new ys,Ee=new oo(-1,1,1,-1,0,1),Oe=new pi({vertexShader:lv,fragmentShader:hv,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1},light:{value:0}}}),Le=new gt(new qt(2,2),Oe);Le.frustumCulled=!1,K.add(Le);let G=null,fe=0,F=0;function Z(){let pe=Math.round(fe*l),oe=Math.round(F*l);(!G||G.width!==pe||G.height!==oe)&&(G?.dispose(),G=new zi(pe,oe,{samples:2,type:br,colorSpace:"",generateMipmaps:!0,minFilter:Mi,magFilter:Qt})),Oe.uniforms.map.value=G.texture,p.aspect=fe/F,p.updateProjectionMatrix(),ye()}let V=()=>{let pe=80*Math.tan(p.fov*Math.PI/360);return{vh:pe,vw:pe*p.aspect}},se=4/3,re=0;function ye(){let{vh:pe,vw:oe}=V(),X=oe*.62,he=pe*.62,Se=X,Ce=Se/se;Ce>he&&(Ce=he,Se=Ce*se),re=pe*.06,T.scale.set(Se,Ce,1),A.scale.set(Se+.16,Ce+.16,1),C.scale.set(Se+.16,Ce+.16,hc),C.position.z=-.05-hc/2,U.place((Se+.16)/2,Ce/2,40*Math.tan(p.fov*Math.PI/360)*p.aspect),g.uniforms.focus.value.set(.5,.5+re/pe)}let J=-1;function ce(pe){let oe=z.get(pe);oe&&(g.uniforms.a.value!==oe.texture&&(g.uniforms.b.value=g.uniforms.a.value===aa?oe.texture:g.uniforms.a.value,g.uniforms.a.value=oe.texture,g.uniforms.fade.value=0),y.copy(oe.avg).lerp(_,.3),document.documentElement.style.setProperty("--tube-glow",oe.glow),window.trbnRingTint?.(oe.light),U.dress(i[pe]?.project,oe.light),T.material.map=oe.texture,T.material.opacity=1,T.material.needsUpdate=!0,se=oe.ratio,ye())}function b(){let pe=n.clientWidth,oe=n.clientHeight;!pe||!oe||(fe=pe,F=oe,o.setSize(fe,F,!1),Z())}new ResizeObserver(b).observe(n),b();let be=()=>{let pe=document.documentElement.classList.contains("theme-light")?1:0;g.uniforms.light.value=pe,Oe.uniforms.light.value=pe,u.fog.color.set(pe?13224389:131587),u.background.set(pe?13224389:131587),U.theme(pe)};be(),addEventListener("trbn:theme",be);let W=(pe,oe,X)=>Ns(Wt((X-pe)/(oe-pe),0,1));function ve(pe,oe,X,he,Se){let{vh:Ce,vw:P}=V(),ie=Ns(Wt(1-Math.abs(he)*1.15,0,1)),Q=pe.group,le=Math.sin(Se*5e-4+oe.wob),_e={x:P*.275,y:-Ce*.265,z:8,s:.52,rx:-.16+le*.012,ry:-.3+Math.cos(Se*4e-4)*.018,rz:.05},me;if(he>=0){let Xe=X%2?1:-1,De=1-he*4.2;me={x:Xe*P*.49,y:Ce*.1+oe.pile*1.2-he*.12,z:De,s:.46,rx:oe.rx*.1,ry:-Xe*.92+oe.ry*.08,rz:Xe*.03+oe.rz*.04},me={x:ut(me.x,_e.x,ie),y:ut(me.y,_e.y,ie),z:ut(me.z,_e.z,ie),s:ut(me.s,_e.s,ie),rx:ut(me.rx,_e.rx,ie),ry:ut(me.ry,_e.ry,ie),rz:ut(me.rz,_e.rz,ie)}}else{let Xe=Is*.5,De=W(0,.9,-he),Ye={x:-P*.265+oe.pile*.45,y:-Ce*.19+(he+1)*Xe,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+oe.ry*.05,rz:oe.rz*.022};me={x:ut(_e.x,Ye.x,De),y:ut(_e.y,Ye.y,De)+Math.sin(De*Math.PI)*3,z:ut(_e.z,Ye.z,De),s:ut(_e.s,Ye.s,De),rx:ut(_e.rx,Ye.rx,De),ry:ut(_e.ry,Ye.ry,De),rz:ut(_e.rz,Ye.rz,De)}}Q.position.set(me.x,me.y,me.z),Q.scale.setScalar(me.s),Q.rotation.set(me.rx,me.ry,me.rz),Q.visible=he>-8&&he<12&&me.y>-Ce*.85}let ue=new k0,Re=new Ae,B=null,de=-2,w=!1,x=()=>{de!==-2&&(de=-2,r(-1),t.classList.remove("is-pointing"))},L=()=>{if(w=!1,!B){x();return}let[pe,oe]=window.trbnBend?window.trbnBend(B.x,B.y,fe,F):[B.x,B.y],X=pe/fe,he=oe/F;if(X<0||X>1||he<0||he>1){x();return}Re.set(X*2-1,-(he*2-1)),ue.setFromCamera(Re,p);let Se=ue.intersectObjects([...I.filter(P=>P.group.visible).map(P=>P.hit),T],!1)[0],Ce=Se?Se.object===T?-1:Se.object.userData.index:-2;Ce!==de&&(de=Ce,r(Ce>=0?Ce:-1),t.classList.toggle("is-pointing",Ce!==-2))};t.addEventListener("pointermove",pe=>{let oe=n.getBoundingClientRect();B={x:pe.clientX-oe.left,y:pe.clientY-oe.top},w=!0}),t.addEventListener("pointerleave",()=>{B=null,w=!0}),t.addEventListener("click",pe=>{pe.target.closest("a, button")||(L(),de!==-2&&a(de===-1?J:de))});let $=!1;Promise.all([o.compileAsync(u,p),o.compileAsync(K,Ee)]).then(()=>{$=!0},()=>{$=!0});let ae=1,te=0,Ie=0,xe=0,we=0,He=0,Te=!1,Ne=!0;return{frame:(pe,oe,X,he=1)=>{if(!Ne||!$)return;let Se=pe-xe,Ce=Math.abs(Se);xe=pe,Ie+=Se*11+X*9e-4;let P=Wt(pe/Math.max(1,i.length-1),0,1);I.forEach((me,Xe)=>{let De=Xe-pe;if(De>-7&&De<7&&ge(Xe),ve(me,R[Xe],Xe,De,oe),Math.abs(De)<3){me.reels[0].hub.rotation.z=-Ie,me.reels[1].hub.rotation.z=-Ie*.82;let Ye=ut(3.15,1.75,P),Ze=ut(1.75,3.15,P);me.reels[0].pack.scale.set(Ye,Ye,1),me.reels[1].pack.scale.set(Ze,Ze,1)}});let ie=Wt(Math.round(pe),0,i.length-1);if(q(ie),q(Math.min(i.length-1,ie+1)),q(Math.max(0,ie-1)),ie!==J){let me=J<0;J=ie,me||(ae=1,M=(Math.random()<.5?-1:1)*.9,s?.(ie)),ce(ie)}ae=Math.max(ae*Math.exp(-X/170),Wt(Ce*26,0,.7)),te||(te=oe);let Q=Math.min(1,(oe-te)/700);m.lerp(y,1-Math.exp(-X/500)),f.color.copy(m),g.uniforms.time.value=oe/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+X/900),Oe.uniforms.time.value=oe/1e3,Oe.uniforms.glitch.value=ae,E+=(-M*70-E*7)*(X/1e3),M+=E*(X/1e3),U.update(oe,X,Ce),Oe.uniforms.power.value=1-(1-Q)**3,Oe.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let le=B?B.x/fe-.5:0,_e=B?B.y/F-.5:0;we+=(le-we)*(1-Math.exp(-X/260)),He+=(_e-He)*(1-Math.exp(-X/260)),p.position.x=we*1.6,p.position.y=-He*1,p.lookAt(0,0,0),k.position.y=re+Math.sin(oe*83e-5)*.05,k.rotation.set(Math.sin(oe*61e-5)*.009+He*.05+M*.012,Math.sin(oe*47e-5)*.013+we*.1+M*.03,Math.sin(oe*39e-5)*.0045+M*.008+U.tilt*.022),w&&L(),o.toneMapping=ci,o.setRenderTarget(G),o.clear(),o.render(u,p),o.setRenderTarget(null),o.clear(),o.render(K,Ee),n.style.opacity=String(Math.min(Q*3,1)*he),Te||(Te=!0,t.classList.add("tv-on"))},wave(pe){U.wave(pe)},show(pe){Ne=pe,n.style.display=pe?"":"none",pe&&b()},lighter(){l<=.8||(l=Math.max(.8,l-.2),o.setPixelRatio(l),b())}}}var uc={rest:{x:.222,y:-.252,z:6,s:.48,rx:-.22,ry:-.36,rz:.07},lift:{x:.2,y:-.21,z:9,s:.45,rx:-.07,ry:-.12,rz:.025}};function Tv(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");return t.filter="blur(16px)",t.fillStyle="rgba(0,0,0,.9)",t.beginPath(),t.roundRect(44,38,168,84,16),t.fill(),za(e,1)}function bv({grid:e,scroller:t,items:i}){let r=document.createElement("canvas");r.className="tape-library",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"absolute",left:"0",top:"0",zIndex:"3",pointerEvents:"none"}),e.append(r);let a;try{a=new Mh({canvas:r,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return r.remove(),null}let s=Math.min(devicePixelRatio||1,1.25);a.setPixelRatio(s),a.outputColorSpace=mt,a.toneMapping=ci,a.setClearColor(0,0),a.autoClear=!1;let n=zo(a),o=Ho(n),l=new ys,h=new Vh(16777215,1.5);h.position.set(-8,18,22),l.add(h);let c=new Gh(16777215,.32);l.add(c);let u=new Gt(30,4/3,1,200);u.position.set(0,0,40),u.lookAt(0,0,0);let d=80*Math.tan(u.fov*Math.PI/360),p=d*u.aspect,g=new gt(new qt(1,1),new Xi({map:Tv(),transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=-1,l.add(g);let v=new je(16777215),f=i.map((F,Z)=>{let V=ye=>{let J=Math.sin((Z+1)*12.9898*ye)*43758.5453;return J-Math.floor(J)},se=Vo(o,(V(5)-.5)*.022);se.group.visible=!1,l.add(se.group);let re=ut(1.75,3.15,V(7));return se.reels[0].pack.scale.set(re,re,1),se.reels[1].pack.scale.set(4.9-re,4.9-re,1),{item:F,tape:se,seed:{rx:V(1)-.5,ry:V(2)-.5,rz:V(3)-.5},spin:V(4)*6.28,tint:new je(1,1,1),wanted:!1,ready:!1,shown:!1,p:0,hover:0,h:0,tx:0,ty:0,px:0,py:0,box:null,dirty:!1}}),m=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),y=(F,Z)=>{let V=za(Z,4);F.material.map=V,F.material.emissiveMap=V,F.material.emissiveIntensity=.55,F.material.color.set(16777215),F.material.needsUpdate=!0};function _(F){if(F.wanted)return;F.wanted=!0;let Z=F.item.card.querySelector("img");if(!Z)return;let V=()=>m.then(()=>{if(Z.naturalWidth){try{T(F,Z)}catch{}F.ready=!0,G()}});Z.complete&&Z.naturalWidth?V():Z.addEventListener("load",V,{once:!0})}function T(F,Z){let V=ac(Z);y(F.tape.label,Os(oc(Z,F.item,V),396)),y(F.tape.spine,Os(lc(F.item,V),830));let se=null;try{se=Qh(Z)}catch{}ec(F.item.project,F.item.index,se).forEach((W,ve)=>{let ue=F.tape.stickers[ve];if(!ue)return;let Re=za(Os(W,256),4);ue.material.map=Re,ue.material.emissiveMap=Re,ue.material.needsUpdate=!0});let re=document.createElement("canvas");re.width=re.height=6;let ye=re.getContext("2d",{willReadFrequently:!0});ye.drawImage(Z,0,0,6,6);let J=ye.getImageData(0,0,6,6).data,ce=0,b=0,be=0;for(let W=0;W<J.length;W+=4)ce+=J[W],b+=J[W+1],be+=J[W+2];F.tint.setRGB(ce/9180,b/9180,be/9180).convertSRGBToLinear().lerp(v,.3)}function k(F,Z){let V=uc.rest,se=uc.lift,re=Ns(Wt(F.h,0,1)),ye=ut(V.x,se.x,re)*p,J=ut(V.y,se.y,re)*d,ce=ut(V.rz,se.rz,re)+F.seed.rz*.03,b=ut(V.rx,se.rx,re)+F.seed.rx*.05-F.py*.2*re,be=ut(V.ry,se.ry,re)+F.seed.ry*.07+F.px*.28*re,W=1-(1-Wt(F.p,0,1))**3;ye+=(1-W)*4.5,J-=(1-W)*9.5,ce+=(1-W)*.22;let ve=F.tape.group;ve.position.set(ye,J,ut(V.z,se.z,re)),ve.scale.setScalar(ut(V.s,se.s,re)),ve.rotation.set(b,be,ce),F.tape.reels[0].hub.rotation.z=-F.spin,F.tape.reels[1].hub.rotation.z=-F.spin*.82,g.position.set(ye+1.1+re*.9,J-1.5-re*1.1,0),g.scale.set(gi*ve.scale.x*(1.2+re*.12),vi*ve.scale.x*(1.5+re*.2),1),g.rotation.set(0,0,ce),g.material.opacity=(.78-re*.2)*W}let A=220,C=0,U=0,M=-1e9,E=0,R=0,I=!0,H=!0,z=!1,ne=!1,ee=null,ge=0,q=0,K=0,Ee=0,Oe=(F,Z)=>{let{box:V}=F,se=V.left,re=U-(V.top-Z+V.height);a.setViewport(se,re,V.width,V.height),a.setScissor(se,re,V.width,V.height),a.clear(),!(!F.shown||!F.ready)&&(ee&&ee!==F.tape.group&&(ee.visible=!1),ee=F.tape.group,ee.visible=!0,c.color.copy(F.tint),a.render(l,u))};function Le(F){if(E=0,!H||!z||!ne||document.hidden)return;let Z=Math.min(250,F-(R||F));R=F;let V=t.getBoundingClientRect(),se=e.getBoundingClientRect(),re=e.clientWidth,ye=e.clientHeight,J=f.map(B=>B.item.card.hidden?null:B.item.media.getBoundingClientRect()),ce=V.top-se.top,b=V.bottom-se.top,be=Math.max(1,Math.min(Math.round(V.height+A*2),Math.ceil(ye)));(re!==C||be!==U)&&(C=re,U=be,a.setSize(C,U,!1),r.style.width=`${C}px`,r.style.height=`${U}px`,I=!0);let W=Math.max(0,Math.floor(ye-U));if(ce<M+A*.35||b>M+U-A*.35||M>W){let B=Wt(Math.round(ce-A),0,W);B!==M&&(M=B,r.style.transform=`translate3d(0,${M}px,0)`,I=!0)}let ve=!1,ue=!1,Re=M;if(f.forEach((B,de)=>{let w=J[de];if(B.box=null,!w||!w.width)return;let x=w.top-se.top,L=w.bottom-se.top;if(L>ce-900&&x<b+900&&_(B),L<Re||x>Re+U)return;B.box={left:w.left-se.left,top:x,width:w.width,height:w.height},B.ready&&!B.shown&&L>ce+w.height*.2&&x<b-w.height*.2&&(B.shown=!0,B.born=F,B.p=0,B.dirty=!0),B.shown&&B.p<1&&(B.p=Math.min(1,(F-B.born)/620),B.dirty=!0),(Math.abs(B.hover-B.h)>.001||Math.abs(B.tx-B.px)>.001||Math.abs(B.ty-B.py)>.001||B.shown&&B.p<1)&&(B.dirty=!0,ue=!0);let $=B.h+(B.hover-B.h)*(1-Math.exp(-Z/150));B.h=Math.abs($-B.hover)<.001?B.hover:$,B.px+=(B.tx-B.px)*(1-Math.exp(-Z/170)),B.py+=(B.ty-B.py)*(1-Math.exp(-Z/170)),B.h>.02&&(B.spin+=Z*.0034*B.h,B.dirty=!0),(B.dirty||I)&&(ve||(ve=B.dirty))}),ve&&!ue&&!I&&F-ge<30){G();return}ge=F,a.setScissorTest(!1),I&&a.clear(),a.setScissorTest(!0),f.forEach(B=>{!B.box||!(I||B.dirty)||(B.ready&&B.shown&&k(B,F),Oe(B,Re),B.dirty=!1)}),a.setScissorTest(!1),I=!1,ve?(q++,K+=Math.min(Z,50),q>=40&&(Ee=K/q>26?Ee+1:0,q=0,K=0,Ee>=2&&!navigator.webdriver&&(Ee=0,fe())),G()):(q=0,K=0,R=0)}function G(){!E&&H&&z&&ne&&!document.hidden&&(E=requestAnimationFrame(Le))}function fe(){s<=.8||(s=Math.max(.8,s-.2),a.setPixelRatio(s),C=0,I=!0)}return f.forEach(F=>{let{link:Z,media:V}=F.item,se=re=>{let ye=V.getBoundingClientRect();ye.width&&(F.tx=Wt((re.clientX-ye.left)/ye.width-.5,-.6,.6),F.ty=Wt((re.clientY-ye.top)/ye.height-.5,-.6,.6),G())};Z.addEventListener("pointerenter",re=>{F.hover=1,se(re)}),Z.addEventListener("pointermove",se),Z.addEventListener("pointerleave",()=>{F.hover=0,F.tx=0,F.ty=0,G()}),Z.addEventListener("focus",()=>{Z.matches(":focus-visible")&&(F.hover=1,G())}),Z.addEventListener("blur",()=>{F.hover=0,G()})}),t.addEventListener("scroll",G,{passive:!0}),new ResizeObserver(()=>{I=!0,G()}).observe(e),new ResizeObserver(()=>{I=!0,G()}).observe(t),new IntersectionObserver(([F])=>{z=F.isIntersecting,z&&(I=!0,G())},{root:t,rootMargin:`${A}px 0px`}).observe(e),document.addEventListener("visibilitychange",()=>{I=!0,G()}),addEventListener("pageshow",()=>{I=!0,G()}),f.forEach(F=>{F.tape.group.visible=!0}),a.compileAsync(l,u).catch(()=>{}).then(()=>{f.forEach(F=>{F.tape.group.visible=!1}),ne=!0,I=!0,G()}),{wake(){I=!0,G()},show(F){H=F,r.style.display=F?"":"none",F&&(I=!0,G())}}}export{Ev as default,tc as grainTexture,Vo as makeTape,bv as startShelf,zo as studioEnv,Ho as tapeParts};
