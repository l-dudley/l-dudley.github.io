var Qe=Object.defineProperty;var Oe=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var ze=(o,e,t)=>e in o?Qe(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Be=(o,e)=>{for(var t in e||(e={}))We.call(e,t)&&ze(o,t,e[t]);if(Oe)for(var t of Oe(e))Xe.call(e,t)&&ze(o,t,e[t]);return o};import{S as pe,i as ve,s as ye,F as Ze,e as L,c as T,a as A,d as _,f as q,b as E,g as G,I as R,Y as xe,J as $e,K as et,L as tt,r as _e,p as he,M as Ge,Z as ot,N as Z,O as $,x as Ke,y as Ye,z as je,Q as ee,C as Je,t as j,h as J,H as h,_ as lt,j as st,$ as it,l as Ne,k as U,P as at,m as P,R as nt,q as ft,w as rt,a0 as ut,o as ct,a1 as dt}from"../chunks/index-73f85fd5.js";import{g as gt,s as _t,d as ht}from"../chunks/db-61e6d286.js";function bt(o){let e,t,i,b;const c=o[11].default,a=Ze(c,o,o[10],null);return{c(){e=L("section"),a&&a.c(),this.h()},l(r){e=T(r,"SECTION",{style:!0,class:!0});var s=A(e);a&&a.l(s),s.forEach(_),this.h()},h(){q(e,"left",o[0]+"px"),q(e,"top",o[1]+"px"),E(e,"class","draggable svelte-a5qxa8"),q(e,"background-color",o[2],!1)},m(r,s){G(r,e,s),a&&a.m(e,null),t=!0,i||(b=[R(window,"mouseup",o[5]),R(window,"mousemove",o[4]),R(e,"mousedown",xe(o[3]))],i=!0)},p(r,[s]){a&&a.p&&(!t||s&1024)&&$e(a,c,r,r[10],t?tt(c,r[10],s,null):et(r[10]),null),(!t||s&1)&&q(e,"left",r[0]+"px"),(!t||s&2)&&q(e,"top",r[1]+"px"),s&4&&q(e,"background-color",r[2],!1)},i(r){t||(_e(a,r),t=!0)},o(r){he(a,r),t=!1},d(r){r&&_(e),a&&a.d(r),i=!1,Ge(b)}}}function mt(o,e,t){let{$$slots:i={},$$scope:b}=e,{left:c=100}=e,{top:a=100}=e,{minTop:r=0}=e,{minLeft:s=0}=e,{maxLeft:g=-1}=e,{maxTop:d=-1}=e,{bgColor:w="#FFFFFF"}=e;const v=ot();let O=!1;function z(l){O=!0,v("click",{multiple:l.shiftKey})}function M(l){if(O){let y=c+l.movementX;y=Math.max(y,s),g>-1&&(y=Math.min(y,g)),t(0,c=y);let I=a+l.movementY;I=Math.max(I,r),d>-1&&(I=Math.min(I,d)),t(1,a=I)}}function k(){O=!1}return o.$$set=l=>{"left"in l&&t(0,c=l.left),"top"in l&&t(1,a=l.top),"minTop"in l&&t(6,r=l.minTop),"minLeft"in l&&t(7,s=l.minLeft),"maxLeft"in l&&t(8,g=l.maxLeft),"maxTop"in l&&t(9,d=l.maxTop),"bgColor"in l&&t(2,w=l.bgColor),"$$scope"in l&&t(10,b=l.$$scope)},[c,a,w,z,M,k,r,s,g,d,b,i]}class pt extends pe{constructor(e){super(),ve(this,e,mt,bt,ye,{left:0,top:1,minTop:6,minLeft:7,maxLeft:8,maxTop:9,bgColor:2})}}function vt(o){let e,t,i,b;return{c(){e=L("div"),t=j(o[2]),this.h()},l(c){e=T(c,"DIV",{class:!0,style:!0});var a=A(e);t=J(a,o[2]),a.forEach(_),this.h()},h(){E(e,"class","p-4 seat-box svelte-1n9ovkz"),E(e,"style",o[4])},m(c,a){G(c,e,a),h(e,t),i||(b=R(e,"dblclick",lt(o[6])),i=!0)},p(c,a){a&4&&st(t,c[2]),a&16&&E(e,"style",c[4])},d(c){c&&_(e),i=!1,b()}}}function yt(o){let e,t,i,b;function c(s){o[10](s)}function a(s){o[11](s)}let r={minTop:0,minLeft:0,maxTop:o[3].height-100,maxLeft:o[3].width-100,bgColor:o[5],$$slots:{default:[vt]},$$scope:{ctx:o}};return o[0]!==void 0&&(r.top=o[0]),o[1]!==void 0&&(r.left=o[1]),e=new pt({props:r}),Z.push(()=>$(e,"top",c)),Z.push(()=>$(e,"left",a)),e.$on("click",o[12]),{c(){Ke(e.$$.fragment)},l(s){Ye(e.$$.fragment,s)},m(s,g){je(e,s,g),b=!0},p(s,[g]){const d={};g&8&&(d.maxTop=s[3].height-100),g&8&&(d.maxLeft=s[3].width-100),g&32&&(d.bgColor=s[5]),g&16404&&(d.$$scope={dirty:g,ctx:s}),!t&&g&1&&(t=!0,d.top=s[0],ee(()=>t=!1)),!i&&g&2&&(i=!0,d.left=s[1],ee(()=>i=!1)),e.$set(d)},i(s){b||(_e(e.$$.fragment,s),b=!0)},o(s){he(e.$$.fragment,s),b=!1},d(s){Je(e,s)}}}function wt(o,e,t){let i,b,{id:c=""}=e,{top:a=250}=e,{left:r=75}=e,{active:s=!1}=e,{group:g=[]}=e,{facing:d=0}=e,{bounds:w={top:0,left:0,height:-1,width:-1}}=e;const v={0:"top",1:"right",2:"bottom",3:"left"},O=()=>{let l=d;l++,l>3&&(l=0),t(7,d=l)};function z(l){a=l,t(0,a)}function M(l){r=l,t(1,r)}function k(l){it.call(this,o,l)}return o.$$set=l=>{"id"in l&&t(2,c=l.id),"top"in l&&t(0,a=l.top),"left"in l&&t(1,r=l.left),"active"in l&&t(8,s=l.active),"group"in l&&t(9,g=l.group),"facing"in l&&t(7,d=l.facing),"bounds"in l&&t(3,w=l.bounds)},o.$$.update=()=>{o.$$.dirty&772&&t(5,i=s?"#AAAAAA":g.indexOf(c)!=-1?"#AAEEAA":"#FFFFFF"),o.$$.dirty&128&&t(4,b="border-"+v[d]+": 3px solid blue;")},[a,r,c,w,b,i,O,d,s,g,z,M,k]}class kt extends pe{constructor(e){super(),ve(this,e,wt,yt,ye,{id:2,top:0,left:1,active:8,group:9,facing:7,bounds:3})}}const{window:Re}=ut;function He(o,e,t){const i=o.slice();return i[25]=e[t],i[26]=e,i[27]=t,i}function Ue(o,e){let t,i,b,c,a,r,s,g;function d(l){e[17](l,e[25])}function w(l){e[18](l,e[25])}function v(l){e[19](l,e[25])}function O(l){e[20](l)}function z(l){e[21](l,e[25])}function M(...l){return e[22](e[25],...l)}let k={bounds:e[4],id:e[25].id};return e[25].top!==void 0&&(k.top=e[25].top),e[25].left!==void 0&&(k.left=e[25].left),e[25].active!==void 0&&(k.active=e[25].active),e[5]!==void 0&&(k.group=e[5]),e[25].direction!==void 0&&(k.facing=e[25].direction),i=new kt({props:k}),Z.push(()=>$(i,"top",d)),Z.push(()=>$(i,"left",w)),Z.push(()=>$(i,"active",v)),Z.push(()=>$(i,"group",O)),Z.push(()=>$(i,"facing",z)),i.$on("click",M),{key:o,first:null,c(){t=Ne(),Ke(i.$$.fragment),this.h()},l(l){t=Ne(),Ye(i.$$.fragment,l),this.h()},h(){this.first=t},m(l,y){G(l,t,y),je(i,l,y),g=!0},p(l,y){e=l;const I={};y&16&&(I.bounds=e[4]),y&1&&(I.id=e[25].id),!b&&y&1&&(b=!0,I.top=e[25].top,ee(()=>b=!1)),!c&&y&1&&(c=!0,I.left=e[25].left,ee(()=>c=!1)),!a&&y&1&&(a=!0,I.active=e[25].active,ee(()=>a=!1)),!r&&y&32&&(r=!0,I.group=e[5],ee(()=>r=!1)),!s&&y&1&&(s=!0,I.facing=e[25].direction,ee(()=>s=!1)),i.$set(I)},i(l){g||(_e(i.$$.fragment,l),g=!0)},o(l){he(i.$$.fragment,l),g=!1},d(l){l&&_(t),Je(i,l)}}}function Pe(o){let e;return{c(){e=L("div"),this.h()},l(t){e=T(t,"DIV",{class:!0,style:!0}),A(e).forEach(_),this.h()},h(){E(e,"class","box-select svelte-1sa1z0l"),q(e,"left",o[3].x1+"px"),q(e,"top",o[3].y1+"px"),q(e,"width",o[3].width+"px"),q(e,"height",o[3].height+"px")},m(t,i){G(t,e,i)},p(t,i){i&8&&q(e,"left",t[3].x1+"px"),i&8&&q(e,"top",t[3].y1+"px"),i&8&&q(e,"width",t[3].width+"px"),i&8&&q(e,"height",t[3].height+"px")},d(t){t&&_(e)}}}function St(o){let e,t,i,b,c,a,r,s,g,d,w,v,O,z,M,k,l,y,I,Q,B,se,te,ie,x,W,ae,f,n,S,p,H,N,D,K,oe,V,C=[],fe=new Map,re,le,be,we,ne=o[0];const ke=u=>u[25].id;for(let u=0;u<ne.length;u+=1){let m=He(o,ne,u),Y=ke(m);fe.set(Y,C[u]=Ue(Y,m))}let F=o[2]&&Pe(o);return{c(){e=U(),t=L("h2"),i=j("Room Layout"),b=U(),c=L("div"),a=L("div"),r=L("div"),s=L("button"),g=j("Add Seat"),d=U(),w=L("div"),v=L("button"),O=j("Save Layout"),z=U(),M=L("div"),k=L("button"),l=j("Group Seats"),I=U(),Q=L("div"),B=L("button"),se=j("Delete Seat(s)"),ie=U(),x=L("div"),W=L("span"),ae=j("Shift + Click to select multiple seats. Double click a seat to rotate it 90 degrees"),f=U(),n=L("div"),S=L("h4"),p=j("Front"),H=U(),N=L("div"),D=L("h4"),K=j("Left"),oe=U(),V=L("div");for(let u=0;u<C.length;u+=1)C[u].c();re=U(),F&&F.c(),this.h()},l(u){at('[data-svelte="svelte-nq4wkh"]',document.head).forEach(_),e=P(u),t=T(u,"H2",{class:!0});var Y=A(t);i=J(Y,"Room Layout"),Y.forEach(_),b=P(u),c=T(u,"DIV",{class:!0});var ue=A(c);a=T(ue,"DIV",{class:!0});var X=A(a);r=T(X,"DIV",{class:!0});var Se=A(r);s=T(Se,"BUTTON",{class:!0});var Ee=A(s);g=J(Ee,"Add Seat"),Ee.forEach(_),Se.forEach(_),d=P(X),w=T(X,"DIV",{class:!0});var De=A(w);v=T(De,"BUTTON",{class:!0});var Le=A(v);O=J(Le,"Save Layout"),Le.forEach(_),De.forEach(_),z=P(X),M=T(X,"DIV",{class:!0});var Te=A(M);k=T(Te,"BUTTON",{class:!0});var Ae=A(k);l=J(Ae,"Group Seats"),Ae.forEach(_),Te.forEach(_),I=P(X),Q=T(X,"DIV",{class:!0});var Ie=A(Q);B=T(Ie,"BUTTON",{class:!0});var Me=A(B);se=J(Me,"Delete Seat(s)"),Me.forEach(_),Ie.forEach(_),X.forEach(_),ie=P(ue),x=T(ue,"DIV",{});var Ce=A(x);W=T(Ce,"SPAN",{class:!0});var Fe=A(W);ae=J(Fe,"Shift + Click to select multiple seats. Double click a seat to rotate it 90 degrees"),Fe.forEach(_),Ce.forEach(_),ue.forEach(_),f=P(u),n=T(u,"DIV",{class:!0});var ce=A(n);S=T(ce,"H4",{class:!0});var Ve=A(S);p=J(Ve,"Front"),Ve.forEach(_),H=P(ce),N=T(ce,"DIV",{class:!0});var de=A(N);D=T(de,"H4",{class:!0});var qe=A(D);K=J(qe,"Left"),qe.forEach(_),oe=P(de),V=T(de,"DIV",{class:!0});var ge=A(V);for(let me=0;me<C.length;me+=1)C[me].l(ge);re=P(ge),F&&F.l(ge),ge.forEach(_),de.forEach(_),ce.forEach(_),this.h()},h(){document.title="Room Layout",E(t,"class","title is-2"),E(s,"class","button is-primary"),E(r,"class","control"),E(v,"class","button is-primary"),E(w,"class","control"),E(k,"class","button"),k.disabled=y=!o[7],E(M,"class","control"),E(B,"class","button is-danger"),B.disabled=te=!o[6],E(Q,"class","control"),E(a,"class","field is-grouped mr-4"),E(W,"class","is-size-7"),E(c,"class","is-flex"),E(S,"class","title is-4 has-text-centered mb-0 front-heading svelte-1sa1z0l"),E(D,"class","title is-4 has-text-centered left-heading svelte-1sa1z0l"),E(V,"class","room-container svelte-1sa1z0l"),E(N,"class","is-flex"),E(n,"class","box")},m(u,m){G(u,e,m),G(u,t,m),h(t,i),G(u,b,m),G(u,c,m),h(c,a),h(a,r),h(r,s),h(s,g),h(a,d),h(a,w),h(w,v),h(v,O),h(a,z),h(a,M),h(M,k),h(k,l),h(a,I),h(a,Q),h(Q,B),h(B,se),h(c,ie),h(c,x),h(x,W),h(W,ae),G(u,f,m),G(u,n,m),h(n,S),h(S,p),h(n,H),h(n,N),h(N,D),h(D,K),h(N,oe),h(N,V);for(let Y=0;Y<C.length;Y+=1)C[Y].m(V,null);h(V,re),F&&F.m(V,null),o[23](V),le=!0,be||(we=[R(Re,"mouseup",o[15]),R(Re,"mousemove",o[14]),R(s,"click",o[8]),R(v,"click",o[9]),R(k,"click",o[11]),R(B,"click",o[12]),R(V,"mousedown",o[13])],be=!0)},p(u,[m]){(!le||m&128&&y!==(y=!u[7]))&&(k.disabled=y),(!le||m&64&&te!==(te=!u[6]))&&(B.disabled=te),m&1073&&(ne=u[0],ct(),C=nt(C,m,ke,1,u,ne,fe,V,dt,Ue,re,He),ft()),u[2]?F?F.p(u,m):(F=Pe(u),F.c(),F.m(V,null)):F&&(F.d(1),F=null)},i(u){if(!le){for(let m=0;m<ne.length;m+=1)_e(C[m]);le=!0}},o(u){for(let m=0;m<C.length;m+=1)he(C[m]);le=!1},d(u){u&&_(e),u&&_(t),u&&_(b),u&&_(c),u&&_(f),u&&_(n);for(let m=0;m<C.length;m+=1)C[m].d();F&&F.d(),o[23](null),be=!1,Ge(we)}}}function Et(o,e,t){let i,b,c,a,r,s=[],g=!1,d={},w={x:2,y:2},v=null;const O=()=>{const n={id:s.length>0?Math.max(...s.map(S=>S.id))+1:1,top:250,left:75,direction:0,group:[]};t(0,s=[...s,n])},z=async()=>{const f=s.map(n=>(delete n.active,n));await _t(f)},M=(f,n)=>{const S=s.map(p=>(p.active=p.id===f||n&&p.active,p));t(0,s=S)},k=()=>{i.forEach(f=>{let n=i.map(p=>p.id);n=n.concat(f.group);const S=new Set(n);f.group=[...S]})},l=async()=>{const f=[...i.map(n=>n.id)];await ht(f),t(0,s=s.filter(n=>f.indexOf(n.id)===-1))},y=f=>{if(f.button!==0)return;const{offsetTop:n,offsetLeft:S}=v;var p=f.x-S+window.scrollX,H=f.y-n+window.scrollY;t(2,g=!0),t(3,d={x1:p,y1:H,x2:p,y2:H,width:0,height:0})},I=f=>{if(g){const H=v.offsetTop,N=v.offsetLeft;var n=Math.max(f.x-N+window.scrollX),S=Math.max(f.y-H+window.scrollY);let D=Be({},w);n<d.x1?D.x=1:n>=d.x2&&(D.x=2),S<d.y1?D.y=1:S>=d.y2&&(D.y=2),w=D;var p={x1:w.x===2?d.x1:n,x2:w.x===2?n:d.x2,y1:w.y===2?d.y1:S,y2:w.y===2?S:d.y2};p.width=p.x2-p.x1,p.height=p.y2-p.y1,t(3,d=p)}},Q=()=>{w={x:2,y:2},t(2,g=!1);const{x1:f,x2:n,y1:S,y2:p}=d,H=(D,K)=>{const oe=D+100,V=K+100,C=f<=K&&K<=n||f<=V&&V<=n,fe=S<=D&&D<=p||S<=oe&&oe<=p;return C&&fe};s.filter(D=>H(D.top,D.left)).forEach((D,K)=>{M(D.id,K!==0)})};rt(async()=>{const f=await gt();t(0,s=f.map(n=>(n.isActive=!1,n.group=n.group||[],n.direction=n.direction||0,n)))});function B(f,n){o.$$.not_equal(n.top,f)&&(n.top=f,t(0,s))}function se(f,n){o.$$.not_equal(n.left,f)&&(n.left=f,t(0,s))}function te(f,n){o.$$.not_equal(n.active,f)&&(n.active=f,t(0,s))}function ie(f){a=f,t(5,a),t(16,i),t(0,s)}function x(f,n){o.$$.not_equal(n.direction,f)&&(n.direction=f,t(0,s))}const W=(f,n)=>M(f.id,n.detail.multiple);function ae(f){Z[f?"unshift":"push"](()=>{v=f,t(1,v)})}return o.$$.update=()=>{o.$$.dirty&1&&t(16,i=s.filter(f=>f.active)),o.$$.dirty&65536&&t(7,b=i.length>1),o.$$.dirty&65536&&t(6,c=i.length>0),o.$$.dirty&65536&&t(5,a=i.length>0?i[0].group:[]),o.$$.dirty&2&&t(4,r=v!==null?{top:0,left:0,width:v.clientWidth,height:v.clientHeight}:{})},[s,v,g,d,r,a,c,b,O,z,M,k,l,y,I,Q,i,B,se,te,ie,x,W,ae]}class At extends pe{constructor(e){super(),ve(this,e,Et,St,ye,{})}}export{At as default};