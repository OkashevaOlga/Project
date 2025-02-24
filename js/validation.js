// validation.js — Скрипт валидации форм

document.addEventListener("DOMContentLoaded", function () {
    const enrollmentForm = document.querySelector(".enrollment__form");

    if (enrollmentForm) {
        enrollmentForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const course = document.getElementById("course").value;

            let errors = [];

            if (!name) {
                errors.push("Введите ваше имя.");
            }

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errors.push("Введите корректный email.");
            }

            if (!phone || !/^\+?\d{10,15}$/.test(phone)) {
                errors.push("Введите корректный номер телефона.");
            }

            if (!course) {
                errors.push("Выберите курс.");
            }

            if (errors.length > 0) {
                alert(errors.join("\n"));
                event.preventDefault();
            }
        });
    }
});