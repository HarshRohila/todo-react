(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),i=n(4),r=n.n(i),d=(n(16),n(9)),s=n(7),l=(n(17),n(0));function u(e){var t=e.todo,n=e.onToggleTodo,o=e.onDelete;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"checkbox",checked:t.isCompleted,onChange:function(){return n(t)}}),Object(l.jsx)("p",{className:"todo-text",style:{display:"inline"},children:t.text}),Object(l.jsx)("button",{className:"delete-btn",onClick:function(){return o(t)},children:"X"})]})}var j=function(e){var t=e.todos,n=e.onUncheckTodo,o=e.onDeleteTodo,c=t.filter((function(e){return e.isCompleted}));return Object(l.jsx)("ul",{children:c.map((function(e){return Object(l.jsx)("li",{className:"completed-todo",children:Object(l.jsx)(u,{todo:e,onToggleTodo:function(){return n(e)},onDelete:function(e){return o(e)}})},e.id)}))})},a=n(8),b=function(e){var t=e.todos,n=e.onDelete,o=e.onToggleTodo,c=e.onSortEnd,i=t.filter((function(e){return!e.isCompleted}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(x,{onSortEnd:c,useDragHandle:!0,children:i.map((function(e,t){return Object(l.jsx)(h,{index:t,component:Object(l.jsx)(u,{todo:e,onToggleTodo:o,onDelete:n})},e.id)}))})})},f=Object(a.c)((function(){return Object(l.jsx)("span",{className:"handle",children:"::"})})),h=Object(a.b)((function(e){var t=e.component;return Object(l.jsxs)("li",{className:"sortable-item",children:[Object(l.jsx)(f,{}),t]})})),x=Object(a.a)((function(e){var t=e.children;return Object(l.jsx)("ul",{children:t})})),O=n(23);function m(e){var t=e.onSubmit,n=function(e){if(e.preventDefault(),r){var n=r;d(""),t(n)}},c=Object(o.useState)(""),i=Object(s.a)(c,2),r=i[0],d=i[1];return Object(l.jsxs)("form",{onSubmit:function(e){return n(e)},children:[Object(l.jsx)("input",{type:"text",value:r,placeholder:"Enter Todo",onChange:function(e){var t=e.target;return d(t.value)}}),Object(l.jsx)("button",{type:"submit",children:"Add Todo"})]})}var p=function(){return Object(l.jsxs)("div",{className:"features",children:[Object(l.jsx)("a",{href:"https://github.com/HarshRohila/todo-react",children:"Github"}),Object(l.jsx)("h1",{children:"Features"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Add todo"}),Object(l.jsx)("li",{children:"Checkbox to toggle if todo is completed"}),Object(l.jsx)("li",{children:"Completed todo shift to bottom of list"}),Object(l.jsx)("li",{children:"X button to delete a todo"}),Object(l.jsx)("li",{children:"Not completed todos can be rearranged using handle"})]})]})};var g=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=function(e){c(n.filter((function(t){return t.id!==e.id})))},r=function(e){var t=n.find((function(t){return t.id===e.id}));t&&(t.isCompleted=!t.isCompleted,c(Object(d.a)(n)))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("h1",{children:"To-Do List"}),Object(l.jsx)(m,{onSubmit:function(e){var t={isCompleted:!1,text:e,id:Object(O.a)()};c([t].concat(Object(d.a)(n)))}}),Object(l.jsx)(b,{todos:n,onDelete:i,onToggleTodo:r,onSortEnd:function(e){var t=e.oldIndex,o=e.newIndex,i=n.filter((function(e){return!e.isCompleted})),r=i[t];!function(){var e=n.findIndex((function(e){return e.id===r.id}));n.splice(e,1),i.splice(t,1)}();var s=function(){var e=0,t=i[o-1];t&&(e=n.findIndex((function(e){return e.id===t.id}))+1);return e}();n.splice(s,0,r),c(Object(d.a)(n))}}),Object(l.jsx)(j,{todos:n,onUncheckTodo:r,onDeleteTodo:i})]}),Object(l.jsx)(p,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.d1f699e3.chunk.js.map