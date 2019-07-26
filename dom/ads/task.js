const rotatorCase = [...document.querySelectorAll('.rotator__case')];
const rotatorCasesNumber = rotatorCase.length - 1;
var index = 0;
var speed = rotatorCase[index].dataset.speed;
var rotatorSpeedId = setTimeout(function setSpeed() {
    changeActive(isActiveRotatorCase());
    setRotatorCaseSpeed();
    rotatorSpeedId = setTimeout(setSpeed, speed);
}, speed);

function isActiveRotatorCase() {
    return rotatorCase[index].classList.contains('rotator__case_active');     
};

function changeActive(isActive) {
    if (isActive) {
        rotatorCase[index].classList.remove('rotator__case_active');
        index < rotatorCasesNumber ? index++ : index = 0;
    };
    rotatorCase[index].classList.add('rotator__case_active');  
};

function setRotatorCaseSpeed() {
    speed = rotatorCase[index].dataset.speed;
};
