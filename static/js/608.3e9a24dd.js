"use strict";(self["webpackChunkvue3_waimai"]=self["webpackChunkvue3_waimai"]||[]).push([[608],{3094:function(){},6585:function(){},7608:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var o=n(356),l=(n(4332),n(982)),i=(n(9754),n(2473)),r=n(9812),a=n(1882),c=n(2469),s=n(3219);const[u,d,m]=(0,a["do"])("contact-card"),f={tel:String,name:String,type:(0,c.SQ)("add"),addText:String,editable:c.J5};var v=(0,r.aZ)({name:u,props:f,emits:["click"],setup(t,{emit:e}){const n=n=>{t.editable&&e("click",n)},o=()=>"add"===t.type?t.addText||m("addContact"):[(0,r.Wm)("div",null,[`${m("name")}：${t.name}`]),(0,r.Wm)("div",null,[`${m("tel")}：${t.tel}`])];return()=>(0,r.Wm)(s.bL,{center:!0,icon:"edit"===t.type?"contact":"add-square",class:d([t.type]),border:!1,isLink:t.editable,titleClass:d("title"),onClick:n},{title:o})}});const g=(0,i.n)(v);n(1958),n(368),n(6742),n(3094);var p=n(5893);const b=t=>((0,r.dD)("data-v-2e437f28"),t=t(),(0,r.Cn)(),t),h={class:"create-order"},y={class:"content"},B={class:"pay-wrap"},k={class:"price"},W=b((()=>(0,r._)("span",null,"金额",-1)));function C(t,e,n,i,a,c){const s=(0,r.up)("Header"),u=g,d=l.Zb,m=o.zx;return(0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(s,{title:"生成订单"}),(0,r.Wm)(u,{type:"edit",tel:t.tel,name:t.name,onClick:i.onEdit},null,8,["tel","name","onClick"]),(0,r._)("div",y,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.store.state.orderList,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r.Wm)(d,{num:t.num,price:t.price,title:t.title,thumb:t.pic},null,8,["num","price","title","thumb"])])))),128))]),(0,r._)("div",B,[(0,r._)("div",k,[W,(0,r._)("span",null,"￥"+(0,p.zw)(t.totalPrice),1)]),(0,r.Wm)(m,{type:"primary",class:"pay-btn",block:"",color:"#ffc400",onClick:i.handleCreateOrder},{default:(0,r.w5)((()=>[(0,r.Uk)("生成订单")])),_:1},8,["onClick"])])])}n(7658);var w=n(521),S=n(605),x=n(2357),P=n(4391),z=n(3367),O=n(4220),L=n(3458),Z=n(8336),T=n(1417),D=n(5887),q=n(7146),E=n(1410),J=n(7861);const[_,$,H]=(0,a["do"])("dialog"),F=(0,P.l7)({},D.W,{title:String,theme:String,width:c.Or,message:[String,Function],callback:Function,allowHtml:Boolean,className:c.Vg,transition:(0,c.SQ)("van-dialog-bounce"),messageAlign:String,closeOnPopstate:c.J5,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:c.J5,closeOnClickOverlay:Boolean}),Q=[...D.m,"transition","closeOnPopstate"];var j=(0,r.aZ)({name:_,props:F,emits:["confirm","cancel","keydown","update:show"],setup(t,{emit:e,slots:n}){const l=(0,w.iH)(),i=(0,w.qj)({confirm:!1,cancel:!1}),a=t=>e("update:show",t),c=e=>{var n;a(!1),null==(n=t.callback)||n.call(t,e)},s=n=>()=>{t.show&&(e(n),t.beforeClose?(i[n]=!0,(0,L.I)(t.beforeClose,{args:[n],done(){c(n),i[n]=!1},canceled(){i[n]=!1}})):c(n))},u=s("cancel"),d=s("confirm"),m=(0,O.D2)((n=>{var o,i;if(n.target!==(null==(i=null==(o=l.value)?void 0:o.popupRef)?void 0:i.value))return;const r={Enter:t.showConfirmButton?d:P.ZT,Escape:t.showCancelButton?u:P.ZT};r[n.key](),e("keydown",n)}),["enter","esc"]),f=()=>{const e=n.title?n.title():t.title;if(e)return(0,r.Wm)("div",{class:$("header",{isolated:!t.message&&!n.default})},[e])},v=e=>{const{message:n,allowHtml:o,messageAlign:l}=t,i=$("message",{"has-title":e,[l]:l}),a=(0,P.mf)(n)?n():n;return o&&"string"===typeof a?(0,r.Wm)("div",{class:i,innerHTML:a},null):(0,r.Wm)("div",{class:i},[a])},g=()=>{if(n.default)return(0,r.Wm)("div",{class:$("content")},[n.default()]);const{title:e,message:o,allowHtml:l}=t;if(o){const t=!(!e&&!n.title);return(0,r.Wm)("div",{key:l?1:0,class:$("content",{isolated:!t})},[v(t)])}},p=()=>(0,r.Wm)("div",{class:[Z.k7,$("footer")]},[t.showCancelButton&&(0,r.Wm)(o.zx,{size:"large",text:t.cancelButtonText||H("cancel"),class:$("cancel"),style:{color:t.cancelButtonColor},loading:i.cancel,disabled:t.cancelButtonDisabled,onClick:u},null),t.showConfirmButton&&(0,r.Wm)(o.zx,{size:"large",text:t.confirmButtonText||H("confirm"),class:[$("confirm"),{[Z.a8]:t.showCancelButton}],style:{color:t.confirmButtonColor},loading:i.confirm,disabled:t.confirmButtonDisabled,onClick:d},null)]),b=()=>(0,r.Wm)(E.ol,{class:$("footer")},{default:()=>[t.showCancelButton&&(0,r.Wm)(J.ZL,{type:"warning",text:t.cancelButtonText||H("cancel"),class:$("cancel"),color:t.cancelButtonColor,loading:i.cancel,disabled:t.cancelButtonDisabled,onClick:u},null),t.showConfirmButton&&(0,r.Wm)(J.ZL,{type:"danger",text:t.confirmButtonText||H("confirm"),class:$("confirm"),color:t.confirmButtonColor,loading:i.confirm,disabled:t.confirmButtonDisabled,onClick:d},null)]}),h=()=>n.footer?n.footer():"round-button"===t.theme?b():p();return()=>{const{width:e,title:n,theme:o,message:i,className:c}=t;return(0,r.Wm)(q.GI,(0,r.dG)({ref:l,role:"dialog",class:[$([o]),c],style:{width:(0,T.Nn)(e)},tabindex:0,"aria-labelledby":n||i,onKeydown:m,"onUpdate:show":a},(0,P.ei)(t,Q)),{default:()=>[f(),g(),h()]})}}});let I;const N={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let A=(0,P.l7)({},N);function X(){const t={setup(){const{state:t,toggle:e}=(0,z.o)();return()=>(0,r.Wm)(j,(0,r.dG)(t,{"onUpdate:show":e}),null)}};({instance:I}=(0,z.H)(t))}function Y(t){return P._f?new Promise(((e,n)=>{I||X(),I.open((0,P.l7)({},A,t,{callback:t=>{("confirm"===t?e:n)(t)}}))})):Promise.resolve()}var V=n(644),G={components:{Header:S.Z},setup(t){const e=(0,x.oR)(),n=(0,V.tv)(),o=(0,V.yj)(),l=(0,w.qj)({tel:13267878342,name:"李春满",totalPrice:0}),i=()=>{let t=0;e.state.orderList.forEach((e=>{t+=e.num*e.price})),l.totalPrice=t},a=()=>{e.state.userAddress.forEach((t=>{t.isDefault&&(l.tel=t.tel,l.name=t.name)}))},c=()=>{Y({title:"提示",message:"您的订单已完成！"}).then((()=>{n.push("/order");let t=e.state.cartList.filter((t=>!o.query.list.includes(t.id+"")));e.commit("delete",t),e.commit("orderListEnd")}))};(0,r.bv)((()=>{i(),a()}));const s=()=>{n.push("/address")};return{...(0,w.BK)(l),onEdit:s,store:e,handleCreateOrder:c}}},K=n(8998);const R=(0,K.Z)(G,[["render",C],["__scopeId","data-v-2e437f28"]]);var U=R},605:function(t,e,n){n.d(e,{Z:function(){return v}});var o=n(4874),l=(n(8580),n(9812)),i=n(5893);const r={class:"header"};function a(t,e,n,a,c,s){const u=o.JO;return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(u,{name:"arrow-left",class:"icon",onClick:a.toBack},null,8,["onClick"]),(0,l._)("div",null,(0,i.zw)(n.title),1),n.edit?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"edit",onClick:e[0]||(e[0]=(...t)=>a.EditClick&&a.EditClick(...t))},(0,i.zw)(a.store.state.edit?"编辑":"完成"),1)):(0,l.kq)("",!0)])}var c=n(9226),s=n(644),u=n(2357),d={props:["title","edit"],setup(){const t=(0,u.oR)();let e=(0,s.tv)();const n=()=>{e.back()},o=()=>{t.state.cartList.length?(t.commit("isShowEdit"),t.commit("edit")):(0,c.CF)("空空如也")};return{toBack:n,EditClick:o,store:t}}},m=n(8998);const f=(0,m.Z)(d,[["render",a],["__scopeId","data-v-67499616"]]);var v=f},7861:function(t,e,n){n.d(e,{ZL:function(){return p}});var o=n(2473),l=n(9812),i=n(1882),r=n(4391),a=n(8027),c=n(8586),s=n(4779),u=n(3206),d=n(356);const[m,f]=(0,i["do"])("action-bar-button"),v=(0,r.l7)({},u.g2,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var g=(0,l.aZ)({name:m,props:v,setup(t,{slots:e}){const n=(0,u.yj)(),{parent:o,index:i}=(0,c.NB)(a.FO),r=(0,l.Fl)((()=>{if(o){const t=o.children[i.value-1];return!(t&&"isButton"in t)}})),m=(0,l.Fl)((()=>{if(o){const t=o.children[i.value+1];return!(t&&"isButton"in t)}}));return(0,s.F)({isButton:!0}),()=>{const{type:o,icon:i,text:a,color:c,loading:s,disabled:u}=t;return(0,l.Wm)(d.zx,{class:f([o,{last:m.value,first:r.value}]),size:"large",type:o,icon:i,color:c,loading:s,disabled:u,onClick:n},{default:()=>[e.default?e.default():a]})}}});const p=(0,o.n)(g)},8027:function(t,e,n){n.d(e,{FO:function(){return d},ZP:function(){return f}});var o=n(9812),l=n(521),i=n(1882),r=n(2469),a=n(8586),c=n(7034);const[s,u]=(0,i["do"])("action-bar"),d=Symbol(s),m={placeholder:Boolean,safeAreaInsetBottom:r.J5};var f=(0,o.aZ)({name:s,props:m,setup(t,{slots:e}){const n=(0,l.iH)(),i=(0,c.J)(n,u),{linkChildren:r}=(0,a.$E)(d);r();const s=()=>{var l;return(0,o.Wm)("div",{ref:n,class:[u(),{"van-safe-area-bottom":t.safeAreaInsetBottom}]},[null==(l=e.default)?void 0:l.call(e)])};return()=>t.placeholder?i(s):s()}})},1410:function(t,e,n){n.d(e,{ol:function(){return i}});var o=n(2473),l=n(8027);const i=(0,o.n)(l.ZP)},356:function(t,e,n){n.d(e,{zx:function(){return b}});var o=n(2473),l=n(9812),i=n(1882),r=n(4391),a=n(2469),c=n(2792),s=n(8336),u=n(3206),d=n(4874),m=n(8807);const[f,v]=(0,i["do"])("button"),g=(0,r.l7)({},u.g2,{tag:(0,a.SQ)("button"),text:String,icon:String,type:(0,a.SQ)("default"),size:(0,a.SQ)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,a.SQ)("button"),loadingSize:a.Or,loadingText:String,loadingType:String,iconPosition:(0,a.SQ)("left")});var p=(0,l.aZ)({name:f,props:g,emits:["click"],setup(t,{emit:e,slots:n}){const o=(0,u.yj)(),i=()=>n.loading?n.loading():(0,l.Wm)(m.gb,{size:t.loadingSize,type:t.loadingType,class:v("loading")},null),r=()=>t.loading?i():n.icon?(0,l.Wm)("div",{class:v("icon")},[n.icon()]):t.icon?(0,l.Wm)(d.JO,{name:t.icon,class:v("icon"),classPrefix:t.iconPrefix},null):void 0,a=()=>{let e;if(e=t.loading?t.loadingText:n.default?n.default():t.text,e)return(0,l.Wm)("span",{class:v("text")},[e])},f=()=>{const{color:e,plain:n}=t;if(e){const t={color:n?e:"white"};return n||(t.background=e),e.includes("gradient")?t.border=0:t.borderColor=e,t}},g=n=>{t.loading?(0,c.PF)(n):t.disabled||(e("click",n),o())};return()=>{const{tag:e,type:n,size:o,block:i,round:c,plain:u,square:d,loading:m,disabled:p,hairline:b,nativeType:h,iconPosition:y}=t,B=[v([n,o,{plain:u,block:i,round:c,square:d,loading:m,disabled:p,hairline:b}]),{[s._K]:b}];return(0,l.Wm)(e,{type:h,class:B,style:f(),disabled:p,onClick:g},{default:()=>[(0,l.Wm)("div",{class:v("content")},["left"===y&&r(),a(),"right"===y&&r()])]})}}});const b=(0,o.n)(p)},4332:function(t,e,n){n(1958),n(368),n(6742),n(2939),n(1452)},982:function(t,e,n){n.d(e,{Zb:function(){return k}});var o=n(2473),l=n(9812),i=n(1882),r=n(2469),a=n(4391),c=n(206),s=n(521),u=n(1417),d=n(4874);const[m,f]=(0,i["do"])("image"),v={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:r.Or,height:r.Or,radius:r.Or,lazyLoad:Boolean,iconSize:r.Or,showError:r.J5,errorIcon:(0,r.SQ)("photo-fail"),iconPrefix:String,showLoading:r.J5,loadingIcon:(0,r.SQ)("photo")};var g=(0,l.aZ)({name:m,props:v,emits:["load","error"],setup(t,{emit:e,slots:n}){const o=(0,s.iH)(!1),i=(0,s.iH)(!0),r=(0,s.iH)(),{$Lazyload:c}=(0,l.FN)().proxy,m=(0,l.Fl)((()=>{const e={width:(0,u.Nn)(t.width),height:(0,u.Nn)(t.height)};return(0,a.Xq)(t.radius)&&(e.overflow="hidden",e.borderRadius=(0,u.Nn)(t.radius)),e}));(0,l.YP)((()=>t.src),(()=>{o.value=!1,i.value=!0}));const v=t=>{i.value&&(i.value=!1,e("load",t))},g=()=>{const t=new Event("load");Object.defineProperty(t,"target",{value:r.value,enumerable:!0}),v(t)},p=t=>{o.value=!0,i.value=!1,e("error",t)},b=(e,n,o)=>o?o():(0,l.Wm)(d.JO,{name:e,size:t.iconSize,class:n,classPrefix:t.iconPrefix},null),h=()=>i.value&&t.showLoading?(0,l.Wm)("div",{class:f("loading")},[b(t.loadingIcon,f("loading-icon"),n.loading)]):o.value&&t.showError?(0,l.Wm)("div",{class:f("error")},[b(t.errorIcon,f("error-icon"),n.error)]):void 0,y=()=>{if(o.value||!t.src)return;const e={alt:t.alt,class:f("img"),style:{objectFit:t.fit,objectPosition:t.position}};return t.lazyLoad?(0,l.wy)((0,l.Wm)("img",(0,l.dG)({ref:r},e),null),[[(0,l.Q2)("lazy"),t.src]]):(0,l.Wm)("img",(0,l.dG)({ref:r,src:t.src,onLoad:v,onError:p},e),null)},B=({el:t})=>{const e=()=>{t===r.value&&i.value&&g()};r.value?e():(0,l.Y3)(e)},k=({el:t})=>{t!==r.value||o.value||p()};return c&&a._f&&(c.$on("loaded",B),c.$on("error",k),(0,l.Jd)((()=>{c.$off("loaded",B),c.$off("error",k)}))),(0,l.bv)((()=>{(0,l.Y3)((()=>{var e;(null==(e=r.value)?void 0:e.complete)&&!t.lazyLoad&&g()}))})),()=>{var e;return(0,l.Wm)("div",{class:f({round:t.round,block:t.block}),style:m.value},[y(),h(),null==(e=n.default)?void 0:e.call(n)])}}});const p=(0,o.n)(g);const[b,h]=(0,i["do"])("card"),y={tag:String,num:r.Or,desc:String,thumb:String,title:String,price:r.Or,centered:Boolean,lazyLoad:Boolean,currency:(0,r.SQ)("¥"),thumbLink:String,originPrice:r.Or};var B=(0,l.aZ)({name:b,props:y,emits:["clickThumb"],setup(t,{slots:e,emit:n}){const o=()=>e.title?e.title():t.title?(0,l.Wm)("div",{class:[h("title"),"van-multi-ellipsis--l2"]},[t.title]):void 0,i=()=>{if(e.tag||t.tag)return(0,l.Wm)("div",{class:h("tag")},[e.tag?e.tag():(0,l.Wm)(c.Vp,{mark:!0,type:"primary"},{default:()=>[t.tag]})])},r=()=>e.thumb?e.thumb():(0,l.Wm)(p,{src:t.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:t.lazyLoad},null),s=()=>{if(e.thumb||t.thumb)return(0,l.Wm)("a",{href:t.thumbLink,class:h("thumb"),onClick:t=>n("clickThumb",t)},[r(),i()])},u=()=>e.desc?e.desc():t.desc?(0,l.Wm)("div",{class:[h("desc"),"van-ellipsis"]},[t.desc]):void 0,d=()=>{const e=t.price.toString().split(".");return(0,l.Wm)("div",null,[(0,l.Wm)("span",{class:h("price-currency")},[t.currency]),(0,l.Wm)("span",{class:h("price-integer")},[e[0]]),(0,l.Uk)("."),(0,l.Wm)("span",{class:h("price-decimal")},[e[1]])])};return()=>{var n,i,r;const c=e.num||(0,a.Xq)(t.num),m=e.price||(0,a.Xq)(t.price),f=e["origin-price"]||(0,a.Xq)(t.originPrice),v=c||m||f||e.bottom,g=m&&(0,l.Wm)("div",{class:h("price")},[e.price?e.price():d()]),p=f&&(0,l.Wm)("div",{class:h("origin-price")},[e["origin-price"]?e["origin-price"]():`${t.currency} ${t.originPrice}`]),b=c&&(0,l.Wm)("div",{class:h("num")},[e.num?e.num():`x${t.num}`]),y=e.footer&&(0,l.Wm)("div",{class:h("footer")},[e.footer()]),B=v&&(0,l.Wm)("div",{class:h("bottom")},[null==(n=e["price-top"])?void 0:n.call(e),g,p,b,null==(i=e.bottom)?void 0:i.call(e)]);return(0,l.Wm)("div",{class:h()},[(0,l.Wm)("div",{class:h("header")},[s(),(0,l.Wm)("div",{class:h("content",{centered:t.centered})},[(0,l.Wm)("div",null,[o(),u(),null==(r=e.tags)?void 0:r.call(e)]),B])]),y])}}});const k=(0,o.n)(B)},9754:function(t,e,n){n(1958),n(368),n(6742),n(6585)},3404:function(t,e,n){n.d(e,{ZP:function(){return f},x_:function(){return d}});var o=n(9812),l=n(1882),i=n(2469),r=n(4391),a=n(3206),c=n(4874);const[s,u]=(0,l["do"])("cell"),d={tag:(0,i.SQ)("div"),icon:String,size:String,title:i.Or,value:i.Or,label:i.Or,center:Boolean,isLink:Boolean,border:i.J5,required:Boolean,iconPrefix:String,valueClass:i.Vg,labelClass:i.Vg,titleClass:i.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},m=(0,r.l7)({},d,a.g2);var f=(0,o.aZ)({name:s,props:m,setup(t,{slots:e}){const n=(0,a.yj)(),l=()=>{const n=e.label||(0,r.Xq)(t.label);if(n)return(0,o.Wm)("div",{class:[u("label"),t.labelClass]},[e.label?e.label():t.label])},i=()=>{var n;if(e.title||(0,r.Xq)(t.title)){const i=null==(n=e.title)?void 0:n.call(e);if(Array.isArray(i)&&0===i.length)return;return(0,o.Wm)("div",{class:[u("title"),t.titleClass],style:t.titleStyle},[i||(0,o.Wm)("span",null,[t.title]),l()])}},s=()=>{const n=e.value||e.default,l=n||(0,r.Xq)(t.value);if(l)return(0,o.Wm)("div",{class:[u("value"),t.valueClass]},[n?n():(0,o.Wm)("span",null,[t.value])])},d=()=>e.icon?e.icon():t.icon?(0,o.Wm)(c.JO,{name:t.icon,class:u("left-icon"),classPrefix:t.iconPrefix},null):void 0,m=()=>{if(e["right-icon"])return e["right-icon"]();if(t.isLink){const e=t.arrowDirection&&"right"!==t.arrowDirection?`arrow-${t.arrowDirection}`:"arrow";return(0,o.Wm)(c.JO,{name:e,class:u("right-icon")},null)}};return()=>{var l;const{tag:r,size:a,center:c,border:f,isLink:v,required:g}=t,p=null!=(l=t.clickable)?l:v,b={center:c,required:g,clickable:p,borderless:!f};return a&&(b[a]=!!a),(0,o.Wm)(r,{class:u(b),role:p?"button":void 0,tabindex:p?0:void 0,onClick:n},{default:()=>{var t;return[d(),i(),s(),m(),null==(t=e.extra)?void 0:t.call(e)]}})}}})},3219:function(t,e,n){n.d(e,{bL:function(){return i}});var o=n(2473),l=n(3404);const i=(0,o.n)(l.ZP)},7034:function(t,e,n){n.d(e,{J:function(){return s}});var o=n(9812),l=n(8586),i=n(521),r=n(2792),a=n(5777);const c=(t,e)=>{const n=(0,i.iH)(),c=()=>{n.value=(0,l.EL)(t).height};return(0,o.bv)((()=>{if((0,o.Y3)(c),e)for(let t=1;t<=3;t++)setTimeout(c,100*t)})),(0,a.h)((()=>(0,o.Y3)(c))),(0,o.YP)([r.bn,r.uK],c),n};function s(t,e){const n=c(t,!0);return t=>(0,o.Wm)("div",{class:e("placeholder"),style:{height:n.value?`${n.value}px`:void 0}},[t()])}},3206:function(t,e,n){n.d(e,{BC:function(){return i},g2:function(){return l},yj:function(){return r}});var o=n(9812);const l={to:[String,Object],url:String,replace:Boolean};function i({to:t,url:e,replace:n,$router:o}){t&&o?o[n?"replace":"push"](t):e&&(n?location.replace(e):location.href=e)}function r(){const t=(0,o.FN)().proxy;return()=>i(t)}},8580:function(t,e,n){n(1958),n(368),n(6742)},206:function(t,e,n){n.d(e,{Vp:function(){return v}});var o=n(2473),l=n(9812),i=n(4220),r=n(1882),a=n(2469),c=n(8336),s=n(4874);const[u,d]=(0,r["do"])("tag"),m={size:String,mark:Boolean,show:a.J5,type:(0,a.SQ)("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var f=(0,l.aZ)({name:u,props:m,emits:["close"],setup(t,{slots:e,emit:n}){const o=t=>{t.stopPropagation(),n("close",t)},r=()=>t.plain?{color:t.textColor||t.color,borderColor:t.color}:{color:t.textColor,background:t.color},a=()=>{var n;const{type:i,mark:a,plain:u,round:m,size:f,closeable:v}=t,g={mark:a,plain:u,round:m};f&&(g[f]=f);const p=v&&(0,l.Wm)(s.JO,{name:"cross",class:[d("close"),c.e9],onClick:o},null);return(0,l.Wm)("span",{style:r(),class:d([g,i])},[null==(n=e.default)?void 0:n.call(e),p])};return()=>(0,l.Wm)(i.uT,{name:t.closeable?"van-fade":void 0},{default:()=>[t.show?a():null]})}});const v=(0,o.n)(f)}}]);
//# sourceMappingURL=608.3e9a24dd.js.map