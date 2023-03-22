let menu = document.querySelector("nav");
let iconMenu = document.querySelector(".menu-mobile")
let iconFechar = document.querySelector(".fechar-menu")

function abrirMenu() {
  menu.style.display = "block";
  iconMenu.style.display = 'none';
  iconFechar.style.display = 'block'
}

function fecharMenu() {
  menu.style.display = 'none';
  iconFechar.style.display = 'none'
  iconMenu.style.display = 'block';

}