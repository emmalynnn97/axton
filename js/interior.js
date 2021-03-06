const optionsPage = document.querySelector('.interior-options-outer');
const galleryPage = document.querySelector('.interior-gallery-outer');
const options = document.querySelectorAll('.interior-selector');
let currActive = document.querySelector('.interior-selector.interior-options');
const interiorOptions = document.querySelectorAll('.interior-option');
const [optionBtn,  galleryBtn] = options;
const toggleActive = (el) => {
    if(!el.classList.contains('active')){
        el.classList.add('active');
        currActive = el;
    }
}
options.forEach(option=>{
    option.addEventListener('click', ()=>{
        toggleActive(option);
    })
})
window.addEventListener('click',()=>{
    options.forEach(option=>{
        if(option != currActive){
            option.classList.remove('active');
        }
    })
})

optionBtn.addEventListener('click', ()=>{
    optionsPage.classList.add('active');
    galleryPage.classList.remove('active');
})
galleryBtn.addEventListener('click', ()=>{
    optionsPage.classList.remove('active');
    galleryPage.classList.add('active');
})