import { popularProducts , productHover } from "../const.js";
import { getStartList } from "./ultil.js";

const popularProductsList = document.querySelector(
    ".content--popularProductsList"
  );
  
  
  function renderPopularProducts() {
    const products = popularProducts.map((item , index) => {
      const startProduct = getStartList(item.rating);
      return `
          <div class="popularProduct product" class=${index}>
            ${productHover}
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
  var addProductBtns = document.querySelectorAll(".popularProduct__contact--btn") ;
  
  const handleAddProduct = (e) => {
    console.log(e) 
  }
  
  for( let addProductBtn of addProductBtns ) {
    addProductBtn.addEventListener("click" , (e) => {
      handleAddProduct(e) ;
   } )
  }