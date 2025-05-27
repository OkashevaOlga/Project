// Кнопки "Выбрать" в тарифах — скролл к форме записи на курс с учётом высоты навбара
document.addEventListener('DOMContentLoaded', function () {
    const enrollBlock = document.getElementById('enroll');
    const nav = document.querySelector('.bottom-nav');
    const tariffButtons = document.querySelectorAll('.scroll-to-enroll');
    if (enrollBlock && tariffButtons.length) {
        tariffButtons.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const navHeight = nav ? nav.offsetHeight : 0;
                const blockTop = enrollBlock.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: blockTop - navHeight - 90,
                    behavior: 'smooth'
                });
            });
        });
    }
});