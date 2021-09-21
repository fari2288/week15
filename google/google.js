function check() {
let email = document.getElementById ("exampleemail");
let name = document.getElementById("examplename");
let surname = document.getElementById("examplesurname");
let password = document.getElementById('examplepassword');
let confirm = document.getElementById('exampleconfirm');


document.getElementById('errorMessage').innerHTML ="";
if (email.value =='') {
    document.getElementById('errorMessage').innerHTML +="Ваш email не заполнен<br>";
}
if (name.value =='') {
    document.getElementById('errorMessage').innerHTML +="Ваш email не заполнен<br>";
}
if (surname.value =='') {
    document.getElementById('errorMessage').innerHTML +="Ваш email не заполнен<br>";
}
if (password.value =='') {
    document.getElementById('errorMessage').innerHTML +="Ваш email не заполнен<br>";
}
if (confirm.value =='') {
    document.getElementById('errorMessage').innerHTML +="Ваш email не заполнен<br>";
}
else {
    
    document.getElementById('errorMessage').innerHTML +=`Добро пожаловать`, + name;
}
}
