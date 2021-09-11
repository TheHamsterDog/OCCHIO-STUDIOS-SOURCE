var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,o;function r(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function c(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function u(){return e=" ",document.createTextNode(e);var e}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e){o=e}const b=[],h=[],x=[],v=[],N=Promise.resolve();let $=!1;function y(e){x.push(e)}let w=!1;const k=new Set;function _(){if(!w){w=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];p(t),E(t.$$)}for(p(null),b.length=0;h.length;)h.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];k.has(t)||(k.add(t),t())}x.length=0}while(b.length);for(;v.length;)v.pop()();$=!1,w=!1,k.clear()}}function E(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const C=new Set;function I(e,t){e&&e.i&&(C.delete(e),e.i(t))}function j(e,n,l,i){const{fragment:o,on_mount:r,on_destroy:c,after_update:m}=e.$$;o&&o.m(n,l),i||y((()=>{const n=r.map(t).filter(s);c?c.push(...n):a(n),e.$$.on_mount=[]})),m.forEach(y)}function B(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t){-1===e.$$.dirty[0]&&(b.push(e),$||($=!0,N.then(_)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(t,s,l,i,r,c,m,g=[-1]){const u=o;p(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:s.context||[]),callbacks:n(),dirty:g,skip_bound:!1,root:s.target||u.$$.root};m&&m(f.root);let b=!1;if(f.ctx=l?l(t,s.props||{},((e,n,...a)=>{const s=a.length?a[0]:n;return f.ctx&&r(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),b&&L(t,e)),n})):[],f.update(),b=!0,a(f.before_update),f.fragment=!!i&&i(f.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);f.fragment&&f.fragment.l(e),e.forEach(d)}else f.fragment&&f.fragment.c();s.intro&&I(t.$$.fragment),j(t,s.target,s.anchor,s.customElement),_()}p(u)}class H{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function M(t){let n,a,s;return{c(){n=g("div"),n.innerHTML='<div class="navbar-right"><img src="logo.png" alt="logo" class="w-36"/></div> \n    <div class="navbar-left md:flex hidden items-center "><a href="/#" class="mr-8 font-bold font-sans">Gallery</a> \n        <a href="/#" class="mr-8 font-bold font-sans">Contact</a> \n        <a href="/#" class="mr-8 font-bold font-sans"><img src="CC.png" alt="cc" class="w-16"/></a></div> \n    <div class="navbar-mobile md:hidden"><input id="navbar" type="checkbox" class="absolute hidden navbar-mobile-checkbox"/> \n        <label class="navbar-mobile-menu" for="navbar"><div class="navbar-mobile-menu-icon"></div></label> \n        <div class="navbar-mobile-list"><div class="flex items-center justify-center w-screen bg-gray-100 flex-col h-screen "><a href="/#" class="mr-8 mb-8 font-bold font-sans">Gallery</a> \n                <a href="/#" class="mr-8 mb-8 font-bold font-sans">Contact</a> \n                <a href="/#" class="mr-8 mb-8 font-bold font-sans"><img src="CC.png" alt="cc" class="w-16"/></a></div></div></div>',a=u(),s=g("div"),s.innerHTML='<div class="navbar-right hidden"><img src="logo.png" alt="hidden logo" class="w-36"/></div>',f(n,"class","navbar flex bg-gray-100 justify-between pt-2 pb-2 pr-0 pl-6"),f(s,"class","navbar bg-gray-100 flex relative justify-between pt-2 pr-0 pl-6")},m(e,t){m(e,n,t),m(e,a,t),m(e,s,t)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(a),e&&d(s)}}}class A extends H{constructor(e){super(),T(this,e,null,M,l,{})}}function q(e,t,n){const a=e.slice();return a[2]=t[n],a}function O(t){let n,a,s,l,i,o,p,b;return{c(){n=g("label"),a=g("img"),o=u(),r(a.src,s=t[2].link)||f(a,"src",s),f(a,"id",l=t[2].position.toString()),f(a,"class",i=0===t[2].position?"image-lextend":1===t[2].position?"image-left":2===t[2].position?"image-center":3===t[2].position?"image-right":4===t[2].position?"image-rextend":"image-back"),f(a,"alt",""),f(n,"for","a")},m(e,s){var l,i,r,d;m(e,n,s),c(n,a),c(n,o),p||(l=a,i="click",r=t[1],l.addEventListener(i,r,d),b=()=>l.removeEventListener(i,r,d),p=!0)},p:e,d(e){e&&d(n),p=!1,b()}}}function P(e){let t,n,a,s,l,i,o,p,b,h,x,v,N,$,y,w,k,_,E,L,T,H;n=new A({});let M=e[0],P=[];for(let t=0;t<M.length;t+=1)P[t]=O(q(e,M,t));return{c(){var e;t=g("main"),(e=n.$$.fragment)&&e.c(),a=u(),s=g("div"),s.innerHTML='<img src="favicon.png" alt="logo" class="w-8/12"/>',l=u(),i=g("p"),i.textContent="We are an interactive digital studio working at the edge of web design\n\t\tand interaction.",o=u(),p=g("div"),b=g("button"),b.innerHTML='request info\n\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="h-6 ml-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>',h=u(),x=g("div"),v=g("div"),v.innerHTML='<h2 class="font-bold text-xl">ABOUT OCCHIO</h2> \n\t\t\t\t<h1 class="font-extrabold text-4xl mt-4">TINCIDUNT AC NIBH VEL</h1> \n\t\t\t\t<p class="mt-8 text-base font-semibold ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\t\t\t\tPellentesque sapien nulla, tincidunt ac nibh vel, malesuada\n\t\t\t\t\tconsequat sem. Aenean vehicula iaculis mollis. Integer\n\t\t\t\t\tsuscipit, lorem eget finibus lobortis, arcu erat mattis\n\t\t\t\t\tvelit, vitae laoreet justo neque vel dolor. Donec blandit\n\t\t\t\t\tnulla ex, ac ultricies nisl congue ut. Phasellus nec egestas\n\t\t\t\t\tlectus, eu eleifend arcu. Pellentesque accumsan libero\n\t\t\t\t\tlacus, vitae laoreet nisl tincidunt eu. Morbi vehicula arcu\n\t\t\t\t\tsit amet tellus mollis tincidunt.</p>',N=u(),$=g("div"),y=g("img"),k=u();for(let e=0;e<P.length;e+=1)P[e].c();_=u(),E=g("h3"),E.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit",L=u(),T=g("div"),T.innerHTML='<img src="Untitled1.png" alt="logo" class="md:w-32 w-3/12 "/> \n\t\t\t<img src="Untitled.png" alt="logo" class="w-7/12"/>',f(s,"class","h-4/5 mt-24 flex justify-center items-center "),f(i,"class","font-sans text-center m-auto max-w-sm ui-sans-serif font-semibold mt-12 mb-24 text-2xl"),f(b,"class","absolute flex items-center extrabold transform top-0 left-1/2 uppercase font-bold text-lg -translate-x-1/2 -translate-y-1/2 p-3 bg-white text-black "),f(v,"class","md:w-5/12 "),f(y,"class","image-instagram"),f(y,"alt","a"),r(y.src,w="frame-phone.png")||f(y,"src","frame-phone.png"),f($,"class","md:w-5/12 md:flex ml-24 mr-0 carousel md:m-0 relative "),f(x,"class","md:flex bg-black z-10 justify-between text-white items-center"),f(E,"class","font-bold md:text-6xl mt-4 md:mb-0 mb-8 text-4xl md:w-7/12 font-sans"),f(T,"class","flex justify-between items-center"),f(p,"class","bg-black md:p-32 p-12 pr-4 pl-4 md:pb-0 pb-0 font-sans text-white relative w-full"),f(t,"class","bg-gray-100 w-full")},m(e,r){m(e,t,r),j(n,t,null),c(t,a),c(t,s),c(t,l),c(t,i),c(t,o),c(t,p),c(p,b),c(p,h),c(p,x),c(x,v),c(x,N),c(x,$),c($,y),c($,k);for(let e=0;e<P.length;e+=1)P[e].m($,null);c(p,_),c(p,E),c(p,L),c(p,T),H=!0},p(e,[t]){if(3&t){let n;for(M=e[0],n=0;n<M.length;n+=1){const a=q(e,M,n);P[n]?P[n].p(a,t):(P[n]=O(a),P[n].c(),P[n].m($,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=M.length}},i(e){H||(I(n.$$.fragment,e),H=!0)},o(e){!function(e,t,n,a){if(e&&e.o){if(C.has(e))return;C.add(e),(void 0).c.push((()=>{C.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}(n.$$.fragment,e),H=!1},d(e){e&&d(t),B(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(P,e)}}}function U(e){return[[{link:"image1.png",position:0},{link:"image2.png",position:1},{link:"image3.png",position:2},{link:"image1.png",position:3},{link:"image2.png",position:4},{link:"image3.png",position:5}],e=>{console.log(e.target);const t=document.getElementById(`${e.target.id}`),n=document.getElementById("0"),a=document.getElementById("1"),s=document.getElementById("2"),l=document.getElementById("3"),i=document.getElementById("4"),o=document.getElementById("5");0===Number(e.target.id)&&(t.className="image-center",a.className="image-right",s.className="image-rextend",l.className="image-back",i.className="image-lextend",o.className="image-left"),1===Number(e.target.id)&&(t.className="image-center",n.className="image-left",s.className="image-right",l.className="image-rextend",i.className="image-back",o.className="image-lextend"),2===Number(e.target.id)&&(t.className="image-center",n.className="image-lextend",a.className="image-left",l.className="image-right",i.className="image-rextend",o.className="image-back"),3===Number(e.target.id)&&(t.className="image-center",n.className="image-back",a.className="image-lextend",s.className="image-left",i.className="image-right",o.className="image-rextend"),4===Number(e.target.id)&&(t.className="image-center",n.className="image-rextend",a.className="image-back",s.className="image-lextend",l.className="image-left",o.className="image-right"),5===Number(e.target.id)&&(t.className="image-center",n.className="image-right",a.className="image-rextend",s.className="image-back",i.className="image-left",l.className="image-lextend"),console.log(t)}]}return new class extends H{constructor(e){super(),T(this,e,U,P,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
