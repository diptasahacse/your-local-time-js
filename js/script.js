let clockArea = document.getElementById('clock-area');

setInterval(()=>{
    let localDate = new Date();
    clockArea.innerText = localDate.toLocaleTimeString();
},1000)