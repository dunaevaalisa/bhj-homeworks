const reveal = [...document.querySelectorAll('.reveal')];

window.addEventListener('scroll', () => {
    getPosition();
});

function getPosition() {
    reveal.forEach((revealElements) => {
      const lengthOnTop = revealElements.getBoundingClientRect().top;
      changeElement(revealElements, lengthOnTop);
    });    
};

function changeElement(revealElements, lengthOnTop) {
    if (lengthOnTop > window.innerHeight || lengthOnTop < 0) {
        revealElements.classList.remove('reveal_active');
    } else {
        revealElements.classList.add('reveal_active');
    };
};
