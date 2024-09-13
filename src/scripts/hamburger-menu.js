const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const menuItems = document.getElementById("menu-items");
const body = document.body;

// Function to open the menu with smooth animation
hamburgerMenu.addEventListener("click", () => {
  menuItems.classList.remove("translate-x-full", "hidden"); // Remove the 'hidden' and 'translate-x-full' to open
  menuItems.classList.add("translate-x-0", "block"); // Add 'translate-x-0' to slide into view

  // Disable body scroll
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.width = "100%";
});

// Function to close the menu with smooth animation
function closeMenuHandler() {
  menuItems.classList.remove("translate-x-0"); // Remove 'translate-x-0' to slide out
  menuItems.classList.add("translate-x-full"); // Add 'translate-x-full' to slide the menu out of view

  // Re-enable body scroll after the transition ends (300ms delay to match the animation duration)
  setTimeout(() => {
    body.style.overflow = "";
    body.style.position = "";
    body.style.width = "";
    menuItems.classList.add("hidden"); // Hide the menu after the animation completes
  }, 300); // Match this delay with the duration of the transition
}

// Close the menu when clicking the close button
closeMenu.addEventListener("click", closeMenuHandler);

// Optional: Prevent closing the menu when clicking inside the menu
menuItems.addEventListener("click", (event) => {
  event.stopPropagation();
});
