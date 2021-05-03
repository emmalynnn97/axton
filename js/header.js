const menuItems = document.querySelectorAll('.menu-item');
const logo = document.querySelector('.custom-logo');
const shrinkOn = 100;
const getDistY = () => {
    return document.documentElement.scrollTop || window.pageYOffset;
}
const shrinkNav = items => {
    items.forEach(item=>item.style.height="72px");
    logo.style.width='125px';
}
const growNav = items => {
    items.forEach(item=>item.style.height="110px");
    logo.style.width='175px';
}
const handleScroll = () => {
    getDistY() > shrinkOn ? shrinkNav(menuItems) : growNav(menuItems);
}
document.addEventListener("scroll", handleScroll);