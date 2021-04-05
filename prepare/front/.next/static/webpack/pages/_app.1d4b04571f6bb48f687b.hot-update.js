webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPostRequestAction, addPostSuccessAction, addPostFailureAction, addComment, default */
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
          return v.id !== action.data;
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiaWQiLCJjb250ZW50IiwiVXNlciIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsInR5cGUiLCJhZGRQb3N0U3VjY2Vzc0FjdGlvbiIsImFkZFBvc3RGYWlsdXJlQWN0aW9uIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnIiLCJwb3N0IiwiZmluZCIsInYiLCJwb3N0SWQiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFDLEVBRGM7QUFFeEJDLGdCQUFjLEVBQUcsS0FGTztBQUd4QkMsYUFBVyxFQUFFLEtBSFc7QUFJeEJDLGNBQVks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QUNoQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0FnQyxhQUFLLENBQUN4QyxTQUFOLEdBQWtCd0MsS0FBSyxDQUFDeEMsU0FBTixDQUFnQitDLE1BQWhCLENBQXVCLFVBQUNGLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDakMsRUFBRixLQUFTMEIsTUFBTSxDQUFDM0IsSUFBdkI7QUFBQSxTQUF2QixDQUFsQjtBQUNBOztBQUNKLFdBQUttQixtQkFBTDtBQUNJVSxhQUFLLENBQUNqQyxpQkFBTixHQUEwQixLQUExQjtBQUNBaUMsYUFBSyxDQUFDL0IsZUFBTixHQUF3QjZCLE1BQU0sQ0FBQ0ksR0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBaERSO0FBa0RILEdBbkRhLENBQWQ7QUFvREgsQ0FyREQ7O0FBdURlTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFkNGIwNDU3MWY2YmI0OGY2ODdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6W10sXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGxcclxuXHJcbn1cclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifsgqzsmqnsnpAyJ1xyXG4gICAgfSxcclxuICAgIEltYWdlczogW3tzcmM6XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzAxLzI0LzIwLzQ3L21vdW50YWlucy01OTQ2NTAwXzEyODAuanBnXCJ9LF0sXHJcbiAgICBDb21tZW50czogWyfrjJPquIDthYzsiqTtirgnXSxcclxufSlcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgLi4uZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSAgaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhKSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==