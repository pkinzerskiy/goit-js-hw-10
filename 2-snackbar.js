import"./assets/default-CBcUDVt8.js";import{i as s}from"./assets/vendor-DDayshsU.js";const c=document.querySelector("button");c.addEventListener("click",a);let n;const u=document.querySelector("input");u.addEventListener("input",t=>{n=t.target.value});const l=document.querySelector("form");let m=document.querySelectorAll('input[type="radio"]');function a(t){t.preventDefault();let o;m.forEach(e=>{e.checked&&(o=e.value)}),l.reset(),new Promise((e,i)=>{o=="fulfilled"?e(n):i(n)}).then(e=>{setTimeout(()=>{r(`✅ Fulfilled promise in ${e} ms`,"green")},e)}).catch(e=>{setTimeout(()=>{r(`❌ Rejected promise in ${e} ms`,"red")},e)})}function r(t,o){s.show({message:t,backgroundColor:o,messageColor:"white",position:"topRight"})}
//# sourceMappingURL=2-snackbar.js.map
