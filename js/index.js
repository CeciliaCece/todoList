/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cookie.js":
/*!**************************!*\
  !*** ./src/js/cookie.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getCookie; }
/* harmony export */ });
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(';').shift();
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie.js */ "./src/js/cookie.js");





"use strict";
var apiUrl = "https://todoo.5xcamp.us/";
var token = localStorage.getItem("token");
var Token = JSON.parse(token);
var Sort = 0;
var todos;
var swalCustomStyle = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
  customClass: {
    confirmButton: "btn btn-success btn-lg",
    cancelButton: "btn btn-danger",
    backdrop: "rgba(0,0,0,0.3)"
  },
  buttonsStyling: false
});

//未登入自動跳轉
if (token == null) {
  location.replace("./login.html");
}
//取得token
axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.common.Authorization = Token.data;
//XX的待辦
document.querySelector(".whose-acc").innerHTML = Token.name + "\u7684\u5F85\u8FA6";
//登入註冊完成功alert
if ((0,_cookie_js__WEBPACK_IMPORTED_MODULE_4__["default"])("message") != null) {
  swalCustomStyle.fire({
    icon: "success",
    title: (0,_cookie_js__WEBPACK_IMPORTED_MODULE_4__["default"])("message"),
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
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
  setTimeout(function () {
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
  var content = [];
  var list = "";
  var undo = 0;
  var done = 0;
  Array.from(todos).forEach(function (todo, index) {
    if (Sort == 1 && todo.completed_at != null) {
      return;
    }
    if (Sort == 2 && todo.completed_at == null) {
      return;
    }
    content.unshift(todo.content);
    list = "<li id=\"" + todo.id + "\">\n          <label for=\"check-" + index + "\" class=\"checkLabel\">\n          <input type=\"checkbox\" id=\"check-" + index + "\" " + (todo.completed_at === null ? "" : "checked") + ">\n          <span></span>\n          <p>" + todo.content + "</p> \n          </label>\n          <div class=\"list-btn d-none\"> \n          <button type=\"button\" class=\"editBtn btn-edit\" title=\"\u7DE8\u8F2F\"></button>\n          <button type=\"button\" class=\"delBtn btn-close\" title=\"\u522A\u9664\"></button>\n          </div>\n          </li >" + list;
    todo.completed_at === null ? undo++ : done++;
  });
  if (undo + done == 0) {
    document.querySelector(".empty").classList.remove("d-none");
    document.querySelector(".allCard").classList.add("d-none");
  }
  document.querySelector(".list").innerHTML = list;
  document.querySelector(".count").innerHTML = undo + "\u500B\u5F85\u5B8C\u6210\u9805\u76EE";
}
function logout() {
  var logout = document.querySelector(".log-out");
  logout.addEventListener("click", function (e) {
    axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](apiUrl + "users/sign_out").then(function (res) {
      localStorage.removeItem("token");
      localStorage.removeItem("sort");
      location.replace("./login.html");
    }).catch(function (err) {
      return console.log(err);
    });
  });
}
function getTodo() {
  axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(apiUrl + "todos").then(function (res) {
    todos = res.data.todos;
    // console.log(todos);
  }).catch(function (error) {
    console.log(error.response);
    console.log("Oops... There was a problem connecting to the server. Please try again later.");
  });
  return todos;
}
function addTodo() {
  var addTodo = document.querySelector(".plus-button");
  addTodo.addEventListener("click", function (e) {
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(apiUrl + "/todos", {
      todo: {
        content: document.querySelector(".add-todo").value
      }
    }).then(function (res) {
      render();
      document.querySelector(".add-todo").value = "";
    }).catch(function (err) {
      return console.log(err);
    });
  });
}
function editTodo() {
  var editBtns = document.querySelectorAll(".editBtn");
  var list = document.querySelectorAll(".list p");
  Array.from(editBtns).forEach(function (editBtn, index) {
    editBtn.addEventListener("click", function (e) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        title: "請編輯文字內容",
        input: "text",
        inputValue: list[index].innerHTML
      }).then(function (res) {
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].put(apiUrl + "todos/" + editBtn.closest("li").getAttribute("id"), {
          todo: {
            content: res.value
          }
        }).then(function (res) {
          render();
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            icon: "success",
            title: "修改完成",
            timer: 1500,
            timerProgressBar: true
          });
        }).catch(function (err) {
          return console.log(err);
        });
      });
    });
  });
}
function delTodo() {
  var delBtns = document.querySelectorAll(".delBtn");
  Array.from(delBtns).forEach(function (delBtn) {
    delBtn.addEventListener("click", function (e) {
      axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](apiUrl + "/todos/" + delBtn.closest("li").getAttribute("id")).then(function (res) {
        render();
      }).catch(function (err) {
        return console.log(err);
      });
    });
  });
}
function todoStateChange() {
  var changes = document.querySelectorAll(".checkLabel");
  Array.from(changes).forEach(function (change) {
    change.addEventListener("change", function (e) {
      axios__WEBPACK_IMPORTED_MODULE_3__["default"].patch(apiUrl + "/todos/" + change.closest("li").getAttribute("id") + "/toggle").then(function (res) {
        render();
      }).catch(function (err) {
        return console.log(err);
      });
    });
  });
}
function changeSort() {
  var sorts = document.querySelectorAll(".nav-link");
  Array.from(sorts).forEach(function (sort, index) {
    sort.addEventListener("click", function (e) {
      sorts[Sort].classList.remove("active");
      Sort = index;
      render();
    });
  });
}
function clearDone() {
  var clearAll = document.querySelector(".clearDone");
  clearAll.addEventListener("click", function (e) {
    var lists = document.querySelectorAll(".list li");
    Array.from(lists).forEach(function (li, index) {
      axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](apiUrl + "/todos/" + li.id).then(function (res) {
        if (index == lists.length - 1) {
          render();
        }
      }).catch(function (err) {
        return console.log(err);
      });
    });
  });
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodolist"] = self["webpackChunktodolist"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0Esb0ZBQW9GLGtEQUFrRDtVQUN0SSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xyXG4gICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChgOyAke25hbWV9PWApO1xyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuLi9zY3NzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0ICogYXMgYm9vdHN0cmFwIGZyb20gXCJib290c3RyYXBcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwiLi9jb29raWUuanNcIjtcclxuXHJcbihcInVzZSBzdHJpY3RcIik7XHJcblxyXG5jb25zdCBhcGlVcmwgPSBcImh0dHBzOi8vdG9kb28uNXhjYW1wLnVzL1wiO1xyXG5sZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5sZXQgVG9rZW4gPSBKU09OLnBhcnNlKHRva2VuKTtcclxubGV0IFNvcnQgPSAwO1xyXG5sZXQgdG9kb3M7XHJcblxyXG5jb25zdCBzd2FsQ3VzdG9tU3R5bGUgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnXCIsXHJcbiAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1kYW5nZXJcIixcclxuICAgIGJhY2tkcm9wOiBcInJnYmEoMCwwLDAsMC4zKVwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8v5pyq55m75YWl6Ieq5YuV6Lez6L2JXHJcbmlmICh0b2tlbiA9PSBudWxsKSB7XHJcbiAgbG9jYXRpb24ucmVwbGFjZShcIi4vbG9naW4uaHRtbFwiKTtcclxufVxyXG4vL+WPluW+l3Rva2VuXHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9IFRva2VuLmRhdGE7XHJcbi8vWFjnmoTlvoXovqZcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9zZS1hY2NcIikuaW5uZXJIVE1MID0gYCR7VG9rZW4ubmFtZX3nmoTlvoXovqZgO1xyXG4vL+eZu+WFpeiou+WGiuWujOaIkOWKn2FsZXJ0XHJcbmlmIChjb29raWUoXCJtZXNzYWdlXCIpICE9IG51bGwpIHtcclxuICBzd2FsQ3VzdG9tU3R5bGUuZmlyZSh7XHJcbiAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgIHRpdGxlOiBjb29raWUoXCJtZXNzYWdlXCIpLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDE1MDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcbi8v5YW25LuW5ZCE56iu5Yqf6IO955uj6IG9XHJcbmxvZ291dCgpO1xyXG5sb2dvdXQoKTtcclxuYWRkVG9kbygpO1xyXG5jaGFuZ2VTb3J0KCk7XHJcbmNsZWFyRG9uZSgpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gIHRvZG9zID0gZ2V0VG9kbygpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyh0b2Rvcyk7XHJcbiAgICByZW5kZXJMaXN0KHRvZG9zKTtcclxuICAgIGVkaXRUb2RvKCk7XHJcbiAgICBkZWxUb2RvKCk7XHJcbiAgICB0b2RvU3RhdGVDaGFuZ2UoKTtcclxuICB9LCAxMDApO1xyXG59XHJcblxyXG5yZW5kZXIoKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxpc3QodG9kb3MpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5XCIpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxDYXJkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgbGV0IGNvbnRlbnQgPSBbXTtcclxuICBsZXQgbGlzdCA9IFwiXCI7XHJcbiAgbGV0IHVuZG8gPSAwO1xyXG4gIGxldCBkb25lID0gMDtcclxuXHJcbiAgQXJyYXkuZnJvbSh0b2RvcykuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcclxuICAgIGlmIChTb3J0ID09IDEgJiYgdG9kby5jb21wbGV0ZWRfYXQgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoU29ydCA9PSAyICYmIHRvZG8uY29tcGxldGVkX2F0ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29udGVudC51bnNoaWZ0KHRvZG8uY29udGVudCk7XHJcbiAgICBsaXN0ID0gYDxsaSBpZD1cIiR7dG9kby5pZH1cIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay0ke2luZGV4fVwiIGNsYXNzPVwiY2hlY2tMYWJlbFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2stJHtpbmRleH1cIiAke1xyXG4gICAgICB0b2RvLmNvbXBsZXRlZF9hdCA9PT0gbnVsbCA/IFwiXCIgOiBcImNoZWNrZWRcIlxyXG4gICAgfT5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxwPiR7dG9kby5jb250ZW50fTwvcD4gXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtYnRuIGQtbm9uZVwiPiBcclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdEJ0biBidG4tZWRpdFwiIHRpdGxlPVwi57eo6LyvXCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbEJ0biBidG4tY2xvc2VcIiB0aXRsZT1cIuWIqumZpFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpID4ke2xpc3R9YDtcclxuICAgIHRvZG8uY29tcGxldGVkX2F0ID09PSBudWxsID8gdW5kbysrIDogZG9uZSsrO1xyXG4gIH0pO1xyXG5cclxuICBpZiAodW5kbyArIGRvbmUgPT0gMCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxDYXJkXCIpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgfVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKS5pbm5lckhUTUwgPSBsaXN0O1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRcIikuaW5uZXJIVE1MID0gYCR7dW5kb33lgIvlvoXlrozmiJDpoIXnm65gO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICBjb25zdCBsb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZy1vdXRcIik7XHJcbiAgbG9nb3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmRlbGV0ZShgJHthcGlVcmx9dXNlcnMvc2lnbl9vdXRgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNvcnRcIik7XHJcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZShcIi4vbG9naW4uaHRtbFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldFRvZG8oKSB7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoYCR7YXBpVXJsfXRvZG9zYClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgdG9kb3MgPSByZXMuZGF0YS50b2RvcztcclxuICAgICAgLy8gY29uc29sZS5sb2codG9kb3MpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcIk9vcHMuLi4gVGhlcmUgd2FzIGEgcHJvYmxlbSBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXIuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIHJldHVybiB0b2RvcztcclxufVxyXG5mdW5jdGlvbiBhZGRUb2RvKCkge1xyXG4gIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsdXMtYnV0dG9uXCIpO1xyXG4gIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHthcGlVcmx9L3RvZG9zYCwge1xyXG4gICAgICAgIHRvZG86IHtcclxuICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIikudmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZWRpdFRvZG8oKSB7XHJcbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRCdG5cIik7XHJcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QgcFwiKTtcclxuICBBcnJheS5mcm9tKGVkaXRCdG5zKS5mb3JFYWNoKChlZGl0QnRuLCBpbmRleCkgPT4ge1xyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCLoq4vnt6jovK/mloflrZflhaflrrlcIixcclxuICAgICAgICBpbnB1dDogXCJ0ZXh0XCIsXHJcbiAgICAgICAgaW5wdXRWYWx1ZTogbGlzdFtpbmRleF0uaW5uZXJIVE1MLFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgLnB1dChgJHthcGlVcmx9dG9kb3MvJHtlZGl0QnRuLmNsb3Nlc3QoXCJsaVwiKS5nZXRBdHRyaWJ1dGUoXCJpZFwiKX1gLCB7XHJcbiAgICAgICAgICAgIHRvZG86IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMudmFsdWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXIoKTtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCLkv67mlLnlrozmiJBcIixcclxuICAgICAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsVG9kbygpIHtcclxuICBjb25zdCBkZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxCdG5cIik7XHJcbiAgQXJyYXkuZnJvbShkZWxCdG5zKS5mb3JFYWNoKChkZWxCdG4pID0+IHtcclxuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZGVsZXRlKGAke2FwaVVybH0vdG9kb3MvJHtkZWxCdG4uY2xvc2VzdChcImxpXCIpLmdldEF0dHJpYnV0ZShcImlkXCIpfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiB0b2RvU3RhdGVDaGFuZ2UoKSB7XHJcbiAgY29uc3QgY2hhbmdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tMYWJlbFwiKTtcclxuICBBcnJheS5mcm9tKGNoYW5nZXMpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xyXG4gICAgY2hhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucGF0Y2goXHJcbiAgICAgICAgICBgJHthcGlVcmx9L3RvZG9zLyR7Y2hhbmdlLmNsb3Nlc3QoXCJsaVwiKS5nZXRBdHRyaWJ1dGUoXCJpZFwiKX0vdG9nZ2xlYFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICByZW5kZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVNvcnQoKSB7XHJcbiAgY29uc3Qgc29ydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xyXG4gIEFycmF5LmZyb20oc29ydHMpLmZvckVhY2goKHNvcnQsIGluZGV4KSA9PiB7XHJcbiAgICBzb3J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBzb3J0c1tTb3J0XS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBTb3J0ID0gaW5kZXg7XHJcbiAgICAgIHJlbmRlcigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJEb25lKCkge1xyXG4gIGNvbnN0IGNsZWFyQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGVhckRvbmVcIik7XHJcbiAgY2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdCBsaVwiKTtcclxuICAgIEFycmF5LmZyb20obGlzdHMpLmZvckVhY2goKGxpLCBpbmRleCkgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5kZWxldGUoYCR7YXBpVXJsfS90b2Rvcy8ke2xpLmlkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID09IGxpc3RzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb2xpc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImdldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsInBvcCIsInNoaWZ0IiwiYm9vdHN0cmFwIiwiU3dhbCIsImF4aW9zIiwiYXBpVXJsIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVG9rZW4iLCJKU09OIiwicGFyc2UiLCJTb3J0IiwidG9kb3MiLCJzd2FsQ3VzdG9tU3R5bGUiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJhY2tkcm9wIiwiYnV0dG9uc1N0eWxpbmciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJkYXRhIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImxvZ291dCIsImFkZFRvZG8iLCJjaGFuZ2VTb3J0IiwiY2xlYXJEb25lIiwicmVuZGVyIiwiZ2V0VG9kbyIsInNldFRpbWVvdXQiLCJyZW5kZXJMaXN0IiwiZWRpdFRvZG8iLCJkZWxUb2RvIiwidG9kb1N0YXRlQ2hhbmdlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGVudCIsImxpc3QiLCJ1bmRvIiwiZG9uZSIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJ0b2RvIiwiaW5kZXgiLCJjb21wbGV0ZWRfYXQiLCJ1bnNoaWZ0IiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRlbGV0ZSIsInRoZW4iLCJyZXMiLCJyZW1vdmVJdGVtIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZXJyb3IiLCJyZXNwb25zZSIsInBvc3QiLCJlZGl0QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlZGl0QnRuIiwiaW5wdXQiLCJpbnB1dFZhbHVlIiwicHV0IiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsImRlbEJ0bnMiLCJkZWxCdG4iLCJjaGFuZ2VzIiwiY2hhbmdlIiwicGF0Y2giLCJzb3J0cyIsInNvcnQiLCJjbGVhckFsbCIsImxpc3RzIiwibGkiXSwic291cmNlUm9vdCI6IiJ9