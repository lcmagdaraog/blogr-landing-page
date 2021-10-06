const btnClose  = document.querySelector('.mobile-close');
const menu = document.querySelector('.nav-menu');
const btnopen = document.querySelector('.mobile-open');

btnClose = addEventListener('click', menuHideShow);
btnopen = addEventListener('click', menuHideShow);

function menuHideShow(){
    menu.classList.toggle('menu-hide');
    btnopen.classList.toggle('open-hide');
};