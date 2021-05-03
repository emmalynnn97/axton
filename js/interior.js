const options = document.querySelectorAll('.interior-option');
var currActive;
options.forEach(option=>{
    option.addEventListener('click', ()=>{
        if(option.classList.contains('active')){
            option.classList.remove('active');
        }
        else{
            option.classList.add('active');
            currActive = option;
        }
    })
})
window.addEventListener('click',()=>{
    options.forEach(option=>{
        if(option != currActive){
            option.classList.remove('active');
        }
    })
})