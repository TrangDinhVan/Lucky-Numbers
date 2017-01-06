jQuery(function($){
    var r = $('.results');

    $('.trigger-show-results').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if( r.is(':visible') ){
            r.slideUp();
        }else{
            r.slideDown();
        }
    });

    $('.main-part, .trigger-close').on('click', function(event) {
        event.preventDefault();
        r.slideUp();
    });

});