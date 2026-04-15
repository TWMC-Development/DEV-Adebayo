window.onload = function () {
    // mega nav
    const main_menu = document.querySelector('.twmc-header--white-bg');
    const menu_btn = document.querySelector('.twmc-hamburger--dark');
    const mobile_menu = document.querySelector('.twmc-mega-nav');

    const menu_logo = document.querySelector('.twmc-nav__logo2');
    const menu_nav = document.querySelector('.twmc-header-nav');

    menu_btn.addEventListener('click', function () {
        main_menu.classList.toggle('mega-is-active');
        menu_btn.classList.toggle('mega-is-active');
        mobile_menu.classList.toggle('mega-is-active');
        menu_logo.classList.toggle('mega-is-active');
        menu_nav.classList.toggle('mega-is-active');

        if (menu_logo.classList.contains('mega-is-active')) {
            menu_logo.src = "https://www.thewoodlandsmethodist.org/Content/web/twumc-logo-fullcolor.png";
            
        } else {
            menu_logo.src = "https://www.thewoodlandsmethodist.org/Content/web/twumc-logo.png";
        }
    })

}

 // back to top button
 const backtotop_btn = $('#backtotop-button');

 $(window).scroll(function() {
     if($(window).scrollTop() > 200) {
        backtotop_btn.addClass('btn-show');
     } else {
        backtotop_btn.removeClass('btn-show');
     }
 });

 backtotop_btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
 });


// Accordion Panel
$('.panel').on('show.bs.collapse', function (e) {debugger;
    $(this).find('.twmc-accordion-plus-minus').removeClass('fas fa-plus').addClass('fas fa-minus');
 });
 $('.panel').on('hide.bs.collapse', function (e) {debugger;
    $(this).find('.twmc-accordion-plus-minus').removeClass('fas fa-minus').addClass('fas fa-plus');
 });