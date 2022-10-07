

// Update text
$(document).ready ( function(){
    // Size of browser viewport.
    h = $(window).height();
    w = $(window).width();

    $("#measurement").text(w + " x " + h);

    $( window ).resize(function() {
        h = $(window).height();
        w = $(window).width();
        $("#measurement").text(w + " x " + h);
    });
});


    