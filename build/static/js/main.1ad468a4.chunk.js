(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(16),n(6)),s=n(2),i=n(3),r=n(1),u=n(11),o=(n(17),n(0)),j=function(e){var t=e.userSubmit,n=e.cancelExpense,a=Object(r.useState)({title:"",amount:.01,date:""}),c=Object(i.a)(a,2),l=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={title:l.title,amount:+l.amount,date:new Date(l.date)};t(n),u((function(e){return Object(s.a)(Object(s.a)({},e),{},{title:"",amount:.01,date:""})}))},children:Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:l.title,onChange:function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{title:e.target.value})}))}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:l.amount,onChange:function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{amount:e.target.value})}))}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2020-01-01",max:"2023-12-31",value:l.date,onChange:function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{date:e.target.value})}))}})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"submit",children:"Add Expense"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),u((function(e){return Object(s.a)(Object(s.a)({},e),{},{title:"",amount:"",date:""})})),n()},children:"Cancel"})]})]})})},b=(n(19),function(e){var t=e.userSubmit,n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],l=a[1],s=function(){l((function(e){return!e}))};return Object(o.jsx)("section",{className:"new-expense",children:c?Object(o.jsx)(j,{userSubmit:t,cancelExpense:s}):Object(o.jsx)("button",{onClick:s,children:"Add New Expense"})})}),d=(n(20),function(e){var t=e.children;return Object(o.jsx)("section",{className:"expenses",children:t})}),x=(n(21),function(e){return Object(o.jsx)("section",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.userFilteredYear(t.target.value)},children:[Object(o.jsx)("option",{value:"2023",children:"2023"}),Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"})]})]})})}),O=(n(22),n(10)),m=(n(23),function(e){var t=e.items,n=e.fallback,a=e.remove,c=t.length?t.map((function(e){return Object(o.jsxs)("li",{className:"expense-item",children:[Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("h3",{className:"expense-date__month",children:e.date.toLocaleString("en-US",{month:"long"})}),Object(o.jsx)("h3",{className:"expense-date__year",children:e.date.getFullYear()}),Object(o.jsx)("h3",{className:"expense-date__day",children:e.date.toLocaleString("en-US",{day:"2-digit"})})]}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]}),Object(o.jsx)("div",{className:"expense-item__close",onClick:function(t){return function(e,t){a(e,t)}(t,e.id)},children:Object(o.jsx)(O.a,{})})]})]},e.id)})):n;return Object(o.jsx)(o.Fragment,{children:c})}),h=function(e){var t=e.items,n=e.remove,a=Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found."});return Object(o.jsx)("ul",{className:"expenses-list",children:Object(o.jsx)(m,{items:t,fallback:a,remove:n})})},f=n(9),v=(n(24),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=(n(25),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(o.jsx)("section",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(v,{value:e.value,label:e.label,maxValue:n},e.label)}))})}),_=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(f.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(p,{dataPoints:n})};var g=function(){var e=Object(r.useState)((function(){return(JSON.parse(localStorage.getItem("itemsData"))||[]).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{date:new Date(e.date.substring(0,10))})}))})),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("2023"),j=Object(i.a)(c,2),O=j[0],m=j[1];Object(r.useEffect)((function(){localStorage.setItem("itemsData",JSON.stringify(n)),n.length||localStorage.removeItem("itemsData")}),[n]),Object(r.useEffect)((function(){document.title="Expenses Tracker"}),[]);var f=n.filter((function(e){return e.date.getFullYear().toString()===O}));return Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{userSubmit:function(e){e.id=Object(u.a)(),e.title&&e.date&&e.amount&&a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(o.jsx)(x,{selected:O,userFilteredYear:function(e){m(e)}}),Object(o.jsx)(_,{expenses:f}),Object(o.jsx)(d,{children:Object(o.jsx)(h,{items:f,remove:function(e,t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})})]})};c.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.1ad468a4.chunk.js.map