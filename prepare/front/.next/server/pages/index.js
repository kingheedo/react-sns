module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-icons */ "react-bootstrap-icons");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Recommend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Recommend */ "./components/Recommend.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\AppLayout.js";














const Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])([".container-true{margin:2rem !important;}a{margin:5px !important;}.list-group-item-action{margin:0 !important;}"]);
const ButtonGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"]).withConfig({
  displayName: "AppLayout__ButtonGroupWrapper",
  componentId: "sc-1x6xxdo-0"
})(["display:flex;position:fixed;top:7rem;a{margin:0 !important;padding-right:14rem;text-decoration:none;},Button{text-align:left;},h3{color:#0a58ca;}"]);
const SearchList = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"]).withConfig({
  displayName: "AppLayout__SearchList",
  componentId: "sc-1x6xxdo-1"
})(["position:fixed;top:3.19rem;z-index:9;width:29%;border-left:1px solid #e9ecef;background-color:#ffffff;border-right:1px solid #e9ecef;"]);
const CircleButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "AppLayout__CircleButton",
  componentId: "sc-1x6xxdo-2"
})(["margin-top:50px;border-radius:9999px;text-align:center !important;display:block;height:64px;width:270px;font-size:1.5rem;}"]);
const SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"]).withConfig({
  displayName: "AppLayout__SearchForm",
  componentId: "sc-1x6xxdo-3"
})(["display:inline-block;padding-left:30px;width:100% !important;}"]);
const SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["Search"]).withConfig({
  displayName: "AppLayout__SearchIcon",
  componentId: "sc-1x6xxdo-4"
})(["position:absolute;top:9px;left:5px;width:20px;height:20px;padding-left:5px;"]);
const DeleteSearchContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["CloseButton"]).withConfig({
  displayName: "AppLayout__DeleteSearchContent",
  componentId: "sc-1x6xxdo-5"
})(["position:absolute;right:1.5rem;top:0.25rem;"]);
const DropdownDivider = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider).withConfig({
  displayName: "AppLayout__DropdownDivider",
  componentId: "sc-1x6xxdo-6"
})(["margin:0;"]);

const AppLayout = ({
  children
}) => {
  const containerH2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    cursor: 'pointer',
    marginBottom: '10px',
    fontSize: '3rem'
  }), []);
  const Col1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    paddingLeft: '12rem',
    borderRight: '1px solid #DCDCDC',
    position: 'relative'
  }), []);
  const Col2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    borderRight: '1px solid #DCDCDC'
  }), []);
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleModalForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShow(prev => !prev);
  }, [show]);
  const {
    me,
    recommend,
    searchUserList,
    searchUserLoading,
    searchUserDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const {
    addPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const {
    0: searchContent,
    1: setsearchContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: searchHashtag,
    1: setsearchHashtag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: searchControl,
    1: setSearchControl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (me && me.Followers.length >= 1 && me.Followings.length >= 1) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["LOAD_RECOMMEND_USER_REQUEST"]
      });
    }
  }, [me]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // #stat
    // stat 을 뽑아내고 그걸 dispatch 해야한다.
    if (searchContent.startsWith('#')) {
      setsearchHashtag(searchContent.slice(1)); // console.log('searchUser',searchHashtag)
    }

    if (searchContent) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["LOAD_SEARCH_USER_REQUEST"],
        data: searchContent
      });
    }
  }, [searchContent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (searchUserLoading) {
      setSearchControl(true);
    }
  }, [searchUserLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addPostLoading) {
      if (show) {
        setShow(prev => !prev);
      }
    }
  }, [addPostLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (searchUserDone) {
      setSearchControl(false);
    }
  }, [searchUserDone]);
  const onChangeSearchUserInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setsearchContent(e.target.value);
  }, [searchContent]);
  const DeleteSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setsearchContent('');
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["LOAD_SEARCH_USER_REQUEST"],
      data: null
    });
  }, []);
  const FindUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    searchUserList === null || searchUserList === void 0 ? void 0 : searchUserList.map(v => {
      if (searchContent && searchContent === v.nickname) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(`/user/${v.id}`);
        setsearchContent('');
      }
    });

    if (searchHashtag) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(`/hashtag/${searchHashtag}`);
      setsearchContent('');
    }
  }, [searchHashtag, searchUserList, searchContent]);
  const SelectListItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setsearchContent('');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: "true",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        xs: 1,
        md: 2,
        lg: 3,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          style: Col1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            style: {
              position: 'fixed'
            },
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h2", {
              style: containerH2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["Twitter"], {
                style: {
                  color: '#0a58ca',
                  position: 'fixed'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 27
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(ButtonGroupWrapper, {
            vertical: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h3", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["HouseDoor"], {
                    style: {
                      marginRight: '1rem'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 1
                  }, undefined), "Home"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 64
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 23
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/bookmarks",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h3", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["Bookmark"], {
                    style: {
                      marginRight: '1rem'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 1
                  }, undefined), "Bookmark"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 73
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 23
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/profile",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h3", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["Person"], {
                    style: {
                      marginRight: '1rem'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 1
                  }, undefined), "Profile"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 71
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 23
            }, undefined), !me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/signup",
                children: "\uD68C\uC6D0\uAC00\uC785"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 27
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 1
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h1", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(CircleButton, {
                variant: "primary",
                onClick: handleModalForm,
                children: "Tweet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 27
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 23
            }, undefined), me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
              size: "lg",
              show: show,
              onHide: handleModalForm,
              animation: false,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
                closeButton: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
                  children: ' '
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 29
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostForm__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 1
            }, undefined) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          style: Col2,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            inline: true,
            style: {
              position: 'relative',
              zIndex: '10'
            },
            onSubmit: FindUser,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
              style: {
                position: 'fixed',
                width: '29%'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 27
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(SearchForm, {
                value: searchContent,
                onChange: onChangeSearchUserInput,
                type: "text",
                placeholder: "Search User or Hashtag",
                className: "mr-sm-2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 27
              }, undefined), searchContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(DeleteSearchContent, {
                onClick: DeleteSearch
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 45
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 23
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(SearchList, {
              children: searchContent && searchUserList && searchUserList.map((v, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
                  disabled: searchControl,
                  onSelect: SelectListItem,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/user/${v.id}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("a", {
                      style: {
                        display: 'block',
                        textDecoration: 'none'
                      },
                      children: v.nickname
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 72
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 43
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 39
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(DropdownDivider, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 39
                }, undefined)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 35
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 23
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
            style: {
              marginTop: '3rem',
              zIndex: '8',
              position: 'fixed'
            },
            children: me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_UserProfile__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 51
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 19
          }, undefined), me && recommend ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Recommend__WEBPACK_IMPORTED_MODULE_12__["default"], {
            recommend: recommend
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 40
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 7
  }, undefined);
};

AppLayout.proptypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\CommentForm.js";










const CommentForm = ({
  post
}) => {
  const me = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user.me);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const [commentText, OnChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const {
    addCommentDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signup');
    }

    if (!me) {
      return null;
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [me, commentText, me && me.id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: onSubmitComment,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        style: {
          position: 'relative'
        },
        controlId: "exampleForm.ControlTextarea1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          srOnly: true,
          children: "Example textarea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          as: "textarea",
          rows: 3,
          value: commentText,
          onChange: OnChangeCommentText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        disabled: addCommentLoading || !commentText,
        style: {
          position: 'absolute',
          right: 0
        },
        variant: "primary",
        type: "submit",
        children: addCommentLoading ? 'Loading…' : '게시'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/EditPostContent.js":
/*!***************************************!*\
  !*** ./components/EditPostContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\EditPostContent.js";

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable max-len */











const EditPostContent = ({
  post,
  show,
  handleModalForm
}) => {
  const [text, onChangeText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(post === null || post === void 0 ? void 0 : post.content);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const onSubmitEdit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    handleModalForm();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["EDIT_POST_CONTENT_REQUEST"],
      data: {
        postId: post.id,
        contentText: text
      }
    });
  }, [post.id, text]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: show,
      onHide: handleModalForm,
      "aria-labelledby": "Edit Content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
          id: "eEdit Content",
          children: "Edit Content"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          style: {
            border: 0,
            width: '100%',
            display: 'inline-block',
            margin: '0.05rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            style: {
              position: 'relative'
            },
            children: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
              header: "\uC218\uC815",
              postid: post.id,
              images: post.Images
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 40
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            style: {
              padding: '24px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
              style: {
                marginBottom: '2rem'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: `/user/${post.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                  children: post.User.nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 78
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
                as: "textarea",
                rows: 3,
                value: text,
                onChange: onChangeText
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 23
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: onSubmitEdit,
          style: {
            float: 'right'
          },
          variant: "primary",
          children: "\uC218\uC815"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 14
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 14
    }, undefined)
  }, void 0, false);
};

EditPostContent.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  handleModalForm: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EditPostContent);

/***/ }),

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\FollowButton.js";







const FollowButton = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickButton,
    style: {
      float: 'right'
    },
    variant: "outline-primary",
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/ImagesZoom/style.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\ImagesZoom\\index.js";







const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Overlay"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["CloseBtn"], {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["SlickWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          beforeChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ImgWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
              style: {
                width: '30rem'
              },
              src: `http://localhost:3065/${v.src}`,
              alt: v.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)
          }, v.src, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Indicator"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/ImagesZoom/style.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/style.js ***!
  \****************************************/
/*! exports provided: Overlay, Header, SlickWrapper, ImgWrapper, Indicator, CloseBtn, Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-icons */ "react-bootstrap-icons");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__);


const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Overlay",
  componentId: "sc-1a96i70-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "style__Header",
  componentId: "sc-1a96i70-1"
})(["header:44px;background:white;position:relative;padding:0 0 1px;text-align:center;&h1{margin:0;font-size:17px;color:#333;line-height:44px;};"]);
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__SlickWrapper",
  componentId: "sc-1a96i70-2"
})(["height:calc(100% - 44px);background:#090909;"]);
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ImgWrapper",
  componentId: "sc-1a96i70-3"
})(["padding:32px;text-align:center;&img{margin:0 auto;max-height:750px;}"]);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Indicator",
  componentId: "sc-1a96i70-4"
})(["text-align:center;& > div{width:75px;hegith:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__["X"]).withConfig({
  displayName: "style__CloseBtn",
  componentId: "sc-1a96i70-5"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;font-size:4rem;color:black;"]);
const Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])([".slick-slide{display:inline-block}.card{transform:none !important;}"]);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\LoginForm.js";








const FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label).withConfig({
  displayName: "LoginForm__FormLabel",
  componentId: "sc-k4bay5-0"
})(["padding:10px;"]);

const LoginForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const {
    logInLoading,
    logInError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  const onSubmitHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["loginRequestAction"])({
      email,
      password
    }));
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: onSubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
        controlId: "formHorizontalEmail",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FormLabel, {
          column: true,
          sm: 2,
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          sm: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
            style: {
              marginLeft: '10px'
            },
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: onChangeEmail,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
        controlId: "formHorizontalPassword",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FormLabel, {
          column: true,
          sm: 2,
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          sm: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
            style: {
              marginLeft: '10px'
            },
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: onChangePassword,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          sm: {
            span: 10,
            offset: 2
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            disabled: logInLoading,
            variant: "primary",
            type: "submit",
            children: logInLoading ? 'Loading…' : '로그인'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              variant: "outline-primary",
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 42
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-icons */ "react-bootstrap-icons");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var _EditPostContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditPostContent */ "./components/EditPostContent.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\PostCard.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/prop-types */

/* eslint-disable max-len */
















moment__WEBPACK_IMPORTED_MODULE_6___default.a.locale('ko');
const CommentList = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"]).withConfig({
  displayName: "PostCard__CommentList",
  componentId: "sc-10lmnn1-0"
})(["a{text-decoration:none;color:#212529;font-weight:500;},p{margin-top:0.3rem}"]);
const CommentListItem = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item).withConfig({
  displayName: "PostCard__CommentListItem",
  componentId: "sc-10lmnn1-1"
})(["display:flex;margin-top:1rem;"]);
const MoreButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"]).withConfig({
  displayName: "PostCard__MoreButton",
  componentId: "sc-10lmnn1-2"
})([".tooltip-inner{border:1px solid #f0f0f1;background-color:#f0f0f1;},.arrow::before{border-top-color:#f0f0f1;},"]);

