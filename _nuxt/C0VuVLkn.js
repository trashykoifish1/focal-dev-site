import{_ as f,r as h,L as v,o as c,c as d,a as t,t as x,b as n,C as u,F as p,A as g,M as w,N as _,O as b}from"./BFt6RCyc.js";const y=window.setInterval,k={class:"aspect-square overflow-hidden"},I=["src","alt"],S={class:"p-2 text-center"},j={class:"text-2xl text-gray-700 font-handwriting font-extrabold"},P={__name:"PolaroidCard",props:{src:{type:String,required:!0},alt:{type:String,default:""},caption:{type:String,default:""}},setup(i){const o=i,r=h("");let s=null,l=h(0);function e(){s&&clearInterval(s),s=y(()=>{l.value<o.caption.length?(r.value=o.caption.slice(0,l.value+1),l.value++):clearInterval(s)},100)}function a(){clearInterval(s)}return v(()=>{s&&clearInterval(s)}),(L,M)=>(c(),d("div",{class:"polaroid-card bg-white p-5 shadow-lg transform transition-all duration-300 hover:scale-105",onMouseenter:e,onMouseleave:a},[t("div",k,[t("img",{src:i.src,alt:i.alt,class:"w-full h-full object-cover transition-transform duration-10000 ease-linear hover:scale-110 hover:translate-x-[5%]"},null,8,I)]),t("div",S,[t("p",j,x(r.value),1)])],32))}},m=f(P,[["__scopeId","data-v-a1a35e7a"]]),D={class:"container mx-auto px-4 bg-cream"},T=t("div",{class:"mb-10 text-4xl font-serif text-sepia text-center pt-8"},[t("h2",null,"Aspiring Programmer with a Camera")],-1),C={class:"divider divider-accent"},A={class:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-10"},V=t("div",{class:"divider divider-accent"},[t("h2",{class:"text-3xl font-serif font-semibold text-sepia"},"About")],-1),N=t("section",{class:"mb-12 mt-10 prose lg:prose-xl mx-auto"},[t("p",{class:"text-sepia text-justify"}," Hello world! I'm Khoi Tran, a full-stack developer with photography as a side hobby. Given the amount of money I spent on camera gear 😓, I figured I should at least showcase some of them. Enjoy! ")],-1),$={class:"divider divider-accent"},B={class:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 mx-5"},F=w('<div class="divider divider-accent"><h2 class="text-3xl font-mono text-sepia">Current Tech Stack</h2></div><section class="grid grid-cols-2 md:grid-cols-1 gap-4 mb-12 mt-10 prose lg:prose-xl mx-auto font-mono text-cream"><div class="mockup-browser bg-base-300 border"><div class="mockup-browser-toolbar"><div class="input text-xl text-cream">Frontend</div></div><div class="bg-base-200 flex justify-left text-cream"><ul class="list-none"><li>Vue3</li><li>Nuxt3</li><li>Vuetify</li><li>Tailwind CSS</li><li>DaisyUI</li></ul></div></div><div class="mockup-browser bg-base-300 border"><div class="mockup-browser-toolbar"><div class="input text-xl text-cream">Backend</div></div><div class="bg-base-200 flex justify-left text-cream"><ul class="list-none"><li>Spring Boot (Java)</li><li>Django (Python)</li><li>PostgreSQL, SQLite</li><li>Docker</li><li>Kubernetes</li></ul></div></div></section>',2),q={__name:"index",setup(i){const o=[{src:"highlight/hl-1.jpg",alt:"Picture of a basketball court, with the basket in the center, with trees in the foreground, framing the court.",caption:"Pocket Dispo / This was taken the week before my internship started. I was scared I won't get the chance to use my camera for a while."},{src:"highlight/hl-2.jpg",alt:"Picture of a tree scattered with white flowers, with a blue sky in the background.",caption:"Pocket Dispo / So I decided to take a scooter ride around my neighborhood with my new cheap lens out for a spin."}],r=[{src:"highlight/hl-3.jpg",alt:"Vietnam District 1 city skyline",caption:"This was taken in Vietnam. It was one of my favorite spots. A lot of memories here."},{src:"highlight/hl-4.jpg",alt:"Phoenix freeway with lightstreaks from cars, captured using long exposure.",caption:"A long exposure shot of the I10. Night photography was never my strong suit."},{src:"highlight/hl-5.jpg",alt:"Tiffany Day performing on stage. The stage is filled with smoke with light penetrating through the smoke creating god rays.",caption:"ASU Culturefest 2023. Tiffany Day and Thuy were the headliners. Still don't like how the pic turns out so grainy though."},{src:"highlight/hl-6.jpg",alt:"A black and white photo of the sky and clouds.",caption:"For some reason I love the way the clouds look in black and white edits."}];return(s,l)=>(c(),d("div",D,[T,t("div",C,[n(u(_),{class:"h-10 w-10 text-sepia"})]),t("section",A,[(c(),d(p,null,g(o,(e,a)=>n(m,{key:a,src:e.src,alt:e.alt,caption:e.caption||""},null,8,["src","alt","caption"])),64))]),V,N,t("div",$,[n(u(b),{class:"h-10 w-10 text-sepia"})]),t("section",B,[(c(),d(p,null,g(r,(e,a)=>n(m,{key:a,src:e.src,alt:e.alt,caption:e.caption||""},null,8,["src","alt","caption"])),64))]),F]))}};export{q as default};
