var $ = function (qs) {
  return document.querySelector(qs);
};

var BODY_MAX_WIDTH = 900;
var ASPECT_RATIO = 1.67;

var resizeVideo = function () {
  var videoHeight = 539;
  if (window.innerWidth < BODY_MAX_WIDTH) {
    videoHeight = window.innerWidth / ASPECT_RATIO;
  }
  $('#poster').style.height = videoHeight + 'px';
  if ($('#video_section iframe')) {
    $('#video_section iframe').style.height = videoHeight + 'px';
  }
};

var resizeSoundCloud = function () {
  var soundcloud = $('#music_section iframe');
  var ua = navigator.userAgent;
  if (/iPhone/.test(ua)) {
    soundcloud.width = 320;
  }
  else if (/iPad/.test(ua)) {
    soundcloud.width = 340;
  }
};

var insertVideo = function (posterImage) {
  posterImage.classList.add('fade-out');
  setTimeout(function () {
    var youtubeVideo = "<iframe src=\"https://www.youtube.com/embed/_LsNFXnxN5Y?autoplay=1\" scrolling=\"no\" frameborder=\"0\" allowfullscreen></iframe>";
    $('#poster').innerHTML += youtubeVideo;
    resizeVideo();
    setTimeout(function () {
      $('#video_section iframe').classList.add('fade-in');
    }, 500);
  }, 300);
}

document.addEventListener('DOMContentLoaded', function () {
  
  resizeVideo();
  resizeSoundCloud();

  var ua = navigator.userAgent;
  var posterImage = $('#video_poster_image');
  if (/iPhone/.test(ua) || /iPad/.test(ua)) {
    insertVideo(posterImage);
  }
  else {
    posterImage.addEventListener('click', function () {
      insertVideo(posterImage);
    });
  }
});

window.addEventListener('resize', function () {
  resizeVideo();
});
