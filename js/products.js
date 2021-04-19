function adjustProductSlider(){
    if(window.innerWidth > 800){
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 75,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
    if(window.innerWidth < 800){
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
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
function addEventListeners(){
    window.addEventListener('load',adjustProductSlider)
    window.addEventListener('resize', ()=>{
        setTimeout(adjustProductSlider,1000)
    })
}
addEventListeners()
