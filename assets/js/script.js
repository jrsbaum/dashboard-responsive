'use strict';

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toglebtn]");

navToggleBtn.addEventListener("click", function () {
    header.classList.toggle("active");
});

const menuBtn = document.querySelectorAll("[data-menu-btn]");

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}
