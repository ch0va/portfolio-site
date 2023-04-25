const BURGER_OPENED_CLASSNAME = 'header-mobile_open';
const BURGER_BTN_OPENED_CLASSNAME ='header__button-area_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const body = document.querySelector("body");

const burgerBody = document.querySelector(".header__mobile");
const burgerButton = document.querySelector(".header__button-area");
const burgerContainer = document.querySelector(".header__container");
const burgerLinks = document.querySelectorAll(".header__link-list a");

burgerButton.addEventListener("click", toggleBurger);

burgerBody.addEventListener("click", (event) => {
    const isClickOutsideContainer = !event
    .composedPath()
    .includes(burgerContainer)
    if (isClickOutsideContainer) {
        toggleBurger();
    }
});

burgerLinks.forEach(link => {
    link.onclick = function() {
        toggleBurger();
    }
});

function toggleBurger() {
    burgerBody.classList.toggle(BURGER_OPENED_CLASSNAME);
    body.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerButton.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
};
