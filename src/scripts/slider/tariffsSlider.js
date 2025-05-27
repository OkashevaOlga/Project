// Слайдер тарифов с точками и стрелками

document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('.tariffs__list');
    const cards = document.querySelectorAll('.tariff__card');
    const left = document.querySelector('.tariffs__arrow--left');
    const right = document.querySelector('.tariffs__arrow--right');
    const dotsContainer = document.querySelector('.tariffs__dots');

    if (!list || cards.length < 3 || !left || !right || !dotsContainer) return;

    const cardsPerPage = 3;
    const totalPages = 2;
    let currentPage = 0;

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.className = 'tariffs__dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Страница ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.tariffs__dot');

    function update() {
        let scrollTo = 0;
        for (let i = 0; i < currentPage * cardsPerPage; i++) {
            if (cards[i]) {
                scrollTo += cards[i].offsetWidth;
                const style = getComputedStyle(cards[i]);
                scrollTo += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }
        }

        list.scrollTo({ left: scrollTo, behavior: 'smooth' });
        dots.forEach((dot, idx) => dot.classList.toggle('active', idx === currentPage));
        left.disabled = currentPage === 0;
        right.disabled = currentPage === totalPages - 1;
    }

    function goTo(page) {
        currentPage = Math.max(0, Math.min(page, totalPages - 1));
        update();
    }

    left.addEventListener('click', () => goTo(currentPage - 1));
    right.addEventListener('click', () => goTo(currentPage + 1));
    dots.forEach((dot, idx) => dot.addEventListener('click', () => goTo(idx)));

    window.addEventListener('resize', update);

    update();
});