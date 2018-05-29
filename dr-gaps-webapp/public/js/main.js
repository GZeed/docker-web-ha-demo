
(function ($) {
    "use strict";

    const dynamic = $('#dynamic');
    const legend = $('#legend');
    const drgaps = $('#dr-gaps');

    setInterval(() => {
        $.ajax({
            url: '/data',
            dataType: 'json',
            timeout: 200,
        }).done(function (data) {
            dynamic.text(data.counter);
            legend.html('beers have been served by ' + data.waiter);
            dynamic.css('color', 'darkgreen');
            legend.css('color', 'darkgreen');
            drgaps.addClass('dr-gaps-green');
            drgaps.removeClass('dr-gaps-red');
        }).fail(function (jqXHR, err) {
            console.log(err)
            dynamic.text('broken tap!');
            legend.text('Fix this, we are thirsty!!');
            dynamic.css('color', 'red');
            legend.css('color', 'red');
            drgaps.addClass('dr-gaps-red');
            drgaps.removeClass('dr-gaps-green');
        });

    }, 1000);

})(jQuery);