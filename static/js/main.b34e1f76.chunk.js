(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(0),s=c.n(i),a=c(18),r=c.n(a),o=(c(73),c(37)),j=c(20),l=(c(74),c(107)),d=c(108),b=c(106),h=c(105),O=c(63),u=[{id:0,title:"White and Black",content:"Born in France",price:12e4,img:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,img:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,img:"https://codingapple1.github.io/shop/shoes3.jpg"}],x=c(16);var m=function(e){var t=Object(i.useContext)(T);return Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)(x.b,{to:"/detail/".concat(e.item.id),children:Object(n.jsx)("img",{src:e.item.img,width:"100%"})}),Object(n.jsx)("h4",{children:e.item.title}),Object(n.jsxs)("p",{children:[e.item.content," & ",e.item.price,"\uc6d0"]}),Object(n.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.item.id]]})]})},p=c(43),f=c(55),v=c(56),g=c(65),k=c(64),N=c(7),S=c(44);c(80);var C=function(e){return Object(n.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock]})};var y=function(e){return Object(i.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?Object(n.jsx)("div",{className:"mt-5",children:"\uc0c1\uc138 \uc124\uba85 \ud398\uc774\uc9c0"}):1===e.\ub204\ub978\ud0ed?Object(n.jsx)("div",{className:"mt-5",children:"\uc774\uc6a9 \ud6c4\uae30 \ud398\uc774\uc9c0"}):2===e.\ub204\ub978\ud0ed?Object(n.jsx)("div",{className:"mt-5",children:"Q&A \ud398\uc774\uc9c0"}):Object(n.jsx)("div",{className:"mt-5",children:"\ubaa8\ub974\ub294 \ub0b4\uc6a9"})},w=c(109);function I(){var e=Object(p.a)(["\n  font-size: 20px;\n  color: ",";\n"]);return I=function(){return e},e}function A(){var e=Object(p.a)(["\n  padding: 20px;\n"]);return A=function(){return e},e}s.a.Component;var B=S.a.div(A()),L=S.a.h4(I(),(function(e){return e.\uc0c9\uc0c1}));var F=function(e){var t=Object(i.useState)(!0),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(i.useState)(""),l=Object(j.a)(r,2),b=(l[0],l[1],Object(i.useContext)(T)),h=Object(i.useState)(0),O=Object(j.a)(h,2),u=O[0],x=O[1],m=Object(i.useState)(!1),p=Object(j.a)(m,2),f=p[0],v=p[1];Object(i.useEffect)((function(){console.log("created");var e=setTimeout((function(){console.log("alert \uc2e4\ud589"),a(!1)}),2e3);return function(){clearTimeout(e),console.log("exit")}}),[s]);var g=Object(N.g)().id,k=Object(N.f)(),S=e.shoes.find((function(e){return e.id==g}));return null==S?Object(n.jsx)("div",{children:"\uc5c6\ub294 \uc0c1\ud488\uc785\ub2c8\ub2e4."}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(B,{children:Object(n.jsx)(L,{"\uc0c9\uc0c1":"blue",children:"Detail"})}),!0===s?Object(n.jsx)("div",{id:"my-alert",className:"my-alert",children:Object(n.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("img",{src:S.img,width:"100%"})}),Object(n.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(n.jsx)("h4",{className:"pt-5",children:S.title}),Object(n.jsx)("p",{children:S.content}),Object(n.jsx)("p",{children:S.price}),Object(n.jsx)(C,{stock:b[S.id]}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=Object(o.a)(b);t[S.id]--,e.stocks\ubcc0\uacbd(t)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(n.jsx)("button",{className:"btn btn-info ml-1",onClick:function(){k.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(n.jsxs)(d.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(n.jsx)(d.a.Item,{className:"col-4",children:Object(n.jsx)(d.a.Link,{eventKey:"link-0",onClick:function(){v(!1),x(0)},children:"\uc0c1\uc138\uc124\uba85"})}),Object(n.jsx)(d.a.Item,{className:"col-4",children:Object(n.jsx)(d.a.Link,{eventKey:"link-1",onClick:function(){v(!1),x(1)},children:"\uc774\uc6a9\ud6c4\uae30"})}),Object(n.jsx)(d.a.Item,{className:"col-4",children:Object(n.jsx)(d.a.Link,{eventKey:"link-2",onClick:function(){v(!1),x(2)},children:"Q&A"})})]}),Object(n.jsx)(w.a,{in:f,classNames:"wow",timeout:500,children:Object(n.jsx)(y,{"\ub204\ub978\ud0ed":u,"\uc2a4\uc704\uce58\ubcc0\uacbd":v})})]})},D=c(60),K=c.n(D),T=s.a.createContext("StocksContext");var P=function(){var e=Object(i.useState)(u),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([10,11,12]),r=Object(j.a)(a,2),p=r[0],f=r[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(l.a.Brand,{href:"#home",children:"Shoes mall"}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{className:"ml-auto",children:[Object(n.jsx)(d.a.Link,{as:x.b,to:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{as:x.b,to:"/detail/0",children:"Detail"}),Object(n.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(n.jsx)(b.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(b.a.Divider,{}),Object(n.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(n.jsxs)(N.c,{children:[Object(n.jsxs)(N.a,{exact:!0,path:"/",children:[Object(n.jsxs)(h.a,{className:"background",children:[Object(n.jsx)("h1",{children:"20% Season OFF"}),Object(n.jsx)("p",{children:"A Shoes sale is one that offers some sort of savings but only for a short time. A good flash sale creates urgency, hype, and a spike in sales."}),Object(n.jsx)("p",{children:Object(n.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(T.Provider,{value:p,children:Object(n.jsx)("div",{className:"row",children:c.map((function(e){return Object(n.jsx)(m,{item:e,stocks:p},e.id)}))})}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){K.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log("\ud638\ucd9c \uc131\uacf5 :",e.data),function(e){var t=Object(o.a)(c);e.map((function(e){e.img="https://codingapple1.github.io/shop/shoes1.jpg",t.push(e)})),s(t)}(e.data)})).catch((function(){console.log("\ud638\ucd9c \uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(n.jsx)(T.Provider,{value:p,children:Object(n.jsx)(N.a,{path:"/detail/:id",children:Object(n.jsx)(F,{shoes:c,stocks:p,"stocks\ubcc0\uacbd":f})})}),Object(n.jsx)(N.a,{path:"/:id",children:Object(n.jsx)("div",{children:"\uc798\ubabb\ub41c \uc811\uadfc \uc785\ub2c8\ub2e4."})})]})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x.a,{children:Object(n.jsx)(P,{})})}),document.getElementById("root")),E()},73:function(e,t,c){},74:function(e,t,c){},80:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.b34e1f76.chunk.js.map