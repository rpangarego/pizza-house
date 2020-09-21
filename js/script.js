// SimpleLightbox
var $gallery = new SimpleLightbox(".gallery a", {});
// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]');

// Open-Close Menu
document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelector(".nav-list");
  const openMenu = document.querySelector(".open-menu");
  const closeMenu = document.querySelector(".close-menu");

  openMenu.addEventListener("click", () => {
    navList.classList.add("active");
    openMenu.style.display = "none";
  });

  closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
    openMenu.style.display = "block";
  });
});
