import{S as pe,i as ve,s as ye,D as Xe,k as L,l as T,m as A,h as _,q,p as E,b as P,G as R,X as Ye,H as Je,I as Qe,J as We,g as _e,d as he,K as He,Y as Ze,x as j,M as $,z as Ue,A as Ge,B as Pe,Q as ee,C as Ke,r as Y,u as J,F as h,Z as je,v as xe,_ as $e,a as U,N as et,c as G,R as tt,f as ot,o as lt,$ as st,e as Be,w as it,a0 as nt}from"../chunks/index.35c0646e.js";import{g as at,s as ft,d as rt}from"../chunks/db.181fcdef.js";function ut(l){let e,t,i,b;const c=l[11].default,n=Xe(c,l,l[10],null);return{c(){e=L("section"),n&&n.c(),this.h()},l(r){e=T(r,"SECTION",{style:!0,class:!0});var s=A(e);n&&n.l(s),s.forEach(_),this.h()},h(){q(e,"left",l[0]+"px"),q(e,"top",l[1]+"px"),E(e,"class","draggable svelte-a5qxa8"),q(e,"background-color",l[2])},m(r,s){P(r,e,s),n&&n.m(e,null),t=!0,i||(b=[R(window,"mouseup",l[5]),R(window,"mousemove",l[4]),R(e,"mousedown",Ye(l[3]))],i=!0)},p(r,[s]){n&&n.p&&(!t||s&1024)&&Je(n,c,r,r[10],t?We(c,r[10],s,null):Qe(r[10]),null),(!t||s&1)&&q(e,"left",r[0]+"px"),(!t||s&2)&&q(e,"top",r[1]+"px"),s&4&&q(e,"background-color",r[2])},i(r){t||(_e(n,r),t=!0)},o(r){he(n,r),t=!1},d(r){r&&_(e),n&&n.d(r),i=!1,He(b)}}}function ct(l,e,t){let{$$slots:i={},$$scope:b}=e,{left:c=100}=e,{top:n=100}=e,{minTop:r=0}=e,{minLeft:s=0}=e,{maxLeft:g=-1}=e,{maxTop:d=-1}=e,{bgColor:w="#FFFFFF"}=e;const v=Ze();let B=!1;function z(o){B=!0,v("click",{multiple:o.shiftKey})}function M(o){if(B){let y=c+o.movementX;y=Math.max(y,s),g>-1&&(y=Math.min(y,g)),t(0,c=y);let I=n+o.movementY;I=Math.max(I,r),d>-1&&(I=Math.min(I,d)),t(1,n=I)}}function k(){B=!1}return l.$$set=o=>{"left"in o&&t(0,c=o.left),"top"in o&&t(1,n=o.top),"minTop"in o&&t(6,r=o.minTop),"minLeft"in o&&t(7,s=o.minLeft),"maxLeft"in o&&t(8,g=o.maxLeft),"maxTop"in o&&t(9,d=o.maxTop),"bgColor"in o&&t(2,w=o.bgColor),"$$scope"in o&&t(10,b=o.$$scope)},[c,n,w,z,M,k,r,s,g,d,b,i]}class dt extends pe{constructor(e){super(),ve(this,e,ct,ut,ye,{left:0,top:1,minTop:6,minLeft:7,maxLeft:8,maxTop:9,bgColor:2})}}function gt(l){let e,t,i,b;return{c(){e=L("div"),t=Y(l[2]),this.h()},l(c){e=T(c,"DIV",{class:!0,style:!0});var n=A(e);t=J(n,l[2]),n.forEach(_),this.h()},h(){E(e,"class","p-4 seat-box svelte-1n9ovkz"),E(e,"style",l[4])},m(c,n){P(c,e,n),h(e,t),i||(b=R(e,"dblclick",je(l[6])),i=!0)},p(c,n){n&4&&xe(t,c[2]),n&16&&E(e,"style",c[4])},d(c){c&&_(e),i=!1,b()}}}function _t(l){let e,t,i,b;function c(s){l[10](s)}function n(s){l[11](s)}let r={minTop:0,minLeft:0,maxTop:l[3].height-100,maxLeft:l[3].width-100,bgColor:l[5],$$slots:{default:[gt]},$$scope:{ctx:l}};return l[0]!==void 0&&(r.top=l[0]),l[1]!==void 0&&(r.left=l[1]),e=new dt({props:r}),j.push(()=>$(e,"top",c)),j.push(()=>$(e,"left",n)),e.$on("click",l[12]),{c(){Ue(e.$$.fragment)},l(s){Ge(e.$$.fragment,s)},m(s,g){Pe(e,s,g),b=!0},p(s,[g]){const d={};g&8&&(d.maxTop=s[3].height-100),g&8&&(d.maxLeft=s[3].width-100),g&32&&(d.bgColor=s[5]),g&16404&&(d.$$scope={dirty:g,ctx:s}),!t&&g&1&&(t=!0,d.top=s[0],ee(()=>t=!1)),!i&&g&2&&(i=!0,d.left=s[1],ee(()=>i=!1)),e.$set(d)},i(s){b||(_e(e.$$.fragment,s),b=!0)},o(s){he(e.$$.fragment,s),b=!1},d(s){Ke(e,s)}}}function ht(l,e,t){let i,b,{id:c=""}=e,{top:n=250}=e,{left:r=75}=e,{active:s=!1}=e,{group:g=[]}=e,{facing:d=0}=e,{bounds:w={top:0,left:0,height:-1,width:-1}}=e;const v={0:"top",1:"right",2:"bottom",3:"left"},B=()=>{let o=d;o++,o>3&&(o=0),t(7,d=o)};function z(o){n=o,t(0,n)}function M(o){r=o,t(1,r)}function k(o){$e.call(this,l,o)}return l.$$set=o=>{"id"in o&&t(2,c=o.id),"top"in o&&t(0,n=o.top),"left"in o&&t(1,r=o.left),"active"in o&&t(8,s=o.active),"group"in o&&t(9,g=o.group),"facing"in o&&t(7,d=o.facing),"bounds"in o&&t(3,w=o.bounds)},l.$$.update=()=>{l.$$.dirty&772&&t(5,i=s?"#AAAAAA":g.indexOf(c)!=-1?"#AAEEAA":"#FFFFFF"),l.$$.dirty&128&&t(4,b="border-"+v[d]+": 3px solid blue;")},[n,r,c,w,b,i,B,d,s,g,z,M,k]}class bt extends pe{constructor(e){super(),ve(this,e,ht,_t,ye,{id:2,top:0,left:1,active:8,group:9,facing:7,bounds:3})}}const{window:ze}=st;function Ne(l,e,t){const i=l.slice();return i[25]=e[t],i[26]=e,i[27]=t,i}function Oe(l,e){let t,i,b,c,n,r,s,g;function d(o){e[17](o,e[25])}function w(o){e[18](o,e[25])}function v(o){e[19](o,e[25])}function B(o){e[20](o)}function z(o){e[21](o,e[25])}function M(...o){return e[22](e[25],...o)}let k={bounds:e[4],id:e[25].id};return e[25].top!==void 0&&(k.top=e[25].top),e[25].left!==void 0&&(k.left=e[25].left),e[25].active!==void 0&&(k.active=e[25].active),e[5]!==void 0&&(k.group=e[5]),e[25].direction!==void 0&&(k.facing=e[25].direction),i=new bt({props:k}),j.push(()=>$(i,"top",d)),j.push(()=>$(i,"left",w)),j.push(()=>$(i,"active",v)),j.push(()=>$(i,"group",B)),j.push(()=>$(i,"facing",z)),i.$on("click",M),{key:l,first:null,c(){t=Be(),Ue(i.$$.fragment),this.h()},l(o){t=Be(),Ge(i.$$.fragment,o),this.h()},h(){this.first=t},m(o,y){P(o,t,y),Pe(i,o,y),g=!0},p(o,y){e=o;const I={};y&16&&(I.bounds=e[4]),y&1&&(I.id=e[25].id),!b&&y&1&&(b=!0,I.top=e[25].top,ee(()=>b=!1)),!c&&y&1&&(c=!0,I.left=e[25].left,ee(()=>c=!1)),!n&&y&1&&(n=!0,I.active=e[25].active,ee(()=>n=!1)),!r&&y&32&&(r=!0,I.group=e[5],ee(()=>r=!1)),!s&&y&1&&(s=!0,I.facing=e[25].direction,ee(()=>s=!1)),i.$set(I)},i(o){g||(_e(i.$$.fragment,o),g=!0)},o(o){he(i.$$.fragment,o),g=!1},d(o){o&&_(t),Ke(i,o)}}}function Re(l){let e;return{c(){e=L("div"),this.h()},l(t){e=T(t,"DIV",{class:!0,style:!0}),A(e).forEach(_),this.h()},h(){E(e,"class","box-select svelte-1sa1z0l"),q(e,"left",l[3].x1+"px"),q(e,"top",l[3].y1+"px"),q(e,"width",l[3].width+"px"),q(e,"height",l[3].height+"px")},m(t,i){P(t,e,i)},p(t,i){i&8&&q(e,"left",t[3].x1+"px"),i&8&&q(e,"top",t[3].y1+"px"),i&8&&q(e,"width",t[3].width+"px"),i&8&&q(e,"height",t[3].height+"px")},d(t){t&&_(e)}}}function mt(l){let e,t,i,b,c,n,r,s,g,d,w,v,B,z,M,k,o,y,I,Q,N,se,te,ie,x,W,ne,f,a,S,p,H,O,D,K,oe,V,C=[],fe=new Map,re,le,be,we,ae=l[0];const ke=u=>u[25].id;for(let u=0;u<ae.length;u+=1){let m=Ne(l,ae,u),X=ke(m);fe.set(X,C[u]=Oe(X,m))}let F=l[2]&&Re(l);return{c(){e=U(),t=L("h2"),i=Y("Room Layout"),b=U(),c=L("div"),n=L("div"),r=L("div"),s=L("button"),g=Y("Add Seat"),d=U(),w=L("div"),v=L("button"),B=Y("Save Layout"),z=U(),M=L("div"),k=L("button"),o=Y("Group Seats"),I=U(),Q=L("div"),N=L("button"),se=Y("Delete Seat(s)"),ie=U(),x=L("div"),W=L("span"),ne=Y("Shift + Click to select multiple seats. Double click a seat to rotate it 90 degrees"),f=U(),a=L("div"),S=L("h4"),p=Y("Front"),H=U(),O=L("div"),D=L("h4"),K=Y("Left"),oe=U(),V=L("div");for(let u=0;u<C.length;u+=1)C[u].c();re=U(),F&&F.c(),this.h()},l(u){et("svelte-nq4wkh",document.head).forEach(_),e=G(u),t=T(u,"H2",{class:!0});var X=A(t);i=J(X,"Room Layout"),X.forEach(_),b=G(u),c=T(u,"DIV",{class:!0});var ue=A(c);n=T(ue,"DIV",{class:!0});var Z=A(n);r=T(Z,"DIV",{class:!0});var Se=A(r);s=T(Se,"BUTTON",{class:!0});var Ee=A(s);g=J(Ee,"Add Seat"),Ee.forEach(_),Se.forEach(_),d=G(Z),w=T(Z,"DIV",{class:!0});var De=A(w);v=T(De,"BUTTON",{class:!0});var Le=A(v);B=J(Le,"Save Layout"),Le.forEach(_),De.forEach(_),z=G(Z),M=T(Z,"DIV",{class:!0});var Te=A(M);k=T(Te,"BUTTON",{class:!0});var Ae=A(k);o=J(Ae,"Group Seats"),Ae.forEach(_),Te.forEach(_),I=G(Z),Q=T(Z,"DIV",{class:!0});var Ie=A(Q);N=T(Ie,"BUTTON",{class:!0});var Me=A(N);se=J(Me,"Delete Seat(s)"),Me.forEach(_),Ie.forEach(_),Z.forEach(_),ie=G(ue),x=T(ue,"DIV",{});var Ce=A(x);W=T(Ce,"SPAN",{class:!0});var Fe=A(W);ne=J(Fe,"Shift + Click to select multiple seats. Double click a seat to rotate it 90 degrees"),Fe.forEach(_),Ce.forEach(_),ue.forEach(_),f=G(u),a=T(u,"DIV",{class:!0});var ce=A(a);S=T(ce,"H4",{class:!0});var Ve=A(S);p=J(Ve,"Front"),Ve.forEach(_),H=G(ce),O=T(ce,"DIV",{class:!0});var de=A(O);D=T(de,"H4",{class:!0});var qe=A(D);K=J(qe,"Left"),qe.forEach(_),oe=G(de),V=T(de,"DIV",{class:!0});var ge=A(V);for(let me=0;me<C.length;me+=1)C[me].l(ge);re=G(ge),F&&F.l(ge),ge.forEach(_),de.forEach(_),ce.forEach(_),this.h()},h(){document.title="Room Layout",E(t,"class","title is-2"),E(s,"class","button is-primary"),E(r,"class","control"),E(v,"class","button is-primary"),E(w,"class","control"),E(k,"class","button"),k.disabled=y=!l[7],E(M,"class","control"),E(N,"class","button is-danger"),N.disabled=te=!l[6],E(Q,"class","control"),E(n,"class","field is-grouped mr-4"),E(W,"class","is-size-7"),E(c,"class","is-flex"),E(S,"class","title is-4 has-text-centered mb-0 front-heading svelte-1sa1z0l"),E(D,"class","title is-4 has-text-centered left-heading svelte-1sa1z0l"),E(V,"class","room-container svelte-1sa1z0l"),E(O,"class","is-flex"),E(a,"class","box")},m(u,m){P(u,e,m),P(u,t,m),h(t,i),P(u,b,m),P(u,c,m),h(c,n),h(n,r),h(r,s),h(s,g),h(n,d),h(n,w),h(w,v),h(v,B),h(n,z),h(n,M),h(M,k),h(k,o),h(n,I),h(n,Q),h(Q,N),h(N,se),h(c,ie),h(c,x),h(x,W),h(W,ne),P(u,f,m),P(u,a,m),h(a,S),h(S,p),h(a,H),h(a,O),h(O,D),h(D,K),h(O,oe),h(O,V);for(let X=0;X<C.length;X+=1)C[X].m(V,null);h(V,re),F&&F.m(V,null),l[23](V),le=!0,be||(we=[R(ze,"mouseup",l[15]),R(ze,"mousemove",l[14]),R(s,"click",l[8]),R(v,"click",l[9]),R(k,"click",l[11]),R(N,"click",l[12]),R(V,"mousedown",l[13])],be=!0)},p(u,[m]){(!le||m&128&&y!==(y=!u[7]))&&(k.disabled=y),(!le||m&64&&te!==(te=!u[6]))&&(N.disabled=te),m&1073&&(ae=u[0],it(),C=tt(C,m,ke,1,u,ae,fe,V,nt,Oe,re,Ne),ot()),u[2]?F?F.p(u,m):(F=Re(u),F.c(),F.m(V,null)):F&&(F.d(1),F=null)},i(u){if(!le){for(let m=0;m<ae.length;m+=1)_e(C[m]);le=!0}},o(u){for(let m=0;m<C.length;m+=1)he(C[m]);le=!1},d(u){u&&_(e),u&&_(t),u&&_(b),u&&_(c),u&&_(f),u&&_(a);for(let m=0;m<C.length;m+=1)C[m].d();F&&F.d(),l[23](null),be=!1,He(we)}}}function pt(l,e,t){let i,b,c,n,r,s=[],g=!1,d={},w={x:2,y:2},v=null;const B=()=>{const a={id:s.length>0?Math.max(...s.map(S=>S.id))+1:1,top:250,left:75,direction:0,group:[]};t(0,s=[...s,a])},z=async()=>{const f=s.map(a=>(delete a.active,a));await ft(f)},M=(f,a)=>{const S=s.map(p=>(p.active=p.id===f||a&&p.active,p));t(0,s=S)},k=()=>{i.forEach(f=>{let a=i.map(p=>p.id);a=a.concat(f.group);const S=new Set(a);f.group=[...S]})},o=async()=>{const f=[...i.map(a=>a.id)];await rt(f),t(0,s=s.filter(a=>f.indexOf(a.id)===-1))},y=f=>{if(f.button!==0)return;const{offsetTop:a,offsetLeft:S}=v;var p=f.x-S+window.scrollX,H=f.y-a+window.scrollY;t(2,g=!0),t(3,d={x1:p,y1:H,x2:p,y2:H,width:0,height:0})},I=f=>{if(g){const H=v.offsetTop,O=v.offsetLeft;var a=Math.max(f.x-O+window.scrollX),S=Math.max(f.y-H+window.scrollY);let D={...w};a<d.x1?D.x=1:a>=d.x2&&(D.x=2),S<d.y1?D.y=1:S>=d.y2&&(D.y=2),w=D;var p={x1:w.x===2?d.x1:a,x2:w.x===2?a:d.x2,y1:w.y===2?d.y1:S,y2:w.y===2?S:d.y2};p.width=p.x2-p.x1,p.height=p.y2-p.y1,t(3,d=p)}},Q=()=>{w={x:2,y:2},t(2,g=!1);const{x1:f,x2:a,y1:S,y2:p}=d,H=(D,K)=>{const oe=D+100,V=K+100,C=f<=K&&K<=a||f<=V&&V<=a,fe=S<=D&&D<=p||S<=oe&&oe<=p;return C&&fe};s.filter(D=>H(D.top,D.left)).forEach((D,K)=>{M(D.id,K!==0)})};lt(async()=>{const f=await at();t(0,s=f.map(a=>(a.isActive=!1,a.group=a.group||[],a.direction=a.direction||0,a)))});function N(f,a){l.$$.not_equal(a.top,f)&&(a.top=f,t(0,s))}function se(f,a){l.$$.not_equal(a.left,f)&&(a.left=f,t(0,s))}function te(f,a){l.$$.not_equal(a.active,f)&&(a.active=f,t(0,s))}function ie(f){n=f,t(5,n),t(16,i),t(0,s)}function x(f,a){l.$$.not_equal(a.direction,f)&&(a.direction=f,t(0,s))}const W=(f,a)=>M(f.id,a.detail.multiple);function ne(f){j[f?"unshift":"push"](()=>{v=f,t(1,v)})}return l.$$.update=()=>{l.$$.dirty&1&&t(16,i=s.filter(f=>f.active)),l.$$.dirty&65536&&t(7,b=i.length>1),l.$$.dirty&65536&&t(6,c=i.length>0),l.$$.dirty&65536&&t(5,n=i.length>0?i[0].group:[]),l.$$.dirty&2&&t(4,r=v!==null?{top:0,left:0,width:v.clientWidth,height:v.clientHeight}:{})},[s,v,g,d,r,n,c,b,B,z,M,k,o,y,I,Q,i,N,se,te,ie,x,W,ne]}class wt extends pe{constructor(e){super(),ve(this,e,pt,mt,ye,{})}}export{wt as default};