// Автоскролл блока отзывов

document.addEventListener('DOMContentLoaded', function () {
    const reviewsList = document.querySelector('.reviews__list');
    if (reviewsList && reviewsList.children.length <= 6) {
        reviewsList.innerHTML += reviewsList.innerHTML;

        let scrollSpeed = 0.5;

        function autoScroll() {
            reviewsList.scrollLeft += scrollSpeed;
            if (reviewsList.scrollLeft >= reviewsList.scrollWidth / 2) {
                reviewsList.scrollLeft = 0;
            }
            requestAnimationFrame(autoScroll);
        }

        reviewsList.style.whiteSpace = 'nowrap';
        reviewsList.style.overflowX = 'auto';
        reviewsList.style.scrollBehavior = 'auto';
        autoScroll();
    }
});
