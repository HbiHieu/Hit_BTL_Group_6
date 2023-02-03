import { HeaderString } from "../Layout/Header.js";
import { FooterString } from "../Layout/Footer.js";

const header = document.getElementById('header');
const footer = document.getElementById('footer');

header.innerHTML = HeaderString;
footer.innerHTML = FooterString;

// const priceRange = document.getElementById('price-range');
// noUiSlider.create(priceRange, {
//     range: {
//         'min': 0,
//         'max': 300
//     }
// })