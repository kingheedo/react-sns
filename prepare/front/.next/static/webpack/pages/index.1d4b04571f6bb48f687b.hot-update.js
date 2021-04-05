webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-icons */ "./node_modules/react-bootstrap-icons/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      like = _useState[0],
      setLike = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentOpen = _useState2[0],
      setCommentOpen = _useState2[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setLike(function (prev) {
      return !prev;
    });
  }, []);
  var OnToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentOpen(function (prev) {
      return !prev;
    });
  }, []);
  var onPostDelete = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
    dispatch();
  }, [id, post.User.id]);

  var renderTooltip = function renderTooltip(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], _objectSpread(_objectSpread({
      id: "button-tooltip"
    }, props), {}, {
      children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "warning",
          children: "\uC218\uC815"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 18
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "danger",
          onClick: onPostDelete,
          children: "\uC0AD\uC81C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "danger",
        children: "\uC2E0\uACE0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    style: {
      margin: '100px 0 20px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        width: '33rem'
      },
      children: [post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 36
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
        style: {
          padding: 0
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          style: {
            padding: '24px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              src: "holder.js/171x180",
              roundedCircle: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 37
            }, _this), post.User.nickname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
              postContent: post.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
          style: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            borderTop: '1px solid #f0f0f0'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            style: {
              width: "25%",
              borderRight: '1px solid #f0f0f0',
              "float": 'left',
              textAlign: 'center',
              margin: '12px 0'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
              style: {
                lineHeight: '14px',
                cursor: 'pointer',
                width: '100%',
                fontSize: "16px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["Share"], {
                style: {
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            style: {
              width: "25%",
              borderRight: '1px solid #f0f0f0',
              "float": 'left',
              textAlign: 'center',
              margin: '12px 0'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
              style: {
                lineHeight: '14px',
                cursor: 'pointer',
                width: '100%',
                fontSize: "16px"
              },
              children: like ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["HeartFill"], {
                style: {
                  width: '100%',
                  color: "#dc3545"
                },
                onClick: onToggleLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 35
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["Heart"], {
                style: {
                  width: '100%'
                },
                onClick: onToggleLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 110
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            style: {
              width: "25%",
              borderRight: '1px solid #f0f0f0',
              "float": 'left',
              textAlign: 'center',
              margin: '12px 0'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
              style: {
                lineHeight: '14px',
                cursor: 'pointer',
                width: '100%',
                fontSize: "16px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["ChatDots"], {
                style: {
                  width: '100%'
                },
                onClick: OnToggleComment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            style: {
              width: "25%",
              "float": 'left',
              textAlign: 'center',
              margin: '12px 0'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
              style: {
                lineHeight: '14px',
                cursor: 'pointer',
                width: '100%',
                fontSize: "16px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["OverlayTrigger"], {
                placement: "top",
                overlay: renderTooltip,
                trigger: "click",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["ThreeDots"], {
                  style: {
                    width: '100%'
                  },
                  children: "Hover me to see"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), commentOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        width: '33rem'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
        children: [post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
        variant: "flush",
        style: {
          marginTop: 20
        },
        children: post.Comments[0] && post.Comments.map(function (v) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: "holder.js/20x20?text=%20",
              className: "rounded mr-2",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this), v.User && v.User.userNickname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, _this), v.content]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 14
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "v8vRX1RyxPrph+DptPBlt0jrk10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2UiLCJzZXRMaWtlIiwiY29tbWVudE9wZW4iLCJzZXRDb21tZW50T3BlbiIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJPblRvZ2dsZUNvbW1lbnQiLCJvblBvc3REZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJVc2VyIiwicmVuZGVyVG9vbHRpcCIsInByb3BzIiwibWFyZ2luIiwid2lkdGgiLCJJbWFnZXMiLCJwYWRkaW5nIiwibmlja25hbWUiLCJjb250ZW50IiwibGlzdFN0eWxlIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY3Vyc29yIiwiZm9udFNpemUiLCJjb2xvciIsIkNvbW1lbnRzIiwibGVuZ3RoIiwibWFyZ2luVG9wIiwibWFwIiwidiIsInVzZXJOaWNrbmFtZSIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJzcmMiLCJkdW1teUNvbW1lbnQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsInR5cGUiLCJhZGRQb3N0U3VjY2Vzc0FjdGlvbiIsImFkZFBvc3RGYWlsdXJlQWN0aW9uIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyIiwiZmluZCIsInBvc3RJZCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxLQUFELENBRnJCO0FBQUEsTUFFbEJHLFdBRmtCO0FBQUEsTUFFTEMsY0FGSzs7QUFHekIsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSw2QkFBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQWYsbURBQUksZUFBZUosRUFBbkI7QUFBQSxHQUFOLENBQXRCO0FBQ0EsTUFBTUssUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FDNUIsWUFBTTtBQUNGWCxXQUFPLENBQUMsVUFBQ1ksSUFBRDtBQUFBLGFBQVMsQ0FBQ0EsSUFBVjtBQUFBLEtBQUQsQ0FBUDtBQUNILEdBSDJCLEVBSTVCLEVBSjRCLENBQWhDO0FBTUEsTUFBTUMsZUFBZSxHQUFHRix5REFBVyxDQUMvQixZQUFNO0FBQ0ZULGtCQUFjLENBQUMsVUFBQ1UsSUFBRDtBQUFBLGFBQVEsQ0FBQ0EsSUFBVDtBQUFBLEtBQUQsQ0FBZDtBQUNILEdBSDhCLEVBSS9CLEVBSitCLENBQW5DO0FBTUEsTUFBTUUsWUFBWSxHQUFHSCx5REFBVyxDQUM1QixVQUFDSSxDQUFELEVBQU87QUFDSEEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FSLFlBQVE7QUFFWCxHQUwyQixFQU01QixDQUFDTCxFQUFELEVBQUtOLElBQUksQ0FBQ29CLElBQUwsQ0FBVWQsRUFBZixDQU40QixDQUFoQzs7QUFRQSxNQUFNZSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSx3QkFDbEIsc0VBQUMsdURBQUQ7QUFBUyxRQUFFLEVBQUM7QUFBWixPQUFpQ0EsS0FBakM7QUFBQSxnQkFDS2hCLEVBQUUsSUFBSU4sSUFBSSxDQUFDb0IsSUFBTCxDQUFVZCxFQUFWLEtBQWlCQSxFQUF2QixnQkFFRTtBQUFBLGdDQUNFLHNFQUFDLHNEQUFEO0FBQVMsaUJBQU8sRUFBQyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVDLHNFQUFDLHNEQUFEO0FBQVEsaUJBQU8sRUFBQyxRQUFoQjtBQUF5QixpQkFBTyxFQUFFVyxZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBLHNCQUZGLGdCQVFHLHNFQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURrQjtBQUFBLEdBQXRCOztBQWNBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNNLFlBQU0sRUFBRTtBQUFULEtBQVo7QUFBQSw0QkFDSSxzRUFBQyxvREFBRDtBQUFNLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFiO0FBQUEsaUJBQ0t4QixJQUFJLENBQUN5QixNQUFMLENBQVksQ0FBWixrQkFBa0Isc0VBQUMsbURBQUQ7QUFBWSxjQUFNLEVBQUl6QixJQUFJLENBQUN5QjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHZCLGVBRUksc0VBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUNDLGlCQUFPLEVBQUM7QUFBVCxTQUFsQjtBQUFBLGdDQUNJO0FBQUssZUFBSyxFQUFFO0FBQUNBLG1CQUFPLEVBQUM7QUFBVCxXQUFaO0FBQUEsa0NBQ0ksc0VBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUEsb0NBQVksc0VBQUMscURBQUQ7QUFBTyxpQkFBRyxFQUFDLG1CQUFYO0FBQStCLDJCQUFhO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVosRUFBNEQxQixJQUFJLENBQUNvQixJQUFMLENBQVVPLFFBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHNFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLG1DQUNBLHNFQUFDLHdEQUFEO0FBQWlCLHlCQUFXLEVBQUkzQixJQUFJLENBQUM0QjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSTtBQUFJLGVBQUssRUFBRTtBQUFDTCxrQkFBTSxFQUFDLENBQVI7QUFBV0csbUJBQU8sRUFBQyxDQUFuQjtBQUFzQkcscUJBQVMsRUFBQyxNQUFoQztBQUF3Q0MscUJBQVMsRUFBRTtBQUFuRCxXQUFYO0FBQUEsa0NBQ0k7QUFBSSxpQkFBSyxFQUFFO0FBQUNOLG1CQUFLLEVBQUMsS0FBUDtBQUFhTyx5QkFBVyxFQUFFLG1CQUExQjtBQUE4Qyx1QkFBTyxNQUFyRDtBQUE0REMsdUJBQVMsRUFBRSxRQUF2RTtBQUFnRlQsb0JBQU0sRUFBQztBQUF2RixhQUFYO0FBQUEsbUNBQ0k7QUFBTSxtQkFBSyxFQUFFO0FBQUNVLDBCQUFVLEVBQUMsTUFBWjtBQUFtQkMsc0JBQU0sRUFBQyxTQUExQjtBQUFvQ1YscUJBQUssRUFBQyxNQUExQztBQUFpRFcsd0JBQVEsRUFBQztBQUExRCxlQUFiO0FBQUEscUNBQ0Esc0VBQUMsMkRBQUQ7QUFBTyxxQkFBSyxFQUFFO0FBQUNYLHVCQUFLLEVBQUM7QUFBUDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQUksaUJBQUssRUFBRTtBQUFDQSxtQkFBSyxFQUFDLEtBQVA7QUFBYU8seUJBQVcsRUFBRSxtQkFBMUI7QUFBOEMsdUJBQU8sTUFBckQ7QUFBNERDLHVCQUFTLEVBQUUsUUFBdkU7QUFBZ0ZULG9CQUFNLEVBQUM7QUFBdkYsYUFBWDtBQUFBLG1DQUNJO0FBQU0sbUJBQUssRUFBRTtBQUFDVSwwQkFBVSxFQUFDLE1BQVo7QUFBbUJDLHNCQUFNLEVBQUMsU0FBMUI7QUFBb0NWLHFCQUFLLEVBQUMsTUFBMUM7QUFBaURXLHdCQUFRLEVBQUM7QUFBMUQsZUFBYjtBQUFBLHdCQUNDakMsSUFBSSxnQkFBQyxzRUFBQywrREFBRDtBQUFXLHFCQUFLLEVBQUU7QUFBQ3NCLHVCQUFLLEVBQUMsTUFBUDtBQUFjWSx1QkFBSyxFQUFDO0FBQXBCLGlCQUFsQjtBQUFrRCx1QkFBTyxFQUFFdkI7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBRCxnQkFBNEUsc0VBQUMsMkRBQUQ7QUFBTyxxQkFBSyxFQUFFO0FBQUNXLHVCQUFLLEVBQUM7QUFBUCxpQkFBZDtBQUE4Qix1QkFBTyxFQUFFWDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBV0k7QUFBSSxpQkFBSyxFQUFFO0FBQUNXLG1CQUFLLEVBQUMsS0FBUDtBQUFhTyx5QkFBVyxFQUFFLG1CQUExQjtBQUE4Qyx1QkFBTyxNQUFyRDtBQUE0REMsdUJBQVMsRUFBRSxRQUF2RTtBQUFnRlQsb0JBQU0sRUFBQztBQUF2RixhQUFYO0FBQUEsbUNBQ0k7QUFBTSxtQkFBSyxFQUFFO0FBQUNVLDBCQUFVLEVBQUMsTUFBWjtBQUFtQkMsc0JBQU0sRUFBQyxTQUExQjtBQUFvQ1YscUJBQUssRUFBQyxNQUExQztBQUFpRFcsd0JBQVEsRUFBQztBQUExRCxlQUFiO0FBQUEscUNBQ0ksc0VBQUMsOERBQUQ7QUFBVSxxQkFBSyxFQUFFO0FBQUNYLHVCQUFLLEVBQUM7QUFBUCxpQkFBakI7QUFBaUMsdUJBQU8sRUFBRVI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKLGVBZ0JJO0FBQUksaUJBQUssRUFBRTtBQUFDUSxtQkFBSyxFQUFDLEtBQVA7QUFBYSx1QkFBTyxNQUFwQjtBQUEyQlEsdUJBQVMsRUFBRSxRQUF0QztBQUErQ1Qsb0JBQU0sRUFBQztBQUF0RCxhQUFYO0FBQUEsbUNBQ0k7QUFBTSxtQkFBSyxFQUFFO0FBQUNVLDBCQUFVLEVBQUMsTUFBWjtBQUFtQkMsc0JBQU0sRUFBQyxTQUExQjtBQUFvQ1YscUJBQUssRUFBQyxNQUExQztBQUFpRFcsd0JBQVEsRUFBQztBQUExRCxlQUFiO0FBQUEscUNBQ0ksc0VBQUMsOERBQUQ7QUFDSSx5QkFBUyxFQUFDLEtBRGQ7QUFFSSx1QkFBTyxFQUFFZCxhQUZiO0FBR0ksdUJBQU8sRUFBQyxPQUhaO0FBQUEsdUNBS0ksc0VBQUMsK0RBQUQ7QUFBVyx1QkFBSyxFQUFFO0FBQUNHLHlCQUFLLEVBQUM7QUFBUCxtQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQXlDS3BCLFdBQVcsaUJBQ1g7QUFBSyxXQUFLLEVBQUU7QUFBQ29CLGFBQUssRUFBQztBQUFQLE9BQVo7QUFBQSw4QkFDRyxzRUFBQyxvREFBRDtBQUFhLFlBQUksRUFBRXhCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxlQUVHO0FBQUEsbUJBQU9BLElBQUksQ0FBQ3FDLFFBQUwsQ0FBY0MsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkgsZUFHRyxzRUFBQyx5REFBRDtBQUFXLGVBQU8sRUFBQyxPQUFuQjtBQUEyQixhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRTtBQUFaLFNBQWxDO0FBQUEsa0JBQ0t2QyxJQUFJLENBQUNxQyxRQUFMLENBQWMsQ0FBZCxLQUFvQnJDLElBQUksQ0FBQ3FDLFFBQUwsQ0FBY0csR0FBZCxDQUFrQixVQUFDQyxDQUFEO0FBQUEsOEJBQ25DLHNFQUFDLHlEQUFELENBQVcsSUFBWDtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBQywwQkFBVDtBQUFvQyx1QkFBUyxFQUFDLGNBQTlDO0FBQTZELGlCQUFHLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVLQSxDQUFDLENBQUNyQixJQUFGLElBQVVxQixDQUFDLENBQUNyQixJQUFGLENBQU9zQixZQUZ0QixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosRUFJS0QsQ0FBQyxDQUFDYixPQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUM7QUFBQSxTQUFsQjtBQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOERILENBckdEOztHQUFNN0IsUTtVQUdTUSx1RCxFQUNNSyx1RDs7O0tBSmZiLFE7QUF1R1NBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIQTtBQUNBO0FBRU8sSUFBTTRDLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFDLEVBRGM7QUFFeEJDLGdCQUFjLEVBQUcsS0FGTztBQUd4QkMsYUFBVyxFQUFFLEtBSFc7QUFJeEJDLGNBQVksRUFBRSxJQUpVO0FBS3hCQyxtQkFBaUIsRUFBRyxLQUxJO0FBTXhCQyxnQkFBYyxFQUFFLEtBTlE7QUFPeEJDLGlCQUFlLEVBQUUsSUFQTztBQVF4QkMsbUJBQWlCLEVBQUcsS0FSSTtBQVN4QkMsZ0JBQWMsRUFBRSxLQVRRO0FBVXhCQyxpQkFBZSxFQUFFO0FBVk8sQ0FBckI7O0FBY1AsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDekJqRCxNQUFFLEVBQUVpRCxJQUFJLENBQUNqRCxFQURnQjtBQUV6QnNCLFdBQU8sRUFBRTJCLElBQUksQ0FBQzNCLE9BRlc7QUFHekJSLFFBQUksRUFBQztBQUNEZCxRQUFFLEVBQUMsQ0FERjtBQUVEcUIsY0FBUSxFQUFDO0FBRlIsS0FIb0I7QUFPekJGLFVBQU0sRUFBRSxDQUFDO0FBQUMrQixTQUFHLEVBQUM7QUFBTCxLQUFELENBUGlCO0FBUXpCbkIsWUFBUSxFQUFFLENBQUMsT0FBRDtBQVJlLEdBQVg7QUFBQSxDQUFsQjs7QUFVQSxJQUFNb0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0YsSUFBRDtBQUFBO0FBQ2pCakQsTUFBRSxFQUFFb0QsOENBQU8sQ0FBQ0MsUUFBUjtBQURhLEtBRWRKLElBRmM7QUFBQSxDQUFyQjs7QUFLTyxJQUFNSyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNkLElBQUQ7QUFBQSxTQUFXO0FBQzNDZSxRQUFJLEVBQUVWLGdCQURxQztBQUUzQ0wsUUFBSSxFQUFKQTtBQUYyQyxHQUFYO0FBQUEsQ0FBN0I7QUFJQSxJQUFNZ0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDaEIsSUFBRDtBQUFBLFNBQVc7QUFDM0NlLFFBQUksRUFBRVQsZ0JBRHFDO0FBRTNDTixRQUFJLEVBQUpBO0FBRjJDLEdBQVg7QUFBQSxDQUE3QjtBQUlBLElBQU1pQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNqQixJQUFEO0FBQUEsU0FBVztBQUMzQ2UsUUFBSSxFQUFFUjtBQURxQyxHQUFYO0FBQUEsQ0FBN0I7QUFJQSxJQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDbEIsSUFBRDtBQUFBLFNBQVc7QUFDakNlLFFBQUksRUFBRVAsbUJBRDJCO0FBRWpDUixRQUFJLEVBQUpBO0FBRmlDLEdBQVg7QUFBQSxDQUFuQjs7QUFRUCxJQUFNbUIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ2xFLEtBQWlDLHVFQUF4Qm1DLFlBQXdCO0FBQUEsTUFBVmdDLE1BQVU7QUFDOUMsU0FBT0MscURBQU8sQ0FBQ3BFLEtBQUQsRUFBTyxVQUFDcUUsS0FBRCxFQUFXO0FBQzVCLFlBQVFGLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFdBQUtWLGdCQUFMO0FBQ0lpQixhQUFLLENBQUNoQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0FnQyxhQUFLLENBQUMvQixXQUFOLEdBQW9CLEtBQXBCO0FBQ0ErQixhQUFLLENBQUM5QixZQUFOLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0osV0FBS2MsZ0JBQUw7QUFDSWdCLGFBQUssQ0FBQ2hDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQWdDLGFBQUssQ0FBQy9CLFdBQU4sR0FBb0IsSUFBcEI7QUFDQStCLGFBQUssQ0FBQ2pDLFNBQU4sQ0FBZ0JrQyxPQUFoQixDQUF3QnhCLFNBQVMsQ0FBQ3FCLE1BQU0sQ0FBQ3BCLElBQVIsQ0FBakM7QUFDQTs7QUFDSixXQUFLTyxnQkFBTDtBQUNJZSxhQUFLLENBQUNoQyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FnQyxhQUFLLENBQUMvQixXQUFOLEdBQW9CLEtBQXBCO0FBQ0ErQixhQUFLLENBQUM5QixZQUFOLEdBQXFCNEIsTUFBTSxDQUFDSSxHQUE1QjtBQUNBOztBQUNKLFdBQUtoQixtQkFBTDtBQUNJYyxhQUFLLENBQUM3QixpQkFBTixHQUEwQixJQUExQjtBQUNBNkIsYUFBSyxDQUFDNUIsY0FBTixHQUF1QixLQUF2QjtBQUNBNEIsYUFBSyxDQUFDM0IsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNKLFdBQUtjLG1CQUFMO0FBQXlCO0FBQ3JCLGNBQU1oRSxJQUFJLEdBQUc2RSxLQUFLLENBQUNqQyxTQUFOLENBQWdCb0MsSUFBaEIsQ0FBcUIsVUFBQ3ZDLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDbkMsRUFBRixLQUFTcUUsTUFBTSxDQUFDcEIsSUFBUCxDQUFZMEIsTUFBNUI7QUFBQSxXQUFyQixDQUFiO0FBQ0FqRixjQUFJLENBQUNxQyxRQUFMLENBQWN5QyxPQUFkLENBQXNCckIsWUFBWSxDQUFDa0IsTUFBTSxDQUFDcEIsSUFBUixDQUFsQztBQUNBc0IsZUFBSyxDQUFDN0IsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTZCLGVBQUssQ0FBQzVCLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTtBQUNDOztBQUNMLFdBQUtnQixtQkFBTDtBQUNJWSxhQUFLLENBQUM3QixpQkFBTixHQUEwQixLQUExQjtBQUNBNkIsYUFBSyxDQUFDM0IsZUFBTixHQUF3QnlCLE1BQU0sQ0FBQ0ksR0FBL0I7QUFDQTs7QUFFQSxXQUFLYixtQkFBTDtBQUNBVyxhQUFLLENBQUMxQixpQkFBTixHQUEwQixJQUExQjtBQUNBMEIsYUFBSyxDQUFDekIsY0FBTixHQUF1QixLQUF2QjtBQUNBeUIsYUFBSyxDQUFDeEIsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNKLFdBQUtjLG1CQUFMO0FBQ0lVLGFBQUssQ0FBQzFCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0EwQixhQUFLLENBQUN6QixjQUFOLEdBQXVCLElBQXZCO0FBQ0F5QixhQUFLLENBQUNqQyxTQUFOLEdBQWtCaUMsS0FBSyxDQUFDakMsU0FBTixDQUFnQnNDLE1BQWhCLENBQXVCLFVBQUN6QyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ25DLEVBQUYsS0FBU3FFLE1BQU0sQ0FBQ3BCLElBQXZCO0FBQUEsU0FBdkIsQ0FBbEI7QUFDQTs7QUFDSixXQUFLYSxtQkFBTDtBQUNJUyxhQUFLLENBQUMxQixpQkFBTixHQUEwQixLQUExQjtBQUNBMEIsYUFBSyxDQUFDeEIsZUFBTixHQUF3QnNCLE1BQU0sQ0FBQ0ksR0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBaERSO0FBa0RILEdBbkRhLENBQWQ7QUFvREgsQ0FyREQ7O0FBdURlTCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDRiMDQ1NzFmNmJiNDhmNjg3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NhcmQsQnV0dG9uLEltYWdlLExpc3RHcm91cCwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHtTaGFyZSxIZWFydCxIZWFydEZpbGwsQ2hhdERvdHMsVGhyZWVEb3RzfSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuaW1wb3J0IHsgcmVtb3ZlUG9zdE9mTWVBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSdcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCdcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJ1xyXG5cclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xyXG4gICAgY29uc3QgW2xpa2UsIHNldExpa2VdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY29tbWVudE9wZW4sIHNldENvbW1lbnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lPy5pZClcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgc2V0TGlrZSgocHJldik9PiAhcHJldilcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtdLFxyXG4gICAgKVxyXG4gICAgY29uc3QgT25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb21tZW50T3BlbigocHJldik9PiFwcmV2KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW10sXHJcbiAgICApXHJcbiAgICBjb25zdCBvblBvc3REZWxldGUgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgZGlzcGF0Y2goKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2lkLCBwb3N0LlVzZXIuaWRdLFxyXG4gICAgKVxyXG4gICAgY29uc3QgcmVuZGVyVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxUb29sdGlwIGlkPVwiYnV0dG9uLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCBcclxuICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgdmFyaWFudD1cIndhcm5pbmdcIj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9e29uUG9zdERlbGV0ZX0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCI+7Iug6rOgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMTAwcHggMCAyMHB4J319PlxyXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzMzcmVtJ319PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcyA9IHtwb3N0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3twYWRkaW5nOjB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMjRweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+PEltYWdlIHNyYz1cImhvbGRlci5qcy8xNzF4MTgwXCIgcm91bmRlZENpcmNsZSAvPntwb3N0LlVzZXIubmlja25hbWV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmRDb250ZW50IHBvc3RDb250ZW50ID0ge3Bvc3QuY29udGVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW46MCwgcGFkZGluZzowLCBsaXN0U3R5bGU6J25vbmUnLCBib3JkZXJUb3A6ICcxcHggc29saWQgI2YwZjBmMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7d2lkdGg6XCIyNSVcIixib3JkZXJSaWdodDogJzFweCBzb2xpZCAjZjBmMGYwJyxmbG9hdDogJ2xlZnQnLHRleHRBbGlnbjogJ2NlbnRlcicsbWFyZ2luOicxMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2xpbmVIZWlnaHQ6JzE0cHgnLGN1cnNvcjoncG9pbnRlcicsd2lkdGg6JzEwMCUnLGZvbnRTaXplOlwiMTZweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hhcmUgc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e3dpZHRoOlwiMjUlXCIsYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI2YwZjBmMCcsZmxvYXQ6ICdsZWZ0Jyx0ZXh0QWxpZ246ICdjZW50ZXInLG1hcmdpbjonMTJweCAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tsaW5lSGVpZ2h0OicxNHB4JyxjdXJzb3I6J3BvaW50ZXInLHdpZHRoOicxMDAlJyxmb250U2l6ZTpcIjE2cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpa2U/PEhlYXJ0RmlsbCBzdHlsZT17e3dpZHRoOicxMDAlJyxjb2xvcjpcIiNkYzM1NDVcIn19IG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPjo8SGVhcnQgc3R5bGU9e3t3aWR0aDonMTAwJSd9fSBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e3dpZHRoOlwiMjUlXCIsYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI2YwZjBmMCcsZmxvYXQ6ICdsZWZ0Jyx0ZXh0QWxpZ246ICdjZW50ZXInLG1hcmdpbjonMTJweCAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tsaW5lSGVpZ2h0OicxNHB4JyxjdXJzb3I6J3BvaW50ZXInLHdpZHRoOicxMDAlJyxmb250U2l6ZTpcIjE2cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0RG90cyBzdHlsZT17e3dpZHRoOicxMDAlJ319IG9uQ2xpY2s9e09uVG9nZ2xlQ29tbWVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7d2lkdGg6XCIyNSVcIixmbG9hdDogJ2xlZnQnLHRleHRBbGlnbjogJ2NlbnRlcicsbWFyZ2luOicxMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2xpbmVIZWlnaHQ6JzE0cHgnLGN1cnNvcjoncG9pbnRlcicsd2lkdGg6JzEwMCUnLGZvbnRTaXplOlwiMTZweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e3JlbmRlclRvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9J2NsaWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRocmVlRG90cyBzdHlsZT17e3dpZHRoOicxMDAlJ319PkhvdmVyIG1lIHRvIHNlZTwvVGhyZWVEb3RzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50T3BlbiAmJlxyXG4gICAgICAgICAgICAoPGRpdiBzdHlsZT17e3dpZHRoOiczM3JlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgdmFyaWFudD1cImZsdXNoXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3QuQ29tbWVudHNbMF0gJiYgcG9zdC5Db21tZW50cy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJob2xkZXIuanMvMjB4MjA/dGV4dD0lMjBcIiBjbGFzc05hbWU9XCJyb3VuZGVkIG1yLTJcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3YuVXNlciAmJiB2LlVzZXIudXNlck5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZFxyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6W10sXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGxcclxuXHJcbn1cclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifsgqzsmqnsnpAyJ1xyXG4gICAgfSxcclxuICAgIEltYWdlczogW3tzcmM6XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzAxLzI0LzIwLzQ3L21vdW50YWlucy01OTQ2NTAwXzEyODAuanBnXCJ9LF0sXHJcbiAgICBDb21tZW50czogWyfrjJPquIDthYzsiqTtirgnXSxcclxufSlcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgLi4uZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSAgaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhKSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==