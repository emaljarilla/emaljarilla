// botón carta
let masInfo = document.getElementById("flecha");
let mostarMenosInfo = document.getElementById("menos")

masInfo.addEventListener('click',()=>{
    if(masInfo.className =="flecha-color"){
        masInfo.className ="flecha";
        mostarMenosInfo.className="menosInfo"
    }else{
        masInfo.className ="flecha-color";
        mostarMenosInfo.className="masInfo"
    }
})