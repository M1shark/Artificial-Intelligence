const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.header-menu')
burger.addEventListener('click',function(){
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        document.body.style.overflow="hidden";
    }else{
        document.body.style.overflow="";
    };
});
