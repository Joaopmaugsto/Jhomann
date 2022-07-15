// Add Header background change

const scrollHeader = () =>{
    const header = document.getElementById('header');

    // If the scroll is greater than 50vh, add scroll-header class

    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* Swiper Products */

const swiperProducts = new Swiper(".products-container", {

    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1024: {
          spaceBetween: 72
        },
      },
});

/* Sections Active Link */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach( current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
          } else {
            sectionsClass.classList.remove('active-link');
          }
  })
}

window.addEventListener('scroll', scrollActive)


/* Show Scrollup*/ 

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
    // When scroll is higher than 350 viewport height, add show-scroll class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)


/* Switching Dark to Light Theme and vice-versa */ 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove']
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.Storage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/* Scroll Reveal Animation */

const sR = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

sR.reveal(`.home-data, .products-container, .footer-container, .footer-info`);
sR.reveal(`.home-images`, {delay: 600, origin: 'bottom'});
sR.reveal(`.new-card, .brands-image`, {interval: 100});
sR.reveal(`.collection-explore:nth-child(1)`, {origin: 'right'});
sR.reveal(`.collection-explore:nth-child(2)`, {origin: 'left'});



