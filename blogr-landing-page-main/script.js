console.log("Hey!");

const headerCont = document.querySelector(".header--container");
const nav = document.querySelector(".mobile-nav");
const openIcon = document.querySelector(".mobile-nav-img");
const closeIcon = document.querySelector(".mobile-nav-img-close");
const mobileModal = document.querySelector(".mobile-nav-modal");
const selects = document.querySelector(".container--selects");
const accessBtns = document.querySelector(".access--btns");

function showMobileNav() {
  nav.classList.add("active");
  openIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  headerCont.classList.add("hidden");
  mobileModal.classList.remove("hidden");
  mobileModal.appendChild(selects);
  mobileModal.appendChild(accessBtns);
  selects.classList.add("active");
  accessBtns.classList.add("active");
}

function closeMobileNav() {
  openIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  headerCont.classList.remove("hidden");
  mobileModal.classList.add("hidden");
  mobileModal.appendChild(selects);
  mobileModal.appendChild(accessBtns);
  selects.classList.remove("active");
  accessBtns.classList.remove("active");
}

nav.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");

    closeMobileNav();
  } else {
    nav.classList.add("active");

    showMobileNav();
  }
});