const PostCard = ({
  post
}) => {
  const {
    0: commentOpen,
    1: setCommentOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    retweetError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // const cardHeader = styled(Card.Header)`
  // background : rgba(0,0,0,0);
  // `

  const headerStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    backgroundColor: 'rgba(0,0,0,0)'
  }), []);
  const ulStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderTop: '1px solid #f0f0f0'
  }), []);
  const liStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    width: '25%',
    borderRight: '1px solid #f0f0f0',
    float: 'left',
    textAlign: 'center',
    margin: '12px 0'
  }), []);
  const spanStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    lineHeight: '14px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px'
  }), []);
  const BookmarkStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    fontSize: '1.5rem',
    float: 'right',
    cursor: 'pointer'
  }), []);
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const OnToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentOpen(prev => !prev);
  }, []);
  const onPostDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [post.id]);
  const OnBookmark = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_BOOKMARK_REQUEST"],
      data: post.id
    });
  }, [id]);
  const OnUnBookmark = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_BOOKMARK_REQUEST"],
      data: post.id
    });
  }, [id]);
  const handleModalForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setShow(show => !show);
  }, [show]);

  const renderTooltip = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(MoreButton, _objectSpread(_objectSpread({
    id: "button-tooltip"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
      children: [id && post.User.id === id && !post.Retweet && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "warning",
        onClick: handleModalForm,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }, undefined), id && post.User.id === id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "danger",
        onClick: onPostDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 19
      }, undefined)]
    }, void 0, true), id && post.User.id !== id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "danger",
      children: "\uC2E0\uACE0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 20
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 9
  }, undefined);

  const like = post.Likers.find(v => v.id === id);
  const bookmark = post.Bookmarkers.find(v => v.id === id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
    style: {
      margin: '100px 0 20px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        style: headerStyle,
        children: [post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null, id && post.User.id === id ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 23
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        style: {
          padding: 0
        },
        children: [post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          style: {
            border: 0,
            width: '100%',
            display: 'inline-block',
            margin: '0.05rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
            style: {
              display: 'flex'
            },
            children: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_11__["default"], {
              images: post.Retweet.Images
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 56
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
            style: {
              width: '100%',
              padding: '24px'
            },
            children: [bookmark ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["BookmarkFill"], {
              style: BookmarkStyle,
              onClick: OnUnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 35
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Bookmark"], {
              style: BookmarkStyle,
              onClick: OnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 35
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
              style: {
                marginBottom: '2rem'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: `/user/${post.Retweet.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
                  children: post.Retweet.User.nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                style: {
                  float: 'right'
                },
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).fromNow()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 29
              }, undefined), post.Likers.length >= 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("h6", {
                style: {
                  fontWeight: '600'
                },
                children: ["\uC88B\uC544\uC694 ", post.Likers.length, "\uAC1C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 59
              }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                postContent: post.Retweet.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                style: {
                  marginTop: '1rem',
                  display: 'flex'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("h6", {
                  children: post.Comments[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/user/${post.Comments[0].User.id}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
                      style: {
                        textDecoration: 'none',
                        color: '#212529'
                      },
                      children: post.Comments[0].User.nickname
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 107
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 58
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 33
                }, undefined), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("p", {
                  style: {
                    lineHeight: '1.2'
                  },
                  children: post.Comments[0] && post.Comments[0].content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 33
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 1
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          style: {
            border: 0,
            width: '100%',
            display: 'inline-block',
            margin: '0.05rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
            style: {
              display: 'flex'
            },
            children: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_11__["default"], {
              images: post.Images
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 48
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
            style: {
              padding: '24px'
            },
            children: [bookmark ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["BookmarkFill"], {
              style: BookmarkStyle,
              onClick: OnUnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 35
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Bookmark"], {
              style: BookmarkStyle,
              onClick: OnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 35
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
              style: {
                marginBottom: '2rem'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: `/user/${post.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
                  children: post.User.nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 92
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                style: {
                  float: 'right'
                },
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).fromNow()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                children: post.Likers.length >= 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("h6", {
                  style: {
                    fontWeight: '600'
                  },
                  children: ["\uC88B\uC544\uC694 ", post.Likers.length, "\uAC1C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 68
                }, undefined) : null
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                postContent: post.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                style: {
                  marginTop: '1rem',
                  display: 'flex'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("h6", {
                  children: post.Comments[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/user/${post.Comments[0].User.id}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
                      style: {
                        textDecoration: 'none',
                        color: '#212529'
                      },
                      children: post.Comments[0].User.nickname
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 49
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 1
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 41
                }, undefined), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("p", {
                  style: {
                    lineHeight: '1.2'
                  },
                  children: post.Comments[0] && post.Comments[0].content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 1
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("ul", {
          style: ulStyle,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
              style: spanStyle,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Share"], {
                style: {
                  width: '100%'
                },
                onClick: onRetweet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
              style: spanStyle,
              children: like ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["HeartFill"], {
                style: {
                  width: '100%',
                  color: '#dc3545'
                },
                onClick: onUnLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 35
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Heart"], {
                style: {
                  width: '100%'
                },
                onClick: onLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 35
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
              style: spanStyle,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["ChatDots"], {
                style: {
                  width: '100%'
                },
                onClick: OnToggleComment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
              style: spanStyle,
              children: show ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
                placement: "top",
                overlay: renderTooltip,
                delay: {
                  show: 250,
                  hide: 400
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["ThreeDots"], {
                  style: {
                    width: '100%'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 1
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }, undefined), commentOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
      style: {
        width: '33rem'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
        children: [post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(CommentList, {
        variant: "flush",
        children: post.Comments[0] && post.Comments.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(CommentListItem, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/user/${v.User.id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
              children: v.UserId && v.User.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 64
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("p", {
            children: v.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 1
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_EditPostContent__WEBPACK_IMPORTED_MODULE_13__["default"], {
      post: post,
      show: show,
      handleModalForm: handleModalForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 9
  }, undefined);
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\PostCardContent.js";

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/no-array-index-key */





const PostCardContent = ({
  postContent
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
  children: postContent.split(/(#[^\s#]+)/g).map((v, i) => {
    if (v.match(/(#[^\s#]+)/)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/hashtag/${v.slice(1)}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
          children: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 66
        }, undefined)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 20
      }, undefined);
    }

    return v;
  })
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 9
}, undefined);

PostCardContent.propTypes = {
  postContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\PostForm.js";







const PostForm = () => {
  const {
    addPostDone,
    imagePaths
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const imageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [text, onChangeText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    imageUpload.current.click();
  }, [imageUpload.current]);
  const onSumbitUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요');
    }

    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append('image', p);
    });
    formData.append('content', text);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_IMAGE"],
      data: index
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSumbitUpload,
    encType: "multipart/form-data",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 30
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          as: "textarea",
          rows: 3,
          value: text,
          onChange: onChangeText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].File.Input, {
          type: "file",
          name: "image",
          ref: imageUpload,
          onChange: onChangeImages,
          multiple: true,
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          style: {
            marginTop: '1rem'
          },
          onClick: onClickImageUpload,
          children: "\uC774\uBBF8\uC9C0\uC5C5\uB85C\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          style: {
            float: 'right',
            marginTop: '1rem'
          },
          type: "submit",
          children: "\uAC8C\uC2DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        marginTop: '20px'
      },
      children: imagePaths.map((v, i) =>
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          marginRight: '5px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: `http://localhost:3065/${v}`,
          alt: v,
          style: {
            width: '220px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap-icons */ "react-bootstrap-icons");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\PostImages.js";










const PostImages = ({
  images,
  header,
  postid
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selectImage1,
    1: setSelectImage1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selectImage2,
    1: setSelectImage2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    deletePostImageLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    setShowImagesZoom(false);
  }, []);
  const onDeleteImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((imageid, postid) => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["DELETE_POST_IMAGE_REQUEST"],
      data: {
        imageId: imageid,
        postId: postid
      }
    });
  }, []);
  const handleDeleteImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (e.target.id === images[0].id.toString(10) && !selectImage1) {
      e.target.style.border = '0.5rem solid red';
      setSelectImage1(prev => !prev);
    } else if (e.target.id === images[0].id.toString(10) && selectImage1) {
      e.target.style.border = 'none';
      setSelectImage1(prev => !prev);
    } else if (e.target.id === images[1].id.toString(10) && !selectImage2) {
      e.target.style.border = '0.5rem solid red';
      setSelectImage2(prev => !prev);
    } else if (e.target.id === images[1].id.toString(10) && selectImage2) {
      e.target.style.border = 'none';
      setSelectImage2(prev => !prev);
    }
  }, [selectImage1, selectImage2, images]);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: [header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
          id: images[0].id,
          onClick: handleDeleteImage,
          style: {
            width: '100%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, undefined), selectImage1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__["XSquareFill"], {
          style: {
            position: 'absolute',
            top: 0,
            right: '0',
            fontSize: '28px',
            color: 'red',
            backgroundColor: 'black',
            cursor: 'pointer'
          },
          onClick: !deletePostImageLoading && onDeleteImage(images[0].id, postid),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 34
        }, undefined)]
      }, void 0, true), !header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
          style: {
            width: '100%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`,
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          images: images,
          onClose: onClose
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 37
        }, undefined)]
      }, void 0, true)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: [header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
          id: images[0].id,
          onClick: handleDeleteImage,
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
          id: images[1].id,
          onClick: handleDeleteImage,
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[1].src,
          src: `http://localhost:3065/${images[1].src}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined), selectImage1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__["XSquareFill"], {
          style: {
            position: 'absolute',
            top: 0,
            right: '50%',
            fontSize: '28px',
            color: 'red',
            backgroundColor: 'black',
            cursor: 'pointer'
          },
          onClick: !deletePostImageLoading && onDeleteImage(images[0].id, postid),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 38
        }, undefined), selectImage2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__["XSquareFill"], {
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: '28px',
            color: 'red',
            backgroundColor: 'black',
            cursor: 'pointer'
          },
          onClick: !deletePostImageLoading && onDeleteImage(images[1].id, postid),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 38
        }, undefined)]
      }, void 0, true), !header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`,
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[1].src,
          src: `http://localhost:3065/${images[1].src}`,
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          images: images,
          onClose: onClose
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 39
        }, undefined)]
      }, void 0, true)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
        id: images[0].id,
        onClick: handleDeleteImage,
        style: {
          width: '100%'
        },
        variant: "top",
        alt: images[0].src,
        src: `http://localhost:3065/${images[0].src}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, undefined), selectImage1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__["XSquareFill"], {
        style: {
          position: 'absolute',
          top: 0,
          right: '0',
          fontSize: '28px',
          color: 'red',
          backgroundColor: 'black',
          cursor: 'pointer'
        },
        onClick: !deletePostImageLoading && onDeleteImage(images[0].id, postid),
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 34
      }, undefined)]
    }, void 0, true), !header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
        style: {
          width: '100%'
        },
        variant: "top",
        alt: images[0].src,
        src: `http://localhost:3065/${images[0].src}`,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 37
      }, undefined)]
    }, void 0, true)]
  }, void 0, true);
};

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  postid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/Recommend.js":
/*!*********************************!*\
  !*** ./components/Recommend.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RecommendFollowButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecommendFollowButton */ "./components/RecommendFollowButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\Recommend.js";






const ListGroupItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item).withConfig({
  displayName: "Recommend__ListGroupItem",
  componentId: "sc-18j2ceu-0"
})(["margin:0 !important;padding:2rem;"]);
const ListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Recommend__ListItemWrapper",
  componentId: "sc-18j2ceu-1"
})(["position:relative;z-index:9;"]);

const Recommend = ({
  recommend
}) =>
/*#__PURE__*/

/*이 부분이 원래 단일아이디를 가져와서 비교해야 된다.*/
Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
      children: "Who to follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), recommend && recommend.map((v, i) =>
    /*#__PURE__*/
    // eslint-disable-next-line react/no-array-index-key
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ListItemWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ListGroupItem, {
        action: true,
        href: `/user/${v.id}`,
        children: v.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
        style: {
          margin: 0
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_RecommendFollowButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          recommendUser: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 5
}, undefined);

Recommend.propTypes = {
  recommend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Recommend);

/***/ }),

