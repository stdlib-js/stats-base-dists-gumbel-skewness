// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){return e!=e}var r=Math.sqrt,n=Math.floor;function t(e){return n(e)===e}function u(e){return Math.abs(e)}var f=Math.ceil;function i(e){return e<0?f(e):n(e)}var o=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;function c(e){return e===a||e===o}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var w=v&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,u,f;if(null==e)return y.call(e);n=e[s],f=s,r=null!=(u=e)&&l.call(u,f);try{e[s]=void 0}catch(r){return y.call(e)}return t=y.call(e),r?e[s]=n:delete e[s],t}:function(e){return y.call(e)},p="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var b,A="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var e,r,n;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(p&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?A:function(){throw new Error("not implemented")};var h=b,U="function"==typeof Float64Array;var m="function"==typeof Float64Array?Float64Array:null;var d,I="function"==typeof Float64Array?Float64Array:void 0;d=function(){var e,r,n;if("function"!=typeof m)return!1;try{r=new m([1,3.14,-3.14,NaN]),n=r,e=(U&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?I:function(){throw new Error("not implemented")};var F=d,S="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var O,g="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var e,r,n;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,256,257]),n=r,e=(S&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?g:function(){throw new Error("not implemented")};var E=O,j="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var T,G="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var e,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,65536,65537]),n=r,e=(j&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?G:function(){throw new Error("not implemented")};var M,L={uint16:T,uint8:E};(M=new L.uint16(1))[0]=4660;var W,k,P=52===new L.uint8(M.buffer)[0];!0===P?(W=1,k=0):(W=0,k=1);var V={HIGH:W,LOW:k},Y=new F(1),_=new h(Y.buffer),q=V.HIGH,z=V.LOW;function B(e,r){return Y[0]=r,e[0]=_[q],e[1]=_[z],e}function C(e,r){return 1===arguments.length?B([0,0],e):B(e,r)}var D,J,K=!0===P?1:0,Q=new F(1),R=new h(Q.buffer);function X(e){return Q[0]=e,R[K]}!0===P?(D=1,J=0):(D=0,J=1);var Z={HIGH:D,LOW:J},$=new F(1),ee=new h($.buffer),re=Z.HIGH,ne=Z.LOW;function te(e,r){return ee[re]=e,ee[ne]=r,$[0]}var ue=[0,0];function fe(e,r){var n,t;return C(ue,e),n=ue[0],n&=2147483647,t=X(r),te(n|=t&=2147483648,ue[1])}function ie(r,n){return e(n)||c(n)?(r[0]=n,r[1]=0,r):0!==n&&u(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var oe=[0,0],ae=[0,0];function ce(r,n){var t,u;return 0===n||0===r||e(r)||c(r)?r:(function(e,r){1===arguments.length?ie([0,0],e):ie(e,r)}(oe,r),n+=oe[1],n+=function(e){var r=X(e);return(r=(2146435072&r)>>>20)-1023|0}(r=oe[0]),n<-1074?fe(0,r):n>1023?r<0?o:a:(n<=-1023?(n+=52,u=2220446049250313e-31):u=1,C(ae,r),t=ae[0],t&=2148532223,u*te(t|=n+1023<<20,ae[1])))}function ve(r){var n;return e(r)||r===a?r:r===o?0:r>709.782712893384?a:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(e,r,n){var t,u,f,i;return ce(1-(r-(t=e-r)*(f=t-(u=t*t)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-e),n)}(r-.6931471803691238*(n=i(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function ye(e,r){var n,t,u,f;return u=(f=e*e)*f,t=f*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(f),t+=u*u*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(f),(u=1-(n=.5*f))+(1-u-n+(f*t-e*r))}var le=-.16666666666666632;function se(e,r){var n,t,u;return n=.00833333333332249+(u=e*e)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*e,0===r?e+t*(le+u*n):e-(u*(.5*r-t*n)-r-t*le)}var we=!0===P?0:1,pe=new F(1),Ne=new h(pe.buffer);function be(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Ae=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],he=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ue=5.960464477539063e-8,me=be(20),de=be(20),Ie=be(20),Fe=be(20);function Se(e,r,t,u,f,i,o,a,c){var v,y,l,s,w,p,N,b,A;for(s=i,A=u[t],b=t,w=0;b>0;w++)y=Ue*A|0,Fe[w]=A-16777216*y|0,A=u[b-1]+y,b-=1;if(A=ce(A,f),A-=8*n(.125*A),A-=N=0|A,l=0,f>0?(N+=w=Fe[t-1]>>24-f,Fe[t-1]-=w<<24-f,l=Fe[t-1]>>23-f):0===f?l=Fe[t-1]>>23:A>=.5&&(l=2),l>0){for(N+=1,v=0,w=0;w<t;w++)b=Fe[w],0===v?0!==b&&(v=1,Fe[w]=16777216-b):Fe[w]=16777215-b;if(f>0)switch(f){case 1:Fe[t-1]&=8388607;break;case 2:Fe[t-1]&=4194303}2===l&&(A=1-A,0!==v&&(A-=ce(1,f)))}if(0===A){for(b=0,w=t-1;w>=i;w--)b|=Fe[w];if(0===b){for(p=1;0===Fe[i-p];p++);for(w=t+1;w<=t+p;w++){for(c[a+w]=Ae[o+w],y=0,b=0;b<=a;b++)y+=e[b]*c[a+(w-b)];u[w]=y}return Se(e,r,t+=p,u,f,i,o,a,c)}}if(0===A)for(t-=1,f-=24;0===Fe[t];)t-=1,f-=24;else(A=ce(A,-f))>=16777216?(y=Ue*A|0,Fe[t]=A-16777216*y|0,f+=24,Fe[t+=1]=y):Fe[t]=0|A;for(y=ce(1,f),w=t;w>=0;w--)u[w]=y*Fe[w],y*=Ue;for(w=t;w>=0;w--){for(y=0,p=0;p<=s&&p<=t-w;p++)y+=he[p]*u[w+p];Ie[t-w]=y}for(y=0,w=t;w>=0;w--)y+=Ie[w];for(r[0]=0===l?y:-y,y=Ie[0]-y,w=1;w<=t;w++)y+=Ie[w];return r[1]=0===l?y:-y,7&N}function He(e,r,n,t){var u,f,i,o,a,c,v;for(4,(f=(n-3)/24|0)<0&&(f=0),o=n-24*(f+1),c=f-(i=t-1),v=i+4,a=0;a<=v;a++)me[a]=c<0?0:Ae[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=e[c]*me[i+(a-c)];de[a]=u}return 4,Se(e,r,4,de,o,4,f,i,me)}var Oe=Math.round;function ge(e,r,n){var t,u,f,i,o;return f=e-1.5707963267341256*(t=Oe(.6366197723675814*e)),i=6077100506506192e-26*t,o=r>>20|0,n[0]=f-i,o-(X(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=f)-(f=u-(i=6077100506303966e-26*t))-i),n[0]=f-i,o-(X(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=f)-(f=u-(i=20222662487111665e-37*t))-i),n[0]=f-i)),n[1]=f-n[0]-i,t}var Ee=1.5707963267341256,je=6077100506506192e-26,xe=2*je,Te=4*je,Ge=[0,0,0],Me=[0,0];function Le(e,r){var n,t,u,f,i,o,a;if((u=2147483647&X(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?ge(e,u,r):u<=1073928572?e>0?(a=e-Ee,r[0]=a-je,r[1]=a-r[0]-je,1):(a=e+Ee,r[0]=a+je,r[1]=a-r[0]+je,-1):e>0?(a=e-2*Ee,r[0]=a-xe,r[1]=a-r[0]-xe,2):(a=e+2*Ee,r[0]=a+xe,r[1]=a-r[0]+xe,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?ge(e,u,r):e>0?(a=e-3*Ee,r[0]=a-1.8231301519518578e-10,r[1]=a-r[0]-1.8231301519518578e-10,3):(a=e+3*Ee,r[0]=a+1.8231301519518578e-10,r[1]=a-r[0]+1.8231301519518578e-10,-3):1075388923===u?ge(e,u,r):e>0?(a=e-4*Ee,r[0]=a-Te,r[1]=a-r[0]-Te,4):(a=e+4*Ee,r[0]=a+Te,r[1]=a-r[0]+Te,-4);if(u<1094263291)return ge(e,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return pe[0]=e,Ne[we]}(e),a=te(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)Ge[i]=0|a,a=16777216*(a-Ge[i]);for(Ge[2]=a,f=3;0===Ge[f-1];)f-=1;return o=He(Ge,Me,t,f),e<0?(r[0]=-Me[0],r[1]=-Me[1],-o):(r[0]=Me[0],r[1]=Me[1],o)}var We=[0,0];function ke(e){var r;if(r=X(e),(r&=2147483647)<=1072243195)return r<1045430272?e:se(e,0);if(r>=2146435072)return NaN;switch(3&Le(e,We)){case 0:return se(We[0],We[1]);case 1:return ye(We[0],We[1]);case 2:return-se(We[0],We[1]);default:return-ye(We[0],We[1])}}var Pe=3.141592653589793;function Ve(e){return t(e/2)}function Ye(e){return Ve(e>0?e-1:e+1)}var _e=!0===P?0:1,qe=new F(1),ze=new h(qe.buffer);function Be(e,r){return qe[0]=e,ze[_e]=r>>>0,qe[0]}function Ce(e){return 0|e}var De=!0===P?1:0,Je=new F(1),Ke=new h(Je.buffer);function Qe(e,r){return Je[0]=e,Ke[De]=r>>>0,Je[0]}var Re=[1,1.5],Xe=[0,.5849624872207642],Ze=[0,1.350039202129749e-8];var $e=1e300,er=[0,0],rr=[0,0];function nr(n,f){var i,v,y,l,s,w,p,N,b,A,h,U,m,d;if(e(n)||e(f))return NaN;if(C(er,f),s=er[0],0===er[1]){if(0===f)return 1;if(1===f)return n;if(-1===f)return 1/n;if(.5===f)return r(n);if(-.5===f)return 1/r(n);if(2===f)return n*n;if(3===f)return n*n*n;if(4===f)return(n*=n)*n;if(c(f))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:u(e)<1==(r===a)?0:a}(n,f)}if(C(er,n),l=er[0],0===er[1]){if(0===l)return function(e,r){return r===o?a:r===a?0:r>0?Ye(r)?e:0:Ye(r)?fe(a,e):a}(n,f);if(1===n)return 1;if(-1===n&&Ye(f))return-1;if(c(n))return n===o?nr(-0,-f):f<0?0:a}if(n<0&&!1===t(f))return(n-n)/(n-n);if(y=u(n),i=2147483647&l|0,v=2147483647&s|0,p=s>>>31|0,w=(w=l>>>31|0)&&Ye(f)?-1:1,v>1105199104){if(v>1139802112)return function(e,r){return(2147483647&X(e))<=1072693247?r<0?1/0:0:r>0?1/0:0}(n,f);if(i<1072693247)return 1===p?w*$e*$e:1e-300*w*1e-300;if(i>1072693248)return 0===p?w*$e*$e:1e-300*w*1e-300;h=function(e,r){var n,t,u,f,i,o;return n=(i=1.9259629911266175e-8*(u=r-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=Be(t=(f=1.4426950216293335*u)+i,0))-f),e[0]=t,e[1]=n,e}(rr,y)}else h=function(e,r,n){var t,u,f,i,o,a,c,v,y,l,s,w,p,N,b,A,h,U,m,d,I;return U=0,n<1048576&&(U-=53,n=X(r*=9007199254740992)),U+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?d=0:m<767610?d=1:(d=0,U+=1,n-=1048576),i=Be(u=(A=(r=Qe(r,n))-(c=Re[d]))*(h=1/(r+c)),0),t=524288+(n>>1|536870912),a=Qe(0,t+=d<<18),b=(f=u*u)*f*(0===(I=f)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=Be(a=3+(f=i*i)+(b+=(o=h*(A-i*a-i*(r-(a-c))))*(i+u)),0),p=(s=-7.028461650952758e-9*(y=Be(y=(A=i*a)+(h=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(h-(y-A))+Ze[d])-((w=Be(w=(l=.9617967009544373*y)+s+(v=Xe[d])+(N=U),0))-N-v-l),e[0]=w,e[1]=p,e}(rr,y,i);if(A=(f-(N=Be(f,0)))*h[0]+f*h[1],b=N*h[0],C(er,U=A+b),m=Ce(er[0]),d=Ce(er[1]),m>=1083179008){if(0!=(m-1083179008|d))return w*$e*$e;if(A+8008566259537294e-32>U-b)return w*$e*$e}else if((2147483647&m)>=1083231232){if(0!=(m-3230714880|d))return 1e-300*w*1e-300;if(A<=U-b)return 1e-300*w*1e-300}return U=function(e,r,n){var t,u,f,i,o,a,c,v,y,l,s;return l=((y=2147483647&e|0)>>20)-1023|0,v=0,y>1071644672&&(t=((v=e+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,e<0&&(v=-v),r-=f=Qe(0,t)),e=Ce(e=X(c=1-((c=(i=.6931471824645996*(f=Be(f=n+r,0)))+(o=.6931471805599453*(n-(f-r))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(s=f)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(e+=v<<20>>>0)>>20<=0?ce(c,v):Qe(c,e)}(m,b,A),w*U}function tr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=ve(e),2.5066282746310007*(n=e>143.01608?(t=nr(e,.5*e-.25))*(t/n):nr(e,e-.5)/n)*r}function ur(e,r){return r/((1+.5772156649015329*e)*e)}function fr(r){var f,i,c,v;if(t(r)&&r<0||r===o||e(r))return NaN;if(0===r)return function(e){return 0===e&&1/e===o}(r)?o:a;if(r>171.61447887182297)return a;if(r<-170.5674972726612)return 0;if((i=u(r))>33)return r>=0?tr(r):(f=0==(1&(c=n(i)))?-1:1,(v=i-c)>.5&&(v=i-(c+=1)),v=i*ke(Pe*v),f*Pe/(u(v)*tr(i)));for(v=1;r>=3;)v*=r-=1;for(;r<0;){if(r>-1e-9)return ur(r,v);v/=r,r+=1}for(;r<2;){if(r<1e-9)return ur(r,v);v/=r,r+=1}return 2===r?v:v*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(r-=2)}var ir=.6931471803691238,or=1.9082149292705877e-10;function ar(r){var n,t,u,f,i,a,c,v,y,l,s,w;return 0===r?o:e(r)||r<0?NaN:(i=0,(t=X(r))<1048576&&(i-=54,t=X(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(v=(t&=1048575)+614244&1048576|0)>>20|0,c=(r=Qe(r,t|1072693248^v))-1,(1048575&2+t)<3?0===c?0===i?0:i*ir+i*or:(a=c*c*(.5-.3333333333333333*c),0===i?c-a:i*ir-(a-i*or-c)):(v=t-398458|0,y=440401-t|0,f=(s=(w=(l=c/(2+c))*l)*w)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(s),u=w*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(s),a=u+f,(v|=y)>0?(n=.5*c*c,0===i?c-(n-l*(n+a)):i*ir-(n-(l*(n+a)+i*or)-c)):0===i?c-l*(c-a):i*ir-(l*(c-a)-i*or-c))))}var cr=[0,0];function vr(e){var r;if(r=X(e),(r&=2147483647)<=1072243195)return r<1044381696?1:ye(e,0);if(r>=2146435072)return NaN;switch(3&Le(e,cr)){case 0:return ye(cr[0],cr[1]);case 1:return-se(cr[0],cr[1]);case 2:return-ye(cr[0],cr[1]);default:return se(cr[0],cr[1])}}function yr(r){var n,t;return e(r)||c(r)?NaN:0===(n=u(t=r%2))||1===n?fe(0,t):n<.25?ke(Pe*t):n<.75?fe(vr(Pe*(n=.5-n)),t):n<1.25?(t=fe(1,t)-t,ke(Pe*t)):n<1.75?-fe(vr(Pe*(n-=1.5)),t):(t-=fe(2,t),ke(Pe*t))}var lr=1.4616321449683622,sr=1.4616321449683622;var wr=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],pr=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Nr=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];var br=12*r(6)*function r(f){var v,y,l,s,w,p,N,b,A;if(e(f))return NaN;if(1===f)return NaN;if(f>=56)return 1;if(t(f)&&(s=0|f)===f){if(!(s<0))return 0==(1&s)?pr[s/2]:wr[(s-3)/2];if(0==(1&(l=0|-s)))return 0;if((p=(l+1)/2|0)<=129)return-Nr[p]/(l+1)}return u(f)<1.4901161193847656e-8?-.5-.9189385332046728*f:(y=1-f,f<0?n(f/2)===f/2?0:(v=f,f=y,y=v,f>170?(v=2*yr(.5*y)*r(f),w=function(r){var n,t,f,o,v,y,l,s,w,p,N,b,A;if(e(r)||c(r))return r;if(0===r)return a;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-ar(r);if(n){if(r>=4503599627370496)return a;if(0===(w=yr(r)))return a;t=ar(Pe/u(w*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(A=-ar(r),r>=lr-1+.27?(N=1-r,f=0):r>=lr-1-.27?(N=r-(sr-1),f=1):(N=r,f=2)):(A=0,r>=lr+.27?(N=2-r,f=0):r>=lr-.27?(N=r-sr,f=1):(N=r-1,f=2)),f){case 0:y=.07721566490153287+(b=N*N)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(b),v=b*(.3224670334241136+b*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(b)),A+=(l=N*y+v)-.5*N;break;case 1:y=.48383612272381005+(p=(b=N*N)*N)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(p),v=p*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(p)-.1475877229945939,o=.06462494023913339+p*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(p),A+=(l=b*y-(-3638676997039505e-33-p*(v+N*o)))-.12148629053584961;break;case 2:y=N*(N*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(N)-.07721566490153287),v=1+N*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(N),A+=-.5*N+y/v}else if(r<8)switch(l=(N=r-(f=i(r)))*(N*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(N)-.07721566490153287),s=1+N*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(N),A=.5*N+l/s,b=1,f){case 7:b*=N+6;case 6:b*=N+5;case 5:b*=N+4;case 4:b*=N+3;case 3:A+=ar(b*=N+2)}else r<0x400000000000000?(w=ar(r),p=.4189385332046727+(b=1/r)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(N=b*b),A=(r-.5)*(w-1)+p):A=r*(ar(r)-1);return n&&(A=t-A),A}(f),(w-=f*ar(6.283185307179586))>709?v<0?o:a:v*ve(w)):2*yr(.5*y)*nr(6.283185307179586,-f)*fr(f)*r(f)):f<1?(v=0===(N=y)?.2433929443359375:((N<0?-N:N)<=1?(b=.2433929443359375+N*(N*(.055761621477604675+N*(N*(.0004515345286457964+-9332412703570615e-21*N)-.003209124988790859))-.4909247051635357),A=1+N*(N*(.04196762233099861+N*(N*(.00024978985622317937+-10185578841856403e-21*N)-.00413421406552171))-.27996033431034445)):(b=(N=1/N)*(.0004515345286457964+N*(N*(.055761621477604675+N*(.2433929443359375*N-.4909247051635357))-.003209124988790859))-9332412703570615e-21,A=N*(.00024978985622317937+N*(N*(.04196762233099861+N*(1*N-.27996033431034445))-.00413421406552171))-10185578841856403e-21),b/A),v-=1.2433929443359375,v+=y,v/=y):f<=2?(v=1/(y=-y))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(y):f<=4?(v=.6986598968505859+1/-y)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(f-2):f<=7?(v=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(f-4),1+ve(v)):f<15?(v=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(f-7),1+ve(v)):f<36?(v=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(f-15),1+ve(v)):1+nr(2,-f))}(3)/(Pe*Pe*Pe);function Ar(r,n){return e(r)||e(n)||n<=0?NaN:br}export{Ar as default};
//# sourceMappingURL=mod.js.map