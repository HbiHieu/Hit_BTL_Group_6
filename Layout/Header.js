export const headerString = 
`<div id="header__top">
<div id="header__top--text">
  Super Value Deals - Save more with coupons
</div>
<div id="header__top--language">
  <img src="../assets/svgs/languageHeader.svg" alt="" />
  <select name="" id="">
    <option value="">English</option>
    <option value="">France</option>
    <option value="">Germany</option>
  </select>
</div>
</div>
<div id="header__content">
<a href="/Pages/"><img src="../assets/svgs/freshcart-logo.svg" alt="" /></a>
<div id="header__content--contact">
  <div id="header__content--input">
    <input type="text" placeholder="Search for products" />
    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
  </div>
  <div id="header__content--button">
    <i class="fa-solid fa-location-dot"></i>
    Location
  </div>
</div>
<div id="header__content--icons">
  <div id="header__content--heart">
    <i class="fa-regular fa-heart"></i>
    <span></span>
  </div>
  <div id="header__content--user">
    <i class="fa-regular fa-user"></i>
  </div>
  <div id="header__content--cart" style="height: 18.4px">
    <img
      src="../assets/svgs/cartSvg.svg"
      alt=""
      onclick="handleOpenCart()"
    />
    <span></span>
  </div>
</div>
</div>
<div id="header__nav">
<div id="header__nav--btn">
  <button>All Department</button>
</div>
<div id="header__nav--items">
  <a href="/Pages/" class="header__nav--item">Home</a>
  <a href="/Pages/ShopPage.html" class="header__nav--item">Shop</a>
  <span class="header__nav--item navStores">Stores
    <span style="font-size: 12px">
      <i class="fa-solid fa-chevron-down"></i>
    </span>
    <ul class="header__nav--item--subNavStore">
      <li>
        <a href="/Pages/StorePage.html">Store List</a>
      </li>
      <li>
        <a href="/Pages/store-gird.html">Store Grid</a>
      </li>
      <li>
        <a href="/Pages/store-single.html">Store Single</a>
      </li>
    </ul>
  </span>
  </span>
  <a href="#" class="header__nav--item">Mega menu</a>
  <span class="header__nav--item navPages"
    >Pages
    <span style="font-size: 12px">
      <i class="fa-solid fa-chevron-down"></i>
    </span>
    <ul class="header__nav--item--subNavPage">
      <li>
        <a href="/Pages/blogPage.html">Blog</a>
      </li>
      <li>
        <a href="/Pages/blogSingle.html">Blog Single</a>
      </li>
      <li>
        <a href="/Pages/AboutUs.html">About us</a>
      </li>
      <li>
        <a href="/Pages/Error404.html">404 Error</a>
      </li>
      <li>
        <a href="/Pages/Contact.html">Contact</a>
      </li>
    </ul>
  </span>
  <span class="header__nav--item navAccount"
    >Account
    <span style="font-size: 12px">
      <i class="fa-solid fa-chevron-down"></i>
    </span>
    <ul class="header__nav--item--subNavAccount">
      <li>
        <a href="/Pages/SignIn.html">Sign In</a>
      </li>
      <li>
        <a href="/Pages/SignUp.html">Sign Up</a>
      </li>
      <li>
        <a href="/Pages/ForgotPassword.html">Forgot password</a>
      </li>
      <li>
        <a href="/Pages/">My Account</a>
      </li>
    </ul>
  </span>
  <a href="" class="header__nav--item">Docs</a>
</div>
</div>
<div id="header__end"></div>
`