/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/register.js":
/*!****************************!*\
  !*** ./src/js/register.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");



'use strict';
function register(email, nickname, password) {
  axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("https://todoo.5xcamp.us/users", {
    "user": {
      "email": email,
      "nickname": nickname,
      "password": password
    }
  }).then(function (res) {
    document.cookie = "message=" + res.data.message + "; max-age=3; path=/";
    var token = {
      data: res.headers.authorization,
      name: res.data.nickname
    };
    token = JSON.stringify(token);
    localStorage.setItem('token', token);
    location.replace("./index.html");
  }).catch(function (error) {
    return emailCheck(null, variables.Email);
  });
}
function apiParameter() {
  var inputs = document.querySelectorAll('input');
  register(inputs[variables.Email].value, inputs[variables.Nickname].value, inputs[variables.Password].value);
}
function emailCheck(input, num) {
  var feedbacks = document.querySelectorAll('.feedback');
  var emailRegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  var state = document.getElementById('Email');
  if (input == "") {
    feedbacks[num].textContent = "\u6B64\u6B04\u4F4D\u4E0D\u53EF\u70BA\u7A7A";
    state.setCustomValidity("X");
  } else if (input == null) {
    feedbacks[num].textContent = "\u6B64Email\u5DF2\u8A3B\u518A";
    state.setCustomValidity("X");
    clearState = true;
  } else if (emailRegExp.exec(input) == null) {
    feedbacks[num].textContent = "\u8ACB\u586B\u5BEB\u6B63\u78BAEmail\u683C\u5F0F";
    state.setCustomValidity("X");
  } else {
    state.setCustomValidity("");
  }
}
function nameCheck(input, num) {
  var feedbacks = document.querySelectorAll('.feedback');
  var state = document.getElementById('Nickname');
  input = input.replace('　', ' ');
  input = input.trim();
  if (input == "") {
    feedbacks[num].textContent = "\u6B64\u6B04\u4F4D\u4E0D\u53EF\u70BA\u7A7A";
    state.setCustomValidity("X");
  } else {
    state.setCustomValidity("");
  }
}
function passwordCheck(input, num) {
  var feedbacks = document.querySelectorAll('.feedback');
  var passwordRegExp = /^(?!.*_)(?=.*[a-zA-Z])(?=.*\d)(?=.*\S)[a-zA-z\d]{8,20}$/;
  var state = document.getElementById('Password');
  if (input == "") {
    feedbacks[num].textContent = "\u6B64\u6B04\u4F4D\u4E0D\u53EF\u70BA\u7A7A";
    state.setCustomValidity("X");
  } else if (passwordRegExp.exec(input) == null) {
    feedbacks[num].textContent = "\u8ACB\u8F38\u5165\u516B\u81F3\u4E8C\u5341\u4F4D\u6578\u5B57\u53CA\u82F1\u6587";
    state.setCustomValidity("X");
  } else {
    state.setCustomValidity("");
  }
}
function password2Check(input1, input2, num) {
  var feedbacks = document.querySelectorAll('.feedback');
  var state = document.getElementById('Password2');
  if (input1 == "") {
    if (input2 == "") {
      feedbacks[num].textContent = "\u6B64\u6B04\u4F4D\u4E0D\u53EF\u70BA\u7A7A";
      state.setCustomValidity("X");
    } else {
      feedbacks[num].textContent = "\u9700\u8207\u5BC6\u78BC\u76F8\u540C";
      state.setCustomValidity("X");
    }
  } else {
    if (input1 !== input2) {
      feedbacks[num].textContent = "\u9700\u8207\u5BC6\u78BC\u76F8\u540C";
      state.setCustomValidity("X");
    } else {
      state.setCustomValidity("");
    }
  }
}

//自動跳轉
var token = localStorage.getItem('token');
if (token != null) {
  location.replace("./index.html");
}

//定義變數
var clearState = "false";
var variables = {};
var inputs = document.querySelectorAll('input');
Array.from(inputs).forEach(function (input) {
  var Num = input.getAttribute("data-num");
  var Type = input.getAttribute("id");
  variables[Type] = Num;
});

//input後檢查
var tempPwd = "";
Array.from(inputs).forEach(function (input, num) {
  input.addEventListener('input', function (e) {
    if (num == variables.Email) {
      emailCheck(inputs[variables.Email].value, num);
    }
    if (num == variables.Nickname) {
      nameCheck(inputs[variables.Nickname].value, num);
    }
    if (num == variables.Password) {
      passwordCheck(inputs[variables.Password].value, num);
      tempPwd = inputs[variables.Password].value;
    }
    if (num == variables.Password2) {
      password2Check(tempPwd, inputs[variables.Password2].value, num);
    }
    if (clearState) {
      var _form = document.querySelector('form');
      _form.classList.remove('was-validated');
      clearState = false;
      emailCheck(inputs[variables.Email].value, num);
    }
  });
});

//按下submit檢查
var form = document.querySelector('.needs-validation');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  e.stopPropagation();
  //若整個表單還沒都vailid就不會送出
  if (form.checkValidity()) {
    apiParameter();
  }
  form.classList.add('was-validated');
}, false);

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
/******/ 			"register": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/register.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLG9GQUFvRixxREFBcUQ7VUFDekkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0ICogYXMgYm9vdHN0cmFwIGZyb20gXCJib290c3RyYXBcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG5mdW5jdGlvbiByZWdpc3RlcihlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICBheGlvcy5wb3N0KGBodHRwczovL3RvZG9vLjV4Y2FtcC51cy91c2Vyc2AsIHtcclxuICAgICAgICBcInVzZXJcIjoge1xyXG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxyXG4gICAgICAgICAgICBcIm5pY2tuYW1lXCI6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgbWVzc2FnZT0ke3Jlcy5kYXRhLm1lc3NhZ2V9OyBtYXgtYWdlPTM7IHBhdGg9L2A7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHsgZGF0YTogcmVzLmhlYWRlcnMuYXV0aG9yaXphdGlvbiwgbmFtZTogcmVzLmRhdGEubmlja25hbWV9O1xyXG4gICAgICAgICAgICB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiLi9pbmRleC5odG1sXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGVtYWlsQ2hlY2sobnVsbCwgdmFyaWFibGVzLkVtYWlsKSlcclxufVxyXG5cclxuZnVuY3Rpb24gYXBpUGFyYW1ldGVyKCkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIHJlZ2lzdGVyKGlucHV0c1t2YXJpYWJsZXMuRW1haWxdLnZhbHVlLCBpbnB1dHNbdmFyaWFibGVzLk5pY2tuYW1lXS52YWx1ZSwgaW5wdXRzW3ZhcmlhYmxlcy5QYXNzd29yZF0udmFsdWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtYWlsQ2hlY2soaW5wdXQsIG51bSkge1xyXG4gICAgY29uc3QgZmVlZGJhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlZWRiYWNrJyk7XHJcbiAgICBsZXQgZW1haWxSZWdFeHAgPSAvXlxcdysoKC1cXHcrKXwoXFwuXFx3KykpKlxcQFtBLVphLXowLTldKygoXFwufC0pW0EtWmEtejAtOV0rKSpcXC5bQS1aYS16XSskLztcclxuICAgIGxldCBzdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbWFpbCcpXHJcbiAgICBpZiAoaW5wdXQgPT0gXCJcIikge1xyXG4gICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYOatpOashOS9jeS4jeWPr+eCuuepumA7XHJcbiAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJYXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpbnB1dCA9PSBudWxsKSB7XHJcbiAgICAgICAgZmVlZGJhY2tzW251bV0udGV4dENvbnRlbnQgPSBg5q2kRW1haWzlt7LoqLvlhopgO1xyXG4gICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiWFwiKVxyXG4gICAgICAgIGNsZWFyU3RhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZW1haWxSZWdFeHAuZXhlYyhpbnB1dCkgPT0gbnVsbCkge1xyXG4gICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYOiri+Whq+Wvq+ato+eiukVtYWls5qC85byPYDtcclxuICAgICAgICBzdGF0ZS5zZXRDdXN0b21WYWxpZGl0eShcIlhcIilcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hbWVDaGVjayhpbnB1dCwgbnVtKSB7XHJcbiAgICBjb25zdCBmZWVkYmFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2snKTtcclxuICAgIGxldCBzdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOaWNrbmFtZScpXHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoJ+OAgCcsICcgJylcclxuICAgIGlucHV0ID0gaW5wdXQudHJpbSgpO1xyXG4gICAgaWYgKGlucHV0ID09IFwiXCIpIHtcclxuICAgICAgICBmZWVkYmFja3NbbnVtXS50ZXh0Q29udGVudCA9IGDmraTmrITkvY3kuI3lj6/ngrrnqbpgO1xyXG4gICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiWFwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIilcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFzc3dvcmRDaGVjayhpbnB1dCwgbnVtKSB7XHJcbiAgICBjb25zdCBmZWVkYmFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2snKVxyXG4gICAgbGV0IHBhc3N3b3JkUmVnRXhwID0gL14oPyEuKl8pKD89LipbYS16QS1aXSkoPz0uKlxcZCkoPz0uKlxcUylbYS16QS16XFxkXXs4LDIwfSQvO1xyXG4gICAgbGV0IHN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Bhc3N3b3JkJyk7XHJcblxyXG4gICAgaWYgKGlucHV0ID09IFwiXCIpIHtcclxuICAgICAgICBmZWVkYmFja3NbbnVtXS50ZXh0Q29udGVudCA9IGDmraTmrITkvY3kuI3lj6/ngrrnqbpgO1xyXG4gICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiWFwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmRSZWdFeHAuZXhlYyhpbnB1dCkgPT0gbnVsbCkge1xyXG4gICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYOiri+i8uOWFpeWFq+iHs+S6jOWNgeS9jeaVuOWtl+WPiuiLseaWh2A7XHJcbiAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJYXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXNzd29yZDJDaGVjayhpbnB1dDEsIGlucHV0MiwgbnVtKSB7XHJcbiAgICBjb25zdCBmZWVkYmFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2snKVxyXG4gICAgbGV0IHN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Bhc3N3b3JkMicpXHJcblxyXG4gICAgaWYgKGlucHV0MSA9PSBcIlwiKSB7XHJcbiAgICAgICAgaWYgKGlucHV0MiA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYOatpOashOS9jeS4jeWPr+eCuuepumA7XHJcbiAgICAgICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiWFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYOmcgOiIh+WvhueivOebuOWQjGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiWFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoaW5wdXQxICE9PSBpbnB1dDIpIHtcclxuICAgICAgICAgICAgZmVlZGJhY2tzW251bV0udGV4dENvbnRlbnQgPSBg6ZyA6IiH5a+G56K855u45ZCMYDtcclxuICAgICAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJYXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+iHquWLlei3s+i9iVxyXG5sZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuaWYgKHRva2VuICE9IG51bGwpIHtcclxuICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIuL2luZGV4Lmh0bWxcIik7XHJcbn1cclxuXHJcbi8v5a6a576p6K6K5pW4XHJcbmxldCBjbGVhclN0YXRlID0gXCJmYWxzZVwiO1xyXG5sZXQgdmFyaWFibGVzID0ge31cclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuQXJyYXkuZnJvbShpbnB1dHMpLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgY29uc3QgTnVtID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIik7XHJcbiAgICBjb25zdCBUeXBlID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICB2YXJpYWJsZXNbVHlwZV0gPSBOdW07XHJcbn0pXHJcblxyXG4vL2lucHV05b6M5qqi5p+lXHJcbmxldCB0ZW1wUHdkID0gXCJcIjtcclxuQXJyYXkuZnJvbShpbnB1dHMpLmZvckVhY2goKGlucHV0LCBudW0pID0+IHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBpZiAobnVtID09IHZhcmlhYmxlcy5FbWFpbCkge1xyXG4gICAgICAgICAgICBlbWFpbENoZWNrKGlucHV0c1t2YXJpYWJsZXMuRW1haWxdLnZhbHVlLCBudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobnVtID09IHZhcmlhYmxlcy5OaWNrbmFtZSkge1xyXG4gICAgICAgICAgICBuYW1lQ2hlY2soaW5wdXRzW3ZhcmlhYmxlcy5OaWNrbmFtZV0udmFsdWUsIG51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudW0gPT0gdmFyaWFibGVzLlBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ2hlY2soaW5wdXRzW3ZhcmlhYmxlcy5QYXNzd29yZF0udmFsdWUsIG51bSk7XHJcbiAgICAgICAgICAgIHRlbXBQd2QgPSBpbnB1dHNbdmFyaWFibGVzLlBhc3N3b3JkXS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG51bSA9PSB2YXJpYWJsZXMuUGFzc3dvcmQyKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkMkNoZWNrKHRlbXBQd2QsIGlucHV0c1t2YXJpYWJsZXMuUGFzc3dvcmQyXS52YWx1ZSwgbnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsZWFyU3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcy12YWxpZGF0ZWQnKTtcclxuICAgICAgICAgICAgY2xlYXJTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbWFpbENoZWNrKGlucHV0c1t2YXJpYWJsZXMuRW1haWxdLnZhbHVlLCBudW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL+aMieS4i3N1Ym1pdOaqouafpVxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5lZWRzLXZhbGlkYXRpb24nKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgLy/oi6XmlbTlgIvooajllq7pgoTmspLpg712YWlsaWTlsLHkuI3mnIPpgIHlh7pcclxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIGFwaVBhcmFtZXRlcigpO1xyXG4gICAgfVxyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJyk7XHJcbn0sIGZhbHNlKSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicmVnaXN0ZXJcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL3JlZ2lzdGVyLmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJib290c3RyYXAiLCJheGlvcyIsInJlZ2lzdGVyIiwiZW1haWwiLCJuaWNrbmFtZSIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkb2N1bWVudCIsImNvb2tpZSIsImRhdGEiLCJtZXNzYWdlIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsIm5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvY2F0aW9uIiwicmVwbGFjZSIsImNhdGNoIiwiZXJyb3IiLCJlbWFpbENoZWNrIiwidmFyaWFibGVzIiwiRW1haWwiLCJhcGlQYXJhbWV0ZXIiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidmFsdWUiLCJOaWNrbmFtZSIsIlBhc3N3b3JkIiwiaW5wdXQiLCJudW0iLCJmZWVkYmFja3MiLCJlbWFpbFJlZ0V4cCIsInN0YXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsInNldEN1c3RvbVZhbGlkaXR5IiwiY2xlYXJTdGF0ZSIsImV4ZWMiLCJuYW1lQ2hlY2siLCJ0cmltIiwicGFzc3dvcmRDaGVjayIsInBhc3N3b3JkUmVnRXhwIiwicGFzc3dvcmQyQ2hlY2siLCJpbnB1dDEiLCJpbnB1dDIiLCJnZXRJdGVtIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIk51bSIsImdldEF0dHJpYnV0ZSIsIlR5cGUiLCJ0ZW1wUHdkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJQYXNzd29yZDIiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2hlY2tWYWxpZGl0eSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=