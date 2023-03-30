const setHeight = function() {
    let height = window.visualViewport.height;
    document.documentElement.style.setProperty('--vh', `${height}px`);
}
setHeight();
window.visualViewport.addEventListener('resize', setHeight);

const burger = document.querySelector('.menu-icon');
const popup = document.querySelector('.popup');

burger.addEventListener('click', () => {
    if (popup.style.display !== 'flex') {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    else {
        popup.style.display = 'none';
        document.body.style.overflow = 'visible';
    }
})