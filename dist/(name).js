(()=>{"use strict";(()=>{const e=document.querySelectorAll("[data-tabs-handler]"),t=document.querySelectorAll("[data-tabs-field]");for(let s of e)s.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("design-list__item_active")})),s.classList.add("design-list__item_active"),t.forEach((e=>{e.dataset.tabsField===s.dataset.tabsHandler?e.classList.remove("hidden"):e.classList.add("hidden")}))}))})()})();