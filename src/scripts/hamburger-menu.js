const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const menuItems = document.getElementById("menu-items");
const wrapper = document.getElementById("wrapper");
const body = document.body;

hamburgerMenu.addEventListener("click", () => {
  menuItems.classList.toggle("translate-y-0");
  menuItems.classList.toggle("-translate-y-full");
  body.classList.add("overflow-hidden");
});

function toggle() {
  menuItems.classList.add("-translate-y-full");
  menuItems.classList.remove("translate-y-0");
  body.classList.remove("overflow-hidden");
}

closeMenu.addEventListener("click", toggle);

menuItems.addEventListener("click", toggle);
