export function setupModalToggle(dialogLayout, loginHeaderButton) {
    const closeDialogButtons = dialogLayout.querySelectorAll('[data-close]');
    const selectPopup = dialogLayout.querySelector('#popup-select');
    const loginPopup = dialogLayout.querySelector('#popup-login');
    const registrationPopup = dialogLayout.querySelector('#popup-registration');

    loginHeaderButton.addEventListener('click', () => {
        dialogLayout.removeAttribute('hidden');
    });

    closeDialogButtons.forEach(button => {
        button.addEventListener('click', () => {
            dialogLayout.setAttribute('hidden', true);
            selectPopup.removeAttribute('hidden');
            loginPopup.setAttribute('hidden', true);
            registrationPopup.setAttribute('hidden', true);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === dialogLayout) {
            dialogLayout.setAttribute('hidden', true);
            selectPopup.removeAttribute('hidden');
            loginPopup.setAttribute('hidden', true);
            registrationPopup.setAttribute('hidden', true);
        }
    });
}