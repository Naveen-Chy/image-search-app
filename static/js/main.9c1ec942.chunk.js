(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(48)},37:function(e,t,a){},44:function(e,t){},45:function(e,t){},46:function(e,t){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),o=(a(37),a(15)),i=a(3),s=a(55),m=a(53),d=a(56),u=a(51),g=a(26),E=a(52),h=a(57);var b=e=>{let{images:t,navigate:a}=e;return l.a.createElement(u.a,{className:"mt-4"},t.map((e,t)=>l.a.createElement(g.a,{key:t,xs:12,sm:6,md:4,lg:3,className:"mb-4"},l.a.createElement(h.a,null,l.a.createElement(h.a.Img,{variant:"top",src:e.previewURL}),l.a.createElement(h.a.Body,null,l.a.createElement(E.a,{variant:"primary",onClick:()=>a("/editor",{state:{imageUrl:e.largeImageURL}})},"Add Caption"))))))};var f=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)([]),c=Object(i.p)();return l.a.createElement(m.a,{className:"mt-5"},l.a.createElement(d.a,{onSubmit:t=>{t.preventDefault(),(async()=>{try{const a=await s.a.get(`https://pixabay.com/api/?key=49738534-0b43193f7e3e7d12f7a47979f&q=${encodeURIComponent(e)}&image_type=photo&per_page=12`);r(a.data.hits)}catch(t){console.error("Error fetching images:",t)}})()}},l.a.createElement(u.a,{className:"g-2 wid-800"},l.a.createElement(g.a,{md:10},l.a.createElement(d.a.Control,{type:"text",placeholder:"Search for images...",value:e,onChange:e=>t(e.target.value),className:"search-input",required:!0})),l.a.createElement(g.a,{md:2},l.a.createElement(E.a,{type:"submit",variant:"primary",className:"w-100 custom-search-btn"},"Search")))),l.a.createElement(b,{images:a,navigate:c}))},p=a(13),v=a(54);var w=()=>{var e;const t=Object(n.useRef)(null),a=null===(e=Object(i.n)().state)||void 0===e?void 0:e.imageUrl,[r,c]=Object(n.useState)(null),[o,s]=Object(n.useState)(!1),[d,h]=Object(n.useState)(null),[b,f]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=new p.fabric.Canvas("canvas",{width:750,height:500,backgroundColor:"#f0f0f0"});e.on("object:selected",e=>{h(e.target)}),e.on("selection:cleared",()=>{h(null)}),c(e);const t=e=>{"Delete"===e.key&&d&&w()};return window.addEventListener("keydown",t),()=>{e.dispose(),window.removeEventListener("keydown",t)}},[d]),Object(n.useEffect)(()=>{r&&a&&(s(!1),p.fabric.Image.fromURL(a,e=>{const t=Math.min(r.width/e.width,r.height/e.height);e.set({scaleX:t,scaleY:t,left:(r.width-e.width*t)/2,top:(r.height-e.height*t)/2,originX:"left",originY:"top",selectable:!1}),r.setBackgroundImage(e,()=>{r.renderAll(),s(!0)},{crossOrigin:"anonymous"})},{crossOrigin:"anonymous"}))},[r,a]);const w=()=>{if(!r||!d)return f(!0),void setTimeout(()=>f(!1),2e3);r.remove(d),h(null),r.discardActiveObject().renderAll()};return l.a.createElement(m.a,{className:"mt-4"},l.a.createElement("h2",{className:"text-center mb-4"},"Meme Editor"),b&&l.a.createElement(v.a,{variant:"warning",onClose:()=>f(!1),dismissible:!0},"Please select an object to delete"),l.a.createElement(u.a,{className:"align-items-center pt-5"},l.a.createElement(g.a,{md:8},l.a.createElement("canvas",{id:"canvas",ref:t,style:{border:"1px solid #ccc",maxWidth:"100%",height:"auto"}})),l.a.createElement(g.a,{md:4},l.a.createElement(E.a,{variant:"success",className:"mb-3 w-100",onClick:()=>{if(!r)return;const e=new p.fabric.IText("Double click to edit",{left:50,top:50,fontSize:20,fill:"#fff",fontFamily:"Impact",fontWeight:"bold",stroke:"#000",strokeWidth:1,shadow:"5px 5px 10px rgba(0,0,0,0.5)"});r.add(e),r.setActiveObject(e),e.enterEditing(),e.selectAll()}},"Add Text"),l.a.createElement(E.a,{variant:"info",className:"mb-3 w-100",onClick:()=>{if(!r)return;const e=new p.fabric.Rect({width:100,height:100,fill:"rgba(255,0,0,0.5)",left:100,top:100,stroke:"#000",strokeWidth:1});r.add(e),r.setActiveObject(e)}},"Add Rectangle"),l.a.createElement(E.a,{variant:"danger",className:"mb-3 w-100",onClick:w,disabled:!d},"Delete Selected (or press ",l.a.createElement("strong",null,"Del")," key)"),l.a.createElement(E.a,{variant:"dark",className:"mb-3 w-100",onClick:()=>{if(r&&o)try{const t=document.createElement("a"),a=r.toDataURL({format:"png",quality:1,multiplier:2});t.href=a,t.download="meme-image.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}catch(e){console.error("Error downloading image:",e),alert("Error downloading image. Please try again.")}else alert("Please wait for the image to load completely")},disabled:!o},o?"Download Image":"Loading Image..."),l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",null,"Instructions:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Click")," on objects to select them"),l.a.createElement("li",null,l.a.createElement("strong",null,"Double-click")," text to edit"),l.a.createElement("li",null,l.a.createElement("strong",null,"Drag")," to move objects"),l.a.createElement("li",null,l.a.createElement("strong",null,'Select + Press "Delete" key')," to remove"))))))};var y=function(){return l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(f,null)}),l.a.createElement(i.a,{path:"/editor",element:l.a.createElement(w,null)})))};var k=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};a(47);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null))),k()}},[[30,1,2]]]);
//# sourceMappingURL=main.9c1ec942.chunk.js.map