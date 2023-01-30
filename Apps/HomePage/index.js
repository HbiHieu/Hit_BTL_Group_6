import { headerString } from "../../Layout/Header.js";
import { footerString } from "../../Layout/Footer.js";

import {
  contentSilder,
  ProductCategories,
  popularProducts,
  bestSells,
  bannerDeal,
  note
} from "./const.js";

import { getStartList } from "./ultil.js";
// header footer
const header = document.getElementById("header");
const footer = document.getElementById("footer");

header.innerHTML = headerString;
footer.innerHTML = footerString;

//slider
const sliderWrapper = document.querySelector(".slider__wrapper");

renderSlider();

function renderSlider() {
  const sliders = contentSilder
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
  //slider = document.querySelectorAll(".slider") ;
}

//Category

const categoryProductList = document.querySelector(
  ".content__category--productList"
);

renderCategoryProduct();

function renderCategoryProduct() {
  const categories = ProductCategories.map(
    (item) => `
    <div class="content__category--product product">
    <div style="width:100%;display:flex;justify-content:center;">
    <img class="content__category--product--img" src="${item.img}" />
    </div>
    <div style="width:166px; text-align:center;" class="content__category--product--text">${item.text}</div>
  </div>
    `
  ).join("");
  categoryProductList.innerHTML = categories;
}

//banner 

const contentAdvertisement = document.querySelector(".content__advertisement") ;

renderBannerDeal() ;

function renderBannerDeal() {
  const banners = bannerDeal.map( (item) => `
  <div class="content__advertisement--parent" style="background-image:url(${item.backGroundImage})">
  <div class="content__advertisement--wrapper">
    <div class="content__advertisement--title">
      ${item.name}
    </div>
    <div class="content__advertisement--discount">
      ${item.description}
    </div>
    <a class="silder__content--btn" style="padding: 8.8px 16px"
      >Shop now</a
    >
  </div>
</div>
  ` ).join('') ;

  contentAdvertisement.innerHTML = banners ;
}

//popular product

const popularProductsList = document.querySelector(
  ".content--popularProductsList"
);

function renderPopularProducts() {
  const products = popularProducts.map((item) => {
    const startProduct = getStartList(item.rating);
    return `
        <div class="popularProduct product">
          <div class="popularProduct__container">
            <span style="background-color:${
              item.status ? ( item.status.includes("%") ? "#198754" : "red" ) : 'inherit'
            };" class="popularProduct--status">${item.status}</span>
            <img style="width: 212px; height: 190px;" src="${
              item.img
            }" alt="" class="popularProduct--img">
            <div class="popularProduct--category">${item.category}</div>
            <div class="popularProduct--name">${item.name}</div>
            <div class="popularProduct--rating">
              <span class="popularProduct--rating__start start-icon">
                ${startProduct} 
              </span>
              <span class="popularProduct--rating--number">${item.rating}&nbsp;${
      item.totalRating
    }</span>
            </div>
            <div class="popularProduct__contact">
              <div class="popularProduct__contact--price" style="font-size: 14px; font-weight: 600;">
                ${
                  item.costDiscount
                }<span class="popularProduct__contact--price--discount">${
      item.cost || ""
    }</span>
              </div>
              <div class="popularProduct__contact--btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add</div>
            </div>
          </div>
        </div>`;
  }).join('');
  popularProductsList.innerHTML = products;
}

renderPopularProducts();

//BestSells Product

const bestSellsWrapper = document.querySelector(".content__bestSells--wrapper") ;

renderBestSells() ;

function renderBestSells() {
  const bestSellsProduct = bestSells.map( (item) => {
  const startRating = getStartList(item.rating) ;
  return ( item.html ? item.html : `
  <div class="content__bestSells--product product">
  <div class="content__bestSells--container">
    <div class="content__bestSells--img">
      <img
        style="margin-bottom: 12px"
        src="${item.img}"
        alt=""
      />
    </div>
    <div class="popularProduct--category">
      ${item.category}
    </div>
    <div class="popularProduct--name">${item.name}</div>
    <div class="content__bestSells--about">
      <div class="content__bestSells--price">
        <span class="popularProduct__contact--price">${item.costDiscount}</span>
        <span class="popularProduct__contact--price--discount">${item.cost}</span>
      </div>
      <div class="content__bestSells--rating">
        <span class="start-icon">
          ${startRating}
        </span>
        <span class="rating--number" style="font-size: 12px;">${item.rating}</span>
      </div>
    </div>
    <div class="popularProduct__contact--btn" style="padding: 9px 16px; border-radius: 8px; font-size: 14px;">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-plus"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      Add To Card
    </div>
    <div class="content__bestSells--timer">
      ${
        item.count.map( (item) => (
          `
         <div class="content__bestSells--item">
         <div class="content__bestSells--item--number" style="font-weight: bold;">${item.timeNumber}</div>
         <div class="content__bestSells--item--number" style="color: #889937;margin-top: 5px;">${item.timeCategory}
         </div>
         </div>
          `
        ) ).join('')
      }
    </div>
  </div>
</div>
  ` )
  } ).join('') ;
  bestSellsWrapper.innerHTML = bestSellsProduct ;
}

//note section 

const noteSection = document.querySelector(".content__note") ;

renderNoteSection() ;

function renderNoteSection() {
  const noteItems = note.map( item => `
  <div class="content__note--item">
  <div class="content__note--item--icon" style="display: flex;">
    <img src="${item.srcImg}" alt="">
  </div>
  <div class="content__note--item--title">${item.title}</div>
  <div class="content__note--item--text">${item.text}</div>
</div>
  ` ).join('') ;

  noteSection.innerHTML = noteItems ;
}

