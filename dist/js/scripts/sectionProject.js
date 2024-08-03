const projectCards = document.getElementById("projectCards");
projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("swiper-slide", "mb-12", "p-4");
  card.innerHTML = `
        <div class="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <a href="${project.link}" target="_blank">
            <div class="w-[600px] h-[300px] flex items-center justify-center">
              <img 
                src="${project.imageUrl}" 
                alt="${project.title}" 
                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
        </div>
        <h3 class="mt-5 text-xl font-semibold text-dark dark:text-white">
          ${project.title}
        </h3>
        <p class="font-medium text-base text-secondary line-clamp-3">
          ${project.description}
        </p>
      `;
  projectCards.appendChild(card);
});
const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 35000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
