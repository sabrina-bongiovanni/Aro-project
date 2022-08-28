//BURGER-BUTTON


function myFunction(x) {
  console.log("hello");
  x.classList.toggle("change");
  const hiddenMenu = document.querySelector(".hidden-menu");
  const hiddenOverlay = document.querySelector(".page-overlay");

  hiddenMenu.classList.toggle("is-hidden");
  hiddenOverlay.classList.toggle("hidden-overlay");
}

cardBackground();
offerCardImage();

//HERO SLIDESHOW

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.add("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].classList.remove("active");
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

//CARD SWIPER
var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".my-swiper-button-next",
    prevEl: ".my-swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
});

//CARD BACKGROUND - PROVA


function cardBackground() {
  for (let i = 1; i < 13; i++) {
    const roomCard = document.querySelector(`.card${[i]}`);
    roomCard.style.backgroundImage = `url('media/our-rooms/our-rooms-${[i]}.png')`;
  }
}

function offerCardImage() {
  for (let i = 1; i < 7; i++) {
    const offerCard = document.querySelector(`.card-img-${[i]}`);
    offerCard.style.backgroundImage = `url('media/offers/offer-${[i]}.png')`;
  }
}

