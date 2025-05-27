document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;

    // Плейсхолдер для предотвращения скачка
    const placeholder = document.createElement('div');
    placeholder.style.display = 'none';
    nav.parentNode.insertBefore(placeholder, nav);

    function updatePlaceholder() {
        placeholder.style.height = (nav.offsetHeight * 2) + 'px';
    }

    function onScroll() {
        if (window.scrollY >= nav.offsetTop) {
            nav.classList.add('bottom-nav--fixed');
            placeholder.style.display = 'block';
            updatePlaceholder();
        } else {
            nav.classList.remove('bottom-nav--fixed');
            placeholder.style.display = 'none';
        }
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updatePlaceholder);

    // Инициализация
    updatePlaceholder();
    onScroll();
});