/*global window, document, $, google, mapCenter, FastClick */

/** Remove tap delay on touch devices */
FastClick.attach(document.body);

/** Magnific Popup Settings */
$.extend(true, $.magnificPopup.defaults, {
    closeMarkup: '<span title="%title%" class="mfp-close">x</span>',
    gallery: {
        arrowMarkup: '<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>'
    },
    settings: {
        cache: false
    },
    mainClass: 'mfp-slide-in',
    removalDelay: 600,
    midClick: true,
    autoFocusLast: false,
    preload: false,
    fixedContentPos: true,
    fixedBgPos: true
});


/** On document ready */
$(document).ready(function() {

    /*** Selectric  ***/
    $('.selectric').selectric({
        disableOnMobile: false,
    });

});
