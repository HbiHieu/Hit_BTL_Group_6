import { bestSells , productHover } from "../const.js";
import { getStartList } from "./ultil.js";

const bestSellsWrapper = document.querySelector(".content__bestSells--wrapper") ;

renderBestSells() ;

function renderBestSells() {
  const bestSellsProduct = bestSells.map( (item) => {
  const startRating = getStartList(item.rating) ;
  return ( item.html ? item.html : `
  <div class="content__bestSells--product product">
       ${productHover}
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
