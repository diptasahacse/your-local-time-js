/*
Project Name : Digital Clock
Author: Dipta Saha
Email: diptasaha.lpu.cse@gmail.com
Date: 28 March 2022

*/


let clockArea = document.getElementById('clock-area');

setInterval(()=>{
    let localDate = new Date();
    clockArea.innerText = localDate.toLocaleTimeString();
},1000)