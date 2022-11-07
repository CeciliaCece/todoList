import "../scss/style.scss";
import * as bootstrap from "bootstrap";


function emailCheck(input) {
    const feedbacks = document.querySelectorAll('.feedback');
    let emailRegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    let state = document.getElementById('Email')

    if (input == "") {
        feedbacks[0].textContent = `此欄位不可為空`;
        state.setCustomValidity(`此欄位不可為空`)
    }
    else if (emailRegExp.exec(input) == null) {
        feedbacks[0].textContent = `請填寫正確Email`;
        state.setCustomValidity(`請填寫正確Email`)
    }
    else {
        state.setCustomValidity("")
    }
}


function passwordCheck(input) {
    const feedbacks = document.querySelectorAll('.feedback')
    let passwordRegExp = /^(?!.*_)(?=.*[a-zA-Z])(?=.*\d)(?=.*\S)[a-zA-z\d]{8,}$/;
    let state = document.getElementById('Password');

    if (input == "") {
        feedbacks[2].textContent = `此欄位不可為空`;
        state.setCustomValidity(`此欄位不可為空`)
    }
    else if (passwordRegExp.exec(input) == null) {
        feedbacks[2].textContent = `至少要有八位數字及英文`;
        state.setCustomValidity(`至少要有八位數字及英文`)
    }
    else {
        state.setCustomValidity("")
    }
}


function password2Check(input1,input2) {
    const feedbacks = document.querySelectorAll('.feedback')
    let state = document.getElementById('Password2')

    if (input1 == "") {
        if (input2 == "") {
            feedbacks[3].textContent = `此欄位不可為空`;
            state.setCustomValidity(`此欄位不可為空`);
        }
        else {
            feedbacks[3].textContent = `需與密碼相同`;
            state.setCustomValidity(`需與密碼相同`);
        }
    }
    else {
        if (input1 !== input2) {
            feedbacks[3].textContent = `需與密碼相同`;
            state.setCustomValidity(`需與密碼相同`);
        }
        else {
            state.setCustomValidity("");
        }
    }
}


//input後檢查
; (() => {
    'use strict'
    const inputs = document.querySelectorAll('input');
        
    Array.from(inputs).forEach(input => {
        input.addEventListener('input', (e) => {
            emailCheck(inputs[0].value);
            passwordCheck(inputs[2].value);
            password2Check(inputs[2].value, inputs[3].value)
        })
    })
})()


//按下submit檢查
; (() => {
    'use strict'
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', e => {
        //若整個表單還沒都vailid就不會送出
        if (!form.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
})()


if (module.hot) {
    module.hot.accept();
}
