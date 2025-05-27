import { setupModalToggle } from './modalToggle.js';
import { setupFormSwitch } from './formSwitch.js';
import { setupRegistrationValidation } from './validationRegister.js';
import { setupLoginValidation } from './validationLogin.js';
import { setupTabSwitch } from './tabSwitch.js';

document.addEventListener('DOMContentLoaded', () => {
    const dialogLayout = document.querySelector('.dialog');
    const loginHeaderButton = document.querySelector('.header__login');

    if (!dialogLayout || !loginHeaderButton) return;

    const loginTab = dialogLayout.querySelector('.dialog__tab[data-login]');
    const regTab = dialogLayout.querySelector('.dialog__tab[data-registration]');
    const loginForm = document.getElementById('popup-login');
    const regForm = document.getElementById('popup-registration');

    setupModalToggle(dialogLayout, loginHeaderButton);
    setupFormSwitch(dialogLayout);
    setupTabSwitch(loginTab, regTab, loginForm, regForm);

    // Интеграция валидации регистрации (замена старого кода)
    if (regForm) {
        setupRegistrationValidation(regForm);
    }
    if (loginForm) {
        setupLoginValidation(loginForm);
    }
});