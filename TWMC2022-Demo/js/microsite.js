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

//  FAQ Accordion
 $('.panel').on('show.bs.collapse', function (e) {debugger;
   $(this).find('.ms-accordion-plus-minus').removeClass('fas fa-plus').addClass('fas fa-minus');
});
$('.panel').on('hide.bs.collapse', function (e) {debugger;
   $(this).find('.ms-accordion-plus-minus').removeClass('fas fa-minus').addClass('fas fa-plus');
});