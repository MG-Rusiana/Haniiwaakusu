import{u as o,j as e,r as c}from"./index-pXw5faXT.js";const x="/Haniiwaakusu/assets/1-DP0drann.jpg",g="/Haniiwaakusu/assets/2-CvZ7Z7to.jpg",j="/Haniiwaakusu/assets/3-BEPOIwck.jpg",m="/Haniiwaakusu/assets/4-CiOQnVWY.jpg",p="/Haniiwaakusu/assets/5-Co-yjAPj.jpg";function h(){const r=[x,g,j,m,p],l=({images:s})=>{const[a,u]=c.useState(0);return c.useEffect(()=>{const t=setInterval(()=>{u((a+1)%s.length)},3e3);return()=>clearInterval(t)},[a,s.length]),e.jsxs("div",{className:"w-[60%] h-[60%] bg-white",children:[e.jsx("img",{className:" w-full h-full object-cover ",src:s[a],alt:"carousel"}),e.jsx("div",{className:"flex justify-center space-x-2 mt-4",children:s.map((t,n)=>e.jsx("div",{className:`h-2 w-2 rounded-full ${a===n?"bg-blue-500":"bg-gray-300"}`},n))})]})},i=o();return e.jsxs("div",{className:" flex flex-col justify-center items-center bg-black w-screen h-screen gap-5 ",children:[e.jsx("h1",{className:" text-white",children:"HOMEPAGE"}),e.jsx(l,{images:r}),e.jsx("input",{className:" text-black text-[25px] font-semibold w-[200px] h-[50px] bg-white rounded-lg mt-6 hover:bg-opacity-90 cursor-pointer active:scale-95 ",type:"button",value:"Go to table",onClick:()=>{i("/Haniiwaakusu/table")}})]})}export{h as default};
