import { ProductCategories } from "./const.js";

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

  $('.content__category--productList').slick({
        draggable : true ,
        autoplay : true ,
        autoplaySpeed : 1500 ,
        slidesToShow: 6,
        nextArrow : `<span class="content__category--arrow--single arrowRight"
            ><i class="fa-solid fa-angle-right"></i
          ></span>` ,
          prevArrow : `<span class="content__category--arrow--single arrowLeft"
            ><i class="fa-solid fa-angle-left"></i
          ></span>` ,
});