/*global window, document, $, google, mapCenter, FastClick */

/** Remove tap delay on touch devices */
FastClick.attach(document.body);

/** On document ready */
$(document).ready(function() {

    /** Counter */
    $('.counter').each(function() {
        $('.number', this).wrapInner('<span></span>');
        var a = $('.number span', this);
        $(this).countdown('2016/08/20 12:00:00', function(event) {
            a.eq(0).html(event.strftime('%D'));
            a.eq(1).html(event.strftime('%H'));
            a.eq(2).html(event.strftime('%M'));
            a.eq(3).html(event.strftime('%S'));
        });
    });

    /*** Selectric  ***/
    $('.selectric').selectric({
        disableOnMobile: false,
    });

});
