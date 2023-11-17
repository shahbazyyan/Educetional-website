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



  const navMenu = document.querySelector(".nav_menu");
  const hamburgerMenu = document.querySelector("#open-menu-btn");
  const closeMenu = document.querySelector("#close-menu-btn");

  hamburgerMenu.addEventListener("click", () => {
      navMenu.style.display = "flex";
      closeMenu.style.display = "inline-block";
      hamburgerMenu.style.display = "none";
  });

  closeMenu.addEventListener("click", () => {
      navMenu.style.display = "none";
      closeMenu.style.display = "none";
      hamburgerMenu.style.display = "inline-block";
  });