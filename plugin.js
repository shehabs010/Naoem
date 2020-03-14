$(document).ready(function() {

    $('.hetta').on('click', function() {
        $('.side-bar').toggleClass('is-open');
        //  $('.main-wrapper').toggleClass('active');
    });

    $('html').on('click', function(event) {
        if (!$(event.target).hasClass('.hetta')) {
            $('.side-bar').removeClass('is-open');
            //$('.main-wrappe').removeClass('active');
        }
    });

});