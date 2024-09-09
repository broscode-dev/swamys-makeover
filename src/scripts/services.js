const services = [
  {
    path: "../public/assets/services/pexels-thais-sarmento-783361-2066039.jpg",
    name: "Haircut & Style",
  },
  {
    path: "../public/assets/services/pexels-rocsana99-948185.jpg",
    name: "Wedding Makeup",
  },
  {
    path: "../public/assets/services/pexels-rdne-6923376.jpg",
    name: "Hair Coloring",
  },
  {
    path: "../public/assets/services/pexels-kpaukshtite-704815.jpg",
    name: "Pedicure & Manicure",
  },
  {
    path: "../public/assets/services/pexels-cottonbro-4154191.jpg",
    name: "Facial Treatments",
  },
];

const service = document.getElementById("service");
const name = document.getElementById("name");
const totalServices = services.length;
let index = 0;

function updateCarousel() {
  service.classList.add("fade-out");
  setTimeout(() => {
    service.src = services[index].path;
    name.innerHTML = services[index].name;
    service.classList.remove("fade-out");
    service.classList.add("fade-in");
  }, 1000);
}

setInterval(() => {
  index++;
  if (index >= totalServices) {
    index = 0;
  }
  updateCarousel();
}, 3000);

//Initialize the first service
service.src = services[index].path;
name.innerHTML = services[index].name;
service.classList.remove("opacity-0");
service.classList.add("fade-in");
