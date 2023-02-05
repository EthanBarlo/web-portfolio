const sections = document.querySelector('.circleSections');
let aboutHeight = document.querySelector('.circleSections').clientHeight;
window.addEventListener("scroll", () => {
    headerHeight = document.querySelector('header').clientHeight - 200;
    if (window.scrollY > headerHeight * .7 &&
        window.scrollY < headerHeight + aboutHeight - 100) 
        sections.classList.remove('offScreen');
    else 
        sections.classList.add('offScreen');
})