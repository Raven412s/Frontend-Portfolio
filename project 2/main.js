// navbar mein change

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
    ('scrolled', window.scrollY > 10);
})

// FAQs click to open

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // Changes the icon of the faq-icon
    const icon = faq.querySelector('.faq-icon i');
    if (icon.className === 'ri-add-line') {
      icon.className = 'ri-subtract-line';
    } else {
      icon.className = 'ri-add-line';
    }
  })
});

// show/hide nav menu

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener("click", closeNav)

// preloader
// ====================== experiment ===========================

$(window).load(function () {
  // Preloader
  $('.preloader').fadeOut();
  $('.progress-bar').delay(3500).fadeOut('slower');
});