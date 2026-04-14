var md={exports:{}},Ho={};var Y0;function lS(){if(Y0)return Ho;Y0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var Z0;function cS(){return Z0||(Z0=1,md.exports=lS()),md.exports}var D=cS(),gd={exports:{}},he={};var K0;function uS(){if(K0)return he;K0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function M(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,S={};function v(B,Z,xt){this.props=B,this.context=Z,this.refs=S,this.updater=xt||E}v.prototype.isReactComponent={},v.prototype.setState=function(B,Z){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Z,"setState")},v.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function w(){}w.prototype=v.prototype;function N(B,Z,xt){this.props=B,this.context=Z,this.refs=S,this.updater=xt||E}var O=N.prototype=new w;O.constructor=N,U(O,v.prototype),O.isPureReactComponent=!0;var V=Array.isArray;function z(){}var I={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function L(B,Z,xt){var Et=xt.ref;return{$$typeof:r,type:B,key:Z,ref:Et!==void 0?Et:null,props:xt}}function dt(B,Z){return L(B.type,Z,B.props)}function k(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function Q(B){var Z={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(xt){return Z[xt]})}var it=/\/+/g;function ot(B,Z){return typeof B=="object"&&B!==null&&B.key!=null?Q(""+B.key):Z.toString(36)}function tt(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(z,z):(B.status="pending",B.then(function(Z){B.status==="pending"&&(B.status="fulfilled",B.value=Z)},function(Z){B.status==="pending"&&(B.status="rejected",B.reason=Z)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function F(B,Z,xt,Et,It){var at=typeof B;(at==="undefined"||at==="boolean")&&(B=null);var yt=!1;if(B===null)yt=!0;else switch(at){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(B.$$typeof){case r:case t:yt=!0;break;case _:return yt=B._init,F(yt(B._payload),Z,xt,Et,It)}}if(yt)return It=It(B),yt=Et===""?"."+ot(B,0):Et,V(It)?(xt="",yt!=null&&(xt=yt.replace(it,"$&/")+"/"),F(It,Z,xt,"",function(Dt){return Dt})):It!=null&&(k(It)&&(It=dt(It,xt+(It.key==null||B&&B.key===It.key?"":(""+It.key).replace(it,"$&/")+"/")+yt)),Z.push(It)),1;yt=0;var Tt=Et===""?".":Et+":";if(V(B))for(var ft=0;ft<B.length;ft++)Et=B[ft],at=Tt+ot(Et,ft),yt+=F(Et,Z,xt,at,It);else if(ft=M(B),typeof ft=="function")for(B=ft.call(B),ft=0;!(Et=B.next()).done;)Et=Et.value,at=Tt+ot(Et,ft++),yt+=F(Et,Z,xt,at,It);else if(at==="object"){if(typeof B.then=="function")return F(tt(B),Z,xt,Et,It);throw Z=String(B),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return yt}function H(B,Z,xt){if(B==null)return B;var Et=[],It=0;return F(B,Et,"","",function(at){return Z.call(xt,at,It++)}),Et}function ut(B){if(B._status===-1){var Z=B._result;Z=Z(),Z.then(function(xt){(B._status===0||B._status===-1)&&(B._status=1,B._result=xt)},function(xt){(B._status===0||B._status===-1)&&(B._status=2,B._result=xt)}),B._status===-1&&(B._status=0,B._result=Z)}if(B._status===1)return B._result.default;throw B._result}var gt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},bt={map:H,forEach:function(B,Z,xt){H(B,function(){Z.apply(this,arguments)},xt)},count:function(B){var Z=0;return H(B,function(){Z++}),Z},toArray:function(B){return H(B,function(Z){return Z})||[]},only:function(B){if(!k(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return he.Activity=y,he.Children=bt,he.Component=v,he.Fragment=i,he.Profiler=l,he.PureComponent=N,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,he.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},he.cache=function(B){return function(){return B.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(B,Z,xt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Et=U({},B.props),It=B.key;if(Z!=null)for(at in Z.key!==void 0&&(It=""+Z.key),Z)!A.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(Et[at]=Z[at]);var at=arguments.length-2;if(at===1)Et.children=xt;else if(1<at){for(var yt=Array(at),Tt=0;Tt<at;Tt++)yt[Tt]=arguments[Tt+2];Et.children=yt}return L(B.type,It,Et)},he.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},he.createElement=function(B,Z,xt){var Et,It={},at=null;if(Z!=null)for(Et in Z.key!==void 0&&(at=""+Z.key),Z)A.call(Z,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(It[Et]=Z[Et]);var yt=arguments.length-2;if(yt===1)It.children=xt;else if(1<yt){for(var Tt=Array(yt),ft=0;ft<yt;ft++)Tt[ft]=arguments[ft+2];It.children=Tt}if(B&&B.defaultProps)for(Et in yt=B.defaultProps,yt)It[Et]===void 0&&(It[Et]=yt[Et]);return L(B,at,It)},he.createRef=function(){return{current:null}},he.forwardRef=function(B){return{$$typeof:h,render:B}},he.isValidElement=k,he.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:ut}},he.memo=function(B,Z){return{$$typeof:p,type:B,compare:Z===void 0?null:Z}},he.startTransition=function(B){var Z=I.T,xt={};I.T=xt;try{var Et=B(),It=I.S;It!==null&&It(xt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(z,gt)}catch(at){gt(at)}finally{Z!==null&&xt.types!==null&&(Z.types=xt.types),I.T=Z}},he.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},he.use=function(B){return I.H.use(B)},he.useActionState=function(B,Z,xt){return I.H.useActionState(B,Z,xt)},he.useCallback=function(B,Z){return I.H.useCallback(B,Z)},he.useContext=function(B){return I.H.useContext(B)},he.useDebugValue=function(){},he.useDeferredValue=function(B,Z){return I.H.useDeferredValue(B,Z)},he.useEffect=function(B,Z){return I.H.useEffect(B,Z)},he.useEffectEvent=function(B){return I.H.useEffectEvent(B)},he.useId=function(){return I.H.useId()},he.useImperativeHandle=function(B,Z,xt){return I.H.useImperativeHandle(B,Z,xt)},he.useInsertionEffect=function(B,Z){return I.H.useInsertionEffect(B,Z)},he.useLayoutEffect=function(B,Z){return I.H.useLayoutEffect(B,Z)},he.useMemo=function(B,Z){return I.H.useMemo(B,Z)},he.useOptimistic=function(B,Z){return I.H.useOptimistic(B,Z)},he.useReducer=function(B,Z,xt){return I.H.useReducer(B,Z,xt)},he.useRef=function(B){return I.H.useRef(B)},he.useState=function(B){return I.H.useState(B)},he.useSyncExternalStore=function(B,Z,xt){return I.H.useSyncExternalStore(B,Z,xt)},he.useTransition=function(){return I.H.useTransition()},he.version="19.2.4",he}var Q0;function Jh(){return Q0||(Q0=1,gd.exports=uS()),gd.exports}var wt=Jh(),_d={exports:{}},Go={},vd={exports:{}},xd={};var J0;function fS(){return J0||(J0=1,(function(r){function t(F,H){var ut=F.length;F.push(H);t:for(;0<ut;){var gt=ut-1>>>1,bt=F[gt];if(0<l(bt,H))F[gt]=H,F[ut]=bt,ut=gt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var H=F[0],ut=F.pop();if(ut!==H){F[0]=ut;t:for(var gt=0,bt=F.length,B=bt>>>1;gt<B;){var Z=2*(gt+1)-1,xt=F[Z],Et=Z+1,It=F[Et];if(0>l(xt,ut))Et<bt&&0>l(It,xt)?(F[gt]=It,F[Et]=ut,gt=Et):(F[gt]=xt,F[Z]=ut,gt=Z);else if(Et<bt&&0>l(It,ut))F[gt]=It,F[Et]=ut,gt=Et;else break t}}return H}function l(F,H){var ut=F.sortIndex-H.sortIndex;return ut!==0?ut:F.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,y=null,g=3,M=!1,E=!1,U=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(F){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=F)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function V(F){if(U=!1,O(F),!E)if(i(m)!==null)E=!0,z||(z=!0,Q());else{var H=i(p);H!==null&&tt(V,H.startTime-F)}}var z=!1,I=-1,A=5,L=-1;function dt(){return S?!0:!(r.unstable_now()-L<A)}function k(){if(S=!1,z){var F=r.unstable_now();L=F;var H=!0;try{t:{E=!1,U&&(U=!1,w(I),I=-1),M=!0;var ut=g;try{e:{for(O(F),y=i(m);y!==null&&!(y.expirationTime>F&&dt());){var gt=y.callback;if(typeof gt=="function"){y.callback=null,g=y.priorityLevel;var bt=gt(y.expirationTime<=F);if(F=r.unstable_now(),typeof bt=="function"){y.callback=bt,O(F),H=!0;break e}y===i(m)&&s(m),O(F)}else s(m);y=i(m)}if(y!==null)H=!0;else{var B=i(p);B!==null&&tt(V,B.startTime-F),H=!1}}break t}finally{y=null,g=ut,M=!1}H=void 0}}finally{H?Q():z=!1}}}var Q;if(typeof N=="function")Q=function(){N(k)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ot=it.port2;it.port1.onmessage=k,Q=function(){ot.postMessage(null)}}else Q=function(){v(k,0)};function tt(F,H){I=v(function(){F(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(F){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ut=g;g=H;try{return F()}finally{g=ut}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ut=g;g=F;try{return H()}finally{g=ut}},r.unstable_scheduleCallback=function(F,H,ut){var gt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?gt+ut:gt):ut=gt,F){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=ut+bt,F={id:_++,callback:H,priorityLevel:F,startTime:ut,expirationTime:bt,sortIndex:-1},ut>gt?(F.sortIndex=ut,t(p,F),i(m)===null&&F===i(p)&&(U?(w(I),I=-1):U=!0,tt(V,ut-gt))):(F.sortIndex=bt,t(m,F),E||M||(E=!0,z||(z=!0,Q()))),F},r.unstable_shouldYield=dt,r.unstable_wrapCallback=function(F){var H=g;return function(){var ut=g;g=H;try{return F.apply(this,arguments)}finally{g=ut}}}})(xd)),xd}var $0;function dS(){return $0||($0=1,vd.exports=fS()),vd.exports}var yd={exports:{}},Dn={};var t_;function hS(){if(t_)return Dn;t_=1;var r=Jh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Dn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,y=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,y=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var e_;function pS(){if(e_)return yd.exports;e_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yd.exports=hS(),yd.exports}var n_;function mS(){if(n_)return Go;n_=1;var r=dS(),t=Jh(),i=pS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=f;break}if(R===o){x=!0,o=u,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,o=u;break}if(R===o){x=!0,o=f,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case z:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case A:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var tt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},gt=[],bt=-1;function B(e){return{current:e}}function Z(e){0>bt||(e.current=gt[bt],gt[bt]=null,bt--)}function xt(e,n){bt++,gt[bt]=e.current,e.current=n}var Et=B(null),It=B(null),at=B(null),yt=B(null);function Tt(e,n){switch(xt(at,n),xt(It,e),xt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_0(n),e=v0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Et),xt(Et,e)}function ft(){Z(Et),Z(It),Z(at)}function Dt(e){e.memoizedState!==null&&xt(yt,e);var n=Et.current,a=v0(n,e.type);n!==a&&(xt(It,e),xt(Et,a))}function Nt(e){It.current===e&&(Z(Et),Z(It)),yt.current===e&&(Z(yt),Fo._currentValue=ut)}var ue,$t;function ne(e){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+e+$t}var re=!1;function ie(e,n){if(!e||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ct){var rt=ct}Reflect.construct(e,[],St)}else{try{St.call()}catch(ct){rt=ct}e.call(St.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var G=x.split(`
`),nt=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===nt.length)for(o=G.length-1,u=nt.length-1;1<=o&&0<=u&&G[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==nt[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{re=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ne(a):""}function Ie(e,n){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return e.child!==n&&n!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return ne("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=Ie(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ye=Object.prototype.hasOwnProperty,Me=r.unstable_scheduleCallback,De=r.unstable_cancelCallback,Kt=r.unstable_shouldYield,P=r.unstable_requestPaint,T=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,_t=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Ot=r.unstable_IdlePriority,te=r.log,se=r.unstable_setDisableYieldValue,Ct=null,At=null;function Ht(e){if(typeof te=="function"&&se(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Ct,e)}catch{}}var zt=Math.clz32?Math.clz32:q,Gt=Math.log,ge=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Gt(e)/ge|0)|0}var Lt=256,Ut=262144,Vt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Rt(o):(x&=R,x!==0?u=Rt(x):a||(a=R&~e,a!==0&&(u=Rt(a))))):(R=o&~f,R!==0?u=Rt(R):x!==0?u=Rt(x):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Ue(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-zt(a),St=1<<mt;R[mt]=0,G[mt]=-1;var rt=nt[mt];if(rt!==null)for(nt[mt]=null,mt=0;mt<rt.length;mt++){var ct=rt[mt];ct!==null&&(ct.lane&=-536870913)}a&=~St}o!==0&&Kr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Kr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Vs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ol(e,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(e.suspendedLanes|n))!==0?0:a}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:G0(e.type))}function Xs(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var bi=Math.random().toString(36).slice(2),ln="__reactFiber$"+bi,gn="__reactProps$"+bi,Qi="__reactContainer$"+bi,Ra="__reactEvents$"+bi,ll="__reactListeners$"+bi,cl="__reactHandles$"+bi,ul="__reactResources$"+bi,fs="__reactMarker$"+bi;function Qr(e){delete e[ln],delete e[gn],delete e[Ra],delete e[ll],delete e[cl]}function Ca(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=T0(e);e!==null;){if(a=e[ln])return a;e=T0(e)}return n}e=a,a=e.parentNode}return null}function wa(e){if(e=e[ln]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ds(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[ul];return n||(n=e[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(e){e[fs]=!0}var lt=new Set,st={};function $(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(st[e]=n,e=0;e<n.length;e++)lt.add(n[e])}var kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Zt={};function Jt(e){return Ye.call(Zt,e)?!0:Ye.call(Ft,e)?!1:kt.test(e)?Zt[e]=!0:(Ft[e]=!0,!1)}function oe(e,n,a){if(Jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function de(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Je(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function fe(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fn(e,n,a,o,u,f,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Ei(e,x,_e(n)):a!=null?Ei(e,x,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+_e(R):e.removeAttribute("name")}function Qn(e,n,a,o,u,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Oe(e)}function Ei(e,n,a){n==="number"&&qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||un.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ji(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ti(e,f,n[f])}function Ws(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ax=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return sx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var fu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function gp(e){var n=wa(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(s(90));Fn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jn(e,!!a.multiple,n,!1)}}}var hu=!1;function _p(e,n,a){if(hu)return e(n,a);hu=!0;try{var o=e(n);return o}finally{if(hu=!1,(qs!==null||Ys!==null)&&(Jl(),qs&&(n=qs,e=Ys,Ys=qs=null,gp(n),e)))for(n=0;n<e.length;n++)gp(e[n])}}function Jr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(ta)try{var $r={};Object.defineProperty($r,"passive",{get:function(){pu=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{pu=!1}var Da=null,mu=null,dl=null;function vp(){if(dl)return dl;var e,n=mu,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function xp(){return!1}function Gn(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:xp,this.isPropagationStopped=xp,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Gn(hs),to=y({},hs,{view:0,detail:0}),rx=Gn(to),gu,_u,eo,gl=y({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(gu=e.screenX-eo.screenX,_u=e.screenY-eo.screenY):_u=gu=0,eo=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),yp=Gn(gl),ox=y({},gl,{dataTransfer:0}),lx=Gn(ox),cx=y({},to,{relatedTarget:0}),vu=Gn(cx),ux=y({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Gn(ux),dx=y({},hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hx=Gn(dx),px=y({},hs,{data:0}),Sp=Gn(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_x[e])?!!n[e]:!1}function xu(){return vx}var xx=y({},to,{key:function(e){if(e.key){var n=mx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yx=Gn(xx),Sx=y({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Gn(Sx),Mx=y({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),bx=Gn(Mx),Ex=y({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Gn(Ex),Ax=y({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=Gn(Ax),Cx=y({},hs,{newState:0,oldState:0}),wx=Gn(Cx),Dx=[9,13,27,32],yu=ta&&"CompositionEvent"in window,no=null;ta&&"documentMode"in document&&(no=document.documentMode);var Ux=ta&&"TextEvent"in window&&!no,bp=ta&&(!yu||no&&8<no&&11>=no),Ep=" ",Tp=!1;function Ap(e,n){switch(e){case"keyup":return Dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function Lx(e,n){switch(e){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,Ep);case"textInput":return e=n.data,e===Ep&&Tp?null:e;default:return null}}function Nx(e,n){if(Zs)return e==="compositionend"||!yu&&Ap(e,n)?(e=vp(),dl=mu=Da=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ox[e.type]:n==="textarea"}function wp(e,n,a,o){qs?Ys?Ys.push(o):Ys=[o]:qs=o,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var io=null,ao=null;function Px(e){f0(e,0)}function _l(e){var n=ds(e);if(_n(n))return e}function Dp(e,n){if(e==="change")return n}var Up=!1;if(ta){var Su;if(ta){var Mu="oninput"in document;if(!Mu){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Mu=typeof Lp.oninput=="function"}Su=Mu}else Su=!1;Up=Su&&(!document.documentMode||9<document.documentMode)}function Np(){io&&(io.detachEvent("onpropertychange",Op),ao=io=null)}function Op(e){if(e.propertyName==="value"&&_l(ao)){var n=[];wp(n,ao,e,du(e)),_p(Px,n)}}function Fx(e,n,a){e==="focusin"?(Np(),io=n,ao=a,io.attachEvent("onpropertychange",Op)):e==="focusout"&&Np()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(ao)}function zx(e,n){if(e==="click")return _l(n)}function Ix(e,n){if(e==="input"||e==="change")return _l(n)}function Hx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Hx;function so(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ye.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,n){var a=Pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pp(a)}}function Bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qt(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gx=ta&&"documentMode"in document&&11>=document.documentMode,Ks=null,Eu=null,ro=null,Tu=!1;function Ip(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||Ks==null||Ks!==qt(o)||(o=Ks,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&so(ro,o)||(ro=o,o=sc(Eu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ks)))}function ps(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qs={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Au={},Hp={};ta&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function ms(e){if(Au[e])return Au[e];if(!Qs[e])return e;var n=Qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return Au[e]=n[a];return e}var Gp=ms("animationend"),Vp=ms("animationiteration"),kp=ms("animationstart"),Vx=ms("transitionrun"),kx=ms("transitionstart"),jx=ms("transitioncancel"),jp=ms("transitionend"),Xp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Ai(e,n){Xp.set(e,n),$(n,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Js=0,Cu=0;function xl(){for(var e=Js,n=Cu=Js=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&Wp(a,u,f)}}function yl(e,n,a,o){ui[Js++]=e,ui[Js++]=n,ui[Js++]=a,ui[Js++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wu(e,n,a,o){return yl(e,n,a,o),Sl(e)}function gs(e,n){return yl(e,null,null,n),Sl(e)}function Wp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sl(e){if(50<wo)throw wo=0,If=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function Xx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new Xx(e,n,a,o)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")Du(e)&&(x=1);else if(typeof e=="string")x=Ky(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ti(31,a,n,u),e.elementType=L,e.lanes=f,e;case U:return _s(a.children,u,f,n);case S:x=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case V:return e=ti(13,a,n,u),e.elementType=V,e.lanes=f,e;case z:return e=ti(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break t;case w:x=9;break t;case O:x=11;break t;case I:x=14;break t;case A:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function _s(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Uu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function Yp(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zp=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=Zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},Zp.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var tr=[],er=0,bl=null,oo=0,di=[],hi=0,Ua=null,Pi=1,Fi="";function na(e,n){tr[er++]=oo,tr[er++]=bl,bl=e,oo=n}function Kp(e,n,a){di[hi++]=Pi,di[hi++]=Fi,di[hi++]=Ua,Ua=e;var o=Pi;e=Fi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Pi=1<<32-zt(n)+u|a<<u|o,Fi=f+e}else Pi=1<<f|a<<u|o,Fi=e}function Nu(e){e.return!==null&&(na(e,1),Kp(e,1,0))}function Ou(e){for(;e===bl;)bl=tr[--er],tr[er]=null,oo=tr[--er],tr[er]=null;for(;e===Ua;)Ua=di[--hi],di[hi]=null,Fi=di[--hi],di[hi]=null,Pi=di[--hi],di[hi]=null}function Qp(e,n){di[hi++]=Pi,di[hi++]=Fi,di[hi++]=Ua,Pi=n.id,Fi=n.overflow,Ua=e}var En=null,Ke=null,Ce=!1,La=null,pi=!1,Pu=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(fi(n,e)),Pu}function Jp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[gn]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Ee(Uo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||m0(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Na(e,!0)}function $p(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:En=En.return}}function nr(e){if(e!==En)return!1;if(!Ce)return $p(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||td(e.type,e.memoizedProps)),a=!a),a&&Ke&&Na(e),$p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=E0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=E0(e)}else n===27?(n=Ke,qa(e.type)?(e=sd,sd=null,Ke=e):Ke=n):Ke=En?gi(e.stateNode.nextSibling):null;return!0}function vs(){Ke=En=null,Ce=!1}function Fu(){var e=La;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),La=null),e}function lo(e){La===null?La=[e]:La.push(e)}var Bu=B(null),xs=null,ia=null;function Oa(e,n,a){xt(Bu,n._currentValue),n._currentValue=a}function aa(e){e._currentValue=Bu.current,Z(Bu)}function zu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Iu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),zu(f.return,a,e),o||(x=null);break t}f=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),zu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ir(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;$n(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===yt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&Iu(n,e,a,o),n.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ys(e){xs=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return tm(xs,e)}function Tl(e,n){return xs===null&&ys(e),tm(e,n)}function tm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(s(308));ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ia=ia.next=n;return a}var Wx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qx=r.unstable_scheduleCallback,Yx=r.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Wx,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&qx(Yx,function(){e.controller.abort()})}var uo=null,Gu=0,ar=0,sr=null;function Zx(e,n){if(uo===null){var a=uo=[];Gu=0,ar=Xf(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(em,em),n}function em(){if(--Gu===0&&uo!==null){sr!==null&&(sr.status="fulfilled");var e=uo;uo=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Kx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var nm=F.S;F.S=function(e,n){Ig=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zx(e,n),nm!==null&&nm(e,n)};var Ss=B(null);function Vu(){var e=Ss.current;return e!==null?e:Ze.pooledCache}function Al(e,n){n===null?xt(Ss,Ss.current):xt(Ss,n.pool)}function im(){var e=Vu();return e===null?null:{parent:fn._currentValue,pool:e}}var rr=Error(s(460)),ku=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,om(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,om(e),e}throw bs=n,rr}}function Ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bs=a,rr):a}}var bs=null;function rm(){if(bs===null)throw Error(s(459));var e=bs;return bs=null,e}function om(e){if(e===rr||e===Rl)throw Error(s(483))}var or=null,fo=0;function wl(e){var n=fo;return fo+=1,or===null&&(or=[]),sm(or,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lm(e){function n(K,X){if(e){var et=K.deletions;et===null?(K.deletions=[X],K.flags|=16):et.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=ea(K,X),K.index=0,K.sibling=null,K}function f(K,X,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<X?(K.flags|=67108866,X):et):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,X,et,vt){return X===null||X.tag!==6?(X=Uu(et,K.mode,vt),X.return=K,X):(X=u(X,et),X.return=K,X)}function G(K,X,et,vt){var ee=et.type;return ee===U?mt(K,X,et.props.children,vt,et.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===A&&Ms(ee)===X.type)?(X=u(X,et.props),ho(X,et),X.return=K,X):(X=Ml(et.type,et.key,et.props,null,K.mode,vt),ho(X,et),X.return=K,X)}function nt(K,X,et,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Lu(et,K.mode,vt),X.return=K,X):(X=u(X,et.children||[]),X.return=K,X)}function mt(K,X,et,vt,ee){return X===null||X.tag!==7?(X=_s(et,K.mode,vt,ee),X.return=K,X):(X=u(X,et),X.return=K,X)}function St(K,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Uu(""+X,K.mode,et),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return et=Ml(X.type,X.key,X.props,null,K.mode,et),ho(et,X),et.return=K,et;case E:return X=Lu(X,K.mode,et),X.return=K,X;case A:return X=Ms(X),St(K,X,et)}if(tt(X)||Q(X))return X=_s(X,K.mode,et,null),X.return=K,X;if(typeof X.then=="function")return St(K,wl(X),et);if(X.$$typeof===N)return St(K,Tl(K,X),et);Dl(K,X)}return null}function rt(K,X,et,vt){var ee=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ee!==null?null:R(K,X,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===ee?G(K,X,et,vt):null;case E:return et.key===ee?nt(K,X,et,vt):null;case A:return et=Ms(et),rt(K,X,et,vt)}if(tt(et)||Q(et))return ee!==null?null:mt(K,X,et,vt,null);if(typeof et.then=="function")return rt(K,X,wl(et),vt);if(et.$$typeof===N)return rt(K,X,Tl(K,et),vt);Dl(K,et)}return null}function ct(K,X,et,vt,ee){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return K=K.get(et)||null,R(X,K,""+vt,ee);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case M:return K=K.get(vt.key===null?et:vt.key)||null,G(X,K,vt,ee);case E:return K=K.get(vt.key===null?et:vt.key)||null,nt(X,K,vt,ee);case A:return vt=Ms(vt),ct(K,X,et,vt,ee)}if(tt(vt)||Q(vt))return K=K.get(et)||null,mt(X,K,vt,ee,null);if(typeof vt.then=="function")return ct(K,X,et,wl(vt),ee);if(vt.$$typeof===N)return ct(K,X,et,Tl(X,vt),ee);Dl(X,vt)}return null}function Wt(K,X,et,vt){for(var ee=null,Pe=null,Qt=X,ve=X=0,Re=null;Qt!==null&&ve<et.length;ve++){Qt.index>ve?(Re=Qt,Qt=null):Re=Qt.sibling;var Fe=rt(K,Qt,et[ve],vt);if(Fe===null){Qt===null&&(Qt=Re);break}e&&Qt&&Fe.alternate===null&&n(K,Qt),X=f(Fe,X,ve),Pe===null?ee=Fe:Pe.sibling=Fe,Pe=Fe,Qt=Re}if(ve===et.length)return a(K,Qt),Ce&&na(K,ve),ee;if(Qt===null){for(;ve<et.length;ve++)Qt=St(K,et[ve],vt),Qt!==null&&(X=f(Qt,X,ve),Pe===null?ee=Qt:Pe.sibling=Qt,Pe=Qt);return Ce&&na(K,ve),ee}for(Qt=o(Qt);ve<et.length;ve++)Re=ct(Qt,K,ve,et[ve],vt),Re!==null&&(e&&Re.alternate!==null&&Qt.delete(Re.key===null?ve:Re.key),X=f(Re,X,ve),Pe===null?ee=Re:Pe.sibling=Re,Pe=Re);return e&&Qt.forEach(function(Ja){return n(K,Ja)}),Ce&&na(K,ve),ee}function ae(K,X,et,vt){if(et==null)throw Error(s(151));for(var ee=null,Pe=null,Qt=X,ve=X=0,Re=null,Fe=et.next();Qt!==null&&!Fe.done;ve++,Fe=et.next()){Qt.index>ve?(Re=Qt,Qt=null):Re=Qt.sibling;var Ja=rt(K,Qt,Fe.value,vt);if(Ja===null){Qt===null&&(Qt=Re);break}e&&Qt&&Ja.alternate===null&&n(K,Qt),X=f(Ja,X,ve),Pe===null?ee=Ja:Pe.sibling=Ja,Pe=Ja,Qt=Re}if(Fe.done)return a(K,Qt),Ce&&na(K,ve),ee;if(Qt===null){for(;!Fe.done;ve++,Fe=et.next())Fe=St(K,Fe.value,vt),Fe!==null&&(X=f(Fe,X,ve),Pe===null?ee=Fe:Pe.sibling=Fe,Pe=Fe);return Ce&&na(K,ve),ee}for(Qt=o(Qt);!Fe.done;ve++,Fe=et.next())Fe=ct(Qt,K,ve,Fe.value,vt),Fe!==null&&(e&&Fe.alternate!==null&&Qt.delete(Fe.key===null?ve:Fe.key),X=f(Fe,X,ve),Pe===null?ee=Fe:Pe.sibling=Fe,Pe=Fe);return e&&Qt.forEach(function(oS){return n(K,oS)}),Ce&&na(K,ve),ee}function We(K,X,et,vt){if(typeof et=="object"&&et!==null&&et.type===U&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var ee=et.key;X!==null;){if(X.key===ee){if(ee=et.type,ee===U){if(X.tag===7){a(K,X.sibling),vt=u(X,et.props.children),vt.return=K,K=vt;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===A&&Ms(ee)===X.type){a(K,X.sibling),vt=u(X,et.props),ho(vt,et),vt.return=K,K=vt;break t}a(K,X);break}else n(K,X);X=X.sibling}et.type===U?(vt=_s(et.props.children,K.mode,vt,et.key),vt.return=K,K=vt):(vt=Ml(et.type,et.key,et.props,null,K.mode,vt),ho(vt,et),vt.return=K,K=vt)}return x(K);case E:t:{for(ee=et.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(K,X.sibling),vt=u(X,et.children||[]),vt.return=K,K=vt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}vt=Lu(et,K.mode,vt),vt.return=K,K=vt}return x(K);case A:return et=Ms(et),We(K,X,et,vt)}if(tt(et))return Wt(K,X,et,vt);if(Q(et)){if(ee=Q(et),typeof ee!="function")throw Error(s(150));return et=ee.call(et),ae(K,X,et,vt)}if(typeof et.then=="function")return We(K,X,wl(et),vt);if(et.$$typeof===N)return We(K,X,Tl(K,et),vt);Dl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(K,X.sibling),vt=u(X,et),vt.return=K,K=vt):(a(K,X),vt=Uu(et,K.mode,vt),vt.return=K,K=vt),x(K)):a(K,X)}return function(K,X,et,vt){try{fo=0;var ee=We(K,X,et,vt);return or=null,ee}catch(Qt){if(Qt===rr||Qt===Rl)throw Qt;var Pe=ti(29,Qt,null,K.mode);return Pe.lanes=vt,Pe.return=K,Pe}}}var Es=lm(!0),cm=lm(!1),Pa=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(e),Wp(e,null,a),n}return yl(e,o,n,a),Sl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vs(e,a)}}function Wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function mo(){if(qu){var e=sr;if(e!==null)throw e}}function go(e,n,a,o){qu=!1;var u=e.updateQueue;Pa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,nt=G.next;G.next=null,x===null?f=nt:x.next=nt,x=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==x&&(R===null?mt.firstBaseUpdate=nt:R.next=nt,mt.lastBaseUpdate=G))}if(f!==null){var St=u.baseState;x=0,mt=nt=G=null,R=f;do{var rt=R.lane&-536870913,ct=rt!==R.lane;if(ct?(Ae&rt)===rt:(o&rt)===rt){rt!==0&&rt===ar&&(qu=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,ae=R;rt=n;var We=a;switch(ae.tag){case 1:if(Wt=ae.payload,typeof Wt=="function"){St=Wt.call(We,St,rt);break t}St=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ae.payload,rt=typeof Wt=="function"?Wt.call(We,St,rt):Wt,rt==null)break t;St=y({},St,rt);break t;case 2:Pa=!0}}rt=R.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(nt=mt=ct,G=St):mt=mt.next=ct,x|=rt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);mt===null&&(G=St),u.baseState=G,u.firstBaseUpdate=nt,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),Va|=x,e.lanes=x,e.memoizedState=St}}function um(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)um(a[e],n)}var lr=B(null),Ul=B(0);function dm(e,n){e=ha,xt(Ul,e),xt(lr,n),ha=e|n.baseLanes}function Yu(){xt(Ul,ha),xt(lr,lr.current)}function Zu(){ha=Ul.current,Z(lr),Z(Ul)}var ei=B(null),mi=null;function za(e){var n=e.alternate;xt(rn,rn.current&1),xt(ei,e),mi===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(mi=e)}function Ku(e){xt(rn,rn.current),xt(ei,e),mi===null&&(mi=e)}function hm(e){e.tag===22?(xt(rn,rn.current),xt(ei,e),mi===null&&(mi=e)):Ia()}function Ia(){xt(rn,rn.current),xt(ei,ei.current)}function ni(e){Z(ei),mi===e&&(mi=null),Z(rn)}var rn=B(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||id(a)||ad(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,me=null,je=null,dn=null,Nl=!1,cr=!1,Ts=!1,Ol=0,_o=0,ur=null,Qx=0;function nn(){throw Error(s(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function Ju(e,n,a,o,u,f){return sa=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Km:pf,Ts=!1,f=a(o,u),Ts=!1,cr&&(f=mm(n,a,o,u)),pm(e),f}function pm(e){F.H=yo;var n=je!==null&&je.next!==null;if(sa=0,dn=je=me=null,Nl=!1,_o=0,ur=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&El(e)&&(hn=!0))}function mm(e,n,a,o){me=e;var u=0;do{if(cr&&(ur=null),_o=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,dn=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Qm,f=n(a,o)}while(cr);return f}function Jx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(me.flags|=1024),n}function $u(){var e=Ol!==0;return Ol=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}sa=0,dn=je=me=null,cr=!1,_o=Ol=0,ur=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?me.memoizedState=dn=e:dn=dn.next=e,dn}function on(){if(je===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=dn===null?me.memoizedState:dn.next;if(n!==null)dn=n,je=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},dn===null?me.memoizedState=dn=e:dn=dn.next=e}return dn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,ur===null&&(ur=[]),e=sm(ur,e,n),n=me,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Km:pf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===N)return Tn(e)}throw Error(s(438,String(e)))}function nf(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=dt;return n.index++,a}function ra(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=on();return af(n,je,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=x=null,G=null,nt=n,mt=!1;do{var St=nt.lane&-536870913;if(St!==nt.lane?(Ae&St)===St:(sa&St)===St){var rt=nt.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),St===ar&&(mt=!0);else if((sa&rt)===rt){nt=nt.next,rt===ar&&(mt=!0);continue}else St={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=St,x=f):G=G.next=St,me.lanes|=rt,Va|=rt;St=nt.action,Ts&&a(f,St),f=nt.hasEagerState?nt.eagerState:a(f,St)}else rt={lane:St,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=rt,x=f):G=G.next=rt,me.lanes|=St,Va|=St;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?x=f:G.next=R,!$n(f,e.memoizedState)&&(hn=!0,mt&&(a=sr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);$n(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function gm(e,n,a){var o=me,u=on(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!$n((je||u).memoizedState,a);if(x&&(u.memoizedState=a,hn=!0),u=u.queue,lf(xm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},vm.bind(null,o,u,a,n),null),Ze===null)throw Error(s(349));f||(sa&127)!==0||_m(o,n,a)}return a}function _m(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Pl(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vm(e,n,a,o){n.value=a,n.getSnapshot=o,ym(n)&&Sm(e)}function xm(e,n,a){return a(function(){ym(n)&&Sm(e)})}function ym(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Sm(e){var n=gs(e,2);n!==null&&Wn(n,e,2)}function rf(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),Ts){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},n}function Mm(e,n,a,o){return e.baseState=a,af(e,je,typeof o=="function"?o:ra)}function $x(e,n,a,o,u){if(Hl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,x={};F.T=x;try{var R=a(u,o),G=F.S;G!==null&&G(x,R),Em(e,n,R)}catch(nt){of(e,n,nt)}finally{f!==null&&x.types!==null&&(f.types=x.types),F.T=f}}else try{f=a(u,o),Em(e,n,f)}catch(nt){of(e,n,nt)}}function Em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(e,n,o)},function(o){return of(e,n,o)}):Tm(e,n,a)}function Tm(e,n,a){n.status="fulfilled",n.value=a,Am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bm(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}e.action=null}function Am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rm(e,n){return n}function Cm(e,n){if(Ce){var a=Ze.formState;if(a!==null){t:{var o=me;if(Ce){if(Ke){e:{for(var u=Ke,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=gi(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=qm.bind(null,me,o),o.dispatch=a,o=rf(!1),f=hf.bind(null,me,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$x.bind(null,me,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function wm(e){var n=on();return Dm(n,je,e)}function Dm(e,n,a){if(n=af(e,n,Rm)[0],e=Bl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(x){throw x===rr?Rl:x}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,fr(9,{destroy:void 0},ty.bind(null,u,a),null)),[o,f,e]}function ty(e,n){e.action=n}function Um(e){var n=on(),a=je;if(a!==null)return Dm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=me.updateQueue,n===null&&(n=Pl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Lm(){return on().memoizedState}function zl(e,n,a,o){var u=zn();me.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;je!==null&&o!==null&&Qu(o,je.memoizedState.deps)?u.memoizedState=fr(n,f,a,o):(me.flags|=e,u.memoizedState=fr(1|n,f,a,o))}function Nm(e,n){zl(8390656,8,e,n)}function lf(e,n){Il(2048,8,e,n)}function ey(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=Pl(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Om(e){var n=on().memoizedState;return ey({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Pm(e,n){return Il(4,2,e,n)}function Fm(e,n){return Il(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zm(e,n,a){a=a!=null?a.concat([e]):null,Il(4,4,Bm.bind(null,n,e),a)}function cf(){}function Im(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Hm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qu(n,o[1]))return o[0];if(o=e(),Ts){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function uf(e,n,a){return a===void 0||(sa&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Gg(),me.lanes|=e,Va|=e,a)}function Gm(e,n,a,o){return $n(a,n)?a:lr.current!==null?(e=uf(e,a,o),$n(e,n)||(hn=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(Ae&261930)===0?(hn=!0,e.memoizedState=a):(e=Gg(),me.lanes|=e,Va|=e,n)}function Vm(e,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var x=F.T,R={};F.T=R,hf(e,!1,n,a);try{var G=u(),nt=F.S;if(nt!==null&&nt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=Kx(G,o);xo(e,n,mt,si(e))}else xo(e,n,o,si(e))}catch(St){xo(e,n,{then:function(){},status:"rejected",reason:St},si())}finally{H.p=f,x!==null&&R.types!==null&&(x.types=R.types),F.T=x}}function ny(){}function ff(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=km(e).queue;Vm(e,u,n,ut,a===null?ny:function(){return jm(e),a(o)})}function km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ut},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jm(e){var n=km(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},si())}function df(){return Tn(Fo)}function Xm(){return on().memoizedState}function Wm(){return on().memoizedState}function iy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Fa(a);var o=Ba(n,e,a);o!==null&&(Wn(o,n,a),po(o,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function ay(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Ym(n,a):(a=wu(e,n,a,o),a!==null&&(Wn(a,e,o),Zm(a,n,o)))}function qm(e,n,a){var o=si();xo(e,n,a,o)}function xo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Ym(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,x))return yl(e,n,u,0),Ze===null&&xl(),!1}catch{}if(a=wu(e,n,u,o),a!==null)return Wn(a,e,o),Zm(a,n,o),!0}return!1}function hf(e,n,a,o){if(o={lane:2,revertLane:Xf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(s(479))}else n=wu(e,a,o,2),n!==null&&Wn(n,e,2)}function Hl(e){var n=e.alternate;return e===me||n!==null&&n===me}function Ym(e,n){cr=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vs(e,a)}}var yo={readContext:Tn,use:Fl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};yo.useEffectEvent=nn;var Km={readContext:Tn,use:Fl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zl(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){zl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(Ts){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Ts){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ay.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=rf(e);var n=e.queue,a=qm.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,n){var a=zn();return uf(a,e,n)},useTransition:function(){var e=rf(!1);return e=Vm.bind(null,me,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=me,u=zn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ze===null)throw Error(s(349));(Ae&127)!==0||_m(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Nm(xm.bind(null,o,f,e),[e]),o.flags|=2048,fr(9,{destroy:void 0},vm.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=Ze.identifierPrefix;if(Ce){var a=Fi,o=Pi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Qx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:df,useFormState:Cm,useActionState:Cm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hf.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return zn().memoizedState=iy.bind(null,me)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Tn,use:Fl,useCallback:Im,useContext:Tn,useEffect:lf,useImperativeHandle:zm,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:Bl,useRef:Lm,useState:function(){return Bl(ra)},useDebugValue:cf,useDeferredValue:function(e,n){var a=on();return Gm(a,je.memoizedState,e,n)},useTransition:function(){var e=Bl(ra)[0],n=on().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:gm,useId:Xm,useHostTransitionStatus:df,useFormState:wm,useActionState:wm,useOptimistic:function(e,n){var a=on();return Mm(a,je,e,n)},useMemoCache:nf,useCacheRefresh:Wm};pf.useEffectEvent=Om;var Qm={readContext:Tn,use:Fl,useCallback:Im,useContext:Tn,useEffect:lf,useImperativeHandle:zm,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:sf,useRef:Lm,useState:function(){return sf(ra)},useDebugValue:cf,useDeferredValue:function(e,n){var a=on();return je===null?uf(a,e,n):Gm(a,je.memoizedState,e,n)},useTransition:function(){var e=sf(ra)[0],n=on().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:gm,useId:Xm,useHostTransitionStatus:df,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=on();return je!==null?Mm(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Wm};Qm.useEffectEvent=Om;function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Wn(n,e,o),po(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Wn(n,e,o),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(e,o,a),n!==null&&(Wn(n,e,a),po(n,e,a))}};function Jm(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(u,f):!0}function $m(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function As(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function tg(e){vl(e)}function eg(e){console.error(e)}function ng(e){vl(e)}function Gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ig(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,n)},a}function ag(e){return e=Fa(e),e.tag=3,e}function sg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){ig(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){ig(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function sy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?$l():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(e,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(e,o,u)),!1}throw Error(s(435,a.tag))}return Vf(e,o,u),$l(),!1}if(Ce)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(e=Error(s(422),{cause:o}),lo(fi(e,a)))):(o!==Pu&&(n=Error(s(423),{cause:o}),lo(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=_f(e.stateNode,o,u),Wu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),Co===null?Co=[f]:Co.push(f),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),Wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ag(u),sg(u,e,a,o),Wu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(s(461)),hn=!1;function An(e,n,a,o){n.child=e===null?cm(n,null,a,o):Es(n,e.child,a,o)}function rg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return ys(n),o=Ju(e,n,a,x,f,u),R=$u(),e!==null&&!hn?(tf(e,n,u),oa(e,n,u)):(Ce&&R&&Nu(n),n.flags|=1,An(e,n,o,u),n.child)}function og(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,lg(e,n,f,o,u)):(e=Ml(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Af(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(x,o)&&e.ref===n.ref)return oa(e,n,u)}return n.flags|=1,e=ea(f,o),e.ref=n.ref,e.return=n,n.child=e}function lg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(so(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,Af(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,oa(e,n,u)}return xf(e,n,a,o,u)}function cg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return ug(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,f!==null?f.cachePool:null),f!==null?dm(n,f):Yu(),hm(n);else return o=n.lanes=536870912,ug(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Al(n,f.cachePool),dm(n,f),Ia(),n.memoizedState=null):(e!==null&&Al(n,null),Yu(),Ia());return An(e,n,u,a),n.child}function So(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ug(e,n,a,o,u){var f=Vu();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Al(n,null),Yu(),hm(n),e!==null&&ir(e,n,o,!0),n.childLanes=u,null}function Vl(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function fg(e,n,a){return Es(n,e.child,null,a),e=Vl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function ry(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Vl(n,o),n.lanes=536870912,So(null,e);if(Ku(n),(e=Ke)?(e=b0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=n,n.child=a,En=n,Ke=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Vl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=fg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||ir(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Ze,o!==null&&(x=ol(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,gs(e,x),Wn(o,e,x),vf;$l(),n=fg(e,n,a)}else e=f.treeContext,Ke=gi(x.nextSibling),En=n,Ce=!0,La=null,pi=!1,e!==null&&Qp(n,e),n=Vl(n,o),n.flags|=4096;return n}return e=ea(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,o,u){return ys(n),a=Ju(e,n,a,o,void 0,u),o=$u(),e!==null&&!hn?(tf(e,n,u),oa(e,n,u)):(Ce&&o&&Nu(n),n.flags|=1,An(e,n,a,u),n.child)}function dg(e,n,a,o,u,f){return ys(n),n.updateQueue=null,a=mm(n,o,a,u),pm(e),o=$u(),e!==null&&!hn?(tf(e,n,f),oa(e,n,f)):(Ce&&o&&Nu(n),n.flags|=1,An(e,n,a,f),n.child)}function hg(e,n,a,o,u){if(ys(n),n.stateNode===null){var f=$s,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ju(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):$s,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(mf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&gf.enqueueReplaceState(f,f.state,null),go(n,o,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=As(a,R);f.props=G;var nt=f.context,mt=a.contextType;x=$s,typeof mt=="object"&&mt!==null&&(x=Tn(mt));var St=a.getDerivedStateFromProps;mt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==x)&&$m(n,f,o,x),Pa=!1;var rt=n.memoizedState;f.state=rt,go(n,o,f,u),mo(),nt=n.memoizedState,R||rt!==nt||Pa?(typeof St=="function"&&(mf(n,a,St,o),nt=n.memoizedState),(G=Pa||Jm(n,a,G,o,rt,nt,x))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=x,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Xu(e,n),x=n.memoizedProps,mt=As(a,x),f.props=mt,St=n.pendingProps,rt=f.context,nt=a.contextType,G=$s,typeof nt=="object"&&nt!==null&&(G=Tn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==St||rt!==G)&&$m(n,f,o,G),Pa=!1,rt=n.memoizedState,f.state=rt,go(n,o,f,u),mo();var ct=n.memoizedState;x!==St||rt!==ct||Pa||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof R=="function"&&(mf(n,a,R,o),ct=n.memoizedState),(mt=Pa||Jm(n,a,mt,o,rt,ct,G)||e!==null&&e.dependencies!==null&&El(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=G,o=mt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,kl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Es(n,e.child,null,u),n.child=Es(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=oa(e,n,u),e}function pg(e,n,a,o){return vs(),n.flags|=256,An(e,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:im()}}function Mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function mg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?za(n):Ia(),(e=Ke)?(e=b0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=n,n.child=a,En=n,Ke=null)):e=null,e===null)throw Na(n);return ad(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ia(),u=n.mode,R=jl({mode:"hidden",children:R},u),o=_s(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(e,x,a),n.memoizedState=yf,So(null,o)):(za(n),bf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=Ef(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),R=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),R=_s(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Es(n,e.child,null,a),o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(e,x,a),n.memoizedState=yf,n=So(null,o));else if(za(n),ad(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(s(419)),o.stack="",o.digest=x,lo({value:o,source:null,stack:null}),n=Ef(e,n,a)}else if(hn||ir(e,n,a,!1),x=(a&e.childLanes)!==0,hn||x){if(x=Ze,x!==null&&(o=ol(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,gs(e,o),Wn(x,e,o),vf;id(R)||$l(),n=Ef(e,n,a)}else id(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ke=gi(R.nextSibling),En=n,Ce=!0,La=null,pi=!1,e!==null&&Qp(n,e),n=bf(n,o.children),n.flags|=4096);return n}return u?(Ia(),R=o.fallback,u=n.mode,G=e.child,nt=G.sibling,o=ea(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,nt!==null?R=ea(nt,R):(R=_s(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,So(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Sf(a):(u=R.cachePool,u!==null?(G=fn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=im(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Mf(e,x,a),n.memoizedState=yf,So(e.child,o)):(za(n),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function bf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Ef(e,n,a){return Es(n,e.child,null,a),e=bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),zu(e.return,n,a)}function Tf(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function _g(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=rn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,xt(rn,x),An(e,n,o,a),o=Ce?oo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gg(e,a,n);else if(e.tag===19)gg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,f,o);break;case"together":Tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function oy(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Oa(n,fn,e.memoizedState.cache),vs();break;case 27:case 5:Dt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mg(e,n,a):(za(n),e=oa(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return _g(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,cg(e,n,a,n.pendingProps);case 24:Oa(n,fn,e.memoizedState.cache)}return oa(e,n,a)}function vg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return hn=!1,oy(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ce&&(n.flags&1048576)!==0&&Kp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ms(n.elementType),n.type=e,typeof e=="function")Du(e)?(o=As(e,o),n.tag=1,n=hg(null,n,e,o,a)):(n.tag=0,n=xf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=rg(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=og(null,n,e,o,a);break t}}throw n=ot(e)||e,Error(s(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=As(o,n.pendingProps),hg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Xu(e,n),go(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Oa(n,fn,o),o!==f.cache&&Iu(n,[fn],a,!0),mo(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=pg(e,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),lo(u),n=pg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=gi(e.firstChild),En=n,Ce=!0,La=null,pi=!0,a=cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),o===u){n=oa(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=w0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=rc(at.current).createElement(a),o[ln]=n,o[gn]=e,Rn(o,a,e),W(o),n.stateNode=o):n.memoizedState=w0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Dt(n),e===null&&Ce&&(o=n.stateNode=A0(n.type,n.pendingProps,at.current),En=n,pi=!0,u=Ke,qa(n.type)?(sd=u,Ke=gi(o.firstChild)):Ke=u),An(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=Ke)&&(o=By(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,En=n,Ke=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Na(n)),Dt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,td(u,f)?o=null:x!==null&&td(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,Jx,null,null,a),Fo._currentValue=u),kl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=Ke)&&(a=zy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,En=n,Ke=null,e=!0):e=!1),e||Na(n)),null;case 13:return mg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Es(n,null,o,a):An(e,n,o,a),n.child;case 11:return rg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=Tn(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return og(e,n,n.type,n.pendingProps,a);case 15:return lg(e,n,n.type,n.pendingProps,a);case 19:return _g(e,n,a);case 31:return ry(e,n,a);case 22:return cg(e,n,a,n.pendingProps);case 24:return ys(n),o=Tn(fn),e===null?(u=Vu(),u===null&&(u=Ze,f=Hu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ju(n),Oa(n,fn,u)):((e.lanes&a)!==0&&(Xu(e,n),go(n,null,null,a),mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,fn,o)):(o=f.cache,Oa(n,fn,o),o!==u.cache&&Iu(n,[fn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(e){e.flags|=4}function Rf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Xg())e.flags|=8192;else throw bs=Cl,ku}else e.flags&=-16777217}function xg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!O0(n))if(Xg())e.flags|=8192;else throw bs=Cl,ku}function Xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?He():536870912,e.lanes|=n,mr|=n)}function Mo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ly(e,n,a){var o=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(fn),ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?la(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(la(n),f!==null?(Qe(n),xg(n,f)):(Qe(n),Rf(n,u,null,o,a))):f?f!==e.memoizedState?(la(n),Qe(n),xg(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&la(n),Qe(n),Rf(n,u,e,o,a)),null;case 27:if(Nt(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=Et.current,nr(n)?Jp(n):(e=A0(u,o,a),n.stateNode=e,la(n))}return Qe(n),null;case 5:if(Nt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(f=Et.current,nr(n))Jp(n);else{var x=rc(at.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[ln]=n,f[gn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Rn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&la(n)}}return Qe(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||m0(e.nodeValue,a)),e||Na(n,!0)}else e=rc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=nr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Qe(n),null);case 4:return ft(),e===null&&Zf(n.stateNode.containerInfo),Qe(n),null;case 10:return aa(n.type),Qe(n),null;case 19:if(Z(rn),o=n.memoizedState,o===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Mo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,Mo(o,!1),e=f.updateQueue,n.updateQueue=e,Xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)qp(a,e),a=a.sibling;return xt(rn,rn.current&1|2),Ce&&na(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Kl&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ll(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Xl(n,e),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ce)return Qe(n),null}else 2*T()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=rn.current,xt(rn,u?a&1|2:a&1),Ce&&na(n,o.treeForkCount),e):(Qe(n),null);case 22:case 23:return ni(n),Zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(Ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(fn),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cy(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return aa(fn),ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Nt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(rn),null;case 4:return ft(),null;case 10:return aa(n.type),null;case 22:case 23:return ni(n),Zu(),e!==null&&Z(Ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return aa(fn),null;case 25:return null;default:return null}}function yg(e,n){switch(Ou(n),n.tag){case 3:aa(fn),ft();break;case 26:case 27:case 5:Nt(n);break;case 4:ft();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Z(rn);break;case 10:aa(n.type);break;case 22:case 23:ni(n),Zu(),e!==null&&Z(Ss);break;case 24:aa(fn)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Ve(n,n.return,R)}}function Ha(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var G=a,nt=R;try{nt()}catch(mt){Ve(u,G,mt)}}}o=o.next}while(o!==f)}}catch(mt){Ve(n,n.return,mt)}}function Sg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fm(n,a)}catch(o){Ve(e,e.return,o)}}}function Mg(e,n,a){a.props=As(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function bg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Cf(e,n,a){try{var o=e.stateNode;Uy(o,e.type,a,n),o[gn]=n}catch(u){Ve(e,e.return,u)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function Wl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wl(e,n,a),e=e.sibling;e!==null;)Wl(e,n,a),e=e.sibling}function Tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[ln]=e,n[gn]=a}catch(f){Ve(e,e.return,f)}}var ca=!1,pn=!1,Uf=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function uy(e,n){if(e=e.containerInfo,Jf=hc,e=zp(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,R=-1,G=-1,nt=0,mt=0,St=e,rt=null;e:for(;;){for(var ct;St!==a||u!==0&&St.nodeType!==3||(R=x+u),St!==f||o!==0&&St.nodeType!==3||(G=x+o),St.nodeType===3&&(x+=St.nodeValue.length),(ct=St.firstChild)!==null;)rt=St,St=ct;for(;;){if(St===e)break e;if(rt===a&&++nt===u&&(R=x),rt===f&&++mt===o&&(G=x),(ct=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=ct}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},hc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=As(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ve(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function Rg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),o&4&&bo(5,a);break;case 1:if(fa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ve(a,a.return,x)}else{var u=As(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ve(a,a.return,x)}}o&64&&Sg(a),o&512&&Eo(a,a.return);break;case 3:if(fa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(e,n)}catch(x){Ve(a,a.return,x)}}break;case 27:n===null&&o&4&&Tg(a);case 26:case 5:fa(e,a),n===null&&o&4&&bg(a),o&512&&Eo(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),o&4&&Dg(e,a);break;case 13:fa(e,a),o&4&&Ug(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xy.bind(null,a),Iy(e,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||pn,u=ca;var f=pn;ca=o,(pn=n)&&!f?da(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ca=u,pn=f}break;case 30:break;default:fa(e,a)}}function Cg(e){var n=e.alternate;n!==null&&(e.alternate=null,Cg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Vn=!1;function ua(e,n,a){for(a=a.child;a!==null;)wg(e,n,a),a=a.sibling}function wg(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:pn||Bi(a,n),ua(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Bi(a,n);var o=tn,u=Vn;qa(a.type)&&(tn=a.stateNode,Vn=!1),ua(e,n,a),No(a.stateNode),tn=o,Vn=u;break;case 5:pn||Bi(a,n);case 6:if(o=tn,u=Vn,tn=null,ua(e,n,a),tn=o,Vn=u,tn!==null)if(Vn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:tn!==null&&(Vn?(e=tn,S0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):S0(tn,a.stateNode));break;case 4:o=tn,u=Vn,tn=a.stateNode.containerInfo,Vn=!0,ua(e,n,a),tn=o,Vn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),pn||Ha(4,a,n),ua(e,n,a);break;case 1:pn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Mg(a,n,o)),ua(e,n,a);break;case 21:ua(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ua(e,n,a),pn=o;break;default:ua(e,n,a)}}function Dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Ve(n,n.return,a)}}}function Ug(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Ve(n,n.return,a)}}function fy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ag),n;default:throw Error(s(435,e.tag))}}function ql(e,n){var a=fy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=yy.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){tn=R.stateNode,Vn=!1;break t}break;case 5:tn=R.stateNode,Vn=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,Vn=!0;break t}R=R.return}if(tn===null)throw Error(s(160));wg(f,x,u),tn=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lg(n,e),n=n.sibling}var Ri=null;function Lg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),jn(e),o&4&&(Ha(3,e,e.return),bo(3,e),Ha(5,e,e.return));break;case 1:kn(n,e),jn(e),o&512&&(pn||a===null||Bi(a,a.return)),o&64&&ca&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(kn(n,e),jn(e),o&512&&(pn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fs]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[ln]=e,W(f),o=f;break t;case"link":var x=L0("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(x=L0("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,W(f),o=f}e.stateNode=o}else N0(u,e.type,e.stateNode);else e.stateNode=U0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?N0(u,e.type,e.stateNode):U0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),jn(e),o&512&&(pn||a===null||Bi(a,a.return)),a!==null&&o&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),jn(e),o&512&&(pn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{Bn(u,"")}catch(Wt){Ve(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(kn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Ve(e,e.return,Wt)}}break;case 3:if(cc=null,u=Ri,Ri=oc(n.containerInfo),kn(n,e),Ri=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Wt){Ve(e,e.return,Wt)}Uf&&(Uf=!1,Ng(e));break;case 4:o=Ri,Ri=oc(e.stateNode.containerInfo),kn(n,e),jn(e),Ri=o;break;case 12:kn(n,e),jn(e);break;case 31:kn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 13:kn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=ca,mt=pn;if(ca=nt||u,pn=mt||G,kn(n,e),pn=mt,ca=nt,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ca||pn||Rs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=G.stateNode;var St=G.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Ve(G,G.return,Wt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){Ve(G,G.return,Wt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?M0(ct,!0):M0(G.stateNode,!1)}catch(Wt){Ve(G,G.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(e,a))));break;case 19:kn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 30:break;case 21:break;default:kn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Eg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(e);Wl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Bn(x,""),a.flags&=-33);var R=wf(e);Wl(e,R,x);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=wf(e);Df(e,nt,G);break;default:throw Error(s(161))}}catch(mt){Ve(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ng(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rg(e,n.alternate,n),n=n.sibling}function Rs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Rs(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mg(n,n.return,a),Rs(n);break;case 27:No(n.stateNode);case 26:case 5:Bi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}e=e.sibling}}function da(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),bo(4,f);break;case 1:if(da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Ve(o,o.return,nt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)um(G[u],R)}catch(nt){Ve(o,o.return,nt)}}a&&x&64&&Sg(f),Eo(f,f.return);break;case 27:Tg(f);case 26:case 5:da(u,f,a),a&&o===null&&x&4&&bg(f),Eo(f,f.return);break;case 12:da(u,f,a);break;case 31:da(u,f,a),a&&x&4&&Dg(u,f);break;case 13:da(u,f,a),a&&x&4&&Ug(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),Eo(f,f.return);break;case 30:break;default:da(u,f,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Og(e,n,a,o),n=n.sibling}function Og(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&bo(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ve(n,n.return,G)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):To(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,dr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(x,n);break;case 24:Ci(e,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Ci(e,n,a,o)}}function dr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,R=a,G=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:dr(f,x,R,G,u),bo(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?dr(f,x,R,G,u):To(f,x):(mt._visibility|=2,dr(f,x,R,G,u)),u&&nt&2048&&Lf(x.alternate,x);break;case 24:dr(f,x,R,G,u),u&&nt&2048&&Nf(x.alternate,x);break;default:dr(f,x,R,G,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&Lf(o.alternate,o);break;case 24:To(a,o),u&2048&&Nf(o.alternate,o);break;default:To(a,o)}n=n.sibling}}var Ao=8192;function hr(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)Pg(e,n,a),e=e.sibling}function Pg(e,n,a){switch(e.tag){case 26:hr(e,n,a),e.flags&Ao&&e.memoizedState!==null&&Qy(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:hr(e,n,a);break;case 3:case 4:var o=Ri;Ri=oc(e.stateNode.containerInfo),hr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,hr(e,n,a),Ao=o):hr(e,n,a));break;default:hr(e,n,a)}}function Fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,zg(o,e)}Fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bg(e),e=e.sibling}function Bg(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):Ro(e);break;default:Ro(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,zg(o,e)}Fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function zg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(Cg(o),o===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var dy={getCacheForType:function(e){var n=Tn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(fn).controller.signal}},hy=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,be=null,Ae=0,Ge=0,ii=null,Ga=!1,pr=!1,Of=!1,ha=0,an=0,Va=0,Cs=0,Pf=0,ai=0,mr=0,Co=null,Xn=null,Ff=!1,Zl=0,Ig=0,Kl=1/0,Ql=null,ka=null,vn=0,ja=null,gr=null,pa=0,Bf=0,zf=null,Hg=null,wo=0,If=null;function si(){return(Be&2)!==0&&Ae!==0?Ae&-Ae:F.T!==null?Xf():Oi()}function Gg(){if(ai===0)if((Ae&536870912)===0||Ce){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Wn(e,n,a){(e===Ze&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Xa(e,Ae,ai,!1)),On(e,a),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(Cs|=a),an===4&&Xa(e,Ae,ai,!1)),zi(e))}function Vg(e,n,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||jt(e,n),u=o?gy(e,n):Gf(e,n,!0),f=o;do{if(u===0){pr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!py(a)){u=Gf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=Co;var G=R.current.memoizedState.isDehydrated;if(G&&(_r(R,x).flags|=256),x=Gf(R,x,!1),x!==2){if(Of&&!G){R.errorRecoveryDisabledLanes|=f,Cs|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){_r(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ai,!Ga);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-T(),10<u)){if(Xa(o,n,ai,!Ga),ht(o,0,!0)!==0)break t;pa=n,o.timeoutHandle=x0(kg.bind(null,o,a,Xn,Ql,Ff,n,ai,Cs,mr,Ga,f,"Throttled",-0,0),u);break t}kg(o,a,Xn,Ql,Ff,n,ai,Cs,mr,Ga,f,null,-0,0)}}break}while(!0);zi(e)}function kg(e,n,a,o,u,f,x,R,G,nt,mt,St,rt,ct){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},Pg(n,f,St);var Wt=(f&62914560)===f?Zl-T():(f&4194048)===f?Ig-T():0;if(Wt=Jy(St,Wt),Wt!==null){pa=f,e.cancelPendingCommit=Wt(Qg.bind(null,e,n,f,a,o,u,x,R,G,mt,St,null,rt,ct)),Xa(e,f,x,!nt);return}}Qg(e,n,f,a,o,u,x,R,G)}function py(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~Pf,n&=~Cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&Kr(e,a,n)}function Jl(){return(Be&6)===0?(Do(0),!1):!0}function Hf(){if(be!==null){if(Ge===0)var e=be.return;else e=be,ia=xs=null,ef(e),or=null,fo=0,e=be;for(;e!==null;)yg(e.alternate,e),e=e.return;be=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Oy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,Hf(),Ze=e,be=a=ea(e.current,null),Ae=n,Ge=0,ii=null,Ga=!1,pr=jt(e,n),Of=!1,mr=ai=Pf=Cs=Va=an=0,Xn=Co=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return ha=n,xl(),a}function jg(e,n){me=null,F.H=yo,n===rr||n===Rl?(n=rm(),Ge=3):n===ku?(n=rm(),Ge=4):Ge=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,be===null&&(an=1,Gl(e,fi(n,e.current)))}function Xg(){var e=ei.current;return e===null?!0:(Ae&4194048)===Ae?mi===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===mi:!1}function Wg(){var e=F.H;return F.H=yo,e===null?yo:e}function qg(){var e=F.A;return F.A=dy,e}function $l(){an=4,Ga||(Ae&4194048)!==Ae&&ei.current!==null||(pr=!0),(Va&134217727)===0&&(Cs&134217727)===0||Ze===null||Xa(Ze,Ae,ai,!1)}function Gf(e,n,a){var o=Be;Be|=2;var u=Wg(),f=qg();(Ze!==e||Ae!==n)&&(Ql=null,_r(e,n)),n=!1;var x=an;t:do try{if(Ge!==0&&be!==null){var R=be,G=ii;switch(Ge){case 8:Hf(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Ge;if(Ge=0,ii=null,vr(e,R,G,nt),a&&pr){x=0;break t}break;default:nt=Ge,Ge=0,ii=null,vr(e,R,G,nt)}}my(),x=an;break}catch(mt){jg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ia=xs=null,Be=o,F.H=u,F.A=f,be===null&&(Ze=null,Ae=0,xl()),x}function my(){for(;be!==null;)Yg(be)}function gy(e,n){var a=Be;Be|=2;var o=Wg(),u=qg();Ze!==e||Ae!==n?(Ql=null,Kl=T()+500,_r(e,n)):pr=jt(e,n);t:do try{if(Ge!==0&&be!==null){n=be;var f=ii;e:switch(Ge){case 1:Ge=0,ii=null,vr(e,n,f,1);break;case 2:case 9:if(am(f)){Ge=0,ii=null,Zg(n);break}n=function(){Ge!==2&&Ge!==9||Ze!==e||(Ge=7),zi(e)},f.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:am(f)?(Ge=0,ii=null,Zg(n)):(Ge=0,ii=null,vr(e,n,f,7));break;case 5:var x=null;switch(be.tag){case 26:x=be.memoizedState;case 5:case 27:var R=be;if(x?O0(x):R.stateNode.complete){Ge=0,ii=null;var G=R.sibling;if(G!==null)be=G;else{var nt=R.return;nt!==null?(be=nt,tc(nt)):be=null}break e}}Ge=0,ii=null,vr(e,n,f,5);break;case 6:Ge=0,ii=null,vr(e,n,f,6);break;case 8:Hf(),an=6;break t;default:throw Error(s(462))}}_y();break}catch(mt){jg(e,mt)}while(!0);return ia=xs=null,F.H=o,F.A=u,Be=a,be!==null?0:(Ze=null,Ae=0,xl(),an)}function _y(){for(;be!==null&&!Kt();)Yg(be)}function Yg(e){var n=vg(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?tc(e):be=n}function Zg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:ef(n);default:yg(a,n),n=be=qp(n,ha),n=vg(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?tc(e):be=n}function vr(e,n,a,o){ia=xs=null,ef(n),or=null,fo=0;var u=n.return;try{if(sy(e,u,n,a,Ae)){an=1,Gl(e,fi(a,e.current)),be=null;return}}catch(f){if(u!==null)throw be=u,f;an=1,Gl(e,fi(a,e.current)),be=null;return}n.flags&32768?(Ce||o===1?e=!0:pr||(Ae&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kg(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){Kg(n,Ga);return}e=n.return;var a=ly(n.alternate,n,ha);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);an===0&&(an=5)}function Kg(e,n){do{var a=cy(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);an=6,be=null}function Qg(e,n,a,o,u,f,x,R,G){e.cancelPendingCommit=null;do ec();while(vn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Cu,Mi(e,a,f,x,R,G),e===Ze&&(be=Ze=null,Ae=0),gr=n,ja=e,pa=a,Bf=f,zf=u,Hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sy(pt,function(){return n0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=H.p,H.p=2,x=Be,Be|=4;try{uy(e,n,a)}finally{Be=x,H.p=u,F.T=o}}vn=1,Jg(),$g(),t0()}}function Jg(){if(vn===1){vn=0;var e=ja,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Be;Be|=4;try{Lg(n,e);var f=$f,x=zp(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(x!==R&&R&&R.ownerDocument&&Bp(R.ownerDocument.documentElement,R)){if(G!==null&&bu(R)){var nt=G.start,mt=G.end;if(mt===void 0&&(mt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(mt,R.value.length);else{var St=R.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Wt=R.textContent.length,ae=Math.min(G.start,Wt),We=G.end===void 0?ae:Math.min(G.end,Wt);!ct.extend&&ae>We&&(x=We,We=ae,ae=x);var K=Fp(R,ae),X=Fp(R,We);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var et=St.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),ae>We?(ct.addRange(et),ct.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ct.addRange(et))}}}}for(St=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&St.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var vt=St[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}hc=!!Jf,$f=Jf=null}finally{Be=u,H.p=o,F.T=a}}e.current=n,vn=2}}function $g(){if(vn===2){vn=0;var e=ja,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Be;Be|=4;try{Rg(e,n.alternate,n)}finally{Be=u,H.p=o,F.T=a}}vn=3}}function t0(){if(vn===4||vn===3){vn=0,P();var e=ja,n=gr,a=pa,o=Hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,gr=ja=null,e0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),js(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=H.p,H.p=2,F.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];f(R.value,{componentStack:R.stack})}}finally{F.T=n,H.p=u}}(pa&3)!==0&&ec(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===If?wo++:(wo=0,If=e):wo=0,Do(0)}}function e0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function ec(){return Jg(),$g(),t0(),n0()}function n0(){if(vn!==5)return!1;var e=ja,n=Bf;Bf=0;var a=js(pa),o=F.T,u=H.p;try{H.p=32>a?32:a,F.T=null,a=zf,zf=null;var f=ja,x=pa;if(vn=0,gr=ja=null,pa=0,(Be&6)!==0)throw Error(s(331));var R=Be;if(Be|=4,Bg(f.current),Og(f,f.current,x,a),Be=R,Do(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Ct,f)}catch{}return!0}finally{H.p=u,F.T=o,e0(e,n)}}function i0(e,n,a){n=fi(a,n),n=_f(e.stateNode,n,2),e=Ba(e,n,2),e!==null&&(On(e,2),zi(e))}function Ve(e,n,a){if(e.tag===3)i0(e,e,a);else for(;n!==null;){if(n.tag===3){i0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=fi(a,e),a=ag(2),o=Ba(n,a,2),o!==null&&(sg(a,o,n,e),On(o,2),zi(o));break}}n=n.return}}function Vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new hy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Of=!0,u.add(a),e=vy.bind(null,e,n,a),n.then(e,e))}function vy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Ae&a)===a&&(an===4||an===3&&(Ae&62914560)===Ae&&300>T()-Zl?(Be&2)===0&&_r(e,0):Pf|=a,mr===Ae&&(mr=0)),zi(e)}function a0(e,n){n===0&&(n=He()),e=gs(e,n),e!==null&&(On(e,n),zi(e))}function xy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),a0(e,a)}function yy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),a0(e,a)}function Sy(e,n){return Me(e,n)}var nc=null,xr=null,kf=!1,ic=!1,jf=!1,Wa=0;function zi(e){e!==xr&&e.next===null&&(xr===null?nc=xr=e:xr=xr.next=e),ic=!0,kf||(kf=!0,by())}function Do(e,n){if(!jf&&ic){jf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,l0(o,f))}else f=Ae,f=ht(o,o===Ze?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||jt(o,f)||(a=!0,l0(o,f));o=o.next}while(a);jf=!1}}function My(){s0()}function s0(){ic=kf=!1;var e=0;Wa!==0&&Ny()&&(e=Wa);for(var n=T(),a=null,o=nc;o!==null;){var u=o.next,f=r0(o,n);f===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(xr=a)):(a=o,(e!==0||(f&3)!==0)&&(ic=!0)),o=u}vn!==0&&vn!==5||Do(e),Wa!==0&&(Wa=0)}function r0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-zt(f),R=1<<x,G=u[x];G===-1?((R&a)===0||(R&o)!==0)&&(u[x]=le(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=Ze,a=Ae,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&De(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&De(o),js(a)){case 2:case 8:a=Mt;break;case 32:a=pt;break;case 268435456:a=Ot;break;default:a=pt}return o=o0.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&De(o),e.callbackPriority=2,e.callbackNode=null,2}function o0(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=Ae;return o=ht(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Vg(e,o,n),r0(e,T()),e.callbackNode!=null&&e.callbackNode===a?o0.bind(null,e):null)}function l0(e,n){if(ec())return null;Vg(e,n,!0)}function by(){Py(function(){(Be&6)!==0?Me(_t,My):s0()})}function Xf(){if(Wa===0){var e=ar;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Wa=e}return Wa}function c0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function u0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ey(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=c0((u[gn]||null).action),x=o.submitter;x&&(n=(n=x[gn]||null)?c0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new ml("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var G=x?u0(u,x):new FormData(u);ff(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=x?u0(u,x):new FormData(u),ff(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Wf=0;Wf<Ru.length;Wf++){var qf=Ru[Wf],Ty=qf.toLowerCase(),Ay=qf[0].toUpperCase()+qf.slice(1);Ai(Ty,"on"+Ay)}Ai(Gp,"onAnimationEnd"),Ai(Vp,"onAnimationIteration"),Ai(kp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Vx,"onTransitionRun"),Ai(kx,"onTransitionStart"),Ai(jx,"onTransitionCancel"),Ai(jp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function f0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],G=R.instance,nt=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(mt){vl(mt)}u.currentTarget=null,f=G}else for(x=0;x<o.length;x++){if(R=o[x],G=R.instance,nt=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(mt){vl(mt)}u.currentTarget=null,f=G}}}}function Ee(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=e+"__bubble";a.has(o)||(d0(n,e,2,!1),a.add(o))}function Yf(e,n,a){var o=0;n&&(o|=4),d0(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[ac]){e[ac]=!0,lt.forEach(function(a){a!=="selectionchange"&&(Ry.has(a)||Yf(a,!1,e),Yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,Yf("selectionchange",!1,n))}}function d0(e,n,a,o){switch(G0(n)){case 2:var u=eS;break;case 8:u=nS;break;default:u=ud}a=u.bind(null,n,a,e),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Kf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Ca(R),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=f=x;continue t}R=R.parentNode}}o=o.return}_p(function(){var nt=f,mt=du(a),St=[];t:{var rt=Xp.get(e);if(rt!==void 0){var ct=ml,Wt=e;switch(e){case"keypress":if(hl(a)===0)break t;case"keydown":case"keyup":ct=yx;break;case"focusin":Wt="focus",ct=vu;break;case"focusout":Wt="blur",ct=vu;break;case"beforeblur":case"afterblur":ct=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=bx;break;case Gp:case Vp:case kp:ct=fx;break;case jp:ct=Tx;break;case"scroll":case"scrollend":ct=rx;break;case"wheel":ct=Rx;break;case"copy":case"cut":case"paste":ct=hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Mp;break;case"toggle":case"beforetoggle":ct=wx}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),K=ae?rt!==null?rt+"Capture":null:rt;ae=[];for(var X=nt,et;X!==null;){var vt=X;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||K===null||(vt=Jr(X,K),vt!=null&&ae.push(Lo(X,vt,et))),We)break;X=X.return}0<ae.length&&(rt=new ct(rt,Wt,null,a,mt),St.push({event:rt,listeners:ae}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&a!==fu&&(Wt=a.relatedTarget||a.fromElement)&&(Ca(Wt)||Wt[Qi]))break t;if((ct||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Wt=a.relatedTarget||a.toElement,ct=nt,Wt=Wt?Ca(Wt):null,Wt!==null&&(We=c(Wt),ae=Wt.tag,Wt!==We||ae!==5&&ae!==27&&ae!==6)&&(Wt=null)):(ct=null,Wt=nt),ct!==Wt)){if(ae=yp,vt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Mp,vt="onPointerLeave",K="onPointerEnter",X="pointer"),We=ct==null?rt:ds(ct),et=Wt==null?rt:ds(Wt),rt=new ae(vt,X+"leave",ct,a,mt),rt.target=We,rt.relatedTarget=et,vt=null,Ca(mt)===nt&&(ae=new ae(K,X+"enter",Wt,a,mt),ae.target=et,ae.relatedTarget=We,vt=ae),We=vt,ct&&Wt)e:{for(ae=Cy,K=ct,X=Wt,et=0,vt=K;vt;vt=ae(vt))et++;vt=0;for(var ee=X;ee;ee=ae(ee))vt++;for(;0<et-vt;)K=ae(K),et--;for(;0<vt-et;)X=ae(X),vt--;for(;et--;){if(K===X||X!==null&&K===X.alternate){ae=K;break e}K=ae(K),X=ae(X)}ae=null}else ae=null;ct!==null&&h0(St,rt,ct,ae,!1),Wt!==null&&We!==null&&h0(St,We,Wt,ae,!0)}}t:{if(rt=nt?ds(nt):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Pe=Dp;else if(Cp(rt))if(Up)Pe=Ix;else{Pe=Bx;var Qt=Fx}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ws(nt.elementType)&&(Pe=Dp):Pe=zx;if(Pe&&(Pe=Pe(e,nt))){wp(St,Pe,a,mt);break t}Qt&&Qt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Ei(rt,"number",rt.value)}switch(Qt=nt?ds(nt):window,e){case"focusin":(Cp(Qt)||Qt.contentEditable==="true")&&(Ks=Qt,Eu=nt,ro=null);break;case"focusout":ro=Eu=Ks=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Ip(St,a,mt);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":Ip(St,a,mt)}var ve;if(yu)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Zs?Ap(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(bp&&a.locale!=="ko"&&(Zs||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Zs&&(ve=vp()):(Da=mt,mu="value"in Da?Da.value:Da.textContent,Zs=!0)),Qt=sc(nt,Re),0<Qt.length&&(Re=new Sp(Re,e,null,a,mt),St.push({event:Re,listeners:Qt}),ve?Re.data=ve:(ve=Rp(a),ve!==null&&(Re.data=ve)))),(ve=Ux?Lx(e,a):Nx(e,a))&&(Re=sc(nt,"onBeforeInput"),0<Re.length&&(Qt=new Sp("onBeforeInput","beforeinput",null,a,mt),St.push({event:Qt,listeners:Re}),Qt.data=ve)),Ey(St,e,nt,a,mt)}f0(St,n)})}function Lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Jr(e,a),u!=null&&o.unshift(Lo(e,u,f)),u=Jr(e,n),u!=null&&o.push(Lo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Cy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function h0(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var R=a,G=R.alternate,nt=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||nt===null||(G=nt,u?(nt=Jr(a,f),nt!=null&&x.unshift(Lo(a,nt,G))):u||(nt=Jr(a,f),nt!=null&&x.push(Lo(a,nt,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var wy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function p0(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(Dy,"")}function m0(e,n){return n=p0(n),p0(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":de(e,"class",o);break;case"tabIndex":de(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":de(e,a,o);break;case"style":Ji(e,o,f);break;case"data":if(n!=="object"){de(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$i);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),oe(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ax.get(a)||a,oe(e,a,o))}}function Qf(e,n,a,o,u,f){switch(a){case"style":Ji(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):oe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,x,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=f=x=u=null,G=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":x=mt;break;case"checked":G=mt;break;case"defaultChecked":nt=mt;break;case"value":f=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,mt,a,null)}}Qn(e,f,R,G,nt,x,u,!1);return;case"select":Ee("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Xe(e,n,u,R,a,null)}n=f,a=x,e.multiple=!!o,n!=null?Jn(e,!!o,n,!1):a!=null&&Jn(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,n,x,R,a,null)}cn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Xe(e,n,G,o,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Ee(Uo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,nt,o,a,null)}return;default:if(Ws(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Qf(e,n,mt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,n,R,o,a,null))}function Uy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,R=null,G=null,nt=null,mt=null;for(ct in a){var St=a[ct];if(a.hasOwnProperty(ct)&&St!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=St;default:o.hasOwnProperty(ct)||Xe(e,n,ct,null,o,St)}}for(var rt in o){var ct=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(ct!=null||St!=null))switch(rt){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":mt=ct;break;case"value":x=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==St&&Xe(e,n,rt,ct,o,St)}}Fn(e,x,R,G,nt,mt,f,u);return;case"select":ct=x=R=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":rt=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==G&&Xe(e,n,u,f,o,G)}n=R,a=x,o=ct,rt!=null?Jn(e,!!a,rt,!1):!!o!=!!a&&(n!=null?Jn(e,!!a,n,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":ct=rt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,n,R,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,x,u,o,f)}ze(e,rt,ct);return;case"option":for(var Wt in a)rt=a[Wt],a.hasOwnProperty(Wt)&&rt!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Xe(e,n,Wt,null,o,rt));for(G in o)rt=o[G],ct=a[G],o.hasOwnProperty(G)&&rt!==ct&&(rt!=null||ct!=null)&&(G==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Xe(e,n,G,rt,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)rt=a[ae],a.hasOwnProperty(ae)&&rt!=null&&!o.hasOwnProperty(ae)&&Xe(e,n,ae,null,o,rt);for(nt in o)if(rt=o[nt],ct=a[nt],o.hasOwnProperty(nt)&&rt!==ct&&(rt!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Xe(e,n,nt,rt,o,ct)}return;default:if(Ws(n)){for(var We in a)rt=a[We],a.hasOwnProperty(We)&&rt!==void 0&&!o.hasOwnProperty(We)&&Qf(e,n,We,void 0,o,rt);for(mt in o)rt=o[mt],ct=a[mt],!o.hasOwnProperty(mt)||rt===ct||rt===void 0&&ct===void 0||Qf(e,n,mt,rt,o,ct);return}}for(var K in a)rt=a[K],a.hasOwnProperty(K)&&rt!=null&&!o.hasOwnProperty(K)&&Xe(e,n,K,null,o,rt);for(St in o)rt=o[St],ct=a[St],!o.hasOwnProperty(St)||rt===ct||rt==null&&ct==null||Xe(e,n,St,rt,o,ct)}function g0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ly(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,R=u.duration;if(f&&R&&g0(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],nt=G.startTime;if(nt>R)break;var mt=G.transferSize,St=G.initiatorType;mt&&g0(St)&&(G=G.responseEnd,x+=mt*(G<R?1:(R-nt)/(G-nt)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function _0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function td(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ed=null;function Ny(){var e=window.event;return e&&e.type==="popstate"?e===ed?!1:(ed=e,!0):(ed=null,!1)}var x0=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(e){return y0.resolve(null).then(e).catch(Fy)}:x0;function Fy(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function S0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[fs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&No(e.ownerDocument.body);a=u}while(a);br(n)}function M0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function nd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nd(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function By(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function zy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function b0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function id(e){return e.data==="$?"||e.data==="$~"}function ad(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Iy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sd=null;function E0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function T0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function A0(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function No(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var _i=new Map,R0=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=H.d;H.d={f:Hy,r:Gy,D:Vy,C:ky,L:jy,m:Xy,X:qy,S:Wy,M:Yy};function Hy(){var e=ma.f(),n=Jl();return e||n}function Gy(e){var n=wa(e);n!==null&&n.tag===5&&n.type==="form"?jm(n):ma.r(e)}var yr=typeof document>"u"?null:document;function C0(e,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=fe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),R0.has(u)||(R0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),W(n),o.head.appendChild(n)))}}function Vy(e){ma.D(e),C0("dns-prefetch",e,null)}function ky(e,n){ma.C(e,n),C0("preconnect",e,n)}function jy(e,n,a){ma.L(e,n,a);var o=yr;if(o&&e&&n){var u='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fe(a.imageSizes)+'"]')):u+='[href="'+fe(e)+'"]';var f=u;switch(n){case"style":f=Sr(e);break;case"script":f=Mr(e)}_i.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(f))||n==="script"&&o.querySelector(Po(f))||(n=o.createElement("link"),Rn(n,"link",e),W(n),o.head.appendChild(n)))}}function Xy(e,n){ma.m(e,n);var a=yr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fe(o)+'"][href="'+fe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!_i.has(f)&&(e=y({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}o=a.createElement("link"),Rn(o,"link",e),W(o),a.head.appendChild(o)}}}function Wy(e,n,a){ma.S(e,n,a);var o=yr;if(o&&e){var u=C(o).hoistableStyles,f=Sr(e);n=n||"default";var x=u.get(f);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Oo(f)))R.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&rd(e,a);var G=x=o.createElement("link");W(G),Rn(G,"link",e),G._p=new Promise(function(nt,mt){G.onload=nt,G.onerror=mt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(f,x)}}}function qy(e,n){ma.X(e,n);var a=yr;if(a&&e){var o=C(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0},n),(n=_i.get(u))&&od(e,n),f=a.createElement("script"),W(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Yy(e,n){ma.M(e,n);var a=yr;if(a&&e){var o=C(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&od(e,n),f=a.createElement("script"),W(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function w0(e,n,a,o){var u=(u=at.current)?oc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=C(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=C(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Oo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||Zy(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=C(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+fe(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function D0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Zy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),W(n),e.head.appendChild(n))}function Mr(e){return'[src="'+fe(e)+'"]'}function Po(e){return"script[async]"+e}function U0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+fe(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),W(o),Rn(o,"style",u),lc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Sr(a.href);var f=e.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,W(f),f;o=D0(a),(u=_i.get(u))&&rd(o,u),f=(e.ownerDocument||e).createElement("link"),W(f);var x=f;return x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Rn(f,"link",o),n.state.loading|=4,lc(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(u=e.querySelector(Po(f)))?(n.instance=u,W(u),u):(o=a,(u=_i.get(f))&&(o=y({},a),od(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),W(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function od(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function L0(e,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[fs]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(f):o.set(x,[f])}}return o}function N0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ky(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function O0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,o=D0(o),(u=_i.get(u))&&rd(o,u),f=f.createElement("link"),W(f);var x=f;x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Rn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ld=0;function Jy(e,n){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ld===0&&(ld=62500*Ly());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ld?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function dc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach($y,e),fc=null,uc.call(e))}function $y(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:N,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function tS(e,n,a,o,u,f,x,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function P0(e,n,a,o,u,f,x,R,G,nt,mt,St){return e=new tS(e,n,a,x,G,nt,mt,St,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ju(f),e}function F0(e){return e?(e=$s,e):$s}function B0(e,n,a,o,u,f){u=F0(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(e,o,n),a!==null&&(Wn(a,e,n),po(a,e,n))}function z0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function cd(e,n){z0(e,n),(e=e.alternate)&&z0(e,n)}function I0(e){if(e.tag===13||e.tag===31){var n=gs(e,67108864);n!==null&&Wn(n,e,67108864),cd(e,67108864)}}function H0(e){if(e.tag===13||e.tag===31){var n=si();n=ks(n);var a=gs(e,n);a!==null&&Wn(a,e,n),cd(e,n)}}var hc=!0;function eS(e,n,a,o){var u=F.T;F.T=null;var f=H.p;try{H.p=2,ud(e,n,a,o)}finally{H.p=f,F.T=u}}function nS(e,n,a,o){var u=F.T;F.T=null;var f=H.p;try{H.p=8,ud(e,n,a,o)}finally{H.p=f,F.T=u}}function ud(e,n,a,o){if(hc){var u=fd(o);if(u===null)Kf(e,n,o,pc,a),V0(e,o);else if(aS(u,e,n,a,o))o.stopPropagation();else if(V0(e,o),n&4&&-1<iS.indexOf(e)){for(;u!==null;){var f=wa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Rt(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var G=1<<31-zt(x);R.entanglements[1]|=G,x&=~G}zi(f),(Be&6)===0&&(Kl=T()+500,Do(0))}}break;case 31:case 13:R=gs(f,2),R!==null&&Wn(R,f,2),Jl(),cd(f,2)}if(f=fd(o),f===null&&Kf(e,n,o,pc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Kf(e,n,o,null,a)}}function fd(e){return e=du(e),dd(e)}var pc=null;function dd(e){if(pc=null,e=Ca(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function G0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case _t:return 2;case Mt:return 8;case pt:case Yt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var hd=!1,Ya=null,Za=null,Ka=null,Bo=new Map,zo=new Map,Qa=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V0(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Io(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wa(n),n!==null&&I0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function aS(e,n,a,o,u){switch(n){case"focusin":return Ya=Io(Ya,e,n,a,o,u),!0;case"dragenter":return Za=Io(Za,e,n,a,o,u),!0;case"mouseover":return Ka=Io(Ka,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Bo.set(f,Io(Bo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Io(zo.get(f)||null,e,n,a,o,u)),!0}return!1}function k0(e){var n=Ca(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){H0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){H0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fu=o,a.target.dispatchEvent(o),fu=null}else return n=wa(a),n!==null&&I0(n),e.blockedOn=a,!1;n.shift()}return!0}function j0(e,n,a){mc(e)&&a.delete(n)}function sS(){hd=!1,Ya!==null&&mc(Ya)&&(Ya=null),Za!==null&&mc(Za)&&(Za=null),Ka!==null&&mc(Ka)&&(Ka=null),Bo.forEach(j0),zo.forEach(j0)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,hd||(hd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sS)))}var _c=null;function X0(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(dd(o||a)===null)continue;break}var f=wa(a);f!==null&&(e.splice(n,3),n-=3,ff(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function n(G){return gc(G,e)}Ya!==null&&gc(Ya,e),Za!==null&&gc(Za,e),Ka!==null&&gc(Ka,e),Bo.forEach(n),zo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)k0(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[gn]||null;if(typeof f=="function")x||X0(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[gn]||null)R=x.formAction;else if(dd(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),X0(a)}}}function W0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function pd(e){this._internalRoot=e}vc.prototype.render=pd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();B0(a,o,e,n,null,null)},vc.prototype.unmount=pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;B0(e.current,2,null,e,null,null),Jl(),n[Qi]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Oi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&k0(e)}};var q0=t.version;if(q0!=="19.2.4")throw Error(s(527,q0,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var rS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{Ct=xc.inject(rS),At=xc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=tg,f=eg,x=ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=P0(e,1,!1,null,null,a,o,null,u,f,x,W0),e[Qi]=n.current,Zf(e),new pd(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=tg,x=eg,R=ng,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=P0(e,1,!0,n,a??null,o,u,G,f,x,R,W0),n.context=F0(null),a=n.current,o=si(),o=ks(o),u=Fa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,On(n,a),zi(n),e[Qi]=n.current,Zf(e),new vc(n)},Go.version="19.2.4",Go}var i_;function gS(){if(i_)return _d.exports;i_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_d.exports=mS(),_d.exports}var _S=gS();const b={bg:"#1a1a1f",bgCard:"#242429",bgElevated:"#2e2e35",bgHover:"#38383f",textPrimary:"#f0f0f5",textSecondary:"#9d9daa",textPlaceholder:"#6b6b78",accent:"#7c6ff7",accentMuted:"rgba(124, 111, 247, 0.15)",success:"#4ade80",error:"#f87171",warning:"#fbbf24",border:"#3a3a42",borderFocus:"#7c6ff7",fontDisplay:"'Outfit', sans-serif",fontBody:"'Nunito', sans-serif",radius:{sm:8,md:12,lg:16,xl:24,pill:9999},shadow:{sm:"0 2px 8px rgba(0,0,0,0.3)",md:"0 4px 16px rgba(0,0,0,0.4)"},transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"},hv={API_BASE:"http://127.0.0.1:8000/api",GOOGLE_CLIENT_ID:"495959917454-8oe59cehmvfbk69udbuj4v88n8p61rb1.apps.googleusercontent.com",GOOGLE_REDIRECT_URI:"http://127.0.0.1:3000/auth/google/callback",GOOGLE_SCOPES:"openid email profile",MUSICBRAINZ_API:"https://musicbrainz.org/ws/2",MUSICBRAINZ_USER_AGENT:"Tutti/0.1.0 (danielmiller1@ufl.edu)",SEARCH_DEBOUNCE_MS:500,MIN_SONGS_FOR_PROFILE:4};function yc(r){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)r[s]=i[s]}return r}var vS={read:function(r){return r[0]==='"'&&(r=r.slice(1,-1)),r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(r){return encodeURIComponent(r).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ih(r,t){function i(l,c,d){if(!(typeof document>"u")){d=yc({},t,d),typeof d.expires=="number"&&(d.expires=new Date(Date.now()+d.expires*864e5)),d.expires&&(d.expires=d.expires.toUTCString()),l=encodeURIComponent(l).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var h="";for(var m in d)d[m]&&(h+="; "+m,d[m]!==!0&&(h+="="+d[m].split(";")[0]));return document.cookie=l+"="+r.write(c,l)+h}}function s(l){if(!(typeof document>"u"||arguments.length&&!l)){for(var c=document.cookie?document.cookie.split("; "):[],d={},h=0;h<c.length;h++){var m=c[h].split("="),p=m.slice(1).join("=");try{var _=decodeURIComponent(m[0]);if(d[_]=r.read(p,_),l===_)break}catch{}}return l?d[l]:d}}return Object.create({set:i,get:s,remove:function(l,c){i(l,"",yc({},c,{expires:-1}))},withAttributes:function(l){return ih(this.converter,yc({},this.attributes,l))},withConverter:function(l){return ih(yc({},this.converter,l),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(r)}})}var xS=ih(vS,{path:"/"});const Se={async getCsrfToken(){return xS.get("csrftoken")},async request(r,t={}){const i=await fetch(`${hv.API_BASE}${r}`,{...t,headers:{"Content-Type":"application/json",...t.method==="POST"&&{"X-CSRFToken":await this.getCsrfToken()},...t.headers}});if(!i.ok){const s=await i.json().catch(()=>({}));if(s.detail)throw new Error(s.detail);if(s.non_field_errors)throw new Error(s.non_field_errors[0]);const l=Object.values(s).flat()[0];throw l?new Error(String(l)):new Error(`Request failed: ${i.status}`)}return i.json()},async checkSession(){return await Se.request("/auth/session/")},async register(r){return await Se.request("/auth/register/",{method:"POST",body:JSON.stringify(r)})},async login(r){return await Se.request("/auth/login/",{method:"POST",body:JSON.stringify(r)})},async logout(){await Se.request("/auth/logout/")},async getScrobbles(r){return await Se.request(`/user/${r}/scrobbles/`)},async createScrobble(r,t){return await Se.request(`/user/${r}/scrobbles/`,{method:"POST",body:JSON.stringify(t)})},async getProfile(r){return await Se.request(`/user/${r}/profile/`)},async getRecommendations(r){return await Se.request(`/user/${r}/recommendations/`)},async getAbout(r){return await Se.request(`/user/${r}/about/`)},async updateLocation(r,t,i){return Se.request(`/user/${r}/about/`,{method:"POST",body:JSON.stringify({action:"location",city:t,country:i})})},async getSongData(r){return await Se.request(`/song/${r}/metadata/`)},async getSongCover(r){return await Se.request(`/song/${r}/cover/`)},async saveMusicProfile(r){return Se.request("/auth/me/music-profile",{method:"POST",body:JSON.stringify({recording_ids:r})})},async rateScrobble(r,t){return await Se.request(`/scrobble/${r}/`,{method:"POST",body:JSON.stringify({like:t})})}};const pv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();const yS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const SS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase());const a_=r=>{const t=SS(r);return t.charAt(0).toUpperCase()+t.slice(1)};var MS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const bS=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const ES=wt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>wt.createElement("svg",{ref:m,...MS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:pv("lucide",l),...!c&&!bS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,_])=>wt.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Kn=(r,t)=>{const i=wt.forwardRef(({className:s,...l},c)=>wt.createElement(ES,{ref:c,iconNode:t,className:pv(`lucide-${yS(a_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=a_(r),i};const TS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],mv=Kn("check",TS);const AS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],RS=Kn("chevron-down",AS);const CS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],wS=Kn("clock",CS);const DS=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],gv=Kn("eye-off",DS);const US=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_v=Kn("eye",US);const LS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],NS=Kn("globe",LS);const OS=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],PS=Kn("house",OS);const FS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],$o=Kn("map-pin",FS);const BS=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],vv=Kn("music",BS);const zS=[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]],IS=Kn("thumbs-down",zS);const HS=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],GS=Kn("thumbs-up",HS);const VS=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],kS=Kn("user-check",VS);const jS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],XS=Kn("user-plus",jS);const WS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],$c=Kn("user",WS);function Vo({icon:r,label:t,active:i,onClick:s}){return D.jsxs("button",{onClick:s,style:{display:"flex",alignItems:"center",gap:8,padding:"10px 20px",borderRadius:b.radius.pill,border:"none",cursor:"pointer",fontFamily:b.fontBody,fontSize:14,fontWeight:600,color:i?b.bg:b.textSecondary,background:i?b.accent:b.bgElevated,transition:b.transition,boxShadow:i?b.shadow.sm:"none"},onMouseEnter:l=>{i||(l.currentTarget.style.background=b.bgHover,l.currentTarget.style.color=b.textPrimary)},onMouseLeave:l=>{i||(l.currentTarget.style.background=b.bgElevated,l.currentTarget.style.color=b.textSecondary)},children:[D.jsx(r,{}),D.jsx("span",{children:t})]})}function qS({currentPage:r,onNavigate:t,userId:i}){const s=i!=-1;return D.jsxs("nav",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 32px",height:64,background:b.bgCard,borderBottom:`1px solid ${b.border}`,position:"sticky",top:0,zIndex:100},children:[D.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:D.jsx("img",{src:"../../static/images/webLogo.svg",alt:"Tutti",style:{height:130}})}),D.jsxs("div",{style:{display:"flex",gap:8},children:[D.jsx(Vo,{icon:PS,label:"Home",active:r==="home",onClick:()=>t("home")}),D.jsx(Vo,{icon:vv,label:"Discover",active:r==="discover",onClick:()=>t("discover")}),D.jsx(Vo,{icon:NS,label:"Network",active:r==="network",onClick:()=>t("network")}),s?D.jsx(Vo,{icon:$c,label:"Profile",active:r==="profile",onClick:()=>t("profile")}):D.jsx(Vo,{icon:$c,label:"Sign In",active:r==="login",onClick:()=>t("login")})]})]})}function Ps({label:r,type:t="text",value:i,onChange:s,placeholder:l,error:c,icon:d,rightElement:h}){const[m,p]=wt.useState(!1);return D.jsxs("div",{style:{marginBottom:20},children:[r&&D.jsx("label",{style:{display:"block",marginBottom:6,fontSize:13,fontWeight:600,fontFamily:b.fontBody,color:b.textSecondary,letterSpacing:"0.3px"},children:r}),D.jsxs("div",{style:{position:"relative"},children:[d&&D.jsx("div",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:m?b.accent:b.textPlaceholder,transition:b.transition},children:D.jsx(d,{})}),D.jsx("input",{type:t,value:i,onChange:_=>s(_.target.value),placeholder:l,onFocus:()=>p(!0),onBlur:()=>p(!1),style:{width:"100%",padding:`14px ${h?"44px":"16px"} 14px ${d?"44px":"16px"}`,borderRadius:b.radius.md,border:`2px solid ${c?b.error:m?b.borderFocus:b.border}`,background:b.bgElevated,color:b.textPrimary,fontSize:15,fontFamily:b.fontBody,outline:"none",transition:b.transition,boxSizing:"border-box"}}),h&&D.jsx("div",{style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",cursor:"pointer",color:b.textPlaceholder},children:h})]}),c&&D.jsx("p",{style:{marginTop:6,fontSize:12,color:b.error,fontFamily:b.fontBody},children:c})]})}function os({children:r,onClick:t,loading:i,disabled:s,variant:l="primary",style:c}){const d=l==="primary";return D.jsx("button",{onClick:t,disabled:i||s,style:{width:"100%",padding:"14px 24px",borderRadius:b.radius.lg,border:d?"none":`2px solid ${b.border}`,background:d?s?b.bgHover:b.accent:"transparent",color:d?s?b.textSecondary:"#fff":b.textPrimary,fontSize:15,fontWeight:600,fontFamily:b.fontBody,cursor:s?"not-allowed":"pointer",transition:b.transition,opacity:i?.7:1,...c},children:i?"Loading...":r})}function YS({onNavigate:r,onLogin:t,userId:i}){const[s,l]=wt.useState(""),[c,d]=wt.useState(""),[h,m]=wt.useState(!1),[p,_]=wt.useState(null),[y,g]=wt.useState(!1);i!=-1&&r("profile");const E=async()=>{if(!s||!c){_("Please fill in all fields.");return}g(!0);try{let U=await Se.login({username:s,password:c});t(U.user_id),r("home")}catch(U){_(U.message||"Login failed. Please check your credentials.")}finally{g(!1)}};return D.jsxs("div",{style:{maxWidth:440,margin:"60px auto",padding:"40px 36px",borderRadius:b.radius.xl,background:b.bgCard,border:`1px solid ${b.border}`,boxShadow:b.shadow.md},children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:28,fontWeight:700,color:b.textPrimary,marginBottom:8,textAlign:"center"},children:"Welcome back"}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,textAlign:"center",marginBottom:28},children:"Sign in to continue tracking your music"}),p&&D.jsx("div",{style:{padding:"12px 16px",borderRadius:b.radius.md,background:`${b.error}15`,border:`1px solid ${b.error}40`,color:b.error,fontSize:13,fontFamily:b.fontBody,marginBottom:20},children:p}),D.jsx(Ps,{label:"Username",value:s,onChange:l,placeholder:"your_username",icon:$c}),D.jsx(Ps,{label:"Password",type:h?"text":"password",value:c,onChange:d,placeholder:"••••••••",rightElement:D.jsx("div",{onClick:()=>m(!h),children:h?D.jsx(gv,{}):D.jsx(_v,{})})}),D.jsx(os,{onClick:E,loading:y,children:"Sign In"}),D.jsxs("p",{style:{textAlign:"center",marginTop:24,fontSize:14,color:b.textSecondary,fontFamily:b.fontBody},children:["Don't have an account?"," ",D.jsx("span",{onClick:()=>r("signup"),style:{color:b.accent,cursor:"pointer",fontWeight:600},children:"Create one"})]})]})}function xv(r=-1){const[t,i]=wt.useState(null),[s,l]=wt.useState(null),[c,d]=wt.useState(!1);wt.useEffect(()=>{const m=async()=>{try{const p=await Se.getAbout(r);i({city:p.city,country:p.country})}catch(p){l(p.message)}};r!=-1&&m()},[r]);const h=wt.useCallback(()=>{if(!navigator.geolocation){l("Geolocation is not supported by your browser");return}d(!0),l(null),navigator.geolocation.getCurrentPosition(async m=>{const{latitude:p,longitude:_}=m.coords;try{const g=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${p}&lon=${_}&format=json`,{headers:{"User-Agent":hv.MUSICBRAINZ_USER_AGENT}})).json();i({city:g.address?.city||g.address?.town||g.address?.village||"Unknown",country:g.address?.country||"Unknown",displayName:g.display_name})}catch{i({latitude:p,longitude:_,city:"Unknown",country:"Unknown"})}d(!1)},m=>{l(m.code===1?"Location permission denied. You can enable it in browser settings.":"Could not determine your location. Please try again."),d(!1)},{enableHighAccuracy:!1,timeout:1e4,maximumAge:3e5})},[]);return{location:t,error:s,loading:c,requestLocation:h}}const ZS=()=>D.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"})});function KS(){console.log("Insta OAuthinitiated here"),alert("Instagram soon")}function $h(){return D.jsxs("button",{onClick:KS,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:12,padding:"14px 24px",borderRadius:b.radius.lg,border:`2px solid ${b.border}`,background:b.bgElevated,color:b.textPrimary,fontSize:15,fontWeight:600,fontFamily:b.fontBody,cursor:"pointer",transition:b.transition},onMouseEnter:r=>{r.currentTarget.style.background=b.bgHover,r.currentTarget.style.borderColor=b.textSecondary},onMouseLeave:r=>{r.currentTarget.style.background=b.bgElevated,r.currentTarget.style.borderColor=b.border},children:[D.jsx(ZS,{}),"Connect Instagram"]})}const QS=()=>D.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:`M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9\r
  4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72\r
  12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419\r
  1.56-.299.421-1.02.599-1.559.3z`})});function JS(){console.log("Spotify OAuth initiated here"),alert("Spotify connection needs to be implemented!")}function yv(){return D.jsxs("button",{onClick:JS,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:12,padding:"14px 24px",borderRadius:b.radius.lg,border:`2px solid ${b.border}`,background:b.bgElevated,color:b.textPrimary,fontSize:15,fontWeight:600,fontFamily:b.fontBody,cursor:"pointer",transition:b.transition},onMouseEnter:r=>{r.currentTarget.style.background=b.bgHover,r.currentTarget.style.borderColor=b.textSecondary},onMouseLeave:r=>{r.currentTarget.style.background=b.bgElevated,r.currentTarget.style.borderColor=b.border},children:[D.jsx(QS,{}),"Connect Spotify"]})}function $S({onNavigate:r,onLogin:t,userId:i}){const[s,l]=wt.useState(1),[c,d]=wt.useState(""),[h,m]=wt.useState(""),[p,_]=wt.useState(""),[y,g]=wt.useState(""),[M,E]=wt.useState(""),[U,S]=wt.useState(!1),[v,w]=wt.useState({}),[N,O]=wt.useState(!1);i!=-1&&r("profile");const z=xv(),[I,A]=wt.useState([]),L=async()=>{O(!0);try{await Se.register({username:c,email:h,password:y,confirm_password:M,display_name:p}),l(2)}catch(Q){w({general:Q.message})}O(!1)},dt=async()=>{if(z.location){O(!0);try{await Se.updateLocation(i,z.location.city,z.location.country)}catch(Q){console.error("Failed to save location:",Q)}O(!1)}try{await Se.login({username:c,password:y}),t(),r("home")}catch(Q){w({general:Q.message})}},k=()=>D.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:32},children:[1,2].map(Q=>D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[D.jsx("div",{style:{width:32,height:32,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:600,fontFamily:b.fontBody,background:Q<=s?b.accent:b.bgElevated,color:Q<=s?"#fff":b.textSecondary,border:`2px solid ${Q<=s?b.accent:b.border}`,transition:b.transition},children:Q<s?D.jsx(mv,{}):Q}),Q<2&&D.jsx("div",{style:{width:40,height:2,background:Q<s?b.accent:b.border,borderRadius:1}})]},Q))});return D.jsxs("div",{style:{maxWidth:s===3?560:440,margin:"40px auto",padding:"40px 36px",borderRadius:b.radius.xl,background:b.bgCard,border:`1px solid ${b.border}`,boxShadow:b.shadow.md,transition:"max-width 0.3s ease"},children:[D.jsx(k,{}),v.general&&D.jsx("div",{style:{padding:"12px 16px",borderRadius:b.radius.md,background:`${b.error}15`,border:`1px solid ${b.error}40`,color:b.error,fontSize:13,fontFamily:b.fontBody,marginBottom:20},children:v.general}),s===1&&D.jsxs(D.Fragment,{children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:28,fontWeight:700,color:b.textPrimary,marginBottom:8,textAlign:"center"},children:"Create your account"}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,textAlign:"center",marginBottom:28},children:"Join the federated music community"}),D.jsx(Ps,{label:"Username",value:c,onChange:d,placeholder:"pick_a_username",error:v.username,icon:$c}),D.jsx(Ps,{label:"Display Name (optional)",value:p,onChange:_,placeholder:"How others see you"}),D.jsx(Ps,{label:"Email",type:"email",value:h,onChange:m,placeholder:"you@example.com",error:v.email}),D.jsx(Ps,{label:"Password",type:U?"text":"password",value:y,onChange:g,placeholder:"At least 8 characters",error:v.password,rightElement:D.jsx("div",{onClick:()=>S(!U),children:U?D.jsx(gv,{}):D.jsx(_v,{})})}),D.jsx(Ps,{label:"Confirm Password",type:U?"text":"password",value:M,onChange:E,placeholder:"Type it again",error:v.confirmPassword}),D.jsx(os,{onClick:L,loading:N,children:"Continue"}),D.jsxs("p",{style:{textAlign:"center",marginTop:24,fontSize:14,color:b.textSecondary,fontFamily:b.fontBody},children:["Already have an account?"," ",D.jsx("span",{onClick:()=>r("login"),style:{color:b.accent,cursor:"pointer",fontWeight:600},children:"Sign in"})]})]}),s===2&&D.jsxs(D.Fragment,{children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:28,fontWeight:700,color:b.textPrimary,marginBottom:8,textAlign:"center"},children:"Find your network"}),D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,textAlign:"center",marginBottom:28,lineHeight:1.6},children:["Share your location to discover music lovers nearby.",D.jsx("br",{}),"This is optional — you can skip this step."]}),D.jsx("div",{style:{padding:24,borderRadius:b.radius.lg,background:b.bgElevated,border:`1px solid ${b.border}`,textAlign:"center",marginBottom:24},children:z.location?D.jsxs("div",{children:[D.jsx("div",{style:{color:b.success,marginBottom:12},children:D.jsx($o,{})}),D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:16,fontWeight:600,color:b.textPrimary,marginBottom:4},children:[z.location.city,", ",z.location.country]}),D.jsx("p",{style:{fontSize:12,color:b.textSecondary,fontFamily:b.fontBody},children:"Location detected successfully"})]}):D.jsxs("div",{children:[D.jsx("div",{style:{color:b.textSecondary,marginBottom:16},children:D.jsx($o,{})}),D.jsx(os,{onClick:z.requestLocation,loading:z.loading,variant:"secondary",style:{width:"auto",display:"inline-block"},children:"Enable Location"}),z.error&&D.jsx("p",{style:{marginTop:12,fontSize:12,color:b.warning,fontFamily:b.fontBody},children:z.error})]})}),D.jsxs("div",{style:{marginBottom:24,padding:24,borderRadius:b.radius.lg,background:b.bgElevated,border:`1px solid ${b.border}`},children:[D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,textAlign:"center",marginBottom:16},children:"Connect your socials to discover music lovers with similar taste."}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[D.jsx($h,{}),D.jsx(yv,{})]})]}),D.jsx("div",{style:{display:"flex",gap:12},children:D.jsx(os,{onClick:dt,loading:N,children:z.location?"Set Location":"Skip for Now"})})]})]})}const tM=[{label:"Spotify",color:"#1DB954",getUrl:(r,t)=>`https://open.spotify.com/search/${encodeURIComponent(`${r} ${t}`)}`},{label:"Apple Music",color:"#FC3C44",getUrl:(r,t)=>`https://music.apple.com/search?term=${encodeURIComponent(`${r} ${t}`)}`},{label:"YouTube",color:"#FF0000",getUrl:(r,t)=>`https://www.youtube.com/results?search_query=${encodeURIComponent(`${r} ${t}`)}`}];function eM({artist:r,title:t,streamingLinks:i={}}){const[s,l]=wt.useState(!1),c=wt.useRef(null);wt.useEffect(()=>{if(!s)return;const h=m=>{c.current&&!c.current.contains(m.target)&&l(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[s]);const d=tM.map(h=>{const m=i[h.label.toLowerCase().replace(" ","")],p=m===""?"":m||(r&&t?h.getUrl(r,t):"");return{...h,url:p}}).filter(h=>h.url);return d.length?D.jsxs("div",{ref:c,style:{position:"relative",flexShrink:0},children:[D.jsxs("button",{onClick:()=>l(h=>!h),style:{display:"flex",alignItems:"center",gap:4,padding:"5px 10px",borderRadius:b.radius.pill,border:`1px solid ${s?b.accent:b.border}`,background:s?b.accentMuted:"transparent",color:s?b.accent:b.textSecondary,fontFamily:b.fontBody,fontSize:12,fontWeight:600,cursor:"pointer",transition:b.transition},children:[D.jsx(vv,{size:12}),"Listen",D.jsx(RS,{size:12,style:{transform:s?"rotate(180deg)":"none",transition:b.transition}})]}),s&&D.jsx("div",{style:{position:"absolute",right:0,top:"calc(100% + 6px)",background:b.bgCard,border:`1px solid ${b.border}`,borderRadius:b.radius.md,boxShadow:b.shadow.md,overflow:"hidden",zIndex:200,minWidth:148},children:d.map(h=>D.jsxs("a",{href:h.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>l(!1),style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",fontFamily:b.fontBody,fontSize:13,color:b.textPrimary,textDecoration:"none",transition:b.transition},onMouseEnter:m=>{m.currentTarget.style.background=b.bgElevated},onMouseLeave:m=>{m.currentTarget.style.background="transparent"},children:[D.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:h.color,flexShrink:0}}),h.label]},h.label))})]}):null}function nM({song_id:r,scrobble_id:t,initialRating:i=1,onRatingChange:s}){const[l,c]=wt.useState(!0),[d,h]=wt.useState(!0),[m,p]=wt.useState(null),[_,y]=wt.useState(null),[g,M]=wt.useState({}),[E,U]=wt.useState(""),[S,v]=wt.useState(i),[w,N]=wt.useState(!1),O=async it=>{try{let ot=await Se.getSongData(it);M(ot)}catch(ot){p(ot)}finally{c(!1)}},V=async it=>{try{let ot=await Se.getSongCover(it);U(ot.cover)}catch(ot){y(ot)}finally{h(!1)}};wt.useEffect(()=>{O(r),V(r)},[]);const z=async it=>{if(!w){N(!0);try{const ot=await Se.rateScrobble(t,it);v(ot.scrobble.rating),s?.()}catch{}finally{N(!1)}}},I=async()=>z(!0),A=async()=>z(!1),L=S===2,dt=S===0,k={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:b.radius.pill,border:"none",cursor:w?"default":"pointer",transition:b.transition,background:"transparent",opacity:w?.5:1},Q={background:b.accentMuted,boxShadow:"0 0 14px rgba(124, 111, 247, 0.45)"};return D.jsxs("div",{style:{padding:"14px 20px",marginBottom:"10px",borderRadius:b.radius.md,background:b.bgCard,display:"flex",flexDirection:"row",alignItems:"center",gap:12},children:[D.jsx("div",{style:{width:"56px",height:"56px",background:b.bgElevated,flexShrink:0,borderRadius:b.radius.sm,overflow:"hidden"},children:!d&&D.jsx("img",{src:E,alt:`${g.album} front cover`,style:{width:"100%",height:"100%",objectFit:"cover"}})}),D.jsxs("div",{style:{flex:1,minWidth:0},children:[D.jsxs("p",{style:{margin:"0 0 2px",fontFamily:b.fontBody,fontSize:15,fontWeight:700,color:b.textPrimary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[g.artist,' — "',g.title,'"']}),D.jsx("p",{style:{margin:0,fontFamily:b.fontBody,fontSize:13,color:b.textSecondary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:D.jsx("i",{children:g.album})})]}),!l&&D.jsx(eM,{artist:g.artist,title:g.title}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,flexShrink:0},children:[D.jsx("button",{onClick:I,style:{...k,width:34,height:34,...L?Q:{}},title:"Like",children:D.jsx(GS,{size:16,color:L?b.accent:b.textSecondary,strokeWidth:L?2.5:1.8})}),D.jsx("button",{onClick:A,style:{...k,width:34,height:34,...dt?Q:{}},title:"Dislike",children:D.jsx(IS,{size:16,color:dt?b.accent:b.textSecondary,strokeWidth:dt?2.5:1.8})})]})]})}function Sv({base_song:r,recommended_song:t}){const[i,s]=wt.useState(!0),[l,c]=wt.useState(!0),[d,h]=wt.useState(!0),[m,p]=wt.useState(null),[_,y]=wt.useState(null),[g,M]=wt.useState(null),[E,U]=wt.useState({}),[S,v]=wt.useState({}),[w,N]=wt.useState(""),O=async I=>{try{let A=await Se.getSongData(I);U(A)}catch(A){p(A)}finally{s(!1)}},V=async I=>{try{let A=await Se.getSongData(I);v(A)}catch(A){y(A)}finally{c(!1)}},z=async I=>{try{let A=await Se.getSongCover(I);N(A.cover)}catch(A){M(A)}finally{h(!1)}};return wt.useEffect(()=>{O(r),V(t),z(t)},[]),D.jsxs(D.Fragment,{children:[D.jsxs("i",{children:["Because you liked ",E.artist,' - "',E.title,'"...']}),D.jsxs("div",{style:{padding:"14px 20px",marginBottom:"10px",borderRadius:b.radius.md,background:b.bgCard,display:"flex",flexDirection:"row",alignItems:"center"},children:[D.jsx("div",{style:{width:"56px",height:"56px",background:b.bgElevated,marginRight:"16px",flexShrink:0,borderRadius:b.radius.sm,overflow:"hidden"},children:!d&&D.jsx("img",{src:w,alt:`${S.album} front cover`,style:{width:"100%",height:"100%",objectFit:"cover"}})}),D.jsxs("div",{style:{flex:1,minWidth:0},children:[D.jsxs("p",{style:{margin:"0 0 2px",fontFamily:b.fontBody,fontSize:15,fontWeight:700,color:b.textPrimary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[S.artist,' — "',S.title,'"']}),D.jsx("p",{style:{margin:0,fontFamily:b.fontBody,fontSize:13,color:b.textSecondary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:D.jsx("i",{children:S.album})})]})]})]})}const tp="183",Hr={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iM=0,s_=1,aM=2,Wc=1,sM=2,Qo=3,cs=0,Zn=1,Sa=2,ba=0,Gr=1,r_=2,o_=3,l_=4,rM=5,Fs=100,oM=101,lM=102,cM=103,uM=104,fM=200,dM=201,hM=202,pM=203,ah=204,sh=205,mM=206,gM=207,_M=208,vM=209,xM=210,yM=211,SM=212,MM=213,bM=214,rh=0,oh=1,lh=2,kr=3,ch=4,uh=5,fh=6,dh=7,ep=0,EM=1,TM=2,ji=0,Mv=1,bv=2,Ev=3,Tv=4,Av=5,Rv=6,Cv=7,wv=300,Hs=301,jr=302,Sd=303,Md=304,su=306,hh=1e3,Ma=1001,ph=1002,Cn=1003,AM=1004,Sc=1005,Nn=1006,bd=1007,zs=1008,li=1009,Dv=1010,Uv=1011,tl=1012,np=1013,qi=1014,Vi=1015,Ta=1016,ip=1017,ap=1018,el=1020,Lv=35902,Nv=35899,Ov=1021,Pv=1022,Ni=1023,Aa=1026,Is=1027,Fv=1028,sp=1029,Xr=1030,rp=1031,op=1033,qc=33776,Yc=33777,Zc=33778,Kc=33779,mh=35840,gh=35841,_h=35842,vh=35843,xh=36196,yh=37492,Sh=37496,Mh=37488,bh=37489,Eh=37490,Th=37491,Ah=37808,Rh=37809,Ch=37810,wh=37811,Dh=37812,Uh=37813,Lh=37814,Nh=37815,Oh=37816,Ph=37817,Fh=37818,Bh=37819,zh=37820,Ih=37821,Hh=36492,Gh=36494,Vh=36495,kh=36283,jh=36284,Xh=36285,Wh=36286,RM=3200,Bv=0,CM=1,rs="",xi="srgb",Wr="srgb-linear",tu="linear",ke="srgb",Er=7680,c_=519,wM=512,DM=513,UM=514,lp=515,LM=516,NM=517,cp=518,OM=519,u_=35044,f_="300 es",ki=2e3,nl=2001;function PM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function FM(){const r=eu("canvas");return r.style.display="block",r}const d_={};function h_(...r){const t="THREE."+r.shift();console.log(t,...r)}function zv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ce(...r){r=zv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Le(...r){r=zv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function nu(...r){const t=r.join(" ");t in d_||(d_[t]=!0,ce(...r))}function BM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const zM={[rh]:oh,[lh]:fh,[ch]:dh,[kr]:uh,[oh]:rh,[fh]:lh,[dh]:ch,[uh]:kr};class Gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,qh=180/Math.PI;function al(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function Te(r,t,i){return Math.max(t,Math.min(i,r))}function IM(r,t){return(r%t+t)%t}function Ed(r,t,i){return(1-i)*r+i*t}function ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const HM={DEG2RAD:Qc};class pe{constructor(t=0,i=0){pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],y=s[l+3],g=c[d+0],M=c[d+1],E=c[d+2],U=c[d+3];if(y!==U||m!==g||p!==M||_!==E){let S=m*g+p*M+_*E+y*U;S<0&&(g=-g,M=-M,E=-E,U=-U,S=-S);let v=1-h;if(S<.9995){const w=Math.acos(S),N=Math.sin(w);v=Math.sin(v*w)/N,h=Math.sin(h*w)/N,m=m*v+g*h,p=p*v+M*h,_=_*v+E*h,y=y*v+U*h}else{m=m*v+g*h,p=p*v+M*h,_=_*v+E*h,y=y*v+U*h;const w=1/Math.sqrt(m*m+p*p+_*_+y*y);m*=w,p*=w,_*=w,y*=w}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],y=c[d],g=c[d+1],M=c[d+2],E=c[d+3];return t[i]=h*E+_*y+m*M-p*g,t[i+1]=m*E+_*g+p*y-h*M,t[i+2]=p*E+_*M+h*g-m*y,t[i+3]=_*E-h*y-m*g-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),y=h(c/2),g=m(s/2),M=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=g*_*y+p*M*E,this._y=p*M*y-g*_*E,this._z=p*_*E+g*M*y,this._w=p*_*y-g*M*E;break;case"YXZ":this._x=g*_*y+p*M*E,this._y=p*M*y-g*_*E,this._z=p*_*E-g*M*y,this._w=p*_*y+g*M*E;break;case"ZXY":this._x=g*_*y-p*M*E,this._y=p*M*y+g*_*E,this._z=p*_*E+g*M*y,this._w=p*_*y-g*M*E;break;case"ZYX":this._x=g*_*y-p*M*E,this._y=p*M*y+g*_*E,this._z=p*_*E-g*M*y,this._w=p*_*y+g*M*E;break;case"YZX":this._x=g*_*y+p*M*E,this._y=p*M*y+g*_*E,this._z=p*_*E-g*M*y,this._w=p*_*y-g*M*E;break;case"XZY":this._x=g*_*y-p*M*E,this._y=p*M*y-g*_*E,this._z=p*_*E+g*M*y,this._w=p*_*y+g*M*E;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],y=i[10],g=s+h+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(s>h&&s>y){const M=2*Math.sqrt(1+s-h-y);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>y){const M=2*Math.sqrt(1+h-s-y);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+y-s-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-s*p,this._z=c*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(p_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-c*l),y=2*(c*s-d*i);return this.x=i+m*p+d*y-h*_,this.y=s+m*_+h*p-c*y,this.z=l+m*y+c*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Td.copy(this).projectOnVector(t),this.sub(Td)}reflect(t){return this.sub(Td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new J,p_=new us;class xe{constructor(t,i,s,l,c,d,h,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],y=s[7],g=s[2],M=s[5],E=s[8],U=l[0],S=l[3],v=l[6],w=l[1],N=l[4],O=l[7],V=l[2],z=l[5],I=l[8];return c[0]=d*U+h*w+m*V,c[3]=d*S+h*N+m*z,c[6]=d*v+h*O+m*I,c[1]=p*U+_*w+y*V,c[4]=p*S+_*N+y*z,c[7]=p*v+_*O+y*I,c[2]=g*U+M*w+E*V,c[5]=g*S+M*N+E*z,c[8]=g*v+M*O+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*c*_+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],y=_*d-h*p,g=h*m-_*c,M=p*c-d*m,E=i*y+s*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/E;return t[0]=y*U,t[1]=(l*p-_*s)*U,t[2]=(h*s-l*d)*U,t[3]=g*U,t[4]=(_*i-l*m)*U,t[5]=(l*c-h*i)*U,t[6]=M*U,t[7]=(s*m-p*i)*U,t[8]=(d*i-s*c)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Ad.makeScale(t,i)),this}rotate(t){return this.premultiply(Ad.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ad.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new xe,m_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GM(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===ke&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ke&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return nu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return nu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:tu,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Ne=GM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class VM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=eu("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=eu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ea(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kM=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Rd(l[d].image)):c.push(Rd(l[d]))}else c=Rd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Rd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?VM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let jM=0;const Cd=new J;class Hn extends Gs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Ma,l=Ma,c=Nn,d=zs,h=Ni,m=li,p=Hn.DEFAULT_ANISOTROPY,_=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=al(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hh:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hh:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=wv;Hn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],y=m[8],g=m[1],M=m[5],E=m[9],U=m[2],S=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(y-U)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+U)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,V=(v+1)/2,z=(_+g)/4,I=(y+U)/4,A=(E+S)/4;return N>O&&N>V?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=z/s,c=I/s):O>V?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=z/l,c=A/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=I/c,l=A/c),this.set(s,l,c,i),this}let w=Math.sqrt((S-E)*(S-E)+(y-U)*(y-U)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(y-U)/w,this.z=(g-_)/w,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XM extends Gs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Hn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new up(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends XM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Iv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t,i,s,l,c,d,h,m,p,_,y,g,M,E,U,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,_,y,g,M,E,U,S)}set(t,i,s,l,c,d,h,m,p,_,y,g,M,E,U,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=y,v[14]=g,v[3]=M,v[7]=E,v[11]=U,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),d=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const g=d*_,M=d*y,E=h*_,U=h*y;i[0]=m*_,i[4]=-m*y,i[8]=p,i[1]=M+E*p,i[5]=g-U*p,i[9]=-h*m,i[2]=U-g*p,i[6]=E+M*p,i[10]=d*m}else if(t.order==="YXZ"){const g=m*_,M=m*y,E=p*_,U=p*y;i[0]=g+U*h,i[4]=E*h-M,i[8]=d*p,i[1]=d*y,i[5]=d*_,i[9]=-h,i[2]=M*h-E,i[6]=U+g*h,i[10]=d*m}else if(t.order==="ZXY"){const g=m*_,M=m*y,E=p*_,U=p*y;i[0]=g-U*h,i[4]=-d*y,i[8]=E+M*h,i[1]=M+E*h,i[5]=d*_,i[9]=U-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const g=d*_,M=d*y,E=h*_,U=h*y;i[0]=m*_,i[4]=E*p-M,i[8]=g*p+U,i[1]=m*y,i[5]=U*p+g,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*p,E=h*m,U=h*p;i[0]=m*_,i[4]=U-g*y,i[8]=E*y+M,i[1]=y,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*y+E,i[10]=g-U*y}else if(t.order==="XZY"){const g=d*m,M=d*p,E=h*m,U=h*p;i[0]=m*_,i[4]=-y,i[8]=p*_,i[1]=g*y+U,i[5]=d*_,i[9]=M*y-E,i[2]=E*y-M,i[6]=h*_,i[10]=U*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qM,t,YM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),$a.crossVectors(s,ri),$a.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),$a.crossVectors(s,ri)),$a.normalize(),Mc.crossVectors(ri,$a),l[0]=$a.x,l[4]=Mc.x,l[8]=ri.x,l[1]=$a.y,l[5]=Mc.y,l[9]=ri.y,l[2]=$a.z,l[6]=Mc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],y=s[5],g=s[9],M=s[13],E=s[2],U=s[6],S=s[10],v=s[14],w=s[3],N=s[7],O=s[11],V=s[15],z=l[0],I=l[4],A=l[8],L=l[12],dt=l[1],k=l[5],Q=l[9],it=l[13],ot=l[2],tt=l[6],F=l[10],H=l[14],ut=l[3],gt=l[7],bt=l[11],B=l[15];return c[0]=d*z+h*dt+m*ot+p*ut,c[4]=d*I+h*k+m*tt+p*gt,c[8]=d*A+h*Q+m*F+p*bt,c[12]=d*L+h*it+m*H+p*B,c[1]=_*z+y*dt+g*ot+M*ut,c[5]=_*I+y*k+g*tt+M*gt,c[9]=_*A+y*Q+g*F+M*bt,c[13]=_*L+y*it+g*H+M*B,c[2]=E*z+U*dt+S*ot+v*ut,c[6]=E*I+U*k+S*tt+v*gt,c[10]=E*A+U*Q+S*F+v*bt,c[14]=E*L+U*it+S*H+v*B,c[3]=w*z+N*dt+O*ot+V*ut,c[7]=w*I+N*k+O*tt+V*gt,c[11]=w*A+N*Q+O*F+V*bt,c[15]=w*L+N*it+O*H+V*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],y=t[6],g=t[10],M=t[14],E=t[3],U=t[7],S=t[11],v=t[15],w=m*M-p*g,N=h*M-p*y,O=h*g-m*y,V=d*M-p*_,z=d*g-m*_,I=d*y-h*_;return i*(U*w-S*N+v*O)-s*(E*w-S*V+v*z)+l*(E*N-U*V+v*I)-c*(E*O-U*z+S*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],y=t[9],g=t[10],M=t[11],E=t[12],U=t[13],S=t[14],v=t[15],w=i*h-s*d,N=i*m-l*d,O=i*p-c*d,V=s*m-l*h,z=s*p-c*h,I=l*p-c*m,A=_*U-y*E,L=_*S-g*E,dt=_*v-M*E,k=y*S-g*U,Q=y*v-M*U,it=g*v-M*S,ot=w*it-N*Q+O*k+V*dt-z*L+I*A;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/ot;return t[0]=(h*it-m*Q+p*k)*tt,t[1]=(l*Q-s*it-c*k)*tt,t[2]=(U*I-S*z+v*V)*tt,t[3]=(g*z-y*I-M*V)*tt,t[4]=(m*dt-d*it-p*L)*tt,t[5]=(i*it-l*dt+c*L)*tt,t[6]=(S*O-E*I-v*N)*tt,t[7]=(_*I-g*O+M*N)*tt,t[8]=(d*Q-h*dt+p*A)*tt,t[9]=(s*dt-i*Q-c*A)*tt,t[10]=(E*z-U*O+v*w)*tt,t[11]=(y*O-_*z-M*w)*tt,t[12]=(h*L-d*k-m*A)*tt,t[13]=(i*k-s*L+l*A)*tt,t[14]=(U*N-E*V-S*w)*tt,t[15]=(_*V-y*N+g*w)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,_=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,y=h+h,g=c*p,M=c*_,E=c*y,U=d*_,S=d*y,v=h*y,w=m*p,N=m*_,O=m*y,V=s.x,z=s.y,I=s.z;return l[0]=(1-(U+v))*V,l[1]=(M+O)*V,l[2]=(E-N)*V,l[3]=0,l[4]=(M-O)*z,l[5]=(1-(g+v))*z,l[6]=(S+w)*z,l[7]=0,l[8]=(E+N)*I,l[9]=(S-w)*I,l[10]=(1-(g+U))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Ar.set(l[0],l[1],l[2]).length();const h=Ar.set(l[4],l[5],l[6]).length(),m=Ar.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const p=1/d,_=1/h,y=1/m;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=_,wi.elements[5]*=_,wi.elements[6]*=_,wi.elements[8]*=y,wi.elements[9]*=y,wi.elements[10]*=y,i.setFromRotationMatrix(wi),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,d,h=ki,m=!1){const p=this.elements,_=2*c/(i-t),y=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let E,U;if(m)E=c/(d-c),U=d*c/(d-c);else if(h===ki)E=-(d+c)/(d-c),U=-2*d*c/(d-c);else if(h===nl)E=-d/(d-c),U=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=ki,m=!1){const p=this.elements,_=2/(i-t),y=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let E,U;if(m)E=1/(d-c),U=d/(d-c);else if(h===ki)E=-2/(d-c),U=-(d+c)/(d-c);else if(h===nl)E=-1/(d-c),U=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ar=new J,wi=new en,qM=new J(0,0,0),YM=new J(1,1,1),$a=new J,Mc=new J,ri=new J,__=new en,v_=new us;class Yi{constructor(t=0,i=0,s=0,l=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],y=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return __.makeRotationFromQuaternion(t),this.setFromRotationMatrix(__,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return v_.setFromEuler(this),this.setFromQuaternion(v_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZM=0;const x_=new J,Rr=new us,ga=new en,bc=new J,jo=new J,KM=new J,QM=new us,y_=new J(1,0,0),S_=new J(0,1,0),M_=new J(0,0,1),b_={type:"added"},JM={type:"removed"},Cr={type:"childadded",child:null},wd={type:"childremoved",child:null};class wn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new J,i=new Yi,s=new us,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new xe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,i){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,bc,this.up):ga.lookAt(bc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(ga),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(b_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JM),wd.child=t,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(b_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,KM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,QM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const y=m[p];c(t.shapes,y)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),y=d(t.shapes),g=d(t.skeletons),M=d(t.animations),E=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new J(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ir extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const U of t.hand.values()){const S=i.getJointPose(U,s),v=this._getHandJoint(p,U);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=_.position.distanceTo(y.position),M=.02,E=.005;p.inputState.pinching&&g>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent($M)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ir;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Ud(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class we{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ne.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ne.workingColorSpace){if(t=IM(t,1),i=Te(i,0,1),s=Te(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ud(d,c,t+1/3),this.g=Ud(d,c,t),this.b=Ud(d,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ce("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=Hv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ne.workingToColorSpace(Ln.copy(this),t),Math.round(Te(Ln.r*255,0,255))*65536+Math.round(Te(Ln.g*255,0,255))*256+Math.round(Te(Ln.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const y=d-h;switch(p=_<=.5?y/(d+h):y/(2-d-h),d){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=xi){Ne.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(Ec);const s=Ed(ts.h,Ec.h,i),l=Ed(ts.s,Ec.s,i),c=Ed(ts.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new we;we.NAMES=Hv;class tb extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new J,_a=new J,Ld=new J,va=new J,wr=new J,Dr=new J,E_=new J,Nd=new J,Od=new J,Pd=new J,Fd=new sn,Bd=new sn,zd=new sn;class Li{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),_a.subVectors(s,i),Ld.subVectors(t,i);const d=Di.dot(Di),h=Di.dot(_a),m=Di.dot(Ld),p=_a.dot(_a),_=_a.dot(Ld),y=d*p-h*h;if(y===0)return c.set(0,0,0),null;const g=1/y,M=(p*m-h*_)*g,E=(d*_-h*m)*g;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(d,va.y),m.addScaledVector(h,va.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Fd.setScalar(0),Bd.setScalar(0),zd.setScalar(0),Fd.fromBufferAttribute(t,i),Bd.fromBufferAttribute(t,s),zd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Fd,c.x),d.addScaledVector(Bd,c.y),d.addScaledVector(zd,c.z),d}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),_a.subVectors(t,i),Di.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Di.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;wr.subVectors(l,s),Dr.subVectors(c,s),Nd.subVectors(t,s);const m=wr.dot(Nd),p=Dr.dot(Nd);if(m<=0&&p<=0)return i.copy(s);Od.subVectors(t,l);const _=wr.dot(Od),y=Dr.dot(Od);if(_>=0&&y<=_)return i.copy(l);const g=m*y-_*p;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(wr,d);Pd.subVectors(t,c);const M=wr.dot(Pd),E=Dr.dot(Pd);if(E>=0&&M<=E)return i.copy(c);const U=M*p-m*E;if(U<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Dr,h);const S=_*E-M*y;if(S<=0&&y-_>=0&&M-E>=0)return E_.subVectors(c,l),h=(y-_)/(y-_+(M-E)),i.copy(l).addScaledVector(E_,h);const v=1/(S+U+g);return d=U*v,h=g*v,i.copy(s).addScaledVector(wr,d).addScaledVector(Dr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sl{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),Ac.subVectors(this.max,Xo),Ur.subVectors(t.a,Xo),Lr.subVectors(t.b,Xo),Nr.subVectors(t.c,Xo),es.subVectors(Lr,Ur),ns.subVectors(Nr,Lr),ws.subVectors(Ur,Nr);let i=[0,-es.z,es.y,0,-ns.z,ns.y,0,-ws.z,ws.y,es.z,0,-es.x,ns.z,0,-ns.x,ws.z,0,-ws.x,-es.y,es.x,0,-ns.y,ns.x,0,-ws.y,ws.x,0];return!Id(i,Ur,Lr,Nr,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Id(i,Ur,Lr,Nr,Ac))?!1:(Rc.crossVectors(es,ns),i=[Rc.x,Rc.y,Rc.z],Id(i,Ur,Lr,Nr,Ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new J,new J,new J,new J,new J,new J,new J,new J],Ui=new J,Tc=new sl,Ur=new J,Lr=new J,Nr=new J,es=new J,ns=new J,ws=new J,Xo=new J,Ac=new J,Rc=new J,Ds=new J;function Id(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ds.fromArray(r,c);const h=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=t.dot(Ds),p=i.dot(Ds),_=s.dot(Ds);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const mn=new J,Cc=new pe;let eb=0;class Wi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=u_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class Gv extends Wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Vv extends Wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ci extends Wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const nb=new sl,Wo=new J,Hd=new J;class ru{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):nb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(Hd)),this.expandByPoint(Wo.copy(t.center).sub(Hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ib=0;const vi=new en,Gd=new wn,Or=new J,oi=new sl,qo=new sl,bn=new J;class Si extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(PM(t)?Vv:Gv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return Gd.lookAt(t),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ci(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(oi.min,qo.min),oi.expandByPoint(bn),bn.addVectors(oi.max,qo.max),oi.expandByPoint(bn)):(oi.expandByPoint(qo.min),oi.expandByPoint(qo.max))}oi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)bn.fromBufferAttribute(h,p),m&&(Or.fromBufferAttribute(t,p),bn.add(Or)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let A=0;A<s.count;A++)h[A]=new J,m[A]=new J;const p=new J,_=new J,y=new J,g=new pe,M=new pe,E=new pe,U=new J,S=new J;function v(A,L,dt){p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),y.fromBufferAttribute(s,dt),g.fromBufferAttribute(c,A),M.fromBufferAttribute(c,L),E.fromBufferAttribute(c,dt),_.sub(p),y.sub(p),M.sub(g),E.sub(g);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(U.copy(_).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(k),S.copy(y).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(k),h[A].add(U),h[L].add(U),h[dt].add(U),m[A].add(S),m[L].add(S),m[dt].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let A=0,L=w.length;A<L;++A){const dt=w[A],k=dt.start,Q=dt.count;for(let it=k,ot=k+Q;it<ot;it+=3)v(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const N=new J,O=new J,V=new J,z=new J;function I(A){V.fromBufferAttribute(l,A),z.copy(V);const L=h[A];N.copy(L),N.sub(V.multiplyScalar(V.dot(L))).normalize(),O.crossVectors(z,L);const k=O.dot(m[A])<0?-1:1;d.setXYZW(A,N.x,N.y,N.z,k)}for(let A=0,L=w.length;A<L;++A){const dt=w[A],k=dt.start,Q=dt.count;for(let it=k,ot=k+Q;it<ot;it+=3)I(t.getX(it+0)),I(t.getX(it+1)),I(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new J,c=new J,d=new J,h=new J,m=new J,p=new J,_=new J,y=new J;if(t)for(let g=0,M=t.count;g<M;g+=3){const E=t.getX(g+0),U=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,U),d.fromBufferAttribute(i,S),_.subVectors(d,c),y.subVectors(l,c),_.cross(y),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,U),p.fromBufferAttribute(s,S),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,c),y.subVectors(l,c),_.cross(y),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,y=h.normalized,g=new p.constructor(m.length*_);let M=0,E=0;for(let U=0,S=m.length;U<S;U++){h.isInterleavedBufferAttribute?M=m[U]*h.data.stride+h.offset:M=m[U]*_;for(let v=0;v<_;v++)g[E++]=p[M++]}return new Wi(g,_,y)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Si,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,y=p.length;_<y;_++){const g=p[_],M=t(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let y=0,g=p.length;y<g;y++){const M=p[y];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],y=c[p];for(let g=0,M=y.length;g<M;g++)_.push(y[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const y=d[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ab=0;class Yr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Gr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=sh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ah&&(s.blendSrc=this.blendSrc),this.blendDst!==sh&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ya=new J,Vd=new J,wc=new J,is=new J,kd=new J,Dc=new J,jd=new J;class ou{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Vd.copy(t).add(i).multiplyScalar(.5),wc.copy(i).sub(t).normalize(),is.copy(this.origin).sub(Vd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(wc),h=is.dot(this.direction),m=-is.dot(wc),p=is.lengthSq(),_=Math.abs(1-d*d);let y,g,M,E;if(_>0)if(y=d*m-h,g=d*h-m,E=c*_,y>=0)if(g>=-E)if(g<=E){const U=1/_;y*=U,g*=U,M=y*(y+d*g+2*h)+g*(d*y+g+2*m)+p}else g=c,y=Math.max(0,-(d*g+h)),M=-y*y+g*(g+2*m)+p;else g=-c,y=Math.max(0,-(d*g+h)),M=-y*y+g*(g+2*m)+p;else g<=-E?(y=Math.max(0,-(-d*c+h)),g=y>0?-c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+p):g<=E?(y=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(y=Math.max(0,-(d*c+h)),g=y>0?c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+p);else g=d>0?-c:c,y=Math.max(0,-(d*g+h)),M=-y*y+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Vd).addScaledVector(wc,g),M}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,d=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,d=(t.min.y-g.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),y>=0?(h=(t.min.z-g.z)*y,m=(t.max.z-g.z)*y):(h=(t.max.z-g.z)*y,m=(t.min.z-g.z)*y),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,c){kd.subVectors(i,t),Dc.subVectors(s,t),jd.crossVectors(kd,Dc);let d=this.direction.dot(jd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;is.subVectors(this.origin,t);const m=h*this.direction.dot(Dc.crossVectors(is,Dc));if(m<0)return null;const p=h*this.direction.dot(kd.cross(is));if(p<0||m+p>d)return null;const _=-h*is.dot(jd);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kv extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const T_=new en,Us=new ou,Uc=new ru,A_=new J,Lc=new J,Nc=new J,Oc=new J,Xd=new J,Pc=new J,R_=new J,Fc=new J;class Zi extends wn{constructor(t=new Si,i=new kv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],y=c[m];_!==0&&(Xd.fromBufferAttribute(y,t),d?Pc.addScaledVector(Xd,_):Pc.addScaledVector(Xd.sub(i),_))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(Uc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Uc,A_)===null||Us.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(c).invert(),Us.copy(t.ray).applyMatrix4(T_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Us)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,U=g.length;E<U;E++){const S=g[E],v=d[S.materialIndex],w=Math.max(S.start,M.start),N=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let O=w,V=N;O<V;O+=3){const z=h.getX(O),I=h.getX(O+1),A=h.getX(O+2);l=Bc(this,v,t,s,p,_,y,z,I,A),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),U=Math.min(h.count,M.start+M.count);for(let S=E,v=U;S<v;S+=3){const w=h.getX(S),N=h.getX(S+1),O=h.getX(S+2);l=Bc(this,d,t,s,p,_,y,w,N,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,U=g.length;E<U;E++){const S=g[E],v=d[S.materialIndex],w=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let O=w,V=N;O<V;O+=3){const z=O,I=O+1,A=O+2;l=Bc(this,v,t,s,p,_,y,z,I,A),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),U=Math.min(m.count,M.start+M.count);for(let S=E,v=U;S<v;S+=3){const w=S,N=S+1,O=S+2;l=Bc(this,d,t,s,p,_,y,w,N,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function sb(r,t,i,s,l,c,d,h){let m;if(t.side===Zn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===cs,h),m===null)return null;Fc.copy(h),Fc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:r}}function Bc(r,t,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const _=sb(r,t,i,s,Lc,Nc,Oc,R_);if(_){const y=new J;Li.getBarycoord(R_,Lc,Nc,Oc,y),l&&(_.uv=Li.getInterpolatedAttribute(l,h,m,p,y,new pe)),c&&(_.uv1=Li.getInterpolatedAttribute(c,h,m,p,y,new pe)),d&&(_.normal=Li.getInterpolatedAttribute(d,h,m,p,y,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new J,materialIndex:0};Li.getNormal(Lc,Nc,Oc,g.normal),_.face=g,_.barycoord=y}return _}class rb extends Hn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=Cn,_=Cn,y,g){super(null,d,h,m,p,_,l,c,y,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wd=new J,ob=new J,lb=new xe;class ss{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wd.subVectors(s,i).cross(ob.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Wd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||lb.getNormalMatrix(t),l=this.coplanarPoint(Wd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new ru,cb=new pe(.5,.5),zc=new J;class dp{constructor(t=new ss,i=new ss,s=new ss,l=new ss,c=new ss,d=new ss){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],_=c[4],y=c[5],g=c[6],M=c[7],E=c[8],U=c[9],S=c[10],v=c[11],w=c[12],N=c[13],O=c[14],V=c[15];if(l[0].setComponents(p-d,M-_,v-E,V-w).normalize(),l[1].setComponents(p+d,M+_,v+E,V+w).normalize(),l[2].setComponents(p+h,M+y,v+U,V+N).normalize(),l[3].setComponents(p-h,M-y,v-U,V-N).normalize(),s)l[4].setComponents(m,g,S,O).normalize(),l[5].setComponents(p-m,M-g,v-S,V-O).normalize();else if(l[4].setComponents(p-m,M-g,v-S,V-O).normalize(),i===ki)l[5].setComponents(p+m,M+g,v+S,V+O).normalize();else if(i===nl)l[5].setComponents(m,g,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=cb.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?t.max.x:t.min.x,zc.y=l.normal.y>0?t.max.y:t.min.y,zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jv extends Yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new J,au=new J,C_=new en,Yo=new ou,Ic=new ru,qd=new J,w_=new J;class ub extends wn{constructor(t=new Si,i=new jv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new ci(s,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;C_.copy(l).invert(),Yo.copy(t.ray).applyMatrix4(C_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const M=Math.max(0,d.start),E=Math.min(_.count,d.start+d.count);for(let U=M,S=E-1;U<S;U+=p){const v=_.getX(U),w=_.getX(U+1),N=Hc(this,t,Yo,m,v,w,U);N&&i.push(N)}if(this.isLineLoop){const U=_.getX(E-1),S=_.getX(M),v=Hc(this,t,Yo,m,U,S,E-1);v&&i.push(v)}}else{const M=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let U=M,S=E-1;U<S;U+=p){const v=Hc(this,t,Yo,m,U,U+1,U);v&&i.push(v)}if(this.isLineLoop){const U=Hc(this,t,Yo,m,E-1,M,E-1);U&&i.push(U)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Hc(r,t,i,s,l,c,d){const h=r.geometry.attributes.position;if(iu.fromBufferAttribute(h,l),au.fromBufferAttribute(h,c),i.distanceSqToSegment(iu,au,qd,w_)>s)return;qd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(qd);if(!(p<t.near||p>t.far))return{distance:p,point:w_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}class Xv extends Hn{constructor(t=[],i=Hs,s,l,c,d,h,m,p,_){super(t,i,s,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class il extends Hn{constructor(t,i,s=qi,l,c,d,h=Cn,m=Cn,p,_=Aa,y=1){if(_!==Aa&&_!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:y};super(g,l,c,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fb extends il{constructor(t,i=qi,s=Hs,l,c,d=Cn,h=Cn,m,p=Aa){const _={width:t,height:t,depth:1},y=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,h,m,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Wv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rl extends Si{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],y=[];let g=0,M=0;E("z","y","x",-1,-1,s,i,t,d,c,0),E("z","y","x",1,-1,s,i,-t,d,c,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ci(p,3)),this.setAttribute("normal",new ci(_,3)),this.setAttribute("uv",new ci(y,2));function E(U,S,v,w,N,O,V,z,I,A,L){const dt=O/I,k=V/A,Q=O/2,it=V/2,ot=z/2,tt=I+1,F=A+1;let H=0,ut=0;const gt=new J;for(let bt=0;bt<F;bt++){const B=bt*k-it;for(let Z=0;Z<tt;Z++){const xt=Z*dt-Q;gt[U]=xt*w,gt[S]=B*N,gt[v]=ot,p.push(gt.x,gt.y,gt.z),gt[U]=0,gt[S]=0,gt[v]=z>0?1:-1,_.push(gt.x,gt.y,gt.z),y.push(Z/I),y.push(1-bt/A),H+=1}}for(let bt=0;bt<A;bt++)for(let B=0;B<I;B++){const Z=g+B+tt*bt,xt=g+B+tt*(bt+1),Et=g+(B+1)+tt*(bt+1),It=g+(B+1)+tt*bt;m.push(Z,xt,It),m.push(xt,Et,It),ut+=6}h.addGroup(M,ut,L),M+=ut,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class lu extends Si{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,y=t/h,g=i/m,M=[],E=[],U=[],S=[];for(let v=0;v<_;v++){const w=v*g-d;for(let N=0;N<p;N++){const O=N*y-c;E.push(O,-w,0),U.push(0,0,1),S.push(N/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<h;w++){const N=w+p*v,O=w+p*(v+1),V=w+1+p*(v+1),z=w+1+p*v;M.push(N,O,z),M.push(O,V,z)}this.setIndex(M),this.setAttribute("position",new ci(E,3)),this.setAttribute("normal",new ci(U,3)),this.setAttribute("uv",new ci(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class hp extends Si{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const _=[],y=new J,g=new J,M=[],E=[],U=[],S=[];for(let v=0;v<=s;v++){const w=[],N=v/s;let O=0;v===0&&d===0?O=.5/i:v===s&&m===Math.PI&&(O=-.5/i);for(let V=0;V<=i;V++){const z=V/i;y.x=-t*Math.cos(l+z*c)*Math.sin(d+N*h),y.y=t*Math.cos(d+N*h),y.z=t*Math.sin(l+z*c)*Math.sin(d+N*h),E.push(y.x,y.y,y.z),g.copy(y).normalize(),U.push(g.x,g.y,g.z),S.push(z+O,1-N),w.push(p++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<i;w++){const N=_[v][w+1],O=_[v][w],V=_[v+1][w],z=_[v+1][w+1];(v!==0||d>0)&&M.push(N,O,z),(v!==s-1||m<Math.PI)&&M.push(O,V,z)}this.setIndex(M),this.setAttribute("position",new ci(E,3)),this.setAttribute("normal",new ci(U,3)),this.setAttribute("uv",new ci(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)t[l]=s[l]}return t}function db(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function qv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const hb={clone:qr,merge:In};var pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=db(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class gb extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _b extends Yr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bv,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=ep,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vb extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xb extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yv extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Yd=new en,D_=new J,U_=new J;class yb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dp,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;D_.setFromMatrixPosition(t.matrixWorld),i.position.copy(D_),U_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(U_),i.updateMatrixWorld(),Yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===nl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Yd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gc=new J,Vc=new us,Ii=new J;class Zv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gc,Vc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Gc,Vc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const as=new J,L_=new pe,N_=new pe;class yi extends Zv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,i){return this.getViewBounds(t,L_,N_),i.subVectors(N_,L_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class pp extends Zv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Sb extends yb{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mb extends Yv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Sb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class bb extends Yv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,Fr=1;class Eb extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Pr,Fr,t,i);l.layers=this.layers,this.add(l);const c=new yi(Pr,Fr,t,i);c.layers=this.layers,this.add(c);const d=new yi(Pr,Fr,t,i);d.layers=this.layers,this.add(d);const h=new yi(Pr,Fr,t,i);h.layers=this.layers,this.add(h);const m=new yi(Pr,Fr,t,i);m.layers=this.layers,this.add(m);const p=new yi(Pr,Fr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,y=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(y,g,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Tb extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const O_=new en;class Ab{constructor(t,i,s=0,l=1/0){this.ray=new ou(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Le("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return O_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(t,i=!0,s=[]){return Yh(t,this,s,i),s.sort(P_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Yh(t[l],this,s,i);return s.sort(P_),s}}function P_(r,t){return r.distance-t.distance}function Yh(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let d=0,h=c.length;d<h;d++)Yh(c[d],t,i,!0)}}class F_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Te(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rb extends Gs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function B_(r,t,i,s){const l=Cb(s);switch(i){case Ov:return r*t;case Fv:return r*t/l.components*l.byteLength;case sp:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case rp:return r*t*2/l.components*l.byteLength;case Pv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case op:return r*t*4/l.components*l.byteLength;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gh:case vh:return Math.max(r,16)*Math.max(t,8)/4;case mh:case _h:return Math.max(r,8)*Math.max(t,8)/2;case xh:case yh:case Mh:case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Sh:case Eh:case Th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hh:case Gh:case Vh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case kh:case jh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Xh:case Wh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Cb(r){switch(r){case li:case Dv:return{byteLength:1,components:1};case tl:case Uv:case Ta:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case qi:case np:case Vi:return{byteLength:4,components:1};case Lv:case Nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);function Kv(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function wb(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,y=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:y}}function s(h,m,p){const _=m.array,y=m.updateRanges;if(r.bindBuffer(p,h),y.length===0)r.bufferSubData(p,0,_);else{y.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<y.length;M++){const E=y[g],U=y[M];U.start<=E.start+E.count+1?E.count=Math.max(E.count,U.start+U.count-E.start):(++g,y[g]=U)}y.length=g+1;for(let M=0,E=y.length;M<E;M++){const U=y[M];r.bufferSubData(p,U.start*_.BYTES_PER_ELEMENT,_,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
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
#endif`,Lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
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
#endif`,Bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,jb=`#ifdef USE_BUMPMAP
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
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$b=`#define PI 3.141592653589793
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
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e1=`vec3 transformedNormal = objectNormal;
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
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r1="gl_FragColor = linearToOutputTexel( gl_FragColor );",o1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_1=`#ifdef USE_GRADIENTMAP
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
}`,v1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S1=`uniform bool receiveShadow;
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
#endif`,M1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,b1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,C1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I1=`#if defined( USE_POINTS_UV )
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
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J1=`#ifdef USE_NORMALMAP
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
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
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
}`,VE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,jE=`uniform vec3 diffuse;
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
}`,XE=`#define LAMBERT
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
}`,WE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,qE=`#define MATCAP
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
}`,YE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
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
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,$E=`#define STANDARD
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
}`,tT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,eT=`#define TOON
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
}`,nT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,iT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,sT=`#include <common>
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
}`,rT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,oT=`uniform float rotation;
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
}`,lT=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Lb,alphamap_pars_fragment:Nb,alphatest_fragment:Ob,alphatest_pars_fragment:Pb,aomap_fragment:Fb,aomap_pars_fragment:Bb,batching_pars_vertex:zb,batching_vertex:Ib,begin_vertex:Hb,beginnormal_vertex:Gb,bsdfs:Vb,iridescence_fragment:kb,bumpmap_pars_fragment:jb,clipping_planes_fragment:Xb,clipping_planes_pars_fragment:Wb,clipping_planes_pars_vertex:qb,clipping_planes_vertex:Yb,color_fragment:Zb,color_pars_fragment:Kb,color_pars_vertex:Qb,color_vertex:Jb,common:$b,cube_uv_reflection_fragment:t1,defaultnormal_vertex:e1,displacementmap_pars_vertex:n1,displacementmap_vertex:i1,emissivemap_fragment:a1,emissivemap_pars_fragment:s1,colorspace_fragment:r1,colorspace_pars_fragment:o1,envmap_fragment:l1,envmap_common_pars_fragment:c1,envmap_pars_fragment:u1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:M1,envmap_vertex:d1,fog_vertex:h1,fog_pars_vertex:p1,fog_fragment:m1,fog_pars_fragment:g1,gradientmap_pars_fragment:_1,lightmap_pars_fragment:v1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:y1,lights_pars_begin:S1,lights_toon_fragment:b1,lights_toon_pars_fragment:E1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:R1,lights_physical_pars_fragment:C1,lights_fragment_begin:w1,lights_fragment_maps:D1,lights_fragment_end:U1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:P1,map_fragment:F1,map_pars_fragment:B1,map_particle_fragment:z1,map_particle_pars_fragment:I1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:G1,morphinstance_vertex:V1,morphcolor_vertex:k1,morphnormal_vertex:j1,morphtarget_pars_vertex:X1,morphtarget_vertex:W1,normal_fragment_begin:q1,normal_fragment_maps:Y1,normal_pars_fragment:Z1,normal_pars_vertex:K1,normal_vertex:Q1,normalmap_pars_fragment:J1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:eE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:aE,premultiplied_alpha_fragment:sE,project_vertex:rE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:dE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:_E,skinnormal_vertex:vE,specularmap_fragment:xE,specularmap_pars_fragment:yE,tonemapping_fragment:SE,tonemapping_pars_fragment:ME,transmission_fragment:bE,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:RE,worldpos_vertex:CE,background_vert:wE,background_frag:DE,backgroundCube_vert:UE,backgroundCube_frag:LE,cube_vert:NE,cube_frag:OE,depth_vert:PE,depth_frag:FE,distance_vert:BE,distance_frag:zE,equirect_vert:IE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:VE,meshbasic_vert:kE,meshbasic_frag:jE,meshlambert_vert:XE,meshlambert_frag:WE,meshmatcap_vert:qE,meshmatcap_frag:YE,meshnormal_vert:ZE,meshnormal_frag:KE,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:$E,meshphysical_frag:tT,meshtoon_vert:eT,meshtoon_frag:nT,points_vert:iT,points_frag:aT,shadow_vert:sT,shadow_frag:rT,sprite_vert:oT,sprite_frag:lT},Bt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Gi={basic:{uniforms:In([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:In([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:In([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:In([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:In([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:In([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:In([Bt.points,Bt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:In([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:In([Bt.common,Bt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:In([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:In([Bt.sprite,Bt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:In([Bt.common,Bt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:In([Bt.lights,Bt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Gi.physical={uniforms:In([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const kc={r:0,b:0,g:0},Ns=new Yi,cT=new en;function uT(r,t,i,s,l,c){const d=new we(0);let h=l===!0?0:1,m,p,_=null,y=0,g=null;function M(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const O=w.backgroundBlurriness>0;N=t.get(N,O)}return N}function E(w){let N=!1;const O=M(w);O===null?S(d,h):O&&O.isColor&&(S(O,1),N=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(w,N){const O=M(N);O&&(O.isCubeTexture||O.mapping===su)?(p===void 0&&(p=new Zi(new rl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:qr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ns.copy(N.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.material.uniforms.envMap.value=O,p.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(Ns)),p.material.toneMapped=Ne.getTransfer(O.colorSpace)!==ke,(_!==O||y!==O.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=O,y=O.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new Zi(new lu(2,2),new Ki({name:"BackgroundMaterial",uniforms:qr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(O.colorSpace)!==ke,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||y!==O.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=O,y=O.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function S(w,N){w.getRGB(kc,qv(r)),i.buffers.color.setClear(kc.r,kc.g,kc.b,N,c)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,N=1){d.set(w),h=N,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,S(d,h)},render:E,addToRenderList:U,dispose:v}}function fT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function h(k,Q,it,ot,tt){let F=!1;const H=y(k,ot,it,Q);c!==H&&(c=H,p(c.object)),F=M(k,ot,it,tt),F&&E(k,ot,it,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,O(k,Q,it,ot),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function p(k){return r.bindVertexArray(k)}function _(k){return r.deleteVertexArray(k)}function y(k,Q,it,ot){const tt=ot.wireframe===!0;let F=s[Q.id];F===void 0&&(F={},s[Q.id]=F);const H=k.isInstancedMesh===!0?k.id:0;let ut=F[H];ut===void 0&&(ut={},F[H]=ut);let gt=ut[it.id];gt===void 0&&(gt={},ut[it.id]=gt);let bt=gt[tt];return bt===void 0&&(bt=g(m()),gt[tt]=bt),bt}function g(k){const Q=[],it=[],ot=[];for(let tt=0;tt<i;tt++)Q[tt]=0,it[tt]=0,ot[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:it,attributeDivisors:ot,object:k,attributes:{},index:null}}function M(k,Q,it,ot){const tt=c.attributes,F=Q.attributes;let H=0;const ut=it.getAttributes();for(const gt in ut)if(ut[gt].location>=0){const B=tt[gt];let Z=F[gt];if(Z===void 0&&(gt==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),gt==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),B===void 0||B.attribute!==Z||Z&&B.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==ot}function E(k,Q,it,ot){const tt={},F=Q.attributes;let H=0;const ut=it.getAttributes();for(const gt in ut)if(ut[gt].location>=0){let B=F[gt];B===void 0&&(gt==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),gt==="instanceColor"&&k.instanceColor&&(B=k.instanceColor));const Z={};Z.attribute=B,B&&B.data&&(Z.data=B.data),tt[gt]=Z,H++}c.attributes=tt,c.attributesNum=H,c.index=ot}function U(){const k=c.newAttributes;for(let Q=0,it=k.length;Q<it;Q++)k[Q]=0}function S(k){v(k,0)}function v(k,Q){const it=c.newAttributes,ot=c.enabledAttributes,tt=c.attributeDivisors;it[k]=1,ot[k]===0&&(r.enableVertexAttribArray(k),ot[k]=1),tt[k]!==Q&&(r.vertexAttribDivisor(k,Q),tt[k]=Q)}function w(){const k=c.newAttributes,Q=c.enabledAttributes;for(let it=0,ot=Q.length;it<ot;it++)Q[it]!==k[it]&&(r.disableVertexAttribArray(it),Q[it]=0)}function N(k,Q,it,ot,tt,F,H){H===!0?r.vertexAttribIPointer(k,Q,it,tt,F):r.vertexAttribPointer(k,Q,it,ot,tt,F)}function O(k,Q,it,ot){U();const tt=ot.attributes,F=it.getAttributes(),H=Q.defaultAttributeValues;for(const ut in F){const gt=F[ut];if(gt.location>=0){let bt=tt[ut];if(bt===void 0&&(ut==="instanceMatrix"&&k.instanceMatrix&&(bt=k.instanceMatrix),ut==="instanceColor"&&k.instanceColor&&(bt=k.instanceColor)),bt!==void 0){const B=bt.normalized,Z=bt.itemSize,xt=t.get(bt);if(xt===void 0)continue;const Et=xt.buffer,It=xt.type,at=xt.bytesPerElement,yt=It===r.INT||It===r.UNSIGNED_INT||bt.gpuType===np;if(bt.isInterleavedBufferAttribute){const Tt=bt.data,ft=Tt.stride,Dt=bt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<gt.locationSize;Nt++)v(gt.location+Nt,Tt.meshPerAttribute);k.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Nt=0;Nt<gt.locationSize;Nt++)S(gt.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Nt=0;Nt<gt.locationSize;Nt++)N(gt.location+Nt,Z/gt.locationSize,It,B,ft*at,(Dt+Z/gt.locationSize*Nt)*at,yt)}else{if(bt.isInstancedBufferAttribute){for(let Tt=0;Tt<gt.locationSize;Tt++)v(gt.location+Tt,bt.meshPerAttribute);k.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Tt=0;Tt<gt.locationSize;Tt++)S(gt.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Tt=0;Tt<gt.locationSize;Tt++)N(gt.location+Tt,Z/gt.locationSize,It,B,Z*at,Z/gt.locationSize*Tt*at,yt)}}else if(H!==void 0){const B=H[ut];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(gt.location,B);break;case 3:r.vertexAttrib3fv(gt.location,B);break;case 4:r.vertexAttrib4fv(gt.location,B);break;default:r.vertexAttrib1fv(gt.location,B)}}}}w()}function V(){L();for(const k in s){const Q=s[k];for(const it in Q){const ot=Q[it];for(const tt in ot){const F=ot[tt];for(const H in F)_(F[H].object),delete F[H];delete ot[tt]}}delete s[k]}}function z(k){if(s[k.id]===void 0)return;const Q=s[k.id];for(const it in Q){const ot=Q[it];for(const tt in ot){const F=ot[tt];for(const H in F)_(F[H].object),delete F[H];delete ot[tt]}}delete s[k.id]}function I(k){for(const Q in s){const it=s[Q];for(const ot in it){const tt=it[ot];if(tt[k.id]===void 0)continue;const F=tt[k.id];for(const H in F)_(F[H].object),delete F[H];delete tt[k.id]}}}function A(k){for(const Q in s){const it=s[Q],ot=k.isInstancedMesh===!0?k.id:0,tt=it[ot];if(tt!==void 0){for(const F in tt){const H=tt[F];for(const ut in H)_(H[ut].object),delete H[ut];delete tt[F]}delete it[ot],Object.keys(it).length===0&&delete s[Q]}}}function L(){dt(),d=!0,c!==l&&(c=l,p(c.object))}function dt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:dt,dispose:V,releaseStatesOfGeometry:z,releaseStatesOfObject:A,releaseStatesOfProgram:I,initAttributes:U,enableAttribute:S,disableUnusedAttributes:w}}function dT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,y){y!==0&&(r.drawArraysInstanced(s,p,_,y),i.update(_,s,y))}function h(p,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,y);let M=0;for(let E=0;E<y;E++)M+=_[E];i.update(M,s,1)}function m(p,_,y,g){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)d(p[E],_[E],g[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,y);let E=0;for(let U=0;U<y;U++)E+=_[U]*g[U];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function hT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ni&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const A=I===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==li&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vi&&!A)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ce("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:U,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:O,maxSamples:V,samples:z}}function pT(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new ss,h=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||s!==0||l;return l=g,s=y.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=_(y,g,0)},this.setState=function(y,g,M){const E=y.clippingPlanes,U=y.clipIntersection,S=y.clipShadows,v=r.get(y);if(!l||E===null||E.length===0||c&&!S)c?_(null):p();else{const w=c?0:s,N=w*4;let O=v.clippingState||null;m.value=O,O=_(E,g,N,M);for(let V=0;V!==N;++V)O[V]=i[V];v.clippingState=O,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(y,g,M,E){const U=y!==null?y.length:0;let S=null;if(U!==0){if(S=m.value,E!==!0||S===null){const v=M+U*4,w=g.matrixWorldInverse;h.getNormalMatrix(w),(S===null||S.length<v)&&(S=new Float32Array(v));for(let N=0,O=M;N!==U;++N,O+=4)d.copy(y[N]).applyMatrix4(w,h),d.normal.toArray(S,O),S[O+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,S}}const ls=4,z_=[.125,.215,.35,.446,.526,.582],Bs=20,mT=256,Zo=new pp,I_=new we;let Zd=null,Kd=0,Qd=0,Jd=!1;const gT=new J;class H_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=gT}=c;Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zd,Kd,Qd),this._renderer.xr.enabled=Jd,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hs||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ta,format:Ni,colorSpace:Wr,depthBuffer:!1},l=G_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_T(c)),this._blurMaterial=xT(c,t,i),this._ggxMaterial=vT(c,t,i)}return l}_compileMaterial(t){const i=new Zi(new Si,t);this._renderer.compile(i,Zo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(I_),y.toneMapping=ji,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zi(new rl,new kv({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,S=U.material;let v=!1;const w=t.background;w?w.isColor&&(S.color.copy(w),t.background=null,v=!0):(S.color.copy(I_),v=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const V=this._cubeSize;Br(l,O*V,N>2?V:0,V,V),y.setRenderTarget(l),v&&y.render(U,m),y.render(t,m)}y.toneMapping=M,y.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hs||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Zo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),y=Math.sqrt(p*p-_*_),g=0+p*1.25,M=y*g,{_lodMax:E}=this,U=this._sizeLods[s],S=3*U*(s>E-ls?s-E+ls:0),v=4*(this._cubeSize-U);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=E-i,Br(c,S,v,3*U,2*U),l.setRenderTarget(c),l.render(h,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Br(t,S,v,3*U,2*U),l.setRenderTarget(t),l.render(h,Zo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const _=3,y=this._lodMeshes[l];y.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Bs-1),U=c/E,S=isFinite(c)?1+Math.floor(_*U):Bs;S>Bs&&ce(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Bs}`);const v=[];let w=0;for(let I=0;I<Bs;++I){const A=I/U,L=Math.exp(-A*A/2);v.push(L),I===0?w+=L:I<S&&(w+=2*L)}for(let I=0;I<v.length;I++)v[I]=v[I]/w;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:N}=this;g.dTheta.value=E,g.mipInt.value=N-s;const O=this._sizeLods[l],V=3*O*(l>N-ls?l-N+ls:0),z=4*(this._cubeSize-O);Br(i,V,z,3*O,2*O),m.setRenderTarget(i),m.render(y,Zo)}}function _T(r){const t=[],i=[],s=[];let l=r;const c=r-ls+1+z_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>r-ls?m=z_[d-r+ls-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,y=1+p,g=[_,_,y,_,y,y,_,_,y,y,_,y],M=6,E=6,U=3,S=2,v=1,w=new Float32Array(U*E*M),N=new Float32Array(S*E*M),O=new Float32Array(v*E*M);for(let z=0;z<M;z++){const I=z%3*2/3-1,A=z>2?0:-1,L=[I,A,0,I+2/3,A,0,I+2/3,A+1,0,I,A,0,I+2/3,A+1,0,I,A+1,0];w.set(L,U*E*z),N.set(g,S*E*z);const dt=[z,z,z,z,z,z];O.set(dt,v*E*z)}const V=new Si;V.setAttribute("position",new Wi(w,U)),V.setAttribute("uv",new Wi(N,S)),V.setAttribute("faceIndex",new Wi(O,v)),s.push(new Zi(V,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function G_(r,t,i){const s=new Xi(r,t,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function vT(r,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function xT(r,t,i){const s=new Float32Array(Bs),l=new J(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function V_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function k_(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}class Qv extends Xi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new rl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:ba});c.uniforms.tEquirect.value=i;const d=new Zi(l,c),h=i.minFilter;return i.minFilter===zs&&(i.minFilter=Nn),new Eb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function yT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Sd||M===Md)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const U=new Qv(E.height);return U.fromEquirectangularTexture(r,g),t.set(g,U),g.addEventListener("dispose",p),h(U.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,E=M===Sd||M===Md,U=M===Hs||M===jr;if(E||U){let S=i.get(g);const v=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new H_(r)),S=E?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const w=g.image;return E&&w&&w.height>0||U&&w&&m(w)?(s===null&&(s=new H_(r)),S=E?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function h(g,M){return M===Sd?g.mapping=Hs:M===Md&&(g.mapping=jr),g}function m(g){let M=0;const E=6;for(let U=0;U<E;U++)g[U]!==void 0&&M++;return M===E}function p(g){const M=g.target;M.removeEventListener("dispose",p);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function y(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function ST(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&nu("WebGLRenderer: "+s+" extension not supported."),l}}}function MT(r,t,i,s){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function p(y){const g=[],M=y.index,E=y.attributes.position;let U=0;if(E===void 0)return;if(M!==null){const w=M.array;U=M.version;for(let N=0,O=w.length;N<O;N+=3){const V=w[N+0],z=w[N+1],I=w[N+2];g.push(V,z,z,I,I,V)}}else{const w=E.array;U=E.version;for(let N=0,O=w.length/3-1;N<O;N+=3){const V=N+0,z=N+1,I=N+2;g.push(V,z,z,I,I,V)}}const S=new(E.count>=65535?Vv:Gv)(g,1);S.version=U;const v=c.get(y);v&&t.remove(v),c.set(y,S)}function _(y){const g=c.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&p(y)}else p(y);return c.get(y)}return{get:h,update:m,getWireframeAttribute:_}}function bT(r,t,i){let s;function l(g){s=g}let c,d;function h(g){c=g.type,d=g.bytesPerElement}function m(g,M){r.drawElements(s,M,c,g*d),i.update(M,s,1)}function p(g,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,g*d,E),i.update(M,s,E))}function _(g,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];i.update(S,s,1)}function y(g,M,E,U){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<g.length;v++)p(g[v]/d,M[v],U[v]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,U,0,E);let v=0;for(let w=0;w<E;w++)v+=M[w]*U[w];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function ET(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Le("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function TT(r,t,i){const s=new WeakMap,l=new sn;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==y){let dt=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",dt)};var M=dt;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),U===!0&&(O=2),S===!0&&(O=3);let V=h.attributes.position.count*O,z=1;V>t.maxTextureSize&&(z=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const I=new Float32Array(V*z*4*y),A=new Iv(I,V,z,y);A.type=Vi,A.needsUpdate=!0;const L=O*4;for(let k=0;k<y;k++){const Q=v[k],it=w[k],ot=N[k],tt=V*z*4*k;for(let F=0;F<Q.count;F++){const H=F*L;E===!0&&(l.fromBufferAttribute(Q,F),I[tt+H+0]=l.x,I[tt+H+1]=l.y,I[tt+H+2]=l.z,I[tt+H+3]=0),U===!0&&(l.fromBufferAttribute(it,F),I[tt+H+4]=l.x,I[tt+H+5]=l.y,I[tt+H+6]=l.z,I[tt+H+7]=0),S===!0&&(l.fromBufferAttribute(ot,F),I[tt+H+8]=l.x,I[tt+H+9]=l.y,I[tt+H+10]=l.z,I[tt+H+11]=ot.itemSize===4?l.w:1)}}g={count:y,texture:A,size:new pe(V,z)},s.set(h,g),h.addEventListener("dispose",dt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const U=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function AT(r,t,i,s,l){let c=new WeakMap;function d(p){const _=l.render.frame,y=p.geometry,g=t.get(p,y);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:h}}const RT={[Mv]:"LINEAR_TONE_MAPPING",[bv]:"REINHARD_TONE_MAPPING",[Ev]:"CINEON_TONE_MAPPING",[Tv]:"ACES_FILMIC_TONE_MAPPING",[Rv]:"AGX_TONE_MAPPING",[Cv]:"NEUTRAL_TONE_MAPPING",[Av]:"CUSTOM_TONE_MAPPING"};function CT(r,t,i,s,l){const c=new Xi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Xi(t,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),h=new Si;h.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ci([0,2,0,0,2,0],2));const m=new gb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Zi(h,m),_=new pp(-1,1,1,-1,0,1);let y=null,g=null,M=!1,E,U=null,S=[],v=!1;this.setSize=function(w,N){c.setSize(w,N),d.setSize(w,N);for(let O=0;O<S.length;O++){const V=S[O];V.setSize&&V.setSize(w,N)}},this.setEffects=function(w){S=w,v=S.length>0&&S[0].isRenderPass===!0;const N=c.width,O=c.height;for(let V=0;V<S.length;V++){const z=S[V];z.setSize&&z.setSize(N,O)}},this.begin=function(w,N){if(M||w.toneMapping===ji&&S.length===0)return!1;if(U=N,N!==null){const O=N.width,V=N.height;(c.width!==O||c.height!==V)&&this.setSize(O,V)}return v===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return v},this.end=function(w,N){w.toneMapping=E,M=!0;let O=c,V=d;for(let z=0;z<S.length;z++){const I=S[z];if(I.enabled!==!1&&(I.render(w,V,O,N),I.needsSwap!==!1)){const A=O;O=V,V=A}}if(y!==w.outputColorSpace||g!==w.toneMapping){y=w.outputColorSpace,g=w.toneMapping,m.defines={},Ne.getTransfer(y)===ke&&(m.defines.SRGB_TRANSFER="");const z=RT[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(U),w.render(p,_),U=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Jv=new Hn,Zh=new il(1,1),$v=new Iv,tx=new WM,ex=new Xv,j_=[],X_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=j_[l];if(c===void 0&&(c=new Float32Array(l),j_[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(c,h)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function uu(r,t){let i=X_[t];i===void 0&&(i=new Int32Array(t),X_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function wT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function NT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;Y_.set(s),r.uniformMatrix2fv(this.addr,!1,Y_),Sn(i,s)}}function OT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;q_.set(s),r.uniformMatrix3fv(this.addr,!1,q_),Sn(i,s)}}function PT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;W_.set(s),r.uniformMatrix4fv(this.addr,!1,W_),Sn(i,s)}}function FT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function IT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function HT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function GT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function VT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function kT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function jT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Zh.compareFunction=i.isReversedDepthBuffer()?cp:lp,c=Zh):c=Jv,i.setTexture2D(t||c,l)}function XT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||tx,l)}function WT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ex,l)}function qT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||$v,l)}function YT(r){switch(r){case 5126:return wT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return FT;case 35667:case 35671:return BT;case 35668:case 35672:return zT;case 35669:case 35673:return IT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function ZT(r,t){r.uniform1fv(this.addr,t)}function KT(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function QT(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function JT(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function $T(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function tA(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function eA(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function nA(r,t){r.uniform1iv(this.addr,t)}function iA(r,t){r.uniform2iv(this.addr,t)}function aA(r,t){r.uniform3iv(this.addr,t)}function sA(r,t){r.uniform4iv(this.addr,t)}function rA(r,t){r.uniform1uiv(this.addr,t)}function oA(r,t){r.uniform2uiv(this.addr,t)}function lA(r,t){r.uniform3uiv(this.addr,t)}function cA(r,t){r.uniform4uiv(this.addr,t)}function uA(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Zh:d=Jv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function fA(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||tx,c[d])}function dA(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||ex,c[d])}function hA(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||$v,c[d])}function pA(r){switch(r){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return hA}}class mA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class gA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class _A{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function Z_(r,t){r.seq.push(t),r.map[t.id]=t}function vA(r,t,i){const s=r.name,l=s.length;for($d.lastIndex=0;;){const c=$d.exec(s),d=$d.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Z_(i,p===void 0?new mA(h,r,t):new gA(h,r,t));break}else{let y=i.map[h];y===void 0&&(y=new _A(h),Z_(i,y)),i=y}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);vA(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function K_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const xA=37297;let yA=0;function SA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Q_=new xe;function MA(r){Ne._getMatrix(Q_,Ne.workingColorSpace,r);const t=`mat3( ${Q_.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(r)){case tu:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function J_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+SA(r.getShaderSource(t),h)}else return c}function bA(r,t){const i=MA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const EA={[Mv]:"Linear",[bv]:"Reinhard",[Ev]:"Cineon",[Tv]:"ACESFilmic",[Rv]:"AgX",[Cv]:"Neutral",[Av]:"Custom"};function TA(r,t){const i=EA[t];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new J;function AA(){Ne.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),t=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function CA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function wA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function Jo(r){return r!==""}function $_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(r){return r.replace(DA,LA)}const UA=new Map;function LA(r,t){let i=ye[t];if(i===void 0){const s=UA.get(t);if(s!==void 0)i=ye[s],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Kh(i)}const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(r){return r.replace(NA,OA)}function OA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function nv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const PA={[Wc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function FA(r){return PA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BA={[Hs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function zA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":BA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const IA={[jr]:"ENVMAP_MODE_REFRACTION"};function HA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":IA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[ep]:"ENVMAP_BLENDING_MULTIPLY",[EM]:"ENVMAP_BLENDING_MIX",[TM]:"ENVMAP_BLENDING_ADD"};function VA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":GA[r.combine]||"ENVMAP_BLENDING_NONE"}function kA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function jA(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=FA(i),p=zA(i),_=HA(i),y=VA(i),g=kA(i),M=RA(i),E=CA(c),U=l.createProgram();let S,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),v.length>0&&(v+=`
`)):(S=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),v=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?ye.tonemapping_pars_fragment:"",i.toneMapping!==ji?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,bA("linearToOutputTexel",i.outputColorSpace),AA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),d=Kh(d),d=$_(d,i),d=tv(d,i),h=Kh(h),h=$_(h,i),h=tv(h,i),d=ev(d),h=ev(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=w+S+d,O=w+v+h,V=K_(l,l.VERTEX_SHADER,N),z=K_(l,l.FRAGMENT_SHADER,O);l.attachShader(U,V),l.attachShader(U,z),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function I(k){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(U)||"",it=l.getShaderInfoLog(V)||"",ot=l.getShaderInfoLog(z)||"",tt=Q.trim(),F=it.trim(),H=ot.trim();let ut=!0,gt=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,V,z);else{const bt=J_(l,V,"vertex"),B=J_(l,z,"fragment");Le("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+tt+`
`+bt+`
`+B)}else tt!==""?ce("WebGLProgram: Program Info Log:",tt):(F===""||H==="")&&(gt=!1);gt&&(k.diagnostics={runnable:ut,programLog:tt,vertexShader:{log:F,prefix:S},fragmentShader:{log:H,prefix:v}})}l.deleteShader(V),l.deleteShader(z),A=new Jc(l,U),L=wA(l,U)}let A;this.getUniforms=function(){return A===void 0&&I(this),A};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let dt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return dt===!1&&(dt=l.getProgramParameter(U,xA)),dt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=V,this.fragmentShader=z,this}let XA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new qA(t),i.set(t,s)),s}}class qA{constructor(t){this.id=XA++,this.code=t,this.usedTimes=0}}function YA(r,t,i,s,l,c){const d=new fp,h=new WA,m=new Set,p=[],_=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return m.add(A),A===0?"uv":`uv${A}`}function U(A,L,dt,k,Q){const it=k.fog,ot=Q.geometry,tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,H=t.get(A.envMap||tt,F),ut=H&&H.mapping===su?H.image.height:null,gt=M[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&ce("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const bt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,B=bt!==void 0?bt.length:0;let Z=0;ot.morphAttributes.position!==void 0&&(Z=1),ot.morphAttributes.normal!==void 0&&(Z=2),ot.morphAttributes.color!==void 0&&(Z=3);let xt,Et,It,at;if(gt){const Ue=Gi[gt];xt=Ue.vertexShader,Et=Ue.fragmentShader}else xt=A.vertexShader,Et=A.fragmentShader,h.update(A),It=h.getVertexShaderID(A),at=h.getFragmentShaderID(A);const yt=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),ft=Q.isInstancedMesh===!0,Dt=Q.isBatchedMesh===!0,Nt=!!A.map,ue=!!A.matcap,$t=!!H,ne=!!A.aoMap,re=!!A.lightMap,ie=!!A.bumpMap,Ie=!!A.normalMap,j=!!A.displacementMap,Ye=!!A.emissiveMap,Me=!!A.metalnessMap,De=!!A.roughnessMap,Kt=A.anisotropy>0,P=A.clearcoat>0,T=A.dispersion>0,Y=A.iridescence>0,_t=A.sheen>0,Mt=A.transmission>0,pt=Kt&&!!A.anisotropyMap,Yt=P&&!!A.clearcoatMap,Ot=P&&!!A.clearcoatNormalMap,te=P&&!!A.clearcoatRoughnessMap,se=Y&&!!A.iridescenceMap,Ct=Y&&!!A.iridescenceThicknessMap,At=_t&&!!A.sheenColorMap,Ht=_t&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Gt=!!A.specularColorMap,ge=!!A.specularIntensityMap,q=Mt&&!!A.transmissionMap,Lt=Mt&&!!A.thicknessMap,Ut=!!A.gradientMap,Vt=!!A.alphaMap,Rt=A.alphaTest>0,ht=!!A.alphaHash,jt=!!A.extensions;let le=ji;A.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(le=r.toneMapping);const He={shaderID:gt,shaderType:A.type,shaderName:A.name,vertexShader:xt,fragmentShader:Et,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:at,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&Q._colorsTexture!==null,instancing:ft,instancingColor:ft&&Q.instanceColor!==null,instancingMorph:ft&&Q.morphTexture!==null,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Wr,alphaToCoverage:!!A.alphaToCoverage,map:Nt,matcap:ue,envMap:$t,envMapMode:$t&&H.mapping,envMapCubeUVHeight:ut,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:Ie,displacementMap:j,emissiveMap:Ye,normalMapObjectSpace:Ie&&A.normalMapType===CM,normalMapTangentSpace:Ie&&A.normalMapType===Bv,metalnessMap:Me,roughnessMap:De,anisotropy:Kt,anisotropyMap:pt,clearcoat:P,clearcoatMap:Yt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:te,dispersion:T,iridescence:Y,iridescenceMap:se,iridescenceThicknessMap:Ct,sheen:_t,sheenColorMap:At,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Gt,specularIntensityMap:ge,transmission:Mt,transmissionMap:q,thicknessMap:Lt,gradientMap:Ut,opaque:A.transparent===!1&&A.blending===Gr&&A.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Rt,alphaHash:ht,combine:A.combine,mapUv:Nt&&E(A.map.channel),aoMapUv:ne&&E(A.aoMap.channel),lightMapUv:re&&E(A.lightMap.channel),bumpMapUv:ie&&E(A.bumpMap.channel),normalMapUv:Ie&&E(A.normalMap.channel),displacementMapUv:j&&E(A.displacementMap.channel),emissiveMapUv:Ye&&E(A.emissiveMap.channel),metalnessMapUv:Me&&E(A.metalnessMap.channel),roughnessMapUv:De&&E(A.roughnessMap.channel),anisotropyMapUv:pt&&E(A.anisotropyMap.channel),clearcoatMapUv:Yt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:At&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&E(A.sheenRoughnessMap.channel),specularMapUv:zt&&E(A.specularMap.channel),specularColorMapUv:Gt&&E(A.specularColorMap.channel),specularIntensityMapUv:ge&&E(A.specularIntensityMap.channel),transmissionMapUv:q&&E(A.transmissionMap.channel),thicknessMapUv:Lt&&E(A.thicknessMap.channel),alphaMapUv:Vt&&E(A.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Ie||Kt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&(Nt||Vt),fog:!!it,useFog:A.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ot.attributes.normal===void 0&&Ie===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Tt,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&dt.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Nt&&A.map.isVideoTexture===!0&&Ne.getTransfer(A.map.colorSpace)===ke,decodeVideoTextureEmissive:Ye&&A.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(A.emissiveMap.colorSpace)===ke,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sa,flipSided:A.side===Zn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:jt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&A.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function S(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const dt in A.defines)L.push(dt),L.push(A.defines[dt]);return A.isRawShaderMaterial===!1&&(v(L,A),w(L,A),L.push(r.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function v(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function w(A,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),A.push(d.mask)}function N(A){const L=M[A.type];let dt;if(L){const k=Gi[L];dt=hb.clone(k.uniforms)}else dt=A.uniforms;return dt}function O(A,L){let dt=_.get(L);return dt!==void 0?++dt.usedTimes:(dt=new jA(r,L,A,l),p.push(dt),_.set(L,dt)),dt}function V(A){if(--A.usedTimes===0){const L=p.indexOf(A);p[L]=p[p.length-1],p.pop(),_.delete(A.cacheKey),A.destroy()}}function z(A){h.remove(A)}function I(){h.dispose()}return{getParameters:U,getProgramCacheKey:S,getUniforms:N,acquireProgram:O,releaseProgram:V,releaseShaderCache:z,programs:p,dispose:I}}function ZA(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function KA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function iv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function av(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,U,S,v){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:M,material:E,materialVariant:d(g),groupOrder:U,renderOrder:g.renderOrder,z:S,group:v},r[t]=w):(w.id=g.id,w.object=g,w.geometry=M,w.material=E,w.materialVariant=d(g),w.groupOrder=U,w.renderOrder=g.renderOrder,w.z=S,w.group=v),t++,w}function m(g,M,E,U,S,v){const w=h(g,M,E,U,S,v);E.transmission>0?s.push(w):E.transparent===!0?l.push(w):i.push(w)}function p(g,M,E,U,S,v){const w=h(g,M,E,U,S,v);E.transmission>0?s.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,M){i.length>1&&i.sort(g||KA),s.length>1&&s.sort(M||iv),l.length>1&&l.sort(M||iv)}function y(){for(let g=t,M=r.length;g<M;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:y,sort:_}}function QA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new av,r.set(s,[d])):l>=c.length?(d=new av,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function JA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new we};break;case"SpotLight":i={position:new J,direction:new J,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function $A(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let t2=0;function e2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function n2(r){const t=new JA,i=$A(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new en,d=new en;function h(p){let _=0,y=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,E=0,U=0,S=0,v=0,w=0,N=0,O=0,V=0,z=0,I=0;p.sort(e2);for(let L=0,dt=p.length;L<dt;L++){const k=p[L],Q=k.color,it=k.intensity,ot=k.distance;let tt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Xr?tt=k.shadow.map.texture:tt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=Q.r*it,y+=Q.g*it,g+=Q.b*it;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],it);I++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ut=i.get(k);ut.shadowIntensity=H.intensity,ut.shadowBias=H.bias,ut.shadowNormalBias=H.normalBias,ut.shadowRadius=H.radius,ut.shadowMapSize=H.mapSize,s.directionalShadow[M]=ut,s.directionalShadowMap[M]=tt,s.directionalShadowMatrix[M]=k.shadow.matrix,w++}s.directional[M]=F,M++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(Q).multiplyScalar(it),F.distance=ot,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[U]=F;const H=k.shadow;if(k.map&&(s.spotLightMap[V]=k.map,V++,H.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[U]=H.matrix,k.castShadow){const ut=i.get(k);ut.shadowIntensity=H.intensity,ut.shadowBias=H.bias,ut.shadowNormalBias=H.normalBias,ut.shadowRadius=H.radius,ut.shadowMapSize=H.mapSize,s.spotShadow[U]=ut,s.spotShadowMap[U]=tt,O++}U++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(Q).multiplyScalar(it),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=F,S++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const H=k.shadow,ut=i.get(k);ut.shadowIntensity=H.intensity,ut.shadowBias=H.bias,ut.shadowNormalBias=H.normalBias,ut.shadowRadius=H.radius,ut.shadowMapSize=H.mapSize,ut.shadowCameraNear=H.camera.near,ut.shadowCameraFar=H.camera.far,s.pointShadow[E]=ut,s.pointShadowMap[E]=tt,s.pointShadowMatrix[E]=k.shadow.matrix,N++}s.point[E]=F,E++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(it),F.groundColor.copy(k.groundColor).multiplyScalar(it),s.hemi[v]=F,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==M||A.pointLength!==E||A.spotLength!==U||A.rectAreaLength!==S||A.hemiLength!==v||A.numDirectionalShadows!==w||A.numPointShadows!==N||A.numSpotShadows!==O||A.numSpotMaps!==V||A.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=U,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=O+V-z,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=I,A.directionalLength=M,A.pointLength=E,A.spotLength=U,A.rectAreaLength=S,A.hemiLength=v,A.numDirectionalShadows=w,A.numPointShadows=N,A.numSpotShadows=O,A.numSpotMaps=V,A.numLightProbes=I,s.version=t2++)}function m(p,_){let y=0,g=0,M=0,E=0,U=0;const S=_.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const N=p[v];if(N.isDirectionalLight){const O=s.directional[y];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),y++}else if(N.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const O=s.rectArea[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),d.identity(),c.copy(N.matrixWorld),c.premultiply(S),d.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const O=s.point[g];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),g++}else if(N.isHemisphereLight){const O=s.hemi[U];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(S),U++}}}return{setup:h,setupView:m,state:s}}function sv(r){const t=new n2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function i2(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new sv(r),t.set(l,[h])):c>=d.length?(h=new sv(r),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const a2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,r2=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],o2=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],rv=new en,Ko=new J,th=new J;function l2(r,t,i){let s=new dp;const l=new pe,c=new pe,d=new sn,h=new vb,m=new xb,p={},_=i.maxTextureSize,y={[cs]:Zn,[Zn]:cs,[Sa]:Sa},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:a2,fragmentShader:s2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new Si;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Zi(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let v=this.type;this.render=function(z,I,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;this.type===sM&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wc);const L=r.getRenderTarget(),dt=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ba),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const it=v!==this.type;it&&I.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(tt=>tt.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,tt=z.length;ot<tt;ot++){const F=z[ot],H=F.shadow;if(H===void 0){ce("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ut=H.getFrameExtents();l.multiply(ut),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ut.x),l.x=c.x*ut.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ut.y),l.y=c.y*ut.y,H.mapSize.y=c.y));const gt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=gt,H.map===null||it===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(F.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xi(l.x,l.y,{format:Xr,type:Ta,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new il(l.x,l.y,Vi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Aa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else F.isPointLight?(H.map=new Qv(l.x),H.map.depthTexture=new fb(l.x,qi)):(H.map=new Xi(l.x,l.y),H.map.depthTexture=new il(l.x,l.y,qi)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Aa,this.type===Wc?(H.map.depthTexture.compareFunction=gt?cp:lp,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn);H.camera.updateProjectionMatrix()}const bt=H.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<bt;B++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,B),r.clear();else{B===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(B);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),Q.viewport(d)}if(F.isPointLight){const Z=H.camera,xt=H.matrix,Et=F.distance||Z.far;Et!==Z.far&&(Z.far=Et,Z.updateProjectionMatrix()),Ko.setFromMatrixPosition(F.matrixWorld),Z.position.copy(Ko),th.copy(Z.position),th.add(r2[B]),Z.up.copy(o2[B]),Z.lookAt(th),Z.updateMatrixWorld(),xt.makeTranslation(-Ko.x,-Ko.y,-Ko.z),rv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(rv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(F);s=H.getFrustum(),O(I,A,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&w(H,A),H.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(L,dt,k)};function w(z,I){const A=t.update(U);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Xi(l.x,l.y,{format:Xr,type:Ta})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(I,null,A,g,U,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(I,null,A,M,U,null)}function N(z,I,A,L){let dt=null;const k=A.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)dt=k;else if(dt=A.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=dt.uuid,it=I.uuid;let ot=p[Q];ot===void 0&&(ot={},p[Q]=ot);let tt=ot[it];tt===void 0&&(tt=dt.clone(),ot[it]=tt,I.addEventListener("dispose",V)),dt=tt}if(dt.visible=I.visible,dt.wireframe=I.wireframe,L===Qo?dt.side=I.shadowSide!==null?I.shadowSide:I.side:dt.side=I.shadowSide!==null?I.shadowSide:y[I.side],dt.alphaMap=I.alphaMap,dt.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,dt.map=I.map,dt.clipShadows=I.clipShadows,dt.clippingPlanes=I.clippingPlanes,dt.clipIntersection=I.clipIntersection,dt.displacementMap=I.displacementMap,dt.displacementScale=I.displacementScale,dt.displacementBias=I.displacementBias,dt.wireframeLinewidth=I.wireframeLinewidth,dt.linewidth=I.linewidth,A.isPointLight===!0&&dt.isMeshDistanceMaterial===!0){const Q=r.properties.get(dt);Q.light=A}return dt}function O(z,I,A,L,dt){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&dt===Qo)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,z.matrixWorld);const it=t.update(z),ot=z.material;if(Array.isArray(ot)){const tt=it.groups;for(let F=0,H=tt.length;F<H;F++){const ut=tt[F],gt=ot[ut.materialIndex];if(gt&&gt.visible){const bt=N(z,gt,L,dt);z.onBeforeShadow(r,z,I,A,it,bt,ut),r.renderBufferDirect(A,null,it,bt,z,ut),z.onAfterShadow(r,z,I,A,it,bt,ut)}}}else if(ot.visible){const tt=N(z,ot,L,dt);z.onBeforeShadow(r,z,I,A,it,tt,null),r.renderBufferDirect(A,null,it,tt,z,null),z.onAfterShadow(r,z,I,A,it,tt,null)}}const Q=z.children;for(let it=0,ot=Q.length;it<ot;it++)O(Q[it],I,A,L,dt)}function V(z){z.target.removeEventListener("dispose",V);for(const A in p){const L=p[A],dt=z.target.uuid;dt in L&&(L[dt].dispose(),delete L[dt])}}}function c2(r,t){function i(){let q=!1;const Lt=new sn;let Ut=null;const Vt=new sn(0,0,0,0);return{setMask:function(Rt){Ut!==Rt&&!q&&(r.colorMask(Rt,Rt,Rt,Rt),Ut=Rt)},setLocked:function(Rt){q=Rt},setClear:function(Rt,ht,jt,le,He){He===!0&&(Rt*=le,ht*=le,jt*=le),Lt.set(Rt,ht,jt,le),Vt.equals(Lt)===!1&&(r.clearColor(Rt,ht,jt,le),Vt.copy(Lt))},reset:function(){q=!1,Ut=null,Vt.set(-1,0,0,0)}}}function s(){let q=!1,Lt=!1,Ut=null,Vt=null,Rt=null;return{setReversed:function(ht){if(Lt!==ht){const jt=t.get("EXT_clip_control");ht?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Lt=ht;const le=Rt;Rt=null,this.setClear(le)}},getReversed:function(){return Lt},setTest:function(ht){ht?yt(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(ht){Ut!==ht&&!q&&(r.depthMask(ht),Ut=ht)},setFunc:function(ht){if(Lt&&(ht=zM[ht]),Vt!==ht){switch(ht){case rh:r.depthFunc(r.NEVER);break;case oh:r.depthFunc(r.ALWAYS);break;case lh:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case ch:r.depthFunc(r.EQUAL);break;case uh:r.depthFunc(r.GEQUAL);break;case fh:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Vt=ht}},setLocked:function(ht){q=ht},setClear:function(ht){Rt!==ht&&(Rt=ht,Lt&&(ht=1-ht),r.clearDepth(ht))},reset:function(){q=!1,Ut=null,Vt=null,Rt=null,Lt=!1}}}function l(){let q=!1,Lt=null,Ut=null,Vt=null,Rt=null,ht=null,jt=null,le=null,He=null;return{setTest:function(Ue){q||(Ue?yt(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Ue){Lt!==Ue&&!q&&(r.stencilMask(Ue),Lt=Ue)},setFunc:function(Ue,On,Mi){(Ut!==Ue||Vt!==On||Rt!==Mi)&&(r.stencilFunc(Ue,On,Mi),Ut=Ue,Vt=On,Rt=Mi)},setOp:function(Ue,On,Mi){(ht!==Ue||jt!==On||le!==Mi)&&(r.stencilOp(Ue,On,Mi),ht=Ue,jt=On,le=Mi)},setLocked:function(Ue){q=Ue},setClear:function(Ue){He!==Ue&&(r.clearStencil(Ue),He=Ue)},reset:function(){q=!1,Lt=null,Ut=null,Vt=null,Rt=null,ht=null,jt=null,le=null,He=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},y={},g=new WeakMap,M=[],E=null,U=!1,S=null,v=null,w=null,N=null,O=null,V=null,z=null,I=new we(0,0,0),A=0,L=!1,dt=null,k=null,Q=null,it=null,ot=null;const tt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const ut=r.getParameter(r.VERSION);ut.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ut)[1]),F=H>=1):ut.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),F=H>=2);let gt=null,bt={};const B=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),xt=new sn().fromArray(B),Et=new sn().fromArray(Z);function It(q,Lt,Ut,Vt){const Rt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(q,ht),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<Ut;jt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,Rt):r.texImage2D(Lt+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Rt);return ht}const at={};at[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),d.setFunc(kr),ie(!1),Ie(s_),yt(r.CULL_FACE),ne(ba);function yt(q){_[q]!==!0&&(r.enable(q),_[q]=!0)}function Tt(q){_[q]!==!1&&(r.disable(q),_[q]=!1)}function ft(q,Lt){return y[q]!==Lt?(r.bindFramebuffer(q,Lt),y[q]=Lt,q===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=Lt),q===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Dt(q,Lt){let Ut=M,Vt=!1;if(q){Ut=g.get(Lt),Ut===void 0&&(Ut=[],g.set(Lt,Ut));const Rt=q.textures;if(Ut.length!==Rt.length||Ut[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,jt=Rt.length;ht<jt;ht++)Ut[ht]=r.COLOR_ATTACHMENT0+ht;Ut.length=Rt.length,Vt=!0}}else Ut[0]!==r.BACK&&(Ut[0]=r.BACK,Vt=!0);Vt&&r.drawBuffers(Ut)}function Nt(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const ue={[Fs]:r.FUNC_ADD,[oM]:r.FUNC_SUBTRACT,[lM]:r.FUNC_REVERSE_SUBTRACT};ue[cM]=r.MIN,ue[uM]=r.MAX;const $t={[fM]:r.ZERO,[dM]:r.ONE,[hM]:r.SRC_COLOR,[ah]:r.SRC_ALPHA,[xM]:r.SRC_ALPHA_SATURATE,[_M]:r.DST_COLOR,[mM]:r.DST_ALPHA,[pM]:r.ONE_MINUS_SRC_COLOR,[sh]:r.ONE_MINUS_SRC_ALPHA,[vM]:r.ONE_MINUS_DST_COLOR,[gM]:r.ONE_MINUS_DST_ALPHA,[yM]:r.CONSTANT_COLOR,[SM]:r.ONE_MINUS_CONSTANT_COLOR,[MM]:r.CONSTANT_ALPHA,[bM]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(q,Lt,Ut,Vt,Rt,ht,jt,le,He,Ue){if(q===ba){U===!0&&(Tt(r.BLEND),U=!1);return}if(U===!1&&(yt(r.BLEND),U=!0),q!==rM){if(q!==S||Ue!==L){if((v!==Fs||O!==Fs)&&(r.blendEquation(r.FUNC_ADD),v=Fs,O=Fs),Ue)switch(q){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r_:r.blendFunc(r.ONE,r.ONE);break;case o_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case l_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",q);break}else switch(q){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case o_:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",q);break}w=null,N=null,V=null,z=null,I.set(0,0,0),A=0,S=q,L=Ue}return}Rt=Rt||Lt,ht=ht||Ut,jt=jt||Vt,(Lt!==v||Rt!==O)&&(r.blendEquationSeparate(ue[Lt],ue[Rt]),v=Lt,O=Rt),(Ut!==w||Vt!==N||ht!==V||jt!==z)&&(r.blendFuncSeparate($t[Ut],$t[Vt],$t[ht],$t[jt]),w=Ut,N=Vt,V=ht,z=jt),(le.equals(I)===!1||He!==A)&&(r.blendColor(le.r,le.g,le.b,He),I.copy(le),A=He),S=q,L=!1}function re(q,Lt){q.side===Sa?Tt(r.CULL_FACE):yt(r.CULL_FACE);let Ut=q.side===Zn;Lt&&(Ut=!Ut),ie(Ut),q.blending===Gr&&q.transparent===!1?ne(ba):ne(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const Vt=q.stencilWrite;h.setTest(Vt),Vt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ye(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(q){dt!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),dt=q)}function Ie(q){q!==iM?(yt(r.CULL_FACE),q!==k&&(q===s_?r.cullFace(r.BACK):q===aM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),k=q}function j(q){q!==Q&&(F&&r.lineWidth(q),Q=q)}function Ye(q,Lt,Ut){q?(yt(r.POLYGON_OFFSET_FILL),(it!==Lt||ot!==Ut)&&(it=Lt,ot=Ut,d.getReversed()&&(Lt=-Lt),r.polygonOffset(Lt,Ut))):Tt(r.POLYGON_OFFSET_FILL)}function Me(q){q?yt(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function De(q){q===void 0&&(q=r.TEXTURE0+tt-1),gt!==q&&(r.activeTexture(q),gt=q)}function Kt(q,Lt,Ut){Ut===void 0&&(gt===null?Ut=r.TEXTURE0+tt-1:Ut=gt);let Vt=bt[Ut];Vt===void 0&&(Vt={type:void 0,texture:void 0},bt[Ut]=Vt),(Vt.type!==q||Vt.texture!==Lt)&&(gt!==Ut&&(r.activeTexture(Ut),gt=Ut),r.bindTexture(q,Lt||at[q]),Vt.type=q,Vt.texture=Lt)}function P(){const q=bt[gt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function _t(){try{r.texSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function Ot(){try{r.texStorage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function te(){try{r.texStorage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function se(){try{r.texImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Ct(){try{r.texImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function At(q){xt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),xt.copy(q))}function Ht(q){Et.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Et.copy(q))}function zt(q,Lt){let Ut=p.get(Lt);Ut===void 0&&(Ut=new WeakMap,p.set(Lt,Ut));let Vt=Ut.get(q);Vt===void 0&&(Vt=r.getUniformBlockIndex(Lt,q.name),Ut.set(q,Vt))}function Gt(q,Lt){const Vt=p.get(Lt).get(q);m.get(Lt)!==Vt&&(r.uniformBlockBinding(Lt,Vt,q.__bindingPointIndex),m.set(Lt,Vt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},gt=null,bt={},y={},g=new WeakMap,M=[],E=null,U=!1,S=null,v=null,w=null,N=null,O=null,V=null,z=null,I=new we(0,0,0),A=0,L=!1,dt=null,k=null,Q=null,it=null,ot=null,xt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:yt,disable:Tt,bindFramebuffer:ft,drawBuffers:Dt,useProgram:Nt,setBlending:ne,setMaterial:re,setFlipSided:ie,setCullFace:Ie,setLineWidth:j,setPolygonOffset:Ye,setScissorTest:Me,activeTexture:De,bindTexture:Kt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:se,texImage3D:Ct,updateUBOMapping:zt,uniformBlockBinding:Gt,texStorage2D:Ot,texStorage3D:te,texSubImage2D:_t,texSubImage3D:Mt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Yt,scissor:At,viewport:Ht,reset:ge}}function u2(r,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,_=new WeakMap;let y;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return M?new OffscreenCanvas(P,T):eu("canvas")}function U(P,T,Y){let _t=1;const Mt=Kt(P);if((Mt.width>Y||Mt.height>Y)&&(_t=Y/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pt=Math.floor(_t*Mt.width),Yt=Math.floor(_t*Mt.height);y===void 0&&(y=E(pt,Yt));const Ot=T?E(pt,Yt):y;return Ot.width=pt,Ot.height=Yt,Ot.getContext("2d").drawImage(P,0,0,pt,Yt),ce("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+Yt+")."),Ot}else return"data"in P&&ce("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,T,Y,_t,Mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt=T;if(T===r.RED&&(Y===r.FLOAT&&(pt=r.R32F),Y===r.HALF_FLOAT&&(pt=r.R16F),Y===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(pt=r.R8UI),Y===r.UNSIGNED_SHORT&&(pt=r.R16UI),Y===r.UNSIGNED_INT&&(pt=r.R32UI),Y===r.BYTE&&(pt=r.R8I),Y===r.SHORT&&(pt=r.R16I),Y===r.INT&&(pt=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(pt=r.RG32F),Y===r.HALF_FLOAT&&(pt=r.RG16F),Y===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(pt=r.RG8UI),Y===r.UNSIGNED_SHORT&&(pt=r.RG16UI),Y===r.UNSIGNED_INT&&(pt=r.RG32UI),Y===r.BYTE&&(pt=r.RG8I),Y===r.SHORT&&(pt=r.RG16I),Y===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),Y===r.UNSIGNED_INT&&(pt=r.RGB32UI),Y===r.BYTE&&(pt=r.RGB8I),Y===r.SHORT&&(pt=r.RGB16I),Y===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),Y===r.UNSIGNED_INT&&(pt=r.RGBA32UI),Y===r.BYTE&&(pt=r.RGBA8I),Y===r.SHORT&&(pt=r.RGBA16I),Y===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),T===r.RGBA){const Yt=Mt?tu:Ne.getTransfer(_t);Y===r.FLOAT&&(pt=r.RGBA32F),Y===r.HALF_FLOAT&&(pt=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(pt=Yt===ke?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function O(P,T){let Y;return P?T===null||T===qi||T===el?Y=r.DEPTH24_STENCIL8:T===Vi?Y=r.DEPTH32F_STENCIL8:T===tl&&(Y=r.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===el?Y=r.DEPTH_COMPONENT24:T===Vi?Y=r.DEPTH_COMPONENT32F:T===tl&&(Y=r.DEPTH_COMPONENT16),Y}function V(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Cn&&P.minFilter!==Nn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function z(P){const T=P.target;T.removeEventListener("dispose",z),A(T),T.isVideoTexture&&_.delete(T)}function I(P){const T=P.target;T.removeEventListener("dispose",I),dt(T)}function A(P){const T=s.get(P);if(T.__webglInit===void 0)return;const Y=P.source,_t=g.get(Y);if(_t){const Mt=_t[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&L(P),Object.keys(_t).length===0&&g.delete(Y)}s.remove(P)}function L(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const Y=P.source,_t=g.get(Y);delete _t[T.__cacheKey],d.memory.textures--}function dt(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let Mt=0;Mt<T.__webglFramebuffer[_t].length;Mt++)r.deleteFramebuffer(T.__webglFramebuffer[_t][Mt]);else r.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)r.deleteFramebuffer(T.__webglFramebuffer[_t]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=P.textures;for(let _t=0,Mt=Y.length;_t<Mt;_t++){const pt=s.get(Y[_t]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),d.memory.textures--),s.remove(Y[_t])}s.remove(P)}let k=0;function Q(){k=0}function it(){const P=k;return P>=l.maxTextures&&ce("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),k+=1,P}function ot(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function tt(P,T){const Y=s.get(P);if(P.isVideoTexture&&Me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const _t=P.image;if(_t===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Y,P,T);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function F(P,T){const Y=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){at(Y,P,T);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function H(P,T){const Y=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){at(Y,P,T);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function ut(P,T){const Y=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){yt(Y,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const gt={[hh]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[ph]:r.MIRRORED_REPEAT},bt={[Cn]:r.NEAREST,[AM]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[bd]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},B={[wM]:r.NEVER,[OM]:r.ALWAYS,[DM]:r.LESS,[lp]:r.LEQUAL,[UM]:r.EQUAL,[cp]:r.GEQUAL,[LM]:r.GREATER,[NM]:r.NOTEQUAL};function Z(P,T){if(T.type===Vi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Nn||T.magFilter===bd||T.magFilter===Sc||T.magFilter===zs||T.minFilter===Nn||T.minFilter===bd||T.minFilter===Sc||T.minFilter===zs)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,gt[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,gt[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,gt[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,bt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,B[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Cn||T.minFilter!==Sc&&T.minFilter!==zs||T.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function xt(P,T){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const _t=T.source;let Mt=g.get(_t);Mt===void 0&&(Mt={},g.set(_t,Mt));const pt=ot(T);if(pt!==P.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),Mt[pt].usedTimes++;const Yt=Mt[P.__cacheKey];Yt!==void 0&&(Mt[P.__cacheKey].usedTimes--,Yt.usedTimes===0&&L(T)),P.__cacheKey=pt,P.__webglTexture=Mt[pt].texture}return Y}function Et(P,T,Y){return Math.floor(Math.floor(P/Y)/T)}function It(P,T,Y,_t){const pt=P.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Y,_t,T.data);else{pt.sort((Ct,At)=>Ct.start-At.start);let Yt=0;for(let Ct=1;Ct<pt.length;Ct++){const At=pt[Yt],Ht=pt[Ct],zt=At.start+At.count,Gt=Et(Ht.start,T.width,4),ge=Et(At.start,T.width,4);Ht.start<=zt+1&&Gt===ge&&Et(Ht.start+Ht.count-1,T.width,4)===Gt?At.count=Math.max(At.count,Ht.start+Ht.count-At.start):(++Yt,pt[Yt]=Ht)}pt.length=Yt+1;const Ot=r.getParameter(r.UNPACK_ROW_LENGTH),te=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ct=0,At=pt.length;Ct<At;Ct++){const Ht=pt[Ct],zt=Math.floor(Ht.start/4),Gt=Math.ceil(Ht.count/4),ge=zt%T.width,q=Math.floor(zt/T.width),Lt=Gt,Ut=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,ge,q,Lt,Ut,Y,_t,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,te),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function at(P,T,Y){let _t=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=r.TEXTURE_3D);const Mt=xt(P,T),pt=T.source;i.bindTexture(_t,P.__webglTexture,r.TEXTURE0+Y);const Yt=s.get(pt);if(pt.version!==Yt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+Y);const Ot=Ne.getPrimaries(Ne.workingColorSpace),te=T.colorSpace===rs?null:Ne.getPrimaries(T.colorSpace),se=T.colorSpace===rs||Ot===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Ct=U(T.image,!1,l.maxTextureSize);Ct=De(T,Ct);const At=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type);let zt=N(T.internalFormat,At,Ht,T.colorSpace,T.isVideoTexture);Z(_t,T);let Gt;const ge=T.mipmaps,q=T.isVideoTexture!==!0,Lt=Yt.__version===void 0||Mt===!0,Ut=pt.dataReady,Vt=V(T,Ct);if(T.isDepthTexture)zt=O(T.format===Is,T.type),Lt&&(q?i.texStorage2D(r.TEXTURE_2D,1,zt,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,zt,Ct.width,Ct.height,0,At,Ht,null));else if(T.isDataTexture)if(ge.length>0){q&&Lt&&i.texStorage2D(r.TEXTURE_2D,Vt,zt,ge[0].width,ge[0].height);for(let Rt=0,ht=ge.length;Rt<ht;Rt++)Gt=ge[Rt],q?Ut&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Gt.width,Gt.height,At,Ht,Gt.data):i.texImage2D(r.TEXTURE_2D,Rt,zt,Gt.width,Gt.height,0,At,Ht,Gt.data);T.generateMipmaps=!1}else q?(Lt&&i.texStorage2D(r.TEXTURE_2D,Vt,zt,Ct.width,Ct.height),Ut&&It(T,Ct,At,Ht)):i.texImage2D(r.TEXTURE_2D,0,zt,Ct.width,Ct.height,0,At,Ht,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,zt,ge[0].width,ge[0].height,Ct.depth);for(let Rt=0,ht=ge.length;Rt<ht;Rt++)if(Gt=ge[Rt],T.format!==Ni)if(At!==null)if(q){if(Ut)if(T.layerUpdates.size>0){const jt=B_(Gt.width,Gt.height,T.format,T.type);for(const le of T.layerUpdates){const He=Gt.data.subarray(le*jt/Gt.data.BYTES_PER_ELEMENT,(le+1)*jt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,le,Gt.width,Gt.height,1,At,He)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Gt.width,Gt.height,Ct.depth,At,Gt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Rt,zt,Gt.width,Gt.height,Ct.depth,0,Gt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ut&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Gt.width,Gt.height,Ct.depth,At,Ht,Gt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Rt,zt,Gt.width,Gt.height,Ct.depth,0,At,Ht,Gt.data)}else{q&&Lt&&i.texStorage2D(r.TEXTURE_2D,Vt,zt,ge[0].width,ge[0].height);for(let Rt=0,ht=ge.length;Rt<ht;Rt++)Gt=ge[Rt],T.format!==Ni?At!==null?q?Ut&&i.compressedTexSubImage2D(r.TEXTURE_2D,Rt,0,0,Gt.width,Gt.height,At,Gt.data):i.compressedTexImage2D(r.TEXTURE_2D,Rt,zt,Gt.width,Gt.height,0,Gt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ut&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Gt.width,Gt.height,At,Ht,Gt.data):i.texImage2D(r.TEXTURE_2D,Rt,zt,Gt.width,Gt.height,0,At,Ht,Gt.data)}else if(T.isDataArrayTexture)if(q){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,zt,Ct.width,Ct.height,Ct.depth),Ut)if(T.layerUpdates.size>0){const Rt=B_(Ct.width,Ct.height,T.format,T.type);for(const ht of T.layerUpdates){const jt=Ct.data.subarray(ht*Rt/Ct.data.BYTES_PER_ELEMENT,(ht+1)*Rt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,Ct.width,Ct.height,1,At,Ht,jt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,At,Ht,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,Ct.width,Ct.height,Ct.depth,0,At,Ht,Ct.data);else if(T.isData3DTexture)q?(Lt&&i.texStorage3D(r.TEXTURE_3D,Vt,zt,Ct.width,Ct.height,Ct.depth),Ut&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,At,Ht,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,zt,Ct.width,Ct.height,Ct.depth,0,At,Ht,Ct.data);else if(T.isFramebufferTexture){if(Lt)if(q)i.texStorage2D(r.TEXTURE_2D,Vt,zt,Ct.width,Ct.height);else{let Rt=Ct.width,ht=Ct.height;for(let jt=0;jt<Vt;jt++)i.texImage2D(r.TEXTURE_2D,jt,zt,Rt,ht,0,At,Ht,null),Rt>>=1,ht>>=1}}else if(ge.length>0){if(q&&Lt){const Rt=Kt(ge[0]);i.texStorage2D(r.TEXTURE_2D,Vt,zt,Rt.width,Rt.height)}for(let Rt=0,ht=ge.length;Rt<ht;Rt++)Gt=ge[Rt],q?Ut&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,At,Ht,Gt):i.texImage2D(r.TEXTURE_2D,Rt,zt,At,Ht,Gt);T.generateMipmaps=!1}else if(q){if(Lt){const Rt=Kt(Ct);i.texStorage2D(r.TEXTURE_2D,Vt,zt,Rt.width,Rt.height)}Ut&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Ht,Ct)}else i.texImage2D(r.TEXTURE_2D,0,zt,At,Ht,Ct);S(T)&&v(_t),Yt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function yt(P,T,Y){if(T.image.length!==6)return;const _t=xt(P,T),Mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const pt=s.get(Mt);if(Mt.version!==pt.__version||_t===!0){i.activeTexture(r.TEXTURE0+Y);const Yt=Ne.getPrimaries(Ne.workingColorSpace),Ot=T.colorSpace===rs?null:Ne.getPrimaries(T.colorSpace),te=T.colorSpace===rs||Yt===Ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const se=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,At=[];for(let ht=0;ht<6;ht++)!se&&!Ct?At[ht]=U(T.image[ht],!0,l.maxCubemapSize):At[ht]=Ct?T.image[ht].image:T.image[ht],At[ht]=De(T,At[ht]);const Ht=At[0],zt=c.convert(T.format,T.colorSpace),Gt=c.convert(T.type),ge=N(T.internalFormat,zt,Gt,T.colorSpace),q=T.isVideoTexture!==!0,Lt=pt.__version===void 0||_t===!0,Ut=Mt.dataReady;let Vt=V(T,Ht);Z(r.TEXTURE_CUBE_MAP,T);let Rt;if(se){q&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,ge,Ht.width,Ht.height);for(let ht=0;ht<6;ht++){Rt=At[ht].mipmaps;for(let jt=0;jt<Rt.length;jt++){const le=Rt[jt];T.format!==Ni?zt!==null?q?Ut&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt,0,0,le.width,le.height,zt,le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt,ge,le.width,le.height,0,le.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt,0,0,le.width,le.height,zt,Gt,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt,ge,le.width,le.height,0,zt,Gt,le.data)}}}else{if(Rt=T.mipmaps,q&&Lt){Rt.length>0&&Vt++;const ht=Kt(At[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,ge,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Ct){q?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,At[ht].width,At[ht].height,zt,Gt,At[ht].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,At[ht].width,At[ht].height,0,zt,Gt,At[ht].data);for(let jt=0;jt<Rt.length;jt++){const He=Rt[jt].image[ht].image;q?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt+1,0,0,He.width,He.height,zt,Gt,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt+1,ge,He.width,He.height,0,zt,Gt,He.data)}}else{q?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,zt,Gt,At[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,zt,Gt,At[ht]);for(let jt=0;jt<Rt.length;jt++){const le=Rt[jt];q?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt+1,0,0,zt,Gt,le.image[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt+1,ge,zt,Gt,le.image[ht])}}}S(T)&&v(r.TEXTURE_CUBE_MAP),pt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Tt(P,T,Y,_t,Mt,pt){const Yt=c.convert(Y.format,Y.colorSpace),Ot=c.convert(Y.type),te=N(Y.internalFormat,Yt,Ot,Y.colorSpace),se=s.get(T),Ct=s.get(Y);if(Ct.__renderTarget=T,!se.__hasExternalTextures){const At=Math.max(1,T.width>>pt),Ht=Math.max(1,T.height>>pt);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,pt,te,At,Ht,T.depth,0,Yt,Ot,null):i.texImage2D(Mt,pt,te,At,Ht,0,Yt,Ot,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Ye(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,Mt,Ct.__webglTexture,0,j(T)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,Mt,Ct.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(P,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const _t=T.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,pt=O(T.stencilBuffer,Mt),Yt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ye(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),pt,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,P)}else{const _t=T.textures;for(let Mt=0;Mt<_t.length;Mt++){const pt=_t[Mt],Yt=c.convert(pt.format,pt.colorSpace),Ot=c.convert(pt.type),te=N(pt.internalFormat,Yt,Ot,pt.colorSpace);Ye(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),te,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),te,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,te,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(P,T,Y){const _t=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(T.depthTexture);if(Mt.__renderTarget=T,(!Mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_t){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),Z(r.TEXTURE_CUBE_MAP,T.depthTexture);const se=c.convert(T.depthTexture.format),Ct=c.convert(T.depthTexture.type);let At;T.depthTexture.format===Aa?At=r.DEPTH_COMPONENT24:T.depthTexture.format===Is&&(At=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,At,T.width,T.height,0,se,Ct,null)}}else tt(T.depthTexture,0);const pt=Mt.__webglTexture,Yt=j(T),Ot=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,te=T.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Aa)Ye(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Ot,pt,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Ot,pt,0);else if(T.depthTexture.format===Is)Ye(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Ot,pt,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Ot,pt,0);else throw new Error("Unknown depthTexture format")}function Nt(P){const T=s.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const _t=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=_t}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let _t=0;_t<6;_t++)Dt(T.__webglFramebuffer[_t],P,_t);else{const _t=P.texture.mipmaps;_t&&_t.length>0?Dt(T.__webglFramebuffer[0],P,0):Dt(T.__webglFramebuffer,P,0)}else if(Y){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=r.createRenderbuffer(),ft(T.__webglDepthbuffer[_t],P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,pt)}}else{const _t=P.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ft(T.__webglDepthbuffer,P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(P,T,Y){const _t=s.get(P);T!==void 0&&Tt(_t.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Nt(P)}function $t(P){const T=P.texture,Y=s.get(P),_t=s.get(T);P.addEventListener("dispose",I);const Mt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,Yt=Mt.length>1;if(Yt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=T.version,d.memory.textures++),pt){Y.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Ot]=[];for(let te=0;te<T.mipmaps.length;te++)Y.__webglFramebuffer[Ot][te]=r.createFramebuffer()}else Y.__webglFramebuffer[Ot]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ot=0;Ot<T.mipmaps.length;Ot++)Y.__webglFramebuffer[Ot]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Ot=0,te=Mt.length;Ot<te;Ot++){const se=s.get(Mt[Ot]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&Ye(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ot=0;Ot<Mt.length;Ot++){const te=Mt[Ot];Y.__webglColorRenderbuffer[Ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ot]);const se=c.convert(te.format,te.colorSpace),Ct=c.convert(te.type),At=N(te.internalFormat,se,Ct,te.colorSpace,P.isXRRenderTarget===!0),Ht=j(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,At,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(Y.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),Z(r.TEXTURE_CUBE_MAP,T);for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)Tt(Y.__webglFramebuffer[Ot][te],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,te);else Tt(Y.__webglFramebuffer[Ot],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);S(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ot=0,te=Mt.length;Ot<te;Ot++){const se=Mt[Ot],Ct=s.get(se);let At=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(At=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,Ct.__webglTexture),Z(At,se),Tt(Y.__webglFramebuffer,P,se,r.COLOR_ATTACHMENT0+Ot,At,0),S(se)&&v(At)}i.unbindTexture()}else{let Ot=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ot=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ot,_t.__webglTexture),Z(Ot,T),T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)Tt(Y.__webglFramebuffer[te],P,T,r.COLOR_ATTACHMENT0,Ot,te);else Tt(Y.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ot,0);S(T)&&v(Ot),i.unbindTexture()}P.depthBuffer&&Nt(P)}function ne(P){const T=P.textures;for(let Y=0,_t=T.length;Y<_t;Y++){const Mt=T[Y];if(S(Mt)){const pt=w(P),Yt=s.get(Mt).__webglTexture;i.bindTexture(pt,Yt),v(pt),i.unbindTexture()}}}const re=[],ie=[];function Ie(P){if(P.samples>0){if(Ye(P)===!1){const T=P.textures,Y=P.width,_t=P.height;let Mt=r.COLOR_BUFFER_BIT;const pt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(P),Ot=T.length>1;if(Ot)for(let se=0;se<T.length;se++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const te=P.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let se=0;se<T.length;se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[se]);const Ct=s.get(T[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,Y,_t,0,0,Y,_t,Mt,r.NEAREST),m===!0&&(re.length=0,ie.length=0,re.push(r.COLOR_ATTACHMENT0+se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(pt),ie.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ot)for(let se=0;se<T.length;se++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[se]);const Ct=s.get(T[se]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function j(P){return Math.min(l.maxSamples,P.samples)}function Ye(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Me(P){const T=d.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function De(P,T){const Y=P.colorSpace,_t=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Wr&&Y!==rs&&(Ne.getTransfer(Y)===ke?(_t!==Ni||Mt!==li)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",Y)),T}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=Q,this.setTexture2D=tt,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=ut,this.rebindTextures=ue,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function f2(r,t){function i(s,l=rs){let c;const d=Ne.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===ip)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Lv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Nv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Dv)return r.BYTE;if(s===Uv)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===np)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===Ov)return r.ALPHA;if(s===Pv)return r.RGB;if(s===Ni)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===Fv)return r.RED;if(s===sp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===rp)return r.RG_INTEGER;if(s===op)return r.RGBA_INTEGER;if(s===qc||s===Yc||s===Zc||s===Kc)if(d===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===gh||s===_h||s===vh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xh||s===yh||s===Sh||s===Mh||s===bh||s===Eh||s===Th)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===xh||s===yh)return d===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Sh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Mh)return c.COMPRESSED_R11_EAC;if(s===bh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Eh)return c.COMPRESSED_RG11_EAC;if(s===Th)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph||s===Fh||s===Bh||s===zh||s===Ih)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ah)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ch)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ih)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hh||s===Gh||s===Vh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Hh)return d===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kh||s===jh||s===Xh||s===Wh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===kh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h2=`
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

}`;class p2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Wv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:d2,fragmentShader:h2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zi(new lu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m2 extends Gs{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,y=null,g=null,M=null,E=null;const U=typeof XRWebGLBinding<"u",S=new p2,v={},w=i.getContextAttributes();let N=null,O=null;const V=[],z=[],I=new pe;let A=null;const L=new yi;L.viewport=new sn;const dt=new yi;dt.viewport=new sn;const k=[L,dt],Q=new Tb;let it=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let yt=V[at];return yt===void 0&&(yt=new Dd,V[at]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(at){let yt=V[at];return yt===void 0&&(yt=new Dd,V[at]=yt),yt.getGripSpace()},this.getHand=function(at){let yt=V[at];return yt===void 0&&(yt=new Dd,V[at]=yt),yt.getHandSpace()};function tt(at){const yt=z.indexOf(at.inputSource);if(yt===-1)return;const Tt=V[yt];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,p||d),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function F(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let at=0;at<V.length;at++){const yt=z[at];yt!==null&&(z[at]=null,V[at].disconnect(yt))}it=null,ot=null,S.reset();for(const at in v)delete v[at];t.setRenderTarget(N),M=null,g=null,y=null,l=null,O=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,s.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&U&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,ft=null,Dt=null;w.depth&&(Dt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=w.stencil?Is:Aa,ft=w.stencil?el:qi);const Nt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(Nt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),O=new Xi(g.textureWidth,g.textureHeight,{format:Ni,type:li,depthTexture:new il(g.textureWidth,g.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Xi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:li,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(at){for(let yt=0;yt<at.removed.length;yt++){const Tt=at.removed[yt],ft=z.indexOf(Tt);ft>=0&&(z[ft]=null,V[ft].disconnect(Tt))}for(let yt=0;yt<at.added.length;yt++){const Tt=at.added[yt];let ft=z.indexOf(Tt);if(ft===-1){for(let Nt=0;Nt<V.length;Nt++)if(Nt>=z.length){z.push(Tt),ft=Nt;break}else if(z[Nt]===null){z[Nt]=Tt,ft=Nt;break}if(ft===-1)break}const Dt=V[ft];Dt&&Dt.connect(Tt)}}const ut=new J,gt=new J;function bt(at,yt,Tt){ut.setFromMatrixPosition(yt.matrixWorld),gt.setFromMatrixPosition(Tt.matrixWorld);const ft=ut.distanceTo(gt),Dt=yt.projectionMatrix.elements,Nt=Tt.projectionMatrix.elements,ue=Dt[14]/(Dt[10]-1),$t=Dt[14]/(Dt[10]+1),ne=(Dt[9]+1)/Dt[5],re=(Dt[9]-1)/Dt[5],ie=(Dt[8]-1)/Dt[0],Ie=(Nt[8]+1)/Nt[0],j=ue*ie,Ye=ue*Ie,Me=ft/(-ie+Ie),De=Me*-ie;if(yt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(De),at.translateZ(Me),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Dt[10]===-1)at.projectionMatrix.copy(yt.projectionMatrix),at.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const Kt=ue+Me,P=$t+Me,T=j-De,Y=Ye+(ft-De),_t=ne*$t/P*Kt,Mt=re*$t/P*Kt;at.projectionMatrix.makePerspective(T,Y,_t,Mt,Kt,P),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function B(at,yt){yt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(yt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let yt=at.near,Tt=at.far;S.texture!==null&&(S.depthNear>0&&(yt=S.depthNear),S.depthFar>0&&(Tt=S.depthFar)),Q.near=dt.near=L.near=yt,Q.far=dt.far=L.far=Tt,(it!==Q.near||ot!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),it=Q.near,ot=Q.far),Q.layers.mask=at.layers.mask|6,L.layers.mask=Q.layers.mask&-5,dt.layers.mask=Q.layers.mask&-3;const ft=at.parent,Dt=Q.cameras;B(Q,ft);for(let Nt=0;Nt<Dt.length;Nt++)B(Dt[Nt],ft);Dt.length===2?bt(Q,L,dt):Q.projectionMatrix.copy(L.projectionMatrix),Z(at,Q,ft)};function Z(at,yt,Tt){Tt===null?at.matrix.copy(yt.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(yt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(yt.projectionMatrix),at.projectionMatrixInverse.copy(yt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=qh*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(at){return v[at]};let xt=null;function Et(at,yt){if(_=yt.getViewerPose(p||d),E=yt,_!==null){const Tt=_.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let ft=!1;Tt.length!==Q.cameras.length&&(Q.cameras.length=0,ft=!0);for(let $t=0;$t<Tt.length;$t++){const ne=Tt[$t];let re=null;if(M!==null)re=M.getViewport(ne);else{const Ie=y.getViewSubImage(g,ne);re=Ie.viewport,$t===0&&(t.setRenderTargetTextures(O,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(O))}let ie=k[$t];ie===void 0&&(ie=new yi,ie.layers.enable($t),ie.viewport=new sn,k[$t]=ie),ie.matrix.fromArray(ne.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ne.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),$t===0&&(Q.matrix.copy(ie.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ft===!0&&Q.cameras.push(ie)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){y=s.getBinding();const $t=y.getDepthInformation(Tt[0]);$t&&$t.isValid&&$t.texture&&S.init($t,l.renderState)}if(Dt&&Dt.includes("camera-access")&&U){t.state.unbindTexture(),y=s.getBinding();for(let $t=0;$t<Tt.length;$t++){const ne=Tt[$t].camera;if(ne){let re=v[ne];re||(re=new Wv,v[ne]=re);const ie=y.getCameraImage(ne);re.sourceTexture=ie}}}}for(let Tt=0;Tt<V.length;Tt++){const ft=z[Tt],Dt=V[Tt];ft!==null&&Dt!==void 0&&Dt.update(ft,yt,p||d)}xt&&xt(at,yt),yt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:yt}),E=null}const It=new Kv;It.setAnimationLoop(Et),this.setAnimationLoop=function(at){xt=at},this.dispose=function(){}}}const Os=new Yi,g2=new en;function _2(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,qv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,w,N,O){v.isMeshBasicMaterial?c(S,v):v.isMeshLambertMaterial?(c(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(S,v),y(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(S,v),g(S,v),v.isMeshPhysicalMaterial&&M(S,v,O)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),U(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,w,N):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Zn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Zn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const w=t.get(v),N=w.envMap,O=w.envMapRotation;N&&(S.envMap.value=N,Os.copy(O),Os.x*=-1,Os.y*=-1,Os.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),S.envMapRotation.value.setFromMatrix4(g2.makeRotationFromEuler(Os)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,w,N){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*w,S.scale.value=N*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function y(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,w){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function U(S,v){const w=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function v2(r,t,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const O=N.program;s.uniformBlockBinding(w,O)}function p(w,N){let O=l[w.id];O===void 0&&(E(w),O=_(w),l[w.id]=O,w.addEventListener("dispose",S));const V=N.program;s.updateUBOMapping(w,V);const z=t.render.frame;c[w.id]!==z&&(g(w),c[w.id]=z)}function _(w){const N=y();w.__bindingPointIndex=N;const O=r.createBuffer(),V=w.__size,z=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,V,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,O),O}function y(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=l[w.id],O=w.uniforms,V=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let z=0,I=O.length;z<I;z++){const A=Array.isArray(O[z])?O[z]:[O[z]];for(let L=0,dt=A.length;L<dt;L++){const k=A[L];if(M(k,z,L,V)===!0){const Q=k.__offset,it=Array.isArray(k.value)?k.value:[k.value];let ot=0;for(let tt=0;tt<it.length;tt++){const F=it[tt],H=U(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,Q+ot,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,ot),ot+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,N,O,V){const z=w.value,I=N+"_"+O;if(V[I]===void 0)return typeof z=="number"||typeof z=="boolean"?V[I]=z:V[I]=z.clone(),!0;{const A=V[I];if(typeof z=="number"||typeof z=="boolean"){if(A!==z)return V[I]=z,!0}else if(A.equals(z)===!1)return A.copy(z),!0}return!1}function E(w){const N=w.uniforms;let O=0;const V=16;for(let I=0,A=N.length;I<A;I++){const L=Array.isArray(N[I])?N[I]:[N[I]];for(let dt=0,k=L.length;dt<k;dt++){const Q=L[dt],it=Array.isArray(Q.value)?Q.value:[Q.value];for(let ot=0,tt=it.length;ot<tt;ot++){const F=it[ot],H=U(F),ut=O%V,gt=ut%H.boundary,bt=ut+gt;O+=gt,bt!==0&&V-bt<H.storage&&(O+=V-bt),Q.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=O,O+=H.storage}}}const z=O%V;return z>0&&(O+=V-z),w.__size=O,w.__cache={},this}function U(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ce("WebGLRenderer: Unsupported uniform value type.",w),N}function S(w){const N=w.target;N.removeEventListener("dispose",S);const O=d.indexOf(N.__bindingPointIndex);d.splice(O,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const w in l)r.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const x2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function y2(){return Hi===null&&(Hi=new rb(x2,16,16,Xr,Ta),Hi.name="DFG_LUT",Hi.minFilter=Nn,Hi.magFilter=Nn,Hi.wrapS=Ma,Hi.wrapT=Ma,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class S2{constructor(t={}){const{canvas:i=FM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=li}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const U=M,S=new Set([op,rp,sp]),v=new Set([li,qi,tl,el,ip,ap]),w=new Uint32Array(4),N=new Int32Array(4);let O=null,V=null;const z=[],I=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let dt=!1;this._outputColorSpace=xi;let k=0,Q=0,it=null,ot=-1,tt=null;const F=new sn,H=new sn;let ut=null;const gt=new we(0);let bt=0,B=i.width,Z=i.height,xt=1,Et=null,It=null;const at=new sn(0,0,B,Z),yt=new sn(0,0,B,Z);let Tt=!1;const ft=new dp;let Dt=!1,Nt=!1;const ue=new en,$t=new J,ne=new sn,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Ie(){return it===null?xt:1}let j=s;function Ye(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",jt,!1),i.addEventListener("webglcontextrestored",le,!1),i.addEventListener("webglcontextcreationerror",He,!1),j===null){const W="webgl2";if(j=Ye(W,C),j===null)throw Ye(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Le("WebGLRenderer: "+C.message),C}let Me,De,Kt,P,T,Y,_t,Mt,pt,Yt,Ot,te,se,Ct,At,Ht,zt,Gt,ge,q,Lt,Ut,Vt;function Rt(){Me=new ST(j),Me.init(),Lt=new f2(j,Me),De=new hT(j,Me,t,Lt),Kt=new c2(j,Me),De.reversedDepthBuffer&&g&&Kt.buffers.depth.setReversed(!0),P=new ET(j),T=new ZA,Y=new u2(j,Me,Kt,T,De,Lt,P),_t=new yT(L),Mt=new wb(j),Ut=new fT(j,Mt),pt=new MT(j,Mt,P,Ut),Yt=new AT(j,pt,Mt,Ut,P),Gt=new TT(j,De,Y),At=new pT(T),Ot=new YA(L,_t,Me,De,Ut,At),te=new _2(L,T),se=new QA,Ct=new i2(Me),zt=new uT(L,_t,Kt,Yt,E,m),Ht=new l2(L,Yt,De),Vt=new v2(j,P,De,Kt),ge=new dT(j,Me,P),q=new bT(j,Me,P),P.programs=Ot.programs,L.capabilities=De,L.extensions=Me,L.properties=T,L.renderLists=se,L.shadowMap=Ht,L.state=Kt,L.info=P}Rt(),U!==li&&(A=new CT(U,i.width,i.height,l,c));const ht=new m2(L,j);this.xr=ht,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(C){C!==void 0&&(xt=C,this.setSize(B,Z,!1))},this.getSize=function(C){return C.set(B,Z)},this.setSize=function(C,W,lt=!0){if(ht.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,Z=W,i.width=Math.floor(C*xt),i.height=Math.floor(W*xt),lt===!0&&(i.style.width=C+"px",i.style.height=W+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(B*xt,Z*xt).floor()},this.setDrawingBufferSize=function(C,W,lt){B=C,Z=W,xt=lt,i.width=Math.floor(C*lt),i.height=Math.floor(W*lt),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(U===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,W,lt,st){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,W,lt,st),Kt.viewport(F.copy(at).multiplyScalar(xt).round())},this.getScissor=function(C){return C.copy(yt)},this.setScissor=function(C,W,lt,st){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,W,lt,st),Kt.scissor(H.copy(yt).multiplyScalar(xt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(C){Kt.setScissorTest(Tt=C)},this.setOpaqueSort=function(C){Et=C},this.setTransparentSort=function(C){It=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,lt=!0){let st=0;if(C){let $=!1;if(it!==null){const Pt=it.texture.format;$=S.has(Pt)}if($){const Pt=it.texture.type,kt=v.has(Pt),Ft=zt.getClearColor(),Zt=zt.getClearAlpha(),Jt=Ft.r,oe=Ft.g,de=Ft.b;kt?(w[0]=Jt,w[1]=oe,w[2]=de,w[3]=Zt,j.clearBufferuiv(j.COLOR,0,w)):(N[0]=Jt,N[1]=oe,N[2]=de,N[3]=Zt,j.clearBufferiv(j.COLOR,0,N))}else st|=j.COLOR_BUFFER_BIT}W&&(st|=j.DEPTH_BUFFER_BIT),lt&&(st|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&j.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",jt,!1),i.removeEventListener("webglcontextrestored",le,!1),i.removeEventListener("webglcontextcreationerror",He,!1),zt.dispose(),se.dispose(),Ct.dispose(),T.dispose(),_t.dispose(),Yt.dispose(),Ut.dispose(),Vt.dispose(),Ot.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ks),ht.removeEventListener("sessionend",js),Oi.stop()};function jt(C){C.preventDefault(),h_("WebGLRenderer: Context Lost."),dt=!0}function le(){h_("WebGLRenderer: Context Restored."),dt=!1;const C=P.autoReset,W=Ht.enabled,lt=Ht.autoUpdate,st=Ht.needsUpdate,$=Ht.type;Rt(),P.autoReset=C,Ht.enabled=W,Ht.autoUpdate=lt,Ht.needsUpdate=st,Ht.type=$}function He(C){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ue(C){const W=C.target;W.removeEventListener("dispose",Ue),On(W)}function On(C){Mi(C),T.remove(C)}function Mi(C){const W=T.get(C).programs;W!==void 0&&(W.forEach(function(lt){Ot.releaseProgram(lt)}),C.isShaderMaterial&&Ot.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,lt,st,$,Pt){W===null&&(W=re);const kt=$.isMesh&&$.matrixWorld.determinant()<0,Ft=ul(C,W,lt,st,$);Kt.setMaterial(st,kt);let Zt=lt.index,Jt=1;if(st.wireframe===!0){if(Zt=pt.getWireframeAttribute(lt),Zt===void 0)return;Jt=2}const oe=lt.drawRange,de=lt.attributes.position;let Xt=oe.start*Jt,_e=(oe.start+oe.count)*Jt;Pt!==null&&(Xt=Math.max(Xt,Pt.start*Jt),_e=Math.min(_e,(Pt.start+Pt.count)*Jt)),Zt!==null?(Xt=Math.max(Xt,0),_e=Math.min(_e,Zt.count)):de!=null&&(Xt=Math.max(Xt,0),_e=Math.min(_e,de.count));const Je=_e-Xt;if(Je<0||Je===1/0)return;Ut.setup($,st,Ft,lt,Zt);let $e,Oe=ge;if(Zt!==null&&($e=Mt.get(Zt),Oe=q,Oe.setIndex($e)),$.isMesh)st.wireframe===!0?(Kt.setLineWidth(st.wireframeLinewidth*Ie()),Oe.setMode(j.LINES)):Oe.setMode(j.TRIANGLES);else if($.isLine){let _n=st.linewidth;_n===void 0&&(_n=1),Kt.setLineWidth(_n*Ie()),$.isLineSegments?Oe.setMode(j.LINES):$.isLineLoop?Oe.setMode(j.LINE_LOOP):Oe.setMode(j.LINE_STRIP)}else $.isPoints?Oe.setMode(j.POINTS):$.isSprite&&Oe.setMode(j.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)nu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const _n=$._multiDrawStarts,qt=$._multiDrawCounts,Pn=$._multiDrawCount,fe=Zt?Mt.get(Zt).bytesPerElement:1,Fn=T.get(st).currentProgram.getUniforms();for(let Qn=0;Qn<Pn;Qn++)Fn.setValue(j,"_gl_DrawID",Qn),Oe.render(_n[Qn]/fe,qt[Qn])}else if($.isInstancedMesh)Oe.renderInstances(Xt,Je,$.count);else if(lt.isInstancedBufferGeometry){const _n=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,qt=Math.min(lt.instanceCount,_n);Oe.renderInstances(Xt,Je,qt)}else Oe.render(Xt,Je)};function Kr(C,W,lt){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,Ra(C,W,lt),C.side=cs,C.needsUpdate=!0,Ra(C,W,lt),C.side=Sa):Ra(C,W,lt)}this.compile=function(C,W,lt=null){lt===null&&(lt=C),V=Ct.get(lt),V.init(W),I.push(V),lt.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(V.pushLight($),$.castShadow&&V.pushShadow($))}),C!==lt&&C.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(V.pushLight($),$.castShadow&&V.pushShadow($))}),V.setupLights();const st=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Pt=$.material;if(Pt)if(Array.isArray(Pt))for(let kt=0;kt<Pt.length;kt++){const Ft=Pt[kt];Kr(Ft,lt,$),st.add(Ft)}else Kr(Pt,lt,$),st.add(Pt)}),V=I.pop(),st},this.compileAsync=function(C,W,lt=null){const st=this.compile(C,W,lt);return new Promise($=>{function Pt(){if(st.forEach(function(kt){T.get(kt).currentProgram.isReady()&&st.delete(kt)}),st.size===0){$(C);return}setTimeout(Pt,10)}Me.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Vs=null;function ol(C){Vs&&Vs(C)}function ks(){Oi.stop()}function js(){Oi.start()}const Oi=new Kv;Oi.setAnimationLoop(ol),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){Vs=C,ht.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},ht.addEventListener("sessionstart",ks),ht.addEventListener("sessionend",js),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(dt===!0)return;const lt=ht.enabled===!0&&ht.isPresenting===!0,st=A!==null&&(it===null||lt)&&A.begin(L,it);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(W),W=ht.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,W,it),V=Ct.get(C,I.length),V.init(W),I.push(V),ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ft.setFromProjectionMatrix(ue,ki,W.reversedDepth),Nt=this.localClippingEnabled,Dt=At.init(this.clippingPlanes,Nt),O=se.get(C,z.length),O.init(),z.push(O),ht.enabled===!0&&ht.isPresenting===!0){const kt=L.xr.getDepthSensingMesh();kt!==null&&Xs(kt,W,-1/0,L.sortObjects)}Xs(C,W,0,L.sortObjects),O.finish(),L.sortObjects===!0&&O.sort(Et,It),ie=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ie&&zt.addToRenderList(O,C),this.info.render.frame++,Dt===!0&&At.beginShadows();const $=V.state.shadowsArray;if(Ht.render($,C,W),Dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&A.hasRenderPass())===!1){const kt=O.opaque,Ft=O.transmissive;if(V.setupLights(),W.isArrayCamera){const Zt=W.cameras;if(Ft.length>0)for(let Jt=0,oe=Zt.length;Jt<oe;Jt++){const de=Zt[Jt];ln(kt,Ft,C,de)}ie&&zt.render(C);for(let Jt=0,oe=Zt.length;Jt<oe;Jt++){const de=Zt[Jt];bi(O,C,de,de.viewport)}}else Ft.length>0&&ln(kt,Ft,C,W),ie&&zt.render(C),bi(O,C,W)}it!==null&&Q===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),st&&A.end(L),C.isScene===!0&&C.onAfterRender(L,C,W),Ut.resetDefaultState(),ot=-1,tt=null,I.pop(),I.length>0?(V=I[I.length-1],Dt===!0&&At.setGlobalState(L.clippingPlanes,V.state.camera)):V=null,z.pop(),z.length>0?O=z[z.length-1]:O=null};function Xs(C,W,lt,st){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)V.pushLight(C),C.castShadow&&V.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ft.intersectsSprite(C)){st&&ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const kt=Yt.update(C),Ft=C.material;Ft.visible&&O.push(C,kt,Ft,lt,ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ft.intersectsObject(C))){const kt=Yt.update(C),Ft=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ne.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ne.copy(kt.boundingSphere.center)),ne.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(Ft)){const Zt=kt.groups;for(let Jt=0,oe=Zt.length;Jt<oe;Jt++){const de=Zt[Jt],Xt=Ft[de.materialIndex];Xt&&Xt.visible&&O.push(C,kt,Xt,lt,ne.z,de)}}else Ft.visible&&O.push(C,kt,Ft,lt,ne.z,null)}}const Pt=C.children;for(let kt=0,Ft=Pt.length;kt<Ft;kt++)Xs(Pt[kt],W,lt,st)}function bi(C,W,lt,st){const{opaque:$,transmissive:Pt,transparent:kt}=C;V.setupLightsView(lt),Dt===!0&&At.setGlobalState(L.clippingPlanes,lt),st&&Kt.viewport(F.copy(st)),$.length>0&&gn($,W,lt),Pt.length>0&&gn(Pt,W,lt),kt.length>0&&gn(kt,W,lt),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function ln(C,W,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[st.id]===void 0){const Xt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[st.id]=new Xi(1,1,{generateMipmaps:!0,type:Xt?Ta:li,minFilter:zs,samples:Math.max(4,De.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}const Pt=V.state.transmissionRenderTarget[st.id],kt=st.viewport||F;Pt.setSize(kt.z*L.transmissionResolutionScale,kt.w*L.transmissionResolutionScale);const Ft=L.getRenderTarget(),Zt=L.getActiveCubeFace(),Jt=L.getActiveMipmapLevel();L.setRenderTarget(Pt),L.getClearColor(gt),bt=L.getClearAlpha(),bt<1&&L.setClearColor(16777215,.5),L.clear(),ie&&zt.render(lt);const oe=L.toneMapping;L.toneMapping=ji;const de=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),V.setupLightsView(st),Dt===!0&&At.setGlobalState(L.clippingPlanes,st),gn(C,lt,st),Y.updateMultisampleRenderTarget(Pt),Y.updateRenderTargetMipmap(Pt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let _e=0,Je=W.length;_e<Je;_e++){const $e=W[_e],{object:Oe,geometry:_n,material:qt,group:Pn}=$e;if(qt.side===Sa&&Oe.layers.test(st.layers)){const fe=qt.side;qt.side=Zn,qt.needsUpdate=!0,Qi(Oe,lt,st,_n,qt,Pn),qt.side=fe,qt.needsUpdate=!0,Xt=!0}}Xt===!0&&(Y.updateMultisampleRenderTarget(Pt),Y.updateRenderTargetMipmap(Pt))}L.setRenderTarget(Ft,Zt,Jt),L.setClearColor(gt,bt),de!==void 0&&(st.viewport=de),L.toneMapping=oe}function gn(C,W,lt){const st=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Pt=C.length;$<Pt;$++){const kt=C[$],{object:Ft,geometry:Zt,group:Jt}=kt;let oe=kt.material;oe.allowOverride===!0&&st!==null&&(oe=st),Ft.layers.test(lt.layers)&&Qi(Ft,W,lt,Zt,oe,Jt)}}function Qi(C,W,lt,st,$,Pt){C.onBeforeRender(L,W,lt,st,$,Pt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(L,W,lt,st,C,Pt),$.transparent===!0&&$.side===Sa&&$.forceSinglePass===!1?($.side=Zn,$.needsUpdate=!0,L.renderBufferDirect(lt,W,st,$,C,Pt),$.side=cs,$.needsUpdate=!0,L.renderBufferDirect(lt,W,st,$,C,Pt),$.side=Sa):L.renderBufferDirect(lt,W,st,$,C,Pt),C.onAfterRender(L,W,lt,st,$,Pt)}function Ra(C,W,lt){W.isScene!==!0&&(W=re);const st=T.get(C),$=V.state.lights,Pt=V.state.shadowsArray,kt=$.state.version,Ft=Ot.getParameters(C,$.state,Pt,W,lt),Zt=Ot.getProgramCacheKey(Ft);let Jt=st.programs;st.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,st.fog=W.fog;const oe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;st.envMap=_t.get(C.envMap||st.environment,oe),st.envMapRotation=st.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",Ue),Jt=new Map,st.programs=Jt);let de=Jt.get(Zt);if(de!==void 0){if(st.currentProgram===de&&st.lightsStateVersion===kt)return cl(C,Ft),de}else Ft.uniforms=Ot.getUniforms(C),C.onBeforeCompile(Ft,L),de=Ot.acquireProgram(Ft,Zt),Jt.set(Zt,de),st.uniforms=Ft.uniforms;const Xt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xt.clippingPlanes=At.uniform),cl(C,Ft),st.needsLights=Qr(C),st.lightsStateVersion=kt,st.needsLights&&(Xt.ambientLightColor.value=$.state.ambient,Xt.lightProbe.value=$.state.probe,Xt.directionalLights.value=$.state.directional,Xt.directionalLightShadows.value=$.state.directionalShadow,Xt.spotLights.value=$.state.spot,Xt.spotLightShadows.value=$.state.spotShadow,Xt.rectAreaLights.value=$.state.rectArea,Xt.ltc_1.value=$.state.rectAreaLTC1,Xt.ltc_2.value=$.state.rectAreaLTC2,Xt.pointLights.value=$.state.point,Xt.pointLightShadows.value=$.state.pointShadow,Xt.hemisphereLights.value=$.state.hemi,Xt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xt.spotLightMatrix.value=$.state.spotLightMatrix,Xt.spotLightMap.value=$.state.spotLightMap,Xt.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=de,st.uniformsList=null,de}function ll(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Jc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function cl(C,W){const lt=T.get(C);lt.outputColorSpace=W.outputColorSpace,lt.batching=W.batching,lt.batchingColor=W.batchingColor,lt.instancing=W.instancing,lt.instancingColor=W.instancingColor,lt.instancingMorph=W.instancingMorph,lt.skinning=W.skinning,lt.morphTargets=W.morphTargets,lt.morphNormals=W.morphNormals,lt.morphColors=W.morphColors,lt.morphTargetsCount=W.morphTargetsCount,lt.numClippingPlanes=W.numClippingPlanes,lt.numIntersection=W.numClipIntersection,lt.vertexAlphas=W.vertexAlphas,lt.vertexTangents=W.vertexTangents,lt.toneMapping=W.toneMapping}function ul(C,W,lt,st,$){W.isScene!==!0&&(W=re),Y.resetTextureUnits();const Pt=W.fog,kt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?W.environment:null,Ft=it===null?L.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Wr,Zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Jt=_t.get(st.envMap||kt,Zt),oe=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,de=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!lt.morphAttributes.position,_e=!!lt.morphAttributes.normal,Je=!!lt.morphAttributes.color;let $e=ji;st.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&($e=L.toneMapping);const Oe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,_n=Oe!==void 0?Oe.length:0,qt=T.get(st),Pn=V.state.lights;if(Dt===!0&&(Nt===!0||C!==tt)){const un=C===tt&&st.id===ot;At.setState(st,C,un)}let fe=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Pn.state.version||qt.outputColorSpace!==Ft||$.isBatchedMesh&&qt.batching===!1||!$.isBatchedMesh&&qt.batching===!0||$.isBatchedMesh&&qt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&qt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&qt.instancing===!1||!$.isInstancedMesh&&qt.instancing===!0||$.isSkinnedMesh&&qt.skinning===!1||!$.isSkinnedMesh&&qt.skinning===!0||$.isInstancedMesh&&qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&qt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&qt.instancingMorph===!1&&$.morphTexture!==null||qt.envMap!==Jt||st.fog===!0&&qt.fog!==Pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==At.numPlanes||qt.numIntersection!==At.numIntersection)||qt.vertexAlphas!==oe||qt.vertexTangents!==de||qt.morphTargets!==Xt||qt.morphNormals!==_e||qt.morphColors!==Je||qt.toneMapping!==$e||qt.morphTargetsCount!==_n)&&(fe=!0):(fe=!0,qt.__version=st.version);let Fn=qt.currentProgram;fe===!0&&(Fn=Ra(st,W,$));let Qn=!1,Ei=!1,Jn=!1;const ze=Fn.getUniforms(),cn=qt.uniforms;if(Kt.useProgram(Fn.program)&&(Qn=!0,Ei=!0,Jn=!0),st.id!==ot&&(ot=st.id,Ei=!0),Qn||tt!==C){Kt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ze.setValue(j,"projectionMatrix",C.projectionMatrix),ze.setValue(j,"viewMatrix",C.matrixWorldInverse);const Ti=ze.map.cameraPosition;Ti!==void 0&&Ti.setValue(j,$t.setFromMatrixPosition(C.matrixWorld)),De.logarithmicDepthBuffer&&ze.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ze.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),tt!==C&&(tt=C,Ei=!0,Jn=!0)}if(qt.needsLights&&(Pn.state.directionalShadowMap.length>0&&ze.setValue(j,"directionalShadowMap",Pn.state.directionalShadowMap,Y),Pn.state.spotShadowMap.length>0&&ze.setValue(j,"spotShadowMap",Pn.state.spotShadowMap,Y),Pn.state.pointShadowMap.length>0&&ze.setValue(j,"pointShadowMap",Pn.state.pointShadowMap,Y)),$.isSkinnedMesh){ze.setOptional(j,$,"bindMatrix"),ze.setOptional(j,$,"bindMatrixInverse");const un=$.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),ze.setValue(j,"boneTexture",un.boneTexture,Y))}$.isBatchedMesh&&(ze.setOptional(j,$,"batchingTexture"),ze.setValue(j,"batchingTexture",$._matricesTexture,Y),ze.setOptional(j,$,"batchingIdTexture"),ze.setValue(j,"batchingIdTexture",$._indirectTexture,Y),ze.setOptional(j,$,"batchingColorTexture"),$._colorsTexture!==null&&ze.setValue(j,"batchingColorTexture",$._colorsTexture,Y));const Bn=lt.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Gt.update($,lt,Fn),(Ei||qt.receiveShadow!==$.receiveShadow)&&(qt.receiveShadow=$.receiveShadow,ze.setValue(j,"receiveShadow",$.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&W.environment!==null&&(cn.envMapIntensity.value=W.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=y2()),Ei&&(ze.setValue(j,"toneMappingExposure",L.toneMappingExposure),qt.needsLights&&fs(cn,Jn),Pt&&st.fog===!0&&te.refreshFogUniforms(cn,Pt),te.refreshMaterialUniforms(cn,st,xt,Z,V.state.transmissionRenderTarget[C.id]),Jc.upload(j,ll(qt),cn,Y)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Jc.upload(j,ll(qt),cn,Y),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ze.setValue(j,"center",$.center),ze.setValue(j,"modelViewMatrix",$.modelViewMatrix),ze.setValue(j,"normalMatrix",$.normalMatrix),ze.setValue(j,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const un=st.uniformsGroups;for(let Ti=0,Ji=un.length;Ti<Ji;Ti++){const Ws=un[Ti];Vt.update(Ws,Fn),Vt.bind(Ws,Fn)}}return Fn}function fs(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Qr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(C,W,lt){const st=T.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=W,T.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const lt=T.get(C);lt.__webglFramebuffer=W,lt.__useDefaultFramebuffer=W===void 0};const Ca=j.createFramebuffer();this.setRenderTarget=function(C,W=0,lt=0){it=C,k=W,Q=lt;let st=null,$=!1,Pt=!1;if(C){const Ft=T.get(C);if(Ft.__useDefaultFramebuffer!==void 0){Kt.bindFramebuffer(j.FRAMEBUFFER,Ft.__webglFramebuffer),F.copy(C.viewport),H.copy(C.scissor),ut=C.scissorTest,Kt.viewport(F),Kt.scissor(H),Kt.setScissorTest(ut),ot=-1;return}else if(Ft.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(Ft.__hasExternalTextures)Y.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const oe=C.depthTexture;if(Ft.__boundDepthTexture!==oe){if(oe!==null&&T.has(oe)&&(C.width!==oe.image.width||C.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const Zt=C.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Pt=!0);const Jt=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?st=Jt[W][lt]:st=Jt[W],$=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?st=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Jt)?st=Jt[lt]:st=Jt,F.copy(C.viewport),H.copy(C.scissor),ut=C.scissorTest}else F.copy(at).multiplyScalar(xt).floor(),H.copy(yt).multiplyScalar(xt).floor(),ut=Tt;if(lt!==0&&(st=Ca),Kt.bindFramebuffer(j.FRAMEBUFFER,st)&&Kt.drawBuffers(C,st),Kt.viewport(F),Kt.scissor(H),Kt.setScissorTest(ut),$){const Ft=T.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ft.__webglTexture,lt)}else if(Pt){const Ft=W;for(let Zt=0;Zt<C.textures.length;Zt++){const Jt=T.get(C.textures[Zt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,lt,Ft)}}else if(C!==null&&lt!==0){const Ft=T.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ft.__webglTexture,lt)}ot=-1},this.readRenderTargetPixels=function(C,W,lt,st,$,Pt,kt,Ft=0){if(!(C&&C.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Zt=Zt[kt]),Zt){Kt.bindFramebuffer(j.FRAMEBUFFER,Zt);try{const Jt=C.textures[Ft],oe=Jt.format,de=Jt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ft),!De.textureFormatReadable(oe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(de)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-st&&lt>=0&&lt<=C.height-$&&j.readPixels(W,lt,st,$,Lt.convert(oe),Lt.convert(de),Pt)}finally{const Jt=it!==null?T.get(it).__webglFramebuffer:null;Kt.bindFramebuffer(j.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(C,W,lt,st,$,Pt,kt,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Zt=Zt[kt]),Zt)if(W>=0&&W<=C.width-st&&lt>=0&&lt<=C.height-$){Kt.bindFramebuffer(j.FRAMEBUFFER,Zt);const Jt=C.textures[Ft],oe=Jt.format,de=Jt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ft),!De.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Xt),j.bufferData(j.PIXEL_PACK_BUFFER,Pt.byteLength,j.STREAM_READ),j.readPixels(W,lt,st,$,Lt.convert(oe),Lt.convert(de),0);const _e=it!==null?T.get(it).__webglFramebuffer:null;Kt.bindFramebuffer(j.FRAMEBUFFER,_e);const Je=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await BM(j,Je,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Xt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Pt),j.deleteBuffer(Xt),j.deleteSync(Je),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,lt=0){const st=Math.pow(2,-lt),$=Math.floor(C.image.width*st),Pt=Math.floor(C.image.height*st),kt=W!==null?W.x:0,Ft=W!==null?W.y:0;Y.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,lt,0,0,kt,Ft,$,Pt),Kt.unbindTexture()};const wa=j.createFramebuffer(),ds=j.createFramebuffer();this.copyTextureToTexture=function(C,W,lt=null,st=null,$=0,Pt=0){let kt,Ft,Zt,Jt,oe,de,Xt,_e,Je;const $e=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(lt!==null)kt=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Zt=lt.isBox3?lt.max.z-lt.min.z:1,Jt=lt.min.x,oe=lt.min.y,de=lt.isBox3?lt.min.z:0;else{const cn=Math.pow(2,-$);kt=Math.floor($e.width*cn),Ft=Math.floor($e.height*cn),C.isDataArrayTexture?Zt=$e.depth:C.isData3DTexture?Zt=Math.floor($e.depth*cn):Zt=1,Jt=0,oe=0,de=0}st!==null?(Xt=st.x,_e=st.y,Je=st.z):(Xt=0,_e=0,Je=0);const Oe=Lt.convert(W.format),_n=Lt.convert(W.type);let qt;W.isData3DTexture?(Y.setTexture3D(W,0),qt=j.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Y.setTexture2DArray(W,0),qt=j.TEXTURE_2D_ARRAY):(Y.setTexture2D(W,0),qt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,W.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,W.unpackAlignment);const Pn=j.getParameter(j.UNPACK_ROW_LENGTH),fe=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Fn=j.getParameter(j.UNPACK_SKIP_PIXELS),Qn=j.getParameter(j.UNPACK_SKIP_ROWS),Ei=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,$e.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,$e.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Jt),j.pixelStorei(j.UNPACK_SKIP_ROWS,oe),j.pixelStorei(j.UNPACK_SKIP_IMAGES,de);const Jn=C.isDataArrayTexture||C.isData3DTexture,ze=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const cn=T.get(C),Bn=T.get(W),un=T.get(cn.__renderTarget),Ti=T.get(Bn.__renderTarget);Kt.bindFramebuffer(j.READ_FRAMEBUFFER,un.__webglFramebuffer),Kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ji=0;Ji<Zt;Ji++)Jn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(C).__webglTexture,$,de+Ji),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(W).__webglTexture,Pt,Je+Ji)),j.blitFramebuffer(Jt,oe,kt,Ft,Xt,_e,kt,Ft,j.DEPTH_BUFFER_BIT,j.NEAREST);Kt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||T.has(C)){const cn=T.get(C),Bn=T.get(W);Kt.bindFramebuffer(j.READ_FRAMEBUFFER,wa),Kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,ds);for(let un=0;un<Zt;un++)Jn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,cn.__webglTexture,$,de+un):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,cn.__webglTexture,$),ze?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Bn.__webglTexture,Pt,Je+un):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Bn.__webglTexture,Pt),$!==0?j.blitFramebuffer(Jt,oe,kt,Ft,Xt,_e,kt,Ft,j.COLOR_BUFFER_BIT,j.NEAREST):ze?j.copyTexSubImage3D(qt,Pt,Xt,_e,Je+un,Jt,oe,kt,Ft):j.copyTexSubImage2D(qt,Pt,Xt,_e,Jt,oe,kt,Ft);Kt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else ze?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(qt,Pt,Xt,_e,Je,kt,Ft,Zt,Oe,_n,$e.data):W.isCompressedArrayTexture?j.compressedTexSubImage3D(qt,Pt,Xt,_e,Je,kt,Ft,Zt,Oe,$e.data):j.texSubImage3D(qt,Pt,Xt,_e,Je,kt,Ft,Zt,Oe,_n,$e):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Pt,Xt,_e,kt,Ft,Oe,_n,$e.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Pt,Xt,_e,$e.width,$e.height,Oe,$e.data):j.texSubImage2D(j.TEXTURE_2D,Pt,Xt,_e,kt,Ft,Oe,_n,$e);j.pixelStorei(j.UNPACK_ROW_LENGTH,Pn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,fe),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Fn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ei),Pt===0&&W.generateMipmaps&&j.generateMipmap(qt),Kt.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),Kt.unbindTexture()},this.resetState=function(){k=0,Q=0,it=null,Kt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const ov={type:"change"},mp={type:"start"},nx={type:"end"},Xc=new ou,lv=new ss,M2=Math.cos(70*HM.DEG2RAD),xn=new J,Yn=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},eh=1e-6;class b2 extends Rb{constructor(t,i=null){super(t,i),this.state=qe.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new us,this._lastTargetPosition=new J,this._quat=new us().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new F_,this._sphericalDelta=new F_,this._scale=1,this._panOffset=new J,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new J,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T2.bind(this),this._onPointerDown=E2.bind(this),this._onPointerUp=A2.bind(this),this._onContextMenu=N2.bind(this),this._onMouseWheel=w2.bind(this),this._onKeyDown=D2.bind(this),this._onTouchStart=U2.bind(this),this._onTouchMove=L2.bind(this),this._onMouseDown=R2.bind(this),this._onMouseMove=C2.bind(this),this._interceptControlDown=O2.bind(this),this._interceptControlUp=P2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ov),this.update(),this.state=qe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;xn.copy(i).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),l<-Math.PI?l+=Yn:l>Math.PI&&(l-=Yn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const h=xn.length();d=this._clampDistance(h*this._scale);const m=h-d;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),d=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Xc.origin.copy(this.object.position),Xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xc.direction))<M2?this.object.lookAt(this.target):(lv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xc.intersectPlane(lv,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>eh||this._lastTargetPosition.distanceToSquared(this.target)>eh?(this.dispatchEvent(ov),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Yn/60*this.autoRotateSpeed*t:Yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){xn.setFromMatrixColumn(i,0),xn.multiplyScalar(-t),this._panOffset.add(xn)}_panUp(t,i){this.screenSpacePanning===!0?xn.setFromMatrixColumn(i,1):(xn.setFromMatrixColumn(i,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(t),this._panOffset.add(xn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;xn.copy(l).sub(this.target);let c=xn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,d=s.width,h=s.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(d,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new pe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function E2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function T2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function A2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nx),this.state=qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function R2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=qe.DOLLY;break;case Hr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}break;case Hr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(mp)}function C2(r){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function w2(r){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(r.preventDefault(),this.dispatchEvent(mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(nx))}function D2(r){this.enabled!==!1&&this._handleKeyDown(r)}function U2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=qe.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=qe.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(mp)}function L2(r){switch(this._trackPointer(r),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=qe.NONE}}function N2(r){this.enabled!==!1&&r.preventDefault()}function O2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cv=["#7c6ff7","#f87171","#4ade80","#fbbf24","#60a5fa","#f472b6","#34d399","#fb923c","#a78bfa","#38bdf8","#e879f9","#86efac","#fcd34d","#93c5fd","#f9a8d4","#6ee7b7","#fdba74","#c4b5fd","#7dd3fc","#d8b4fe","#bbf7d0","#fde68a","#bfdbfe","#fbcfe8","#a5f3fc"],F2=20;function ix({profile:r,overlaps:t,title:i="Your Genre Map",height:s=420}){const l=s,c=wt.useRef(null),d=wt.useRef(null),[h,m]=wt.useState({visible:!1,x:0,y:0,genre:"",pct:0});return wt.useEffect(()=>{if(!r||r.length===0)return;const p=r.slice(0,F2),_=new Set(p.map(([ft])=>ft)),y={};p.forEach(([ft],Dt)=>{y[ft]=cv[Dt%cv.length]});const g=p.map(([ft,Dt])=>({id:ft,pct:Dt})),M=[];for(const[ft,Dt]of Object.entries(t))if(_.has(ft))for(const[Nt,ue]of Object.entries(Dt))_.has(Nt)&&M.push({source:ft,target:Nt,strength:ue});const E=c.current,U=E.clientWidth,S=l,v=new S2({antialias:!0,alpha:!0});v.setPixelRatio(window.devicePixelRatio),v.setSize(U,S),v.setClearColor(0,0),E.appendChild(v.domElement);const w=new tb,N=new yi(60,U/S,.1,2e3);N.position.set(0,0,280);const O=new b2(N,v.domElement);O.enableDamping=!0,O.dampingFactor=.08,O.enablePan=!1,O.minDistance=80,O.maxDistance=600,w.add(new bb(16777215,.6));const V=new Mb(16777215,.8);V.position.set(100,100,100),w.add(V);const z={},I=new Ir,A=p[0][1];p.forEach(([ft,Dt])=>{const Nt=3+Math.pow(Dt/A,1.8)*22,ue=new hp(Nt,32,32),$t=new we(y[ft]),ne=new _b({color:$t,emissive:$t,emissiveIntensity:.2,shininess:60,transparent:!0,opacity:.92}),re=new Zi(ue,ne);re.userData={genre:ft,pct:Dt,baseColor:$t.clone(),radius:Nt},z[ft]=re,I.add(re)}),w.add(I);const L=new Ir;w.add(L),g.forEach(ft=>{const Dt=Math.random()*Math.PI*2,Nt=Math.acos(2*Math.random()-1),ue=80+Math.random()*60;ft.x=ue*Math.sin(Nt)*Math.cos(Dt),ft.y=ue*Math.sin(Nt)*Math.sin(Dt),ft.z=ue*Math.cos(Nt),ft.vx=0,ft.vy=0,ft.vz=0});const dt={};g.forEach(ft=>dt[ft.id]=ft);const k=M.map(ft=>({source:dt[ft.source]||ft.source,target:dt[ft.target]||ft.target,strength:ft.strength})).filter(ft=>ft.source&&ft.target&&typeof ft.source=="object"&&typeof ft.target=="object"),Q=5500,it=.04,ot=.008,tt=.88,F=300;let H=0,ut=!1;const gt=()=>{if(H>=F){ut=!0;return}H++;for(let ft=0;ft<g.length;ft++)for(let Dt=ft+1;Dt<g.length;Dt++){const Nt=g[ft],ue=g[Dt],$t=ue.x-Nt.x,ne=ue.y-Nt.y,re=ue.z-Nt.z,ie=$t*$t+ne*ne+re*re+.01,Ie=Math.sqrt(ie),j=Q/ie,Ye=$t/Ie*j,Me=ne/Ie*j,De=re/Ie*j;Nt.vx-=Ye,Nt.vy-=Me,Nt.vz-=De,ue.vx+=Ye,ue.vy+=Me,ue.vz+=De}for(const ft of k){const{source:Dt,target:Nt,strength:ue}=ft,$t=Nt.x-Dt.x,ne=Nt.y-Dt.y,re=Nt.z-Dt.z,ie=Math.sqrt($t*$t+ne*ne+re*re)+.01,Ie=120+180/(ue+1),j=(ie-Ie)/ie*it*ue;Dt.vx+=$t*j,Dt.vy+=ne*j,Dt.vz+=re*j,Nt.vx-=$t*j,Nt.vy-=ne*j,Nt.vz-=re*j}for(const ft of g)ft.vx-=ft.x*ot,ft.vy-=ft.y*ot,ft.vz-=ft.z*ot;for(const ft of g)ft.vx*=tt,ft.vy*=tt,ft.vz*=tt,ft.x+=ft.vx,ft.y+=ft.vy,ft.z+=ft.vz};for(let ft=0;ft<150;ft++)gt();const bt=()=>{for(const[ft,Dt]of Object.entries(z)){const Nt=dt[ft];Nt&&Dt.position.set(Nt.x,Nt.y,Nt.z)}},B=()=>{for(;L.children.length;)L.remove(L.children[0]);for(const ft of k){const{source:Dt,target:Nt,strength:ue}=ft,$t=[new J(Dt.x,Dt.y,Dt.z),new J(Nt.x,Nt.y,Nt.z)],ne=new Si().setFromPoints($t),re=Math.min(.15+ue*.1,.55),ie=new jv({color:10329514,transparent:!0,opacity:re});L.add(new ub(ne,ie))}};bt(),B();const Z=new Ab,xt=new pe;let Et=null;const It=ft=>{const Dt=v.domElement.getBoundingClientRect();xt.x=(ft.clientX-Dt.left)/Dt.width*2-1,xt.y=-((ft.clientY-Dt.top)/Dt.height)*2+1,Z.setFromCamera(xt,N);const Nt=Object.values(z),ue=Z.intersectObjects(Nt);if(ue.length>0){const $t=ue[0].object;Et!==$t&&(Et&&(Et.material.emissiveIntensity=.2,Et.scale.setScalar(1)),Et=$t,Et.material.emissiveIntensity=.7,Et.scale.setScalar(1.18));const{genre:ne,pct:re}=$t.userData;m({visible:!0,x:ft.clientX-Dt.left,y:ft.clientY-Dt.top,genre:ne,pct:re}),v.domElement.style.cursor="pointer"}else Et&&(Et.material.emissiveIntensity=.2,Et.scale.setScalar(1),Et=null),m($t=>({...$t,visible:!1})),v.domElement.style.cursor="default"};v.domElement.addEventListener("mousemove",It);let at;const yt=()=>{at=requestAnimationFrame(yt),ut||(gt(),bt(),B()),O.update(),v.render(w,N)};yt();const Tt=new ResizeObserver(()=>{const ft=E.clientWidth;N.aspect=ft/l,N.updateProjectionMatrix(),v.setSize(ft,l)});return Tt.observe(E),()=>{cancelAnimationFrame(at),Tt.disconnect(),v.domElement.removeEventListener("mousemove",It),O.dispose(),v.dispose(),E.contains(v.domElement)&&E.removeChild(v.domElement)}},[r,t]),D.jsxs("div",{style:{position:"relative",width:"100%",marginBottom:40},children:[D.jsx("h2",{style:{fontFamily:b.fontDisplay,fontSize:20,fontWeight:700,color:b.textPrimary,marginBottom:12,textAlign:"left"},children:i}),D.jsx("div",{ref:c,style:{width:"100%",height:l,borderRadius:b.radius.lg,background:b.bgCard,border:`1px solid ${b.border}`,overflow:"hidden",position:"relative"}}),h.visible&&D.jsxs("div",{ref:d,style:{position:"absolute",left:h.x+14,top:h.y-10,pointerEvents:"none",background:b.bgElevated,border:`1px solid ${b.border}`,borderRadius:b.radius.md,padding:"8px 14px",fontFamily:b.fontBody,fontSize:13,color:b.textPrimary,boxShadow:b.shadow.md,whiteSpace:"nowrap",zIndex:10},children:[D.jsx("div",{style:{fontWeight:700,marginBottom:2},children:h.genre}),D.jsxs("div",{style:{color:b.textSecondary},children:[h.pct.toFixed(1),"%"]})]})]})}const uv={artist:"",album:"",title:"",date:"",track:"1",num_tracks:"1"};function B2({userId:r,onAdded:t}){const[i,s]=wt.useState(!1),[l,c]=wt.useState(uv),[d,h]=wt.useState(!1),[m,p]=wt.useState(null),_=M=>E=>c(U=>({...U,[M]:E})),y=async M=>{M.preventDefault(),h(!0),p(null);try{const E=await Se.createScrobble(r,{artist:l.artist,album:l.album,title:l.title,date:l.date,track:parseInt(l.track)||1,num_tracks:parseInt(l.num_tracks)||1});t(E),c(uv),s(!1)}catch(E){p(E.message)}finally{h(!1)}},g={width:"100%",padding:"10px 12px",borderRadius:b.radius.md,border:`1.5px solid ${b.border}`,background:b.bgElevated,color:b.textPrimary,fontSize:14,fontFamily:b.fontBody,outline:"none",boxSizing:"border-box",transition:b.transition};return D.jsxs("div",{style:{marginTop:24},children:[D.jsx("button",{onClick:()=>s(M=>!M),style:{padding:"10px 20px",borderRadius:b.radius.pill,border:`2px solid ${i?b.accent:b.border}`,background:i?b.accentMuted:"transparent",color:i?b.accent:b.textSecondary,fontFamily:b.fontBody,fontSize:14,fontWeight:600,cursor:"pointer",transition:b.transition},children:i?"Cancel":"+ Log a listen"}),i&&D.jsxs("form",{onSubmit:y,style:{marginTop:16,padding:"24px 28px",background:b.bgCard,borderRadius:b.radius.lg,border:`1px solid ${b.border}`},children:[D.jsx("h3",{style:{margin:"0 0 20px",fontFamily:b.fontDisplay,fontSize:18,fontWeight:700,color:b.textPrimary},children:"Log a listen"}),D.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px 16px",marginBottom:12},children:[{field:"artist",label:"Artist",placeholder:"e.g. Radiohead"},{field:"title",label:"Song title",placeholder:"e.g. No Surprises"},{field:"album",label:"Album",placeholder:"e.g. OK Computer"},{field:"date",label:"Release date",placeholder:"YYYY-MM-DD",type:"date"}].map(({field:M,label:E,placeholder:U,type:S="text"})=>D.jsxs("div",{children:[D.jsx("label",{style:{display:"block",marginBottom:5,fontSize:12,fontWeight:600,fontFamily:b.fontBody,color:b.textSecondary},children:E}),D.jsx("input",{type:S,required:!0,value:l[M],onChange:v=>_(M)(v.target.value),placeholder:U,style:g,onFocus:v=>{v.target.style.borderColor=b.borderFocus},onBlur:v=>{v.target.style.borderColor=b.border}})]},M))}),D.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px 16px",marginBottom:20},children:[{field:"track",label:"Track #",placeholder:"1"},{field:"num_tracks",label:"Total tracks",placeholder:"12"}].map(({field:M,label:E,placeholder:U})=>D.jsxs("div",{children:[D.jsx("label",{style:{display:"block",marginBottom:5,fontSize:12,fontWeight:600,fontFamily:b.fontBody,color:b.textSecondary},children:E}),D.jsx("input",{type:"number",min:"1",value:l[M],onChange:S=>_(M)(S.target.value),placeholder:U,style:g,onFocus:S=>{S.target.style.borderColor=b.borderFocus},onBlur:S=>{S.target.style.borderColor=b.border}})]},M))}),m&&D.jsx("p",{style:{margin:"0 0 14px",fontFamily:b.fontBody,fontSize:13,color:b.error},children:m}),D.jsx("button",{type:"submit",disabled:d,style:{padding:"10px 24px",borderRadius:b.radius.pill,border:"none",background:b.accent,color:"#fff",fontFamily:b.fontBody,fontSize:14,fontWeight:700,cursor:d?"default":"pointer",opacity:d?.6:1,transition:b.transition},children:d?"Logging…":"Log listen"})]})]})}function z2({onNavigate:r,userId:t}){const[i,s]=wt.useState(!0),[l,c]=wt.useState(null),[d,h]=wt.useState([]),[m,p]=wt.useState([]),[_,y]=wt.useState({}),[g,M]=wt.useState([]),E=t!=-1,U=async()=>{try{const[w,N,O]=await Promise.all([Se.getScrobbles(t),Se.getProfile(t),Se.getRecommendations(t).catch(()=>[])]);h(w);const V=Object.entries(N.profile).sort((z,I)=>I[1]-z[1]);p(V),y(N.overlaps),M(Array.isArray(O)?O:[]),c(null)}catch(w){c(w.message)}finally{s(!1)}},S=async()=>{try{const w=await Se.getProfile(t),N=Object.entries(w.profile).sort((O,V)=>V[1]-O[1]);p(N),y(w.overlaps)}catch{}};wt.useEffect(()=>{E&&U()},[]);const v=w=>{h(N=>[...N,w]),S()};return D.jsxs("div",{style:{maxWidth:960,margin:"0 auto",padding:"40px 24px"},children:[!E&&D.jsxs(D.Fragment,{children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:32,fontWeight:700,color:b.textPrimary,marginBottom:12},children:"Your Feed"}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:16,color:b.textSecondary,lineHeight:1.6},children:"Make an account to track your listens!"})]}),E&&D.jsxs(D.Fragment,{children:[i&&D.jsx("h1",{children:"Loading feed..."}),!i&&D.jsxs(D.Fragment,{children:[l&&D.jsxs(D.Fragment,{children:[D.jsx("h1",{children:"Uh oh!"}),D.jsx("p",{children:"Tutti hit an error."}),D.jsx("p",{children:l.message})]}),!l&&D.jsxs(D.Fragment,{children:[m.length>0&&D.jsx(ix,{profile:m,overlaps:_}),(!d||d.length==0)&&D.jsxs(D.Fragment,{children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:32,fontWeight:700,color:b.textPrimary,marginBottom:12},children:"Your Feed"}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:16,color:b.textSecondary,lineHeight:1.6},children:"Listening activity and friends' updates will appear here."})]}),d&&D.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0},children:d.map(w=>D.jsx("li",{children:D.jsx(nM,{song_id:w.song_id,scrobble_id:w.id,initialRating:w.rating,onRatingChange:S})},w.id))}),g.length>0&&D.jsxs("div",{style:{marginTop:40},children:[D.jsx("h2",{style:{fontFamily:b.fontDisplay,fontSize:22,fontWeight:700,color:b.textPrimary,marginBottom:16},children:"Recommended for you"}),D.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0},children:g.slice(0,10).map(w=>D.jsx("li",{children:D.jsx(Sv,{base_song:w.base_song,recommended_song:w.recommended_song})},w.id))})]}),D.jsx(B2,{userId:t,onAdded:v})]})]})]})]})}function nh({title:r,children:t}){return D.jsxs("div",{style:{marginBottom:24,padding:"24px 28px",borderRadius:b.radius.md,background:b.bgCard,border:`1px solid ${b.border}`},children:[r&&D.jsx("h2",{style:{fontFamily:b.fontDisplay,fontSize:18,fontWeight:700,color:b.textPrimary,marginBottom:20,marginTop:0},children:r}),t]})}function I2({onNavigate:r,onLogout:t,userId:i}){const[s,l]=wt.useState(null),[c,d]=wt.useState(!1),[h,m]=wt.useState(!1),[p,_]=wt.useState(!1),[y,g]=wt.useState(null),M=xv(i),E=i!=-1;if(wt.useEffect(()=>{if(!E){r("login");return}(async()=>{try{const O=await Se.getAbout(i);g(O)}catch(O){l(O.message)}})()},[E]),!E)return null;const U=async()=>{try{await Se.logout(),t(),r("login")}catch(N){l(N.message)}},S=M.location&&y&&M.location.city===y.city&&M.location.country===y.country,v=async()=>{if(M.location){m(!0);try{await Se.updateLocation(i,M.location.city,M.location.country),d(!0)}catch{l("Could not save location — not yet available on the server.")}finally{m(!1)}}},w=()=>{alert("Account deletion is not yet available."),_(!1)};return D.jsxs("div",{style:{maxWidth:560,margin:"0 auto",padding:"40px 24px"},children:[D.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:28,fontWeight:700,color:b.textPrimary,margin:"0 0 6px"},children:y?.display_name||y?.username||"Your Profile"}),y?.email&&D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,margin:"0 0 4px"},children:y.email}),y?.date_joined&&D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:12,color:b.textPlaceholder,margin:0},children:["Member since ",new Date(y.date_joined).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),s&&D.jsx("div",{style:{padding:"12px 16px",borderRadius:b.radius.md,marginBottom:20,background:`${b.error}15`,border:`1px solid ${b.error}40`,color:b.error,fontSize:13,fontFamily:b.fontBody},children:s}),D.jsx(nh,{title:"Connections",children:D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[D.jsx($h,{}),D.jsx(yv,{})]})}),D.jsxs(nh,{title:"Location",children:[D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,marginBottom:16,lineHeight:1.6},children:"Update your location to find nearby listeners."}),D.jsxs("div",{style:{padding:20,borderRadius:b.radius.md,background:b.bgElevated,border:`1px solid ${b.border}`,textAlign:"center",marginBottom:16},children:[M.loading?D.jsxs(D.Fragment,{children:[D.jsx("div",{style:{color:b.textSecondary,marginBottom:8},children:D.jsx($o,{})}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,margin:0},children:"Detecting location…"})]}):c||S?D.jsxs(D.Fragment,{children:[D.jsx("div",{style:{color:b.success,marginBottom:8},children:D.jsx(mv,{})}),D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:15,fontWeight:600,color:b.textPrimary,marginBottom:4},children:[M.location?.city,", ",M.location?.country]}),D.jsx("p",{style:{fontSize:12,color:b.success,fontFamily:b.fontBody,margin:0},children:"Location saved"})]}):M.location?D.jsxs(D.Fragment,{children:[D.jsx("div",{style:{color:b.accent,marginBottom:8},children:D.jsx($o,{})}),D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:15,fontWeight:600,color:b.textPrimary,marginBottom:4},children:[M.location.city,", ",M.location.country]}),D.jsx("p",{style:{fontSize:12,color:b.textSecondary,fontFamily:b.fontBody,margin:0},children:"New location detected"})]}):D.jsxs(D.Fragment,{children:[D.jsx("div",{style:{color:b.textSecondary,marginBottom:12},children:D.jsx($o,{})}),D.jsx(os,{onClick:M.requestLocation,variant:"secondary",style:{width:"auto",display:"inline-block"},children:"Detect Location"})]}),M.error&&!M.loading&&D.jsx("p",{style:{marginTop:10,fontSize:12,color:b.warning,fontFamily:b.fontBody,margin:"10px 0 0"},children:M.error})]}),M.location&&!S&&!c&&!M.loading&&D.jsx(os,{onClick:v,loading:h,style:{marginBottom:10},children:"Save Location"}),(c||S)&&!M.loading&&D.jsx(os,{onClick:M.requestLocation,variant:"secondary",children:"Update Location"})]}),D.jsx(nh,{title:"Account",children:D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[D.jsx(os,{onClick:U,variant:"secondary",children:"Log Out"}),p?D.jsxs("div",{style:{padding:20,borderRadius:b.radius.md,background:`${b.error}10`,border:`1px solid ${b.error}40`},children:[D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textPrimary,marginBottom:16,lineHeight:1.6,margin:"0 0 16px"},children:"Are you sure? This permanently deletes your account and all your scrobbles."}),D.jsxs("div",{style:{display:"flex",gap:10},children:[D.jsx("button",{onClick:()=>_(!1),style:{flex:1,padding:12,borderRadius:b.radius.md,border:`2px solid ${b.border}`,background:"transparent",color:b.textPrimary,fontFamily:b.fontBody,fontSize:14,fontWeight:600,cursor:"pointer"},children:"Cancel"}),D.jsx("button",{onClick:w,style:{flex:1,padding:12,borderRadius:b.radius.md,border:"none",background:b.error,color:"#fff",fontFamily:b.fontBody,fontSize:14,fontWeight:600,cursor:"pointer"},children:"Yes, Delete"})]})]}):D.jsx("button",{onClick:()=>_(!0),style:{width:"100%",padding:"14px 24px",borderRadius:b.radius.lg,border:`2px solid ${b.error}40`,background:"transparent",color:b.error,fontSize:15,fontWeight:600,fontFamily:b.fontBody,cursor:"pointer",transition:b.transition},onMouseEnter:N=>{N.currentTarget.style.background=`${b.error}10`,N.currentTarget.style.borderColor=b.error},onMouseLeave:N=>{N.currentTarget.style.background="transparent",N.currentTarget.style.borderColor=`${b.error}40`},children:"Delete Account"})]})})]})}function H2({userId:r,onNavigate:t}){const[i,s]=wt.useState([]),[l,c]=wt.useState([]),[d,h]=wt.useState([]),[m,p]=wt.useState(!0),[_,y]=wt.useState(null);if(!(r!=-1)){t("login");return}return wt.useEffect(()=>{(async()=>{try{const E=await Se.getProfile(r),U=Object.entries(E.profile).sort((w,N)=>w[1]>N[1]?-1:w[1]<N[1]?1:w[0].toLowerCase().localeCompare(N[0].toLowerCase()));let S=E.overlaps;for(const[w,N]of Object.entries(S))S[w]=Object.entries(N);const v=Object.entries(S);s(U),c(v)}catch(E){y(E.message)}finally{p(!1)}})()},[]),wt.useEffect(()=>{(async()=>{try{const E=await Se.getRecommendations(r);h(E)}catch(E){y(E.message)}})()},[]),m?D.jsx("div",{style:{textAlign:"center",padding:"40px"},children:D.jsx("h1",{style:{fontFamily:b.fontDisplay,color:b.textPrimary},children:"Loading..."})}):D.jsxs("div",{style:{maxWidth:800,margin:"0 auto",padding:"40px 24px"},children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:32,fontWeight:700,color:b.textPrimary,marginBottom:8},children:"Discover"}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:16,color:b.textSecondary,marginBottom:40,lineHeight:1.6},children:"Music picked for you based on your listening history."}),_&&D.jsx("div",{style:{padding:"12px 16px",borderRadius:b.radius.md,marginBottom:32,background:`${b.error}15`,border:`1px solid ${b.error}40`,color:b.error,fontSize:13,fontFamily:b.fontBody},children:_}),i.length>0&&D.jsxs("div",{style:{marginBottom:48},children:[D.jsx("h2",{style:{fontFamily:b.fontDisplay,fontSize:20,fontWeight:700,color:b.textPrimary,marginBottom:16},children:"Your Taste"}),D.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:i.slice(0,12).map(([M,E])=>D.jsxs("div",{style:{padding:"8px 16px",borderRadius:b.radius.pill,background:b.accentMuted,border:`1px solid ${b.accent}40`,fontFamily:b.fontBody,fontSize:13,fontWeight:600,color:b.accent},children:[M,D.jsxs("span",{style:{marginLeft:8,fontSize:11,color:b.textSecondary,fontWeight:400},children:[E.toFixed(1),"%"]})]},M))})]}),D.jsxs("div",{children:[D.jsx("h2",{style:{fontFamily:b.fontDisplay,fontSize:20,fontWeight:700,color:b.textPrimary,marginBottom:16},children:"Recommended for You"}),D.jsxs("div",{style:{padding:"48px 40px",borderRadius:b.radius.md,background:b.bgCard,textAlign:"center",border:`1px dashed ${b.border}`},children:[!d&&D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:16,color:b.textSecondary,lineHeight:1.6},children:"Song recommendations based on your taste (need to be implemented)."}),d&&D.jsx("ul",{style:{listStyleType:"none"},children:d.map(M=>D.jsx("li",{children:D.jsx(Sv,{base_song:M.base_song,recommended_song:M.recommended_song})},M.id))})]})]})]})}const fv=[{id:1,username:"Testman1",displayName:"TestMan1",genres:["shoegaze","dream pop","indie rock"],city:"Your City",priority:"nearby-taste"},{id:2,username:"Testman2",displayName:"TestMan2",genres:["jazz","soul","r&b"],city:"Your City",priority:"nearby"},{id:3,username:"Testman3",displayName:"TestMan3",genres:["electronic","synthwave","ambient"],city:null,priority:"taste"}],G2=[{id:4,username:"incoming_user",displayName:"Incoming User",genres:["post-rock","math rock"],city:null,priority:"taste"}],dv={"nearby-taste":"Nearby · Similar taste",nearby:"Nearby",taste:"Similar taste"};function Qh({user:r,size:t=48}){return D.jsx("div",{style:{width:t,height:t,borderRadius:"50%",flexShrink:0,background:b.accentMuted,border:`2px solid ${b.accent}40`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:b.fontDisplay,fontSize:t*.38,fontWeight:700,color:b.accent},children:(r.displayName||r.username)[0].toUpperCase()})}function V2({friends:r,incomingRequests:t,highlightedId:i,onSelectFriend:s,onAccept:l,onDecline:c}){return D.jsxs("div",{style:{width:220,flexShrink:0,position:"sticky",top:24,alignSelf:"flex-start"},children:[D.jsx("h2",{style:{fontFamily:b.fontDisplay,fontSize:16,fontWeight:700,color:b.textPrimary,margin:"0 0 14px"},children:"Friends"}),r.length===0&&t.length===0&&D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:13,color:b.textSecondary,lineHeight:1.6,margin:0},children:"No friends yet — send a friend request from the network list."}),r.map(d=>D.jsxs("button",{onClick:()=>s(d.id),style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"8px 10px",borderRadius:b.radius.md,border:"none",background:i===d.id?b.accentMuted:"transparent",cursor:"pointer",transition:b.transition,marginBottom:4,outline:i===d.id?`1px solid ${b.accent}40`:"none"},onMouseEnter:h=>{i!==d.id&&(h.currentTarget.style.background=b.bgElevated)},onMouseLeave:h=>{i!==d.id&&(h.currentTarget.style.background="transparent")},children:[D.jsx(Qh,{user:d,size:32}),D.jsxs("div",{style:{textAlign:"left",minWidth:0},children:[D.jsx("p",{style:{margin:0,fontFamily:b.fontBody,fontSize:13,fontWeight:700,color:i===d.id?b.accent:b.textPrimary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.displayName||d.username}),D.jsxs("p",{style:{margin:0,fontFamily:b.fontBody,fontSize:11,color:b.textSecondary},children:["@",d.username]})]})]},d.id)),t.length>0&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{style:{margin:"16px 0 10px",display:"flex",alignItems:"center",gap:6},children:[D.jsx("h3",{style:{fontFamily:b.fontDisplay,fontSize:13,fontWeight:700,color:b.textSecondary,margin:0},children:"Requests"}),D.jsx("span",{style:{padding:"1px 7px",borderRadius:b.radius.pill,background:b.accent,color:"#fff",fontFamily:b.fontBody,fontSize:11,fontWeight:700},children:t.length})]}),t.map(d=>D.jsxs("div",{style:{padding:"10px",borderRadius:b.radius.md,background:b.bgCard,border:`1px solid ${b.border}`,marginBottom:8},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[D.jsx(Qh,{user:d,size:28}),D.jsxs("div",{style:{minWidth:0},children:[D.jsx("p",{style:{margin:0,fontFamily:b.fontBody,fontSize:12,fontWeight:700,color:b.textPrimary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.displayName||d.username}),D.jsxs("p",{style:{margin:0,fontFamily:b.fontBody,fontSize:11,color:b.textSecondary},children:["@",d.username]})]})]}),D.jsxs("div",{style:{display:"flex",gap:6},children:[D.jsx("button",{onClick:()=>l(d),style:{flex:1,padding:"5px 0",borderRadius:b.radius.pill,border:"none",background:b.accent,color:"#fff",fontFamily:b.fontBody,fontSize:11,fontWeight:700,cursor:"pointer"},children:"Accept"}),D.jsx("button",{onClick:()=>c(d),style:{flex:1,padding:"5px 0",borderRadius:b.radius.pill,border:`1px solid ${b.border}`,background:"transparent",color:b.textSecondary,fontFamily:b.fontBody,fontSize:11,fontWeight:600,cursor:"pointer"},children:"Decline"})]})]},d.id))]})]})}function k2({userId:r}){const[t,i]=wt.useState(null),[s,l]=wt.useState({}),[c,d]=wt.useState(!0);return wt.useEffect(()=>{Se.getProfile(r).then(h=>{const m=Object.entries(h.profile).sort((p,_)=>_[1]-p[1]);i(m),l(h.overlaps)}).catch(()=>i([])).finally(()=>d(!1))},[r]),c?D.jsx("div",{style:{height:100,display:"flex",alignItems:"center",justifyContent:"center"},children:D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:13,color:b.textSecondary},children:"Loading genre map…"})}):!t||t.length===0?D.jsx("div",{style:{padding:"20px",borderRadius:b.radius.md,background:b.bgElevated,border:`1px dashed ${b.border}`,textAlign:"center",marginBottom:16},children:D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,lineHeight:1.6,margin:0},children:"This user's genre map isn't available."})}):D.jsx("div",{style:{marginBottom:16},children:D.jsx(ix,{profile:t,overlaps:s,title:"Their Genre Map",height:280})})}function j2({user:r,friendStatus:t,isExpanded:i,onToggleExpand:s,highlighted:l,onAddFriend:c,cardRef:d}){const h=t==="friends",m=t==="pending";wt.useEffect(()=>{l&&!i&&s()},[l]);const p={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:b.radius.pill,flexShrink:0,fontFamily:b.fontBody,fontSize:13,fontWeight:600,cursor:h||m?"default":"pointer",transition:b.transition,...h?{border:`2px solid ${b.success}40`,background:`${b.success}15`,color:b.success}:m?{border:`2px solid ${b.border}`,background:"transparent",color:b.textSecondary,opacity:.7}:{border:`2px solid ${b.border}`,background:"transparent",color:b.textSecondary}};return D.jsxs("div",{ref:d,style:{padding:"24px 28px",marginBottom:20,borderRadius:b.radius.md,background:b.bgCard,border:`1px solid ${l?b.accent:b.border}`,transition:b.transition,boxShadow:l?`0 0 0 2px ${b.accent}30`:"none"},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[D.jsx(Qh,{user:r,size:52}),D.jsxs("div",{style:{flex:1,minWidth:0},children:[D.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,marginBottom:6,flexWrap:"wrap"},children:[D.jsx("span",{style:{fontFamily:b.fontDisplay,fontSize:17,fontWeight:700,color:b.textPrimary},children:r.displayName||r.username}),D.jsxs("span",{style:{fontFamily:b.fontBody,fontSize:13,color:b.textSecondary},children:["@",r.username]}),dv[r.priority]&&D.jsx("span",{style:{padding:"2px 8px",borderRadius:b.radius.pill,background:b.accentMuted,border:`1px solid ${b.accent}30`,fontFamily:b.fontBody,fontSize:11,fontWeight:600,color:b.accent},children:dv[r.priority]})]}),D.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.genres.map(_=>D.jsx("span",{style:{padding:"3px 10px",borderRadius:b.radius.pill,background:b.bgElevated,border:`1px solid ${b.border}`,fontFamily:b.fontBody,fontSize:12,color:b.textSecondary},children:_},_))})]}),D.jsxs("div",{style:{display:"flex",gap:8,flexShrink:0},children:[D.jsx("button",{style:p,onClick:!h&&!m?()=>c(r):void 0,onMouseEnter:_=>{!h&&!m&&(_.currentTarget.style.borderColor=b.accent,_.currentTarget.style.color=b.accent)},onMouseLeave:_=>{!h&&!m&&(_.currentTarget.style.borderColor=b.border,_.currentTarget.style.color=b.textSecondary)},children:h?D.jsxs(D.Fragment,{children:[D.jsx(kS,{size:14})," Friends"]}):m?D.jsxs(D.Fragment,{children:[D.jsx(wS,{size:14})," Pending"]}):D.jsxs(D.Fragment,{children:[D.jsx(XS,{size:14})," Friend"]})}),D.jsx("button",{onClick:s,style:{padding:"8px 16px",borderRadius:b.radius.pill,border:`2px solid ${i?b.accent:b.border}`,background:"transparent",color:i?b.accent:b.textSecondary,fontFamily:b.fontBody,fontSize:13,fontWeight:600,cursor:"pointer",transition:b.transition},onMouseEnter:_=>{_.currentTarget.style.borderColor=b.accent,_.currentTarget.style.color=b.accent},onMouseLeave:_=>{i||(_.currentTarget.style.borderColor=b.border,_.currentTarget.style.color=b.textSecondary)},children:i?"Close":"View"})]})]}),i&&D.jsxs("div",{style:{marginTop:20,paddingTop:20,borderTop:`1px solid ${b.border}`},children:[D.jsx(k2,{userId:r.id}),D.jsxs("h3",{style:{fontFamily:b.fontDisplay,fontSize:15,fontWeight:700,color:b.textPrimary,margin:"0 0 12px"},children:["Shared taste with ",r.displayName||r.username]}),D.jsx("div",{style:{padding:"20px",borderRadius:b.radius.md,background:b.bgElevated,border:`1px dashed ${b.border}`,textAlign:"center",marginBottom:16},children:D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,lineHeight:1.6,margin:0},children:"Shared taste profile coming soon — your genre overlap will appear here."})}),h?D.jsx($h,{}):D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:13,color:b.textSecondary,margin:0},children:["Friend ",r.displayName||r.username," to connect on Instagram."]})]})]})}function X2({about:r}){return r?r.city&&r.city!=="Unknown"?D.jsxs("div",{style:{padding:"28px 32px",marginBottom:32,borderRadius:b.radius.md,background:b.bgCard,border:`1px solid ${b.border}`},children:[D.jsxs("h2",{style:{fontFamily:b.fontDisplay,fontSize:20,fontWeight:700,color:b.textPrimary,margin:"0 0 4px"},children:["Music in ",r.city]}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,margin:"0 0 20px"},children:r.country}),D.jsxs("div",{style:{height:180,borderRadius:b.radius.md,background:b.bgElevated,border:`1px dashed ${b.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8},children:[D.jsx("p",{style:{fontFamily:b.fontDisplay,fontSize:16,fontWeight:700,color:b.textPrimary,margin:0},children:"Coming soon"}),D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:13,color:b.textSecondary,margin:0},children:["Collective genre map for ",r.city," will appear here."]})]})]}):D.jsxs("div",{style:{padding:"28px 32px",marginBottom:32,borderRadius:b.radius.md,background:b.bgCard,border:`1px solid ${b.border}`},children:[D.jsx("h2",{style:{fontFamily:b.fontDisplay,fontSize:20,fontWeight:700,color:b.textPrimary,margin:"0 0 8px"},children:"Music in Your City"}),D.jsxs("p",{style:{fontFamily:b.fontBody,fontSize:14,color:b.textSecondary,lineHeight:1.6,margin:0},children:["Share your location in"," ",D.jsx("span",{style:{color:b.accent,fontWeight:600},children:"Profile → Location"})," ","to see what your city is listening to."]})]}):null}function W2({userId:r,onNavigate:t}){const i=r!=-1,[s,l]=wt.useState(null),[c,d]=wt.useState([]),[h,m]=wt.useState(G2),[p,_]=wt.useState(new Set),[y,g]=wt.useState(null),[M,E]=wt.useState(null),U=wt.useRef({});if(wt.useEffect(()=>{if(!i){t("login");return}Se.getAbout(r).then(l).catch(()=>{})},[i]),!i)return null;const S=A=>c.some(L=>L.id===A)?"friends":p.has(A)?"pending":null,v=A=>{_(L=>new Set([...L,A.id]))},w=A=>{d(L=>[...L,A]),m(L=>L.filter(dt=>dt.id!==A.id))},N=A=>{m(L=>L.filter(dt=>dt.id!==A.id))},O=A=>{g(A),E(A),setTimeout(()=>{const L=U.current[A];L&&L.scrollIntoView({behavior:"smooth",block:"start"})},50)},V=A=>{E(L=>L===A?null:A),M!==A&&g(null)},z=[...c.filter(A=>!fv.some(L=>L.id===A.id)),...fv],I=y?[z.find(A=>A.id===y),...z.filter(A=>A.id!==y)].filter(Boolean):z;return D.jsxs("div",{style:{maxWidth:1080,margin:"0 auto",padding:"40px 24px",display:"flex",gap:32,alignItems:"flex-start"},children:[D.jsx(V2,{friends:c,incomingRequests:h,highlightedId:y,onSelectFriend:O,onAccept:w,onDecline:N}),D.jsxs("div",{style:{flex:1,minWidth:0},children:[D.jsx("h1",{style:{fontFamily:b.fontDisplay,fontSize:32,fontWeight:700,color:b.textPrimary,marginBottom:8},children:"Your Network"}),D.jsx("p",{style:{fontFamily:b.fontBody,fontSize:16,color:b.textSecondary,marginBottom:32,lineHeight:1.6},children:"Listeners near you and people who share your taste."}),D.jsx(X2,{about:s}),I.map(A=>D.jsx(j2,{user:A,friendStatus:S(A.id),isExpanded:M===A.id,onToggleExpand:()=>V(A.id),highlighted:y===A.id,onAddFriend:v,cardRef:L=>{U.current[A.id]=L}},A.id))]})]})}function q2(){const[r,t]=wt.useState("login"),[i,s]=wt.useState(-1),[l,c]=wt.useState(!0);wt.useEffect(()=>{(async()=>{try{const p=await Se.checkSession();s(p.user_id),t("home")}catch{s(-1)}finally{c(!1)}})()},[]);const d=m=>s(m),h=()=>s(-1);return D.jsxs("div",{style:{minHeight:"100vh",background:b.bg},children:[D.jsx(qS,{currentPage:r,onNavigate:t,userId:i}),D.jsxs("main",{style:{paddingBottom:60},children:[l&&D.jsx(D.Fragment,{children:D.jsx("h1",{children:"Loading..."})}),!l&&D.jsxs(D.Fragment,{children:[r==="login"&&D.jsx(YS,{onNavigate:t,onLogin:d,userId:i}),r==="signup"&&D.jsx($S,{onNavigate:t,onLogin:d,userId:i}),r==="home"&&D.jsx(z2,{onNavigate:t,userId:i}),r==="discover"&&D.jsx(H2,{onNavigate:t,userId:i}),r==="network"&&D.jsx(W2,{onNavigate:t,userId:i}),r==="profile"&&D.jsx(I2,{onNavigate:t,onLogout:h,userId:i})]})]})]})}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();const Y2=_S.createRoot(document.getElementById("root"));Y2.render(D.jsx(wt.StrictMode,{children:D.jsx(q2,{})}));
