const fullMenu = document.querySelector("nav");
const firstMenu = document.querySelector(".first_menu");
const secondMenu = document.querySelector(".second_menu");
const menuHeader = document.querySelector(".nav_header");
const genderMenu = document.querySelector(".nav_gender");
const productsMenu = document.querySelector(".nav_products");
const menuTitle = document.querySelector(".nav_gender_output");

const urlWomen = document.querySelector(".url_women");
const urlMen = document.querySelector(".url_men");
const urlUnisex = document.querySelector(".url_unisex");

const menuIcon = document.querySelector(".menu_icon");
const closeMenu = document.querySelector(".close_menu");
const returnMenu = document.querySelector(".return_menu");

// Toggle Menu
menuIcon.addEventListener("click", () => {
  firstMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  firstMenu.style.display = "none";
});

returnMenu.addEventListener("click", () => {
  firstMenu.style.display = "block";
  secondMenu.style.display = "none";
});

// Adding proper menu title
urlWomen.addEventListener("click", () => {
  menuTitle.innerHTML = `Women`;
  secondMenu.style.display = "block";
  firstMenu.style.display = "none";
});

urlMen.addEventListener("click", () => {
  menuTitle.innerHTML = `Men`;
  secondMenu.style.display = "block";
  firstMenu.style.display = "none";
});

urlUnisex.addEventListener("click", () => {
  menuTitle.innerHTML = `Unisex`;
  secondMenu.style.display = "block";
  firstMenu.style.display = "none";
});

// Add to cart pop-up

const atc = document.querySelector(".atc");
const atcPopup = document.querySelector(".atc_popup");

atc.addEventListener("click", () => {
  atcPopup.style.display = "block";
  setTimeout(() => {
    atcPopup.style.display = "none";
  }, "3500");
});
