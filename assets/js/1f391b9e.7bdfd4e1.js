"use strict";(self.webpackChunkicon_menu_builder_v_2=self.webpackChunkicon_menu_builder_v_2||[]).push([[3085],{87529:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(67294),t=n(86010),i=n(77019),c=n(3905),s=n(61914),r=n(51575),m=n(63616),o="mdxPageWrapper_eQvw";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,v=n.title,u=n.description,f=n.wrapperClassName,_=n.hide_table_of_contents,N=d.permalink;return l.createElement(i.Z,{title:v,description:u,permalink:N,wrapperClassName:null!=f?f:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!_&&"col--8")},l.createElement(c.Zo,{components:s.Z},l.createElement(a,null))),!_&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(r.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},25002:function(e,a,n){n.d(a,{Z:function(){return m}});var l=n(87462),t=n(63366),i=n(67294),c=n(63616),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,_=e.maxHeadingLevel,N=(0,t.Z)(e,s),g=(0,c.LU)(),k=null!=f?f:g.tableOfContents.minHeadingLevel,C=null!=_?_:g.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:C}}),[d,u,k,C]);return(0,c.Si)(h),i.createElement(r,(0,l.Z)({toc:p,className:m,linkClassName:d},N))}},51575:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(87462),t=n(63366),i=n(67294),c=n(86010),s=n(25002),r="tableOfContents_vrFS",m=["className"];var o=function(e){var a=e.className,n=(0,t.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},i.createElement(s.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);