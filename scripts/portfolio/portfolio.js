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
let contador=1;

other.addEventListener('click', () => {
    
    if(contador%2==0){
        
        switch (other.value) {
            
            case "2":
                other.value = "1";
                window.open("./pagina_en_obras.html","_self");
                break;
            case "3":
                other.value = "1";
                window.open("./pagina_en_obras.html","_self");
                break;
            case "4":
                other.value = "1";
                window.open("./pagina_en_obras.html","_self");
                break;
            case "5":
                other.value = "1";
                window.open("./pagina_en_obras.html","_self");
                break;
        }
        ++contador;
    }
    ++contador;
})