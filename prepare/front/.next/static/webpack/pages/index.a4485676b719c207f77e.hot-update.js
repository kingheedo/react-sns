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
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_REQUEST"]
    });
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
          lineNumber: 44,
          columnNumber: 18
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "danger",
          onClick: onPostDelete,
          children: "\uC0AD\uC81C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, _this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "danger",
        children: "\uC2E0\uACE0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
        lineNumber: 56,
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
              lineNumber: 59,
              columnNumber: 37
            }, _this), post.User.nickname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
              postContent: post.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
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
                lineNumber: 67,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
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
                lineNumber: 72,
                columnNumber: 35
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["Heart"], {
                style: {
                  width: '100%'
                },
                onClick: onToggleLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 110
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
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
                lineNumber: 77,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
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
                  lineNumber: 87,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this), commentOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        width: '33rem'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
        children: [post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
              lineNumber: 102,
              columnNumber: 29
            }, _this), v.User && v.User.userNickname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, _this), v.content]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 14
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2UiLCJzZXRMaWtlIiwiY29tbWVudE9wZW4iLCJzZXRDb21tZW50T3BlbiIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJPblRvZ2dsZUNvbW1lbnQiLCJvblBvc3REZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlVzZXIiLCJyZW5kZXJUb29sdGlwIiwicHJvcHMiLCJtYXJnaW4iLCJ3aWR0aCIsIkltYWdlcyIsInBhZGRpbmciLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJsaXN0U3R5bGUiLCJib3JkZXJUb3AiLCJib3JkZXJSaWdodCIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJjdXJzb3IiLCJmb250U2l6ZSIsImNvbG9yIiwiQ29tbWVudHMiLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJtYXAiLCJ2IiwidXNlck5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUNsQkMsSUFEa0I7QUFBQSxNQUNaQyxPQURZOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEtBQUQsQ0FGckI7QUFBQSxNQUVsQkcsV0FGa0I7QUFBQSxNQUVMQyxjQUZLOztBQUd6QixNQUFNQyxFQUFFLEdBQUdDLCtE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QUNyQixJQUFGLENBQU9zQixZQUZ0QixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosRUFJS0QsQ0FBQyxDQUFDYixPQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUM7QUFBQSxTQUFsQjtBQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOERILENBdkdEOztHQUFNL0IsUTtVQUdTUSx1RCxFQUNNSyx1RDs7O0tBSmZiLFE7QUF5R1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0NDg1Njc2YjcxOWMyMDdmNzdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q2FyZCxCdXR0b24sSW1hZ2UsTGlzdEdyb3VwLCBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQge1NoYXJlLEhlYXJ0LEhlYXJ0RmlsbCxDaGF0RG90cyxUaHJlZURvdHN9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24sIFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5pbXBvcnQgeyByZW1vdmVQb3N0T2ZNZUFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJ1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50J1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnXHJcblxyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcbiAgICBjb25zdCBbbGlrZSwgc2V0TGlrZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjb21tZW50T3Blbiwgc2V0Q29tbWVudE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWU/LmlkKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaWtlKChwcmV2KT0+ICFwcmV2KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW10sXHJcbiAgICApXHJcbiAgICBjb25zdCBPblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbW1lbnRPcGVuKChwcmV2KT0+IXByZXYpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgIClcclxuICAgIGNvbnN0IG9uUG9zdERlbGV0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNUXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbaWQsIHBvc3QuVXNlci5pZF0sXHJcbiAgICApXHJcbiAgICBjb25zdCByZW5kZXJUb29sdGlwID0gKHByb3BzKSA9PiAoXHJcbiAgICAgICAgPFRvb2x0aXAgaWQ9XCJidXR0b24tdG9vbHRpcFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkIFxyXG4gICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICA8QnV0dG9uICB2YXJpYW50PVwid2FybmluZ1wiPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17b25Qb3N0RGVsZXRlfT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIj7si6Dqs6A8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcxMDBweCAwIDIwcHgnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMzNyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzID0ge3Bvc3QuSW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17e3BhZGRpbmc6MH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOicyNHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT48SW1hZ2Ugc3JjPVwiaG9sZGVyLmpzLzE3MXgxODBcIiByb3VuZGVkQ2lyY2xlIC8+e3Bvc3QuVXNlci5uaWNrbmFtZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZENvbnRlbnQgcG9zdENvbnRlbnQgPSB7cG9zdC5jb250ZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbjowLCBwYWRkaW5nOjAsIGxpc3RTdHlsZTonbm9uZScsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZjBmMGYwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3t3aWR0aDpcIjI1JVwiLGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICNmMGYwZjAnLGZsb2F0OiAnbGVmdCcsdGV4dEFsaWduOiAnY2VudGVyJyxtYXJnaW46JzEycHggMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bGluZUhlaWdodDonMTRweCcsY3Vyc29yOidwb2ludGVyJyx3aWR0aDonMTAwJScsZm9udFNpemU6XCIxNnB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7d2lkdGg6XCIyNSVcIixib3JkZXJSaWdodDogJzFweCBzb2xpZCAjZjBmMGYwJyxmbG9hdDogJ2xlZnQnLHRleHRBbGlnbjogJ2NlbnRlcicsbWFyZ2luOicxMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2xpbmVIZWlnaHQ6JzE0cHgnLGN1cnNvcjoncG9pbnRlcicsd2lkdGg6JzEwMCUnLGZvbnRTaXplOlwiMTZweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlrZT88SGVhcnRGaWxsIHN0eWxlPXt7d2lkdGg6JzEwMCUnLGNvbG9yOlwiI2RjMzU0NVwifX0gb25DbGljaz17b25Ub2dnbGVMaWtlfS8+OjxIZWFydCBzdHlsZT17e3dpZHRoOicxMDAlJ319IG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7d2lkdGg6XCIyNSVcIixib3JkZXJSaWdodDogJzFweCBzb2xpZCAjZjBmMGYwJyxmbG9hdDogJ2xlZnQnLHRleHRBbGlnbjogJ2NlbnRlcicsbWFyZ2luOicxMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2xpbmVIZWlnaHQ6JzE0cHgnLGN1cnNvcjoncG9pbnRlcicsd2lkdGg6JzEwMCUnLGZvbnRTaXplOlwiMTZweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXREb3RzIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0gb25DbGljaz17T25Ub2dnbGVDb21tZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3t3aWR0aDpcIjI1JVwiLGZsb2F0OiAnbGVmdCcsdGV4dEFsaWduOiAnY2VudGVyJyxtYXJnaW46JzEycHggMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bGluZUhlaWdodDonMTRweCcsY3Vyc29yOidwb2ludGVyJyx3aWR0aDonMTAwJScsZm9udFNpemU6XCIxNnB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17cmVuZGVyVG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj0nY2xpY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhyZWVEb3RzIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+SG92ZXIgbWUgdG8gc2VlPC9UaHJlZURvdHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRPcGVuICYmXHJcbiAgICAgICAgICAgICg8ZGl2IHN0eWxlPXt7d2lkdGg6JzMzcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIiBzdHlsZT17e21hcmdpblRvcDogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5Db21tZW50c1swXSAmJiBwb3N0LkNvbW1lbnRzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImhvbGRlci5qcy8yMHgyMD90ZXh0PSUyMFwiIGNsYXNzTmFtZT1cInJvdW5kZWQgbXItMlwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5Vc2VyICYmIHYuVXNlci51c2VyTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3YuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=