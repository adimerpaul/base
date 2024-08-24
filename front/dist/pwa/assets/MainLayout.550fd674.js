import{c as U,a as c,h as $,d as pe,e as He,i as _e,f as M,r as V,w as p,o as Ce,g as rt,j as xe,l as qe,k as ot,m as ut,n as Y,p as nt,q as it,s as ee,t as de,v as ze,x as ce,y as we,z as fe,A as st,B as dt,C as ct,E as ft,F as vt,G as mt,H as ht,I as bt,J as gt,K as Oe,L as R,M as Ve,O as yt,_ as wt,P as pt,Q,R as D,S as d,T as i,U as ve,V as Qe,W as me,X as F,Y as N,Z as he,$ as _t,a0 as Ct,a1 as xt,a2 as qt,a3 as K,a4 as Te}from"./index.3ffa4322.js";import{b as te,Q as kt,a as De,c as W,d as O,e as P,f as be}from"./format.84e7b79b.js";import{Q as Ie,a as Me,b as Bt}from"./QPageContainer.24a5a845.js";import{Q as St}from"./QImg.988940ab.js";import{c as Lt}from"./position-engine.cd0c59be.js";var $t=U({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const n=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>$("div",{class:n.value},pe(r.default))}});const zt=["top","middle","bottom"];var Ot=U({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>zt.includes(e)}},setup(e,{slots:r}){const n=c(()=>e.align!==void 0?{verticalAlign:e.align}:null),_=c(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>$("div",{class:_.value,style:n.value,role:"status","aria-label":e.label},He(r.default,e.label!==void 0?[e.label]:[]))}}),Vt=U({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const n=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>$("div",{class:n.value,role:"toolbar"},pe(r.default))}}),Ae=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:n}){const{proxy:{$q:_}}=xe(),t=_e(qe,M);if(t===M)return console.error("QHeader needs to be child of QLayout"),M;const a=V(parseInt(e.heightHint,10)),u=V(!0),s=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||_.platform.is.ios&&t.isContainer.value===!0),b=c(()=>{if(e.modelValue!==!0)return 0;if(s.value===!0)return u.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),f=c(()=>e.modelValue!==!0||s.value===!0&&u.value!==!0),o=c(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),B=c(()=>"q-header q-layout__section--marginal "+(s.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(f.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=c(()=>{const v=t.rows.value.top,L={};return v[0]==="l"&&t.left.space===!0&&(L[_.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(L[_.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function y(v,L){t.update("header",v,L)}function g(v,L){v.value!==L&&(v.value=L)}function x({height:v}){g(a,v),y("size",v)}function C(v){o.value===!0&&g(u,!0),n("focusin",v)}p(()=>e.modelValue,v=>{y("space",v),g(u,!0),t.animate()}),p(b,v=>{y("offset",v)}),p(()=>e.reveal,v=>{v===!1&&g(u,e.modelValue)}),p(u,v=>{t.animate(),n("reveal",v)}),p(t.scroll,v=>{e.reveal===!0&&g(u,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&y("size",a.value),y("space",e.modelValue),y("offset",b.value),Ce(()=>{t.instances.header===w&&(t.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const v=rt(r.default,[]);return e.elevated===!0&&v.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push($(Ie,{debounce:0,onResize:x})),$("header",{class:B.value,style:q.value,onFocusin:C},v)}}}),Qt=U({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:n}){const{proxy:{$q:_}}=xe(),t=_e(qe,M);if(t===M)return console.error("QFooter needs to be child of QLayout"),M;const a=V(parseInt(e.heightHint,10)),u=V(!0),s=V(ot.value===!0||t.isContainer.value===!0?0:window.innerHeight),b=c(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||_.platform.is.ios&&t.isContainer.value===!0),f=c(()=>t.isContainer.value===!0?t.containerHeight.value:s.value),o=c(()=>{if(e.modelValue!==!0)return 0;if(b.value===!0)return u.value===!0?a.value:0;const m=t.scroll.value.position+f.value+a.value-t.height.value;return m>0?m:0}),B=c(()=>e.modelValue!==!0||b.value===!0&&u.value!==!0),q=c(()=>e.modelValue===!0&&B.value===!0&&e.reveal===!0),y=c(()=>"q-footer q-layout__section--marginal "+(b.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(B.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(b.value!==!0?" hidden":""):"")),g=c(()=>{const m=t.rows.value.bottom,k={};return m[0]==="l"&&t.left.space===!0&&(k[_.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),m[2]==="r"&&t.right.space===!0&&(k[_.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function x(m,k){t.update("footer",m,k)}function C(m,k){m.value!==k&&(m.value=k)}function w({height:m}){C(a,m),x("size",m)}function v(){if(e.reveal!==!0)return;const{direction:m,position:k,inflectionPoint:ae}=t.scroll.value;C(u,m==="up"||k-ae<100||t.height.value-f.value-k-a.value<300)}function L(m){q.value===!0&&C(u,!0),n("focusin",m)}p(()=>e.modelValue,m=>{x("space",m),C(u,!0),t.animate()}),p(o,m=>{x("offset",m)}),p(()=>e.reveal,m=>{m===!1&&C(u,e.modelValue)}),p(u,m=>{t.animate(),n("reveal",m)}),p([a,t.scroll,t.height],v),p(()=>_.screen.height,m=>{t.isContainer.value!==!0&&C(s,m)});const X={};return t.instances.footer=X,e.modelValue===!0&&x("size",a.value),x("space",e.modelValue),x("offset",o.value),Ce(()=>{t.instances.footer===X&&(t.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const m=He(r.default,[$(Ie,{debounce:0,onResize:w})]);return e.elevated===!0&&m.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),$("footer",{class:y.value,style:g.value,onFocusin:L},m)}}});const ke={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Tt=Object.keys(ke);ke.all=!0;function Ee(e){const r={};for(const n of Tt)e[n]===!0&&(r[n]=!0);return Object.keys(r).length===0?ke:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const Dt=["INPUT","TEXTAREA"];function Pe(e,r){return r.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof r.handler=="function"&&Dt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(r.uid)===-1)}function ge(e,r,n){const _=we(e);let t,a=_.left-r.event.x,u=_.top-r.event.y,s=Math.abs(a),b=Math.abs(u);const f=r.direction;f.horizontal===!0&&f.vertical!==!0?t=a<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?t=u<0?"up":"down":f.up===!0&&u<0?(t="up",s>b&&(f.left===!0&&a<0?t="left":f.right===!0&&a>0&&(t="right"))):f.down===!0&&u>0?(t="down",s>b&&(f.left===!0&&a<0?t="left":f.right===!0&&a>0&&(t="right"))):f.left===!0&&a<0?(t="left",s<b&&(f.up===!0&&u<0?t="up":f.down===!0&&u>0&&(t="down"))):f.right===!0&&a>0&&(t="right",s<b&&(f.up===!0&&u<0?t="up":f.down===!0&&u>0&&(t="down")));let o=!1;if(t===void 0&&n===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,o=!0,t==="left"||t==="right"?(_.left-=a,s=0,a=0):(_.top-=u,b=0,u=0)}return{synthetic:o,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:_,direction:t,isFirst:r.event.isFirst,isFinal:n===!0,duration:Date.now()-r.event.time,distance:{x:s,y:b},offset:{x:a,y:u},delta:{x:_.left-r.event.lastX,y:_.top-r.event.lastY}}}}let Mt=0;var ye=ut({name:"touch-pan",beforeMount(e,{value:r,modifiers:n}){if(n.mouse!==!0&&Y.has.touch!==!0)return;function _(a,u){n.mouse===!0&&u===!0?st(a):(n.stop===!0&&ce(a),n.prevent===!0&&ze(a))}const t={uid:"qvtp_"+Mt++,handler:r,modifiers:n,direction:Ee(n),noop:nt,mouseStart(a){Pe(a,t)&&it(a)&&(ee(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Pe(a,t)){const u=a.target;ee(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(Y.is.firefox===!0&&de(e,!0),t.lastEvt=a,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const f=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ze(f),a.cancelBubble===!0&&ce(f),Object.assign(f,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:f}}ce(a)}const{left:s,top:b}=we(a);t.event={x:s,y:b,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:b}},move(a){if(t.event===void 0)return;const u=we(a),s=u.left-t.event.x,b=u.top-t.event.y;if(s===0&&b===0)return;t.lastEvt=a;const f=t.event.mouse===!0,o=()=>{_(a,f);let y;n.preserveCursor!==!0&&n.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Lt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),f===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{x(),g()},50):x()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&_(a,t.event.mouse);const{payload:y,synthetic:g}=ge(a,t,!1);y!==void 0&&(t.handler(y)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&o(),t.event.lastX=y.position.left,t.event.lastY=y.position.top,t.event.lastDir=g===!0?void 0:y.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||f===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){o(),t.event.detected=!0,t.move(a);return}const B=Math.abs(s),q=Math.abs(b);B!==q&&(t.direction.horizontal===!0&&B>q||t.direction.vertical===!0&&B<q||t.direction.up===!0&&B<q&&b<0||t.direction.down===!0&&B<q&&b>0||t.direction.left===!0&&B>q&&s<0||t.direction.right===!0&&B>q&&s>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(fe(t,"temp"),Y.is.firefox===!0&&de(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ge(a===void 0?t.lastEvt:a,t).payload);const{payload:s}=ge(a===void 0?t.lastEvt:a,t,!0),b=()=>{t.handler(s)};t.styleCleanup!==void 0?t.styleCleanup(b):b()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ee(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}Y.has.touch===!0&&ee(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const n=e.__qtouchpan;n!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&n.end(),n.handler=r.value),n.direction=Ee(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),fe(r,"main"),fe(r,"temp"),Y.is.firefox===!0&&de(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});const Fe=150;var At=U({name:"QDrawer",inheritAttrs:!1,props:{...dt,...ct,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ft,"onLayout","miniState"],setup(e,{slots:r,emit:n,attrs:_}){const t=xe(),{proxy:{$q:a}}=t,u=vt(e,a),{preventBodyScroll:s}=yt(),{registerTimeout:b,removeTimeout:f}=mt(),o=_e(qe,M);if(o===M)return console.error("QDrawer needs to be child of QLayout"),M;let B,q=null,y;const g=V(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),x=c(()=>e.mini===!0&&g.value!==!0),C=c(()=>x.value===!0?e.miniWidth:e.width),w=V(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),v=c(()=>e.persistent!==!0&&(g.value===!0||We.value===!0));function L(l,h){if(ae(),l!==!1&&o.animate(),z(0),g.value===!0){const S=o.instances[J.value];S!==void 0&&S.belowBreakpoint===!0&&S.hide(!1),A(1),o.isContainer.value!==!0&&s(!0)}else A(0),l!==!1&&ne(!1);b(()=>{l!==!1&&ne(!0),h!==!0&&n("show",l)},Fe)}function X(l,h){Ne(),l!==!1&&o.animate(),A(0),z(H.value*C.value),ie(),h!==!0?b(()=>{n("hide",l)},Fe):f()}const{show:m,hide:k}=ht({showing:w,hideOnRouteChange:v,handleShow:L,handleHide:X}),{addToHistory:ae,removeFromHistory:Ne}=bt(w,k,v),G={belowBreakpoint:g,hide:k},T=c(()=>e.side==="right"),H=c(()=>(a.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),Be=V(0),I=V(!1),le=V(!1),Se=V(C.value*H.value),J=c(()=>T.value===!0?"left":"right"),re=c(()=>w.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),oe=c(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(T.value?"R":"L")!==-1||a.platform.is.ios===!0&&o.isContainer.value===!0),j=c(()=>e.overlay===!1&&w.value===!0&&g.value===!1),We=c(()=>e.overlay===!0&&w.value===!0&&g.value===!1),Re=c(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&I.value===!1?" hidden":"")),Ue=c(()=>({backgroundColor:`rgba(0,0,0,${Be.value*.4})`})),Le=c(()=>T.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Xe=c(()=>T.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),je=c(()=>{const l={};return o.header.space===!0&&Le.value===!1&&(oe.value===!0?l.top=`${o.header.offset}px`:o.header.space===!0&&(l.top=`${o.header.size}px`)),o.footer.space===!0&&Xe.value===!1&&(oe.value===!0?l.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(l.bottom=`${o.footer.size}px`)),l}),Ye=c(()=>{const l={width:`${C.value}px`,transform:`translateX(${Se.value}px)`};return g.value===!0?l:Object.assign(l,je.value)}),Ke=c(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=c(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(oe.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),Je=c(()=>{const l=a.lang.rtl===!0?e.side:J.value;return[[ye,at,void 0,{[l]:!0,mouse:!0}]]}),Ze=c(()=>{const l=a.lang.rtl===!0?J.value:e.side;return[[ye,$e,void 0,{[l]:!0,mouse:!0}]]}),et=c(()=>{const l=a.lang.rtl===!0?J.value:e.side;return[[ye,$e,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){lt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}p(g,l=>{l===!0?(B=w.value,w.value===!0&&k(!1)):e.overlay===!1&&e.behavior!=="mobile"&&B!==!1&&(w.value===!0?(z(0),A(0),ie()):m(!1))}),p(()=>e.side,(l,h)=>{o.instances[h]===G&&(o.instances[h]=void 0,o[h].space=!1,o[h].offset=0),o.instances[l]=G,o[l].size=C.value,o[l].space=j.value,o[l].offset=re.value}),p(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),p(()=>e.behavior+e.breakpoint,ue),p(o.isContainer,l=>{w.value===!0&&s(l!==!0),l===!0&&ue()}),p(o.scrollbarWidth,()=>{z(w.value===!0?0:void 0)}),p(re,l=>{E("offset",l)}),p(j,l=>{n("onLayout",l),E("space",l)}),p(T,()=>{z()}),p(C,l=>{z(),se(e.miniToOverlay,l)}),p(()=>e.miniToOverlay,l=>{se(l,C.value)}),p(()=>a.lang.rtl,()=>{z()}),p(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(tt(),o.animate())}),p(x,l=>{n("miniState",l)});function z(l){l===void 0?Oe(()=>{l=w.value===!0?0:C.value,z(H.value*l)}):(o.isContainer.value===!0&&T.value===!0&&(g.value===!0||Math.abs(l)===C.value)&&(l+=H.value*o.scrollbarWidth.value),Se.value=l)}function A(l){Be.value=l}function ne(l){const h=l===!0?"remove":o.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function tt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,q=setTimeout(()=>{q=null,le.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(l){if(w.value!==!1)return;const h=C.value,S=te(l.distance.x,0,h);if(l.isFinal===!0){S>=Math.min(75,h)===!0?m():(o.animate(),A(0),z(H.value*h)),I.value=!1;return}z((a.lang.rtl===!0?T.value!==!0:T.value)?Math.max(h-S,0):Math.min(0,S-h)),A(te(S/h,0,1)),l.isFirst===!0&&(I.value=!0)}function $e(l){if(w.value!==!0)return;const h=C.value,S=l.direction===e.side,Z=(a.lang.rtl===!0?S!==!0:S)?te(l.distance.x,0,h):0;if(l.isFinal===!0){Math.abs(Z)<Math.min(75,h)===!0?(o.animate(),A(1),z(0)):k(),I.value=!1;return}z(H.value*Z),A(te(1-Z/h,0,1)),l.isFirst===!0&&(I.value=!0)}function ie(){s(!1),ne(!0)}function E(l,h){o.update(e.side,l,h)}function lt(l,h){l.value!==h&&(l.value=h)}function se(l,h){E("size",l===!0?e.miniWidth:h)}return o.instances[e.side]=G,se(e.miniToOverlay,C.value),E("space",j.value),E("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),gt(()=>{n("onLayout",j.value),n("miniState",x.value),B=e.showIfAbove===!0;const l=()=>{(w.value===!0?L:X)(!1,!0)};if(o.totalWidth.value!==0){Oe(l);return}y=p(o.totalWidth,()=>{y(),y=void 0,w.value===!1&&e.showIfAbove===!0&&g.value===!1?m(!1):l()})}),Ce(()=>{y!==void 0&&y(),q!==null&&(clearTimeout(q),q=null),w.value===!0&&ie(),o.instances[e.side]===G&&(o.instances[e.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const l=[];g.value===!0&&(e.noSwipeOpen===!1&&l.push(R($("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),l.push(Ve("div",{ref:"backdrop",class:Re.value,style:Ue.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>et.value)));const h=x.value===!0&&r.mini!==void 0,S=[$("div",{..._,key:""+h,class:[Ke.value,_.class]},h===!0?r.mini():pe(r.default))];return e.elevated===!0&&w.value===!0&&S.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Ve("aside",{ref:"content",class:Ge.value,style:Ye.value},S,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ze.value)),$("div",{class:"q-drawer-container"},l)}}});const Et={data(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Inicio",icon:"home",to:"/"},{title:"Movies",icon:"movie",to:"/movies"}]}},methods:{textCapitalize(e){if(!e)return"";const r=e.toLowerCase();return e.charAt(0).toUpperCase()+r.slice(1)},toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){this.$alert.dialog("\xBFEst\xE1 seguro que desea cerrar sesi\xF3n?").onOk(()=>{this.$axios.post("/logout").then(()=>{this.$store.isLogeed=!1,this.$store.user={},localStorage.removeItem("tokenPrestamos"),this.$router.push("/login")})})}},computed:{rutaActual(){return this.$route.path},title(){const e=this.$route.path;return e==="/"?"Inicio":e==="/users"?"Usuarios":e==="/clients"?"Clientes":e==="/companies"?"Empresas":e==="/boats"?"Botes":e==="/crews"?"Tripulantes":e==="/products"?"Productos":e==="/viajes"?"Viajes":"Inicio"}}},Pt={class:"text-primary text-bold"};function Ft(e,r,n,_,t,a){const u=pt("router-view");return Q(),D(Me,{view:"lHh Lpr lFf"},{default:d(()=>[i(Ae,{class:"bg-white text-black",bordered:""},{default:d(()=>[i(Vt,null,{default:d(()=>[i(ve,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a.toggleLeftDrawer},null,8,["onClick"]),i($t,null,{default:d(()=>[Qe("div",Pt,me(a.title),1)]),_:1}),Qe("div",null,[i(ve,{flat:"",dense:"",icon:"o_notifications","aria-label":"Notificaciones"},{default:d(()=>[i(Ot,{color:"primary","text-color":"white",floating:""},{default:d(()=>[F("3")]),_:1})]),_:1}),i(ve,{flat:"",dense:"",icon:"o_account_circle","aria-label":"Menu",label:a.textCapitalize(e.$store.user.name),"no-caps":"","icon-right":"arrow_drop_down"},{default:d(()=>[i(kt,null,{default:d(()=>[i(De,null,{default:d(()=>[R((Q(),D(W,{clickable:""},{default:d(()=>[i(O,{avatar:""},{default:d(()=>[i(N,{icon:"account_circle"})]),_:1}),i(O,null,{default:d(()=>[i(P,null,{default:d(()=>[F("Perfil")]),_:1})]),_:1})]),_:1})),[[K]]),R((Q(),D(W,{clickable:""},{default:d(()=>[i(O,{avatar:""},{default:d(()=>[i(N,{icon:"settings"})]),_:1}),i(O,null,{default:d(()=>[i(P,null,{default:d(()=>[F("Configuraci\xF3n")]),_:1})]),_:1})]),_:1})),[[K]]),R((Q(),D(W,{clickable:"",onClick:a.logout},{default:d(()=>[i(O,{avatar:""},{default:d(()=>[i(N,{icon:"logout"})]),_:1}),i(O,null,{default:d(()=>[i(P,null,{default:d(()=>[F("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[K]])]),_:1})]),_:1})]),_:1},8,["label"])])]),_:1})]),_:1}),i(At,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=s=>t.leftDrawerOpen=s),"show-if-above":"",width:220,class:"bg-primary text-white"},{default:d(()=>[i(Me,null,{default:d(()=>[i(Ae,null,{default:d(()=>[i(De,null,{default:d(()=>[i(P,{class:"q-pa-xs"},{default:d(()=>[i(W,{dense:""},{default:d(()=>[i(O,{avatar:""},{default:d(()=>[i(N,{class:"bg-white","text-color":"primary",size:"45px"},{default:d(()=>[i(St,{src:"/logo.png"})]),_:1})]),_:1}),i(O,null,{default:d(()=>[i(P,{class:"text-white text-bold"},{default:d(()=>{var s,b,f;return[((s=e.$store.user)==null?void 0:s.role)==="VENDEDOR"?(Q(),D(be,{key:0,dense:"",label:"Vendedor",color:"orange","text-color":"white",icon:"account_circle"})):he("",!0),((b=e.$store.user)==null?void 0:b.role)==="ADMIN"?(Q(),D(be,{key:1,dense:"",label:"Admin",color:"indigo","text-color":"white",icon:"account_circle"})):he("",!0),((f=e.$store.user)==null?void 0:f.role)==="SUPERADMIN"?(Q(),D(be,{key:2,dense:"",label:"Super admin",color:"purple","text-color":"white",icon:"account_circle"})):he("",!0)]}),_:1}),i(P,{caption:"",class:"text-white"},{default:d(()=>[F(me(e.$store.user.name),1)]),_:1})]),_:1})]),_:1})]),_:1}),i(_t,{dark:""}),(Q(!0),Ct(qt,null,xt(t.essentialLinks,s=>R((Q(),D(W,{clickable:"",dense:"",key:s.title,to:s.to,exact:"",class:Te(`text-white ${a.rutaActual==s.to?"bg-secondary":""}`)},{default:d(()=>[i(O,{avatar:""},{default:d(()=>[i(N,{"text-color":"white",icon:`${a.rutaActual==s.to?s.icon:"o_"+s.icon}`,size:`${a.rutaActual==s.to?"45px":"38px"}`},null,8,["icon","size"])]),_:2},1024),i(O,null,{default:d(()=>[i(P,{class:Te(`text-white ${a.rutaActual==s.to?"text-bold":""}`)},{default:d(()=>[F(me(s.title),1)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to","class"])),[[K]])),128))]),_:1})]),_:1}),i(Qt,null,{default:d(()=>[R((Q(),D(W,{clickable:"",dense:"",onClick:a.logout},{default:d(()=>[i(O,{avatar:""},{default:d(()=>[i(N,{"text-color":"red",icon:"logout",size:"38px"})]),_:1}),i(O,null,{default:d(()=>[i(P,{class:"text-red text-bold"},{default:d(()=>[F("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[K]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(Bt,null,{default:d(()=>[i(u)]),_:1})]),_:1})}var Xt=wt(Et,[["render",Ft]]);export{Xt as default};