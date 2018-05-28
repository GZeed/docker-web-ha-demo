
(function ($) {
    "use strict";

    const dynamic = $('#dynamic');
    setInterval(() => {
        $.ajax({
            url: '/data',
            dataType: 'json',
            timeout: 200,
        }).done(function (data) {
            console.log(data);
            dynamic.text(data.counter);
            dynamic.css('color', 'darkgreen');
        }).fail(function (jqXHR, err) {
            console.log(err)
            dynamic.text('backend died...');
            dynamic.css('color', 'red');
        });

    }, 1000);

})(jQuery);