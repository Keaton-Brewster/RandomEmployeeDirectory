(this.webpackJsonprandom_employee_directory=this.webpackJsonprandom_employee_directory||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(13),j=c.n(s),i=c(43),h=c(17),d=c(14),o=c.n(d),l={getUsers:function(){return o.a.get("https://randomuser.me/api/?results=45")}},b=c(0),a=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(r.useEffect)((function(){l.getUsers().then((function(e){n(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsx)("img",{src:e.picture.medium,alt:""})}),Object(b.jsxs)("th",{children:[e.name.first," ",e.name.last]}),Object(b.jsx)("th",{children:e.cell}),Object(b.jsx)("th",{children:e.email}),Object(b.jsx)("th",{children:e.dob.date})]},t)}))})},u=function(){return Object(b.jsxs)(i.a,{striped:!0,bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Photo"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Phone"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"DOB"})]})}),Object(b.jsx)(a,{})]})},O=function(){return Object(b.jsx)(u,{})};j.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f50b8d63.chunk.js.map