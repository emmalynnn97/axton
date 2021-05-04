const options = document.querySelectorAll('.interior-selector');
let currActive = document.querySelector('.interior-selector.interior-options');
const interiorOptions = document.querySelectorAll('.interior-option');
const [optionBtn, specBtn, galleryBtn] = options;
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
    // Change to options on click
})
specBtn.addEventListener('click', ()=>{
    // Change to specifications on click
})
galleryBtn.addEventListener('click', ()=>{
    // Change to gallery on click
})