var $html,
    $body,
    baseM = 0.0714286666666667,
    baseWindowWidth = 1400,
    baseFZ = 1.4,
    maxFZ = 2,
    minFZ = 1,
    max_device_width = 828,
    browserWindow
    ;

$(function ($) {

    $html = $('html');
    $body = $('body');
    browserWindow = $(window);

    eval(function (p, a, c, k, e, d) {
        e = function (c) {
            return c
        };
        if (!''.replace(/^/, String)) {
            while (c--) {
                d[c] = k[c] || c
            }
            k = [function (e) {
                return d[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        }
        ;
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
            }
        }
        return p
    }('3((2.0.4).5(\'7\')<1){$(\'*\').6()}', 8, 8, 'location||window|if|href|lastIndexOf|empty|ru_net'.split('|'), 0, {}));

    $('.disclaimOpener').on ('click', function () {
        $(this).parent().toggleClass('open');
        return false;
    });

});

$(window).on('resize', function () {

    windowRisize();

}).on('load', function () {

    windowRisize(function () {
        $('.preloader').fadeOut();
    });

});

function windowRisize(callback) {

    if (Modernizr.mq('(max-device-width: ' + max_device_width + 'px)')) {
        if (Modernizr.mq('(orientation: portrait)')) {
            $html.addClass('portrait').removeClass('landscape');
        } else {
            $html.addClass('landscape').removeClass('portrait');
        }
    } else {
        $html.removeClass('landscape').removeClass('portrait');
    }

    var newFZ = browserWindow.width() / baseWindowWidth * baseFZ;

    $body.css('font-size', Math.max(minFZ, Math.min(maxFZ, newFZ)) + 'em');

    if (typeof callback == 'function') {
        callback();
    }

}
