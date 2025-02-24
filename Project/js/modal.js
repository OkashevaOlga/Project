// modal.js — Скрипт для модального окна

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const authButton = document.getElementById("authButton");
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

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("modal--active");
        }
    });
});