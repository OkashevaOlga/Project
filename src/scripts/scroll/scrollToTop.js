window.addEventListener('DOMContentLoaded', function () {
    // Кнопка "Наверх" — появляется при прокрутке, возвращает к началу страницы
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    scrollToTopBtn.addEventListener('click', function () {
        const maxScrollLeft = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        window.scrollTo({ left: Math.min(0, maxScrollLeft), top: 0, behavior: 'smooth' });
    });
});