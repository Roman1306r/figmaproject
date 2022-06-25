let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}
header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}





let slider = document.querySelector('.swiper-container')
let mySlider;
function mobileSlider() {
    if(window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
       mySlider =  new Swiper(slider, {
        slidesPerView: 1,     //Количество слайдов для показа(можно выводить 1.4, 1.1, 'auto')
        watchOverflow: true,     //Слайдер отключается если слайдов меньше чем нужно
        spaceBetween: 50,    //Отступ между слайдами
        loop: false,    //Бесконечный слайдер
        slideClass: 'featured__item',
        navigation: {                            //Стрелки
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    })
        slider.dataset.mobile = 'true'
    }
    if(window.innerWidth > 600) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-initialized')) {
            mySlider.destroy()
        }
     }
}

mobileSlider()

window.addEventListener('resize', ()=> {
    mobileSlider()  
})