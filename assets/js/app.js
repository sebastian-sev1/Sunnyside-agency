const iconMenu = document.getElementById("icon-menu");
let menu = document.querySelector(".header-menu");

function menuToggle(){
    let links = document.querySelectorAll(".link-item");
    links.forEach((link)=>{
        link.addEventListener("click",menuToggle);
    });
    menu.classList.toggle("active");
}

iconMenu.addEventListener("click",menuToggle);