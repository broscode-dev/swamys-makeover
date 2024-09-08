const observeScroll = (classToWatch = "") => {
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(classToWatch);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add("animate");
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
};

observeScroll(".animate-fade-bottom-up-on-scroll");
observeScroll(".animate-fade-from-left-on-scroll");
