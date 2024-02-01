// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return e!=e}var r=Math.sqrt,n=Math.floor;function t(e){return n(e)===e}function i(e){return Math.abs(e)}var a=Math.ceil;function o(e){return e<0?a(e):n(e)}var u=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,c=1023;function s(e){return e===f||e===u}var l=2147483647,p="function"==typeof Object.defineProperty?Object.defineProperty:null,v=Object.defineProperty;function y(e){return"number"==typeof e}function g(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function d(e,r,n){var t=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=n?e+g(i):g(i)+e,t&&(e="-"+e)),e}var h=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function b(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!y(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=d(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),t||e.precision?e.precision&&(n=d(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===w.call(e.specifier)?w.call(n):h.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function m(e){return"string"==typeof e}var A=Math.abs,N=String.prototype.toLowerCase,_=String.prototype.toUpperCase,E=String.prototype.replace,x=/e\+(\d)$/,U=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,S=/\.0$/,F=/\.0*e/,j=/(\..*[^0])0*e/;function T(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!y(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":A(t)<1e-4?((r=e.precision)>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=E.call(n,j,"$1e"),n=E.call(n,F,"e"),n=E.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=E.call(n,x,"e+0$1"),n=E.call(n,U,"e-0$1"),e.alternate&&(n=E.call(n,k,"$1."),n=E.call(n,I,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===_.call(e.specifier)?_.call(n):N.call(n)}function O(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function V(e,r,n){var t=r-e.length;return t<0?e:e=n?e+O(t):O(t)+e}var $=String.fromCharCode,G=isNaN,H=Array.isArray;function W(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function C(e){var r,n,t,i,a,o,u,f,c;if(!H(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,f=0;f<e.length;f++)if(m(t=e[f]))o+=t;else{if(r=void 0!==t.precision,!(t=W(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,G(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,G(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=b(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!G(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=G(a)?String(t.arg):$(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=T(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=d(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=V(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function M(e){var r,n,t,i;for(n=[],i=0,t=L.exec(e);t;)(r=e.slice(i,L.lastIndex-t[0].length)).length&&n.push(r),n.push(P(t)),i=L.lastIndex,t=L.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function R(e){return"string"==typeof e}function Z(e){var r,n,t;if(!R(e))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=M(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return C.apply(null,n)}var X=Object.prototype,Y=X.toString,q=X.__defineGetter__,z=X.__defineSetter__,B=X.__lookupGetter__,D=X.__lookupSetter__,J=function(){try{return p({},"x",{}),!0}catch(e){return!1}}()?v:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Y.call(e))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===Y.call(n))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(B.call(e,r)||D.call(e,r)?(t=e.__proto__,e.__proto__=X,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&q&&q.call(e,r,n.get),o&&z&&z.call(e,r,n.set),e};function K(e,r,n){J(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Q,ee="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),re=Object.prototype.toString,ne=Object.prototype.hasOwnProperty,te="function"==typeof Symbol?Symbol:void 0,ie="function"==typeof te?te.toStringTag:"",ae=ee&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,i,a;if(null==e)return re.call(e);n=e[ie],a=ie,r=null!=(i=e)&&ne.call(i,a);try{e[ie]=void 0}catch(r){return re.call(e)}return t=re.call(e),r?e[ie]=n:delete e[ie],t}:function(e){return re.call(e)},oe="function"==typeof Uint32Array,ue="function"==typeof Uint32Array?Uint32Array:null,fe="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var e,r,n;if("function"!=typeof ue)return!1;try{r=new ue(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(oe&&n instanceof Uint32Array||"[object Uint32Array]"===ae(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")};var ce,se=Q,le="function"==typeof Float64Array,pe="function"==typeof Float64Array?Float64Array:null,ve="function"==typeof Float64Array?Float64Array:void 0;ce=function(){var e,r,n;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,NaN]),n=r,e=(le&&n instanceof Float64Array||"[object Float64Array]"===ae(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ve:function(){throw new Error("not implemented")};var ye,ge=ce,de="function"==typeof Uint8Array,he="function"==typeof Uint8Array?Uint8Array:null,we="function"==typeof Uint8Array?Uint8Array:void 0;ye=function(){var e,r,n;if("function"!=typeof he)return!1;try{r=new he(r=[1,3.14,-3.14,256,257]),n=r,e=(de&&n instanceof Uint8Array||"[object Uint8Array]"===ae(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?we:function(){throw new Error("not implemented")};var be,me=ye,Ae="function"==typeof Uint16Array,Ne="function"==typeof Uint16Array?Uint16Array:null,_e="function"==typeof Uint16Array?Uint16Array:void 0;be=function(){var e,r,n;if("function"!=typeof Ne)return!1;try{r=new Ne(r=[1,3.14,-3.14,65536,65537]),n=r,e=(Ae&&n instanceof Uint16Array||"[object Uint16Array]"===ae(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?_e:function(){throw new Error("not implemented")};var Ee,xe={uint16:be,uint8:me};(Ee=new xe.uint16(1))[0]=4660;var Ue,ke,Ie=52===new xe.uint8(Ee.buffer)[0];!0===Ie?(Ue=1,ke=0):(Ue=0,ke=1);var Se={HIGH:Ue,LOW:ke},Fe=new ge(1),je=new se(Fe.buffer),Te=Se.HIGH,Oe=Se.LOW;function Ve(e,r,n,t){return Fe[0]=e,r[t]=je[Te],r[t+n]=je[Oe],r}function $e(e){return Ve(e,[0,0],1,0)}K($e,"assign",Ve);var Ge,He,We=!0===Ie?1:0,Ce=new ge(1),Le=new se(Ce.buffer);function Pe(e){return Ce[0]=e,Le[We]}!0===Ie?(Ge=1,He=0):(Ge=0,He=1);var Me={HIGH:Ge,LOW:He},Re=new ge(1),Ze=new se(Re.buffer),Xe=Me.HIGH,Ye=Me.LOW;function qe(e,r){return Ze[Xe]=e,Ze[Ye]=r,Re[0]}var ze=[0,0];function Be(e,r){var n,t;return $e.assign(e,ze,1,0),n=ze[0],n&=l,t=Pe(r),qe(n|=t&=2147483648,ze[1])}function De(r,n,t,a){return e(r)||s(r)?(n[a]=r,n[a+t]=0,n):0!==r&&i(r)<22250738585072014e-324?(n[a]=4503599627370496*r,n[a+t]=-52,n):(n[a]=r,n[a+t]=0,n)}K((function(e){return De(e,[0,0],1,0)}),"assign",De);var Je=2146435072,Ke=[0,0],Qe=[0,0];function er(r,n){var t,i;return 0===n||0===r||e(r)||s(r)?r:(De(r,Ke,1,0),n+=Ke[1],n+=function(e){var r=Pe(e);return(r=(r&Je)>>>20)-c|0}(r=Ke[0]),n<-1074?Be(0,r):n>1023?r<0?u:f:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,$e.assign(r,Qe,1,0),t=Qe[0],t&=2148532223,i*qe(t|=n+c<<20,Qe[1])))}var rr=1.4426950408889634,nr=1/(1<<28);function tr(r){var n;return e(r)||r===f?r:r===u?0:r>709.782712893384?f:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<nr?1+r:function(e,r,n){var t,i,a,o;return er(1-(r-(t=e-r)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-e),n)}(r-.6931471803691238*(n=o(r<0?rr*r-.5:rr*r+.5)),1.9082149292705877e-10*n,n)}function ir(e,r){var n,t,i,a;return i=(a=e*e)*a,t=a*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(a),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-e*r))}var ar=-.16666666666666632;function or(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(ar+i*n):e-(i*(.5*r-t*n)-r-t*ar)}var ur=1048575,fr=!0===Ie?0:1,cr=new ge(1),sr=new se(cr.buffer);function lr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yr=16777216,gr=5.960464477539063e-8,dr=lr(20),hr=lr(20),wr=lr(20),br=lr(20);function mr(e,r,t,i,a,o,u,f,c){var s,l,p,v,y,g,d,h,w;for(v=o,w=i[t],h=t,y=0;h>0;y++)l=gr*w|0,br[y]=w-yr*l|0,w=i[h-1]+l,h-=1;if(w=er(w,a),w-=8*n(.125*w),w-=d=0|w,p=0,a>0?(d+=y=br[t-1]>>24-a,br[t-1]-=y<<24-a,p=br[t-1]>>23-a):0===a?p=br[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,y=0;y<t;y++)h=br[y],0===s?0!==h&&(s=1,br[y]=16777216-h):br[y]=16777215-h;if(a>0)switch(a){case 1:br[t-1]&=8388607;break;case 2:br[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=er(1,a)))}if(0===w){for(h=0,y=t-1;y>=o;y--)h|=br[y];if(0===h){for(g=1;0===br[o-g];g++);for(y=t+1;y<=t+g;y++){for(c[f+y]=pr[u+y],l=0,h=0;h<=f;h++)l+=e[h]*c[f+(y-h)];i[y]=l}return mr(e,r,t+=g,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===br[t];)t-=1,a-=24;else(w=er(w,-a))>=yr?(l=gr*w|0,br[t]=w-yr*l|0,a+=24,br[t+=1]=l):br[t]=0|w;for(l=er(1,a),y=t;y>=0;y--)i[y]=l*br[y],l*=gr;for(y=t;y>=0;y--){for(l=0,g=0;g<=v&&g<=t-y;g++)l+=vr[g]*i[y+g];wr[t-y]=l}for(l=0,y=t;y>=0;y--)l+=wr[y];for(r[0]=0===p?l:-l,l=wr[0]-l,y=1;y<=t;y++)l+=wr[y];return r[1]=0===p?l:-l,7&d}function Ar(e,r,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)dr[f]=c<0?0:pr[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=e[c]*dr[o+(f-c)];hr[f]=i}return mr(e,r,4,hr,u,4,a,o,dr)}var Nr=Math.round;function _r(e,r,n){var t,i,a,o,u;return a=e-1.5707963267341256*(t=Nr(.6366197723675814*e)),o=6077100506506192e-26*t,u=r>>20|0,n[0]=a-o,u-(Pe(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(Pe(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Er=1.5707963267341256,xr=6077100506506192e-26,Ur=2*xr,kr=3*xr,Ir=4*xr,Sr=[0,0,0],Fr=[0,0];function jr(e,r){var n,t,i,a,o,u,f;if((i=Pe(e)&l|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(i&ur)?_r(e,i,r):i<=1073928572?e>0?(f=e-Er,r[0]=f-xr,r[1]=f-r[0]-xr,1):(f=e+Er,r[0]=f+xr,r[1]=f-r[0]+xr,-1):e>0?(f=e-2*Er,r[0]=f-Ur,r[1]=f-r[0]-Ur,2):(f=e+2*Er,r[0]=f+Ur,r[1]=f-r[0]+Ur,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?_r(e,i,r):e>0?(f=e-3*Er,r[0]=f-kr,r[1]=f-r[0]-kr,3):(f=e+3*Er,r[0]=f+kr,r[1]=f-r[0]+kr,-3):1075388923===i?_r(e,i,r):e>0?(f=e-4*Er,r[0]=f-Ir,r[1]=f-r[0]-Ir,4):(f=e+4*Er,r[0]=f+Ir,r[1]=f-r[0]+Ir,-4);if(i<1094263291)return _r(e,i,r);if(i>=Je)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return cr[0]=e,sr[fr]}(e),f=qe(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Sr[o]=0|f,f=16777216*(f-Sr[o]);for(Sr[2]=f,a=3;0===Sr[a-1];)a-=1;return u=Ar(Sr,Fr,t,a),e<0?(r[0]=-Fr[0],r[1]=-Fr[1],-u):(r[0]=Fr[0],r[1]=Fr[1],u)}var Tr=[0,0];function Or(e){var r;if(r=Pe(e),(r&=l)<=1072243195)return r<1045430272?e:or(e,0);if(r>=Je)return NaN;switch(3&jr(e,Tr)){case 0:return or(Tr[0],Tr[1]);case 1:return ir(Tr[0],Tr[1]);case 2:return-or(Tr[0],Tr[1]);default:return-ir(Tr[0],Tr[1])}}var Vr=3.141592653589793;function $r(e){return t(e/2)}function Gr(e){return $r(e>0?e-1:e+1)}var Hr=!0===Ie?0:1,Wr=new ge(1),Cr=new se(Wr.buffer);function Lr(e,r){return Wr[0]=e,Cr[Hr]=r>>>0,Wr[0]}function Pr(e){return 0|e}var Mr=!0===Ie?1:0,Rr=new ge(1),Zr=new se(Rr.buffer);function Xr(e,r){return Rr[0]=e,Zr[Mr]=r>>>0,Rr[0]}var Yr=1048576,qr=[1,1.5],zr=[0,.5849624872207642],Br=[0,1.350039202129749e-8],Dr=1048576,Jr=1083179008,Kr=1e300,Qr=1e-300,en=[0,0],rn=[0,0];function nn(n,a){var o,p,v,y,g,d,h,w,b,m,A,N,_,E;if(e(n)||e(a))return NaN;if($e.assign(a,en,1,0),g=en[0],0===en[1]){if(0===a)return 1;if(1===a)return n;if(-1===a)return 1/n;if(.5===a)return r(n);if(-.5===a)return 1/r(n);if(2===a)return n*n;if(3===a)return n*n*n;if(4===a)return(n*=n)*n;if(s(a))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:i(e)<1==(r===f)?0:f}(n,a)}if($e.assign(n,en,1,0),y=en[0],0===en[1]){if(0===y)return function(e,r){return r===u?f:r===f?0:r>0?Gr(r)?e:0:Gr(r)?Be(f,e):f}(n,a);if(1===n)return 1;if(-1===n&&Gr(a))return-1;if(s(n))return n===u?nn(-0,-a):a<0?0:f}if(n<0&&!1===t(a))return(n-n)/(n-n);if(v=i(n),o=y&l|0,p=g&l|0,h=g>>>31|0,d=(d=y>>>31|0)&&Gr(a)?-1:1,p>1105199104){if(p>1139802112)return function(e,r){return(Pe(e)&l)<=1072693247?r<0?1/0:0:r>0?1/0:0}(n,a);if(o<1072693247)return 1===h?d*Kr*Kr:d*Qr*Qr;if(o>1072693248)return 0===h?d*Kr*Kr:d*Qr*Qr;A=function(e,r){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=r-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Lr(t=(a=1.4426950216293335*i)+o,0))-a),e[0]=t,e[1]=n,e}(rn,v)}else A=function(e,r,n){var t,i,a,o,u,f,s,l,p,v,y,g,d,h,w,b,m,A,N,_,E;return A=0,n<Yr&&(A-=53,n=Pe(r*=9007199254740992)),A+=(n>>20)-c|0,n=1072693248|(N=1048575&n|0),N<=235662?_=0:N<767610?_=1:(_=0,A+=1,n-=Yr),o=Lr(i=(b=(r=Xr(r,n))-(s=qr[_]))*(m=1/(r+s)),0),t=524288+(n>>1|536870912),f=Xr(0,t+=_<<18),w=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Lr(f=3+(a=o*o)+(w+=(u=m*(b-o*f-o*(r-(f-s))))*(o+i)),0),d=(y=-7.028461650952758e-9*(p=Lr(p=(b=o*f)+(m=u*f+(w-(f-3-a))*i),0))+.9617966939259756*(m-(p-b))+Br[_])-((g=Lr(g=(v=.9617967009544373*p)+y+(l=zr[_])+(h=A),0))-h-l-v),e[0]=g,e[1]=d,e}(rn,v,o);if(N=(m=(a-(w=Lr(a,0)))*A[0]+a*A[1])+(b=w*A[0]),$e.assign(N,en,1,0),_=Pr(en[0]),E=Pr(en[1]),_>=Jr){if(0!=(_-Jr|E))return d*Kr*Kr;if(m+8008566259537294e-32>N-b)return d*Kr*Kr}else if((_&l)>=1083231232){if(0!=(_-3230714880|E))return d*Qr*Qr;if(m<=N-b)return d*Qr*Qr}return N=function(e,r,n){var t,i,a,o,u,f,s,p,v,y;return v=((p=e&l|0)>>20)-c|0,s=0,p>1071644672&&(i=Xr(0,((s=e+(Dr>>v+1)>>>0)&~(ur>>(v=((s&l)>>20)-c|0)))>>>0),s=(s&ur|Dr)>>20-v>>>0,e<0&&(s=-s),r-=i),e=Pr(e=Pe(f=1-((f=(a=.6931471824645996*(i=Lr(i=n+r,0)))+(o=.6931471805599453*(n-(i-r))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(e+=s<<20>>>0)>>20<=0?er(f,s):Xr(f,e)}(_,b,m),d*N}function tn(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=tr(e),2.5066282746310007*(n=e>143.01608?(t=nn(e,.5*e-.25))*(t/n):nn(e,e-.5)/n)*r}function an(e,r){return r/((1+.5772156649015329*e)*e)}function on(r){var a,o,c,s;if(t(r)&&r<0||r===u||e(r))return NaN;if(0===r)return function(e){return 0===e&&1/e===u}(r)?u:f;if(r>171.61447887182297)return f;if(r<-170.5674972726612)return 0;if((o=i(r))>33)return r>=0?tn(r):(a=0==(1&(c=n(o)))?-1:1,(s=o-c)>.5&&(s=o-(c+=1)),s=o*Or(Vr*s),a*Vr/(i(s)*tn(o)));for(s=1;r>=3;)s*=r-=1;for(;r<0;){if(r>-1e-9)return an(r,s);s/=r,r+=1}for(;r<2;){if(r<1e-9)return an(r,s);s/=r,r+=1}return 2===r?s:s*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(r-=2)}var un=.6931471803691238,fn=1.9082149292705877e-10,cn=1048575;function sn(r){var n,t,i,a,o,f,s,l,p,v,y,g;return 0===r?u:e(r)||r<0?NaN:(o=0,(t=Pe(r))<1048576&&(o-=54,t=Pe(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-c|0,o+=(l=614244+(t&=cn)&1048576|0)>>20|0,s=(r=Xr(r,t|1072693248^l))-1,(cn&2+t)<3?0===s?0===o?0:o*un+o*fn:(f=s*s*(.5-.3333333333333333*s),0===o?s-f:o*un-(f-o*fn-s)):(l=t-398458|0,p=440401-t|0,a=(y=(g=(v=s/(2+s))*v)*g)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(y),i=g*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(y),f=i+a,(l|=p)>0?(n=.5*s*s,0===o?s-(n-v*(n+f)):o*un-(n-(v*(n+f)+o*fn)-s)):0===o?s-v*(s-f):o*un-(v*(s-f)-o*fn-s))))}var ln=[0,0];function pn(e){var r;if(r=Pe(e),(r&=2147483647)<=1072243195)return r<1044381696?1:ir(e,0);if(r>=2146435072)return NaN;switch(3&jr(e,ln)){case 0:return ir(ln[0],ln[1]);case 1:return-or(ln[0],ln[1]);case 2:return-ir(ln[0],ln[1]);default:return or(ln[0],ln[1])}}function vn(r){var n,t;return e(r)||s(r)?NaN:0===(n=i(t=r%2))||1===n?Be(0,t):n<.25?Or(Vr*t):n<.75?Be(pn(Vr*(n=.5-n)),t):n<1.25?(t=Be(1,t)-t,Or(Vr*t)):n<1.75?-Be(pn(Vr*(n-=1.5)),t):(t-=Be(2,t),Or(Vr*t))}var yn=1.4616321449683622,gn=1.4616321449683622,dn=6.283185307179586,hn=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],wn=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],bn=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],mn=12*r(6)*function r(a){var c,l,p,v,y,g,d,h,w;if(e(a))return NaN;if(1===a)return NaN;if(a>=56)return 1;if(t(a)&&(v=0|a)===a){if(!(v<0))return 0==(1&v)?wn[v/2]:hn[(v-3)/2];if(0==(1&(p=0|-v)))return 0;if((g=(p+1)/2|0)<=129)return-bn[g]/(p+1)}return i(a)<1.4901161193847656e-8?-.5-.9189385332046728*a:(l=1-a,a<0?n(a/2)===a/2?0:(c=a,a=l,l=c,a>170?(c=2*vn(.5*l)*r(a),y=function(r){var n,t,a,u,c,l,p,v,y,g,d,h,w;if(e(r)||s(r))return r;if(0===r)return f;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-sn(r);if(n){if(r>=4503599627370496)return f;if(0===(y=vn(r)))return f;t=sn(Vr/i(y*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-sn(r),r>=yn-1+.27?(d=1-r,a=0):r>=yn-1-.27?(d=r-(gn-1),a=1):(d=r,a=2)):(w=0,r>=yn+.27?(d=2-r,a=0):r>=yn-.27?(d=r-gn,a=1):(d=r-1,a=2)),a){case 0:l=.07721566490153287+(h=d*d)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(h),c=h*(.3224670334241136+h*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(h)),w+=(p=d*l+c)-.5*d;break;case 1:l=.48383612272381005+(g=(h=d*d)*d)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(g),c=g*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(g)-.1475877229945939,u=.06462494023913339+g*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(g),w+=(p=h*l-(-3638676997039505e-33-g*(c+d*u)))-.12148629053584961;break;case 2:l=d*(d*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(d)-.07721566490153287),c=1+d*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(d),w+=-.5*d+l/c}else if(r<8)switch(p=(d=r-(a=o(r)))*(d*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(d)-.07721566490153287),v=1+d*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(d),w=.5*d+p/v,h=1,a){case 7:h*=d+6;case 6:h*=d+5;case 5:h*=d+4;case 4:h*=d+3;case 3:w+=sn(h*=d+2)}else r<0x400000000000000?(y=sn(r),g=.4189385332046727+(h=1/r)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(d=h*h),w=(r-.5)*(y-1)+g):w=r*(sn(r)-1);return n&&(w=t-w),w}(a),(y-=a*sn(dn))>709?c<0?u:f:c*tr(y)):2*vn(.5*l)*nn(dn,-a)*on(a)*r(a)):a<1?(c=0===(d=l)?.2433929443359375:((d<0?-d:d)<=1?(h=.2433929443359375+d*(d*(.055761621477604675+d*(d*(.0004515345286457964+-9332412703570615e-21*d)-.003209124988790859))-.4909247051635357),w=1+d*(d*(.04196762233099861+d*(d*(.00024978985622317937+-10185578841856403e-21*d)-.00413421406552171))-.27996033431034445)):(h=(d=1/d)*(.0004515345286457964+d*(d*(.055761621477604675+d*(.2433929443359375*d-.4909247051635357))-.003209124988790859))-9332412703570615e-21,w=d*(.00024978985622317937+d*(d*(.04196762233099861+d*(1*d-.27996033431034445))-.00413421406552171))-10185578841856403e-21),h/w),c-=1.2433929443359375,c+=l,c/=l):a<=2?(c=1/(l=-l))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(l):a<=4?(c=.6986598968505859+1/-l)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(a-2):a<=7?(c=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(a-4),1+tr(c)):a<15?(c=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(a-7),1+tr(c)):a<36?(c=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(a-15),1+tr(c)):1+nn(2,-a))}(3)/(Vr*Vr*Vr);return function(r,n){return e(r)||e(n)||n<=0?NaN:mn}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).skewness=r();
//# sourceMappingURL=browser.js.map
