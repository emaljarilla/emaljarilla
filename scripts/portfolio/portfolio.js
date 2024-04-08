// botón carta
let masInfo = document.getElementById("flecha");
let mostarMenosInfo = document.getElementById("menos")

masInfo.addEventListener('click', () => {
    if (masInfo.className == "flecha-color") {
        masInfo.className = "flecha";
        mostarMenosInfo.className = "menosInfo"
    } else {
        masInfo.className = "flecha-color";
        mostarMenosInfo.className = "masInfo"
    }
})
//botón otras páginas
let other = document.getElementById("other_page");

other.addEventListener('click', () => {
    let eleccion = document.querySelector(".eleccion");
    switch (other.value) {
        case "1":
            eleccion.href = "./portfolio.html"
            eleccion.innerHTML = "ir al básico"
            break;
        case "2":
            eleccion.href = "./pagina_en_obras.html"
            eleccion.innerHTML = "ir a bootstrap"
            break;
        case "3":
            eleccion.href = "./pagina_en_obras.html"
            eleccion.innerHTML = "ir a react"
            break;
        case "4":
            eleccion.href = "./pagina_en_obras.html"
            eleccion.innerHTML = "ver angular"
            break;
        case "5":
            eleccion.href = "./pagina_en_obras.html"
            eleccion.innerHTML = "ver portfolio 2.0"
            break;
        default:
            alert("Ha dado un error la eleccion");
            break;
    }
})