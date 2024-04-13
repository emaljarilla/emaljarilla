
const start = document.querySelector('a');
const body = document.querySelector('body');
function mozillaORie() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function alertarInicio(n){
    setTimeout(() => {
        $('#sTop').addClass("action");
        $('#sRight').addClass("action");
        $('#sButton').addClass("action");
        $('#sLeft').addClass("action");
    }, n);
    setTimeout(() => {
        $('#sTop').removeClass("action");
        $('#sRight').removeClass("action");
        $('#sButton').removeClass("action");
        $('#sLeft').removeClass("action");
    }, n+2500);
}
function creaIndex() {
    let objCreado = mozillaORie();
    let arryJson = [];
    let botonNoPulsado = document.querySelector("#inicio");
    alertarInicio(6000);
    alertarInicio(12000);
    alertarInicio(19000);
    alertarInicio(26000);
    setTimeout(() => {
        botonNoPulsado.className ="finnal";
    }, 30000);
    objCreado.open("GET", "./document/hola_mundo.json", true);
    objCreado.send();
    console.log(objCreado.readyState)
    objCreado.onreadystatechange = function () {
        if (objCreado.readyState == 4) {
            arryJson = JSON.parse(objCreado.responseText);
            arryJson = arryJson.mundo[0];
        }
        let contador = 1
        for (let k = 1; k <= 11; k++) {
            for (let i = 1; i <= 10; i++) {
                const ele1 = document.createElement("div");
                if (arryJson[i] != undefined) {
                    ele1.innerHTML = arryJson[i];
                    ele1.className = (`pos${contador} delay${(contador+5)} invisible`);
                    ele1.id = `pos${contador}`
                    body.appendChild(ele1);
                }
                contador++
            }
            contador--
        }
    }
}
start.addEventListener("click", () => {
    let modA = document.getElementById("inicio");
    modA.className = "click";
    for (let i = 1; i < 100; i++) {
        const ele1 = document.getElementById(`pos${i}`)
        ele1.classList.toggle(`transformed${i}`)
    }
    setTimeout(() => {
      window.open("./views/portfolio.html","_self");
    }, 5000);
})     
        
    
    
