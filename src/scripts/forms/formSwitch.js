export function setupFormSwitch(dialogLayout) {
    const selectPopup = dialogLayout.querySelector('#popup-select');
    const loginPopup = dialogLayout.querySelector('#popup-login');
    const registrationPopup = dialogLayout.querySelector('#popup-registration');
    const switchToRegisterButtons = dialogLayout.querySelectorAll('[data-registration]');
    const switchToLoginButtons = dialogLayout.querySelectorAll('[data-login]');

    switchToRegisterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            selectPopup.setAttribute('hidden', true);
            loginPopup.setAttribute('hidden', true);
            registrationPopup.removeAttribute('hidden');
        });
    });

    switchToLoginButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            selectPopup.setAttribute('hidden', true);
            registrationPopup.setAttribute('hidden', true);
            loginPopup.removeAttribute('hidden');
        });
    });
}