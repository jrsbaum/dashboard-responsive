"use strict";

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toglebtn]");
const menuBtn = document.querySelectorAll("[data-menu-btn]");

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}

const loadMoreBtn = document.querySelector("[data-load-more]");

loadMoreBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});

function show() {
  alert("Calma lá!! Esse projeto foi apenas para treinar meu HTML e CSS. Nem tudo aqui funciona de verdade ;D.\nSe quiser ver mais projetos, da uma olhadinha no meu GitHub. É só clicar no meu nome no footer!");
}

