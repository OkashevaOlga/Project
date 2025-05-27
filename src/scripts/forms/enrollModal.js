
document.addEventListener('DOMContentLoaded', function () {
    const enrollForm = document.querySelector('.enrollment__form');
    const successModal = document.querySelector('.enroll-success-modal');
    const closeSuccessBtn = document.querySelector('.enroll-success-modal__close');

    if (enrollForm && successModal) {
        enrollForm.addEventListener('submit', function (e) {
            e.preventDefault();
            successModal.removeAttribute('hidden');
            enrollForm.reset();
        });

        // Закрытие по крестику
        closeSuccessBtn.addEventListener('click', function () {
            successModal.setAttribute('hidden', true);
        });

        // Закрытие по клику вне окна
        successModal.addEventListener('click', function (e) {
            if (e.target === successModal) {
                successModal.setAttribute('hidden', true);
            }
        });
    }
});