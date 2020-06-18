/*function fadeInBG(obj) {
    $(obj).fadeIn(1000);
    setTimeout(blurBG(obj), 1000);
}

function blurBG(obj) {
    $(obj).addClass('blur');
}

function onLoadBG(obj) {
    fadeInBG(obj);
}*/

$(function() {
    $('#bg-img').fadeIn(1000).delay(1000);
    setTimeout(function() {
        $('#bg-img')
    }, 1000);
});