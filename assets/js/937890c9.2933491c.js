"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3513],{8015:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(4848),a=r(8453);const s={},o="Architecture Overview",i={type:"mdx",permalink:"/architecture",source:"@site/src/pages/architecture.md",title:"Architecture Overview",description:"The backend has local environment variables for the API key and url. The frontend makes an API call to the locally hosted backend to grab the syllabus information. The backend then uses the API key and URL to make an API call to Applebaum's syllabus server to relay the information.",frontMatter:{},unlisted:!1},c={},l=[];function d(e){const n={h1:"h1",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"architecture-overview",children:"Architecture Overview"})}),"\n",(0,t.jsx)(n.p,{children:"The backend has local environment variables for the API key and url. The frontend makes an API call to the locally hosted backend to grab the syllabus information. The backend then uses the API key and URL to make an API call to Applebaum's syllabus server to relay the information."}),"\n",(0,t.jsx)(n.h1,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"A student checks if there is an event today"}),"\n",(0,t.jsx)(n.li,{children:"Browse all events for the remainder of the semester"}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"    sequenceDiagram\r\n    actor student\r\n    participant Frontend\r\n    participant API Proxi\r\n    participant Applebaum API\r\n\r\n    student->>Frontend: accesses website\r\n    activate Frontend\r\n    Frontend->>API Proxi: API call\r\n    deactivate Frontend\r\n    activate API Proxi\r\n    API Proxi->>Applebaum API: API call\r\n    deactivate API Proxi\r\n    Applebaum API --\x3e> API Proxi: return\r\n    activate API Proxi\r\n    API Proxi --\x3e> Frontend : return\r\n    \r\n    deactivate API Proxi\r\n    activate Frontend\r\n    Frontend ->> Frontend: website is loaded\r\n    deactivate Frontend\r\n    student->> Frontend: reads information\r\n    "}),"\n",(0,t.jsx)(n.h1,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,t.jsx)(n.mermaid,{value:"    classDiagram\r\n    class Frontend {\r\n        -array: columns\r\n        -array: rows\r\n        -fetchCourseEvents()\r\n    }\r\n\r\n    class ProxyAPI {\r\n        -app : Express\r\n        -getCourseEvents()\r\n        -errorHandler()\r\n    }\r\n\r\n    class SyllabusAPI {\r\n        -Obj: Syllabus Events\r\n        -getEvents()\r\n    }\r\n\r\n    Frontend --\x3e ProxyAPI : uses\r\n    ProxyAPI --\x3e SyllabusAPI : communicates with"})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);