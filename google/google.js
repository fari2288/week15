function check() {
let email = document.getElementById ("exampleemail");
let name = document.getElementById("examplename");
let surname = document.getElementById("examplesurname");
let password = document.getElementById('examplepassword');
let confirm = document.getElementById('exampleconfirm');
let errorMessage = document.getElementById('errorMessage');
let errors = 0;

document.getElementById('errorMessage').innerHTML ="";
if (email.value =='') {
    errorMessage.innerHTML +="Ваш емейл не заполнен<br>";
    errors += 1;
}

if (name.value =='') {
    errorMessage.innerHTML +="Вашe имя не заполнено<br>";
    errors += 1;
}

if (surname.value =='') {
    errorMessage.innerHTML +="Ваша фамилия не заполнена<br>";
    errors += 1;
}

if (password.value =='') {
    errorMessage.innerHTML +="Ваш пароль не заполнен<br>";
    errors += 1;
}

if (confirm.value =='') {
    errorMessage.innerHTML +="Подтверждение пароля не заполнено<br>";
    errors += 1;
}


if (errors === 0) {
    errorMessage.innerHTML +=`Добро пожаловать, ${name.value}!`;
}
}
