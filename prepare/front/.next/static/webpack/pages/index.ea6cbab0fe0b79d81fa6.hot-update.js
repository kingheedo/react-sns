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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_REQUEST"],
      data: post.id
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
          lineNumber: 45,
          columnNumber: 18
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "danger",
          onClick: onPostDelete,
          children: "\uC0AD\uC81C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, _this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "danger",
        children: "\uC2E0\uACE0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
        lineNumber: 57,
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
              lineNumber: 60,
              columnNumber: 37
            }, _this), post.User.nickname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
              postContent: post.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
                lineNumber: 68,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
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
                lineNumber: 73,
                columnNumber: 35
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["Heart"], {
                style: {
                  width: '100%'
                },
                onClick: onToggleLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 110
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
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
                lineNumber: 78,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
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
                  lineNumber: 88,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this), commentOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        width: '33rem'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
        children: [post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
              lineNumber: 103,
              columnNumber: 29
            }, _this), v.User && v.User.userNickname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, _this), v.content]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 14
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2UiLCJzZXRMaWtlIiwiY29tbWVudE9wZW4iLCJzZXRDb21tZW50T3BlbiIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJPblRvZ2dsZUNvbW1lbnQiLCJvblBvc3REZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJVc2VyIiwicmVuZGVyVG9vbHRpcCIsInByb3BzIiwibWFyZ2luIiwid2lkdGgiLCJJbWFnZXMiLCJwYWRkaW5nIiwibmlja25hbWUiLCJjb250ZW50IiwibGlzdFN0eWxlIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY3Vyc29yIiwiZm9udFNpemUiLCJjb2xvciIsIkNvbW1lbnRzIiwibGVuZ3RoIiwibWFyZ2luVG9wIiwibWFwIiwidiIsInVzZXJOaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxLQUFELENBRnJCO0FBQUEsTUFFbEJHLFdBRmtCO0FBQUEsTUFFTEMsY0FGSzs7QUFHekIsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSw2QkFBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQWYsbURBQUksZUFBZUosRUFBbkI7QUFBQSxHQUFOLENBQXRCO0FBQ0EsTUFBTUssUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FDNUIsWUFBTTtBQUNGWCxXQUFPLENBQUMsVUFBQ1ksSUFBRDtBQUFBLGFBQVMsQ0FBQ0EsSUFBVjtBQUFBLEtBQUQsQ0FBUDtBQUNILEdBSDJCLEVBSTVCLEVBSjRCLENBQWhDO0FBTUEsTUFBTUMsZUFBZSxHQUFHRix5REFBVyxDQUMvQixZQUFNO0FBQ0ZULGtCQUFjLENBQUMsVUFBQ1UsSUFBRDtBQUFBLGFBQVEsQ0FBQ0EsSUFBVDtBQUFBLEtBQUQsQ0FBZDtBQUNILEdBSDhCLEVBSS9CLEVBSitCLENBQW5DO0FBTUEsTUFBTUUsWUFBWSxHQUFHSCx5REFBVyxDQUM1QixVQUFDSSxDQUFELEVBQU87QUFDSEEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FSLFlBQVEsQ0FBQztBQUNMUyxVQUFJLEVBQUVDLGtFQUREO0FBRUxDLFVBQUksRUFBRXRCLElBQUksQ0FBQ007QUFGTixLQUFELENBQVI7QUFLSCxHQVIyQixFQVM1QixDQUFDQSxFQUFELEVBQUtOLElBQUksQ0FBQ3VCLElBQUwsQ0FBVWpCLEVBQWYsQ0FUNEIsQ0FBaEM7O0FBV0EsTUFBTWtCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLHdCQUNsQixzRUFBQyx1REFBRDtBQUFTLFFBQUUsRUFBQztBQUFaLE9BQWlDQSxLQUFqQztBQUFBLGdCQUNLbkIsRUFBRSxJQUFJTixJQUFJLENBQUN1QixJQUFMLENBQVVqQixFQUFWLEtBQWlCQSxFQUF2QixnQkFFRTtBQUFBLGdDQUNFLHNFQUFDLHNEQUFEO0FBQVMsaUJBQU8sRUFBQyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVDLHNFQUFDLHNEQUFEO0FBQVEsaUJBQU8sRUFBQyxRQUFoQjtBQUF5QixpQkFBTyxFQUFFVyxZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBLHNCQUZGLGdCQVFHLHNFQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURrQjtBQUFBLEdBQXRCOztBQWNBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNTLFlBQU0sRUFBRTtBQUFULEtBQVo7QUFBQSw0QkFDSSxzRUFBQyxvREFBRDtBQUFNLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFiO0FBQUEsaUJBQ0szQixJQUFJLENBQUM0QixNQUFMLENBQVksQ0FBWixrQkFBa0Isc0VBQUMsbURBQUQ7QUFBWSxjQUFNLEVBQUk1QixJQUFJLENBQUM0QjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHZCLGVBRUksc0VBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUNDLGlCQUFPLEVBQUM7QUFBVCxTQUFsQjtBQUFBLGdDQUNJO0FBQUssZUFBSyxFQUFFO0FBQUNBLG1CQUFPLEVBQUM7QUFBVCxXQUFaO0FBQUEsa0NBQ0ksc0VBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUEsb0NBQVksc0VBQUMscURBQUQ7QUFBTyxpQkFBRyxFQUFDLG1CQUFYO0FBQStCLDJCQUFhO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVosRUFBNEQ3QixJQUFJLENBQUN1QixJQUFMLENBQVVPLFFBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHNFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLG1DQUNBLHNFQUFDLHdEQUFEO0FBQWlCLHlCQUFXLEVBQUk5QixJQUFJLENBQUMrQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSTtBQUFJLGVBQUssRUFBRTtBQUFDTCxrQkFBTSxFQUFDLENBQVI7QUFBV0csbUJBQU8sRUFBQyxDQUFuQjtBQUFzQkcscUJBQVMsRUFBQyxNQUFoQztBQUF3Q0MscUJBQVMsRUFBRTtBQUFuRCxXQUFYO0FBQUEsa0NBQ0k7QUFBSSxpQkFBSyxFQUFFO0FBQUNOLG1CQUFLLEVBQUMsS0FBUDtBQUFhTyx5QkFBVyxFQUFFLG1CQUExQjtBQUE4Qyx1QkFBTyxNQUFyRDtBQUE0REMsdUJBQVMsRUFBRSxRQUF2RTtBQUFnRlQsb0JBQU0sRUFBQztBQUF2RixhQUFYO0FBQUEsbUNBQ0k7QUFBTSxtQkFBSyxFQUFFO0FBQUNVLDBCQUFVLEVBQUMsTUFBWjtBQUFtQkMsc0JBQU0sRUFBQyxTQUExQjtBQUFvQ1YscUJBQUssRUFBQyxNQUExQztBQUFpRFcsd0JBQVEsRUFBQztBQUExRCxlQUFiO0FBQUEscUNBQ0Esc0VBQUMsMkRBQUQ7QUFBTyxxQkFBSyxFQUFFO0FBQUNYLHVCQUFLLEVBQUM7QUFBUDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQUksaUJBQUssRUFBRTtBQUFDQSxtQkFBSyxFQUFDLEtBQVA7QUFBYU8seUJBQVcsRUFBRSxtQkFBMUI7QUFBOEMsdUJBQU8sTUFBckQ7QUFBNERDLHVCQUFTLEVBQUUsUUFBdkU7QUFBZ0ZULG9CQUFNLEVBQUM7QUFBdkYsYUFBWDtBQUFBLG1DQUNJO0FBQU0sbUJBQUssRUFBRTtBQUFDVSwwQkFBVSxFQUFDLE1BQVo7QUFBbUJDLHNCQUFNLEVBQUMsU0FBMUI7QUFBb0NWLHFCQUFLLEVBQUMsTUFBMUM7QUFBaURXLHdCQUFRLEVBQUM7QUFBMUQsZUFBYjtBQUFBLHdCQUNDcEMsSUFBSSxnQkFBQyxzRUFBQywrREFBRDtBQUFXLHFCQUFLLEVBQUU7QUFBQ3lCLHVCQUFLLEVBQUMsTUFBUDtBQUFjWSx1QkFBSyxFQUFDO0FBQXBCLGlCQUFsQjtBQUFrRCx1QkFBTyxFQUFFMUI7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBRCxnQkFBNEUsc0VBQUMsMkRBQUQ7QUFBTyxxQkFBSyxFQUFFO0FBQUNjLHVCQUFLLEVBQUM7QUFBUCxpQkFBZDtBQUE4Qix1QkFBTyxFQUFFZDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBV0k7QUFBSSxpQkFBSyxFQUFFO0FBQUNjLG1CQUFLLEVBQUMsS0FBUDtBQUFhTyx5QkFBVyxFQUFFLG1CQUExQjtBQUE4Qyx1QkFBTyxNQUFyRDtBQUE0REMsdUJBQVMsRUFBRSxRQUF2RTtBQUFnRlQsb0JBQU0sRUFBQztBQUF2RixhQUFYO0FBQUEsbUNBQ0k7QUFBTSxtQkFBSyxFQUFFO0FBQUNVLDBCQUFVLEVBQUMsTUFBWjtBQUFtQkMsc0JBQU0sRUFBQyxTQUExQjtBQUFvQ1YscUJBQUssRUFBQyxNQUExQztBQUFpRFcsd0JBQVEsRUFBQztBQUExRCxlQUFiO0FBQUEscUNBQ0ksc0VBQUMsOERBQUQ7QUFBVSxxQkFBSyxFQUFFO0FBQUNYLHVCQUFLLEVBQUM7QUFBUCxpQkFBakI7QUFBaUMsdUJBQU8sRUFBRVg7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKLGVBZ0JJO0FBQUksaUJBQUssRUFBRTtBQUFDVyxtQkFBSyxFQUFDLEtBQVA7QUFBYSx1QkFBTyxNQUFwQjtBQUEyQlEsdUJBQVMsRUFBRSxRQUF0QztBQUErQ1Qsb0JBQU0sRUFBQztBQUF0RCxhQUFYO0FBQUEsbUNBQ0k7QUFBTSxtQkFBSyxFQUFFO0FBQUNVLDBCQUFVLEVBQUMsTUFBWjtBQUFtQkMsc0JBQU0sRUFBQyxTQUExQjtBQUFvQ1YscUJBQUssRUFBQyxNQUExQztBQUFpRFcsd0JBQVEsRUFBQztBQUExRCxlQUFiO0FBQUEscUNBQ0ksc0VBQUMsOERBQUQ7QUFDSSx5QkFBUyxFQUFDLEtBRGQ7QUFFSSx1QkFBTyxFQUFFZCxhQUZiO0FBR0ksdUJBQU8sRUFBQyxPQUhaO0FBQUEsdUNBS0ksc0VBQUMsK0RBQUQ7QUFBVyx1QkFBSyxFQUFFO0FBQUNHLHlCQUFLLEVBQUM7QUFBUCxtQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQXlDS3ZCLFdBQVcsaUJBQ1g7QUFBSyxXQUFLLEVBQUU7QUFBQ3VCLGFBQUssRUFBQztBQUFQLE9BQVo7QUFBQSw4QkFDRyxzRUFBQyxvREFBRDtBQUFhLFlBQUksRUFBRTNCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxlQUVHO0FBQUEsbUJBQU9BLElBQUksQ0FBQ3dDLFFBQUwsQ0FBY0MsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkgsZUFHRyxzRUFBQyx5REFBRDtBQUFXLGVBQU8sRUFBQyxPQUFuQjtBQUEyQixhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRTtBQUFaLFNBQWxDO0FBQUEsa0JBQ0sxQyxJQUFJLENBQUN3QyxRQUFMLENBQWMsQ0FBZCxLQUFvQnhDLElBQUksQ0FBQ3dDLFFBQUwsQ0FBY0csR0FBZCxDQUFrQixVQUFDQyxDQUFEO0FBQUEsOEJBQ25DLHNFQUFDLHlEQUFELENBQVcsSUFBWDtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBQywwQkFBVDtBQUFvQyx1QkFBUyxFQUFDLGNBQTlDO0FBQTZELGlCQUFHLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVLQSxDQUFDLENBQUNyQixJQUFGLElBQVVxQixDQUFDLENBQUNyQixJQUFGLENBQU9zQixZQUZ0QixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosRUFJS0QsQ0FBQyxDQUFDYixPQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUM7QUFBQSxTQUFsQjtBQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOERILENBeEdEOztHQUFNaEMsUTtVQUdTUSx1RCxFQUNNSyx1RDs7O0tBSmZiLFE7QUEwR1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhNmNiYWIwZmUwYjc5ZDgxZmE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q2FyZCxCdXR0b24sSW1hZ2UsTGlzdEdyb3VwLCBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQge1NoYXJlLEhlYXJ0LEhlYXJ0RmlsbCxDaGF0RG90cyxUaHJlZURvdHN9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24sIFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5pbXBvcnQgeyByZW1vdmVQb3N0T2ZNZUFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJ1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50J1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnXHJcblxyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcbiAgICBjb25zdCBbbGlrZSwgc2V0TGlrZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjb21tZW50T3Blbiwgc2V0Q29tbWVudE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWU/LmlkKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaWtlKChwcmV2KT0+ICFwcmV2KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW10sXHJcbiAgICApXHJcbiAgICBjb25zdCBPblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbW1lbnRPcGVuKChwcmV2KT0+IXByZXYpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgIClcclxuICAgIGNvbnN0IG9uUG9zdERlbGV0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2lkLCBwb3N0LlVzZXIuaWRdLFxyXG4gICAgKVxyXG4gICAgY29uc3QgcmVuZGVyVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxUb29sdGlwIGlkPVwiYnV0dG9uLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCBcclxuICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgdmFyaWFudD1cIndhcm5pbmdcIj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9e29uUG9zdERlbGV0ZX0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCI+7Iug6rOgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMTAwcHggMCAyMHB4J319PlxyXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzMzcmVtJ319PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcyA9IHtwb3N0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3twYWRkaW5nOjB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMjRweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+PEltYWdlIHNyYz1cImhvbGRlci5qcy8xNzF4MTgwXCIgcm91bmRlZENpcmNsZSAvPntwb3N0LlVzZXIubmlja25hbWV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmRDb250ZW50IHBvc3RDb250ZW50ID0ge3Bvc3QuY29udGVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW46MCwgcGFkZGluZzowLCBsaXN0U3R5bGU6J25vbmUnLCBib3JkZXJUb3A6ICcxcHggc29saWQgI2YwZjBmMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7d2lkdGg6XCIyNSVcIixib3JkZXJSaWdodDogJzFweCBzb2xpZCAjZjBmMGYwJyxmbG9hdDogJ2xlZnQnLHRleHRBbGlnbjogJ2NlbnRlcicsbWFyZ2luOicxMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2xpbmVIZWlnaHQ6JzE0cHgnLGN1cnNvcjoncG9pbnRlcicsd2lkdGg6JzEwMCUnLGZvbnRTaXplOlwiMTZweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hhcmUgc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e3dpZHRoOlwiMjUlXCIsYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI2YwZjBmMCcsZmxvYXQ6ICdsZWZ0Jyx0ZXh0QWxpZ246ICdjZW50ZXInLG1hcmdpbjonMTJweCAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tsaW5lSGVpZ2h0OicxNHB4JyxjdXJzb3I6J3BvaW50ZXInLHdpZHRoOicxMDAlJyxmb250U2l6ZTpcIjE2cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpa2U/PEhlYXJ0RmlsbCBzdHlsZT17e3dpZHRoOicxMDAlJyxjb2xvcjpcIiNkYzM1NDVcIn19IG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPjo8SGVhcnQgc3R5bGU9e3t3aWR0aDonMTAwJSd9fSBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e3dpZHRoOlwiMjUlXCIsYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI2YwZjBmMCcsZmxvYXQ6ICdsZWZ0Jyx0ZXh0QWxpZ246ICdjZW50ZXInLG1hcmdpbjonMTJweCAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tsaW5lSGVpZ2h0OicxNHB4JyxjdXJzb3I6J3BvaW50ZXInLHdpZHRoOicxMDAlJyxmb250U2l6ZTpcIjE2cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0RG90cyBzdHlsZT17e3dpZHRoOicxMDAlJ319IG9uQ2xpY2s9e09uVG9nZ2xlQ29tbWVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7d2lkdGg6XCIyNSVcIixmbG9hdDogJ2xlZnQnLHRleHRBbGlnbjogJ2NlbnRlcicsbWFyZ2luOicxMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2xpbmVIZWlnaHQ6JzE0cHgnLGN1cnNvcjoncG9pbnRlcicsd2lkdGg6JzEwMCUnLGZvbnRTaXplOlwiMTZweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e3JlbmRlclRvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9J2NsaWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRocmVlRG90cyBzdHlsZT17e3dpZHRoOicxMDAlJ319PkhvdmVyIG1lIHRvIHNlZTwvVGhyZWVEb3RzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50T3BlbiAmJlxyXG4gICAgICAgICAgICAoPGRpdiBzdHlsZT17e3dpZHRoOiczM3JlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgdmFyaWFudD1cImZsdXNoXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3QuQ29tbWVudHNbMF0gJiYgcG9zdC5Db21tZW50cy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJob2xkZXIuanMvMjB4MjA/dGV4dD0lMjBcIiBjbGFzc05hbWU9XCJyb3VuZGVkIG1yLTJcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3YuVXNlciAmJiB2LlVzZXIudXNlck5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9