const toggleMenu = document.getElementById("icon-menu");
let headerMenu = document.querySelector(".header-menu");

function showMenu(){
    headerMenu.classList.toggle("active");
}
toggleMenu.addEventListener("click",showMenu)