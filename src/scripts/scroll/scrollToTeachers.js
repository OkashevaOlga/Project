// Кнопка "Подробнее о школе" — плавный скролл к блоку преподавателей
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('to-teachers-btn');
    const teachersBlock = document.getElementById('teachers');
    if (btn && teachersBlock) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const blockTop = teachersBlock.getBoundingClientRect().top + window.pageYOffset;
            const customOffset = 150; // отступ сверху
            window.scrollTo({
                top: blockTop - customOffset,
                behavior: 'smooth'
            });
        });
    }
});