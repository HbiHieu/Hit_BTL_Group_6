import { headerString } from "../Layout/Header.js";
import { footerString } from "../Layout/Footer.js";

const header = document.getElementById('header');
const footer = document.getElementById('footer');

header.innerHTML = headerString;
footer.innerHTML = footerString;

$(document).ready(function () {
    $('.leadership-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});