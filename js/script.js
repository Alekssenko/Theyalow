// $(document).ready(function () {
$('.player').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows:true,
    appendArrows: $('.player'),
    prevArrow: '<div class="prev"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="next"><i class="fa fa-chevron-right"></div>'

});
var button = document.getElementById('video_button');
var video = document.getElementById('video-player');
// var videoPlayer = document.getElementById('video');

function playerGo() {
    if(video.hasAttribute('controls')){
        video.removeAttribute('controls');
        button.style.display = 'block';
    }else {
        video.setAttribute('controls', '');
        button.style.display ='none';
    }
}
button.onclick = playerGo;
// video.onclick = function(){
//     video.removeAttribute('controls');
//     button.style.display ='block';
// };
