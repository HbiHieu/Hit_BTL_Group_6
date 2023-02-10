import { HeaderMinString } from "../Layout/HeaderMin.js";
import { footerString } from "../Layout/Footer.js";

const headerMin = document.getElementById('header');
const footer = document.getElementById('footer');

const inputPassword = document.getElementById('input-password');
const togglePassword = document.getElementById('toggle-password');

if (togglePassword) {
    togglePassword.onclick = function () {
        const typeInput = (inputPassword.getAttribute('type') === 'password' ? 'text' : 'password');
        inputPassword.setAttribute('type', typeInput);
        this.classList.toggle('fa-eye');
    }
}

headerMin.innerHTML = HeaderMinString;
footer.innerHTML = footerString;