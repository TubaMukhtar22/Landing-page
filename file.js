const menuIcon = document.getElementById("menu-icon");
const menuToggleIcon = document.getElementById("menu-toggle-icon");
const menu = document.getElementById("menu");

let menuOpen = false;

menuIcon.addEventListener("click", () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    menu.classList.remove("opacity-0", "top-[-400px]", "z-[-1]");
    menu.classList.add("opacity-100", "top-[60px]", "z-50");
    menuToggleIcon.classList.remove("fa-bars");
    menuToggleIcon.classList.add("fa-xmark");
  } else {
    menu.classList.add("opacity-0", "top-[-400px]", "z-[-1]");
    menu.classList.remove("opacity-100", "top-[60px]", "z-50");
    menuToggleIcon.classList.add("fa-bars");
    menuToggleIcon.classList.remove("fa-xmark");
  }
});
