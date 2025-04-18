'use strict';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// import { document } from "postcss";
const btn = document.querySelector("button");
btn.addEventListener("click", handleBtn);

let delay;
const num = document.querySelector('input');
num.addEventListener("input", (event) => {
    // console.log("form-input", event.target.value);
    delay = event.target.value;
});

const form = document.querySelector('form');

let states = document.querySelectorAll('input[type="radio"]');

function handleBtn(event) {
    event.preventDefault();

    let state
 
    states.forEach(el => {
        if (el.checked) {
            state = el.value;
        } 
    });

    form.reset();
    
    const prm = new Promise((resolve, reject) => {
        if (state == "fulfilled") {
                resolve(delay)   
         } else {
             reject(delay);
        }
        
    })

    prm 
        .then((delay)=> {
            setTimeout(() => {
                showMsg(`✅ Fulfilled promise in ${delay} ms`, 'green');
            }, delay)
        
        })
        .catch((delay) => {
            setTimeout(() => {
                showMsg(`❌ Rejected promise in ${delay} ms`, 'red');

        },delay)
        })
}


function showMsg(msg, color) {
    iziToast.show({
                    message: msg,
                    backgroundColor: color, 
                    messageColor: 'white',
                    position:'topRight'
    
});
}