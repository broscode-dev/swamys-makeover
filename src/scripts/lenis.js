const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

const worksWrapper = document.querySelector(".works-wrapper");
const box_items = gsap.utils.toArray(".horizontal_item");

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: worksWrapper,
    scrub: 1,
    snap: 1 / (box_items.length - 1),
    start: "top center",
    end: "+=" + worksWrapper.offsetWidth,
  },
});
