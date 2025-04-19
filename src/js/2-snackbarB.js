"use strict";

const form = document.querySelector('form');
form.addEventListener("click", handleBtn);

function handleBtn(event) {
    event.preventDefault();
    const cat = (event);
    console.log(cat);
    //console.log(timer, state);
}