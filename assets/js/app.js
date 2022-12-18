const iconMenu = document.getElementById("icon-menu");
let menu = document.querySelector(".header-menu");

function menuToggle(){
    menu.classList.toggle("active")
}

iconMenu.addEventListener("click",menuToggle);