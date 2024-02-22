document.addEventListener('DOMContentLoaded', function() {
    // 画像ボタンのクリックイベント
    document.querySelectorAll('.image-button').forEach(function(button) {
      button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var popup = document.getElementById(targetId);
        document.getElementById('popup-overlay').style.display = 'block';
        popup.style.display = 'block';
      });
    });
  
    // ポップアップの背景をクリックしたときにポップアップを閉じる
    document.getElementById('popup-overlay').addEventListener('click', function() {
      document.querySelectorAll('.popup-content').forEach(function(popup) {
        popup.style.display = 'none';
      });
      this.style.display = 'none';
    });
  });
  