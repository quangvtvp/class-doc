"use strict";(self.webpackChunkclass_doc=self.webpackChunkclass_doc||[]).push([[787],{8313:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});s(6540);var a=s(4164),l=s(1769),r=s(204),n=s(539);const c=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=s(3953),o=s(9303);const g={tag:"tag_Nnez"};var u=s(4848);function h(t){let{letterEntry:e}=t;return(0,u.jsxs)("article",{children:[(0,u.jsx)(o.A,{as:"h2",id:e.letter,children:e.letter}),(0,u.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,u.jsx)("li",{className:g.tag,children:(0,u.jsx)(i.A,{...t})},t.permalink)))}),(0,u.jsx)("hr",{})]})}function d(t){let{tags:e}=t;const s=function(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}(e);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,u.jsx)(h,{letterEntry:t},t.letter)))})}var j=s(7220);function m(t){let{title:e}=t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.be,{title:e}),(0,u.jsx)(j.A,{tag:"doc_tags_list"})]})}function x(t){let{tags:e,title:s}=t;return(0,u.jsx)(l.e3,{className:(0,a.A)(r.G.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(o.A,{as:"h1",children:s}),(0,u.jsx)(d,{tags:e})]})})})})}function p(t){const e=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...t,title:e}),(0,u.jsx)(x,{...t,title:e})]})}},3953:(t,e,s)=>{s.d(e,{A:()=>c});s(6540);var a=s(4164),l=s(6289);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(4848);function c(t){let{permalink:e,label:s,count:c,description:i}=t;return(0,n.jsxs)(l.A,{href:e,title:i,className:(0,a.A)(r.tag,c?r.tagWithCount:r.tagRegular),children:[s,c&&(0,n.jsx)("span",{children:c})]})}}}]);