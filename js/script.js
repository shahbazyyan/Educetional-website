// navbar scroll

window.addEventListener("scroll", () => {
 document.querySelector("nav").classList
 .toggle("scrollWindow", window.scrollY > 0);
});

//faqs toggle plus-minus
const faqs = document.querySelectorAll(".faq");

faqs.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
        const icon = item.querySelector(".faq_icon i");
        
        if(icon.className === "uil uil-plus") {
          icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        };
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
  });