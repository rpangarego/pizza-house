//Selector
const preloader = document.getElementsByClassName("preloader")[0];
const navAnchor = document.querySelectorAll(".nav-item a");
const navList = document.querySelector(".nav-list");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

// Preloader Time-out
setTimeout(() => {
  preloader.style.display = "none";
}, 5000);

// Open-Close Menu
document.addEventListener("DOMContentLoaded", () => {
  preloader.style.display = "none";

  openMenu.addEventListener("click", () => {
    navList.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

// Nav anchor
navAnchor.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
      navList.classList.remove("active");
    }
  });
});

// SimpleLightbox
var $gallery = new SimpleLightbox(".gallery a", {});
// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]');
