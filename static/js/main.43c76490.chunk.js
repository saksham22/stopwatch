(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(4),s=n.n(i),o=(n(9),n(10),n(3)),u=(n(11),n(0));var a=function(){var t=r.a.useState(0),e=Object(o.a)(t,2),n=e[0],c=e[1],i=r.a.useState(!1),s=Object(o.a)(i,2),a=s[0],j=s[1];return r.a.useEffect((function(){var t=null;return a?t=setInterval((function(){c((function(t){return t+10}))}),10):clearInterval(t),function(){return clearInterval(t)}}),[a]),Object(u.jsx)("div",{id:"wrapper",children:Object(u.jsxs)("div",{className:"Timer",children:[Object(u.jsxs)("div",{id:"display",children:[Object(u.jsxs)("span",{children:[("0"+Math.floor(n/6e4%60)).slice(-2),":"]}),Object(u.jsxs)("span",{children:[("0"+Math.floor(n/1e3%60)).slice(-2),":"]}),Object(u.jsx)("span",{children:("0"+n/10%100).slice(-2)})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{id:"buttons",children:[!a&&0===n&&Object(u.jsx)("button",{onClick:function(){return j(!0)},children:"Start"}),a&&Object(u.jsx)("button",{onClick:function(){return j(!1)},children:"Stop"}),!a&&0!==n&&Object(u.jsx)("button",{onClick:function(){return j(!0)},children:"Resume"}),!a&&n>0&&Object(u.jsx)("button",{onClick:function(){return c(0)},children:"Reset"})]}),Object(u.jsx)("hr",{})]})})};var j=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(a,{})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),l()}],[[13,1,2]]]);
//# sourceMappingURL=main.43c76490.chunk.js.map