import{S as fe,i as ce,s as de,e as S,t as q,c as w,a as N,h as A,d,g as F,H as h,j as he,a0 as qe,b as D,G as W,a1 as ge,I as X,O as pe,P as be,n as te,a2 as Ae,k as M,m as R,a3 as Je,M as Pe,T as Y,U as Z,x as le,y as se,z as ie,V as x,o as ze,p as H,q as Ge,r as P,C as ne,R as Ke,f as ve,a4 as Te,a5 as Qe,w as Xe}from"./index-949cf3b2.js";import{a as Ye,g as Ze,c as xe,i as $e,u as et}from"./db-c0070083.js";import{M as tt}from"./Modal-47db0871.js";import{c as ae}from"./singletons-d1fb5791.js";function Ve(s,t,e){const l=s.slice();return l[4]=t[e],l}function ye(s,t){let e,l=t[4].text+"",o,a;return{key:s,first:null,c(){e=S("option"),o=q(l),this.h()},l(i){e=w(i,"OPTION",{});var n=N(e);o=A(n,l),n.forEach(d),this.h()},h(){e.__value=a=t[4].value,e.value=e.__value,this.first=e},m(i,n){F(i,e,n),h(e,o)},p(i,n){t=i,n&4&&l!==(l=t[4].text+"")&&he(o,l),n&4&&a!==(a=t[4].value)&&(e.__value=a,e.value=e.__value)},d(i){i&&d(e)}}}function lt(s){let t,e,l,o,a=[],i=new Map,n,f,r=s[2];const m=u=>u[4].value;for(let u=0;u<r.length;u+=1){let c=Ve(s,r,u),E=m(c);i.set(E,a[u]=ye(E,c))}return{c(){t=S("div"),e=S("div"),l=S("div"),o=S("select");for(let u=0;u<a.length;u+=1)a[u].c();this.h()},l(u){t=w(u,"DIV",{class:!0});var c=N(t);e=w(c,"DIV",{class:!0});var E=N(e);l=w(E,"DIV",{class:!0});var v=N(l);o=w(v,"SELECT",{});var _=N(o);for(let p=0;p<a.length;p+=1)a[p].l(_);_.forEach(d),v.forEach(d),E.forEach(d),c.forEach(d),this.h()},h(){s[0]===void 0&&qe(()=>s[3].call(o)),D(l,"class","select is-fullwidth"),W(l,"is-fullwidth",s[1]),D(e,"class","control"),D(t,"class","field")},m(u,c){F(u,t,c),h(t,e),h(e,l),h(l,o);for(let E=0;E<a.length;E+=1)a[E].m(o,null);ge(o,s[0]),n||(f=X(o,"change",s[3]),n=!0)},p(u,[c]){c&4&&(r=u[2],a=pe(a,c,m,1,u,r,i,o,be,ye,null,Ve)),c&5&&ge(o,u[0]),c&2&&W(l,"is-fullwidth",u[1])},i:te,o:te,d(u){u&&d(t);for(let c=0;c<a.length;c+=1)a[c].d();n=!1,f()}}}function st(s,t,e){let{fullwidth:l=!1}=t,{options:o=[]}=t,{value:a=""}=t;function i(){a=Ae(this),e(0,a),e(2,o)}return s.$$set=n=>{"fullwidth"in n&&e(1,l=n.fullwidth),"options"in n&&e(2,o=n.options),"value"in n&&e(0,a=n.value)},[a,l,o,i]}class He extends fe{constructor(t){super(),ce(this,t,st,lt,de,{fullwidth:1,options:2,value:0})}}function Be(s,t,e){const l=s.slice();return l[6]=t[e],l}function Le(s,t){let e,l=t[6].text+"",o,a;return{key:s,first:null,c(){e=S("option"),o=q(l),this.h()},l(i){e=w(i,"OPTION",{});var n=N(e);o=A(n,l),n.forEach(d),this.h()},h(){e.__value=a=t[6].value,e.value=e.__value,this.first=e},m(i,n){F(i,e,n),h(e,o)},p(i,n){t=i,n&4&&l!==(l=t[6].text+"")&&he(o,l),n&4&&a!==(a=t[6].value)&&(e.__value=a,e.value=e.__value)},d(i){i&&d(e)}}}function it(s){let t,e,l,o,a=[],i=new Map,n,f,r,m,u,c,E=s[2];const v=_=>_[6].value;for(let _=0;_<E.length;_+=1){let p=Be(s,E,_),g=v(p);i.set(g,a[_]=Le(g,p))}return{c(){t=S("div"),e=S("div"),l=S("div"),o=S("select");for(let _=0;_<a.length;_+=1)a[_].c();n=M(),f=S("div"),r=S("button"),m=q(s[3]),this.h()},l(_){t=w(_,"DIV",{class:!0});var p=N(t);e=w(p,"DIV",{class:!0});var g=N(e);l=w(g,"DIV",{class:!0});var T=N(l);o=w(T,"SELECT",{});var V=N(o);for(let k=0;k<a.length;k+=1)a[k].l(V);V.forEach(d),T.forEach(d),g.forEach(d),n=R(p),f=w(p,"DIV",{class:!0});var O=N(f);r=w(O,"BUTTON",{class:!0});var z=N(r);m=A(z,s[3]),z.forEach(d),O.forEach(d),p.forEach(d),this.h()},h(){s[0]===void 0&&qe(()=>s[5].call(o)),D(l,"class","select is-fullwidth"),W(l,"is-fullwidth",s[1]),D(e,"class","control is-expanded"),W(e,"is-expanded",s[1]),D(r,"class","button"),D(f,"class","control"),D(t,"class","field has-addons")},m(_,p){F(_,t,p),h(t,e),h(e,l),h(l,o);for(let g=0;g<a.length;g+=1)a[g].m(o,null);ge(o,s[0]),h(t,n),h(t,f),h(f,r),h(r,m),u||(c=[X(o,"change",s[5]),X(r,"click",function(){Je(s[4])&&s[4].apply(this,arguments)})],u=!0)},p(_,[p]){s=_,p&4&&(E=s[2],a=pe(a,p,v,1,s,E,i,o,be,Le,null,Be)),p&5&&ge(o,s[0]),p&2&&W(l,"is-fullwidth",s[1]),p&2&&W(e,"is-expanded",s[1]),p&8&&he(m,s[3])},i:te,o:te,d(_){_&&d(t);for(let p=0;p<a.length;p+=1)a[p].d();u=!1,Pe(c)}}}function nt(s,t,e){let{fullwidth:l=!1}=t,{options:o=[]}=t,{value:a=""}=t,{buttonText:i=""}=t,{onButtonClick:n=()=>{}}=t;function f(){a=Ae(this),e(0,a),e(2,o)}return s.$$set=r=>{"fullwidth"in r&&e(1,l=r.fullwidth),"options"in r&&e(2,o=r.options),"value"in r&&e(0,a=r.value),"buttonText"in r&&e(3,i=r.buttonText),"onButtonClick"in r&&e(4,n=r.onButtonClick)},[a,l,o,i,n,f]}class at extends fe{constructor(t){super(),ce(this,t,nt,it,de,{fullwidth:1,options:2,value:0,buttonText:3,onButtonClick:4})}}function Ce(s,t,e){const l=s.slice();return l[19]=t[e],l}function ot(s){let t,e,l;function o(i){s[13](i)}let a={options:s[4],fullwidth:!0};return s[0].criteria!==void 0&&(a.value=s[0].criteria),t=new He({props:a}),Y.push(()=>Z(t,"value",o)),{c(){le(t.$$.fragment)},l(i){se(t.$$.fragment,i)},m(i,n){ie(t,i,n),l=!0},p(i,n){const f={};n&16&&(f.options=i[4]),!e&&n&1&&(e=!0,f.value=i[0].criteria,x(()=>e=!1)),t.$set(f)},i(i){l||(P(t.$$.fragment,i),l=!0)},o(i){H(t.$$.fragment,i),l=!1},d(i){ne(t,i)}}}function ut(s){let t,e,l;function o(i){s[12](i)}let a={options:s[4],fullwidth:!0,buttonText:"Select",onButtonClick:s[7]};return s[0].criteria!==void 0&&(a.value=s[0].criteria),t=new at({props:a}),Y.push(()=>Z(t,"value",o)),{c(){le(t.$$.fragment)},l(i){se(t.$$.fragment,i)},m(i,n){ie(t,i,n),l=!0},p(i,n){const f={};n&16&&(f.options=i[4]),!e&&n&1&&(e=!0,f.value=i[0].criteria,x(()=>e=!1)),t.$set(f)},i(i){l||(P(t.$$.fragment,i),l=!0)},o(i){H(t.$$.fragment,i),l=!1},d(i){ne(t,i)}}}function Oe(s,t){let e,l=t[19].id+"",o,a,i=`${t[19].left/2}px`,n=`${t[19].top/2}px`,f,r;function m(){return t[15](t[19])}return{key:s,first:null,c(){e=S("div"),o=q(l),a=M(),this.h()},l(u){e=w(u,"DIV",{class:!0});var c=N(e);o=A(c,l),a=R(c),c.forEach(d),this.h()},h(){D(e,"class","seat-box svelte-tanoen"),W(e,"has-background-primary",t[19].id===t[3]),W(e,"has-text-light",t[19].id===t[3]),ve(e,"left",i,!1),ve(e,"top",n,!1),this.first=e},m(u,c){F(u,e,c),h(e,o),h(e,a),f||(r=X(e,"click",m),f=!0)},p(u,c){t=u,c&2&&l!==(l=t[19].id+"")&&he(o,l),c&10&&W(e,"has-background-primary",t[19].id===t[3]),c&10&&W(e,"has-text-light",t[19].id===t[3]),c&2&&i!==(i=`${t[19].left/2}px`)&&ve(e,"left",i,!1),c&2&&n!==(n=`${t[19].top/2}px`)&&ve(e,"top",n,!1)},d(u){u&&d(e),f=!1,r()}}}function rt(s){let t,e,l,o,a,i,n,f,r,m=[],u=new Map,c=s[1];const E=v=>v[19].id;for(let v=0;v<c.length;v+=1){let _=Ce(s,c,v),p=E(_);u.set(p,m[v]=Oe(p,_))}return{c(){t=S("div"),e=S("h4"),l=q("Front"),o=M(),a=S("div"),i=S("h4"),n=q("Left"),f=M(),r=S("div");for(let v=0;v<m.length;v+=1)m[v].c();this.h()},l(v){t=w(v,"DIV",{class:!0});var _=N(t);e=w(_,"H4",{class:!0});var p=N(e);l=A(p,"Front"),p.forEach(d),o=R(_),a=w(_,"DIV",{class:!0});var g=N(a);i=w(g,"H4",{class:!0});var T=N(i);n=A(T,"Left"),T.forEach(d),f=R(g),r=w(g,"DIV",{class:!0});var V=N(r);for(let O=0;O<m.length;O+=1)m[O].l(V);V.forEach(d),g.forEach(d),_.forEach(d),this.h()},h(){D(e,"class","title is-4 has-text-centered mb-0 front-heading svelte-tanoen"),D(i,"class","title is-4 has-text-centered left-heading svelte-tanoen"),D(r,"class","room-container svelte-tanoen"),D(a,"class","is-flex"),D(t,"class","box")},m(v,_){F(v,t,_),h(t,e),h(e,l),h(t,o),h(t,a),h(a,i),h(i,n),h(a,f),h(a,r);for(let p=0;p<m.length;p+=1)m[p].m(r,null)},p(v,_){_&266&&(c=v[1],m=pe(m,_,E,1,v,c,u,r,be,Oe,null,Ce))},d(v){v&&d(t);for(let _=0;_<m.length;_+=1)m[_].d()}}}function ft(s){let t,e,l,o;return{c(){t=S("button"),e=q("Select"),this.h()},l(a){t=w(a,"BUTTON",{class:!0});var i=N(t);e=A(i,"Select"),i.forEach(d),this.h()},h(){D(t,"class","button is-primary")},m(a,i){F(a,t,i),h(t,e),l||(o=X(t,"click",s[9]),l=!0)},p:te,d(a){a&&d(t),l=!1,o()}}}function ct(s){let t,e,l,o,a,i,n,f,r,m,u,c,E,v,_,p,g,T;function V(I){s[11](I)}let O={options:s[5],fullwidth:!0};s[0].type!==void 0&&(O.value=s[0].type),l=new He({props:O}),Y.push(()=>Z(l,"value",V));const z=[ut,ot],k=[];function G(I,L){return I[0].type==="seat"?0:1}i=G(s),n=k[i]=z[i](s);function ue(I){s[16](I)}let $={title:"Select Seat",width:"800px",$$slots:{footer:[ft],body:[rt]},$$scope:{ctx:s}};return s[2]!==void 0&&($.active=s[2]),v=new tt({props:$}),Y.push(()=>Z(v,"active",ue)),{c(){t=S("div"),e=S("div"),le(l.$$.fragment),a=M(),n.c(),f=M(),r=S("div"),m=S("div"),u=S("button"),c=q("Delete"),E=M(),le(v.$$.fragment),this.h()},l(I){t=w(I,"DIV",{class:!0});var L=N(t);e=w(L,"DIV",{class:!0});var U=N(e);se(l.$$.fragment,U),a=R(U),n.l(U),f=R(U),r=w(U,"DIV",{class:!0});var j=N(r);m=w(j,"DIV",{class:!0});var J=N(m);u=w(J,"BUTTON",{class:!0});var _e=N(u);c=A(_e,"Delete"),_e.forEach(d),J.forEach(d),j.forEach(d),U.forEach(d),L.forEach(d),E=R(I),se(v.$$.fragment,I),this.h()},h(){D(u,"class","button is-danger"),D(m,"class","control"),D(r,"class","field"),D(e,"class","field-body"),D(t,"class","field is-horizontal")},m(I,L){F(I,t,L),h(t,e),ie(l,e,null),h(e,a),k[i].m(e,null),h(e,f),h(e,r),h(r,m),h(m,u),h(u,c),F(I,E,L),ie(v,I,L),p=!0,g||(T=X(u,"click",s[14]),g=!0)},p(I,[L]){const U={};!o&&L&1&&(o=!0,U.value=I[0].type,x(()=>o=!1)),l.$set(U);let j=i;i=G(I),i===j?k[i].p(I,L):(ze(),H(k[j],1,1,()=>{k[j]=null}),Ge(),n=k[i],n?n.p(I,L):(n=k[i]=z[i](I),n.c()),P(n,1),n.m(e,f));const J={};L&4194314&&(J.$$scope={dirty:L,ctx:I}),!_&&L&4&&(_=!0,J.active=I[2],x(()=>_=!1)),v.$set(J)},i(I){p||(P(l.$$.fragment,I),P(n),P(v.$$.fragment,I),p=!0)},o(I){H(l.$$.fragment,I),H(n),H(v.$$.fragment,I),p=!1},d(I){I&&d(t),ne(l),k[i].d(),I&&d(E),ne(v,I),g=!1,T()}}}function dt(s,t,e){let l;const o=Ke();let{value:a={type:"nogroup",criteria:""}}=t,{otherStudents:i=[]}=t,{seats:n=[]}=t,f=!1,r=null;const m=[{value:"nogroup",text:"Can't sit with"},{value:"location",text:"Must sit in area"},{value:"facing",text:"Must sit facing"},{value:"seat",text:"Must sit in seat #"}],u={nogroup:i,location:[{value:"front",text:"Front"},{value:"back",text:"Back"},{value:"left",text:"Left"},{value:"right",text:"Right"}],facing:[{value:"front",text:"Front"},{value:"back",text:"Back"},{value:"left",text:"Left"},{value:"right",text:"Right"}]},c=k=>{o("delete",{id:k})},E=()=>{e(3,r=a.criteria),e(2,f=!0)},v=k=>{e(3,r=k)},_=()=>{e(0,a.criteria=r,a),e(2,f=!1)};function p(k){s.$$.not_equal(a.type,k)&&(a.type=k,e(0,a))}function g(k){s.$$.not_equal(a.criteria,k)&&(a.criteria=k,e(0,a))}function T(k){s.$$.not_equal(a.criteria,k)&&(a.criteria=k,e(0,a))}const V=()=>c(a.id),O=k=>v(k.id);function z(k){f=k,e(2,f)}return s.$$set=k=>{"value"in k&&e(0,a=k.value),"otherStudents"in k&&e(10,i=k.otherStudents),"seats"in k&&e(1,n=k.seats)},s.$$.update=()=>{s.$$.dirty&3&&e(4,l=a.type==="seat"?n.map(k=>({value:k.id,text:k.id})):u[a.type])},[a,n,f,r,l,m,c,E,v,_,i,p,g,T,V,O,z]}class ht extends fe{constructor(t){super(),ce(this,t,dt,ct,de,{value:0,otherStudents:10,seats:1})}}function Fe(s){let t,e;return{c(){t=S("label"),e=q(s[1]),this.h()},l(l){t=w(l,"LABEL",{for:!0,class:!0});var o=N(t);e=A(o,s[1]),o.forEach(d),this.h()},h(){D(t,"for","txtFirstName"),D(t,"class","label")},m(l,o){F(l,t,o),h(t,e)},p(l,o){o&2&&he(e,l[1])},d(l){l&&d(t)}}}function _t(s){let t,e,l,o,a,i,n=s[1]&&Fe(s);return{c(){t=S("div"),n&&n.c(),e=M(),l=S("div"),o=S("input"),this.h()},l(f){t=w(f,"DIV",{class:!0});var r=N(t);n&&n.l(r),e=R(r),l=w(r,"DIV",{id:!0,class:!0});var m=N(l);o=w(m,"INPUT",{class:!0}),m.forEach(d),r.forEach(d),this.h()},h(){D(o,"class","input"),D(l,"id","txtFirstName"),D(l,"class","control"),D(t,"class","field")},m(f,r){F(f,t,r),n&&n.m(t,null),h(t,e),h(t,l),h(l,o),Te(o,s[0]),a||(i=X(o,"input",s[2]),a=!0)},p(f,[r]){f[1]?n?n.p(f,r):(n=Fe(f),n.c(),n.m(t,e)):n&&(n.d(1),n=null),r&1&&o.value!==f[0]&&Te(o,f[0])},i:te,o:te,d(f){f&&d(t),n&&n.d(),a=!1,i()}}}function vt(s,t,e){let{value:l=""}=t,{label:o=""}=t;function a(){l=this.value,e(0,l)}return s.$$set=i=>{"value"in i&&e(0,l=i.value),"label"in i&&e(1,o=i.label)},[l,o,a]}class Me extends fe{constructor(t){super(),ce(this,t,vt,_t,de,{value:0,label:1})}}ae.disable_scroll_handling;const gt=ae.goto;ae.invalidate;ae.prefetch;ae.prefetch_routes;ae.before_navigate;ae.after_navigate;function Re(s,t,e){const l=s.slice();return l[14]=t[e],l[15]=t,l[16]=e,l}function Ue(s){let t,e,l,o,a,i,n;function f(u){s[12](u,s[14],s[15],s[16])}function r(u){s[13](u)}let m={seats:s[3]};return s[14]!==void 0&&(m.value=s[14]),s[4]!==void 0&&(m.otherStudents=s[4]),l=new ht({props:m}),Y.push(()=>Z(l,"value",f)),Y.push(()=>Z(l,"otherStudents",r)),l.$on("delete",s[7]),{c(){t=S("div"),e=S("div"),le(l.$$.fragment),i=M(),this.h()},l(u){t=w(u,"DIV",{class:!0});var c=N(t);e=w(c,"DIV",{class:!0});var E=N(e);se(l.$$.fragment,E),E.forEach(d),i=R(c),c.forEach(d),this.h()},h(){D(e,"class","field-body"),D(t,"class","field is-horizontal")},m(u,c){F(u,t,c),h(t,e),ie(l,e,null),h(t,i),n=!0},p(u,c){s=u;const E={};c&8&&(E.seats=s[3]),!o&&c&4&&(o=!0,E.value=s[14],x(()=>o=!1)),!a&&c&16&&(a=!0,E.otherStudents=s[4],x(()=>a=!1)),l.$set(E)},i(u){n||(P(l.$$.fragment,u),n=!0)},o(u){H(l.$$.fragment,u),n=!1},d(u){u&&d(t),ne(l)}}}function mt(s){let t,e,l,o,a,i,n,f,r,m,u,c,E,v,_,p,g,T,V,O,z,k,G,ue,$,I,L,U,j,J;function _e(b){s[10](b)}let ke={label:"First Name"};s[0]!==void 0&&(ke.value=s[0]),n=new Me({props:ke}),Y.push(()=>Z(n,"value",_e));function je(b){s[11](b)}let Ee={label:"Last Name"};s[1]!==void 0&&(Ee.value=s[1]),m=new Me({props:Ee}),Y.push(()=>Z(m,"value",je));let ee=s[2],y=[];for(let b=0;b<ee.length;b+=1)y[b]=Ue(Re(s,ee,b));const We=b=>H(y[b],1,1,()=>{y[b]=null});return{c(){t=S("div"),e=S("div"),l=S("fieldset"),o=S("legend"),a=q("Student Info"),i=M(),le(n.$$.fragment),r=M(),le(m.$$.fragment),c=M(),E=S("div"),v=S("fieldset"),_=S("legend"),p=q("Seating Rules"),g=M(),T=S("div"),V=S("button"),O=q("Add"),z=M();for(let b=0;b<y.length;b+=1)y[b].c();k=M(),G=S("button"),ue=q("Save"),$=M(),I=S("a"),L=q("Cancel"),this.h()},l(b){t=w(b,"DIV",{class:!0});var B=N(t);e=w(B,"DIV",{class:!0});var K=N(e);l=w(K,"FIELDSET",{class:!0});var Q=N(l);o=w(Q,"LEGEND",{class:!0});var C=N(o);a=A(C,"Student Info"),C.forEach(d),i=R(Q),se(n.$$.fragment,Q),r=R(Q),se(m.$$.fragment,Q),Q.forEach(d),K.forEach(d),c=R(B),E=w(B,"DIV",{class:!0});var re=N(E);v=w(re,"FIELDSET",{class:!0});var oe=N(v);_=w(oe,"LEGEND",{class:!0});var Se=N(_);p=A(Se,"Seating Rules"),Se.forEach(d),g=R(oe),T=w(oe,"DIV",{class:!0});var we=N(T);V=w(we,"BUTTON",{class:!0});var Ie=N(V);O=A(Ie,"Add"),Ie.forEach(d),we.forEach(d),z=R(oe);for(let me=0;me<y.length;me+=1)y[me].l(oe);oe.forEach(d),re.forEach(d),B.forEach(d),k=R(b),G=w(b,"BUTTON",{class:!0});var De=N(G);ue=A(De,"Save"),De.forEach(d),$=R(b),I=w(b,"A",{class:!0,href:!0});var Ne=N(I);L=A(Ne,"Cancel"),Ne.forEach(d),this.h()},h(){D(o,"class","subtitle is-4"),D(l,"class","box"),D(e,"class","column"),D(_,"class","subtitle is-4"),D(V,"class","button is-primary"),D(T,"class","field"),D(v,"class","box"),D(E,"class","column"),D(t,"class","columns"),D(G,"class","button is-primary"),D(I,"class","button"),D(I,"href","/roster")},m(b,B){F(b,t,B),h(t,e),h(e,l),h(l,o),h(o,a),h(l,i),ie(n,l,null),h(l,r),ie(m,l,null),h(t,c),h(t,E),h(E,v),h(v,_),h(_,p),h(v,g),h(v,T),h(T,V),h(V,O),h(v,z);for(let K=0;K<y.length;K+=1)y[K].m(v,null);F(b,k,B),F(b,G,B),h(G,ue),F(b,$,B),F(b,I,B),h(I,L),U=!0,j||(J=[X(V,"click",s[6]),X(G,"click",s[5])],j=!0)},p(b,[B]){const K={};!f&&B&1&&(f=!0,K.value=b[0],x(()=>f=!1)),n.$set(K);const Q={};if(!u&&B&2&&(u=!0,Q.value=b[1],x(()=>u=!1)),m.$set(Q),B&156){ee=b[2];let C;for(C=0;C<ee.length;C+=1){const re=Re(b,ee,C);y[C]?(y[C].p(re,B),P(y[C],1)):(y[C]=Ue(re),y[C].c(),P(y[C],1),y[C].m(v,null))}for(ze(),C=ee.length;C<y.length;C+=1)We(C);Ge()}},i(b){if(!U){P(n.$$.fragment,b),P(m.$$.fragment,b);for(let B=0;B<ee.length;B+=1)P(y[B]);U=!0}},o(b){H(n.$$.fragment,b),H(m.$$.fragment,b),y=y.filter(Boolean);for(let B=0;B<y.length;B+=1)H(y[B]);U=!1},d(b){b&&d(t),ne(n),ne(m),Qe(y,b),b&&d(k),b&&d(G),b&&d($),b&&d(I),j=!1,Pe(J)}}}function pt(s,t,e){let l,{firstName:o=""}=t,{lastName:a=""}=t,{id:i=""}=t,{rules:n=[]}=t,f=[],r=[];const m=async()=>{!o||!a||(i?await et({id:i,firstName:o,lastName:a,rules:n}):(e(8,i=await xe()),await $e({id:i,firstName:o,lastName:a,rules:n})),await gt("/roster"))},u=()=>{const g=n.length>0?Math.max(...n.map(V=>V.id))+1:1,T={type:"nogroup",criteria:"",id:g};e(2,n=[...n,T])},c=g=>{const T=g.detail.id;e(2,n=n.filter(V=>V.id!==T))};Xe(async()=>{const g=await Ye();e(9,f=g.map(T=>({value:T.id,text:`${T.firstName} ${T.lastName}`}))),e(3,r=await Ze())});function E(g){o=g,e(0,o)}function v(g){a=g,e(1,a)}function _(g,T,V,O){V[O]=g,e(2,n)}function p(g){l=g,e(4,l),e(9,f),e(8,i)}return s.$$set=g=>{"firstName"in g&&e(0,o=g.firstName),"lastName"in g&&e(1,a=g.lastName),"id"in g&&e(8,i=g.id),"rules"in g&&e(2,n=g.rules)},s.$$.update=()=>{s.$$.dirty&768&&e(4,l=f.filter(g=>g.value!=i))},[o,a,n,r,l,m,u,c,i,f,E,v,_,p]}class wt extends fe{constructor(t){super(),ce(this,t,pt,mt,de,{firstName:0,lastName:1,id:8,rules:2})}}export{wt as S};
