import{_ as g,n as u,r as l,c as a,a as t,b as x,u as _,F as h,q as m,o as c,s as f,p as v,e as j}from"./5nWMzTK-.js";const b=["ex-1.jpg","ex-10.jpg","ex-11.jpg","ex-12.jpg","ex-13.jpg","ex-14.jpg","ex-2.jpg","ex-3.jpg","ex-4.jpg","ex-5.jpg","ex-6.jpg","ex-7.jpg","ex-8.jpg","ex-9.jpg"],I=e=>(v("data-v-2620cbcf"),e=e(),j(),e),y={class:"container mx-auto px-4 bg-cream min-h-screen"},k=I(()=>t("h1",{class:"text-4xl font-serif text-sepia mb-8 pt-8 text-center"}," Photo Gallery ",-1)),w={class:"divider divider-accent"},$={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},B=["src","alt","onClick"],S="/focal-dev-site",q={__name:"gallery",setup(e){const n=u(()=>b.map(s=>`${S}/pictures/${s}`)),p=l(!1),i=l(0);function d(s){i.value=s,p.value=!0}return(s,C)=>(c(),a("div",y,[k,t("div",w,[x(_(f),{class:"h-10 w-10 text-sepia"})]),t("div",$,[(c(!0),a(h,null,m(n.value,(o,r)=>(c(),a("div",{key:o,class:"aspect-square overflow-hidden rounded-lg shadow-lg"},[t("img",{src:o,alt:`Gallery image ${r+1}`,class:"w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer",onClick:F=>d(r)},null,8,B)]))),128))])]))}},L=g(q,[["__scopeId","data-v-2620cbcf"]]);export{L as default};
