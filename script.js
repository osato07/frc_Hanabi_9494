document.addEventListener('DOMContentLoaded', function() {
    const toggleTarget = document.querySelector('.toggle-target');
    const content = document.querySelector('.aboutMenu');

    toggleTarget.addEventListener('click', function(e) {
        e.preventDefault(); // リンクのデフォルト動作を防ぐ
        content.classList.toggle('visible');
        if (content.classList.contains('visible')) {
            content.style.display = 'block';
            setTimeout(() => content.style.opacity = 1, 10); // 少し遅らせて透明度を変更
        } else {
            content.style.opacity = 0;
            setTimeout(() => content.style.display = 'none', 500); // 透明度の変化に合わせて非表示に
        }
    });
});