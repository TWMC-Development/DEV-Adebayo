
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