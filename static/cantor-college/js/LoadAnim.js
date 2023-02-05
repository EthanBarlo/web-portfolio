let cantorText = document.querySelector('.cantor-text');
let collegeText = document.querySelector('.college-text');
let cantorAnim = [
    "C",
    "C|",
    "C",
    "C|",
    "CA|",
    "CAN|",
    "CANT|",
    "CANTO|",
    "CANTOR|",
    "CANTOR"
];
let collegeAnim = [
    "C",
    "C|",
    "CO|",
    "COL|",
    "COLL|",
    "COLLE|",
    "COLLEG|",
    "COLLEGE|",
    "COLLEGE"
];
function animation (animArray, textElement){
    let animFrame = 0;
    let animInterval = setInterval(() => {
        textElement.innerHTML = animArray[animFrame];
        animFrame++;
        if(animFrame >= animArray.length) clearInterval(animInterval);
    }, 150);
}
function college(){
    collegeText.classList.remove('hidden');
    animation(collegeAnim, collegeText);
}
animation(cantorAnim, cantorText);
setTimeout(college, 1350);
setTimeout(introEnd, 2550);
function introEnd(){
    document.querySelector('header.intro').classList.remove('intro');
    document.querySelector('.Logo.intro').classList.remove('intro');
    document.querySelector('header h2.intro').classList.remove('intro');
    document.querySelector('.HamburgerMenu.intro').classList.remove('intro');
}