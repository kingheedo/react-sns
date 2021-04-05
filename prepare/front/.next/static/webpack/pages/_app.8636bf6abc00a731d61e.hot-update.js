webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPostRequestAction, addPostSuccessAction, addPostFailureAction, addComment, removePostRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostSuccessAction", function() { return addPostSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostFailureAction", function() { return addPostFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePostRequestAction", function() { return removePostRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: '사용자2'
    },
    Images: [{
      src: "https://cdn.pixabay.com/photo/2021/01/24/20/47/mountains-5946500_1280.jpg"
    }],
    Comments: ['댓글테스트']
  };
};

var dummyComment = function dummyComment(data) {
  return _objectSpread({
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate()
  }, data);
};

var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var addPostRequestAction = function addPostRequestAction(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addPostSuccessAction = function addPostSuccessAction(data) {
  return {
    type: ADD_POST_SUCCESS,
    data: data
  };
};
var addPostFailureAction = function addPostFailureAction(data) {
  return {
    type: ADD_POST_FAILURE
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};
var removePostRequestAction = function removePostRequestAction(data) {
  return {
    type: REMOVE_POST_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.err;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
          post.Comments.unshift(dummyComment(action.data));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.err;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return (v.User && v.User.id) !== action.data;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.err;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, REMOVE_POST_OF_ME, loginRequestAction, loginSuccessAction, loginFailureAction, removePostOfMeAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePostOfMeAction", function() { return removePostOfMeAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  me: null
};

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '닉네임',
    id: 1,
    Posts: [{
      UserId: 1,
      id: 1
    }],
    Followings: [{
      nickname: '부기'
    }, {
      nickname: '부기2'
    }, {
      nickname: '부기3'
    }],
    Followers: [{
      nickname: 'king'
    }]
  });
};

