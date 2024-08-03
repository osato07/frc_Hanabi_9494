
let intervalId = null;
const moveSpeed = 10; // 移動スピードの調整

function startMoving(e) {
    const img = document.getElementById('image_move');
    const rect = e.target.getBoundingClientRect();

    intervalId = setInterval(() => {
    const imgRect = img.getBoundingClientRect();
    let deltaX = e.clientX - imgRect.left - img.width / 2;
    let deltaY = e.clientY - imgRect.top - img.height / 2;

    // 角度を計算
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
    img.style.transform = `rotate(${angle}deg)`;

    // 画像がマウスの位置に非常に近づいたら動きを止める
    if (Math.abs(deltaX) < 50 && Math.abs(deltaY) < 50) {
        stopMoving();
    } else {
        img.style.left = (img.offsetLeft + deltaX / moveSpeed) + 'px';
        img.style.top = (img.offsetTop + deltaY / moveSpeed) + 'px';
    }
    }, 20); // 20ミリ秒ごとに更新
}

function stopMoving() {
    clearInterval(intervalId);
}

document.addEventListener('DOMContentLoaded', function() {
    fadeOut(document.getElementById('overlay'), 1.0);
})

function fadeOut(element, duration) {
    element.style.opacity = 0;  // 透明にする
}


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


function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


function copyEmail() {
    const email = "frc.hanabi@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.getElementById("notification");
        notification.style.opacity = "1";
        notification.classList.add("show");
        setTimeout(() => {
            notification.style.opacity = "0";
            notification.classList.remove("show");
        }, 1800); // 3秒後に通知を非表示にする
    }, () => {
        alert('クリップボードにコピーできませんでした。');
    });
}
