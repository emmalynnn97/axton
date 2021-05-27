const configureProductSlider = () => {
    if(window.innerWidth > 800){
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 60,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
    if(window.innerWidth < 800){
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 25,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
    if(window.innerWidth < 600){
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
}
const setEventListeners = () => {
  const resizeDelay = 250;
  window.addEventListener('load', configureProductSlider);
    window.addEventListener('resize', ()=>{
        setTimeout(configureProductSlider, resizeDelay);
    })
}
setEventListeners()
