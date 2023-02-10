const clok = document.querySelector(".clok");



function day() {
    const date =new Date();

    const h=date.getHours();

    const m=date.getMinutes();

    const s=date.getSeconds();

    clok.innerHTML = `
    ${h} 
    ${m}
    ${s}
    `
    
}
day()

setTimeout(()=>{
    return day();
}, 1000)

setInterval(day, 1000)

numHour.innerHTML = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();