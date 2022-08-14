'use strict';

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toglebtn]");

navToggleBtn.addEventListener("click", function () {
    header.classList.toggle("active");
});
