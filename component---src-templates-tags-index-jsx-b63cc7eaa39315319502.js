"use strict";(self.webpackChunkrandy_blog=self.webpackChunkrandy_blog||[]).push([[694],{3563:function(e,t,a){a.d(t,{A:function(){return d}});var l=a(6540),n=a(5093),r=a.n(n),s=a(7692),m=a(2890),c=a.n(m);var d=e=>{const{data:{node:{frontmatter:t}}}=e;return l.createElement("div",{className:"postCard-module--postCard--cb51b"},l.createElement(s.Link,{to:c().resolvePageUrl(t.path)},l.createElement("div",{className:"postCard-module--postCardImg--d2f99"},l.createElement("img",{src:t?t.cover.childImageSharp.fluid.src:"",width:"100%",height:"100%",alt:"images"}))),l.createElement("div",{className:"postCard-module--mrTp20--18b15"},l.createElement("p",null,l.createElement("span",{className:"postCard-module--dateHolder--4244f"},t?r()(new Date(t.date),"YYYYMMDD").format("MMM Do YYYY"):"")),l.createElement(s.Link,{to:c().resolvePageUrl(t.path)},l.createElement("h3",null,t?t.title:"")),l.createElement(s.Link,{to:c().resolvePageUrl(t.path)},l.createElement("p",null,t?t.excerpt:"")),l.createElement("div",{className:"postCard-module--tags--17d95"},t.tags.map(((e,t)=>l.createElement(s.Link,{key:t,to:"/tags/"+e},"#"+e))))))}},6243:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});a(2159);var l=a(3340),n=(a(8809),a(7152)),r=(a(9635),a(6370)),s=a(6540),m=a(4333),c=a(5605),d=a(1946),o=a(3563),i=a(5763),g=a(5183),u=a.n(g),p=a(2890),E=a.n(p),f=a(4894);var h=e=>{let{data:t,pageContext:a}=e;const{tag:g}=a,p=u().tags[g].name||E().capitalize(g),h=u().pages.tag,v=t.allFile.edges.find((e=>e.node.name===g)).node.childImageSharp.fluid,k=t.allMarkdownRemark.edges;return s.createElement(f.default,null,s.createElement(l.A,{className:"outerPadding"},s.createElement(l.A,{className:"container"},s.createElement(d.A,{page:"tags"}),s.createElement(c.A,{title:p,description:"All post about "+p+". "+u().tags[g].description+" ",path:E().resolvePageUrl(h,g),keywords:[p]}),s.createElement(i.A,null,s.createElement("div",{className:"marginTopTitle tags-module--tagsList--080ef"},s.createElement("h1",null,"#",p),s.createElement("div",{className:"tags-module--bannerImgContainer--9c71c"},s.createElement(m.A,{className:"tags-module--bannerImg--94b1c",fluid:v,alt:p})),s.createElement("h4",{className:"textCenter"},u().tags[g].description)),s.createElement(n.A,{gutter:[20,20]},k.map(((e,t)=>s.createElement(r.A,{key:t,xs:24,sm:24,md:12,lg:8},s.createElement(o.A,{data:e})))))))))}}}]);
//# sourceMappingURL=component---src-templates-tags-index-jsx-b63cc7eaa39315319502.js.map