try{(function ($) {

    "use strict";

    // PRE LOADER
   $(window).on('load', function () {
        setTimeout(function () {
            $('.loader').fadeOut(1000, function () {
                window.location.href = 'QuivirCutanda.html';
            });
        }, 3000); 
    });
})(jQuery);
}catch(e){
    window.alert("No Internet Connection..");
    window.alert("The page will load until the Internet connection is back");
}
