window.onload = function () {
    // mega nav
    const main_menu = document.querySelector('.twmc-header');
    const menu_btn = document.querySelector('.twmc-hamburger');
    const mobile_menu = document.querySelector('.twmc-mega-nav');

    const menu_logo = document.querySelector('.twmc-nav__logo2');
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
//  $('.panel').on('show.bs.collapse', function (e) {debugger;
//     $(this).find('.twmc-accordion-plus-minus').removeClass('fas fa-plus').addClass('fas fa-minus');
//  });
//  $('.panel').on('hide.bs.collapse', function (e) {debugger;
//     $(this).find('.twmc-accordion-plus-minus').removeClass('fas fa-minus').addClass('fas fa-plus');
//  });


// $(document).ready(function(){
//     // When any accordion panel is shown
//     $('#accordion-staff').on('shown.bs.collapse', function (e) {
//         // Target the specific panel that was opened and change its icon to 'minus'
//         var panelHeading = $(e.target).prev('.panel-heading');
//         panelHeading.find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
//     });

//     // When any accordion panel is hidden
//     $('#accordion-staff').on('hidden.bs.collapse', function (e) {
//         // Target the specific panel that was closed and change its icon to 'plus'
//         var panelHeading = $(e.target).prev('.panel-heading');
//         panelHeading.find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
//     });
// });

$(document).ready(function(){
  // When any accordion panel is shown
  $('.panel.panel-default').on('shown.bs.collapse', function (e) {
      // Target the specific panel that was opened and change its icon to 'minus'
      var panelHeading = $(e.target).prev('.panel-heading');
      panelHeading.find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
  });

  // When any accordion panel is hidden
  $('.panel.panel-default').on('hidden.bs.collapse', function (e) {
      // Target the specific panel that was closed and change its icon to 'plus'
      var panelHeading = $(e.target).prev('.panel-heading');
      panelHeading.find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
  });
});






// map
/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap() {
    const map = new google.maps.Map(document.getElementById("twmc-im-new__map"), {
      zoom: 11,
      center: { lat: 30.221346737839227, lng: -95.5204314236138 },
    });
    // Set LatLng and title text for the markers. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const churches = [
      [{ lat: 30.167720471761445, lng: -95.4682576446734 }, "The Woodlands Methodist Church"],
      [{ lat: 30.28995341492246, lng: -95.57744445974375 }, "The Church at Woodforest"],
      [{ lat: 30.3276154, lng: -95.6611099 }, "The Church at Montgomery"],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Create the markers.
    churches.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }

  window.initMap = initMap;
  
