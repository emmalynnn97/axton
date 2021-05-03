const options = document.querySelectorAll('.interior-option');
let currActive = document.querySelector('.interior-option.interior-options');
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