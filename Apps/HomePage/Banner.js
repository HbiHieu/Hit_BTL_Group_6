import { bannerDeal } from "./const.js";

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
    <a class="slider__content--btn" style="padding: 8.8px 16px"
      >Shop now</a
    >
  </div>
</div>
  ` ).join('') ;

  contentAdvertisement.innerHTML = banners ;
}