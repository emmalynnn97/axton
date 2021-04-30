const menuItems = document.querySelectorAll('.menu-item');
const logo = document.querySelector('.custom-logo');
const shrinkOn = 100;
function getDistY(){
    return document.documentElement.scrollTop || window.pageYOffset;
}
function shrinkNav(items){
    items.forEach(item=>item.style.height="72px");
    logo.style.width='125px';
}
function growNav(items){
    items.forEach(item=>item.style.height="110px");
    logo.style.width='175px';
}
function handleScroll(){
    getDistY() > shrinkOn ? shrinkNav(menuItems) : growNav(menuItems)
}
document.addEventListener("scroll", handleScroll)