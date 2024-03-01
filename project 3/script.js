// .green folows cursor
// &
// .green-blur follow cursor

let crsr = document.querySelector(".green")
let crsrB = document.querySelector(".green-blur")
document.addEventListener("mousemove", function (dets) {
  crsr.style.top = dets.y + "px"
  crsr.style.left = dets.x + "px"
  crsrB.style.top = dets.y - 125 + "px"
  crsrB.style.left = dets.x - 125 + "px"
})

// changes in .green

// for #nav h4
let nav_h4 = document.querySelectorAll("#nav h4")
nav_h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.classList.add("green-for-h4");
  });

  elem.addEventListener("mouseleave", function () {
    crsr.classList.remove("green-for-h4");
  });
})


// for .down
let downDiv = document.querySelector(".down");
downDiv.addEventListener("mouseover", () => {
  crsr.classList.add("green-for-down");
});

downDiv.addEventListener("mouseout",  () => {
  crsr.classList.remove("green-for-down");
});

// for .btn
let button = document.querySelectorAll(".btn");
button.forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    crsr.classList.add("green-for-btn");
  })
  elem.addEventListener("mouseout", function () {
    crsr.classList.remove("green-for-btn");
  })
})

// for .infiniteScroller h1
let Ih1 = document.querySelectorAll(".infiniteScroller h1");
Ih1.forEach(function (elem) {
  elem.addEventListener("mouseover",function(){
    crsr.classList.add("green-for-Ih1");
  })
  elem.addEventListener("mouseout",function(){
    crsr.classList.remove("green-for-Ih1");
    })
})

// color change in nav 

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "6rem",
  duration: 0.7,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2
  }
})

// color change in main

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -85%",
    scrub: 2
  }
})

// scrollTrigger on colon and quotes

gsap.to("#colon1", {
  left: "15%",
  top: "-30%",
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "center center",
    end: "bottom bottom",
    scrub: 2
  }
})

gsap.to("#colon2", {
  right: "15%",
  bottom: "-30%",
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "center center",
    end: "bottom bottom",
    scrub: 2
  }
})

//pause auto scrolling when hover
let scrollers = document.querySelectorAll('.infiniteScroller');

scrollers.forEach((scroller) => {
    let h1Elements = scroller.querySelectorAll('h1');

    h1Elements.forEach((h1) => {
        h1.addEventListener('mouseover', () => {
            scroller.style.animationPlayState = 'paused'; // Pause animation on hover
        });

        h1.addEventListener('mouseout', () => {
            scroller.style.animationPlayState = 'running'; // Resume animation on mouseout
        });
    });
});








// swiper.js script

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 60,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});