(window.webpackJsonp=window.webpackJsonp||[]).push([[17,16],{"/Rmd":function(e,t,a){e.exports={tagCard:"tags-module--tagCard--2sNqZ",tagImg:"tags-module--tagImg--21WVr",pd20px:"tags-module--pd20px--1m4en"}},"8d8t":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n);t.default=function(e){var t=e.children,a=r.a.useState("0"),n=a[0],l=a[1],c=function(){var e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;l(e/t*100+"%")};r.a.useEffect((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]);var o={height:"12px",background:"#1890ff",width:n};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{background:"transparent",height:"12px",position:"fixed",top:0,left:0,width:"100vw",zIndex:99}},r.a.createElement("div",{style:o})),t)}},a0iv:function(e,t,a){"use strict";a.r(t);a("M7k7");var n=a("Ol7k"),r=(a("Jmwx"),a("BMrR")),l=(a("rO+z"),a("kPKH")),c=(a("E9XD"),a("ToJy"),a("q1tI")),o=a.n(c),i=a("U4IR"),s=a("JkAW"),m=a("kuUC"),d=a("Wbzz"),u=a("obyI"),g=a.n(u),p=a("Rt21"),E=a.n(p),f=a("/Rmd"),h=a.n(f),v=function(e){var t=e.img,a=e.name,n=e.description,r=e.color,l=g.a.pages.tag;return o.a.createElement(d.Link,{className:h.a.tagCard,to:E.a.resolvePageUrl(l,a)},o.a.createElement("div",{className:h.a.tagCard},o.a.createElement("div",{className:h.a.tagImg},o.a.createElement("img",{src:t,width:"100%",height:"100%",alt:"images"})),o.a.createElement("div",{className:h.a.pd20px},o.a.createElement("div",{className:"textCenter"},o.a.createElement("h4",{style:{color:""+r}},"#",a)),o.a.createElement("p",null,n))))},w=a("8d8t");t.default=function(e){var t=e.data,a=t.allFile.edges,c=t.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter.tags})).reduce((function(e,t){return e.concat(t)}));c.filter((function(e,t){return t===c.indexOf(e)})).sort();var d=g.a.tags;return o.a.createElement(w.default,null,o.a.createElement(n.a,{className:"outerPadding"},o.a.createElement(n.a,{className:"container"},o.a.createElement(i.a,null),o.a.createElement(s.a,{title:"Tags",description:"This page consists of various Tags on various technologies that I'll be using to write blogs. You can check the blogs related to the tags by clicking on any of the tags below.",path:"tags"}),o.a.createElement(m.b,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"marginTopTitle"},o.a.createElement("h1",{className:"titleSeparate"},"Tags")),o.a.createElement(r.a,{gutter:[30,20]},a.map((function(e){return o.a.createElement(l.a,{key:e.node.name,xs:24,sm:24,md:12,lg:8},o.a.createElement(v,{img:e.node.childImageSharp.fluid.src,name:e.node.name,description:d[e.node.name].description,color:d[e.node.name].color}))}))))))))}}}]);
//# sourceMappingURL=component---src-pages-tags-index-jsx-de2fd028f44d01d2982a.js.map