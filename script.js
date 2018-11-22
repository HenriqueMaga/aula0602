const menuHamburger =document.querySelector('.menu-haburguer');
const navMobile = document.querySelector('.filtros.mobile');

menuHamburger.onclick = () =>{
    menuHamburger.classList.toggle('ativo');
    navMobile.classList.toggle('ativo');
}