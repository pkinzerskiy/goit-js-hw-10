import"./assets/default-CBcUDVt8.js";import{f as T,u as g}from"./assets/vendor-DDayshsU.js";const a=document.querySelector("button[data-start]"),f=document.querySelector("span[data-seconds]"),y=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-days]");let c=Date.now(),i=0;const k={dateFormat:"d.m.Y H:i:S",locale:g.Ukrainian,enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){i=e[0].getTime(),i<c&&window.alert("Please choose a date in the future")}};T("#datetime-picker",k);class b{constructor(){this.rangeTime,this.idTimer=!1}startTimer(){if(this.idTimer){console.log("timer is active");return}this.rangeTime=i-c,document.getElementById("datetime-picker").disabled=!0,a.disabled=!0,this.idTimer=!0,console.log("rangeTime ",this.rangeTime),setInterval(()=>{if(this.rangeTime-=1e3,this.rangeTime<=0){a.disabled=!1,document.getElementById("datetime-picker").disabled=!1,clearInterval(this.idTimer),this.idTimer=!1,console.log("stop interval",this.idTimer);return}let{days:n,hours:o,minutes:r,seconds:s}=v(this.rangeTime);f.textContent=s,y.textContent=r,p.textContent=o,S.textContent=n,console.log(n,o,r,s)},1e3)}}const d=new b;console.log("my class calculation",d);a.addEventListener("click",d.startTimer);function v(e){const l=t(Math.floor(e/864e5)),u=t(Math.floor(e%864e5/36e5)),m=t(Math.floor(e%864e5%36e5/6e4)),h=t(Math.floor(e%864e5%36e5%6e4/1e3));return{days:l,hours:u,minutes:m,seconds:h}}function t(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
