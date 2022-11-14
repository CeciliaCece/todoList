/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");



'use strict';
function logIn(email, password) {
  axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("https://todoo.5xcamp.us/users/sign_in", {
    "user": {
      "email": email,
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
    emailCheck(null, variables.Email);
    passwordCheck(null, variables.Password);
  });
}
function apiParameter() {
  var inputs = document.querySelectorAll('input');
  logIn(inputs[variables.Email].value, inputs[variables.Password].value);
}
function emailCheck(input, num) {
  var feedbacks = document.querySelectorAll('.feedback');
  var emailRegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  var state = document.getElementById('Email');
  if (input == "") {
    feedbacks[num].textContent = "\u6B64\u6B04\u4F4D\u4E0D\u53EF\u70BA\u7A7A";
    state.setCustomValidity("X");
  } else if (input == null) {
    feedbacks[num].textContent = "Email\u6216\u5BC6\u78BC\u932F\u8AA4";
    state.setCustomValidity("X");
    clearState = true;
  } else if (emailRegExp.exec(input) == null) {
    feedbacks[num].textContent = "\u8ACB\u586B\u5BEB\u6B63\u78BAEmail\u683C\u5F0F";
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
  } else if (input == null) {
    feedbacks[num].textContent = "Email\u6216\u5BC6\u78BC\u932F\u8AA4";
    state.setCustomValidity("X");
    clearState = true;
  } else if (passwordRegExp.exec(input) == null) {
    feedbacks[num].textContent = "\u8ACB\u8F38\u5165\u516B\u81F3\u4E8C\u5341\u4F4D\u6578\u5B57\u53CA\u82F1\u6587";
    state.setCustomValidity("X");
  } else {
    state.setCustomValidity("");
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
Array.from(inputs).forEach(function (input, num) {
  input.addEventListener('input', function (e) {
    if (num == variables.Email) {
      emailCheck(inputs[variables.Email].value, num);
    }
    if (num == variables.Password) {
      passwordCheck(inputs[variables.Password].value, num);
    }
    if (clearState) {
      var _form = document.querySelector('form');
      _form.classList.remove('was-validated');
      clearState = false;
      emailCheck(inputs[variables.Email].value, num);
      passwordCheck(inputs[variables.Password].value, num);
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
/******/ 			"login": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/login.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSxvRkFBb0Ysa0RBQWtEO1VBQ3RJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIGJvb3RzdHJhcCBmcm9tIFwiYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuZnVuY3Rpb24gbG9nSW4oZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICBheGlvcy5wb3N0KGBodHRwczovL3RvZG9vLjV4Y2FtcC51cy91c2Vycy9zaWduX2luYCwge1xyXG4gICAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBtZXNzYWdlPSR7cmVzLmRhdGEubWVzc2FnZX07IG1heC1hZ2U9MzsgcGF0aD0vYDtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0geyBkYXRhOiByZXMuaGVhZGVycy5hdXRob3JpemF0aW9uLCBuYW1lOiByZXMuZGF0YS5uaWNrbmFtZX07XHJcbiAgICAgICAgICAgIHRva2VuID0gSlNPTi5zdHJpbmdpZnkodG9rZW4pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIuL2luZGV4Lmh0bWxcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBlbWFpbENoZWNrKG51bGwsIHZhcmlhYmxlcy5FbWFpbCk7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ2hlY2sobnVsbCwgdmFyaWFibGVzLlBhc3N3b3JkKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcGlQYXJhbWV0ZXIoKSB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgbG9nSW4oaW5wdXRzW3ZhcmlhYmxlcy5FbWFpbF0udmFsdWUsIGlucHV0c1t2YXJpYWJsZXMuUGFzc3dvcmRdLnZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbWFpbENoZWNrKGlucHV0LCBudW0pIHtcclxuICAgIGNvbnN0IGZlZWRiYWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mZWVkYmFjaycpO1xyXG4gICAgbGV0IGVtYWlsUmVnRXhwID0gL15cXHcrKCgtXFx3Kyl8KFxcLlxcdyspKSpcXEBbQS1aYS16MC05XSsoKFxcLnwtKVtBLVphLXowLTldKykqXFwuW0EtWmEtel0rJC87XHJcbiAgICBsZXQgc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW1haWwnKVxyXG4gICAgaWYgKGlucHV0ID09IFwiXCIpIHtcclxuICAgICAgICBmZWVkYmFja3NbbnVtXS50ZXh0Q29udGVudCA9IGDmraTmrITkvY3kuI3lj6/ngrrnqbpgO1xyXG4gICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiWFwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaW5wdXQgPT0gbnVsbCkge1xyXG4gICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYEVtYWls5oiW5a+G56K86Yyv6KqkYDtcclxuICAgICAgICBzdGF0ZS5zZXRDdXN0b21WYWxpZGl0eShcIlhcIilcclxuICAgICAgICBjbGVhclN0YXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGVtYWlsUmVnRXhwLmV4ZWMoaW5wdXQpID09IG51bGwpIHtcclxuICAgICAgICBmZWVkYmFja3NbbnVtXS50ZXh0Q29udGVudCA9IGDoq4vloavlr6vmraPnorpFbWFpbOagvOW8j2A7XHJcbiAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJYXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXNzd29yZENoZWNrKGlucHV0LCBudW0pIHtcclxuICAgIGNvbnN0IGZlZWRiYWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mZWVkYmFjaycpXHJcbiAgICBsZXQgcGFzc3dvcmRSZWdFeHAgPSAvXig/IS4qXykoPz0uKlthLXpBLVpdKSg/PS4qXFxkKSg/PS4qXFxTKVthLXpBLXpcXGRdezgsMjB9JC87XHJcbiAgICBsZXQgc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUGFzc3dvcmQnKTtcclxuXHJcbiAgICBpZiAoaW5wdXQgPT0gXCJcIikge1xyXG4gICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYOatpOashOS9jeS4jeWPr+eCuuepumA7XHJcbiAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJYXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpbnB1dCA9PSBudWxsKSB7XHJcbiAgICAgICAgZmVlZGJhY2tzW251bV0udGV4dENvbnRlbnQgPSBgRW1haWzmiJblr4bnorzpjK/oqqRgO1xyXG4gICAgICAgIHN0YXRlLnNldEN1c3RvbVZhbGlkaXR5KFwiWFwiKVxyXG4gICAgICAgIGNsZWFyU3RhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmRSZWdFeHAuZXhlYyhpbnB1dCkgPT0gbnVsbCkge1xyXG4gICAgICAgIGZlZWRiYWNrc1tudW1dLnRleHRDb250ZW50ID0gYOiri+i8uOWFpeWFq+iHs+S6jOWNgeS9jeaVuOWtl+WPiuiLseaWh2A7XHJcbiAgICAgICAgc3RhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJYXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+iHquWLlei3s+i9iVxyXG5sZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuaWYgKHRva2VuICE9IG51bGwpIHtcclxuICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIuL2luZGV4Lmh0bWxcIik7XHJcbn1cclxuXHJcbi8v5a6a576p6K6K5pW4XHJcbmxldCBjbGVhclN0YXRlID0gXCJmYWxzZVwiO1xyXG5sZXQgdmFyaWFibGVzID0ge31cclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuQXJyYXkuZnJvbShpbnB1dHMpLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgY29uc3QgTnVtID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIik7XHJcbiAgICBjb25zdCBUeXBlID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICB2YXJpYWJsZXNbVHlwZV0gPSAgTnVtO1xyXG59KVxyXG5cclxuLy9pbnB1dOW+jOaqouafpVxyXG5BcnJheS5mcm9tKGlucHV0cykuZm9yRWFjaCgoaW5wdXQsIG51bSkgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChudW0gPT0gdmFyaWFibGVzLkVtYWlsKSB7XHJcbiAgICAgICAgICAgIGVtYWlsQ2hlY2soaW5wdXRzW3ZhcmlhYmxlcy5FbWFpbF0udmFsdWUsIG51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudW0gPT0gdmFyaWFibGVzLlBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ2hlY2soaW5wdXRzW3ZhcmlhYmxlcy5QYXNzd29yZF0udmFsdWUsIG51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGVhclN0YXRlKXtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcy12YWxpZGF0ZWQnKTtcclxuICAgICAgICAgICAgY2xlYXJTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbWFpbENoZWNrKGlucHV0c1t2YXJpYWJsZXMuRW1haWxdLnZhbHVlLCBudW0pO1xyXG4gICAgICAgICAgICBwYXNzd29yZENoZWNrKGlucHV0c1t2YXJpYWJsZXMuUGFzc3dvcmRdLnZhbHVlLCBudW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL+aMieS4i3N1Ym1pdOaqouafpVxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5lZWRzLXZhbGlkYXRpb24nKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgLy/oi6XmlbTlgIvooajllq7pgoTmspLpg712YWlsaWTlsLHkuI3mnIPpgIHlh7pcclxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIGFwaVBhcmFtZXRlcigpO1xyXG4gICAgfVxyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJylcclxufSwgZmFsc2UpXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsb2dpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb2xpc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbG9naW4uanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImJvb3RzdHJhcCIsImF4aW9zIiwibG9nSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkb2N1bWVudCIsImNvb2tpZSIsImRhdGEiLCJtZXNzYWdlIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsIm5hbWUiLCJuaWNrbmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiY2F0Y2giLCJlcnJvciIsImVtYWlsQ2hlY2siLCJ2YXJpYWJsZXMiLCJFbWFpbCIsInBhc3N3b3JkQ2hlY2siLCJQYXNzd29yZCIsImFwaVBhcmFtZXRlciIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ2YWx1ZSIsImlucHV0IiwibnVtIiwiZmVlZGJhY2tzIiwiZW1haWxSZWdFeHAiLCJzdGF0ZSIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJzZXRDdXN0b21WYWxpZGl0eSIsImNsZWFyU3RhdGUiLCJleGVjIiwicGFzc3dvcmRSZWdFeHAiLCJnZXRJdGVtIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIk51bSIsImdldEF0dHJpYnV0ZSIsIlR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==