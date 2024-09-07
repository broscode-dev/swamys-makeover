document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("animate");
        } else {
          // Remove the animation class if it’s out of view
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.1, // Adjust based on when you want the animation to trigger
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
