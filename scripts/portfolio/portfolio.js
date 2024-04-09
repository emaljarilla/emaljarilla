//enlazamos el nav
let enlaces = document.querySelectorAll(".lista li a");

enlaces.forEach((elementos)=>{
    elementos.addEventListener('click',(event)=>{
        enlaces.forEach((borrado)=>{
            borrado.classList.remove("partActive")
        })
        event.target.classList.add("partActive");

    })
})

let menuContent = document.querySelector(".menu");
let preScrollPos = window.pageYOffset;
//gotop
let gotop =document.querySelector(".go-top");
window.addEventListener('scroll',function(){
    let nowScrollPos =window.pageYOffset;
    if(preScrollPos<nowScrollPos){
        menuContent.style.top="-120px"
    }else{
        menuContent.style="top:0px"
    }
    preScrollPos=nowScrollPos;

    //gotop
    let positionGoTop =window.pageYOffset
    if(positionGoTop<=600){
        gotop.style.right="-100px"
        
    }else{
        gotop.style.right="0px"
        menuContent.style.borderBottom= "3px solid #143c54"
    }
/******************************************
 ******************************************/

   

})

gotop.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
    enlaces.forEach((borrado)=>{
        borrado.classList.remove("partActive")
    })
})

let inicioSaber = document.querySelector('.inicioSaber')

inicioSaber.addEventListener('click',()=>{
    document.documentElement.scrollTop=750;
})


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