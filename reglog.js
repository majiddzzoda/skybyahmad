let contentReg = document.querySelector(".contentReg");
let emailInputReg = document.querySelector(".emailInputReg");
let telInputReg = document.querySelector(".telInputReg");
let passwordOneInputReg = document.querySelector(".passwordOneInputReg");
let passwordTwoInputReg = document.querySelector(".passwordTwoInputReg");
let registrationButton = document.querySelector(".registrationButton");

let contentLog = document.querySelector(".contentLog");
let emailInputLog = document.querySelector(".emailInputLog");
let passwordInputLog = document.querySelector(".passwordInputLog");
let loginButton = document.querySelector(".loginButton");
let forgotButton = document.querySelector(".forgotButton");
let telInputLog = document.querySelector(".telInputLog");

if (registrationButton) {
    registrationButton.onclick = () => {
        if (emailInputReg.value != "" &&
            telInputReg.value != "" &&
            passwordOneInputReg.value != "" &&
            passwordTwoInputReg.value != "" &&
            passwordOneInputReg.value == passwordTwoInputReg.value) {
            localStorage.setItem("email", emailInputReg.value);
            localStorage.setItem("tel", telInputReg.value);
            localStorage.setItem("password", passwordOneInputReg.value);
            contentReg.innerHTML = "Успешная регистрация!";
            setTimeout(() => {
                window.location.href = "./login.html";
                contentReg.innerHTML = "Начни сейчас"
                emailInputReg.value = "";
                telInputReg.value = "";
                passwordOneInputReg.value = "";
                passwordTwoInputReg.value = "";
            }, 3000);
        }
        else {
            contentReg.innerHTML = "Поля заполнены некорректно!";
            setTimeout(() => {
                contentReg.innerHTML = "Начни сейчас";
                emailInputReg.value = "";
                telInputReg.value = "";
                passwordOneInputReg.value = "";
                passwordTwoInputReg.value = "";
            }, 3000);
        }
    }
}

if (loginButton) {
    loginButton.onclick = () => {
        let emailReg = localStorage.getItem("email");
        let passwordReg = localStorage.getItem("password");
        let newPassword = localStorage.getItem("newPassword");
        if (emailReg == emailInputLog.value && passwordReg == passwordInputLog.value || passwordInputLog.value == newPassword) {
            contentLog.innerHTML = "Успешный вход!";
            setTimeout(() => {
                contentLog.innerHTML = "Зарегистрирован? Войди в систему!";
                window.location.href = "./crud.html"
                emailInputLog.value = "";
                passwordInputLog.value = "";
            }, 3000);
        }
        else {
            contentLog.innerHTML = "Данные неверны!";
            setTimeout(() => {
                contentLog.innerHTML = "Зарегистрирован? Войди в систему!";
                emailInputLog.value = "";
                passwordInputLog.value = "";
            }, 3000);
        }
    }
}
if (forgotButton) {
    forgotButton.onclick = () => {
        telInputLog.disabled = false;
        telInputLog.classList.add("active");
        let newPassword = Math.floor(Math.random() * 9000) + 1000;
        let telLog = localStorage.getItem("tel");
        localStorage.setItem("newPassword", newPassword);
        telInputLog.oninput = () => {
            if (telInputLog.value == telLog) {
                passwordInputLog.placeholder = "Ваш новый пароль " + newPassword;
                setTimeout(() => {
                    passwordInputLog.placeholder = "Пароль";
                }, 2000);
            }
            else {
                passwordInputLog.placeholder = "Пароль";
            }
        }

    }
}