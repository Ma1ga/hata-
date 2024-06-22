const burger = document.querySelector(".burger-menu")
const menu = document.querySelector(".menu")

burger.onclick = function(){
    menu.classList.toggle("active-menu");
    burger.classList.toggle("active-burger");
}