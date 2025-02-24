// Основной файл JS

document.addEventListener("DOMContentLoaded", function () {
    // Открытие и закрытие модального окна входа/регистрации
    const authButton = document.getElementById("authButton");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const registerLink = document.getElementById("registerLink");

    if (authButton && modal && closeModal) {
        authButton.addEventListener("click", function () {
            modal.classList.add("modal--active");
        });

        closeModal.addEventListener("click", function () {
            modal.classList.remove("modal--active");
        });
    }

    // Валидация формы записи на курс
    const enrollmentForm = document.querySelector(".enrollment__form");
    if (enrollmentForm) {
        enrollmentForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const course = document.getElementById("course").value;

            if (!name || !email || !phone || !course) {
                alert("Пожалуйста, заполните все поля формы.");
                event.preventDefault();
            }
        });
    }
});
