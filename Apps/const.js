export const contentSlider = [
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

//slider
export const ProductCategories = [
    {
        text : 'Atta, Rice & Dal' ,
        img : '../assets/imgs/category-atta-rice-dal.jpg' ,
    } ,
    {
        text: 'Baby care' ,
        img: '../assets/imgs/category-baby-care.jpg' ,
    } ,
    {
        text:'Chicken,Meat & Fish',
        img :'../assets/imgs/category-chicken-meat-fish.jpg'
    } ,
    {
        text:'Cleaning Essentials' ,
        img :'../assets/imgs/category-cleaning-essentials.jpg' ,
    } ,
    {
        text :'Pet Care' ,
        img : '../assets/imgs/category-pet-care.jpg'
    } ,
    {
        text:'Dairy, Bread & Eggs' ,
        img :'../assets/imgs/category-dairy-bread-eggs.jpg' ,
    } ,
    {
        text:'Snack & Munchies' ,
        img :'../assets/imgs/category-snack-munchies.jpg' ,
    } ,
    {
        text:'Bakery & Biscuits' ,
        img :'../assets/imgs/category-bakery-biscuits.jpg' ,
    } ,
    {
        text:'Instant Food' ,
        img :'../assets/imgs/category-instant-food.jpg' ,
    } ,
    {
        text:'Tea, Coffee & Drinks' ,
        img :'../assets/imgs/category-tea-coffee-drinks.jpg' ,
    } ,
]

//product
export const popularProducts = [
    {
        status : 'Sale' ,
        img : '../assets/imgs/product-img-1.jpg' ,
        category : 'Snack & Munchies' ,
        name : "Haldiram's Sev Bhujia" ,
        rating : 4.5 ,
        totalRating : '(149)' ,
        costDiscount : '$18' ,
        cost : '$24' ,
    } ,
    {
        status : '14%' ,
        img : '../assets/imgs/product-img-2.jpg' ,
        category : 'Bakery & Biscuits' ,
        name : "NutriChoice Digestive" ,
        rating : 4.5 ,
        totalRating : '(25)' ,
        costDiscount : '$24' ,
    } ,
    {
        img : '../assets/imgs/product-img-3.jpg' ,
        category : 'Bakery & Biscuits' ,
        name : 'Cadbury 5 Star Chocolate' ,
        rating : 5 ,
        totalRating :'(469)' ,
        costDiscount : '$32',
        cost :'$35' ,
    } ,
    {
        status : 'Hot' ,
        img : '../assets/imgs/product-img-4.jpg' ,
        category : 'Snack & Munchies' ,
        name : 'Onion Flavour Potato' ,
        rating : 3.5 ,
        totalRating : '(456)' ,
        costDiscount : '$3' ,
        cost : '$5' ,
    } ,
    {
        img : '../assets/imgs/product-img-5.jpg' ,
        category : 'Instant Food' ,
        name :'Salted Instant Popcorn' ,
        rating : 4.5 ,
        totalRating : '(39)' ,
        costDiscount : '$13' ,
        cost : '$18' ,
    },
    {   
        status : 'Sale' ,
        img : '../assets/imgs/product-img-6.jpg' ,
        category : 'Dairy, Bread & Eggs' ,
        name :'Blueberry Greek Yogurt' ,
        rating : 4.5 ,
        totalRating : '(189)' ,
        costDiscount : '$18' ,
        cost : '$24' ,
    } ,
    {
        img : '../assets/imgs/product-img-7.jpg' ,
        category : 'Dairy, Bread & Eggs' ,
        name :'Britannia Cheese Slices' ,
        rating : 5 ,
        totalRating : '(345)' ,
        costDiscount : '$24' ,
    } ,
    {
        img : '../assets/imgs/product-img-8.jpg' ,
        category : 'Instant Food' ,
        name :"Kellogg's Original Cereals" ,
        rating : 4 ,
        totalRating : '(90)' ,
        costDiscount : '$32' ,
        cost : '$35' ,
    } ,
    {
        img : '../assets/imgs/product-img-9.jpg' ,
        category : 'Snack & Munchies' ,
        name :'Slurrp Millet Chocolate' ,
        rating : 4.5 ,
        totalRating : '(67)' ,
        costDiscount : '$3' ,
        cost : '$5' ,
    } ,
    {
        img : '../assets/imgs/product-img-10.jpg' ,
        category : 'Dairy, Bread & Eggs' ,
        name :'Amul Butter - 500 g' ,
        rating : 3.5 ,
        totalRating : '(89)' ,
        costDiscount : '$13' ,
        cost : '$18' ,
    }
] 

//Banner deal

export const bannerDeal = [
    {
        name : 'Fruits & Vegetables' ,
        description : 'Get Upto 30% Off' ,
        backGroundImage : '../assets/imgs/grocery-banner.png'
    } ,
    {
        name : 'Freshly Baked Buns' ,
        description : 'Get Upto 25% Off' ,
        backGroundImage : '../assets/imgs/grocery-banner-2.jpg'
    } ,
]

//bestSells

export const bestSells = [
    {
        html : `
        <div class="content__bestSells--advertisement">
          <div class="content__bestSells--advertisement--title">
            100% Organic Coffee Beans.
          </div>
          <div class="content__bestSells--subTitle">
            Get the best deal before close.
          </div>
          <a style="background-color: #0aad0a" class="slider__content--btn"
            >Shop now <i class="fa-solid fa-arrow-right"></i
          ></a>
        </div>
      ` ,
    } ,
    {
        img : "../assets/imgs/product-img-11.jpg" ,
        category : "Tea, Coffee & Drinks" ,
        name : "Roast Ground Coffee" ,
        cost : '$13' ,
        costDiscount : '$18' ,
        rating : 4.5 ,
        count : [
            {
              timeNumber : 2022 ,
              timeCategory : 'Days' ,
            } ,
            {
                timeNumber : 11 ,
                timeCategory : 'Hours' ,
            } ,
            {
                timeNumber : 60 ,
                timeCategory : 'Mins' ,
            } ,
            {
                timeNumber : 50 ,
                timeCategory : 'Sec' ,
            } ,
        ]
    } ,
    {
        img : "../assets/imgs/product-img-12.jpg" ,
        category : "Fruits & Vegetables" ,
        name : "Crushed Tomatoes" ,
        cost : '$13' ,
        costDiscount : '$18' ,
        rating : 4.5 ,
        count : [
            {
              timeNumber : 2022 ,
              timeCategory : 'Days' ,
            } ,
            {
                timeNumber : 11 ,
                timeCategory : 'Hours' ,
            } ,
            {
                timeNumber : 60 ,
                timeCategory : 'Mins' ,
            } ,
            {
                timeNumber : 50 ,
                timeCategory : 'Sec' ,
            } ,
        ]
    } ,
    {
        img : "../assets/imgs/product-img-13.jpg" ,
        category : "Fruits & Vegetables" ,
        name : "Golden Pineapple" ,
        cost : '$13' ,
        costDiscount : '$18' ,
        rating : 4.5 ,
        count : [
            {
              timeNumber : 2022 ,
              timeCategory : 'Days' ,
            } ,
            {
                timeNumber : 11 ,
                timeCategory : 'Hours' ,
            } ,
            {
                timeNumber : 60 ,
                timeCategory : 'Mins' ,
            } ,
            {
                timeNumber : 50 ,
                timeCategory : 'Sec' ,
            } ,
        ]
    } ,
]

//note section 

export const note = [
    {
        srcImg : '../assets/svgs/clock.svg' ,
        title : "10 minute grocery now" ,
        text : "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you." ,
    } ,
    {
        srcImg : '../assets/svgs/gift.svg' ,
        title : "Best Prices & Offers" ,
        text : "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers." ,
    } ,
    {
        srcImg : '../assets/svgs/package.svg' ,
        title : "Wide Assortment" ,
        text : "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories." ,
    } ,
    {
        srcImg : '../assets/svgs/refresh-cw.svg' ,
        title : "Easy Returns" ,
        text : "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy." ,
    } ,
]

//product hover 

export const productHover = `
<div class="popularProduct__hover">
<div class="popularProduct__hover--icons">
<span class="iconContactProduct viewModal">
<i class="fa-regular fa-eye"></i>
</span>
<span class="iconContactProduct">
<i class="fa-regular fa-heart"></i>
</span>
<span class="iconContactProduct">
<i class="fa-solid fa-arrow-right-arrow-left"></i>
</span>
</div>
</div>
`