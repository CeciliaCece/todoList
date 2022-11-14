import "../scss/style.scss";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import cookie from "./cookie.js";

("use strict");

const apiUrl = "https://todoo.5xcamp.us/";
let token = localStorage.getItem("token");
let Token = JSON.parse(token);
let Sort = 0;
let todos;

const swalCustomStyle = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success btn-lg",
    cancelButton: "btn btn-danger",
    backdrop: "rgba(0,0,0,0.3)",
  },
  buttonsStyling: false,
});

//未登入自動跳轉
if (token == null) {
  location.replace("./login.html");
}
//取得token
axios.defaults.headers.common["Authorization"] = Token.data;
//XX的待辦
document.querySelector(".whose-acc").innerHTML = `${Token.name}的待辦`;
//登入註冊完成功alert
if (cookie("message") != null) {
  swalCustomStyle.fire({
    icon: "success",
    title: cookie("message"),
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
}
//其他各種功能監聽
logout();
logout();
addTodo();
changeSort();
clearDone();

function render() {
  todos = getTodo();
  setTimeout(() => {
    //console.log(todos);
    renderList(todos);
    editTodo();
    delTodo();
    todoStateChange();
  }, 100);
}

render();

function renderList(todos) {
  document.querySelector(".empty").classList.add("d-none");
  document.querySelector(".allCard").classList.remove("d-none");
  let content = [];
  let list = "";
  let undo = 0;
  let done = 0;

  Array.from(todos).forEach((todo, index) => {
    if (Sort == 1 && todo.completed_at != null) {
      return;
    }
    if (Sort == 2 && todo.completed_at == null) {
      return;
    }
    content.unshift(todo.content);
    list = `<li id="${todo.id}">
          <label for="check-${index}" class="checkLabel">
          <input type="checkbox" id="check-${index}" ${
      todo.completed_at === null ? "" : "checked"
    }>
          <span></span>
          <p>${todo.content}</p> 
          </label>
          <div class="list-btn d-none"> 
          <button type="button" class="editBtn btn-edit" title="編輯"></button>
          <button type="button" class="delBtn btn-close" title="刪除"></button>
          </div>
          </li >${list}`;
    todo.completed_at === null ? undo++ : done++;
  });

  if (undo + done == 0) {
    document.querySelector(".empty").classList.remove("d-none");
    document.querySelector(".allCard").classList.add("d-none");
  }
  document.querySelector(".list").innerHTML = list;
  document.querySelector(".count").innerHTML = `${undo}個待完成項目`;
}
function logout() {
  const logout = document.querySelector(".log-out");
  logout.addEventListener("click", (e) => {
    axios
      .delete(`${apiUrl}users/sign_out`)
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("sort");
        location.replace("./login.html");
      })
      .catch((err) => console.log(err));
  });
}
function getTodo() {
  axios
    .get(`${apiUrl}todos`)
    .then((res) => {
      todos = res.data.todos;
      // console.log(todos);
    })
    .catch((error) => {
      console.log(error.response);
      console.log(
        "Oops... There was a problem connecting to the server. Please try again later."
      );
    });
  return todos;
}
function addTodo() {
  const addTodo = document.querySelector(".plus-button");
  addTodo.addEventListener("click", (e) => {
    axios
      .post(`${apiUrl}/todos`, {
        todo: {
          content: document.querySelector(".add-todo").value,
        },
      })
      .then((res) => {
        render();
        document.querySelector(".add-todo").value = "";
      })
      .catch((err) => console.log(err));
  });
}
function editTodo() {
  const editBtns = document.querySelectorAll(".editBtn");
  let list = document.querySelectorAll(".list p");
  Array.from(editBtns).forEach((editBtn, index) => {
    editBtn.addEventListener("click", (e) => {
      Swal.fire({
        title: "請編輯文字內容",
        input: "text",
        inputValue: list[index].innerHTML,
      }).then((res) => {
        axios
          .put(`${apiUrl}todos/${editBtn.closest("li").getAttribute("id")}`, {
            todo: {
              content: res.value,
            },
          })
          .then((res) => {
            render();
            Swal.fire({
              icon: "success",
              title: "修改完成",
              timer: 1500,
              timerProgressBar: true,
            });
          })
          .catch((err) => console.log(err));
      });
    });
  });
}
function delTodo() {
  const delBtns = document.querySelectorAll(".delBtn");
  Array.from(delBtns).forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      axios
        .delete(`${apiUrl}/todos/${delBtn.closest("li").getAttribute("id")}`)
        .then((res) => {
          render();
        })
        .catch((err) => console.log(err));
    });
  });
}
function todoStateChange() {
  const changes = document.querySelectorAll(".checkLabel");
  Array.from(changes).forEach((change) => {
    change.addEventListener("change", (e) => {
      axios
        .patch(
          `${apiUrl}/todos/${change.closest("li").getAttribute("id")}/toggle`
        )
        .then((res) => {
          render();
        })
        .catch((err) => console.log(err));
    });
  });
}
function changeSort() {
  const sorts = document.querySelectorAll(".nav-link");
  Array.from(sorts).forEach((sort, index) => {
    sort.addEventListener("click", (e) => {
      sorts[Sort].classList.remove("active");
      Sort = index;
      render();
    });
  });
}
function clearDone() {
  const clearAll = document.querySelector(".clearDone");
  clearAll.addEventListener("click", (e) => {
    const lists = document.querySelectorAll(".list li");
    Array.from(lists).forEach((li, index) => {
      axios
        .delete(`${apiUrl}/todos/${li.id}`)
        .then((res) => {
          if (index == lists.length - 1) {
            render();
          }
        })
        .catch((err) => console.log(err));
    });
  });
}
