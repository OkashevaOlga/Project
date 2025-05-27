export function setupTabSwitch(loginTab, regTab, loginForm, regForm) {
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('dialog__tab--active');
        regTab.classList.remove('dialog__tab--active');
        loginForm.removeAttribute('hidden');
        regForm.setAttribute('hidden', true);
    });

    regTab.addEventListener('click', () => {
        regTab.classList.add('dialog__tab--active');
        loginTab.classList.remove('dialog__tab--active');
        regForm.removeAttribute('hidden');
        loginForm.setAttribute('hidden', true);
    });
}