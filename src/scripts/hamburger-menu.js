const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const menuItems = document.getElementById("menu-items");
const wrapper = document.getElementById("wrapper");
const body = document.body;

hamburgerMenu.addEventListener("click", () => {
  menuItems.classList.toggle("translate-x-0");
  menuItems.classList.toggle("translate-x-full");
  body.classList.add("overflow-hidden");
  menuItems.classList.remove("hidden");
  menuItems.classList.add("block");
});

function toggle() {
  menuItems.classList.add("translate-x-full");
  menuItems.classList.remove("translate-x-0");
  body.classList.remove("overflow-hidden");
  menuItems.classList.remove("block");
  menuItems.classList.add("hidden");
}

closeMenu.addEventListener("click", toggle);

menuItems.addEventListener("click", toggle);
