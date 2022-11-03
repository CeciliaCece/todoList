//import b from './test';
import "../scss/style.scss";
import * as bootstrap from "bootstrap";
//import axios from "axios";
  /*axios.get("https://hexschool.github.io/ajaxHomework/data.json").then
    (function (response) {
      console.log(response);
    })*/
    //b++;
  //console.log(process.env.DB_HOST);



function pageChange(page) {
  const login_page = document.querySelector('.login_page')
  const main_page = document.querySelector('.main_page')
  const login = document.querySelector('.login')
  const register = document.querySelector('.register')
  const forms = document.querySelectorAll('form')
  const inputs = document.querySelectorAll('input')

  //清除form狀態
  Array.from(forms).forEach(e => {
    e.classList.remove('was-validated')
  })
  //清除表格內容
  Array.from(inputs).forEach(e => {
    e.value = '';
  })
  //切換畫面
  //linkto註冊
  if (page == 1) {
    login.classList.add('d-none')
    register.classList.remove('d-none')
  }
  //linkto登入
  else if (page == 2) {
    login.classList.remove('d-none')
    register.classList.add('d-none')
  }
  //linkto登出
  else if (page == 3) {
    login_page.classList.remove('d-none')
    main_page.classList.add('d-none')
  }
  //登入成功
  else if (page == 4) {
    login_page.classList.add('d-none')
    main_page.classList.remove('d-none')
  }
  //註冊成功
  else {
    //linkto登入
    login.classList.remove('d-none')
    register.classList.add('d-none')
    //登入成功
    login_page.classList.add('d-none')
    main_page.classList.remove('d-none')
  }

}

//監聽acclink
; (() => {
  'use strict'
  const links = document.querySelectorAll('.accLink')
  Array.from(links).forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      if (e.target.textContent == '註冊帳號') {
        pageChange(1);
      }
      else if (e.target.textContent == '登入') {
        pageChange(2);
      }
      else {
        pageChange(3);
      }
    }, false)
  })
})()

function emailCheck(form,input){
  const feedbacks = document.querySelectorAll('.feedback');
  const inputs = document.querySelectorAll('input')
  let emailRegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  let feedback = form*2+input;//0|2
  let isValid;
  if (feedback < 1) {
    isValid = document.getElementById('loginEmail')
  }
  else {
    isValid = document.getElementById('Email')
  }
  let result = false;
  if ((inputs[input].value) == "") {
    feedbacks[feedback].textContent = `此欄位不可為空`;
  }
  else if (emailRegExp.exec((inputs[input].value)) == null) {
    feedbacks[feedback].textContent = `請填寫正確Email`;
  }
  else {
    result = true;
  }
  if (result)isValid.setCustomValidity("")
  else isValid.setCustomValidity("Invalid field.")  
}

function passwordCheck(form, input){
  const feedbacks = document.querySelectorAll('.feedback')
  const inputs = document.querySelectorAll('input')
  let passwordRegExp = /^(?!.*_)(?=.*[a-zA-Z])(?=.*\d)(?=.*\S)[a-zA-z\d]{8,}$/;
  let feedback = form  + input; //1|3
  let isValid;

  if (input < 2) {
    isValid = document.getElementById('loginPassword')
  }
  else {
    isValid = document.getElementById('Password')
  }
  let result = false;
  if (inputs[input].value == ""){
    feedbacks[feedback].textContent = `此欄位不可為空`;
  }
  else if (passwordRegExp.exec(inputs[input].value) == null) {
    feedbacks[feedback].textContent = `至少要有八位數字及英文`;
  }
  else {
    result = true
  }
  if (result) isValid.setCustomValidity("")
  else isValid.setCustomValidity("Invalid field.")
}

function password2Check(){
  const feedbacks = document.querySelectorAll('.feedback')
  const inputs = document.querySelectorAll('input')
  let isValid = document.getElementById('Password2')
  let result = false;
  if (inputs[3].value == "") {
    if (inputs[2].value == "") {
      feedbacks[5].textContent = `此欄位不可為空`;
    }
    else {
      feedbacks[5].textContent = `需與密碼相同`;
    }
  }
  else {
    if (inputs[2].value !== inputs[3].value) {
      feedbacks[5].textContent = `需與密碼相同`;
    }
    else {
    result = true
    }
  }
  if (result) isValid.setCustomValidity("")
  else isValid.setCustomValidity("Invalid field.")
}

//按下submit自動做檢查
  ; (() => {
    'use strict'
    const forms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    Array.from(inputs).forEach(input => {
      input.addEventListener('input', (e) => {
        console.log(inputs[1] == input)
        console.log(inputs[0] == input)
        if (inputs[0] == input || inputs[1] == input ) {
          //form == forms[0]
          emailCheck(0, 0)
          passwordCheck(0, 1)
        }
        else {
          emailCheck(1, 0)
          passwordCheck(1, 2)
          password2Check()
        }
      })
    })

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', (e) => {
//////////////////這邊也要重新檢查一遍 等接API再優化///////

        //若整個表單還沒都vailid就不會送出
        if (!form.checkValidity()) {
          e.preventDefault()
          e.stopPropagation()
        }
        //如果都vailid就會送出及關閉register面板
        else {
          e.preventDefault()
          pageChange(4)
        }

        //使表格出現題示
        form.classList.add('was-validated')

      }, false)
    })


  })()

  if (module.hot) {
    module.hot.accept();
  }


