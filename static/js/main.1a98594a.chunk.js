(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),o=c(1);c(13),c(14);function i(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.ok?e.json():Promise.reject(new Error("Cannot load data: ".concat(e.status," ").concat(e.statusText)))}))}var d=c(6),r=c.n(d),j=c(0),b=function(e){var t=e.todos,c=e.onModalOpen,s=e.isModalOpen,a=e.selectedModalId;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.title,l=e.completed;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),Object(j.jsx)("td",{className:"is-vcentered",children:l&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!l,"has-text-success":l}),children:n})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(t)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()({"far fa-eye":!s||a!==t,"far fa-eye-slash":s&&a===t})})})})})]},t)}))})]})},u=function(e){var t=e.sortingStatus,c=e.onSelectChange,s=e.setSearchValue,a=Object(o.useState)(""),n=Object(l.a)(a,2),i=n[0],d=n[1],r=Object(o.useState)(!1),b=Object(l.a)(r,2),u=b[0],h=b[1];return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:c,children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){var t=e.target.value;d(t),s(t),h(!!t)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),u&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){d(""),s(""),h(!1)}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.todo,c=e.onClose,s=Object(o.useState)(),a=Object(l.a)(s,2),n=a[0],d=a[1],r=Object(o.useState)(!0),b=Object(l.a)(r,2),u=b[0],O=b[1],m=Object(o.useState)(""),x=Object(l.a)(m,2),f=x[0],p=x[1];return Object(o.useEffect)((function(){var e;(e=t.userId,i("/users/".concat(e))).then((function(e){d(e),O(!1)})).catch((function(e){p(e.message),O(!1)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",f?Object(j.jsx)("strong",{className:"has-text-danger",children:f}):Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.name),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},m=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),d=Object(l.a)(a,2),r=d[0],m=d[1],x=Object(o.useState)(""),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(o.useState)(!1),g=Object(l.a)(N,2),y=g[0],S=g[1],k=Object(o.useState)(0),C=Object(l.a)(k,2),w=C[0],M=C[1],T=Object(o.useState)("all"),E=Object(l.a)(T,2),I=E[0],_=E[1],L=Object(o.useState)(""),B=Object(l.a)(L,2),P=B[0],A=B[1];Object(o.useEffect)((function(){i("/todos").then((function(e){s(e),m(!1)})).catch((function(e){v(e.message),m(!1)}))}),[]);var J=Object(o.useMemo)((function(){var e=Object(n.a)(c);return"active"===I&&(e=e.filter((function(e){return!e.completed}))),"completed"===I&&(e=e.filter((function(e){return e.completed}))),P.length>0&&(e=e.filter((function(e){return e.title.toLowerCase().includes(P.toLowerCase().trim())}))),e}),[c,I,P]),V=Object(o.useMemo)((function(){return c.find((function(e){return e.id===w}))}),[c,w]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{sortingStatus:I,onSelectChange:function(e){_(e.target.value)},setSearchValue:A})}),r&&Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{})}),p&&!r&&Object(j.jsx)("p",{children:"There is nothing to show, please add todo"}),!p&&!r&&Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{todos:J,onModalOpen:function(e){S(!0),M(e)},isModalOpen:y,selectedModalId:w})})]})})}),y&&V&&Object(j.jsx)(O,{todo:V,onClose:function(){return S(!1)}})]})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1a98594a.chunk.js.map