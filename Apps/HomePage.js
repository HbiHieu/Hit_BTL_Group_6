import { headerString } from "../Layout/Header.js"
import { footerString } from "../Layout/Footer.js";
// header footer
const header =  document.getElementById("header") ;
const footer = document.getElementById("footer") ;

header.innerHTML = headerString ;
footer.innerHTML = footerString ;

//slider
const contentSilder = [
    {
        textDiscout : 'Opening Sale Discount 50%' ,
        textTitle : 'SuperMarket For Fresh Grocery' ,
        subText : 'Introduced a new model for online grocery shopping and convenient home delivery' ,
        backGroundImage : '../assets/imgs/slide-1.jpg' ,
    } ,
    {
        textDiscout : 'Free Shipping - orders over $100' ,
        textTitle : 'Free Shipping on orders over $100' ,
        subText : 'Free Shipping to First-Time Customers Only, After promotions and discounts are applied.' ,
        backGroundImage : '../assets/imgs/slider-2.jpg' ,
    } ,
]

const sliderWrapper = document.querySelector(".slider__wrapper") ;
var slider 
var indexSlider = 1 ;

renderSlider() ;

const hideSlider = () => {
    slider.forEach( (element) => element.classList.remove("active") ) ;
}

const showSlider = () => {
    slider[indexSlider].classList.add("active") ;
    console.log(indexSlider) ;
    indexSlider = ( ( indexSlider == slider.length - 1 ) ? 0 : 1 ) ;
}

function renderSlider(){
    const sliders = contentSilder.map( ( item ) => {
        return `
        <div class="slider active" style="background-image: url(${item.backGroundImage})" >
        <div class="silder__content">
        <span class="slider__content--discount">${item.textDiscout}</span>
            <div class="slider__content--title">${item.textTitle}</div>
            <div class="silder__content--sub">${item.subText}</div>
            <a class="silder__content--btn">Shop now <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
        `
    } ).join('') ;
    
    sliderWrapper.innerHTML = sliders ;
    slider = document.querySelectorAll(".slider") ;
}

// const playSlider = () => {
//     setInterval(() => {
//        hideSlider() ;
//        showSlider() ; 
//     }, 2000);
// } 

playSlider() ;






