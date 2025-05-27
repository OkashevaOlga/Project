document.addEventListener('DOMContentLoaded', function () {
    const timerEl = document.getElementById('discount-timer');
    if (!timerEl) return;
    let time = 15 * 60; // 15 минут в секундах

    function updateTimer() {
        const min = String(Math.floor(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');
        timerEl.textContent = `${min}:${sec}`;
        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            time = 15 * 60; // сбросить таймер на 15 минут
            updateTimer();
        }
    }
    updateTimer();
});