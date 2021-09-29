function check() {
let email = document.getElementById ("exampleemail");
let name = document.getElementById("examplename");
let surname = document.getElementById("examplesurname");
let password = document.getElementById('examplepassword');
let confirm = document.getElementById('exampleconfirm');
let errorMessage = document.getElementById('errorMessage');


document.getElementById('errorMessage').innerHTML ="";
if (email.value =='') {
    errorMessage.innerHTML +="Ваш емейл не заполнен<br>";
}
if (name.value =='') {
    errorMessage.innerHTML +="Вашe имя не заполнено<br>";
}
if (surname.value =='') {
    errorMessage.innerHTML +="Ваша фамилия не заполнена<br>";
}
if (password.value =='') {
    errorMessage.innerHTML +="Ваш пароль не заполнен<br>";
}
if (confirm.value =='') {
    errorMessage.innerHTML +="Подтверждение пароля не заполнено<br>";
}
else {
    errorMessage.innerHTML +=`Добро пожаловать, ${name.value}!`;
}
}
