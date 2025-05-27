// Навигация по сайту через нижний навбар — плавный скролл к секциям и подсветка активной кнопки
document.addEventListener('DOMContentLoaded', function () {
    const navBtns = document.querySelectorAll('.bottom-nav__btn');
    const nav = document.querySelector('.bottom-nav');
    const sections = [
        { id: 'main', el: document.body },
        { id: 'teachers', el: document.getElementById('teachers') },
        { id: 'tariffs', el: document.getElementById('tariffs') },
        { id: 'enroll', el: document.getElementById('enroll') },
        { id: 'reviews', el: document.getElementById('reviews') }
    ];

    const FIXED_NAV_HEIGHT = 80;
    const SCROLL_OFFSET = 20;

    navBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = btn.getAttribute('data-scroll');
            const section = sections.find(s => s.id === targetId);

            navBtns.forEach(b => b.classList.remove('active'));

            if (targetId === 'main') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (section && section.el) {
                const sectionTop = section.el.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: sectionTop - FIXED_NAV_HEIGHT - SCROLL_OFFSET,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Подсветка активной кнопки при скролле
    window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY + FIXED_NAV_HEIGHT + SCROLL_OFFSET;
        let current = 'main';

        for (let i = 1; i < sections.length; i++) {
            const sec = sections[i].el;
            if (sec && sec.offsetTop <= scrollPos) {
                current = sections[i].id;
            }
        }

        // navBtns.forEach(btn => {
        //     btn.classList.toggle('active', btn.getAttribute('data-scroll') === current);
        // });

        navBtns.forEach(btn => btn.classList.remove('active'));
        navBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-scroll') === current);
        });
    });
});