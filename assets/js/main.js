//burger
function mobMenu(burgerMob,menuMob){
    const burger = document.querySelector(burgerMob)
    const menu = document.querySelector(menuMob)
    burger.addEventListener('click',function(){
        menu.classList.toggle('active');
        if(menu.classList.contains('active')){
            document.body.style.overflow="hidden";
        }else{
            document.body.style.overflow="";
        };
    });
};
mobMenu('.header-burger','.header-menu');
//burger
//scroll
window.addEventListener('scroll',() =>{
    let scroll = window.scrollY;
    let section = document.querySelector('.learning');
    let header = document.querySelector('.header');
    if(section.offsetTop - header.clientHeight <= scroll){
        header.classList.add('header-active');
    }else{
        header.classList.remove('header-active');
    };
});
//scroll
//swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoHide: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1920: {
          slidesPerView: 5,
        },
        1100: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },    
        300: {
            slidesPerView: 1,
        },
     },
});
//swiper