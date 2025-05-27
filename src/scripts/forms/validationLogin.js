export function setupLoginValidation(loginForm) {
    const loginInputs = loginForm.querySelectorAll('input[required]');
    const loginBtn = loginForm.querySelector('button[type="submit"]');
    let errorMessage = loginForm.querySelector('.dialog__error');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'dialog__error';
        loginBtn.before(errorMessage);
    }

    loginForm.addEventListener('input', () => {
        let allFilled = true;
        loginInputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('input-error');
                allFilled = false;
            } else {
                input.classList.remove('input-error');
            }
        });
        loginBtn.disabled = !allFilled;
        loginBtn.classList.toggle('active', allFilled);

        if (!allFilled) {
            errorMessage.textContent = 'Пожалуйста, заполните все поля';
        } else {
            errorMessage.textContent = '';
        }
    });
}