const rotatorCases = [...document.querySelectorAll('.rotator__case')];
const rotatorCasesNumber = rotatorCases.length - 1;

var index = 0;
var speed = rotatorCases[index].dataset.speed;
var colour = rotatorCases[index].dataset.color;

var adsRotatorId = setTimeout(function fn() {
    
    toggleActive(isActiveRotatorCase());

    setRotatorCaseSpeed();
    setRotatorCaseColour();

    adsRotatorId = setTimeout(fn, speed);
}, speed);


function isActiveRotatorCase() {
    return rotatorCases[index].classList.contains('rotator__case_active');     
};

function toggleActive(isActive) {
    if (isActive) {
        rotatorCases[index].classList.remove('rotator__case_active');
            index < rotatorCasesNumber ? index++ : index = 0;
    };
    rotatorCases[index].classList.add('rotator__case_active');  
};

function setRotatorCaseSpeed() {
    speed = rotatorCases[index].dataset.speed;
};

function setRotatorCaseColour() {
    colour = rotatorCases[index].dataset.color;
    rotatorCases[index].style.color = colour;
};
