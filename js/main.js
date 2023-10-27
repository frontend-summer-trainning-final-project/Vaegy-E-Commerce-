
/*================== handle scrol top icon behavior js =====================*/ 
document.addEventListener("DOMContentLoaded", function () {
  const scrollUpButton = document.getElementById("scrollUp");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      scrollUpButton.classList.add("visible");
    } else {
      scrollUpButton.classList.remove("visible");
    }
  });
});

// search icon in navbar
const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('search-container');

searchIcon.addEventListener('click', () => {
    if (searchContainer.style.display === 'block') {
        searchContainer.style.display = 'none';
    } else {
        searchContainer.style.display = 'block';
    }
});


//main slider swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000, // Set the delay in milliseconds (e.g., 3000ms = 3 seconds)
    },
    effect: 'fade', 
    speed: 700, 
  });


/*================== handle scrol top icon behavior js =====================*/ 
document.addEventListener("DOMContentLoaded", function () {
  const scrollUpButton = document.getElementById("scrollUp");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      scrollUpButton.classList.add("visible");
    } else {
      scrollUpButton.classList.remove("visible");
    }
  });
});
  




