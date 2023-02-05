const menuBtn = document.querySelector('.HamburgerMenu');
const navMenu = document.querySelector('nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen){
        menuBtn.classList.add('open');
        navMenu.classList.add('open');
    }
    else{
        menuBtn.classList.remove('open');
        navMenu.classList.remove('open');
    }
})