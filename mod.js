// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},e=Math.sqrt,n=Math.floor,t=n;var u=function(r){return t(r)===r};var f=function(r){return Math.abs(r)},i=Math.ceil,o=n,a=i;var c=function(r){return r<0?a(r):o(r)},v=Number.NEGATIVE_INFINITY,y=Number.POSITIVE_INFINITY,l=y,s=v;var w=function(r){return r===l||r===s};var p=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var N=function(){return p&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,A=b;var h=function(r){return A.call(r)},U=Object.prototype.hasOwnProperty;var m=function(r,e){return null!=r&&U.call(r,e)},d="function"==typeof Symbol?Symbol.toStringTag:"",I=m,F=d,S=b;var H=h,O=function(r){var e,n,t;if(null==r)return S.call(r);n=r[F],e=I(r,F);try{r[F]=void 0}catch(e){return S.call(r)}return t=S.call(r),e?r[F]=n:delete r[F],t},g=N()?O:H,E=g,j="function"==typeof Uint32Array;var x="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return j&&r instanceof Uint32Array||"[object Uint32Array]"===E(r)},G=x;var M=function(){var r,e;if("function"!=typeof G)return!1;try{e=new G(e=[1,3.14,-3.14,4294967296,4294967297]),r=T(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var L="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},k=M()?L:W,P=g,V="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null,_=function(r){return V&&r instanceof Float64Array||"[object Float64Array]"===P(r)},q=Y;var z=function(){var r,e;if("function"!=typeof q)return!1;try{e=new q([1,3.14,-3.14,NaN]),r=_(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var B="function"==typeof Float64Array?Float64Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=g,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null,R=function(r){return K&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)},X=Q;var Z=function(){var r,e;if("function"!=typeof X)return!1;try{e=new X(e=[1,3.14,-3.14,256,257]),r=R(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var $="function"==typeof Uint8Array?Uint8Array:void 0,rr=function(){throw new Error("not implemented")},er=Z()?$:rr,nr=g,tr="function"==typeof Uint16Array;var ur="function"==typeof Uint16Array?Uint16Array:null,fr=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ir=ur;var or=function(){var r,e;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,65536,65537]),r=fr(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var ar,cr="function"==typeof Uint16Array?Uint16Array:void 0,vr=function(){throw new Error("not implemented")},yr={uint16:or()?cr:vr,uint8:er};(ar=new yr.uint16(1))[0]=4660;var lr,sr,wr=52===new yr.uint8(ar.buffer)[0];!0===wr?(lr=1,sr=0):(lr=0,sr=1);var pr=k,Nr={HIGH:lr,LOW:sr},br=new D(1),Ar=new pr(br.buffer),hr=Nr.HIGH,Ur=Nr.LOW;var mr=function(r,e){return br[0]=e,r[0]=Ar[hr],r[1]=Ar[Ur],r};var dr=function(r,e){return 1===arguments.length?mr([0,0],r):mr(r,e)},Ir=k,Fr=!0===wr?1:0,Sr=new D(1),Hr=new Ir(Sr.buffer);var Or,gr,Er=function(r){return Sr[0]=r,Hr[Fr]};!0===wr?(Or=1,gr=0):(Or=0,gr=1);var jr=k,xr={HIGH:Or,LOW:gr},Tr=new D(1),Gr=new jr(Tr.buffer),Mr=xr.HIGH,Lr=xr.LOW;var Wr=function(r,e){return Gr[Mr]=r,Gr[Lr]=e,Tr[0]},kr=Wr,Pr=dr,Vr=Er,Yr=kr,_r=[0,0];var qr=function(r,e){var n,t;return Pr(_r,r),n=_r[0],n&=2147483647,t=Vr(e),Yr(n|=t&=2147483648,_r[1])},zr=w,Br=r,Cr=f;var Dr=function(r,e){return Br(e)||zr(e)?(r[0]=e,r[1]=0,r):0!==e&&Cr(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var Jr=Er;var Kr=function(r){var e=Jr(r);return(e=(2146435072&e)>>>20)-1023|0},Qr=y,Rr=v,Xr=r,Zr=w,$r=qr,re=function(r,e){return 1===arguments.length?Dr([0,0],r):Dr(r,e)},ee=Kr,ne=dr,te=kr,ue=[0,0],fe=[0,0];var ie=function(r,e){var n,t;return 0===e||0===r||Xr(r)||Zr(r)?r:(re(ue,r),e+=ue[1],(e+=ee(r=ue[0]))<-1074?$r(0,r):e>1023?r<0?Rr:Qr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ne(fe,r),n=fe[0],n&=2148532223,t*te(n|=e+1023<<20,fe[1])))},oe=ie;var ae=oe,ce=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ve=r,ye=c,le=v,se=y,we=function(r,e,n){var t,u,f;return f=(t=r-e)-(u=t*t)*ce(u),ae(1-(e-t*f/(2-f)-r),n)};var pe=function(r){var e;return ve(r)||r===se?r:r===le?0:r>709.782712893384?se:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(e=ye(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),we(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},Ne=v;var be=function(r){return 0===r&&1/r===Ne};var Ae=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},he=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Ue=function(r,e){var n,t,u,f;return u=(f=r*r)*f,t=f*Ae(f),t+=u*u*he(f),(u=1-(n=.5*f))+(1-u-n+(f*t-r*e))},me=-.16666666666666632;var de=function(r,e){var n,t,u;return n=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===e?r+t*(me+u*n):r-(u*(.5*e-t*n)-e-t*me)},Ie=k,Fe=!0===wr?0:1,Se=new D(1),He=new Ie(Se.buffer);var Oe=function(r){return Se[0]=r,He[Fe]};var ge=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var Ee=n,je=oe,xe=function(r){return ge(0,r)},Te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ge=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Me=5.960464477539063e-8,Le=xe(20),We=xe(20),ke=xe(20),Pe=xe(20);function Ve(r,e,n,t,u,f,i,o,a){var c,v,y,l,s,w,p,N,b;for(l=f,b=t[n],N=n,s=0;N>0;s++)v=Me*b|0,Pe[s]=b-16777216*v|0,b=t[N-1]+v,N-=1;if(b=je(b,u),b-=8*Ee(.125*b),b-=p=0|b,y=0,u>0?(p+=s=Pe[n-1]>>24-u,Pe[n-1]-=s<<24-u,y=Pe[n-1]>>23-u):0===u?y=Pe[n-1]>>23:b>=.5&&(y=2),y>0){for(p+=1,c=0,s=0;s<n;s++)N=Pe[s],0===c?0!==N&&(c=1,Pe[s]=16777216-N):Pe[s]=16777215-N;if(u>0)switch(u){case 1:Pe[n-1]&=8388607;break;case 2:Pe[n-1]&=4194303}2===y&&(b=1-b,0!==c&&(b-=je(1,u)))}if(0===b){for(N=0,s=n-1;s>=f;s--)N|=Pe[s];if(0===N){for(w=1;0===Pe[f-w];w++);for(s=n+1;s<=n+w;s++){for(a[o+s]=Te[i+s],v=0,N=0;N<=o;N++)v+=r[N]*a[o+(s-N)];t[s]=v}return Ve(r,e,n+=w,t,u,f,i,o,a)}}if(0===b)for(n-=1,u-=24;0===Pe[n];)n-=1,u-=24;else(b=je(b,-u))>=16777216?(v=Me*b|0,Pe[n]=b-16777216*v|0,u+=24,Pe[n+=1]=v):Pe[n]=0|b;for(v=je(1,u),s=n;s>=0;s--)t[s]=v*Pe[s],v*=Me;for(s=n;s>=0;s--){for(v=0,w=0;w<=l&&w<=n-s;w++)v+=Ge[w]*t[s+w];ke[n-s]=v}for(v=0,s=n;s>=0;s--)v+=ke[s];for(e[0]=0===y?v:-v,v=ke[0]-v,s=1;s<=n;s++)v+=ke[s];return e[1]=0===y?v:-v,7&p}var Ye=function(r,e,n,t){var u,f,i,o,a,c,v;for(4,(f=(n-3)/24|0)<0&&(f=0),o=n-24*(f+1),c=f-(i=t-1),v=i+4,a=0;a<=v;a++)Le[a]=c<0?0:Te[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Le[i+(a-c)];We[a]=u}return 4,Ve(r,e,4,We,o,4,f,i,Le)},_e=Math.round,qe=Er;var ze=Er,Be=Oe,Ce=kr,De=Ye,Je=function(r,e,n){var t,u,f,i,o;return f=r-1.5707963267341256*(t=_e(.6366197723675814*r)),i=6077100506506192e-26*t,o=e>>20|0,n[0]=f-i,o-(qe(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=f)-(f=u-(i=6077100506303966e-26*t))-i),n[0]=f-i,o-(qe(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=f)-(f=u-(i=20222662487111665e-37*t))-i),n[0]=f-i)),n[1]=f-n[0]-i,t},Ke=1.5707963267341256,Qe=6077100506506192e-26,Re=2*Qe,Xe=4*Qe,Ze=[0,0,0],$e=[0,0];var rn=function(r,e){var n,t,u,f,i,o,a;if((u=2147483647&ze(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Je(r,u,e):u<=1073928572?r>0?(a=r-Ke,e[0]=a-Qe,e[1]=a-e[0]-Qe,1):(a=r+Ke,e[0]=a+Qe,e[1]=a-e[0]+Qe,-1):r>0?(a=r-2*Ke,e[0]=a-Re,e[1]=a-e[0]-Re,2):(a=r+2*Ke,e[0]=a+Re,e[1]=a-e[0]+Re,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Je(r,u,e):r>0?(a=r-3*Ke,e[0]=a-1.8231301519518578e-10,e[1]=a-e[0]-1.8231301519518578e-10,3):(a=r+3*Ke,e[0]=a+1.8231301519518578e-10,e[1]=a-e[0]+1.8231301519518578e-10,-3):1075388923===u?Je(r,u,e):r>0?(a=r-4*Ke,e[0]=a-Xe,e[1]=a-e[0]-Xe,4):(a=r+4*Ke,e[0]=a+Xe,e[1]=a-e[0]+Xe,-4);if(u<1094263291)return Je(r,u,e);if(u>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=Be(r),a=Ce(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)Ze[i]=0|a,a=16777216*(a-Ze[i]);for(Ze[2]=a,f=3;0===Ze[f-1];)f-=1;return o=De(Ze,$e,t,f),r<0?(e[0]=-$e[0],e[1]=-$e[1],-o):(e[0]=$e[0],e[1]=$e[1],o)},en=rn,nn=Er,tn=Ue,un=de,fn=en,on=[0,0];var an=function(r){var e;if(e=nn(r),(e&=2147483647)<=1072243195)return e<1045430272?r:un(r,0);if(e>=2146435072)return NaN;switch(3&fn(r,on)){case 0:return un(on[0],on[1]);case 1:return tn(on[0],on[1]);case 2:return-un(on[0],on[1]);default:return-tn(on[0],on[1])}},cn=3.141592653589793,vn=u;var yn=function(r){return vn(r/2)};var ln=function(r){return yn(r>0?r-1:r+1)},sn=k,wn=!0===wr?0:1,pn=new D(1),Nn=new sn(pn.buffer);var bn=function(r,e){return pn[0]=r,Nn[wn]=e>>>0,pn[0]},An=bn;var hn=function(r){return 0|r},Un=ln,mn=qr,dn=v,In=y;var Fn=function(r,e){return e===dn?In:e===In?0:e>0?Un(e)?r:0:Un(e)?mn(In,r):In},Sn=Er;var Hn=function(r,e){return(2147483647&Sn(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},On=f,gn=y;var En=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:On(r)<1==(e===gn)?0:gn},jn=k,xn=!0===wr?1:0,Tn=new D(1),Gn=new jn(Tn.buffer);var Mn=function(r,e){return Tn[0]=r,Gn[xn]=e>>>0,Tn[0]};var Ln=Er,Wn=An,kn=Mn,Pn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Vn=[1,1.5],Yn=[0,.5849624872207642],_n=[0,1.350039202129749e-8];var qn=An,zn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Bn=Er,Cn=Mn,Dn=An,Jn=hn,Kn=oe,Qn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Rn=r,Xn=ln,Zn=w,$n=u,rt=e,et=f,nt=dr,tt=An,ut=hn,ft=v,it=y,ot=Fn,at=Hn,ct=En,vt=function(r,e,n){var t,u,f,i,o,a,c,v,y,l,s,w,p,N,b,A,h,U,m,d;return U=0,n<1048576&&(U-=53,n=Ln(e*=9007199254740992)),U+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?d=0:m<767610?d=1:(d=0,U+=1,n-=1048576),t=524288+(n>>1|536870912),o=(h=1/((e=kn(e,n))+(c=Vn[d])))*((A=e-c)-(i=Wn(u=A*h,0))*(a=kn(0,t+=d<<18))-i*(e-(a-c))),b=(f=u*u)*f*Pn(f),a=Wn(a=3+(f=i*i)+(b+=o*(i+u)),0),p=(s=-7.028461650952758e-9*(y=Wn(y=(A=i*a)+(h=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(h-(y-A))+_n[d])-((w=Wn(w=(l=.9617967009544373*y)+s+(v=Yn[d])+(N=U),0))-N-v-l),r[0]=w,r[1]=p,r},yt=function(r,e){var n,t,u,f,i;return n=(i=1.9259629911266175e-8*(u=e-1)-1.4426950408889634*(u*u*zn(u)))-((t=qn(t=(f=1.4426950216293335*u)+i,0))-f),r[0]=t,r[1]=n,r},lt=function(r,e,n){var t,u,f,i,o,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(t=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),e-=f=Cn(0,t)),a=(o=.6931471805599453*(n-((f=Dn(f=n+e,0))-e))+-1.904654299957768e-9*f)-((c=(i=.6931471824645996*f)+o)-i),u=c-(f=c*c)*Qn(f),r=Bn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=Jn(r),c=(r+=v<<20>>>0)>>20<=0?Kn(c,v):Cn(c,r)},st=1e300,wt=[0,0],pt=[0,0];var Nt=function r(e,n){var t,u,f,i,o,a,c,v,y,l,s,w,p,N;if(Rn(e)||Rn(n))return NaN;if(nt(wt,n),o=wt[0],0===wt[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return rt(e);if(-.5===n)return 1/rt(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(Zn(n))return ct(e,n)}if(nt(wt,e),i=wt[0],0===wt[1]){if(0===i)return ot(e,n);if(1===e)return 1;if(-1===e&&Xn(n))return-1;if(Zn(e))return e===ft?r(-0,-n):n<0?0:it}if(e<0&&!1===$n(n))return(e-e)/(e-e);if(f=et(e),t=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,a=(a=i>>>31|0)&&Xn(n)?-1:1,u>1105199104){if(u>1139802112)return at(e,n);if(t<1072693247)return 1===c?a*st*st:1e-300*a*1e-300;if(t>1072693248)return 0===c?a*st*st:1e-300*a*1e-300;s=yt(pt,f)}else s=vt(pt,f,t);if(l=(n-(v=tt(n,0)))*s[0]+n*s[1],y=v*s[0],nt(wt,w=l+y),p=ut(wt[0]),N=ut(wt[1]),p>=1083179008){if(0!=(p-1083179008|N))return a*st*st;if(l+8008566259537294e-32>w-y)return a*st*st}else if((2147483647&p)>=1083231232){if(0!=(p-3230714880|N))return 1e-300*a*1e-300;if(l<=w-y)return 1e-300*a*1e-300}return a*(w=lt(p,y,l))};var bt=Nt,At=pe,ht=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Ut=r,mt=u,dt=be,It=f,Ft=n,St=an,Ht=y,Ot=v,gt=cn,Et=function(r){var e,n,t;return e=1+(e=1/r)*ht(e),n=At(r),2.5066282746310007*(n=r>143.01608?(t=bt(r,.5*r-.25))*(t/n):bt(r,r-.5)/n)*e},jt=function(r,e){return e/((1+.5772156649015329*r)*r)},xt=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)};var Tt=Er,Gt=Mn,Mt=r,Lt=v,Wt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},kt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Pt=.6931471803691238,Vt=1.9082149292705877e-10;var Yt=function(r){var e,n,t,u,f,i,o,a,c,v,y;return 0===r?Lt:Mt(r)||r<0?NaN:(u=0,(n=Tt(r))<1048576&&(u-=54,n=Tt(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(o=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=Gt(r,n|1072693248^o))-1,(1048575&2+n)<3?0===i?0===u?0:u*Pt+u*Vt:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Pt-(f-u*Vt-i)):(o=n-398458|0,a=440401-n|0,t=(v=(y=(c=i/(2+i))*c)*y)*Wt(v),f=y*kt(v)+t,(o|=a)>0?(e=.5*i*i,0===u?i-(e-c*(e+f)):u*Pt-(e-(c*(e+f)+u*Vt)-i)):0===u?i-c*(i-f):u*Pt-(c*(i-f)-u*Vt-i))))},_t=Er,qt=Ue,zt=de,Bt=en,Ct=[0,0];var Dt=r,Jt=w,Kt=function(r){var e;if(e=_t(r),(e&=2147483647)<=1072243195)return e<1044381696?1:qt(r,0);if(e>=2146435072)return NaN;switch(3&Bt(r,Ct)){case 0:return qt(Ct[0],Ct[1]);case 1:return-zt(Ct[0],Ct[1]);case 2:return-qt(Ct[0],Ct[1]);default:return zt(Ct[0],Ct[1])}},Qt=an,Rt=f,Xt=qr,Zt=cn;var $t=function(r){var e,n;return Dt(r)||Jt(r)?NaN:0===(e=Rt(n=r%2))||1===e?Xt(0,n):e<.25?Qt(Zt*n):e<.75?Xt(Kt(Zt*(e=.5-e)),n):e<1.25?(n=Xt(1,n)-n,Qt(Zt*n)):e<1.75?-Xt(Kt(Zt*(e-=1.5)),n):(n-=Xt(2,n),Qt(Zt*n))};var ru=r,eu=w,nu=f,tu=Yt,uu=c,fu=$t,iu=y,ou=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},au=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},cu=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},vu=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},yu=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},lu=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},su=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},wu=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},pu=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Nu=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},bu=1.4616321449683622,Au=1.4616321449683622;var hu=r,Uu=u,mu=f,du=pe,Iu=n,Fu=function(r){var e,n,t,u;if(mt(r)&&r<0||r===Ot||Ut(r))return NaN;if(0===r)return dt(r)?Ot:Ht;if(r>171.61447887182297)return Ht;if(r<-170.5674972726612)return 0;if((n=It(r))>33)return r>=0?Et(r):(e=0==(1&(t=Ft(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*St(gt*u),e*gt/(It(u)*Et(n)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return jt(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return jt(r,u);u/=r,r+=1}return 2===r?u:u*xt(r-=2)},Su=function(r){var e,n,t,u,f,i,o,a;if(ru(r)||eu(r))return r;if(0===r)return iu;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-tu(r);if(e){if(r>=4503599627370496)return iu;if(0===(u=fu(r)))return iu;n=tu(3.141592653589793/nu(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-tu(r),r>=bu-1+.27?(i=1-r,t=0):r>=bu-1-.27?(i=r-(Au-1),t=1):(i=r,t=2)):(a=0,r>=bu+.27?(i=2-r,t=0):r>=bu-.27?(i=r-Au,t=1):(i=r-1,t=2)),t){case 0:a+=i*(.07721566490153287+(o=i*i)*ou(o))+o*(.3224670334241136+o*au(o))-.5*i;break;case 1:a+=-.12148629053584961+((o=i*i)*(.48383612272381005+(f=o*i)*yu(f))-(-3638676997039505e-33-f*(f*lu(f)-.1475877229945939+i*(.06462494023913339+f*su(f)))));break;case 2:a+=-.5*i+i*(i*wu(i)-.07721566490153287)/(1+i*pu(i))}else if(r<8)switch(a=.5*(i=r-(t=uu(r)))+i*(i*vu(i)-.07721566490153287)/(1+i*cu(i)),o=1,t){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:a+=tu(o*=i+2)}else a=r<0x400000000000000?(r-.5)*((u=tu(r))-1)+(f=.4189385332046727+(o=1/r)*Nu(i=o*o)):r*(tu(r)-1);return e&&(a=n-a),a},Hu=$t,Ou=Nt,gu=Yt,Eu=y,ju=v,xu=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Tu=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Gu=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],Mu=function(r){var e,n;return 0===r?.2433929443359375:((r<0?-r:r)<=1?(e=.2433929443359375+r*(r*(.055761621477604675+r*(r*(.0004515345286457964+-9332412703570615e-21*r)-.003209124988790859))-.4909247051635357),n=1+r*(r*(.04196762233099861+r*(r*(.00024978985622317937+-10185578841856403e-21*r)-.00413421406552171))-.27996033431034445)):(e=(r=1/r)*(.0004515345286457964+r*(r*(.055761621477604675+r*(.2433929443359375*r-.4909247051635357))-.003209124988790859))-9332412703570615e-21,n=r*(.00024978985622317937+r*(r*(.04196762233099861+r*(1*r-.27996033431034445))-.00413421406552171))-10185578841856403e-21),e/n)},Lu=function(r){var e,n;return 0===r?.5772156649015329:((r<0?-r:r)<=1?(e=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+1101084409767329e-20*r)))),n=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+10991819782396113e-21*r))))):(e=1101084409767329e-20+(r=1/r)*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+.5772156649015329*r)))),n=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+1*r))))),e/n)},Wu=function(r){var e,n;return 0===r?-.053725830002359504:((r<0?-r:r)<=1?(e=r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+0*r)))))-.053725830002359504,n=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+2.3627662397497864e-8*r)))))):(e=0+(r=1/r)*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+-.053725830002359504*r))))),n=2.3627662397497864e-8+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+1*r)))))),e/n)},ku=function(r){var e,n;return 0===r?-2.497101906022594:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(0+r*(0+0*r))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(r*(49340956392759e-19+r*(r*(7.188337293654598e-9+-1.1292001134749475e-10*r)-2.3405548702528722e-7))-36910273311764616e-21))))):(e=0+(r=1/r)*(0+r*(0+r*(r*(r*(r*(r*(-2.497101906022594*r-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=r*(7.188337293654598e-9+r*(r*(49340956392759e-19+r*(r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+1*r)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),e/n)},Pu=function(r){var e,n;return 0===r?-4.785580284951356:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+0*r))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+r*(.24434533737818856+r*(.008733707544922887+r*(r*(r*(r*(4.710012640030765e-9+r*(6998415452048457e-28*r-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(e=0+(r=1/r)*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(r*(r*(-4.785580284951356*r-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+r*(r*(4.710012640030765e-9+r*(r*(r*(r*(.008733707544922887+r*(.24434533737818856+1*r))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),e/n)},Vu=function(r){var e,n;return 0===r?-10.39489505733089:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(-8.214657090954655e-9*r-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9.555611230656935e-7+r*(1.185071534740229e-8+2226094836273526e-30*r))))))):(e=(r=1/r)*(r*(r*(r*(r*(r*(-10.39489505733089*r-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+r*(1.185071534740229e-8+r*(9.555611230656935e-7+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+1*r))))))),e/n)};var Yu=function r(e){var n,t,u,f,i,o;if(hu(e))return NaN;if(1===e)return NaN;if(e>=56)return 1;if(Uu(e)&&(f=0|e)===e){if(!(f<0))return 0==(1&f)?Tu[f/2]:xu[(f-3)/2];if(0==(1&(u=0|-f)))return 0;if((o=(u+1)/2|0)<=129)return-Gu[o]/(u+1)}return mu(e)<1.4901161193847656e-8?-.5-.9189385332046728*e:(t=1-e,e<0?Iu(e/2)===e/2?0:(n=e,e=t,t=n,e>170?(n=2*Hu(.5*t)*r(e),i=Su(e),(i-=e*gu(6.283185307179586))>709?n<0?ju:Eu:n*du(i)):2*Hu(.5*t)*Ou(6.283185307179586,-e)*Fu(e)*r(e)):e<1?(n=Mu(t),n-=1.2433929443359375,n+=t,n/=t):e<=2?(n=1/(t=-t))+Lu(t):e<=4?(n=.6986598968505859+1/-t)+Wu(e-2):e<=7?(n=ku(e-4),1+du(n)):e<15?(n=Pu(e-7),1+du(n)):e<36?(n=Vu(e-15),1+du(n)):1+Ou(2,-e))},_u=r,qu=Yu,zu=cn,Bu=12*e(6)*qu(3)/(zu*zu*zu);var Cu=function(r,e){return _u(r)||_u(e)||e<=0?NaN:Bu};export{Cu as default};
//# sourceMappingURL=mod.js.map
