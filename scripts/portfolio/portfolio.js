let iconButton = document.querySelectorAll(".navBarPCv > button");

iconButton.forEach(iconButton => {
    iconButton.addEventListener('mouseover',()=>{
        let iconSpan = iconButton.lastElementChild;
        iconSpan.className=""
    })
    iconButton.addEventListener('mouseout',()=>{
        let iconSpan = iconButton.lastElementChild;
        if(iconButton.className=="list-group-item list-group-item-action navSelect mb-2 fs-2"){
            iconSpan.className=""
        }else{
            iconSpan.className="d-none"
        }
        
    })
});

/*
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        */