$(function () {
    $('img[usemap]').rwdImageMaps();
    $('.maparea').maphilight({
        fill: true,
        fillColor: '181716',
        fillOpacity: 0.1,
        stroke: true,
        strokeColor: '9b969c',
        strokeOpacity: 1,
        strokeWidth: 8,
        fade: false
    });
});