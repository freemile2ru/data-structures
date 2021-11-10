(this["webpackJsonpdata-structures"]=this["webpackJsonpdata-structures"]||[]).push([[0],{82:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(67),i=n.n(c),u=(n(82),n(60)),s=n(4),o=n(115),l=n(114),f=n(113),h=n(108),d=n(7),b=n.n(d),p=(n(83),n(84),n(85),n(6)),x=n.n(p),v=n(11),m=n(39),j=n(109),k=n(112),g=n(110),O=n(33),y=n(25),w=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(y.a)(this,e),this.value=t,this.next=n},C=function(){function e(t){Object(y.a)(this,e),this.head=new w(t),this.tail=this.head,this.length=1}return Object(O.a)(e,[{key:"append",value:function(e){this.tail.next=new w(e),this.tail=this.tail.next,this.length++}},{key:"prepend",value:function(e){var t=this.head;this.head=new w(e,this.head.next),this.head.next=t,this.length++}},{key:"convertToArray",value:function(){for(var e=this.head,t=[];e;)t.push(e.value),e=e.next;return t}},{key:"insert",value:function(e,t){if(e>=this.length)this.append(t);else if(0===e)this.prepend(t);else{var n=this.traverseToIndex(e),r=n.next,a=new w(t,r);n.next=a}this.length++}},{key:"remove",value:function(e){if(0===e)this.head=this.head.next;else{var t=this.traverseToIndex(e),n=t.next;t.next=n.next}this.length--}},{key:"traverseToIndex",value:function(e){for(var t=this.head,n=0;n<=e;){if(n===e-1)return t;t=t.next,n++}}}]),e}(),S=n(3),I=function(e){var t=e.id,n=e.item;return Object(S.jsxs)("div",{className:"face",id:"animate".concat(t),children:[Object(S.jsxs)("div",{className:"eyes",children:[Object(S.jsx)("div",{className:"eye"}),Object(S.jsx)("div",{className:"eye"})]}),Object(S.jsx)("div",{style:{position:"absolute",fontWeight:"bold"},children:n})]})},T=function(e){e.id;var t=Object(r.useState)([]),n=Object(s.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(),u=Object(s.a)(i,2),f=u[0],d=u[1],b=Object(r.useState)(),p=Object(s.a)(b,2),O=p[0],y=p[1],w=Object(r.useState)(),T=Object(s.a)(w,2),z=T[0],F=T[1];function W(e){document.querySelectorAll(".eye").forEach((function(t){var n=t.getBoundingClientRect().left+t.clientWidth/2,r=t.getBoundingClientRect().top+t.clientHeight/2,a=Math.atan2(e.pageX-n,e.pageY-r)*(180/Math.PI)*-1+270;t.style.transform="rotate("+a+"deg)"}))}function A(e,t,n,r){if(e.length!==t){var c=null,i=document.getElementById("animate".concat(t)),u=0,s=!0,o=!1;clearInterval(c),c=setInterval((function(){s?u++:u--;switch(i.style.top=u+"px",r){case"add":if(350===u&&(s=!1,e[t+1]!==a[t+1]?(i.style.backgroundColor="#90ee90",o=!0):i.style.backgroundColor="red"),0===u)return i.style.backgroundColor="#ffcd00",s=!0,clearInterval(c),o?void n():A(e,t+1,n,r);break;case"get":if(350===u&&(s=!1,t===z?(i.style.backgroundColor="#90ee90",o=!0):i.style.backgroundColor="red"),0===u)return i.style.backgroundColor="#ffcd00",s=!0,clearInterval(c),o?void n():A(e,t+1,n,r)}}),5)}else n()}Object(r.useEffect)((function(){var e=new C(3);d(e),c(e.convertToArray())}),[]),Object(r.useEffect)((function(){document.querySelector("body").addEventListener("mousemove",W)}),[]);var P=function(){var e=Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O&&!(z>a.length)){e.next=2;break}return e.abrupt("return");case 2:return f.insert(z,O),t=f.convertToArray(),e.next=6,new Promise((function(e){return A(t,0,e,"add")}));case 6:c(f.convertToArray()),F(0),y();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z&&!(z>a.length-1)){e.next=2;break}return e.abrupt("return");case 2:return f.remove(z),t=f.convertToArray(),e.next=6,new Promise((function(e){return A(t,0,e,"get")}));case 6:c(f.convertToArray()),F(0),y();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0===z||z>a.length-1)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,new Promise((function(e){return A(a,0,e,"get")}));case 4:F(0),y();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)(h.a,{minWidth:"95vw",children:[Object(S.jsxs)(o.a,{spacing:3,marginTop:"100px",marginLeft:"39vw",children:[Object(S.jsxs)(m.a,{isRequired:!0,children:[Object(S.jsx)(j.a,{children:"Index"}),Object(S.jsxs)(k.c,{placeholder:"Index",size:"lg",maxWidth:"300px",type:"number",max:a.length,onChange:function(e){return F(parseInt(e))},min:0,children:[Object(S.jsx)(k.d,{}),Object(S.jsxs)(k.e,{children:[Object(S.jsx)(k.b,{}),Object(S.jsx)(k.a,{})]})]})]}),Object(S.jsxs)(m.a,{id:"first-name",isRequired:!0,children:[Object(S.jsx)(j.a,{children:"Value"}),Object(S.jsx)(g.a,{placeholder:"Value of Item to Add",size:"lg",maxWidth:"300px",onChange:function(e){return y(e.target.value)}})]}),Object(S.jsx)(l.a,{colorScheme:"blue",size:"lg",maxWidth:"300px",onClick:P,children:"Add Item"}),Object(S.jsx)(l.a,{colorScheme:"teal",size:"lg",maxWidth:"300px",onClick:R,children:"Get Item At Index"}),Object(S.jsx)(l.a,{colorScheme:"red",size:"lg",maxWidth:"300px",onClick:B,children:"Remove Item At Index"})]}),Object(S.jsx)(h.a,{marginTop:"100px",display:"flex",justifyContent:"center",width:"inherrit",children:a.map((function(e,t){return Object(S.jsx)(I,{id:t,item:e},e)}))})]})},z=(n(94),n(111)),F=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e(null)}),500)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function e(t){Object(y.a)(this,e),this.left=null,this.right=null,this.value=t},A=function(){function e(){var t=this;Object(y.a)(this,e),this.animateBreathFirstSearch=Object(v.a)(x.a.mark((function e(){var n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.root,a=[],(r=[]).push(n);case 4:if(!r.length){e.next=16;break}return b()("#animate".concat(n.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(n.value)).effect("shake"),e.next=9,F();case 9:b()("#animate".concat(n.value)).css({backgroundColor:"#ffcd00"}),n=r.shift(),a.push(n.value),n.left&&r.push(n.left),n.right&&r.push(n.right),e.next=4;break;case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)}))),this.breathFirstSearch=function(){var e=t.root,n=[],r=[];for(n.push(e);n.length;)e=n.shift(),r.push(e.value),e.left&&n.push(e.left),e.right&&n.push(e.right);return r},this.root=null}return Object(O.a)(e,[{key:"animateInsert",value:function(){var e=Object(v.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.root){e.next=4;break}this.root=new W(t),e.next=48;break;case 4:n=!1,r=this.root;case 6:if(n){e.next=48;break}if(!(r.value<t)){e.next=26;break}if(r.right){e.next=18;break}return b()("#animate".concat(r.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(r.value)).effect("shake"),e.next=13,F();case 13:b()("#animate".concat(r.value)).css({backgroundColor:"#ffcd00"}),r.right=new W(t),n=!0,e.next=24;break;case 18:return b()("#animate".concat(r.value)).css({backgroundColor:"red"}),b()("#animate".concat(r.value)).effect("shake"),e.next=22,F();case 22:b()("#animate".concat(r.value)).css({backgroundColor:"#ffcd00"}),r=r.right;case 24:e.next=46;break;case 26:if(!(r.value>t)){e.next=45;break}if(r.left){e.next=37;break}return b()("#animate".concat(r.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(r.value)).effect("shake"),e.next=32,F();case 32:r.left=new W(t),n=!0,b()("#animate".concat(r.value)).css({backgroundColor:"#ffcd00"}),e.next=43;break;case 37:return b()("#animate".concat(r.value)).css({backgroundColor:"red"}),b()("#animate".concat(r.value)).effect("shake"),e.next=41,F();case 41:b()("#animate".concat(r.value)).css({backgroundColor:"#ffcd00"}),r=r.left;case 43:e.next=46;break;case 45:return e.abrupt("return");case 46:e.next=6;break;case 48:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"insert",value:function(){var e=Object(v.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.root)for(n=!1,r=this.root;!n;)r.value<t?r.right?r=r.right:(r.right=new W(t),n=!0):r.value>t&&(r.left?r=r.left:(r.left=new W(t),n=!0));else this.root=new W(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"lookup",value:function(e){if(this.root){for(var t=this.root;t;)if(t.value<e)t=t.right;else{if(!(t.value>e))return!0;t=t.left}return!1}return null}},{key:"animateLookup",value:function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.root){e.next=4;break}return e.abrupt("return",null);case 4:n=this.root;case 5:if(!n){e.next=34;break}if(!(n.value<t)){e.next=15;break}return b()("#animate".concat(n.value)).css({backgroundColor:"red"}),b()("#animate".concat(n.value)).effect("shake"),e.next=11,F();case 11:b()("#animate".concat(n.value)).css({backgroundColor:"#ffcd00"}),n=n.right,e.next=32;break;case 15:if(!(n.value>t)){e.next=24;break}return b()("#animate".concat(n.value)).css({backgroundColor:"red"}),b()("#animate".concat(n.value)).effect("shake"),e.next=20,F();case 20:b()("#animate".concat(n.value)).css({backgroundColor:"#ffcd00"}),n=n.left,e.next=32;break;case 24:return b()("#animate".concat(n.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(n.value)).effect("shake"),e.next=28,F();case 28:return e.next=30,F();case 30:return b()("#animate".concat(n.value)).css({backgroundColor:"#ffcd00"}),e.abrupt("return",!0);case 32:e.next=5;break;case 34:return e.abrupt("return",!1);case 35:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(e){if(!this.root)return null;for(var t=this.root,n=this.root,r=!0;t;)if(t.value<e)n=t,t=t.right,r=!1;else if(t.value>e)n=t,t=t.left,r=!0;else if(t.left||t.right){if(t.right){var a=t.left;(t=t.right).left=a,r?n.left=t:n.right=t;break}t=t.left,r?n.left=t:n.right=t}else r?n.left=null:n.right=null,t=null}},{key:"animateRemove",value:function(){var e=Object(v.a)(x.a.mark((function e(t){var n,r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.root){e.next=4;break}return e.abrupt("return",null);case 4:n=this.root,r=this.root,a=!0;case 7:if(!n){e.next=52;break}if(!(n.value<t)){e.next=19;break}return b()("#animate".concat(n.value)).css({backgroundColor:"red"}),b()("#animate".concat(n.value)).effect("shake"),e.next=13,F();case 13:b()("#animate".concat(n.value)).css({backgroundColor:"#ffcd00"}),r=n,n=n.right,a=!1,e.next=50;break;case 19:if(!(n.value>t)){e.next=30;break}return b()("#animate".concat(n.value)).css({backgroundColor:"red"}),b()("#animate".concat(n.value)).effect("shake"),e.next=24,F();case 24:b()("#animate".concat(n.value)).css({backgroundColor:"#ffcd00"}),r=n,n=n.left,a=!0,e.next=50;break;case 30:return b()("#animate".concat(n.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(n.value)).effect("shake"),e.next=34,F();case 34:if(b()("#animate".concat(n.value)).css({backgroundColor:"#ffcd00"}),n.left||n.right){e.next=40;break}a?r.left=null:r.right=null,n=null,e.next=50;break;case 40:if(n.right){e.next=45;break}n=n.left,a?r.left=n:r.right=n,e.next=50;break;case 45:return c=n.left,(n=n.right).left=c,a?r.left=n:r.right=n,e.abrupt("break",52);case 50:e.next=7;break;case 52:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"BreadthFirstSearchR",value:function(e,t){if(!e.length)return t;var n=e.shift();return t.push(n.value),n.left&&e.push(n.left),n.right&&e.push(n.right),this.BreadthFirstSearchR(e,t)}},{key:"DFTPreOrder",value:function(){var e=Object(v.a)(x.a.mark((function e(){var t,n=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,P(this.root,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"DFTPostOrder",value:function(){var e=Object(v.a)(x.a.mark((function e(){var t,n=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,L(this.root,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"DFTInOrder",value:function(){var e=Object(v.a)(x.a.mark((function e(){var t,n=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,R(this.root,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"build",value:function(e){if(e)return{node:e.value,left:this.build(e.left),right:this.build(e.right)}}},{key:"serialize",value:function(){return this.build(this.root)}}]),e}();function P(e,t){return B.apply(this,arguments)}function B(){return(B=Object(v.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b()("#animate".concat(t.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(t.value)).effect("shake"),e.next=4,F();case 4:if(b()("#animate".concat(t.value)).css({backgroundColor:"#ffcd00"}),n.push(t.value),!t.left){e.next=9;break}return e.next=9,P(t.left,n);case 9:if(!t.right){e.next=12;break}return e.next=12,P(t.right,n);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return D.apply(this,arguments)}function D(){return(D=Object(v.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.left){e.next=3;break}return e.next=3,R(t.left,n);case 3:return b()("#animate".concat(t.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(t.value)).effect("shake"),e.next=7,F();case 7:if(b()("#animate".concat(t.value)).css({backgroundColor:"#ffcd00"}),n.push(t.value),!t.right){e.next=12;break}return e.next=12,R(t.right,n);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.left){e.next=3;break}return e.next=3,L(t.left,n);case 3:if(!t.right){e.next=6;break}return e.next=6,L(t.right,n);case 6:return b()("#animate".concat(t.value)).css({backgroundColor:"#90ee90"}),b()("#animate".concat(t.value)).effect("shake"),e.next=10,F();case 10:return b()("#animate".concat(t.value)).css({backgroundColor:"#ffcd00"}),n.push(t.value),e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),i=Object(s.a)(c,2),u=i[0],f=i[1];Object(r.useEffect)((function(){document.querySelector("body").addEventListener("mousemove",C);var e=new A;e.insert(9),e.insert(4),e.insert(6),e.insert(20),e.insert(170),e.insert(15),e.insert(1),a(e)}),[]);var d=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.animateInsert(u);case 4:a(n),f();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.animateRemove(u);case 4:f();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.animateLookup(u);case 4:f();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.animateBreathFirstSearch();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.DFTPreOrder();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.DFTInOrder();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.DFTPostOrder();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(e){document.querySelectorAll(".eye").forEach((function(t){var n=t.getBoundingClientRect().left+t.clientWidth/2,r=t.getBoundingClientRect().top+t.clientHeight/2,a=Math.atan2(e.pageX-n,e.pageY-r)*(180/Math.PI)*-1+270;t.style.transform="rotate("+a+"deg)"}))}return Object(S.jsx)(h.a,{minWidth:"95vw",children:Object(S.jsxs)(z.a,{children:[Object(S.jsxs)(o.a,{spacing:3,marginTop:"100px",children:[Object(S.jsxs)(m.a,{id:"Value",isRequired:!0,children:[Object(S.jsx)(j.a,{children:"Value"}),Object(S.jsx)(g.a,{placeholder:"Value of Item to Add",size:"lg",maxWidth:"300px",onChange:function(e){return f(e.target.value)}})]}),Object(S.jsx)(l.a,{colorScheme:"blue",size:"lg",maxWidth:"300px",onClick:d,children:"Add Item"}),Object(S.jsx)(l.a,{colorScheme:"teal",size:"lg",maxWidth:"300px",onClick:p,children:"Get Item"}),Object(S.jsx)(l.a,{colorScheme:"yellow",size:"lg",maxWidth:"300px",onClick:y,children:"Depth First Search In-order"}),Object(S.jsx)(l.a,{colorScheme:"orange",size:"lg",maxWidth:"300px",onClick:O,children:"Depth First Search Pre-order"}),Object(S.jsx)(l.a,{colorScheme:"pink",size:"lg",maxWidth:"300px",onClick:w,children:"Depth First Search Post-order"}),Object(S.jsx)(l.a,{colorScheme:"purple",size:"lg",maxWidth:"300px",onClick:k,children:"Breath First Search"}),Object(S.jsx)(l.a,{colorScheme:"red",size:"lg",maxWidth:"300px",onClick:b,children:"Remove Item"})]}),Object(S.jsx)(z.a,{flexDirection:"row",justifyContent:"center",marginTop:"100px",children:Object(S.jsx)("div",{className:"tf-tree",children:Object(S.jsx)("ul",{children:n&&n.serialize&&function e(t){if(t)return Object(S.jsxs)("li",{children:[Object(S.jsx)("span",{className:"tf-nc",children:Object(S.jsx)(I,{id:t.node,item:t.node})}),Object(S.jsxs)("ul",{children:[t.left&&e(t.left),t.right&&e(t.right)]})]})}(n.serialize())})})})]})})};var N=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],c=function(e){b()("#explode").toggle("explode"),setTimeout((function(){return a(e)}),1e3)},i=function(){return Object(S.jsxs)(o.a,{spacing:4,direction:"row",id:"explode",children:[Object(S.jsx)(l.a,{colorScheme:"teal",size:"lg",onClick:function(){return c("linkedList")},children:"Linked List"}),Object(S.jsx)(l.a,{colorScheme:"teal",size:"lg",onClick:function(){return c("tree")},children:"Binary Tree"}),Object(S.jsx)(l.a,{colorScheme:"teal",size:"lg",children:"Queue"}),Object(S.jsx)(l.a,{colorScheme:"teal",size:"lg",children:"Stack"})]})};return Object(S.jsx)(f.a,{children:Object(S.jsxs)(h.a,Object(u.a)(Object(u.a)({minWidth:"100vw",display:"flex",flexDirection:"column",alignItems:"center"},!n&&{height:"100vh",justifyContent:"center"}),{},{children:[Object(S.jsx)(i,{}),"linkedList"===n?Object(S.jsx)(T,{}):"tree"===n?Object(S.jsx)(q,{}):""]}))})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("root")),M()}},[[95,1,2]]]);
//# sourceMappingURL=main.0615be35.chunk.js.map