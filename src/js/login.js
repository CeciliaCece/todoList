import "../scss/style.scss";
import * as bootstrap from "bootstrap";
import axios from "axios";

'use strict'

function logIn(email, password) {
    axios.post(`https://todoo.5xcamp.us/users/sign_in`, {
        "user": {
            "email": email,
            "password": password
        }
    })
        .then(res => {
            document.cookie = `message=${res.data.message}; max-age=3; path=/`;
            var token = { data: res.headers.authorization, name: res.data.nickname};
            token = JSON.stringify(token);
            localStorage.setItem('token', token);
            location.replace("./index.html");
        })
        .catch(error => {
            emailCheck(null, variables.Email);
            passwordCheck(null, variables.Password);
        })
}

function apiParameter() {
    const inputs = document.querySelectorAll('input');
    logIn(inputs[variables.Email].value, inputs[variables.Password].value)
}

function emailCheck(input, num) {
    const feedbacks = document.querySelectorAll('.feedback');
    let emailRegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    let state = document.getElementById('Email')
    if (input == "") {
        feedbacks[num].textContent = `此欄位不可為空`;
        state.setCustomValidity("X")
    }
    else if (input == null) {
        feedbacks[num].textContent = `Email或密碼錯誤`;
        state.setCustomValidity("X")
        clearState = true;
    }
    else if (emailRegExp.exec(input) == null) {
        feedbacks[num].textContent = `請填寫正確Email格式`;
        state.setCustomValidity("X")
    }
    else {
        state.setCustomValidity("")
    }
}

function passwordCheck(input, num) {
    const feedbacks = document.querySelectorAll('.feedback')
    let passwordRegExp = /^(?!.*_)(?=.*[a-zA-Z])(?=.*\d)(?=.*\S)[a-zA-z\d]{8,20}$/;
    let state = document.getElementById('Password');

    if (input == "") {
        feedbacks[num].textContent = `此欄位不可為空`;
        state.setCustomValidity("X")
    }
    else if (input == null) {
        feedbacks[num].textContent = `Email或密碼錯誤`;
        state.setCustomValidity("X")
        clearState = true;
    }
    else if (passwordRegExp.exec(input) == null) {
        feedbacks[num].textContent = `請輸入八至二十位數字及英文`;
        state.setCustomValidity("X")
    }
    else {
        state.setCustomValidity("")
    }
}

//自動跳轉
let token = localStorage.getItem('token');
if (token != null) {
    location.replace("./index.html");
}

//定義變數
let clearState = "false";
let variables = {}
const inputs = document.querySelectorAll('input');
Array.from(inputs).forEach(input => {
    const Num = input.getAttribute("data-num");
    const Type = input.getAttribute("id");
    variables[Type] =  Num;
})

//input後檢查
Array.from(inputs).forEach((input, num) => {
    input.addEventListener('input', (e) => {
        if (num == variables.Email) {
            emailCheck(inputs[variables.Email].value, num);
        }
        if (num == variables.Password) {
            passwordCheck(inputs[variables.Password].value, num);
        }
        if (clearState){
            const form = document.querySelector('form')
            form.classList.remove('was-validated');
            clearState = false;
            emailCheck(inputs[variables.Email].value, num);
            passwordCheck(inputs[variables.Password].value, num);
        }
    })
})

//按下submit檢查
const form = document.querySelector('.needs-validation');
form.addEventListener('submit', e => {
    e.preventDefault()
    e.stopPropagation()
    //若整個表單還沒都vailid就不會送出
    if (form.checkValidity()) {
        apiParameter();
    }
    form.classList.add('was-validated')
}, false)