/***/ "./components/RecommendFollowButton.js":
/*!*********************************************!*\
  !*** ./components/RecommendFollowButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\RecommendFollowButton.js";







const RecommendFollowButton = ({
  recommendUser
}) => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const isFollowing = me && me.Followings.find(v => v.id === recommendUser.id);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: recommendUser.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: recommendUser.id
      });
    }
  }, [isFollowing, recommendUser]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      position: 'absolute',
      zIndex: '10',
      right: '1rem',
      top: '1.6rem'
    },
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 13
  }, undefined);
};

RecommendFollowButton.propTypes = {
  recommendUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RecommendFollowButton);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\UserProfile.js";








const CardLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "UserProfile__CardLinkWrapper",
  componentId: "sc-b71tg5-0"
})(["padding-top:15px;border-top:1px solid rgba(0,0,0,0.125);display:flex !important"]);
const LogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "UserProfile__LogoutButton",
  componentId: "sc-b71tg5-1"
})(["margin-bottom:15px;"]);
const CardBody = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body).withConfig({
  displayName: "UserProfile__CardBody",
  componentId: "sc-b71tg5-2"
})(["padding:1.0rem;"]);
const CardLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Link).withConfig({
  displayName: "UserProfile__CardLink",
  componentId: "sc-b71tg5-3"
})(["padding:0;display:flex;text-align:center;"]);

const UserProfile = () => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const logoutHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["logoutRequestAction"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: '31rem',
      flexDirection: 'row'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardBody, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/user/${me.id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
            children: me.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 51
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(LogoutButton, {
        onClick: logoutHandler,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          float: 'right',
          marginTop: '15px'
        },
        children: ["Joined ", moment__WEBPACK_IMPORTED_MODULE_5___default()(me.createdAt).format('MMMM YYYY')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLinkWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `/user/${me.id}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLink, {
              href: "#",
              children: ["\uAC8C\uC2DC\uBB3C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 78
              }, undefined), me.Posts.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 55
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 52
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLink, {
              href: "#",
              children: ["\uD314\uB85C\uC6B0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 69
              }, undefined), me.Followings.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 46
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 43
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLink, {
              href: "#",
              children: ["\uD314\uB85C\uC6CC ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 69
              }, undefined), me.Followers.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 46
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 43
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\pages\\index.js";












const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    me,
    recommend
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    retweetError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1].id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"],
            lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      me: me
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 20
    }, undefined), mainPosts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      post: post
    }, post.id, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 38
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined);
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_9__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");





const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, DELETE_POST_IMAGE_REQUEST, DELETE_POST_IMAGE_SUCCESS, DELETE_POST_IMAGE_FAILURE, EDIT_POST_CONTENT_REQUEST, EDIT_POST_CONTENT_SUCCESS, EDIT_POST_CONTENT_FAILURE, LOAD_USER_BOOKMARKS_REQUEST, LOAD_USER_BOOKMARKS_SUCCESS, LOAD_USER_BOOKMARKS_FAILURE, ADD_BOOKMARK_REQUEST, ADD_BOOKMARK_SUCCESS, ADD_BOOKMARK_FAILURE, REMOVE_BOOKMARK_REQUEST, REMOVE_BOOKMARK_SUCCESS, REMOVE_BOOKMARK_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPostRequestAction, addPostSuccessAction, addPostFailureAction, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_IMAGE_REQUEST", function() { return DELETE_POST_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_IMAGE_SUCCESS", function() { return DELETE_POST_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_IMAGE_FAILURE", function() { return DELETE_POST_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_CONTENT_REQUEST", function() { return EDIT_POST_CONTENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_CONTENT_SUCCESS", function() { return EDIT_POST_CONTENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_CONTENT_FAILURE", function() { return EDIT_POST_CONTENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_BOOKMARKS_REQUEST", function() { return LOAD_USER_BOOKMARKS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_BOOKMARKS_SUCCESS", function() { return LOAD_USER_BOOKMARKS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_BOOKMARKS_FAILURE", function() { return LOAD_USER_BOOKMARKS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOKMARK_REQUEST", function() { return ADD_BOOKMARK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOKMARK_SUCCESS", function() { return ADD_BOOKMARK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOKMARK_FAILURE", function() { return ADD_BOOKMARK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_BOOKMARK_REQUEST", function() { return REMOVE_BOOKMARK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_BOOKMARK_SUCCESS", function() { return REMOVE_BOOKMARK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_BOOKMARK_FAILURE", function() { return REMOVE_BOOKMARK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostSuccessAction", function() { return addPostSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostFailureAction", function() { return addPostFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
 // import shortId from 'shortid'
// import faker from 'faker'

const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePosts: true,
  removeBookmarkLoading: false,
  removeBookmarkDone: false,
  removeBookmarkError: null,
  addBookmarkLoading: false,
  addBookmarkDone: false,
  addBookmarkError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  editPostContentLoading: false,
  editPostContentDone: false,
  editPostContentError: null,
  deltePostImageLoading: false,
  deltePostImageDone: false,
  deltePostImageError: null
}; // export const generateDummyPost = (number) =>
// Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     content: faker.lorem.paragraph(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//     },
//     Images: [{
//         src: faker.image.image()
//     }],
//     Comments:[{
//         id: shortId.generate(),
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence(),
//     }]
// }))
// const dummyPost = (data) => ({
//     id: data.id,
//     content: data.content,
//     User:{
//         id:1,
//         nickname:'사용자2'
//     },
//     Images: [{src:"https://cdn.pixabay.com/photo/2021/01/24/20/47/mountains-5946500_1280.jpg"},],
//     Comments: ['댓글테스트'],
// })
// const dummyComment = (data) => ({
//     id: shortId.generate(),
//     ...data,
// })

const DELETE_POST_IMAGE_REQUEST = 'DELETE_POST_IMAGE_REQUEST';
const DELETE_POST_IMAGE_SUCCESS = 'DELETE_POST_IMAGE_SUCCESS';
const DELETE_POST_IMAGE_FAILURE = 'DELETE_POST_IMAGE_FAILURE';
const EDIT_POST_CONTENT_REQUEST = 'EDIT_POST_CONTENT_REQUEST';
const EDIT_POST_CONTENT_SUCCESS = 'EDIT_POST_CONTENT_SUCCESS';
const EDIT_POST_CONTENT_FAILURE = 'EDIT_POST_CONTENT_FAILURE';
const LOAD_USER_BOOKMARKS_REQUEST = 'LOAD_USER_BOOKMARKS_REQUEST';
const LOAD_USER_BOOKMARKS_SUCCESS = 'LOAD_USER_BOOKMARKS_SUCCESS';
const LOAD_USER_BOOKMARKS_FAILURE = 'LOAD_USER_BOOKMARKS_FAILURE';
const ADD_BOOKMARK_REQUEST = 'ADD_BOOKMARK_REQUEST';
const ADD_BOOKMARK_SUCCESS = 'ADD_BOOKMARK_SUCCESS';
const ADD_BOOKMARK_FAILURE = 'ADD_BOOKMARK_FAILURE';
const REMOVE_BOOKMARK_REQUEST = 'REMOVE_BOOKMARK_REQUEST';
const REMOVE_BOOKMARK_SUCCESS = 'REMOVE_BOOKMARK_SUCCESS';
const REMOVE_BOOKMARK_FAILURE = 'REMOVE_BOOKMARK_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPostRequestAction = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addPostSuccessAction = data => ({
  type: ADD_POST_SUCCESS,
  data
});
const addPostFailureAction = data => ({
  type: ADD_POST_FAILURE
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => {
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case DELETE_POST_IMAGE_REQUEST:
        draft.deletePostImageLoading = true;
        draft.deletePostImageDone = false;
        draft.deletePostImageError = null;
        break;

      case DELETE_POST_IMAGE_SUCCESS:
        {
          draft.deletePostImageLoading = false;
          draft.deletePostImageDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Images = post.Images.filter(v => v.id !== action.data.ImageId);
          break;
        }

      case DELETE_POST_IMAGE_FAILURE:
        draft.deletePostImageLoading = false;
        draft.deletePostImageError = action.error;
        break;

      case REMOVE_BOOKMARK_REQUEST:
        draft.removeBookmarkLoading = true;
        draft.removeBookmarkDone = false;
        draft.removeBookmarkError = null;
        break;

      case REMOVE_BOOKMARK_SUCCESS:
        {
          draft.removeBookmarkLoading = false;
          draft.removeBookmarkDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Bookmarkers = post.Bookmarkers.filter(v => v.id !== action.data.UserId);
          break;
        }

      case REMOVE_BOOKMARK_FAILURE:
        draft.removeBookmarkLoading = false;
        draft.removeBookmarkError = action.error;
        break;

      case EDIT_POST_CONTENT_REQUEST:
        draft.editPostContentLoading = true;
        draft.editPostContentDone = false;
        draft.editPostContentError = null;
        break;

      case EDIT_POST_CONTENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.content = action.data.content;
          draft.editPostContentLoading = false;
          draft.editPostContentDone = true;
          break;
        }

      case EDIT_POST_CONTENT_FAILURE:
        draft.editPostContentLoading = false;
        draft.editPostContentError = action.error;
        break;

      case ADD_BOOKMARK_REQUEST:
        draft.addBookmarkLoading = true;
        draft.addBookmarkDone = false;
        draft.addBookmarkError = null;
        break;

      case ADD_BOOKMARK_SUCCESS:
        {
          draft.addBookmarkLoading = false;
          draft.addBookmarkDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Bookmarkers.push({
            id: action.data.UserId
          });
          break;
        }

      case ADD_BOOKMARK_FAILURE:
        draft.addBookmarkLoading = false;
        draft.addBookmarkError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          draft.likePostLoading = false;
          draft.likePostDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostsLoading = true;
        draft.unlikePostsDone = false;
        draft.unlikePostsError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostsLoading = false;
          draft.unlikePostsDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostsLoading = false;
        draft.unlikePostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case LOAD_USER_BOOKMARKS_REQUEST:
      case LOAD_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_USER_BOOKMARKS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_USER_BOOKMARKS_FAILURE:
      case LOAD_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments.unshift(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.retweetLoading = false;
        draft.retweetDone = true;
        break;

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_RECOMMEND_USER_REQUEST, LOAD_RECOMMEND_USER_SUCCESS, LOAD_RECOMMEND_USER_FAILURE, LOAD_SEARCH_USER_REQUEST, LOAD_SEARCH_USER_SUCCESS, LOAD_SEARCH_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_RESET, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, loginSuccessAction, loginFailureAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RECOMMEND_USER_REQUEST", function() { return LOAD_RECOMMEND_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RECOMMEND_USER_SUCCESS", function() { return LOAD_RECOMMEND_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RECOMMEND_USER_FAILURE", function() { return LOAD_RECOMMEND_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_USER_REQUEST", function() { return LOAD_SEARCH_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_USER_SUCCESS", function() { return LOAD_SEARCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_USER_FAILURE", function() { return LOAD_SEARCH_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_RESET", function() { return SIGN_UP_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  searchUserList: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  changeNickNameLoading: false,
  changeNickNameError: null,
  changeNickNameDone: false,
  searchUserLoading: false,
  searchUserDone: false,
  searchUserError: null,
  me: null,
  userInfo: null,
  recommend: null
}; // const dummyUser = (data) => ({
//     ...data,
//     nickname:'닉네임',
//     id:1,
//     Posts:[{id: 1}],
//     Followings:[{nickname:'부기'},{nickname:'부기2'},{nickname:'부기3'}],
//     Followers:[{nickname: 'king'}, {nickname: 'king1'}]
// })

const LOAD_RECOMMEND_USER_REQUEST = 'LOAD_RECOMMEND_USER_REQUEST';
const LOAD_RECOMMEND_USER_SUCCESS = 'LOAD_RECOMMEND_USER_SUCCESS';
const LOAD_RECOMMEND_USER_FAILURE = 'LOAD_RECOMMEND_USER_FAILURE';
const LOAD_SEARCH_USER_REQUEST = 'LOAD_SEARCH_USER_REQUEST';
const LOAD_SEARCH_USER_SUCCESS = 'LOAD_SEARCH_USER_SUCCESS';
const LOAD_SEARCH_USER_FAILURE = 'LOAD_SEARCH_USER_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_UP_RESET = 'SIGN_UP_RESET';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const loginSuccessAction = data => ({
  type: LOG_IN_SUCCESS,
  data
});
const loginFailureAction = data => ({
  type: LOG_IN_FAILURE,
  data
});
const logoutRequestAction = data => ({
  type: LOG_OUT_REQUEST,
  data
});
const logoutSuccessAction = data => ({
  type: LOG_OUT_SUCCESS,
  data
});
const logoutFailureAction = data => ({
  type: LOG_OUT_FAILURE,
  data
});

const reducer = (state = initialState, action) => {
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case LOAD_RECOMMEND_USER_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;

      case LOAD_RECOMMEND_USER_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.recommend = action.data;
        break;

      case LOAD_RECOMMEND_USER_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOAD_SEARCH_USER_REQUEST:
        draft.searchUserLoading = true;
        draft.searchUserDone = false;
        draft.searchUserError = null;
        break;

      case LOAD_SEARCH_USER_SUCCESS:
        draft.searchUserLoading = false;
        draft.searchUserDone = true;
        draft.searchUserList = action.data;
        break;

      case LOAD_SEARCH_USER_FAILURE:
        draft.searchUserLoading = false;
        draft.searchUserError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.userInfo = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push(action.data);
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.id);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersError = null;
        draft.loadFollowersDone = false;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsError = null;
        draft.loadFollowingsDone = false;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerError = null;
        draft.removeFollowerDone = false;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
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

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case SIGN_UP_RESET:
        draft.signUpDone = false;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNickNameLoading = true;
        draft.changeNickNameError = null;
        draft.changeNickNameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNickNameLoading = false;
        draft.changeNickNameDone = true;
        draft.me.nickname = action.data.nickname;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNickNameLoading = false;
        draft.changeNickNameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data.id
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data.PostId);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
 // take, put, takeEvery, takeLatest, delay




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function DeltePostImageApi(data) {
  //hashtag/name
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data.postId}/${data.imageId}/imagedelete`, data);
}

function* DeltePostImage(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(DeltePostImageApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_IMAGE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_IMAGE_FAILURE"],
      error: err.response.data
    });
  }
}

function EditPostContentApi(data) {
  //hashtag/name
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data.postId}/edit`, data);
}

function* EditPostContent(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(EditPostContentApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_POST_CONTENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_POST_CONTENT_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsApi(data, lastId) {
  //hashtag/name
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    console.log('loadHashtag');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsApi, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsApi(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsApi, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/addpost', data); //formData는 바로 data로 정의
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/remove`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/addcomment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function addBookMarkApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/bookmark`);
}

function* addBookMark(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addBookMarkApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_BOOKMARK_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_BOOKMARK_FAILURE"],
      data: err.response.data
    });
  }
}

function removeBookMarkApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/unbookmark`);
}

function* removeBookMark(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeBookMarkApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_BOOKMARK_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_BOOKMARK_FAILURE"],
      data: err.response.data
    });
  }
}

function likePostApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/unlike`); //patch 게시글의 일부분을 수정
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data); //patch 게시글의 일부분을 수정
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`, data); //patch 게시글의 일부분을 수정
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchDeltePostImage() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(3000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_IMAGE_REQUEST"], DeltePostImage);
}

function* watchEditPostContent() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_POST_CONTENT_REQUEST"], EditPostContent);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchRemoveBookmark() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_BOOKMARK_REQUEST"], removeBookMark);
}

function* watchAddBookmark() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_BOOKMARK_REQUEST"], addBookMark);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchDeltePostImage), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchEditPostContent), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveBookmark), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddBookmark), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");





function loadBookmarksApi(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/bookmarks?lastId=${lastId || 0} `);
}

function* loadBookmarks(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadBookmarksApi, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_BOOKMARKS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_BOOKMARKS_FAILURE"],
      error: err.response.data
    });
  }
}

function recommendUserApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/recommend');
}

function* recommendUser() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(recommendUserApi);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_RECOMMEND_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_RECOMMEND_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function searchUserApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/list?data=${data || null}`);
}

function* searchUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(searchUserApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsApi(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsApi, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/login');
}

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoApi);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function signupApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/signUp', data);
}

function* signup(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signupApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function logInApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutApi);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNickNameApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickName(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNickNameApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function followApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/unfollow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function loadfollowersApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers');
}

function* loadfollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadfollowersApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadfollowingsApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings');
}

function* loadfollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadfollowingsApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function removefollowerApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);
}

function* removefollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removefollowerApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadBookMarks() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_BOOKMARKS_REQUEST"], loadBookmarks);
}

function* watchRecommendUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_RECOMMEND_USER_REQUEST"], recommendUser);
}

function* watchSearchUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(3000, _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_USER_REQUEST"], searchUser);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickName);
}

function* watchloadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchloadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchloadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signup);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadfollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadfollowings);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removefollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadBookMarks), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRecommendUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* eslint-disable no-unused-vars */







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap-icons":
/*!****************************************!*\
  !*** external "react-bootstrap-icons" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-icons");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0UG9zdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjb21tZW5kLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjb21tZW5kRm9sbG93QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkJ1dHRvbkdyb3VwV3JhcHBlciIsInN0eWxlZCIsIkJ1dHRvbkdyb3VwIiwiU2VhcmNoTGlzdCIsIkxpc3RHcm91cCIsIkNpcmNsZUJ1dHRvbiIsIkJ1dHRvbiIsIlNlYXJjaEZvcm0iLCJGb3JtQ29udHJvbCIsIlNlYXJjaEljb24iLCJTZWFyY2giLCJEZWxldGVTZWFyY2hDb250ZW50IiwiQ2xvc2VCdXR0b24iLCJEcm9wZG93bkRpdmlkZXIiLCJEcm9wZG93biIsIkRpdmlkZXIiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsImNvbnRhaW5lckgyIiwidXNlTWVtbyIsImN1cnNvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiQ29sMSIsInBhZGRpbmdMZWZ0IiwiYm9yZGVyUmlnaHQiLCJwb3NpdGlvbiIsIkNvbDIiLCJzaG93Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlTW9kYWxGb3JtIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwibWUiLCJyZWNvbW1lbmQiLCJzZWFyY2hVc2VyTGlzdCIsInNlYXJjaFVzZXJMb2FkaW5nIiwic2VhcmNoVXNlckRvbmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImFkZFBvc3RMb2FkaW5nIiwicG9zdCIsInNlYXJjaENvbnRlbnQiLCJzZXRzZWFyY2hDb250ZW50Iiwic2VhcmNoSGFzaHRhZyIsInNldHNlYXJjaEhhc2h0YWciLCJzZWFyY2hDb250cm9sIiwic2V0U2VhcmNoQ29udHJvbCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJGb2xsb3dlcnMiLCJsZW5ndGgiLCJGb2xsb3dpbmdzIiwidHlwZSIsIkxPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCIsInN0YXJ0c1dpdGgiLCJzbGljZSIsIkxPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCIsImRhdGEiLCJvbkNoYW5nZVNlYXJjaFVzZXJJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkRlbGV0ZVNlYXJjaCIsIkZpbmRVc2VyIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJ2Iiwibmlja25hbWUiLCJSb3V0ZXIiLCJwdXNoIiwiaWQiLCJTZWxlY3RMaXN0SXRlbSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJ6SW5kZXgiLCJ3aWR0aCIsImkiLCJkaXNwbGF5IiwidGV4dERlY29yYXRpb24iLCJtYXJnaW5Ub3AiLCJwcm9wdHlwZXMiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIkNvbW1lbnRGb3JtIiwiYWRkQ29tbWVudExvYWRpbmciLCJjb21tZW50VGV4dCIsIk9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInVzZUlucHV0IiwiYWRkQ29tbWVudERvbmUiLCJvblN1Ym1pdENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsInJpZ2h0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiRWRpdFBvc3RDb250ZW50IiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsIm9uU3VibWl0RWRpdCIsIkVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QiLCJjb250ZW50VGV4dCIsImJvcmRlciIsIm1hcmdpbiIsIkltYWdlcyIsInBhZGRpbmciLCJVc2VyIiwiZmxvYXQiLCJib29sIiwiZnVuYyIsIkZvbGxvd0J1dHRvbiIsImlzRm9sbG93aW5nIiwiZmluZCIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwic3JjIiwiYXJyYXlPZiIsIk92ZXJsYXkiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiQ2xvc2VCdG4iLCJYIiwiRm9ybUxhYmVsIiwiRm9ybSIsIkxhYmVsIiwiTG9naW5Gb3JtIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsImFsZXJ0Iiwib25TdWJtaXRIYW5kbGVyIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiUm93IiwibWFyZ2luTGVmdCIsInNwYW4iLCJvZmZzZXQiLCJtb21lbnQiLCJsb2NhbGUiLCJDb21tZW50TGlzdCIsIkNvbW1lbnRMaXN0SXRlbSIsIkl0ZW0iLCJNb3JlQnV0dG9uIiwiVG9vbHRpcCIsIlBvc3RDYXJkIiwiY29tbWVudE9wZW4iLCJzZXRDb21tZW50T3BlbiIsInJldHdlZXRFcnJvciIsImhlYWRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidWxTdHlsZSIsImxpc3RTdHlsZSIsImJvcmRlclRvcCIsImxpU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzcGFuU3R5bGUiLCJsaW5lSGVpZ2h0IiwiQm9va21hcmtTdHlsZSIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsIm9uVW5MaWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uTGlrZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiT25Ub2dnbGVDb21tZW50Iiwib25Qb3N0RGVsZXRlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIk9uQm9va21hcmsiLCJBRERfQk9PS01BUktfUkVRVUVTVCIsIk9uVW5Cb29rbWFyayIsIlJFTU9WRV9CT09LTUFSS19SRVFVRVNUIiwicmVuZGVyVG9vbHRpcCIsInByb3BzIiwiUmV0d2VldCIsImxpa2UiLCJMaWtlcnMiLCJib29rbWFyayIsIkJvb2ttYXJrZXJzIiwiUmV0d2VldElkIiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsImZvbnRXZWlnaHQiLCJDb21tZW50cyIsImhpZGUiLCJVc2VySWQiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsIm9iamVjdE9mIiwiYW55IiwiUG9zdENhcmRDb250ZW50IiwicG9zdENvbnRlbnQiLCJzcGxpdCIsIm1hdGNoIiwiUG9zdEZvcm0iLCJhZGRQb3N0RG9uZSIsImltYWdlUGF0aHMiLCJpbWFnZVVwbG9hZCIsInVzZVJlZiIsInNldFRleHQiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvblN1bWJpdFVwbG9hZCIsInRyaW0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJBRERfUE9TVF9SRVFVRVNUIiwib25DaGFuZ2VJbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJpbWFnZUZvcm1EYXRhIiwiY2FsbCIsImYiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJQb3N0SW1hZ2VzIiwicG9zdGlkIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsInNlbGVjdEltYWdlMSIsInNldFNlbGVjdEltYWdlMSIsInNlbGVjdEltYWdlMiIsInNldFNlbGVjdEltYWdlMiIsImRlbGV0ZVBvc3RJbWFnZUxvYWRpbmciLCJvblpvb20iLCJvbkRlbGV0ZUltYWdlIiwiaW1hZ2VpZCIsIkRFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QiLCJpbWFnZUlkIiwiaGFuZGxlRGVsZXRlSW1hZ2UiLCJ0b1N0cmluZyIsInN0eWxlIiwidG9wIiwiUHJvcHR5cGVzIiwiTGlzdEdyb3VwSXRlbSIsIkxpc3RJdGVtV3JhcHBlciIsIlJlY29tbWVuZCIsIlJlY29tbWVuZEZvbGxvd0J1dHRvbiIsInJlY29tbWVuZFVzZXIiLCJDYXJkTGlua1dyYXBwZXIiLCJMb2dvdXRCdXR0b24iLCJDYXJkQm9keSIsIkNhcmQiLCJCb2R5IiwiQ2FyZExpbmsiLCJMaW5rIiwiVXNlclByb2ZpbGUiLCJsb2dvdXRIYW5kbGVyIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImZsZXhEaXJlY3Rpb24iLCJmb3JtYXQiLCJQb3N0cyIsImluaXRpYWxWYWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInN0b3JlIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsInNpbmdsZVBvc3QiLCJyZW1vdmVCb29rbWFya0xvYWRpbmciLCJyZW1vdmVCb29rbWFya0RvbmUiLCJyZW1vdmVCb29rbWFya0Vycm9yIiwiYWRkQm9va21hcmtMb2FkaW5nIiwiYWRkQm9va21hcmtEb25lIiwiYWRkQm9va21hcmtFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsImVkaXRQb3N0Q29udGVudExvYWRpbmciLCJlZGl0UG9zdENvbnRlbnREb25lIiwiZWRpdFBvc3RDb250ZW50RXJyb3IiLCJkZWx0ZVBvc3RJbWFnZUxvYWRpbmciLCJkZWx0ZVBvc3RJbWFnZURvbmUiLCJkZWx0ZVBvc3RJbWFnZUVycm9yIiwiREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUyIsIkRFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUiLCJFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTIiwiRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSIsIkxPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCIsIkxPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyIsIkxPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSIsIkFERF9CT09LTUFSS19TVUNDRVNTIiwiQUREX0JPT0tNQVJLX0ZBSUxVUkUiLCJSRU1PVkVfQk9PS01BUktfU1VDQ0VTUyIsIlJFTU9WRV9CT09LTUFSS19GQUlMVVJFIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRQb3N0U3VjY2Vzc0FjdGlvbiIsImFkZFBvc3RGYWlsdXJlQWN0aW9uIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJmaWx0ZXIiLCJkZWxldGVQb3N0SW1hZ2VEb25lIiwiZGVsZXRlUG9zdEltYWdlRXJyb3IiLCJQb3N0SWQiLCJJbWFnZUlkIiwidW5saWtlUG9zdHNMb2FkaW5nIiwidW5saWtlUG9zdHNEb25lIiwidW5saWtlUG9zdHNFcnJvciIsInVuc2hpZnQiLCJjb25jYXQiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2dJbkRvbmUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImNoYW5nZU5pY2tOYW1lTG9hZGluZyIsImNoYW5nZU5pY2tOYW1lRXJyb3IiLCJjaGFuZ2VOaWNrTmFtZURvbmUiLCJzZWFyY2hVc2VyRXJyb3IiLCJ1c2VySW5mbyIsIkxPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyIsIkxPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSIsIkxPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUyIsIkxPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX1JFU0VUIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwiRGVsdGVQb3N0SW1hZ2VBcGkiLCJkZWxldGUiLCJEZWx0ZVBvc3RJbWFnZSIsInB1dCIsInJlc3BvbnNlIiwiRWRpdFBvc3RDb250ZW50QXBpIiwicGF0Y2giLCJsb2FkSGFzaHRhZ1Bvc3RzQXBpIiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRQb3N0QXBpIiwibG9hZFBvc3QiLCJsb2FkUG9zdHNBcGkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QXBpIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBcGkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFwaSIsImFkZEJvb2tNYXJrQXBpIiwiYWRkQm9va01hcmsiLCJyZW1vdmVCb29rTWFya0FwaSIsInJlbW92ZUJvb2tNYXJrIiwibGlrZVBvc3RBcGkiLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ3YXRjaERlbHRlUG9zdEltYWdlIiwidGhyb3R0bGUiLCJ3YXRjaEVkaXRQb3N0Q29udGVudCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoUmVtb3ZlQm9va21hcmsiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRCb29rbWFyayIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoUmV0d2VldCIsImxvYWRCb29rbWFya3NBcGkiLCJsb2FkQm9va21hcmtzIiwicmVjb21tZW5kVXNlckFwaSIsInNlYXJjaFVzZXJBcGkiLCJzZWFyY2hVc2VyIiwibG9hZFVzZXJQb3N0c0FwaSIsImxvYWRVc2VyUG9zdHMiLCJsb2FkTXlJbmZvQXBpIiwibG9hZE15SW5mbyIsImxvYWRVc2VyQXBpIiwibG9hZFVzZXIiLCJzaWdudXBBcGkiLCJzaWdudXAiLCJsb2dJbkFwaSIsImxvZ0luIiwibG9nT3V0QXBpIiwibG9nT3V0IiwiY2hhbmdlTmlja05hbWVBcGkiLCJjaGFuZ2VOaWNrTmFtZSIsImZvbGxvd0FwaSIsImZvbGxvdyIsInVuZm9sbG93QXBpIiwidW5mb2xsb3ciLCJsb2FkZm9sbG93ZXJzQXBpIiwibG9hZGZvbGxvd2VycyIsImxvYWRmb2xsb3dpbmdzQXBpIiwibG9hZGZvbGxvd2luZ3MiLCJyZW1vdmVmb2xsb3dlckFwaSIsInJlbW92ZWZvbGxvd2VyIiwid2F0Y2hMb2FkQm9va01hcmtzIiwid2F0Y2hSZWNvbW1lbmRVc2VyIiwid2F0Y2hTZWFyY2hVc2VyIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNobG9hZE15SW5mbyIsIndhdGNobG9hZFVzZXIiLCJ3YXRjaGxvYWRVc2VyUG9zdHMiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwibG9nZ2VyTWlkZGxld2FyZSIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGVsd2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiZW5hYmxlRVM1Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGdFQUFDLEdBQUcxUixJQUFKLEtBQWE7QUFDeEI4akIseURBQVM7QUFDVCxTQUFPck0scURBQU8sQ0FBQyxHQUFHelgsSUFBSixDQUFkO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7OztBQ0ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBGb3JtQ29udHJvbCwgRm9ybSwgQnV0dG9uLCBCdXR0b25Hcm91cCwgTW9kYWwsIExpc3RHcm91cCwgQ2xvc2VCdXR0b24sIERyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVHdpdHRlciwgU2VhcmNoLCBIb3VzZURvb3IsIEJvb2ttYXJrLCBQZXJzb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtJztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vVXNlclByb2ZpbGUnO1xyXG5cclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4vUG9zdEZvcm0nO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNULCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IFJlY29tbWVuZCBmcm9tICcuL1JlY29tbWVuZCc7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5jb250YWluZXItdHJ1ZSB7XHJcbiAgICAgICAgIG1hcmdpbjogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9ue1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwV3JhcHBlciA9IHN0eWxlZChCdXR0b25Hcm91cClgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDdyZW07XHJcbiAgICBhe1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHJlbTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9LFxyXG4gICAgQnV0dG9ue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9LFxyXG4gICAgaDN7XHJcbiAgICAgICAgIGNvbG9yOiAjMGE1OGNhO1xyXG4gICAgfVxyXG5cclxuYDtcclxuY29uc3QgU2VhcmNoTGlzdCA9IHN0eWxlZChMaXN0R3JvdXApYFxyXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICB0b3A6IDMuMTlyZW07XHJcbiAgICAgei1pbmRleDogOTtcclxuICAgICB3aWR0aDogMjklO1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBgO1xyXG5jb25zdCBDaXJjbGVCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmA7XHJcbmNvbnN0IFNlYXJjaEZvcm0gPSBzdHlsZWQoRm9ybUNvbnRyb2wpYFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmA7XHJcbmNvbnN0IFNlYXJjaEljb24gPSBzdHlsZWQoU2VhcmNoKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgIGA7XHJcbmNvbnN0IERlbGV0ZVNlYXJjaENvbnRlbnQgPSBzdHlsZWQoQ2xvc2VCdXR0b24pYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjI1cmVtO1xyXG4gICAgYDtcclxuY29uc3QgRHJvcGRvd25EaXZpZGVyID0gc3R5bGVkKERyb3Bkb3duLkRpdmlkZXIpYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBjb250YWluZXJIMiA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICBmb250U2l6ZTogJzNyZW0nLFxyXG4gIH0pLCBbXSk7XHJcbiAgY29uc3QgQ29sMSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgIHBhZGRpbmdMZWZ0OiAnMTJyZW0nLFxyXG4gICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI0RDRENEQycsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9KSwgW10pO1xyXG4gIGNvbnN0IENvbDIgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCAjRENEQ0RDJyxcclxuICB9KSwgW10pO1xyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTW9kYWxGb3JtID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIHNldFNob3coKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sXHJcbiAgICBbc2hvd10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBtZSwgcmVjb21tZW5kLCBzZWFyY2hVc2VyTGlzdCwgc2VhcmNoVXNlckxvYWRpbmcsIHNlYXJjaFVzZXJEb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgYWRkUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgW3NlYXJjaENvbnRlbnQsIHNldHNlYXJjaENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWFyY2hIYXNodGFnLCBzZXRzZWFyY2hIYXNodGFnXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VhcmNoQ29udHJvbCwgc2V0U2VhcmNoQ29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1lICYmIG1lLkZvbGxvd2Vycy5sZW5ndGggPj0gMSAmJiBtZS5Gb2xsb3dpbmdzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFttZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gI3N0YXRcclxuICAgIC8vIHN0YXQg7J2EIOu9keyVhOuCtOqzoCDqt7jqsbggZGlzcGF0Y2gg7ZW07JW87ZWc64ukLlxyXG4gICAgaWYgKHNlYXJjaENvbnRlbnQuc3RhcnRzV2l0aCgnIycpKSB7XHJcbiAgICAgIHNldHNlYXJjaEhhc2h0YWcoc2VhcmNoQ29udGVudC5zbGljZSgxKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWFyY2hVc2VyJyxzZWFyY2hIYXNodGFnKVxyXG4gICAgfVxyXG4gICAgaWYgKHNlYXJjaENvbnRlbnQpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBzZWFyY2hDb250ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbc2VhcmNoQ29udGVudF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaFVzZXJMb2FkaW5nKSB7XHJcbiAgICAgIHNldFNlYXJjaENvbnRyb2wodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaFVzZXJMb2FkaW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkUG9zdExvYWRpbmcpIHtcclxuICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICBzZXRTaG93KChwcmV2KSA9PiAhcHJldik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWRkUG9zdExvYWRpbmddKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaFVzZXJEb25lKSB7XHJcbiAgICAgIHNldFNlYXJjaENvbnRyb2woZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWFyY2hVc2VyRG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVNlYXJjaFVzZXJJbnB1dCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0c2VhcmNoQ29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgW3NlYXJjaENvbnRlbnRdLFxyXG4gICk7XHJcbiAgY29uc3QgRGVsZXRlU2VhcmNoID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIHNldHNlYXJjaENvbnRlbnQoJycpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IEZpbmRVc2VyID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNlYXJjaFVzZXJMaXN0Py5tYXAoKHYpID0+IHtcclxuICAgICAgICBpZiAoc2VhcmNoQ29udGVudCAmJiBzZWFyY2hDb250ZW50ID09PSB2Lm5pY2tuYW1lKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXIvJHt2LmlkfWApO1xyXG4gICAgICAgICAgc2V0c2VhcmNoQ29udGVudCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChzZWFyY2hIYXNodGFnKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSGFzaHRhZ31gKTtcclxuICAgICAgICBzZXRzZWFyY2hDb250ZW50KCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtzZWFyY2hIYXNodGFnLCBzZWFyY2hVc2VyTGlzdCwgc2VhcmNoQ29udGVudF0sXHJcbiAgKTtcclxuICBjb25zdCBTZWxlY3RMaXN0SXRlbSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzZXRzZWFyY2hDb250ZW50KCcnKTtcclxuICAgIH0sXHJcblxyXG4gICAgW10sXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPFJvdyB4cz17MX0gbWQ9ezJ9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtDb2wxfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcgfX0gaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17Y29udGFpbmVySDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVyIHN0eWxlPXt7IGNvbG9yOiAnIzBhNThjYScsIHBvc2l0aW9uOiAnZml4ZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cFdyYXBwZXIgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQgc2l6ZT1cImxnXCI+PExpbmsgaHJlZj1cIi9cIj48aDM+XHJcbjxIb3VzZURvb3Igc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxcmVtJyB9fS8+XHJcbkhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQgc2l6ZT1cImxnXCI+PExpbmsgaHJlZj1cIi9ib29rbWFya3NcIj48aDM+XHJcbjxCb29rbWFyayBzdHlsZT17eyBtYXJnaW5SaWdodDogJzFyZW0nIH19Lz5cclxuQm9va21hcmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQgc2l6ZT1cImxnXCI+PExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGgzPlxyXG48UGVyc29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMXJlbScgfX0vPlxyXG5Qcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHshbWUgJiYgKFxyXG48QnV0dG9uIHZhcmlhbnQgc2l6ZT1cImxnXCI+PExpbmsgaHJlZj1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoU8L0xpbms+XHJcbjwvQnV0dG9uPlxyXG4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTW9kYWxGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaXJjbGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21lID8gKFxyXG48TW9kYWwgc2l6ZT1cImxnXCIgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVNb2RhbEZvcm19IGFuaW1hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57JyAnfTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PjxQb3N0Rm9ybS8+PC9Nb2RhbC5Cb2R5PlxyXG48L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgIDxDb2wgc3R5bGU9e0NvbDJ9PntjaGlsZHJlbn08L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAnMTAnIH19IG9uU3VibWl0PXtGaW5kVXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB3aWR0aDogJzI5JScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSB2YWx1ZT17c2VhcmNoQ29udGVudH0gb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoVXNlcklucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFVzZXIgb3IgSGFzaHRhZ1wiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hDb250ZW50ICYmIDxEZWxldGVTZWFyY2hDb250ZW50IG9uQ2xpY2s9e0RlbGV0ZVNlYXJjaH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fSB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCIgb25DbGljaz17b25TZWFyY2hVc2VyfT7ssL7quLA8L0J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlYXJjaENvbnRlbnQgJiYgc2VhcmNoVXNlckxpc3QpICYmIHNlYXJjaFVzZXJMaXN0Lm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gZGlzYWJsZWQ9e3NlYXJjaENvbnRyb2x9IG9uU2VsZWN0PXtTZWxlY3RMaXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3YuaWR9YH0+PGEgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fSA+e3Yubmlja25hbWV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoTGlzdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzNyZW0nLCB6SW5kZXg6ICc4JywgcG9zaXRpb246ICdmaXhlZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsobWUgJiYgcmVjb21tZW5kKSA/IDxSZWNvbW1lbmQgcmVjb21tZW5kPXtyZWNvbW1lbmR9IC8+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcHR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBwcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICAgIGNvbnN0IHsgYWRkQ29tbWVudExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbY29tbWVudFRleHQsIE9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IHsgYWRkQ29tbWVudERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWRkQ29tbWVudERvbmUpIHsgc2V0Q29tbWVudFRleHQoJycpOyB9XHJcbiAgICB9LCBbYWRkQ29tbWVudERvbmVdKTtcclxuICAgIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNvbnRlbnQ6IGNvbW1lbnRUZXh0LCBwb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZDogaWQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbbWUsIGNvbW1lbnRUZXh0LCBtZSAmJiBtZS5pZF0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19IGNvbnRyb2xJZD1cImV4YW1wbGVGb3JtLkNvbnRyb2xUZXh0YXJlYTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzck9ubHk+RXhhbXBsZSB0ZXh0YXJlYTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3dzPXszfSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtPbkNoYW5nZUNvbW1lbnRUZXh0fS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXthZGRDb21tZW50TG9hZGluZyB8fCAhY29tbWVudFRleHR9IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCB9fSB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIHthZGRDb21tZW50TG9hZGluZyA/ICdMb2FkaW5n4oCmJyA6ICfqsozsi5wnfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEZvcm1Db250cm9sLCBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IEVkaXRQb3N0Q29udGVudCA9ICh7IHBvc3QsIHNob3csIGhhbmRsZU1vZGFsRm9ybSB9KSA9PiB7XHJcbiAgICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0XSA9IHVzZUlucHV0KHBvc3Q/LmNvbnRlbnQpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgb25TdWJtaXRFZGl0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhhbmRsZU1vZGFsRm9ybSgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHBvc3RJZDogcG9zdC5pZCwgY29udGVudFRleHQ6IHRleHQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFtwb3N0LmlkLCB0ZXh0XSxcclxuICAgICk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgICAgICBvbkhpZGU9e2hhbmRsZU1vZGFsRm9ybX1cclxuICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiRWRpdCBDb250ZW50XCJcclxuICAgICAgICAgICAgID5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiZUVkaXQgQ29udGVudFwiPlxyXG4gICAgICAgICAgICBFZGl0IENvbnRlbnRcclxuICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlcjogMCwgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbjogJzAuMDVyZW0nIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9IHt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBoZWFkZXIgPSBcIuyImOyglVwiIHBvc3RpZCA9IHtwb3N0LmlkfSBpbWFnZXMgPSB7cG9zdC5JbWFnZXN9Lz59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcycmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0ge2AvdXNlci8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwiaG9sZGVyLmpzLzE3MXgxODBcIiByb3VuZGVkQ2lyY2xlIC8+ICovfTxhPntwb3N0LlVzZXIubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgYXM9XCJ0ZXh0YXJlYVwiIHJvd3M9ezN9IHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdEVkaXR9IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IHZhcmlhbnQ9XCJwcmltYXJ5XCIgPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5FZGl0UG9zdENvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IHByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBzaG93OiBwcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZU1vZGFsRm9ybTogcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRWRpdFBvc3RDb250ZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTsgXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbaXNGb2xsb3dpbmddKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIG9uQ2xpY2s9IHtvbkNsaWNrQnV0dG9ufSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCI+XHJcbiAgICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgIDwvQnV0dG9uPlxyXG4gICAgXHJcbiAgICApO1xyXG59O1xyXG5cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAgICAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE92ZXJsYXksIEdsb2JhbCwgQ2xvc2VCdG4sIEhlYWRlciwgSW1nV3JhcHBlciwgSW5kaWNhdG9yLCBTbGlja1dyYXBwZXIgfSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE92ZXJsYXk+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgPENsb3NlQnRuIG9uQ2xpY2s9e29uQ2xvc2V9Plg8L0Nsb3NlQnRuPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPFNsaWNrV3JhcHBlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cclxuICAgICAgICAgICAgYmVmb3JlQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMzByZW0nIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Yuc3JjfWB9IGFsdD17di5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICA8SW5kaWNhdG9yPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50U2xpZGUgKyAxfVxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvSW5kaWNhdG9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgIDwvT3ZlcmxheT5cclxuICApO1xyXG59O1xyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgWCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICAgIGhlYWRlcjogNDRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDAgMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAmaDEge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU2xpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcclxuYmFja2dyb3VuZDojMDkwOTA5O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gICAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgICB3aWR0aDo3NXB4O1xyXG4gICAgICAgIGhlZ2l0aDozMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMxMzEzMTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQoWClgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIENvbCwgQnV0dG9uLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvcm1MYWJlbCA9IHN0eWxlZChGb3JtLkxhYmVsKWBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xyXG4gICAgICAgICB9LCBbZW1haWwsIHBhc3N3b3JkXSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY29udHJvbElkPVwiZm9ybUhvcml6b250YWxFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29sdW1uIHNtPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbHVtbiBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209e3sgc3BhbjogMTAsIG9mZnNldDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17bG9nSW5Mb2FkaW5nfSB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dJbkxvYWRpbmcgPyAnTG9hZGluZ+KApicgOiAn66Gc6re47J24J30gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCI+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgTGlzdEdyb3VwLCBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFNoYXJlLCBIZWFydCwgSGVhcnRGaWxsLCBDaGF0RG90cywgVGhyZWVEb3RzLCBCb29rbWFyaywgQm9va21hcmtGaWxsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLWljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBBRERfQk9PS01BUktfUkVRVUVTVCwgTElLRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9CT09LTUFSS19SRVFVRVNULCBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRVRXRUVUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcbmltcG9ydCBFZGl0UG9zdENvbnRlbnQgZnJvbSAnLi9FZGl0UG9zdENvbnRlbnQnO1xyXG5cclxubW9tZW50LmxvY2FsZSgna28nKTtcclxuXHJcbmNvbnN0IENvbW1lbnRMaXN0ID0gc3R5bGVkKExpc3RHcm91cClgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3IgOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcCA6IDAuM3JlbVxyXG4gICAgICAgIH1cclxuICAgIGA7XHJcbmNvbnN0IENvbW1lbnRMaXN0SXRlbSA9IHN0eWxlZChMaXN0R3JvdXAuSXRlbSlgXHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAxcmVtO1xyXG5gO1xyXG5jb25zdCBNb3JlQnV0dG9uID0gc3R5bGVkKFRvb2x0aXApYFxyXG4gICAgICAgIC50b29sdGlwLWlubmVye1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYxO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLmFycm93OjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZjBmMGYxO1xyXG4gICAgICAgIH0sXHJcbmA7XHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudE9wZW4sIHNldENvbW1lbnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgICBjb25zdCB7IHJldHdlZXRFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IGNhcmRIZWFkZXIgPSBzdHlsZWQoQ2FyZC5IZWFkZXIpYFxyXG4gICAgLy8gYmFja2dyb3VuZCA6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBcclxuICAgIC8vIGBcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGVyU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgICB9KSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHVsU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNmMGYwZjAnLFxyXG4gICAgfSksIFtdKTtcclxuXHJcbiAgICBjb25zdCBsaVN0eWxlID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgICAgIHdpZHRoOiAnMjUlJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCAjZjBmMGYwJyxcclxuICAgICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnMTJweCAwJyxcclxuICAgIH0pLCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc3BhblN0eWxlID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNHB4JyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcblxyXG4gICAgfSksIFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgQm9va21hcmtTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBmb250U2l6ZTogJzEuNXJlbScsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgfSksIFtdKTtcclxuICAgIFxyXG4gICAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduCDtm4Qg7J207Jqp7ZWY7IukIOyImCDsnojsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbaWRdLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbgg7ZuEIOydtOyaqe2VmOyLpCDsiJgg7J6I7Iq164uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtpZF0sXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduCDtm4Qg7J207Jqp7ZWY7IukIOyImCDsnojsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtpZF0sXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBjb25zdCBPblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbW1lbnRPcGVuKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBvblBvc3REZWxldGUgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J24IO2bhCDsnbTsmqntlZjsi6Qg7IiYIOyeiOyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbcG9zdC5pZF0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IE9uQm9va21hcmsgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J24IO2bhCDsnbTsmqntlZjsi6Qg7IiYIOyeiOyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfQk9PS01BUktfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2lkXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBPblVuQm9va21hcmsgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J24IO2bhCDsnbTsmqntlZjsi6Qg7IiYIOyeiOyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2lkXSxcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZU1vZGFsRm9ybSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3coKHNob3cpID0+ICFzaG93KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzaG93XSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxNb3JlQnV0dG9uIGlkPVwiYnV0dG9uLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgJiYgIXBvc3QuUmV0d2VldFxyXG4gICAgICAgICAgICAgICAgICYmIDxCdXR0b24gdmFyaWFudD1cIndhcm5pbmdcIiBvbkNsaWNrPXtoYW5kbGVNb2RhbEZvcm19PuyImOyglTwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWRcclxuICAgICAgICAgICAgICAgJiYgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17b25Qb3N0RGVsZXRlfT7sgq3soJw8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCAhPT0gaWRcclxuICAgICAgICAgICAgICAgICYmIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICA8L01vcmVCdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgIGNvbnN0IGxpa2UgPSBwb3N0Lkxpa2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCk7XHJcblxyXG4gICAgY29uc3QgYm9va21hcmsgPSBwb3N0LkJvb2ttYXJrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxMDBweCAwIDIwcHgnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtoZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOyVhOydtOuUlOqwgCBwb3N07J2YIHVzZXJpZOyZgCDqsJnri6TrqbQg7JWI67O07J206rKMICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LlJldHdlZXRJZCA/IGAke3Bvc3QuVXNlci5uaWNrbmFtZX3ri5jsnbQg66as7Yq47JyXIO2VmOyFqOyKteuLiOuLpC5gIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWRcclxuICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICA6IDxGb2xsb3dCdXR0b24gcG9zdCA9IHtwb3N0fS8+fVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5SZXR3ZWV0SWQgJiYgcG9zdC5SZXR3ZWV0XHJcbiAgICAgICAgICAgICAgICAgICAgPyAoXHJcbjxDYXJkIHN0eWxlPXt7IGJvcmRlcjogMCwgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbjogJzAuMDVyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcyA9IHtwb3N0LlJldHdlZXQuSW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rbWFyayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxCb29rbWFya0ZpbGwgc3R5bGUgPSB7Qm9va21hcmtTdHlsZX0gb25DbGljayA9IHtPblVuQm9va21hcmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxCb29rbWFyayBzdHlsZT17Qm9va21hcmtTdHlsZX0gb25DbGljaz17T25Cb29rbWFya30vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzJyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0ge2AvdXNlci8ke3Bvc3QuUmV0d2VldC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz1cImhvbGRlci5qcy8xNzF4MTgwXCIgcm91bmRlZENpcmNsZSAvPiAqL317cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19Pnttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZyb21Ob3coKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Lkxpa2Vycy5sZW5ndGggPj0gMSA/IDxoNiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJyB9fT7soovslYTsmpQge3Bvc3QuTGlrZXJzLmxlbmd0aH3qsJw8L2g2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkQ29udGVudCBwb3N0Q29udGVudCA9IHtwb3N0LlJldHdlZXQuY29udGVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3sgbWFyZ2luVG9wOiAnMXJlbScsIGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3Bvc3QuQ29tbWVudHNbMF0gJiYgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5Db21tZW50c1swXS5Vc2VyLmlkfWB9PjxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnIzIxMjUyOScgfX0+e3Bvc3QuQ29tbWVudHNbMF0uVXNlci5uaWNrbmFtZX08L2E+PC9MaW5rPn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICcxLjInIH19Pntwb3N0LkNvbW1lbnRzWzBdICYmIHBvc3QuQ29tbWVudHNbMF0uY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuPC9DYXJkPlxyXG4pXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoXHJcbjxDYXJkIHN0eWxlPXt7IGJvcmRlcjogMCwgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbjogJzAuMDVyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXMgPSB7cG9zdC5JbWFnZXN9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2ttYXJrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPEJvb2ttYXJrRmlsbCBzdHlsZSA9IHtCb29rbWFya1N0eWxlfSBvbkNsaWNrID0ge09uVW5Cb29rbWFya30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPEJvb2ttYXJrIHN0eWxlPXtCb29rbWFya1N0eWxlfSBvbkNsaWNrPXtPbkJvb2ttYXJrfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzJyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwiaG9sZGVyLmpzLzE3MXgxODBcIiByb3VuZGVkQ2lyY2xlIC8+ICovfTxhPntwb3N0LlVzZXIubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5MaWtlcnMubGVuZ3RoID49IDEgPyA8aDYgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcgfX0+7KKL7JWE7JqUIHtwb3N0Lkxpa2Vycy5sZW5ndGh96rCcPC9oNj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmRDb250ZW50IHBvc3RDb250ZW50ID0ge3Bvc3QuY29udGVudH0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3sgbWFyZ2luVG9wOiAnMXJlbScsIGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cG9zdC5Db21tZW50c1swXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoXHJcbjxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3QuQ29tbWVudHNbMF0uVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICcjMjEyNTI5JyB9fT57cG9zdC5Db21tZW50c1swXS5Vc2VyLm5pY2tuYW1lfTwvYT5cclxuPC9MaW5rPlxyXG4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbGluZUhlaWdodDogJzEuMicgfX0+e3Bvc3QuQ29tbWVudHNbMF0gJiYgcG9zdC5Db21tZW50c1swXS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbjwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17dWxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGlTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3BhblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IG9uQ2xpY2s9e29uUmV0d2VldH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xpU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3NwYW5TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlrZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0RmlsbCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBjb2xvcjogJyNkYzM1NDUnIH19IG9uQ2xpY2s9e29uVW5MaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8SGVhcnQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBvbkNsaWNrPXtvbkxpa2V9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGlTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3BhblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdERvdHMgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBvbkNsaWNrPXtPblRvZ2dsZUNvbW1lbnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtsaVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzcGFuU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKFxyXG48T3ZlcmxheVRyaWdnZXJcclxuICBwbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gIG92ZXJsYXk9e3JlbmRlclRvb2x0aXB9XHJcbiAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhyZWVEb3RzIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0vPlxyXG48L092ZXJsYXlUcmlnZ2VyPlxyXG4pfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRPcGVuXHJcbiAgICAgICAgICAgICYmIChcclxuPGRpdiBzdHlsZT17eyB3aWR0aDogJzMzcmVtJyB9fT5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50TGlzdCB2YXJpYW50PVwiZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5Db21tZW50c1swXSAmJiBwb3N0LkNvbW1lbnRzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaG9sZGVyLmpzLzIweDIwP3RleHQ9JTIwXCIgY2xhc3NOYW1lPVwicm91bmRlZCBtci0yXCIgYWx0PVwiXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPSB7YC91c2VyLyR7di5Vc2VyLmlkfWB9PjxhPnt2LlVzZXJJZCAmJiB2LlVzZXIubmlja25hbWV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbW1lbnRMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQ29tbWVudExpc3Q+XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDxFZGl0UG9zdENvbnRlbnQgcG9zdD17cG9zdH0gc2hvdz17c2hvd30gaGFuZGxlTW9kYWxGb3JtPSB7aGFuZGxlTW9kYWxGb3JtfS8+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBMaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHsgcG9zdENvbnRlbnQgfSkgPT4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3Bvc3RDb250ZW50LnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9IGtleT17aX0+PGE+e3Z9PC9hPjwvTGluaz47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHsgcG9zdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFLCBVUExPQURfSU1BR0VTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRQb3N0RG9uZSwgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGltYWdlVXBsb2FkID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthZGRQb3N0RG9uZV0pO1xyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpbWFnZVVwbG9hZC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbaW1hZ2VVcGxvYWQuY3VycmVudF0sXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25TdW1iaXRVcGxvYWQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGV4dCwgaW1hZ2VQYXRoc10sXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgICAgICAgIH0pOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtdLFxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VtYml0VXBsb2FkfSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID48aDI+SG9tZTwvaDI+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcm93cz17M30gdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZS5JbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIHJlZj17aW1hZ2VVcGxvYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gbXVsdGlwbGUgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJyB9fSBvbkNsaWNrID0ge29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeA7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luVG9wOiAnMXJlbScgfX0gdHlwZT1cInN1Ym1pdFwiID7qsozsi5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBhbHQ9e3Z9IHN0eWxlPSB7eyB3aWR0aDogJzIyMHB4JyB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3B0eXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFhTcXVhcmVGaWxsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLWljb25zJztcclxuaW1wb3J0IHsgREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgSW1hZ2VzWm9vbSBmcm9tICcuL0ltYWdlc1pvb20nO1xyXG5cclxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcywgaGVhZGVyLCBwb3N0aWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0SW1hZ2UxLCBzZXRTZWxlY3RJbWFnZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdEltYWdlMiwgc2V0U2VsZWN0SW1hZ2UyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgZGVsZXRlUG9zdEltYWdlTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbiAgIFxyXG4gICAgY29uc3Qgb25EZWxldGVJbWFnZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGltYWdlaWQsIHBvc3RpZCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNULFxyXG4gICAgICAgICAgICAgIGRhdGE6IHsgaW1hZ2VJZDogaW1hZ2VpZCwgcG9zdElkOiBwb3N0aWQgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFtdLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUltYWdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gaW1hZ2VzWzBdLmlkLnRvU3RyaW5nKDEwKSAmJiAhc2VsZWN0SW1hZ2UxKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlciA9ICcwLjVyZW0gc29saWQgcmVkJztcclxuICAgICAgICAgICAgc2V0U2VsZWN0SW1hZ2UxKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gaW1hZ2VzWzBdLmlkLnRvU3RyaW5nKDEwKSAmJiBzZWxlY3RJbWFnZTEpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RJbWFnZTEoKHByZXYpID0+ICFwcmV2KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBpbWFnZXNbMV0uaWQudG9TdHJpbmcoMTApICYmICFzZWxlY3RJbWFnZTIpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyID0gJzAuNXJlbSBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RJbWFnZTIoKHByZXYpID0+ICFwcmV2KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBpbWFnZXNbMV0uaWQudG9TdHJpbmcoMTApICYmIHNlbGVjdEltYWdlMikge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdEltYWdlMigocHJldikgPT4gIXByZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgICAgW3NlbGVjdEltYWdlMSwgc2VsZWN0SW1hZ2UyLCBpbWFnZXNdLFxyXG5cclxuICAgICk7XHJcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIGhlYWRlciBcclxuICAgICAgICAgICAgJiYgKFxyXG48PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSW1nIGlkID17aW1hZ2VzWzBdLmlkfSBvbkNsaWNrID0ge2hhbmRsZURlbGV0ZUltYWdlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHZhcmlhbnQ9XCJ0b3BcIiBhbHQ9e2ltYWdlc1swXS5zcmN9IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RJbWFnZTEgJiYgPFhTcXVhcmVGaWxsIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIHJpZ2h0OiAnMCcsIGZvbnRTaXplOiAnMjhweCcsIGNvbG9yOiAncmVkJywgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXshZGVsZXRlUG9zdEltYWdlTG9hZGluZyAmJiBvbkRlbGV0ZUltYWdlKGltYWdlc1swXS5pZCwgcG9zdGlkKX0+RGVsZXRlPC9YU3F1YXJlRmlsbD59XHJcbjwvPlxyXG4pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHshaGVhZGVyICBcclxuICAgICAgICAgICAgJiYgKFxyXG48PlxyXG4gICAgICAgICAgICA8Q2FyZC5JbWcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSB2YXJpYW50PVwidG9wXCIgYWx0PXtpbWFnZXNbMF0uc3JjfSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG48Lz5cclxuKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICB7aGVhZGVyXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbjw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIGlkID17aW1hZ2VzWzBdLmlkfSBvbkNsaWNrID0ge2hhbmRsZURlbGV0ZUltYWdlfSBzdHlsZT17eyB3aWR0aDogJzUwJScgfX0gdmFyaWFudD1cInRvcFwiIGFsdD17aW1hZ2VzWzBdLnNyY30gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBpZCA9e2ltYWdlc1sxXS5pZH0gb25DbGljayA9IHtoYW5kbGVEZWxldGVJbWFnZX0gc3R5bGU9e3sgd2lkdGg6ICc1MCUnIH19IHZhcmlhbnQ9XCJ0b3BcIiBhbHQ9e2ltYWdlc1sxXS5zcmN9IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1sxXS5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SW1hZ2UxICYmIDxYU3F1YXJlRmlsbCBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCByaWdodDogJzUwJScsIGZvbnRTaXplOiAnMjhweCcsIGNvbG9yOiAncmVkJywgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXshZGVsZXRlUG9zdEltYWdlTG9hZGluZyAmJiBvbkRlbGV0ZUltYWdlKGltYWdlc1swXS5pZCwgcG9zdGlkKX0+RGVsZXRlPC9YU3F1YXJlRmlsbD59XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdEltYWdlMiAmJiA8WFNxdWFyZUZpbGwgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGZvbnRTaXplOiAnMjhweCcsIGNvbG9yOiAncmVkJywgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXshZGVsZXRlUG9zdEltYWdlTG9hZGluZyAmJiBvbkRlbGV0ZUltYWdlKGltYWdlc1sxXS5pZCwgcG9zdGlkKX0+RGVsZXRlPC9YU3F1YXJlRmlsbD59XHJcbjwvPlxyXG4pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeyFoZWFkZXIgIFxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG48PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSW1nIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fSB2YXJpYW50PVwidG9wXCIgYWx0PXtpbWFnZXNbMF0uc3JjfSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IG9uQ2xpY2s9e29uWm9vbX0vPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSW1nIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fSB2YXJpYW50PVwidG9wXCIgYWx0PXtpbWFnZXNbMV0uc3JjfSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IG9uQ2xpY2s9e29uWm9vbX0vPlxyXG4gICAgICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuPC8+XHJcbil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIGhlYWRlciBcclxuICAgICAgICAgICAgJiYgKFxyXG48PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSW1nIGlkID17aW1hZ2VzWzBdLmlkfSBvbkNsaWNrID0ge2hhbmRsZURlbGV0ZUltYWdlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHZhcmlhbnQ9XCJ0b3BcIiBhbHQ9e2ltYWdlc1swXS5zcmN9IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RJbWFnZTEgJiYgPFhTcXVhcmVGaWxsIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIHJpZ2h0OiAnMCcsIGZvbnRTaXplOiAnMjhweCcsIGNvbG9yOiAncmVkJywgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXshZGVsZXRlUG9zdEltYWdlTG9hZGluZyAmJiBvbkRlbGV0ZUltYWdlKGltYWdlc1swXS5pZCwgcG9zdGlkKX0+RGVsZXRlPC9YU3F1YXJlRmlsbD59XHJcbjwvPlxyXG4pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHshaGVhZGVyICBcclxuICAgICAgICAgICAgJiYgKFxyXG48PlxyXG4gICAgICAgICAgICA8Q2FyZC5JbWcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSB2YXJpYW50PVwidG9wXCIgYWx0PXtpbWFnZXNbMF0uc3JjfSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG48Lz5cclxuKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gICAgaW1hZ2VzOiBQcm9wdHlwZXMuYXJyYXlPZihQcm9wdHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgaGVhZGVyOiBQcm9wdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwb3N0aWQ6IFByb3B0eXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWNvbW1lbmRGb2xsb3dCdXR0b24gZnJvbSAnLi9SZWNvbW1lbmRGb2xsb3dCdXR0b24nO1xyXG5cclxuY29uc3QgTGlzdEdyb3VwSXRlbSA9IHN0eWxlZChMaXN0R3JvdXAuSXRlbSlgXHJcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuYDtcclxuY29uc3QgTGlzdEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBcclxuYDtcclxuY29uc3QgUmVjb21tZW5kID0gKHsgcmVjb21tZW5kIH0pID0+IC8q7J20IOu2gOu2hOydtCDsm5Drnpgg64uo7J287JWE7J2065SU66W8IOqwgOyguOyZgOyEnCDruYTqtZDtlbTslbwg65Cc64ukLiovIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPldobyB0byBmb2xsb3c8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICAgICB7cmVjb21tZW5kICYmIHJlY29tbWVuZC5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVdyYXBwZXIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBhY3Rpb24gaHJlZj17YC91c2VyLyR7di5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Yubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNvbW1lbmRGb2xsb3dCdXR0b24gcmVjb21tZW5kVXNlcj17dn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblJlY29tbWVuZC5wcm9wVHlwZXMgPSB7XHJcbiAgICByZWNvbW1lbmQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUHJvcHR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBSZWNvbW1lbmRGb2xsb3dCdXR0b24gPSAoeyByZWNvbW1lbmRVc2VyIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lICYmIG1lLkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcmVjb21tZW5kVXNlci5pZCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzRm9sbG93aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZWNvbW1lbmRVc2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVjb21tZW5kVXNlci5pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbaXNGb2xsb3dpbmcsIHJlY29tbWVuZFVzZXJdLFxyXG4gICAgKTsgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6ICcxMCcsIHJpZ2h0OiAnMXJlbScsIHRvcDogJzEuNnJlbScgfX0gb25DbGljaz17b25DbGlja0J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICB7aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnIH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5SZWNvbW1lbmRGb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gICAgcmVjb21tZW5kVXNlcjogUHJvcHR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmRGb2xsb3dCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBDYXJkTGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZy10b3AgOiAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50XHJcbiAgICBcclxuYDtcclxuY29uc3QgTG9nb3V0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5gO1xyXG5jb25zdCBDYXJkQm9keSA9IHN0eWxlZChDYXJkLkJvZHkpYFxyXG4gICAgcGFkZGluZzogMS4wcmVtO1xyXG5gO1xyXG5jb25zdCBDYXJkTGluayA9IHN0eWxlZChDYXJkLkxpbmspYFxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGxvZ291dEhhbmRsZXIgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0UmVxdWVzdEFjdGlvbigpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW10sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzMxcmVtJywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XHJcbiAgICAgICAgICAgIHsvKiA8Q2FyZC5JbWcgdmFyaWFudD1cImxlZnRcIiBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMjA3NTQ2OTc1MS0zYTY2OTRmYjJmNjE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTgwXCIgd2lkdGg9JzE1NScgLz4gKi99XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL3VzZXIvJHttZS5pZH1gfT48YT48Q2FyZC5UaXRsZT57bWUubmlja25hbWV9PC9DYXJkLlRpdGxlPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TG9nb3V0QnV0dG9uIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PuuhnOq3uOyVhOybgzwvTG9nb3V0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3sgZmxvYXQ6ICdyaWdodCcsIG1hcmdpblRvcDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEpvaW5lZCB7bW9tZW50KG1lLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU1NIFlZWVknKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkTGlua1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0ge2AvdXNlci8ke21lLmlkfWB9PjxhPjxDYXJkTGluayBocmVmPVwiI1wiPuqyjOyLnOusvCA8YnIvPnttZS5Qb3N0cy5sZW5ndGh9PC9DYXJkTGluaz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhPjxDYXJkTGluayBocmVmPVwiI1wiPu2MlOuhnOyasCA8YnIvPnttZS5Gb2xsb3dpbmdzLmxlbmd0aH08L0NhcmRMaW5rPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGE+PENhcmRMaW5rIGhyZWY9XCIjXCI+7YyU66Gc7JuMIDxici8+e21lLkZvbGxvd2Vycy5sZW5ndGh9PC9DYXJkTGluaz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkTGlua1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWU9IG51bGwpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIH0sW10pO1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUsaGFuZGxlcixzZXRWYWx1ZV1cclxufVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xyXG5cclxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcclxuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XHJcbiAgICByZXR1cm4gY2FjaGU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNhY2hlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcclxuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XHJcblxyXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xyXG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5ld09iaiA9IHt9O1xyXG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuXHJcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xyXG5cclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xyXG5cclxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcclxuICAgIHZhciB0b2tlbnMgPSBbXTtcclxuICAgIHZhciBpID0gMDtcclxuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xyXG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcclxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcclxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcclxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFuYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xyXG4gICAgICAgICAgICBpID0gajtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xyXG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XHJcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcclxuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XHJcbiAgICAgICAgICAgIGkgPSBqO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcclxuICAgIH1cclxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xyXG4gICAgcmV0dXJuIHRva2VucztcclxufVxyXG4vKipcclxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcclxuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICB2YXIga2V5ID0gMDtcclxuICAgIHZhciBpID0gMDtcclxuICAgIHZhciBwYXRoID0gXCJcIjtcclxuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcclxuICAgIH07XHJcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xyXG4gICAgfTtcclxuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICB2YXIgdmFsdWU7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xyXG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcclxuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcclxuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcclxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxyXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcclxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xyXG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcclxuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcclxuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcclxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxyXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXHJcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xyXG4vKipcclxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cclxuICovXHJcbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcclxufVxyXG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xyXG4vKipcclxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xyXG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXHJcbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xyXG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xyXG4vKipcclxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBrZXlzID0gW107XHJcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcclxuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcclxufVxyXG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xyXG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XHJcbiAgICAgICAgaWYgKCFtKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcclxuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XHJcbi8qKlxyXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XHJcbn1cclxuLyoqXHJcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcclxufVxyXG4vKipcclxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xyXG4gICAgaWYgKCFrZXlzKVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cclxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcclxuICAgIGlmIChncm91cHMpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBrZXlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaSxcclxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG4vKipcclxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xyXG59XHJcbi8qKlxyXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxyXG4gKi9cclxuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XHJcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcclxuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xyXG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XHJcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxyXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcclxuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlbmQpIHtcclxuICAgICAgICBpZiAoIXN0cmljdClcclxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XHJcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcclxuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxyXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoIXN0cmljdCkge1xyXG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xyXG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XHJcbn1cclxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xyXG4vKipcclxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxyXG4gKlxyXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxyXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXHJcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxyXG4gKi9cclxuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcclxuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxyXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xyXG59XHJcbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSwgcmVjb21tZW5kIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyByZXR3ZWV0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmV0d2VldEVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmV0d2VldEVycm9yXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0SWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgbWFpblBvc3RzXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSBtZT17bWV9Lz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX1cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXHJcbi8vIGltcG9ydCBmYWtlciBmcm9tICdmYWtlcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgc2luZ2xlUG9zdDogbnVsbCxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG5cclxuICAgIHJlbW92ZUJvb2ttYXJrTG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVCb29rbWFya0RvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQm9va21hcmtFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRCb29rbWFya0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQm9va21hcmtEb25lOiBmYWxzZSxcclxuICAgIGFkZEJvb2ttYXJrRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHJcbiAgIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcbiAgIFxyXG4gICBlZGl0UG9zdENvbnRlbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgZWRpdFBvc3RDb250ZW50RG9uZTogZmFsc2UsXHJcbiAgIGVkaXRQb3N0Q29udGVudEVycm9yOiBudWxsLFxyXG4gICBcclxuICAgZGVsdGVQb3N0SW1hZ2VMb2FkaW5nOiBmYWxzZSxcclxuICAgZGVsdGVQb3N0SW1hZ2VEb25lOiBmYWxzZSxcclxuICAgZGVsdGVQb3N0SW1hZ2VFcnJvcjogbnVsbCxcclxuXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PlxyXG4vLyBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICB9LFxyXG4vLyAgICAgSW1hZ2VzOiBbe1xyXG4vLyAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKVxyXG4vLyAgICAgfV0sXHJcbi8vICAgICBDb21tZW50czpbe1xyXG4vLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICAgIH1dXHJcbiAgICBcclxuLy8gfSkpXHJcbi8vIGNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgaWQ6IGRhdGEuaWQsXHJcbi8vICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbi8vICAgICBVc2VyOntcclxuLy8gICAgICAgICBpZDoxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOifsgqzsmqnsnpAyJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIEltYWdlczogW3tzcmM6XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzAxLzI0LzIwLzQ3L21vdW50YWlucy01OTQ2NTAwXzEyODAuanBnXCJ9LF0sXHJcbi8vICAgICBDb21tZW50czogWyfrjJPquIDthYzsiqTtirgnXSxcclxuLy8gfSlcclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgLi4uZGF0YSxcclxuLy8gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNUID0gJ0RFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUyA9ICdERUxFVEVfUE9TVF9JTUFHRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUgPSAnREVMRVRFX1BPU1RfSU1BR0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCA9ICdFRElUX1BPU1RfQ09OVEVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MgPSAnRURJVF9QT1NUX0NPTlRFTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFID0gJ0VESVRfUE9TVF9DT05URU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCA9ICdMT0FEX1VTRVJfQk9PS01BUktTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTID0gJ0xPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQk9PS01BUktfUkVRVUVTVCA9ICdBRERfQk9PS01BUktfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQk9PS01BUktfU1VDQ0VTUyA9ICdBRERfQk9PS01BUktfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQk9PS01BUktfRkFJTFVSRSA9ICdBRERfQk9PS01BUktfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1QgPSAnUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MgPSAnUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0JPT0tNQVJLX0ZBSUxVUkUgPSAnUkVNT1ZFX0JPT0tNQVJLX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0RmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVQb3N0SW1hZ2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5JbWFnZXMgPSBwb3N0LkltYWdlcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLkltYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9CT09LTUFSS19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkJvb2ttYXJrZXJzID0gcG9zdC5Cb29rbWFya2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9CT09LTUFSS19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lZGl0UG9zdENvbnRlbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9CT09LTUFSS19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQk9PS01BUktfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Cb29rbWFya2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0JPT0tNQVJLX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7ICBcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICBzZWFyY2hVc2VyTGlzdDogbnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIFxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgY2hhbmdlTmlja05hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tOYW1lRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrTmFtZURvbmU6IGZhbHNlLFxyXG5cclxuICAgIHNlYXJjaFVzZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgc2VhcmNoVXNlckRvbmU6IGZhbHNlLFxyXG4gICBzZWFyY2hVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbWU6IG51bGwsXHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHJlY29tbWVuZDogbnVsbCxcclxufTtcclxuICAgIC8vIGNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLy8gICAgIC4uLmRhdGEsXHJcbiAgICAvLyAgICAgbmlja25hbWU6J+uLieuEpOyehCcsXHJcbiAgICAvLyAgICAgaWQ6MSxcclxuICAgIC8vICAgICBQb3N0czpbe2lkOiAxfV0sXHJcbiAgICAvLyAgICAgRm9sbG93aW5nczpbe25pY2tuYW1lOifrtoDquLAnfSx7bmlja25hbWU6J+u2gOq4sDInfSx7bmlja25hbWU6J+u2gOq4sDMnfV0sXHJcbiAgICAvLyAgICAgRm9sbG93ZXJzOlt7bmlja25hbWU6ICdraW5nJ30sIHtuaWNrbmFtZTogJ2tpbmcxJ31dXHJcblxyXG4gICAgLy8gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFID0gJ0xPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUID0gJ0xPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVTRVQgPSAnU0lHTl9VUF9SRVNFVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgZGF0YSxcclxufSk7IFxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgIGRhdGEsXHJcbn0pOyBcclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlY29tbWVuZCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgIGNhc2UgTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVNFVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YS5pZCB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTsgXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbi8vIHRha2UsIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheVxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFERF9CT09LTUFSS19GQUlMVVJFLCBBRERfQk9PS01BUktfUkVRVUVTVCwgQUREX0JPT0tNQVJLX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIERFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUsIERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QsIERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MsIEVESVRfUE9TVF9DT05URU5UX0ZBSUxVUkUsIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QsIEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9CT09LTUFSS19GQUlMVVJFLCBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCwgUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkUsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBEZWx0ZVBvc3RJbWFnZUFwaShkYXRhKSB7IC8vaGFzaHRhZy9uYW1lXHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGEucG9zdElkfS8ke2RhdGEuaW1hZ2VJZH0vaW1hZ2VkZWxldGVgLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogRGVsdGVQb3N0SW1hZ2UoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoRGVsdGVQb3N0SW1hZ2VBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfUE9TVF9JTUFHRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX1BPU1RfSU1BR0VfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBFZGl0UG9zdENvbnRlbnRBcGkoZGF0YSkgeyAvL2hhc2h0YWcvbmFtZVxyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGEucG9zdElkfS9lZGl0YCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIEVkaXRQb3N0Q29udGVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChFZGl0UG9zdENvbnRlbnRBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQXBpKGRhdGEsIGxhc3RJZCkgeyAvL2hhc2h0YWcvbmFtZVxyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJ2xvYWRIYXNodGFnJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQXBpLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQXBpKGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQXBpLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2FkZHBvc3QnLCBkYXRhKTsgLy9mb3JtRGF0YeuKlCDrsJTroZwgZGF0YeuhnCDsoJXsnZhcclxufVxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9yZW1vdmVgKTtcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBcGksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vYWRkY29tbWVudGAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFwaSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCb29rTWFya0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vYm9va21hcmtgKTtcclxufVxyXG5mdW5jdGlvbiogYWRkQm9va01hcmsoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRCb29rTWFya0FwaSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQk9PS01BUktfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0JPT0tNQVJLX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rTWFya0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vdW5ib29rbWFya2ApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVCb29rTWFyayhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUJvb2tNYXJrQXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9CT09LTUFSS19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQk9PS01BUktfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbGlrZVBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFwaSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L3VubGlrZWApOyAvL3BhdGNoIOqyjOyLnOq4gOydmCDsnbzrtoDrtoTsnYQg7IiY7KCVXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vcGF0Y2gg6rKM7Iuc6riA7J2YIOydvOu2gOu2hOydhCDsiJjsoJVcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgLCBkYXRhKTsgLy9wYXRjaCDqsozsi5zquIDsnZgg7J2867aA67aE7J2EIOyImOyglVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hEZWx0ZVBvc3RJbWFnZSgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgzMDAwLCBERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNULCBEZWx0ZVBvc3RJbWFnZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdFBvc3RDb250ZW50KCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QsIEVkaXRQb3N0Q29udGVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQk9PS01BUktfUkVRVUVTVCwgcmVtb3ZlQm9va01hcmspO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZEJvb2ttYXJrKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0JPT0tNQVJLX1JFUVVFU1QsIGFkZEJvb2tNYXJrKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaERlbHRlUG9zdEltYWdlKSxcclxuICAgICAgICBmb3JrKHdhdGNoRWRpdFBvc3RDb250ZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQm9va21hcmspLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRCb29rbWFyayksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCB0aHJvdHRsZSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSwgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFLCBMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QsIExPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUywgTE9BRF9TRUFSQ0hfVVNFUl9GQUlMVVJFLCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QsIExPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkUsIExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCwgTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTLCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIExPQURfVVNFUl9QT1NUU19TVUNDRVNTIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQm9va21hcmtzQXBpKGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvYm9va21hcmtzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfSBgKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZEJvb2ttYXJrcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRCb29rbWFya3NBcGksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWNvbW1lbmRVc2VyQXBpKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvcmVjb21tZW5kJyk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIHJlY29tbWVuZFVzZXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZWNvbW1lbmRVc2VyQXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoVXNlckFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9saXN0P2RhdGE9JHtkYXRhIHx8IG51bGx9YCk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIHNlYXJjaFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWFyY2hVc2VyQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FwaShkYXRhLCBsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQXBpLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BcGkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2dpbicpO1xyXG59ICAgXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FwaSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL3NpZ25VcCcsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWdudXBBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBcGkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrTmFtZUFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufVxyXG5mdW5jdGlvbiogY2hhbmdlTmlja05hbWUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrTmFtZUFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vdW5mb2xsb3dgKTtcclxufVxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGZvbGxvd2Vyc0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRmb2xsb3dlcnNBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRmb2xsb3dpbmdzQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkZm9sbG93aW5nc0FwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVmb2xsb3dlckFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZWZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlZm9sbG93ZXJBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEJvb2tNYXJrcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCwgbG9hZEJvb2ttYXJrcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVjb21tZW5kVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCwgcmVjb21tZW5kVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoVXNlcigpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgzMDAwLCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QsIHNlYXJjaFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tOYW1lKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkVXNlclBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkZm9sbG93ZXJzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkZm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlZm9sbG93ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQm9va01hcmtzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVjb21tZW5kVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaFNlYXJjaFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAgICAgZm9yayh3YXRjaGxvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hsb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaGxvYWRVc2VyUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRlbHdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRlbHdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsImltcG9ydCB7ZW5hYmxlRVM1LCBwcm9kdWNlfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gICAgZW5hYmxlRVM1KCk7XHJcbiAgICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==