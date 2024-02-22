document.getElementById('videoPlayer').addEventListener('ended', function() {
    var header = document.getElementById('nav');
    header.style.display = 'flex'; // ヘッダーを表示状態に変更
    setTimeout(function() {
      header.style.opacity = 1; // 透明度を徐々に1に変化させる
    }, 10); // display: blockにした直後にopacityを変更すると、変化が見られないことがあるため、少し遅延させる
  }, false);