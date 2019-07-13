const sliderItems= document.getElementsByClassName("slider__items");
const sliderPrev = document.getElementsByClassName("slider__arrow_prev");
const sliderNext = document.getElementsByClassName("slider__arrow_next");

let slider_item = document.getElementsByClassName("slider__item")
let sliderItem = Array.from(slider_item);
let length = sliderItem.length;
function swipe() {
  slider__item.classList.add("slider__item_active");
}

sliderPrev.onclick = swipe;
