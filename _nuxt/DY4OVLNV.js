import{_ as g,n as u,r as l,c as a,a as t,b as x,u as _,F as h,q as m,o,s as j,p as v,e as f}from"./Cp1LF5TZ.js";const I=["ex-1.jpg","ex-10.jpg","ex-11.jpg","ex-12.jpg","ex-13.jpg","ex-14.jpg","ex-2.jpg","ex-3.jpg","ex-4.jpg","ex-5.jpg","ex-6.jpg","ex-7.jpg","ex-8.jpg","ex-9.jpg"],b=e=>(v("data-v-23087a83"),e=e(),f(),e),y={class:"container mx-auto px-4 bg-cream min-h-screen"},k=b(()=>t("h1",{class:"text-4xl font-serif text-sepia mb-8 pt-8 text-center"}," Photo Gallery ",-1)),w={class:"divider divider-accent"},B={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},S=["src","alt","onClick"],$={__name:"gallery",setup(e){const n=u(()=>I.map(s=>`pictures/${s}`)),p=l(!1),i=l(0);function d(s){i.value=s,p.value=!0}return(s,q)=>(o(),a("div",y,[k,t("div",w,[x(_(j),{class:"h-10 w-10 text-sepia"})]),t("div",B,[(o(!0),a(h,null,m(n.value,(r,c)=>(o(),a("div",{key:r,class:"aspect-square overflow-hidden rounded-lg shadow-lg"},[t("img",{src:r,alt:`Gallery image ${c+1}`,class:"w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer",onClick:C=>d(c)},null,8,S)]))),128))])]))}},G=g($,[["__scopeId","data-v-23087a83"]]);export{G as default};
