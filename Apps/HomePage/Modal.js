var modalSection = document.querySelector('.modal') ;

renderModal() ;
function renderModal() {
    const modal = `
      <div class="modal__container">
        <div class="modal__container--sliders">
          <div class="modal__container--sliders--imgList">
            <div class="modal__container--sliders--containerImg" style="background-image: url('../assets/imgs/product-single-img-1.jpg');">
              <img src="../assets/imgs/product-single-img-1.jpg" alt="" />
            </div>
            <div class="modal__container--sliders--containerImg" style="background-image: url('../assets/imgs/product-single-img-2.jpg');">
              <img src="../assets/imgs/product-single-img-2.jpg" alt="" />
            </div>
            <div class="modal__container--sliders--containerImg" style="background-image: url('../assets/imgs/product-single-img-3.jpg');">
              <img src="../assets/imgs/product-single-img-3.jpg" alt="" />
            </div>
            <div class="modal__container--sliders--containerImg" style="background-image: url('../assets/imgs/product-single-img-4.jpg');">
              <img src="../assets/imgs/product-single-img-4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="modal__container--info">
          <div class="modal__container--info--category">Bakery Biscuits</div>
          <div class="modal__container--info--name">Napolitanke Ljesnjak</div>
          <div class="modal__container--info--rating">
            <div class="modal__container--info--start start-icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div
              class="modal__container--info--cost"
              style="font-size: 21px; font-weight: bold"
            >
              <span class="modal__container--info--discounted">$32</span>
              <span
                class="modal__container--info--origin popularProduct__contact--price--discount"
                >$35</span
              >
            </div>
          </div>
          <div class="modal__container--info--contact">
            <hr />
            <div class="modal__container--info--contact--weight">
              <span class="modal__container--info--weight--item">250g</span>
              <span class="modal__container--info--weight--item">500g</span>
              <span class="modal__container--info--weight--item">1kg</span>
            </div>
            <div class="number-input">
              <button
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              ></button>
              <input
                class="quantity"
                min="0"
                name="quantity"
                value="1"
                type="number"
              />
              <button
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                class="plus"
              ></button>
            </div>
            <div class="modal__container--info--btn">
              <div
                class="popularProduct__contact--btn"
                style="
                  padding: 9px 16px;
                  border-radius: 8px;
                  font-size: 14px;
                  cursor: pointer;
                  margin-right: 10px;
                "
              >
                Add To Card
              </div>
              <span
                class="iconContactProduct"
                style="width: 47px; height: 41px; background-color: #f0f3f2"
              >
                <i class="fa-regular fa-heart"></i>
              </span>
              <span
                class="iconContactProduct"
                style="width: 47px; height: 41px; background-color: #f0f3f2"
              >
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </span>
            </div>
            <hr />
          </div>
          <ul class="modal__container--info--detail">
            <li class="modal__container--info--detail--wrapper">
              <span class="modal__container--info--detail--left"
                >Product Code:</span
              >
              <span class="modal__container--info--detail--right"
                >FBB00255</span
              >
            </li>
            <li class="modal__container--info--detail--wrapper">
              <span class="modal__container--info--detail--left"
                >Availability:</span
              >
              <span class="modal__container--info--detail--right"
                >In Stock</span
              >
            </li>
            <li class="modal__container--info--detail--wrapper">
              <span class="modal__container--info--detail--left">Type:</span>
              <span class="modal__container--info--detail--right">Fruits</span>
            </li>
            <li class="modal__container--info--detail--wrapper">
              <span class="modal__container--info--detail--left"
                >Shipping:</span
              >
              <span class="modal__container--info--detail--right"
                >01 day shipping.( Free pickup today)</span
              >
            </li>
          </ul>
        </div>
      </div>
    ` ;
    modalSection.innerHTML = modal ;
}

const viewProductBtns = document.querySelectorAll(".viewModal") ;
const modalContainer = document.querySelector(".modal__container") ;

let isOpen = false ;

const handleOpenModal = () => {
  isOpen = true ;
}

const handleCloseModal = () => {
  isOpen = false ;
}

const handleShowModal = () => {
  if ( isOpen ) {
    modalSection.classList.add("active") ;
  }
  else {
    modalSection.classList.remove("active") ;
  }
}
//bnt view
for( let viewProductBtn of viewProductBtns ) {
  viewProductBtn.addEventListener( "click" ,function(){
    handleOpenModal() ;
    handleShowModal() ;
  } )
} ;

//modal 

modalSection.addEventListener( "click" , function(){
  handleCloseModal() ;
  handleShowModal() ;
} ) ;

modalContainer.addEventListener( "click" , function(e) {
   e.stopPropagation() ;
} ) ;

//img modal 
const containersImg = document.querySelectorAll(".modal__container--sliders--containerImg") ;
const imgs = document.querySelectorAll(".modal__container--sliders--containerImg img") ;

for( let i = 0 ; i <= 3 ; i++ ) {
  containersImg[i].addEventListener( "mousemove" , (event) => {
   let clientX = event.clientX 
   let clientY = event.clientY 

   let containerWidth = containersImg[i].offsetWidth ;
   let containerHeight = containersImg[i].offsetHeight ;
   
   clientX = (clientX - 253 ) / containerWidth * 100 ;
   clientY = (clientY - 83 ) / containerHeight * 100 ;

   console.log( clientX ) ;
   console.log( clientY ) ;

   containersImg[i].style.backgroundPosition = `${clientX}% ${clientY}%`
   imgs[i].style.display = 'none' ;
  }) ;
  containersImg[i].addEventListener( "mouseleave" , () => {
   containersImg[i].style.backgroundPosition = `center` ;
   imgs[i].style.display = 'block' ;
  })
}

$(".modal__container--sliders--imgList").slick({
          slidesToShow : 1 ,
          draggable : false ,
          dots : true ,
          dotsClass : 'modal__container--sliders--nav' ,
          initialSlide : 0 ,
})