"use strict";(self.webpackChunkwp_fse_demo_plugin=self.webpackChunkwp_fse_demo_plugin||[]).push([[273],{273:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var i=r(236),o=r(889);function n(){if(!i.A)return void console.error("Swiper is not loaded");const e=document.querySelectorAll(".swiper");console.log("Found",e.length,"swiper elements"),e.forEach(((e,t)=>{if(!(e instanceof Element))return void console.error("Invalid Swiper element:",e);const r=e.getAttribute("data-effect")||"slide",n=[];n.push(o.Vx,o.dK,o.Ij),"fade"===r&&n.push(o._R),"cube"===r&&n.push(o.hw),"coverflow"===r&&n.push(o.t9),"flip"===r&&n.push(o.n);const a={modules:n,slidesPerView:parseInt(e.getAttribute("data-slides-per-view"))||1,spaceBetween:parseInt(e.getAttribute("data-space-between"))||0,effect:r,loop:"true"===e.getAttribute("data-loop"),navigation:"true"===e.getAttribute("data-navigation")&&{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:"true"===e.getAttribute("data-pagination")&&{el:".swiper-pagination",clickable:!0},autoplay:"true"===e.getAttribute("data-autoplay")&&{delay:parseInt(e.getAttribute("data-autoplay-delay"))||3e3}};console.log("Initializing Swiper with options:",a);try{const r=e.querySelector(".swiper-wrapper");if(!r)throw new Error("No .swiper-wrapper found in Swiper element");if(!r.querySelectorAll(".swiper-slide").length)throw new Error("No .swiper-slide elements found in Swiper");setTimeout((()=>{new i.A(e,a),console.log("Swiper",t+1,"initialized successfully")}),0)}catch(e){console.error("Error initializing Swiper",t+1+":",e)}}))}}}]);