var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var loginSuccessAction = function loginSuccessAction(data) {
  return {
    type: LOG_IN_SUCCESS,
    data: data
  };
};
var loginFailureAction = function loginFailureAction(data) {
  return {
    type: LOG_IN_FAILURE,
    data: data
  };
};
var removePostOfMeAction = function removePostOfMeAction(data) {
  return {
    type: REMOVE_POST_OF_ME,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;

      case LOG_IN_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return (v.UserId && v.UserId) !== action.data;
        });
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiaWQiLCJjb250ZW50IiwiVXNlciIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsInR5cGUiLCJhZGRQb3N0U3VjY2Vzc0FjdGlvbiIsImFkZFBvc3RGYWlsdXJlQWN0aW9uIiwiYWRkQ29tbWVudCIsInJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVyciIsInBvc3QiLCJmaW5kIiwidiIsInBvc3RJZCIsImZpbHRlciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJtZSIsImR1bW15VXNlciIsIlBvc3RzIiwiVXNlcklkIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9naW5TdWNjZXNzQWN0aW9uIiwibG9naW5GYWlsdXJlQWN0aW9uIiwicmVtb3ZlUG9zdE9mTWVBY3Rpb24iLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RXJyb3IiLCJlcnJvciIsImxvZ091dERvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBQyxFQURjO0FBRXhCQyxnQkFBYyxFQUFHLEtBRk87QUFHeEJDLGFBQVcsRUFBRSxLQUhXO0FBSXhCQyxjQUFZLEVBQUUsSUFKVTtBQUt4QkMsbUJBQWlCLEVBQUcsS0FMSTtBQU14QkMsZ0JBQWMsRUFBRSxLQU5RO0FBT3hCQyxpQkFBZSxFQUFFLElBUE87QUFReEJDLG1CQUFpQixFQUFHLEtBUkk7QUFTeEJDLGdCQUFjLEVBQUUsS0FUUTtBQVV4QkMsaUJBQWUsRUFBRTtBQVZPLENBQXJCOztBQWNQLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQ3pCQyxNQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFEZ0I7QUFFekJDLFdBQU8sRUFBRUYsSUFBSSxDQUFDRSxPQUZXO0FBR3pCQyxRQUFJLEVBQUM7QUFDREYsUUFBRSxFQUFDLENBREY7QUFFREcsY0FBUSxFQUFDO0FBRlIsS0FIb0I7QUFPekJDLFVBQU0sRUFBRSxDQUFDO0FBQUNDLFNBQUcsRUFBQztBQUFMLEtBQUQsQ0FQaUI7QUFRekJDLFlBQVEsRUFBRSxDQUFDLE9BQUQ7QUFSZSxHQUFYO0FBQUEsQ0FBbEI7O0FBVUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlB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SyxDQUFDNEIsYUFBTixHQUFzQixLQUF0QjtBQUNBNUIsYUFBSyxDQUFDNkIsV0FBTixHQUFvQi9CLE1BQU0sQ0FBQ2dDLEtBQTNCO0FBQ0E7O0FBRUEsV0FBS1YsZUFBTDtBQUNBcEIsYUFBSyxDQUFDNEIsYUFBTixHQUFzQixJQUF0QjtBQUNBNUIsYUFBSyxDQUFDNkIsV0FBTixHQUFvQixJQUFwQjtBQUNBN0IsYUFBSyxDQUFDK0IsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUVBLFdBQUtWLGVBQUw7QUFDQXJCLGFBQUssQ0FBQzRCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQTVCLGFBQUssQ0FBQytCLFVBQU4sR0FBbUIsSUFBbkI7QUFDQS9CLGFBQUssQ0FBQ1csRUFBTixHQUFXLElBQVg7QUFDQTs7QUFFQSxXQUFLVyxlQUFMO0FBQ0F0QixhQUFLLENBQUM0QixhQUFOLEdBQXNCLEtBQXRCO0FBQ0E1QixhQUFLLENBQUM2QixXQUFOLEdBQW9CL0IsTUFBTSxDQUFDZ0MsS0FBM0I7QUFDQTs7QUFFQSxXQUFLUCxpQkFBTDtBQUNJdkIsYUFBSyxDQUFDVyxFQUFOLENBQVNFLEtBQVQsR0FBaUJiLEtBQUssQ0FBQ1csRUFBTixDQUFTRSxLQUFULENBQWVOLE1BQWYsQ0FBc0IsVUFBQ0YsQ0FBRDtBQUFBLGlCQUFPLENBQUNBLENBQUMsQ0FBQ1MsTUFBRixJQUFZVCxDQUFDLENBQUNTLE1BQWYsTUFBMkJoQixNQUFNLENBQUM1QixJQUF6QztBQUFBLFNBQXRCLENBQWpCO0FBQ0o7O0FBRUE7QUFBUztBQXZDYjtBQTBDSCxHQTNDVyxDQUFkO0FBNENELENBN0NEOztBQThDZTBCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODYzNmJmNmFiYzAwYTczMWQ2MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czpbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbFxyXG5cclxufVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yCrOyaqeyekDInXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbe3NyYzpcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjEvMDEvMjQvMjAvNDcvbW91bnRhaW5zLTU5NDY1MDBfMTI4MC5qcGdcIn0sXSxcclxuICAgIENvbW1lbnRzOiBbJ+uMk+q4gO2FjOyKpO2KuCddLFxyXG59KVxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAuLi5kYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBkYXRhXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0RmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSAgaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhKSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gKHYuVXNlciAmJiB2LlVzZXIuaWQpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG59XHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lOifri4nrhKTsnoQnLFxyXG4gICAgaWQ6MSxcclxuICAgIFBvc3RzOlt7VXNlcklkOjEsaWQ6IDF9XSxcclxuICAgIEZvbGxvd2luZ3M6W3tuaWNrbmFtZTon67aA6riwJ30se25pY2tuYW1lOifrtoDquLAyJ30se25pY2tuYW1lOifrtoDquLAzJ31dLFxyXG4gICAgRm9sbG93ZXJzOlt7bmlja25hbWU6ICdraW5nJ31dXHJcblxyXG59KVxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgZGF0YSxcclxufSkgXHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgZGF0YSxcclxufSkgXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdE9mTWVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgZGF0YSxcclxufSkgXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gKHYuVXNlcklkICYmIHYuVXNlcklkKSAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==