"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8726],{22514:function(e,t,n){n.d(t,{A:function(){return l}});var a=n(96540);const i=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"}];var s=n(96044);var o=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var l=()=>{var e,t;const{0:n,1:l}=(0,a.useState)(0);return(0,a.useEffect)((()=>{const e=window.location.pathname,t=i.findIndex((t=>t.link===e));l(t)}),[]),a.createElement(o,null,n>0?a.createElement(s.default,{$secondary:!0,$url:null===(e=i[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<i.length-1?a.createElement(s.default,{$primary:!0,$url:null===(t=i[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},25889:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(96540),i=n(64810),s=n(86462),o=n.p+"static/space-token-table-2-light-17e47722e59c9326623fd99567a1b30d.png",l=n.p+"static/space-token-table-2-dark-9f90a39e0268bb1aee337b041c8accd4.png",c=n.p+"static/space-token-table-3-light-446e3b8d937a5ff8291b71a0716f7499.png",r=n.p+"static/space-token-table-3-dark-35c13c7a780793e0502dcf1921f59574.png",d=n(66054),p=n(92121),m=n(9184),u=n(96044);const h=()=>{const{isDark:e}=(0,p.G)(),t=(0,s.useLocation)();return a.createElement(m.p,{title:"Spacing"},a.createElement("div",{className:"content"},a.createElement("a",{id:"Identity"},a.createElement("h2",null,"Spacing")),a.createElement("p",null,"Space is the unseen component in designed solutions that enables clear, concise, and consistent arrangement of interface elements across a screen."),a.createElement("div",{className:"filterBtns"},a.createElement(u.default,{className:"/projects/sistent/identity/spacing"===t.pathname?"active":"",onClick:()=>(0,i.navigate)("/projects/sistent/identity/spacing"),title:"Overview"}),a.createElement(u.default,{className:"/projects/sistent/identity/spacing/guidance"===t.pathname?"active":"",onClick:()=>(0,i.navigate)("/projects/sistent/identity/spacing/guidance"),title:"Guidance"}),a.createElement(u.default,{className:"/projects/sistent/identity/spacing/code"===t.pathname?"active":"",onClick:()=>(0,i.navigate)("/projects/sistent/identity/spacing/code"),title:"Code"})),a.createElement("div",{className:"main-content"},a.createElement("p",null,"Applying spatial values to designs is a much debated topic and can prove to be quite difficult and very confusing especially when trying to maintain consistency across all designs. To this end, a few concepts have been pieced together in order to simplify the understanding of spatial harmony and ensure a consistent execution."),a.createElement("a",{id:"Spatial Organization"},a.createElement("h2",null,"Spatial Organization")),a.createElement("p",null,"Mostly in an interface, the way space and spatial harmony is achieved is by applying these space values to specific elements or in specific use cases. This can range form the size of a given element to the space between elements on a page."),a.createElement("h3",null,"Gap"),a.createElement("p",null,"Gap can be used to represent the space between any two given elements in an interface. This can be the inset values in a button or a card, stack or inline spacing between blocks of text or a group of elements in a section, and can also be applicable for margin values in a grid system. Because this can be confusing to determine a mode of application given that the spatial system consists of over 10 different values, a set consisting of five to seven values can be chosen to serve as all the values for the 'gap' spacing that will be used in an interface."),a.createElement("p",null,"Arriving at these values, however is not arbitrary or random selection from the spacing scale. Instead, a geometric progression gotten by multiplying the base space value by a common ratio of two and also dividing by the same ratio will provide the values needed to populate the 'gap' category. This arrangement will ensure uniform space across an interface that will greatly help to establish element relationships and hierarchy."),a.createElement(d.fI,{Hcenter:!0,className:"image-container"},a.createElement(d.fv,{md:8,lg:8,sm:12},a.createElement("img",{src:e?l:o,alt:"Space Token Table"}))),a.createElement("p",null,"*The last spacing value of 80px that was included was added because 80px is the value for the margin in the 12 column grid that is being applied for desktop screens."),a.createElement("h3",null,"Radius"),a.createElement("p",null,"The radius value of elements in an interface help to define the theme and density that it conveys. Little to no radius can describe a more grotesque or brutal theme, while higher and more consistent use of radiuses can describe a modern and minimal UI theme. Radius values can be determined based on the use case and the needs of the designs being curated. With Layer5, we have chosen five radius values that can provide a the much needed variation that can help to describe a minimal and consistent user interface."),a.createElement(d.fI,{Hcenter:!0,className:"image-container"},a.createElement(d.fv,{md:8,lg:8,sm:12},a.createElement("img",{src:e?r:c,alt:"Space Token Table"}))),a.createElement("p",null,"As is the case with most user interface decisions that are agreed upon, these values should be subjected to proper scrutiny based on the intended use case as well as appropriate exploration to ensure the best possible application."),a.createElement("h3",null,"Size"),a.createElement("p",null,"Size refers to the amount of area that an atom or element of a design takes up in the available space of the user interface. Whether it’s that of an icon or the total size of an image, all of that space can be described as size. While it is true that much larger size values may not necessarily be strictly defined in the spatial system, elements which are frequently used and require a fixed size throughout a design can have specific values assigned to them to ensure consistency."),a.createElement("p",null,"Applicable scenarios can be in the case of buttons, text fields, some cards, navigation menus, logos, and icons. While there are exceptions to these elements, mostly, it is recommended that they appear in a uniform size across an interface to improve the consistency therein."),a.createElement("a",{id:"Space Application Considerations"},a.createElement("h2",null,"Space Application Considerations")),a.createElement("p",null,"For spacing to be effectively employed in designs, a few considerations are to be made to enable a simple, yet, uniform application of space values across designs. One such principles is that in a bounding box, the padding of the box should be the highest spacing value. This simply means that for any container, (could be a card, button, an entire page layout) both the horizontal and vertical padding values must be more than any other space values used inside of the container to separate its child elements."),a.createElement("p",null,"This is applicable whether the horizontal and vertical paddings have the same or different values. To provide more, clarity, the inline spacing in a container should not be more than its horizontal padding, and the stack spacing value should not be more than the container's vertical padding. This gradual decrease in the space value as we go deeper into a container or an element helps to enhance uniformity and consistency across designs."),a.createElement("h3",null,"Exceptions"),a.createElement("p",null,"Of course, these suggestions are not set in stone, and as such, exceptions should be made to accommodate the peculiar needs of a design and its existing principles. One of the cases where exceptions can apply is when proper separation needs to be established among a group of elements."),a.createElement("p",null,"Although most pages will have a horizontal padding value, they seldom have a vertical padding value and since elements are mostly arranged in a vertical stack in a digital interface, it becomes necessary that proper separation is established in order to assist users to easily identify sections and navigate through the content of a page in the proper manner for better understanding. Varying values of space can therefore be employed in this vertical stack to improve users' clarity and minimize any confusion encountered."))))};var g=()=>a.createElement(h,null)},9184:function(e,t,n){n.d(t,{p:function(){return p}});var a=n(96540),i=n(91580),s=n(66198),o=n(66054),l=n(22514),c=n(64810);const r=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var d=function(){const{0:e,1:t}=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:i}=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=window.location.pathname;i(e)}),[]),a.createElement(r,null,a.createElement("div",{className:"intra-page"},a.createElement("ul",null,e.map((e=>a.createElement("li",{key:e.id,className:"list"},a.createElement(c.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const p=e=>{let{title:t,children:n}=e;return a.createElement(i.A,null,a.createElement("div",{className:"page-header-section"},a.createElement("h1",null,t)),a.createElement(s.A,null),a.createElement("div",{className:"page-section"},a.createElement(o.mc,null,n," ",a.createElement(l.A,null)),a.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-identity-spacing-guidance-js-b07b88c8643e075c24e2.js.map