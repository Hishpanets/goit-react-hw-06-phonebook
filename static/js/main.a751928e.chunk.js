(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={ListTable:"ContactsList_ListTable__2djlI"}},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),s=n(17),b=n(4),i=n(14),l=n(3),j=n(31),u=Object(l.b)("contacts/add",(function(e){return{payload:Object(i.a)(Object(i.a)({},e),{},{id:j.generate()})}})),d=Object(l.b)("contacts/delete"),m=Object(l.b)("contacts/changeFilter"),O=n(19),h=n.n(O),p=n(1),f=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){var t=e.contacts,n=t.filter,c=t.items,a=n.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(a)}))}));return Object(p.jsx)("table",{className:h.a.ListTable,children:Object(p.jsx)("tbody",{children:t.map((function(t){var n=t.name,c=t.number,a=t.id;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:n}),Object(p.jsx)("td",{children:c}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return function(t){return e(d(t))}(a)},children:"delete"})})]},a)}))})})},x=n(16),v=n(6),F=n.n(v);var C=function(){var e=Object(b.b)(),t=Object(c.useState)(""),n=Object(x.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),s=Object(x.a)(o,2),i=s[0],l=s[1],j=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":l(c);break;default:return}};return Object(p.jsxs)("form",{className:F.a.Form,onSubmit:function(t){t.preventDefault(),""!==a.trim()&&""!==i.trim()?(e(u({name:a,number:i})),r(""),l("")):alert("Fill all fields!")},children:[Object(p.jsx)("label",{className:F.a.FormLabel,children:Object(p.jsx)("input",{className:F.a.FormInput,type:"text",name:"name",value:a,onChange:j,placeholder:"Enter name...",required:!0})}),Object(p.jsx)("label",{className:F.a.FormLabel,children:Object(p.jsx)("input",{className:F.a.FormInput,type:"tel",name:"number",value:i,onChange:j,placeholder:"Number...",required:!0})}),Object(p.jsx)("button",{type:"submit",className:F.a.btn,children:"Add contact"})]})},y=function(){var e=Object(b.b)();return Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"text",name:"filter",onChange:function(t){return e(m(t.target.value))}})})};var _,g=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)("p",{className:"App-find",children:"Find contacts by name"}),Object(p.jsx)(y,{}),Object(p.jsx)(f,{})]})},L=n(5),k=n(20),w=n.n(k),N=n(7),I=n(15),T=n(2),A=Object(l.c)([],(_={},Object(N.a)(_,u,(function(e,t){var n=e.find((function(e){return e.name.toLowerCase()===t.payload.name.toLowerCase()}));if(!n)return[].concat(Object(I.a)(e),[t.payload]);alert("".concat(n.name," is already in contacts."))})),Object(N.a)(_,d,(function(e,t){var n=e.filter((function(e){return e.id!==t.payload}));return Object(I.a)(n)})),_)),S=Object(l.c)("",Object(N.a)({},m,(function(e,t){return t.payload}))),q=Object(T.b)({items:A,filter:S}),z={key:"contacts",storage:w.a,blacklist:["filter"]},D=Object(l.a)({reducer:{contacts:Object(L.g)(z,q)},middleware:Object(l.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}}),devTools:!1}),E={store:D,persistor:Object(L.h)(D)};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b.a,{store:E.store,children:Object(p.jsx)(s.a,{loading:null,persistor:E.persistor,children:Object(p.jsx)(g,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={Form:"ContactForm_Form__1CQxL",FormLabel:"ContactForm_FormLabel__3DXQV",FormInput:"ContactForm_FormInput__2LZz0",btn:"ContactForm_btn__1fqI9"}}},[[43,1,2]]]);
//# sourceMappingURL=main.a751928e.chunk.js.map