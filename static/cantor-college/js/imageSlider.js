const Sliders = document.querySelectorAll('.imageSlider');
Sliders.forEach(slider => {
    if(slider.classList.contains('semiManual') 
    || slider.classList.contains('manual')) ImageSliderManual(slider);
    else ImageSliderAuto(slider);
});
function ImageSliderAuto(imageSlider){
    const Slider = imageSlider.querySelector('.slides');
    const Images = Slider.querySelectorAll('img');
    const width = Images[0].clientWidth;
    const length = Images.length - 1;
    let counter = 0;
    setInterval(() => {
        counter++;
        if(counter > length) counter = 0;
        Slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
    }, 8000);
}
function ImageSliderManual(imageSlider){
    const Slider = imageSlider.querySelector('.slides');
    const Images = Slider.querySelectorAll('img');
    const nextButton = imageSlider.querySelector('.nextBtn');
    const prevButton = imageSlider.querySelector('.prevBtn');
    const width = Images[0].clientWidth;
    const length = Images.length - 1;
    let counter = 0;
    let autoTimer = 8;
    nextButton.addEventListener("click", () => {changeImage(1);});
    prevButton.addEventListener("click", () => {changeImage(-1);});
    function changeImage(changeBy){
        autoTimer = 8;
        counter += changeBy;
        if(counter > length) counter = 0;
        else if(counter < 0) counter = length;
        Slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
    }
    if(Slider.classList.contains('semiManual')){
        setInterval(() => {
            autoTimer--;
            if(autoTimer <= 0) changeImage(1);
        }, 1000);
    }
    else setInterval(autoTimer = 8, 100000);
}
