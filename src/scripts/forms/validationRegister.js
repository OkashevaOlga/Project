export function setupRegistrationValidation(registrationPopup) {
    const errorMessage = registrationPopup.querySelector('#error-message');
    const form = registrationPopup.querySelector('form') || registrationPopup;

    const inputs = registrationPopup.querySelectorAll('input[required]');
    const submitButton = registrationPopup.querySelector('button[type="submit"]');

    // Функция проверки заполненности всех обязательных полей
    function checkInputs() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        submitButton.disabled = !allFilled;
        submitButton.classList.toggle('active', allFilled);
    }

    // Проверяем поля при вводе, чтобы активировать кнопку
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            errorMessage.textContent = ''; // Сбрасываем ошибки при изменении
            checkInputs();
        });
    });

    // Изначально кнопка заблокирована
    submitButton.disabled = true;

    registrationPopup.addEventListener('submit', event => {
        event.preventDefault();

        const username = registrationPopup.querySelector('#username').value.trim();
        const login = registrationPopup.querySelector('#login').value.trim();
        const email = registrationPopup.querySelector('#email').value.trim();
        const password = registrationPopup.querySelector('#password').value;
        const confirmPassword = registrationPopup.querySelector('#confirm-password').value;

        // Проверки валидации
        if (password !== confirmPassword) {
            errorMessage.textContent = 'Пароли не совпадают';
            errorMessage.style.color = 'red';
            return;
        }
        if (username.length < 3) {
            errorMessage.textContent = 'Имя пользователя должно содержать не менее 3 символов';
            errorMessage.style.color = 'red';
            return;
        }
        if (password.length < 8) {
            errorMessage.textContent = 'Пароль должен содержать не менее 8 символов';
            errorMessage.style.color = 'red';
            return;
        }
        // Можно добавить здесь проверку формата email, если нужно

        errorMessage.textContent = 'Регистрация прошла успешно!';
        errorMessage.style.color = 'green';

        localStorage.setItem("login", login);
        form.reset();

        // Заблокировать кнопку после отправки
        submitButton.disabled = true;
        submitButton.classList.remove('active');
    });

    // Вызовем проверку сразу при инициализации
    checkInputs();
}