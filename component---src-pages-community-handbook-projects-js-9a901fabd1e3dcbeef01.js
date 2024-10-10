"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[108],{75851:function(e,t,n){var a=n(96540),r=n(64810);const l=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  @media screen and (min-width: 300px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);t.A=function(e){let{contents:t}=e;const{0:n,1:i}=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=window.location.pathname;i(e)}),[]),a.createElement(l,null,a.createElement("div",{className:"intra-page"},a.createElement("ul",null,t.map((e=>a.createElement("li",{key:e.id,className:"list"},a.createElement(r.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))}},86669:function(e,t,n){n.r(t),n.d(t,{Head:function(){return N},default:function(){return w}});var a=n(96540),r=n(60522),l=n(66054),i=n(37897),c=n(18614),o=n(68756),s=n(17979),m=n(92542),u=n(20422),h=n(83471),d=n(29799),p=n(39721),E=n(4099),f=n(48774),y=n(64810),g=n(75851);const v=[{id:0,link:"#Layer5",text:"Layer5"},{id:1,link:"#Meshery",text:"Meshery"},{id:2,link:"#Cloud Native Performance",text:"Cloud Native Performance"},{id:3,link:"#Cloud Native Patterns",text:" Cloud Native Patterns"}];var b=()=>a.createElement(p.S,null,a.createElement("div",{className:"page-header-section"},a.createElement("h1",null,"Projects")),a.createElement(E.A,null),a.createElement("div",{className:"page-section"},a.createElement(l.mc,null,a.createElement("div",{className:"content"},a.createElement("p",null,a.createElement("a",{id:"Layer5"}," ",a.createElement("h3",{className:"heading-top"},a.createElement("a",{href:"https://layer5.io/"},a.createElement("img",{className:"project-title-icon",src:c.A,alt:"Layer5"}),"  Layer5"," "))," ")),a.createElement("p",null,"Its cloud native community represents the largest collection of cloud native projects. Emerging projects like Nighthawk"," ",a.createElement("img",{className:"project-description-icon",src:o.A,alt:"Nighthawk Icon"})," , community with"," ",a.createElement(y.Link,{to:"/community/meshmates"},a.createElement("img",{className:"project-description-icon",src:s.A,alt:"MeshMate icon"})," MeshMates "),", catch-all org, “home base”.",a.createElement("br",null),a.createElement("ul",null,a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://layer5.io/"},"Layer5 :"))," "),a.createElement("p",null,"Layer5 is the official website of the Layer5 community showing an overview of the Layer5 projects. The different cloud native landscapes, resources to learn about cloud native, and communities. ",a.createElement("br",null)),a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://layer5.io/projects/image-hub"},"Image-Hub :"))," "),a.createElement("p",null,"Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters are written in Rust. These modules can be used to implement multi-tenancy or to implement per-user rate-limiting in your application's endpoints. This application was first demonstrated at DockerCon 2020. ",a.createElement("br",null)),a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://layer5.io/projects/nighthawk"},"Nighthawk :"))," "),a.createElement("p",null,"This Is a Layer 7 (HTTP/HTTPS/HTTP2) performance characterization tool. Nighthawk is Envoy’s load generator and is written in C++. Meshery integrates Nighthawk as one of (currently) three choices of load generators for characterizing and managing the performance of cloud native infrastructure (e.g. Kubernetes and Docker) and their services. ",a.createElement("br",null)))),a.createElement("p",null,a.createElement("a",{id:"Meshery"}," ",a.createElement("h3",null,a.createElement("a",{href:"https://layer5.io/cloud-native-management/meshery"},a.createElement("img",{className:"project-title-icon",src:i.A,alt:"Meshery"}),"  Meshery"))," ")),a.createElement("p",null,"Meshery and its components Meshery Operator"," ",a.createElement("img",{className:"project-description-icon",src:h.A,alt:"Meshery Operator Icon"})," and MeshSync"," ",a.createElement("img",{className:"project-description-icon",src:d.A,alt:"MeshSync icon"}),a.createElement("ul",null,a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://layer5.io/cloud-native-management/meshery"},"Meshery"))," "),a.createElement("p",null,"It is a cloud native management plane offering lifecycle management of more types of cloud native infrastrcture than any other tool                  available today. Meshery facilitates adopting, configuring, operating, and managing the performance of Kuberenetes workloads and incorporates the collection and display of metrics from applications running on top of any service mesh.",a.createElement("br",null)," "),a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://meshery.io/"},"Meshery.io"))," "),a.createElement("p",null,"Website for Meshery, the cloud native manager. ",a.createElement("br",null)),a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://layer5.io/cloud-native-management/meshery/meshery-operator"},"Meshery-operator :"))," "),a.createElement("p",null,"Meshery Operator is the multi-cloud native operator and implementation of MeshSync. ",a.createElement("br",null)),a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://layer5.io/docker-extension-meshery"},"Meshery-docker-extension :"))," "),a.createElement("p",null,"The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: cloud native infra. ",a.createElement("br",null)),a.createElement("li",null,a.createElement("h4",null,a.createElement("a",{href:"https://layer5.io/cloud-native-management/catalog"},"Meshery Catalog :"))," "),a.createElement("p",null,"As a central hub for sharing cloud native infrastructure designs, Meshery Catalog enables the exchange of the best practices, reusable templates, and Kubernetes-based operational patterns for multi-cluster Kubernetes clusters and distributed applications. ",a.createElement("br",null)))),a.createElement("a",{id:"Cloud Native Performance"},a.createElement("p",null,a.createElement("h3",null,a.createElement("a",{href:"https://smp-spec.io/"},a.createElement("img",{className:"project-title-icon",alt:"cloud native performance",src:u.A}),"  Cloud Native Performance"," ")))),a.createElement("p",null,a.createElement("a",{href:"https://layer5.io/projects/cloud-native-performance"},"The Cloud Native Performance (SMP)")," ","is a vendor-neutral specification for capturing details of environment and infrastructure details, cloud native infrastrcture and it’s configuration, service/application details, and bundling of statistical analysis of the result. ",a.createElement("br",null)),a.createElement("p",null,a.createElement("a",{id:"Cloud Native Patterns"}," ",a.createElement("h3",null,a.createElement("a",{href:"https://github.com/service-mesh-patterns/service-mesh-patterns"},a.createElement("img",{className:"project-title-icon",alt:"cloud native patterns",src:m.A})," ","  Cloud Native Patterns"," "))," ")),a.createElement("p",null,"A collection of curated patterns of cloud native use cases compatible with Meshery. ",a.createElement("br",null))),a.createElement(f.A,null)),a.createElement(g.A,{contents:v})));var w=()=>a.createElement(a.Fragment,null,a.createElement(b,null));const N=()=>a.createElement(r.A,{title:"Projects",description:"Layer5 Projects: Layer5, Meshery, Cloud Native Performance and NightHawk"})}}]);
//# sourceMappingURL=component---src-pages-community-handbook-projects-js-9a901fabd1e3dcbeef01.js.map