const options = document.querySelectorAll('.interior-selector');
let currActive = document.querySelector('.interior-selector.interior-options');
const interiorOptions = document.querySelectorAll('.interior-option');
console.log(interiorOptions)
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