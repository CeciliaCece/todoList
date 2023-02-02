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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var i = 0;
"use strict";
var apiUrl = "https://todoo.5xcamp.us/";
var token = localStorage.getItem("token");
var Token = JSON.parse(token);
var Sort = 0;
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
function render() {
  return _render.apply(this, arguments);
}
function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var todos;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(apiUrl + "todos");
          case 2:
            todos = _context.sent;
            renderList(todos.data.todos);
            clearDone(todos.data.todos);
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _render.apply(this, arguments);
}
render();
function renderList(todos) {
  /* const editBtns = document.querySelectorAll(".editBtn");
  Array.from(editBtns).forEach((editBtn) => {
    editBtn.removeEventListener("change", (e) => {
      console.log("111");
    });
  }); */
  document.querySelector(".empty").classList.add("d-none");
  document.querySelector(".allCard").classList.remove("d-none");
  var list = "";
  var undo = 0;
  var done = 0;
  Array.from(todos).forEach(function (todo, index) {
    todo.completed_at === null ? undo++ : done++;
    if (Sort == 1 && todo.completed_at != null) {
      return;
    }
    if (Sort == 2 && todo.completed_at == null) {
      return;
    }
    list = "<li id=\"" + todo.id + "\">\n          <label for=\"check-" + index + "\" class=\"checkLabel\">\n          <input type=\"checkbox\" id=\"check-" + index + "\" " + (todo.completed_at === null ? "" : "checked") + ">\n          <span></span>\n          <p>" + todo.content + "</p> \n          </label>\n          <div class=\"list-btn d-none\"> \n          <button type=\"button\" class=\"editBtn btn-edit\" title=\"\u7DE8\u8F2F\"></button>\n          <button type=\"button\" class=\"delBtn btn-close\" title=\"\u522A\u9664\"></button>\n          </div>\n          </li >" + list;
  });
  if (undo + done == 0) {
    document.querySelector(".empty").classList.remove("d-none");
    document.querySelector(".allCard").classList.add("d-none");
  }
  document.querySelector(".list").innerHTML = list;
  document.querySelector(".count").innerHTML = undo + "\u500B\u5F85\u5B8C\u6210\u9805\u76EE";
  editTodo();
  delTodo();
  todoStateChange();
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
      i++;
      console.log(i);
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
function clearDone(todos) {
  var clearDone = document.querySelector(".clearDone");
  clearDone.addEventListener("click", function (e) {
    Array.from(todos).forEach(function (todo, index) {
      if (todo.completed_at != null) {
        axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](apiUrl + "/todos/" + todo.id).then(function (res) {}).catch(function (err) {
          return console.log(err);
        });
      }
    });
    setTimeout(function () {
      render();
    }, 1000);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxTQUFTLENBQUNDLElBQUksRUFBRTtFQUNwQyxJQUFNQyxLQUFLLFVBQVFDLFFBQVEsQ0FBQ0MsTUFBUTtFQUNwQyxJQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksS0FBSyxRQUFNTCxJQUFJLE9BQUk7RUFDdkMsSUFBSUksS0FBSyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU9GLEtBQUssQ0FBQ0csR0FBRyxFQUFFLENBQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0csS0FBSyxFQUFFO0FBQ2pFOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NIQTtBQUFBO0FBQUE7QUFENEI7QUFDVztBQUNSO0FBQ0w7QUFDTztBQUNqQyxJQUFJSSxDQUFDLEdBQUcsQ0FBQztBQUVSLFlBQVk7QUFFYixJQUFNQyxNQUFNLEdBQUcsMEJBQTBCO0FBQ3pDLElBQUlDLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3pDLElBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEtBQUssQ0FBQztBQUM3QixJQUFJTSxJQUFJLEdBQUcsQ0FBQztBQUVaLElBQU1DLGVBQWUsR0FBR1gsd0RBQVUsQ0FBQztFQUNqQ2EsV0FBVyxFQUFFO0lBQ1hDLGFBQWEsRUFBRSx3QkFBd0I7SUFDdkNDLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUJDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ2xCLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQUliLEtBQUssSUFBSSxJQUFJLEVBQUU7RUFDakJjLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUNsQztBQUNBO0FBQ0FsQixtRkFBOEMsR0FBR00sS0FBSyxDQUFDZ0IsSUFBSTtBQUMzRDtBQUNBL0IsUUFBUSxDQUFDZ0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDQyxTQUFTLEdBQU1sQixLQUFLLENBQUNqQixJQUFJLHVCQUFLO0FBQ25FO0FBQ0EsSUFBSUcsc0RBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7RUFDN0JrQixlQUFlLENBQUNlLElBQUksQ0FBQztJQUNuQkMsSUFBSSxFQUFFLFNBQVM7SUFDZkMsS0FBSyxFQUFFbkMsc0RBQU0sQ0FBQyxTQUFTLENBQUM7SUFDeEJvQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxnQkFBZ0IsRUFBRTtFQUNwQixDQUFDLENBQUM7QUFDSjtBQUNBO0FBQ0FDLE1BQU0sRUFBRTtBQUNSQSxNQUFNLEVBQUU7QUFDUkMsT0FBTyxFQUFFO0FBQ1RDLFVBQVUsRUFBRTtBQUFDLFNBQ0VDLE1BQU07RUFBQTtBQUFBO0FBQUE7RUFBQSxxRUFBckI7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7WUFBQSxPQUNzQmxDLGlEQUFTLENBQUlFLE1BQU0sV0FBUTtVQUFBO1lBQXpDa0MsS0FBSztZQUNYQyxVQUFVLENBQUNELEtBQUssQ0FBQ2QsSUFBSSxDQUFDYyxLQUFLLENBQUM7WUFDNUJFLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDZCxJQUFJLENBQUNjLEtBQUssQ0FBQztVQUFDO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQzdCO0VBQUE7QUFBQTtBQUNERixNQUFNLEVBQUU7QUFFUixTQUFTRyxVQUFVLENBQUNELEtBQUssRUFBRTtFQUN6QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRTdDLFFBQVEsQ0FBQ2dDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ2dCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUN4RGpELFFBQVEsQ0FBQ2dDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ2dCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUM3RCxJQUFJQyxJQUFJLEdBQUcsRUFBRTtFQUNiLElBQUlDLElBQUksR0FBRyxDQUFDO0VBQ1osSUFBSUMsSUFBSSxHQUFHLENBQUM7RUFFWkMsS0FBSyxDQUFDQyxJQUFJLENBQUNWLEtBQUssQ0FBQyxDQUFDVyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7SUFDekNELElBQUksQ0FBQ0UsWUFBWSxLQUFLLElBQUksR0FBR1AsSUFBSSxFQUFFLEdBQUdDLElBQUksRUFBRTtJQUM1QyxJQUFJbkMsSUFBSSxJQUFJLENBQUMsSUFBSXVDLElBQUksQ0FBQ0UsWUFBWSxJQUFJLElBQUksRUFBRTtNQUMxQztJQUNGO0lBQ0EsSUFBSXpDLElBQUksSUFBSSxDQUFDLElBQUl1QyxJQUFJLENBQUNFLFlBQVksSUFBSSxJQUFJLEVBQUU7TUFDMUM7SUFDRjtJQUNBUixJQUFJLGlCQUFjTSxJQUFJLENBQUNHLEVBQUUsMENBQ0NGLEtBQUssZ0ZBQ1VBLEtBQUssWUFDNUNELElBQUksQ0FBQ0UsWUFBWSxLQUFLLElBQUksR0FBRyxFQUFFLEdBQUcsU0FBUyxrREFHbENGLElBQUksQ0FBQ0ksT0FBTywrU0FNVFYsSUFBTTtFQUN0QixDQUFDLENBQUM7RUFFRixJQUFJQyxJQUFJLEdBQUdDLElBQUksSUFBSSxDQUFDLEVBQUU7SUFDcEJyRCxRQUFRLENBQUNnQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNnQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDM0RsRCxRQUFRLENBQUNnQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNnQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDNUQ7RUFDQWpELFFBQVEsQ0FBQ2dDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxHQUFHa0IsSUFBSTtFQUNoRG5ELFFBQVEsQ0FBQ2dDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsU0FBUyxHQUFNbUIsSUFBSSx5Q0FBUTtFQUU1RFUsUUFBUSxFQUFFO0VBQ1ZDLE9BQU8sRUFBRTtFQUNUQyxlQUFlLEVBQUU7QUFDbkI7QUFDQSxTQUFTdkIsT0FBTyxHQUFHO0VBQ2pCLElBQU1BLE9BQU8sR0FBR3pDLFFBQVEsQ0FBQ2dDLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDdERTLE9BQU8sQ0FBQ3dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7SUFDdkN6RCxrREFDTyxDQUFJRSxNQUFNLGFBQVU7TUFDdkI4QyxJQUFJLEVBQUU7UUFDSkksT0FBTyxFQUFFN0QsUUFBUSxDQUFDZ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDakM7TUFDL0M7SUFDRixDQUFDLENBQUMsQ0FDRHFFLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7TUFDYjFCLE1BQU0sRUFBRTtNQUNSM0MsUUFBUSxDQUFDZ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDakMsS0FBSyxHQUFHLEVBQUU7SUFDaEQsQ0FBQyxDQUFDLENBQ0R1RSxLQUFLLENBQUMsVUFBQ0MsR0FBRztNQUFBLE9BQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7SUFBQSxFQUFDO0VBQ3JDLENBQUMsQ0FBQztBQUNKO0FBQ0EsU0FBU1QsUUFBUSxHQUFHO0VBQ2xCLElBQU1ZLFFBQVEsR0FBRzFFLFFBQVEsQ0FBQzJFLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztFQUN0RCxJQUFJeEIsSUFBSSxHQUFHbkQsUUFBUSxDQUFDMkUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0VBQy9DckIsS0FBSyxDQUFDQyxJQUFJLENBQUNtQixRQUFRLENBQUMsQ0FBQ2xCLE9BQU8sQ0FBQyxVQUFDb0IsT0FBTyxFQUFFbEIsS0FBSyxFQUFLO0lBQy9Da0IsT0FBTyxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO01BQ3ZDeEQsQ0FBQyxFQUFFO01BQ0g4RCxPQUFPLENBQUNDLEdBQUcsQ0FBQy9ELENBQUMsQ0FBQztNQUNkRix1REFBUyxDQUFDO1FBQ1I0QixLQUFLLEVBQUUsU0FBUztRQUNoQnlDLEtBQUssRUFBRSxNQUFNO1FBQ2JDLFVBQVUsRUFBRTNCLElBQUksQ0FBQ08sS0FBSyxDQUFDLENBQUN6QjtNQUMxQixDQUFDLENBQUMsQ0FBQ21DLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7UUFDZjVELGlEQUNNLENBQUlFLE1BQU0sY0FBU2lFLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUk7VUFDakV4QixJQUFJLEVBQUU7WUFDSkksT0FBTyxFQUFFUSxHQUFHLENBQUN0RTtVQUNmO1FBQ0YsQ0FBQyxDQUFDLENBQ0RxRSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1VBQ2IxQixNQUFNLEVBQUU7VUFDUm5DLHVEQUFTLENBQUM7WUFDUjJCLElBQUksRUFBRSxTQUFTO1lBQ2ZDLEtBQUssRUFBRSxNQUFNO1lBQ2JFLEtBQUssRUFBRSxJQUFJO1lBQ1hDLGdCQUFnQixFQUFFO1VBQ3BCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNEK0IsS0FBSyxDQUFDLFVBQUNDLEdBQUc7VUFBQSxPQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO1FBQUEsRUFBQztNQUNyQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjtBQUNBLFNBQVNSLE9BQU8sR0FBRztFQUNqQixJQUFNbUIsT0FBTyxHQUFHbEYsUUFBUSxDQUFDMkUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0VBQ3BEckIsS0FBSyxDQUFDQyxJQUFJLENBQUMyQixPQUFPLENBQUMsQ0FBQzFCLE9BQU8sQ0FBQyxVQUFDMkIsTUFBTSxFQUFLO0lBQ3RDQSxNQUFNLENBQUNsQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO01BQ3RDekQsdURBQ1MsQ0FBSUUsTUFBTSxlQUFVd0UsTUFBTSxDQUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUNwRWIsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztRQUNiMUIsTUFBTSxFQUFFO01BQ1YsQ0FBQyxDQUFDLENBQ0QyQixLQUFLLENBQUMsVUFBQ0MsR0FBRztRQUFBLE9BQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7TUFBQSxFQUFDO0lBQ3JDLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKO0FBQ0EsU0FBU1AsZUFBZSxHQUFHO0VBQ3pCLElBQU1xQixPQUFPLEdBQUdyRixRQUFRLENBQUMyRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7RUFDeERyQixLQUFLLENBQUNDLElBQUksQ0FBQzhCLE9BQU8sQ0FBQyxDQUFDN0IsT0FBTyxDQUFDLFVBQUM4QixNQUFNLEVBQUs7SUFDdENBLE1BQU0sQ0FBQ3JCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDQyxDQUFDLEVBQUs7TUFDdkN6RCxtREFDUSxDQUNERSxNQUFNLGVBQVUyRSxNQUFNLENBQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUMzRCxDQUNBYixJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1FBQ2IxQixNQUFNLEVBQUU7TUFDVixDQUFDLENBQUMsQ0FDRDJCLEtBQUssQ0FBQyxVQUFDQyxHQUFHO1FBQUEsT0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDckMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7QUFDQSxTQUFTN0IsVUFBVSxHQUFHO0VBQ3BCLElBQU04QyxLQUFLLEdBQUd4RixRQUFRLENBQUMyRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDcERyQixLQUFLLENBQUNDLElBQUksQ0FBQ2lDLEtBQUssQ0FBQyxDQUFDaEMsT0FBTyxDQUFDLFVBQUNpQyxJQUFJLEVBQUUvQixLQUFLLEVBQUs7SUFDekMrQixJQUFJLENBQUN4QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO01BQ3BDc0IsS0FBSyxDQUFDdEUsSUFBSSxDQUFDLENBQUM4QixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDdENoQyxJQUFJLEdBQUd3QyxLQUFLO01BQ1pmLE1BQU0sRUFBRTtJQUNWLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKO0FBRUEsU0FBU0ksU0FBUyxDQUFDRixLQUFLLEVBQUU7RUFDeEIsSUFBTUUsU0FBUyxHQUFHL0MsUUFBUSxDQUFDZ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztFQUN0RGUsU0FBUyxDQUFDa0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztJQUN6Q1osS0FBSyxDQUFDQyxJQUFJLENBQUNWLEtBQUssQ0FBQyxDQUFDVyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7TUFDekMsSUFBSUQsSUFBSSxDQUFDRSxZQUFZLElBQUksSUFBSSxFQUFFO1FBQzdCbEQsdURBQ1MsQ0FBSUUsTUFBTSxlQUFVOEMsSUFBSSxDQUFDRyxFQUFFLENBQUcsQ0FDcENRLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FDakJDLEtBQUssQ0FBQyxVQUFDQyxHQUFHO1VBQUEsT0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztRQUFBLEVBQUM7TUFDckM7SUFDRixDQUFDLENBQUM7SUFDRm1CLFVBQVUsQ0FBQyxZQUFNO01BQ2YvQyxNQUFNLEVBQUU7SUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTSCxNQUFNLEdBQUc7RUFDaEIsSUFBTUEsTUFBTSxHQUFHeEMsUUFBUSxDQUFDZ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUNqRFEsTUFBTSxDQUFDeUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztJQUN0Q3pELHVEQUNTLENBQUlFLE1BQU0sb0JBQWlCLENBQ2pDeUQsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztNQUNieEQsWUFBWSxDQUFDOEUsVUFBVSxDQUFDLE9BQU8sQ0FBQztNQUNoQzlFLFlBQVksQ0FBQzhFLFVBQVUsQ0FBQyxNQUFNLENBQUM7TUFDL0JqRSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQ0QyQyxLQUFLLENBQUMsVUFBQ0MsR0FBRztNQUFBLE9BQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7SUFBQSxFQUFDO0VBQ3JDLENBQUMsQ0FBQztBQUNKOzs7Ozs7Ozs7OztBQ3hOQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkMsb0hBQW9ILGlEQUFpRDtXQUNySztXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSxvRkFBb0Ysa0RBQWtEO1VBQ3RJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29va2llLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xyXG59XHJcbiIsImltcG9ydCBcIi4uL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgKiBhcyBib290c3RyYXAgZnJvbSBcImJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCIuL2Nvb2tpZS5qc1wiO1xyXG5sZXQgaSA9IDA7XHJcblxyXG4oXCJ1c2Ugc3RyaWN0XCIpO1xyXG5cclxuY29uc3QgYXBpVXJsID0gXCJodHRwczovL3RvZG9vLjV4Y2FtcC51cy9cIjtcclxubGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxubGV0IFRva2VuID0gSlNPTi5wYXJzZSh0b2tlbik7XHJcbmxldCBTb3J0ID0gMDtcclxuXHJcbmNvbnN0IHN3YWxDdXN0b21TdHlsZSA9IFN3YWwubWl4aW4oe1xyXG4gIGN1c3RvbUNsYXNzOiB7XHJcbiAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tc3VjY2VzcyBidG4tbGdcIixcclxuICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWRhbmdlclwiLFxyXG4gICAgYmFja2Ryb3A6IFwicmdiYSgwLDAsMCwwLjMpXCIsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxuLy/mnKrnmbvlhaXoh6rli5Xot7PovYlcclxuaWYgKHRva2VuID09IG51bGwpIHtcclxuICBsb2NhdGlvbi5yZXBsYWNlKFwiLi9sb2dpbi5odG1sXCIpO1xyXG59XHJcbi8v5Y+W5b6XdG9rZW5cclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gVG9rZW4uZGF0YTtcclxuLy9YWOeahOW+hei+plxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndob3NlLWFjY1wiKS5pbm5lckhUTUwgPSBgJHtUb2tlbi5uYW1lfeeahOW+hei+pmA7XHJcbi8v55m75YWl6Ki75YaK5a6M5oiQ5YqfYWxlcnRcclxuaWYgKGNvb2tpZShcIm1lc3NhZ2VcIikgIT0gbnVsbCkge1xyXG4gIHN3YWxDdXN0b21TdHlsZS5maXJlKHtcclxuICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgdGl0bGU6IGNvb2tpZShcIm1lc3NhZ2VcIiksXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMTUwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuLy/lhbbku5blkITnqK7lip/og73nm6Pogb1cclxubG9nb3V0KCk7XHJcbmxvZ291dCgpO1xyXG5hZGRUb2RvKCk7XHJcbmNoYW5nZVNvcnQoKTtcclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gIGNvbnN0IHRvZG9zID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH10b2Rvc2ApO1xyXG4gIHJlbmRlckxpc3QodG9kb3MuZGF0YS50b2Rvcyk7XHJcbiAgY2xlYXJEb25lKHRvZG9zLmRhdGEudG9kb3MpO1xyXG59XHJcbnJlbmRlcigpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGlzdCh0b2Rvcykge1xyXG4gIC8qIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0QnRuXCIpO1xyXG4gIEFycmF5LmZyb20oZWRpdEJ0bnMpLmZvckVhY2goKGVkaXRCdG4pID0+IHtcclxuICAgIGVkaXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjExMVwiKTtcclxuICAgIH0pO1xyXG4gIH0pOyAqL1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlcIikuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbENhcmRcIikuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICBsZXQgbGlzdCA9IFwiXCI7XHJcbiAgbGV0IHVuZG8gPSAwO1xyXG4gIGxldCBkb25lID0gMDtcclxuXHJcbiAgQXJyYXkuZnJvbSh0b2RvcykuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcclxuICAgIHRvZG8uY29tcGxldGVkX2F0ID09PSBudWxsID8gdW5kbysrIDogZG9uZSsrO1xyXG4gICAgaWYgKFNvcnQgPT0gMSAmJiB0b2RvLmNvbXBsZXRlZF9hdCAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChTb3J0ID09IDIgJiYgdG9kby5jb21wbGV0ZWRfYXQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gYDxsaSBpZD1cIiR7dG9kby5pZH1cIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay0ke2luZGV4fVwiIGNsYXNzPVwiY2hlY2tMYWJlbFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2stJHtpbmRleH1cIiAke1xyXG4gICAgICB0b2RvLmNvbXBsZXRlZF9hdCA9PT0gbnVsbCA/IFwiXCIgOiBcImNoZWNrZWRcIlxyXG4gICAgfT5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxwPiR7dG9kby5jb250ZW50fTwvcD4gXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtYnRuIGQtbm9uZVwiPiBcclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdEJ0biBidG4tZWRpdFwiIHRpdGxlPVwi57eo6LyvXCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbEJ0biBidG4tY2xvc2VcIiB0aXRsZT1cIuWIqumZpFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpID4ke2xpc3R9YDtcclxuICB9KTtcclxuXHJcbiAgaWYgKHVuZG8gKyBkb25lID09IDApIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlcIikuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsQ2FyZFwiKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIikuaW5uZXJIVE1MID0gbGlzdDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50XCIpLmlubmVySFRNTCA9IGAke3VuZG995YCL5b6F5a6M5oiQ6aCF55uuYDtcclxuXHJcbiAgZWRpdFRvZG8oKTtcclxuICBkZWxUb2RvKCk7XHJcbiAgdG9kb1N0YXRlQ2hhbmdlKCk7XHJcbn1cclxuZnVuY3Rpb24gYWRkVG9kbygpIHtcclxuICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzLWJ1dHRvblwiKTtcclxuICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7YXBpVXJsfS90b2Rvc2AsIHtcclxuICAgICAgICB0b2RvOiB7XHJcbiAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpLnZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZW5kZXIoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGVkaXRUb2RvKCkge1xyXG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0QnRuXCIpO1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0IHBcIik7XHJcbiAgQXJyYXkuZnJvbShlZGl0QnRucykuZm9yRWFjaCgoZWRpdEJ0biwgaW5kZXgpID0+IHtcclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGkrKztcclxuICAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwi6KuL57eo6Lyv5paH5a2X5YWn5a65XCIsXHJcbiAgICAgICAgaW5wdXQ6IFwidGV4dFwiLFxyXG4gICAgICAgIGlucHV0VmFsdWU6IGxpc3RbaW5kZXhdLmlubmVySFRNTCxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgIC5wdXQoYCR7YXBpVXJsfXRvZG9zLyR7ZWRpdEJ0bi5jbG9zZXN0KFwibGlcIikuZ2V0QXR0cmlidXRlKFwiaWRcIil9YCwge1xyXG4gICAgICAgICAgICB0b2RvOiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5L+u5pS55a6M5oiQXCIsXHJcbiAgICAgICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbFRvZG8oKSB7XHJcbiAgY29uc3QgZGVsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsQnRuXCIpO1xyXG4gIEFycmF5LmZyb20oZGVsQnRucykuZm9yRWFjaCgoZGVsQnRuKSA9PiB7XHJcbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmRlbGV0ZShgJHthcGlVcmx9L3RvZG9zLyR7ZGVsQnRuLmNsb3Nlc3QoXCJsaVwiKS5nZXRBdHRyaWJ1dGUoXCJpZFwiKX1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHJlbmRlcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdG9kb1N0YXRlQ2hhbmdlKCkge1xyXG4gIGNvbnN0IGNoYW5nZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrTGFiZWxcIik7XHJcbiAgQXJyYXkuZnJvbShjaGFuZ2VzKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcclxuICAgIGNoYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBhdGNoKFxyXG4gICAgICAgICAgYCR7YXBpVXJsfS90b2Rvcy8ke2NoYW5nZS5jbG9zZXN0KFwibGlcIikuZ2V0QXR0cmlidXRlKFwiaWRcIil9L3RvZ2dsZWBcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VTb3J0KCkge1xyXG4gIGNvbnN0IHNvcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcclxuICBBcnJheS5mcm9tKHNvcnRzKS5mb3JFYWNoKChzb3J0LCBpbmRleCkgPT4ge1xyXG4gICAgc29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgc29ydHNbU29ydF0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgU29ydCA9IGluZGV4O1xyXG4gICAgICByZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckRvbmUodG9kb3MpIHtcclxuICBjb25zdCBjbGVhckRvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyRG9uZVwiKTtcclxuICBjbGVhckRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKHRvZG9zKS5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAodG9kby5jb21wbGV0ZWRfYXQgIT0gbnVsbCkge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAuZGVsZXRlKGAke2FwaVVybH0vdG9kb3MvJHt0b2RvLmlkfWApXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7fSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVuZGVyKCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gIGNvbnN0IGxvZ291dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nLW91dFwiKTtcclxuICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKGAke2FwaVVybH11c2Vycy9zaWduX291dGApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic29ydFwiKTtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiLi9sb2dpbi5odG1sXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2luZGV4LmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJnZXRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJkb2N1bWVudCIsImNvb2tpZSIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCJzaGlmdCIsImJvb3RzdHJhcCIsIlN3YWwiLCJheGlvcyIsImkiLCJhcGlVcmwiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJUb2tlbiIsIkpTT04iLCJwYXJzZSIsIlNvcnQiLCJzd2FsQ3VzdG9tU3R5bGUiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJhY2tkcm9wIiwiYnV0dG9uc1N0eWxpbmciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJkYXRhIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImxvZ291dCIsImFkZFRvZG8iLCJjaGFuZ2VTb3J0IiwicmVuZGVyIiwiZ2V0IiwidG9kb3MiLCJyZW5kZXJMaXN0IiwiY2xlYXJEb25lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibGlzdCIsInVuZG8iLCJkb25lIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsInRvZG8iLCJpbmRleCIsImNvbXBsZXRlZF9hdCIsImlkIiwiY29udGVudCIsImVkaXRUb2RvIiwiZGVsVG9kbyIsInRvZG9TdGF0ZUNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlZGl0QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlZGl0QnRuIiwiaW5wdXQiLCJpbnB1dFZhbHVlIiwicHV0IiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsImRlbEJ0bnMiLCJkZWxCdG4iLCJkZWxldGUiLCJjaGFuZ2VzIiwiY2hhbmdlIiwicGF0Y2giLCJzb3J0cyIsInNvcnQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=