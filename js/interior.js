const options = document.querySelectorAll('.interior-option');
var currActive;
const toggleActive = (el) => {
    if(el.classList.contains('active')){
        el.classList.remove('active');
    }
    else{
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