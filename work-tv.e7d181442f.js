var Vc=0,al=1,Hc=2,sl=1,Gc=2,Ii=3,ji=0,Yt=1,Mi=2,qi=0,Cr=1,nl=2,ol=3,ll=4,Wc=5,ur=100,Xc=101,jc=102,qc=103,Yc=104,Jc=200,Kc=201,Zc=202,$c=203,js=204,qs=205,Qc=206,eu=207,tu=208,iu=209,ru=210,au=211,su=212,nu=213,ou=214,Ys=0,Js=1,Ks=2,Pr=3,Zs=4,$s=5,Qs=6,en=7,hl=0,lu=1,hu=2,Si=0,cu=1,uu=2,du=3,pu=4,fu=5,mu=6,gu=7,cl=300,Lr=301,Ir=302,tn=303,rn=304,ja=306,qa=1e3,dr=1001,an=1002,Zt=1003,vu=1004,Ya=1005,di=1006,sn=1007,Ni=1008,Ui=1009,ul=1010,dl=1011,_a=1012,nn=1013,pr=1014,Ei=1015,Nr=1016,on=1017,ln=1018,Ur=1020,pl=35902,fl=1021,ml=1022,pi=1023,gl=1024,vl=1025,Dr=1026,Or=1027,hn=1028,cn=1029,_l=1030,un=1031,dn=1033,Ja=33776,Ka=33777,Za=33778,$a=33779,pn=35840,fn=35841,mn=35842,gn=35843,vn=36196,_n=37492,xn=37496,yn=37808,Mn=37809,Sn=37810,En=37811,Tn=37812,bn=37813,wn=37814,An=37815,Rn=37816,Cn=37817,Pn=37818,Ln=37819,In=37820,Nn=37821,Qa=36492,Un=36494,Dn=36495,xl=36283,On=36284,Fn=36285,Bn=36286,es=2300,zn=2301,kn=2302,yl=2400,Ml=2401,Sl=2402,_u=3200,xu=3201,El=0,yu=1,Yi="",St="srgb",Fr="srgb-linear",ts="linear",lt="srgb",Br=7680,Tl=519,Mu=512,Su=513,Eu=514,bl=515,Tu=516,bu=517,wu=518,Au=519,wl=35044,Vn=35048,Al="300 es",Di=2e3,is=2001,zr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hn=Math.PI/180,Gn=180/Math.PI;function kr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ht[e&255]+Ht[e>>8&255]+Ht[e>>16&255]+Ht[e>>24&255]+"-"+Ht[t&255]+Ht[t>>8&255]+"-"+Ht[t>>16&15|64]+Ht[t>>24&255]+"-"+Ht[i&63|128]+Ht[i>>8&255]+"-"+Ht[i>>16&255]+Ht[i>>24&255]+Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]).toLowerCase()}function It(e,t,i){return Math.max(t,Math.min(i,e))}function Ru(e,t){return(e%t+t)%t}function Wn(e,t,i){return(1-i)*e+i*t}function xa(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Re=class Ec{constructor(t=0,i=0){Ec.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(It(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),s=this.x-t.x,n=this.y-t.y;return this.x=s*r-n*a+t.x,this.y=s*a+n*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class Tc{constructor(t,i,r,a,s,n,o,l,h){Tc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h)}set(t,i,r,a,s,n,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=s,c[5]=l,c[6]=r,c[7]=n,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],v=a[0],f=a[3],m=a[6],y=a[1],_=a[4],T=a[7],z=a[2],R=a[5],P=a[8];return s[0]=n*v+o*y+l*z,s[3]=n*f+o*_+l*R,s[6]=n*m+o*T+l*P,s[1]=h*v+c*y+u*z,s[4]=h*f+c*_+u*R,s[7]=h*m+c*T+u*P,s[2]=d*v+p*y+g*z,s[5]=d*f+p*_+g*R,s[8]=d*m+p*T+g*P,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*n*c-i*o*h-r*s*c+r*o*l+a*s*h-a*n*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*n-o*h,d=o*l-c*s,p=h*s-n*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*r)*v,t[2]=(o*r-a*n)*v,t[3]=d*v,t[4]=(c*i-a*l)*v,t[5]=(a*s-o*i)*v,t[6]=p*v,t[7]=(r*l-h*i)*v,t[8]=(n*i-r*s)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,s,n,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*n+h*o)+n+t,-a*h,a*l,-a*(-h*n+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Xn.makeScale(t,i)),this}rotate(t){return this.premultiply(Xn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xn=new Qe;function Rl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Cu(){let e=rs("canvas");return e.style.display="block",e}var Cl={};function ya(e){e in Cl||(Cl[e]=!0,console.warn(e))}function Pu(e,t,i){return new Promise(function(r,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}function Lu(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Iu(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var it={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(e,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===lt&&(e.r=Oi(e.r),e.g=Oi(e.g),e.b=Oi(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===lt&&(e.r=Vr(e.r),e.g=Vr(e.g),e.b=Vr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Yi?ts:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function Oi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Vr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Pl=[.64,.33,.3,.6,.15,.06],Ll=[.2126,.7152,.0722],Il=[.3127,.329],Nl=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[Fr]:{primaries:Pl,whitePoint:Il,transfer:ts,toXYZ:Nl,fromXYZ:Ul,luminanceCoefficients:Ll,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:Pl,whitePoint:Il,transfer:lt,toXYZ:Nl,fromXYZ:Ul,luminanceCoefficients:Ll,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});var Hr,Nu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=rs("canvas")),Hr.width=e.width,Hr.height=e.height;let i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Oi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uu=0,Dl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,n=r.length;s<n;s++)r[s].isDataTexture?a.push(jn(r[s].image)):a.push(jn(r[s]))}else a=jn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function jn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Nu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Du=0,ri=class Gs extends zr{constructor(t=Gs.DEFAULT_IMAGE,i=Gs.DEFAULT_MAPPING,r=dr,a=dr,s=di,n=Ni,o=pi,l=Ui,h=Gs.DEFAULT_ANISOTROPY,c=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=kr(),this.name="",this.source=new Dl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case dr:t.x=t.x<0?0:1;break;case an:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case dr:t.y=t.y<0?0:1;break;case an:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null,ri.DEFAULT_MAPPING=cl,ri.DEFAULT_ANISOTROPY=1;var bt=class bc{constructor(t=0,i=0,r=0,a=1){bc.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=this.w,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*i+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*i+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*i+n[7]*r+n[11]*a+n[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,s,n=t.elements,o=n[0],l=n[4],h=n[8],c=n[1],u=n[5],d=n[9],p=n[2],g=n[6],v=n[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,y=(u+1)/2,_=(v+1)/2,T=(l+c)/4,z=(h+p)/4,R=(d+g)/4;return m>y&&m>_?m<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(m),a=T/r,s=z/r):y>_?y<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),r=T/a,s=R/a):_<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(_),r=z/s,a=R/s),this.set(r,a,s,i),this}let f=Math.sqrt((g-d)*(g-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(f)<.001&&(f=1),this.x=(g-d)/f,this.y=(h-p)/f,this.z=(c-l)/f,this.w=Math.acos((o+u+v-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ou=class extends zr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new ri(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let n=0;n<s;n++)this.textures[n]=a.clone(),this.textures[n].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ji=class extends Ou{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ol=class extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Fu=class extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[s+0],d=a[s+1],p=a[s+2],g=a[s+3];if(n===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(n===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c!==g||o!==u||l!==d||h!==p){let v=1-n,f=o*u+l*d+h*p+c*g,m=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let T=Math.sqrt(y),z=Math.atan2(T,f*m);v=Math.sin(v*z)/T,n=Math.sin(n*z)/T}let _=n*m;if(o=o*v+u*_,l=l*v+d*_,h=h*v+p*_,c=c*v+g*_,v===1-n){let T=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=T,l*=T,h*=T,c*=T}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[s],u=a[s+1],d=a[s+2],p=a[s+3];return e[t]=n*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-n*d,e[t+2]=l*p+h*d+n*u-o*c,e[t+3]=h*p-n*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),c=n(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+n+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(s-r)*d}else if(i>n&&i>c){let d=2*Math.sqrt(1+i-n-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+l)/d}else if(n>c){let d=2*Math.sqrt(1+n-i-c);this._w=(a-l)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-n);this._w=(s-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,n=s*e._w+i*e._x+r*e._y+a*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let o=1-n*n;if(o<=Number.EPSILON){let d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,n),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=s*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class wc{constructor(t=0,i=0,r=0){wc.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Fl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[3]*r+s[6]*a,this.y=s[1]*i+s[4]*r+s[7]*a,this.z=s[2]*i+s[5]*r+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=t.elements,n=1/(s[3]*i+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*i+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*i+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,s=t.x,n=t.y,o=t.z,l=t.w,h=2*(n*a-o*r),c=2*(o*i-s*a),u=2*(s*r-n*i);return this.x=i+l*h+n*u-o*c,this.y=r+l*c+o*h-s*u,this.z=a+l*u+s*c-n*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a,this.y=s[1]*i+s[5]*r+s[9]*a,this.z=s[2]*i+s[6]*r+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,s=t.z,n=i.x,o=i.y,l=i.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return qn.copy(this).projectOnVector(t),this.sub(qn)}reflect(t){return this.sub(qn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(It(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qn=new L,Fl=new Ti,fr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,n=a.count;s<n;s++)e.isMesh===!0?e.getVertexPosition(s,fi):fi.fromBufferAttribute(a,s),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),as.copy(i.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),ss.subVectors(this.max,Ma),Gr.subVectors(e.a,Ma),Wr.subVectors(e.b,Ma),Xr.subVectors(e.c,Ma),Ki.subVectors(Wr,Gr),Zi.subVectors(Xr,Wr),mr.subVectors(Gr,Xr);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-mr.z,mr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,mr.z,0,-mr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-mr.y,mr.x,0];return!Yn(t,Gr,Wr,Xr,ss)||(t=[1,0,0,0,1,0,0,0,1],!Yn(t,Gr,Wr,Xr,ss))?!1:(ns.crossVectors(Ki,Zi),t=[ns.x,ns.y,ns.z],Yn(t,Gr,Wr,Xr,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Fi=[new L,new L,new L,new L,new L,new L,new L,new L],fi=new L,as=new fr,Gr=new L,Wr=new L,Xr=new L,Ki=new L,Zi=new L,mr=new L,Ma=new L,ss=new L,ns=new L,gr=new L;function Yn(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){gr.fromArray(e,s);let o=a.x*Math.abs(gr.x)+a.y*Math.abs(gr.y)+a.z*Math.abs(gr.z),l=t.dot(gr),h=i.dot(gr),c=r.dot(gr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Bu=new fr,Sa=new L,Jn=new L,Ea=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Jn)),this.expandByPoint(Sa.copy(e.center).sub(Jn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bi=new L,Kn=new L,os=new L,$i=new L,Zn=new L,ls=new L,$n=new L,Bl=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kn.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Kn);let a=e.distanceTo(t)*.5,s=-this.direction.dot(os),n=$i.dot(this.direction),o=-$i.dot(os),l=$i.lengthSq(),h=Math.abs(1-s*s),c,u,d,p;if(h>0)if(c=s*o-n,u=s*n-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+s*u+2*n)+u*(s*c+u+2*o)+l}else u=a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-s*a+n)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(s*a+n)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=s>0?-a:a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Kn).addScaledVector(os,u),d}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),c>=0?(n=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(n=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||n>r)||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,r,a){Zn.subVectors(t,e),ls.subVectors(i,e),$n.crossVectors(Zn,ls);let s=this.direction.dot($n),n;if(s>0){if(r)return null;n=1}else if(s<0)n=-1,s=-s;else return null;$i.subVectors(this.origin,e);let o=n*this.direction.dot(ls.crossVectors($i,ls));if(o<0)return null;let l=n*this.direction.dot(Zn.cross($i));if(l<0||o+l>s)return null;let h=-n*$i.dot($n);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class Qo{constructor(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){Qo.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f)}set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=a,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qo().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/jr.setFromMatrixColumn(t,0).length(),s=1/jr.setFromMatrixColumn(t,1).length(),n=1/jr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*n,i[9]=r[9]*n,i[10]=r[10]*n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,s=t.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-v*h,i[9]=-o*l,i[2]=v-d*h,i[6]=g+p*h,i[10]=n*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d+v*o,i[4]=g*o-p,i[8]=n*h,i[1]=n*u,i[5]=n*c,i[9]=-o,i[2]=p*o-g,i[6]=v+d*o,i[10]=n*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d-v*o,i[4]=-n*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=n*c,i[9]=v-d*o,i[2]=-n*h,i[6]=o,i[10]=n*l}else if(t.order==="ZYX"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+v,i[1]=l*u,i[5]=v*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=n*l}else if(t.order==="YZX"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-d*u,i[8]=g*u+p,i[1]=u,i[5]=n*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-v*u}else if(t.order==="XZY"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+v,i[5]=n*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=v*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zu,t,ku)}lookAt(t,i,r){let a=this.elements;return $t.subVectors(t,i),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Qi.crossVectors(r,$t),Qi.lengthSq()===0&&(Math.abs(r.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Qi.crossVectors(r,$t)),Qi.normalize(),hs.crossVectors($t,Qi),a[0]=Qi.x,a[4]=hs.x,a[8]=$t.x,a[1]=Qi.y,a[5]=hs.y,a[9]=$t.y,a[2]=Qi.z,a[6]=hs.z,a[10]=$t.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],v=r[6],f=r[10],m=r[14],y=r[3],_=r[7],T=r[11],z=r[15],R=a[0],P=a[4],D=a[8],M=a[12],E=a[1],C=a[5],U=a[9],O=a[13],H=a[2],ae=a[6],j=a[10],ce=a[14],te=a[3],_e=a[7],Te=a[11],ze=a[15];return s[0]=n*R+o*E+l*H+h*te,s[4]=n*P+o*C+l*ae+h*_e,s[8]=n*D+o*U+l*j+h*Te,s[12]=n*M+o*O+l*ce+h*ze,s[1]=c*R+u*E+d*H+p*te,s[5]=c*P+u*C+d*ae+p*_e,s[9]=c*D+u*U+d*j+p*Te,s[13]=c*M+u*O+d*ce+p*ze,s[2]=g*R+v*E+f*H+m*te,s[6]=g*P+v*C+f*ae+m*_e,s[10]=g*D+v*U+f*j+m*Te,s[14]=g*M+v*O+f*ce+m*ze,s[3]=y*R+_*E+T*H+z*te,s[7]=y*P+_*C+T*ae+z*_e,s[11]=y*D+_*U+T*j+z*Te,s[15]=y*M+_*O+T*ce+z*ze,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[12],n=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+s*l*u-a*h*u-s*o*d+r*h*d+a*o*p-r*l*p)+v*(+i*l*p-i*h*d+s*n*d-a*n*p+a*h*c-s*l*c)+f*(+i*h*u-i*o*p-s*n*u+r*n*p+s*o*c-r*h*c)+m*(-a*o*c-i*l*u+i*o*d+a*n*u-r*n*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],y=u*f*h-v*d*h+v*l*p-o*f*p-u*l*m+o*d*m,_=g*d*h-c*f*h-g*l*p+n*f*p+c*l*m-n*d*m,T=c*v*h-g*u*h+g*o*p-n*v*p-c*o*m+n*u*m,z=g*u*l-c*v*l-g*o*d+n*v*d+c*o*f-n*u*f,R=i*y+r*_+a*T+s*z;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=y*P,t[1]=(v*d*s-u*f*s-v*a*p+r*f*p+u*a*m-r*d*m)*P,t[2]=(o*f*s-v*l*s+v*a*h-r*f*h-o*a*m+r*l*m)*P,t[3]=(u*l*s-o*d*s-u*a*h+r*d*h+o*a*p-r*l*p)*P,t[4]=_*P,t[5]=(c*f*s-g*d*s+g*a*p-i*f*p-c*a*m+i*d*m)*P,t[6]=(g*l*s-n*f*s-g*a*h+i*f*h+n*a*m-i*l*m)*P,t[7]=(n*d*s-c*l*s+c*a*h-i*d*h-n*a*p+i*l*p)*P,t[8]=T*P,t[9]=(g*u*s-c*v*s-g*r*p+i*v*p+c*r*m-i*u*m)*P,t[10]=(n*v*s-g*o*s+g*r*h-i*v*h-n*r*m+i*o*m)*P,t[11]=(c*o*s-n*u*s-c*r*h+i*u*h+n*r*p-i*o*p)*P,t[12]=z*P,t[13]=(c*v*a-g*u*a+g*r*d-i*v*d-c*r*f+i*u*f)*P,t[14]=(g*o*a-n*v*a-g*r*l+i*v*l+n*r*f-i*o*f)*P,t[15]=(n*u*a-c*o*a+c*r*l-i*u*l-n*r*d+i*o*d)*P,this}scale(t){let i=this.elements,r=t.x,a=t.y,s=t.z;return i[0]*=r,i[4]*=a,i[8]*=s,i[1]*=r,i[5]*=a,i[9]*=s,i[2]*=r,i[6]*=a,i[10]*=s,i[3]*=r,i[7]*=a,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),s=1-r,n=t.x,o=t.y,l=t.z,h=s*n,c=s*o;return this.set(h*n+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*n,0,h*l-a*o,c*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,s,n){return this.set(1,r,s,0,t,1,n,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,s=i._x,n=i._y,o=i._z,l=i._w,h=s+s,c=n+n,u=o+o,d=s*h,p=s*c,g=s*u,v=n*c,f=n*u,m=o*u,y=l*h,_=l*c,T=l*u,z=r.x,R=r.y,P=r.z;return a[0]=(1-(v+m))*z,a[1]=(p+T)*z,a[2]=(g-_)*z,a[3]=0,a[4]=(p-T)*R,a[5]=(1-(d+m))*R,a[6]=(f+y)*R,a[7]=0,a[8]=(g+_)*P,a[9]=(f-y)*P,a[10]=(1-(d+v))*P,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,s=jr.set(a[0],a[1],a[2]).length(),n=jr.set(a[4],a[5],a[6]).length(),o=jr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],mi.copy(this);let l=1/s,h=1/n,c=1/o;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=c,mi.elements[9]*=c,mi.elements[10]*=c,i.setFromRotationMatrix(mi),r.x=s,r.y=n,r.z=o,this}makePerspective(t,i,r,a,s,n,o=Di){let l=this.elements,h=2*s/(i-t),c=2*s/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===Di)p=-(n+s)/(n-s),g=-2*n*s/(n-s);else if(o===is)p=-n/(n-s),g=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,s,n,o=Di){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(n-s),d=(i+t)*h,p=(r+a)*c,g,v;if(o===Di)g=(n+s)*u,v=-2*u;else if(o===is)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},jr=new L,mi=new ht,zu=new L(0,0,0),ku=new L(1,1,1),Qi=new L,hs=new L,$t=new L,zl=new ht,kl=new Ti,er=class Ac{constructor(t=0,i=0,r=0,a=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,s=a[0],n=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};er.DEFAULT_ORDER="XYZ";var Qn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vu=0,Vl=new L,qr=new Ti,zi=new ht,cs=new L,Ta=new L,Hu=new L,Gu=new Ti,Hl=new L(1,0,0),Gl=new L(0,1,0),Wl=new L(0,0,1),Xl={type:"added"},Wu={type:"removed"},Yr={type:"childadded",child:null},eo={type:"childremoved",child:null},ai=class Ws extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ws.DEFAULT_UP.clone();let t=new L,i=new er,r=new Ti,a=new L(1,1,1);function s(){r.setFromEuler(i,!1)}function n(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new Qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ws.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ws.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return qr.setFromAxisAngle(t,i),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,i){return qr.setFromAxisAngle(t,i),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,i){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?cs.copy(t):cs.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ta,cs,this.up):zi.lookAt(cs,Ta,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),qr.setFromRotationMatrix(zi),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Wu),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),c=n(t.images),u=n(t.shapes),d=n(t.skeletons),p=n(t.animations),g=n(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function n(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};ai.DEFAULT_UP=new L(0,1,0),ai.DEFAULT_MATRIX_AUTO_UPDATE=!0,ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new L,ki=new L,to=new L,Vi=new L,Jr=new L,Kr=new L,jl=new L,io=new L,ro=new L,ao=new L,so=new bt,no=new bt,oo=new bt,ba=class da{constructor(t=new L,i=new L,r=new L){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),gi.subVectors(t,i),a.cross(gi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,i,r,a,s){gi.subVectors(a,i),ki.subVectors(r,i),to.subVectors(t,i);let n=gi.dot(gi),o=gi.dot(ki),l=gi.dot(to),h=ki.dot(ki),c=ki.dot(to),u=n*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,g=(n*c-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,i,r,a,s,n,o,l){return this.getBarycoord(t,i,r,a,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(n,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,i,r,a,s,n){return so.setScalar(0),no.setScalar(0),oo.setScalar(0),so.fromBufferAttribute(t,i),no.fromBufferAttribute(t,r),oo.fromBufferAttribute(t,a),n.setScalar(0),n.addScaledVector(so,s.x),n.addScaledVector(no,s.y),n.addScaledVector(oo,s.z),n}static isFrontFacing(t,i,r,a){return gi.subVectors(r,i),ki.subVectors(t,i),gi.cross(ki).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),gi.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return da.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return da.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,s){return da.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}containsPoint(t){return da.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return da.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,s=this.c,n,o;Jr.subVectors(a,r),Kr.subVectors(s,r),io.subVectors(t,r);let l=Jr.dot(io),h=Kr.dot(io);if(l<=0&&h<=0)return i.copy(r);ro.subVectors(t,a);let c=Jr.dot(ro),u=Kr.dot(ro);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return n=l/(l-c),i.copy(r).addScaledVector(Jr,n);ao.subVectors(t,s);let p=Jr.dot(ao),g=Kr.dot(ao);if(g>=0&&p<=g)return i.copy(s);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Kr,o);let f=c*g-p*u;if(f<=0&&u-c>=0&&p-g>=0)return jl.subVectors(s,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(jl,o);let m=1/(f+v+d);return n=v*m,o=d*m,i.copy(r).addScaledVector(Jr,n).addScaledVector(Kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},us={h:0,s:0,l:0};function lo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Ru(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=lo(s,a,e+1/3),this.g=lo(s,a,e),this.b=lo(s,a,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],n=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let i=ql[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(It(Gt.r*255,0,255))*65536+Math.round(It(Gt.g*255,0,255))*256+Math.round(It(Gt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),t);let i=Gt.r,r=Gt.g,a=Gt.b,s=Math.max(i,r,a),n=Math.min(i,r,a),o,l,h=(n+s)/2;if(n===s)o=0,l=0;else{let c=s-n;switch(l=h<=.5?c/(s+n):c/(2-s-n),s){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=St){it.fromWorkingColorSpace(Gt.copy(this),e);let t=Gt.r,i=Gt.g,r=Gt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(us);let i=Wn(tr.h,us.h,t),r=Wn(tr.s,us.s,t),a=Wn(tr.l,us.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Je;Je.NAMES=ql;var Xu=0,wa=class extends zr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=kr(),this.name="",this.blending=Cr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=qs,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==js&&(i.blendSrc=this.blendSrc),this.blendDst!==qs&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let n in a){let o=a[n];delete o.metadata,s.push(o)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Hi=class extends wa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wt=new L,ds=new Re,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wl,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),a=Jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}},Yl=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Jl=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ct=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},ju=0,si=new ht,ho=new ai,Zr=new L,Qt=new fr,Aa=new fr,Nt=new L,Xt=class Rc extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rl(t)?Jl:Yl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new Qe().getNormalMatrix(t);r.applyNormalMatrix(s),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,s=t.length;a<s;a++){let n=t[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new ct(r,3))}else{for(let r=0,a=i.count;r<a;r++){let s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let s=i[r];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let r=this.boundingSphere.center;if(Qt.setFromBufferAttribute(t),i)for(let s=0,n=i.length;s<n;s++){let o=i[s];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Qt.min,Aa.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,Aa.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint(Aa.min),Qt.expandByPoint(Aa.max))}Qt.getCenter(r);let a=0;for(let s=0,n=t.count;s<n;s++)Nt.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(Nt));if(i)for(let s=0,n=i.length;s<n;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Nt.fromBufferAttribute(o,h),l&&(Zr.fromBufferAttribute(t,h),Nt.add(Zr)),a=Math.max(a,r.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*r.count),4));let n=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<r.count;D++)o[D]=new L,l[D]=new L;let h=new L,c=new L,u=new L,d=new Re,p=new Re,g=new Re,v=new L,f=new L;function m(D,M,E){h.fromBufferAttribute(r,D),c.fromBufferAttribute(r,M),u.fromBufferAttribute(r,E),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,E),c.sub(h),u.sub(h),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),f.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(C),o[D].add(v),o[M].add(v),o[E].add(v),l[D].add(f),l[M].add(f),l[E].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,M=y.length;D<M;++D){let E=y[D],C=E.start,U=E.count;for(let O=C,H=C+U;O<H;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new L,T=new L,z=new L,R=new L;function P(D){z.fromBufferAttribute(a,D),R.copy(z);let M=o[D];_.copy(M),_.sub(z.multiplyScalar(z.dot(M))).normalize(),T.crossVectors(R,M);let E=T.dot(l[D])<0?-1:1;n.setXYZW(D,_.x,_.y,_.z,E)}for(let D=0,M=y.length;D<M;++D){let E=y[D],C=E.start,U=E.count;for(let O=C,H=C+U;O<H;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new At(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new L,s=new L,n=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);a.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),n.fromBufferAttribute(i,f),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,f),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),s.fromBufferAttribute(i,d+1),n.fromBufferAttribute(i,d+2),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Nt.fromBufferAttribute(t,i),Nt.normalize(),t.setXYZ(i,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let m=0;m<c;m++)d[g++]=h[p++]}return new At(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Rc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let s=t.morphAttributes;for(let h in s){let c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,c=n.length;h<c;h++){let u=n[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kl=new ht,vr=new Bl,ps=new Ea,Zl=new L,fs=new L,ms=new L,gs=new L,co=new L,vs=new L,$l=new L,_s=new L,Et=class extends ai{constructor(e=new Xt,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){vs.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=n[o],c=a[o];h!==0&&(co.fromBufferAttribute(c,e),s?vs.addScaledVector(co,h):vs.addScaledVector(co.sub(t),h))}t.add(vs)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(a),vr.copy(e.ray).recast(e.near),!(ps.containsPoint(vr.origin)===!1&&(vr.intersectSphere(ps,Zl)===null||vr.origin.distanceToSquared(Zl)>(e.far-e.near)**2))&&(Kl.copy(a).invert(),vr.copy(e.ray).applyMatrix4(Kl),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(n!==null)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(n.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,T=y;_<T;_+=3){let z=n.getX(_),R=n.getX(_+1),P=n.getX(_+2);r=xs(this,f,e,i,l,h,c,z,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(n.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=n.getX(v),y=n.getX(v+1),_=n.getX(v+2);r=xs(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,T=y;_<T;_+=3){let z=_,R=_+1,P=_+2;r=xs(this,f,e,i,l,h,c,z,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=v,y=v+1,_=v+2;r=xs(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function qu(e,t,i,r,a,s,n,o){let l;if(t.side===Yt?l=r.intersectTriangle(n,s,a,!0,o):l=r.intersectTriangle(a,s,n,t.side===ji,o),l===null)return null;_s.copy(o),_s.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(_s);return h<i.near||h>i.far?null:{distance:h,point:_s.clone(),object:e}}function xs(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,fs),e.getVertexPosition(l,ms),e.getVertexPosition(h,gs);let c=qu(e,t,i,r,fs,ms,gs,$l);if(c){let u=new L;ba.getBarycoord($l,fs,ms,gs,u),a&&(c.uv=ba.getInterpolatedAttribute(a,o,l,h,u,new Re)),s&&(c.uv1=ba.getInterpolatedAttribute(s,o,l,h,u,new Re)),n&&(c.normal=ba.getInterpolatedAttribute(n,o,l,h,u,new L),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new L,materialIndex:0};ba.getNormal(fs,ms,gs,d.normal),c.face=d,c.barycoord=u}return c}var ir=class Cc extends Xt{constructor(t=1,i=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};let o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,n,s,0),g("z","y","x",1,-1,r,i,-t,n,s,1),g("x","z","y",1,1,t,r,i,a,n,2),g("x","z","y",1,-1,t,r,-i,a,n,3),g("x","y","z",1,-1,t,i,r,a,s,4),g("x","y","z",-1,-1,t,i,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2));function g(v,f,m,y,_,T,z,R,P,D,M){let E=T/P,C=z/D,U=T/2,O=z/2,H=R/2,ae=P+1,j=D+1,ce=0,te=0,_e=new L;for(let Te=0;Te<j;Te++){let ze=Te*C-O;for(let Ee=0;Ee<ae;Ee++){let Y=Ee*E-U;_e[v]=Y*y,_e[f]=ze*_,_e[m]=H,h.push(_e.x,_e.y,_e.z),_e[v]=0,_e[f]=0,_e[m]=R>0?1:-1,c.push(_e.x,_e.y,_e.z),u.push(Ee/P),u.push(1-Te/D),ce+=1}}for(let Te=0;Te<D;Te++)for(let ze=0;ze<P;ze++){let Ee=d+ze+ae*Te,Y=d+ze+ae*(Te+1),ie=d+(ze+1)+ae*(Te+1),I=d+(ze+1)+ae*Te;l.push(Ee,Y,I),l.push(Y,ie,I),te+=6}o.addGroup(p,te,M),p+=te,d+=ce}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $r(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function jt(e){let t={};for(let i=0;i<e.length;i++){let r=$r(e[i]);for(let a in r)t[a]=r[a]}return t}function Yu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Ql(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:it.workingColorSpace}var Ju={clone:$r,merge:jt},Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends wa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Yu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},eh=class extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rr=new L,th=new Re,ih=new Re,ei=class extends eh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gn*2*Math.atan(Math.tan(Hn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,th,ih),t.subVectors(ih,th)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let n=this.filmOffset;n!==0&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qr=-90,ea=1,$u=class extends ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ei(Qr,ea,e,t);r.layers=this.layers,this.add(r);let a=new ei(Qr,ea,e,t);a.layers=this.layers,this.add(a);let s=new ei(Qr,ea,e,t);s.layers=this.layers,this.add(s);let n=new ei(Qr,ea,e,t);n.layers=this.layers,this.add(n);let o=new ei(Qr,ea,e,t);o.layers=this.layers,this.add(o);let l=new ei(Qr,ea,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let l of t)this.remove(l);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===is)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,n),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},rh=class extends ri{constructor(e,t,i,r,a,s,n,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qu=class extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),a=new bi({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:qi});a.uniforms.tEquirect.value=t;let s=new Et(r,a),n=t.minFilter;return t.minFilter===Ni&&(t.minFilter=di),new $u(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},uo=new L,ed=new L,td=new Qe,_r=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=uo.subVectors(i,t).cross(ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(uo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||td.getNormalMatrix(e),r=this.coplanarPoint(uo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xr=new Ea,ys=new L,po=class{constructor(e=new _r,t=new _r,i=new _r,r=new _r,a=new _r,s=new _r){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){let i=this.planes,r=e.elements,a=r[0],s=r[1],n=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],v=r[11],f=r[12],m=r[13],y=r[14],_=r[15];if(i[0].setComponents(o-a,u-l,v-d,_-f).normalize(),i[1].setComponents(o+a,u+l,v+d,_+f).normalize(),i[2].setComponents(o+s,u+h,v+p,_+m).normalize(),i[3].setComponents(o-s,u-h,v-p,_-m).normalize(),i[4].setComponents(o-n,u-c,v-g,_-y).normalize(),t===Di)i[5].setComponents(o+n,u+c,v+g,_+y).normalize();else if(t===is)i[5].setComponents(n,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ah(){let e=null,t=!1,i=null,r=null;function a(s,n){i(s,n),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function id(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];e.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:s,update:n}}var ni=class Pc extends Xt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let s=t/2,n=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],v=[],f=[];for(let m=0;m<c;m++){let y=m*d-n;for(let _=0;_<h;_++){let T=_*u-s;g.push(T,-y,0),v.push(0,0,1),f.push(_/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+h*m,T=y+h*(m+1),z=y+1+h*(m+1),R=y+1+h*m;p.push(_,T,R),p.push(T,z,R)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.width,t.height,t.widthSegments,t.heightSegments)}},rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
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
#endif`,sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gd=`#ifdef USE_IRIDESCENCE
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
#endif`,vd=`#ifdef USE_BUMPMAP
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wd=`#define PI 3.141592653589793
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
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rd=`vec3 transformedNormal = objectNormal;
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
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
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
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yd=`uniform bool receiveShadow;
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
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,ip=`
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
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
}`,cf=`#if DEPTH_PACKING == 3200
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
}`,uf=`#define DISTANCE
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
}`,df=`#define DISTANCE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
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
}`,gf=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,_f=`uniform vec3 diffuse;
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
}`,xf=`#define LAMBERT
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
}`,yf=`#define LAMBERT
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
}`,Mf=`#define MATCAP
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
}`,Sf=`#define MATCAP
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
}`,Ef=`#define NORMAL
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
}`,Tf=`#define NORMAL
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
}`,bf=`#define PHONG
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
}`,wf=`#define PHONG
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
}`,Af=`#define STANDARD
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
}`,Rf=`#define STANDARD
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
}`,Cf=`#define TOON
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
}`,Pf=`#define TOON
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
}`,Lf=`uniform float size;
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
}`,If=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,Uf=`uniform vec3 color;
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
}`,Df=`uniform float rotation;
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
}`,Of=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:rd,alphahash_pars_fragment:ad,alphamap_fragment:sd,alphamap_pars_fragment:nd,alphatest_fragment:od,alphatest_pars_fragment:ld,aomap_fragment:hd,aomap_pars_fragment:cd,batching_pars_vertex:ud,batching_vertex:dd,begin_vertex:pd,beginnormal_vertex:fd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:vd,clipping_planes_fragment:_d,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Md,color_fragment:Sd,color_pars_fragment:Ed,color_pars_vertex:Td,color_vertex:bd,common:wd,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Pd,emissivemap_fragment:Ld,emissivemap_pars_fragment:Id,colorspace_fragment:Nd,colorspace_pars_fragment:Ud,envmap_fragment:Dd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Fd,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Jd,envmap_vertex:zd,fog_vertex:kd,fog_pars_vertex:Vd,fog_fragment:Hd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:qd,lights_pars_begin:Yd,lights_toon_fragment:Kd,lights_toon_pars_fragment:Zd,lights_phong_fragment:$d,lights_phong_pars_fragment:Qd,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:ip,lights_fragment_maps:rp,lights_fragment_end:ap,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:lp,map_fragment:hp,map_pars_fragment:cp,map_particle_fragment:up,map_particle_pars_fragment:dp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:fp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:vp,morphtarget_pars_vertex:_p,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:Ep,normal_vertex:Tp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Pp,packing:Lp,premultiplied_alpha_fragment:Ip,project_vertex:Np,dithering_fragment:Up,dithering_pars_fragment:Dp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:zp,shadowmap_vertex:kp,shadowmask_pars_fragment:Vp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:jp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:Jp,transmission_fragment:Kp,transmission_pars_fragment:Zp,uv_pars_fragment:$p,uv_pars_vertex:Qp,uv_vertex:ef,worldpos_vertex:tf,background_vert:rf,background_frag:af,backgroundCube_vert:sf,backgroundCube_frag:nf,cube_vert:of,cube_frag:lf,depth_vert:hf,depth_frag:cf,distanceRGBA_vert:uf,distanceRGBA_frag:df,equirect_vert:pf,equirect_frag:ff,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:vf,meshbasic_frag:_f,meshlambert_vert:xf,meshlambert_frag:yf,meshmatcap_vert:Mf,meshmatcap_frag:Sf,meshnormal_vert:Ef,meshnormal_frag:Tf,meshphong_vert:bf,meshphong_frag:wf,meshphysical_vert:Af,meshphysical_frag:Rf,meshtoon_vert:Cf,meshtoon_frag:Pf,points_vert:Lf,points_frag:If,shadow_vert:Nf,shadow_frag:Uf,sprite_vert:Df,sprite_frag:Of},Ne={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},wi={basic:{uniforms:jt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([Ne.points,Ne.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([Ne.common,Ne.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([Ne.sprite,Ne.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:jt([Ne.common,Ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:jt([Ne.lights,Ne.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};wi.physical={uniforms:jt([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Ms={r:0,b:0,g:0},yr=new er,Ff=new ht;function Bf(e,t,i,r,a,s,n){let o=new Je(0),l=s===!0?0:1,h,c,u=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?i:t).get(_)),_}function v(y){let _=!1,T=g(y);T===null?m(o,l):T&&T.isColor&&(m(T,1),_=!0);let z=e.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,n):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,n),(e.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(y,_){let T=g(_);T&&(T.isCubeTexture||T.mapping===ja)?(c===void 0&&(c=new Et(new ir(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:$r(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(z,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),yr.copy(_.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(yr)),c.material.toneMapped=it.getTransfer(T.colorSpace)!==lt,(u!==T||d!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Et(new ni(2,2),new bi({name:"BackgroundMaterial",uniforms:$r(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=it.getTransfer(T.colorSpace)!==lt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function m(y,_){y.getRGB(Ms,Ql(e)),r.buffers.color.setClear(Ms.r,Ms.g,Ms.b,_,n)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:f}}function zf(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),s=a,n=!1;function o(E,C,U,O,H){let ae=!1,j=u(O,U,C);s!==j&&(s=j,h(s.object)),ae=p(E,O,U,H),ae&&g(E,O,U,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(ae||n)&&(n=!1,T(E,C,U,O),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function h(E){return e.bindVertexArray(E)}function c(E){return e.deleteVertexArray(E)}function u(E,C,U){let O=U.wireframe===!0,H=r[E.id];H===void 0&&(H={},r[E.id]=H);let ae=H[C.id];ae===void 0&&(ae={},H[C.id]=ae);let j=ae[O];return j===void 0&&(j=d(l()),ae[O]=j),j}function d(E){let C=[],U=[],O=[];for(let H=0;H<i;H++)C[H]=0,U[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:E,attributes:{},index:null}}function p(E,C,U,O){let H=s.attributes,ae=C.attributes,j=0,ce=U.getAttributes();for(let te in ce)if(ce[te].location>=0){let _e=H[te],Te=ae[te];if(Te===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(Te=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(Te=E.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function g(E,C,U,O){let H={},ae=C.attributes,j=0,ce=U.getAttributes();for(let te in ce)if(ce[te].location>=0){let _e=ae[te];_e===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor));let Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),H[te]=Te,j++}s.attributes=H,s.attributesNum=j,s.index=O}function v(){let E=s.newAttributes;for(let C=0,U=E.length;C<U;C++)E[C]=0}function f(E){m(E,0)}function m(E,C){let U=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;U[E]=1,O[E]===0&&(e.enableVertexAttribArray(E),O[E]=1),H[E]!==C&&(e.vertexAttribDivisor(E,C),H[E]=C)}function y(){let E=s.newAttributes,C=s.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==E[U]&&(e.disableVertexAttribArray(U),C[U]=0)}function _(E,C,U,O,H,ae,j){j===!0?e.vertexAttribIPointer(E,C,U,H,ae):e.vertexAttribPointer(E,C,U,O,H,ae)}function T(E,C,U,O){v();let H=O.attributes,ae=U.getAttributes(),j=C.defaultAttributeValues;for(let ce in ae){let te=ae[ce];if(te.location>=0){let _e=H[ce];if(_e===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor)),_e!==void 0){let Te=_e.normalized,ze=_e.itemSize,Ee=t.get(_e);if(Ee===void 0)continue;let Y=Ee.buffer,ie=Ee.type,I=Ee.bytesPerElement,X=ie===e.INT||ie===e.UNSIGNED_INT||_e.gpuType===nn;if(_e.isInterleavedBufferAttribute){let k=_e.data,le=k.stride,me=_e.offset;if(k.isInstancedInterleavedBuffer){for(let be=0;be<te.locationSize;be++)m(te.location+be,k.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let be=0;be<te.locationSize;be++)f(te.location+be);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let be=0;be<te.locationSize;be++)_(te.location+be,ze/te.locationSize,ie,Te,le*I,(me+ze/te.locationSize*be)*I,X)}else{if(_e.isInstancedBufferAttribute){for(let k=0;k<te.locationSize;k++)m(te.location+k,_e.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let k=0;k<te.locationSize;k++)f(te.location+k);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let k=0;k<te.locationSize;k++)_(te.location+k,ze/te.locationSize,ie,Te,ze*I,ze/te.locationSize*k*I,X)}}else if(j!==void 0){let Te=j[ce];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(te.location,Te);break;case 3:e.vertexAttrib3fv(te.location,Te);break;case 4:e.vertexAttrib4fv(te.location,Te);break;default:e.vertexAttrib1fv(te.location,Te)}}}}y()}function z(){D();for(let E in r){let C=r[E];for(let U in C){let O=C[U];for(let H in O)c(O[H].object),delete O[H];delete C[U]}delete r[E]}}function R(E){if(r[E.id]===void 0)return;let C=r[E.id];for(let U in C){let O=C[U];for(let H in O)c(O[H].object),delete O[H];delete C[U]}delete r[E.id]}function P(E){for(let C in r){let U=r[C];if(U[E.id]===void 0)continue;let O=U[E.id];for(let H in O)c(O[H].object),delete O[H];delete U[E.id]}}function D(){M(),n=!0,s!==a&&(s=a,h(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:z,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:f,disableUnusedAttributes:y}}function kf(e,t,i){let r;function a(h){r=h}function s(h,c){e.drawArrays(r,h,c),i.update(c,r,1)}function n(h,c,u){u!==0&&(e.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)n(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];i.update(g,r,1)}}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vf(e,t,i,r){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(P){return!(P!==pi&&r.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let D=P===Nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ui&&r.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ei&&!D)}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:z,maxSamples:R}}function Hf(e){let t=this,i=null,r=0,a=!1,s=!1,n=new _r,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,m=e.get(u);if(!a||g===null||g.length===0||s&&!f)s?c(null):h();else{let y=s?0:r,_=y*4,T=m.clippingState||null;l.value=T,T=c(g,d,_,p);for(let z=0;z!==_;++z)T[z]=i[z];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let v=u!==null?u.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let m=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,T=p;_!==v;++_,T+=4)n.copy(u[_]).applyMatrix4(y,o),n.normal.toArray(f,T),f[T+3]=n.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Gf(e){let t=new WeakMap;function i(n,o){return o===tn?n.mapping=Lr:o===rn&&(n.mapping=Ir),n}function r(n){if(n&&n.isTexture){let o=n.mapping;if(o===tn||o===rn)if(t.has(n)){let l=t.get(n).texture;return i(l,n.mapping)}else{let l=n.image;if(l&&l.height>0){let h=new Qu(l.height);return h.fromEquirectangularTexture(e,n),t.set(n,h),n.addEventListener("dispose",a),i(h.texture,n.mapping)}else return null}}return n}function a(n){let o=n.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:r,dispose:s}}var fo=class extends eh{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ta=4,sh=[.125,.215,.35,.446,.526,.582],Mr=20,mo=new fo,nh=new Je,go=null,vo=0,_o=0,xo=!1,Sr=(1+Math.sqrt(5))/2,ia=1/Sr,oh=[new L(-Sr,ia,0),new L(Sr,ia,0),new L(-ia,0,Sr),new L(ia,0,Sr),new L(0,Sr,-ia),new L(0,Sr,ia),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,vo,_o),this._renderer.xr.enabled=xo,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:Nr,format:pi,colorSpace:Fr,depthBuffer:!1},r=lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wf(a)),this._blurMaterial=Xf(a,e,t)}return r}_compileMaterial(e){let t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,r){let a=new ei(90,1,t,i),s=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(nh),o.toneMapping=Si,o.autoClear=!1;let c=new Hi({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),u=new Et(new ir,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(nh),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,s[g],0),a.lookAt(n[g],0,0)):v===1?(a.up.set(0,0,s[g]),a.lookAt(0,n[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,n[g]));let f=this._cubeSize;Ss(r,v*f,g>2?f:0,f,f),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Lr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new Et(this._lodPlanes[0],a),n=a.uniforms;n.envMap.value=e;let o=this._cubeSize;Ss(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,mo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),n=oh[(r-a-1)%oh.length];this._blur(e,a-1,a,s,n)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,n){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new Et(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Mr-1),g=a/p,v=isFinite(a)?1+Math.floor(h*g):Mr;v>Mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Mr}`);let f=[],m=0;for(let R=0;R<Mr;++R){let P=R/g,D=Math.exp(-P*P/2);f.push(D),R===0?m+=D:R<v&&(m+=2*D)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=s==="latitudinal",n&&(u.poleAxis.value=n);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let _=this._sizeLods[r],T=3*_*(r>y-ta?r-y+ta:0),z=4*(this._cubeSize-_);Ss(t,T,z,3*_,2*_),o.setRenderTarget(t),o.render(c,mo)}};function Wf(e){let t=[],i=[],r=[],a=e,s=e-ta+1+sh.length;for(let n=0;n<s;n++){let o=Math.pow(2,a);i.push(o);let l=1/o;n>e-ta?l=sh[n-e+ta-1]:n===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,v=3,f=2,m=1,y=new Float32Array(v*g*p),_=new Float32Array(f*g*p),T=new Float32Array(m*g*p);for(let R=0;R<p;R++){let P=R%3*2/3-1,D=R>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];y.set(M,v*g*R),_.set(d,f*g*R);let E=[R,R,R,R,R,R];T.set(E,m*g*R)}let z=new Xt;z.setAttribute("position",new At(y,v)),z.setAttribute("uv",new At(_,f)),z.setAttribute("faceIndex",new At(T,m)),t.push(z),a>ta&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function lh(e,t,i){let r=new Ji(e,t,i);return r.texture.mapping=ja,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ss(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Xf(e,t,i){let r=new Float32Array(Mr),a=new L(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function hh(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ch(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function jf(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===tn||l===rn,c=l===Lr||l===Ir;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new yo(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new yo(e)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function s(o){let l=o.target;l.removeEventListener("dispose",s);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function n(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:n}}function qf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&ya("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Yf(e,t,i,r){let a={},s=new WeakMap;function n(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}d.removeEventListener("dispose",n),delete a[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",n),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let _=0,T=y.length;_<T;_+=3){let z=y[_+0],R=y[_+1],P=y[_+2];d.push(z,R,R,P,P,z)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,T=y.length/3-1;_<T;_+=3){let z=_+0,R=_+1,P=_+2;d.push(z,R,R,P,P,z)}}else return;let f=new(Rl(d)?Jl:Yl)(d,1);f.version=v;let m=s.get(u);m&&t.remove(m),s.set(u,f)}function c(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Jf(e,t,i){let r;function a(d){r=d}let s,n;function o(d){s=d.type,n=d.bytesPerElement}function l(d,p){e.drawElements(r,p,s,d*n),i.update(p,r,1)}function h(d,p,g){g!==0&&(e.drawElementsInstanced(r,p,s,d*n,g),i.update(p,r,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,d,0,g);let v=0;for(let f=0;f<g;f++)v+=p[f];i.update(v,r,1)}function u(d,p,g,v){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)h(d[m]/n,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(r,p,0,s,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y]*v[y];i.update(m,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Kf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Zf(e,t,i){let r=new WeakMap,a=new bt;function s(n,o,l){let h=n.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){D.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;g===!0&&(T=1),v===!0&&(T=2),f===!0&&(T=3);let z=o.attributes.position.count*T,R=1;z>t.maxTextureSize&&(R=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);let P=new Float32Array(z*R*4*u),D=new Ol(P,z,R,u);D.type=Ei,D.needsUpdate=!0;let M=T*4;for(let E=0;E<u;E++){let C=m[E],U=y[E],O=_[E],H=z*R*4*E;for(let ae=0;ae<C.count;ae++){let j=ae*M;g===!0&&(a.fromBufferAttribute(C,ae),P[H+j+0]=a.x,P[H+j+1]=a.y,P[H+j+2]=a.z,P[H+j+3]=0),v===!0&&(a.fromBufferAttribute(U,ae),P[H+j+4]=a.x,P[H+j+5]=a.y,P[H+j+6]=a.z,P[H+j+7]=0),f===!0&&(a.fromBufferAttribute(O,ae),P[H+j+8]=a.x,P[H+j+9]=a.y,P[H+j+10]=a.z,P[H+j+11]=O.itemSize===4?a.w:1)}}d={count:u,texture:D,size:new Re(z,R)},r.set(o,d),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function $f(e,t,i,r){let a=new WeakMap;function s(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function n(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:n}}var uh=class extends ri{constructor(e,t,i,r,a,s,n,o,l,h=Dr){if(h!==Dr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dr&&(i=pr),i===void 0&&h===Or&&(i=Ur),super(null,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=n!==void 0?n:Zt,this.minFilter=o!==void 0?o:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dh=new ri,ph=new uh(1,1),fh=new Ol,mh=new Fu,gh=new rh,vh=[],_h=[],xh=new Float32Array(16),yh=new Float32Array(9),Mh=new Float32Array(4);function ra(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=vh[a];if(s===void 0&&(s=new Float32Array(a),vh[a]=s),t!==0){r.toArray(s,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(s,o)}return s}function Rt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ct(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Es(e,t){let i=_h[t];i===void 0&&(i=new Int32Array(t),_h[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Qf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2fv(this.addr,t),Ct(i,t)}}function tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rt(i,t))return;e.uniform3fv(this.addr,t),Ct(i,t)}}function im(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4fv(this.addr,t),Ct(i,t)}}function rm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Rt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ct(i,t)}else{if(Rt(i,r))return;Mh.set(r),e.uniformMatrix2fv(this.addr,!1,Mh),Ct(i,r)}}function am(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Rt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ct(i,t)}else{if(Rt(i,r))return;yh.set(r),e.uniformMatrix3fv(this.addr,!1,yh),Ct(i,r)}}function sm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Rt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ct(i,t)}else{if(Rt(i,r))return;xh.set(r),e.uniformMatrix4fv(this.addr,!1,xh),Ct(i,r)}}function nm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function om(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2iv(this.addr,t),Ct(i,t)}}function lm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rt(i,t))return;e.uniform3iv(this.addr,t),Ct(i,t)}}function hm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4iv(this.addr,t),Ct(i,t)}}function cm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function um(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2uiv(this.addr,t),Ct(i,t)}}function dm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rt(i,t))return;e.uniform3uiv(this.addr,t),Ct(i,t)}}function pm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4uiv(this.addr,t),Ct(i,t)}}function fm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(ph.compareFunction=bl,s=ph):s=dh,i.setTexture2D(t||s,a)}function mm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||mh,a)}function gm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||gh,a)}function vm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||fh,a)}function _m(e){switch(e){case 5126:return Qf;case 35664:return em;case 35665:return tm;case 35666:return im;case 35674:return rm;case 35675:return am;case 35676:return sm;case 5124:case 35670:return nm;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return hm;case 5125:return cm;case 36294:return um;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}function xm(e,t){e.uniform1fv(this.addr,t)}function ym(e,t){let i=ra(t,this.size,2);e.uniform2fv(this.addr,i)}function Mm(e,t){let i=ra(t,this.size,3);e.uniform3fv(this.addr,i)}function Sm(e,t){let i=ra(t,this.size,4);e.uniform4fv(this.addr,i)}function Em(e,t){let i=ra(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Tm(e,t){let i=ra(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function bm(e,t){let i=ra(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function wm(e,t){e.uniform1iv(this.addr,t)}function Am(e,t){e.uniform2iv(this.addr,t)}function Rm(e,t){e.uniform3iv(this.addr,t)}function Cm(e,t){e.uniform4iv(this.addr,t)}function Pm(e,t){e.uniform1uiv(this.addr,t)}function Lm(e,t){e.uniform2uiv(this.addr,t)}function Im(e,t){e.uniform3uiv(this.addr,t)}function Nm(e,t){e.uniform4uiv(this.addr,t)}function Um(e,t,i){let r=this.cache,a=t.length,s=Es(i,a);Rt(r,s)||(e.uniform1iv(this.addr,s),Ct(r,s));for(let n=0;n!==a;++n)i.setTexture2D(t[n]||dh,s[n])}function Dm(e,t,i){let r=this.cache,a=t.length,s=Es(i,a);Rt(r,s)||(e.uniform1iv(this.addr,s),Ct(r,s));for(let n=0;n!==a;++n)i.setTexture3D(t[n]||mh,s[n])}function Om(e,t,i){let r=this.cache,a=t.length,s=Es(i,a);Rt(r,s)||(e.uniform1iv(this.addr,s),Ct(r,s));for(let n=0;n!==a;++n)i.setTextureCube(t[n]||gh,s[n])}function Fm(e,t,i){let r=this.cache,a=t.length,s=Es(i,a);Rt(r,s)||(e.uniform1iv(this.addr,s),Ct(r,s));for(let n=0;n!==a;++n)i.setTexture2DArray(t[n]||fh,s[n])}function Bm(e){switch(e){case 5126:return xm;case 35664:return ym;case 35665:return Mm;case 35666:return Sm;case 35674:return Em;case 35675:return Tm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Lm;case 36295:return Im;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Fm}}var zm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}},km=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bm(t.type)}},Vm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let n=r[a];n.setValue(e,t[n.id],i)}}},So=/(\w+)(\])?(\[|\.)?/g;function Sh(e,t){e.seq.push(t),e.map[t.id]=t}function Hm(e,t,i){let r=e.name,a=r.length;for(So.lastIndex=0;;){let s=So.exec(r),n=So.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===a){Sh(i,h===void 0?new zm(o,e,t):new km(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Vm(o),Sh(i,c)),i=c}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Hm(a,s,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let n=t[a],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function Eh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Gm=37297,Wm=0;function Xm(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let n=a;n<s;n++){let o=n+1;r.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return r.join(`
`)}var Th=new Qe;function jm(e){it._getMatrix(Th,it.workingColorSpace,e);let t=`mat3( ${Th.elements.map(i=>i.toFixed(4))} )`;switch(it.getTransfer(e)){case ts:return[t,"LinearTransferOETF"];case lt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function bh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let n=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+Xm(e.getShaderSource(t),n)}else return a}function qm(e,t){let i=jm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ym(e,t){let i;switch(t){case cu:i="Linear";break;case uu:i="Reinhard";break;case du:i="Cineon";break;case pu:i="ACESFilmic";break;case mu:i="AgX";break;case gu:i="Neutral";break;case fu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var bs=new L;function Jm(){it.getLuminanceCoefficients(bs);let e=bs.x.toFixed(4),t=bs.y.toFixed(4),i=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function Zm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function $m(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let s=e.getActiveAttrib(t,a),n=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[n]={type:s.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function Ra(e){return e!==""}function wh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(e){return e.replace(Qm,tg)}var eg=new Map;function tg(e,t){let i=$e[t];if(i===void 0){let r=eg.get(t);if(r!==void 0)i=$e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Eo(i)}var ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(e){return e.replace(ig,rg)}function rg(e,t,i,r){let a="";for(let s=parseInt(t);s<parseInt(i);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Ch(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function ag(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Lr:case Ir:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ir&&(t="ENVMAP_MODE_REFRACTION"),t}function og(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case lu:t="ENVMAP_BLENDING_MIX";break;case hu:t="ENVMAP_BLENDING_ADD";break}return t}function lg(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hg(e,t,i,r){let a=e.getContext(),s=i.defines,n=i.vertexShader,o=i.fragmentShader,l=ag(i),h=sg(i),c=ng(i),u=og(i),d=lg(i),p=Km(i),g=Zm(s),v=a.createProgram(),f,m,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ra).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(f=[Ch(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[Ch(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Si?"#define TONE_MAPPING":"",i.toneMapping!==Si?$e.tonemapping_pars_fragment:"",i.toneMapping!==Si?Ym("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,qm("linearToOutputTexel",i.outputColorSpace),Jm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ra).join(`
`)),n=Eo(n),n=wh(n,i),n=Ah(n,i),o=Eo(o),o=wh(o,i),o=Ah(o,i),n=Rh(n),o=Rh(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",i.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=y+f+n,T=y+m+o,z=Eh(a,a.VERTEX_SHADER,_),R=Eh(a,a.FRAGMENT_SHADER,T);a.attachShader(v,z),a.attachShader(v,R),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function P(C){if(e.debug.checkShaderErrors){let U=a.getProgramInfoLog(v).trim(),O=a.getShaderInfoLog(z).trim(),H=a.getShaderInfoLog(R).trim(),ae=!0,j=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(ae=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,z,R);else{let ce=bh(a,z,"vertex"),te=bh(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+ce+`
`+te)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||H==="")&&(j=!1);j&&(C.diagnostics={runnable:ae,programLog:U,vertexShader:{log:O,prefix:f},fragmentShader:{log:H,prefix:m}})}a.deleteShader(z),a.deleteShader(R),D=new Ts(a,v),M=$m(a,v)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(v,Gm)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=R,this}var cg=0,ug=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dg(e),t.set(e,i)),i}},dg=class{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}};function pg(e,t,i,r,a,s,n){let o=new Qn,l=new ug,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function f(M,E,C,U,O){let H=U.fog,ae=O.geometry,j=M.isMeshStandardMaterial?U.environment:null,ce=(M.isMeshStandardMaterial?i:t).get(M.envMap||j),te=ce&&ce.mapping===ja?ce.image.height:null,_e=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Te=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ze=Te!==void 0?Te.length:0,Ee=0;ae.morphAttributes.position!==void 0&&(Ee=1),ae.morphAttributes.normal!==void 0&&(Ee=2),ae.morphAttributes.color!==void 0&&(Ee=3);let Y,ie,I,X;if(_e){let Ye=wi[_e];Y=Ye.vertexShader,ie=Ye.fragmentShader}else Y=M.vertexShader,ie=M.fragmentShader,l.update(M),I=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);let k=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),me=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,J=!!M.map,de=!!M.matcap,w=!!ce,ge=!!M.aoMap,se=!!M.lightMap,Se=!!M.bumpMap,oe=!!M.normalMap,Pe=!!M.displacementMap,q=!!M.emissiveMap,W=!!M.metalnessMap,b=!!M.roughnessMap,x=M.anisotropy>0,A=M.clearcoat>0,re=M.dispersion>0,ne=M.iridescence>0,G=M.sheen>0,Oe=M.transmission>0,ve=x&&!!M.anisotropyMap,we=A&&!!M.clearcoatMap,We=A&&!!M.clearcoatNormalMap,xe=A&&!!M.clearcoatRoughnessMap,Ue=ne&&!!M.iridescenceMap,pe=ne&&!!M.iridescenceThicknessMap,fe=G&&!!M.sheenColorMap,he=G&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Le=!!M.specularColorMap,Ve=!!M.specularIntensityMap,N=Oe&&!!M.transmissionMap,ue=Oe&&!!M.thicknessMap,ee=!!M.gradientMap,V=!!M.alphaMap,$=M.alphaTest>0,Q=!!M.alphaHash,De=!!M.extensions,Ce=Si;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let qe={shaderID:_e,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:ie,defines:M.defines,customVertexShaderID:I,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:me,instancingColor:me&&O.instanceColor!==null,instancingMorph:me&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Fr,alphaToCoverage:!!M.alphaToCoverage,map:J,matcap:de,envMap:w,envMapMode:w&&ce.mapping,envMapCubeUVHeight:te,aoMap:ge,lightMap:se,bumpMap:Se,normalMap:oe,displacementMap:d&&Pe,emissiveMap:q,normalMapObjectSpace:oe&&M.normalMapType===yu,normalMapTangentSpace:oe&&M.normalMapType===El,metalnessMap:W,roughnessMap:b,anisotropy:x,anisotropyMap:ve,clearcoat:A,clearcoatMap:we,clearcoatNormalMap:We,clearcoatRoughnessMap:xe,dispersion:re,iridescence:ne,iridescenceMap:Ue,iridescenceThicknessMap:pe,sheen:G,sheenColorMap:fe,sheenRoughnessMap:he,specularMap:Ae,specularColorMap:Le,specularIntensityMap:Ve,transmission:Oe,transmissionMap:N,thicknessMap:ue,gradientMap:ee,opaque:M.transparent===!1&&M.blending===Cr&&M.alphaToCoverage===!1,alphaMap:V,alphaTest:$,alphaHash:Q,combine:M.combine,mapUv:J&&v(M.map.channel),aoMapUv:ge&&v(M.aoMap.channel),lightMapUv:se&&v(M.lightMap.channel),bumpMapUv:Se&&v(M.bumpMap.channel),normalMapUv:oe&&v(M.normalMap.channel),displacementMapUv:Pe&&v(M.displacementMap.channel),emissiveMapUv:q&&v(M.emissiveMap.channel),metalnessMapUv:W&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:ve&&v(M.anisotropyMap.channel),clearcoatMapUv:we&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(M.sheenRoughnessMap.channel),specularMapUv:Ae&&v(M.specularMap.channel),specularColorMapUv:Le&&v(M.specularColorMap.channel),specularIntensityMapUv:Ve&&v(M.specularIntensityMap.channel),transmissionMapUv:N&&v(M.transmissionMap.channel),thicknessMapUv:ue&&v(M.thicknessMap.channel),alphaMapUv:V&&v(M.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(oe||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ae.attributes.uv&&(J||V),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:le,skinning:O.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:Ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:J&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:q&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mi,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(E,M),_(E,M),E.push(e.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function T(M){let E=g[M.type],C;if(E){let U=wi[E];C=Ju.clone(U.uniforms)}else C=M.uniforms;return C}function z(M,E){let C;for(let U=0,O=c.length;U<O;U++){let H=c[U];if(H.cacheKey===E){C=H,++C.usedTimes;break}}return C===void 0&&(C=new hg(e,E,M,s),c.push(C)),C}function R(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:T,acquireProgram:z,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:D}}function fg(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function r(n){e.delete(n)}function a(n,o,l){e.get(n)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:s}}function mg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ph(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Lh(){let e=[],t=0,i=[],r=[],a=[];function s(){t=0,i.length=0,r.length=0,a.length=0}function n(u,d,p,g,v,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function o(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.push(m):p.transparent===!0?a.push(m):i.push(m)}function l(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.unshift(m):p.transparent===!0?a.unshift(m):i.unshift(m)}function h(u,d){i.length>1&&i.sort(u||mg),r.length>1&&r.sort(d||Ph),a.length>1&&a.sort(d||Ph)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:s,push:o,unshift:l,finish:c,sort:h}}function gg(){let e=new WeakMap;function t(r,a){let s=e.get(r),n;return s===void 0?(n=new Lh,e.set(r,[n])):a>=s.length?(n=new Lh,s.push(n)):n=s[a],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function vg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new L,color:new Je};break;case"SpotLight":i={position:new L,direction:new L,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new L,color:new Je,distance:0,decay:0};break;case"HemisphereLight":i={direction:new L,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":i={color:new Je,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=i,i}}}function _g(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var xg=0;function yg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Mg(e){let t=new vg,i=_g(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new L);let a=new L,s=new ht,n=new ht;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,y=0,_=0,T=0,z=0,R=0,P=0;h.sort(yg);for(let M=0,E=h.length;M<E;M++){let C=h[M],U=C.color,O=C.intensity,H=C.distance,ae=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=U.r*O,u+=U.g*O,d+=U.b*O;else if(C.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(C.sh.coefficients[j],O);P++}else if(C.isDirectionalLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ce=C.shadow,te=i.get(C);te.shadowIntensity=ce.intensity,te.shadowBias=ce.bias,te.shadowNormalBias=ce.normalBias,te.shadowRadius=ce.radius,te.shadowMapSize=ce.mapSize,r.directionalShadow[p]=te,r.directionalShadowMap[p]=ae,r.directionalShadowMatrix[p]=C.shadow.matrix,y++}r.directional[p]=j,p++}else if(C.isSpotLight){let j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(U).multiplyScalar(O),j.distance=H,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,r.spot[v]=j;let ce=C.shadow;if(C.map&&(r.spotLightMap[z]=C.map,z++,ce.updateMatrices(C),C.castShadow&&R++),r.spotLightMatrix[v]=ce.matrix,C.castShadow){let te=i.get(C);te.shadowIntensity=ce.intensity,te.shadowBias=ce.bias,te.shadowNormalBias=ce.normalBias,te.shadowRadius=ce.radius,te.shadowMapSize=ce.mapSize,r.spotShadow[v]=te,r.spotShadowMap[v]=ae,T++}v++}else if(C.isRectAreaLight){let j=t.get(C);j.color.copy(U).multiplyScalar(O),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),r.rectArea[f]=j,f++}else if(C.isPointLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){let ce=C.shadow,te=i.get(C);te.shadowIntensity=ce.intensity,te.shadowBias=ce.bias,te.shadowNormalBias=ce.normalBias,te.shadowRadius=ce.radius,te.shadowMapSize=ce.mapSize,te.shadowCameraNear=ce.camera.near,te.shadowCameraFar=ce.camera.far,r.pointShadow[g]=te,r.pointShadowMap[g]=ae,r.pointShadowMatrix[g]=C.shadow.matrix,_++}r.point[g]=j,g++}else if(C.isHemisphereLight){let j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(O),j.groundColor.copy(C.groundColor).multiplyScalar(O),r.hemi[m]=j,m++}}f>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let D=r.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==f||D.hemiLength!==m||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==T||D.numSpotMaps!==z||D.numLightProbes!==P)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=f,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=T+z-R,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=f,D.hemiLength=m,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=T,D.numSpotMaps=z,D.numLightProbes=P,r.version=xg++)}function l(h,c){let u=0,d=0,p=0,g=0,v=0,f=c.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){let _=h[m];if(_.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),u++}else if(_.isSpotLight){let T=r.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),p++}else if(_.isRectAreaLight){let T=r.rectArea[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),n.identity(),s.copy(_.matrixWorld),s.premultiply(f),n.extractRotation(s),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(n),T.halfHeight.applyMatrix4(n),g++}else if(_.isPointLight){let T=r.point[d];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let T=r.hemi[v];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:r}}function Ih(e){let t=new Mg(e),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function s(c){i.push(c)}function n(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function Sg(e){let t=new WeakMap;function i(a,s=0){let n=t.get(a),o;return n===void 0?(o=new Ih(e),t.set(a,[o])):s>=n.length?(o=new Ih(e),n.push(o)):o=n[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Eg=class extends wa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tg=class extends wa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
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
}`;function Ag(e,t,i){let r=new po,a=new Re,s=new Re,n=new bt,o=new Eg({depthPacking:xu}),l=new Tg,h={},c=i.maxTextureSize,u={[ji]:Yt,[Yt]:ji,[Mi]:Mi},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:bg,fragmentShader:wg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Et(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let m=this.type;this.render=function(R,P,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let M=e.getRenderTarget(),E=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),U=e.state;U.setBlending(qi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=m!==Ii&&this.type===Ii,H=m===Ii&&this.type!==Ii;for(let ae=0,j=R.length;ae<j;ae++){let ce=R[ae],te=ce.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;a.copy(te.mapSize);let _e=te.getFrameExtents();if(a.multiply(_e),s.copy(te.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/_e.x),a.x=s.x*_e.x,te.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/_e.y),a.y=s.y*_e.y,te.mapSize.y=s.y)),te.map===null||O===!0||H===!0){let ze=this.type!==Ii?{minFilter:Zt,magFilter:Zt}:{};te.map!==null&&te.map.dispose(),te.map=new Ji(a.x,a.y,ze),te.map.texture.name=ce.name+".shadowMap",te.camera.updateProjectionMatrix()}e.setRenderTarget(te.map),e.clear();let Te=te.getViewportCount();for(let ze=0;ze<Te;ze++){let Ee=te.getViewport(ze);n.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),U.viewport(n),te.updateMatrices(ce,ze),r=te.getFrustum(),T(P,D,te.camera,ce,this.type)}te.isPointLightShadow!==!0&&this.type===Ii&&y(te,D),te.needsUpdate=!1}m=this.type,f.needsUpdate=!1,e.setRenderTarget(M,E,C)};function y(R,P){let D=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ji(a.x,a.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(P,null,D,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(P,null,D,p,v,null)}function _(R,P,D,M){let E=null,C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)E=C;else if(E=D.isPointLight===!0?l:o,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let U=E.uuid,O=P.uuid,H=h[U];H===void 0&&(H={},h[U]=H);let ae=H[O];ae===void 0&&(ae=E.clone(),H[O]=ae,P.addEventListener("dispose",z)),E=ae}if(E.visible=P.visible,E.wireframe=P.wireframe,M===Ii?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:u[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let U=e.properties.get(E);U.light=D}return E}function T(R,P,D,M,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ii)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let U=t.update(R),O=R.material;if(Array.isArray(O)){let H=U.groups;for(let ae=0,j=H.length;ae<j;ae++){let ce=H[ae],te=O[ce.materialIndex];if(te&&te.visible){let _e=_(R,te,M,E);R.onBeforeShadow(e,R,P,D,U,_e,ce),e.renderBufferDirect(D,null,U,_e,R,ce),R.onAfterShadow(e,R,P,D,U,_e,ce)}}}else if(O.visible){let H=_(R,O,M,E);R.onBeforeShadow(e,R,P,D,U,H,null),e.renderBufferDirect(D,null,U,H,R,null),R.onAfterShadow(e,R,P,D,U,H,null)}}let C=R.children;for(let U=0,O=C.length;U<O;U++)T(C[U],P,D,M,E)}function z(R){R.target.removeEventListener("dispose",z);for(let P in h){let D=h[P],M=R.target.uuid;M in D&&(D[M].dispose(),delete D[M])}}}var Rg={[Ys]:Js,[Ks]:Qs,[Zs]:en,[Pr]:$s,[Js]:Ys,[Qs]:Ks,[en]:Zs,[$s]:Pr};function Cg(e,t){function i(){let N=!1,ue=new bt,ee=null,V=new bt(0,0,0,0);return{setMask:function($){ee!==$&&!N&&(e.colorMask($,$,$,$),ee=$)},setLocked:function($){N=$},setClear:function($,Q,De,Ce,qe){qe===!0&&($*=Ce,Q*=Ce,De*=Ce),ue.set($,Q,De,Ce),V.equals(ue)===!1&&(e.clearColor($,Q,De,Ce),V.copy(ue))},reset:function(){N=!1,ee=null,V.set(-1,0,0,0)}}}function r(){let N=!1,ue=!1,ee=null,V=null,$=null;return{setReversed:function(Q){if(ue!==Q){let De=t.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);let Ce=$;$=null,this.setClear(Ce)}ue=Q},getReversed:function(){return ue},setTest:function(Q){Q?k(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(Q){ee!==Q&&!N&&(e.depthMask(Q),ee=Q)},setFunc:function(Q){if(ue&&(Q=Rg[Q]),V!==Q){switch(Q){case Ys:e.depthFunc(e.NEVER);break;case Js:e.depthFunc(e.ALWAYS);break;case Ks:e.depthFunc(e.LESS);break;case Pr:e.depthFunc(e.LEQUAL);break;case Zs:e.depthFunc(e.EQUAL);break;case $s:e.depthFunc(e.GEQUAL);break;case Qs:e.depthFunc(e.GREATER);break;case en:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}V=Q}},setLocked:function(Q){N=Q},setClear:function(Q){$!==Q&&(ue&&(Q=1-Q),e.clearDepth(Q),$=Q)},reset:function(){N=!1,ee=null,V=null,$=null,ue=!1}}}function a(){let N=!1,ue=null,ee=null,V=null,$=null,Q=null,De=null,Ce=null,qe=null;return{setTest:function(Ye){N||(Ye?k(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(Ye){ue!==Ye&&!N&&(e.stencilMask(Ye),ue=Ye)},setFunc:function(Ye,ut,rt){(ee!==Ye||V!==ut||$!==rt)&&(e.stencilFunc(Ye,ut,rt),ee=Ye,V=ut,$=rt)},setOp:function(Ye,ut,rt){(Q!==Ye||De!==ut||Ce!==rt)&&(e.stencilOp(Ye,ut,rt),Q=Ye,De=ut,Ce=rt)},setLocked:function(Ye){N=Ye},setClear:function(Ye){qe!==Ye&&(e.clearStencil(Ye),qe=Ye)},reset:function(){N=!1,ue=null,ee=null,V=null,$=null,Q=null,De=null,Ce=null,qe=null}}}let s=new i,n=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],g=null,v=!1,f=null,m=null,y=null,_=null,T=null,z=null,R=null,P=new Je(0,0,0),D=0,M=!1,E=null,C=null,U=null,O=null,H=null,ae=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ce=0,te=e.getParameter(e.VERSION);te.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=ce>=1):te.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=ce>=2);let _e=null,Te={},ze=e.getParameter(e.SCISSOR_BOX),Ee=e.getParameter(e.VIEWPORT),Y=new bt().fromArray(ze),ie=new bt().fromArray(Ee);function I(N,ue,ee,V){let $=new Uint8Array(4),Q=e.createTexture();e.bindTexture(N,Q),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let De=0;De<ee;De++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ue,0,e.RGBA,1,1,V,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(ue+De,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return Q}let X={};X[e.TEXTURE_2D]=I(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=I(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=I(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=I(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),k(e.DEPTH_TEST),n.setFunc(Pr),Se(!1),oe(al),k(e.CULL_FACE),ge(qi);function k(N){c[N]!==!0&&(e.enable(N),c[N]=!0)}function le(N){c[N]!==!1&&(e.disable(N),c[N]=!1)}function me(N,ue){return u[N]!==ue?(e.bindFramebuffer(N,ue),u[N]=ue,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ue),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(N,ue){let ee=p,V=!1;if(N){ee=d.get(ue),ee===void 0&&(ee=[],d.set(ue,ee));let $=N.textures;if(ee.length!==$.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,De=$.length;Q<De;Q++)ee[Q]=e.COLOR_ATTACHMENT0+Q;ee.length=$.length,V=!0}}else ee[0]!==e.BACK&&(ee[0]=e.BACK,V=!0);V&&e.drawBuffers(ee)}function J(N){return g!==N?(e.useProgram(N),g=N,!0):!1}let de={[ur]:e.FUNC_ADD,[Xc]:e.FUNC_SUBTRACT,[jc]:e.FUNC_REVERSE_SUBTRACT};de[qc]=e.MIN,de[Yc]=e.MAX;let w={[Jc]:e.ZERO,[Kc]:e.ONE,[Zc]:e.SRC_COLOR,[js]:e.SRC_ALPHA,[ru]:e.SRC_ALPHA_SATURATE,[tu]:e.DST_COLOR,[Qc]:e.DST_ALPHA,[$c]:e.ONE_MINUS_SRC_COLOR,[qs]:e.ONE_MINUS_SRC_ALPHA,[iu]:e.ONE_MINUS_DST_COLOR,[eu]:e.ONE_MINUS_DST_ALPHA,[au]:e.CONSTANT_COLOR,[su]:e.ONE_MINUS_CONSTANT_COLOR,[nu]:e.CONSTANT_ALPHA,[ou]:e.ONE_MINUS_CONSTANT_ALPHA};function ge(N,ue,ee,V,$,Q,De,Ce,qe,Ye){if(N===qi){v===!0&&(le(e.BLEND),v=!1);return}if(v===!1&&(k(e.BLEND),v=!0),N!==Wc){if(N!==f||Ye!==M){if((m!==ur||T!==ur)&&(e.blendEquation(e.FUNC_ADD),m=ur,T=ur),Ye)switch(N){case Cr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case nl:e.blendFunc(e.ONE,e.ONE);break;case ol:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ll:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Cr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case nl:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case ol:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ll:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,_=null,z=null,R=null,P.set(0,0,0),D=0,f=N,M=Ye}return}$=$||ue,Q=Q||ee,De=De||V,(ue!==m||$!==T)&&(e.blendEquationSeparate(de[ue],de[$]),m=ue,T=$),(ee!==y||V!==_||Q!==z||De!==R)&&(e.blendFuncSeparate(w[ee],w[V],w[Q],w[De]),y=ee,_=V,z=Q,R=De),(Ce.equals(P)===!1||qe!==D)&&(e.blendColor(Ce.r,Ce.g,Ce.b,qe),P.copy(Ce),D=qe),f=N,M=!1}function se(N,ue){N.side===Mi?le(e.CULL_FACE):k(e.CULL_FACE);let ee=N.side===Yt;ue&&(ee=!ee),Se(ee),N.blending===Cr&&N.transparent===!1?ge(qi):ge(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),n.setFunc(N.depthFunc),n.setTest(N.depthTest),n.setMask(N.depthWrite),s.setMask(N.colorWrite);let V=N.stencilWrite;o.setTest(V),V&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?k(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(N){E!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),E=N)}function oe(N){N!==Vc?(k(e.CULL_FACE),N!==C&&(N===al?e.cullFace(e.BACK):N===Hc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),C=N}function Pe(N){N!==U&&(j&&e.lineWidth(N),U=N)}function q(N,ue,ee){N?(k(e.POLYGON_OFFSET_FILL),(O!==ue||H!==ee)&&(e.polygonOffset(ue,ee),O=ue,H=ee)):le(e.POLYGON_OFFSET_FILL)}function W(N){N?k(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function b(N){N===void 0&&(N=e.TEXTURE0+ae-1),_e!==N&&(e.activeTexture(N),_e=N)}function x(N,ue,ee){ee===void 0&&(_e===null?ee=e.TEXTURE0+ae-1:ee=_e);let V=Te[ee];V===void 0&&(V={type:void 0,texture:void 0},Te[ee]=V),(V.type!==N||V.texture!==ue)&&(_e!==ee&&(e.activeTexture(ee),_e=ee),e.bindTexture(N,ue||X[N]),V.type=N,V.texture=ue)}function A(){let N=Te[_e];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function re(){try{e.compressedTexImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{e.compressedTexImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{e.texSubImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{e.texSubImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{e.texStorage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{e.texStorage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{e.texImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{e.texImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(N){Y.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function he(N){ie.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function Ae(N,ue){let ee=h.get(ue);ee===void 0&&(ee=new WeakMap,h.set(ue,ee));let V=ee.get(N);V===void 0&&(V=e.getUniformBlockIndex(ue,N.name),ee.set(N,V))}function Le(N,ue){let ee=h.get(ue).get(N);l.get(ue)!==ee&&(e.uniformBlockBinding(ue,ee,N.__bindingPointIndex),l.set(ue,ee))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},_e=null,Te={},u={},d=new WeakMap,p=[],g=null,v=!1,f=null,m=null,y=null,_=null,T=null,z=null,R=null,P=new Je(0,0,0),D=0,M=!1,E=null,C=null,U=null,O=null,H=null,Y.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:k,disable:le,bindFramebuffer:me,drawBuffers:be,useProgram:J,setBlending:ge,setMaterial:se,setFlipSided:Se,setCullFace:oe,setLineWidth:Pe,setPolygonOffset:q,setScissorTest:W,activeTexture:b,bindTexture:x,unbindTexture:A,compressedTexImage2D:re,compressedTexImage3D:ne,texImage2D:Ue,texImage3D:pe,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:We,texStorage3D:xe,texSubImage2D:G,texSubImage3D:Oe,compressedTexSubImage2D:ve,compressedTexSubImage3D:we,scissor:fe,viewport:he,reset:Ve}}function Nh(e,t,i,r){let a=Pg(r);switch(i){case fl:return e*t;case gl:return e*t;case vl:return e*t*2;case hn:return e*t/a.components*a.byteLength;case cn:return e*t/a.components*a.byteLength;case _l:return e*t*2/a.components*a.byteLength;case un:return e*t*2/a.components*a.byteLength;case ml:return e*t*3/a.components*a.byteLength;case pi:return e*t*4/a.components*a.byteLength;case dn:return e*t*4/a.components*a.byteLength;case Ja:case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Za:case $a:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fn:case gn:return Math.max(e,16)*Math.max(t,8)/4;case pn:case mn:return Math.max(e,8)*Math.max(t,8)/2;case vn:case _n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Sn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case En:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Tn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case bn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case wn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case An:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Rn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Cn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Pn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ln:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case In:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Nn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Qa:case Un:case Dn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xl:case On:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fn:case Bn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Pg(e){switch(e){case Ui:case ul:return{byteLength:1,components:1};case _a:case dl:case Nr:return{byteLength:2,components:1};case on:case ln:return{byteLength:2,components:4};case pr:case nn:case Ei:return{byteLength:4,components:1};case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Lg(e,t,i,r,a,s,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Re,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):rs("canvas")}function v(b,x,A){let re=1,ne=W(b);if((ne.width>A||ne.height>A)&&(re=A/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let G=Math.floor(re*ne.width),Oe=Math.floor(re*ne.height);u===void 0&&(u=g(G,Oe));let ve=x?g(G,Oe):u;return ve.width=G,ve.height=Oe,ve.getContext("2d").drawImage(b,0,0,G,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+G+"x"+Oe+")."),ve}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function f(b){return b.generateMipmaps}function m(b){e.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(b,x,A,re,ne=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=x;if(x===e.RED&&(A===e.FLOAT&&(G=e.R32F),A===e.HALF_FLOAT&&(G=e.R16F),A===e.UNSIGNED_BYTE&&(G=e.R8)),x===e.RED_INTEGER&&(A===e.UNSIGNED_BYTE&&(G=e.R8UI),A===e.UNSIGNED_SHORT&&(G=e.R16UI),A===e.UNSIGNED_INT&&(G=e.R32UI),A===e.BYTE&&(G=e.R8I),A===e.SHORT&&(G=e.R16I),A===e.INT&&(G=e.R32I)),x===e.RG&&(A===e.FLOAT&&(G=e.RG32F),A===e.HALF_FLOAT&&(G=e.RG16F),A===e.UNSIGNED_BYTE&&(G=e.RG8)),x===e.RG_INTEGER&&(A===e.UNSIGNED_BYTE&&(G=e.RG8UI),A===e.UNSIGNED_SHORT&&(G=e.RG16UI),A===e.UNSIGNED_INT&&(G=e.RG32UI),A===e.BYTE&&(G=e.RG8I),A===e.SHORT&&(G=e.RG16I),A===e.INT&&(G=e.RG32I)),x===e.RGB_INTEGER&&(A===e.UNSIGNED_BYTE&&(G=e.RGB8UI),A===e.UNSIGNED_SHORT&&(G=e.RGB16UI),A===e.UNSIGNED_INT&&(G=e.RGB32UI),A===e.BYTE&&(G=e.RGB8I),A===e.SHORT&&(G=e.RGB16I),A===e.INT&&(G=e.RGB32I)),x===e.RGBA_INTEGER&&(A===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),A===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),A===e.UNSIGNED_INT&&(G=e.RGBA32UI),A===e.BYTE&&(G=e.RGBA8I),A===e.SHORT&&(G=e.RGBA16I),A===e.INT&&(G=e.RGBA32I)),x===e.RGB&&A===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),x===e.RGBA){let Oe=ne?ts:it.getTransfer(re);A===e.FLOAT&&(G=e.RGBA32F),A===e.HALF_FLOAT&&(G=e.RGBA16F),A===e.UNSIGNED_BYTE&&(G=Oe===lt?e.SRGB8_ALPHA8:e.RGBA8),A===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),A===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function T(b,x){let A;return b?x===null||x===pr||x===Ur?A=e.DEPTH24_STENCIL8:x===Ei?A=e.DEPTH32F_STENCIL8:x===_a&&(A=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pr||x===Ur?A=e.DEPTH_COMPONENT24:x===Ei?A=e.DEPTH_COMPONENT32F:x===_a&&(A=e.DEPTH_COMPONENT16),A}function z(b,x){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Zt&&b.minFilter!==di?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){let x=b.target;x.removeEventListener("dispose",R),D(x),x.isVideoTexture&&c.delete(x)}function P(b){let x=b.target;x.removeEventListener("dispose",P),E(x)}function D(b){let x=r.get(b);if(x.__webglInit===void 0)return;let A=b.source,re=d.get(A);if(re){let ne=re[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(b),Object.keys(re).length===0&&d.delete(A)}r.remove(b)}function M(b){let x=r.get(b);e.deleteTexture(x.__webglTexture);let A=b.source,re=d.get(A);delete re[x.__cacheKey],n.memory.textures--}function E(b){let x=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(x.__webglFramebuffer[re]))for(let ne=0;ne<x.__webglFramebuffer[re].length;ne++)e.deleteFramebuffer(x.__webglFramebuffer[re][ne]);else e.deleteFramebuffer(x.__webglFramebuffer[re]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[re])}else{if(Array.isArray(x.__webglFramebuffer))for(let re=0;re<x.__webglFramebuffer.length;re++)e.deleteFramebuffer(x.__webglFramebuffer[re]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let re=0;re<x.__webglColorRenderbuffer.length;re++)x.__webglColorRenderbuffer[re]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[re]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let A=b.textures;for(let re=0,ne=A.length;re<ne;re++){let G=r.get(A[re]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),n.memory.textures--),r.remove(A[re])}r.remove(b)}let C=0;function U(){C=0}function O(){let b=C;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),C+=1,b}function H(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function ae(b,x){let A=r.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&A.__version!==b.version){let re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(A,b,x);return}}i.bindTexture(e.TEXTURE_2D,A.__webglTexture,e.TEXTURE0+x)}function j(b,x){let A=r.get(b);if(b.version>0&&A.__version!==b.version){ie(A,b,x);return}i.bindTexture(e.TEXTURE_2D_ARRAY,A.__webglTexture,e.TEXTURE0+x)}function ce(b,x){let A=r.get(b);if(b.version>0&&A.__version!==b.version){ie(A,b,x);return}i.bindTexture(e.TEXTURE_3D,A.__webglTexture,e.TEXTURE0+x)}function te(b,x){let A=r.get(b);if(b.version>0&&A.__version!==b.version){I(A,b,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+x)}let _e={[qa]:e.REPEAT,[dr]:e.CLAMP_TO_EDGE,[an]:e.MIRRORED_REPEAT},Te={[Zt]:e.NEAREST,[vu]:e.NEAREST_MIPMAP_NEAREST,[Ya]:e.NEAREST_MIPMAP_LINEAR,[di]:e.LINEAR,[sn]:e.LINEAR_MIPMAP_NEAREST,[Ni]:e.LINEAR_MIPMAP_LINEAR},ze={[Mu]:e.NEVER,[Au]:e.ALWAYS,[Su]:e.LESS,[bl]:e.LEQUAL,[Eu]:e.EQUAL,[wu]:e.GEQUAL,[Tu]:e.GREATER,[bu]:e.NOTEQUAL};function Ee(b,x){if(x.type===Ei&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===di||x.magFilter===sn||x.magFilter===Ya||x.magFilter===Ni||x.minFilter===di||x.minFilter===sn||x.minFilter===Ya||x.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,_e[x.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,_e[x.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,_e[x.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,Te[x.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==Ya&&x.minFilter!==Ni||x.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let A=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function Y(b,x){let A=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));let re=x.source,ne=d.get(re);ne===void 0&&(ne={},d.set(re,ne));let G=H(x);if(G!==b.__cacheKey){ne[G]===void 0&&(ne[G]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,A=!0),ne[G].usedTimes++;let Oe=ne[b.__cacheKey];Oe!==void 0&&(ne[b.__cacheKey].usedTimes--,Oe.usedTimes===0&&M(x)),b.__cacheKey=G,b.__webglTexture=ne[G].texture}return A}function ie(b,x,A){let re=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=e.TEXTURE_3D);let ne=Y(b,x),G=x.source;i.bindTexture(re,b.__webglTexture,e.TEXTURE0+A);let Oe=r.get(G);if(G.version!==Oe.__version||ne===!0){i.activeTexture(e.TEXTURE0+A);let ve=it.getPrimaries(it.workingColorSpace),we=x.colorSpace===Yi?null:it.getPrimaries(x.colorSpace),We=x.colorSpace===Yi||ve===we?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let xe=v(x.image,!1,a.maxTextureSize);xe=q(x,xe);let Ue=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),fe=_(x.internalFormat,Ue,pe,x.colorSpace,x.isVideoTexture);Ee(re,x);let he,Ae=x.mipmaps,Le=x.isVideoTexture!==!0,Ve=Oe.__version===void 0||ne===!0,N=G.dataReady,ue=z(x,xe);if(x.isDepthTexture)fe=T(x.format===Or,x.type),Ve&&(Le?i.texStorage2D(e.TEXTURE_2D,1,fe,xe.width,xe.height):i.texImage2D(e.TEXTURE_2D,0,fe,xe.width,xe.height,0,Ue,pe,null));else if(x.isDataTexture)if(Ae.length>0){Le&&Ve&&i.texStorage2D(e.TEXTURE_2D,ue,fe,Ae[0].width,Ae[0].height);for(let ee=0,V=Ae.length;ee<V;ee++)he=Ae[ee],Le?N&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,he.width,he.height,Ue,pe,he.data):i.texImage2D(e.TEXTURE_2D,ee,fe,he.width,he.height,0,Ue,pe,he.data);x.generateMipmaps=!1}else Le?(Ve&&i.texStorage2D(e.TEXTURE_2D,ue,fe,xe.width,xe.height),N&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,xe.width,xe.height,Ue,pe,xe.data)):i.texImage2D(e.TEXTURE_2D,0,fe,xe.width,xe.height,0,Ue,pe,xe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Ve&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ue,fe,Ae[0].width,Ae[0].height,xe.depth);for(let ee=0,V=Ae.length;ee<V;ee++)if(he=Ae[ee],x.format!==pi)if(Ue!==null)if(Le){if(N)if(x.layerUpdates.size>0){let $=Nh(he.width,he.height,x.format,x.type);for(let Q of x.layerUpdates){let De=he.data.subarray(Q*$/he.data.BYTES_PER_ELEMENT,(Q+1)*$/he.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,Q,he.width,he.height,1,Ue,De)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,xe.depth,Ue,he.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ee,fe,he.width,he.height,xe.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?N&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,xe.depth,Ue,pe,he.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ee,fe,he.width,he.height,xe.depth,0,Ue,pe,he.data)}else{Le&&Ve&&i.texStorage2D(e.TEXTURE_2D,ue,fe,Ae[0].width,Ae[0].height);for(let ee=0,V=Ae.length;ee<V;ee++)he=Ae[ee],x.format!==pi?Ue!==null?Le?N&&i.compressedTexSubImage2D(e.TEXTURE_2D,ee,0,0,he.width,he.height,Ue,he.data):i.compressedTexImage2D(e.TEXTURE_2D,ee,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?N&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,he.width,he.height,Ue,pe,he.data):i.texImage2D(e.TEXTURE_2D,ee,fe,he.width,he.height,0,Ue,pe,he.data)}else if(x.isDataArrayTexture)if(Le){if(Ve&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ue,fe,xe.width,xe.height,xe.depth),N)if(x.layerUpdates.size>0){let ee=Nh(xe.width,xe.height,x.format,x.type);for(let V of x.layerUpdates){let $=xe.data.subarray(V*ee/xe.data.BYTES_PER_ELEMENT,(V+1)*ee/xe.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,V,xe.width,xe.height,1,Ue,pe,$)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ue,pe,xe.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,fe,xe.width,xe.height,xe.depth,0,Ue,pe,xe.data);else if(x.isData3DTexture)Le?(Ve&&i.texStorage3D(e.TEXTURE_3D,ue,fe,xe.width,xe.height,xe.depth),N&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ue,pe,xe.data)):i.texImage3D(e.TEXTURE_3D,0,fe,xe.width,xe.height,xe.depth,0,Ue,pe,xe.data);else if(x.isFramebufferTexture){if(Ve)if(Le)i.texStorage2D(e.TEXTURE_2D,ue,fe,xe.width,xe.height);else{let ee=xe.width,V=xe.height;for(let $=0;$<ue;$++)i.texImage2D(e.TEXTURE_2D,$,fe,ee,V,0,Ue,pe,null),ee>>=1,V>>=1}}else if(Ae.length>0){if(Le&&Ve){let ee=W(Ae[0]);i.texStorage2D(e.TEXTURE_2D,ue,fe,ee.width,ee.height)}for(let ee=0,V=Ae.length;ee<V;ee++)he=Ae[ee],Le?N&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,Ue,pe,he):i.texImage2D(e.TEXTURE_2D,ee,fe,Ue,pe,he);x.generateMipmaps=!1}else if(Le){if(Ve){let ee=W(xe);i.texStorage2D(e.TEXTURE_2D,ue,fe,ee.width,ee.height)}N&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Ue,pe,xe)}else i.texImage2D(e.TEXTURE_2D,0,fe,Ue,pe,xe);f(x)&&m(re),Oe.__version=G.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function I(b,x,A){if(x.image.length!==6)return;let re=Y(b,x),ne=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+A);let G=r.get(ne);if(ne.version!==G.__version||re===!0){i.activeTexture(e.TEXTURE0+A);let Oe=it.getPrimaries(it.workingColorSpace),ve=x.colorSpace===Yi?null:it.getPrimaries(x.colorSpace),we=x.colorSpace===Yi||Oe===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let We=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,Ue=[];for(let V=0;V<6;V++)!We&&!xe?Ue[V]=v(x.image[V],!0,a.maxCubemapSize):Ue[V]=xe?x.image[V].image:x.image[V],Ue[V]=q(x,Ue[V]);let pe=Ue[0],fe=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Ae=_(x.internalFormat,fe,he,x.colorSpace),Le=x.isVideoTexture!==!0,Ve=G.__version===void 0||re===!0,N=ne.dataReady,ue=z(x,pe);Ee(e.TEXTURE_CUBE_MAP,x);let ee;if(We){Le&&Ve&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ae,pe.width,pe.height);for(let V=0;V<6;V++){ee=Ue[V].mipmaps;for(let $=0;$<ee.length;$++){let Q=ee[$];x.format!==pi?fe!==null?Le?N&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$,0,0,Q.width,Q.height,fe,Q.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$,Ae,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?N&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$,0,0,Q.width,Q.height,fe,he,Q.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$,Ae,Q.width,Q.height,0,fe,he,Q.data)}}}else{if(ee=x.mipmaps,Le&&Ve){ee.length>0&&ue++;let V=W(Ue[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ae,V.width,V.height)}for(let V=0;V<6;V++)if(xe){Le?N&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Ue[V].width,Ue[V].height,fe,he,Ue[V].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ae,Ue[V].width,Ue[V].height,0,fe,he,Ue[V].data);for(let $=0;$<ee.length;$++){let Q=ee[$].image[V].image;Le?N&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$+1,0,0,Q.width,Q.height,fe,he,Q.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$+1,Ae,Q.width,Q.height,0,fe,he,Q.data)}}else{Le?N&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,fe,he,Ue[V]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ae,fe,he,Ue[V]);for(let $=0;$<ee.length;$++){let Q=ee[$];Le?N&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$+1,0,0,fe,he,Q.image[V]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,$+1,Ae,fe,he,Q.image[V])}}}f(x)&&m(e.TEXTURE_CUBE_MAP),G.__version=ne.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function X(b,x,A,re,ne,G){let Oe=s.convert(A.format,A.colorSpace),ve=s.convert(A.type),we=_(A.internalFormat,Oe,ve,A.colorSpace),We=r.get(x),xe=r.get(A);if(xe.__renderTarget=x,!We.__hasExternalTextures){let Ue=Math.max(1,x.width>>G),pe=Math.max(1,x.height>>G);ne===e.TEXTURE_3D||ne===e.TEXTURE_2D_ARRAY?i.texImage3D(ne,G,we,Ue,pe,x.depth,0,Oe,ve,null):i.texImage2D(ne,G,we,Ue,pe,0,Oe,ve,null)}i.bindFramebuffer(e.FRAMEBUFFER,b),oe(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,ne,xe.__webglTexture,0,Se(x)):(ne===e.TEXTURE_2D||ne>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,re,ne,xe.__webglTexture,G),i.bindFramebuffer(e.FRAMEBUFFER,null)}function k(b,x,A){if(e.bindRenderbuffer(e.RENDERBUFFER,b),x.depthBuffer){let re=x.depthTexture,ne=re&&re.isDepthTexture?re.type:null,G=T(x.stencilBuffer,ne),Oe=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=Se(x);oe(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,G,x.width,x.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,G,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,G,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Oe,e.RENDERBUFFER,b)}else{let re=x.textures;for(let ne=0;ne<re.length;ne++){let G=re[ne],Oe=s.convert(G.format,G.colorSpace),ve=s.convert(G.type),we=_(G.internalFormat,Oe,ve,G.colorSpace),We=Se(x);A&&oe(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,We,we,x.width,x.height):oe(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,We,we,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,we,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let A=r.get(x.depthTexture);A.__renderTarget=x,(!A.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);let re=A.__webglTexture,ne=Se(x);if(x.depthTexture.format===Dr)oe(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,re,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,re,0);else if(x.depthTexture.format===Or)oe(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,re,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function me(b){let x=r.get(b),A=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let re=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),re){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=re}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,b)}else if(A){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]===void 0)x.__webglDepthbuffer[re]=e.createRenderbuffer(),k(x.__webglDepthbuffer[re],b,!1);else{let ne=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[re];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,G)}}else if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),k(x.__webglDepthbuffer,b,!1);else{let re=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ne),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,ne)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function be(b,x,A){let re=r.get(b);x!==void 0&&X(re.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),A!==void 0&&me(b)}function J(b){let x=b.texture,A=r.get(b),re=r.get(x);b.addEventListener("dispose",P);let ne=b.textures,G=b.isWebGLCubeRenderTarget===!0,Oe=ne.length>1;if(Oe||(re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture()),re.__version=x.version,n.memory.textures++),G){A.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[ve]=[];for(let we=0;we<x.mipmaps.length;we++)A.__webglFramebuffer[ve][we]=e.createFramebuffer()}else A.__webglFramebuffer[ve]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)A.__webglFramebuffer[ve]=e.createFramebuffer()}else A.__webglFramebuffer=e.createFramebuffer();if(Oe)for(let ve=0,we=ne.length;ve<we;ve++){let We=r.get(ne[ve]);We.__webglTexture===void 0&&(We.__webglTexture=e.createTexture(),n.memory.textures++)}if(b.samples>0&&oe(b)===!1){A.__webglMultisampledFramebuffer=e.createFramebuffer(),A.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let ve=0;ve<ne.length;ve++){let we=ne[ve];A.__webglColorRenderbuffer[ve]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,A.__webglColorRenderbuffer[ve]);let We=s.convert(we.format,we.colorSpace),xe=s.convert(we.type),Ue=_(we.internalFormat,We,xe,we.colorSpace,b.isXRRenderTarget===!0),pe=Se(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,pe,Ue,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,A.__webglColorRenderbuffer[ve])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(A.__webglDepthRenderbuffer=e.createRenderbuffer(),k(A.__webglDepthRenderbuffer,b,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){i.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture),Ee(e.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)X(A.__webglFramebuffer[ve][we],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else X(A.__webglFramebuffer[ve],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);f(x)&&m(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let ve=0,we=ne.length;ve<we;ve++){let We=ne[ve],xe=r.get(We);i.bindTexture(e.TEXTURE_2D,xe.__webglTexture),Ee(e.TEXTURE_2D,We),X(A.__webglFramebuffer,b,We,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,0),f(We)&&m(e.TEXTURE_2D)}i.unbindTexture()}else{let ve=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ve,re.__webglTexture),Ee(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)X(A.__webglFramebuffer[we],b,x,e.COLOR_ATTACHMENT0,ve,we);else X(A.__webglFramebuffer,b,x,e.COLOR_ATTACHMENT0,ve,0);f(x)&&m(ve),i.unbindTexture()}b.depthBuffer&&me(b)}function de(b){let x=b.textures;for(let A=0,re=x.length;A<re;A++){let ne=x[A];if(f(ne)){let G=y(b),Oe=r.get(ne).__webglTexture;i.bindTexture(G,Oe),m(G),i.unbindTexture()}}}let w=[],ge=[];function se(b){if(b.samples>0){if(oe(b)===!1){let x=b.textures,A=b.width,re=b.height,ne=e.COLOR_BUFFER_BIT,G=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Oe=r.get(b),ve=x.length>1;if(ve)for(let we=0;we<x.length;we++)i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let we=0;we<x.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=e.STENCIL_BUFFER_BIT)),ve){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Oe.__webglColorRenderbuffer[we]);let We=r.get(x[we]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,We,0)}e.blitFramebuffer(0,0,A,re,0,0,A,re,ne,e.NEAREST),l===!0&&(w.length=0,ge.length=0,w.push(e.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(w.push(G),ge.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ge)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<x.length;we++){i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.RENDERBUFFER,Oe.__webglColorRenderbuffer[we]);let We=r.get(x[we]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.TEXTURE_2D,We,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Se(b){return Math.min(a.maxSamples,b.samples)}function oe(b){let x=r.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pe(b){let x=n.render.frame;c.get(b)!==x&&(c.set(b,x),b.update())}function q(b,x){let A=b.colorSpace,re=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||A!==Fr&&A!==Yi&&(it.getTransfer(A)===lt?(re!==pi||ne!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),x}function W(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=ae,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=te,this.rebindTextures=be,this.setupRenderTarget=J,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=X,this.useMultisampledRTT=oe}function Ig(e,t){function i(r,a=Yi){let s,n=it.getTransfer(a);if(r===Ui)return e.UNSIGNED_BYTE;if(r===on)return e.UNSIGNED_SHORT_4_4_4_4;if(r===ln)return e.UNSIGNED_SHORT_5_5_5_1;if(r===pl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===ul)return e.BYTE;if(r===dl)return e.SHORT;if(r===_a)return e.UNSIGNED_SHORT;if(r===nn)return e.INT;if(r===pr)return e.UNSIGNED_INT;if(r===Ei)return e.FLOAT;if(r===Nr)return e.HALF_FLOAT;if(r===fl)return e.ALPHA;if(r===ml)return e.RGB;if(r===pi)return e.RGBA;if(r===gl)return e.LUMINANCE;if(r===vl)return e.LUMINANCE_ALPHA;if(r===Dr)return e.DEPTH_COMPONENT;if(r===Or)return e.DEPTH_STENCIL;if(r===hn)return e.RED;if(r===cn)return e.RED_INTEGER;if(r===_l)return e.RG;if(r===un)return e.RG_INTEGER;if(r===dn)return e.RGBA_INTEGER;if(r===Ja||r===Ka||r===Za||r===$a)if(n===lt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pn||r===fn||r===mn||r===gn)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===pn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vn||r===_n||r===xn)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===vn||r===_n)return n===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===xn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yn||r===Mn||r===Sn||r===En||r===Tn||r===bn||r===wn||r===An||r===Rn||r===Cn||r===Pn||r===Ln||r===In||r===Nn)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===yn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===En)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===An)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ln)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===In)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nn)return n===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qa||r===Un||r===Dn)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Qa)return n===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Un)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dn)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xl||r===On||r===Fn||r===Bn)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(r===On)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ur?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Ng=class extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Er=class extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,i),f=this._getHandJoint(l,g);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return n!==null&&(n.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`,Fg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new ri,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bi({vertexShader:Dg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bg=class extends zr{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=new Fg,v=t.getContextAttributes(),f=null,m=null,y=[],_=[],T=new Re,z=null,R=new ei;R.viewport=new bt;let P=new ei;P.viewport=new bt;let D=[R,P],M=new Ng,E=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=y[Y];return ie===void 0&&(ie=new To,y[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=y[Y];return ie===void 0&&(ie=new To,y[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=y[Y];return ie===void 0&&(ie=new To,y[Y]=ie),ie.getHandSpace()};function U(Y){let ie=_.indexOf(Y.inputSource);if(ie===-1)return;let I=y[ie];I!==void 0&&(I.update(Y.inputSource,Y.frame,l||s),I.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<y.length;Y++){let ie=_[Y];ie!==null&&(_[Y]=null,y[Y].disconnect(ie))}E=null,C=null,g.reset(),e.setRenderTarget(f),d=null,u=null,c=null,r=null,m=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){n=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){let ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Ji(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ie=null,I=null,X=null;v.depth&&(X=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Or:Dr,I=v.stencil?Ur:pr);let k={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(k),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new Ji(u.textureWidth,u.textureHeight,{format:pi,type:Ui,depthTexture:new uh(u.textureWidth,u.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Y){for(let ie=0;ie<Y.removed.length;ie++){let I=Y.removed[ie],X=_.indexOf(I);X>=0&&(_[X]=null,y[X].disconnect(I))}for(let ie=0;ie<Y.added.length;ie++){let I=Y.added[ie],X=_.indexOf(I);if(X===-1){for(let le=0;le<y.length;le++)if(le>=_.length){_.push(I),X=le;break}else if(_[le]===null){_[le]=I,X=le;break}if(X===-1)break}let k=y[X];k&&k.connect(I)}}let ae=new L,j=new L;function ce(Y,ie,I){ae.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(I.matrixWorld);let X=ae.distanceTo(j),k=ie.projectionMatrix.elements,le=I.projectionMatrix.elements,me=k[14]/(k[10]-1),be=k[14]/(k[10]+1),J=(k[9]+1)/k[5],de=(k[9]-1)/k[5],w=(k[8]-1)/k[0],ge=(le[8]+1)/le[0],se=me*w,Se=me*ge,oe=X/(-w+ge),Pe=oe*-w;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),k[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let q=me+oe,W=be+oe,b=se-Pe,x=Se+(X-Pe),A=J*be/W*q,re=de*be/W*q;Y.projectionMatrix.makePerspective(b,x,A,re,q,W),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ie=Y.near,I=Y.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(I=g.depthFar)),M.near=P.near=R.near=ie,M.far=P.far=R.far=I,(E!==M.near||C!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,C=M.far),R.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;let X=Y.parent,k=M.cameras;te(M,X);for(let le=0;le<k.length;le++)te(k[le],X);k.length===2?ce(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),_e(Y,M,X)};function _e(Y,ie,I){I===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(I.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(Y){o=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Te=null;function ze(Y,ie){if(h=ie.getViewerPose(l||s),p=ie,h!==null){let I=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let X=!1;I.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let le=0;le<I.length;le++){let me=I[le],be=null;if(d!==null)be=d.getViewport(me);else{let de=c.getViewSubImage(u,me);be=de.viewport,le===0&&(e.setRenderTargetTextures(m,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(m))}let J=D[le];J===void 0&&(J=new ei,J.layers.enable(le),J.viewport=new bt,D[le]=J),J.matrix.fromArray(me.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(me.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(be.x,be.y,be.width,be.height),le===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(J)}let k=r.enabledFeatures;if(k&&k.includes("depth-sensing")){let le=c.getDepthInformation(I[0]);le&&le.isValid&&le.texture&&g.init(e,le,r.renderState)}}for(let I=0;I<y.length;I++){let X=_[I],k=y[I];X!==null&&k!==void 0&&k.update(X,ie,l||s)}Te&&Te(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let Ee=new ah;Ee.setAnimationLoop(ze),this.setAnimationLoop=function(Y){Te=Y},this.dispose=function(){}}},Tr=new er,zg=new ht;function kg(e,t){function i(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function r(f,m){m.color.getRGB(f.fogColor.value,Ql(e)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,y,_,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),u(f,m)):m.isMeshPhongMaterial?(s(f,m),c(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,T)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),v(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(n(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,_):m.isSpriteMaterial?h(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,i(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Yt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,i(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Yt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,i(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,i(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y=t.get(m),_=y.envMap,T=y.envMapRotation;_&&(f.envMap.value=_,Tr.copy(T),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),f.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Tr)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,f.aoMapTransform))}function n(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=_*.5,m.map&&(f.map.value=m.map,i(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){let y=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Vg(e,t,i,r){let a={},s={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let T=_.program;r.uniformBlockBinding(y,T)}function h(y,_){let T=a[y.id];T===void 0&&(g(y),T=c(y),a[y.id]=T,y.addEventListener("dispose",f));let z=_.program;r.updateUBOMapping(y,z);let R=t.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function c(y){let _=u();y.__bindingPointIndex=_;let T=e.createBuffer(),z=y.__size,R=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,z,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,T),T}function u(){for(let y=0;y<o;y++)if(n.indexOf(y)===-1)return n.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=a[y.id],T=y.uniforms,z=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let R=0,P=T.length;R<P;R++){let D=Array.isArray(T[R])?T[R]:[T[R]];for(let M=0,E=D.length;M<E;M++){let C=D[M];if(p(C,R,M,z)===!0){let U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],H=0;for(let ae=0;ae<O.length;ae++){let j=O[ae],ce=v(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,e.bufferSubData(e.UNIFORM_BUFFER,U+H,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,H),H+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,U,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,_,T,z){let R=y.value,P=_+"_"+T;if(z[P]===void 0)return typeof R=="number"||typeof R=="boolean"?z[P]=R:z[P]=R.clone(),!0;{let D=z[P];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return z[P]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(y){let _=y.uniforms,T=0,z=16;for(let P=0,D=_.length;P<D;P++){let M=Array.isArray(_[P])?_[P]:[_[P]];for(let E=0,C=M.length;E<C;E++){let U=M[E],O=Array.isArray(U.value)?U.value:[U.value];for(let H=0,ae=O.length;H<ae;H++){let j=O[H],ce=v(j),te=T%z,_e=te%ce.boundary,Te=te+_e;T+=_e,Te!==0&&z-Te<ce.storage&&(T+=z-Te),U.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=ce.storage}}}let R=T%z;return R>0&&(T+=z-R),y.__size=T,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){let _=y.target;_.removeEventListener("dispose",f);let T=n.indexOf(_.__bindingPointIndex);n.splice(T,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function m(){for(let y in a)e.deleteBuffer(a[y]);n=[],a={},s={}}return{bind:l,update:h,dispose:m}}var Uh=class{constructor(e={}){let{canvas:t=Cu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let p=new Uint32Array(4),g=new Int32Array(4),v=null,f=null,m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=Si,this.toneMappingExposure=1;let _=this,T=!1,z=0,R=0,P=null,D=-1,M=null,E=new bt,C=new bt,U=null,O=new Je(0),H=0,ae=t.width,j=t.height,ce=1,te=null,_e=null,Te=new bt(0,0,ae,j),ze=new bt(0,0,ae,j),Ee=!1,Y=new po,ie=!1,I=!1,X=new ht,k=new ht,le=new L,me=new bt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function de(){return P===null?ce:1}let w=i;function ge(S,B){return t.getContext(S,B)}try{let S={alpha:!0,depth:r,stencil:a,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",$,!1),w===null){let B="webgl2";if(w=ge(B,S),w===null)throw ge(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let se,Se,oe,Pe,q,W,b,x,A,re,ne,G,Oe,ve,we,We,xe,Ue,pe,fe,he,Ae,Le,Ve;function N(){se=new qf(w),se.init(),Ae=new Ig(w,se),Se=new Vf(w,se,e,Ae),oe=new Cg(w,se),Se.reverseDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),Pe=new Kf(w),q=new fg,W=new Lg(w,se,oe,q,Se,Ae,Pe),b=new Gf(_),x=new jf(_),A=new id(w),Le=new zf(w,A),re=new Yf(w,A,Pe,Le),ne=new $f(w,re,A,Pe),pe=new Zf(w,Se,W),We=new Hf(q),G=new pg(_,b,x,se,Se,Le,We),Oe=new kg(_,q),ve=new gg,we=new Sg(se),Ue=new Bf(_,b,x,oe,ne,d,o),xe=new Ag(_,ne,Se),Ve=new Vg(w,Pe,Se,oe),fe=new kf(w,se,Pe),he=new Jf(w,se,Pe),Pe.programs=G.programs,_.capabilities=Se,_.extensions=se,_.properties=q,_.renderLists=ve,_.shadowMap=xe,_.state=oe,_.info=Pe}N();let ue=new Bg(_,w);this.xr=ue,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let S=se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(S){S!==void 0&&(ce=S,this.setSize(ae,j,!1))},this.getSize=function(S){return S.set(ae,j)},this.setSize=function(S,B,K=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=S,j=B,t.width=Math.floor(S*ce),t.height=Math.floor(B*ce),K===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(ae*ce,j*ce).floor()},this.setDrawingBufferSize=function(S,B,K){ae=S,j=B,ce=K,t.width=Math.floor(S*K),t.height=Math.floor(B*K),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,B,K,Z){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,B,K,Z),oe.viewport(E.copy(Te).multiplyScalar(ce).round())},this.getScissor=function(S){return S.copy(ze)},this.setScissor=function(S,B,K,Z){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,B,K,Z),oe.scissor(C.copy(ze).multiplyScalar(ce).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(S){oe.setScissorTest(Ee=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(S=!0,B=!0,K=!0){let Z=0;if(S){let F=!1;if(P!==null){let ye=P.texture.format;F=ye===dn||ye===un||ye===cn}if(F){let ye=P.texture.type,Fe=ye===Ui||ye===pr||ye===_a||ye===Ur||ye===on||ye===ln,ke=Ue.getClearColor(),Ge=Ue.getClearAlpha(),Ke=ke.r,Ze=ke.g,je=ke.b;Fe?(p[0]=Ke,p[1]=Ze,p[2]=je,p[3]=Ge,w.clearBufferuiv(w.COLOR,0,p)):(g[0]=Ke,g[1]=Ze,g[2]=je,g[3]=Ge,w.clearBufferiv(w.COLOR,0,g))}else Z|=w.COLOR_BUFFER_BIT}B&&(Z|=w.DEPTH_BUFFER_BIT),K&&(Z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",$,!1),ve.dispose(),we.dispose(),q.dispose(),b.dispose(),x.dispose(),ne.dispose(),Le.dispose(),Ve.dispose(),G.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",rt),ue.removeEventListener("sessionend",ti),Wt.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let S=Pe.autoReset,B=xe.enabled,K=xe.autoUpdate,Z=xe.needsUpdate,F=xe.type;N(),Pe.autoReset=S,xe.enabled=B,xe.autoUpdate=K,xe.needsUpdate=Z,xe.type=F}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Q(S){let B=S.target;B.removeEventListener("dispose",Q),De(B)}function De(S){Ce(S),q.remove(S)}function Ce(S){let B=q.get(S).programs;B!==void 0&&(B.forEach(function(K){G.releaseProgram(K)}),S.isShaderMaterial&&G.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,K,Z,F,ye){B===null&&(B=be);let Fe=F.isMesh&&F.matrixWorld.determinant()<0,ke=ga(S,B,K,Z,F);oe.setMaterial(Z,Fe);let Ge=K.index,Ke=1;if(Z.wireframe===!0){if(Ge=re.getWireframeAttribute(K),Ge===void 0)return;Ke=2}let Ze=K.drawRange,je=K.attributes.position,et=Ze.start*Ke,nt=(Ze.start+Ze.count)*Ke;ye!==null&&(et=Math.max(et,ye.start*Ke),nt=Math.min(nt,(ye.start+ye.count)*Ke)),Ge!==null?(et=Math.max(et,0),nt=Math.min(nt,Ge.count)):je!=null&&(et=Math.max(et,0),nt=Math.min(nt,je.count));let ot=nt-et;if(ot<0||ot===1/0)return;Le.setup(F,Z,ke,K,Ge);let Ie,Be=fe;if(Ge!==null&&(Ie=A.get(Ge),Be=he,Be.setIndex(Ie)),F.isMesh)Z.wireframe===!0?(oe.setLineWidth(Z.wireframeLinewidth*de()),Be.setMode(w.LINES)):Be.setMode(w.TRIANGLES);else if(F.isLine){let Me=Z.linewidth;Me===void 0&&(Me=1),oe.setLineWidth(Me*de()),F.isLineSegments?Be.setMode(w.LINES):F.isLineLoop?Be.setMode(w.LINE_LOOP):Be.setMode(w.LINE_STRIP)}else F.isPoints?Be.setMode(w.POINTS):F.isSprite&&Be.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Be.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Be.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Me=F._multiDrawStarts,tt=F._multiDrawCounts,yt=F._multiDrawCount,mt=Ge?A.get(Ge).bytesPerElement:1,Lt=q.get(Z).currentProgram.getUniforms();for(let vt=0;vt<yt;vt++)Lt.setValue(w,"_gl_DrawID",vt),Be.render(Me[vt]/mt,tt[vt])}else if(F.isInstancedMesh)Be.renderInstances(et,ot,F.count);else if(K.isInstancedBufferGeometry){let Me=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,tt=Math.min(K.instanceCount,Me);Be.renderInstances(et,ot,tt)}else Be.render(et,ot)};function qe(S,B,K){S.transparent===!0&&S.side===Mi&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,dt(S,B,K),S.side=ji,S.needsUpdate=!0,dt(S,B,K),S.side=Mi):dt(S,B,K)}this.compile=function(S,B,K=null){K===null&&(K=S),f=we.get(K),f.init(B),y.push(f),K.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==K&&S.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let Z=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ye=F.material;if(ye)if(Array.isArray(ye))for(let Fe=0;Fe<ye.length;Fe++){let ke=ye[Fe];qe(ke,K,F),Z.add(ke)}else qe(ye,K,F),Z.add(ye)}),y.pop(),f=null,Z},this.compileAsync=function(S,B,K=null){let Z=this.compile(S,B,K);return new Promise(F=>{function ye(){if(Z.forEach(function(Fe){q.get(Fe).currentProgram.isReady()&&Z.delete(Fe)}),Z.size===0){F(S);return}setTimeout(ye,10)}se.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ye=null;function ut(S){Ye&&Ye(S)}function rt(){Wt.stop()}function ti(){Wt.start()}let Wt=new ah;Wt.setAnimationLoop(ut),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(S){Ye=S,ue.setAnimationLoop(S),S===null?Wt.stop():Wt.start()},ue.addEventListener("sessionstart",rt),ue.addEventListener("sessionend",ti),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(B),B=ue.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,B,P),f=we.get(S,y.length),f.init(B),y.push(f),k.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(k),I=this.localClippingEnabled,ie=We.init(this.clippingPlanes,I),v=ve.get(S,m.length),v.init(),m.push(v),ue.enabled===!0&&ue.isPresenting===!0){let ye=_.xr.getDepthSensingMesh();ye!==null&&fa(ye,B,-1/0,_.sortObjects)}fa(S,B,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(te,_e),J=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,J&&Ue.addToRenderList(v,S),this.info.render.frame++,ie===!0&&We.beginShadows();let K=f.state.shadowsArray;xe.render(K,S,B),ie===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=v.opaque,F=v.transmissive;if(f.setupLights(),B.isArrayCamera){let ye=B.cameras;if(F.length>0)for(let Fe=0,ke=ye.length;Fe<ke;Fe++){let Ge=ye[Fe];Rr(Z,F,S,Ge)}J&&Ue.render(S);for(let Fe=0,ke=ye.length;Fe<ke;Fe++){let Ge=ye[Fe];Ar(v,S,Ge,Ge.viewport)}}else F.length>0&&Rr(Z,F,S,B),J&&Ue.render(S),Ar(v,S,B);P!==null&&(W.updateMultisampleRenderTarget(P),W.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(_,S,B),Le.resetDefaultState(),D=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],ie===!0&&We.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function fa(S,B,K,Z){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){Z&&me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);let ye=ne.update(S),Fe=S.material;Fe.visible&&v.push(S,ye,Fe,K,me.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let ye=ne.update(S),Fe=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),me.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),me.copy(ye.boundingSphere.center)),me.applyMatrix4(S.matrixWorld).applyMatrix4(k)),Array.isArray(Fe)){let ke=ye.groups;for(let Ge=0,Ke=ke.length;Ge<Ke;Ge++){let Ze=ke[Ge],je=Fe[Ze.materialIndex];je&&je.visible&&v.push(S,ye,je,K,me.z,Ze)}}else Fe.visible&&v.push(S,ye,Fe,K,me.z,null)}}let F=S.children;for(let ye=0,Fe=F.length;ye<Fe;ye++)fa(F[ye],B,K,Z)}function Ar(S,B,K,Z){let F=S.opaque,ye=S.transmissive,Fe=S.transparent;f.setupLightsView(K),ie===!0&&We.setGlobalState(_.clippingPlanes,K),Z&&oe.viewport(E.copy(Z)),F.length>0&&cr(F,B,K),ye.length>0&&cr(ye,B,K),Fe.length>0&&cr(Fe,B,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Rr(S,B,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new Ji(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Nr:Ui,minFilter:Ni,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let F=f.state.transmissionRenderTarget[Z.id],ye=Z.viewport||E;F.setSize(ye.z,ye.w);let Fe=_.getRenderTarget();_.setRenderTarget(F),_.getClearColor(O),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ue.render(K);let ke=_.toneMapping;_.toneMapping=Si;let Ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),ie===!0&&We.setGlobalState(_.clippingPlanes,Z),cr(S,K,Z),W.updateMultisampleRenderTarget(F),W.updateRenderTargetMipmap(F),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ze=0,je=B.length;Ze<je;Ze++){let et=B[Ze],nt=et.object,ot=et.geometry,Ie=et.material,Be=et.group;if(Ie.side===Mi&&nt.layers.test(Z.layers)){let Me=Ie.side;Ie.side=Yt,Ie.needsUpdate=!0,ma(nt,K,Z,ot,Ie,Be),Ie.side=Me,Ie.needsUpdate=!0,Ke=!0}}Ke===!0&&(W.updateMultisampleRenderTarget(F),W.updateRenderTargetMipmap(F))}_.setRenderTarget(Fe),_.setClearColor(O,H),Ge!==void 0&&(Z.viewport=Ge),_.toneMapping=ke}function cr(S,B,K){let Z=B.isScene===!0?B.overrideMaterial:null;for(let F=0,ye=S.length;F<ye;F++){let Fe=S[F],ke=Fe.object,Ge=Fe.geometry,Ke=Z===null?Fe.material:Z,Ze=Fe.group;ke.layers.test(K.layers)&&ma(ke,B,K,Ge,Ke,Ze)}}function ma(S,B,K,Z,F,ye){S.onBeforeRender(_,B,K,Z,F,ye),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,B,K,Z,S,ye),F.transparent===!0&&F.side===Mi&&F.forceSinglePass===!1?(F.side=Yt,F.needsUpdate=!0,_.renderBufferDirect(K,B,Z,F,S,ye),F.side=ji,F.needsUpdate=!0,_.renderBufferDirect(K,B,Z,F,S,ye),F.side=Mi):_.renderBufferDirect(K,B,Z,F,S,ye),S.onAfterRender(_,B,K,Z,F,ye)}function dt(S,B,K){B.isScene!==!0&&(B=be);let Z=q.get(S),F=f.state.lights,ye=f.state.shadowsArray,Fe=F.state.version,ke=G.getParameters(S,F.state,ye,B,K),Ge=G.getProgramCacheKey(ke),Ke=Z.programs;Z.environment=S.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(S.isMeshStandardMaterial?x:b).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ke===void 0&&(S.addEventListener("dispose",Q),Ke=new Map,Z.programs=Ke);let Ze=Ke.get(Ge);if(Ze!==void 0){if(Z.currentProgram===Ze&&Z.lightsStateVersion===Fe)return qt(S,ke),Ze}else ke.uniforms=G.getUniforms(S),S.onBeforeCompile(ke,_),Ze=G.acquireProgram(ke,Ge),Ke.set(Ge,Ze),Z.uniforms=ke.uniforms;let je=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(je.clippingPlanes=We.uniform),qt(S,ke),Z.needsLights=Pt(S),Z.lightsStateVersion=Fe,Z.needsLights&&(je.ambientLightColor.value=F.state.ambient,je.lightProbe.value=F.state.probe,je.directionalLights.value=F.state.directional,je.directionalLightShadows.value=F.state.directionalShadow,je.spotLights.value=F.state.spot,je.spotLightShadows.value=F.state.spotShadow,je.rectAreaLights.value=F.state.rectArea,je.ltc_1.value=F.state.rectAreaLTC1,je.ltc_2.value=F.state.rectAreaLTC2,je.pointLights.value=F.state.point,je.pointLightShadows.value=F.state.pointShadow,je.hemisphereLights.value=F.state.hemi,je.directionalShadowMap.value=F.state.directionalShadowMap,je.directionalShadowMatrix.value=F.state.directionalShadowMatrix,je.spotShadowMap.value=F.state.spotShadowMap,je.spotLightMatrix.value=F.state.spotLightMatrix,je.spotLightMap.value=F.state.spotLightMap,je.pointShadowMap.value=F.state.pointShadowMap,je.pointShadowMatrix.value=F.state.pointShadowMatrix),Z.currentProgram=Ze,Z.uniformsList=null,Ze}function st(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function qt(S,B){let K=q.get(S);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function ga(S,B,K,Z,F){B.isScene!==!0&&(B=be),W.resetTextureUnits();let ye=B.fog,Fe=Z.isMeshStandardMaterial?B.environment:null,ke=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fr,Ge=(Z.isMeshStandardMaterial?x:b).get(Z.envMap||Fe),Ke=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),je=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,nt=!!K.morphAttributes.color,ot=Si;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ot=_.toneMapping);let Ie=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Be=Ie!==void 0?Ie.length:0,Me=q.get(Z),tt=f.state.lights;if(ie===!0&&(I===!0||S!==M)){let Mt=S===M&&Z.id===D;We.setState(Z,S,Mt)}let yt=!1;Z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==tt.state.version||Me.outputColorSpace!==ke||F.isBatchedMesh&&Me.batching===!1||!F.isBatchedMesh&&Me.batching===!0||F.isBatchedMesh&&Me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Me.instancing===!1||!F.isInstancedMesh&&Me.instancing===!0||F.isSkinnedMesh&&Me.skinning===!1||!F.isSkinnedMesh&&Me.skinning===!0||F.isInstancedMesh&&Me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Me.instancingMorph===!1&&F.morphTexture!==null||Me.envMap!==Ge||Z.fog===!0&&Me.fog!==ye||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==We.numPlanes||Me.numIntersection!==We.numIntersection)||Me.vertexAlphas!==Ke||Me.vertexTangents!==Ze||Me.morphTargets!==je||Me.morphNormals!==et||Me.morphColors!==nt||Me.toneMapping!==ot||Me.morphTargetsCount!==Be)&&(yt=!0):(yt=!0,Me.__version=Z.version);let mt=Me.currentProgram;yt===!0&&(mt=dt(Z,B,F));let Lt=!1,vt=!1,Vt=!1,at=mt.getUniforms(),Bt=Me.uniforms;if(oe.useProgram(mt.program)&&(Lt=!0,vt=!0,Vt=!0),Z.id!==D&&(D=Z.id,vt=!0),Lt||M!==S){oe.buffers.depth.getReversed()?(X.copy(S.projectionMatrix),Lu(X),Iu(X),at.setValue(w,"projectionMatrix",X)):at.setValue(w,"projectionMatrix",S.projectionMatrix),at.setValue(w,"viewMatrix",S.matrixWorldInverse);let Mt=at.map.cameraPosition;Mt!==void 0&&Mt.setValue(w,le.setFromMatrixPosition(S.matrixWorld)),Se.logarithmicDepthBuffer&&at.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&at.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,vt=!0,Vt=!0)}if(F.isSkinnedMesh){at.setOptional(w,F,"bindMatrix"),at.setOptional(w,F,"bindMatrixInverse");let Mt=F.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),at.setValue(w,"boneTexture",Mt.boneTexture,W))}F.isBatchedMesh&&(at.setOptional(w,F,"batchingTexture"),at.setValue(w,"batchingTexture",F._matricesTexture,W),at.setOptional(w,F,"batchingIdTexture"),at.setValue(w,"batchingIdTexture",F._indirectTexture,W),at.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&at.setValue(w,"batchingColorTexture",F._colorsTexture,W));let ii=K.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&pe.update(F,K,mt),(vt||Me.receiveShadow!==F.receiveShadow)&&(Me.receiveShadow=F.receiveShadow,at.setValue(w,"receiveShadow",F.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bt.envMap.value=Ge,Bt.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),vt&&(at.setValue(w,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&yi(Bt,Vt),ye&&Z.fog===!0&&Oe.refreshFogUniforms(Bt,ye),Oe.refreshMaterialUniforms(Bt,Z,ce,j,f.state.transmissionRenderTarget[S.id]),Ts.upload(w,st(Me),Bt,W)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ts.upload(w,st(Me),Bt,W),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&at.setValue(w,"center",F.center),at.setValue(w,"modelViewMatrix",F.modelViewMatrix),at.setValue(w,"normalMatrix",F.normalMatrix),at.setValue(w,"modelMatrix",F.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Mt=Z.uniformsGroups;for(let ci=0,ui=Mt.length;ci<ui;ci++){let va=Mt[ci];Ve.update(va,mt),Ve.bind(va,mt)}}return mt}function yi(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Pt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,B,K){q.get(S.texture).__webglTexture=B,q.get(S.depthTexture).__webglTexture=K;let Z=q.get(S);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){let K=q.get(S);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,K=0){P=S,z=B,R=K;let Z=!0,F=null,ye=!1,Fe=!1;if(S){let ke=q.get(S);if(ke.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(w.FRAMEBUFFER,null),Z=!1;else if(ke.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(ke.__hasExternalTextures)W.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ze=S.depthTexture;if(ke.__boundDepthTexture!==Ze){if(Ze!==null&&q.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}let Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Fe=!0);let Ke=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ke[B])?F=Ke[B][K]:F=Ke[B],ye=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?F=q.get(S).__webglMultisampledFramebuffer:Array.isArray(Ke)?F=Ke[K]:F=Ke,E.copy(S.viewport),C.copy(S.scissor),U=S.scissorTest}else E.copy(Te).multiplyScalar(ce).floor(),C.copy(ze).multiplyScalar(ce).floor(),U=Ee;if(oe.bindFramebuffer(w.FRAMEBUFFER,F)&&Z&&oe.drawBuffers(S,F),oe.viewport(E),oe.scissor(C),oe.setScissorTest(U),ye){let ke=q.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,ke.__webglTexture,K)}else if(Fe){let ke=q.get(S.texture),Ge=B||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ke.__webglTexture,K||0,Ge)}D=-1},this.readRenderTargetPixels=function(S,B,K,Z,F,ye,Fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){oe.bindFramebuffer(w.FRAMEBUFFER,ke);try{let Ge=S.texture,Ke=Ge.format,Ze=Ge.type;if(!Se.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-Z&&K>=0&&K<=S.height-F&&w.readPixels(B,K,Z,F,Ae.convert(Ke),Ae.convert(Ze),ye)}finally{let Ge=P!==null?q.get(P).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(S,B,K,Z,F,ye,Fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){let Ge=S.texture,Ke=Ge.format,Ze=Ge.type;if(!Se.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-Z&&K>=0&&K<=S.height-F){oe.bindFramebuffer(w.FRAMEBUFFER,ke);let je=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,je),w.bufferData(w.PIXEL_PACK_BUFFER,ye.byteLength,w.STREAM_READ),w.readPixels(B,K,Z,F,Ae.convert(Ke),Ae.convert(Ze),0);let et=P!==null?q.get(P).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,et);let nt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Pu(w,nt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,je),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ye),w.deleteBuffer(je),w.deleteSync(nt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,K=0){S.isTexture!==!0&&(ya("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);let Z=Math.pow(2,-K),F=Math.floor(S.image.width*Z),ye=Math.floor(S.image.height*Z),Fe=B!==null?B.x:0,ke=B!==null?B.y:0;W.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,K,0,0,Fe,ke,F,ye),oe.unbindTexture()},this.copyTextureToTexture=function(S,B,K=null,Z=null,F=0){S.isTexture!==!0&&(ya("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,S=arguments[1],B=arguments[2],F=arguments[3]||0,K=null);let ye,Fe,ke,Ge,Ke,Ze,je,et,nt,ot=S.isCompressedTexture?S.mipmaps[F]:S.image;K!==null?(ye=K.max.x-K.min.x,Fe=K.max.y-K.min.y,ke=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,Ke=K.min.y,Ze=K.isBox3?K.min.z:0):(ye=ot.width,Fe=ot.height,ke=ot.depth||1,Ge=0,Ke=0,Ze=0),Z!==null?(je=Z.x,et=Z.y,nt=Z.z):(je=0,et=0,nt=0);let Ie=Ae.convert(B.format),Be=Ae.convert(B.type),Me;B.isData3DTexture?(W.setTexture3D(B,0),Me=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(W.setTexture2DArray(B,0),Me=w.TEXTURE_2D_ARRAY):(W.setTexture2D(B,0),Me=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);let tt=w.getParameter(w.UNPACK_ROW_LENGTH),yt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),mt=w.getParameter(w.UNPACK_SKIP_PIXELS),Lt=w.getParameter(w.UNPACK_SKIP_ROWS),vt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ge),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ze);let Vt=S.isDataArrayTexture||S.isData3DTexture,at=B.isDataArrayTexture||B.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Bt=q.get(S),ii=q.get(B),Mt=q.get(Bt.__renderTarget),ci=q.get(ii.__renderTarget);oe.bindFramebuffer(w.READ_FRAMEBUFFER,Mt.__webglFramebuffer),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let ui=0;ui<ke;ui++)Vt&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,q.get(S).__webglTexture,F,Ze+ui),S.isDepthTexture?(at&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,q.get(B).__webglTexture,F,nt+ui),w.blitFramebuffer(Ge,Ke,ye,Fe,je,et,ye,Fe,w.DEPTH_BUFFER_BIT,w.NEAREST)):at?w.copyTexSubImage3D(Me,F,je,et,nt+ui,Ge,Ke,ye,Fe):w.copyTexSubImage2D(Me,F,je,et,nt+ui,Ge,Ke,ye,Fe);oe.bindFramebuffer(w.READ_FRAMEBUFFER,null),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else at?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(Me,F,je,et,nt,ye,Fe,ke,Ie,Be,ot.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(Me,F,je,et,nt,ye,Fe,ke,Ie,ot.data):w.texSubImage3D(Me,F,je,et,nt,ye,Fe,ke,Ie,Be,ot):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,F,je,et,ye,Fe,Ie,Be,ot.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,F,je,et,ot.width,ot.height,Ie,ot.data):w.texSubImage2D(w.TEXTURE_2D,F,je,et,ye,Fe,Ie,Be,ot);w.pixelStorei(w.UNPACK_ROW_LENGTH,tt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,yt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,mt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Lt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,vt),F===0&&B.generateMipmaps&&w.generateMipmap(Me),oe.unbindTexture()},this.copyTextureToTexture3D=function(S,B,K=null,Z=null,F=0){return S.isTexture!==!0&&(ya("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,S=arguments[2],B=arguments[3],F=arguments[4]||0),ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,K,Z,F)},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),oe.unbindTexture()},this.resetState=function(){z=0,R=0,P=null,oe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}},Hg=class Lc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Je(t),this.near=i,this.far=r}clone(){return new Lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gg=class extends ri{constructor(e=null,t=1,i=1,r,a,s,n,o,l=Zt,h=Zt,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dh=class extends At{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},aa=new ht,Oh=new ht,As=[],Fh=new fr,Wg=new ht,Ca=new Et,Pa=new Ea,ar=class extends Et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Wg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,aa),Fh.copy(e.boundingBox).applyMatrix4(aa),this.boundingBox.union(Fh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ea),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,aa),Pa.copy(e.boundingSphere).applyMatrix4(aa),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let n=0;n<i.length;n++)i[n]=r[s+n]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,aa),Oh.multiplyMatrices(i,aa),Ca.matrixWorld=Oh,Ca.raycast(e,As);for(let s=0,n=As.length;s<n;s++){let o=As[s];o.instanceId=a,o.object=this,t.push(o)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gg(new Float32Array(r*this.count),r,this.count,hn,Ei));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let n=this.geometry.morphTargetsRelative?1:1-s,o=r*e;a[o]=n,a.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},sr=class extends ri{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,s;t?s=t:s=e*i[a-1];let n=0,o=a-1,l;for(;n<=o;)if(r=Math.floor(n+(o-n)/2),l=i[r]-s,l<0)n=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(s-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),s=this.getPoint(r),n=t||(a.isVector2?new Re:new L);return n.copy(s).sub(a).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,r=[],a=[],s=[],n=new L,o=new ht;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new L)}a[0]=new L,s[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),n.crossVectors(r[d-1],r[d]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(It(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(n,p))}s[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(It(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Ai{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new Re){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xg=class extends bo{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function wo(){let e=0,t=0,i=0,r=0;function a(s,n,o,l){e=s,t=o,i=-3*s+3*n-2*o-l,r=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,h){a(n,o,h*(o-s),h*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,h,c,u){let d=(n-s)/h-(o-s)/(h+c)+(o-n)/c,p=(o-n)/c-(l-n)/(c+u)+(l-o)/u;d*=c,p*=c,a(n,o,d,p)},calc:function(s){let n=s*s,o=n*s;return e+t*s+i*n+r*o}}}var Rs=new L,Ao=new wo,Ro=new wo,Co=new wo,jg=class extends Ai{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,n=Math.floor(s),o=s-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/a)+1)*a:o===0&&n===a-1&&(n=a-2,o=1);let l,h;this.closed||n>0?l=r[(n-1)%a]:(Rs.subVectors(r[0],r[1]).add(r[0]),l=Rs);let c=r[n%a],u=r[(n+1)%a];if(this.closed||n+2<a?h=r[(n+2)%a]:(Rs.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Rs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),Ao.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,v),Ro.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,v),Co.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Ro.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Co.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(Ao.calc(o),Ro.calc(o),Co.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bh(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+s+n)*l+(-3*i+3*r-2*s-n)*o+s*e+i}function qg(e,t){let i=1-e;return i*i*t}function Yg(e,t){return 2*(1-e)*e*t}function Jg(e,t){return e*e*t}function La(e,t,i,r){return qg(e,t)+Yg(e,i)+Jg(e,r)}function Kg(e,t){let i=1-e;return i*i*i*t}function Zg(e,t){let i=1-e;return 3*i*i*e*t}function $g(e,t){return 3*(1-e)*e*e*t}function Qg(e,t){return e*e*e*t}function Ia(e,t,i,r,a){return Kg(e,t)+Zg(e,i)+$g(e,r)+Qg(e,a)}var zh=class extends Ai{constructor(e=new Re,t=new Re,i=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Re){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Ia(e,r.x,a.x,s.x,n.x),Ia(e,r.y,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},e0=class extends Ai{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Ia(e,r.x,a.x,s.x,n.x),Ia(e,r.y,a.y,s.y,n.y),Ia(e,r.z,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kh=class extends Ai{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},t0=class extends Ai{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vh=class extends Ai{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(La(e,r.x,a.x,s.x),La(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},i0=class extends Ai{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(La(e,r.x,a.x,s.x),La(e,r.y,a.y,s.y),La(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hh=class extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),n=a-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(Bh(n,o.x,l.x,h.x,c.x),Bh(n,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Re().fromArray(r))}return this}},Po=Object.freeze({__proto__:null,ArcCurve:Xg,CatmullRomCurve3:jg,CubicBezierCurve:zh,CubicBezierCurve3:e0,EllipseCurve:bo,LineCurve:kh,LineCurve3:t0,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:i0,SplineCurve:Hh}),r0=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,n=this.curves[a],o=n.getLength(),l=o===0?0:1-s/o;return n.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Po[r.type]().fromJSON(r))}return this}},nr=class extends r0{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new kh(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Vh(this.currentPoint.clone(),new Re(e,t),new Re(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new zh(this.currentPoint.clone(),new Re(e,t),new Re(i,r),new Re(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Hh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new bo(e,t,i,r,a,s,n,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},a0=class Ic extends Xt{constructor(t=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=It(a,0,Math.PI*2);let s=[],n=[],o=[],l=[],h=[],c=1/i,u=new L,d=new Re,p=new L,g=new L,v=new L,f=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=i;y++){let _=r+y*c*a,T=Math.sin(_),z=Math.cos(_);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*T,u.y=t[R].y,u.z=t[R].x*z,n.push(u.x,u.y,u.z),d.x=y/i,d.y=R/(t.length-1),o.push(d.x,d.y);let P=l[3*R+0]*T,D=l[3*R+1],M=l[3*R+0]*z;h.push(P,D,M)}}for(let y=0;y<i;y++)for(let _=0;_<t.length-1;_++){let T=_+y*t.length,z=T,R=T+t.length,P=T+t.length+1,D=T+1;s.push(z,R,D),s.push(P,D,R)}this.setIndex(s),this.setAttribute("position",new ct(n,3)),this.setAttribute("uv",new ct(o,2)),this.setAttribute("normal",new ct(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.points,t.segments,t.phiStart,t.phiLength)}},s0=class Nc extends Xt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let s=[],n=[],o=[],l=[],h=new L,c=new Re;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(n[d]/t+1)/2,c.y=(n[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ct(n,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Cs=class Uc extends Xt{constructor(t=1,i=1,r=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),s=Math.floor(s);let c=[],u=[],d=[],p=[],g=0,v=[],f=r/2,m=0;y(),n===!1&&(t>0&&_(!0),i>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function y(){let T=new L,z=new L,R=0,P=(i-t)/r;for(let D=0;D<=s;D++){let M=[],E=D/s,C=E*(i-t)+t;for(let U=0;U<=a;U++){let O=U/a,H=O*l+o,ae=Math.sin(H),j=Math.cos(H);z.x=C*ae,z.y=-E*r+f,z.z=C*j,u.push(z.x,z.y,z.z),T.set(ae,P,j).normalize(),d.push(T.x,T.y,T.z),p.push(O,1-E),M.push(g++)}v.push(M)}for(let D=0;D<a;D++)for(let M=0;M<s;M++){let E=v[M][D],C=v[M+1][D],U=v[M+1][D+1],O=v[M][D+1];(t>0||M!==0)&&(c.push(E,C,O),R+=3),(i>0||M!==s-1)&&(c.push(C,U,O),R+=3)}h.addGroup(m,R,0),m+=R}function _(T){let z=g,R=new Re,P=new L,D=0,M=T===!0?t:i,E=T===!0?1:-1;for(let U=1;U<=a;U++)u.push(0,f*E,0),d.push(0,E,0),p.push(.5,.5),g++;let C=g;for(let U=0;U<=a;U++){let O=U/a*l+o,H=Math.cos(O),ae=Math.sin(O);P.x=M*ae,P.y=f*E,P.z=M*H,u.push(P.x,P.y,P.z),d.push(0,E,0),R.x=H*.5+.5,R.y=ae*.5*E+.5,p.push(R.x,R.y),g++}for(let U=0;U<a;U++){let O=z+U,H=C+U;T===!0?c.push(H,H+1,O):c.push(H+1,H,O),D+=3}h.addGroup(m,D,T===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},n0=class Dc extends Cs{constructor(t=1,i=1,r=32,a=1,s=!1,n=0,o=Math.PI*2){super(0,t,i,r,a,s,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(t){return new Dc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},or=class extends nr{constructor(e){super(e),this.uuid=kr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new nr().fromJSON(r))}return this}},o0={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,s=Gh(e,0,a,i,!0),n=[];if(!s||s.next===s.prev)return n;let o,l,h,c,u,d,p;if(r&&(s=d0(e,t,s,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Na(s,n,i,o,l,p,0),n}};function Gh(e,t,i,r,a){let s,n;if(a===E0(e,t,i,r)>0)for(s=t;s<i;s+=r)n=jh(s,e[s],e[s+1],n);else for(s=i-r;s>=t;s-=r)n=jh(s,e[s],e[s+1],n);return n&&Ps(n,n.next)&&(Da(n),n=n.next),n}function br(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Ps(i,i.next)||gt(i.prev,i,i.next)===0)){if(Da(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Na(e,t,i,r,a,s,n){if(!e)return;!n&&s&&v0(e,r,a,s);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,s?h0(e,r,a,s):l0(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),Da(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=c0(br(e),t,i),Na(e,t,i,r,a,s,2)):n===2&&u0(e,t,i,r,a,s):Na(br(e),t,i,r,a,s,1);break}}}function l0(e){let t=e.prev,i=e,r=e.next;if(gt(t,i,r)>=0)return!1;let a=t.x,s=i.x,n=r.x,o=t.y,l=i.y,h=r.y,c=a<s?a<n?a:n:s<n?s:n,u=o<l?o<h?o:h:l<h?l:h,d=a>s?a>n?a:n:s>n?s:n,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&sa(a,o,s,l,n,h,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function h0(e,t,i,r){let a=e.prev,s=e,n=e.next;if(gt(a,s,n)>=0)return!1;let o=a.x,l=s.x,h=n.x,c=a.y,u=s.y,d=n.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,m=Lo(p,g,t,i,r),y=Lo(v,f,t,i,r),_=e.prevZ,T=e.nextZ;for(;_&&_.z>=m&&T&&T.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&sa(o,c,l,u,h,d,_.x,_.y)&&gt(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=v&&T.y>=g&&T.y<=f&&T!==a&&T!==n&&sa(o,c,l,u,h,d,T.x,T.y)&&gt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&sa(o,c,l,u,h,d,_.x,_.y)&&gt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=y;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=f&&T!==a&&T!==n&&sa(o,c,l,u,h,d,T.x,T.y)&&gt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function c0(e,t,i){let r=e;do{let a=r.prev,s=r.next.next;!Ps(a,s)&&Wh(a,r,r.next,s)&&Ua(a,s)&&Ua(s,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(s.i/i|0),Da(r),Da(r.next),r=e=s),r=r.next}while(r!==e);return br(r)}function u0(e,t,i,r,a,s){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&y0(n,o)){let l=Xh(n,o);n=br(n,n.next),l=br(l,l.next),Na(n,t,i,r,a,s,0),Na(l,t,i,r,a,s,0);return}o=o.next}n=n.next}while(n!==e)}function d0(e,t,i,r){let a=[],s,n,o,l,h;for(s=0,n=t.length;s<n;s++)o=t[s]*r,l=s<n-1?t[s+1]*r:e.length,h=Gh(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(x0(h));for(a.sort(p0),s=0;s<a.length;s++)i=f0(a[s],i);return i}function p0(e,t){return e.x-t.x}function f0(e,t){let i=m0(e,t);if(!i)return t;let r=Xh(i,e);return br(r,r.next),br(i,i.next)}function m0(e,t){let i=t,r=-1/0,a,s=e.x,n=e.y;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===s))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do s>=i.x&&i.x>=l&&s!==i.x&&sa(n<h?s:r,n,l,h,n<h?r:s,n,i.x,i.y)&&(u=Math.abs(n-i.y)/(s-i.x),Ua(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&g0(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function g0(e,t){return gt(e.prev,e,t.prev)<0&&gt(t.next,e,e.next)<0}function v0(e,t,i,r){let a=e;do a.z===0&&(a.z=Lo(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,_0(a)}function _0(e){let t,i,r,a,s,n,o,l,h=1;do{for(i=e,e=null,s=null,n=0;i;){for(n++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,h*=2}while(n>1);return e}function Lo(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function x0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function sa(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function y0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!M0(e,t)&&(Ua(e,t)&&Ua(t,e)&&S0(e,t)&&(gt(e.prev,e,t.prev)||gt(e,t.prev,t))||Ps(e,t)&&gt(e.prev,e,e.next)>0&&gt(t.prev,t,t.next)>0)}function gt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Ps(e,t){return e.x===t.x&&e.y===t.y}function Wh(e,t,i,r){let a=Is(gt(e,t,i)),s=Is(gt(e,t,r)),n=Is(gt(i,r,e)),o=Is(gt(i,r,t));return!!(a!==s&&n!==o||a===0&&Ls(e,i,t)||s===0&&Ls(e,r,t)||n===0&&Ls(i,e,r)||o===0&&Ls(i,t,r))}function Ls(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Is(e){return e>0?1:e<0?-1:0}function M0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Wh(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ua(e,t){return gt(e.prev,e,e.next)<0?gt(e,t,e.next)>=0&&gt(e,e.prev,t)>=0:gt(e,t,e.prev)<0||gt(e,e.next,t)<0}function S0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Xh(e,t){let i=new Io(e.i,e.x,e.y),r=new Io(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function jh(e,t,i,r){let a=new Io(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Da(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Io(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E0(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}var na=class Oc{static area(t){let i=t.length,r=0;for(let a=i-1,s=0;s<i;a=s++)r+=t[a].x*t[s].y-t[s].x*t[a].y;return r*.5}static isClockWise(t){return Oc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],s=[];qh(t),Yh(r,t);let n=t.length;i.forEach(qh);for(let l=0;l<i.length;l++)a.push(n),n+=i[l].length,Yh(r,i[l]);let o=o0.triangulate(r,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function qh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Yh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var No=class Fc extends Xt{constructor(t=new or([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new ct(a,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,f=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:T0,_,T=!1,z,R,P,D;m&&(_=m.getSpacedPoints(c),T=!0,d=!1,z=m.computeFrenetFrames(c,!1),R=new L,P=new L,D=new L),d||(f=0,p=0,g=0,v=0);let M=o.extractPoints(h),E=M.shape,C=M.holes;if(!na.isClockWise(E)){E=E.reverse();for(let J=0,de=C.length;J<de;J++){let w=C[J];na.isClockWise(w)&&(C[J]=w.reverse())}}let U=na.triangulateShape(E,C),O=E;for(let J=0,de=C.length;J<de;J++){let w=C[J];E=E.concat(w)}function H(J,de,w){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(de,w)}let ae=E.length,j=U.length;function ce(J,de,w){let ge,se,Se,oe=J.x-de.x,Pe=J.y-de.y,q=w.x-J.x,W=w.y-J.y,b=oe*oe+Pe*Pe,x=oe*W-Pe*q;if(Math.abs(x)>Number.EPSILON){let A=Math.sqrt(b),re=Math.sqrt(q*q+W*W),ne=de.x-Pe/A,G=de.y+oe/A,Oe=w.x-W/re,ve=w.y+q/re,we=((Oe-ne)*W-(ve-G)*q)/(oe*W-Pe*q);ge=ne+oe*we-J.x,se=G+Pe*we-J.y;let We=ge*ge+se*se;if(We<=2)return new Re(ge,se);Se=Math.sqrt(We/2)}else{let A=!1;oe>Number.EPSILON?q>Number.EPSILON&&(A=!0):oe<-Number.EPSILON?q<-Number.EPSILON&&(A=!0):Math.sign(Pe)===Math.sign(W)&&(A=!0),A?(ge=-Pe,se=oe,Se=Math.sqrt(b)):(ge=oe,se=Pe,Se=Math.sqrt(b/2))}return new Re(ge/Se,se/Se)}let te=[];for(let J=0,de=O.length,w=de-1,ge=J+1;J<de;J++,w++,ge++)w===de&&(w=0),ge===de&&(ge=0),te[J]=ce(O[J],O[w],O[ge]);let _e=[],Te,ze=te.concat();for(let J=0,de=C.length;J<de;J++){let w=C[J];Te=[];for(let ge=0,se=w.length,Se=se-1,oe=ge+1;ge<se;ge++,Se++,oe++)Se===se&&(Se=0),oe===se&&(oe=0),Te[ge]=ce(w[ge],w[Se],w[oe]);_e.push(Te),ze=ze.concat(Te)}for(let J=0;J<f;J++){let de=J/f,w=p*Math.cos(de*Math.PI/2),ge=g*Math.sin(de*Math.PI/2)+v;for(let se=0,Se=O.length;se<Se;se++){let oe=H(O[se],te[se],ge);X(oe.x,oe.y,-w)}for(let se=0,Se=C.length;se<Se;se++){let oe=C[se];Te=_e[se];for(let Pe=0,q=oe.length;Pe<q;Pe++){let W=H(oe[Pe],Te[Pe],ge);X(W.x,W.y,-w)}}}let Ee=g+v;for(let J=0;J<ae;J++){let de=d?H(E[J],ze[J],Ee):E[J];T?(P.copy(z.normals[0]).multiplyScalar(de.x),R.copy(z.binormals[0]).multiplyScalar(de.y),D.copy(_[0]).add(P).add(R),X(D.x,D.y,D.z)):X(de.x,de.y,0)}for(let J=1;J<=c;J++)for(let de=0;de<ae;de++){let w=d?H(E[de],ze[de],Ee):E[de];T?(P.copy(z.normals[J]).multiplyScalar(w.x),R.copy(z.binormals[J]).multiplyScalar(w.y),D.copy(_[J]).add(P).add(R),X(D.x,D.y,D.z)):X(w.x,w.y,u/c*J)}for(let J=f-1;J>=0;J--){let de=J/f,w=p*Math.cos(de*Math.PI/2),ge=g*Math.sin(de*Math.PI/2)+v;for(let se=0,Se=O.length;se<Se;se++){let oe=H(O[se],te[se],ge);X(oe.x,oe.y,u+w)}for(let se=0,Se=C.length;se<Se;se++){let oe=C[se];Te=_e[se];for(let Pe=0,q=oe.length;Pe<q;Pe++){let W=H(oe[Pe],Te[Pe],ge);T?X(W.x,W.y+_[c-1].y,_[c-1].x+w):X(W.x,W.y,u+w)}}}Y(),ie();function Y(){let J=a.length/3;if(d){let de=0,w=ae*de;for(let ge=0;ge<j;ge++){let se=U[ge];k(se[2]+w,se[1]+w,se[0]+w)}de=c+f*2,w=ae*de;for(let ge=0;ge<j;ge++){let se=U[ge];k(se[0]+w,se[1]+w,se[2]+w)}}else{for(let de=0;de<j;de++){let w=U[de];k(w[2],w[1],w[0])}for(let de=0;de<j;de++){let w=U[de];k(w[0]+ae*c,w[1]+ae*c,w[2]+ae*c)}}r.addGroup(J,a.length/3-J,0)}function ie(){let J=a.length/3,de=0;I(O,de),de+=O.length;for(let w=0,ge=C.length;w<ge;w++){let se=C[w];I(se,de),de+=se.length}r.addGroup(J,a.length/3-J,1)}function I(J,de){let w=J.length;for(;--w>=0;){let ge=w,se=w-1;se<0&&(se=J.length-1);for(let Se=0,oe=c+f*2;Se<oe;Se++){let Pe=ae*Se,q=ae*(Se+1),W=de+ge+Pe,b=de+se+Pe,x=de+se+q,A=de+ge+q;le(W,b,x,A)}}}function X(J,de,w){l.push(J),l.push(de),l.push(w)}function k(J,de,w){me(J),me(de),me(w);let ge=a.length/3,se=y.generateTopUV(r,a,ge-3,ge-2,ge-1);be(se[0]),be(se[1]),be(se[2])}function le(J,de,w,ge){me(J),me(de),me(ge),me(de),me(w),me(ge);let se=a.length/3,Se=y.generateSideWallUV(r,a,se-6,se-3,se-2,se-1);be(Se[0]),be(Se[1]),be(Se[3]),be(Se[1]),be(Se[2]),be(Se[3])}function me(J){a.push(l[J*3+0]),a.push(l[J*3+1]),a.push(l[J*3+2])}function be(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return b0(i,r,t)}static fromJSON(t,i){let r=[];for(let s=0,n=t.shapes.length;s<n;s++){let o=i[t.shapes[s]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Po[a.type]().fromJSON(a)),new Fc(r,t.options)}},T0={generateTopUV:function(e,t,i,r,a){let s=t[i*3],n=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new Re(s,n),new Re(o,l),new Re(h,c)]},generateSideWallUV:function(e,t,i,r,a,s){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],v=t[s*3],f=t[s*3+1],m=t[s*3+2];return Math.abs(o-c)<Math.abs(n-h)?[new Re(n,1-l),new Re(h,1-u),new Re(d,1-g),new Re(v,1-m)]:[new Re(o,1-l),new Re(c,1-u),new Re(p,1-g),new Re(f,1-m)]}};function b0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Uo=class Bc extends Xt{constructor(t=new or([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],s=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(s,3)),this.setAttribute("uv",new ct(n,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;na.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let y=g[f];na.isClockWise(y)===!0&&(g[f]=y.reverse())}let v=na.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let y=g[f];p=p.concat(y)}for(let f=0,m=p.length;f<m;f++){let y=p[f];a.push(y.x,y.y,0),s.push(0,0,1),n.push(y.x,y.y)}for(let f=0,m=v.length;f<m;f++){let y=v[f],_=y[0]+u,T=y[1]+u,z=y[2]+u;r.push(_,T,z),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return w0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let n=i[t.shapes[a]];r.push(n)}return new Bc(r,t.curveSegments)}};function w0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Do=class zc extends Xt{constructor(t=1,i=32,r=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(n+o,Math.PI),h=0,c=[],u=new L,d=new L,p=[],g=[],v=[],f=[];for(let m=0;m<=r;m++){let y=[],_=m/r,T=0;m===0&&n===0?T=.5/i:m===r&&l===Math.PI&&(T=-.5/i);for(let z=0;z<=i;z++){let R=z/i;u.x=-t*Math.cos(a+R*s)*Math.sin(n+_*o),u.y=t*Math.cos(n+_*o),u.z=t*Math.sin(a+R*s)*Math.sin(n+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(R+T,1-_),y.push(h++)}c.push(y)}for(let m=0;m<r;m++)for(let y=0;y<i;y++){let _=c[m][y+1],T=c[m][y],z=c[m+1][y],R=c[m+1][y+1];(m!==0||n>0)&&p.push(_,T,R),(m!==r-1||l<Math.PI)&&p.push(T,z,R)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},A0=class kc extends Xt{constructor(t=1,i=.4,r=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:s},r=Math.floor(r),a=Math.floor(a);let n=[],o=[],l=[],h=[],c=new L,u=new L,d=new L;for(let p=0;p<=r;p++)for(let g=0;g<=a;g++){let v=g/a*s,f=p/r*Math.PI*2;u.x=(t+i*Math.cos(f))*Math.cos(v),u.y=(t+i*Math.cos(f))*Math.sin(v),u.z=i*Math.sin(f),o.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/a),h.push(p/r)}for(let p=1;p<=r;p++)for(let g=1;g<=a;g++){let v=(a+1)*p+g-1,f=(a+1)*(p-1)+g-1,m=(a+1)*(p-1)+g,y=(a+1)*p+g;n.push(v,f,y),n.push(f,m,y)}this.setIndex(n),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Kt=class extends wa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},R0=class extends Kt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ns(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function C0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Us=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},P0=class extends Us{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(n===void 0)switch(this.getSettings_().endingStart){case Ml:a=e,n=2*t-i;break;case Sl:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Ml:s=e,o=2*i-t;break;case Sl:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,f=-u*v+2*u*g-u*p,m=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*v+(1.5+d)*g+.5*p,_=d*v-d*g;for(let T=0;T!==n;++T)a[T]=f*s[h+T]+m*s[l+T]+y*s[o+T]+_*s[c+T];return a}},L0=class extends Us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==n;++u)a[u]=s[l+u]*c+s[o+u]*h;return a}},I0=class extends Us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Gi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new I0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new L0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new P0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case es:t=this.InterpolantFactoryMethodDiscrete;break;case zn:t=this.InterpolantFactoryMethodLinear;break;case kn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return es;case this.InterpolantFactoryMethodLinear:return zn;case this.InterpolantFactoryMethodSmooth:return kn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let n=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*n,s*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let n=0;n!==a;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,n,o,s),e=!1;break}s=o}if(r!==void 0&&C0(r))for(let n=0,o=r.length;n!==o;++n){let l=r[n];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===kn,a=e.length-1,s=1;for(let n=1;n<a;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(r)o=!0;else{let c=n*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[u+p]||g!==t[d+p]){o=!0;break}}}if(o){if(n!==s){e[s]=e[n];let c=n*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++s}}if(a>0){e[s]=e[a];for(let n=a*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[n+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Gi.prototype.TimeBufferType=Float32Array,Gi.prototype.ValueBufferType=Float32Array,Gi.prototype.DefaultInterpolation=zn;var Oa=class extends Gi{constructor(e,t,i){super(e,t,i)}};Oa.prototype.ValueTypeName="bool",Oa.prototype.ValueBufferType=Array,Oa.prototype.DefaultInterpolation=es,Oa.prototype.InterpolantFactoryMethodLinear=void 0,Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var N0=class extends Gi{};N0.prototype.ValueTypeName="color";var U0=class extends Gi{};U0.prototype.ValueTypeName="number";var D0=class extends Us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let h=l+n;l!==h;l+=4)Ti.slerpFlat(a,0,s,l-n,s,l,o);return a}},Jh=class extends Gi{InterpolantFactoryMethodLinear(e){return new D0(this.times,this.values,this.getValueSize(),e)}};Jh.prototype.ValueTypeName="quaternion",Jh.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Gi{constructor(e,t,i){super(e,t,i)}};Fa.prototype.ValueTypeName="string",Fa.prototype.ValueBufferType=Array,Fa.prototype.DefaultInterpolation=es,Fa.prototype.InterpolantFactoryMethodLinear=void 0,Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var O0=class extends Gi{};O0.prototype.ValueTypeName="vector";var F0=class{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){n++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,n),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,n),s===n&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},B0=new F0,z0=class{constructor(e){this.manager=e!==void 0?e:B0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};z0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kh=class extends ai{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Oo=new ht,Zh=new L,$h=new L,k0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),Oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},V0=class extends k0{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qh=class extends Kh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.target=new ai,this.shadow=new V0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ec=class extends Kh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Fo="\\[\\]\\.:\\/",H0=new RegExp("["+Fo+"]","g"),Bo="[^"+Fo+"]",G0="[^"+Fo.replace("\\.","")+"]",W0=/((?:WC+[\/:])*)/.source.replace("WC",Bo),X0=/(WCOD+)?/.source.replace("WCOD",G0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bo),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bo),Y0=new RegExp("^"+W0+X0+j0+q0+"$"),J0=["material","materials","bones","map"],K0=class{constructor(e,t,i){let r=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class pa{constructor(t,i,r){this.path=i,this.parsedPath=r||pa.parseTrackName(i),this.node=pa.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new pa.Composite(t,i,r):new pa(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(H0,"")}static parseTrackName(t){let i=Y0.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=r.nodeName.substring(a+1);J0.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let n=0;n<s.length;n++){let o=s[n];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,s=i.propertyIndex;if(t||(t=pa.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[a];if(n===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=K0,xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray],xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1),tc=new ht,Z0=class{constructor(e,t,i=0,r=1/0){this.ray=new Bl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Qn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tc),this}intersectObject(e,t=!0,i=[]){return zo(e,this,i,t),i.sort(ic),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)zo(e[r],this,i,t);return i.sort(ic),i}};function ic(e,t){return e.distance-t.distance}function zo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let s=e.children;for(let n=0,o=s.length;n<o;n++)zo(s[n],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ba=new L;function oi(e,t,i,r,a,s){let n=2*Math.PI*a/4,o=Math.max(s-2*a,0),l=Math.PI/4;Ba.copy(t),Ba[r]=0,Ba.normalize();let h=.5*n/(n+o),c=1-Ba.angleTo(e)/l;return Math.sign(Ba[i])===1?c*h:o/(n+o)+h+h*(1-c)}var rc=class extends ir{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;let s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;let n=new L,o=new L,l=new L(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new L,g=.5/r;for(let v=0,f=0;v<h.length;v+=3,f+=2)switch(n.fromArray(h,v),o.copy(n),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[v+0]=l.x*Math.sign(n.x)+o.x*a,h[v+1]=l.y*Math.sign(n.y)+o.y*a,h[v+2]=l.z*Math.sign(n.z)+o.z*a,c[v+0]=o.x,c[v+1]=o.y,c[v+2]=o.z,Math.floor(v/d)){case 0:p.set(1,0,0),u[f+0]=oi(p,o,"z","y",a,i),u[f+1]=1-oi(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[f+0]=1-oi(p,o,"z","y",a,i),u[f+1]=1-oi(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[f+0]=1-oi(p,o,"x","z",a,e),u[f+1]=oi(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[f+0]=1-oi(p,o,"x","z",a,e),u[f+1]=1-oi(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[f+0]=1-oi(p,o,"x","y",a,e),u[f+1]=1-oi(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[f+0]=oi(p,o,"x","y",a,e),u[f+1]=1-oi(p,o,"y","x",a,t);break}}};function $0(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),s={},n={},o=e[0].morphTargetsRelative,l=new Xt,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.morphAttributes[p])}if(t){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,u=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=e[d].attributes.position.count}l.setIndex(u)}for(let c in s){let u=ac(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in n){let u=n[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<n[c].length;++v)p.push(n[c][v][d]);let g=ac(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function ac(e){let t,i,r,a=-1,s=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*i}let n=new t(s),o=new At(n,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let u=l/i;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<i;g++){let v=c.getComponent(d,g);o.setComponent(d+u,g,v)}}else n.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var He="#101010",Xe="#f4f3ee",za='"DT Punk", Impact, sans-serif',ko='"Inter Tight", "Arial Black", Arial, sans-serif',Q0=(e,t,i)=>Math.max(t,Math.min(i,e)),sc=()=>{let e=document.createElement("canvas");return e.width=e.height=512,e},ev=e=>()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Tt(e,t,i){e.beginPath(),t.forEach(([r,a],s)=>s?e.lineTo(r,a):e.moveTo(r,a)),e.closePath(),i&&(e.fillStyle=i,e.fill())}function Ut(e,t,i,r,a,s,n){e.beginPath(),e.roundRect(t,i,r,a,s),n&&(e.fillStyle=n,e.fill())}function pt(e,t,i,r,a){e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function oa(e,t,i,r,a,s=128,n=128){let o=[];for(let l=0;l<t*2;l++){let h=l/(t*2)*Math.PI*2-Math.PI/2,c=l%2?r:i;o.push([s+Math.cos(h)*c,n+Math.sin(h)*c])}Tt(e,o,a)}function Dt(e,t,{x:i=128,y:r=128,width:a=190,size:s=60,color:n=He,font:o=ko,weight:l=900,gap:h=1,stroke:c=null,strokeWidth:u=0}={}){let d=s,p=()=>{e.font=`${l} ${d}px ${o}`};for(p();d>10&&Math.max(...t.map(v=>e.measureText(v).width))>a;)d-=1,p();e.textAlign="center",e.textBaseline="middle";let g=d*h;return t.forEach((v,f)=>{let m=r+(f-(t.length-1)/2)*g;c&&(e.lineJoin="round",e.lineWidth=u,e.strokeStyle=c,e.strokeText(v,i,m)),e.fillStyle=n,e.fillText(v,i,m)}),d}function nc(e,t,i,r,a,s,{font:n=ko,weight:o=900,spacing:l=1.16,bottom:h=!1,cx:c=128,cy:u=128}={}){e.save(),e.font=`${o} ${a}px ${n}`,e.fillStyle=s,e.textAlign="center",e.textBaseline="middle";let d=[...t],p=d.map(f=>e.measureText(f).width*l),g=p.reduce((f,m)=>f+m,0),v=r+(h?g/2/i:-g/2/i);d.forEach((f,m)=>{let y=p[m]/2/i;v+=h?-y:y,e.save(),e.translate(c+Math.cos(v)*i,u+Math.sin(v)*i),e.rotate(h?v-Math.PI/2:v+Math.PI/2),e.fillText(f,0,0),e.restore(),v+=h?-y:y}),e.restore()}function Vo(e,t,i,{angle:r=.55,step:a=7,weight:s=.62,from:n=-.15}={}){e.save(),t(),e.clip(),e.translate(128,128),e.rotate(r),e.fillStyle=i;for(let o=-200;o<200;o+=a){let l=Math.round(o/a)%2?a/2:0;for(let h=-200;h<200;h+=a){let c=Q0((h+l)/230+o/420+.5+n,0,1),u=c*a*s;u<.45||(e.beginPath(),e.arc(h+l,o,u,0,7),e.fill())}}e.restore()}function Ds(e,t,i,r,a){let s=[];for(let n=0;n<10;n++){let o=n*Math.PI/5-Math.PI/2,l=n%2?r*.42:r;s.push([t+Math.cos(o)*l,i+Math.sin(o)*l])}Tt(e,s,a)}function tv(e,t,i,r,a,s){e.save(),e.translate(t,i),e.scale(r,r),e.beginPath(),e.roundRect(-30,-36,60,50,22),e.fillStyle=a,e.fill(),e.fillRect(-17,8,34,22),pt(e,-13,-8,10,s),pt(e,13,-8,10,s),Tt(e,[[0,2],[-5,12],[5,12]],s),e.fillStyle=s;for(let n=-1;n<2;n++)e.fillRect(n*9-1.2,18,2.4,12);e.restore()}function iv(e,t,i,r,a,s,n){e.fillStyle=s;for(let o=0;o<r;){let l=1+n()*3;e.fillRect(t+o,i,l,a),o+=l+1+n()*3}}var oc=(e,t,i,r,a,s,n,o=14)=>{e.save(),e.beginPath(),e.rect(t,i,r,a),e.clip(),e.fillStyle=s,e.fillRect(t,i,r,a),e.fillStyle=n;for(let l=-a;l<r+a;l+=o*2)Tt(e,[[t+l,i+a],[t+l+o,i+a],[t+l+o+a,i],[t+l+a,i]],n);e.restore()};function lr(e){let t=/rgb\((\d+),(\d+),(\d+)\)/.exec(e);return t?+t[1]*.3+ +t[2]*.59+ +t[3]*.11>140?He:Xe:e===He?Xe:He}var rv={ask(e,t){Ut(e,26,40,204,140,34,t),Tt(e,[[70,170],[58,226],[124,172]],t),Dt(e,["ASK","DEN"],{y:110,size:62,color:lr(t),font:za,weight:400})},bandaid(e,t){e.save(),e.translate(128,112),e.rotate(-.5),e.translate(-128,-128),Ut(e,18,84,220,88,44,t),Ut(e,88,84,80,88,4,Xe);for(let[i,r]of[[104,106],[128,106],[152,106],[104,150],[128,150],[152,150],[116,128],[140,128]])pt(e,i,r,5,He);e.restore(),Dt(e,["OUCH"],{y:222,size:44,font:za,weight:400,color:Xe})},camera(e,t){Ut(e,28,76,200,130,16,He),Ut(e,86,52,70,34,8,He),pt(e,128,142,48,Xe),pt(e,128,142,34,He),pt(e,116,130,9,Xe),pt(e,200,98,9,t)},file(e,t){Tt(e,[[60,26],[160,26],[200,66],[200,230],[60,230]],Xe),Tt(e,[[160,26],[200,66],[160,66]],"#9c9c98"),Dt(e,["FINAL","FINAL","v7"],{y:148,width:124,size:40,color:t===Xe?He:t,gap:1.1})},cursor(e,t){oa(e,12,112,88,t),e.save(),e.translate(92,58),e.scale(2.1,2.1),Tt(e,[[0,0],[0,54],[14,42],[24,62],[34,57],[24,38],[42,38]],He),e.lineWidth=2.4,e.strokeStyle=Xe,e.stroke(),e.restore()},receipt(e,t){let i=[[52,22],[204,22]];for(let r=0;r<=8;r++)i.push([204-r*19,232-(r%2?14:0)]);Tt(e,i,Xe),e.fillStyle="#7d7d79";for(let r=0;r<4;r++)e.fillRect(70,48+r*22,r%2?76:116,8);Dt(e,["$$$"],{y:176,size:62,color:t===Xe?He:t})},bonjour(e,t){e.beginPath(),e.ellipse(128,118,112,86,0,0,7),e.fillStyle=Xe,e.fill(),Tt(e,[[176,186],[214,236],[136,200]],Xe),Dt(e,["BONJOUR!"],{y:118,width:186,size:56,color:t===Xe?He:t,font:za,weight:400})},root(e){Ut(e,24,44,208,168,8,He),e.lineWidth=12,e.lineCap="round",e.lineJoin="round",e.strokeStyle=Xe,e.beginPath(),e.moveTo(52,132),e.lineTo(76,118),e.lineTo(104,182),e.lineTo(130,76),e.lineTo(204,76),e.stroke(),Dt(e,["x"],{y:130,width:60,size:60,color:Xe,font:za,weight:400})},sun(e,t){oa(e,14,118,84,t),pt(e,128,128,70,Xe),Ut(e,66,100,54,36,12,He),Ut(e,136,100,54,36,12,He),e.fillRect(114,108,28,6),e.lineWidth=7,e.strokeStyle=He,e.lineCap="round",e.beginPath(),e.arc(128,150,24,.25,Math.PI-.25),e.stroke()},wrench(e,t){oa(e,10,114,92,t),e.save(),e.translate(128,128),e.rotate(.78),Ut(e,-16,-40,32,130,12,He),pt(e,0,-56,38,He),e.fillStyle=t,e.fillRect(-13,-100,26,46),e.restore()},eraser(e,t){e.save(),e.translate(128,128),e.rotate(-.42),Ut(e,-92,-48,184,96,12,Xe),e.fillStyle=t===Xe?He:t,e.fillRect(-24,-48,116,96),e.restore(),Dt(e,["CTRL+Z"],{width:150,size:36,color:He})},pencil(e,t){e.save(),e.translate(128,128),e.rotate(-.78),e.fillStyle=t,e.fillRect(-84,-22,136,44),e.fillStyle=He,e.fillRect(-112,-22,28,44),Tt(e,[[52,-22],[100,0],[52,22]],Xe),Tt(e,[[84,-7],[100,0],[84,7]],He),e.restore()},car(e,t){Ut(e,22,118,212,64,22,t),Tt(e,[[66,122],[96,72],[168,72],[198,122]],t),Tt(e,[[86,118],[104,86],[128,86],[128,118]],He),Tt(e,[[138,118],[138,86],[162,86],[180,118]],He),pt(e,78,184,24,He),pt(e,180,184,24,He),pt(e,78,184,9,Xe),pt(e,180,184,9,Xe)},house(e,t){Tt(e,[[128,30],[234,124],[22,124]],t),e.fillStyle=Xe,e.fillRect(52,122,152,100),e.fillStyle=He,e.fillRect(112,156,38,66),e.fillRect(66,142,32,32),e.fillRect(164,142,28,32)},nodes(e,t){Ut(e,26,26,204,204,26,He),e.lineWidth=7,e.strokeStyle=Xe,e.beginPath(),e.moveTo(74,80),e.bezierCurveTo(140,70,110,180,182,176),e.moveTo(74,80),e.bezierCurveTo(130,100,150,70,184,86),e.moveTo(72,180),e.bezierCurveTo(120,180,130,90,184,86),e.stroke();for(let[i,r]of[[74,80],[72,180],[184,86],[182,176]])pt(e,i,r,18,t)},fork(e,t){pt(e,128,128,112,Xe),e.beginPath(),e.arc(128,128,76,0,7),e.lineWidth=8,e.strokeStyle=t===Xe?"#b5b5b1":t,e.stroke(),e.fillStyle=He,e.fillRect(84,66,8,44),e.fillRect(98,66,8,44),e.fillRect(112,66,8,44),Ut(e,84,106,36,22,10,He),e.fillRect(96,124,12,70),e.beginPath(),e.ellipse(166,96,15,34,0,0,7),e.fill(),e.fillRect(160,120,12,74)},scissors(e,t){oa(e,18,118,98,t),e.save(),e.translate(128,128),e.rotate(.2),e.strokeStyle=He,e.lineWidth=15,e.lineCap="round",e.beginPath(),e.moveTo(-34,50),e.lineTo(58,-72),e.moveTo(34,50),e.lineTo(-58,-72),e.stroke(),e.lineWidth=12,e.beginPath(),e.arc(-44,68,25,0,7),e.moveTo(69,68),e.arc(44,68,25,0,7),e.stroke(),e.restore()},wave(e,t){Ut(e,22,62,212,132,66,He),[28,58,92,46,76,34,54,22].forEach((i,r)=>Ut(e,52+r*21.5,128-i/2,11,i,5.5,r%3===2?t:Xe))},bot(e,t){Ut(e,40,62,176,152,28,Xe),e.fillStyle=He,e.fillRect(122,28,12,38),pt(e,128,26,12,t===Xe?He:t),pt(e,94,124,18,He),pt(e,162,124,18,He),e.fillStyle=He,e.fillRect(88,172,80,12)}};function av(e,t,i,r,a){let s=r===Xe?"#cfcfca":r;pt(e,128,128,122,He),pt(e,128,128,86,s),Vo(e,()=>{e.beginPath(),e.arc(128,128,86,0,7)},He,{step:6.5,weight:.5,angle:.7,from:-.22}),e.lineWidth=2,e.strokeStyle=Xe,e.beginPath(),e.arc(128,128,117,0,7),e.stroke(),e.lineWidth=3,e.beginPath(),e.arc(128,128,89,0,7),e.stroke();let[n,o]=i;nc(e,n,103,-Math.PI/2,19,Xe),nc(e,o,103,Math.PI/2,15,Xe,{bottom:!0}),Ds(e,22,128,8,Xe),Ds(e,234,128,8,Xe),e.save(),e.translate(128,128),e.rotate((a()-.5)*.24),e.scale(.56,.56),e.translate(-128,-128),rv[t](e,r===Xe?"#8a8a86":r),e.restore()}var la=(e,t)=>{let i=[];for(let r of e.split(" ")){let a=i[i.length-1];a&&`${a} ${r}`.length<=t?i[i.length-1]=`${a} ${r}`:i.push(r)}return i},lc=[(e,t,i,r)=>{let a=i===Xe?Xe:i,s=lr(a);oa(e,18,122,98,He,133,134),oa(e,18,118,94,a),Vo(e,()=>{let n=[];for(let o=0;o<36;o++){let l=o/36*Math.PI*2-Math.PI/2,h=o%2?94:118;n.push([128+Math.cos(l)*h,128+Math.sin(l)*h])}Tt(e,n)},s===He?"rgba(0,0,0,.72)":"rgba(255,255,255,.5)",{step:7,weight:.52}),e.save(),e.translate(128,128),e.rotate(-.1+r()*.1),e.translate(-128,-128),Dt(e,la(t,8),{width:164,size:66,y:126,color:s,gap:1.02,stroke:s===He?Xe:He,strokeWidth:6}),e.restore(),Dt(e,["NOT RATED"],{y:200,width:90,size:13,color:s})},(e,t,i,r)=>{let a=i===Xe?He:i;e.save(),e.translate(128,128),e.rotate(-.12),e.translate(-128,-128),e.beginPath(),e.roundRect(8,58,240,140,10),e.fillStyle=Xe,e.fill();for(let[s,n]of[[8,128],[248,128]])e.save(),e.globalCompositeOperation="destination-out",pt(e,s,n,15,"#000"),e.restore();e.fillStyle=a,e.fillRect(16,66,224,25),Dt(e,["ADMIT ONE"],{y:79,width:200,size:18,color:lr(a)===He?He:Xe,weight:800});for(let s=95;s<190;s+=8)e.fillStyle="#8c8c88",e.fillRect(190,s,2.4,4.4);Dt(e,la(t,11),{x:102,y:136,width:158,size:42,color:He,gap:1.05}),iv(e,198,100,40,62,He,r),Dt(e,["N\xBA 00"+(10+Math.floor(r()*89))],{x:218,y:176,width:40,size:12,color:He}),e.restore()},(e,t,i)=>{let r=i===Xe?"#cfcfca":i;e.save(),e.translate(128,128),e.rotate(.08),e.translate(-128,-128),Ut(e,6,44,244,168,12,He),oc(e,14,52,228,26,r,He),oc(e,14,178,228,26,r,He),Tt(e,[[46,96],[62,124],[30,124]],r),Dt(e,["!"],{x:46,y:113,size:22,color:lr(r)}),Dt(e,["WARNING"],{x:146,y:98,width:150,size:30,color:r,weight:900}),Dt(e,la(t,13),{x:128,y:146,width:214,size:38,color:Xe,gap:1.05}),e.restore()},(e,t,i,r)=>{let a=la(t,9),s=i===Xe?"#cfcfca":i,n=[[ko,900],[za,400],['Georgia, "Times New Roman", serif',700]],o=a.length,l=Math.min(64,190/o),h=0;a.forEach((c,u)=>{let d=c.split(" "),p=128+(u-(o-1)/2)*l,g=d.map((y,_)=>{let[T,z]=n[(h+_)%n.length];return e.font=`${z} ${l*.62}px ${T}`,e.measureText(y).width+18}),v=g.reduce((y,_)=>y+_,0),f=Math.min(1,226/v),m=128-v*f/2;d.forEach((y,_)=>{let[T,z]=n[h%n.length],R=[He,Xe,s,Xe][h%4];h++,e.save();let P=m+g[_]*f/2;e.translate(P,p+(r()-.5)*6),e.rotate((r()-.5)*.16);let D=g[_]*f/2,M=l*.47,E=[];for(let C=0;C<=10;C++)E.push([-D+C/10*D*2,-M+(r()-.5)*3.4]);for(let C=0;C<=10;C++)E.push([D-C/10*D*2,M+(r()-.5)*3.4]);Tt(e,E,R),Dt(e,[y],{x:0,y:1,width:g[_]*f-10,size:l*.62,color:lr(R),font:T,weight:z}),e.restore(),m+=g[_]*f})})},(e,t,i,r)=>{let a=i===Xe?"#cfcfca":i;pt(e,128,118,104,He),pt(e,128,118,96,a),Vo(e,()=>{e.beginPath(),e.arc(128,118,96,0,7)},lr(a)===He?"rgba(0,0,0,.6)":"rgba(255,255,255,.45)",{step:6,weight:.55,angle:-.5}),tv(e,128,70,1.05,Xe,He),Ds(e,52,70,13,Xe),Ds(e,204,70,13,Xe);let s=la(t,12),n=s.length>1?74:54;Tt(e,[[6,150-n/2+12],[38,150-n/2+12],[38,150+n/2+12],[6,150+n/2+12],[20,162]],He),Tt(e,[[250,150-n/2+12],[218,150-n/2+12],[218,150+n/2+12],[250,150+n/2+12],[236,162]],He),Ut(e,26,150-n/2,204,n,3,Xe),e.strokeStyle=He,e.lineWidth=3,e.strokeRect(31,150-n/2+5,194,n-10),Dt(e,s,{y:150,width:180,size:44,color:He,gap:1.04})}],hc=["$2.99","1 NIGHT","$0.99","NEW","REWIND","50\xA2","STAFF PICK","2 FOR 1"];function sv(e,t,i){let r=i===Xe?Xe:i;pt(e,128,128,116,r),e.lineWidth=5,e.strokeStyle=lr(r),e.setLineDash([3,9]),e.lineCap="round",e.beginPath(),e.arc(128,128,100,0,7),e.stroke(),e.setLineDash([]),Dt(e,la(t,6),{width:170,size:84,color:lr(r),gap:.98})}var nv={portfolio:["ask","MAKE THE LOGO BIGGER",["APPROVED BY NOBODY","NO REVISIONS"]],basepoint:["bandaid","TAKE YOUR VITAMINS",["DOCTOR NOT INCLUDED","SHAKE WELL"]],"street-observations":["camera","SAY CHEESE",["NO FLASH NO MERCY","SHOT ON THE RUN"]],template:["file","BE KIND REWIND",["FINAL FINAL FINAL","DO NOT OVERWRITE"]],prime:["cursor","ONE MORE CLICK",["ADD TO CART OR ELSE","NO REFUNDS"]],sabsus:["receipt","CA-CHING!",["CASH ONLY FOREVER","KEEP THE CHANGE"]],janna:["bonjour","MERCI BEAUCOUP",["LE\xC7ON NUM\xC9RO UN","R\xC9P\xC9TEZ"]],"root-framer":["root","SHOW YOUR WORK",["MATH IS PUNK","NO CALCULATORS"]],sunfreaks:["sun","WEAR SUNSCREEN",["SPF 50 FOREVER","STAY WEIRD"]],airtexno:["wrench","IT WORKS ON MY MACHINE",["HAVE YOU TRIED RESTARTING","SERVICE DUE"]],"concept-undo-studio":["eraser","NEW RELEASE",["NOTHING IS PERMANENT","CTRL+Z"]],"concept-root-square-explorations":["pencil","STILL A SKETCH",["DO NOT ERASE","DRAFT 41"]],"concept-al-futtaim-themes":["car","CAN IT POP MORE?",["CHECK ENGINE LIGHT","NO PARKING"]],"sabsus-platform":["fork","ORDER UP!",["THE KITCHEN IS OPEN","TABLE 12"]],mortgage:["house","SWEET LOAN",["INTEREST NOT INCLUDED","SIGN HERE"]],node:["nodes","IF THIS THEN WHY",["ALL WIRED UP","DO NOT UNPLUG"]],restaurant:["fork","TABLE FOR TWO",["NO SUBSTITUTIONS","TIP YOUR WAITER"]],wallet:["scissors","BAD HAIR DAY",["JUST THE ENDS PLEASE","WALK-INS OK"]],wave:["wave","TURN IT UP",["LOUD IS A FEATURE","NO SKIPPING"]],"experiment-chat-portfolio":["bot","NOT A BOT",["ASK ME ANYTHING","BEEP BOOP"]]};function ov(e,t){let i=sc(),r=i.getContext("2d"),a=14;for(let n=0;n<32;n++){let o=n/32*Math.PI*2;r.drawImage(e,Math.cos(o)*a,Math.sin(o)*a)}r.globalCompositeOperation="source-in",r.fillStyle=Xe,r.fillRect(0,0,512,512),r.globalCompositeOperation="source-over",r.drawImage(e,0,0),r.globalCompositeOperation="source-atop";for(let n=0;n<1500;n++){r.globalAlpha=.08+t()*.3,r.fillStyle=t()<.5?"#000":"#fff";let o=.6+t()*t()*3;r.fillRect(t()*512,t()*512,o,o)}r.strokeStyle="#fff";for(let n=0;n<16;n++){r.globalAlpha=.12+t()*.3,r.lineWidth=.6+t()*.9;let o=t()*512,l=t()*512,h=-.7+t()*.4,c=30+t()*140;r.beginPath(),r.moveTo(o,l),r.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),r.stroke()}for(let n=0;n<90;n++){let o=t()*7,l=512*(.36+t()*.14);r.globalAlpha=.2+t()*.5,r.fillStyle=Xe,r.fillRect(512/2+Math.cos(o)*l,512/2+Math.sin(o)*l,1+t()*5,1+t()*3)}r.globalAlpha=.13;let s=r.createLinearGradient(512*.1,0,512*.72,512*.9);return s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.46,"rgba(255,255,255,1)"),s.addColorStop(.6,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,512,512),r.globalAlpha=1,r.globalCompositeOperation="source-over",i}function Ho(e,t){let i=sc(),r=ev(t),a=i.getContext("2d");return a.scale(2,2),e(a,r),ov(i,r)}function cc(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=null;for(let o=0;o<r.length;o+=4){let l=r[o],h=r[o+1],c=r[o+2],u=Math.max(l,h,c),d=u-Math.min(l,h,c);d>a&&u>50&&(a=d,s=[l,h,c])}if(a<60)return null;let n=238/Math.max(...s);return`rgb(${s.map(o=>Math.round(o*n)).join(",")})`}function uc(e,t=0,i=null){let r=nv[e];if(!r)return[];let[a,s,n]=r,o=i||Xe,l=t*131+7;return[Ho((h,c)=>lc[t%lc.length](h,s,o,c),l),Ho((h,c)=>av(h,a,n,o,c),l+1),Ho(h=>sv(h,hc[t%hc.length],o),l+2)]}var vi=16,ha=48,Os=[3,11,9,8,7],Go=Os.reduce((e,t)=>e+t,0),ka=22,Wo=2,ca=5,wr=Go*vi,lv=ka*ha,Va=wr*ca+lv,zt=()=>new L,_i=e=>e*e*(3-2*e),hv=e=>Math.max(0,Math.min(1,e));function cv(e,t){let i=Va*Wo,r=new Float32Array(i*3),a=new Float32Array(i*3),s=new Float32Array(i*4),n=new Xt,o=new At(r,3).setUsage(Vn),l=new At(a,3).setUsage(Vn),h=new At(s,4).setUsage(Vn);n.setAttribute("position",o),n.setAttribute("normal",l),n.setAttribute("aG",h);let c=[],u=(ie,I,X)=>{for(let k=0;k<I-1;k++)for(let le=0;le<X;le++){let me=ie+k*X+le,be=ie+k*X+(le+1)%X,J=me+X,de=be+X;c.push(me,be,J,be,de,J)}};for(let ie=0;ie<Wo;ie++){let I=ie*Va;for(let X=0;X<ca;X++)u(I+X*wr,Go,vi);u(I+ca*wr,ka,ha)}n.setIndex(c);let d={value:0},p=new Kt({color:1184278,roughness:.5,metalness:0,envMap:e,envMapIntensity:1.65}),g=t(.1);p.onBeforeCompile=(ie,I)=>{g(ie,I),ie.uniforms.uRubber=d,ie.vertexShader=ie.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aG;varying vec4 vG;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vG = aG;`).replace("vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;","vBoneY = (modelMatrix * vec4(transformed, 1.)).y;"),ie.fragmentShader=ie.fragmentShader.replace("#include <common>",`#include <common>
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
 }`)};let v=new Et(n,p);v.frustumCulled=!1,v.visible=!1;let f=zt(),m=zt(),y=zt(),_=zt(),T=zt(),z=zt(),R=zt(),P=zt(),D=zt(),M=zt(),E=zt(),C=(ie,I,X,k,le,me)=>{r[ie*3]=I.x,r[ie*3+1]=I.y,r[ie*3+2]=I.z,s[ie*4]=X,s[ie*4+1]=k,s[ie*4+2]=le,s[ie*4+3]=me},U=(ie,I,X,k,le,me)=>{let be=me*me,J=be*me;return ie.x=.5*(2*X.x+(k.x-I.x)*me+(2*I.x-5*X.x+4*k.x-le.x)*be+(3*X.x-I.x-3*k.x+le.x)*J),ie.y=.5*(2*X.y+(k.y-I.y)*me+(2*I.y-5*X.y+4*k.y-le.y)*be+(3*X.y-I.y-3*k.y+le.y)*J),ie.z=.5*(2*X.z+(k.z-I.z)*me+(2*I.z-5*X.z+4*k.z-le.z)*be+(3*X.z-I.z-3*k.z+le.z)*J),ie},O=Array.from({length:8},zt),H=[1.3,1.17,1.05,.95];function ae(ie,I,X,k,le,me,be){let J=ie*Va+I*wr;O[1].copy(X[0]),O[2].copy(X[1]),O[3].copy(X[2]),O[4].copy(X[3]),O[5].copy(X[4]),O[0].copy(O[1]).multiplyScalar(2).sub(O[2]),R.copy(O[5]).sub(O[4]).normalize(),O[6].copy(O[5]).addScaledVector(R,k*1.05),O[7].copy(O[6]).addScaledVector(R,k);let de=0,w=0,ge=[0,0,0,0];T.copy(O[1]);let se=0;for(let W=1;W<=4;W++)se+=O[W].distanceTo(O[W+1]||O[W]),W<=4&&(ge[W-1]=se);let Se=0,oe=Os.length-1,Pe=!1,q=0;for(let W=0;W<Os.length;W++){let b=Os[W];for(let x=0;x<b;x++,w++){let A=x/b;U(_,O[W],O[W+1],O[W+2],O[Math.min(7,W+3)],A),U(R,O[W],O[W+1],O[W+2],O[Math.min(7,W+3)],A+.02),f.copy(R).sub(_).normalize(),de+=w?_.distanceTo(T):0,T.copy(_),m.copy(be).addScaledVector(f,-be.dot(f)).normalize(),y.copy(f).cross(m).normalize();let re;W===0?re=H[0]*(1.02+.1*A):W<oe?re=(H[W-1]+(H[W]-H[W-1])*_i(A))*(1-.075*Math.sin(Math.PI*A)):re=H[3]*Math.sqrt(Math.max(0,1-A*A)),Se=k*re*me;let ne=W===1?A:W>1?1:0,G=le&&W===1&&ne>le-.16&&ne<=le;if(le&&(W>1||W===1&&ne>le)){Pe||(Pe=!0,q=Se),U(_,O[1],O[2],O[3],O[4],le),R.copy(_),U(_,O[0],O[1],O[2],O[3],0),_.copy(R),Se=k*.94*me;for(let ve=0;ve<vi;ve++){let we=ve/vi*Math.PI*2;E.copy(_).addScaledVector(m,Math.cos(we)*Se*.92).addScaledVector(y,Math.sin(we)*Se),C(J+w*vi+ve,E,(ve/vi+.5)%1-.5,de,0,1)}continue}G&&(Se*=1+.1*_i(hv(1-Math.abs((ne-(le-.08))/.08))));let Oe=0;for(let ve=0;ve<3;ve++)Oe=Math.max(Oe,Math.exp(-(((de-ge[ve+1-1])/(.22*(ve?.85:1)))**2)));for(let ve=0;ve<vi;ve++){let we=ve/vi*Math.PI*2;E.copy(_).addScaledVector(m,Math.cos(we)*Se*.93).addScaledVector(y,Math.sin(we)*Se),C(J+w*vi+ve,E,(ve/vi+.5)%1-.5,de,Oe,1)}}}}let j=zt(),ce=zt(),te=zt(),_e=zt(),Te=zt(),ze=[0,0,0,0];function Ee(ie,I,X,k,le,me,be,J){let de=ie*Va+ca*wr;j.set(0,0,0),ce.set(0,0,0);for(let oe=0;oe<4;oe++)j.add(I[oe]),ce.add(X[oe]);j.multiplyScalar(.25),ce.multiplyScalar(.25),_e.copy(I[0]).sub(I[3]);let w=_e.length()/2+me*1.28;_e.normalize(),Te.copy(X[0]).sub(X[3]);let ge=Te.length()/2+.46;Te.normalize(),te.copy(k);let se=te.distanceTo(ce)+ce.distanceTo(j)+.32,Se=0;for(let oe=0;oe<ka;oe++){let Pe=oe/(ka-1),q,W,b;if(Pe<.3){let A=Pe/.3;_.copy(te).addScaledVector(le,.7*(1-A)).lerp(ce,_i(A)*.55),q=.98+(ge-.98)*_i(A)*.6,W=.72+(.56-.72)*_i(A)}else if(Pe<.5){let A=(Pe-.3)/.2;T.copy(te).lerp(ce,.55),_.copy(T).lerp(ce,_i(A)),q=.98+(ge-.98)*.6+(ge-(.98+(ge-.98)*.6))*_i(A),W=.56+(.5-.56)*_i(A)}else{let A=(Pe-.5)/.5;if(_.copy(ce).lerp(j,A),A>.9&&_.addScaledVector(R.copy(j).sub(ce).normalize(),(A-.9)*2.4),q=ge+(w-ge)*_i(A),W=.5+(.42-.5)*_i(A),A>.92){let re=(A-.92)/.08,ne=Math.sqrt(Math.max(0,1-re*re*.86));q*=.9+.1*ne,W*=ne}}oe&&(Se+=_.distanceTo(T.copy(M))),M.copy(_),Pe<.5?f.copy(ce).sub(te).normalize():f.copy(j).sub(ce).normalize(),D.copy(J).addScaledVector(f,-J.dot(f)).normalize(),y.copy(f).cross(D).normalize();let x=be;for(let A=0;A<4;A++)ze[A]=R.copy(I[A]).sub(j).dot(y);for(let A=0;A<ha;A++){let re=A/ha*Math.PI*2,ne=Math.cos(re),G=Math.sin(re),Oe=Math.sign(G)*Math.abs(G)**.62*q*x,ve=Math.sign(ne)*Math.abs(ne)**.82*W*x;if(ne>0&&Pe>.62){let we=0;for(let We=0;We<4;We++)we=Math.max(we,Math.exp(-(((Oe-ze[We])/.24)**2)));ve+=we*.16*_i((Pe-.62)/.3)*x}E.copy(_).addScaledVector(y,Oe).addScaledVector(D,ve),C(de+oe*ha+A,E,q?Math.max(-1,Math.min(1,Oe/(q*x||1))):0,Se,se,0)}}}function Y(){let ie=(I,X,k)=>{for(let le=0;le<X;le++)for(let me=0;me<k;me++){let be=I+le*k+me,J=I+le*k+(me+1)%k,de=I+le*k+(me+k-1)%k,w=I+Math.min(X-1,le+1)*k+me,ge=I+Math.max(0,le-1)*k+me,se=r[J*3]-r[de*3],Se=r[J*3+1]-r[de*3+1],oe=r[J*3+2]-r[de*3+2],Pe=r[w*3]-r[ge*3],q=r[w*3+1]-r[ge*3+1],W=r[w*3+2]-r[ge*3+2],b=Se*W-oe*q,x=oe*Pe-se*W,A=se*q-Se*Pe,re=Math.hypot(b,x,A);if(re<1e-7){b=Pe,x=q,A=W;let ne=Math.hypot(b,x,A)||1;b/=ne,x/=ne,A/=ne}else b/=re,x/=re,A/=re;a[be*3]=b,a[be*3+1]=x,a[be*3+2]=A}};for(let I=0;I<Wo;I++){let X=I*Va;for(let k=0;k<ca;k++)ie(X+k*wr,Go,vi);ie(X+ca*wr,ka,ha)}}return{mesh:v,finger:ae,palm:Ee,commit(ie){d.value=ie==="full"?1:0,Y(),o.needsUpdate=!0,l.needsUpdate=!0,h.needsUpdate=!0,v.visible=!0},hide(){v.visible=!1}}}var Ha=new L(0,0,1),uv=new L(1,0,0),kt=(e,t,i)=>Math.max(t,Math.min(i,e)),ft=(e,t,i)=>e+(t-e)*i,Fs=e=>e*e*(3-2*e);function Xo(e,t=0){let i=new ws;i.background=new Je(526346);let r=(n,o,l,h,c,u)=>{let d=new Et(new ni(n,o),new Hi({color:new Je(u,u,u),side:Mi}));d.position.set(l,h,c),d.lookAt(0,0,0),i.add(d)};r(10,2.4,0,7,4,9),r(1.6,8,-8,1,3,6),r(1,7,8,-1,4,3.4),r(8,1,0,-6,5,1.2),t&&r(14,10,0,1,10,t);let a=new yo(e),s=a.fromScene(i,.025).texture;return a.dispose(),s}function dc(e=256,t=3){let i=document.createElement("canvas");i.width=i.height=e;let r=i.getContext("2d"),a=r.createImageData(e,e);for(let n=0;n<a.data.length;n+=4){let o=120+Math.random()*90;a.data[n]=a.data[n+1]=a.data[n+2]=o,a.data[n+3]=255}r.putImageData(a,0,0);let s=new sr(i);return s.wrapS=s.wrapT=qa,s.repeat.set(t,t),s}var Wi=(e,t,i,r,a=0,s=0,n=0)=>(a&&e.rotateX(a),s&&e.rotateY(s),n&&e.rotateZ(n),e.translate(t,i,r),e),dv=e=>e.index?e.toNonIndexed():e,jo=e=>{let t=e.map(dv);return t.forEach(i=>{Object.keys(i.attributes).forEach(r=>{r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r)})}),$0(t)};function Bs(e,t,i,r,a,s,n,o,l){return e.moveTo(t+s,i),e.lineTo(r-n,i),e.quadraticCurveTo(r,i,r,i+n),e.lineTo(r,a-o),e.quadraticCurveTo(r,a,r-o,a),e.lineTo(t+l,a),e.quadraticCurveTo(t,a,t,a-l),e.lineTo(t,i+s),e.quadraticCurveTo(t,i,t+s,i),e}function qo(e,t,i,r=0,a=0){return Bs(new or,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}function pv(e,t,i,r=0,a=0){return Bs(new nr,r-e/2,a-t/2,r+e/2,a+t/2,i,i,i,i)}var Ri=18.7,Ci=10.3,zs=2.5,fv={x0:4.62,x1:8.95,y0:-2.55,y1:2.25,outer:1.85,inner:.28},xi={w:7.9,h:4.9,y:-.15},ks={x:5.25,y:-.15},hr=(e,t,i=0)=>{let{x0:r,x1:a,y0:s,y1:n,outer:o,inner:l}=fv,h=r-i,c=a+i,u=s-i,d=n+i,p=o+i*.6,g=l+i*.6,v=new e;return t<0?Bs(v,-c,u,-h,d,p,g,g,p):Bs(v,h,u,c,d,g,p,p,g)};function mv(){let e=1024/Ri,t=564/Ci,i=1024/2048,r=y=>(y+Ri/2)*e,a=y=>(Ci/2-y)*t,s=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=564,y},n=s(),o=s(),l=s(),h=n.getContext("2d"),c=o.getContext("2d"),u=l.getContext("2d"),d=y=>{let _=document.createElement("canvas");return _.width=_.height=6,y(_.getContext("2d")),_};h.fillStyle=h.createPattern(d(y=>{y.fillStyle="#050505",y.fillRect(0,0,6,6),y.fillStyle="#121212",y.fillRect(.5,.5,5,5),y.fillStyle="#1f1f1f",y.fillRect(.5,.5,5,1),y.fillRect(.5,.5,1,5)}),"repeat"),h.fillRect(0,0,1024,564),c.fillStyle=c.createPattern(d(y=>{y.fillStyle="#242424",y.fillRect(0,0,6,6),y.fillStyle="#c8c8c8",y.fillRect(1,1,4,4)}),"repeat"),c.fillRect(0,0,1024,564),u.fillStyle="#a8a8a8",u.fillRect(0,0,1024,564);let p=y=>{y.beginPath(),y.roundRect(r(-9.15),a(2.6),18.3*e,5.5*t,2.2*e),y.fill()};h.fillStyle="#0b0b0b",p(h),c.fillStyle="#808080",p(c),u.fillStyle="#5c5c5c",p(u);let g=3.5;h.fillStyle="#0e0e0e",h.fillRect(0,0,1024,a(g)),c.fillStyle="#909090",c.fillRect(0,0,1024,a(g)),u.fillStyle="#707070",u.fillRect(0,0,1024,a(g)),h.fillStyle="#050505",h.fillRect(0,a(g),1024,7*i),h.fillStyle="#242424",h.fillRect(0,a(g)-3*i,1024,3*i),c.fillStyle="#000",c.fillRect(0,a(g),1024,8*i);let v='"Inter Tight", Arial, sans-serif',f=(y,_)=>{y.fillStyle=_,y.font=`500 ${37*i}px ${v}`,y.textBaseline="middle","letterSpacing"in y&&(y.letterSpacing=`${4*i}px`),y.textAlign="right",y.fillText("INSERT THIS SIDE INTO RECORDER",r(-.75),a(4.35)),y.textAlign="left",y.fillText("DO NOT TOUCH THE TAPE INSIDE",r(.75),a(4.35)),y.beginPath(),y.moveTo(r(0),a(4.72)),y.lineTo(r(.34),a(4.05)),y.lineTo(r(-.34),a(4.05)),y.closePath(),y.fill()};f(h,"#3a3a3a"),f(c,"#f0f0f0");for(let y=0;y<240;y++){h.globalAlpha=.02+Math.random()*.05,h.strokeStyle="#fff",h.lineWidth=(.6+Math.random()*.9)*i*1.4;let _=Math.random()*1024,T=Math.random()*564,z=Math.random()*6.28,R=(10+Math.random()*120)*i;h.beginPath(),h.moveTo(_,T),h.lineTo(_+Math.cos(z)*R,T+Math.sin(z)*R),h.stroke()}for(let y=0;y<420;y++)h.globalAlpha=.05+Math.random()*.12,h.fillStyle="#b8b8b8",h.fillRect(Math.random()*1024,Math.random()*564,.6+Math.random(),.6+Math.random());h.globalAlpha=1;let m=(y,_)=>{let T=new sr(y);return _&&(T.colorSpace=St),T.anisotropy=8,T};return{map:m(n,!0),bump:m(o),rough:m(l)}}function gv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#17120e",t.fillRect(0,0,256,256);for(let r=4;r<128;r+=1.5)t.strokeStyle=`rgba(255,255,255,${.012+Math.random()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(128,128,r,0,6.2832),t.stroke();let i=new sr(e);return i.colorSpace=St,i}function Yo(e){let t=zs/2,i=mv(),r=new Kt({map:i.map,bumpMap:i.bump,bumpScale:1.2,roughnessMap:i.rough,roughness:1,metalness:0,envMap:e,envMapIntensity:.95}),a=new Kt({color:921102,roughness:.38,envMap:e,envMapIntensity:1,roughnessMap:dc(256,5)}),s=new Kt({color:789516,roughness:.24,envMap:e,envMapIntensity:1.25}),n=new Kt({color:131586,roughness:.8,envMap:e,envMapIntensity:.12}),o=new Kt({color:14868697,roughness:.46,envMap:e,envMapIntensity:.8}),l=new Kt({map:gv(),roughness:.3,metalness:.62,envMap:e,envMapIntensity:1}),h=new R0({color:9079434,roughness:.05,metalness:0,transparent:!0,opacity:.045,envMap:e,envMapIntensity:2.2,depthWrite:!1}),c=.3,u=Wi(new rc(Ri,Ci,zs-c,3,.14),0,0,-c/2),d=qo(Ri-.06,Ci-.06,.2);d.holes.push(hr(nr,-1),hr(nr,1));let p=new No(d,{depth:c-.03,bevelEnabled:!0,bevelSize:.025,bevelThickness:.03,bevelSegments:2,curveSegments:12}),g=p.attributes.position,v=p.attributes.uv;for(let C=0;C<g.count;C++)v.setXY(C,(g.getX(C)+Ri/2)/Ri,(g.getY(C)+Ci/2)/Ci);p.translate(0,0,t-c);let f=(C,U)=>{let O=C;return O.holes.push(U),new No(O,{depth:.03,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:12})},m=[Wi(f(hr(or,-1,.16),hr(nr,-1)),0,0,t),Wi(f(hr(or,1,.16),hr(nr,1)),0,0,t),Wi(f(qo(xi.w+.36,xi.h+.36,.16,0,xi.y),pv(xi.w+.06,xi.h+.06,.08,0,xi.y)),0,0,t),Wi(new ir(Ri-.5,.09,.06),0,3.5,t+.02)],y=new or;y.absarc(0,0,.98,0,Math.PI*2,!1);let _=new nr;_.absarc(0,0,.6,0,Math.PI*2,!0),y.holes.push(_);let T=[new No(y,{depth:.1,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:28})];for(let C=0;C<6;C++){let U=C/6*Math.PI*2;T.push(Wi(new ir(.2,.44,.1),Math.cos(U)*.46,Math.sin(U)*.46,.05,0,0,U+Math.PI/2))}T.push(Wi(new Cs(.06,.06,.08,12),0,0,.04,Math.PI/2));let z=new s0(1,56),R=jo([new Uo(hr(or,-1),12),new Uo(hr(or,1),12)]);R.translate(0,0,t+.012);let P=qo(xi.w,xi.h,.06,0,0),D=new Uo(P,6),M=D.attributes.position,E=D.attributes.uv;for(let C=0;C<M.count;C++)E.setXY(C,M.getX(C)/xi.w+.5,M.getY(C)/xi.h+.5);return{FRONT:t,WALL:c,env:e,body:u,plastic:a,slab:p,front:r,lips:jo(m),gloss:s,floor:Wi(new ni(Ri-.4,Ci-.4),0,0,t-c+.004),cavity:n,hub:jo(T),white:o,pack:z,packMat:l,glassGeo:R,glass:h,labelGeo:D,spineGeo:Wi(new ni(16.6,1.72),0,-Ci/2-.006,-.08,Math.PI/2),stickerGeo:new ni(1,1),hit:new ir(Ri,Ci,zs)}}var vv=[{x:-7.1,y:3.46,size:3.7,turn:-.13,over:!0},{x:7.1,y:3.46,size:3.7,turn:.11,over:!0},{x:3.3,y:-3.84,size:2.42,turn:-.2}],pc=e=>{let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);let r=new sr(t);return r.colorSpace=St,r},ua=pc("#ffffff"),fc=pc("rgba(0,0,0,0)");function Jo(e,t=0){let i=new Er,r=(h,c)=>{let u=new Et(h,c);return i.add(u),u};r(e.body,e.plastic),r(e.floor,e.cavity),r(e.slab,e.front),r(e.lips,e.gloss);let a=[-ks.x,ks.x].map(h=>{let c=r(e.pack,e.packMat);c.position.set(h,ks.y,e.FRONT-e.WALL+.012);let u=r(e.hub,e.white);return u.position.set(h,ks.y,e.FRONT-e.WALL+.02),{pack:c,hub:u}});r(e.glassGeo,e.glass);let s=()=>new Kt({map:ua,emissiveMap:ua,color:14079180,emissive:16777215,emissiveIntensity:.1,roughness:.84,envMap:e.env,envMapIntensity:.3,alphaTest:.5}),n=r(e.labelGeo,s());n.position.set(0,xi.y,e.FRONT+.008),n.rotation.z=t;let o=r(e.spineGeo,s()),l=vv.map((h,c)=>{let u=r(e.stickerGeo,new Kt({map:fc,emissiveMap:fc,color:16777215,emissive:16777215,emissiveIntensity:.42,roughness:.36,envMap:e.env,envMapIntensity:.75,alphaTest:.5}));return u.position.set(h.x+t*3,h.y-t*2,e.FRONT+(h.over?.085:.03)+c*.004),u.scale.setScalar(h.size),u.rotation.z=h.turn+t*9,u});return{group:i,reels:a,label:n,spine:o,stickers:l}}function mc(e){let t=document.createElement("canvas");t.width=t.height=12;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,12,12);let r=i.getImageData(0,0,12,12).data,a=0,s=[16,16,16];for(let l=0;l<r.length;l+=4){let h=r[l],c=r[l+1],u=r[l+2],d=Math.max(h,c,u),p=Math.min(h,c,u),g=d-p;g>a&&d>50&&(a=g,s=[h,c,u])}if(a<60)return"#141414";let n=Math.max(...s),o=135/n;return`rgb(${s.map(l=>Math.round(l*o)).join(",")})`}function gc(e,t,i){for(let r=0;r<700;r++)e.globalAlpha=.03+Math.random()*.07,e.fillStyle=Math.random()<.5?"#6d6a62":"#ffffff",e.fillRect(Math.random()*t,Math.random()*i,1+Math.random()*3,1+Math.random()*2);e.globalAlpha=1}function vc(e,t,i,r,a){let s=i;for(e.font=`400 ${s}px ${a}`;e.measureText(t).width>r&&s>14;)s-=2,e.font=`400 ${s}px ${a}`;return s}var Ga=(e,t=8)=>{let i=new sr(e);return i.colorSpace=St,i.anisotropy=t,i};function Vs(e,t){if(e.width<=t)return e;let i=document.createElement("canvas");i.width=t,i.height=Math.max(1,Math.round(e.height*t/e.width));let r=i.getContext("2d");return r.imageSmoothingQuality="high",r.drawImage(e,0,0,i.width,i.height),i}function _v(e,t,i){return Ga(_c(e,t,i))}function _c(e,t,i){let r=document.createElement("canvas");r.width=790,r.height=490;let a=r.getContext("2d");a.fillStyle="#e8e6df",a.fillRect(0,0,790,490);let s=getComputedStyle(document.body).fontFamily;if(e){let l=e.naturalWidth/e.naturalHeight,h=746/268,c=l>h?e.naturalHeight*h:e.naturalWidth,u=l>h?e.naturalHeight:e.naturalWidth/h;a.save(),a.translate(790/2,22+268/2),a.rotate(-.006),a.drawImage(e,(e.naturalWidth-c)/2,(e.naturalHeight-u)/2,c,u,-746/2,-268/2,746,268),a.restore()}a.strokeStyle="#a8a59c",a.lineWidth=2,[352,414].forEach(l=>{a.beginPath(),a.moveTo(24,l),a.lineTo(766,l),a.stroke()});let n='"DT Punk", cursive';a.fillStyle=i;let o=vc(a,t.name.toUpperCase(),66,640,n);return a.save(),a.translate(30,402),a.rotate(-.012),a.font=`400 ${o}px ${n}`,a.textBaseline="alphabetic",a.fillText(t.name.toUpperCase(),0,0),a.restore(),a.font=`400 ${Math.min(o,56)}px ${n}`,a.textAlign="right",a.fillText(t.code,762,402),a.textAlign="left",a.fillStyle="#3c3a35",a.font=`500 21px ${s}`,a.textBaseline="middle",["SP","LP","EP"].forEach((l,h)=>{let c=30+h*104;a.strokeStyle="#3c3a35",a.lineWidth=2,a.strokeRect(c,440,22,22),a.fillText(l,c+32,452)}),a.strokeStyle=i,a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(26,436),a.lineTo(56,466),a.moveTo(56,436),a.lineTo(26,466),a.stroke(),a.fillStyle="#3c3a35",a.textAlign="right",a.fillText(t.kind,762,452),a.textAlign="left",gc(a,790,490),a.globalCompositeOperation="destination-out",a.beginPath(),a.moveTo(790,490),a.lineTo(764,490),a.lineTo(776,481),a.lineTo(790,460),a.closePath(),a.fill(),a.globalCompositeOperation="source-over",r}function xv(e,t){return Ga(xc(e,t))}function xc(e,t){let i=document.createElement("canvas");i.width=1660,i.height=172;let r=i.getContext("2d");r.fillStyle="#e8e6df",r.fillRect(0,0,1660,172),r.fillStyle="#121212",r.fillRect(0,0,150,172);let a=getComputedStyle(document.body).fontFamily,s='"DT Punk", cursive';r.fillStyle="#efefe9",r.textBaseline="middle",r.font='400 92px "DT Punk", cursive',r.textAlign="center",r.fillText(e.code,75,172/2+6),r.textAlign="left",r.strokeStyle="#b6b3aa",r.lineWidth=2,r.beginPath(),r.moveTo(176,138),r.lineTo(1420,138),r.stroke(),r.fillStyle=t;let n=vc(r,e.name.toUpperCase(),112,1210,s);return r.font=`400 ${n}px ${s}`,r.fillText(e.name.toUpperCase(),186,172/2+2),r.fillStyle="#3c3a35",r.font=`500 30px ${a}`,r.textAlign="right",r.fillText(e.kind,1630,172/2-22),r.font=`500 24px ${a}`,r.fillText("TRBN \xB7 SP 120",1630,172/2+24),gc(r,1660,172),i}var yv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Mv=`precision highp float;varying vec2 vUv;uniform sampler2D map;uniform float time;uniform float glitch;uniform float power;uniform float bend;uniform float light;
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
}`,Sv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",Ev=`precision highp float;varying vec2 vUv;uniform sampler2D a;uniform sampler2D b;uniform float fade;uniform float time;uniform vec2 focus;uniform float light;
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
}`,Tv=[[0,0],[.55,0],[.92,.03],[1,.09],[.82,.2],[.6,.33],[.52,.5],[.56,.68],[.74,.84],[.84,.93],[.62,.995],[0,1]],bv=[[0,0],[.55,0],[.92,.04],[1,.11],[.8,.27],[.62,.5],[.6,.68],[.72,.82],[.7,.93],[.42,.995],[0,1]],Hs=e=>new a0(e.map(([t,i])=>new Re(Math.max(.001,t),i)),14);function wv(){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d");t.fillStyle="rgba(0,0,0,.075)";for(let i=0;i<16;i++){let r=16-i;t.beginPath(),t.roundRect(26-r,26-r,76+r*2,12+r*2,6+r),t.fill()}return new sr(e)}var Ot=1,yc=.5,Mc=[{k:[1.32,.42],phi:.4,L:[1.62,1.06,.78],r:.29,base:[3.07,-2.34,-.75]},{k:[1.24,-.16],phi:.33,L:[1.78,1.16,.8],r:.3,base:[2.83,-2.52,-.75]},{k:[1.08,-.72],phi:.26,L:[1.62,1.08,.78],r:.28,base:[2.59,-2.7,-.75]},{k:[.86,-1.22],phi:.17,L:[1.24,.82,.66],r:.25,base:[2.35,-2.88,-.75]}],Av=[[2.2,-2.4,-.8],[.75,-1.55,-1.05],[-.7,-1.15,-.95],[-1.7,-.9,-.8]],Rv=[[3.34,-2.65,-.85],[3.08,-2.84,-.85],[2.82,-3.02,-.85],[2.56,-3.21,-.85],[3.52,-3.08,-1],[3.31,-3.23,-1],[3.11,-3.37,-1],[2.9,-3.52,-1]],li=[3.45,-3.62,-1.2],Cv=[[.36,.26,.6],[-.36,-.26,.52]],Wa=7.2,Xi=[li[0]+Wa*.24,li[1]-Wa*.8,li[2]-Wa*.55],Ko=[Xi[0]-6.3,Xi[1]-12.3,Xi[2]-5.7],Zo=[-8.2,-1.6],hi=[-.2404,.9707],Pv=[[0,0],[.5,0],[.72,.012],[.78,.03],[.7,.06],[.58,.1],[.5,.17],[.46,.3],[.44,.55],[.48,.76],[.6,.87],[.88,.94],[1,.975],[.7,1],[0,1]],Ft={wrist:[3.5,-2.1,.75],knuckle:[[-.94,2.56],[-.31,2.74],[.31,2.64],[.9,2.36]],spread:[-.2,-.06,.07,.22],base:[[-.52,.78],[-.17,.84],[.17,.82],[.52,.74]],carpal:[[-.62,.5],[-.21,.56],[.21,.55],[.62,.48],[-.56,.08],[-.19,.12],[.19,.11],[.56,.06]],thumb:[[-.72,.5],[-1.62,1.16],[-2.4,1.78],[-2.86,2.42]]};function Lv(e){let t=document.createElement("canvas");t.width=t.height=24;let i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,24,24);let r=i.getImageData(0,0,24,24).data,a=Array.from({length:12},()=>[0,0,0,0]),s=0;for(let c=0;c<r.length;c+=4){let u=r[c],d=r[c+1],p=r[c+2],g=Math.max(u,d,p),v=Math.min(u,d,p),f=g-v;if(s+=1,f<40)continue;let m=g===u?(d-p)/f%6:g===d?(p-u)/f+2:(u-d)/f+4;m<0&&(m+=6);let y=a[Math.floor(m*2)%12],_=f*g;y[0]+=u*_,y[1]+=d*_,y[2]+=p*_,y[3]+=_}let n=a.reduce((c,u)=>u[3]>c[3]?u:c);if(n[3]<s*2600)return null;let o=n.slice(0,3).map(c=>c/n[3]),l=Math.max(...o),h=Math.min(...o);return o.map(c=>Math.max(0,Math.min(1,(c-h*.55)/(l-h*.55))))}var Iv={portfolio:{glove:"cut",studs:!0,cuff:"spikes",rings:[0,2]},airtexno:{glove:"cut",cuff:"studs"},wave:{cuff:"spikes",rings:[1]},"concept-undo-studio":{glove:"full"},sabsus:{rings:[0,1,2,3]},basepoint:{band:!0},sunfreaks:{beads:2},"root-framer":{beads:1},janna:{beads:1},wallet:{tie:!0},mortgage:{charm:"key"},"concept-al-futtaim-themes":{charm:"fob"},template:{charm:"cassette"},"street-observations":{charm:"film"},"sabsus-platform":{charm:"tag"}},Nv=[[0,0],[.62,.01],[.93,.05],[1,.14],[1,.82],[.94,.93],[.66,.99],[0,1]],$o=new Je(1052692),Pi=new Je(15263982),Li=new Je(7171446),Xa=new Je(15328988);function Uv(e){let t={value:0},i={value:0},r=new Kt({color:15526368,roughness:.46,metalness:0,envMap:e,envMapIntensity:1.25}),a=V=>$=>{$.uniforms.uTime=t,$.uniforms.uRim={value:V},$.uniforms.uPaper=i,$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
varying float vBoneY;`).replace("#include <project_vertex>",`#include <project_vertex>
 vBoneY = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).y;`),$.fragmentShader=$.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uRim;uniform float uPaper;varying float vBoneY;`).replace("#include <opaque_fragment>",`
        float boneRim = pow(1. - saturate(dot(normal, normalize(vViewPosition))), 2.4);
        float boneScan = smoothstep(.1, .0, abs(fract(vBoneY * .06 - uTime * .17) - .5));
        outgoingLight += vec3(uRim * (1. - uPaper * .8)) * boneRim + vec3(.8) * boneScan * (.25 + boneRim) * min(1., uRim * 3.);
        #include <opaque_fragment>`)};r.onBeforeCompile=a(.34);let s=new Er,n=new ar(Hs(Tv),r,28),o=new ar(Hs(bv),r,10),l=new ar(new Do(1,16,12),r,18),h=new ar(new ni(1,1),new Hi({map:wv(),transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),48);h.renderOrder=2;let c=new ar(Hs(Pv),r,6);[n,o,l,h,c].forEach(V=>{V.frustumCulled=!1,s.add(V)});let u=cv(e,a);s.add(u.mesh);let d=Array.from({length:4},()=>new L),p=Array.from({length:4},()=>new L),g=Array.from({length:5},()=>new L),v=new Kt({color:16777215,roughness:.56,metalness:0,envMap:e,envMapIntensity:.8}),f=new Kt({color:16777215,roughness:.22,metalness:1,envMap:e,envMapIntensity:1.6});v.onBeforeCompile=a(.07),f.onBeforeCompile=a(.16);let m=new A0(1,.18,8,26),y=new Do(1,12,10),_=new rc(1,1,1,2,.12),T={},z={stall:[Hs(Nv),v,60],band:[new Cs(1,1,1,30),v,4],bead:[y,v,60],tie:[m,v,4],block:[_,v,8],spike:[new n0(1,1,10).translate(0,.5,0),f,44],loop:[m,f,30],pin:[y,f,16],plate:[_,f,10],sleeve:[new Cs(1,1,1,22),f,8]};Object.entries(z).forEach(([V,[$,Q,De]])=>{let Ce=new ar($,Q,De);Ce.setColorAt(0,Pi),Ce.count=0,Ce.visible=!1,Ce.frustumCulled=!1,Ce.userData.most=De,T[V]=Ce,s.add(Ce)});let R={},P=(V,$,Q,De,Ce,qe,Ye)=>{let ut=T[V],rt=R[V]||0;rt>=ut.userData.most||(H.set(De,Ce,qe),ut.setMatrixAt(rt,C.compose($,Q,H)),ut.setColorAt(rt,Ye),R[V]=rt+1)},D=new ht,M=new ht,E=new ht,C=new ht,U=new Ti,O=new L,H=new L,ae=new L,j=new L(0,1,0),ce=(V,$,Q,De,Ce)=>{ae.copy(De).sub(Q);let qe=ae.length();ae.divideScalar(qe),U.setFromUnitVectors(j,ae),O.copy(Q).addScaledVector(ae,qe*.025),H.set(Ce,qe*.95,Ce*.9),V.setMatrixAt($,C.compose(O,U,H))},te=(V,$,Q,De)=>{ae.copy(Q).sub($);let Ce=ae.length();U.setFromUnitVectors(j,ae.divideScalar(Ce)),H.set(De,Ce,De*.9),c.setMatrixAt(V,C.compose($,U,H))},_e=()=>{he=Math.random()<.5?0:1,Ae=0},Te=(V,$,Q)=>{U.identity(),H.set(Q,Q*1.2,Q*.82),l.setMatrixAt(V,C.compose($,U,H))},ze=(V,$,Q,De)=>{let Ce=$.x+$.z*.3,qe=$.y-$.z*.72,Ye=Q.x+Q.z*.3,ut=Q.y-Q.z*.72,rt=Ye-Ce,ti=ut-qe,Wt=Math.hypot(rt,ti);U.setFromAxisAngle(Ha,Math.atan2(ti,rt)),O.set((Ce+Ye)/2,(qe+ut)/2,.022),H.set(Wt*1.68,De,1),h.setMatrixAt(V,C.compose(O,U,H))},Ee=[new L,new L,new L,new L],Y=new L,ie=new L,I=new L,X=new L,k=new L,le=new L,me=new L,be=new L,J=new L,de=new L,w=new L,ge=new Ti,se=new Ti,Se=new Ti().setFromAxisAngle(j,Math.PI/2),oe=new Je(15328988),Pe=new Je(15328988),q=(V,$,Q,De,Ce)=>{ae.copy(Q).sub($);let qe=ae.length();qe<1e-4||(ge.setFromUnitVectors(j,ae.divideScalar(qe)),P(V,$,ge,De,qe,De,Ce))},W=0,b=(V,$,Q,De,Ce,qe,Ye,ut)=>{let rt=1.65*W;le.set($*rt,Q*rt,De*rt).applyQuaternion(se).add(k),P(V,le,se,Ce*rt,qe*rt,Ye*rt,ut)},x={key(){return b("loop",0,-.42,0,.36,.36,.46,Li),b("plate",0,-1.36,0,.17,1.3,.09,Li),b("plate",.15,-1.84,0,.2,.13,.08,Li),b("plate",.13,-1.58,0,.15,.12,.08,Li),2},fob(){return b("plate",0,-.86,0,.86,1.28,.2,Pi),b("block",0,-.86,.04,.72,1.14,.24,$o),b("pin",0,-.62,.17,.15,.15,.05,Pi),b("pin",0,-1.02,.17,.15,.15,.05,Pi),1.5},cassette(){return b("block",0,-.62,0,1.3,.86,.17,Xa),b("block",0,-.44,.09,1.06,.28,.02,oe),b("loop",-.3,-.78,.1,.13,.13,.06,Li),b("loop",.3,-.78,.1,.13,.13,.06,Li),1.1},film(){return b("block",0,-.62,0,.7,.92,.7,oe),b("plate",0,-.13,0,.78,.1,.78,Pi),b("plate",0,-1.11,0,.78,.1,.78,Pi),b("block",.46,-.68,0,.34,.5,.03,oe),1.2},tag(){return b("plate",0,-.8,0,.84,1.16,.07,Li),b("block",0,-.9,.05,.62,.4,.02,$o),1.4}},A={upper:null,jaw:null,eyes:null,hinge:new L,yaw:0,pitch:0,roll:0,open:0,bite:0,blink:0,nextBlink:2600,glance:0,nextGlance:5e3,gaze:0,gazeY:0},re=r.clone();re.vertexColors=!0,re.onBeforeCompile=a(.14);try{let V=new Worker("/skull-model.js?v=1");V.onmessage=({data:$})=>{V.terminate();let Q=De=>{let Ce=new Xt,qe=new Float32Array(De.occ.length*3);De.occ.forEach((ut,rt)=>{qe[rt*3]=qe[rt*3+1]=qe[rt*3+2]=.1+.9*ut*ut}),Ce.setAttribute("position",new At(De.position,3)),Ce.setAttribute("normal",new At(De.normal,3)),Ce.setAttribute("color",new At(qe,3)),Ce.setIndex(new At(De.index,1));let Ye=new ar(Ce,re,1);return Ye.frustumCulled=!1,s.add(Ye),Ye};A.hinge.fromArray($.hinge),A.upper=Q($.upper),A.jaw=Q($.jaw),A.eyes=new ar(new Do(1,12,10),new Hi({color:16777215,fog:!1}),2),A.eyes.frustumCulled=!1,s.add(A.eyes)},V.postMessage({})}catch{}let ne=null,G=null,Oe=1,ve=0,we=0,We=0,xe=7,Ue=5,pe=0,fe=!1,he=-1,Ae=0,Le=0,Ve=0,N=13,ue={half:7,tall:5},ee=new L;return{group:s,get tilt(){return he<0?0:(he?-1:1)*Le},wave(V=Math.random()<.5?0:1){he<0&&(he=V,Ae=0)},place(V,$,Q){ue.half=V,ue.tall=$,Q&&(N=Q),fe||(fe=!0,xe=V,Ue=$)},theme(V){i.value=V;for(let $ of[r,re])$.color.set(V?3421242:15526368),$.envMapIntensity=V?.7:1.25},dress(V,$){let Q=Iv[V]||null;$?Pe.setRGB($[0],$[1],$[2],St):Pe.copy(Xa),Q!==ne&&(ne=Q,we+=.9),A.bite=1},update(V,$,Q,De=0,Ce=0){let qe=1-Math.exp(-$/180);xe+=(ue.half-xe)*qe,Ue+=(ue.tall-Ue)*qe,pe+=(Math.min(1,Q*20)-pe)*(1-Math.exp(-$/140)),t.value=V/1e3;let Ye=0,ut=0,rt=0,ti=0;G!==ne?(Oe=Math.max(0,Oe-$/110),Oe||(G=ne,oe.copy(Pe))):Oe=Math.min(1,Oe+$/260);let Wt=Oe-1;W=G?Math.max(0,1+2.7*Wt*Wt*Wt+1.7*Wt*Wt):0,Object.keys(R).forEach(dt=>{R[dt]=0});let fa=G&&(G.cuff||G.beads||G.tie||G.band);if(We+=((fa?1.25:G?.charm?.9:0)-We)*(1-Math.exp(-$/320)),we+=(-ve*26-we*2.4+pe*2.2*Math.sin(V*.012))*($/1e3),ve+=we*($/1e3),Ve||(Ve=V+12e3+Math.random()*16e3),he<0&&V>Ve&&Q<.01&&_e(),he>=0){Ae+=$;let dt=kt(Ae/640,0,1),st=kt((3500-Ae)/640,0,1);Le=Fs(Math.min(dt,st)),Ae>3500&&(he=-1,Le=0,Ve=V+24e3+Math.random()*42e3)}let Ar=.06+Math.sin(V*.0105)*.14,Rr=Ar+Math.sin(V*.0105-.8)*.18,cr=Math.cos(Rr),ma=Math.sin(Rr);if([-1,1].forEach((dt,st)=>{let qt=dt*xe,ga=-Ue*(st?.2:.1)+Math.sin(V*7e-4+st*2)*.05,yi=(Ie,Be,Me,tt)=>Ie.set(qt+dt*Be*Ot,ga+We+Me*Ot,tt),Pt=st===he?Le:0,S=kt(N-xe-4,-1.6,Ft.wrist[0])-.41,B=S+Wa*.944*Math.sin(Ar),K=Zo[0]+Wa*.944*Math.cos(Ar),Z=(Ie,Be)=>B+Ie*cr+Be*ma,F=(Ie,Be)=>K-Ie*ma+Be*cr,ye=li[0]+(B-li[0])*Pt,Fe=li[1]+(K-li[1])*Pt,ke=li[2]+(Ft.wrist[2]-li[2])*Pt,Ge=Math.PI*Pt,Ke=Math.cos(Ge),Ze=Math.sin(Ge),je=(Ie,Be,Me,tt)=>{let yt=(hi[0]*Be+hi[1]*Me)*(1-Ke);return Ie.set(dt*(Be*Ke+hi[1]*tt*Ze+hi[0]*yt),Me*Ke-hi[0]*tt*Ze+hi[1]*yt,tt*Ke+(hi[0]*Me-hi[1]*Be)*Ze)};je(w,0,0,1);let et=(Ie,Be,Me,tt,yt,mt,Lt)=>{if(!Pt)return yi(Ie,Be,Me,tt);let vt=yt-B,Vt=mt-K,at=Lt-Ft.wrist[2],Bt=2*(hi[0]*vt+hi[1]*Vt),ii=Be-li[0],Mt=Me-li[1],ci=tt-li[2];return je(de,ii+(hi[0]*Bt-vt-ii)*Pt,Mt+(hi[1]*Bt-Vt-Mt)*Pt,ci+(-at-ci)*Pt),yi(Ie,ye,Fe,ke).add(de)},nt=(Ie,Be,Me,tt,yt)=>et(Ie,Be[0],Be[1],Be[2],Z(Me,tt),F(Me,tt),yt);Mc.forEach((Ie,Be)=>{let Me=Math.sin(V*.0013+Be*1.3+st*2.4)*.012-pe*.07,tt=Math.cos(Ie.phi),yt=Math.sin(Ie.phi),mt=st===1&&Be>=2,Lt=mt?[.12,-.98,-1.1,-.86]:[.52+Me*.4,1.2+Me,.92+Me*1.3,.3+Me*.4],vt=Ie.k[0],Vt=Ie.k[1],at=Rr+Ft.spread[Be],Bt=Z(Ft.knuckle[Be][0],Ft.knuckle[Be][1]),ii=F(Ft.knuckle[Be][0],Ft.knuckle[Be][1]),Mt=Ft.wrist[2]+.06;et(Ee[0],vt,Vt,Lt[0],Bt,ii,Mt);let ci=vt,ui=Vt,va=Lt[0];for(let _t=0;_t<3;_t++){let Xs=Lt[_t+1]-Lt[_t],el=Math.sqrt(Math.max(.03,Ie.L[_t]*Ie.L[_t]-Xs*Xs)),tl=vt-el*tt,il=Vt+el*yt;if(_t===0){let rl=ci/(ci-tl);ui=Vt+(il-Vt)*rl,va=Lt[0]+Xs*rl}vt=tl,Vt=il,Bt+=Math.sin(at)*Ie.L[_t],ii+=Math.cos(at)*Ie.L[_t],Mt+=.14*(_t+1)*(.5+_t*.25),at+=.05,et(Ee[_t+1],vt,Vt,Lt[_t+1],Bt,ii,Mt)}if(yi(ie,0,ui,va),ce(n,Ye++,Ee[0],Ee[1],Ie.r*Ot),ce(n,Ye++,Ee[1],Ee[2],Ie.r*.86*Ot),ce(o,ut++,Ee[2],Ee[3],Ie.r*.8*Ot),nt(Y,Ie.base,Ft.base[Be][0],Ft.base[Be][1],Ft.wrist[2]),ce(n,Ye++,Y,Ee[0],.34*Ot),G){if(G.glove){d[Be].copy(Ee[0]),p[Be].copy(Y),g[0].copy(Y).lerp(Ee[0],.72);for(let _t=0;_t<4;_t++)g[_t+1].copy(Ee[_t]);u.finger(st,Be,g,Ie.r*Ot,G.glove==="full"?0:.5,W,w)}if(G.studs&&(I.copy(Ee[0]).addScaledVector(w,Ie.r*1.2),je(X,.5,.35,.8).normalize(),ge.setFromUnitVectors(j,X),P("spike",I,ge,.2*W,.66*W,.2*W,Pi)),G.rings?.includes(Be)){I.copy(Ee[0]).lerp(Ee[1],.6),X.copy(Ee[1]).sub(Ee[0]).normalize(),ge.setFromUnitVectors(j,X);let _t=Ie.r*.84*W;P("sleeve",I,ge,_t,.32*W,_t,Pi),I.addScaledVector(w,_t*.92),ge.identity(),P("pin",I,ge,.17*W,.17*W,.09*W,Pi)}st===1&&Be===1&&(me.copy(Ee[1]).lerp(Ee[2],.3),be.copy(Ee[2]).sub(Ee[1]).normalize())}!mt&&Pt<.3&&(ze(ti++,ie,Ee[1],1.1+Ee[1].z*.55),ze(ti++,Ee[1],Ee[2],.95+Ee[2].z*.5),ze(ti++,Ee[2],Ee[3],.8),k.copy(Ee[3]),k.z=.05,le.copy(Ee[3]).lerp(Ee[2],.3),le.z=.12,ze(ti++,le,k,.46))});for(let Ie=0;Ie<4;Ie++)nt(Ee[Ie],Av[Ie],Ft.thumb[Ie][0],Ft.thumb[Ie][1],Ft.wrist[2]+.05+Ie*.05);ce(n,Ye++,Ee[0],Ee[1],.37*Ot),ce(n,Ye++,Ee[1],Ee[2],.33*Ot),ce(o,ut++,Ee[2],Ee[3],.29*Ot),Rv.forEach((Ie,Be)=>Te(rt++,nt(Y,Ie,Ft.carpal[Be][0],Ft.carpal[Be][1],Ft.wrist[2]-.02),(.27+Be%3*.04)*Ot));let ot=Ie=>yi(Ie,ye,Fe,ke);if(yi(I,Xi[0]+(S-Xi[0])*Pt,Xi[1]+(Zo[0]-Xi[1])*Pt,Xi[2]+(Zo[1]-Xi[2])*Pt),ot(X),ee.copy(I).sub(X).normalize(),Cv.forEach(([Ie,Be,Me],tt)=>{Y.copy(X).add(je(de,Ie,Be,0)),ie.set(I.x+dt*Ie*.4,I.y+Be*.4,I.z),te(tt+st*3,Y,ie,Me*Ot)}),yi(k,Ko[0],Ko[1],Ko[2]),te(2+st*3,I,k,.82*Ot),Te(rt++,I,.58*Ot),G){if(G.glove){g[0].copy(Ee[0]).lerp(Ee[1],-.45);for(let Me=0;Me<4;Me++)g[Me+1].copy(Ee[Me]);u.finger(st,4,g,.4*Ot,G.glove==="full"?0:.55,W,w),u.palm(st,d,p,ot(I),ee,Mc[0].r*Ot,W,w)}let Ie=.98*Ot;ot(I).addScaledVector(ee,G.glove?.3:.45),X.copy(ee).cross(Ha).normalize(),k.copy(X).cross(ee);let Be=(Me,tt)=>le.copy(I).addScaledVector(X,Math.cos(Me)*tt).addScaledVector(k,Math.sin(Me)*tt);if(ge.setFromUnitVectors(j,ee),G.cuff){P("band",I,ge,Ie*W,.9*W,Ie*W,$o);let Me=G.cuff==="spikes"?11:16;for(let tt=0;tt<Me;tt++){let yt=tt/Me*Math.PI*2;Be(yt,Ie*.97),k.copy(le).sub(I).normalize(),se.setFromUnitVectors(j,k);let mt=G.cuff==="spikes"?.62:.2,Lt=G.cuff==="spikes"?.17:.13;P("spike",le,se,Lt*W,mt*W,Lt*W,Pi),k.copy(X).cross(ee)}}if(G.beads)for(let Me=0;Me<G.beads;Me++){let tt=Me*.46,yt=13+Me;for(let mt=0;mt<yt;mt++)I.addScaledVector(ee,tt),Be(mt/yt*Math.PI*2+Me,Ie),I.addScaledVector(ee,-tt),se.identity(),P("bead",le,se,.23*W,.23*W,.23*W,(mt+Me)%3?oe:Xa)}ge.setFromUnitVectors(Ha,ee),G.tie&&P("tie",I,ge,Ie*W,Ie*W,Ie*.9*W,oe),G.band&&(se.setFromUnitVectors(j,ee),P("band",I,se,Ie*.99*W,.5*W,Ie*.99*W,Xa),Be(Math.PI/2,Ie),P("block",le,se,.9*W,.34*W,.12*W,Xa))}}),G?.charm){let dt=ve+Math.sin(V*9e-4)*.05;J.set(Math.sin(dt),-Math.cos(dt),.07).normalize(),ge.setFromUnitVectors(Ha,be),P("loop",me,ge,.38*W,.38*W,.42*W,Li),I.copy(me).addScaledVector(J,.34*W),X.copy(J).negate(),ge.setFromUnitVectors(j,X);for(let qt=0;qt<4;qt++)I.addScaledVector(J,.33*W),se.copy(ge),qt%2&&se.multiply(Se),P("loop",I,se,.17*W,.27*W,.17*W,Li);k.copy(I).addScaledVector(J,.3*W),se.copy(ge),X.set(0,1,0),se.multiply(U.setFromAxisAngle(X,Math.sin(V*.0011)*.36+ve*1.5)),b("loop",0,0,0,.12,.12,.1,Li);let st=x[G.charm]();X.copy(me).addScaledVector(J,(1.8+st*1.65)*W),ze(ti++,me,X,1.1*Ot)}if(h.count=ti,A.upper){let dt=1-Math.exp(-$/240),st=he<0?0:(he?1:-1)*Le;V>A.nextGlance&&(A.glance=Math.random()<.4?0:(Math.random()-.5)*.9,A.nextGlance=V+2500+Math.random()*5e3),A.yaw+=(kt(De*.3+A.glance+st*.42,-.62,.62)-A.yaw)*dt,A.pitch+=(kt(Ce*.12+Math.sin(V*6e-4)*.02-.1,-.3,.16)-A.pitch)*dt,A.roll+=(st*.1+Math.sin(V*43e-5)*.025-A.roll)*dt,A.bite=Math.max(0,A.bite-$/480);let qt=pe*(.1+.13*Math.abs(Math.sin(V*.03))),ga=A.bite*(.24+.24*Math.sin(A.bite*12)),yi=Math.abs(st)*(.16+.2*Math.abs(Math.sin(V*.0095)));A.open+=(Math.max(0,qt,ga,yi,.012+Math.sin(V*9e-4)*.012)-A.open)*(1-Math.exp(-$/55)),V>A.nextBlink&&(A.blink=1,A.nextBlink=V+1800+Math.random()*4600),A.blink=Math.max(0,A.blink-$/130),A.gaze+=(kt(De*.9+A.glance*1.1+st,-1,1)-A.gaze)*(1-Math.exp(-$/70)),A.gazeY+=(kt(Ce*.8,-1,1)-A.gazeY)*(1-Math.exp(-$/70));let Pt=2.95,S=Math.max(-11,-Ue*1.16-.15*Pt-.25);U.setFromAxisAngle(j,A.yaw).multiply(ge.setFromAxisAngle(uv,A.pitch)).multiply(se.setFromAxisAngle(Ha,A.roll)),O.set(Math.sin(V*37e-5)*.04,S+Math.sin(V*83e-5)*.05,-6.4),H.setScalar(Pt),C.compose(O,U,H),A.upper.setMatrixAt(0,C),D.copy(C).multiply(M.makeTranslation(A.hinge.x,A.hinge.y,A.hinge.z)).multiply(E.makeRotationX(A.open*.62)).multiply(M.makeTranslation(-A.hinge.x,-A.hinge.y,-A.hinge.z)),A.jaw.setMatrixAt(0,D),[-1,1].forEach((B,K)=>{I.set(B*.43+A.gaze*.08,-.1+A.gazeY*.05,.46).applyMatrix4(C),ge.identity();let Z=.058*Pt;H.set(Z,Z*(1-.92*Math.min(1,A.blink*2)),Z),A.eyes.setMatrixAt(K,D.compose(I,ge,H))}),A.upper.instanceMatrix.needsUpdate=!0,A.jaw.instanceMatrix.needsUpdate=!0,A.eyes.instanceMatrix.needsUpdate=!0}G?.glove?u.commit(G.glove):u.hide(),Object.entries(T).forEach(([dt,st])=>{let qt=R[dt]||0;st.count=qt,st.visible=qt>0,qt&&(st.instanceMatrix.needsUpdate=!0,st.instanceColor.needsUpdate=!0)}),[n,o,l,h,c].forEach(dt=>{dt.instanceMatrix.needsUpdate=!0})}}}function Dv({host:e,stage:t,items:i,onHover:r,onOpen:a,onPlay:s}){let n=document.createElement("canvas");n.className="tv-canvas",n.setAttribute("aria-hidden","true"),e.append(n);let o;try{o=new Uh({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return n.remove(),null}let l=Math.min(devicePixelRatio||1,1.25);o.setPixelRatio(l),o.outputColorSpace=St,o.setClearColor(0,0);let h=Xo(o),c=Yo(h),u=new ws;u.background=new Je(131587),u.fog=new Hg(131587,40,96);let d=new Qh(16777215,1.5);d.position.set(-8,18,22),u.add(d);let p=new ei(30,1,1,200);p.position.set(0,0,40);let g=new bi({vertexShader:Sv,fragmentShader:Ev,depthTest:!1,depthWrite:!1,fog:!1,uniforms:{a:{value:ua},b:{value:ua},fade:{value:1},time:{value:0},focus:{value:new Re(.47,.55)},light:{value:0}}}),v=new Et(new ni(2,2),g);v.frustumCulled=!1,v.renderOrder=-10,u.add(v);let f=new ec(16777215,.32);u.add(f);let m=new Je(16777215),y=new Je(16777215),_=new Je(16777215),T=new Et(new ni(1,1),new Hi({map:ua,color:16777215,transparent:!0,opacity:0,fog:!1}));T.renderOrder=1;let z=new Er;u.add(z),z.add(T);let R=new Et(new ni(1,1),new Hi({color:328965,fog:!1}));R.position.z=-.04,z.add(R);let P=new Et(new ir(1,1,1),new Kt({color:723723,roughness:.42,envMap:h,envMapIntensity:.9}));z.add(P);let D=Uv(h);z.add(D.group);let M=0,E=0,C=i.map((pe,fe)=>{let he=Ae=>{let Le=Math.sin((fe+1)*12.9898*Ae)*43758.5453;return Le-Math.floor(Le)};return{rx:he(1)-.5,ry:he(2)-.5,rz:he(3)-.5,wob:he(4)*6.28,tilt:(he(5)-.5)*.022,pile:he(6)-.5}}),U=i.map((pe,fe)=>{let he=Jo(c,C[fe].tilt),Ae=new Et(c.hit,new Hi({visible:!1}));return Ae.userData.index=fe,he.group.add(Ae),he.hit=Ae,u.add(he.group),he}),O=new Map,H=new Map,ae=(pe,fe)=>{if(O.has(pe)){let Ae=O.get(pe);Ae.complete&&Ae.naturalWidth?fe(Ae):Ae.addEventListener("load",()=>fe(Ae),{once:!0});return}let he=new Image;he.decoding="async",he.src=i[pe].src,O.set(pe,he),he.addEventListener("load",()=>fe(he),{once:!0})},j=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),ce=pe=>{U[pe].wanted||(U[pe].wanted=!0,ae(pe,fe=>j.then(()=>{let he=mc(fe),Ae=(Le,Ve)=>{Le.material.map=Ve,Le.material.emissiveMap=Ve,Le.material.emissiveIntensity=.55,Le.material.color.set(16777215),Le.material.needsUpdate=!0};Ae(U[pe].label,_v(fe,i[pe],he)),Ae(U[pe].spine,xv(i[pe],he)),uc(i[pe].project,pe,cc(fe)).forEach((Le,Ve)=>{let N=U[pe].stickers[Ve];if(!N)return;let ue=new sr(Vs(Le,256));ue.colorSpace=St,ue.anisotropy=4,N.material.map=ue,N.material.emissiveMap=ue,N.material.needsUpdate=!0})})))},te=pe=>{H.has(pe)||(H.set(pe,null),ae(pe,fe=>{let he=new sr(fe);he.colorSpace=St,he.anisotropy=8,he.generateMipmaps=!0,he.minFilter=Ni;let Ae=document.createElement("canvas");Ae.width=Ae.height=6;let Le=Ae.getContext("2d",{willReadFrequently:!0});Le.drawImage(fe,0,0,6,6);let Ve=Le.getImageData(0,0,6,6).data,N=0,ue=0,ee=0;for(let Ce=0;Ce<Ve.length;Ce+=4)N+=Ve[Ce],ue+=Ve[Ce+1],ee+=Ve[Ce+2];let V=new Je(N/9180,ue/9180,ee/9180).convertSRGBToLinear(),$=Math.max(N,ue,ee,1),Q=255/$,De=`rgba(${[N,ue,ee].map(Ce=>Math.round(Ce*Q)).join(",")},.3)`;H.set(pe,{texture:he,ratio:fe.naturalWidth/fe.naturalHeight,avg:V,glow:De,light:Lv(fe)}),pe===J&&de(pe)}))},_e=new ws,Te=new fo(-1,1,1,-1,0,1),ze=new bi({vertexShader:yv,fragmentShader:Mv,toneMapped:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},time:{value:0},glitch:{value:1},power:{value:0},bend:{value:1},light:{value:0}}}),Ee=new Et(new ni(2,2),ze);Ee.frustumCulled=!1,_e.add(Ee);let Y=null,ie=0,I=0;function X(){let pe=Math.round(ie*l),fe=Math.round(I*l);(!Y||Y.width!==pe||Y.height!==fe)&&(Y?.dispose(),Y=new Ji(pe,fe,{samples:2,type:Nr,colorSpace:"",generateMipmaps:!0,minFilter:Ni,magFilter:di})),ze.uniforms.map.value=Y.texture,p.aspect=ie/I,p.updateProjectionMatrix(),be()}let k=()=>{let pe=80*Math.tan(p.fov*Math.PI/360);return{vh:pe,vw:pe*p.aspect}},le=4/3,me=0;function be(){let{vh:pe,vw:fe}=k(),he=fe*.62,Ae=pe*.62,Le=he,Ve=Le/le;Ve>Ae&&(Ve=Ae,Le=Ve*le),me=pe*.06,T.scale.set(Le,Ve,1),R.scale.set(Le+.16,Ve+.16,1),P.scale.set(Le+.16,Ve+.16,yc),P.position.z=-.05-yc/2,D.place((Le+.16)/2,Ve/2,40*Math.tan(p.fov*Math.PI/360)*p.aspect),g.uniforms.focus.value.set(.5,.5+me/pe)}let J=-1;function de(pe){let fe=H.get(pe);fe&&(g.uniforms.a.value!==fe.texture&&(g.uniforms.b.value=g.uniforms.a.value===ua?fe.texture:g.uniforms.a.value,g.uniforms.a.value=fe.texture,g.uniforms.fade.value=0),y.copy(fe.avg).lerp(_,.3),document.documentElement.style.setProperty("--tube-glow",fe.glow),window.trbnRingTint?.(fe.light),D.dress(i[pe]?.project,fe.light),T.material.map=fe.texture,T.material.opacity=1,T.material.needsUpdate=!0,le=fe.ratio,be())}function w(){let pe=n.clientWidth,fe=n.clientHeight;!pe||!fe||(ie=pe,I=fe,o.setSize(ie,I,!1),X())}new ResizeObserver(w).observe(n),w();let ge=()=>{let pe=document.documentElement.classList.contains("theme-light")?1:0;g.uniforms.light.value=pe,ze.uniforms.light.value=pe,u.fog.color.set(pe?13224389:131587),u.background.set(pe?13224389:131587),D.theme(pe)};ge(),addEventListener("trbn:theme",ge);let se=(pe,fe,he)=>Fs(kt((he-pe)/(fe-pe),0,1));function Se(pe,fe,he,Ae,Le){let{vh:Ve,vw:N}=k(),ue=Fs(kt(1-Math.abs(Ae)*1.15,0,1)),ee=pe.group,V=Math.sin(Le*5e-4+fe.wob),$={x:N*.275,y:-Ve*.265,z:8,s:.52,rx:-.16+V*.012,ry:-.3+Math.cos(Le*4e-4)*.018,rz:.05},Q;if(Ae>=0){let De=he%2?1:-1,Ce=1-Ae*4.2;Q={x:De*N*.49,y:Ve*.1+fe.pile*1.2-Ae*.12,z:Ce,s:.46,rx:fe.rx*.1,ry:-De*.92+fe.ry*.08,rz:De*.03+fe.rz*.04},Q={x:ft(Q.x,$.x,ue),y:ft(Q.y,$.y,ue),z:ft(Q.z,$.z,ue),s:ft(Q.s,$.s,ue),rx:ft(Q.rx,$.rx,ue),ry:ft(Q.ry,$.ry,ue),rz:ft(Q.rz,$.rz,ue)}}else{let De=zs*.5,Ce=se(0,.9,-Ae),qe={x:-N*.265+fe.pile*.45,y:-Ve*.19+(Ae+1)*De,z:7,s:.5,rx:-Math.PI/2+.34,ry:.1+fe.ry*.05,rz:fe.rz*.022};Q={x:ft($.x,qe.x,Ce),y:ft($.y,qe.y,Ce)+Math.sin(Ce*Math.PI)*3,z:ft($.z,qe.z,Ce),s:ft($.s,qe.s,Ce),rx:ft($.rx,qe.rx,Ce),ry:ft($.ry,qe.ry,Ce),rz:ft($.rz,qe.rz,Ce)}}ee.position.set(Q.x,Q.y,Q.z),ee.scale.setScalar(Q.s),ee.rotation.set(Q.rx,Q.ry,Q.rz),ee.visible=Ae>-8&&Ae<12&&Q.y>-Ve*.85}let oe=new Z0,Pe=new Re,q=null,W=-2,b=!1,x=()=>{W!==-2&&(W=-2,r(-1),t.classList.remove("is-pointing"))},A=()=>{if(b=!1,!q){x();return}let[pe,fe]=window.trbnBend?window.trbnBend(q.x,q.y,ie,I):[q.x,q.y],he=pe/ie,Ae=fe/I;if(he<0||he>1||Ae<0||Ae>1){x();return}Pe.set(he*2-1,-(Ae*2-1)),oe.setFromCamera(Pe,p);let Le=oe.intersectObjects([...U.filter(N=>N.group.visible).map(N=>N.hit),T],!1)[0],Ve=Le?Le.object===T?-1:Le.object.userData.index:-2;Ve!==W&&(W=Ve,r(Ve>=0?Ve:-1),t.classList.toggle("is-pointing",Ve!==-2))};t.addEventListener("pointermove",pe=>{let fe=n.getBoundingClientRect();q={x:pe.clientX-fe.left,y:pe.clientY-fe.top},b=!0}),t.addEventListener("pointerleave",()=>{q=null,b=!0}),t.addEventListener("click",pe=>{pe.target.closest("a, button")||(A(),W!==-2&&a(W===-1?J:W))});let re=!1;Promise.all([o.compileAsync(u,p),o.compileAsync(_e,Te)]).then(()=>{re=!0},()=>{re=!0});let ne=1,G=0,Oe=0,ve=0,we=0,We=0,xe=!1,Ue=!0;return{frame:(pe,fe,he,Ae=1)=>{if(!Ue||!re)return;let Le=pe-ve,Ve=Math.abs(Le);ve=pe,Oe+=Le*11+he*9e-4;let N=kt(pe/Math.max(1,i.length-1),0,1);U.forEach((Q,De)=>{let Ce=De-pe;if(Ce>-7&&Ce<7&&ce(De),Se(Q,C[De],De,Ce,fe),Math.abs(Ce)<3){Q.reels[0].hub.rotation.z=-Oe,Q.reels[1].hub.rotation.z=-Oe*.82;let qe=ft(3.15,1.75,N),Ye=ft(1.75,3.15,N);Q.reels[0].pack.scale.set(qe,qe,1),Q.reels[1].pack.scale.set(Ye,Ye,1)}});let ue=kt(Math.round(pe),0,i.length-1);if(te(ue),te(Math.min(i.length-1,ue+1)),te(Math.max(0,ue-1)),ue!==J){let Q=J<0;J=ue,Q||(ne=1,M=(Math.random()<.5?-1:1)*.9,s?.(ue)),de(ue)}ne=Math.max(ne*Math.exp(-he/170),kt(Ve*26,0,.7)),G||(G=fe);let ee=Math.min(1,(fe-G)/700);m.lerp(y,1-Math.exp(-he/500)),f.color.copy(m),g.uniforms.time.value=fe/1e3,g.uniforms.fade.value=Math.min(1,g.uniforms.fade.value+he/900),ze.uniforms.time.value=fe/1e3,ze.uniforms.glitch.value=ne,E+=(-M*70-E*7)*(he/1e3),M+=E*(he/1e3),D.update(fe,he,Ve,we,We),ze.uniforms.power.value=1-(1-ee)**3,ze.uniforms.bend.value=document.documentElement.classList.contains("crt")?0:1;let V=q?q.x/ie-.5:0,$=q?q.y/I-.5:0;we+=(V-we)*(1-Math.exp(-he/260)),We+=($-We)*(1-Math.exp(-he/260)),p.position.x=we*1.6,p.position.y=-We*1,p.lookAt(0,0,0),z.position.y=me+Math.sin(fe*83e-5)*.05,z.rotation.set(Math.sin(fe*61e-5)*.009+We*.05+M*.012,Math.sin(fe*47e-5)*.013+we*.1+M*.03,Math.sin(fe*39e-5)*.0045+M*.008+D.tilt*.022),b&&A(),o.toneMapping=Si,o.setRenderTarget(Y),o.clear(),o.render(u,p),o.setRenderTarget(null),o.clear(),o.render(_e,Te),n.style.opacity=String(Math.min(ee*3,1)*Ae),xe||(xe=!0,t.classList.add("tv-on"))},wave(pe){D.wave(pe)},show(pe){Ue=pe,n.style.display=pe?"":"none",pe&&w()},lighter(){l<=.8||(l=Math.max(.8,l-.2),o.setPixelRatio(l),w())}}}var Sc={rest:{x:.222,y:-.252,z:6,s:.48,rx:-.22,ry:-.36,rz:.07},lift:{x:.2,y:-.21,z:9,s:.45,rx:-.07,ry:-.12,rz:.025}};function Ov(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");return t.filter="blur(16px)",t.fillStyle="rgba(0,0,0,.9)",t.beginPath(),t.roundRect(44,38,168,84,16),t.fill(),Ga(e,1)}function Fv({grid:e,scroller:t,items:i}){let r=document.createElement("canvas");r.className="tape-library",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"absolute",left:"0",top:"0",zIndex:"3",pointerEvents:"none"}),e.append(r);let a;try{a=new Uh({canvas:r,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return r.remove(),null}let s=Math.min(devicePixelRatio||1,1.25);a.setPixelRatio(s),a.outputColorSpace=St,a.toneMapping=Si,a.setClearColor(0,0),a.autoClear=!1;let n=Xo(a),o=Yo(n),l=new ws,h=new Qh(16777215,1.5);h.position.set(-8,18,22),l.add(h);let c=new ec(16777215,.32);l.add(c);let u=new ei(30,4/3,1,200);u.position.set(0,0,40),u.lookAt(0,0,0);let d=80*Math.tan(u.fov*Math.PI/360),p=d*u.aspect,g=new Et(new ni(1,1),new Hi({map:Ov(),transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=-1,l.add(g);let v=new Je(16777215),f=i.map((I,X)=>{let k=be=>{let J=Math.sin((X+1)*12.9898*be)*43758.5453;return J-Math.floor(J)},le=Jo(o,(k(5)-.5)*.022);le.group.visible=!1,l.add(le.group);let me=ft(1.75,3.15,k(7));return le.reels[0].pack.scale.set(me,me,1),le.reels[1].pack.scale.set(4.9-me,4.9-me,1),{item:I,tape:le,seed:{rx:k(1)-.5,ry:k(2)-.5,rz:k(3)-.5},spin:k(4)*6.28,tint:new Je(1,1,1),wanted:!1,ready:!1,shown:!1,p:0,hover:0,h:0,tx:0,ty:0,px:0,py:0,box:null,dirty:!1}}),m=document.fonts?.load?Promise.all([document.fonts.load('40px "DT Punk"'),document.fonts.load('900 40px "Inter Tight"')]).catch(()=>{}):Promise.resolve(),y=(I,X)=>{let k=Ga(X,4);I.material.map=k,I.material.emissiveMap=k,I.material.emissiveIntensity=.55,I.material.color.set(16777215),I.material.needsUpdate=!0};function _(I){if(I.wanted)return;I.wanted=!0;let X=I.item.card.querySelector("img");if(!X)return;let k=()=>m.then(()=>{if(X.naturalWidth){try{T(I,X)}catch{}I.ready=!0,Y()}});X.complete&&X.naturalWidth?k():X.addEventListener("load",k,{once:!0})}function T(I,X){let k=mc(X);y(I.tape.label,Vs(_c(X,I.item,k),396)),y(I.tape.spine,Vs(xc(I.item,k),830));let le=null;try{le=cc(X)}catch{}uc(I.item.project,I.item.index,le).forEach((se,Se)=>{let oe=I.tape.stickers[Se];if(!oe)return;let Pe=Ga(Vs(se,256),4);oe.material.map=Pe,oe.material.emissiveMap=Pe,oe.material.needsUpdate=!0});let me=document.createElement("canvas");me.width=me.height=6;let be=me.getContext("2d",{willReadFrequently:!0});be.drawImage(X,0,0,6,6);let J=be.getImageData(0,0,6,6).data,de=0,w=0,ge=0;for(let se=0;se<J.length;se+=4)de+=J[se],w+=J[se+1],ge+=J[se+2];I.tint.setRGB(de/9180,w/9180,ge/9180).convertSRGBToLinear().lerp(v,.3)}function z(I,X){let k=Sc.rest,le=Sc.lift,me=Fs(kt(I.h,0,1)),be=ft(k.x,le.x,me)*p,J=ft(k.y,le.y,me)*d,de=ft(k.rz,le.rz,me)+I.seed.rz*.03,w=ft(k.rx,le.rx,me)+I.seed.rx*.05-I.py*.2*me,ge=ft(k.ry,le.ry,me)+I.seed.ry*.07+I.px*.28*me,se=1-(1-kt(I.p,0,1))**3;be+=(1-se)*4.5,J-=(1-se)*9.5,de+=(1-se)*.22;let Se=I.tape.group;Se.position.set(be,J,ft(k.z,le.z,me)),Se.scale.setScalar(ft(k.s,le.s,me)),Se.rotation.set(w,ge,de),I.tape.reels[0].hub.rotation.z=-I.spin,I.tape.reels[1].hub.rotation.z=-I.spin*.82,g.position.set(be+1.1+me*.9,J-1.5-me*1.1,0),g.scale.set(Ri*Se.scale.x*(1.2+me*.12),Ci*Se.scale.x*(1.5+me*.2),1),g.rotation.set(0,0,de),g.material.opacity=(.78-me*.2)*se}let R=220,P=0,D=0,M=-1e9,E=0,C=0,U=!0,O=!0,H=!1,ae=!1,j=null,ce=0,te=0,_e=0,Te=0,ze=(I,X)=>{let{box:k}=I,le=k.left,me=D-(k.top-X+k.height);a.setViewport(le,me,k.width,k.height),a.setScissor(le,me,k.width,k.height),a.clear(),!(!I.shown||!I.ready)&&(j&&j!==I.tape.group&&(j.visible=!1),j=I.tape.group,j.visible=!0,c.color.copy(I.tint),a.render(l,u))};function Ee(I){if(E=0,!O||!H||!ae||document.hidden)return;let X=Math.min(250,I-(C||I));C=I;let k=t.getBoundingClientRect(),le=e.getBoundingClientRect(),me=e.clientWidth,be=e.clientHeight,J=f.map(q=>q.item.card.hidden?null:q.item.media.getBoundingClientRect()),de=k.top-le.top,w=k.bottom-le.top,ge=Math.max(1,Math.min(Math.round(k.height+R*2),Math.ceil(be)));(me!==P||ge!==D)&&(P=me,D=ge,a.setSize(P,D,!1),r.style.width=`${P}px`,r.style.height=`${D}px`,U=!0);let se=Math.max(0,Math.floor(be-D));if(de<M+R*.35||w>M+D-R*.35||M>se){let q=kt(Math.round(de-R),0,se);q!==M&&(M=q,r.style.transform=`translate3d(0,${M}px,0)`,U=!0)}let Se=!1,oe=!1,Pe=M;if(f.forEach((q,W)=>{let b=J[W];if(q.box=null,!b||!b.width)return;let x=b.top-le.top,A=b.bottom-le.top;if(A>de-900&&x<w+900&&_(q),A<Pe||x>Pe+D)return;q.box={left:b.left-le.left,top:x,width:b.width,height:b.height},q.ready&&!q.shown&&A>de+b.height*.2&&x<w-b.height*.2&&(q.shown=!0,q.born=I,q.p=0,q.dirty=!0),q.shown&&q.p<1&&(q.p=Math.min(1,(I-q.born)/620),q.dirty=!0),(Math.abs(q.hover-q.h)>.001||Math.abs(q.tx-q.px)>.001||Math.abs(q.ty-q.py)>.001||q.shown&&q.p<1)&&(q.dirty=!0,oe=!0);let re=q.h+(q.hover-q.h)*(1-Math.exp(-X/150));q.h=Math.abs(re-q.hover)<.001?q.hover:re,q.px+=(q.tx-q.px)*(1-Math.exp(-X/170)),q.py+=(q.ty-q.py)*(1-Math.exp(-X/170)),q.h>.02&&(q.spin+=X*.0034*q.h,q.dirty=!0),(q.dirty||U)&&(Se||(Se=q.dirty))}),Se&&!oe&&!U&&I-ce<30){Y();return}ce=I,a.setScissorTest(!1),U&&a.clear(),a.setScissorTest(!0),f.forEach(q=>{!q.box||!(U||q.dirty)||(q.ready&&q.shown&&z(q,I),ze(q,Pe),q.dirty=!1)}),a.setScissorTest(!1),U=!1,Se?(te++,_e+=Math.min(X,50),te>=40&&(Te=_e/te>26?Te+1:0,te=0,_e=0,Te>=2&&!navigator.webdriver&&(Te=0,ie())),Y()):(te=0,_e=0,C=0)}function Y(){!E&&O&&H&&ae&&!document.hidden&&(E=requestAnimationFrame(Ee))}function ie(){s<=.8||(s=Math.max(.8,s-.2),a.setPixelRatio(s),P=0,U=!0)}return f.forEach(I=>{let{link:X,media:k}=I.item,le=me=>{let be=k.getBoundingClientRect();be.width&&(I.tx=kt((me.clientX-be.left)/be.width-.5,-.6,.6),I.ty=kt((me.clientY-be.top)/be.height-.5,-.6,.6),Y())};X.addEventListener("pointerenter",me=>{I.hover=1,le(me)}),X.addEventListener("pointermove",le),X.addEventListener("pointerleave",()=>{I.hover=0,I.tx=0,I.ty=0,Y()}),X.addEventListener("focus",()=>{X.matches(":focus-visible")&&(I.hover=1,Y())}),X.addEventListener("blur",()=>{I.hover=0,Y()})}),t.addEventListener("scroll",Y,{passive:!0}),new ResizeObserver(()=>{U=!0,Y()}).observe(e),new ResizeObserver(()=>{U=!0,Y()}).observe(t),new IntersectionObserver(([I])=>{H=I.isIntersecting,H&&(U=!0,Y())},{root:t,rootMargin:`${R}px 0px`}).observe(e),document.addEventListener("visibilitychange",()=>{U=!0,Y()}),addEventListener("pageshow",()=>{U=!0,Y()}),f.forEach(I=>{I.tape.group.visible=!0}),a.compileAsync(l,u).catch(()=>{}).then(()=>{f.forEach(I=>{I.tape.group.visible=!1}),ae=!0,U=!0,Y()}),{wake(){U=!0,Y()},show(I){O=I,r.style.display=I?"":"none",I&&(U=!0,Y())}}}export{Dv as default,dc as grainTexture,Jo as makeTape,Fv as startShelf,Xo as studioEnv,Yo as tapeParts};
