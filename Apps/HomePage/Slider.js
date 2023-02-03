import { contentSlider } from "./const.js";

const sliderWrapper = document.querySelector(".slider__wrapper");

renderSlider();

function renderSlider() {
  const sliders = contentSlider
    .map((item) => {
      return `
        <div class="slider" style="background-image: url(${item.backGroundImage})" >
        <div class="slider__content">
        <span class="slider__content--discount">${item.textDiscout}</span>
            <div class="slider__content--title">${item.textTitle}</div>
            <div class="slider__content--sub">${item.subText}</div>
            <a class="slider__content--btn">Shop now <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
        `;
    })
    .join("");

  sliderWrapper.innerHTML = sliders;
}

$('.slider__wrapper').slick({
        draggable : true ,
        autoplay : true ,
        autoplaySpeed : 2000 ,
        dots : true ,
});