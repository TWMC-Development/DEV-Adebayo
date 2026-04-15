window.onload = function () {
    const main_menu = document.querySelector('.twmc-navbar');
    const menu_btn = document.querySelector('.twmc-hamburger');
    const mobile_menu = document.querySelector('.twmc-mega-menu');

    const menu_logo = document.querySelector('.twmc-nav__logo-white');
    const menu_nav = document.querySelector('.twmc-header-nav');
    // const hero_video_imgtext = document.querySelector('#twmc-home__hero--wht-video>.twmc-container.twmc-hero-services__text');


    menu_btn.addEventListener('click', function () {
        main_menu.classList.toggle('mega-is-active');
        menu_btn.classList.toggle('mega-is-active');
        mobile_menu.classList.toggle('mega-is-active');
        menu_logo.classList.toggle('mega-is-active');
        // menu_nav.classList.toggle('mega-is-active');
        

        if (menu_logo.classList.contains('mega-is-active')) {
            menu_logo.src = "https://www.thewoodlandsmethodist.org/Content/web/twumc-logo-fullcolor.png";
            
        } else {
            menu_logo.src = "https://www.thewoodlandsmethodist.org/Content/web/twumc-logo.png";
        }

        hero_video_imgtext.classList.toggle('mega-is-active');
    })

}