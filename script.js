let tiempoRef = Date.now()
let cronometrar = false
let acumulado = 0

function iniciar(){
    cronometrar = true
}

function pausar(){
    cronometrar = false
}

function reiniciar(){
    acumulado = 0
}

function formatearMS(tiempo_ms){
    let MS = tiempo_ms % 1000
    let S = Math.floor(((tiempo_ms - MS) / 1000) % 60)
    let M = Math.floor((S / 60) % 60)
    let H = Math.floor((M / 60))
    Number.prototype.ceros = function(n){
        return (this + "").padStart(n,0)
    }
    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2) + "." + MS.ceros(3)
}

setInterval(() => {
    let tiempo = document.getElementById("tiempo");
    if(cronometrar){
        acumulado += Date.now() - tiempoRef;
    }
    tiempoRef = Date.now();
    tiempo.innerHTML = formatearMS(acumulado);
}, 1000 / 60);