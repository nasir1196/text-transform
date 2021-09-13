(this.webpackJsonptextutills=this.webpackJsonptextutills||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=a(0),i=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat("light"===e.mode?"success":"danger"===e.alert.type?"danger":"success"===e.alert.type?"success":"danger"," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.substring(1)}(e.alert.type)})," ",e.alert.msg]})},b=function(e){var t=e.mode,a=e.home,c=e.enableDark,n=e.btnText;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(t," bg-").concat(t),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:a}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item nav-link",href:"/home",children:"Home"}),Object(o.jsx)("li",{className:"nav-item nav-link",href:"/about",children:"About"})]})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===t?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input bg-".concat("light"===t?"dark":"light"),type:"checkbox",id:"switch-box",onClick:c}),Object(o.jsx)("label",{htmlFor:"switch-box",children:n})]})]})})})},d=function(e){var t=e.mode,a=e.showAlert,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],i=s[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container mb-3",children:[Object(o.jsx)("label",{htmlFor:"area",className:"form-label",children:Object(o.jsx)("h1",{children:"Check Your Speed"})}),Object(o.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===t?"black":"white",color:"dark"===t?"white":"black"},id:"area",value:r,rows:"8",onChange:function(e){var t=e.target.value;i(t)}}),Object(o.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){var e=r.toUpperCase();i(e),a("Convert Uppercase","success")},children:"Uppercase"}),Object(o.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){var e=r.toLocaleLowerCase();i(e),a("Convert Lowercase","success")},children:"Lowercase"}),Object(o.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){i(""),a("Clear Text Book","danger")},children:"Clear"}),Object(o.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){var e=document.getElementById("area");""===e.value||" "===e.value?a("You don't type any data!!","Warning"):(e.select(),navigator.clipboard.writeText(e.value),a("Data Copped","success"))},children:"Copy"}),Object(o.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){var e=r.split(/[ ]+/);i(e.join(" ")),a("Remove Extra Space","success")},children:"Remove Space"})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h2",{children:[" ",Object(o.jsx)("button",{className:"btn-info",children:""===r?0:r.split(" ").length})," word type ",Object(o.jsx)("button",{className:"btn-info",children:r.length})," character type"]}),Object(o.jsxs)("h3",{children:[" ",Object(o.jsx)("button",{className:"btn-warning",children:.008*r.split(" ").length})," read minutes"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:r.length>0?r:"Please type text & see Preview"})]})]})};var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Dark Mode"),r=Object(l.a)(s,2),u=r[0],j=r[1],h=Object(c.useState)(null),m=Object(l.a)(h,2),x=m[0],g=m[1],p=function(e,t){g({msg:e,type:t}),setTimeout((function(){g(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{home:"Text Utils",mode:a,enableDark:function(){"light"===a?(n("dark"),j("Light Mode"),document.body.style.backgroundColor="black",document.body.style.color="white",p("Dark Mode is Enable","success"),document.title="TextUtils - Dark Mode"):(n("light"),j("Dark Mode"),document.body.style.backgroundColor="white",document.body.style.color="black",p("Light Mode is Enable","success"),document.title="TextUtils - Light Mode")},btnText:u}),Object(o.jsx)(i,{alert:x,mode:a}),Object(o.jsx)(d,{showAlert:p,mode:a})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.c45d5a0f.chunk.js.map