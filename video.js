document.addEventListener("DOMContentLoaded", function() {
    var myVideo = document.getElementById('videoPlayer');
  
    // ビデオを自動再生する
    function playVideo() {
      myVideo.play()
      .catch(error => console.error("Video play failed.", error));
    }
  
    // ビデオの自動再生を開始
    playVideo();
  
    // オプション: ビデオが終了したら再び再生を開始する
    myVideo.onended = function() {
    };
  });