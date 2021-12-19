console.log("hello there!");

const nav = document.querySelector(".nav--mobile");
const mobileMenu = document.querySelector(".mobile--nav");
const heading = document.querySelector(".main-heading");
const arrow = document.querySelector(".arrow");

function mobileNav(e) {
  mobileMenu.classList.toggle("hidden");
  heading.classList.toggle("hidden");
  arrow.classList.toggle("hidden");
}

nav.addEventListener("click", mobileNav);
