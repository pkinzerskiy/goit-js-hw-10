"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');
form.addEventListener("submit", handleBtn);

function handleBtn(event) {
    event.preventDefault();
    const delay = Number(event.target.elements.delay.value);
    const state = event.target.elements.state.value;
    // console.log("timer", typeof delay);
    form.reset();

     if (!delay) {
        console.log("час не обрано");
        return
    }

    const promise = new Promise((resolve, reject) => {
       
        console.log("delay", delay)
        
        setTimeout(() => {
        if (state == "fulfilled") {
                resolve(delay)   
         } else {
             reject(delay);
        }
         }, delay)
    })

    promise
        .then((delay) => {
                console.log("value ", state);
                showMsg(`✅ Fulfilled promise in ${delay} ms`, 'green');
        })
        .catch((delay) => {
                console.log("value ", state);
                showMsg(`❌ Rejected promise in ${delay} ms`, 'red');

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




